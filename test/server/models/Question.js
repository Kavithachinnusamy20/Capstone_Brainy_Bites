import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
  id: {
    type : Number,
     unique: true,
     index: true
  },
  question: String,
  options: [String],
  correctAnswer: String
});

const Question = mongoose.model("Question", questionSchema);

export default Question;