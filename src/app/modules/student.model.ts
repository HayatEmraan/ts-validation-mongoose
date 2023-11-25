import { model } from 'mongoose'
import { ExistingStudent, Student } from './student.interface'
import { StudentSchema } from './student.schema'

export const StudentModel = model<Student, ExistingStudent>(
  'Student',
  StudentSchema,
)
