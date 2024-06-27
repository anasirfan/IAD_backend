import { scheduleInterview ,getAllInterview,deleteInterview,getInterviewById} from "../controllers/interview.controller.js";
import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router()

router.route("/schedule").post(scheduleInterview)
router.route("/").get(getAllInterview)
router.route("/id").delete(deleteInterview)
router.route("/id").post(getInterviewById)


export default router;