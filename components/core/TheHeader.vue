<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>

<template>
  <section class="header_block">
    <div class="header_content">
      <div class="left_content">
        <NuxtLink to="/"><img alt="compas logo" class="logo" src="@/assets/logo.svg" width="119" height="26"/></NuxtLink>
        <nav class="navigation_links regular" aria-label="Primary Navigation">
          <NuxtLink to="/tariffs">Тарифы</NuxtLink>
          <NuxtLink to="/contacts">Контакты</NuxtLink>
        </nav>
        <button class="burger_menu" @click="toggleMenu" aria-label="Toggle menu">
          <span class="burger_line"></span>
          <span class="burger_line"></span>
          <span class="burger_line"></span>
        </button>
      </div>
      <div class="right_content">
        <p class="phone bold">+7 495 118-44-22</p>
        <button class="sign_in"><span class="regular">Вход</span></button>
        <button class="sign_up"><span class="regular">Регистрация</span></button>
      </div>
    </div>
    <nav :class="['navigation_links_mobile', { 'open': isMenuOpen }]" aria-label="Primary Navigation Mobile">
      <NuxtLink to="/tariffs">Тарифы</NuxtLink>
      <NuxtLink to="/contacts">Контакты</NuxtLink>
      <p class="phone bold">+7 495 118-44-22</p>
      <button class="sign_in"><span class="regular">Вход</span></button>
      <button class="sign_up"><span class="regular">Регистрация</span></button>
    </nav>
  </section>
</template>

<style scoped>
.header_block{
  height: 60px;
  background: linear-gradient(90deg, #000000 30%, #1C2734 73%);
}

.header_content{
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.left_content, .right_content{
  display: flex;
  gap: 30px;
}

.left_content{
  margin-left: 14px;
}

img{
  margin: 17px 0;
}

nav{
  display: flex;
  gap: 30px;
  margin: 16px 0 21px 0;
}

nav a{
  color: white;
  font-size: 18px;
}

nav a:hover {
  text-decoration: underline;
}

.right_content{
  margin-right: 25px;
}

.sign_up{
  width: 117px;
  height: 37px;
  margin: 12px 0 11px 0;
  background: #0584FE;
  border-radius: 7px;
  border: none;
  color: white;
}

.sign_up:hover {
  background: #1253A2;
}

.sign_up span{
  padding: 9px 18px;
  font-size: 15px;
}

.sign_in{
  background: transparent;
  border: none;
  margin: 19px 0 18px 0;
}

.sign_in:hover{
  border: none;
  color: white;
}

.sign_in span{
  color: white;
  font-size: 18px;
}

.sign_in:hover span{
  text-decoration: underline;
}

p{
  margin: 16px 1px 21px 0;
  color: white;
  font-size: 18px;
}

.burger_menu{
  display: none;
}

.navigation_links_mobile{
  display: none;
}

@media (max-width: 1440px) {
  .header_content {
    padding: 0 20px;
  }
  .navigation_links a {
    font-size: 16px;
  }
  .phone {
    font-size: 16px;
  }
}

@media (max-width: 1200px) {
  .header_content {
    max-width: 900px;
    padding: 0 15px;
  }
  .right_content{
    display: block;
  }
  .navigation_links {
    gap: 20px;
  }
  .sign_up, .sign_in {
    font-size: 14px;
  }
  .sign_up span, .sign_in span {
    font-size: 14px;
  }
  .right_content{
    display: flex;
  }
}

@media (max-width: 768px) {
  .header_content {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 10px;
    max-width: 700px;
    height: 60px;
  }
  .left_content, .right_content {
    height: 60px;
    margin: 0;
    width: 100%;
    justify-content: space-between;
  }
  .right_content{
    display: none;
  }
  .burger_menu {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
  }
  .burger_line {
    display: block;
    width: 20px;
    height: 2px;
    background: white;
    margin: 3px 0;
    transition: all 0.3s;
  }
  nav{
    margin: 0;
  }
  .navigation_links {
    display: none;
  }
  .navigation_links_mobile {
    display: none;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    background: linear-gradient(90deg, #000000 30%, #1C2734 73%);
    position: absolute;
    top: 60px;
    left: 0;
    padding: 10px 0;
    align-items: center;
  }
  .navigation_links_mobile.open {
    display: flex;
  }
  .navigation_links_mobile a {
    padding: 10px 20px;
    font-size: 18px;
    text-align: center;
  }
  .navigation_links_mobile a, .navigation_links_mobile .phone, .navigation_links_mobile .sign_in, .navigation_links_mobile .sign_up {
    padding: 10px 20px;
    font-size: 18px;
    text-align: center;
    display: block;
    align-items: center;
  }

  .navigation_links_mobile .sign_up{
    width: 200px;
  }

  .navigation_links_mobile p, .navigation_links_mobile .sign_in, .navigation_links_mobile .sign_up{
    margin: 0;
  }
}

@media (max-width: 425px){
  .header_content{
    max-width: 380px;
  }
  .navigation_links_mobile{
    top: 50px;
  }
}
</style>