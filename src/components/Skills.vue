<template>
    <v-card class="skills app-block grey darken-2 white--text">
        <v-row>
            <v-col cols="12" class="skills-title block-title text-center">
                <h3 class="title">{{ title }}</h3>
                <div class="three-dots">
                    <v-icon size="8" color="white">mdi-circle</v-icon>
                    <v-icon size="8" color="white" right>mdi-circle</v-icon>
                    <v-icon size="8" color="white" right>mdi-circle</v-icon>
                </div>
            </v-col>
            <v-col cols="12" class="skills-content pa-0">
                <v-row justify="space-around" class="text-center">
                    <v-avatar
                        v-for="skill in skills"
                        :key="skill"
                        color="black"
                        size="120"
                    >
                        <span>{{ skill }}</span>
                    </v-avatar>
                </v-row>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
    export default {
        name: 'Skills',

        data: () => ({
            title: 'Skills',
            skills: [
                'PHP',
                'Symfony',
                'HTML',
                'CSS',
                'jQuery',
                'JavaScript',
                'VueJS',
                'SQL',
                'Git',
            ],
        }),
    }
</script>
