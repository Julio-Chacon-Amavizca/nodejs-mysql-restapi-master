

import { response } from "express";
import morgan from "morgan";
import app from "./app.js";
import { PORT } from "./config.js";
import cors from "cors"; 

app.use(cors());

app.listen(PORT);
console.log(`Server on port http://localhost:${PORT}`);

