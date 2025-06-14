//! Wrapper function to not write async and await each time
//@ Method 1 : Promise based
// const asyncHandler = (requestHandler) => {
// return (req,res,next)=>{
// Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
// }
// };
//@ Method 2 : async and await type
const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(error.code).json({
      success: false,
      message: error.message,
    });
  }
};

export { asyncHandler };
