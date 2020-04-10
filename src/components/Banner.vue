<template>
    <v-parallax
        src="@/assets/img/banner-grey.jpg"
        height="700"
        class="banner px-app mt-10"
    >
        <v-row
            align="center"
            justify="center"
        >
            <v-col class="mt-9 pa-0" cols="12">
                <p class="banner-title font-righteous mb-0">Hello, I am Elisa.</p>
                <p class="banner-subtitle font-righteous">A Web Developer.</p>
            </v-col>
        </v-row>
    </v-parallax>
</template>

<script>
    export default {
        name: 'Banner',

        data: () => ({
        }),
    }
</script>
