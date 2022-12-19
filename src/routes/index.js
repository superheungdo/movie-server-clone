import { Router } from "express";
import userRoute from "./user.route.js";
import mediaRoute from "./media.route.js";

const router = Router();

router.use("/user", userRoute);
router.use("/:mediaType", mediaRoute);

export default router;
