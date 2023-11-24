import express from 'express'
import { createStudent, getStudent, getStudents } from './student.controller'
const router = express.Router()

router.post('/create-student', createStudent)

router.get("/get-students", getStudents)

router.get("/get-single-student/:id", getStudent)

export default router
