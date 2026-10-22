import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jeeveshverma.github.io',
  base: '/katara-suites-salalah',
  trailingSlash: 'always',
  build: { format: 'directory', assets: '_ks', inlineStylesheets: 'always' },
  compressHTML: true,
  devToolbar: { enabled: false },
  image: { responsiveStyles: false },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
