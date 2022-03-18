import mongoose from 'mongoose';

export const StudentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  course: { type: String },
  yearLevel: { type: String },
});
