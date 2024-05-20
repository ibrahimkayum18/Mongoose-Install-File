import Joi from "joi";

const userNameSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(10)
    .required()
    .regex(/^[A-Z][a-z]*$/)
    .message(
      "First name must be capitalized and contain only alphabetic characters",
    ),
  middleName: Joi.string(),
  lastName: Joi.string()
    .required()
    .regex(/^[A-Za-z]+$/)
    .message("Last name must contain only alphabetic characters"),
});

const guardianSchema = Joi.object({
  fatherName: Joi.string()
    .required()
    .messages({ "any.required": "Father name is required" }),
  fatherOccupation: Joi.string()
    .required()
    .messages({ "any.required": "Father occupation is required" }),
  fatherContactNo: Joi.string()
    .required()
    .messages({ "any.required": "Father contact number is required" }),
  motherName: Joi.string()
    .required()
    .messages({ "any.required": "Mother name is required" }),
  motherOccupation: Joi.string()
    .required()
    .messages({ "any.required": "Mother occupation is required" }),
  motherContactNo: Joi.string()
    .required()
    .messages({ "any.required": "Mother contact number is required" }),
});

const localGuardianSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": "Local guardian name is required" }),
  occupation: Joi.string()
    .required()
    .messages({ "any.required": "Local guardian occupation is required" }),
  contactNo: Joi.string()
    .required()
    .messages({ "any.required": "Local guardian contact number is required" }),
  address: Joi.string()
    .required()
    .messages({ "any.required": "Local guardian address is required" }),
});

const studentSchema = Joi.object({
  id: Joi.string().required().messages({ "any.required": "ID is required" }),
  name: userNameSchema
    .required()
    .messages({ "any.required": "Name is required" }),
  gender: Joi.string()
    .valid("male", "female")
    .required()
    .messages({
      "any.only": 'Gender must be either "male" or "female"',
      "any.required": "Gender is required",
    }),
  dateOfBirth: Joi.string().optional(),
  email: Joi.string()
    .email()
    .required()
    .messages({
      "string.email": "{VALUE} is not a valid email",
      "any.required": "Email is required",
    }),
  contactNumber: Joi.string()
    .required()
    .messages({ "any.required": "Contact number is required" }),
  emergenceContactNo: Joi.string()
    .required()
    .messages({ "any.required": "Emergency contact number is required" }),
  bloodGroup: Joi.string()
    .valid("A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-")
    .optional(),
  presentAddress: Joi.string()
    .required()
    .messages({ "any.required": "Present address is required" }),
  permanentAddress: Joi.string()
    .required()
    .messages({ "any.required": "Permanent address is required" }),
  gurdian: guardianSchema
    .required()
    .messages({ "any.required": "Guardian information is required" }),
  localGurdian: localGuardianSchema
    .required()
    .messages({ "any.required": "Local guardian information is required" }),
  profileImg: Joi.string().optional(),
  isActive: Joi.string().valid("active", "inActive").default("active"),
});

export default studentSchema;
