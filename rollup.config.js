import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import { babel } from '@rollup/plugin-babel'
import dts from 'rollup-plugin-dts'
import commonjs from '@rollup/plugin-commonjs'
import pkg from './package.json'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
    ],
    external: [...Object.keys(pkg.peerDependencies || {})],
    plugins: [commonjs(), nodeResolve(), typescript(/* { plugin options } */)],
  },
  {
    input: 'lib/esm/index.d.ts',
    output: [{ file: 'lib/index.d.ts', format: 'esm' }],
    external: [/\.css$/],
    plugins: [dts()],
  },
]
