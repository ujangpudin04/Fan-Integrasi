import express from "express";
import { getUsers, Login, Register, Logout } from "../controllers/Users.js";
import { createOne, getAll } from "../controllers/ePresence.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controllers/refreshToken.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);
router.get("/epresence", verifyToken, getAll);
router.post("/add-epresence", verifyToken, createOne);

export default router;
