import { VueFlip } from 'vue-flip'
import phpImg from '@/assets/img/skills/php.png'
import symfonyImg from '@/assets/img/skills/symfony.png'
import phpunitImg from '@/assets/img/skills/phpunit.png'
import elasticsearchImg from '@/assets/img/skills/elasticsearch.png'
import htmlImg from '@/assets/img/skills/html.png'
import cssImg from '@/assets/img/skills/css.png'
import javascriptImg from '@/assets/img/skills/javascript.png'
import jqueryImg from '@/assets/img/skills/jquery.png'
import vuejsImg from '@/assets/img/skills/vuejs.png'
import mysqlImg from '@/assets/img/skills/mysql.png'
import gitImg from '@/assets/img/skills/git.png'

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
                back: { src: phpImg, alt: 'PHP logo' },
            },
            {
                front: 'Symfony',
                back: { src: symfonyImg, alt: 'Symfony logo' },
            },
            {
                front: 'PHPUnit',
                back: { src: phpunitImg, alt: 'PHPUnit logo' },
            },
            {
                front: 'ElasticSearch',
                back: { src: elasticsearchImg, alt: 'ElasticSearch logo' },
            },
            {
                front: 'HTML',
                back: { src: htmlImg, alt: 'HTML logo' },
            },
            {
                front: 'CSS',
                back: { src: cssImg, alt: 'CSS logo' },
            },
            {
                front: 'JavaScript',
                back: { src: javascriptImg, alt: 'JavaScript logo' },
            },
            {
                front: 'jQuery',
                back: { src: jqueryImg, alt: 'jQuery logo' },
            },
            {
                front: 'VueJS',
                back: { src: vuejsImg, alt: 'VueJS logo' },
            },
            {
                front: 'SQL',
                back: { src: mysqlImg, alt: 'SQL logo' },
            },
            {
                front: 'Git',
                back: { src: gitImg, alt: 'Git logo' },
            },
        ],
    }),
}
