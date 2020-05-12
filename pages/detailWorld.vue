<template>

<div>
    <h1>{{thailat.date}}</h1>
    <h1>{{thailat.confirmed}}</h1>
    <h1>{{thailat.deaths}}</h1>
    <h1>{{thailat.recovered}}</h1>
    
</div>

</template>

<script>



export default {
  data() {
    return {
      thailand:[],
      latest:0,
      thailat:[]
    }
  },
  async created() {
    // console.log('created')
    let res = await this.$axios.get('https://pomber.github.io/covid19/timeseries.json');
    // console.log(res.data);
    // console.log(this.$axios)
    this.thailand = res.data.Thailand;
    this.latest = this.thailand.length;
    this.latest = this.latest-1;
    this.thailat = this.thailand[this.latest];

    // console.log(this.thailand);
    // console.log(this.latest);
    // console.log(this.thailand[this.latest]);
    // console.log(this.thailat);

  }
}

</script>