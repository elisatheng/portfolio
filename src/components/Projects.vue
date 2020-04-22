<template>
    <v-card class="pfl-projects pfl-card white" id="projects">
        <v-row>
            <v-col cols="12" class="pfl-card__head text-center">
                <h3 class="pfl-card__head-title">{{ title }}</h3>
                <div>
                    <v-icon size="8" color="black">mdi-circle</v-icon>
                    <v-icon size="8" color="black" right>mdi-circle</v-icon>
                    <v-icon size="8" color="black" right>mdi-circle</v-icon>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-sheet elevation="4">
                    <v-slide-group
                        show-arrows
                        center-active
                    >
                        <v-slide-item
                            v-for="project in projects"
                            :key="project.id"
                            v-slot="{ toggle }"
                        >
                            <v-card
                                width="320"
                                color="white"
                                class="pfl-projects__card ma-4 text-center"
                                @click="toggle"
                            >
                                <v-list-item>
                                    <v-list-item-content class="pb-0">
                                        <v-list-item-title class="pfl-projects__card-head pfl--font-righteous">
                                            {{ project.title }}
                                            <v-btn
                                                icon
                                                link
                                                :href="project.link"
                                                target="_blank"
                                            >
                                                <v-icon>mdi-github</v-icon>
                                            </v-btn>
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-img
                                    :src="project.img.src"
                                    :alt="project.img.alt"
                                    height="200"
                                    :position="project.img.position"
                                    class="pfl-projects__card-img"
                                ></v-img>
                                <v-card-actions class="d-block pt-0">
                                    <v-btn
                                        v-for="techno in project.technos"
                                        :key="techno.id"
                                        text
                                        disabled
                                        x-small
                                        class="px-0"
                                    >
                                        {{ techno }}
                                    </v-btn>
                                </v-card-actions>
                                <v-card-text>{{ project.description }}</v-card-text>
                            </v-card>
                        </v-slide-item>
                    </v-slide-group>
                </v-sheet>
            </v-col>
        </v-row>
    </v-card>
</template>

<script type="text/javascript" src="@/assets/js/components/projects.js"></script>
