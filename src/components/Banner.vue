<template>
    <v-parallax
        :src="background.src"
        :height="background.height"
        class="banner px-app mt-10 font-righteous"
    >
        <v-row align="center" justify="center">
            <v-col cols="12" class="pa-0 mt-9">
                <p class="banner-title mb-0">{{ title }}</p>
                <p class="banner-subtitle black--text">{{ subtitle }}</p>
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
