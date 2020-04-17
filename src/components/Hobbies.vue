<template>
    <v-card class="hobbies app-block teal lighten-3">
        <v-row>
            <v-col cols="12" class="hobbies-title block-title text-center">
                <h3 class="title white--text">{{ title }}</h3>
                <div class="three-dots">
                    <v-icon size="8" color="black">mdi-circle</v-icon>
                    <v-icon size="8" color="black" right>mdi-circle</v-icon>
                    <v-icon size="8" color="black" right>mdi-circle</v-icon>
                </div>
            </v-col>
            <v-col cols="12" class="hobbies-content pa-0">
                <v-row justify="space-around" class="text-center">
                    <v-col
                        v-for="(hobby, i) in hobbies"
                        :key="i"
                        class="hobby pa-0"
                    >
                        <v-avatar size="80" class="mb-3">
                            <v-icon size="50" class="hobby-icon">{{ hobby.icon }}</v-icon>
                        </v-avatar>
                        <div class="hobby-description">
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
