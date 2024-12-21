import Question from "../models/questions.js";

export async function addMultipleQuestions(req, res){
    const data = req.body;
   
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
            message : "data added successfully!",
            errors
            
           })
    } catch (e) {
        res.status(201).json({
            success : false,
            error : true,
            message : "some internal server error occured"
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
