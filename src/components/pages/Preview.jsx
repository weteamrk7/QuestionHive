import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Document, Page, Text, View, StyleSheet, pdf, Font, PDFViewer } from '@react-pdf/renderer';

Font.register({
  family: 'Arial',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/fonts/arial.ttf'
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 20, // Reduced padding for mobile
    fontFamily: 'Times-Roman',
  },
  header: {
    marginBottom: 10,
    marginTop: -10,
    borderBottom: '1pt solid #000000',
  },
  instituteName: {
    fontSize: 16,
    fontWeight: 'heavy',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  schoolName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  subHeader: {
    flexDirection: 'column', // Changed to column for mobile
    marginBottom: 20,
    fontSize: 10, // Reduced font size for mobile
  },
  questionSection: {
    marginBottom: 10,
  },
  questionText: {
    fontSize: 12,
    marginBottom: 5,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 20,
  },
  option: {
    fontSize: 10,
    width: '50%',
    marginBottom: 3,
  },
  watermark: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.1,
    transform: 'rotate(-45deg)',
  },
  watermarkText: {
    fontSize: 40,
    color: 'grey',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 10,
    borderTop: '1pt solid #000000',
    paddingTop: 10,
  },
});

const PDFDocument = ({ formData, selectedQuestions }) => {
  const questionsPerPage = [];
  let currentPage = [];
  let currentHeight = 0;
  const MAX_PAGE_HEIGHT = 1150; // Adjust this value based on your page layout
  const ESTIMATED_HEADER_HEIGHT = 80; // Reduce this value

  const addQuestionToPage = (question, isFirstPage) => {
    const estimatedQuestionHeight = 30 + (question.options ? question.options.length * 15 : 0);
    const availableHeight = isFirstPage ? MAX_PAGE_HEIGHT - ESTIMATED_HEADER_HEIGHT : MAX_PAGE_HEIGHT;

    if (currentHeight + estimatedQuestionHeight > availableHeight && currentPage.length > 0) {
      questionsPerPage.push(currentPage);
      currentPage = [];
      currentHeight = 0;
    }
    
    currentPage.push(question);
    currentHeight += estimatedQuestionHeight;
  };

  // Add questions to pages
  selectedQuestions.forEach((question, index) => {
    addQuestionToPage(question, index === 0);
  });

  // Add any remaining questions
  if (currentPage.length > 0) {
    questionsPerPage.push(currentPage);
  }

  return (
    <Document>
      {questionsPerPage.map((pageQuestions, pageIndex) => (
        <Page key={pageIndex} size="A4" style={styles.page}>
          <View style={styles.watermark} fixed>
            <Text style={styles.watermarkText}>{formData.watermark.toUpperCase()}</Text>
          </View>

          {pageIndex === 0 && (
            <View style={styles.header}>
              <Text style={styles.instituteName}>{formData.schoolName}</Text>
              <View style={styles.subHeader}>
                <Text>Date: {formData.date}</Text>
                <Text>Subject: {formData.subject}</Text>
              </View>
            </View>
          )}

          {pageQuestions.map((question, index) => (
            <View key={question.id} style={styles.questionSection}>
              <Text style={styles.questionText}>
                {questionsPerPage.slice(0, pageIndex).flat().length + index + 1}. {question.text}
              </Text>
              {question.options && (
                <View style={styles.optionsContainer}>
                  {question.options.map((option, i) => (
                    <Text key={i} style={styles.option}>
                      {String.fromCharCode(65 + i)}) {option}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          ))}

          <Text style={styles.footer} fixed>Page {pageIndex + 1} of {questionsPerPage.length}</Text>
        </Page>
      ))}
    </Document>
  );
};

const Preview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedQuestions } = location.state || { selectedQuestions: [] };
  const [formData, setFormData] = useState({
    schoolName: '',
    subject: '',
    date: '',
    watermark: '',
  });
  const [showAnimation, setShowAnimation] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExportPDF = async () => {
    const blob = await pdf(<PDFDocument formData={formData} selectedQuestions={selectedQuestions} />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'question_paper.pdf';
    link.click();
    URL.revokeObjectURL(url);

    // Show animation
    setShowAnimation(true);

    // Redirect after 3 seconds
    setTimeout(() => {
      navigate('/dashboard');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8">Preview Selected Questions</h1>
        
        {/* Input fields */}
        <div className="mb-6 sm:mb-8 grid grid-cols-1 gap-4 sm:gap-6">
          <input
            type="text"
            name="schoolName"
            placeholder="College/School Name"
            value={formData.schoolName}
            onChange={handleInputChange}
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full"
          />
          <input
            type="text"
            name="watermark"
            placeholder="Watermark"
            value={formData.watermark}
            onChange={handleInputChange}
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full"
          />
        </div>

        {/* Export PDF button */}
        <div className="mb-6 sm:mb-8 text-center">
          <button
            onClick={handleExportPDF}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Export PDF
          </button>
        </div>

        {/* PDF Preview */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <PDFViewer width="100%" height="400px" showToolbar={false}>
            <PDFDocument formData={formData} selectedQuestions={selectedQuestions} />
          </PDFViewer>
        </div>

        {/* Animation overlay */}
        {showAnimation && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="text-white text-2xl sm:text-4xl font-bold animate-bounce text-center px-4">
              PDF Exported Successfully!
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Preview;