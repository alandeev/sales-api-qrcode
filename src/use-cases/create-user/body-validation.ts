import joi from 'joi'
import ValidationError from 'src/errors/validation-error'

const BodyValidation = joi.object({
  name: joi.string().required().min(4).max(20),
  username: joi.string().required().min(4).max(20),
  password: joi.string().required().min(4).max(20)
})

const validator = async (data) => {
  const { error } = BodyValidation.validate(data, {
    abortEarly: false
  })

  if(error) {
    console.error("Error on try validate body to create-user")
    throw new ValidationError(error.message, error.details)
  }
}

export default validator;
