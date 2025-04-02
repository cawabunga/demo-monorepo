import isolatedDecl from 'bun-plugin-isolated-decl';

await Bun.build({
    entrypoints: ['./index.ts'],
    outdir: './dist',
    plugins: [isolatedDecl()],
    splitting: true,
    packages: 'external',
    sourcemap: 'linked'
});