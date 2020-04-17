<template>
    <v-card class="course app-block red white--text" id="course">
        <v-row>
            <v-col cols="12" class="course-title block-title text-center">
                <h3 class="title">{{ title }}</h3>
                <div class="three-dots">
                    <v-icon size="8" color="white">mdi-circle</v-icon>
                    <v-icon size="8" color="white" right>mdi-circle</v-icon>
                    <v-icon size="8" color="white" right>mdi-circle</v-icon>
                </div>
            </v-col>
            <v-col cols="12" class="course-timeline pa-0">
                <v-timeline>
                    <v-timeline-item
                        v-for="(line, i) in timelines"
                        :key="i"
                        :icon="line.icon"
                        large
                        right
                        color="grey darken-2"
                    >
                        <template v-slot:opposite>
                            <p
                                v-for="info in line.infos"
                                :key="info"
                            >
                                {{ info }}
                            </p>
                        </template>
                        <v-card class="elevation-2">
                            <v-card-title class="timeline-title font-righteous">
                                {{ line.title }}
                            </v-card-title>
                            <v-card-text>
                                <p
                                    v-for="text in line.texts"
                                    :key="text"
                                >
                                    {{ text }}
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
    export default {
        name: 'Course',

        data: () => ({
            title: 'Course',
            timelines: [
                {
                    icon: 'mdi-school',
                    title: 'License in Foreign Languages, Literature and Civilization, Chinese ' +
                        'course Multilingual Digital Processing',
                    infos: {
                        date: '2013 September - 2016 June',
                        place: 'Paris XIIIe',
                    },
                    texts: {
                        place: 'INALCO, Langues O\'',
                    },
                },
                {
                    icon: 'mdi-school',
                    title: 'Title of web integrator / developer',
                    infos: {
                        date: '2016 November - 2018 September',
                        place: 'Paris IIIe',
                    },
                    texts: {
                        place: 'Web@cademie (by Epitech)',
                    },
                },
                {
                    icon: 'mdi-briefcase',
                    title: 'Junior web developer',
                    infos: {
                        type: '[apprenticeship contract]',
                        date: '2017 September - 2018 September',
                        place: 'Paris IIIe',
                    },
                    texts: {
                        place: 'IONIS Education Group',
                        technos: 'WordPress / plugin WordPress / AngularJS / Salesforce / C# / ASP.NET MVC',
                    },
                },
                {
                    icon: 'mdi-briefcase',
                    title: 'Symfony PHP developer',
                    infos: {
                        type: '[permanent contract]',
                        date: '2018 December - 2019 June',
                        place: 'Paris XVe',
                    },
                    texts: {
                        place: 'ALIECOM',
                        technos: 'Symfony / PHP / Bootstrap / jQuery / plugin WordPress',
                    },
                },
                {
                    icon: 'mdi-briefcase',
                    title: 'Back-end developer',
                    infos: {
                        type: '[permanent contract]',
                        date: '2019 October - Now',
                        place: 'Paris IIe',
                    },
                    texts: {
                        place: 'Meero',
                        technos: 'Symfony / PHP / CSS / JavaScript / ElasticSearch',
                    },
                },
            ],
        }),
    }
</script>
