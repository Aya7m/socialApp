

import { Router } from "express";
import { Allposts, addPost, deletuser, singlePost, updatePost, userPosts } from "./posts.controller.js";


const postRouter=Router()

postRouter.route('/').post(addPost).get(Allposts)
postRouter.route('/:id').get(singlePost).put(updatePost).delete(deletuser)
postRouter.get('/me/:id',userPosts)

// postRouter.post('/',addPost)
// postRouter.get('/',Allposts)
// postRouter.get('/:id',singlePost)
// postRouter.get('/me/:id',userPosts)
// postRouter.put('/:id',updatePost)
// postRouter.delete('/:id',deletuser)
export default postRouter