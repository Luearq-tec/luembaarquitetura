document.addEventListener('DOMContentLoaded', () => {
    // Dados de exemplo dos projetos (substitua com os seus dados)
    const projectsData = {
        'residencia-moderna': {
            title: 'Vivenda T3 Versão 1',
            subtitle: 'Com um design contemporâneo, a vivenda integra harmoniosamente áreas sociais e privadas.',
            mainImage: 'img/Residencial/RT4 (6).jpg',
            description: 'Projetada para um terreno de dimensões otimizadas, esta vivenda T3 combina funcionalidade e estilo de forma excepcional. O layout foi cuidadosamente planeado para maximizar o aproveitamento de cada metro quadrado, oferecendo ambientes espaçosos e confortáveis.',
            gallery: [
                'img/Residencial/RT4 (6).jpg',
                'img/Residencial/RT4 (7).jpg',
                'img/Residencial/RT4 (8).jpg'
                
            ]
        },
        'apartamento-conceito': {
            title: 'Casa Moderna T4',
            subtitle: 'Casa térrea unifamiliar T4 que combina design moderno com a funcionalidade ideal para o dia a dia.',
            mainImage: 'img/Residencial/RT4 (1).jpg',
            description: 'Este projeto de casa térrea foi pensado para maximizar cada centímetro quadrado. Com um design flexível e o espaço adapta-se facilmente às necessidades dos seus moradores.',
            gallery: [
                'img/Residencial/RT4 (2).jpg',
                'img/Residencial/RT4 (4).jpg',
                'img/Residencial/RT4 (3).jpg',
                'img/Residencial/RT4 (5).jpg'
                           
            ]
        },
        'loft-industrial': {
            title: 'Condomínio Privado Moderno',
            subtitle: 'Inspiração industrial com um toque de sofisticação e conforto.',
            mainImage: 'img/Residencial/RT4 (10).jpg',
            description: 'Este condomínio é a materialização da vida urbana de qualidade. Projetado com um foco em segurança, conforto e lazer, ele oferece uma experiência residencial superior, onde o design moderno encontra a funcionalidade.',
            gallery: [
                'img/Residencial/RT4 (9).jpg',
                'img/Residencial/RT4 (10).jpg',
                'img/Residencial/RT4 (11).jpg'
                
            ]
        },
        'escritorio-colaborativo': {
            title: 'Escritório Colaborativo',
            subtitle: 'Espaços abertos para fomentar a criatividade e a inovação.',
            mainImage: 'https://images.unsplash.com/photo-1549419163-f018e6c71c1b?q=80&w=1740&auto=format&fit=crop',
            description: 'Este escritório foi projetado para incentivar a colaboração e a produtividade. Com áreas de trabalho flexíveis, salas de reunião com vidro e zonas de lazer, o ambiente é ideal para equipas modernas. A iluminação natural e o design biofílico contribuem para o bem-estar dos funcionários.',
            gallery: [
                'https://images.unsplash.com/photo-1549419163-f018e6c71c1b?q=80&w=1740&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1582268486985-1100f91a9b23?q=80&w=1740&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1596700874311-66380c5c4004?q=80&w=1740&auto=format&fit=crop'
            ]
        },
        'edificio-corporativo': {
            title: 'Edifício Corporativo',
            subtitle: 'Uma fachada inovadora que se destaca na paisagem urbana.',
            mainImage: 'https://images.unsplash.com/photo-1481223945415-2884a44f3878?q=80&w=1740&auto=format&fit=crop',
            description: 'O design arrojado deste edifício corporativo integra funcionalidade e estética. A fachada de vidro reflete o ambiente circundante, enquanto a estrutura interna maximiza o espaço e a luz natural. O projeto é um marco na arquitetura comercial da cidade.',
            gallery: [
                'https://images.unsplash.com/photo-1481223945415-2884a44f3878?q=80&w=1740&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1582268486985-1100f91a9b23?q=80&w=1740&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1596700874311-66380c5c4004?q=80&w=1740&auto=format&fit=crop'
            ]
        },
        'clinica-saude': {
            title: 'Clínica de Saúde',
            subtitle: 'Espaços terapêuticos projetados para bem-estar e conforto do paciente.',
            mainImage: 'https://images.unsplash.com/photo-1522818956973-100236e768a4?q=80&w=1740&auto=format&fit=crop',
            description: 'A arquitetura desta clínica de saúde prioriza o bem-estar e o conforto dos pacientes. Com cores suaves, iluminação indireta e materiais acolhedores, o espaço cria um ambiente relaxante e profissional. O design interno facilita a circulação e a acessibilidade para todos.',
            gallery: [
                'https://images.unsplash.com/photo-1522818956973-100236e768a4?q=80&w=1740&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1582268486985-1100f91a9b23?q=80&w=1740&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1596700874311-66380c5c4004?q=80&w=1740&auto=format&fit=crop'
            ]
        },
        'revitalizacao-praca': {
            title: 'Revitalização de Praça',
            subtitle: 'Um espaço público redesenhado para a comunidade e a vida ao ar livre.',
            mainImage: 'https://images.unsplash.com/photo-1582268486985-1100f91a9b23?q=80&w=1740&auto=format&fit=crop',
            description: 'Este projeto de revitalização urbana transformou uma praça subutilizada num ponto de encontro vibrante para a comunidade. O design inclui áreas de lazer, jardins verticais, bancos e uma nova iluminação, tornando o espaço seguro e convidativo para todas as idades.',
            gallery: [
                'https://images.unsplash.com/photo-1582268486985-1100f91a9b23?q=80&w=1740&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1596700874311-66380c5c4004?q=80&w=1740&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1740&auto=format&fit=crop'
            ]
        },
        'parque-urbano': {
            title: 'Parque Urbano',
            subtitle: 'Planejamento de paisagem e infraestrutura para um novo parque na cidade.',
            mainImage: 'https://images.unsplash.com/photo-1596700874311-66380c5c4004?q=80&w=1740&auto=format&fit=crop',
            description: 'Este projeto paisagístico visa criar um oásis verde na paisagem urbana. Com trilhas, áreas de piquenique, um lago e zonas de lazer, o parque oferece um refúgio natural para os moradores da cidade. A infraestrutura foi planejada para ser sustentável e de baixa manutenção.',
            gallery: [
                'https://images.unsplash.com/photo-1596700874311-66380c5c4004?q=80&w=1740&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1582268486985-1100f91a9b23?q=80&w=1740&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1740&auto=format&fit=crop'
            ]
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (projectId && projectsData[projectId]) {
        const project = projectsData[projectId];

        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-detail-title').textContent = project.title;
        document.getElementById('project-detail-subtitle').textContent = project.subtitle;
        document.getElementById('project-detail-section-title').textContent = 'Descrição do Projeto';
        document.getElementById('project-detail-text').textContent = project.description;

        const mainImageContainer = document.getElementById('project-detail-main-image');
        const mainImage = document.createElement('img');
        mainImage.src = project.mainImage;
        mainImage.alt = project.title;
        mainImageContainer.appendChild(mainImage);
        
        const thumbnailsContainer = document.getElementById('project-detail-thumbnails');
        project.gallery.forEach(imageSrc => {
            const thumbnail = document.createElement('img');
            thumbnail.src = imageSrc;
            thumbnail.alt = project.title;
            thumbnail.classList.add('thumbnail');
            thumbnailsContainer.appendChild(thumbnail);

            thumbnail.addEventListener('click', () => {
                mainImage.src = thumbnail.src;
            });
        });

    } else {
        // Redireciona para a página de projetos se o ID não for encontrado
        window.location.href = 'projetos.html';
    }
});