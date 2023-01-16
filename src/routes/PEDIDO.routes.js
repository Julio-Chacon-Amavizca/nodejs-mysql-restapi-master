import { Router } from "express";
import {
  createPEDIDO,
  deletePEDIDO,
  getPEDIDO,
  getPEDIDOS,
  updatePEDIDO,
} from "../controllers/ORDEN.controller.js";

const router = Router();

// GET all Employees
router.get("/PEDIDO", getPEDIDOS);

// GET An Employee
router.get("/PEDIDO/:id", getPEDIDO);

// DELETE An Employee
router.delete("/PEDIDO/:id", deletePEDIDO);

// INSERT An Employee
router.post("/PEDIDO", createPEDIDO);

router.patch("/PEDIDO/:id", updatePEDIDO);

export default router;
