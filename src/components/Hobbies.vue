<template>
    <v-card class="pfl-hobbies pfl-card teal lighten-3" id="hobbies">
        <v-row>
            <v-col cols="12" class="pfl-card__head text-center">
                <h3 class="pfl-card__head-title white--text">{{ title }}</h3>
                <div>
                    <v-icon size="8" color="black">mdi-circle</v-icon>
                    <v-icon size="8" color="black" right>mdi-circle</v-icon>
                    <v-icon size="8" color="black" right>mdi-circle</v-icon>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="pfl-card__content pa-0">
                <v-row justify="space-around" class="text-center">
                    <v-col
                        v-for="hobby in hobbies"
                        :key="hobby.id"
                        class="pa-0"
                    >
                        <v-avatar size="80" class="mb-3">
                            <v-icon size="50" class="pfl-hobbies__card-icon">{{ hobby.icon }}</v-icon>
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

<script type="text/javascript" src="@/assets/js/components/hobbies.js"></script>
