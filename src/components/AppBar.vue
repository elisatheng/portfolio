<template>
    <v-app-bar
        absolute
        color="white"
        shrink-on-scroll
        prominent
        scroll-target="#app-body"
        class="app-bar px-app font-righteous"
    >
        <v-row class="h-100 ml-n7">
            <v-col class="bar-navleft h-100 pa-0 text-left">
                <v-list class="d-flex h-100 pa-0">
                    <v-list-item
                        v-for="(item, i) in navleftItems"
                        :key="i"
                        class="nav-item d-flex align-self-end pa-0"
                    >
                        <v-list-item-content class="pa-0">
                            <a :href="item.href" class="nav-link">{{ item.title }}</a>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-col>
            <v-col cols="2" class="bar-logo pa-0">
                <v-toolbar-title class="h-100 pa-0">
                    <div class="logo">
                        <v-img
                            :src="logo.src"
                            :alt="logo.alt"
                            :height="logo.size"
                            :width="logo.size"
                            class="v-btn--round"
                        />
                    </div>
                </v-toolbar-title>
            </v-col>
            <v-col class="bar-navright h-100 pa-0 text-right">
                <v-list class="d-flex h-100 pa-0">
                    <v-list-item
                        v-for="(item, i) in navrightItems"
                        :key="i"
                        class="nav-item d-flex align-self-end pa-0"
                    >
                        <v-list-item-content class="pa-0">
                            <a :href="item.href" class="nav-link">{{ item.title }}</a>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item class="nav-item d-flex align-self-end pa-0">
                        <v-list class="nav-socials d-flex ml-auto pa-0">
                            <v-list-item
                                v-for="(item, i) in socials"
                                :key="i"
                                class="nav-item d-flex align-self-end px-1"
                            >
                                <v-list-item-content class="pa-0">
                                    <a target="_blank" :href="item.href" class="nav-link">
                                        <v-img
                                            :src="item.img.src"
                                            :alt="item.img.alt"
                                            :height="item.img.size"
                                            :width="item.img.size"
                                            class="nav-img v-btn--round"
                                        />
                                    </a>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>
    </v-app-bar>
</template>

<script>
    export default {
        name: 'AppBar',

        data: () => ({
            logo: {
                src: require('@/assets/img/logo.jpg'),
                alt: 'Portfolio logo',
                size: 100,
            },
            navleftItems: [
                {
                    title: 'About me',
                    href: '#aboutme',
                },
                {
                    title: 'Course',
                    href: '#course',
                },
                {
                    title: 'Projects',
                    href: '#projects',
                },
            ],
            navrightItems: [
                {
                    title: 'Skills',
                    href: '#skills',
                },
                {
                    title: 'Hobbies',
                    href: '#hobbies',
                },
            ],
            socials: [
                {
                    href: 'https://github.com/elisatheng',
                    img: {
                        src: require('@/assets/img/socials/github.png'),
                        alt: 'Github logo',
                        size: 35,
                    },
                },
                {
                    href: 'https://www.linkedin.com/in/elisa-theng/',
                    img: {
                        src: require('@/assets/img/socials/linkedin.png'),
                        alt: 'LinkedIn logo',
                        size: 35,
                    },
                },
                {
                    href: 'http://www.viadeo.com/fr/profile/elisatheng',
                    img: {
                        src: require('@/assets/img/socials/viadeo.png'),
                        alt: 'Viadeo logo',
                        size: 35,
                    },
                },
            ],
        }),
    }
</script>
