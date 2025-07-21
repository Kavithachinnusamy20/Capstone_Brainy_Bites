// seed.js
import mongoose from "mongoose";
import Question from "../models/Question.js";
import data from "./quizData.js";
import  connectDb from '../db.js'

const seedQuestions = async () => {
  try {
    for (const item of data) {
      const exists = await Question.findOne({ question: item.question });

      if (!exists) {
        await Question.create(item);
        console.log(`Inserted: "${item.question}"`);
      } else {
        console.log(`Skipped (already exists): "${item.question}"`);
      }
    }
  } catch (error) {
    console.error("Error seeding quiz data:", error);
  } finally {
    mongoose.disconnect();
  }
};

export default seedQuestions;