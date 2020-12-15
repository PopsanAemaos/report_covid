<template >
  <div class="container-md-12">
    <div class="background">
      <br />
      <row>
        <div class="text-center">
          <img src="../assets/logo.png" width="230" />
        </div>
      </row>
      <br />
      <row class="text-center">
        <p class="fontt bg-pimary">ติดตามสถานะการณ์ผู้เชื้อไวรัส Covid-19 ในประเทศไทยและทั่วโลก</p>
      </row>
      <br />
      <row>
        <div align="center" >

          <div v-if="displayCard === true" >
             <button type="button" class="btn filter-type-btn is-filter-btn-active" @click="displayCard = true" >
            ประเทศไทย
            </button>


            <!-- <button type="button" class="btn filter-type-btn" @click="displayCard = false">
            🌎 ทั่วโลก
            </button> -->
          </div>

          <div v-if="displayCard === false">
             <button type="button" class="btn filter-type-btn" @click="displayCard = true" >
            ประเทศไทย
            </button>


            <!-- <button type="button" class="btn filter-type-btn is-filter-btn-active" @click="displayCard = false">
            🌎 ทั่วโลก
            </button> -->
          </div>

         
         
        </div>
      </row>
      <br />
      <div v-if="displayCard === true">
         <Cardthai  />
      </div>

       <div v-if="displayCard === false">
         <Cardworld  />
      </div>
      <row>
        <div align="center" >
            <nuxt-link to="/analysis" type="button" class="btn filter-type-btn"  >
             วินิจฉัยโรค
            </nuxt-link >
                
            <nuxt-link to="/protech" type="button" class="btn filter-type-btn"  >
             การป้องกัน
            </nuxt-link >
      
        </div>   
         
      </row>
      

    </div>
  </div>

  <!-- <div>
    <div align="center" > Counter is :{{$store.state.counter}} </div>
    <div align="center" > <button @click="increment"> ++++++ </button> </div>
  </div>-->
</template>

<script>
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import { mapState } from "vuex";
import Logo from "~/components/Logo.vue";
// import Cardworld from "~/components/CardWorld.vue";
import Cardthai from "~/components/CardThai.vue";

export default {
  components: {
    Logo,
    Cardthai
  },

    data() {
    return {
      displayCard: true

    };
  }, 

  

   methods: {
    change(displayCard) {
      this.displayCard = !displayCard;
      // console.log(this.displayCard);
    }
  }

  // fetch({store}){
  //   store.commit('increment')
  // },

  // computed:mapState([
  //   'counter'
  //   ]),

  // methods:{
  //   increment(){
  //     this.$store.commit('increment')
  //   }
  // }
};
</script>

<style>
.fontt {
  color: #b1afee;
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
}

.background {
  background-image: url("../assets/background.png");
  height: 1000px;
}

.filter-type-btn.is-filter-btn-active {
  background-image: linear-gradient(90deg, #ff8c34, #f54b5e) !important;
  border: none !important;
}

.filter-type-btn {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    border-radius: 37px;
    border: 1px solid hsla(0,0%,100%,.35);
    padding: 8px 20px;
    transition: all .3s ease-in;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
