import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, GraduationCap, BookOpen, Filter, Check, ChevronRight } from 'lucide-react';

// Import your question sets
import { JEEQuestions } from "@/assets/Questions/JEEQuestions";
import { NEETQuestions } from "@/assets/Questions/NEETQuestions";
import { KCETQuestions } from "@/assets/Questions/KCETQuestions";
import { EleventhQuestions } from "@/assets/Questions/11thQuestions";
import { TwelfthQuestions } from "@/assets/Questions/12thQuestions";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SelectQuestions() {
  console.log("Rendering SelectQuestions component");

  const query = useQuery();
  const exam = query.get('exam');
  const subject = query.get('subject');
  const chapters = query.get('chapters').split(',');
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [chapterFilter, setChapterFilter] = useState('all');

  // Load cached selected questions or initialize empty array
  const [selectedQuestions, setSelectedQuestions] = useState(() => {
    const cachedData = localStorage.getItem('selectedQuestions');
    if (cachedData) {
      const { cachedExam, cachedSubject, cachedQuestions } = JSON.parse(cachedData);
      if (cachedExam === exam && cachedSubject === subject) {
        return cachedQuestions;
      }
    }
    return [];
  });

  // Cache selected questions whenever they change
  useEffect(() => {
    localStorage.setItem('selectedQuestions', JSON.stringify({
      cachedExam: exam,
      cachedSubject: subject,
      cachedQuestions: selectedQuestions
    }));
  }, [selectedQuestions, exam, subject]);

  // Fetch questions only when exam, subject, or chapters change
  useEffect(() => {
    console.log("Fetching questions", { exam, subject, chapters });
    const fetchQuestions = () => {
      let questionSet;
      switch (exam) {
        case 'JEE':
          questionSet = JEEQuestions;
          break;
        case 'NEET':
          questionSet = NEETQuestions;
          break;
        case 'KCET':
          questionSet = KCETQuestions;
          break;
        case '11th':
          questionSet = EleventhQuestions;
          break;
        case '12th':
          questionSet = TwelfthQuestions;
          break;
        default:
          questionSet = {};
      }
      
      const fetchedQuestions = chapters.reduce((acc, chapter) => {
        if (questionSet[subject] && questionSet[subject][chapter]) {
          return [...acc, ...questionSet[subject][chapter].map(q => ({...q, chapter}))];
        }
        return acc;
      }, []);
      
      setQuestions(prevQuestions => {
        if (JSON.stringify(prevQuestions) !== JSON.stringify(fetchedQuestions)) {
          return fetchedQuestions;
        }
        return prevQuestions;
      });
    };

    fetchQuestions();
  }, [exam, subject, chapters]);

  // Apply filters when questions, difficultyFilter, or chapterFilter change
  useEffect(() => {
    const applyFilters = () => {
      let filtered = questions;
      if (difficultyFilter !== 'all') {
        filtered = filtered.filter(q => q.difficulty === difficultyFilter);
      }
      if (chapterFilter !== 'all') {
        filtered = filtered.filter(q => q.chapter === chapterFilter);
      }
      setFilteredQuestions(filtered);
    };

    applyFilters();
  }, [questions, difficultyFilter, chapterFilter]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const toggleCart = (question) => {
    setSelectedQuestions(prevSelected => {
      const isSelected = prevSelected.some(item => item.id === question.id);
      if (isSelected) {
        return prevSelected.filter(item => item.id !== question.id);
      } else {
        return [...prevSelected, question];
      }
    });
  };


  const handleCartClick = () => {
    navigate('/addedQuestions', { state: { selectedQuestions } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {console.log("Rendering JSX")}
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-700 hover:text-indigo-800 transition-colors duration-300 flex items-center">
            <GraduationCap className="mr-2" /> MyKagada
          </h1>
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="text-indigo-600 border-indigo-600 hover:bg-indigo-50 transition-colors duration-300"
              onClick={handleGoBack}
            >
              Go Back
            </Button>
            <div className="relative cursor-pointer" onClick={handleCartClick}>
              <ShoppingCart className="text-indigo-600 w-6 h-6" />
              {selectedQuestions.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {selectedQuestions.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-6 mb-8 hover:shadow-xl transition-shadow duration-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-indigo-800 mb-4 flex items-center">
            <BookOpen className="mr-2" /> {exam} - {subject} Questions
          </h2>
          <p className="text-indigo-600">Selected Chapters: {chapters.join(', ')}</p>
        </motion.div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex justify-between">
            <div className="w-3/4">
              <h3 className="text-lg font-semibold text-indigo-700 mb-3 flex items-center">
                <Filter className="mr-2" /> Filters
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-2">Difficulty</h4>
                  <div className="flex flex-wrap gap-2">
                    {['all', 'easy', 'medium', 'hard'].map((difficulty) => (
                      <Button
                        key={difficulty}
                        variant={difficultyFilter === difficulty ? "default" : "outline"}
                        size="sm"
                        onClick={() => setDifficultyFilter(difficulty)}
                        className={`capitalize ${difficultyFilter === difficulty ? 'bg-indigo-600 text-white' : 'text-indigo-600'}`}
                      >
                        {difficulty}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-2">Chapter</h4>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant={chapterFilter === 'all' ? "default" : "outline"}
                      size="sm"
                      onClick={() => setChapterFilter('all')}
                      className={chapterFilter === 'all' ? 'bg-indigo-600 text-white' : 'text-indigo-600'}
                    >
                      All Chapters
                    </Button>
                    {chapters.map((chapter) => (
                      <Button
                        key={chapter}
                        variant={chapterFilter === chapter ? "default" : "outline"}
                        size="sm"
                        onClick={() => setChapterFilter(chapter)}
                        className={chapterFilter === chapter ? 'bg-indigo-600 text-white' : 'text-indigo-600'}
                      >
                        {chapter}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-1/4 flex flex-col items-end justify-between">
              <div className="bg-indigo-50 p-4 rounded-lg text-center w-full">
                <span className="text-sm font-medium text-indigo-700 block mb-2">Selected</span>
                <span className="text-2xl font-bold text-indigo-600">{selectedQuestions.length}</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setSelectedQuestions([])} 
                className="text-red-600 border-red-600 hover:bg-red-50 mt-4 w-full"
              >
                Clear Selection
              </Button>
            </div>
          </div>
        </div>

        <Card className="hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-indigo-200">
                  <th className="py-3 px-6 text-sm font-medium text-indigo-500 uppercase tracking-wider w-16">Select</th>
                  <th className="py-3 px-6 text-sm font-medium text-indigo-500 uppercase tracking-wider w-16">No.</th>
                  <th className="py-3 px-6 text-sm font-medium text-indigo-500 uppercase tracking-wider">Question</th>
                  <th className="py-3 px-6 text-sm font-medium text-indigo-500 uppercase tracking-wider w-24">Difficulty</th>
                </tr>
              </thead>
              <tbody>
                {filteredQuestions.map((question, index) => {
                  const isSelected = selectedQuestions.some(item => item.id === question.id);
                  return (
                    <motion.tr 
                      key={question.id}
                      className="border-b border-indigo-100 hover:bg-indigo-50 transition-colors duration-200"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <td className="py-4 px-6">
                        <div
                          className={`w-6 h-6 rounded-md border-2 flex items-center justify-center cursor-pointer transition-all duration-200 ${
                            isSelected 
                              ? 'bg-indigo-500 border-indigo-500 shadow-md' 
                              : 'border-indigo-300 hover:border-indigo-500 hover:shadow'
                          }`}
                          onClick={() => toggleCart(question)}
                        >
                          {isSelected && <Check className="w-4 h-4 text-white" />}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-indigo-500 font-medium">{index + 1}</td>
                      <td className="py-4 px-6">
                        <div className="font-medium text-indigo-900 mb-2">{question.text}</div>
                        {question.options && (
                          <ul className="space-y-1">
                            {question.options.map((option, i) => (
                              <li key={i} className="text-sm text-indigo-600 flex items-start">
                                <span className="mr-2 font-semibold">{String.fromCharCode(65 + i)}.</span>
                                <span>{option}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {question.answer && (
                          <div className="mt-2 text-sm font-semibold text-green-600 flex items-center">
                            <span className="mr-2">Answer:</span>
                            <span className="bg-green-100 px-2 py-1 rounded">{question.answer}</span>
                          </div>
                        )}
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          question.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                          question.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          question.difficulty === 'hard' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {question.difficulty}
                        </span>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {selectedQuestions.length > 0 && (
          <div className="fixed bottom-6 left-0 right-0 px-6">
            <Button 
              className="w-full bg-indigo-600 text-white hover:bg-indigo-700 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center"
              onClick={handleCartClick}
            >
              View Selected Questions
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-indigo-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-indigo-200">
            <p>&copy; {new Date().getFullYear()} MyKagada. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SelectQuestions;