<script>
export default {
  name: 'SliderContent',
  props: {
    slide: {
      type: Object,
      required: true
    }
  },
}
</script>

<template>
  <div class="slide-content">
    <h3 class="bold">{{ slide.title }}</h3>
    <p class="regular">{{ slide.description }}</p>
    <button class="regular" aria-label="More Info">
      <RouterLink to="/agreement">{{ slide.buttonText }}</RouterLink></button>
  </div>
</template>

<style scoped>
.slide-content {
  border-radius: 7px;
  padding: 24px;
}

.slide-content h3 {
  margin: 0;
  font-size: 31px;
  color: #1253A2;
  line-height: 36px;
}

.slide-content:nth-of-type(2) p{
  margin-top: 12px;
}

.slide-content p {
  margin: 17px 0 15px;
  font-size: 18px;
  color: black;
  line-height: 22px;
}

.slide-content button{
  position: absolute;
  background-color: #0584FE;
  color: #fff;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  bottom: 24px;
  width: 290px;
  height: 45px;
  font-size: 18px;
}

.slide-content a{
  color: white;
}

.slide-content button:hover {
  background-color: #1C2734;
}

@media (max-width: 1200px)  {
  .slide-content h3 {
    font-size: 24px;
  }

  .slide-content p{
    font-size: 16px;
  }

  .slide-content button{
    width: 250px;
    height: 35px;
  }
}
@media (max-width: 795px) {
  .slide-content {
    padding: 15px;
  }
  .slide-content h3 {
    font-size: 21px;
  }
  .slide-content p{
    font-size: 14px;
  }
  .slide-content button{
    width: 220px;
    height: 35px;
  }
}

</style>