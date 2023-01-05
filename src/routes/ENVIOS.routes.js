import { Router } from "express";
import {
  createENVIO,
  deleteENVIO,
  getENVIO,
  getENVIOS,
  updateENVIO,
} from "../controllers/ENVIOS.controller.js";

const router = Router();

// GET all Employees
router.get("/ENVIOS", getENVIOS);

// GET An Employee
router.get("/ENVIOS/:id", getENVIO);

// DELETE An Employee
router.delete("/ENVIOS/:id", deleteENVIO);

// INSERT An Employee
router.post("/ENVIOS", createENVIO);

router.put("/ENVIOS/:id", updateENVIO);

export default router;
