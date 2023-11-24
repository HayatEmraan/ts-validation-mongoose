import { Student } from './student.interface'
import { StudentModel } from './student.model'

export const StudentDB = async (student: Student) => {
  return await StudentModel.create(student)
}

export const getStudentDB = async (studentID: string) => {
  return await StudentModel.findOne({ _id: studentID })
}

export const getStudentsDB = async () => {
  return await StudentModel.find()
}
