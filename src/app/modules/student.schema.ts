import { Schema } from 'mongoose'
import { ExistingStudent, Student } from './student.interface'
import validator from 'validator'
import bcrypt from 'bcrypt'

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

export const StudentSchema = new Schema<Student, ExistingStudent>(
  {
    name: {
      type: NameSchema,
      required: true,
    },
    id: {
      type: String,
      unique: true,
    },
    password: String,
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

// StudentSchema.methods = {
//   isExisting: function (id: string) {
//     return StudentModel.findOne({ id })
//   },
// }

// StudentSchema.set('toJSON', {
//   transform: function (doc, ret) {
//     delete ret.email
//     return ret
//   },
// })

// StudentSchema.post('save', function (doc, next) {
//   doc.set('email', undefined)
//   next()
// })

StudentSchema.statics.isExisting = function (id: string) {
  return this.findOne({ id })
}

StudentSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10)
  next()
})
