export function buildDevServer(options) {
    return {
        port: 3000,
        historyApiFallback: true,
        open: true,
    }
}