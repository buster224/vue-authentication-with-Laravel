<script setup>
import { ref } from "vue"
import { useAuthStore } from "../stores/auth"

const authStore = useAuthStore()
const email = ref('')
</script>

<template>
  <div class="w-full mt-4 md:mt-8 xl:mt-12">
      <div class="w-11/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto space-y-8 shadow-lg sm:rounded-lg px-4 py-5 sm:px-6 lg:px-8 items-center justify-center">
       
        <div>
          <h1 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Mot de passe oublié ?</h1>
        </div>
          <form @submit.prevent="authStore.handleForgotPassword(email)">
            <div v-if="authStore.status"
              class="m-2 p-2 text-green-900 font-semibold bg-green-300 rounded-md"
            >
              {{ authStore.status }}
            </div>
            <div class="my-6">
              <label
                for="email"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >Votre email</label
              >
              <input type="email" id="email" v-model="email"
                class="
                  block
                  w-full
                  rounded-lg
                  border border-gray-300
                  bg-gray-50
                  p-2.5
                  text-sm text-gray-900
                  focus:border-blue-500 focus:ring-blue-500
                  dark:border-gray-600
                  dark:bg-gray-700
                  dark:text-white
                  dark:placeholder-gray-400
                  dark:focus:border-blue-500
                  dark:focus:ring-blue-500
                "
                placeholder="email@test.com">
              <div v-if="authStore.errors.email" class="flex">
                <span class="text-red-400 text-sm m-2 p-2">{{
                  authStore.errors.email[0]
                }}</span>
              </div>
            </div>
            <button
              class="
                w-full
                rounded-full 
                bg-teal-500
                border-2
                border-teal-400 
                px-3 py-2 
                text-md 
                text-white 
                tracking-wider
                hover:bg-teal-400 
                hover:border-teal-200
                focus-visible:outline 
                focus-visible:outline-2 
                focus-visible:outline-offset-2 
                focus-visible:outline-indigo-600
              "
            >
              Envoyer
            </button>
          </form>
      </div>
  </div>
          
</template>