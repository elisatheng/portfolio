<template>
    <v-app-bar
        absolute
        color="white"
        scroll-target="#pfl-body"
        class="pfl-header"
        flat
        height="90"
    >
        <!-- Desktop nav -->
        <v-row align="center" class="flex-nowrap d-none d-md-flex" style="max-width: 100%;">
            <v-col class="d-flex justify-end align-center ga-8 px-0">
                <a
                    v-for="item in navleftItems"
                    :key="item.title"
                    :href="item.href"
                    class="pfl-header__item-link"
                    @click="initUri"
                >
                    {{ item.title }}
                </a>
            </v-col>
            <v-col cols="auto" class="pa-0">
                <div class="pfl-header__block-logo">
                    <a :href="logo.link" @click.prevent="handleBackTop">
                        <v-img
                            :src="logo.src"
                            :alt="logo.alt"
                            :height="logo.size"
                            :width="logo.size"
                        />
                    </a>
                </div>
            </v-col>
            <v-col class="d-flex justify-start align-center ga-8 px-0">
                <a
                    v-for="item in navrightItems"
                    :key="item.title"
                    :href="item.href"
                    class="pfl-header__item-link"
                    @click="initUri"
                >
                    {{ item.title }}
                </a>
            </v-col>
        </v-row>

        <!-- Mobile nav -->
        <v-row align="center" class="flex-nowrap d-flex d-md-none pfl-header__mobile-row" style="max-width: 100%;">
            <v-col class="px-0"></v-col>
            <v-col cols="auto" class="pa-0">
                <div class="pfl-header__block-logo">
                    <a :href="logo.link" @click.prevent="handleBackTop">
                        <v-img
                            :src="logo.src"
                            :alt="logo.alt"
                            :height="logo.size"
                            :width="logo.size"
                        />
                    </a>
                </div>
            </v-col>
            <v-col class="d-flex justify-end px-0">
                <v-btn icon variant="text" @click="mobileMenu = !mobileMenu">
                    <v-icon>{{ mobileMenu ? 'mdi-close' : 'mdi-menu' }}</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-app-bar>

    <!-- Mobile menu drawer -->
    <div v-if="mobileMenu" class="pfl-header__mobile-menu d-md-none">
        <a
            v-for="item in [...navleftItems, ...navrightItems]"
            :key="item.title"
            :href="item.href"
            class="pfl-header__mobile-menu-link"
            @click="mobileMenu = false; initUri()"
        >
            {{ item.title }}
        </a>
    </div>
</template>

<script type="text/javascript" src="@/assets/js/components/app-header.js"></script>
