<template>
    <div class="w-screen flex flex-row h-screen overflow-auto static box-border">
        <div class="flex flex-col w-4/6 pt-10 px-20">
            <slot />
        </div>
        <div class="w-2/6 bg-blue h-full flex flex-col justify-center pl-20 gap-10">
            <div class="text-white text-[2rem]">Manage and access patient seamlessly anywhere</div>
            <img src="~/assets/img/bg_auth.png" class="h-[37rem]"/>
        </div>
    </div>
</template>