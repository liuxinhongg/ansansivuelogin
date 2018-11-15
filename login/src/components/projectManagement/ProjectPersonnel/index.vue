<template>

        <div id="ProjectPersonnel">
       <div class="left_2">
       <Personnel-Tree></Personnel-Tree>
       </div>
       <div class="right_3">
         <Personnel-Company>
                         <div class="fenye">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
         </Personnel-Company>

       </div>
       <router-view></router-view>

    </div>
</template>

<script>
import PersonnelCompany from "./PersonnelCompany";
import PersonnelTree from "./PersonnelTree";
export default {
  name: "project",
  data(){
    return{
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
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
    "Personnel-Company": PersonnelCompany,
    "Personnel-Tree": PersonnelTree
  }
};
</script>

<style>
.fenye{
    position: absolute;
    right: 0px;
    bottom: 1%;
}
#ProjectPersonnel {
  width: 100%;
  height: 100%;
}
.left_2 {
  width: 20%;
  height: 100%;
  float: left;
  border: 1px solid #ccc;
 
}
.right_3 {
 width: 80%;
 height: 100%;
  float: left;
  border: 1px solid #ccc;

}
</style>
