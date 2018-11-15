<template>
    <div id="OrganizationStructure">
       <div class="left_84">
       <template>
         <!-- 树 -->
     <div id="ProjectTree">
         <div class="a"><div class="title">{{title}}</div></div>
         <div class="zhong">
                <ul id="tree" class="ztree"></ul>
         </div>
        </div>
</template>
       </div>
       <div class="right_98">
          <div id="StructureList">
        <div class="title">
            <div class="title_1">结构管理</div>

        </div>
        <div class="block">
            <div class="Add_3">
                <el-button class="bnt" size="small" @click="Addit">
                    添加
                </el-button>
            </div>
        </div>

        <!--修改弹出框-->
        <el-dialog title="修改组织结构信息" :visible.sync="hand"  width="40%">
            <span>
                    <el-form :model="tableData2"  ref="ruleForm" label-width="110px" class="demo-ruleForm">
                    <el-form-item label="组织机构代码" prop="departmentCode"  :rules="[
                    { required: true, message: '组织机构代码不能为空', trigger: 'blur' },
                     {  trigger: 'blur' }
                  ]">
                        <el-input v-model="tableData2.departmentCode"></el-input>
                    </el-form-item>
                     <el-form-item label="组织结构编号" prop="departmentNum"  :rules="[
                    { required: true, message: '组织结构编号不能为空', trigger: 'blur' },
                     {  trigger: 'blur' }
                  ]">
                        <el-input v-model="tableData2.departmentNum"></el-input>
                    </el-form-item>
                    <el-form-item label="组织结构名称" prop="name" :rules="[
                    { required: true, message: '组织结构名称不能为空', trigger: 'blur' },
                     {  trigger: 'blur' }
                  ]">
                        <el-input v-model="tableData2.name"></el-input>
                    </el-form-item>
                    <el-form-item label="备注" prop="remark">
                        <el-input v-model="tableData2.remark"></el-input>
                    </el-form-item>
                    
                </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="getCompanyData">取 消</el-button>
                <el-button type="primary" @click="modify">修  改</el-button>
            </span>
        </el-dialog>
        <!--弹出框结束-->
        <!--添加弹出框-->
        <el-dialog title="新增组织结构" :visible.sync="Addition"  width="50%">
            <span>
                <el-form :model="tableData1" ref="ruleForm" label-width="110px" class="demo-ruleForm">
                    <el-form-item label="组织机构代码" prop="departmentCode"  :rules="[
                    { required: true, message: '组织机构代码不能为空', trigger: 'blur' },
                     {  trigger: 'blur' }
                  ]">
                        <el-input v-model="tableData1.departmentCode"></el-input>
                    </el-form-item>
                     <el-form-item label="组织结构编号" prop="departmentNum"  :rules="[
                    { required: true, message: '组织结构编号不能为空', trigger: 'blur' },
                     {  trigger: 'blur' }
                  ]">
                        <el-input v-model="tableData1.departmentNum"  @change="open"></el-input>
                    </el-form-item>
                    <el-form-item label="组织结构名称" prop="name" :rules="[
                    { required: true, message: '组织结构名称不能为空', trigger: 'blur' },
                     {  trigger: 'blur' }
                  ]">
                        <el-input v-model="tableData1.name"></el-input>
                    </el-form-item>
                    <el-form-item label="备注" prop="remark">
                        <el-input v-model="tableData1.remark"></el-input>
                    </el-form-item>
                    
                </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="qux">取 消</el-button>
                <el-button type="primary" @click="add">添 加</el-button>
            </span>
        </el-dialog>
        <!--弹出框结束-->
        <el-table :data="tableData" style="width: 95%;margin: auto;">
            <el-table-column prop="departmentCode" label="组织机构代码">
            </el-table-column>
            <el-table-column prop="departmentNum" label="组织结构编号">
            </el-table-column>
            <el-table-column prop="departmentName" label="组织结构名称">
            </el-table-column>
            <el-table-column prop="remarks" label="备注">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <span class="glyphicon glyphicon-pencil text-warning" :plain="true" @click="handleEdit(scope.row)"></span>
                    &nbsp;&nbsp;
                    <span class="glyphicon glyphicon-trash text-danger" :plain="true" @click="handleDelete(scope.$index,scope.row)"></span>
                </template>
            </el-table-column>
        </el-table>
        <div class="page" style="width: 95%; margin: auto;">
        </div>
    </div>
       </div>

    </div>
</template>

<script>
export default {
  name: "OrganizationStructure",
  data() {
    return {
      title: "组织结构管理",
      zTreeObj: null,
      childMethod: "",
      departmentCode:"",
             setting : {
          callback: {
             onClick: this.OnClick,
          },
       
        },
          zNodes: [],
          uid: "",
      rowid:"",
      addid:"",
       value: '',
       fid:"",
      options: [],
      Addition: false,
      hand: false,
      
 
       tableData2:{},
        tableData: [],
         tableData1:{},

    };
  },
 mounted() {
    this.tree()
   
  },
  
    methods: {
   open(){
   	 var that = this;
   	for(var i=0;i < that.tableData.length;i++){
// 		console.log(that.tableData[i].departmentNum)
   		if(that.tableData1.departmentNum==that.tableData[i].departmentNum){
   		alert('该编号已存在')
   		return false;
       	}
   	}
   
   },
       tree(){
          var that = this;
    that.axios
      .get("/apis/admin/department/loadDepartmentInfo")
      .then(function(response) {
        that.zNodes = response.data;
    that.zTreeObj = $.fn.zTree.init($("#tree"), that.setting, that.zNodes);
      });

       },
      OnClick(event, treeId, treeNode) {
      var that =this
      var treeObj = $.fn.zTree.getZTreeObj("tree");
      var sNodes = treeObj.getSelectedNodes();
      //  bus.$emit("structure", treeNode,);
       that.addid=treeNode.id
        //  var array =treeNode.children
        //   that.tableData=array
        that.list()
               
    },
    list(){
         var that = this;
    that.axios
      .get("/apis/front/public/findByParentId",{
        params:{
          parentId:that.addid,
          

        }
      })
      .then(function(response) {
        console.log(response)
        that.tableData=response.data.rows

      });


    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },

    //添加按钮
    Addit() {
       if (JSON.stringify(this.tableData1)!=="{}") {
        this.tableData1={};
      } 
      this.Addition = true;
   
    
    },
    qux(){
    	this.Addition = false;
		      	this.$refs.ruleForm.resetFields();
    },
    //添加
    add() {
    	var that =this
       that.$refs.ruleForm.validate((valid) => {
		          if (valid) {
		          		for(var i=0;i < that.tableData.length;i++){
				// 		console.log(that.tableData[i].departmentNum)
				   		if(that.tableData1.departmentNum==that.tableData[i].departmentNum){
				   		alert('该编号已存在')
				   		return false;
				     	}
   	}
        that.Addition = false;
				        that.axios
				          .get("/apis/admin/department/add", {
				            params: {
				              departmentCode:that.tableData1.departmentCode,
				              pId:that.addid,
				              departmentName:that.tableData1.name,
				              departmentNum:that.tableData1.departmentNum,
				              remarks:that.tableData1.remark  
				            }
				          })
				          .then(function(response) {
				            that.list()
				            that.tree()
				          });
		          } else {
					            alert('信息不全');
					            return false;
				    }
		           }); 
    },
    //修改
    modify(){
      var that =this
      that.hand=false;
        this.axios
          .get("/apis/admin/department/update", {
            params: {
              departmentCode:that.tableData2.departmentCode,
              id:that.rowid,
              departmentName:that.tableData2.name,
              departmentNum:that.tableData2.departmentNum,
              remarks:that.tableData2.remark  
           }
          }).then(function(response) {
             that.list()
             that.tree()
          });
    },
    handleItemChange(label) {
      alert(label);
    },
    getCompanyData() {
      this.hand = false;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //修改按钮
    handleEdit(row) {
       var that =this
       that.hand = true;
       console.log(row)
      that.tableData2.departmentCode=row.departmentCode
       that.tableData2.departmentNum=row.departmentNum
       that.tableData2.name=row.departmentName
       that.tableData2.remark=row.remarks
      that.rowid=row.id
    },

    //删除
    handleDelete(index,row) {
      var that =this
      that.$confirm("此操作将永久删除该信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
           that.axios
          .get("/apis/admin/department/delete", {
            params: {
              id:row.id,
            }
          })
          .then(function(response) {   

           that.list()
           that.tree()
                
             that.$message({
            type: "success",
            message: "删除成功!"
          });
          });
         
        })
        .catch(() => {
          that.$message({
            type: "info",
            message: "已取消删除"
          });
        });
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
  margin-left: 3%;
}
.title{
    line-height: 50px;
}

.fenye {
  position: absolute;
  right: 0px;
  bottom: 1%;
}
#OrganizationStructure {
  width: 100%;
  height: 100%;
  position: relative;
}
.left_84 {
  width: 20%;
  height: 100%;
  float: left;
  border: 1px solid #ccc;
   overflow: auto;

}
.right_98 {
  width: 80%;
  height: 100%;
  float: left;
  border: 1px solid #ccc;
  overflow: auto;

}
.title_1 {
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
.compa {
  width: 95%;
  margin: auto;
  margin-top: 20px;
}
.details {
  width: 10%;
  display: inline-block;
}
.overlay .con {
  position: absolute;
  width: 420px;
  min-height: 300px;
  background: #fff;
  left: 50%;
  top: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  /*margin-top: -150px;*/
  padding: 20px;
}
.LaborServiceCompany {
  width: 120px;
}
.SearchBox {
  height: 40px;
  float: left;
  margin-left: 8%;
}
.Search {
  float: left;
  line-height: 40px;
  font-size: 14px;
}
.Box {
  width: 134px;
  float: left;
}
.Add_3 {
  float: right;
  margin-right: 2%;
}
.block {
  width: 100%;
  height: 40px;
  float: left;
}
.fenye {
  position: absolute;
  right: 0px;
  bottom: 1%;
}
.ztree li span.node_name {
    width: 160px!important;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    white-space: nowrap;
}
</style>
