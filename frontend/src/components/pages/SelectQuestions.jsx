import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Verify these paths and ensure the files exist
import { JEEQuestions } from "@/assets/Questions/JEEQuestions";
import { NEETQuestions } from "@/assets/Questions/NEETQuestions";
import { KCETQuestions } from "@/assets/Questions/KCETQuestions";
import { EleventhQuestions } from "@/assets/Questions/11thQuestions";
import { TwelfthQuestions } from "@/assets/Questions/12thQuestions";
// Import other question files as needed

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SelectQuestions() {
  const query = useQuery();
  const exam = query.get('exam');
  const subject = query.get('subject');
  const [questions, setQuestions] = useState({});

  useEffect(() => {
    const fetchQuestions = () => {
      let fetchedQuestions = {};
      switch (exam) {
        case 'JEE':
          fetchedQuestions = JEEQuestions[subject] || {};
          break;
        case 'NEET':
          fetchedQuestions = NEETQuestions[subject] || {};
          break;
        case 'KCET':
          fetchedQuestions = KCETQuestions[subject] || {};
          break;
        case '11th':
          fetchedQuestions = EleventhQuestions[subject] || {};
          break;
        case '12th':
          fetchedQuestions = TwelfthQuestions[subject] || {};
          break;
        // Add cases for other exams
        default:
          fetchedQuestions = {};
      }
      setQuestions(fetchedQuestions);
    };

    fetchQuestions();
  }, [exam, subject]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">MyKagada</h1>
          {/* Add navigation items if needed */}
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{exam} - {subject} Questions</h2>
        <div className="bg-white rounded-lg shadow">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Number</th>
                <th className="py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(questions).flatMap((difficulty, difficultyIndex) =>
                questions[difficulty].map((question, index) => {
                  const questionNumber = difficultyIndex * questions[difficulty].length + index + 1;
                  return (
                    <motion.tr 
                      key={question.id}
                      className="border-b hover:bg-gray-50 cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: questionNumber * 0.05 }}
                    >
                      <td className="py-4 px-6 text-gray-500">{questionNumber}</td>
                      <td className="py-4 px-6 font-medium text-gray-900">{question.text}</td>
                      <td className="py-4 px-6">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          difficulty.toLowerCase() === 'easy' ? 'bg-green-100 text-green-800' :
                          difficulty.toLowerCase() === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          difficulty.toLowerCase() === 'hard' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {difficulty}
                        </span>
                      </td>
                    </motion.tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* Footer can be simplified or removed to match LeetCode's minimal footer */}
      <footer className="bg-white border-t py-4 text-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} MyKagada. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SelectQuestions;