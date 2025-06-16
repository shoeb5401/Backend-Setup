import { Router } from "express";
import { registration } from "../controllers/user.controller.js";
import { login } from "../controllers/user.controller.js";
const router = Router();

router.route("/register").get(registration);
router.route("/logiin").get(login);

export default router;
//@ When we export using default we can import in other file using any name.

//? When we export default we import like import User from "../User.js";
//* When we export without default , we import like import {User} from "../User.js"
