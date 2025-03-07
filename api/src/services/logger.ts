import { createLogger, format, transports } from "winston";

const toCSV = format.printf(
  ({ timestamp, level, message }) => `${timestamp},${level},${JSON.stringify(message)}`
);

const loggerTransporter = [];
if (process.env.NODE_ENV !== "production") {
  // System log used console
  loggerTransporter.push(
    new transports.Console({
      format: format.json(),
    })
  );
} else {
  // System log used file
  loggerTransporter.push(
    new transports.File({
      filename: "log/error.log",
      level: "error",
      format: format.combine(format.timestamp(), toCSV),
    })
  );
}

const logger = createLogger({
  level: "error",
  format: format.combine(format.timestamp(), format.json()),
  transports: loggerTransporter,
});

export default logger;
