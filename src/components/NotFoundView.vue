<template>
  <div class="bg-[#222222] h-[calc(100vh-64px)] flex flex-col lg:flex-row lg:justify-center items-center">
    <img src="@/assets/images/login/login_bulb.png" 
      class="w-[300px] lg:w-[600px] lg:ml-[-12rem] mb-[-2rem]" />
    <div class="flex flex-col items-center">
      <p class="text-white text-[2.8rem] lg:text-[4rem] font-geologicaBold">Ошибка 404</p>
      <p class="text-white text-[1.4rem] lg:text-[2rem] font-geologicaMedium">Страница не найдена</p>\
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView'
}
</script>