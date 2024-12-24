import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	webpack(config, options) {
		config.module.rules.push({
			test: /\.(mp3)$/,
			use: {
				loader: 'file-loader',
			},
		});
		return config;
	},
};

export default nextConfig;
