<template>
    <v-app-bar
        absolute
        color="white"
        shrink-on-scroll
        prominent
        scroll-target="#ptfl-body"
        class="ptfl-header ptfl-px ptfl--font-righteous"
    >
        <v-row class="ptfl--height-full ml-n7">
            <v-col class="ptfl-header__navleft ptfl--height-full pa-0 text-left">
                <v-toolbar-items class="hidden-sm-and-down">
                    <v-list-item
                        v-for="item in navleftItems"
                        :key="item.id"
                        class="d-flex align-self-end pa-0"
                    >
                        <v-list-item-content class="pa-0">
                            <a
                                :href="item.href"
                                class="ptfl-header__nav-link"
                                v-on:click="handleNavigation"
                            >
                                {{ item.title }}
                            </a>
                        </v-list-item-content>
                    </v-list-item>
                </v-toolbar-items>

                <!-- MOBILE -->
                <v-menu
                    bottom
                    transition="scale-transition"
                    offset-y
                    class="hidden-md-and-up"
                >
                    <template v-slot:activator="{ on }">
                        <v-app-bar-nav-icon
                            v-on="on"
                            class="ptfl-header__nav-mobile-icon hidden-md-and-up"
                        ></v-app-bar-nav-icon>
                    </template>
                    <v-list>
                        <v-list-item
                            v-for="item in navleftItems"
                            :key="item.id"
                        >
                            <v-list-item-content class="pa-0 text-center">
                                <a
                                    :href="item.href"
                                    class="ptfl-header__nav-link"
                                    v-on:click="handleNavigation"
                                >
                                    {{ item.title }}
                                </a>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item
                            v-for="item in navrightItems"
                            :key="item.id"
                        >
                            <v-list-item-content class="pa-0 text-center">
                                <a
                                    :href="item.href"
                                    class="ptfl-header__nav-link"
                                    v-on:click="handleNavigation"
                                >
                                    {{ item.title }}
                                </a>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item class="justify-center">
                            <v-list>
                                <v-list-item
                                    v-for="item in socials"
                                    :key="item.id"
                                >
                                    <v-list-item-content class="pa-0">
                                        <a target="_blank" :href="item.href" class="ptfl-header__nav-link">
                                            <v-img
                                                :src="item.img.src"
                                                :alt="item.img.alt"
                                                :height="item.img.size"
                                                :width="item.img.size"
                                                class="ptfl-header__nav-img v-btn--round"
                                            />
                                        </a>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <!-- MOBILE -->

            </v-col>
            <v-col cols="5" md="2" class="ptfl-header__logo pa-0">
                <v-toolbar-title class="ptfl--height-full pa-0">
                    <div class="ptfl-header__logo--bg">
                        <a :href="logo.link">
                            <v-img
                                :src="logo.src"
                                :alt="logo.alt"
                                :height="logo.size"
                                :width="logo.size"
                                class="v-btn--round"
                                v-on:click="handleBackTop"
                            />
                        </a>
                    </div>
                </v-toolbar-title>
            </v-col>
            <v-col class="ptfl-header__navright ptfl--height-full pa-0 text-right">
                <v-toolbar-items class="hidden-sm-and-down">
                    <v-list-item
                        v-for="item in navrightItems"
                        :key="item.id"
                        class="d-flex align-self-end pa-0"
                    >
                        <v-list-item-content class="pa-0">
                            <a
                                :href="item.href"
                                class="ptfl-header__nav-link"
                                v-on:click="handleNavigation"
                            >
                                {{ item.title }}
                            </a>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item class="d-flex align-self-end pa-0">
                        <v-list class="d-flex ml-auto pa-0">
                            <v-list-item
                                v-for="item in socials"
                                :key="item.id"
                                class="d-flex align-self-end px-1"
                            >
                                <v-list-item-content class="pa-0">
                                    <a target="_blank" :href="item.href" class="ptfl-header__nav-link">
                                        <v-img
                                            :src="item.img.src"
                                            :alt="item.img.alt"
                                            :height="item.img.size"
                                            :width="item.img.size"
                                            class="ptfl-header__nav-img v-btn--round"
                                        />
                                    </a>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-list-item>
                </v-toolbar-items>
            </v-col>
        </v-row>
    </v-app-bar>
</template>

<script>
    export default {
        name: 'AppBar',

        methods: {
            handleActiveLink($targetLink) {
                document.querySelectorAll('.ptfl-header__nav-link').forEach(function($navLink) {
                    if ($navLink.classList.contains('ptfl-header__nav-link--active')) {
                        $navLink.classList.remove('ptfl-header__nav-link--active')
                    }
                })

                $targetLink.classList.add('ptfl-header__nav-link--active')
            },

            handleNavigation(event) {
                this.handleActiveLink(event.target)

                setTimeout(() => {
                    window.history.replaceState('', document.title, window.location.origin + window.location.pathname)
                }, 5);
            },

            handleBackTop() {
                const $body = document.querySelector('#ptfl-body')
                $body.scrollTop = 0

                setTimeout(() => {
                    window.history.replaceState('', document.title, window.location.origin + window.location.pathname)
                }, 5);
            },
        },

        data: () => ({
            logo: {
                src: require('@/assets/img/logo.jpg'),
                link: '#ptfl-body',
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
