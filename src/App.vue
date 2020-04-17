<template>
    <v-app>
        <v-card class="overflow-hidden">
            <AppHeader/>

            <v-sheet
                id="ptfl-body"
                class="ptfl-body overflow-y-auto overflow-x-hidden"
                max-height="100vh"
                v-on:scroll="handleNavigationScroll"
            >
                <v-container class="ptfl-container ptfl--height-full pa-0 mt-12">
                    <Banner/>
                    <AboutMe/>
                    <Course/>
                    <Projects/>
                    <Skills/>
                    <Hobbies/>
                    <AppFooter/>
                </v-container>
            </v-sheet>
        </v-card>
    </v-app>
</template>

<script>
    import AppHeader from './components/AppHeader'
    import Banner from './components/Banner'
    import AboutMe from './components/AboutMe'
    import Course from './components/Course'
    import Projects from './components/Projects'
    import Skills from './components/Skills'
    import Hobbies from './components/Hobbies'
    import AppFooter from './components/AppFooter'

    export default {
        name: 'App',

        components: {
            AppHeader,
            Banner,
            AboutMe,
            Course,
            Projects,
            Skills,
            Hobbies,
            AppFooter,
        },

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
