<template>
    <v-card flat class="pfl-hobbies pfl-card" id="hobbies">
        <v-row>
            <v-col cols="12" class="pfl-card__head text-center">
                <h3 class="pfl-card__head-title">{{ title }}</h3>
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
                        <v-avatar size="80" class="mb-3" color="#EAF7F7">
                            <v-icon size="50" class="pfl-hobbies__card-icon">{{ hobby.icon }}</v-icon>
                        </v-avatar>
                        <div>
                            <p
                                v-for="text in hobby.description"
                                :key="text"
                                class="mb-0"
                                style="color: var(--ink-mid); font-weight: 300; font-size: 1.11rem;"
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
