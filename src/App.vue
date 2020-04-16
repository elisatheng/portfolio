<template>
    <v-app>
        <v-card class="overflow-hidden">
            <AppBar/>

            <v-sheet
                id="app-body"
                class="app-body overflow-y-auto overflow-x-hidden"
                max-height="100vh"
            >
                <v-container class="app-container pa-0 mt-12">
                    <Banner/>
                    <AboutMe/>
                    <Course/>
                    <Projects/>
                    <Skills/>
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

    export default {
        name: 'App',

        components: {
            AppBar,
            Banner,
            AboutMe,
            Course,
            Projects,
            Skills,
        },

        data: () => ({
        }),
    }
</script>
