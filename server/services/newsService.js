import Parser from 'rss-parser';

const parser = new Parser();

// RSS Feeds list
const FEEDS = [
    {
        url: 'https://news.google.com/rss/search?q=inteligencia+artificial+when:24h&hl=es-419&gl=AR&ceid=AR:es-419',
        category: 'Noticias Generales',
        sourceName: 'Google News'
    },
    {
        url: 'https://feeds.feedburner.com/TechCrunch/startups', // Example tech feed, filtering for AI usually requires parsing
        category: 'Industria',
        sourceName: 'TechCrunch'
    },
    {
        url: 'https://www.wired.com/feed/tag/ai/latest/rss',
        category: 'Investigación',
        sourceName: 'Wired AI'
    }
];

// Helper to extract image from content if RSS doesn't provide explicit enclosure
const extractImage = (content) => {
    if (!content) return null;
    const match = content.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : null;
};

// Helper to generate slug
const generateSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
};

const fetchRSSNews = async () => {
    let allNews = [];

    for (const feedSource of FEEDS) {
        try {
            const feed = await parser.parseURL(feedSource.url);

            const normalizedItems = feed.items.map(item => {
                // Try to find image
                let imageUrl = item.enclosure?.url || item['media:content']?.['$']?.url || extractImage(item['content:encoded'] || item.content || item.description);

                // Fallback if no image found, use a technology/AI placeholder from Unsplash or similar
                if (!imageUrl) {
                    imageUrl = `https://placehold.co/800x600/1a1a1a/FFF?text=${encodeURIComponent(feedSource.sourceName)}`;
                    // Or specific fallbacks based on keywords
                }

                return {
                    title: item.title,
                    slug: generateSlug(item.title),
                    description: item.contentSnippet || item.description || '',
                    content: item['content:encoded'] || item.content || item.description,
                    sourceUrl: item.link,
                    sourceName: feedSource.sourceName,
                    category: feedSource.category,
                    publishedAt: new Date(item.pubDate),
                    imageUrl: imageUrl,
                    tags: ['IA', feedSource.sourceName], // Simple tagging
                    readTime: Math.ceil((item.contentSnippet?.length || 500) / 200) // Estimate
                };
            });

            allNews = [...allNews, ...normalizedItems];
        } catch (error) {
            console.error(`Error fetching RSS from ${feedSource.url}:`, error.message);
        }
    }

    return allNews;
};

export default { fetchRSSNews };
