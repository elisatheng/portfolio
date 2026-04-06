<template>
    <v-card flat class="pfl-aboutme pfl-card" id="aboutme">
        <v-row align="center" style="min-height: calc(90vh - 90px);">
            <v-col cols="12" md="5" class="d-flex justify-center pfl-aboutme__photo">
                <v-img
                    :src="profile.src"
                    :height="profile.size"
                    :width="profile.size"
                    :max-width="profile.size"
                    class="pfl-border--round flex-grow-0"
                    cover
                ></v-img>
            </v-col>
            <v-col cols="12" md="7">
                <div class="pfl-card__head text-md-left text-center">
                    <h3 class="pfl-aboutme__name">{{ name }}</h3>
                    <p class="pfl-aboutme__subtitle">{{ subtitle }}</p>
                </div>
                <div class="pfl-aboutme__description">
                    <p
                        v-for="text in information"
                        :key="text"
                    >
                        {{ text }}
                    </p>
                </div>
            </v-col>
        </v-row>
        <div class="d-flex flex-column align-center mt-4 pb-4">
            <span class="pfl-scroll-hint__label">Scroll</span>
            <div class="pfl-scroll-line"></div>
        </div>
    </v-card>
</template>

<script type="text/javascript" src="@/assets/js/components/about-me.js"></script>
