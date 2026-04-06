<template>
    <v-app>
        <v-card flat>
            <app-header/>

            <v-sheet
                id="pfl-body"
                max-height="100vh"
                class="overflow-y-auto overflow-x-hidden"
                v-on:scroll="handleNavigationScroll"
            >
                <v-container class="pfl-container fill-height pa-0">
                    <about-me/>
                    <skills/>
                    <course/>
                    <projects/>
                    <hobbies/>
                    <contact/>
                    <app-footer/>
                </v-container>
            </v-sheet>
        </v-card>
    </v-app>
</template>

<script type="text/javascript" src="@/assets/js/app.js"></script>
