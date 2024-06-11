import { Router } from "express";
import { addFeedback, listAllFeedbacks, listUserFeedbacks } from "../controllers/feedbackControllers.js";
import requireAuth from "../middleware/requireAuth.js";

const router = Router();

router.get("/",listAllFeedbacks);
router.get("/:userId",requireAuth,listUserFeedbacks);
router.post("/",requireAuth,addFeedback);


export default router;
