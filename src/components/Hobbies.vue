<template>
    <v-card class="ptfl-hobbies ptfl-card teal lighten-3" id="hobbies">
        <v-row>
            <v-col cols="12" class="ptfl-card__head text-center">
                <h3 class="ptfl-card__head-title white--text">{{ title }}</h3>
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
                    <v-col
                        v-for="hobby in hobbies"
                        :key="hobby.id"
                        class="pa-0"
                    >
                        <v-avatar size="80" class="mb-3">
                            <v-icon size="50" class="ptfl-hobbies__card-icon">{{ hobby.icon }}</v-icon>
                        </v-avatar>
                        <div>
                            <p
                                v-for="text in hobby.description"
                                :key="text"
                                class="mb-0"
                            >
                                {{ text }}
                            </p>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
    export default {
        name: 'Hobbies',

        data: () => ({
            title: 'Hobbies',
            hobbies: [
                {
                    icon: 'mdi-human-handsup',
                    description: [
                        'Piano',
                        'Karaoke',
                        'Bowling',
                    ],
                },
                {
                    icon: 'mdi-video-vintage',
                    description: [
                        'Kimetsu no Yaiba, One Piece, Haikyuu,',
                        'Dramas asiatiques,',
                        'Walt Disney, Pixar, DreamWorks, Ghibli,',
                        'Mamoru Hosoda,',
                        'Makoto Shinkai',
                    ],
                },
                {
                    icon: 'mdi-airplane',
                    description: [
                        'China,',
                        'Japan, Korea,',
                        'Cambodgia,',
                        'San Francisco,',
                        '...',
                    ],
                },
            ],
        }),
    }
</script>
