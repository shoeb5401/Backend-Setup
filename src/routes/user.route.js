import { Router } from "express";
import { registration } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").get(registration);
router.route("/logiin").get(login);

export default router;
//@ When we export using default we can import in other file using any name
