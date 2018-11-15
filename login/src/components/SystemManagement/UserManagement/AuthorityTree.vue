<template>
     <div id="AuthorityTree">
         <div class="a"><div class="title">{{title}}</div></div>
         <div class="zhong">
                <ul id="tree" class="ztree"></ul>
         </div>
        </div>
</template>

<script>
export default {
  name: "AuthorityTree",
  data() {
    return {
      title: "项目结构",
      zTreeObj: null,
      childMethod: "",
      setting: {
        callback: {
          onClick: this.OnClick
        },
//      view:{
//      	addHoverDom:addHoverDom,
//      	removeHoverDom:removeHoverDom,
//      	selectedMulti:false,
//      	txtSelectedEnable:true,
//      	showLine:true,
//      	addDiyDom:addDiyDomWithCheck
//      }
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
        that.zNodes = response.data;
    that.zTreeObj = $.fn.zTree.init($("#tree"), that.setting, that.zNodes);
//  function addDiyDom(event,treeId,treeNode){
//    	var spacewidth = 2;
//    	var switchObj=$('#'+treeNode.tId+'_switch'),
//    	icoObj=$('#'+treeNode.tId+'_ico');
//    	switchObj.remove();icoObj.parent().before(switchObj);
//    	var spantxt = $('#'+treeNode.tId+'_span').html();
//    	if(spantxt.length > 2){
//    		spantxt = spantxt.substring(0,1)+'...';
//    		$('#'+treeNode.tId+'_span').html(spantxt);
//    	}
//  }

      });
         
      
  },
    methods: {
    OnClick(event, treeId, treeNode) {
      var that =this
      var array =that.zNodes
             bus.$emit("getProject", { id:treeNode.id });
             
             console.log(treeNode)
        
      
       
    }
  },
  
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
  margin-left: 5%;
}
.title{
    line-height: 50px;
}
</style>
