<template>
    <v-card class="ptfl-projects ptfl-card white" id="projects">
        <v-row>
            <v-col cols="12" class="ptfl-card__head text-center">
                <h3 class="ptfl-card__head-title">{{ title }}</h3>
                <div class="three-dots">
                    <v-icon size="8" color="black">mdi-circle</v-icon>
                    <v-icon size="8" color="black" right>mdi-circle</v-icon>
                    <v-icon size="8" color="black" right>mdi-circle</v-icon>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="ptfl-card__content pa-0">
                <v-row justify="space-around" class="text-center">
                    <v-card
                        v-for="(project, i) in projects"
                        :key="i"
                        max-width="420"
                        @mouseleave="project.overlay = true"
                        class="ptfl-projects__card ptfl-projects__card--grayscale mx-auto mb-5"
                    >
                        <v-overlay
                            :value="project.overlay"
                            :absolute="absolute"
                            class="ptfl-projects__card-overlay"
                        >
                            <div
                                @mouseover="project.overlay = false"
                                class="ptfl-projects__card-overlay-content"
                            ></div>
                        </v-overlay>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title class="ptfl-projects__card-head ptfl--font-righteous">
                                    {{ project.title }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-dialog>
                            <template v-slot:activator="{ on }">
                                <v-img
                                    v-on="on"
                                    :src="project.img.src"
                                    :alt="project.img.alt"
                                    height="180"
                                    position="top"
                                    class="ptfl-projects__card-img"
                                ></v-img>
                            </template>
                            <v-card>
                                <v-card-title primary-title class="ptfl-projects__card-head ptfl--font-righteous">
                                    Project : {{ project.title }}
                                </v-card-title>
                                <v-img
                                    :src="project.img.src"
                                    :alt="project.img.alt"
                                    class="ptfl-projects__card-img"
                                ></v-img>
                            </v-card>
                        </v-dialog>
                        <v-card-text>{{ project.description }}</v-card-text>
                        <v-card-actions>
                            <v-btn
                                text
                                disabled
                                v-for="(techno, i) in project.technos"
                                :key="i"
                                class="px-0"
                            >
                                {{ techno }}
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                                icon
                                link
                                :href="project.link"
                                target="_blank"
                            >
                                <v-icon>mdi-github</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-row>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
    export default {
        name: 'Projects',

        data: () => ({
            title: 'Projects',
            absolute: true,
            projects: [
                {
                    title: 'Sprite Generator CLI',
                    overlay: true,
                    img: {
                        src: require('@/assets/img/projects/sprite-generator-cli.png'),
                        alt: 'Sprite Generator CLI project screenshot',
                    },
                    description: 'A sprite generator in command-line interface',
                    link: 'https://github.com/elisatheng/sprite-generator-cli',
                    technos: [
                        'PHP',
                        'OOP',
                        'CLI',
                    ],
                },
                {
                    title: 'Pianolator',
                    overlay: true,
                    img: {
                        src: require('@/assets/img/projects/pianolator.png'),
                        alt: 'Pianolator project screenshot',
                    },
                    description: 'A simple calculator in jQuery and responsive',
                    link: 'https://github.com/elisatheng/pianolator',
                    technos: [
                        'HTML',
                        'CSS',
                        'jQuery',
                        'responsive',
                    ],
                },
                {
                    title: 'My Art Paint',
                    overlay: true,
                    img: {
                        src: require('@/assets/img/projects/my-art-paint.png'),
                        alt: 'My Art Paint project screenshot',
                    },
                    description: 'A simple \'paint-like\' in jQuery and responsive',
                    link: 'https://github.com/elisatheng/my-art-paint',
                    technos: [
                        'HTML',
                        'CSS',
                        'jQuery',
                        'responsive',
                    ],
                },
                {
                    title: 'File Indexer',
                    overlay: true,
                    img: {
                        src: require('@/assets/img/projects/file-indexer.png'),
                        alt: 'File Indexer project screenshot',
                    },
                    description: 'A modern file indexer for HTTP web servers with focus on your files',
                    link: 'https://github.com/elisatheng/file-indexer',
                    technos: [
                        'PHP',
                        'OOP',
                        'htaccess',
                    ],
                },
            ],
        }),
    }
</script>
