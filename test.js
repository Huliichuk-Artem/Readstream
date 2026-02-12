import { createReadStream } from 'node:fs';

const stream = createReadStream('text.txt', {

encoding: 'utf8'

});

let totalCount = 0; 

stream.on('data', (chunk) => {
  totalCount += chunk.length;
});

stream.on('end', () => {
  console.log(`Загальна кількість символів: ${totalCount}`);
});