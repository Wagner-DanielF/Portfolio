function enviarWhats(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5511973342574'

    const texto = `Olá, meu nome é ${nome}, ${mensagem}`
    const msgFormatada = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`
    //const url = `https://api.whatsapp.com/${telefone}=${msgFormatada}`
    

    window.open(url, '_blank')
}

(function(){
    emailjs.init("J2VcYKcc1RsqfQ02s");
})();

function enviarEmail(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;

    emailjs.send("service_daf5j9v", "template_zysbfz7", {
        from_name: nome,
        message: mensagem,
        to_email: 'wdf_sb@hotmail.com'
    })
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert('Email enviado com sucesso!');
    }, function(error) {
       console.log('FAILED...', error);
       alert('Falha ao enviar o email.');
    });
}

