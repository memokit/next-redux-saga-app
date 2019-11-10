import fetch from 'isomorphic-unfetch';
// import { useRouter } from 'next/router';
import { externalApi } from '../../../../constants/ApiUrl';
// import Blob from 'blob';

/**
 * Get File
 */
export default async (req, res) => {


    try {
        const {
            query: { filename },
        } = req;
    
        const response = await getData(req, filename);
        
        
        // const buffer = response.arrayBuffer();
        // const buffer = response.map(res => res.buffer());
        // const buffer = response.buffer();
        const bufferData = await response.buffer();
        const byteData = await arrayBufferToByte(bufferData);
    
        
    
        await res.status(200).write(Buffer.from(byteData, 'binary'));
        await res.end(undefined, 'binary');
    } catch (error) {
        console.log("===>> Error : Document File");
        console.log(error);
    }
};

const getData = (req, filename) => {
    try {

        return fetch(`${externalApi.getFile}/${filename}`, {
            method: "GET",
            responseType: 'arraybuffer',
        });
    } catch (error) {
        console.log(error);
    }
};

const arrayBufferToByte = (buffer) => {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));

    bytes.forEach((b) => binary += String.fromCharCode(b));

    return bytes;
};