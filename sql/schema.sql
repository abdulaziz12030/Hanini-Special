create table if not exists public.categories (
  id text primary key,
  title text not null,
  short_description text,
  long_description text,
  pricing_hint text,
  created_at timestamp with time zone default now()
);

create table if not exists public.products (
  id text primary key,
  category_id text references public.categories(id) on delete cascade,
  name text not null,
  description text,
  image text,
  base_price numeric,
  featured boolean default false,
  created_at timestamp with time zone default now()
);

create table if not exists public.product_variants (
  id bigint generated always as identity primary key,
  product_id text references public.products(id) on delete cascade,
  label text not null,
  size text,
  price numeric not null
);

create table if not exists public.subscription_plans (
  id text primary key,
  title text not null,
  description text,
  monthly_price numeric not null,
  created_at timestamp with time zone default now()
);

create table if not exists public.orders (
  id bigint generated always as identity primary key,
  customer_name text not null,
  phone text,
  items jsonb,
  notes text,
  status text default 'new',
  total_amount numeric,
  created_at timestamp with time zone default now()
);

create table if not exists public.subscriptions (
  id bigint generated always as identity primary key,
  customer_name text not null,
  phone text,
  plan_id text,
  selected_meals text,
  status text default 'active',
  created_at timestamp with time zone default now()
);

alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.product_variants enable row level security;
alter table public.subscription_plans enable row level security;
alter table public.orders enable row level security;
alter table public.subscriptions enable row level security;

create policy "Public read categories" on public.categories for select using (true);
create policy "Public read products" on public.products for select using (true);
create policy "Public read variants" on public.product_variants for select using (true);
create policy "Public read plans" on public.subscription_plans for select using (true);
