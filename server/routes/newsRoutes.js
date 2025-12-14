import express from 'express';
import { getNews, triggerUpdate } from '../controllers/newsController.js';

const router = express.Router();

router.get('/', getNews);
router.post('/update', triggerUpdate);

export default router;
