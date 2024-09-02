import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, ClipboardList, School } from 'lucide-react';

function CreateExam() {
  const [selectedExam, setSelectedExam] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const navigate = useNavigate();

  const handleExamSelect = (exam) => {
    setSelectedExam(exam);
    setSelectedSubject(''); // Reset subject selection when exam changes
  };

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Navigate to /questions page with selected exam and subject as query parameters
    navigate(`/questions?exam=${selectedExam}&subject=${selectedSubject}`);
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

            <Button 
              type="submit" 
              className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              disabled={!selectedExam || !selectedSubject}
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