<template>
    <v-menu>
        <template v-slot:activator="{ props }">
            <v-btn
                :to="link ?? undefined"
                class="text-none px-2"
                :append-icon="items ? 'mdi-chevron-down' : ''"
                variant="text"
                v-bind="items ? props : {}"
            >
                <div :class="`text-${color ?? ''}`" class="font-weight-medium">
                    {{ title }}
                </div>
            </v-btn>
        </template>
        <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>
<script setup lang="ts">
    defineProps<{ items?: string[]; title: string; color?: string; link?: string }>();
    const iconBtn = ref("mdi-chevron-down");
</script>
