<template>
    <v-card class="pfl-aboutme pfl-card black white--text" id="aboutme">
        <v-row>
            <v-col cols="12" md="6">
                <v-img
                    :src="profile.src"
                    :height="profile.size"
                    :width="profile.size"
                    class="pfl-border--round mx-auto"
                ></v-img>
            </v-col>
            <v-col cols="12" md="6">
                <div class="pfl-card__head text-md-left text-center">
                    <h3 class="pfl-card__head-title">{{ title }}</h3>
                    <div>
                        <v-icon size="8" color="white">mdi-circle</v-icon>
                        <v-icon size="8" color="white" right>mdi-circle</v-icon>
                        <v-icon size="8" color="white" right>mdi-circle</v-icon>
                    </div>
                </div>
                <div class="pfl-aboutme__description">
                    <p
                        v-for="text in information"
                        :key="text"
                        class="text-justify"
                    >
                        {{ text }}
                    </p>
                </div>
            </v-col>
        </v-row>
    </v-card>
</template>

<script type="text/javascript" src="@/assets/js/components/about-me.js"></script>
