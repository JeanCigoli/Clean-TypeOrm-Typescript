const path = require("path");

module.exports = {
  database: path.join(__dirname, "database", "database.sqlite"),
  type: "sqlite",
  logging: true,
  migrationsRun: true,
  entities: [path.join(__dirname, "src", "domain", "models", "*.ts")],
  migrations: [path.join(__dirname, "database", "migrations", "*.ts")],
  cli: {
    migrationsDir: path.join(__dirname, "database", "migrations"),
  },
};
