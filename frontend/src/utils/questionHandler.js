import axios from "axios";

let url = import.meta.env.VITE_BACKEND_URL;
export async function getChapters(data){

    console.log(data);
    try {
        let chapters = await axios.get(`${url}/api/question/getChapters?subject=${data.subject}&category=${data.category}`);

        

        return chapters?.data?.chapters ;
    } catch (e) {
        console.log(e);
        return null;
    }

}