<script setup>
import MainSearch from './MainSearch.vue'
import MainSearch from './MainCards.vue'
</script>

<template>
    <div class="wrapper">
    <MainSearch />
    <MainCards />
    </div>
</template>

<style scoped lang="postcss">
.wrapper {
    @apply container mx-auto flex flex-col gap-4 py-4;
}



</style>