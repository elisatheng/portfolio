import { VueFlip } from 'vue-flip'
import phpImg from '@/assets/img/skills/php.png'
import symfonyImg from '@/assets/img/skills/symfony.png'
import apiplatformImg from '@/assets/img/skills/api-platform.png'
import gitImg from '@/assets/img/skills/git.png'
import claudecodeImg from '@/assets/img/skills/claude-code.svg'

export default {
    name: 'Skills',

    components: {
        'vue-flip': VueFlip
    },

    data: () => ({
        title: 'Stack technique',
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
                front: 'API Platform',
                back: { src: apiplatformImg, alt: 'API Platform logo' },
            },
            {
                front: 'SQL',
                back: null,
            },
            {
                front: 'Git',
                back: { src: gitImg, alt: 'Git logo' },
            },
            {
                front: 'Claude Code',
                back: { src: claudecodeImg, alt: 'Claude Code logo' },
            },
        ],
    }),
}
