import { Router } from "express";
import { SpecialtyController } from "../modules/specialties/specialties.controller";

const router = Router();

router.post("/specialties", SpecialtyController.createSpecialties);

export const IndexRoute = router;
