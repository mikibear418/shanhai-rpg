-- Supabase SQL Editor 唯讀診斷；不新增或刪除任何成績。
select column_name, data_type, is_nullable from information_schema.columns
where table_schema='public' and table_name='shanhai_scores' order by ordinal_position;
select conname, pg_get_constraintdef(oid) from pg_constraint
where conrelid=to_regclass('public.shanhai_scores');
select relrowsecurity from pg_class where oid=to_regclass('public.shanhai_scores');
select policyname,roles,cmd,qual,with_check from pg_policies
where schemaname='public' and tablename='shanhai_scores';
select rolname,
 has_table_privilege(rolname,'public.shanhai_scores','SELECT') as can_read,
 has_table_privilege(rolname,'public.shanhai_scores','INSERT') as can_add,
 has_table_privilege(rolname,'public.shanhai_scores','UPDATE') as can_update,
 has_table_privilege(rolname,'public.shanhai_scores','DELETE') as can_delete
from pg_roles where rolname in ('anon','authenticated');
select tgname,pg_get_triggerdef(oid) from pg_trigger
where tgrelid=to_regclass('public.shanhai_scores') and not tgisinternal;
-- 預期：RLS=true，兩角色 SELECT/INSERT=true，UPDATE/DELETE=false；
-- 有 read/add policies、run_id 主鍵與 before_score_insert/trim_scores triggers。
