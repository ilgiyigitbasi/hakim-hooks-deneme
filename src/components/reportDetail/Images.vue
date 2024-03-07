<template>
  <div class="column-gap-24px-div">
    <img class="selected-report-images" :src="selectedImageSrc" />
    <div class="row-gap-24px-div report-images-div">
      <div
        v-for="(image, index) in imageData"
        :key="index"
        @click="selectImage(index)"
      >
        <img class="report-images" :src="image.src" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedImageIndex: null, // Başlangıçta hiçbir resim seçili değil
    };
  },
  computed: {
    selectedImageSrc() {
      // Eğer hiçbir resim seçilmediyse veya seçili resim dizinin dışındaysa, ilk resmin src'sini döndür
      return this.selectedImageIndex !== null &&
        this.imageData[this.selectedImageIndex]
        ? this.imageData[this.selectedImageIndex].src
        : this.imageData[0].src;
    },
  },
  methods: {
    selectImage(index) {
      this.selectedImageIndex = index; // Tıklanan resmi seçili olarak belirle
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/styles.css";

.selected-report-images {
  width: 100%;
  height: 360px;
  border-radius: 6px;
  object-fit: cover;
  object-position: center;
}

.report-images {
  cursor: pointer; /* Farenin üzerine geldiğinde tıklanabilir olduğunu göstermek için */
}
</style>
