<template>
  <div class="container">
    <div class="chooseOne">
      <select name="cats" id="cats" v-model="whichCat" @change="alertWhich">
        <option v-for="(cat, idx) in cats" :key="idx" :value="cat">
          {{ cat }}
        </option>
      </select>
    </div>
    <div class="showCat">
      <CatShow :whichCat="whichCat" />
    </div>
  </div>
</template>

<script>
import CatShow from "./CatShowView.vue";

export default {
  data() {
    return {
      whichCat: "cat3",
      cats: ["cat1", "cat2", "cat3", "cat4"],
    };
  },
  components: {
    CatShow,
  },
  methods: {
    alertWhich() {
      console.log(this.whichCat);
    },
  },
};
</script>
