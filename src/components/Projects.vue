<template>
    <v-card flat class="pfl-projects pfl-card" id="projects">
        <v-row>
            <v-col cols="12" class="pfl-card__head text-center">
                <h3 class="pfl-card__head-title">{{ title }}</h3>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12">
                <div class="d-flex flex-wrap justify-center">
                    <v-card
                        v-for="project in projects"
                        :key="project.title"
                        width="320"
                        class="pfl-projects__card ma-4 text-center"
                    >
                        <v-list-item>
                            <v-list-item-title class="pfl-projects__card-head pb-0">
                                {{ project.title }}
                                <v-btn
                                    icon
                                    variant="text"
                                    :href="project.link"
                                    target="_blank"
                                >
                                    <v-icon>mdi-github</v-icon>
                                </v-btn>
                            </v-list-item-title>
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
                                :key="techno"
                                variant="text"
                                disabled
                                size="x-small"
                                class="px-0"
                            >
                                {{ techno }}
                            </v-btn>
                        </v-card-actions>
                        <v-card-text class="text-left" style="color: var(--ink-mid); font-size: 1.11rem;">{{ project.description }}</v-card-text>
                    </v-card>
                </div>
            </v-col>
        </v-row>
    </v-card>
</template>

<script type="text/javascript" src="@/assets/js/components/projects.js"></script>
