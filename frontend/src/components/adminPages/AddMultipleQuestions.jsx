import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function AddMultipleQuestions() {

    let backend_url = import.meta.env.VITE_BACKEND_URL;
  const [questions, setQuestions] = useState("");
  const validateQuestions = (questions) => {
    try {
      console.log("Raw Input:", questions); // Debugging line
      const parsed = JSON.parse(questions);
      console.log("Parsed JSON:", parsed); // Debugging line
      const data = Array.isArray(parsed) ? parsed : [parsed];
  
      data.forEach((q, index) => {
        if (!["easy", "medium", "hard"].includes(q.difficulty)) {
          throw new Error(`Question ${index + 1}: Invalid difficulty level.`);
        }
        if (!q.category || !q.subject || !q.chapter) {
          throw new Error(`Question ${index + 1}: Missing required fields.`);
        }
        if (!Array.isArray(q.options) || q.options.length < 2) {
          throw new Error(`Question ${index + 1}: Must have at least two options.`);
        }
        if (!q.options.includes(q.answer)) {
          throw new Error(`Question ${index + 1}: Answer must be one of the options.`);
        }
      });
  
      return data;
    } catch (error) {
      console.error("JSON Parse Error:", error.message);
      toast.error(error.message);
      return null;
    }
  };
  
  const handleSubmit = async () => {
    const validQuestions = validateQuestions(questions);
    if (!validQuestions) return;
    
    try {
      
      let res = await axios.post(`${backend_url}/api/question/add-multiple-questions`, { questions: validQuestions });

      toast.success(res?.data?.message);
      setQuestions("");
    } catch (error) {
        console.log(error);
      toast.error("Error adding questions.", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <div className="w-full max-w-2xl transform transition-all duration-300 hover:scale-[1.02]">
        <div className=" bg-gray-800/70 p-8 rounded-2xl shadow-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Add Questions
          </h2>
          
          <div className="relative group">
            <textarea
              className="w-full h-60 p-4 text-gray-200 bg-gray-900/50 rounded-xl 
                         border border-gray-700 focus:border-blue-500
                         transition-all duration-300 ease-in-out
                         focus:ring-2 focus:ring-blue-500/50 focus:outline-none
                         placeholder-gray-500
                         resize-none"
              placeholder={`Enter questions in JSON format :
                [
                    {
                        "difficulty": "medium",
                        "category": "JEE",
                        "question": "What is Avogadro's number?",
                        "image": null,
                        "options": [        "6.02 x 10^23",        "3.14",        "1.62 x 10^23",        "2.17 x 10^23"      ],
                        "answer": "6.02 x 10^23",
                        "subject": "Chemistry",
                        "chapter": "Chapter 3"
                    }
                ]`}
              value={questions}
            
              onChange={(e) => setQuestions(e.target.value)}
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
          
          <button 
            onClick={handleSubmit}
            className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-700 
                     hover:from-blue-500 hover:to-blue-600
                     text-white font-semibold py-3 px-6 rounded-xl
                     transform transition-all duration-300
                     hover:shadow-lg hover:shadow-blue-500/25
                     active:scale-95 focus:outline-none
                     border border-blue-600/50
                     relative overflow-hidden group"
          >
            <span className="relative z-10">Submit Questions</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
