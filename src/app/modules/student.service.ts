import { Student } from './student.interface'
import { StudentModel } from './student.model'

export const StudentDB = async (student: Student) => {
  const user = new StudentModel(student)
  // const findingStudent = await user.isExisting(student.id) 
  if (await StudentModel.isExisting(student.id)) {
    throw new Error('Student already exists')
  }
  return await user.save()
}

export const getStudentDB = async (studentID: string) => {
  return await StudentModel.findOne({ _id: studentID })
}

export const getStudentsDB = async () => {
  return await StudentModel.find()
}
