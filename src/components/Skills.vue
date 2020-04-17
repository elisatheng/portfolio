<template>
    <v-card class="ptfl-skills ptfl-card grey darken-2 white--text" id="skills">
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
            <v-col cols="12" class="ptfl-card__content pa-0">
                <v-row justify="space-around" class="text-center">
                    <flip-card
                        v-for="(skill, i) in skills"
                        :key="i"
                        :frontData="skill.front"
                        :backData="skill.back"
                        class="ptfl-skills__flip-card mb-3 ptfl--font-righteous"
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
                    back: '<img src="' + require('@/assets/img/skills/php.png') + '" width="100%" alt="PHP logo" class="ptfl-border--round">',
                },
                {
                    front: 'Symfony',
                    back: '<img src="' + require('@/assets/img/skills/symfony.png') + '" width="100%" alt="Symfony logo" class="ptfl-border--round">',
                },
                {
                    front: 'HTML',
                    back: '<img src="' + require('@/assets/img/skills/html.png') + '" width="100%" alt="HTML logo" class="ptfl-border--round">',
                },
                {
                    front: 'CSS',
                    back: '<img src="' + require('@/assets/img/skills/css.png') + '" width="100%" alt="CSS logo" class="ptfl-border--round">',
                },
                {
                    front: 'jQuery',
                    back: '<img src="' + require('@/assets/img/skills/jquery.png') + '" width="100%" alt="jQuery logo" class="ptfl-border--round">',
                },
                {
                    front: 'JavaScript',
                    back: '<img src="' + require('@/assets/img/skills/javascript.png') + '" width="100%" alt="JavaScript logo" class="ptfl-border--round">',
                },
                {
                    front: 'VueJS',
                    back: '<img src="' + require('@/assets/img/skills/vuejs.png') + '" width="100%" alt="VueJS logo" class="ptfl-border--round">',
                },
                {
                    front: 'SQL',
                    back: '<img src="' + require('@/assets/img/skills/mysql.png') + '" width="100%" alt="SQL logo" class="ptfl-border--round">',
                },
                {
                    front: 'Git',
                    back: '<img src="' + require('@/assets/img/skills/git.png') + '" width="100%" alt="Git logo" class="ptfl-border--round">',
                },
            ],
        }),
    }
</script>
