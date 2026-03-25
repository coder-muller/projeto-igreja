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
    label: "Sábado · 26 de Abril",
    items: [
      {
        time: "09h",
        period: "manhã",
        speaker: "Pastor João Silva",
        topic: '"Avivamento começa em você"',
        description:
          "O despertar espiritual pessoal como ponto de partida para a transformação comunitária.",
        tag: "Abertura",
      },
      {
        time: "14h",
        period: "tarde",
        speaker: "Pastora Maria Costa",
        topic: '"Família restaurada, nação transformada"',
        description:
          "A restauração do núcleo familiar como base para um Brasil renovado na fé.",
        tag: "Ensinamento",
      },
      {
        time: "19h",
        period: "noite",
        speaker: "Pr. André Ferreira",
        topic: '"O poder do Espírito Santo"',
        description:
          "Culto de louvor e pregação sobre os dons espirituais, com momento especial de oração.",
        tag: "Culto",
      },
    ],
  },
  {
    label: "Domingo · 27 de Abril",
    items: [
      {
        time: "10h",
        period: "manhã",
        speaker: "Todos os Palestrantes",
        topic: '"Culto de Encerramento"',
        description:
          "Grande culto final com participação de todos os ministros, bênção e envio missionário.",
        tag: "Encerramento",
      },
    ],
  },
];
