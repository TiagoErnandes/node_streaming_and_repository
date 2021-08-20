const conexao = require('../infraestrutura/conexao');
const uploadDeArquivo =  require('../file/uploadFile');

class Pet {
    adiciona(pet,res){
        const query =  'INSERT INTO Pets SET ?'
        
        uploadDeArquivo(pet.imagem,pet.nome,(error,novoCaminho)=>{

            if(error){
                res.status(400).json({error})
            }else{
            const novoPet = {nome:pet.nome,imagem:novoCaminho}
            conexao.query(query,novoPet,erro=>{
                if(erro){
                    res.status(400).json(erro)
                }else{
                    res.status(200).json(pet)
                }
            });  }
        });

    }
}

module.exports = new Pet();