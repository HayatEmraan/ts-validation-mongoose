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
  address: string
  email: string
  gender: 'female' | 'male' | 'other'
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  parentInfo: Parent
  emergencyContact: Emergency
  createdAt: Date
  updatedAt: Date
}
