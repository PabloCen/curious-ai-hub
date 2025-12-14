# Sistema de Noticias Automatizado - Curioso AI Hub

Este proyecto utiliza un sistema de "Static Generator" para las noticias, lo que significa que el frontend no consulta una API externa en tiempo real, sino que consume un archivo JSON estático (`public/data/news.json`) que se actualiza periódicamente.

## ¿Cómo funciona?

1.  **Script de Fetch (`scripts/fetch-news.js`)**:
    Este script se encarga de:
    - Conectarse a fuentes externas (APIs de noticias, RSS feeds).
    - Normalizar los datos al formato que usa nuestra UI.
    - Guardar el resultado en `public/data/news.json`.

2.  **Frontend (`src/pages/NewsPage.jsx`)**:
    - Al cargar, la página hace un `fetch('/data/news.json')`.
    - Si falla, usa datos de respaldo locales.
    - Renderiza las noticias con filtros y búsqueda instantánea (ya que el JSON es ligero).

## Configuración de Actualización Automática (Cron Job)

Para mantener las noticias frescas (ej. 3 veces al día), se recomienda configurar un Cron Job o un GitHub Action.

### Opción A: GitHub Actions (Recomendado)

Crea un archivo `.github/workflows/update-news.yml`:

```yaml
name: Update AI News

on:
  schedule:
    # Ejecutar a las 8:00, 14:00 y 20:00 UTC
    - cron: '0 8,14,20 * * *'
  workflow_dispatch: # Permite ejecución manual

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'

    - name: Install dependencies
      run: npm ci

    - name: Run Fetch Script
      run: node scripts/fetch-news.js
      env:
        NEWS_API_KEY: ${{ secrets.NEWS_API_KEY }} # Si usas una API real

    - name: Commit and Push changes
      run: |
        git config --global user.name 'NewsBot'
        git config --global user.email 'bot@curiosoai.com'
        git add public/data/news.json
        git commit -m "🤖 Actualización automática de noticias"
        git push
```

### Opción B: Cron Job en Servidor

Si el proyecto está hosteado en un VPS, agrega esto al crontab (`crontab -e`):

```bash
0 8,14,20 * * * cd /path/to/project && /usr/bin/node scripts/fetch-news.js
```

## Desarrollo Local

Para probar la actualización de noticias localmente:

```bash
node scripts/fetch-news.js
```

Esto regenerará el archivo `public/data/news.json` con nuevos datos simulados.
