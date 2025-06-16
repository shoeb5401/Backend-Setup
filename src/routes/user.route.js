import { Router } from "express";
import { registration } from "../controllers/user.controller.js";
import { login } from "../controllers/user.controller.js";

import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registration
);
router.route("/logiin").post(login);

export default router;
//@ When we export using default we can import in other file using any name.

//? When we export default we import like import User from "../User.js";
//* When we export without default , we import like import {User} from "../User.js"
