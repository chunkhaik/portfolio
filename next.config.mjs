import { build } from 'velite'

/** @type {import('next').NextConfig} */
export default {
  // othor next config here...
  webpack: config => {
    config.plugins.push(new VeliteWebpackPlugin())
    return config
  }, 

  async rewrites() {
    return [
      {
        source: '/resume',
        destination: '/ChunKhai_Resume_Sep24.pdf',
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/chunkhaik',
        basePath: false,
      },
      {
        source: '/:path*', // Match all paths
        destination: '/', // Rewrite to the home page
      },
    ];
  },
};

class VeliteWebpackPlugin {
  static started = false
  apply (/** @type {import('webpack').Compiler} */ compiler) {
    // executed three times in nextjs
    // twice for the server (nodejs / edge runtime) and once for the client
    compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
      if (VeliteWebpackPlugin.started) return
      VeliteWebpackPlugin.started = true
      const dev = compiler.options.mode === 'development'
      await build({ watch: dev, clean: !dev })
    })
  }
}

