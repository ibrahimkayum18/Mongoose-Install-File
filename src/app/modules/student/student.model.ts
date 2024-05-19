import { Schema, model } from "mongoose";
import { Gurdian, LocalGurdian, Student, UserName } from "./student.interface";

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const gurdianSchema = new Schema<Gurdian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const localGuardianSchema = new Schema<LocalGurdian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ["male", "female"],
  dateOfBirth: String,
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  emergenceContactNo: { type: String, required: true },
  bloodGroup: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  gurdian: gurdianSchema,
  localGurdian: localGuardianSchema,
  profileImg: { type: String },
  isActive: ["active", "inActive"],
});

export const StudentModel = model<Student>("User", studentSchema);
