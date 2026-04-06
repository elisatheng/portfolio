export default {
    name: 'Contact',

    data: () => ({
        contacts: [
            {
                icon: 'mdi-email-outline',
                label: 'elisa.theng@gmail.com',
                href: 'mailto:elisa.theng@gmail.com',
                external: false,
            },
            {
                icon: 'mdi-github',
                label: 'GitHub',
                href: 'https://github.com/elisatheng',
                external: true,
            },
            {
                icon: 'mdi-linkedin',
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/elisa-theng/',
                external: true,
            },
        ],
    }),
}
