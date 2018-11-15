<template>
	<div id="nava">
	<div class="row">
 <!-- <el-menu
  v-for="item in nav"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      :collapse="isCollapse"
      active-text-color="#ffd04b"
      :key="item.id">
      <el-submenu index="item.id" v-for="item in nav" :key="item.uid">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </template>
          <el-menu-item v-for="items in item.children" :index="items.id" :key="items.id">
            <router-link :to="items.route">{{items.name}}</router-link>
            </el-menu-item>
      </el-submenu>
    </el-menu> -->
        <el-menu 
	      default-active="1"
        router :default-active="$route.path" 
	      class="el-menu-vertical-demo"
	      @open="handleOpen"
	      @close="handleClose"
	      background-color="#495060"
        text-color="#fff"
        :collapse="isCollapse"
	      active-text-color="#ffd04b" unique-opened>
      <el-submenu :index="item.name" v-for="item in nav" :key="item.id">
        <template slot="title" active-text-color="#ccc">
          <span>{{item.name}}</span>
        </template>
        <el-menu-item-group v-for="items in item.children" :key="items.id" style="background:#2A3340" router :default-active="$route.path">
          <el-menu-item :index="items.attributes.url">
          		{{items.name}}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    </div>
	</div>
</template>

<script>
export default {
  name: "nava",
  data() {
    return {
      isCollapse: false,
      nav: [ ]
      
    };
  },
  created(){
        this.axios.get("/apis/front/public/loadMenuInfo")
            .then(response => {
                  
                this.nav = response.data
                
            });

    
      
    

  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
#nava{
  height:100%;
  background:#495060;
  overflow:auto
}
a {
  color: #fff;
}
.row {
  width: 100%;
}
.glyphicon {
  width: 28px;
}
a:hover, a:focus{
  color: darkgoldenrod;
}
.el-submenu .el-menu-item{
/*  text-indent: 20%;*/
}
.el-submenu .el-menu{
  background: #363E4F  !important;
  z-index: 999;
}
.el-submenu .el-menu li{
  background: #363E4F !important;
}
.el-submenu .el-menu li:hover{
  background: #2D8CF0 !important;
  color: #fff!important;
}
.el-menu-item-group__title{
  padding: 0px;
}

</style>