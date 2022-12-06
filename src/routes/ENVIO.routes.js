import { Router } from "express";
import {
  createENVIO,
  deleteENVIO,
  getENVIO,
  getENVIOS,
  updateENVIO,
} from "../controllers/ENVIO.controller.js";

const router = Router();

// GET all Employees
router.get("/ENVIO", getENVIOS);

// GET An Employee
router.get("/ENVIO/:id", getENVIO);

// DELETE An Employee
router.delete("/ENVIO/:id", deleteENVIO);

// INSERT An Employee
router.post("/ENVIO", createENVIO);

router.patch("/ENVIO/:id", updateENVIO);

export default router;
