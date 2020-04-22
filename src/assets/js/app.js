export default {
    name: 'App',

    data: () => ({
        positionBlocks: {},
    }),

    mounted() {
        this.getPositionBlocks()
    },

    methods: {
        getPositionBlocks() {
            const $body = document.querySelector('#pfl-body')
            const $blocks = document.querySelectorAll('.pfl-card')
            let positions = this.positionBlocks

            $blocks.forEach(function($block, i) {
                const blockPositionTop = $block.offsetTop - ($block.offsetTop * 0.04)
                let blockPositionBottom = $body.scrollHeight

                if ($blocks[i + 1] !== undefined) {
                    blockPositionBottom = $blocks[i + 1].offsetTop - ($block.offsetTop * 0.04)
                }

                positions[$block.id] = {
                    'top' : blockPositionTop,
                    'bottom' : blockPositionBottom,
                }
            })
        },

        handleActiveLink($targetLink) {
            document.querySelectorAll('.pfl-header__item-link').forEach(function($itemLink) {
                if ($itemLink.classList.contains('pfl-header__item-link--active')) {
                    $itemLink.classList.remove('pfl-header__item-link--active')
                }
            })

            $targetLink.classList.add('pfl-header__item-link--active')
        },

        handleNavigationScroll(event) {
            for (const id in this.positionBlocks) {
                const $targetLink = document.querySelector('.pfl-header__item-link[href="#' + id + '"]')

                if (
                    event.target.scrollTop >= this.positionBlocks[id].top
                    && event.target.scrollTop <= this.positionBlocks[id].bottom
                ) {
                    this.handleActiveLink($targetLink)
                } else {
                    $targetLink.classList.remove('pfl-header__item-link--active')
                }
            }
        },
    },
}