import validator from "validator";
import { Schema, model } from "mongoose";

import { Gurdian, LocalGurdian, Student, UserName } from "./student.interface";

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    maxlength: [20, "more then 10 char"],
    trim: true,
    // Manually validating data
    // validate: {
    //   validator: function(value: String){
    //     const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1 )
    //     return firstNameStr === value
    //   },
    //   message: '{VALUE} is not in capitalized formate'
    // }
  },

  middleName: { type: String },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    // Using validator third party npm package to validate data
    // validate: {
    //   validator: (value: string) => validator.isAlpha(value),
    //   message: "{VALUE} is not valid"
    // },
  },
});

const guardianSchema = new Schema<Gurdian>({
  fatherName: { type: String, required: [true, "Father name is required"] },
  fatherOccupation: {
    type: String,
    required: [true, "Father occupation is required"],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father contact number is required"],
  },
  motherName: { type: String, required: [true, "Mother name is required"] },
  motherOccupation: {
    type: String,
    required: [true, "Mother occupation is required"],
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother contact number is required"],
  },
});

const localGuardianSchema = new Schema<LocalGurdian>({
  name: { type: String, required: [true, "Local guardian name is required"] },
  occupation: {
    type: String,
    required: [true, "Local guardian occupation is required"],
  },
  contactNo: {
    type: String,
    required: [true, "Local guardian contact number is required"],
  },
  address: {
    type: String,
    required: [true, "Local guardian address is required"],
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: [true, "ID is required"], unique: true },
  name: {
    type: userNameSchema,
    required: [true, "Name is required"],
  },
  gender: {
    type: String,
    enum: {
      values: ["male", "female"],
      message:
        "The gender can only be one of the following: 'male' or 'female'. {VALUE} is not valid",
    },
    required: [true, "Gender is required"],
  },
  dateOfBirth: String,
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: "{VALUE} is not an email",
    },
  },
  contactNumber: {
    type: String,
    required: [true, "Contact number is required"],
  },
  emergenceContactNo: {
    type: String,
    required: [true, "Emergency contact number is required"],
  },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
  },
  presentAddress: {
    type: String,
    required: [true, "Present address is required"],
  },
  permanentAddress: {
    type: String,
    required: [true, "Permanent address is required"],
  },
  gurdian: {
    type: guardianSchema,
    required: [true, "Guardian information is required"],
  },
  localGurdian: {
    type: localGuardianSchema,
    required: [true, "Local guardian information is required"],
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ["active", "inActive"],
    default: "active",
  },
});

export const StudentModel = model<Student>("User", studentSchema);
