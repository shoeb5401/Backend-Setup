import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
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
  const { fullName, email, username, password } = req.body; //Destructuring
  console.log("email: ", email);
  // if (fullName === "") {
  //   throw new ApiError(400, "fullname is required");
  // }
  if (
    [fullName, email, password, username].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }
  const existedUser = User.findOne({
    $or: [{ username }, { email }],
  });
  if (existedUser) throw new ApiError(409, "User already existed");
  //? req.files is by multer
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required.");
  }
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);
  if (!avatar) {
    throw new ApiError(400, "Avatar file is required.");
  }
  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase(),
  });
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registring user");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registration Successfully"));
});

const login = asyncHandler(async (req, res) => {
  res.status(205).json({
    message: "Welcome to the login Page",
  });
});
export { registration, login };
