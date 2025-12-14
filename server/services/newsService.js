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
        url: 'https://feeds.feedburner.com/TechCrunch/startups',
        category: 'Industria',
        sourceName: 'TechCrunch'
    },
    {
        url: 'https://www.wired.com/feed/tag/ai/latest/rss',
        category: 'Investigación',
        sourceName: 'Wired AI'
    },
    {
        url: 'https://es.wired.com/feed/rss', // Spanish Wired
        category: 'Noticias Generales',
        sourceName: 'Wired ES'
    }
];

const FALLBACK_IMAGES = [
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    'https://images.unsplash.com/photo-1676277791608-ac54525aa94a?w=800&q=80',
    'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
    'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&q=80',
    'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=800&q=80'
];

const MOCK_CURIOSIDADES = [
    {
        title: "¿Sabías que la primera IA data de 1951?",
        slug: "sabias-que-primera-ia-1951",
        description: "El programa de damas de Christopher Strachey fue uno de los primeros ejemplos exitosos de inteligencia artificial.",
        sourceUrl: "#",
        sourceName: "Curioso AI Hub",
        category: "Curiosidades",
        tags: ["Historia", "Dato Curioso"],
        imageUrl: "https://images.unsplash.com/photo-1535378437327-b7102a5931ee?w=800&q=80"
    },
    {
        title: "La paradoja de Moravec",
        slug: "paradoja-moravec-ia",
        description: "En IA, lo que es difícil para los humanos (cálculo) es fácil para las máquinas, pero lo fácil (caminar) es difícil.",
        sourceUrl: "#",
        sourceName: "Curioso AI Hub",
        category: "Curiosidades",
        tags: ["Teoría", "Robótica"],
        imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
    },
    {
        title: "Alucinaciones de la IA",
        slug: "alucinaciones-ia-explicacion",
        description: "Cuando un modelo de lenguaje inventa datos con total confianza, se le llama 'alucinación'.",
        sourceUrl: "#",
        sourceName: "Curioso AI Hub",
        category: "Curiosidades",
        tags: ["LLM", "Glosario"],
        imageUrl: "https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&q=80"
    },
    {
        title: "El test de Turing",
        slug: "test-de-turing-origen",
        description: "Propuesto por Alan Turing en 1950, evalúa si una máquina puede exhibir un comportamiento indistinguible del humano.",
        sourceUrl: "#",
        sourceName: "Curioso AI Hub",
        category: "Curiosidades",
        tags: ["Historia", "Turing"],
        imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80"
    }
];

// Helper to extract image
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
        .replace(/(^-|-$)+/g, '') + '-' + Math.floor(Math.random() * 1000); // Add random to avoid collisions
};

const getRandomFallbackImage = () => {
    return FALLBACK_IMAGES[Math.floor(Math.random() * FALLBACK_IMAGES.length)];
};

const fetchRSSNews = async () => {
    let allNews = [];

    // 1. Fetch RSS
    for (const feedSource of FEEDS) {
        try {
            const feed = await parser.parseURL(feedSource.url);

            const normalizedItems = feed.items.map(item => {
                let imageUrl = item.enclosure?.url || item['media:content']?.['$']?.url || extractImage(item['content:encoded'] || item.content || item.description);

                if (!imageUrl) {
                    imageUrl = getRandomFallbackImage();
                }

                return {
                    title: item.title,
                    slug: generateSlug(item.title),
                    description: item.contentSnippet || item.description || 'Sin descripción disponible.',
                    content: item['content:encoded'] || item.content || item.description || '',
                    sourceUrl: item.link,
                    sourceName: feedSource.sourceName,
                    category: feedSource.category,
                    publishedAt: new Date(item.pubDate),
                    imageUrl: imageUrl,
                    tags: ['IA', feedSource.sourceName],
                    readTime: Math.ceil((item.contentSnippet?.length || 500) / 200)
                };
            });

            allNews = [...allNews, ...normalizedItems];
        } catch (error) {
            console.error(`Error fetching RSS from ${feedSource.url}:`, error.message);
        }
    }

    // 2. Add Curiosidades (Mocked for consistency if not found in feeds)
    const curiosidades = MOCK_CURIOSIDADES.map(item => ({
        ...item,
        publishedAt: new Date(),
        readTime: 2
    }));

    allNews = [...allNews, ...curiosidades];

    return allNews;
};

export default { fetchRSSNews };
