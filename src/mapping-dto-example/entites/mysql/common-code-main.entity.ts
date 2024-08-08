import { Column, Entity, OneToMany, PrimaryColumn, JoinColumn } from 'typeorm';
import { CommonCodeSub } from './common-code-sub.entity';

@Entity('TB_COMMON_CODE_MAIN')
export class CommonCodeMain {
    @PrimaryColumn('varchar', {
        name: 'MAIN_CD'
    })
    mainCd: string;

    @Column('varchar', {
        name: 'MAIN_NM'
    })
    mainNm: string;

    @Column('varchar', {
        name: 'IS_USE'
    })
    isUse: string;

    @Column({
        type: 'datetime',
        name: 'REG_DATE',
        nullable: true
    })
    regDate?: Date;

    @Column({
        type: 'datetime',
        name: 'MOD_DATE',
        nullable: true
    })
    modDate?: Date;

    @Column({
        type: 'datetime',
        name: 'DEL_DATE',
        nullable: true
    })
    delDate?: Date;

    @OneToMany(() => CommonCodeSub, (sub) => sub.mainCd)
    @JoinColumn({
        name: 'MAIN_CD'
    })
    commonCodeSubs!: CommonCodeSub[];
}
