import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
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
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700 hover:text-blue-800 transition-colors duration-300">MyKagada</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <motion.div 
          className="bg-white rounded-lg shadow-md p-6 mb-8 hover:shadow-lg transition-shadow duration-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Select Questions for {exam} - {subject}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.keys(questions).map(difficulty => (
              questions[difficulty].map(question => (
                <Card key={question.id} className="p-4 border rounded-md bg-white text-blue-600 border-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  <CardContent className="flex flex-col items-center justify-center h-20">
                    <span className="text-lg font-medium mt-2">{question.text} ({difficulty})</span>
                  </CardContent>
                </Card>
              ))
            ))}
          </div>
        </motion.div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">MyKagada</h4>
              <p className="text-sm text-gray-300">Empowering educators with comprehensive exam management tools.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Pricing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-sm text-gray-300">Email: support@MyKagada.com</p>
              <p className="text-sm text-gray-300">Phone: +1 (123) 456-7890</p>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} MyKagada. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SelectQuestions;