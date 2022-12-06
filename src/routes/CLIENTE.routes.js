import { Router } from "express";
import {
  createCLIENTE,
  deleteCLIENTE,
  getCLIENTE,
  getCLIENTES,
  updateCLIENTE,
} from "../controllers/CLIENTE.controller.js";

const router = Router();

// GET all Employees
router.get("/CLIENTE", getCLIENTES);

// GET An Employee
router.get("/CLIENTE/:id", getCLIENTE);

// DELETE An Employee
router.delete("/CLIENTE/:id", deleteCLIENTE);

// INSERT An Employee
router.post("/CLIENTE", createCLIENTE);

router.patch("/CLIENTE/:id", updateCLIENTE);

export default router;
