<template>
    <v-card flat class="pfl-skills pfl-card" id="skills">
        <v-row>
            <v-col cols="12" class="pfl-card__head text-center">
                <h3 class="pfl-card__head-title">{{ title }}</h3>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="pfl-card__content pa-0">
                <v-row justify="space-around" class="text-center">
                    <template v-for="skill in skills" :key="skill.front">
                        <vue-flip
                            v-if="skill.back"
                            height="120px"
                            width="120px"
                            :active-hover="true"
                        >
                            <template v-slot:front>
                                {{ skill.front }}
                            </template>
                            <template v-slot:back>
                                <img :src="skill.back.src" :alt="skill.back.alt" width="100%" class="pfl-border--round">
                            </template>
                        </vue-flip>
                        <div v-else class="pfl-skill-circle">
                            {{ skill.front }}
                        </div>
                    </template>
                </v-row>
            </v-col>
        </v-row>
    </v-card>
</template>

<script type="text/javascript" src="@/assets/js/components/skills.js"></script>
