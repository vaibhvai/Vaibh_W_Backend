// const asyncHandler = (func) => async (req, res, next) => {
//   //hoc means higher order function a function that takes another function as an argument and returns a new function
//   try {

//   } catch (error) {
//     res
//       .status(error.code || 500)
//       .json({ message: error.message || "Internal Server Error" });
//   }
// };

// export default asyncHandler;

// const asyncHandler = (requestHandler) => async (req, res, next) => {
//   (req, res, next) => {
//     Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
//   };
// };

// export default asyncHandler;
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export default asyncHandler;
