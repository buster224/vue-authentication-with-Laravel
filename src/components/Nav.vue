<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore()

const navigation = [
    { name: 'home', menu: 'Accueil' },
]
</script>

<template>
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <p class="
                  font-bold 
                  p-4 md:p-8
                  text-teal-300
                  text-xl
                ">
                Dev.</p>
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                    <router-link v-for="item in navigation" :key="item.name" :to="{name: item.name}"  :class="[router-link-exact-active ? 'bg-gray-900 text-white' : 'text-gray-200 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']">{{ item.menu }}</router-link>
                </div>
              </div>
            </div>
            <template v-if="!authStore.user">
              <router-link :to="{name: 'login'}"  class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Connexion</router-link>
            </template>
            <template v-else>
              <button @click="authStore.handleLogout"  class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Déconnexion</button>
            </template>
            <div class="-mr-2 flex md:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="sr-only">Open main menu</span>
                <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
          </div>
        </div>
  
        <DisclosurePanel class="md:hidden">
          <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <DisclosureButton><router-link v-for="item in navigation" :key="item.name" :to="{name: item.name}"  :class="[router-link-exact-active ?'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']">{{ item.menu }}</router-link></DisclosureButton>
        </div>
        <template v-if="!authStore.user">
          <router-link :to="{name: 'login'}"  class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Connexion</router-link>
        </template>
        <template v-else>
          <button @click="authStore.handleLogout"  class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Déconnexion</button>
        </template>
        </DisclosurePanel>
    </Disclosure>
</template>
  
