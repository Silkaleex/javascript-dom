const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({
      filename: "error.log",
      level: "Error en la pagina",
    }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

logger.error("Mensaje Fallido intentelo de nuevo");
module.exports = logger;

try {
  console.log("Todo Correcto");
  const verificando = createLogger(logger);
  console.log(verificando);
} catch {
  console.error("Esto no se sostiene por ningun lado");
}
