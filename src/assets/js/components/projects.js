export default {
    name: 'Projects',

    data: () => ({
        title: 'Mes projets',
        projects: [
            {
                title: 'Sprite Generator CLI',
                img: {
                    src: require('@/assets/img/projects/sprite-generator-cli.png'),
                    alt: 'Sprite Generator CLI project screenshot',
                    position: 'top left',
                },
                description: 'Un générateur de sprite d\'images en interface de ligne de commande',
                link: 'https://github.com/elisatheng/sprite-generator-cli',
                technos: [
                    'PHP',
                    'CLI',
                    'school-project',
                ],
            },
            {
                title: 'Pianolator',
                img: {
                    src: require('@/assets/img/projects/pianolator.png'),
                    alt: 'Pianolator project screenshot',
                    position: 'top',
                },
                description: 'Une simple calculatrice',
                link: 'https://github.com/elisatheng/pianolator',
                technos: [
                    'HTML',
                    'CSS',
                    'jQuery',
                    'responsive',
                    'school-project',
                ],
            },
            {
                title: 'My Art Paint',
                img: {
                    src: require('@/assets/img/projects/my-art-paint.png'),
                    alt: 'My Art Paint project screenshot',
                    position: 'top left',
                },
                description: 'Un "ressemblant" Paint',
                link: 'https://github.com/elisatheng/my-art-paint',
                technos: [
                    'HTML',
                    'CSS',
                    'jQuery',
                    'responsive',
                    'school-project',
                ],
            },
            {
                title: 'File Indexer',
                img: {
                    src: require('@/assets/img/projects/file-indexer.png'),
                    alt: 'File Indexer project screenshot',
                    position: 'top right',
                },
                description: 'Un indexeur de fichiers moderne pour les serveurs Web HTTP basé sur vos fichiers',
                link: 'https://github.com/elisatheng/file-indexer',
                technos: [
                    'PHP',
                    'htaccess',
                    'school-project',
                ],
            },
            {
                title: 'Portfolio',
                img: {
                    src: require('@/assets/img/logo.jpg'),
                    alt: 'Portfolio project screenshot',
                    position: 'center',
                },
                description: 'Mon portfolio',
                link: 'https://github.com/elisatheng/portfolio',
                technos: [
                    'VueJS',
                    'vuetify',
                ],
            },
        ],
    }),
}