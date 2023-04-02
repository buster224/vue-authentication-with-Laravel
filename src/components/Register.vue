<script setup>
import { ref } from "vue"
import { useAuthStore } from "../stores/auth"

const authStore = useAuthStore()
const form = ref({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
})
</script>

<template>
    <div class="w-full mt-4 md:mt-8 xl:mt-12">
      <div class="w-11/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto space-y-8 shadow-lg sm:rounded-lg px-4 py-5 sm:px-6 lg:px-8 items-center justify-center">
       
        <div>
          <h1 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Inscrivez-vous</h1>
        </div>

        <form @submit.prevent="authStore.handleRegister(form)">
            <div class="mt-2 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                <div class="col-span-6">
                    <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Nom</label>
                    <div class="mt-2">
                        <input type="text" name="name" id="name" autocomplete="name" v-model="form.name"
                        class="
                          block 
                          w-full 
                          rounded-md 
                          border-0 
                          py-1.5 
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
                    <div v-if="authStore.errors.name" class="flex">
                        <span class="text-red-400 text-sm m-2 p-2">{{
                            authStore.errors.name[0]
                        }}</span>
                    </div>
                </div>

                <div class="col-span-6">
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                    <div class="mt-2">
                        <input id="email" name="email" type="email" autocomplete="email" v-model="form.email"
                        class="
                          block 
                          w-full 
                          rounded-md 
                          border-0 
                          py-1.5 
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
                    <div v-if="authStore.errors.email" class="flex">
                        <span class="text-red-400 text-sm m-2 p-2">{{
                            authStore.errors.email[0]
                        }}</span>
                    </div>
                </div>

                <div class="col-span-6">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
                    <div class="mt-2">
                        <input id="password" name="password" type="password" v-model="form.password"
                        class="
                          block 
                          w-full 
                          rounded-md 
                          border-0 
                          py-1.5 
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

                <div class="col-span-6">
                <label for="password_confirmation" class="block text-sm font-medium leading-6 text-gray-900">Confirmer votre mot de passe</label>
                <div class="mt-2">
                    <input id="password_confirmation" name="password_confirmation" type="password" v-model="form.password_confirmation"
                    class="
                          block 
                          w-full 
                          rounded-md 
                          border-0 
                          py-1.5 
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
                </div> 
            </div>

            <div class="mt-6 flex items-center justify-start gap-x-6">
                <!-- <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Annuler</button> -->
                <button type="submit" 
                    class="
                        w-full
                        rounded-full 
                        border-2
                        border-teal-400 
                        bg-teal-500
                        px-6 py-2 
                        text-md
                        text-white 
                        tracking-wider
                        shadow-sm 
                        hover:border-teal-200 
                        hover:bg-teal-400 
                        focus-visible:outline 
                        focus-visible:outline-2 
                        focus-visible:outline-offset-2 
                        focus-visible:outline-teal-600
                    ">
                    M'inscrire</button>
            </div>
        </form>
      </div>
    </div>
</template>