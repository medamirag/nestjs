import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Patient } from "./patient.entity";
import { Typevisite } from "./typevisite.entity";

@Entity()
export class Visite {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => Patient, (patient) => patient.id)

    patient:Patient;
    @ManyToOne(() => Typevisite, (tv) => tv)
    typeVisite : Typevisite;
    @Column()
    frais : number;
    @Column()
    dateHeure: Date;
    @Column()
    noteMedecin: string
    constructor(
    
    ) { }

}
