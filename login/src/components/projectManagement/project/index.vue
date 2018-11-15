<template>
    <div id="project">
       <div class="left_56">
       <Projec-tTree></Projec-tTree>
       </div>
       <!--<div class="right_project">
         <Labor-Company>
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
         </Labor-Company>

       </div>-->
       <router-view></router-view>

    </div>
</template>

<script>
import ProjectTree from "./ProjectTree";
//import LaborCompany from "./LaborCompany";
export default {
  name: "project",
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
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
    }
  },
  components: {
    "Projec-tTree": ProjectTree,
//  "Labor-Company": LaborCompany
  }
};
</script>

<style>
.fenye {
  position: absolute;
  right: 0px;
  bottom: 1%;
}
#project {
  width: 100%;
  height: 100%;
}
.left_56 {
  width: 100%;
  height: 100%;
  float: left;
  border: 1px solid #ccc;
  overflow: auto;
}
.right_project {
  width: 80%;
  height: 90%;
  float: left;
  border: 1px solid #ccc;

}
.ztree li span.node_name {
    width: 160px!important;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    white-space: nowrap;
}
</style>
