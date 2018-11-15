<template>
    <div id="BusinessManagement">
        <div class="anniu">
           <router-link to="/BasicInformation/BusinessManagement/list"> 
     <el-button type="primary" @click="tab">切换列表视图</el-button>
      </router-link> 
     </div>
     <div class="header">
         <ul class="header_1">
             <li>
               <div class="header_2">
                   <i class="glyphicon glyphicon-user"></i>
               </div>
               <div class="header_3">企业总数:xx</div>
             </li>
             <li>
                   <div class="header_2">
                   <i class="glyphicon glyphicon-user"></i>
               </div>
               <div class="header_3">劳务班组:xx</div>
             </li>
             <li>
                   <div class="header_2">
                   <i class="glyphicon glyphicon-user"></i>
               </div>
               <div class="header_3">劳务公司:xx家</div>
             </li>

         </ul>

     </div>
     <div class="center">
         <div class="center_1">
              <li><Age></Age></li>      <!--按企业性质统计 -->
             <li><Contract></Contract></li> <!--按企业注册资本统计 -->
             <li><Region></Region></li>   <!--按企业所在区域统计 -->
         </div>
            <div class="center_2">
             
             <li><Laborservice></Laborservice></li>  <!--按劳务公司统计劳务班组数 -->
             <li><Politics></Politics></li>     <!--按项目统计劳务班组数 -->
         </div>

     </div>
     
     

    </div>
</template>

<script>
import Age from "./Age";
import Contract from "./Contract";
import Laborservice from "./Laborservice";
import Politics from "./Politics";
import Region from "./Region";

export default {
  name: "BusinessManagement",
  data() {
    return {
      activeName: "second"
    };
  },
  components: {
    Age: Age,
    Contract: Contract,
    Laborservice: Laborservice,
    Politics: Politics,
    Region: Region
  },
  methods: {
    tab(){
    }
  }
};
</script>

<style>
#BusinessManagement {
  width: 100%;
  margin-top: 1%;
}
.anniu {
  float: left;
  margin-left: 5%;
}
.header {
  width: 100%;
  float: left;
  margin-top: 30px;
}
.header_1 {
  width: 95%;
  height: 80px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.header_1 li {
  width: 30%;
  height: 40px;
  float: left;
  margin-left: 3%;
  margin-top: 15px;
  list-style-type: none;
}
.header_2 {
  width: 13%;
  height: 40px;
  float: left;
}
.header_2 i {
  margin-top: 13px;
  margin-left: 6px;
}
.header_3 {
  width: 40%;
  height: 38px;
  float: left;
  border: 1px solid #ccc;
  border-radius: 4px;
  line-height: 38px;
  font-size: 18px;
}
.center {
  width: 100%;
  float: left;
  margin-top: 30px;
}
.center_1 {
  width: 95%;
  height: 320px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 0 auto;
}
.center_1 li {
  width: 30%;
  height: 100%;
  float: left;
  list-style-type: none;
  margin-top: 10px;
  margin-left: 3%;
}
.center_2 {
  width: 95%;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 2%;
}
.center_2 li {
  width: 40%;
  height: 100%;
  float: left;
  list-style-type: none;
  margin-top: 10px;
  margin-left: 10%;
}
</style>
