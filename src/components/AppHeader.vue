<template>
    <v-app-bar
        absolute
        color="white"
        shrink-on-scroll
        prominent
        scroll-target="#pfl-body"
        class="pfl-header pfl-px pfl--font-righteous"
    >
        <v-row>
            <v-col class="text-left px-0">
                <v-toolbar-items>
                    <v-list-item
                        v-for="item in navleftItems"
                        :key="item.id"
                        class="d-flex align-self-end"
                        v-on:click="initUri"
                    >
                        <v-list-item-content class="d-flex align-self-end pa-0">
                            <a :href="item.href" class="pfl-header__item-link">
                                {{ item.title }}
                            </a>
                        </v-list-item-content>
                    </v-list-item>
                </v-toolbar-items>
            </v-col>
            <v-col cols="5" md="2" class="pa-0">
                <v-toolbar-title class="fill-height pa-0">
                    <div class="pfl-header__block-logo">
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
            <v-col class="text-right px-0">
                <v-toolbar-items>
                    <v-list-item
                        v-for="item in navrightItems"
                        :key="item.id"
                        class="d-flex align-self-end"
                        v-on:click="initUri"
                    >
                        <v-list-item-content class="d-flex align-self-end pa-0">
                            <a :href="item.href" class="pfl-header__item-link">
                                {{ item.title }}
                            </a>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item class="d-flex align-self-end mb-n1 pr-0">
                        <v-list class="d-flex pa-0">
                            <v-list-item
                                v-for="item in socials"
                                :key="item.id"
                                class="d-flex align-self-end px-1"
                            >
                                <v-list-item-content class="d-flex align-self-end pa-0">
                                    <a target="_blank" :href="item.href" class="pfl-header__item-link">
                                        <v-img
                                            :src="item.img.src"
                                            :alt="item.img.alt"
                                            :height="item.img.size"
                                            :width="item.img.size"
                                            class="pfl-header__social-img v-btn--round"
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

<script type="text/javascript" src="@/assets/js/components/app-header.js"></script>
