import { Schema } from 'mongoose'
import { Student } from './student.interface'
import validator from 'validator'

const NameSchema = new Schema({
  firstName: {
    type: String,
    validate: {
      validator: function (value: string) {
        return /^[a-zA-Z]+$/.test(value)
      },
      message: '{VALUE} is not a valid name',
    },
  },
  middleName: String,
  lastName: String,
})

export const StudentSchema = new Schema<Student>(
  {
    name: {
      type: NameSchema,
      required: true,
    },
    id: {
      type: String,
      unique: true,
    },
    class: String,
    rollNo: String,
    address: String,
    email: {
      type: String,
      validate: {
        validator: function (value: string) {
          return validator.isEmail(value)
        },
        message: '{VALUE} is not a valid email',
      },
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
    },
    bloodGroup: {
      type: String,
      enum: {
        values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        message: '{VALUE} is not supported',
      },
      default: 'O+',
    },
    parentInfo: {
      fatherInfo: {
        name: String,
        contactNo: String,
        email: String,
      },
      motherInfo: {
        name: String,
        contactNo: String,
        email: String,
      },
    },
    emergencyContact: {
      name: String,
      contactNo: String,
      email: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
)
