import spriteGeneratorImg from '@/assets/img/projects/sprite-generator-cli.png'
import pianolatorImg from '@/assets/img/projects/pianolator.png'
import myArtPaintImg from '@/assets/img/projects/my-art-paint.png'
import fileIndexerImg from '@/assets/img/projects/file-indexer.png'
import logoImg from '@/assets/img/logo.jpg'

export default {
    name: 'Projects',

    data: () => ({
        title: 'Mes projets',
        projects: [
            {
                title: 'Sprite Generator CLI',
                img: {
                    src: spriteGeneratorImg,
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
                    src: pianolatorImg,
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
                    src: myArtPaintImg,
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
                    src: fileIndexerImg,
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
                    src: logoImg,
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
