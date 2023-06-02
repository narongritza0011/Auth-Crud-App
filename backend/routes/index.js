import express from "express";
import {
  getUsers,
  Register,
  Login,
  Logout,
  GetProfile,
} from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
const router = express.Router();

//auth
router.get("/users", verifyToken, getUsers);
router.post("/register", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout",verifyToken, Logout);

//crud
router.get("/api/profile/:id", GetProfile);

export default router;
