import Joi from 'joi'

export const JoiValidation = Joi.object({
  name: Joi.object({
    firstName: Joi.string().max(21).required(),
    middleName: Joi.string().max(21),
    lastName: Joi.string().max(21).required(),
  }),
  id: Joi.string().required(),
  class: Joi.string(),
  rollNo: Joi.string(),
  address: Joi.string(),
  email: Joi.string().email(),
  gender: Joi.string().valid('male', 'female', 'other').default('other'),
  bloodGroup: Joi.string().valid(
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'O+',
    'O-',
  ),
  parentInfo: Joi.object({
    fatherInfo: Joi.object({
      name: Joi.string().required(),
      contactNo: Joi.string().required(),
      email: Joi.string().email(),
    }),
    motherInfo: Joi.object({
      name: Joi.string().required(),
      contactNo: Joi.string().required(),
      email: Joi.string().email(),
    }),
  }),
  emergencyContact: Joi.object({
    name: Joi.string().required(),
    contactNo: Joi.string().required(),
    email: Joi.string().email(),
  }),
})
