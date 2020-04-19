export default {
    name: 'AboutMe',

    data: () => ({
        profile: {
            src: require('@/assets/img/profile.png'),
            alt: 'Profile image',
            size: 250,
        },
        title: 'À propos de moi',
        information: {
            description1: 'Ayant découvert la programmation par hasard durant ma licence, ' +
                'j\'ai tout de suite trouvé une passion dans la conception de site web.',
            description2: 'C\'est ainsi que je me suis reconvertie après la validation de la licence, ' +
                'et j\'ai intégré la Web@cademie afin de vivre pleinement ma passion et en faire ma carrière professionnelle.',
        },
    }),
}