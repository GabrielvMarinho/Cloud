const fs = require('fs');

try {
  const data = fs.readFileSync('arquivo.bin');
  console.log(data.buffer)
  console.log('Arquivo lido com sucesso!');
  // 'data' é um buffer
} catch (err) {
  console.error('Erro ao ler o arquivo:', err);
}
