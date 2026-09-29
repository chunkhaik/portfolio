import { build as veliteBuild } from 'velite';

// ponytail: next build invokes webpack() per compiler (client/server/edge);
// velite's clean:true makes concurrent runs wipe each other, so run it once per process
let veliteBuilt = false;

/** @type {import('next').NextConfig} */
export default {
	output: 'export',
	reactStrictMode: true,
	images: {
		// static export can't run the image optimizer; CldImage serves Cloudinary's CDN directly
		unoptimized: true,
	},
	webpack: (config) => {
		config.plugins.push({
			apply: (compiler) => {
				compiler.hooks.beforeRun.tapPromise('Velite', async () => {
					if (veliteBuilt) return;
					veliteBuilt = true;
					await veliteBuild();
				});
				compiler.hooks.watchRun.tapPromise('Velite', async () => {
					if (veliteBuilt) return;
					veliteBuilt = true;
					await veliteBuild();
				});
			},
		});
		return config;
	},
};
