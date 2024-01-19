export default function translate() {
  $(document).ready(function () {
    $('.language ul li a').click(function () {
      const selectedLanguage = $(this).attr('class');
      currentLanguage = selectedLanguage;

      $('.language-selected').removeClass('change-pt change-en change-es');
      $('.language-selected').addClass('change-' + selectedLanguage);

      updateTranslations();
      $('#currentLanguage').text(selectedLanguage);
      $('.language ul').hide();
    });
    const elementsToTranslate = {
      contact: {
        en: 'Contact',
        pt: 'Contato',
        es: 'Contacto'
      },
      experience: {
        en: 'Experience',
        pt: 'Experiencia'
      },
      about: {
        en: 'About',
        pt: 'Sobre',
        es: 'Acerca de'
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
      experienceTranslate: {
        pt: 'Desenvolvo pequenos projetos como AUDI RS6 e iPhone 15 utilizando apenas HTML, CSS e JavaScript.',
        en: 'I develop small projects such as AUDI RS6 and iPhone 15 using only HTML, CSS and JavaScript.',
        es: 'Desarrollo pequeños proyectos como el AUDI RS6 y iPhone 15 utilizando únicamente HTML, CSS y JavaScript.'
      },
      audi: {
        pt: 'No projeto Audi RS6 eu trabalhei no desenvolvimento completo do HTML, CSS e JavaScript do site.',
        en: "On the Audi RS6 project I worked on the complete development of the website's HTML, CSS and JavaScript.",
        es: 'En el proyecto Audi RS6 trabajé en el desarrollo completo del HTML, CSS y JavaScript del sitio web.'
      },
      projectDevelopment: {
        pt: 'Projeto em desenvolvimento...',
        en: 'Project under development...',
        es: 'Proyecto en desarrollo...'
      },
      aboutTranslate: {
        pt: 'Olá, sou Henrique, um estudante da tecnologia de 21 anos, atualmente graduando em Análise e Desenvolvimento de Sistemas na Unicesumar. Além da minha formação acadêmica, estou empenhado em aprimorar minhas habilidades por meio de cursos complementares, com destaque para o curso de Front-End do Origamid.',

        en: "Hello, I'm Henrique, a 21-year-old technology student, currently graduated in Systems Analysis and Development from Unicesumar. In addition to my academic training, I am committed to improving my skills through complementary courses, with emphasis on the Origamida Front-End course.",

        es: 'Hola, soy Henrique, estudiante de tecnología de 21 años, actualmente graduado en Análisis y Desarrollo de Sistemas en Unicesumar. Además de mi formación académica, estoy comprometido a mejorar mis habilidades a través de cursos complementarios, con énfasis en el curso Origamid Front-End.'
      },
      aboutTranslate2: {
        pt: 'Atualmente, estudo Sass, React e UI design para me aprimorar e acompanhar as tendências da indústria. Meu foco é consolidar minha carreira na tecnologia, buscando oportunidades de crescimento. Sou reconhecido pela dedicação em evoluir.',

        en: 'Currently, I study Sass, React and UI design to improve myself and keep up with industry trends. My focus is to consolidate my career in technology, looking for growth opportunities. I am recognized for my dedication to evolving.',

        es: 'Actualmente estudio Sass, React y diseño UI para mejorar y mantenerme al día con las tendencias de la industria. Mi enfoque es consolidar mi carrera en tecnología, buscando oportunidades de crecimiento. Soy reconocido por mi dedicación a evolucionar.'
      },
      aboutTranslate3: {
        pt: 'Tenho interesse em desenvolver soluções inovadoras. Estou pronto para enfrentar desafios, aprender continuamente e alcançar meu sucesso na área de tecnologia. 📚 🎓 ',

        en: 'I am interested in developing innovative solutions. I am ready to face challenges, continually learn and achieve success in the technology field. 📚 🎓',

        es: 'Estoy interesado en desarrollar soluciones innovadoras. Estoy listo para enfrentar desafíos, aprender continuamente y alcanzar el éxito en el campo tecnológico. 📚 🎓'
      },
      technologies: {
        pt: 'Tecnologias',
        en: 'Technologies',
        es: 'Tecnologías'
      },
      languages: {
        pt: 'Idioma',
        en: 'Language'
      },
      english: {
        pt: 'Ingles basico',
        en: 'English basic',
        es: 'Inglés básico'
      },
      Spanish: {
        pt: 'Espanhol basico',
        en: 'Spanish basic',
        es: 'Español Básico'
      },
      footerText: {
        pt: 'Estou disponível para novos projetos no momento. Entre em contato comigo e marcamos uma conversa 👋',

        en: 'I am available for new projects at the moment. Get in touch with me and we’ll set up a conversation 👋',

        es: 'Estoy disponible para nuevos proyectos en este momento. Ponte en contacto conmigo y estableceremos una conversación 👋'
      },
      footerRight: {
        pt: 'Henrique. Alguns direitos reservados.',
        en: 'Henrique. Some rights reserved.',
        es: 'Henrique. Algunos derechos reservados.'
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
          const translatedText = translations[currentLanguage];

          if (translatedText) {
            const strongKeywords = ['graduating in Systems Analysis and Development', 'complementary courses', 'Origamid Front-End course', 'Sass', 'Henrique', 'React', 'UI design', 'industry trends', 'technology', 'growth opportunities', 'dedication to evolving', 'innovative solutions', 'challenges', 'continually learn', 'success '];
            let updatedText = translatedText;

            for (const keyword of strongKeywords) {
              const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
              updatedText = updatedText.replace(regex, (match) => `<strong>${match}</strong>`);
            }

            $('.' + elementClass).html(updatedText);
          }
        }
      }
    }
  });
}
