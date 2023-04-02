<script setup>
import Nav from '@/components/Nav.vue';
</script>

<template>
    <main class="flex flex-col h-screen w-full">
        <Nav />

        <!-- <header class="bg-white shadow">
            <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">Frontend</h1>
            </div>
        </header> -->

        <RouterView />
    </main>
</template>
