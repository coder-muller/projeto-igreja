export interface Speaker {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export const speakers: Speaker[] = [
  {
    name: "Pastor João Silva",
    role: "Igreja Vida Nova · São Paulo",
    bio: "Fundador da Igreja Vida Nova, com mais de 20 anos no ministério de ensino bíblico e discipulado.",
  },
  {
    name: "Pastora Maria Costa",
    role: "Ministério Ágape · Rio de Janeiro",
    bio: "Ministra com foco em família e cura interior. Autora de três livros sobre restauração espiritual.",
  },
  {
    name: "Pr. André Ferreira",
    role: "Casa de Deus · Curitiba",
    bio: "Evangelista e missionário com obra em mais de 15 países e forte unção em sinais e maravilhas.",
  },
];
