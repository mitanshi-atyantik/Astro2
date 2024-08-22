/** @type {import('tailwindcss').Config} */
export default {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			width: {
				'65': '65%',  // Custom width value
			  },
			  backgroundImage: {
				'custom-gradient': 'linear-gradient(to right, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)',
			  },
			  fontWeight: {
				'hairline': 100, // Custom name for font-weight: 100
			  },
		},
	},
	plugins: [],
}
