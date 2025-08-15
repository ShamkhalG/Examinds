<template>
  <!-- ExamItem component -->
  <div>
    <RouterLink :to="'/exam/' + $props.examProps.link" class="text-white">
      Разбор
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: 'ExamItem',
  props: ['examProps'],
}
</script>