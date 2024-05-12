<template>
    <v-app>
        <Header />
        <div style="height: 500px" class="bg-surface w-full px-3">
            <div class="d-flex flex-column align-center mt-8 mt-md-16 text-grey-darken-4">
                <h1 class="text-h4 text-md-h3 text-center">Pick The plan that's right for you</h1>
                <div class="text-subtitle-1">No credit card required.</div>

                <div class="mt-16 d-flex flex-wrap justify-center ga-5">
                    <CardPlanPricing chip="Basic" title="Beginner" price="19,99" color="blue" />
                    <CardPlanPricingDark chip="Popular" title="Intermediary" price="27,99" />
                    <CardPlanPricing chip="Premium" title="Advanced" price="59,99" color="red-darken-4" />
                </div>
            </div>
        </div>
    </v-app>
</template>
