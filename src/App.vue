<template>
    <v-app>
        <v-card class="overflow-hidden">
            <app-header/>

            <v-sheet
                id="ptfl-body"
                class="ptfl-body overflow-y-auto overflow-x-hidden"
                max-height="100vh"
                v-on:scroll="handleNavigationScroll"
            >
                <v-container class="ptfl-container ptfl--height-full pa-0 mt-12">
                    <banner/>
                    <about-me/>
                    <course/>
                    <projects/>
                    <skills/>
                    <hobbies/>
                    <app-footer/>
                </v-container>
            </v-sheet>
        </v-card>
    </v-app>
</template>

<script>
    export default {
        name: 'App',

        methods: {
            getPositionBlocks() {
                const $body = document.querySelector('#ptfl-body')
                const $blocks = document.querySelectorAll('.ptfl-card')
                let positions = {}

                $blocks.forEach(function($block, i) {
                    const blockPositionTop = $block.offsetTop - ($block.offsetTop * 0.04)
                    let blockPositionBottom = $body.scrollHeight

                    if ($blocks[i + 1] !== undefined) {
                        const $blockNext = $blocks[i + 1]
                        blockPositionBottom = $blockNext.offsetTop - ($blockNext.offsetTop * 0.04)
                    }

                    positions[$block.id] = {
                        'top' : blockPositionTop,
                        'bottom' : blockPositionBottom,
                    }
                })

                this.positionBlocks = positions
            },

            handleActiveLink($targetLink) {
                document.querySelectorAll('.ptfl-header__nav-link').forEach(function($navLink) {
                    if ($navLink.classList.contains('ptfl-header__nav-link--active')) {
                        $navLink.classList.remove('ptfl-header__nav-link--active')
                    }
                })

                $targetLink.classList.add('ptfl-header__nav-link--active')
            },

            handleNavigationScroll(event) {
                for (const id in this.positionBlocks) {
                    const $targetLink = document.querySelector('.ptfl-header__nav-link[href="#' + id + '"]')

                    if (
                        event.target.scrollTop >= this.positionBlocks[id].top
                        && event.target.scrollTop <= this.positionBlocks[id].bottom
                    ) {
                        this.handleActiveLink($targetLink)
                    } else {
                        $targetLink.classList.remove('ptfl-header__nav-link--active')
                    }
                }
            },
        },

        mounted() {
            this.getPositionBlocks()
        },

        data: () => ({
            positionBlocks: {},
        }),
    }
</script>
