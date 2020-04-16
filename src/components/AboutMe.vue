<template>
    <v-card class="aboutme app-block black white--text">
        <v-row>
            <v-col cols="6" class="aboutme-profile">
                <v-img
                    :src="profile.src"
                    :height="profile.size"
                    :width="profile.size"
                    class="profile mx-auto"
                ></v-img>
            </v-col>
            <v-col cols="6" class="aboutme-information">
                <v-row>
                    <v-col cols="12" class="information-title pa-0">
                        <div class="block-title">
                            <h3 class="title">{{ title }}</h3>
                            <div class="three-dots">
                                <v-icon size="8" color="white">mdi-circle</v-icon>
                                <v-icon size="8" color="white" right>mdi-circle</v-icon>
                                <v-icon size="8" color="white" right>mdi-circle</v-icon>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" class="information-description pa-0">
                        <p
                            v-for="text in information"
                            :key="text"
                            class="text-justify"
                        >
                            {{ text }}
                        </p>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
    export default {
        name: 'AboutMe',

        data: () => ({
            profile: {
                src: require('@/assets/img/profile.png'),
                alt: 'Profile image',
                size: 250,
            },
            title: 'About me',
            information: {
                description1: 'During my language licence, I discovered for the first time the programming in C++ and HTML/CSS. ' +
                    'Pleasantly surprised, I enjoyed writing tags and applying styles. But writing lines of code, ' +
                    'solving the statements and seeing the realisation of your own code take shape, ' +
                    'is what immediately appealed to me.',
                description2: 'This is how I decided to integrate Web@cademie school after the validation of my licence ' +
                    'in order to fully live my passion and make it my professional career.',
                description3: 'Today, I work for a French start-up specializing in professional photography as back-end developer.',
            },
        }),
    }
</script>
