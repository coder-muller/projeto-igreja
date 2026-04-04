export interface ScheduleItem {
  time: string;
  period: string;
  speaker: string;
  topic: string;
  description: string;
  tag: string;
}

export interface ScheduleDay {
  label: string;
  items: ScheduleItem[];
}

export const schedule: ScheduleDay[] = [
  {
    label: "Sábado · 12 de Abril",
    items: [
      {
        time: "09h",
        period: "manhã",
        speaker: "Entrada",
        topic: '"Acolhimento e Organização"',
        description: "Recepção e acolhimento dos participantes do Seminário de Homens.",
        tag: "Entrada",
      },
      {
        time: "09:30h",
        period: "manhã",
        speaker: "Irmão Pablo Borges",
        topic: '"Organização Financeira — Traz Paz Espiritual"',
        description: "Pregação sobre finanças pessoais e familiar, equipando o homem cristão para uma vida financeira sbia e abençoada.",
        tag: "Pregação",
      },
      {
        time: "12h",
        period: "tarde",
        speaker: "Almoço",
        topic: '"Confraternização Fraterna"',
        description: "Almoço comunitário com os irmãos para comunhão e partilha.",
        tag: "Almoço",
      },
      {
        time: "14h",
        period: "tarde",
        speaker: "Irmão Rossê",
        topic: '"Palavra e Testemunho"',
        description: "Ministraçao da palavra para fortalecimento espiritual e capacitação para a missão cristã.",
        tag: "Pregação",
      },
      {
        time: "15h",
        period: "tarde",
        speaker: "Irmão Maico Avila",
        topic: '"Fé em Ação"',
        description: "Pregação com testemunho poderoso sobre o poder transformador de Cristo na vida do homem.",
        tag: "Pregação",
      },
      {
        time: "16:30h",
        period: "tarde",
        speaker: "Café",
        topic: '"Descanso e Comunhão"',
        description: "Café comunitário - momento de confraternização e comunhão entre os irmãos.",
        tag: "Coffee Break",
      },
    ],
  },
];
