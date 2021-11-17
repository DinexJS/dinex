import { terser } from "rollup-plugin-terser"
export default{
    input: 'src/index.js',
    // outputs for iife and cjs with minified code
    output: [
        {
            file: 'dist/dinex.iife.js',
            format: 'iife',
            name: 'index',
            plugins: [terser()]
        },
        {
            file: 'dist/dinex.js',
            format: 'cjs',
            plugins: [terser()]
        }
        
    ]
}