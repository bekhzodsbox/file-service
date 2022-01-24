import { createServer } from 'http';
import { HTTP_PORT } from './constants';
import { handleRequest } from './handleRequest';

const server = createServer();

server.on('request', handleRequest);

server.on('listening', () => {
  console.info(`Listening on`, server.address());
});

server.listen(HTTP_PORT);
