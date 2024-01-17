export default function translate() {
  // translate.js

  $(document).ready(function () {
    $('.language ul li a').click(function () {
      const selectedLanguage = $(this).attr('class');
      currentLanguage = selectedLanguage;

      // Remova as classes existentes e adicione a nova classe para o ícone
      $('.language-selected').removeClass('change-pt change-en change-es');
      $('.language-selected').addClass('change-' + selectedLanguage);

      updateTranslations();
      $('#currentLanguage').text(selectedLanguage);
      $('.language ul').hide();
    });
    const elementsToTranslate = {
      contact: {
        en: 'Contact',
        pt: 'Contato'
      },
      experience: {
        en: 'Experience',
        pt: 'Experiencia'
      },
      about: {
        en: 'About',
        pt: 'Sobre'
      },
      projects: {
        en: 'Projects',
        pt: 'Projetos',
        es: 'Proyectos'
      },
      aboutTitle: {
        pt: 'Sobre',
        en: 'About',
        es: 'Acerca de'
      },
      titleTranslate: {
        pt: 'Olá, eu sou',
        en: "Hello, I'm",
        es: 'Hola, soy'
      },
      projectsTranslate: {
        pt: 'PROJETOS',
        en: 'PROJECTS'
      },
      experienceTranslate: {
        pt: 'Desenvolvo pequenos projetos como AUDI RS6 e Bikcraft utilizando apenas HTML, CSS e JavaScript.',
        en: 'I develop small projects such as AUDI RS6 and Bikcraft using only HTML, CSS and JavaScript.'
      },
      translateProject: {
        pt: 'Projeto',
        en: 'Project'
      },
      audi: {
        pt: 'No projeto Audi RS6 eu trabalhei no desenvolvimento completo do HTML, CSS e JavaScript do site.',
        en: "On the Audi RS6 project I worked on the complete development of the website's HTML, CSS and JavaScript."
      },
      projectDevelopment: {
        pt: 'Projeto em desenvolvimento...',
        en: 'Project under development...'
      },
      aboutTitle: {
        pt: 'Sobre',
        en: 'About'
      },
      formacaoTranslate: {
        pt: 'Olá, sou Henrique, um entusiasta da tecnologia de 21 anos, atualmente graduando-me emAnálise e Desenvolvimento de Sistemas na Unicesumar. Além da minha formação acadêmica, estou empenhado em aprimorar minhas habilidades por meio de cursos complementares, com destaque para o curso de Front-End do Origamid.',

        en: "Hello, I'm Henrique, a 21-year-old technology enthusiast, currently graduating in Systems Analysis and Development at Unicesumar. In addition to my academic training, I am committed to improving my skills through complementary courses, with emphasis on the Origamid Front-End course."
      },
      formacaoTranslate2: {
        pt: 'Atualmente, estudo Sass, React e UI design para me aprimorar e acompanhar as tendências da indústria. Meu foco é consolidar minha carreira na tecnologia, buscando oportunidades de crescimento. Sou reconhecido pela dedicação em evoluir.',

        en: 'Currently, I study Sass, React and UI design to improve myself and keep up with industry trends. My focus is to consolidate my career in technology, looking for growth opportunities. I am recognized for my dedication to evolving.'
      },
      formacaoTranslate3: {
        pt: 'Tenho interesse em desenvolver soluções inovadoras. Estou pronto para enfrentar desafios, aprender continuamente e alcançar meu sucesso na área de tecnologia. ',

        en: 'I am interested in developing innovative solutions. I am ready to face challenges, continually learn and achieve success in the technology field.'
      },
      technologies: {
        pt: 'Tecnologias',
        en: 'Technologies'
      },
      languages: {
        pt: 'Idioma',
        en: 'Language'
      },
      english: {
        pt: 'Ingles basico',
        en: 'English basic'
      },
      Spanish: {
        pt: 'Espanhol basico',
        en: 'Spanish basic'
      },
      footerText: {
        pt: 'Estou disponível para novos projetos no momento. Entre em contato comigo e marcamos uma conversa',

        en: 'I am available for new projects at the moment. Get in touch with me and we’ll set up a conversation'
      },
      footerRight: {
        pt: 'Henrique. Alguns direitos reservados.',
        en: 'Henrique. Some rights reserved.'
      }
    };

    let currentLanguage = 'pt';

    $('.language-selected').click(function () {
      $('.language ul').toggle();
    });

    $('.language ul li a').click(function () {
      const selectedLanguage = $(this).attr('class');
      currentLanguage = selectedLanguage;
      updateTranslations();
      $('#currentLanguage').text(selectedLanguage);
      $('.language ul').hide();
    });

    $(document).click(function (e) {
      if (!$(e.target).closest('.language').length) {
        $('.language ul').hide();
      }
    });

    function updateTranslations() {
      for (const elementClass in elementsToTranslate) {
        if (elementsToTranslate.hasOwnProperty(elementClass)) {
          const translations = elementsToTranslate[elementClass];
          $('.' + elementClass).text(translations[currentLanguage]);
        }
      }
    }
  });
}
