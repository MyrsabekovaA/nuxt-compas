<script>
export default {
  name: 'ModalComponent',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    videoUrl: {
      type: String,
      required: true
    }
  },
  computed: {
    embedUrl() {
      return this.videoUrl.replace('watch?v=', 'embed/');
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
}
</script>

<template>
  <div v-if="isOpen" class="modal-overlay">
    <div class="modal-content">
      <button @click="closeModal" class="close-button">X</button>
      <iframe
        :src="embedUrl"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="video-frame"
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.79);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: transparent;
  padding: 30px;
  border-radius: 8px;
  position: relative;
  width: 960px;
  height: 550px;
  max-width: 100%;
}

.close-button {
  color: white;
  position: absolute;
  top: 0px;
  right: 30px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

iframe{
  width: 100%;
  height: 100%;
}

@media (max-width: 1024px) {
  .modal-content{
    width: 780px;
    height: 500px;
  }
}
@media (max-width: 768px) {
  .modal-content{
    width: 680px;
    height: 510px;
    padding: 20px;
  }
}
@media (max-width: 425px) {
  .modal-content{
    width: 380px;
    height: 290px;
  }
}
</style>