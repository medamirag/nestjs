import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Patient } from "./patient.entity";
@Entity()
export class Rdv {
@PrimaryGeneratedColumn()    
id :number;
@ManyToOne(() => Patient, (patient) => patient.id)
patient :Patient;
@Column({default:''})
nomPrenom :string;
@Column()
telephone: string;
@Column()
dateHeure: Date;

    constructor(
    ) { }

}
