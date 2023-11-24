import { model } from 'mongoose'
import { Student } from './student.interface'
import { StudentSchema } from './student.schema'

export const StudentModel = model<Student>('Student', StudentSchema)
