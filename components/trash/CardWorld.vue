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
    </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    data() {
    return {
      isHovered: false,
      thailand:[],
      latest:0,
      thailat:[],
      data:[]
    }
  },
  async created() {
    let res = await this.$axios.get('https://pomber.github.io/covid19/timeseries.json');
    this.thailand = res.data.Thailand;
    console.log(this.thailand)
    this.latest = this.thailand.length;
    this.latest = this.latest-1;
    this.thailat = this.thailand[this.latest];
    let data = res.data
    let confirmed = 0
    let recovered = 0 
    let deaths = 0 
    // for(const key in data){
      // console.log(data.key)
      // confirmed += data.key[thailat].confirmed
      // recovered += data.key[thailat].recovered
      // deaths += data.key[thailat].deaths
    // }
    // console.log(confirmed);
    // console.log(recovered);
    // console.log(deaths)
    // this.thailand = res.data.Thailand;
    // this.latest = this.thailand.length;
    // this.latest = this.latest-1;
    // console.log(this.latest)
    // console.log(this.this.thailand[this.latest])
    // this.thailat = this.thailand[this.latest];
    // console.log(this.thailat)
  },

  methods: {
    handleHover(hovered) {
      this.isHovered = hovered;
    }
  }
};
</script>
<style>
</style>
