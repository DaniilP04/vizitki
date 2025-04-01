<template>
  <div :class="theme === 'light' ? 'bg-gradient-to-r from-gray-100 to-gray-200 text-black' : 'bg-gradient-to-t from-zinc-800 to-zinc-900 text-white' " class="min-h-screen transition-colors">

    <nav class=" fixed top-0 left-0 w-full z-50 shadow-md" :class="theme === 'light' ? 'bg-gradient-to-r from-gray-100 to-gray-200 ' : 'bg-zinc-900 ' ">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <p class="flex items-center space-x-3 rtl:space-x-reverse">
          <img :src="theme === 'light' ? '/img/logo_black.png' : '/img/logo_white.png'" class="h-8" alt="Student Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap">Визитка</span>
        </p>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

          <button @click="toggleTheme"
            class="font-medium rounded-lg text-sm px-4 py-2 text-center"
            :class="theme === 'light' ? 'bg-gray-100 border-2 border-zinc-800' : 'bg-zinc-800 border-2 border-gray-100' ">
            {{ theme === 'light' ? '☀️' : '☀️' }}
          </button>
  
          <button @click="toggleMenu"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
             <span class="sr-only">Open main menu</span>
           <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
           </svg>
        </button>
        </div>
        <div :class="isMenuOpen ? 'block' : 'hidden'"class="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul class="flex mr-10 flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 
             md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent 
             dark:bg-transparent dark:border-gray-700">
    <li>
      <NuxtLink to="/" class="block py-2 px-3 md:p-0 hover:text-cyan-700 dark:hover:text-cyan-300">Главная</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/alexandr" class="block py-2 px-3 md:p-0 hover:text-cyan-600 dark:hover:text-cyan-400">Александр</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/daniil" class="block py-2 px-3 md:p-0 hover:text-cyan-600 dark:hover:text-cyan-400">Даниил</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/timur" class="block py-2 px-3 md:p-0 hover:text-cyan-600 dark:hover:text-cyan-400">Тимур</NuxtLink>
    </li>
  </ul>
</div>

      </div>
    </nav>

 
    <main class="pt-20 p-5 flex min-h-screen transition-colors">
      <slot />
    </main>

 
    <footer class="shadow-sm">
      <div class="w-full  mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="https://ku.edu.kz/?lang=ru" target='_blank' class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="/img/logo1.png" class="h-8" alt="University Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap">Kozybaev University</span>
          </a>
          <div>
          <ul class="flex flex-wrap items-center text-sm font-medium">
            <li><a href="https://www.youtube.com/channel/UCfvyt7f6A-1znVNPvNVVEOg" target="_blank" class="hover:underline me-4 md:me-6">Youtube</a></li>
            <li><a href="https://www.instagram.com/kozybayevuniversity" target="_blank" class="hover:underline me-4 md:me-6">Instagram</a></li>
            <li><a href="https://tiktok.com/@kozybayevuniversity" target="_blank" class="hover:underline me-4 md:me-6">TikTok</a></li>
            <li><a href="https://t.me/s/kozybayevuniversity?" target="_blank" class="hover:underline">Telegram</a></li>
          </ul>
          </div>
        </div>
        <hr class="my-4 border-gray-300 sm:mx-auto dark:border-gray-600 lg:my-4" />
        <span class="block text-sm sm:text-center">© 2025 Все права защищены.</span>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const theme = ref<'light' | 'dark'>('light');


const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  document.documentElement.classList.toggle('dark', theme.value === 'dark');
  localStorage.setItem('theme', theme.value);
};


onMounted(() => {
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
  if (savedTheme) {
    theme.value = savedTheme;
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }
});

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};  

</script>
