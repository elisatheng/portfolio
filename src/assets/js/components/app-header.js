export default {
    name: 'AppHeader',

    data: () => ({
        logo: {
            src: require('@/assets/img/logo.jpg'),
            link: '#pfl-body',
            alt: 'Portfolio logo',
            size: 100,
        },
        navleftItems: [
            {
                title: 'À propos',
                href: '#aboutme',
            },
            {
                title: 'Parcours',
                href: '#course',
            },
            {
                title: 'Projets',
                href: '#projects',
            },
        ],
        navrightItems: [
            {
                title: 'Compétences',
                href: '#skills',
            },
            {
                title: 'Loisirs',
                href: '#hobbies',
            },
        ],
        socials: [
            {
                href: 'https://github.com/elisatheng',
                img: {
                    src: require('@/assets/img/socials/github.png'),
                    alt: 'Github logo',
                    size: 35,
                },
            },
            {
                href: 'https://www.linkedin.com/in/elisa-theng/',
                img: {
                    src: require('@/assets/img/socials/linkedin.png'),
                    alt: 'LinkedIn logo',
                    size: 35,
                },
            },
            {
                href: 'http://www.viadeo.com/fr/profile/elisatheng',
                img: {
                    src: require('@/assets/img/socials/viadeo.png'),
                    alt: 'Viadeo logo',
                    size: 35,
                },
            },
        ],
    }),
}