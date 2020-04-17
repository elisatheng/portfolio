<template>
    <v-app>
        <v-card class="overflow-hidden">
            <AppBar/>

            <v-sheet
                id="app-body"
                class="app-body overflow-y-auto overflow-x-hidden"
                max-height="100vh"
                v-on:scroll="handleNavigationScroll"
            >
                <v-container class="app-container pa-0 mt-12">
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
    import AppBar from './components/AppBar'
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
            AppBar,
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
                const $blocks = document.querySelectorAll('.app-block')
                let positions = {}

                $blocks.forEach(function($block, i) {
                    const $body = document.querySelector('#app-body')
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
                document.querySelectorAll('.nav-link').forEach(function($navLink) {
                    if ($navLink.classList.contains('nav-link-active')) {
                        $navLink.classList.remove('nav-link-active')
                    }
                })

                $targetLink.classList.add('nav-link-active')
            },

            handleNavigationScroll(event) {
                for (const id in this.positionBlocks) {
                    const $targetLink = document.querySelector('.nav-link[href="#' + id + '"]')

                    if (
                        event.target.scrollTop >= this.positionBlocks[id].top
                        && event.target.scrollTop <= this.positionBlocks[id].bottom
                    ) {
                        this.handleActiveLink($targetLink)
                    } else {
                        $targetLink.classList.remove('nav-link-active')
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
