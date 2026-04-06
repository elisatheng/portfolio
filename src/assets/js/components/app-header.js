import logoImg from '@/assets/img/logo.jpg'
import githubImg from '@/assets/img/socials/github.png'
import linkedinImg from '@/assets/img/socials/linkedin.png'
import viadeoImg from '@/assets/img/socials/viadeo.png'

export default {
    name: 'AppHeader',

    methods: {
        initUri() {
            setTimeout(() => {
                window.history.replaceState('', document.title, window.location.origin + window.location.pathname)
            }, 5);
        },

        handleBackTop() {
            this.initUri()
            document.querySelector('#pfl-body').scrollTop = 0
        },
    },

    data: () => ({
        logo: {
            src: logoImg,
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
                    src: githubImg,
                    alt: 'Github logo',
                    size: 35,
                },
            },
            {
                href: 'https://www.linkedin.com/in/elisa-theng/',
                img: {
                    src: linkedinImg,
                    alt: 'LinkedIn logo',
                    size: 35,
                },
            },
            {
                href: 'http://www.viadeo.com/fr/profile/elisatheng',
                img: {
                    src: viadeoImg,
                    alt: 'Viadeo logo',
                    size: 35,
                },
            },
        ],
    }),
}
