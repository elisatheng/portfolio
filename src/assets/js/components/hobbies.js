export default {
    name: 'Hobbies',

    data: () => ({
        title: 'Mes loisirs',
        hobbies: [
            {
                icon: 'mdi-human-handsup',
                description: [
                    'Piano',
                    'Karaoké',
                    'Bowling',
                ],
            },
            {
                icon: 'mdi-video-vintage',
                description: [
                    'Animes,',
                    'Dramas asiatiques,',
                    'Films d\'animation',
                ],
            },
            {
                icon: 'mdi-book-open-blank-variant',
                description: [
                    'Mangas,',
                    'Webtoons',
                ],
            },
            {
                icon: 'mdi-airplane',
                description: [
                    'Chine,',
                    'Japon, Corée,',
                    'Cambodge,',
                    'San Francisco,',
                    '...',
                ],
            },
        ],
    }),
}