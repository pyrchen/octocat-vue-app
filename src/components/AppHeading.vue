<template>
  <h1 class="text-start">{{ appTitle }}</h1>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppHeading',
  props: {
    appTitle: String,
  },
});
</script>

<style scoped>
  h1 {
    margin-bottom: 20px;
    text-transform: capitalize;
  }
</style>