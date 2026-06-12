-- Lead capture for /formulario-interessados
-- Writes happen server-side via service role (createServerFn).

create table if not exists public.lead_interessados (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null unique,
  nome text,
  empresa text,
  segmento text,
  telefone text,
  ambiente text,
  status text not null default 'draft'
    check (status in ('draft', 'whatsapp_clicked')),
  source_page text not null default '/formulario-interessados',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists lead_interessados_status_idx
  on public.lead_interessados (status);

create index if not exists lead_interessados_created_at_idx
  on public.lead_interessados (created_at desc);

create or replace function public.set_lead_interessados_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists lead_interessados_updated_at on public.lead_interessados;

create trigger lead_interessados_updated_at
  before update on public.lead_interessados
  for each row
  execute function public.set_lead_interessados_updated_at();

alter table public.lead_interessados enable row level security;

-- No public policies: anon/authenticated clients cannot read or write.
-- Server-side service role bypasses RLS for upserts.
