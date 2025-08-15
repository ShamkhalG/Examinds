<template>
  <!-- PersonalData component -->
  <div class="flex flex-col">
    <!-- Label -->
    <p class="text-white text-[0.9rem] font-interBold mb-1"> {{ $props.label }} </p>

    <!-- Value -->
    <p class="text-[#D9D9D9] bg-[#222222] rounded-md mb-4 py-1 pl-1"> {{ $props.value }} </p>
  </div>
</template>

<script>
export default {
  name: 'PersonalData',
  props: ['label', 'value'],
}
</script>