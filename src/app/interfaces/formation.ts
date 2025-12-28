export interface Formation{
    id:number;
    titre : string;
    description:string;
    chargeHoraire:number;
    difficulte:string;
    motCles:string[];
    pdf?:string;
}