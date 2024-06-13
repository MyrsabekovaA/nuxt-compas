<template>
    <div class="main_block">
      <section class="left_content">
        <h1 class="bold">
          Проверьте штрафы и <br>
          зарегестрируйтесь в 1 клик
        </h1>

        <form @submit.prevent="validateAndSubmit">
          <div class="form_section">
            <div>
            <label for="autonumber" class="regular">Номер автомобиля</label><br>
            <input
              type="text"
              id="autonumber"
              name="autonumber"
              class="autonumber"
              v-model="autonumber"
              :class="{ invalid: !formValid && !autonumber }"
            >
            </div>

            <div>
              <div>
                <label for="region" class="regular">Регион</label><br>
                <input
                  type="text"
                  id="region"
                  name="region"
                  class="region"
                  v-model="region"
                  :class="{ invalid: !formValid && !region }"
                >
              </div>
            </div>
          </div>

          <div class="form_section full_width">
            <div>
            <label for="registration" class="regular">Свидетельство о регистрации ТС</label><br>
            <input
              type="text"
              id="registration"
              name="registration"
              class="registration"
              v-model="registration"
              :class="{ invalid: !formValid && !registration }"
            >
            </div>
          </div>

          <div class="button_group">
            <button @click="validateAndSubmit" class="check regular">
              Проверить штрафы
              <img src="@/assets/arrow.svg" alt="arrow">
            </button>
            <button type="button" @click="openModal" class="about_video regular">
              <img src="/public/YOUTUBE.svg" alt="youtube">
              <span class="regular text">О сервисе</span>
              <span class="regular amount">(1 мин. 20 сек)</span>
            </button>
          </div>
        </form>

        <p class="agreement regular">
          Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и принимаете оферту
        </p>

        <p v-if="successMessage" class="success_message">{{ successMessage }}</p>
        <p v-if="errorMessage" class="error_message">{{ errorMessage }}</p>
      </section>
      <aside class="right_content">
        <img alt="home banner" class="home_banner" src={homebanner}/>
      </aside>
    </div>

    <section class="advantages">
      <h2 class="bold">
        Плюсы использования сервиса «Компас» для анализа штрафов
      </h2>
      <GridComponent/>
    </section>

    <section class="documents">
      <h2 class="bold">
        Документы
      </h2>

      <SliderComponent/>
    </section>

    <ModalComponent :isOpen="isModalOpen" :videoUrl="videoUrl" @close="closeModal" />
</template>

<script setup>
import {ref} from 'vue';
import GridComponent from '@/components/homepage/GridComponent.vue'
import SliderComponent from '@/components/homepage/SliderComponent.vue'
import ModalComponent from '@/components/homepage/ModalComponent.vue'
import homebanner from 'public/home_banner.png'

const autonumber = ref('');
const region = ref('');
const registration = ref('');
const formValid = ref(true);
const successMessage = ref('');
const errorMessage = ref('');
const isModalOpen = ref(false);
const videoUrl = ref('https://www.youtube.com/watch?v=vZNTZHuy0gk');

const validateAndSubmit = () => {
  if (autonumber.value && region.value && registration.value) {
    formValid.value = true;
    successMessage.value = 'Данные отправлены!';
    errorMessage.value = '';
    setTimeout(() => {
      successMessage.value = '';
    }, 3000);
  } else {
    formValid.value = false;
    successMessage.value = '';
    errorMessage.value = 'Заполните все поля';
  }
};

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<style scoped>
.main_block{
  max-width: 1200px;
  margin: 79px auto 0 auto;
  display: flex;
  justify-content: space-between;
}

.left_content{
  margin-left: 14px;
}

.right_content{
  margin-right: 50px;
}

.main_block h1{
  font-size: 41px;
  line-height: 49px;
}

.form_section{
  display: flex;
  flex-direction: row;
  font-size: 12px;
  gap: 30px;
  margin-top: 22px;
}

.full_width {
  flex-direction: column;
  width: 100%;
  margin-top: 14px;
}

label{
  margin-bottom: 5px;
  line-height: 14px;
  font-size: 12px;
}

input{
  border: 1px solid #BCBCBC;
  height: 40px;
  border-radius: 6px;
  margin-top: 2px;
  padding: 0 10px;
  transition: border 0.3s, box-shadow 0.3s;
}
input:focus{
  border: 1px solid #0584FE;
  box-shadow: 0 0 10px rgba(5, 132, 254, 0.5);
  outline: none;
}

input.invalid {
  border: 1px solid red;
}

.success_message {
  color: green;
  font-size: 16px;
  margin-top: 10px;
  position: absolute;
  top: 0px;
  right: 10px;
  background: #e0ffe0;
  padding: 20px;
  border-radius: 5px;
}

.error_message {
  color: red;
  font-size: 16px;
  margin-top: 0px;
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ffe0e0;
  padding: 20px;
  border-radius: 5px;
}

.autonumber{
  width: 320px;
}

.region{
  width: 213px;
}

.registration{
  width: 563px;
}

.button_group{
  margin-top: 15px;
  display: flex;
  gap: 21px;
}

.check{
  width: 210px;
  height: 45px;
  background: #0584FE;
  border:none;
  border-radius: 7px;
  color: white;
  display: flex;
  font-size: 18px;
  padding: 11px 0 11px 20px;
  cursor: pointer;
}
.check:hover{
  background: #1C2734;
}

.check img{
  margin: 6px auto 14px 4px;
}

.about_video{
  border: 1px solid #0584FE;
  background: transparent;
  width: 258px;
  height: 45px;
  border-radius: 7px;
  display: flex;
  padding: 10px;
}

.about_video:hover, .about_video:hover .amount{
  background: #1C2734;
  color: white;
  border: none;
}

.about_video img{
  margin: 0px 0 0 8px;
}

.about_video .text{
  margin: 0px 0 14px 6px;
  font-size: 18px;
}

.about_video .amount{
  color: #1253A2;
  font-size: 15px;
  margin: 2px 0 12px 5px;
}

.agreement{
  margin-top: 17px;
  font-size: 13px;
  color: #8F8F8F;
  line-height: 16px;
}

.advantages{
  max-width: 1200px;
  margin: 97px auto 0 auto;
}

.advantages h2{
  font-size: 34px;
  margin: 0 19px 29px 107px;
}

.documents{
  max-width: 1200px;
  margin: 80px auto 200px auto;
}

.documents h2{
  margin: 0 30px 18px 535px;
  font-size: 34px;
}

@media (max-width: 1200px) {
  .main_block {
    max-width: 900px;
    margin: 40px auto;
    padding: 0 15px;
    gap: 15px;
  }

  .left_content {
    margin-left: 0;
  }

  .right_content {
    display: flex;
    justify-content: center;
    margin: 50px 0;
  }

  .right_content img{
    margin-top: 60px;
    width: 430px;
    height: 290px;
  }

  .main_block h1 {
    font-size: 31px;
    line-height: 42px;
  }

  .form_section {
    flex-direction: column;
    gap: 10px;
  }

  .autonumber, .region, .registration {
    width: 100%;
  }

  .button_group {
    gap: 10px;
  }

  .check{
    width: 60%;
    padding: 10px;
    align-items: center;
    font-size: 16px;
  }
  .about_video {
    width: 80%;
    align-items: center;
    font-size: 16px;
  }
  .check img{
    margin: 0 3px;
  }
  .about_video{
    padding: 5px;
    gap: 5px;
  }

  .about_video .text, .about_video .amount{
    font-size: 13px;
  }

  .about_video img{
    margin: 5px;
  }

  .about_video .text {
    margin: 8px 0 8px 3px;
  }

  .about_video .amount{
    margin: 8px 0 8px 2px;
  }
  .advantages, .documents {
    max-width: 900px;
    margin: 40px auto;

  }
  .advantages h2, .documents h2 {
    font-size: 28px;
    margin: 0 0 20px 0;
    justify-content: center;
    display: flex;
  }
}

@media (max-width: 1024px) {
  .main_block {
    max-width: 800px;
    margin: 40px auto;
    padding: 0 15px;
    gap: 15px;
  }

  .right_content img{
    margin-top: 60px;
    width: 370px;
    height: 250px;
  }
  .check{
    font-size: 14px;
  }
  .about_video .text, .about_video .amount{
    font-size: 13px;
    margin: 8px 0;
  }
  .advantages{
    max-width: 800px;
  }
  .documents{
    max-width: 695px;

  }
}

@media (max-width: 795px) {
  .main_block {
    flex-direction: column;
    align-items: center;
    max-width: 640px;
    margin-top: 60px;
  }

  .left_content, .right_content {
    margin: 0;
    padding: 0 15px;
    width: 100%;
  }

  .right_content{
    margin-top: 20px;
  }
  .right_content img{
    margin:0;
    width: 395px;
    height: 250px;
  }

  .main_block h1 {
    font-size: 28px;
    line-height: 35px;
    text-align: center;
  }

  .form_section {
    flex-direction: column;
    gap: 10px;
  }

  .button_group {
    gap: 10px;
    align-items: center;
  }

  .check {
    text-align: center;
    justify-content: center;
    width: 80%;
  }

  .check{
    padding: 10px 0;
    align-items: center;
    gap: 5px;
  }
  .about_video{
    align-items: center;
    gap: 10px;
    justify-content: center;
    font-size: 13px;
    width: 80%;
    margin: 0;
    padding: 5px 0;
  }
  .about_video img{
    width: 30px;
    height: 30px;

  }
  .agreement {
    margin-top: 20px;
  }

  .advantages, .documents {
    max-width: 625px;
    margin: 40px auto;
    padding: 0 15px;
    width: 100%;
  }

  .advantages h2, .documents h2 {
    font-size: 21px;
    text-align: center;
    margin: 0 0 20px 0;
  }
}
@media (max-width: 460px){
  .main_block {
    max-width: 380px;
  }
  .button_group{
    display: block;
  }
  .check, .about_video{
    width: 100%;
  }
  .check{
    margin-bottom: 10px;
  }
  .about_video{
    justify-content: center;
  }
  .about_video img{
    margin: 0 5px;
  }
  .right_content img{
    width: 320px;
    height: 225px;
  }
  .advantages, .documents{
    max-width: 380px;
  }
}
</style>