<script>
import Icon1 from '@/assets/grid/grid1.svg'
import Icon2 from '@/assets/grid/grid2.svg'
import Icon3 from '@/assets/grid/grid3.svg'
import Icon4 from '@/assets/grid/grid4.svg'
import Icon5 from '@/assets/grid/grid5.svg'
import Icon6 from '@/assets/grid/grid6.svg'
export default {
  name: 'GridComponent',
  data() {
    return {
      blocks: [
        { icon: Icon1, title: 'Неограниченый автопарк', description: 'Можно добавить неограниченное кол-во машин и водителей' },
        { icon: Icon2, title: 'Сокращение затрат до 50%', description: 'Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке' },
        { icon: Icon3, title: 'Безопасность', description: 'Данные передаются в зашифрованном виде, они доступны только получателю' },
        { icon: Icon4, title: 'Уведомление о погашении', description: 'Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП' },
        { icon: Icon5, title: 'Квитанция об оплате', description: 'После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате.' },
        { icon: Icon6, title: 'Все история сохраняется по каждой машине', description: 'Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам' }
      ]
    };
  }
}
</script>

<template>
  <section class="grid-blocks">
    <article class="grid-item" v-for="(block, index) in blocks" :key="index">
      <div class="icon">
        <img :src="block.icon" alt="icon" />
      </div>
      <div class="content">
        <h3 class="bold">{{ block.title }}</h3>
        <p>{{ block.description }}</p>
      </div>
    </article>
  </section>
</template>

<style scoped>
.grid-blocks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
  margin: 0 28px 0 14px;
}

.grid-item:nth-of-type(3){
  padding: 15px;
  gap: 22px;
}

.grid-item:nth-of-type(5){
  padding: 17px;
  gap: 22px;
}

.grid-item:nth-of-type(4), .grid-item:nth-of-type(5), .grid-item:nth-of-type(6){
  height: 174px;
}

.grid-item{
  display: flex;
  align-items: center;
  width: 361px;
  height: 151px;
  background-color: #FBFCFD;
  border: 1px solid #EEEFF1;
  border-radius: 7px;
  padding: 19px;
  gap: 15px;
}

.grid-item:nth-of-type(1) .icon, .grid-item:nth-of-type(2) .icon  {
  margin-top: 6px;
}

.grid-item:nth-of-type(3) .icon {
  margin-top: 7px;
  margin-left: 4px;
}

.grid-item:nth-of-type(4) .icon {
  margin-top: 7px;
}

.grid-item:nth-of-type(5) .icon {
  margin-top: 7px;
}

.grid-item:nth-of-type(6) .icon {
  margin-top: 7px;
}

h3{
 color: #1253A2;
  font-size: 18px;
  margin-bottom: 10px;
  line-height: 21px;
}

p{
line-height: 18px;
  font-size: 15px;
}

@media (max-width: 1200px){
  .grid-blocks {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 15px;
    margin: 0 0 0 65px ;
    gap: 30px;
  }

  .grid-item{
    width: 320px;
    height: 120px;
  }

  .grid-item:nth-of-type(4), .grid-item:nth-of-type(5), .grid-item:nth-of-type(6){
    height: 140px;
  }

  .icon img{
    width: 50px;
  }

  h3{
    font-size: 16px;
    margin-bottom: 8px;
  }

  p{
    font-size: 13px;
  }
}

@media (max-width: 1024px){
  .grid-blocks {
    margin: 0 20px;
  }
}

@media (max-width: 795px){
  .grid-blocks{
    margin: 0;
    padding: 0 12px;
    gap: 20px;
  }
  .grid-item{
    width: 280px;
    height: 120px;
  }
  .icon img{
    width: 40px;
  }
  h3{
    font-size: 13px;
    margin-bottom: 8px;
  }
  p{
    font-size: 11px;
  }
}

@media (max-width: 640px){
  .grid-blocks {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    max-width: 340px;
    margin: 0 auto;
  }
  .grid-item{
    width: 326px;
  }
}
</style>