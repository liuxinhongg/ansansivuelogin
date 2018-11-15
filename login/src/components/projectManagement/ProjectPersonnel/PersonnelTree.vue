<template>
     <div id="PersonnelTree">
         <div class="a"><div class="title">{{title}}</div></div>
         <div class="zhong">
                <ul id="tree" class="ztree"></ul>
         </div>
        </div>
</template>

<script>
export default {
  name: "PersonnelTree",
  data() {
    return {
      title: "项目结构",
      zTreeObj: null,
      childMethod: "",
      setting: {
        callback: {
          onClick: this.OnClick
        }
      },
      zNodes: [
        {
          name: "建设集团",
          open: false,
          isParent: true,
          children: [
            {
              name: "建设集团1",
              open: false,
              isParent: true,
              children: [
                {
                  name: "子公司"
                }
              ]
            },
            {
              name: "建设集团1",
              open: false,
              isParent: true,
              children: [
                {
                  name: "子公司"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    OnClick(event, treeId, treeNode) {
      //   bus.$emit("getProject", { id: treeNode.tId.slice(5) });
      //   this.$refs.c1.childMethod();
      console.log(treeNode.tId.slice(5));
    }
  },

  mounted() {
    var that = this;
    // that.axios
    //   .get("/admin/department/loadDepartmentInfo")
    //   .then(function(response) {
    //     that.zNodes = response.data;
    that.zTreeObj = $.fn.zTree.init($("#tree"), that.setting, that.zNodes);
    //   });
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
</style>
