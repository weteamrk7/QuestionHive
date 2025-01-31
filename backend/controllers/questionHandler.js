import Question from "../models/questions.js";

export async function addMultipleQuestions(req, res){
    const data = req.body.questions;
   
    try {
        
        let errors = [];
        data.forEach(async(question)=>{
            try {
                
                const newQuestion = new Question(question);
                await newQuestion.save();

            } catch (e) {
                errors.push(e);
            }
        })
        res.status(200).json({
            success : true,
            error : false,
            message : "Questions added successfully!",
            errors
            
           })
    } catch (e) {
        res.status(201).json({
            success : false,
            error : true,
            message : "some internal server error occured",
            e 
           })
    }
}
export async function addQuestion(req, res){
    const data = req.body;
   
    try {
        
        const newQuestion = new Question(data);
        await newQuestion.save();

        res.status(200).json({
            success : true,
            error : false,
            message : "question added successfully!",
            question : data
            
           })
    } catch (e) {
        res.status(201).json({
            success : false,
            error : true,
            message : "some internal server error occured"
           })
    }
}
export async function getQuestions(req, res){

    
    const { category, subject, chapter } = req.query;
    console.log(category, subject, chapter)
    try {
        
  
   
        const filter = {};
        if (category) filter.category = category;
        if (subject) filter.subject = subject;
        if (chapter && chapter !== 'all') filter.chapter = chapter;

         const questions = await Question.find(filter);

        res.status(200).json({
            success : true,
            error : false,
            message : "Questions fetched succesfully!",
            questions 
            
           })
    } catch (e) {
        res.status(201).json({
            success : false,
            error : true,
            message : "some internal server error occured",
            e 
           })
    }
}


export async function deleteQuestion(req, res) {
    try {
        const { id } = req.params;
        
        if (!id) {
            return res.status(400).json({
                success: false,
                error: true,
                message: "Question ID is required",
            });
        }

        const deletedQuestion = await Question.findByIdAndDelete(id);

        if (!deletedQuestion) {
            return res.status(404).json({
                success: false,
                error: true,
                message: "Question not found",
            });
        }

        res.status(200).json({
            success: true,
            error: false,
            message: "Question deleted successfully",
            deletedQuestion,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: true,
            message: "Internal server error",
            errorDetails: error.message,
        });
    }
}

export async function getChapters(req, res){

    
    const { category, subject } = req.query;
    // console.log(category, subject, chapter)
    try {
        

   
        if (!subject || !category) {
            return res.status(400).json({ error: 'Subject and Category are required' });
          }
      
        
          const chapters = await Question.aggregate([
            { $match: { subject, category } }, 
            { $group: { _id: '$chapter' } }, 
            { $project: { _id: 0, chapter: '$_id' } }, 
          ]);
      
          res.status(200).json({chapters : chapters.map(chapter => chapter.chapter)});
    } catch (e) {
        res.status(201).json({
            success : false,
            error : true,
            message : "some internal server error occured",
            e 
           })
    }
}
