import { Request, Response } from "express";
import { StudentService } from "./student.service";

const createStudent = async(req: Request, res: Response) => {

    try{
    const {student : studentData} = req.body
    // We will call service function to send this data
    const result = await StudentService.createStudentIntoDB(studentData)

    res.status(200).json({
        success: true,
        message: 'Student is created is successfully',
        data: result
    })
    }catch(err){
        console.log(err);
    }
}

export const StudentControllers = {
    createStudent,
}
