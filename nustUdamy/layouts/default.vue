<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header,
  }
}
</script>

<style>
  html, body {
    margin: 0;
  }
</style>
