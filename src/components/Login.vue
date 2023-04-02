<script setup>
import { ref } from 'vue'
import { useAuthStore } from "@/stores/auth"
import { LockClosedIcon } from '@heroicons/vue/20/solid'

const authStore = useAuthStore()
const form = ref({
    email: '',
    password: ''
})
</script>

<template>
  <div class="w-full mt-4 md:mt-8 xl:mt-12">
      <div class="w-11/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto space-y-8 shadow-lg sm:rounded-lg px-4 py-5 sm:px-6 lg:px-8 items-center justify-center">
       
        <div>
          <h1 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Connectez-vous</h1>
          <p class="mt-2 text-center text-sm text-gray-600">
            Vous n'avez pas encore de compte? 
            {{ ' ' }}
            <router-link :to="{name: 'register'}" class="font-medium text-teal-500 hover:text-teal-400">Inscrivez-vous</router-link>
          </p>
        </div>
        <form @submit.prevent="authStore.handleLogin(form)" class="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
              <div class="col-span-6">
                  <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                  <div class="mt-2">
                      <input type="email" name="email" id="email" autocomplete="email" required="" v-model="form.email"
                        class="
                          block 
                          w-full 
                          rounded-md 
                          border-0 
                          p-1.5 
                          text-gray-900 
                          shadow-sm 
                          ring-1
                          ring-inset 
                          ring-gray-300 
                          placeholder:text-gray-400 
                          focus:ring-1 
                          focus:ring-inset 
                          focus:ring-teal-400 
                          sm:text-sm 
                          sm:leading-6
                        ">
                  </div>
                  <div v-if="authStore.errors.email" class="flex">
                      <span class="text-red-400 text-sm m-2 p-2">{{
                          authStore.errors.email[0]
                      }}</span>
                  </div>
              </div>
              <div class="col-span-6">
                  <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
                  <div class="mt-2">
                      <input type="password" name="password" id="password"  autocomplete="password"  required="" v-model="form.password"
                        class="
                          block 
                          w-full 
                          rounded-md 
                          border-0 
                          p-1.5 
                          text-gray-900 
                          shadow-sm 
                          ring-1 
                          ring-inset 
                          ring-gray-300 
                          placeholder:text-gray-400 
                          focus:ring-2 
                          focus:ring-inset 
                          focus:ring-indigo-600 
                          sm:text-sm 
                          sm:leading-6
                        ">
                  </div>
                  <div v-if="authStore.errors.password" class="flex">
                      <span class="text-red-400 text-sm m-2 p-2">{{
                          authStore.errors.password[0]
                      }}</span>
                  </div>
              </div>
          </div>
  
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">Se souvenir de moi</label>
            </div>
  
            <div class="text-sm">
              <router-link :to="{name: 'forgotPassword'}" class="font-medium text-teal-500 hover:text-teal-400">Mot de passe oublié ?</router-link>
            </div>
          </div>
  
          <div>
            <button type="submit" 
              class="
                group 
                relative 
                flex 
                w-full 
                justify-center 
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
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon class="h-5 w-5 text-teal-200 group-hover:text-teal-100" aria-hidden="true" />
              </span>
              Connexion
            </button>
          </div>
        </form>
      </div>
    </div>
</template>