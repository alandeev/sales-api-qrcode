const errorHandler = (error, req, res, next) => {
  if(error.isThreated) {
    return res.status(error.status).json({
      status: "error",
      message: error.message,
      details: error.details
    })
  }

  console.error({
    message: error.message,
    stack: error.stack
  })

  return res.status(500).json({
    status: "error",
    message: "internal server error"
  })
}

export default errorHandler;