<template>
  <div id="myMain">
    <page-header></page-header>
    <div class="row height">
      <div class="col-xs-2  leftMenu">
        <nav-left></nav-left>
      </div>
      <div class="col-xs-10 rightSection">
        <router-view></router-view>
      </div>
    </div>
     <div class="ad">云南建设第三安装公司</div>
  </div>
</template>

<script>
import Header from "./Top";
import nav from "./nav";

export default {
  name: "myMain",
  data() {
    return {};
  },
  methods: {},
    created(){

  },

  components: {
    "page-header": Header,
    "nav-left": nav
  }
};
</script>

<style scoped>
#myMain {
  height: 100%;
}
.box {
  border: 1px solid #000;
}
.nav-pills > li > a {
  border-radius: 0;
}
.projectOverview {
  padding: 5px;
}
.height {
  height: 85%;
}
.leftMenu {
  height: 100%;
  /*background: #C3C8CC;*/
  background:#495060;
  box-shadow: 1px 0 1px #000;
}
.rightSection {
  height: 100%;
}
.ad{
  width: 100%;
  height: 40px;
  background: #24292D;
  position: fixed;
  left: 0px;
  bottom:0px;
  line-height: 40px;
  color: #fff;
  text-align: center;
}
</style>
