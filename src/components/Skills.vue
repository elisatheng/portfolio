<template>
    <v-card class="pfl-skills pfl-card grey darken-2 white--text" id="skills">
        <v-row>
            <v-col cols="12" class="pfl-card__head text-center">
                <h3 class="pfl-card__head-title">{{ title }}</h3>
                <div>
                    <v-icon size="8" color="white">mdi-circle</v-icon>
                    <v-icon size="8" color="white" right>mdi-circle</v-icon>
                    <v-icon size="8" color="white" right>mdi-circle</v-icon>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="pfl-card__content pa-0">
                <v-row justify="space-around" class="text-center">
                    <vue-flip
                        v-for="skill in skills"
                        :key="skill.id"
                        height="120px"
                        width="120px"
                        :active-hover="true"
                    >
                        <template v-slot:front class="front">
                            {{ skill.front }}
                        </template>
                        <template v-slot:back class="back">
                            <img :src="skill.back.src" :alt="skill.back.alt" width="100%" class="pfl-border--round">
                        </template>
                    </vue-flip>
                </v-row>
            </v-col>
        </v-row>
    </v-card>
</template>

<script type="text/javascript" src="@/assets/js/components/skills.js"></script>
