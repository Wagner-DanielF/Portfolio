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

(function () {
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
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email enviado com sucesso!');
        }, function (error) {
            console.log('FAILED...', error);
            alert('Falha ao enviar o email.');
        });
}

document.addEventListener('DOMContentLoaded', () => {
    const hamb = document.getElementById('hamburger');
    const menu = document.querySelector('.menu');
    const imgHamb = hamb?.querySelector('.hamburger-icon');
    const imgClose = hamb?.querySelector('.close-icon');

    if (!hamb || !menu) return;

    const setIcons = (opened) => {
        if (imgHamb) imgHamb.style.display = opened ? 'none' : 'block';
        if (imgClose) imgClose.style.display = opened ? 'block' : 'none';
        // opcional: adicionar classe para efeitos CSS
        if (opened) hamb.classList.add('open'); else hamb.classList.remove('open');
    };

    hamb.addEventListener('click', () => {
        const opened = menu.classList.toggle('open');
        hamb.setAttribute('aria-expanded', opened);
        setIcons(opened);
    });

    // fechar o menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!menu.classList.contains('open')) return;
        const target = e.target;
        if (!menu.contains(target) && target !== hamb && !hamb.contains(target)) {
            menu.classList.remove('open');
            hamb.setAttribute('aria-expanded', 'false');
            setIcons(false);
        }
    });

    // fechar overlay ao clicar em qualquer link do menu
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
            hamb.setAttribute('aria-expanded', 'false');
            setIcons(false);
        });
    });

    // inicializa ícones corretamente
    setIcons(false);
});

