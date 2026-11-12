-- 驗證只在新建的空排行榜執行，所有測試成績最後回滾，不留下紀錄。
begin;
do $v$ begin
 if exists (select 1 from public.shanhai_scores) then
  raise exception '排行榜已有成績，停止空資料庫測試';
 end if;
end; $v$;
set local role anon;
insert into public.shanhai_scores
(run_id,player_name,character_name,ending_type,clear_time_ms,clues_collected)
select 'verify_'||ending||'_'||i,'連線驗證','澤見蒼真',ending,100000+i*1000,
case when ending='good' then 3 else 1 end
from (values ('good'),('normal')) as e(ending) cross join generate_series(1,22) as s(i);
reset role;
do $v$ begin
 if (select count(*) from public.shanhai_scores where ending_type='good')<>15
 or (select count(*) from public.shanhai_scores where ending_type='normal')<>15 then
 raise exception '每榜15筆限制驗證失敗'; end if;
 if exists(select 1 from public.shanhai_scores where clear_time_ms>115000) then
 raise exception '較慢紀錄沒有被清除'; end if;
end; $v$;
set local role anon;
insert into public.shanhai_scores (run_id,player_name,character_name,ending_type,clear_time_ms,clues_collected)
values ('verify_new_fast','更快紀錄','澤見蒼真','good',50000,3);
reset role;
do $v$ begin
 if exists(select 1 from public.shanhai_scores where run_id='verify_good_15') then
 raise exception '第15名沒有被擠下'; end if;
end; $v$;
select ending_type,count(*) as retained,min(clear_time_ms) as fastest,max(clear_time_ms) as slowest
from public.shanhai_scores group by ending_type order by ending_type;
rollback;
select
 (select count(*) from public.shanhai_scores) as rows_after_rollback,
 has_table_privilege('anon','public.shanhai_scores','SELECT') as can_read,
 has_table_privilege('anon','public.shanhai_scores','INSERT') as can_add,
 has_table_privilege('anon','public.shanhai_scores','UPDATE') as can_update,
 has_table_privilege('anon','public.shanhai_scores','DELETE') as can_delete;
