import { createApplication,getAllAplications,deleteApplication } from "../controllers/application.controller.js";
import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/submit").post(
    createApplication
)

router.route("/").get(
    getAllAplications
)

router.route("/id").delete(
    deleteApplication
)


export default router;