import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AlterStudentFieldToStudentId1622312023376 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('attendances', 'student');

        await queryRunner.addColumn('attendances', new TableColumn({
            name: 'student_id',
            type: 'varchar',
            isNullable: false
        }));

        await queryRunner.createForeignKey('attendances', new TableForeignKey({
            name: 'AttendanceStudent',
            columnNames: ['student_id'],
            referencedColumnNames: ['registration'],
            referencedTableName: 'students',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('attendances', 'AttendanceStudent');

        await queryRunner.dropColumn('attendances', 'student_id');

        await queryRunner.addColumn('attendances', new TableColumn({
            name: 'student',
            type: 'varchar',
            isNullable: false,
        }))
    }

}
