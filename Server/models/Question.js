import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
  id: Number,
  question: String,
  options: [String],
  correctAnswer: String
});

const Question = mongoose.model("Question", questionSchema);

export default Question;