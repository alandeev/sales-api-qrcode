module.exports = {
  name: 'default',
  type: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  entities: ["./src/modules/**/typeorm/entities/*.ts"],
  migrations: ["./src/shared/typeorm/migrations/*.ts"],
  subscribers: ["dist/src/subscriber/**/*.js"],
  cli: {
    migrationsDir: "./src/shared/typeorm/migrations/"
  }
}