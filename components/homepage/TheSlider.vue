<script>
export default {
  name: 'TheSlider',
  props: {
    slides: {
      type: Array,
      required: true
    },
    slidesToShow: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      currentSlide: 0
    };
  },
  computed: {
    sliderStyle() {
      const slideWidth = 340;
      const gap = 35;
      const totalWidth = (slideWidth + gap) * this.slides.length - gap;
      const translateX = -(this.currentSlide * (slideWidth + gap));
      return {
        width: `${totalWidth}px`,
        transform: `translateX(${translateX}px)`
      };
    },
    numberOfDots() {
      return Math.ceil(this.slides.length / this.slidesToShow);
    }
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.slides.length - this.slidesToShow) {
        this.currentSlide += this.slidesToShow;
        if (this.currentSlide > this.slides.length - this.slidesToShow) {
          this.currentSlide = this.slides.length - this.slidesToShow;
        }
      } else {
        this.currentSlide = 0;
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide -= this.slidesToShow;
        if (this.currentSlide < 0) {
          this.currentSlide = 0;
        }
      } else {
        this.currentSlide = Math.max(this.slides.length - this.slidesToShow, 0);
      }
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
  }
}
</script>

<template>
  <section class="slider-container" aria-label="Document Slider">
    <button class="slider-button prev-button" @click="prevSlide" aria-label="Previous Slide">
      <img src="@/assets/button-left.svg" alt="Previous Slide">
    </button>
    <div class="slider-wrapper">
      <div class="slider" :style="sliderStyle">
        <article v-for="(slide, index) in slides" :key="index" class="slide" aria-label="Slide Content">
          <slot :slide="slide"></slot>
        </article>
      </div>
    </div>
    <button class="slider-button next-button" @click="nextSlide" aria-label="Next Slide">
      <img src="@/assets/button-right.svg" alt="Next Slide">
    </button>
    <div class="dots-container" aria-label="Slider Dots">
      <button
        v-for="(dot, index) in numberOfDots"
        :key="index"
        class="dot"
        :class="{ active: currentSlide === index * slidesToShow }"
        @click="goToSlide(index * slidesToShow)"
      ></button>
    </div>
  </section>
</template>

<style scoped>
.slider-container {
  position: relative;
  margin: 0 auto;
  overflow: hidden;
}

.slider-wrapper {
  overflow: hidden;
}

.slider {
  display: flex;
  transition: transform 0.3s ease;
  gap: 35px;
  margin-left: 31px;
  margin-top: 18px;
  margin-bottom: 12px;
}

.slide:nth-child(4){
  margin-left: 20px;
}

.slide {
  width: 340px;
  height: 450px;
  border: 1px solid #EEEFF1;
  background-color: white;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
}

.slider-button {
  z-index: 1;
  position: absolute;
  top: 44%;
  border: none;
  background: transparent;
  cursor: pointer;
}

.prev-button {
  left: 0;
}

.next-button {
  right: 0;
}

.dots-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 13px;
}

.dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  background-color: #D9D9D9;
  border-radius: 50%;
  margin: 0 2px;
  cursor: pointer;
  border: none;
}

.dot.active {
  width: 10px;
  height: 10px;
  background-color: #007AFF;
}

@media (max-width: 1200px) {
  .slider{
    gap: 70px;
  }
  .prev-button {
    left: 10px;
  }
  .slide{
    width: 300px;
    height: 400px;
  }
  button img{
    width: 35px;
    height: 75px;
  }
  .slider-button{
    top: 40%;
  }
}
@media (max-width: 768px) {
  .slider{
    gap: 45px;
  }
  button img{
    width: 30px;
    height: 70px;
  }
  .slide{
    width: 245px;
    height: 400px;
  }
  @media (max-width: 425px){
    .slide{
      width: 270px;
      height: 400px;
    }
    .next-button{
      right: 7px;
    }
  }
}
</style>