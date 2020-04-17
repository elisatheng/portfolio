<template>
    <v-card class="ptfl-footer ptfl-px white text-center">
        <v-row>
            <v-col cols="12">
                <p class="mb-0">
                    <v-icon class="footer-icon">{{ icon }}</v-icon> {{ copyright }}
                </p>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
    export default {
        name: 'AppFooter',

        data: () => ({
            icon: 'mdi-copyright',
            copyright: 'Copyright 2020 Elisa Theng. All rights reserved.',
        }),
    }
</script>
