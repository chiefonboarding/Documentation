module.exports = {
  title: 'ChiefOnboarding - Documentation',
  description: 'Documentation for ChiefOnboarding',
  base: '/',
  head: [
     ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
     ['meta', { name: 'charset', content: 'UTF-8' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Github', link: 'https://github.com/chiefonboarding' },
      { text: 'COB site', link: 'https://chiefonboarding.com' }
    ],
    sidebar: [
      { path: '/', title: 'Introduction' },
      { path: '/Howto', title: 'How To / Demo' },
      { path: '/Deployment', title: 'Deployment' },
      { path: '/Development', title: 'Development' },
      {
        title: 'Integrations',
        collapsable: false,
        children: [
          '/integrations/Email',
          '/integrations/S3',
          '/integrations/Twilio',
          '/integrations/Sentry',
          '/integrations/Slack',
          '/integrations/Google',
          '/integrations/Asana'
        ]
      },
      { path: '/API', title: 'API' },
      { path: '/Q&A', title: 'Q&A' },
      { path: '/Changelog', title: 'Changelog' }
    ]
  }
}
