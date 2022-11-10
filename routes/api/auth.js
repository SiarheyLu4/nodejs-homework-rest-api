const express = require("express");

const { ctrlWrapper } = require("../../helpers");
const ctrl = require("../../controllers/auth")
const { validateBody, authenticate } = require("../../middlewares")
const {schemas} = require("../../models/user")

const router = express.Router();

// signup
router.post("/register", validateBody(schemas.registerSchema), ctrlWrapper(ctrl.register))
// gignin
router.post("/login", validateBody(schemas.loginSchema), ctrlWrapper(ctrl.login))

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent))

router.get("/logout", authenticate, ctrlWrapper(ctrl.logout))

module.exports = router;