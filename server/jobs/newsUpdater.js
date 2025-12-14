import News from '../models/News.js';
import newsService from '../services/newsService.js';

const updateNews = async () => {
    console.log('🔄 Running News Updater Job...');
    try {
        const articles = await newsService.fetchRSSNews();

        let createdCount = 0;
        let errors = 0;

        for (const article of articles) {
            try {
                // Upsert to avoid duplicates, check by title or link
                const exists = await News.findOne({
                    $or: [{ title: article.title }, { sourceUrl: article.sourceUrl }]
                });

                if (!exists) {
                    await News.create(article);
                    createdCount++;
                }
            } catch (err) {
                // Ignore duplicate errors if they slip through
                errors++;
            }
        }

        console.log(`✅ News Updater finished. Added ${createdCount} new articles.`);
    } catch (error) {
        console.error('❌ News Updater failed:', error);
    }
};

export default updateNews;
