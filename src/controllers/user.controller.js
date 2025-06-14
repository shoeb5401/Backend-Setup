import { asyncHandler } from "../utils/asyncHandler.js";

const registration = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Welcome to the registration",
  });
});

const login = asyncHandler(async (req, res) => {
  res.status(205).json({
    message: "Welcome to the login Page",
  });
});
export { registration, login };
