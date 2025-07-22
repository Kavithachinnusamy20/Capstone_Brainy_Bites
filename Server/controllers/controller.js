import express from 'express';
import Questions from '../models/Question.js';

/** Get all questions */
export async function getQuestions(req, res) {
  try {
    // const questions = await Questions.find();
    const questions = await Questions.aggregate([{ $sample: { size: 5 } }]);
    // console.log("Questions fetched :", questions);
    res.json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

/** Insert multiple questions */
export async function insertQuestions(req, res) {
  try {
    const { questions } = req.body; // Make sure questions are sent in request body

    if (!Array.isArray(questions) || questions.length === 0) {
      return res.status(400).json({ error: 'Invalid or empty questions array' });
    }

    await Questions.insertMany(questions);
    res.json({ msg: 'Questions saved successfully!' });
  } catch (error) {
    console.error('Error inserting questions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

/** Delete all questions */
export async function dropQuestions(req, res) {
  try {
    await Questions.deleteMany();
    res.json({ msg: 'All questions deleted successfully!' });
  } catch (error) {
    console.error('Error deleting questions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}