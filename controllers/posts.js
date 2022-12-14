
import PostMessage from "../models/postsMessage.js";


export const getPosts = async (req, res)=>{
    try{
        const postMessage = await PostMessage.find();

        res.status(200).json(postMessage)
    } catch(error){
        res.status(404).json({messgae: error.messaage})
    }
};

export const createPost = (req, res) =>{
   const post = req.body;
   const newPost = new postMessage(post);

   try {
    res.status(201).json(newPost)
   } catch (error) {
    res.status(409).json({ messaage: error.messaage})
   }
}