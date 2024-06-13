<script>
import TheSlider from '@/components/homepage/TheSlider.vue'
import SliderContent from '@/components/homepage/SliderContent.vue'

export default {
  name: 'SliderComponent',
  components: { SliderContent, TheSlider },
  data() {
    return {
      slides: [
        { title: 'Лицензионный договор', description: 'Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке.', buttonText: 'Перейти' },
        { title: 'Политика обработки персональных данных', description: 'Радиус разброса ПГМ составляет до 3 метров и может регулироваться.', buttonText: 'Перейти' },
        { title: 'Информация об оплате', description: 'Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.', buttonText: 'Перейти' },
        { title: 'Информация об оплате', description: 'Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.', buttonText: 'Перейти' },
        { title: 'Лицензионный договор', description: 'Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке.', buttonText: 'Перейти' },
        { title: 'Политика обработки персональных данных', description: 'Радиус разброса ПГМ составляет до 3 метров и может регулироваться.', buttonText: 'Перейти' }
      ]
    };
  }
}
</script>

<template>
  <section class="slider-block" aria-label="Slider Section">
    <TheSlider :slides="slides" :slidesToShow="3">
      <template v-slot:default="{ slide }">
        <SliderContent :slide="slide" />
      </template>
    </TheSlider>
  </section>
</template>

<style scoped>
.slider-block{
  margin: 0 34px 0 18px;
}

@media (max-width: 1200px) {
  .slider-block {
    padding: 0 15px;
    margin: 0 80px 0 70px;
  }
}

@media (max-width: 1024px) {
  .slider-block{
    margin: 0;
    padding: 10px;
  }
}

@media (max-width: 768px) {
  .slider-block{
    margin: 0;
    padding: 0 12px;
  }
}
@media (max-width: 640px) {
  .slider-block{
    max-width: 315px;
    margin: 0 auto;
  }
}
</style>