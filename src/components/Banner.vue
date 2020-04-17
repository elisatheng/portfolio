<template>
    <v-parallax
        :src="background.src"
        :height="background.height"
        class="ptfl-banner ptfl-px mt-10 ptfl--font-righteous"
    >
        <v-row align="center" justify="center">
            <v-col cols="12" class="pa-0 mt-9">
                <p class="ptfl-banner__title mb-0">{{ title }}</p>
                <p class="ptfl-banner__subtitle black--text">{{ subtitle }}</p>
            </v-col>
        </v-row>
    </v-parallax>
</template>

<script>
    export default {
        name: 'Banner',

        data: () => ({
            background: {
                src: require('@/assets/img/banner-grey.jpg'),
                height: 700,
            },
            title: 'Hello, I am Elisa.',
            subtitle: 'A Web Developer.',
        }),
    }
</script>
