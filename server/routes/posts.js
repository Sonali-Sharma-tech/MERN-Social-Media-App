import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

/** 
 * when someone visit localhost:4000/   
 now as we have added '/posts' prefix in index.js so all the routes mentioned here 
 will have prefix '/posts'
 * 
 * */ 
router.get('/', getPosts)
router.post('/', createPost)

export default router;
