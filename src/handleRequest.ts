import { RequestListener } from 'http';
import { saveFile } from './saveFile';
import { serveFile } from './serveFile';

export const handleRequest: RequestListener = (request, response) => {
  if (request.method === 'GET') {
    serveFile(request, response);
    return;
  }
  if (request.method === 'POST') {
    saveFile(request, response);
    return;
  }
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify({ message: 'Invalid HTTP method' }));
};
