import { Model } from 'mongoose'


type Parent = {
  fatherInfo: {
    name: string
    contactNo: string
    email?: string
  }
  motherInfo: {
    name: string
    contactNo: string
    email?: string
  }
}

type Emergency = {
  name: string
  contactNo: string
  email?: string
}

type Name = {
  firstName: string
  middleName?: string
  lastName: string
}

export type Student = {
  name: Name
  id: string
  class: string
  rollNo: number
  contactNo: string
  password: string
  address: string
  email: string
  gender: 'female' | 'male' | 'other'
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  parentInfo: Parent
  emergencyContact: Emergency
  createdAt: Date
  updatedAt: Date
}

// export type ExistingStudent = {
//   isExisting(id: string): Promise<Student | null>
// }

// export type StudentModelExisting = Model<
//   Student,
//   Record<string, never>,
//   ExistingStudent
// >

export interface ExistingStudent extends Model<Student> {
  isExisting(id: string): Promise<Student | null>
}


