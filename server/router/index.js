const express = require("express");
const router = express.Router();
const User = require("../controller/user.js");
const {decodeToken} = require("../middleware")
router.post("/api/createUser",decodeToken,User.newUser);
router.get("/api/getuserbyUID/",decodeToken,User.getUserbyUid);
