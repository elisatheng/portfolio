<template>
    <v-app>
        <v-card class="overflow-hidden">
            <AppBar/>

            <v-sheet
                id="app-body"
                class="app-body overflow-y-auto overflow-x-hidden mt-12"
                max-height="100vh"
            >
                <v-container class="app-container pa-0">
                    <Banner/>
                </v-container>
            </v-sheet>
        </v-card>
    </v-app>
</template>

<script>
    import AppBar from './components/AppBar';
    import Banner from './components/Banner';

    export default {
        name: 'App',

        components: {
            AppBar,
            Banner,
        },

        data: () => ({
        }),
    };
</script>
