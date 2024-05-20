import { Request, Response } from "express";
import { StudentService } from "./student.service";
import studentSchema from "./student.validation";

const createStudent = async (req: Request, res: Response) => {
  try {
    // Creating a vlaidation schema using Joi

    const { student: studentData } = req.body;

    const { error } = studentSchema.validate(studentData);
    // console.log({error}, {value});

    // We will call service function to send this data
    const result = await StudentService.createStudentIntoDB(studentData);

    if (error) {
      res.status(500).json({
        success: true,
        message: "Student is created is successfully",
        error: error.details,
      });
    }

    res.status(200).json({
      success: true,
      message: "Student is created is successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      err: err,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: "Student are recruited successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await StudentService.getSingleStudentFromDB(id);
    res.status(200).json({
      success: true,
      message: "Student Found successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
