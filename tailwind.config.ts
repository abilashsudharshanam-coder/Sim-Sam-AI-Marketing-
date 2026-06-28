import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: { brandRed: '#EF233C', brandBlue: '#1378FF', brandYellow: '#FFD23F' } } },
  plugins: []
};
export default config;
