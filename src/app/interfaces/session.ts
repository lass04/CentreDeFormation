
import { Candidat } from "./candidat";
import { Formateur } from "./formateur";
import { Formation } from "./formation";

export interface Session{
    id:number;
    date_debut:string;
    date_fin:string;
    formateur:Formateur;
    formation:Formation;
    candidats_inscrits:Candidat[];
    description:string;
    complet:boolean;
}