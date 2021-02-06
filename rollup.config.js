import multiEntry from '@rollup/plugin-multi-entry';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
    input: './src/**/*.ts',
    output: {
        file: './dist/integrant-di.esm.ts',
        format: 'esm',
        sourcemap: true
    },
    plugins: [
        multiEntry(),
        resolve(),
        typescript()
    ]
}