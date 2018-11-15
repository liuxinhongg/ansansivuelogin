<template>
    <div id="UserManagement">
      
       <user-list></user-list>
        <router-view></router-view>

    </div>
</template>

<script>
import userTree from "./userTree";
import userlist from "./userlist";
export default {
  name: "UserManagement",
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
    "user-Tree": userTree,
    "user-list": userlist
  }
};
</script>

<style>
#ConstructionUnit {
  width: 100%;
  height: 100%;
}
.ztree li span.node_name {
    width: 160px!important;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    white-space: nowrap;
}
</style>
