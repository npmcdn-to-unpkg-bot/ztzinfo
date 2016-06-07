var main = function () {
    "use strict";

    var dataTranslate = function (usingLang) {
        i18next.init({
            lng: usingLang,
            resources: {
            en: {
                translation: {

                    // Nav Menu
                    'bntHome': 'Home',
                    'bntAbout': 'About me',
                    'btnPortfolio': 'Portfolio',
                    'btnContact': 'Contact',

                    // Welcome Section.
                    'titleHome': 'Welcome to my portfolio!!',
                    'textHome_1': 'Freelancer front-end & back-end develope.',
                    'textHome_2': 'I can do some great things around the web with you.',

                    // AbouteMe Section
                    'titleAbout': 'About me',
                    'textAbout_1': 'Who will you work with?',
                    'textAbout_2': 'My name is André Santos. I\'m a freelancer web developer currently living in Irati/Paraná Brazil, constantly looking for new (and better) ways to solve problems, usually using the web as a tool to achieve it.',
                    'textAbout_3': 'You can find some of my recent work below. But don\'t panic if you don\'t find a solution to your problem! It will be a pleasure for me to work with you to develop new solutions that fit your needs.',
                    'textAbout_4': 'We can work together to show the world a new website, web app and/or a hibrid mobile app!',
                    'textAbout_5': 'Python (Flask, Django, and so forth), Javascript (jQuery, AngularJS, MEAN), CSS3 and HTML5. I\'m a',

                    // Portfolio Section
                    'titlePortfolio': 'Portfolio',
                    'textPortfolio': 'Some of my recent work.',

                    // Contatc Form
                    'titleForm': 'Contact',
                    'textForm': 'Send us a message',
                    'labelName': 'Name',
                    'placeholderName': 'Enter your Name...',
                    'labelEmail': 'Email / Telephone',
                    'placeholderEmail': 'Enter your email or telephone...',
                    'labelMessage': 'Message',
                    'placeholderMessage': 'Enter your message...',
                    'btnSendMsg': 'Send Message',

                    // Social Media
                    'titleMedia': 'Social Media',

                    // More Info

                    'titleMoreInfo': 'Need more Info?'

                    //Footer

                    }
                },
            pt: {
                translation: {
                    // Nav Menu
                    'btnHome': 'Início',
                    'btnAbout': 'Sobre',
                    'btnPortfolio': 'Portifólio',
                    'btnContact': 'Contato',

                    // Welcome Section.
                    'titleHome': 'Desenvolvedor web - front-end & back-end.',
                    'textHome_1': 'Juntos podemos desenvolver grandes projetos na web.',
                    'textHome_2': 'Bem vindo ao meu portifólio!!',

                    // AbouteMe Section
                    'titleAbout': 'Sobre',
                    'textAbout_1': 'Com quem você vai trabalhar?',
                    'textAbout_2': 'Meu nome é André Santos, sou um desenvolvedor web atualmente vivendo em Irati/Pr, constantemente buscando por novas (e melhores) maneiras de resolver problemas usando a web como ferramenta.',
                    'textAbout_3': 'Você pode encontrar alguns dos meus mais recentes trabalhos abaixo, mas não entre em pânico se você não encontrou a solução para o seu problema! Será um prazer trabalhar com você para desenvolver novas soluções que se encaixam às suas necessidades.',
                    'textAbout_4': 'Nós podemos trabalhar juntos para mostrar ao mundo um novo website, um web aplicativo e ou um aplicativo móvel híbrido!',
                    'textAbout_5': 'Python (Flask, Django, e etc...), Javascript (jQuery, AngularJS, MEAN), Phonegap, CSS3 e HTML5.',

                    // Portfolio Section
                    'titlePortfolio': 'Portifólio',
                    'textPortfolio': 'Alguns dos meus trabalhos recentes.',

                    // Contatc Form
                    'titleForm': 'Contato',
                    'textForm': 'Envie a sua mensagem',
                    'labelName': 'Nome',
                    'placeholderName': 'Seu nome ...',
                    'labelEmail': 'Email / Telefone',
                    'placeholderEmail': 'Seu email ou telefone ...',
                    'labelMessage': 'Mensagem',
                    'placeholderMessage': 'Sua mensagem ...',
                    'btnSendMsg': 'Enviar Mensagem',

                    // Social Media
                    'titleMedia': 'Midia Social',

                    // More Info
                    'titleMoreInfo': 'Precisando de mais informações?'

                    // Footer
                    }
                }
            }
        }, (err, t) => {

            const titleMedia = i18next.t('titleMedia');

            $("a[href$='#home']").html(i18next.t('btnHome'));
            $("a[href$='#about']").html(i18next.t('btnAbout'));
            $("a[href$='#portfolio']").html(i18next.t('btnPortfolio'));
            $("a[href$='#contact']").html(i18next.t('btnContact'));

            $("#titleHome").html(i18next.t('titleHome'));
            $("#textHome_1").html(i18next.t('textHome_1'));
            $("#textHome_2").html(i18next.t('textHome_2'));

            $("#titleAbout").html(i18next.t('titleAbout'));
            $("#textAbout_1").html(i18next.t('textAbout_1'));
            $("#textAbout_2").html(i18next.t('textAbout_2'));
            $("#textAbout_3").html(i18next.t('textAbout_3'));
            $("#textAbout_4").html(i18next.t('textAbout_4'));
            $("#textAbout_5").html(i18next.t('textAbout_5'));

            $("#titlePortfolio").html(i18next.t('titlePortfolio'));
            $("#textPortfolio").html(i18next.t('textPortfolio'));

            // Contatc Form

            $("#titleForm").html(i18next.t('titleForm'));
            $("#textForm").html(i18next.t('textForm'));
            $("#labelName").html(i18next.t('labelName'));
            $("#labelEmail").html(i18next.t('labelEmail'));
            $("#labelMessage").html(i18next.t('labelMessage'));
            $("button[name$='btnForm']").html(i18next.t('btnSendMsg'));
            $("input[name$='mailname']").attr('placeholder', i18next.t('placeholderName'));
            $("input[name$='mailcontact']").attr('placeholder', i18next.t('placeholderEmail'));
            $("textarea[name$='mailbody']").attr('placeholder', i18next.t('placeholderMessage'));

            $("#titleMedia").html(titleMedia);
            $("#titleMoreInfo").html(i18next.t('titleMoreInfo'));
        });
    }

    $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
        //console.log('JSoN >> ' + data);
        //console.log('Country >> ' + data.country);
        //var table_body = "";
        if (data.country == 'Brazil') {
            var usingLang = 'pt';
            dataTranslate(usingLang);
        }
        else {
            var usingLang = 'en';
            dataTranslate(usingLang);
        }
    });

    $("a[href$='#home']").click(function() {
        /* Act on the event */
        $('html, body').animate(
            {scrollTop: 0 }, 'slow') //'slow'
    });

    $("a[href$='#about']").click(function() {
        $('html, body').animate(
            {scrollTop: $('.content-section-b').offset().top}, 'slow')
    });

    $("a[href$='#portfolio']").click(function() {
        $('html, body').animate(
            {scrollTop: $('.content-section-c').offset().top}, 'slow')
    });

    $("a[href$='#contact']").click(function() {
        $('html, body').animate(
            {scrollTop: $('.content-section-d').offset().top}, 'slow')
    });


    $('#twitter').click(function() {
        window.open("http://www.twitter.com/ztzandre");
    });
    $('#linkedin').click(function() {
        window.open("http://www.linkedin.com/");
    });
    $('#github').click(function() {
        window.open("http://www.github.com/andreztz");
    });
    $('#freecodecamp').click(function() {
        window.open("http://www.freecodecamp.com/andreztz");
    });

    $("button[name=btnForm]").click(function(){

        $("#myModal").modal();
        $("#resposta").html('Enviando email...');

        var name = $('#mailname').val();
        var contact = $('#mailcontact').val();
        var body = $('#mailbody').val();

        $.ajax({
            url: '/sendmail',
            data: $('form').serialize(),
            type: 'POST',
            success: function(data, response) {
                // TDDO: check duplicate function reset form

                if (data.code === 200) {
                    $('form').each(function () {
                        this.reset();
                    });
                    //alert(data.message);
                    $("#resp").html(data.message + " " + data.code);
                    $("#resposta").html('Email enviado com sucesso!!');
                    //console.log('rep >>' + response);
                    //console.log('data >> ' + data.code);
                    window.location = '/' + data.location;
                }
                else {
                    // alert(data.message + data.code);
                    $("#resp").html(data.message + " " + data.code);
                    $("#resposta").html('Algo deu errado :( ');
                    $('form').each(function () {
                        this.reset();
                    });
                    $('input[name=mailname]').val(data.name);
                    $('input[name=mailcontact]').val(data.contact);
                    $('textarea[name=mailbody]').val(data.body);
                    window.location = '/' + data.location;
                }
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
};

$(document).ready(main);
