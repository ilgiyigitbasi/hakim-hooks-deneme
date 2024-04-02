<template>
  <div class="column-gap-24px-div">
    <img class="selected-report-images" :src="selectedImageSrc" />
    <div class="yeni">
      <div
        class="row-gap-24px-div report-images-div"
        :style="{ width: selectedImageWidth + 'px' }"
      >
        <div
          v-for="(image, index) in imageData"
          :key="index"
          @click="selectImage(index)"
        >
          <img class="report-images" :src="`data:image/png;base64, ${image}`" />
        </div>
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
      selectedImageIndex: null,
      selectedImageWidth: 0,
    };
  },
  computed: {
    selectedImageSrc() {
      return this.selectedImageIndex !== null &&
        this.imageData[this.selectedImageIndex]
        ? `data:image/png;base64, ${this.imageData[this.selectedImageIndex]}`
        : `data:image/png;base64, ${this.imageData[0]}`;
    },
  },
  methods: {
    selectImage(index) {
      this.selectedImageIndex = index;
    },
  },
  mounted() {
    this.imageData.forEach((image, index) => {
      console.log(`Image ${index + 1} data:`, image);
      console.log(`Image ${index + 1} base64 content:`, image.src);
    });
    const calculateWidth = () => {
      const selectedReportImages = document.querySelector(
        ".selected-report-images"
      );
      if (selectedReportImages) {
        const width = selectedReportImages.offsetWidth;
        if (selectedReportImages) {
          this.selectedImageWidth = selectedReportImages.offsetWidth;
        }
      }
    };

    calculateWidth();
    window.addEventListener("resize", calculateWidth);
  },
};
</script>

<style scoped>
@import "../../assets/css/styles.css";

.selected-report-images {
  max-width: 100%;
  border-radius: 6px;
  object-fit: cover;
  object-position: center;
  height: 360px;
}

.report-images {
  cursor: pointer;
  border-radius: 6px;
}

.report-images-div {
  padding-top: 24px;
}
@media (max-width: 1000px) {
  .selected-report-images {
    height: 260px;
  }
}
</style>
