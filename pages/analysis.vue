<template>
  <div class="main backgrounds">
<div>
  <b-navbar toggleable="lg" type="dark" class="bg-nav">
    <b-navbar-brand clhref="#">   
          
      <span style="font-size: 24px;">COVID EXPERT</span>
       <nuxt-link type="button" class="btn filter-type-btn" to="/">🌎 HomePage</nuxt-link >
    </b-navbar-brand>
  </b-navbar>
</div>    
    <div class="container" >
      <b-form v-on:submit.prevent="onSubmit" @reset="onReset" v-if="show">
      <b-form-group class="checkbox">
        <h3>Symptoms</h3>
        <b-form-checkbox-group
          v-model="selected_Symptoms"
          :options="options_Symptoms"
          value-field="value"
          text-field="nameEN"
          name="flavour-2a"
          stacked
        ></b-form-checkbox-group>
      </b-form-group>
      <b-form-group  class="checkbox">
        <h3>Activities Histor</h3>
        <b-form-checkbox-group
          v-model="selected_Activities_History"
          :options="options_Activities_History"
          value-field="value"
          text-field="nameEN"
          name="flavour-2a"
          stacked
        ></b-form-checkbox-group>
      </b-form-group>
      <b-form-group class="checkbox">
        <h3>Physiological Conditions</h3>
        <b-form-checkbox-group
          v-model="selected_Physiological_Conditions"
          :options="options_Physiological_Conditions"
          value-field="value"
          text-field="nameEN"
          :state="state"
          name="checkbox-validation">
          <b-form-invalid-feedback :state="state">Please select one</b-form-invalid-feedback>
        </b-form-checkbox-group>
      </b-form-group><br>
      <b-button type="submit" variant="success">Analyze</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
    <div>
  <b-modal ref="my-modal" id="bv-modal" hide-footer>
    <template #modal-title>
      ผลประเมินอาการของคุณ
    </template>
    <div class="d-block text-center">
      <h3>{{ text }}</h3>
    </div>
    <b-button class="mt-3" block @click="onReset">Close Me</b-button>
  </b-modal>
</div>
  </div>
</template>

<script>
import _ from 'lodash';
import covidRules from '../data/covidRules.json';

export default {
  data() {
    return {
      message: '',
      text: '',
      show: true,
      last_values: 0,
      selected_Symptoms: [],
      selected_Activities_History: [],
      selected_Physiological_Conditions: [],
      selected_Feel: [],
      options_Symptoms: [],
      options_Activities_History: [],
      options_Physiological_Conditions: [],
      options_Feel: [],
    };
  },
  computed: {
    state() {
      return this.selected_Physiological_Conditions.length === 1;
    },
  },
  components: {
  },
  created() {
    this.getSymptoms();
    this.getActivities_History();
    this.getPhysiological_Conditions();
  },
  methods: {
    async getSymptoms() {
      this.options_Symptoms = covidRules.Symptoms;
    },
    async getActivities_History() {
      this.options_Activities_History = covidRules.Activities_History;
    },
    async getPhysiological_Conditions() {
      this.options_Physiological_Conditions = covidRules.Physiological_Conditions;
      // this.options_Feel = covidRules.Feel;
    },
    onSubmit() {
      if (this.selected_Physiological_Conditions.length === 0) {
        this.text = 'กรุณาระบุช่วงอายุ'
        this.$refs['my-modal'].show()

      } else if(this.selected_Physiological_Conditions.length === 1) {
        if (this.selected_Symptoms.length !== 0) {
        // eslint-disable-next-line no-restricted-syntax
          for (const i of this.selected_Symptoms) {
            const index = _.findIndex(covidRules.Symptoms, { value: i });
            const values = covidRules.Symptoms[index].CF;
            this.last_values = this.last_values + (values * (1 - this.last_values));
          }
        }
        if (this.selected_Activities_History.length !== 0) {
          // eslint-disable-next-line no-restricted-syntax
          for (const i of this.selected_Activities_History) {
            const index = _.findIndex(covidRules.Activities_History, { value: i });
            const values = covidRules.Activities_History[index].CF;
            this.last_values = this.last_values + (values * (1 - this.last_values));
          }
        }
        if (this.selected_Physiological_Conditions.length !== 0) {
          const index = _.findIndex(covidRules.Physiological_Conditions, {
            value: this.selected_Physiological_Conditions[0],
          });
          const values = covidRules.Physiological_Conditions[index].CF;
          this.last_values = this.last_values + (values * (1 - this.last_values));
        }
        if(this.last_values*100 >= 0 && this.last_values*100 <= 75 ){
                this.text = 'ยังไม่แสดงอาการ';
                // this.$refs['my-modal'].show()
        }
        if(this.last_values*100 > 75 && this.last_values*100 <= 95 ){
                  this.text = 'กลุ่มเฝ้าระวังควรกักตัวอยู่บ้าน';
        // this.$refs['my-modal'].show()
        }
        if(this.last_values*100 > 95 && this.last_values*100 <= 100 ){
                this.text =   'ควรไปพบแพทย์';
                // this.$refs['my-modal'].show()
        }
        // this.text = `ความเสี่ยงที่คุณจะติดเชื่อ ${(this.last_values*100).toFixed(2)} %`;
        this.$refs['my-modal'].show()
      } else {
        this.text = 'กรุณาระบุช่วงอายุให้ถูกต้อง'
        this.$refs['my-modal'].show()

      }
    },
    onReset(evt) {
      this.$refs['my-modal'].hide()
      evt.preventDefault();
      this.selected_Symptoms = [];
      this.last_values = 0;
      this.selected_Activities_History = [];
      this.selected_Physiological_Conditions = [];
      this.selected_Feel = [];
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scope>
.bg-nav {
    background-image: linear-gradient(90deg, #ff8c34, #f54b5e) !important;
}
.backgrounds {
  background-image: url("../assets/background.png");
  height: 1050px;
}
/* Style the header links */
.checkbox {
  background: #c3d6db;
  float: center;
  color: black;
  text-align: left;
  padding: 20px;
  text-decoration: none;
  font-size: 100;
  line-height: 25px;
  border-radius: 4px;
}
/* .mt-2 {
  background: #c3d6db;
  float: center;
  color: black;
  text-align: center;
  padding: 20px;
  text-decoration: none;
  font-size: 100;
  line-height: 25px;
  border-radius: 4px;
  } */
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
