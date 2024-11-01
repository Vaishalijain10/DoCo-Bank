// backend/routes/userRoute.js
import express from "express";
import {
  registerController,
  loginController,
  forgotPasswordController,
} from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import upload from "../library/Multer.js";

const router = express.Router();

console.log(`userRoute -`);
router.post("/register", upload.single("profilePhoto"), registerController);
router.post("/login", loginController);
router.post("/forgot-password", forgotPasswordController);
1
router.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "User profile data (protected route)" });
});

export default router;
