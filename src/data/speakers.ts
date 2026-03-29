import pabloBorgesImg from "../assets/IrmãoPabloBorges.jpeg";
import rossêImg from "../assets/IrmãoRossê.jpeg";
import maicoAvilaImg from "../assets/IrmãoMaicoAvila.jpeg";

export interface Speaker {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export const speakers: Speaker[] = [
  {
    name: "Irmão Pablo Borges",
    role: "Ministério Finanças",
    bio: "Especialista em organização financeira pessoal e familiar, com experiência em educação financeira cristã. Dedicado a ensinar homens a gerenciar sábia e biblicamente suas finanças.",
    image: pabloBorgesImg,
  },
  {
    name: "Irmão Maico Avila",
    role: "Ministério Pregação",
    bio: "Evangelista com fervor pela palavra de Deus e dedicação ao reino de Cristo. Traz testemunho poderoso de fé e compromisso com a missão cristã.",
    image: maicoAvilaImg,
  },
  {
    name: "Irmão Rossê",
    role: "Ministério Palavra",
    bio: "Homem de Deus dedicado ao ensino da palavra com sabedoria e unção do Espírito Santo. Ministra com poder transformador para equipar os homens no seu chamado.",
    image: rossêImg,
  },
];
