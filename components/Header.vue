<template>
    <v-container class="pt-2">
        <v-toolbar class="bg-transparent toolbar-index" elevation="0">
            <template v-slot:append>
                <v-app-bar-nav-icon
                    class="d-flex d-md-none"
                    variant="text"
                    @click.stop="drawer = !drawer"
                ></v-app-bar-nav-icon>

                <div class="d-none d-md-flex align-center me-4 ga-1">
                    <div class="d-none d-lg-flex">
                        <MenuDropDown title="Talk to Sales" />
                    </div>
                    <v-btn class="me-4 text-none" color="grey-darken-2" variant="outlined">Log in</v-btn>
                    <v-btn class="text-none" variant="flat" color="primary">Get Started</v-btn>
                </div>
            </template>

            <template v-slot:prepend>
                <v-img width="150" src="/images/Employ-light.png" />
                <div class="d-none d-md-flex align-center ml-4 ga-1">
                    <MenuDropDown :items="['Home', 'Profile', 'Settings']" title="Product" />
                    <MenuDropDown :items="['Home', 'Profile', 'Settings']" title="Learning Center" />
                    <MenuDropDown title="Pricing" color="purple" />
                    <div class="d-none d-lg-flex">
                        <MenuDropDown class="d-none d-lg-flex" title="Watch Demo" />
                    </div>
                </div>
            </template>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" :location="'left'" temporary>
            <div class="d-flex justify-center my-4">
                <div>
                    <v-img width="140" src="/images/Employ-light.png" />
                </div>
            </div>
            <v-divider class="mx-2"></v-divider>
            <div class="d-flex flex-column align-center gap-2 ml-4 mt-5 ga-1">
                <MenuDropDown :items="['Home', 'Profile', 'Settings']" title="Product" />
                <MenuDropDown :items="['Home', 'Profile', 'Settings']" title="Learning Center" />
                <MenuDropDown title="Pricing" color="purple" />
                <MenuDropDown title="Watch Demo" />
            </div>
            <div class="d-flex flex-column align-center gap-2 ml-4 mt-1 ga-1">
                <MenuDropDown title="talk to Sales" />
                <v-btn class="mt-2" color="grey-darken-2" variant="outlined">Log in</v-btn>
                <v-btn class="mt-2" variant="flat" color="primary">Get Started</v-btn>
            </div>
        </v-navigation-drawer>
    </v-container>
</template>

<script setup lang="ts">
    const drawer = ref(false);
</script>

<style scoped>
    .toolbar-index {
        z-index: 10;
    }
</style>
