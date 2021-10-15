import joi from 'joi'
import ValidationError from 'src/errors/validation-error'

interface IResponse {
  username: string,
  password: string
}

const BodyValidation = joi.object<IResponse>({
  username: joi.string().required().min(4).max(20),
  password: joi.string().required().min(4).max(20)
})

const validator = async (data): Promise<IResponse> => {
  const { error, value } = BodyValidation.validate(data, {
    abortEarly: false
  })

  if(error) {
    console.error("Error on try validate body to login")
    throw new ValidationError(error.message, error.details)
  }

  return value
}

export default validator;
