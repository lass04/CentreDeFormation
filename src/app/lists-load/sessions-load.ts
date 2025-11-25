import { candidats } from './candidats-load';
import { Session } from "../interfaces/session";
import { formations } from "./formations-load";
import { formateurs } from "./formateurs-load";


// 2 Sessions pour chaque formation

export const sessions: Session[] = [
  
  {
    id: 1,
    date_debut: '2026-01-10',
    date_fin: '2026-01-15',
    formateur: formateurs[0],
    formation: formations[0],
    candidats_inscrits: [candidats[1],candidats[2]],
    description: "Session d'initiation à la programmation pour débutants",
    complet:false
  },
  {
    id: 2,
    date_debut: '2026-02-05',
    date_fin: '2026-02-10',
    formateur: formateurs[1],
    formation: formations[0],
    candidats_inscrits: [candidats[0],candidats[3]],
    description: "Deuxième session d'initiation à la programmation",
    complet:false
  },

  
  {
    id: 3,
    date_debut: '2026-03-01',
    date_fin: '2026-03-07',
    formateur: formateurs[2],
    formation: formations[1],
    candidats_inscrits: [candidats[4],candidats[1]],
    description: "Session de développement web front-end",
    complet:false
  },
  {
    id: 4,
    date_debut: '2026-04-10',
    date_fin: '2026-04-16',
    formateur: formateurs[3],
    formation: formations[1],
    candidats_inscrits: [candidats[8],candidats[5]],
    description: "Deuxième session front-end pour débutants/intermédiaires",
    complet:false
  },

  
  {
    id: 5,
    date_debut: '2026-05-05',
    date_fin: '2026-05-12',
    formateur: formateurs[4],
    formation: formations[2],
    candidats_inscrits: [candidats[7],candidats[9]],
    description: "Session back-end Node.js et gestion de bases de données",
    complet:false
  },
  {
    id: 6,
    date_debut: '2026-06-01',
    date_fin: '2026-06-08',
    formateur: formateurs[5],
    formation: formations[2],
    candidats_inscrits: [candidats[0],candidats[6]],
    description: "Deuxième session back-end pour développeurs intermédiaires",
    complet:false
  },

  
  {
    id: 7,
    date_debut: '2026-07-05',
    date_fin: '2026-07-10',
    formateur: formateurs[6],
    formation: formations[3],
    candidats_inscrits: [candidats[6],candidats[8]],
    description: "Session SQL et bases de données relationnelles",
    complet:false
  },
  {
    id: 8,
    date_debut: '2026-08-01',
    date_fin: '2026-08-06',
    formateur: formateurs[7],
    formation: formations[3],
    candidats_inscrits: [candidats[7],candidats[3]],
    description: "Deuxième session SQL pour débutants",
    complet:false
  },

  
  {
    id: 9,
    date_debut: '2026-09-05',
    date_fin: '2026-09-12',
    formateur: formateurs[0],
    formation: formations[4],
    candidats_inscrits: [candidats[5],candidats[9]],
    description: "Session Flutter pour le développement mobile",
    complet:false
  },
  {
    id: 10,
    date_debut: '2026-10-01',
    date_fin: '2026-10-08',
    formateur: formateurs[1],
    formation: formations[4],
   candidats_inscrits: [candidats[6],candidats[4]],
    description: "Deuxième session mobile multiplateforme Flutter",
    complet:false
  },

  
  {
    id: 11,
    date_debut: '2026-11-05',
    date_fin: '2026-11-12',
    formateur: formateurs[2],
    formation: formations[5],
    candidats_inscrits: [candidats[1],candidats[2]],
    description: "Administration systèmes Linux",
    complet:false
  },
  {
    id: 12,
    date_debut: '2026-12-01',
    date_fin: '2026-12-08',
    formateur: formateurs[3],
    formation: formations[5],
    candidats_inscrits: [candidats[5],candidats[0]],
    description: "Deuxième session administration Linux",
    complet:false
  },

  
  {
    id: 13,
    date_debut: '2026-01-05',
    date_fin: '2026-01-12',
    formateur: formateurs[4],
    formation: formations[6],
    candidats_inscrits: [candidats[7],candidats[2]],
    description: "Introduction à la cybersécurité",
    complet:false
  },
  {
    id: 14,
    date_debut: '2026-02-01',
    date_fin: '2026-02-08',
    formateur: formateurs[5],
    formation: formations[6],
    candidats_inscrits: [candidats[5],candidats[3]],
    description: "Deuxième session fondamentaux cybersécurité",
    complet:false
  },

  
  {
    id: 15,
    date_debut: '2026-03-05',
    date_fin: '2026-03-12',
    formateur: formateurs[6],
    formation: formations[7],
    candidats_inscrits: [candidats[7],candidats[9]],
    description: "Intelligence artificielle et machine learning",
    complet:false
  },
  {
    id: 16,
    date_debut: '2026-04-01',
    date_fin: '2026-04-08',
    formateur: formateurs[7],
    formation: formations[7],
    candidats_inscrits: [candidats[1],candidats[2]],
    description: "Deuxième session IA et ML",
    complet:false
  },

  
  {
    id: 17,
    date_debut: '2026-05-05',
    date_fin: '2026-05-12',
    formateur: formateurs[0],
    formation: formations[8],
    candidats_inscrits: [candidats[0],candidats[9]],
    description: "Session UX/UI design",
    complet:false
  },
  {
    id: 18,
    date_debut: '2026-06-01',
    date_fin: '2026-06-08',
    formateur: formateurs[1],
    formation: formations[8],
    candidats_inscrits: [candidats[8],candidats[6]],
    description: "Deuxième session design UX/UI",
    complet:false
  },

  {
    id: 19,
    date_debut: '2026-07-05',
    date_fin: '2026-07-12',
    formateur: formateurs[2],
    formation: formations[9],
    candidats_inscrits: [candidats[4],candidats[1]],
    description: "Session réseaux informatiques",
    complet:false
  },
  {
    id: 20,
    date_debut: '2026-08-01',
    date_fin: '2026-08-08',
    formateur: formateurs[3],
    formation: formations[9],
    candidats_inscrits: [candidats[1],candidats[2]],
    description: "Deuxième session réseaux",
    complet:false
  },
];
