import { useEffect, useRef, useState, type FormEvent } from "react";
import { Building2, CheckCircle, MessageCircle, Thermometer, Wind, Zap } from "lucide-react";

import logo1 from "@/assets/logo1.png";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { saveLeadInteressado } from "@/lib/api/lead-interessados.functions";
import { trackLeadFormConversion } from "@/lib/meta-pixel";

const LEAD_SESSION_KEY = "colder_lead_session_id";
const WHATSAPP_BASE_URL = "https://wa.me/554433541269";
const DEBOUNCE_MS = 600;

const BENEFITS = [
  { icon: Zap, title: "Economia de energia" },
  { icon: Thermometer, title: "Redução de temperatura" },
  { icon: Wind, title: "Renovação constante do ar" },
  { icon: CheckCircle, title: "Projeto sob medida" },
] as const;

const inputClassName =
  "h-12 rounded-xl border-border bg-white px-4 text-base shadow-sm focus-visible:ring-2 focus-visible:ring-brand md:text-base";

function getOrCreateLeadSessionId(): string {
  const existing = sessionStorage.getItem(LEAD_SESSION_KEY);
  if (existing) {
    return existing;
  }

  const sessionId = crypto.randomUUID();
  sessionStorage.setItem(LEAD_SESSION_KEY, sessionId);
  return sessionId;
}

function buildWhatsAppMessage(data: {
  nome: string;
  empresa: string;
  telefone: string;
  ambiente: string;
}): string {
  return [
    "Olá, tenho interesse em climatizar meu ambiente com a Colder.",
    "",
    `Nome: ${data.nome}`,
    `Empresa/Instituição: ${data.empresa}`,
    `Telefone: ${data.telefone}`,
    `Ambiente: ${data.ambiente}`,
    "",
    "Quero receber uma orientação/orçamento.",
  ].join("\n");
}

function hasAnyFieldContent(data: {
  nome: string;
  empresa: string;
  telefone: string;
  ambiente: string;
}): boolean {
  return [data.nome, data.empresa, data.telefone, data.ambiente].some(
    (value) => value.trim().length > 0,
  );
}

export function ColderLeadForm() {
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [telefone, setTelefone] = useState("");
  const [ambiente, setAmbiente] = useState("");
  const [formError, setFormError] = useState("");
  const [sessionId, setSessionId] = useState("");

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setSessionId(getOrCreateLeadSessionId());
  }, []);

  useEffect(() => {
    if (!sessionId) {
      return;
    }

    const formData = { nome, empresa, telefone, ambiente };
    if (!hasAnyFieldContent(formData)) {
      return;
    }

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      void saveLeadInteressado({
        data: {
          sessionId,
          nome,
          empresa,
          telefone,
          ambiente,
          status: "draft",
        },
      }).catch(() => {
        // Silent failure — lead capture must not block the form UX.
      });
    }, DEBOUNCE_MS);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [sessionId, nome, empresa, telefone, ambiente]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");

    if (!nome.trim() || !empresa.trim() || !telefone.trim() || !ambiente.trim()) {
      setFormError("Preencha todos os campos obrigatórios para continuar.");
      return;
    }

    const payload = {
      nome: nome.trim(),
      empresa: empresa.trim(),
      telefone: telefone.trim(),
      ambiente: ambiente.trim(),
    };

    if (sessionId) {
      void saveLeadInteressado({
        data: {
          sessionId,
          ...payload,
          status: "whatsapp_clicked",
        },
      }).catch(() => {
        // Silent failure — WhatsApp redirect still proceeds.
      });
    }

    trackLeadFormConversion();

    const message = buildWhatsAppMessage(payload);
    window.location.href = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
  }

  return (
    <section
      className="px-4 pb-10 pt-[4.25rem] lg:section-pad lg:px-0 lg:pb-16 lg:pt-28"
      style={{
        background: "linear-gradient(180deg, white 0%, var(--color-brand-soft) 100%)",
      }}
    >
      <div className="container-page">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-start lg:gap-14">
          <div className="order-1 w-full lg:order-2 lg:sticky lg:top-28">
            <div className="card-soft w-full rounded-2xl p-5 sm:p-8">
              <div className="mb-4 flex justify-center sm:mb-6">
                <img
                  src={logo1}
                  alt="Colder Climatizadores"
                  width={180}
                  height={45}
                  className="h-10 w-auto sm:h-12"
                />
              </div>

              <div className="text-center">
                <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                  Solicite seu orçamento
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:mt-2 sm:text-base">
                  Preencha os dados e fale diretamente com a equipe Colder pelo WhatsApp.
                </p>
              </div>

              <form
                className="mt-5 space-y-4 sm:mt-8 sm:space-y-5"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="space-y-2">
                  <Label htmlFor="lead-nome">Nome</Label>
                  <Input
                    id="lead-nome"
                    name="nome"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Seu nome"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                    className={inputClassName}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lead-empresa">Nome da Empresa/Instituição</Label>
                  <Input
                    id="lead-empresa"
                    name="empresa"
                    type="text"
                    required
                    autoComplete="organization"
                    placeholder="Ex: Igreja Central, Clínica São Lucas, Indústria ABC"
                    value={empresa}
                    onChange={(event) => setEmpresa(event.target.value)}
                    className={inputClassName}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lead-telefone">Telefone de contato</Label>
                  <Input
                    id="lead-telefone"
                    name="telefone"
                    type="tel"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="(44) 99999-9999"
                    value={telefone}
                    onChange={(event) => setTelefone(event.target.value)}
                    className={inputClassName}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lead-ambiente">Tipo de ambiente que deseja climatizar</Label>
                  <Textarea
                    id="lead-ambiente"
                    name="ambiente"
                    required
                    rows={4}
                    placeholder="Ex: salão da igreja, galpão industrial, recepção da clínica, área de atendimento..."
                    value={ambiente}
                    onChange={(event) => setAmbiente(event.target.value)}
                    className="min-h-[120px] rounded-xl border-border bg-white px-4 py-3 text-base shadow-sm focus-visible:ring-2 focus-visible:ring-brand md:text-base"
                  />
                </div>

                {formError ? (
                  <p className="rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                    {formError}
                  </p>
                ) : null}

                <button type="submit" className="btn-primary w-full py-3.5 text-base">
                  <MessageCircle className="h-5 w-5" aria-hidden />
                  Conversar no WhatsApp
                </button>

                <p className="text-center text-sm text-muted-foreground">
                  Resposta rápida pelo WhatsApp.
                </p>
              </form>
            </div>
          </div>

          <div className="order-2 max-w-xl lg:order-1">
            <span className="eyebrow">Climatização industrial e empresarial</span>
            <h1 className="mt-3 text-2xl font-extrabold leading-tight text-foreground sm:mt-4 sm:text-3xl lg:text-[2.5rem]">
              Climatize seu ambiente com mais economia e eficiência
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base lg:text-lg">
              A Colder ajuda empresas, igrejas, indústrias e instituições a reduzirem a temperatura
              do ambiente com soluções de climatização evaporativa de alta performance.
            </p>

            <ul className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
              {BENEFITS.map(({ icon: Icon, title }) => (
                <li key={title} className="flex items-start gap-3">
                  <div
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-lg"
                    style={{ background: "var(--color-brand-soft)" }}
                  >
                    <Icon className="h-5 w-5" style={{ color: "var(--color-brand)" }} />
                  </div>
                  <span className="pt-2 text-sm font-medium text-foreground sm:text-base">
                    {title}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground sm:mt-8 sm:text-base">
              <Building2
                className="mt-0.5 h-5 w-5 shrink-0"
                style={{ color: "var(--color-brand)" }}
                aria-hidden
              />
              Atendimento especializado para ambientes comerciais, industriais e institucionais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
