import News from '../models/News.js';
import updateNewsJob from '../jobs/newsUpdater.js';

// @desc    Get all news (paginated)
// @route   GET /api/news
// @access  Public
const getNews = async (req, res) => {
  const pageSize = Number(req.query.limit) || 12;
  const page = Number(req.query.page) || 1;
  const category = req.query.category || 'all';
  const search = req.query.search || '';

  // Build query
  let query = {};

  if (category !== 'all' && category !== 'Todas') {
      if (category === 'Curiosidades') {
          query.category = 'Curiosidades';
      } else {
           query.category = category;
      }
  }

  // Search filter
  if (search) {
      query.$or = [
          { title: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
          { tags: { $regex: search, $options: 'i' } }
      ];
  }

  try {
      const count = await News.countDocuments(query);
      const news = await News.find(query)
          .sort({ publishedAt: -1 }) // Newest first
          .limit(pageSize)
          .skip(pageSize * (page - 1));

      res.json({
          news,
          page,
          pages: Math.ceil(count / pageSize),
          total: count
      });
  } catch (error) {
      res.status(500).json({ message: 'Error fetching news' });
  }
};

// @desc    Get single news by slug
// @route   GET /api/news/:slug
// @access  Public
const getNewsBySlug = async (req, res) => {
    try {
        const article = await News.findOne({ slug: req.params.slug });
        if (article) {
            res.json(article);
        } else {
            res.status(404).json({ message: 'News article not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching article' });
    }
};

// @desc    Trigger manual update (for testing)
// @route   POST /api/news/update
// @access  Public (should be protected in prod)
const triggerUpdate = async (req, res) => {
    await updateNewsJob();
    res.json({ message: 'News update triggered' });
};

export { getNews, getNewsBySlug, triggerUpdate };
