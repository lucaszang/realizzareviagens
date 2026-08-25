import { destinations, siteConfig } from "@/lib/site";

export const tourDestinations = [
  ...destinations.map((item) => ({ id: item.slug, label: item.title })),
  { id: "disney", label: "Disney Orlando" },
  { id: "jerusalem", label: "Jerusalém" },
  { id: "tailandia", label: "Tailândia" },
  { id: "nao-sei", label: "Ainda não sei" },
  { id: "outro", label: "Outro destino" },
];

export const tourWhen = [
  { id: "flexivel", label: "Datas flexíveis" },
  { id: "3-meses", label: "Nos próximos 3 meses" },
  { id: "6-meses", label: "Nos próximos 6 meses" },
  { id: "1-ano", label: "Daqui a 1 ano" },
  { id: "datas", label: "Já tenho datas" },
];

export const tourStyles = [
  { id: "relax", label: "Relax" },
  { id: "diversao", label: "Diversão" },
  { id: "comida", label: "Gastronomia" },
  { id: "familia", label: "Família" },
  { id: "lua-de-mel", label: "Lua de mel" },
  { id: "cultura", label: "Cultura e cidades" },
];

export const tourBudgets = [
  { id: "ate-5", label: "Até R$ 5 mil" },
  { id: "5-10", label: "R$ 5 mil a R$ 10 mil" },
  { id: "10-20", label: "R$ 10 mil a R$ 20 mil" },
  { id: "20-40", label: "R$ 20 mil a R$ 40 mil" },
  { id: "acima-40", label: "Acima de R$ 40 mil" },
  { id: "aberto", label: "Ainda não defini" },
];

export type TourAnswers = {
  destination: string;
  destinationOther: string;
  when: string;
  dates: string;
  adults: number;
  children: number;
  style: string;
  budget: string;
  name: string;
  phone: string;
  notes: string;
};

export const emptyTourAnswers: TourAnswers = {
  destination: "",
  destinationOther: "",
  when: "",
  dates: "",
  adults: 2,
  children: 0,
  style: "",
  budget: "",
  name: "",
  phone: "",
  notes: "",
};

export function maskPhoneBR(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (!digits) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function labelOf(
  options: { id: string; label: string }[],
  id: string,
  fallback = "Não informado",
) {
  return options.find((item) => item.id === id)?.label ?? fallback;
}

export function buildTourBriefing(answers: TourAnswers) {
  const destination =
    answers.destination === "outro" && answers.destinationOther.trim()
      ? answers.destinationOther.trim()
      : labelOf(tourDestinations, answers.destination);

  const when =
    answers.when === "datas" && answers.dates.trim()
      ? answers.dates.trim()
      : labelOf(tourWhen, answers.when);

  const travelers = [
    `${answers.adults} ${answers.adults === 1 ? "adulto" : "adultos"}`,
    answers.children > 0
      ? `${answers.children} ${answers.children === 1 ? "criança" : "crianças"}`
      : null,
  ]
    .filter(Boolean)
    .join(", ");

  const lines = [
    `Olá! Vim pelo site da ${siteConfig.name} e quero montar uma viagem.`,
    "",
    `Nome: ${answers.name.trim() || "Não informado"}`,
    answers.phone.trim() ? `Telefone: ${answers.phone.trim()}` : null,
    `Destino: ${destination}`,
    `Quando: ${when}`,
    `Quem viaja: ${travelers}`,
    `Ritmo: ${labelOf(tourStyles, answers.style)}`,
    `Orçamento: ${labelOf(tourBudgets, answers.budget)}`,
    answers.notes.trim() ? `Observações: ${answers.notes.trim()}` : null,
    "",
    "Podem montar um roteiro com base nisso?",
  ].filter((line) => line !== null);

  return lines.join("\n");
}
