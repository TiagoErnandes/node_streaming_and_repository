const fs = require('fs')
const path = require('path');


module.exports = (caminho, nomeDoArquivo, callbackImagemCriada ) => {
  const tiposValidos = ['jpg','png','jpeg'];
  const tipo = path.extname(caminho);
  const tipoehValido = tiposValidos.indexOf(tipo.substring(1)) !== -1;

  if(tipoehValido){
    const novoCaminho = `./file/assets/imagens/${nomeDoArquivo}${tipo}`
    fs.createReadStream(caminho)
    .pipe(fs.createWriteStream(novoCaminho))
    .on('finish', () => callbackImagemCriada(false,novoCaminho))
  }else{
    const erro = 'Tipo invalido!';
    callbackImagemCriada(erro)
    throw new Error('Tipo invalido!');
  }
};
