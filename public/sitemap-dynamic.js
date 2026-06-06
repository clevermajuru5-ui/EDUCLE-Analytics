// This file generates dynamic sitemap entries
// URLs will be added based on database content

module.exports = async () => {
  return [
    {
      url: '/',
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      url: '/admin/login',
      changefreq: 'monthly',
      priority: 0.9,
    },
    {
      url: '/school/login',
      changefreq: 'monthly',
      priority: 0.9,
    },
    {
      url: '/student/verify',
      changefreq: 'monthly',
      priority: 0.8,
    },
  ]
}
