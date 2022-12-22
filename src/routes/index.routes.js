import { Router } from "express";
import { getEmpleados } from "../controllers/index.controller.js";

const router = Router()

router.get('/', getEmpleados)

export default router