import { Router } from "express";
import { index, indexhtml, ping } from "../controllers/index.rotes.js";

const router = Router();

router.get("/", index);

router.get("/ping", ping);

export default router;
