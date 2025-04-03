<template>
    <div class="pt-20 pb-10 min-h-screen flex flex-col justify-center items-center overflow-hidden">
        <Head>
            <title>Студенты СКУ</title>
        </Head>
        <div class="flex flex-wrap justify-center items-center gap-10 px-8">
            <div class="flex flex-col md:text-left text-center w-full md:w-1/2 mt-5">
                <h1 class="font-bold pb-6 text-4xl">Мы - студенты Kozybaev University</h1>
                <p class="max-w-md md:mx-0 mx-auto text-lg ">Мы студенты второго курса специальности информационные системы в управлении. Мы учимся на английском языке, так что можем гарантировать уровень английского языка минимум B2. Подробнее про наши навыки, которые могут быть вам полезны можно узнать на наших личных страницах </p>
            <div class="flex flex-column justify-center md:hidden mt-5 mb-5">
            <button type="button" class="text-cyan-700 hover:text-white border-2 border-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-cyan-500 dark:text-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 dark:focus:ring-cyan-800 scale-120 ease active:scale-95"><NuxtLink to="/alexandr" class="">Александр</NuxtLink></button>
                        <button type="button" class="text-cyan-700 hover:text-white border-2 border-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-cyan-500 dark:text-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 dark:focus:ring-cyan-800 scale-120 ease active:scale-95"><NuxtLink to="/timur" class="">Тимур</NuxtLink></button>
            <button type="button" class="text-cyan-700 hover:text-white border-2 border-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-cyan-500 dark:text-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 dark:focus:ring-cyan-800 scale-120 ease active:scale-95"><NuxtLink to="/daniil" class="">Даниил</NuxtLink></button>
            </div>
            </div>
            <div class="w-full md:w-1/3 order-1 md:order-none mb-10">
                <img src="/img/dev.png" alt="Awesome picture" class="w-full object-cover h-auto scale-125">
            </div>
        </div>
    </div>
</template>

