import { asyncHandler } from "../utils/asyncHandler.js";

const registration = asyncHandler(async (req, res) => {
  //@ Step in User registration:-
  // Take user data from frontend / postman.
  // check whether any one of the field is empty. or any other validation.
  // check whether user already exist. (email / username unique)
  // check for the user files(user images , avatar)
  // Upload to the cloudinary , avatar
  // Create an User Object - create entry in db
  // remove password and refresh token field from reponse
  // Check for user creation
  // return response if created

  //? If the data is coming from form or json then we can get it from req.body
  const { fullName, email, username, password } = req.body;
  console.log("fullname: \n", fullName, "email: ", email);
});

const login = asyncHandler(async (req, res) => {
  res.status(205).json({
    message: "Welcome to the login Page",
  });
});
export { registration, login };
