import { Router } from "express";
import {
    createPruducto,
    deletePruducto,
    getPruducto,
    getPruductos,
    updatePruducto,
} from "../controllers/PRODUCTO.controller.js";

const router = Router();

// GET all Employees
router.get("/PRODUCTO", getPruductos);

// GET An Employee
router.get("/PRODUCTO/:id", getPruducto);

// DELETE An Employee
router.delete("/PRODUCTO/:id", deletePruducto);

// INSERT An Employee
router.post("/PRODUCTO", createPruducto);

router.patch("/PRUDOCTO/:id", updatePruducto);

export default router;
