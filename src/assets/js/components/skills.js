import VueFlip from 'vue-flip'

export default {
    name: 'Skills',

    components: {
        'vue-flip': VueFlip
    },

    data: () => ({
        title: 'Mes compétences',
        skills: [
            {
                front: 'PHP',
                back: {
                    src: require('@/assets/img/skills/php.png'),
                    alt: 'PHP logo',
                },
            },
            {
                front: 'Symfony',
                back: {
                    src: require('@/assets/img/skills/symfony.png'),
                    alt: 'Symfony logo',
                },
            },
            {
                front: 'PHPUnit',
                back: {
                    src: require('@/assets/img/skills/phpunit.png'),
                    alt: 'PHPUnit logo',
                },
            },
            {
                front: 'ElasticSearch',
                back: {
                    src: require('@/assets/img/skills/elasticsearch.png'),
                    alt: 'ElasticSearch logo',
                },
            },
            {
                front: 'HTML',
                back: {
                    src: require('@/assets/img/skills/html.png'),
                    alt: 'HTML logo',
                },
            },
            {
                front: 'CSS',
                back: {
                    src: require('@/assets/img/skills/css.png'),
                    alt: 'CSS logo',
                },
            },
            {
                front: 'JavaScript',
                back: {
                    src: require('@/assets/img/skills/javascript.png'),
                    alt: 'JavaScript logo',
                },
            },
            {
                front: 'jQuery',
                back: {
                    src: require('@/assets/img/skills/jquery.png'),
                    alt: 'jQuery logo',
                },
            },
            {
                front: 'VueJS',
                back: {
                    src: require('@/assets/img/skills/vuejs.png'),
                    alt: 'VueJS logo',
                },
            },
            {
                front: 'SQL',
                back: {
                    src: require('@/assets/img/skills/mysql.png'),
                    alt: 'SQL logo',
                },
            },
            {
                front: 'Git',
                back: {
                    src: require('@/assets/img/skills/git.png'),
                    alt: 'Git logo',
                },
            },
        ],
    }),
}