<script setup>
import { useAuthStore } from "../stores/auth"
import { ref } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const authStore = useAuthStore()
const form = ref({
  password: '',
  password_confirmation: '',
  email: route.query.email,
  token: route.params.token,
})
</script>
<template>
  <div class="w-full mt-4 md:mt-8 xl:mt-12">
      <div class="w-11/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto space-y-8 shadow-lg sm:rounded-lg px-4 py-5 sm:px-6 lg:px-8 items-center justify-center">
       
        <div>
          <h1 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Réinitialisez votre mot de passe</h1>
        </div>
          <form @submit.prevent="authStore.handleResetPassword(form)">
            <div v-if="authStore.status"
              class="m-2 p-2 text-green-900 font-semibold bg-green-300 rounded-md"
            >
              {{ authStore.status }}
            </div>
            <div class="mb-6">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Nouveau mot de passe</label
              >
              <input type="password" id="password" v-model="form.password"
                class="
                  shadow-sm
                  bg-gray-50
                  border border-gray-300
                  text-gray-900 text-sm
                  rounded-lg
                  focus:ring-blue-500 focus:border-blue-500
                  block
                  w-full
                  p-2.5
                  dark:bg-gray-700
                  dark:border-gray-600
                  dark:placeholder-gray-400
                  dark:text-white
                  dark:focus:ring-blue-500
                  dark:focus:border-blue-500
                  dark:shadow-sm-light
                ">
              <div v-if="authStore.errors.password" class="flex">
                <span class="text-red-400 text-sm m-2 p-2">{{
                  authStore.errors.password[0]
                }}</span>
              </div>
            </div>
            <div class="mb-6">
              <label
                for="repeat-password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Confirmer votre mot de pass</label
              >
              <input type="password" id="repeat-password" v-model="form.password_confirmation"
                class="
                  shadow-sm
                  bg-gray-50
                  border border-gray-300
                  text-gray-900 text-sm
                  rounded-lg
                  focus:ring-blue-500 focus:border-blue-500
                  block
                  w-full
                  p-2.5
                  dark:bg-gray-700
                  dark:border-gray-600
                  dark:placeholder-gray-400
                  dark:text-white
                  dark:focus:ring-blue-500
                  dark:focus:border-blue-500
                  dark:shadow-sm-light
                ">
            </div>
            <button type="submit"
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
              ">
              Réinitialiser
            </button>
          </form>
      </div>
  </div>
</template>