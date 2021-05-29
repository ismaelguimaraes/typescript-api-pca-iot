import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateAttendanceTable1622305654482 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'attendances',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: 'student',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'presented_at',
                    type: 'timestamp with time zone',
                    isNullable: false
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('attendances');
    }

}