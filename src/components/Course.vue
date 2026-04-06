<template>
    <v-card flat class="pfl-course pfl-card" id="course">
        <v-row>
            <v-col cols="12" class="pfl-card__head text-center">
                <h3 class="pfl-card__head-title">{{ title }}</h3>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12">
                <v-timeline :side="isMobile ? 'end' : undefined">
                    <v-timeline-item
                        v-for="line in timelines"
                        :key="line.title + line.period"
                        :icon="line.icon"
                        size="large"
                        dot-color="#4BBFBF"
                        class="pfl-course__item"
                    >
                        <v-card flat class="pfl-course__timeline-card">
                            <div class="pfl-course__timeline-meta">
                                <span v-if="line.contract" class="pfl-course__timeline-contract">
                                    {{ line.contract }}
                                </span>
                                <span class="pfl-course__timeline-info">
                                    {{ line.period }}
                                    <span v-if="line.duration" class="pfl-course__timeline-duration">({{ line.duration }})</span>
                                </span>
                            </div>
                            <v-card-title class="pfl-course__timeline-title pa-0">
                                {{ line.title }}
                            </v-card-title>
                            <div v-if="line.place" class="pfl-course__timeline-place mt-2">
                                {{ line.place }}
                            </div>
                            <v-card-text class="pfl-course__timeline-text pa-0 mt-1">
                                <p v-for="text in line.texts" :key="text" class="mb-1">
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

<script type="text/javascript" src="@/assets/js/components/course.js"></script>
