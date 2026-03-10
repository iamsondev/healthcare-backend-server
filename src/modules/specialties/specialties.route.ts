import { Router } from "express";
import { SpecialtyController } from "./specialties.controller";

const router = Router();

router.post("/", SpecialtyController.createSpecialties);

export const SpecialtyRoute = router;
