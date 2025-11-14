create table if not exists users (id text primary key, email text, created_at timestamptz default now());
create table if not exists user_roles (user_id text primary key references users(id) on delete cascade, role text not null check (role in ('user','core','daily','max','support','admin')) default 'user', updated_at timestamptz default now());
create table if not exists subscriptions (user_id text primary key references users(id) on delete cascade, status text not null, plan text, stripe_customer_id text, stripe_subscription_id text, current_period_start timestamptz, current_period_end timestamptz, cancel_at_period_end boolean default false, trial_ends_at timestamptz, updated_at timestamptz default now());
create unique index if not exists idx_subs_stripe_sub on subscriptions(stripe_subscription_id);
create table if not exists files (id bigserial primary key, user_id text not null references users(id) on delete cascade, key text not null, size bigint, created_at timestamptz default now());
create index if not exists idx_files_user on files(user_id);
create or replace function effective_role(p_role text, p_plan text) returns text language sql immutable as $$ select (case when p_role in ('admin','support') then p_role when p_plan in ('max','daily','core') then p_plan else coalesce(p_role,'user') end); $$;
