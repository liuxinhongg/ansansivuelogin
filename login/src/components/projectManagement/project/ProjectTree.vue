<template>
<div>
     <div id="ProjectTree">
         <div class="a"><div class="title">{{title}}</div></div>
         <div class="zhong">
                <ul id="tree" class="ztree"></ul>
         </div>
         
        </div>
        <div class="bod" v-show="droe">
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
         </div></div>
</template>

<script>
	import LaborCompany from "./LaborCompany";
export default {
	
  name: "ProjectTree",
  data() {
    return {
    	droe:false,
    	currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      title: "项目结构",
      zTreeObj: null,
      childMethod: "",
             setting : {
          callback: {
             onClick: this.OnClick,
          },
       
        },
      zNodes: [
        // {
        //   name: "建设集团",
        //   open: false,
        //   isParent: true,
        //   children: [
        //     {
        //       name: "建设集团1",
        //       open: false,
        //       isParent: true,
        //       children: [
        //         {
        //           name: "子公司"
        //         }
        //       ]
        //     },
        //     {
        //       name: "建设集团1",
        //       open: false,
        //       isParent: true,
        //       children: [
        //         {
        //           name: "子公司"
        //         }
        //       ]
        //     }
        //   ]
        // }
      ]
    };
  },


  mounted() {
    var that = this;
    that.axios
      .get("/apis/front/public/loadDepartmentInfo")
      .then(function(response) {
        console.log(response.data)
        that.zNodes = response.data;
        
    that.zTreeObj = $.fn.zTree.init($("#tree"), that.setting, that.zNodes);
      });
  },
    methods: {
    	 handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
      OnClick(event, treeId, treeNode) {
      var that =this
      var treeObj = $.fn.zTree.getZTreeObj("tree");
      var sNodes = treeObj.getSelectedNodes();
that.droe=true
            
              bus.$emit("project", treeNode,);
            // if (sNodes.length > 0) {
            //   var node = sNodes[0].getParentNode();     //获取父节点数据
            //    bus.$emit("id", {id:node.id},);
              
            // }
            
            
      
       
    },


  },
   components: {
   "Labor-Company": LaborCompany
  } 
};
</script>

<style scoped>
.a {
  width: 100%;
  height: 50px;
  background: #5B9BD5;
  color: #fff;
}
.zhong{
  margin-left: 3%;
}
.title{
    line-height: 50px;
}
#ProjectTree{width: 20%; float: left;    border: 1px solid #ccc;height: 100%;min-height: 800px;}
.bod{width: 80%; float: left;    border: 1px solid #ccc;height: 100%;min-height: 800px; position: relative;}
.fenye_1 {
    position: absolute;
    right: 1%;
    bottom: 1%!important;
}
</style>
