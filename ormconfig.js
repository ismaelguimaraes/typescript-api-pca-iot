export default {
    "type": process.env.TYPE_DB,
    "host": process.env.HOST_DB,
    "port": process.env.PORT_DB,
    "username": process.env.USERNAME_DB,
    "password": process.env.PASSWORD_DB,
    "database": process.env.DATABASE_DB,
    "migrations": [
        "./src/database/migrations/*.ts"
    ],
    "entities": [
        "./src/models/*.ts"
    ],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }
}