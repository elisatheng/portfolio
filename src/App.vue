<template>
    <v-app>
        <v-card>
            <app-header/>

            <v-sheet
                id="pfl-body"
                max-height="100vh"
                class="overflow-y-auto overflow-x-hidden"
                v-on:scroll="handleNavigationScroll"
            >
                <v-container class="pfl-container fill-height pa-0 mt-15">
                    <banner/>
                    <about-me/>
                    <course/>
                    <projects/>
                    <skills/>
                    <hobbies/>
                    <app-footer/>
                </v-container>
            </v-sheet>
        </v-card>
    </v-app>
</template>

<script type="text/javascript" src="@/assets/js/app.js"></script>
