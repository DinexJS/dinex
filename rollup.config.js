import { terser } from 'rollup-plugin-terser';
export default {
  input: 'packages/index.js',
  // outputs for iife and cjs with minified code
  output: [
    {
      file: 'dist/dinex.iife.js',
      format: 'iife',
      name: 'index',
    },
    {
      file: 'dist/dinex.js',
      format: 'cjs',
    },

    {
      file: 'dist/dinex.iife.min.js',
      format: 'iife',
      name: 'index',
      plugins: [terser()],
    },
    {
      file: 'dist/dinex.min.js',
      format: 'cjs',
      plugins: [terser()],
    },
  ],
};
