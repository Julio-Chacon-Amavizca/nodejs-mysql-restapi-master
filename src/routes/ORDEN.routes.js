import { Router } from "express";
import {
  createORDEN,
  deleteORDEN,
  getORDEN,
  getORDENS,
  updateORDEN,
} from "../controllers/ORDEN.controller.js";

const router = Router();

// GET all Employees
router.get("/ORDEN", getORDENS);

// GET An Employee
router.get("/ORDEN/:id", getORDEN);

// DELETE An Employee
router.delete("/ORDEN/:id", deleteORDEN);

// INSERT An Employee
router.post("/ORDEN", createORDEN);

router.patch("/ORDEN/:id", updateORDEN);

export default router;
