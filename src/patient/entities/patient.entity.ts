import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Patient {
    @PrimaryGeneratedColumn({
        name:'id',
        type:"int"
    })
    id:number;
    @Column()
    nom:string;
    @Column()
    prenom:string;
    @Column()
    cin:number;
    @Column()
    cnam:number;
    @Column()
    dateNaissance:Date;
    @Column()
    telephone : number;
    
    constructor() { }
}