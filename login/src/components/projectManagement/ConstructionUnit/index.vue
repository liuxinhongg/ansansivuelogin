<template>
    <div id="ConstructionUnit">
       <div class="right_5">
         <participat-Company>
            <div class="fenye">
  </div>
         </participat-Company>
       </div>
        <router-view></router-view>

    </div>
</template>

<script>
import participationTTree from "./participationTTree";
import participationCompany from "./participationCompany";
export default {
  name: "ConstructionUnit",
   data(){
    return{
    
    }
    
  },
    methods: {
   
    childMethod() {
      bus.$on("show", data => {
        console.log(data.id);
        this.uid = data.id;
      });
    },
  },

  components: {
    "participat-tTree": participationTTree,
    "participat-Company": participationCompany
  }
};
</script>

<style>
.fenye{
    position: absolute;
    right: 0px;
    bottom: 1%;
}
#ConstructionUnit {
  width: 100%;
  height: 100%;
}
.left {
 width: 20%;
  height: 100%;
  float: left;
  border: 1px solid #ccc;
  margin-left: 1%;
  margin-top: 1%;
  border-radius: 10px;
  overflow: hidden;
 
}
.right_5 {
  width: 100%;
  height: 90%;
  float: left;
  border: 1px solid #ccc;
}
</style>
