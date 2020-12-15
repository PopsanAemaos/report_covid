<template>
    <div class="main backgrounds">
<div>
  <b-navbar toggleable="lg" type="dark" class="bg-nav">
    <b-navbar-brand clhref="#">   
      <span style="font-size: 24px;">COVID EXPERT</span>
       <nuxt-link type="button" class="btn filter-type-btn" to="/">🌎 HomePage</nuxt-link >
    </b-navbar-brand>
  </b-navbar>
  <b-card no-body class="pic">
      <img src="~/assets/covid.png" width="1000" height='auto'/>
  </b-card>
  </div>
  </div>
</template>

<script>
</script>

<style  scope>
.bg-nav {
    background-image: linear-gradient(90deg, #ff8c34, #f54b5e) !important;
    height: 100px;
}
.pic {
  background-image: url("../assets/background.png");
  height: 1800;
  align-items: center;

}
/* Style the header links */
/* .pic {  */
  /* color: black;
  text-align: left;
  padding: 20px;
  text-decoration: none;
  font-size: 100;
  line-height: 25px;
  border-radius: 4px; */
/* } */
.nav-bar {
  background: linear-gradient(270deg, #8addc8 0%, #c48ce2 100%);
  padding: 12px;
  height: 62px;
  display: flex;
  align-items: center;
  position: fixed !important;
  z-index: 999 !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  
}
.b-button {
  background: rgb(135, 228, 135);
  color: black;
  border-radius: 40px;
  width: 50%;
  border: none;
  padding: 20px 20px;
}
</style>
