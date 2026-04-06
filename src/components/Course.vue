<template>
    <v-card color="red" class="pfl-course pfl-card text-white" id="course">
        <v-row>
            <v-col cols="12" class="pfl-card__head text-center">
                <h3 class="pfl-card__head-title">{{ title }}</h3>
                <div>
                    <v-icon size="8" color="white">mdi-circle</v-icon>
                    <v-icon size="8" color="white" class="ml-1">mdi-circle</v-icon>
                    <v-icon size="8" color="white" class="ml-1">mdi-circle</v-icon>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div class="text-center">
                    <v-btn
                        icon
                        size="small"
                        variant="flat"
                        color="grey-darken-1"
                        data-filter-type="all"
                        class="pfl-course__btn-filter mx-2"
                        @click="filterCourse('all')"
                    >
                        <v-icon color="white">mdi-circle</v-icon>
                    </v-btn>
                    <v-btn
                        icon
                        size="small"
                        variant="flat"
                        color="black"
                        data-filter-type="school"
                        class="pfl-course__btn-filter mx-2"
                        @click="filterCourse('school')"
                    >
                        <v-icon color="white">mdi-school</v-icon>
                    </v-btn>
                    <v-btn
                        icon
                        size="small"
                        variant="flat"
                        color="black"
                        data-filter-type="work"
                        class="pfl-course__btn-filter mx-2"
                        @click="filterCourse('work')"
                    >
                        <v-icon color="white">mdi-briefcase</v-icon>
                    </v-btn>
                </div>
                <v-timeline density="compact" side="end">
                    <v-timeline-item
                        v-for="line in timelines"
                        :key="line.id"
                        :icon="line.icon"
                        size="large"
                        dot-color="grey-darken-1"
                        :data-course-type="line.type"
                        class="pfl-course__item"
                    >
                        <template v-slot:opposite>
                            <span v-for="info in line.infos" :key="info" class="pfl-course__timeline-info">
                                {{ info }}
                            </span>
                        </template>
                        <v-card class="elevation-2">
                            <v-card-title class="pfl-course__timeline-title pfl--font-righteous">
                                {{ line.title }}
                            </v-card-title>
                            <v-card-text class="pfl-course__timeline-text">
                                <p v-for="text in line.texts" :key="text">
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
