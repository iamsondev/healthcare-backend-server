import { Router } from "express";
import { SpecialtyRoute } from "../modules/specialties/specialties.route";
import { AuthRouter } from "../modules/auth/auth.route";

const router = Router();

router.use("/auth", AuthRouter);
router.use("/specialties", SpecialtyRoute);

export const IndexRoute = router;
