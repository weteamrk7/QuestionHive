import axios from "axios";

export async function getChapters(data){

    console.log(data);
    try {
        let chapters = await axios.get(`http://localhost:7896/api/question/getChapters?subject=${data.subject}&category=${data.category}`);

        

        return chapters?.data?.chapters ;
    } catch (e) {
        console.log(e);
        return null;
    }

}