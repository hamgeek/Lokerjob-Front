<template>
    <div class="w-full app-wrapper">
        <DefaultTheHeader />
    </div>
    <main class="w-full">
        <div class="main-wrap mt-16 mx-auto max-w-[900px] w-full flex flex-row">
            <slot />
            <DefaultTheSidebar />
        </div>
    </main>

</template>