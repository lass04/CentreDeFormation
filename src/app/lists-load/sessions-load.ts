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
    nbre_inscrits: 15,
    description: "Session d'initiation à la programmation pour débutants",
  },
  {
    id: 2,
    date_debut: '2026-02-05',
    date_fin: '2026-02-10',
    formateur: formateurs[1],
    formation: formations[0],
    nbre_inscrits: 12,
    description: "Deuxième session d'initiation à la programmation",
  },

  
  {
    id: 3,
    date_debut: '2026-03-01',
    date_fin: '2026-03-07',
    formateur: formateurs[2],
    formation: formations[1],
    nbre_inscrits: 20,
    description: "Session de développement web front-end",
  },
  {
    id: 4,
    date_debut: '2026-04-10',
    date_fin: '2026-04-16',
    formateur: formateurs[3],
    formation: formations[1],
    nbre_inscrits: 18,
    description: "Deuxième session front-end pour débutants/intermédiaires",
  },

  
  {
    id: 5,
    date_debut: '2026-05-05',
    date_fin: '2026-05-12',
    formateur: formateurs[4],
    formation: formations[2],
    nbre_inscrits: 16,
    description: "Session back-end Node.js et gestion de bases de données",
  },
  {
    id: 6,
    date_debut: '2026-06-01',
    date_fin: '2026-06-08',
    formateur: formateurs[5],
    formation: formations[2],
    nbre_inscrits: 14,
    description: "Deuxième session back-end pour développeurs intermédiaires",
  },

  
  {
    id: 7,
    date_debut: '2026-07-05',
    date_fin: '2026-07-10',
    formateur: formateurs[6],
    formation: formations[3],
    nbre_inscrits: 22,
    description: "Session SQL et bases de données relationnelles",
  },
  {
    id: 8,
    date_debut: '2026-08-01',
    date_fin: '2026-08-06',
    formateur: formateurs[7],
    formation: formations[3],
    nbre_inscrits: 19,
    description: "Deuxième session SQL pour débutants",
  },

  
  {
    id: 9,
    date_debut: '2026-09-05',
    date_fin: '2026-09-12',
    formateur: formateurs[0],
    formation: formations[4],
    nbre_inscrits: 17,
    description: "Session Flutter pour le développement mobile",
  },
  {
    id: 10,
    date_debut: '2026-10-01',
    date_fin: '2026-10-08',
    formateur: formateurs[1],
    formation: formations[4],
    nbre_inscrits: 15,
    description: "Deuxième session mobile multiplateforme Flutter",
  },

  
  {
    id: 11,
    date_debut: '2026-11-05',
    date_fin: '2026-11-12',
    formateur: formateurs[2],
    formation: formations[5],
    nbre_inscrits: 20,
    description: "Administration systèmes Linux",
  },
  {
    id: 12,
    date_debut: '2026-12-01',
    date_fin: '2026-12-08',
    formateur: formateurs[3],
    formation: formations[5],
    nbre_inscrits: 18,
    description: "Deuxième session administration Linux",
  },

  
  {
    id: 13,
    date_debut: '2026-01-05',
    date_fin: '2026-01-12',
    formateur: formateurs[4],
    formation: formations[6],
    nbre_inscrits: 14,
    description: "Introduction à la cybersécurité",
  },
  {
    id: 14,
    date_debut: '2026-02-01',
    date_fin: '2026-02-08',
    formateur: formateurs[5],
    formation: formations[6],
    nbre_inscrits: 16,
    description: "Deuxième session fondamentaux cybersécurité",
  },

  
  {
    id: 15,
    date_debut: '2026-03-05',
    date_fin: '2026-03-12',
    formateur: formateurs[6],
    formation: formations[7],
    nbre_inscrits: 12,
    description: "Intelligence artificielle et machine learning",
  },
  {
    id: 16,
    date_debut: '2026-04-01',
    date_fin: '2026-04-08',
    formateur: formateurs[7],
    formation: formations[7],
    nbre_inscrits: 14,
    description: "Deuxième session IA et ML",
  },

  
  {
    id: 17,
    date_debut: '2026-05-05',
    date_fin: '2026-05-12',
    formateur: formateurs[0],
    formation: formations[8],
    nbre_inscrits: 18,
    description: "Session UX/UI design",
  },
  {
    id: 18,
    date_debut: '2026-06-01',
    date_fin: '2026-06-08',
    formateur: formateurs[1],
    formation: formations[8],
    nbre_inscrits: 20,
    description: "Deuxième session design UX/UI",
  },

  {
    id: 19,
    date_debut: '2026-07-05',
    date_fin: '2026-07-12',
    formateur: formateurs[2],
    formation: formations[9],
    nbre_inscrits: 22,
    description: "Session réseaux informatiques",
  },
  {
    id: 20,
    date_debut: '2026-08-01',
    date_fin: '2026-08-08',
    formateur: formateurs[3],
    formation: formations[9],
    nbre_inscrits: 19,
    description: "Deuxième session réseaux",
  },
];
