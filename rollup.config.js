import swc from 'rollup-plugin-swc';
import extensions from 'rollup-plugin-extensions';

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
        target: 'es2015',
      },
    })
  ],
}
