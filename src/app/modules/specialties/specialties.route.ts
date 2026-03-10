import { Router } from "express";
import { SpecialtyController } from "./specialties.controller";

const router = Router();

router.post("/", SpecialtyController.createSpecialties);
router.get("/", SpecialtyController.getAllSpecialties);
router.delete("/:id", SpecialtyController.deleteSpecialties);
router.patch("/:id", SpecialtyController.updateSpecialties);

export const SpecialtyRoute = router;
