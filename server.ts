import express from 'express';
import next from 'next';
import cors from 'cors';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use((_, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
        );
        next();
    });

    server.use(cors());

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    const serverInstance = server.listen(3000);

    serverInstance.on('error', (err) => {
        console.error(err);
    });

    serverInstance.on('listening', () => {
        console.log('> Ready on http://localhost:3000');
    });
});