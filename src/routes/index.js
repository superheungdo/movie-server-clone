import { Router } from "express";
import userRoute from "./user.route.js";
import mediaRoute from "./media.route.js";
import personRoute from "./person.route.js";

const router = Router();

router.use("/user", userRoute);
router.use("/:mediaType", mediaRoute);
router.use("/person", personRoute);

export default router;
