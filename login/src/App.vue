<template>
  <div id="app">
    <router-view></router-view>
   
  </div>
</template>

<script>
	

  export default {
    name: 'App',
    // created(){
    //   this.$router.push({name:'login'})
    // }
  }
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.el-table .cell{
	text-align: center!important;
}
.el-pagination{text-align: right;
margin-top: 20px; margin-right: 50px;}
.el-menu-demo{
	width: 200px;
	margin-left: 20px;
	float: left;
	margin-right: 40px;
}
.el-menu--horizontal>.el-submenu .el-submenu__icon-arrow{
	float: right;
	margin-left: 8px;
  margin-top: 24px;
}
.el-menu--popup-bottom-start{
	margin-top: 0!important;
	}
.el-table td, .el-table th {
  padding: 0!important;
}
.distpicker-address-wrapper select {
    width: 31%!important;
    color: #606266!important;
    font-size: 14px!important;
}

.el-form-item__content {
    line-height: 33px!important;
    }
.el-input__inner {
	    height: 33px!important;
    line-height: 33px!important;
}
.el-form-item__label {
    font-size: 12px!important;
    line-height: 33px!important;
    }
.distpicker-address-wrapper select {
    height: 33px;
    }
.el-dialog{margin-top: 10vh!important;}   
.el-input__icon {
    line-height: 33px!important;
} 
.el-form-item__error {
     padding-top: 0px!important;
  }
.el-form-item {
    margin-bottom: 15px!important;
}
</style>
