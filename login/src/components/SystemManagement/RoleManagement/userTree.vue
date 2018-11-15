<template>
    <div id="userTree" v-if="hide">
              <div class="title">
            <div class="title_1">{{title}}：设置权限</div>
        </div>
        <div class="Setup">
                     <div class="box">
                    <ul id="treeMultiple" class="ztree"></ul>
                    </div>
                <div class="Determine">
                    <el-button :plain="true"  @click="open2" >保存权限</el-button>
                </div>
            </div>
      

    </div>
</template>
<script>
export default {
    name: "userTree",
    data() {
        return {
            hide: true,
            zNodes: [
        //                 {
        //   name: "建设集团",
        //   open: false,
        //   isParent: true,
        //   children: [
            // {
            //   name: "建设集团1",
            //   open: false,
            //   isParent: true,
            //   children: [
            //     {
            //       name: "子公司"
            //     }
            //   ]
            // },
            // {
            //   name: "建设集团1",
            //   open: false,
            //   isParent: true,
            //   children: [
            //     {
            //       name: "子公司"
            //     }
            //   ]
            // }
        //   ]
        // }
            ],
            ztreeObj: null,
            menuIds: [],
            mykeyValues: [],
            output: [],
            title:"",
            uid: "",
            setting: {
                check: {
                    enable: true,
                    chkStyle: "checkbox",
                    chkboxType: { Y: "s", N: "ps" }
                },
                data: {
                    simpleData: {
                        enable: true
                    }
                }
            }
        };
    },
    mounted() {
        var that = this;
            bus.$on("Permissiontree", data => {

                    that.uid=data[0].id
                    that.title=data[1].title

                    //  console.log(111111)
                    // console.log(that.uid)
                    
                
                    // console.log(that.uid)
                that.axios
            .get("/apis/front/public/loadCheckMenuInfo",{

                 params: {
                        roleId:that.uid,
                    }
                
            })
            .then(function(response) {
                that.zNodes = response.data;
                that.ztreeObj = $.fn.zTree.init(
                    $("#treeMultiple"),
                    that.setting,
                    that.zNodes
                );
            });

            });
             that.ztreeObj = $.fn.zTree.init(
                     $("#treeMultiple"),
                     that.setting,
                     that.zNodes
             )},

        
    
    methods: {
        recursive(arr) {
            for (let obj of arr) {
                this.output.push(obj.id);
//              if (obj.children != undefined) {
//                  this.recursive(obj.children);
//              }
            }
         
        },
        open2() { 
            var that = this;
            var nodes = that.ztreeObj.getCheckedNodes(true);
            that.recursive(nodes);
            that.output = Array.from(new Set(that.output));
            var checkbox = that.output.join(",");
            that.axios
                .get("/apis/admin/role/saveMenuSet", {
                    params: {
                        menuIds: checkbox,
                        roleId:that.uid,
                    }
                })
                .then(function(response) {
                    console.log(response.data);
                });

            that.$message({
                message: "恭喜你，保存成功",
                type: "success"
            });
             that.output=[]
        }
    }
};
</script>

<style>
#userTree{
    width: 100%;
    height:100%;
    min-height: 700px;
    float: left;
    position: relative;
    border: 1px solid #CCC;
}
.box{
    width: 70%;
    margin: 0 auto;
}
.title_1{
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    
}
.title {
  width: 100%;
  height: 50px;
  background: #5b9bd5;
  color: #fff;
  margin-bottom: 20px;
}
.Setup {
    width: 100%;
    height: 40px;

}
.warp {
    width: 100%;
    /*border: 1px solid #409eff;*/
    float: left;
}
.Determine {
   position: absolute;
   left: 25%;
   bottom: 3%;
}

.box {
	margin: auto;
    margin-bottom: 5%;
}
</style>
