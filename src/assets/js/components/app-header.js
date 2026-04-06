import logoImg from '@/assets/img/logo.jpg'

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
        mobileMenu: false,
        logo: {
            src: logoImg,
            link: '#pfl-body',
            alt: 'Portfolio logo',
            size: 60,
        },
        navleftItems: [
            {
                title: 'À propos',
                href: '#aboutme',
            },
            {
                title: 'Compétences',
                href: '#skills',
            },
            {
                title: 'Parcours',
                href: '#course',
            },
        ],
        navrightItems: [
            {
                title: 'Projets',
                href: '#projects',
            },
            {
                title: 'Loisirs',
                href: '#hobbies',
            },
            {
                title: 'Contact',
                href: '#contact',
            },
        ],
    }),
}
