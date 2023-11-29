import {createReadStream, existsSync} from 'fs';
import {RequestListener} from 'http';
import {resolve} from 'path';
import {ROOT_PATH} from './constants';
import {parseId} from './parseId';

export const serveFile: RequestListener = (request, response) => {
    const {url} = request;
    const id = parseId(url);
    if (!id) return;
    const filePath = resolve(ROOT_PATH, id);
    console.log('Downloading file on path: ', filePath)
    if (!existsSync(filePath)) {
        response.statusCode = 500;
        response.statusMessage = 'FILE_NOT_FOUND';
        response.end();
        return response;
    } else {
        const fileReadStream = createReadStream(filePath);
        fileReadStream.pipe(response);
    }

};
