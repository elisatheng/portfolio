<template>
    <v-card class="pftl-course ptfl-card red white--text" id="course">
        <v-row>
            <v-col cols="12" class="ptfl-card__head text-center">
                <h3 class="ptfl-card__head-title">{{ title }}</h3>
                <div class="three-dots">
                    <v-icon size="8" color="white">mdi-circle</v-icon>
                    <v-icon size="8" color="white" right>mdi-circle</v-icon>
                    <v-icon size="8" color="white" right>mdi-circle</v-icon>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="pftl-card__content pa-0">
                <v-timeline
                    align-top
                    dense
                >
                    <v-timeline-item
                        v-for="(line, i) in timelines"
                        :key="i"
                        :icon="line.icon"
                        large
                        right
                        color="grey darken-2"
                    >
                        <template>
                            <span
                                v-for="info in line.infos"
                                :key="info"
                            >
                                {{ info }}
                            </span>
                        </template>
                        <v-card class="elevation-2">
                            <v-card-title class="ptfl-course__timeline-title ptfl--font-righteous">
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
                    },
                    texts: {
                        place: 'INALCO, Langues O\' (Paris XIIIe)',
                    },
                },
                {
                    icon: 'mdi-school',
                    title: 'Title of web integrator / developer',
                    infos: {
                        date: '2016 November - 2018 September',
                    },
                    texts: {
                        place: 'Web@cademie - Ambition Féminine (by Epitech) (Paris IIIe)',
                    },
                },
                {
                    icon: 'mdi-briefcase',
                    title: 'Junior web developer',
                    infos: {
                        date: '2017 September - 2018 September',
                        type: '[apprenticeship contract]',
                    },
                    texts: {
                        place: 'IONIS Education Group (Paris IIIe)',
                        technos: 'WordPress / plugin WordPress / AngularJS / Salesforce / C# / ASP.NET MVC',
                    },
                },
                {
                    icon: 'mdi-briefcase',
                    title: 'Symfony PHP developer',
                    infos: {
                        date: '2018 December - 2019 June',
                        type: '[permanent contract]',
                    },
                    texts: {
                        place: 'ALIECOM (Paris XVe)',
                        technos: 'Symfony / PHP / Bootstrap / jQuery / plugin WordPress',
                    },
                },
                {
                    icon: 'mdi-briefcase',
                    title: 'Back-end developer',
                    infos: {
                        date: '2019 October - Now',
                        type: '[permanent contract]',
                    },
                    texts: {
                        place: 'Meero (Paris IIe)',
                        technos: 'Symfony / PHP / CSS / JavaScript / ElasticSearch',
                    },
                },
            ],
        }),
    }
</script>
