import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
@Entity()
export class Typevisite {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    typevisite: string;
    @Column()
    couleur: string;

    constructor(


    ) { }

}
