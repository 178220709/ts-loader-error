<template>
  <div class="row">
    <label class="control-label">地区:</label>
    <div class="form-group">
      <div class="col-md-4">
        <select class="form-control" v-model="pCode" @change="selp">
          <option value="0">请选择</option>
          <option v-for="item in pList" :value="item.code">{{item.name}}</option>
        </select>
      </div>
      <div class="col-md-4">
        <select class="form-control" v-model="cCode" @change="selc">
          <option v-for="item in cList" :value="item.code">{{item.name}}</option>
        </select>
      </div>
      <div class="col-md-4">
        <select class="form-control" v-model="aCode" :disabled="aList.length==0" @change="sela">
          <option v-for="item in aList" :value="item.code">{{item.name}}</option>
        </select>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import areaJson from "../../libs/json/areas.json"

  export default {
    props: {
      pCode: {
        type: String,
        default: ""
      },
      cCode: {
        type: String,
        default: ""
      },
      aCode: {
        type: String,
        default: ""
      },
      code: {
        type: String,
        default: ""
      },
    },
    created () {
      this.$on("set_area_code", a => {
        setTimeout(b => this.init(), 1)
      })
    },

    on(){

    },
    data (){
      return {}
    },

    computed: {
      pList(){
        return areaJson.filter(a => a.parentCode === "0")
      },
      cList(){
        return areaJson.filter(a => a.parentCode === this.pCode)
      },
      aList(){
        return areaJson.filter(a => a.parentCode === this.cCode)
      },
    },
    methods: {
      init () {
        const acode = this.code;
        if (this.code) {
          let areaItem = areaJson.find(a => a.code === this.code);
          let provinceItem = areaJson.find(a => a.code === areaItem.parentCode);
          this.pCode = provinceItem.parentCode;
          this.cCode = areaItem.parentCode;
          this.aCode = acode;
        } else {
          this.pCode = "";
          this.cCode = "";
          this.aCode = "";
        }
      },
      selp(){
        this.cCode = "";
      },
      selc(){
        this.aCode = "";
        if (this.aList.length === 0) {
          this.code = this.cCode
        }
      },
      sela(){
        this.code = this.aCode
      },
    }
  }
</script>


<style>

</style>
