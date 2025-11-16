import { Formateur } from "./formateur";
import { Formation } from "./formation";

export interface Session{
    id:number;
    date_debut:Date;
    date_fin:Date;
    formateur:Formateur;
    formation:Formation;
    nbre_inscrits:number;
    description:string;
}