import { ApiError } from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

import { User } from "../model/user.model.js";

export const signup = asyncHandler(async (req, res) => {
  console.log("Signup Hitted");
  const { username, email, password } = req.body;

  const user = await new User({
    username,
    email,
    password,
  }).save();

  res.status(201).json(new ApiResponse(200, user, "User created Success"));
});
