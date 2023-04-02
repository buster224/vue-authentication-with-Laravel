<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from "@/stores/auth"

const authStore =  useAuthStore()

onMounted(async () => {
  await authStore.getUser()
})
</script>

<template>
<div class="mx-auto max-w-full py-6 sm:px-6 lg:px-8 flex flex-grow">
  <div class="flex">
    <div class="m-auto" v-if="authStore.user">
      <h1
        class="
          font-bold 
          p-4 md:p-8
          text-transparent 
          text-xl md:text-8xl 
          bg-clip-text bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500 via-sky-500 to-emerald-400
        ">
        Welcome {{ authStore.user.name }}</h1>
    </div>
    <div class="m-auto" v-else>
      <h1
        class="
          font-bold 
          p-4 md:p-8
          text-transparent 
          text-xl md:text-8xl 
          bg-clip-text bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500 via-sky-500 to-emerald-400
        ">
          Go and <router-link :to="{name: 'login'}" class="underline underline-offset-12 decoration-4 decoration-teal-100">login</router-link>
        </h1>
    </div>
  </div>
</div>
</template>


