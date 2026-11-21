// Facts that read the same in every language. Roles and bullets are translated in
// src/i18n/ui.ts under `experience.<id>.*`.
//
// Dates are "YYYY-MM" strings (or "YYYY" for education): enough to format per locale and
// to compute how deep each layer sits, without time zones getting in the way.
export type JobId = "roomieland" | "oracle" | "toshiba";

/** Token the stratum's band is drawn with; one per layer so neighbours read apart. */
export type Band = "moss" | "ochre" | "oxide";

export interface Job {
    id: JobId;
    org: string;
    start: string;
    end: string;
    band: Band;
    /** Paid client work rather than a staff position. */
    freelance?: boolean;
}

/** Newest first: the top layer of the strata. Each job has two bullets in ui.ts. */
export const jobs: Job[] = [
    {
        id: "roomieland",
        org: "Roomieland",
        start: "2025-11",
        end: "2026-05",
        band: "moss",
        freelance: true,
    },
    { id: "oracle", org: "Oracle", start: "2025-02", end: "2025-08", band: "ochre" },
    { id: "toshiba", org: "Toshiba GCS", start: "2024-07", end: "2025-02", band: "oxide" },
];

/** Still in progress, so it sits under every job as bedrock instead of as the oldest layer. */
export const education = {
    org: "ITESO",
    orgFull: "Instituto Tecnológico y de Estudios Superiores de Occidente",
    start: "2022",
    end: "2027",
} as const;
