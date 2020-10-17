module.exports = {
  title: 'ChiefOnboarding - Documentation',
  description: 'Documentation for ChiefOnboarding',
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Github', link: 'https://github.com/chiefonboarding' },
      { text: 'COB site', link: 'https://chiefonboarding.com' }
    ],
    sidebar: [
      { path: '/', title: 'Introduction' },
      { path: '/Deployment', title: 'Deployment' },
      { path: '/Development', title: 'Development' },
      {
        title: 'Integrations',
        collapsable: false,
        children: [
          '/integrations/Slack',
          '/integrations/Google',
          '/integrations/S3',
          '/integrations/Twilio',
          '/integrations/Sentry',
          '/integrations/Email'
        ]
      },
      { path: '/Q&A', title: 'Q&A' }
    ]
  }
}
