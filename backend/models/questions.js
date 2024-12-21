import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String], 
    validate: {
      validator: function (v) {
        return v.length >= 2; // Ensure there are at least two options
      },
      message: 'A question must have at least two options.',
    },
    required: true,
  },
  answer: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return this.options.includes(v); // Ensure the answer is one of the options
      },
      message: 'The answer must be one of the options.',
    },
  },
  subject: {
    type: String,
    required: true,
  },
  chapter: {
    type: String,
    required: true,
  },
},{
  timestamps : true
});

const Question = mongoose.models.QuestionSchema ||  mongoose.model('Question', QuestionSchema);

export default Question;
