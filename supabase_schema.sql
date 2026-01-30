-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- PROFILES (Users)
create table profiles (
  id uuid references auth.users not null primary key,
  email text,
  full_name text,
  avatar_url text,
  role text check (role in ('user', 'admin')) default 'user',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for profiles
alter table profiles enable row level security;
create policy "Public profiles are viewable by everyone." on profiles for select using (true);
create policy "Users can insert their own profile." on profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile." on profiles for update using (auth.uid() = id);

-- PRODUCTS
create table products (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  price decimal(10,2) not null,
  category text not null, -- '3d_model', 'software', 'thumbnail', 'template'
  file_url text, -- Secure URL to the digital asset
  thumbnail_url text, -- Public URL for preview
  is_featured boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for products
alter table products enable row level security;
create policy "Products are viewable by everyone." on products for select using (true);
create policy "Only admins can insert products." on products for insert with check (exists (select 1 from profiles where id = auth.uid() and role = 'admin'));
create policy "Only admins can update products." on products for update using (exists (select 1 from profiles where id = auth.uid() and role = 'admin'));
create policy "Only admins can delete products." on products for delete using (exists (select 1 from profiles where id = auth.uid() and role = 'admin'));

-- ORDERS
create table orders (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references profiles(id) not null,
  total_amount decimal(10,2) not null,
  status text check (status in ('pending_payment', 'processing', 'completed', 'cancelled')) default 'pending_payment',
  payment_proof text, -- URL to screenshot or Transaction ID text
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for orders
alter table orders enable row level security;
create policy "Users can view their own orders." on orders for select using (auth.uid() = user_id);
create policy "Admins can view all orders." on orders for select using (exists (select 1 from profiles where id = auth.uid() and role = 'admin'));
create policy "Users can create orders." on orders for insert with check (auth.uid() = user_id);
create policy "Admins can update orders." on orders for update using (exists (select 1 from profiles where id = auth.uid() and role = 'admin'));

-- ORDER ITEMS (Linking Products to Orders)
create table order_items (
  id uuid default uuid_generate_v4() primary key,
  order_id uuid references orders(id) on delete cascade not null,
  product_id uuid references products(id) not null,
  price_at_purchase decimal(10,2) not null
);

-- Enable RLS for order_items
alter table order_items enable row level security;
create policy "Users can view their own order items." on order_items for select using (exists (select 1 from orders where orders.id = order_items.order_id and orders.user_id = auth.uid()));
create policy "Admins can view all order items." on order_items for select using (exists (select 1 from profiles where id = auth.uid() and role = 'admin'));
create policy "Users can insert order items." on order_items for insert with check (exists (select 1 from orders where orders.id = order_items.order_id and orders.user_id = auth.uid()));

-- COUPONS
create table coupons (
  code text primary key,
  discount_percent integer check (discount_percent > 0 and discount_percent <= 100),
  is_active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS for coupons
alter table coupons enable row level security;
create policy "Active coupons are viewable by everyone." on coupons for select using (is_active = true);
create policy "Only admins can manage coupons." on coupons for all using (exists (select 1 from profiles where id = auth.uid() and role = 'admin'));

-- STORAGE BUCKETS (Script to run in SQL Editor to set up storage if needed, though usually done via UI)
-- insert into storage.buckets (id, name, public) values ('products', 'products', false);
-- insert into storage.buckets (id, name, public) values ('thumbnails', 'thumbnails', true);
-- insert into storage.buckets (id, name, public) values ('payment_proofs', 'payment_proofs', false);
