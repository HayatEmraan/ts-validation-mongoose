import { Request, Response } from 'express'
import { StudentDB, getStudentDB, getStudentsDB } from './student.service'
import { ZodValidation } from './student.validate'
// import { JoiValidation } from './student.validate'

export const createStudent = async (req: Request, res: Response) => {
  try {
    const body = await req.body

    // joi validation
    // const joiValidate = await JoiValidation.validate(body)
    // if (joiValidate.error) {
    //   return res.status(400).json({
    //     success: false,
    //     message: joiValidate.error,
    //   })
    // }

    // zod validation

    const zodValidate = ZodValidation.safeParse(body)

    if (!zodValidate.success) {
      return res.status(400).json({
        success: false,
        error: zodValidate,
      })
    }

    const result = (await StudentDB(body));
    return res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error,
    })
  }
}

export const getStudents = async (req: Request, res: Response) => {
  try {
    const result = await getStudentsDB()
    return res.status(200).json({
      success: true,
      message: 'Students retrieved successfully',
      data: result,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error,
    })
  }
}

export const getStudent = async (req: Request, res: Response) => {
  try {
    const { id } = await req.params
    const result = await getStudentDB(id)
    return res.status(200).json({
      success: true,
      message: 'Student retrieved successfully',
      data: result,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error,
    })
  }
}
