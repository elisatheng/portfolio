<template>
    <v-app>
        <v-card class="overflow-hidden">
            <AppBar/>

            <v-sheet
                id="app-content"
                class="overflow-y-auto mt-12"
                max-height="1000"
            >
                <v-container class="app-container pa-0" fluid></v-container>
            </v-sheet>
        </v-card>
    </v-app>
</template>

<script>
    import AppBar from './components/AppBar';

    export default {
        name: 'App',

        components: {
            AppBar,
        },

        data: () => ({
        }),
    };
</script>
