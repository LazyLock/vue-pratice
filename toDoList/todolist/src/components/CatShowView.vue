<template>
  <div>
    <div v-if="whichCat == 'cat1'">
      <img
        src="../../public/cat-g48e877ff2_1920.jpg"
        width="400px"
        height="300px"
      />
    </div>
    <div v-else-if="whichCat == 'cat2'">
      <img
        src="../../public/cat-g112b20ecf_1920.jpg"
        width="400px"
        height="300px"
      />
    </div>
    <div v-else-if="whichCat == 'cat3'">
      <img
        src="../../public/cat-ge508fe22e_1920.jpg"
        width="400px"
        height="300px"
      />
    </div>
    <div v-else>
      <img
        src="../../public/cat-gfe6b1406f_1920.jpg"
        width="400px"
        height="300px"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: ["whichCat"],
};
</script>
