import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_FILE = path.join(__dirname, '../public/data/news.json');

// Categorías de noticias
const CATEGORIES = ['Noticias Generales', 'Herramientas', 'Investigación', 'Industria'];
const TAGS = ['OpenAI', 'Google', 'Microsoft', 'Midjourney', 'Regulación', 'Robótica', 'LLMs'];

// Mock de fuentes
const SOURCES = [
  { name: 'TechCrunch AI', url: 'https://techcrunch.com/category/artificial-intelligence/' },
  { name: 'The Verge', url: 'https://www.theverge.com/ai-artificial-intelligence' },
  { name: 'OpenAI Blog', url: 'https://openai.com/blog' },
  { name: 'Wired', url: 'https://www.wired.com/tag/artificial-intelligence/' }
];

// Generador de noticias falsas pero realistas
const generateMockNews = (count = 12) => {
  const news = [];

  for (let i = 0; i < count; i++) {
    const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
    const source = SOURCES[Math.floor(Math.random() * SOURCES.length)];
    const date = new Date();
    date.setHours(date.getHours() - Math.floor(Math.random() * 48)); // Últimas 48 horas

    news.push({
      id: `news-${Date.now()}-${i}`,
      title: `Noticia Generada #${i + 1}: Avances importantes en ${category}`,
      slug: `noticia-generada-${i + 1}-avances-${category.toLowerCase().replace(/\s+/g, '-')}`,
      category: category,
      summary: `Este es un resumen automático simulando una noticia real sobre ${category}. La IA sigue avanzando a pasos agigantados y esta noticia cubre los últimos detalles importantes.`,
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>La tecnología detrás de este avance promete revolucionar el sector de ${category}. Expertos aseguran que veremos más cambios en los próximos meses.</p>
      `,
      sourceName: source.name,
      sourceUrl: source.url,
      imageUrl: `/images/news/placeholder-${(i % 5) + 1}.jpg`, // Asumiendo que tendremos placeholders
      tags: [TAGS[Math.floor(Math.random() * TAGS.length)], TAGS[Math.floor(Math.random() * TAGS.length)]],
      publishedAt: date.toISOString(),
      readingTime: Math.floor(Math.random() * 10) + 2
    });
  }

  return news;
};

// Función principal
const main = async () => {
  console.log('📰 Iniciando proceso de obtención de noticias...');

  // Aquí iría la lógica real de fetch a APIs externas
  // const response = await fetch('https://newsapi.org/v2/everything?q=AI...');
  // const data = await response.json();

  // Por ahora usamos el generador mock
  console.log('⚠️ No se detectó API KEY, generando datos de prueba...');
  const newsData = generateMockNews(15);

  // Asegurar que el directorio existe
  const dir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }

  // Guardar archivo JSON
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(newsData, null, 2));

  console.log(`✅ Noticias guardadas exitosamente en: ${OUTPUT_FILE}`);
  console.log(`📊 Total de noticias: ${newsData.length}`);
};

main().catch(console.error);
