<template>
    <div id="Groupblacklist">
        <div class="title">
            <div class="title_1">班组黑名单管理</div>
        </div>
        <div class="gj">
          <p>班组编号：</p>
          <div class="kg">
            <el-input
            placeholder="请输入内容"
            size="mini"
            v-model="input10"
            clearable>  
          </el-input>
          </div>
          <div class="sa">
             <el-button class="bnt" size="mini" @click="query">
                    查询
                </el-button>
          </div>
        </div>

            <div class="Add_33">
                <el-button class="bnt" size="small" @click="Addit">
                    添加
                </el-button>
        </div>

        <!--修改弹出框-->
        <el-dialog title="修改" :visible.sync="hand"  width="40%">
            <span>
            <el-form :model="tableData2" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
                   <el-form-item label="企业组织机构代码" prop="subContractorCode" :rules="[
                      { required: true, message: '请填企业组织机构代码', trigger: 'blur' }

                  ]">
                        <el-input  disabled v-model="tableData2.subContractorCode"></el-input>
                    </el-form-item>
                    <el-form-item label="项目编号" prop="projectCode" :rules="[
                      { required: true, message: '请填项目编号', trigger: 'blur' }

                  ]">
                        <el-input disabled v-model="tableData2.projectCode"></el-input>
                    </el-form-item>
                          <el-form-item label="班组编号" prop="teamCode" :rules="[
                      { required: true, message: '请填班组编号', trigger: 'blur' }

                  ]">
                        <el-input disabled v-model="tableData2.teamCode"></el-input>
                    </el-form-item>
                    <el-form-item label="原因" prop="blackReason">
                        <el-input v-model="tableData2.blackReason"></el-input>
                    </el-form-item>
                    <el-form-item label="备注" prop="remark">
                        <el-input v-model="tableData2.remark"></el-input>
                    </el-form-item>
                </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="getCompanyData">取 消</el-button>
                <el-button type="primary" @click="modify">修 改</el-button>
            </span>
        </el-dialog>
        <!--弹出框结束-->
        <!--添加弹出框-->
        <el-dialog title="添加黑名单信息"  :visible.sync="Addition" width="40%">
            <span>
                <el-form :model="tableData1" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
                  <el-form-item label="企业组织机构代码" prop="subContractorCode" :rules="[
                      { required: true, message: '请填企业组织机构代码', trigger: 'blur' }

                  ]">
                        <el-input   v-model="tableData1.subContractorCode"></el-input>
                    </el-form-item>
                    <el-form-item label="项目编号" prop="projectCode" :rules="[
                      { required: true, message: '请填项目编号', trigger: 'blur' }

                  ]">
                        <el-input  v-model="tableData1.projectCode"></el-input>
                    </el-form-item>
                          <el-form-item label="班组编号" prop="teamCode" :rules="[
                      { required: true, message: '请填班组编号', trigger: 'blur' }

                  ]">
                        <el-input  v-model="tableData1.teamCode"></el-input>
                    </el-form-item>
                    <el-form-item label="原因" prop="blackReason">
                        <el-input v-model="tableData1.blackReason"></el-input>
                    </el-form-item>
                    <el-form-item label="备注" prop="remark">
                        <el-input v-model="tableData1.remark"></el-input>
                    </el-form-item>
                </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="Addition = false">取 消</el-button>
                <el-button type="primary" @click="add">添 加</el-button>
            </span>
        </el-dialog>
        <!--弹出框结束-->
        <div class="qb_2">
          <div class="qb_25">
        <el-table :data="tableData" style="width:100%;margin: auto;">
            <el-table-column prop="subContractorCode" label="业组织机构代码 ">
            </el-table-column>
            <el-table-column prop="projectCode" label="项目编号">
            </el-table-column>
            <el-table-column prop="teamCode" label="班组编号">
            </el-table-column>
            <el-table-column prop="blackReason" label="原因">
            </el-table-column>
              <el-table-column prop="remark" label="备注">
            </el-table-column>
             
                 <el-table-column label="修改" width="80">
                <template slot-scope="scope">
                    <span class="glyphicon glyphicon-pencil text-warning" @click="handleEdit(scope.row)"></span>
                </template>
            </el-table-column>
            <el-table-column label="删除"  width="80">
                <template slot-scope="scope">
                    <span class="glyphicon glyphicon-trash text-danger" @click="handleDelete(scope.row)"></span>
                </template>
            </el-table-column>
         
        </el-table>
        <div class="fenye_78">
              <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="1"
      layout="prev, pager, next, jumper"
      :total="totalPage">
    </el-pagination>
    </div>
    </div>
    </div>

    </div>
    
</template>

<script>
export default {
  name: "participationCompany",
  data() {
    return {
      currentPage:1,
      tiao:"10",
      yeshuo:"1",
      totalPage:+"",
      options1:[],
      uid: "",
      input10:"",
      
      options: [],
      tableData2:{},
      Addition: false,
      hand: false,
      rules: {
        name: [
          { required: true, message: "姓名", trigger: "blur" }
          //          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        number: [
          { required: true, message: "年龄不能为空" },
          { type: "number", message: "年龄必须为数字值" }
        ]
      },

      tableData: [ ],
      pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
 
      tableData1:{},
    };
  },
    created() {
    this.childMethod();
  },

  mounted() {

  },
  methods: {
    handleSizeChange(val) {
      this.tiao=` ${val}`
      this.childMethod()
      
    },
    handleCurrentChange(val) {
      this.yeshuo=` ${val}`
        this.childMethod()
    },
   query(){
     
         var that = this;
      that.axios
        .get("/apis/admin/teamBlackList/pageList", {
          params: {
            page: that.yeshuo,
            pageSize:that.tiao,
            teamCode:that.input10,
          }
        })
        .then(function(response) {
          console.log(response.data);
          that.tableData = response.data.rows;
          that.totalPage=response.data.totalPage
        });
   },
    childMethod() {

      var that = this;
      that.axios
        .get("/apis/admin/teamBlackList/pageList", {
          params: {
            page: that.yeshuo,
            pageSize:that.tiao,
          }
        })
        .then(function(response) {
          console.log(response.data);
          that.tableData = response.data.rows;
          that.totalPage=response.data.totalPage
        });
    },
    //添加按钮
    Addit() {
       var that =this
         if (JSON.stringify(that.tableData1)!=="{}") {
        that.tableData1={};
      } 
     
      
      that.Addition = true;
      
    },
    //弹框添加
    add() {
       var that = this;
      
      that.axios
        .get("/apis/admin/teamBlackList/add", {
          params: {
             subContractorCode:that.tableData1.subContractorCode,
             projectCode:that.tableData1.projectCode,
             teamCode:that.tableData1.teamCode,
             blackReason:that.tableData1.blackReason,
             remark:that.tableData1.remark,
              
          }
        })
        .then(function(response) {
          console.log(response.data);
            that.childMethod()
        });
         that.Addition = false;
    
      
     
    },
    handleItemChange(label) {
      alert(label);
    },
    getCompanyData() {
      var that =this
      that.hand = false;
       that.childMethod()
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
      that.tableData2 = row;
       that.uid=row.id

      that.hand = true;
    },
    //弹框修改按钮
    modify(){
      var that =this
      that.axios
        .get("/apis/admin/teamBlackList/update", {
          params: {
           subContractorCode:that.tableData2.subContractorCode,
             projectCode:that.tableData2.projectCode,
             teamCode:that.tableData2.teamCode,
             blackReason:that.tableData2.blackReason,
             remark:that.tableData2.remark,
             id:that.uid,
              
          }
        })
        .then(function(response) {
          console.log(response.data);
            that.childMethod()
        });
      that.hand=false

    },
    handleDelete(row) {
       var that = this;
      that.$confirm("此操作将永久删除该信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          
      that.axios
        .get("/apis/admin/teamBlackList/delete", {
          params: {
             id:row.id,
          }
        })
        .then(function(response) {
          console.log(response.data);
          that.childMethod()
        });
          that.$message({
            type: "success",
            message: "删除成功!"
            
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

<style>
#Groupblacklist{
    width: 100%;
  height: 100%;
  float: left;

    
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
.Add_33 {
  float: right;
  margin-right: 20px;
}
.block {
  width: 100%;
  height: 40px;
  float: left;
}
.fenye_78{
  position: absolute;
  right: 0px;
  bottom: 1%;
}
.qb_2{
  width: 100%;
  float: left;
  height: 70%;
  position: relative;
  border: 1px solid #ccc;
  padding-top: 1%;
}
.qb_25{
  width: 100%;
  height: 92%;
  overflow: auto;
}
.gj{
  width: 60%;
  float: left;
  margin-left: 5%;
}
.gj p{
  float: left;
  line-height: 28px;
}
.kg{
  width: 20%;
  float: left;

}
.sa{
  float: left;
  margin-left: 5%;
}
</style>