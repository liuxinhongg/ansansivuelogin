<template>
    <div id="AuthorityManagement">
       <div class="left_64">
       <Authority-tTree></Authority-tTree>
       </div>
       <div class="right_4">
         <Authorit-Company>
         </Authorit-Company>

       </div>
       <router-view></router-view>

    </div>
</template>

<script>
import AuthorityTree from "./AuthorityTree";
import AuthorityCompany from "./AuthorityCompany";
export default {
  name: "AuthorityManagement",
  data(){
    return{
    }
    
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },

    childMethod() {
      bus.$on("show", data => {
        console.log(data.id);
        this.uid = data.id;
      });
    },
  },
  components: {
    "Authority-tTree": AuthorityTree,
    "Authorit-Company": AuthorityCompany
  }
};
</script>

<style>
.fenye{
    position: absolute;
    right: 0px;
    bottom: 1%;
}
#AuthorityManagement {
  width: 100%;
  height: 100%;
}
.left_64 {
  width: 20%;
  height: 492px;
  height: 100%;
  float: left;
  border: 1px solid #ccc;
 
}
.right_4 {
  width: 80%;
  height: 100%;
  float: left;
  border: 1px solid #ccc;
  position: relative;
}
.ztree li span.node_name {
    width: 160px!important;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    white-space: nowrap;
}
</style>
