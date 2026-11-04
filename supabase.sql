begin;
-- Supabase SQL Editor：建立公開教學用共用排行榜。僅供讀取／新增，不開放修改或刪除。
-- 此版是可信班級的休閒榜，前端計時可被修改，不適合獎金或正式競賽。
create table if not exists public.shanhai_scores (
  run_id text primary key check (char_length(run_id) between 8 and 120),
  player_name text not null check (char_length(player_name) between 1 and 12),
  character_name text not null check (character_name in ('澤見蒼真','霆野昴','野嶺牙','蝶宮澪','霧島凪','花守鈴','緋月朔','赤城烈','冬城白夜','月代玄夜')),
  ending_type text not null check (ending_type in ('good','normal')),
  clear_time_ms integer not null check (clear_time_ms between 1 and 86400000),
  clues_collected integer not null check (clues_collected between 0 and 3),
  created_at timestamptz not null default now(),
  constraint good_needs_clues check (ending_type <> 'good' or clues_collected = 3)
);
create index if not exists shanhai_scores_time_idx on public.shanhai_scores(ending_type,clear_time_ms,created_at);
alter table public.shanhai_scores enable row level security;
revoke all on public.shanhai_scores from anon,authenticated;
grant select,insert on public.shanhai_scores to anon,authenticated;
drop policy if exists shanhai_scores_read on public.shanhai_scores;
drop policy if exists shanhai_scores_add on public.shanhai_scores;
create policy shanhai_scores_read on public.shanhai_scores for select to anon,authenticated using (true);
create policy shanhai_scores_add on public.shanhai_scores for insert to anon,authenticated with check (
  ending_type in ('good','normal') and clear_time_ms between 1 and 86400000 and clues_collected between 0 and 3
);

-- 每種結局僅保留最快15筆（總上限30），資料庫強制執行。
-- 在新增前以交易鎖序列化寫入，避免多人同時送出時超過上限。
create or replace function public.shanhai_before_score_insert()
returns trigger language plpgsql security definer set search_path = pg_catalog as $fn$
begin
  perform pg_catalog.pg_advisory_xact_lock(41730015);
  new.created_at := pg_catalog.clock_timestamp();
  return new;
end;
$fn$;
create or replace function public.shanhai_trim_scores()
returns trigger language plpgsql security definer set search_path = pg_catalog as $fn$
begin
  delete from public.shanhai_scores as scores using (
    select run_id, row_number() over (
      partition by ending_type order by clear_time_ms asc, created_at asc, run_id asc
    ) as rn from public.shanhai_scores
  ) as ranked where scores.run_id=ranked.run_id and ranked.rn>15;
  return null;
end;
$fn$;
revoke all on function public.shanhai_before_score_insert() from public,anon,authenticated;
revoke all on function public.shanhai_trim_scores() from public,anon,authenticated;
drop trigger if exists shanhai_before_score_insert on public.shanhai_scores;
create trigger shanhai_before_score_insert before insert on public.shanhai_scores
for each row execute function public.shanhai_before_score_insert();
drop trigger if exists shanhai_trim_scores on public.shanhai_scores;
create trigger shanhai_trim_scores after insert on public.shanhai_scores
for each statement execute function public.shanhai_trim_scores();

commit;
