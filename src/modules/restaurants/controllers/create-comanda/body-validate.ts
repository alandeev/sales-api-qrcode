import { DEVICE_TYPES } from "@modules/restaurants/contants/comanda"
import SchemaValidator from '@shared/utils/schema-validator';
import Joi from 'joi'

const deviceTypes = Object.values(DEVICE_TYPES)

const CreateComandaSchema = Joi.object({
  device_id: Joi.string()
    .required(),
  device_type: Joi.string()
    .valid(...deviceTypes)
    .required()
})

export type DeviceTypes = "nfc" | "qrcode"

interface IRequest {
  device_id: string
  device_type: DeviceTypes
}

const bodyValidator = (data: Partial<IRequest>) => {
  const value = SchemaValidator(CreateComandaSchema, data)
  return value;
}

export default bodyValidator;