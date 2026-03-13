import { Router } from "express";
import { SpecialtyRoute } from "../modules/specialties/specialties.route";
import { AuthRouter } from "../modules/auth/auth.route";
import { UserRoute } from "../modules/user/user.route";
import { DoctorRoute } from "../modules/doctor/doctor.route";

const router = Router();

router.use("/auth", AuthRouter);
router.use("/specialties", SpecialtyRoute);
router.use("/users", UserRoute);
router.use("/doctors", DoctorRoute);
export const IndexRoute = router;
