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
                    <flip-card
                        v-for="(skill, i) in skills"
                        :key="i"
                        :frontData="skill.front"
                        :backData="skill.back"
                        class="skill-flip mb-3 font-righteous"
                    ></flip-card>
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
                {
                    front: 'PHP',
                    back: '<img src="' + require('@/assets/img/skills/php.png') + '" width="100%" alt="PHP logo" class="skill-flip-img">',
                },
                {
                    front: 'Symfony',
                    back: '<img src="' + require('@/assets/img/skills/symfony.png') + '" width="100%" alt="Symfony logo" class="skill-flip-img">',
                },
                {
                    front: 'HTML',
                    back: '<img src="' + require('@/assets/img/skills/html.png') + '" width="100%" alt="HTML logo" class="skill-flip-img">',
                },
                {
                    front: 'CSS',
                    back: '<img src="' + require('@/assets/img/skills/css.png') + '" width="100%" alt="CSS logo" class="skill-flip-img">',
                },
                {
                    front: 'jQuery',
                    back: '<img src="' + require('@/assets/img/skills/jquery.png') + '" width="100%" alt="jQuery logo" class="skill-flip-img">',
                },
                {
                    front: 'JavaScript',
                    back: '<img src="' + require('@/assets/img/skills/javascript.png') + '" width="100%" alt="JavaScript logo" class="skill-flip-img">',
                },
                {
                    front: 'VueJS',
                    back: '<img src="' + require('@/assets/img/skills/vuejs.png') + '" width="100%" alt="VueJS logo" class="skill-flip-img">',
                },
                {
                    front: 'SQL',
                    back: '<img src="' + require('@/assets/img/skills/mysql.png') + '" width="100%" alt="SQL logo" class="skill-flip-img">',
                },
                {
                    front: 'Git',
                    back: '<img src="' + require('@/assets/img/skills/git.png') + '" width="100%" alt="Git logo" class="skill-flip-img">',
                },
            ],
        }),
    }
</script>
