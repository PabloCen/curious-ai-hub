import News from '../models/News.js';

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
      // Handle special "Curiosidades" vs "Noticias"
      if (category === 'Curiosidades') {
          query.category = 'Curiosidades';
      } else {
          // If filtering by specific category
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

// @desc    Trigger manual update (for testing)
// @route   POST /api/news/update
// @access  Public (should be protected in prod)
import updateNewsJob from '../jobs/newsUpdater.js';
const triggerUpdate = async (req, res) => {
    await updateNewsJob();
    res.json({ message: 'News update triggered' });
};

export { getNews, triggerUpdate };
