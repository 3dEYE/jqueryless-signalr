import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

module.exports = {
    input: 'src/signalr.js',
    output: {
        format: 'umd',
        file: 'dist/jqueryless-signalr.js',
        name: "SignalR"
    },
    plugins: [
        nodeResolve(),
        commonjs({
            include: ['node_modules/**']
        })
    ]
};
