import express from "express";
import {
  getUsers,
  Register,
  Login,
  Logout,
  GetProfile,
  UpdateProfile,
} from "../controllers/Users.js";

import {
  getUsersList,
  GetUserById,
  UpdateUserById,
  deleteUserById,
  ResetPasswordUserById,
} from "../controllers/UserController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
const router = express.Router();

//auth
router.get("/api/users", verifyToken, getUsers);
router.post("/register", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

//profile
router.get("/api/profile/:id", verifyToken, GetProfile);
router.put("/api/profile/:id", verifyToken, UpdateProfile);

//user crud
router.get("/api/users/list", verifyToken, getUsersList);
router.get("/api/user/:id", verifyToken, GetUserById);

router.put("/api/users/:id", verifyToken, UpdateUserById);

router.delete("/api/users/:id", verifyToken, deleteUserById);
router.post("/api/users/reset-password/", verifyToken, ResetPasswordUserById);

export default router;
