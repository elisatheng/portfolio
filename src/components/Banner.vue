<template>
    <v-parallax
        :src="background.src"
        :height="background.height"
        class="pfl-banner pfl-px pfl--font-righteous"
    >
        <v-row align="center" justify="center">
            <v-col cols="12" class="col-height-init">
                <p class="pfl-banner__title mb-0">{{ title }}</p>
                <p class="pfl-banner__subtitle black--text">{{ subtitle }}</p>
            </v-col>
        </v-row>
    </v-parallax>
</template>

<script type="text/javascript" src="@/assets/js/components/banner.js"></script>
