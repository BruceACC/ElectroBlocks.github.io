
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/ElectroBlocks"
  },
  {
    "renderMode": 2,
    "route": "/ElectroBlocks/new-section"
  }
],
  assets: new Map([
['index.csr.html', {size: 524, hash: 'c95a8c69697dad76c0a8590b8d84f857d6ee198be8e1e40d1e896b8d74298469', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1037, hash: 'abe2674335a4ce3b0cf9479d6395ac10f7fa153e2ae9b208a292d38a95462ceb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['new-section/index.html', {size: 2203, hash: '8347a92027548caa51b6b692f72dc2b53aae1ca9017781debca7a1fe13efa0aa', text: () => import('./assets-chunks/new-section_index_html.mjs').then(m => m.default)}], 
['index.html', {size: 2203, hash: '8347a92027548caa51b6b692f72dc2b53aae1ca9017781debca7a1fe13efa0aa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
