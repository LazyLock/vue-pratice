<template>
  <div>
    <Header />
    <router-view></router-view>
    
  </div>
</template>

<script>
import Header from './components/HeaderView.vue'


export default {
  name: 'App',

  components: {
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
