<template>
  <div class="container-md-12">
    <div class="row">
      <div class="col-md-3" />
      <div class="col-md-2" align="center">
        <div v-b-hover="handleHover" >
          <b-card
            v-if="isHovered"
            bg-variant="primary"
            text-variant="white"
            header="ผู้ติดเชื่อ"
            class="text-center"
          >
            <b-card-text>{{thailat.confirmed}} คน</b-card-text>
          </b-card>
          <b-card
            v-else
            bg-variant="secondary"
            text-variant="white"
            header="ผู้ติดเชื่อ"
            class="text-center"
          >
            <b-card-text>{{thailat.confirmed}} คน</b-card-text>
          </b-card>
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
            <b-card-text>{{thailat.recovered}} คน</b-card-text>
          </b-card>
          <b-card
            v-else
            bg-variant="secondary"
            text-variant="white"
            header="จำนวนผู้รักษา"
            class="text-center"
          >
            <b-card-text>{{thailat.recovered}} คน</b-card-text>
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
            <b-card-text>{{thailat.deaths}} คน</b-card-text>
          </b-card>
          <b-card
            v-else
            bg-variant="secondary"
            text-variant="white"
            header="จำนวนผู้เสียชีวิต"
            class="text-center"
          >
            <b-card-text>{{thailat.deaths}} คน</b-card-text>
          </b-card>
        </div>
      </div><br><br>
      <div class="col-md-3" />
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  data() {
    return {
      isHovered: false,
      data:[],
      latest:0,
      thailat:[]
    }
  },
  async created() {
    let res = await this.$axios.get('https://pomber.github.io/covid19/timeseries.json');
    const data = res.data;
    this.allat = _.size(data, 'thailand')-1;
    let confirmed = 0
    let recovered = 0 
    let deaths = 0 
    for(const key in data){
      confirmed += data.key[allat].confirmed
      confirmed += data.key[allat].confirmed
      confirmed += data.key[allat].confirmed
      confirmed += data.key[allat].confirmed
      recovered
      recovered
      console.log(key);
    }
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
