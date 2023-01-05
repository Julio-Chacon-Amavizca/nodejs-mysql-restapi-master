import { Router } from "express";
import {
  createCARRITO,
  deleteCARRITO,
  getCARRITO,
  getCARRITOS,
  updateCARRITO,
} from "../controllers/CARRITO.controller.js";

const router = Router();

// GET all Employees
router.get("/CARRITO", getCARRITOS);

// GET An Employee
router.get("/CARRITO/:id", getCARRITO);

// DELETE An Employee
router.delete("/CARRITO/:id", deleteCARRITO);

// INSERT An Employee
router.post("/CARRITO", createCARRITO);

router.patch("/CARRITO/:id", updateCARRITO);

export default router;
