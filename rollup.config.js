import swc from 'rollup-plugin-swc';
import extensions from 'rollup-plugin-extensions';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export default {
  input: './src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  plugins: [
    extensions({
      extensions: ['.ts', '.js'],
      resolveIndex: true,
    }),
    swc({
      jsc: {
        parser: {
          syntax: 'typescript',
        },
        target: 'es5',
      },
    }),
    commonjs(),
    nodeResolve({
      browser: true,
      exportConditions: ["node"]
    }),
    nodePolyfills()
  ],
}
