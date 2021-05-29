export default {
    "type": 'postgres',
    "url": process.env.DATABASE_URL,
    "migrations": [
       process.env.PORT ? "./dist/database/migrations/*{.ts,.js}" : "./src/database/migrations/*.ts"
    ],
    "entities": [
        process.env.PORT ? "./dist/models/*{.ts,.js}" : "./src/models/*.ts"
    ],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }
}