const sitemap = require('sitemap');
const hostname = 'https://umrohhajisekeluarga.com';

const urls = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/paket-tour', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://akhirtahun.umrohhajisekeluarga.com', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://januari.umrohhajisekeluarga.com/', changefreq: 'monthly', priority: 0.8 },
  // Add additional pages here
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});

const fs = require('fs');

// Write sitemap to public directory
fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());