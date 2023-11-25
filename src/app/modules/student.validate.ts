import Joi from 'joi'
import { z } from 'zod'

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

const ParentZod = z.object({
  fatherInfo: z.object({
    name: z.string().max(21).trim(),
    contactNo: z.string().max(21).trim(),
    email: z.string().email().trim(),
  }),
  motherInfo: z.object({
    name: z.string().max(21).trim(),
    contactNo: z.string().max(21).trim(),
    email: z.string().email().trim(),
  }),
})

const EmergencyZod = z.object({
  name: z.string().max(21).trim(),
  contactNo: z.string().max(21).trim(),
  email: z.string().email().trim(),
})

export const ZodValidation = z.object({
  name: z.object({
    firstName: z
      .string({
        required_error: "First name can't be empty",
        invalid_type_error: 'First name must be a string',
      })
      .trim()
      .max(21, { message: "First name can't be more than 21 characters" }),
    middleName: z.string().trim().max(21),
    lastName: z.string().trim().max(21),
  }),
  id: z
    .string({
      invalid_type_error: 'ID must be a string',
      required_error: 'ID is required',
    })
    .min(3, { message: 'ID must be at least 3 characters' })
    .max(6, {
      message: 'ID must be less than 6 characters',
    }),
  class: z.string().trim().optional(),
  password: z
    .string()
    .trim()
    .min(6, {
      message: 'Password must be at least 6 characters',
    })
    .max(12, { message: 'Password must be less than 12 characters' }),
  rollNo: z.string().trim(),
  address: z.string().trim(),
  email: z.string().trim().email(),
  gender: z.enum(['male', 'female', 'other']).default('other'),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  parentInfo: ParentZod,
  emergencyContact: EmergencyZod,
})
