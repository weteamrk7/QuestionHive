import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight } from "lucide-react";

const AddedQuestions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  useEffect(() => {
    const cachedData = localStorage.getItem("selectedQuestions");
    if (cachedData) {
      const { cachedQuestions } = JSON.parse(cachedData);
      setSelectedQuestions(cachedQuestions);
    }
  }, []);

  const handleProceed = () => {
    navigate("/preview", { state: { selectedQuestions } });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 pb-20">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>

        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Added Questions
        </h1>

        {selectedQuestions.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 text-lg">No questions added yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {selectedQuestions.map((question, index) => (
              <div
                key={question._id}
                className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg"
              >
                {/* Show Image if available, else show question text */}
                {question.image ? (
                  <div className="mb-4 ">
                    <img
                      src={question.image}
                      alt="Question"
                      className="max-h-32 w-auto object-contain rounded-md shadow-sm"
                    />
                  </div>
                ) : (
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    {index + 1}. {question.question}
                  </h2>
                )}

                {/* Display Options */}
                {question.options && (
                  <ul className="space-y-2 mb-4">
                    {question.options.map((option, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-3 text-sm font-medium">
                          {String.fromCharCode(65 + i)}
                        </span>
                        {option}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Display Answer */}
                {question.answer && (
                  <div className="text-sm font-medium text-green-600">
                    Answer:{" "}
                    <span className="bg-green-100 px-2 py-1 rounded">
                      {question.answer}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {selectedQuestions.length > 0 && (
          <div className="fixed bottom-6 left-0 right-0 px-6">
            <div className="max-w-4xl mx-auto">
              <Button
                className="w-full bg-indigo-600  backdrop-blur-sm text-white hover:bg-indigo-500 hover:bg-opacity-90 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out"
                onClick={handleProceed}
              >
                Proceed to Review <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddedQuestions;
