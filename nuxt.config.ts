// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    modules: ['nuxt-icon'],
    postcss: {
        plugins: {
        tailwindcss: {},
        autoprefixer: {},
        },
    },
    imports: {
        dirs: [
          // Scan top-level modules
          'composables',
          // ... or scan modules nested one level deep with a specific name and file extension
          'composables/*/index.{ts,js,mjs,mts}',
          // ... or scan all modules within given directory
          'composables/**'
        ]
    },
    app: {
        head: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
          link: [
            {
                rel: "preconnect",
                href:"https://fonts.googleapis.com"
            },
            {
                rel: "preconnect",
                href:"https://fonts.gstatic.com",
                crossorigin: ''
            },
            {
                rel: "stylesheet",
                href:"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
            }
          ]
        }
    }
})
