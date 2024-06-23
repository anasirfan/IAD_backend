import { Router } from "express";
import {loginUser, logoutUser, refreshAccessToken, registerUser,findUserById,getAllUser,deleteUser} from "../controllers/user.controller.js"
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";



const router = Router();

// for registeration
router.route("/register").post(
    registerUser
)


// for user login
router.route("/login").post(loginUser);

//secured routes
router.route("/logout").post(verifyJWT , logoutUser );
router.route("/refresh-token").post(refreshAccessToken);
router.route("/id").post(findUserById);
router.route("/").get(getAllUser)
router.route("/id").delete(deleteUser)


export default router;