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
export default {
  data() {
    return {
      isHovered: false,
       thailand:[],
      latest:0,
      thailat:[]
    }
  },async created() {
    console.log('created')
    let res = await this.$axios.get('https://pomber.github.io/covid19/timeseries.json');
    // console.log(res.data);
    // console.log(this.$axios)
    this.thailand = res.data.Thailand;
    this.latest = this.thailand.length;
    this.latest = this.latest-1;
    this.thailat = this.thailand[this.latest];

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
