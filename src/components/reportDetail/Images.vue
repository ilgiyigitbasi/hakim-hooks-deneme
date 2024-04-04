<template>
  <div class="column-gap-24px-div">
    <img
      class="selected-report-images"
      :src="selectedImageSrc"
      @click="showPopup"
    />

    <div v-if="popupVisible" class="image-popup" @click="closePopup">
      <div class="popup-content">
        <img class="popup-image" :src="selectedImageSrc" />
      </div>
    </div>

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
      selectedImageIndex: 0,
      selectedImageWidth: 0,
      popupVisible: false,
    };
  },
  computed: {
    selectedImageSrc() {
      return this.selectedImageIndex !== null &&
        this.imageData[this.selectedImageIndex]
        ? `data:image/png;base64, ${this.imageData[this.selectedImageIndex]}`
        : "";
    },
    previousImageSrc() {
      const previousIndex =
        this.selectedImageIndex > 0
          ? this.selectedImageIndex - 1
          : this.imageData.length - 1;
      return `data:image/png;base64, ${this.imageData[previousIndex]}`;
    },
    nextImageSrc() {
      const nextIndex =
        this.selectedImageIndex < this.imageData.length - 1
          ? this.selectedImageIndex + 1
          : 0;
      return `data:image/png;base64, ${this.imageData[nextIndex]}`;
    },
  },
  methods: {
    selectImage(index) {
      this.selectedImageIndex = index;
    },
    showPopup() {
      this.popupVisible = true;
    },
    closePopup() {
      this.popupVisible = false;
    },
    calculateWidth() {
      const selectedReportImages = document.querySelector(
        ".selected-report-images"
      );
      if (selectedReportImages) {
        this.selectedImageWidth = selectedReportImages.offsetWidth;
      }
    },
  },
  mounted() {
    this.calculateWidth();
    window.addEventListener("resize", this.calculateWidth);
  },
  destroyed() {
    window.removeEventListener("resize", this.calculateWidth);
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

.image-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  position: relative;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
}

.popup-image {
  max-width: 100%;
  max-height: 100%;
  border-radius: 6px;
  object-fit: contain;
}
</style>
