import { createWriteStream } from 'fs';
import { RequestListener } from 'http';
import { resolve } from 'path';
import { ROOT_PATH } from './constants';
import { parseId } from './parseId';

export const saveFile: RequestListener = (request, response) => {
  const { url } = request;
  const id = parseId(url);
  const filePath = resolve(ROOT_PATH, id);
  console.log('Saving file on path: ', filePath)
  const fileWriteStream = createWriteStream(filePath);
  request.pipe(fileWriteStream);
  request.on('end', () => {
    response.end();
  });
};
