const azure = require('azure-storage');

//Imagens de usuarios
function salvaIMGUsuario(imagem){
    // Cria o Blob Service
    const blobSvc = azure.createBlobService(config.containerConnectionString);

    let filename = guid.raw().toString() + '.jpg';
    let rawdata = imagem;
    let matches = rawdata.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    let type = matches[1];
    let buffer = new Buffer(matches[2], 'base64');

    // Salva a imagem
    blobSvc.createBlockBlobFromText('usuarios', filename, buffer, {
        contentType: type
    }, function (error, result, response) {
        if (error) {
            filename = 'default-usuario.png'
        }
    });

    return filename;
    
}