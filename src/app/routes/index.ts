import { Router } from "express";
import { SpecialtyRoute } from "../modules/specialties/specialties.route";

const router = Router();

router.use("/specialties", SpecialtyRoute);

export const IndexRoute = router;
