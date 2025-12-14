import express from 'express';
import { getNews, getNewsBySlug, triggerUpdate } from '../controllers/newsController.js';

const router = express.Router();

router.get('/', getNews);
router.post('/update', triggerUpdate);
router.get('/:slug', getNewsBySlug);

export default router;
