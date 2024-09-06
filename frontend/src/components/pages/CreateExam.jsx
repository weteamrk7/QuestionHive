import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, ClipboardList, School } from 'lucide-react';

import { JEEQuestions } from "@/assets/Questions/JEEQuestions";
import { NEETQuestions } from "@/assets/Questions/NEETQuestions";
import { KCETQuestions } from "@/assets/Questions/KCETQuestions";
import { EleventhQuestions } from "@/assets/Questions/11thQuestions";
import { TwelfthQuestions } from "@/assets/Questions/12thQuestions";

function CreateExam() {
  const [selectedExam, setSelectedExam] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedChapters, setSelectedChapters] = useState([]);
  const navigate = useNavigate();

  const handleExamSelect = (exam) => {
    setSelectedExam(exam);
    setSelectedSubject('');
    setSelectedChapters([]);
  };

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    setSelectedChapters([]);
  };

  const handleChapterSelect = (chapter) => {
    setSelectedChapters(prev => 
      prev.includes(chapter) 
        ? prev.filter(c => c !== chapter)
        : [...prev, chapter]
    );
  };

  const handleSelectAllChapters = () => {
    const allChapters = Object.keys(getQuestions()[selectedSubject] || {});
    setSelectedChapters(selectedChapters.length === allChapters.length ? [] : allChapters);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/questions?exam=${selectedExam}&subject=${selectedSubject}&chapters=${selectedChapters.join(',')}`);
  };

  const exams = [
    { name: 'JEE', icon: <GraduationCap className="h-6 w-6" /> },
    { name: 'NEET', icon: <ClipboardList className="h-6 w-6" /> },
    { name: 'KCET', icon: <BookOpen className="h-6 w-6" /> },
    { name: '11th', icon: <School className="h-6 w-6" /> },
    { name: '12th', icon: <School className="h-6 w-6" /> },
  ];

  const subjects = {
    JEE: ['Physics', 'Chemistry', 'Mathematics'],
    NEET: ['Physics', 'Chemistry', 'Biology'],
    KCET: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    '11th': ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English'],
    '12th': ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English'],
  };

  const getQuestions = () => {
    switch (selectedExam) {
      case 'JEE': return JEEQuestions;
      case 'NEET': return NEETQuestions;
      case 'KCET': return KCETQuestions;
      case '11th': return EleventhQuestions;
      case '12th': return TwelfthQuestions;
      default: return {};
    }
  };

  const chapters = selectedSubject ? Object.keys(getQuestions()[selectedSubject] || {}) : [];

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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Create Exam Paper</h2>
          <form onSubmit={handleSubmit}>
            <label className="block text-lg font-medium text-gray-700 mb-2">Select Exam:</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
              {exams.map((exam) => (
                <Card 
                  key={exam.name} 
                  onClick={() => handleExamSelect(exam.name)}
                  className={`cursor-pointer p-4 border rounded-md ${selectedExam === exam.name ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border-blue-600'} transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
                >
                  <CardContent className="flex flex-col items-center justify-center h-20">
                    {exam.icon}
                    <span className="text-lg font-medium mt-2">{exam.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            {selectedExam && (
              <>
                <label className="block text-lg font-medium text-gray-700 mb-2">Select Subject:</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
                  {subjects[selectedExam].map((subject) => (
                    <Card 
                      key={subject} 
                      onClick={() => handleSubjectSelect(subject)}
                      className={`cursor-pointer p-4 border rounded-md ${selectedSubject === subject ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border-blue-600'} transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
                    >
                      <CardContent className="flex flex-col items-center justify-center h-20">
                        <span className="text-lg font-medium mt-2">{subject}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}

            {selectedSubject && (
              <>
                <label className="block text-lg font-medium text-gray-700 mb-2">Select Chapters:</label>
                <div className="mb-4">
                  <Card className="p-6 border rounded-md bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                    <CardContent>
                      <div className="flex items-center mb-4">
                        <Checkbox
                          id="select-all"
                          checked={selectedChapters.length === chapters.length}
                          onCheckedChange={handleSelectAllChapters}
                          className="h-5 w-5"
                        />
                        <label htmlFor="select-all" className="ml-3 text-base font-medium text-gray-700 hover:text-blue-600 cursor-pointer">
                          Select All Chapters
                        </label>
                      </div>
                      <div className="space-y-3">
                        {chapters.map((chapter) => (
                          <div key={chapter} className="flex items-center p-2 rounded-md hover:bg-gray-50 transition-colors duration-200">
                            <Checkbox
                              id={chapter}
                              checked={selectedChapters.includes(chapter)}
                              onCheckedChange={() => handleChapterSelect(chapter)}
                              className="h-5 w-5"
                            />
                            <label htmlFor={chapter} className="ml-3 text-base font-medium text-gray-700 hover:text-blue-600 cursor-pointer flex-grow">
                              {chapter}
                            </label>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </>
            )}

            <Button 
              type="submit" 
              className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              disabled={!selectedExam || !selectedSubject || selectedChapters.length === 0}
            >
              Continue
            </Button>
          </form>
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

export default CreateExam;