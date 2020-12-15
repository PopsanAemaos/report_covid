<template>
  <div class="container-md-12">
    <div class="row">
      <div class="col-md-3" />
      <div class="col-md-2" align="center">
        <div v-b-hover="handleHover" >
            <nuxt-link to="/detailWorld">
          <b-card
            v-if="isHovered"
            bg-variant="primary"
            text-variant="white"
            header="ผู้ติดเชื่อ"
            class="text-center"
          >
            <b-card-text>72,270,693 คน</b-card-text>
          </b-card>
          <b-card
            v-else
            bg-variant="secondary"
            text-variant="white"
            header="ผู้ติดเชื่อ"
            class="text-center"
          >
            <b-card-text>72,270,693 คน</b-card-text>
          </b-card>
          </nuxt-link>
        </div>
      </div>

      <div class="col-md-2" align="center">
        <div v-b-hover="handleHover" >
          <b-card
            v-if="isHovered"
            bg-variant="primary"
            text-variant="white"
            header="จำนวนผู้รักษา"
            class="text-center"
          >
            <b-card-text>370,098 คน</b-card-text>
          </b-card>
          <b-card
            v-else
            bg-variant="secondary"
            text-variant="white"
            header="จำนวนผู้รักษา"
            class="text-center"
          >
            <b-card-text>370,098 คน</b-card-text>
          </b-card>
        </div>
      </div>

      <div class="col-md-2" align="center">
        <div v-b-hover="handleHover" >
          <b-card
            v-if="isHovered"
            bg-variant="primary"
            text-variant="white"
            header="จำนวนผู้เสียชีวิต"
            class="text-center"
          >
            <b-card-text>1,613,260 คน</b-card-text>
          </b-card>
          <b-card
            v-else
            bg-variant="secondary"
            text-variant="white"
            header="จำนวนผู้เสียชีวิต"
            class="text-center"
          >
            <b-card-text>1,613,260 คน</b-card-text>
          </b-card>
        </div>
      </div>
      
  </div><br>
  <div class="col-md-12" />
        <p style="color:#ffffff" align="center" v-if="GETthailand">
          {{GETthailand.date}} :: {{GETthailand.deaths}}
        </p>
      <!-- <p v-for="list in GETthailand">
          {{list.date}}
      </p> -->
    </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      isHovered: false
    };
  },

  computed: {
      ...mapGetters(['GETthailand'])
  },
    created(){
        this.thailand()
    },
  mounted(){
     
    //   console.log(this.GETthailand)
    //  setInterval(() => {
    //      console.log(this.GETthailand)
    //  }, 1000);
  },

  methods: {
    handleHover(hovered) {
      this.isHovered = hovered;
    },

     thailand(){
      this.$store.dispatch('SHOWINFECTED')
    }
  }
};
</script>
<style>
</style>
