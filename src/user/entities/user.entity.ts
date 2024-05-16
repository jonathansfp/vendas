import { AddressEntity } from "src/address/entities/address.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'user' })

export class UserEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: 'active', nullable: false })
    active: boolean;

    @Column({ name: 'typeUser', nullable: false })
    typeUser: string;

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'lastName', nullable: false })
    lastName: string;

    @Column({ name: 'email', nullable: false })
    email: string;

    @Column({ name: 'cellPhone' })
    cellPhone: string;

    @Column({ name: 'cpf', nullable: false })
    cpf: string;

    @Column({ name: 'password', nullable: false })
    password: string;

    @OneToMany(() => AddressEntity, (addresses) => addresses.user)
    addresses?: AddressEntity[];

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

}
