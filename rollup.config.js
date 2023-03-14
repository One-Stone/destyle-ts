import typescript from '@rollup/plugin-typescript'
// import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
// import packageJson from './package.json'

export default [
	{
		input: 'src/index.ts',
		output: [
			// {
			// 	file: packageJson.main,
			// 	format: 'cjs',
			// 	sourcemap: true,
			// 	name: packageJson.name,
			// },
			{
				file: './dist/index.js',
				format: 'esm',
				sourcemap: true,
				// name: packageJson.name,
			},
		],
		plugins: [
			resolve(),
			// commonjs(),
			typescript({ tsconfig: './tsconfig.json' }),
			terser(),
		],
	},
]
