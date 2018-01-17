import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: [
    {
      format: 'umd',
      file: 'dist/three-octree.js',
      name: 'THREE.Octree'
    },
    {
      format: 'es',
      file: 'dist/es6.js'
    },
    {
      format: 'cjs',
      file: 'dist/index.js'
    }
  ],
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    // babel({
    //   exclude: 'node_modules/**' // only transpile our source code
    // })
  ],
  // indicate which modules should be treated as external
  external: ['three']
};
