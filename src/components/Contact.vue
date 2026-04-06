<template>
    <v-card flat class="pfl-contact pfl-card text-center" id="contact">
        <v-row>
            <v-col cols="12" class="pfl-card__head">
                <h3 class="pfl-contact__title">Discutons ensemble</h3>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="auto">
                <div class="d-flex justify-center flex-wrap ga-4">
                    <a
                        v-for="item in contacts"
                        :key="item.label"
                        :href="item.href"
                        :target="item.external ? '_blank' : undefined"
                        class="pfl-contact__link"
                    >
                        <v-icon size="18" class="mr-2">{{ item.icon }}</v-icon>
                        {{ item.label }}
                    </a>
                </div>
            </v-col>
        </v-row>
    </v-card>
</template>

<script type="text/javascript" src="@/assets/js/components/contact.js"></script>
