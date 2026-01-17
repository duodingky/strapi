export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'http:', 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com', '127.0.0.1:1337'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com', '127.0.0.1:1337'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['http://localhost:3000'], // allow Next.js dev server
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
    },
  },

  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
