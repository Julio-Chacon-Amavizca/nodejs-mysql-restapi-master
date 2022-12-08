import express from "express";
import morgan from "morgan";

import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";
import CLIENTERoutes from "./routes/CLIENTE.routes.js";
import ENVIORoutes from "./routes/ENVIO.routes.js";
import ENVIOSRoutes from "./routes/ENVIOS.routes.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/", indexRoutes);
app.use("/api", employeesRoutes);
app.use("/api", CLIENTERoutes);
app.use("/api", ENVIORoutes);
app.use("/api", ENVIOSRoutes);


app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
