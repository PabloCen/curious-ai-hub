import mongoose from 'mongoose';

const newsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true, // Prevent duplicates by title
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String, // Full HTML content if available
    },
    imageUrl: {
      type: String,
    },
    sourceUrl: {
      type: String,
      required: true,
    },
    sourceName: {
      type: String,
      default: 'External Source'
    },
    category: {
      type: String,
      enum: ['Noticias Generales', 'Herramientas', 'Investigación', 'Industria', 'Curiosidades'],
      default: 'Noticias Generales'
    },
    tags: [String],
    publishedAt: {
      type: Date,
      default: Date.now
    },
    readTime: {
      type: Number,
      default: 5
    },
    isFeatured: {
        type: Boolean,
        default: false
    }
  },
  {
    timestamps: true,
  }
);

const News = mongoose.model('News', newsSchema);

export default News;
