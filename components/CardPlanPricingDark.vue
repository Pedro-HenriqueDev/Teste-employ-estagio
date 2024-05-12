<template>
    <div class="text-Roboto">
        <v-chip
            variant="elevated"
            class="chip text-none absolute top-0 rounded-xl px-5 pe-3 mb-n6 ml-5"
            color="primary"
            label
            >{{ chip }} <v-icon class="ml-2" icon="mdi-fire-circle" start></v-icon
        ></v-chip>

        <v-card color="grey-darken-4" class="mx-auto rounded-xl py-8 text-white" width="330" height="560" border flat>
            <v-list-item class="px-6 mb-3">
                <h1 class="text-h4 font-weight-bold text-center">
                    <span>Pacote </span>
                    <span class="text-primary">{{ title }}</span>
                </h1>
            </v-list-item>

            <v-divider class="mx-5 line-styled"></v-divider>

            <v-card-text class="text-medium-emphasis pa-6 pt-2 d-flex flex-column ga-2">
                <div class="text-h6 mb-3 mt-1 text-white">Services</div>
                <div class="card-options d-flex flex-column ga-3 text-white">
                    <div class="d-flex align-center ga-2">
                        <v-icon class="text-green">mdi-check</v-icon>
                        <span>Ilimitados livros e artigos!</span>
                    </div>

                    <div class="d-flex align-center ga-2">
                        <v-icon class="text-green">mdi-check</v-icon>
                        <span>Email marketing</span>
                    </div>

                    <div class="d-flex align-center ga-2">
                        <v-icon class="text-green">mdi-check</v-icon>
                        <span>Publicidade on-line</span>
                    </div>
                    <div class="d-flex align-center ga-2">
                        <v-icon class="text-green">mdi-check</v-icon>
                        <span> Receba notificações</span>
                    </div>
                </div>
            </v-card-text>
            <v-card-actions class="px-6">
                <div class="text-grey-darken-4 relative w-100">
                    <div class="text-subtitle-1 font-weight-bold text-white">Preço</div>
                    <div class="d-flex align-center ga-2 text-white">
                        <div class="text-h4 font-weight-bold">R$ {{ price }}</div>
                        <div class="text-h6">/ mês</div>
                    </div>
                    <v-btn rounded="xl" size="large" class="mt-3 text-none" block color="primary" variant="elevated"
                        >Escolher Plano!</v-btn
                    >
                </div>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script setup lang="ts">
    defineProps<{ chip?: string; title: string; price?: string }>();
</script>

<style scoped>
    .chip {
        z-index: 2;
    }
    .text-Roboto {
        font-family: "Roboto", sans-serif !important;
    }

    .line-styled {
        border: 1.5px solid;
    }
    .card-options {
        height: 170px;
    }
</style>
