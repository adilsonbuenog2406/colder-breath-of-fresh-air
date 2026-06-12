import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { getSupabaseServerClient } from "../supabase.server";

const leadInteressadoSchema = z.object({
  sessionId: z.string().uuid(),
  nome: z.string().optional(),
  empresa: z.string().optional(),
  telefone: z.string().optional(),
  ambiente: z.string().optional(),
  status: z.enum(["draft", "whatsapp_clicked"]).optional(),
});

function hasLeadContent(data: z.infer<typeof leadInteressadoSchema>): boolean {
  return [data.nome, data.empresa, data.telefone, data.ambiente].some(
    (value) => typeof value === "string" && value.trim().length > 0,
  );
}

export const saveLeadInteressado = createServerFn({ method: "POST" })
  .validator(leadInteressadoSchema)
  .handler(async ({ data }) => {
    if (!hasLeadContent(data)) {
      return { ok: false as const, reason: "empty" as const };
    }

    const supabase = getSupabaseServerClient();
    if (!supabase) {
      console.warn("[saveLeadInteressado] Supabase env vars are not configured.");
      return { ok: false as const, reason: "not_configured" as const };
    }

    const payload = {
      session_id: data.sessionId,
      nome: data.nome?.trim() || null,
      empresa: data.empresa?.trim() || null,
      telefone: data.telefone?.trim() || null,
      ambiente: data.ambiente?.trim() || null,
      status: data.status ?? "draft",
      source_page: "/formulario-interessados",
    };

    const { error } = await supabase
      .from("lead_interessados")
      .upsert(payload, { onConflict: "session_id" });

    if (error) {
      console.error("[saveLeadInteressado]", error.message);
      return { ok: false as const, reason: "db_error" as const };
    }

    return { ok: true as const };
  });
