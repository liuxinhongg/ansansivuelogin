<template>
    <div id="participationCompany">
      <div class="header15">
        <div class="title">
            <div class="title_1">参建单位列表</div>

        </div>
             <div class="block_1">
          <div class="base_1">
          <div class="tj_1">项目编号：</div>
          <div class="chaxun_1">
                <el-input
      placeholder="请输入编号"
      v-model="input10"
      size="mini"
      clearable>
    </el-input>
          </div>
          </div>

            <div class="query_4">
                <el-button class="bnt" size="mini" :plain="true" @click="query">
                    查询
                </el-button>
            </div>
        </div>
<div class="Add_2">
                <el-button class="bnt" size="small" :plain="true" @click="Addit">
                    +新增参建单位
                </el-button>
            </div>
        <!--修改弹出框-->
        <el-dialog title="修改" :visible.sync="hand" width="50%">
            <span>
                  <el-form :model="tableData2" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
                   <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="项目编号" prop="projectCode" :rules="[
                    { required: true, message: '项目编号不能为空', trigger: 'blur' },
                     {  trigger: 'blur' }
                  ]">
                        <el-input  v-model="tableData2.projectCode"></el-input>
                    </el-form-item>
                    <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="企业组织机构代码" prop="subContractorCode" :rules="[
                    { required: true, message: '企业组织机构代码不能为空', trigger: 'blur' },
                     {  trigger: 'blur' }
                  ]">
                        <el-input  v-model="tableData2.subContractorCode"></el-input>
                    </el-form-item>
                                <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="项目经理姓名" prop="pmName"  :rules="[
                    { required: true, message: '项目经理姓名不能为空', trigger: 'blur' },
                     {  trigger: 'blur' }
                  ]">
                        <el-input v-model="tableData2.pmName"></el-input>
                    </el-form-item>
                           <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="证件类型" prop="credentialsId" :rules="[
                    { required: true, message: '证件类型不能为空', trigger: 'blur' },
                     {  trigger: 'blur' }
                  ]">
                            <el-select v-model="tableData2.credentialsId" placeholder="请选择" style="width:100%">
                          <el-option
                            v-for="item in options1"
                            :key="item.id"
                            :label="item.credentialsName"
                            :value="item.id">
                          </el-option>
                        </el-select>
                    </el-form-item>
                          <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="项目经理证件号" prop="pmIdCardNumber" :rules="[
                    { required: true, message: '建设项目编号不能为空', trigger: 'blur' },
                     {  trigger: 'blur' }
                  ]">
                        <el-input v-model="tableData2.pmIdCardNumber"></el-input>
                    </el-form-item>
                         <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="项目经理电话" prop="pmPhone">
                        <el-input v-model="tableData2.pmPhone"></el-input>
                    </el-form-item>
                           <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="银行账号" prop="bankNumber">
                        <el-input v-model="tableData2.bankNumber"></el-input>
                    </el-form-item>
                      <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="银行名称" prop="bankName">
                        <el-input v-model="tableData2.bankName"></el-input>
                    </el-form-item>
                       <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="银行联号" prop="bankLinkNumber">
                        <el-input v-model="tableData2.bankLinkNumber"></el-input>
                    </el-form-item>
                         <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="参建类型" prop="contractorTypeId">
                          <el-select v-model="tableData2.contractorTypeId" placeholder="请选择" style="width:100%">
                          <el-option
                            v-for="item in options"
                            :key="item.id"
                            :label="item.contractorTypeName"
                            :value="item.id">
                          </el-option>
                        </el-select>
                    </el-form-item>
                       <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="进场时间" prop="entryTime">
                          <el-date-picker
                            v-model="tableData2.entryTime"
                            type="datetime"
                            placeholder="选择日期时间"
                            align="right"
                            format="yyyy-MM-dd hh:mm:ss" value-format="yyyy-MM-dd hh:mm:ss"
                            style="width:100%"
                            :picker-options="pickerOptions1">
                          </el-date-picker>
                    </el-form-item>
                    <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="离场时间" prop="exitTime">
                          <el-date-picker
                            v-model="tableData2.exitTime"
                            type="datetime"
                            placeholder="选择日期时间"
                            align="right"
                            format="yyyy-MM-dd hh:mm:ss" value-format="yyyy-MM-dd hh:mm:ss"
                            style="width:100%"
                            :picker-options="pickerOptions1">
                          </el-date-picker>
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
        <el-dialog title="新增参建单位信息" :visible.sync="Addition" width="50%">
            <span>
                <el-form :model="tableData1" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
                   <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="项目编号" prop="projectCode" :rules="[
                    { required: true, message: '项目编号不能为空', trigger: 'blur' },
                     {  trigger: 'blur' }
                  ]">
                        <el-input  v-model="tableData1.projectCode"></el-input>
                    </el-form-item>
                    <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="企业组织机构代码" prop="subContractorCode" :rules="[
                    { required: true, message: '企业组织机构代码不能为空', trigger: 'blur' },
                     {  trigger: 'blur' }
                  ]">
                        <el-input  v-model="tableData1.subContractorCode"></el-input>
                    </el-form-item>
                    <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="项目经理姓名" prop="pmName"  :rules="[
                    { required: true, message: '项目经理姓名不能为空', trigger: 'blur' },
                     {  trigger: 'blur' }
                  ]">
                        <el-input v-model="tableData1.pmName"></el-input>
                    </el-form-item>
                  <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="证件类型" prop="credentialsId" :rules="[
                    { required: true, message: '证件类型不能为空', trigger: 'blur' },
                     {  trigger: 'blur' }
                  ]">
                            <el-select v-model="tableData1.credentialsId" placeholder="请选择" style="width:100%">
                          <el-option
                            v-for="item in options1"
                            :key="item.id"
                            :label="item.credentialsName"
                            :value="item.id">
                          </el-option>
                        </el-select>
                    </el-form-item>
                 <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="项目经理证件号" prop="pmIdCardNumber" :rules="[
                    { required: true, message: '建设项目编号不能为空', trigger: 'blur' },
                     {  trigger: 'blur' }
                  ]">
                        <el-input v-model="tableData1.pmIdCardNumber"></el-input>
                    </el-form-item>
                         <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="项目经理电话" prop="pmPhone">
                        <el-input v-model="tableData1.pmPhone"></el-input>
                    </el-form-item>
                 <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="银行账号" prop="bankNumber">
                        <el-input v-model="tableData1.bankNumber"></el-input>
                    </el-form-item>
                      <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="银行名称" prop="bankName">
                        <el-input v-model="tableData1.bankName"></el-input>
                    </el-form-item>
                       <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="银行联号" prop="bankLinkNumber">
                        <el-input v-model="tableData1.bankLinkNumber"></el-input>
                    </el-form-item>
                         <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="参建类型" prop="contractorTypeId">
                          <el-select v-model="tableData1.contractorTypeId" placeholder="请选择" style="width:100%">
                          <el-option
                            v-for="item in options"
                            :key="item.id"
                            :label="item.contractorTypeName"
                            :value="item.id">
                          </el-option>
                        </el-select>
                    </el-form-item>
                       <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="进场时间" prop="entryTime">
                          <el-date-picker
                            v-model="tableData1.entryTime"
                            type="datetime"
                            placeholder="选择日期时间"
                            align="right"
                            format="yyyy-MM-dd hh:mm:ss" value-format="yyyy-MM-dd hh:mm:ss"
                            style="width:100%"
                            :picker-options="pickerOptions1">
                          </el-date-picker>
                    </el-form-item>
                    <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="离场时间" prop="exitTime">
                          <el-date-picker
                            v-model="tableData1.exitTime"
                            type="datetime"
                            placeholder="选择日期时间"
                            align="right"
                            format="yyyy-MM-dd hh:mm:ss" value-format="yyyy-MM-dd hh:mm:ss"
                            style="width:100%"
                            :picker-options="pickerOptions1">
                          </el-date-picker>
                    </el-form-item>
                </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="Addition = false">取 消</el-button>
                <el-button type="primary" @click="add">添 加</el-button>
            </span>
        </el-dialog>
        <!--弹出框结束-->
        <el-table :data="tableData" style="width:100%;margin: auto;">
            <el-table-column prop="projectCode" :show-overflow-tooltip="true" width="150"  label="项目编号 ">
            </el-table-column>
            <el-table-column prop="projectName" :show-overflow-tooltip="true"  width="150"  label=" 项目名称">
            </el-table-column>
            <el-table-column prop="subContractorCode" :show-overflow-tooltip="true"  width="140"  label="企业组织机构代码">
            </el-table-column>
            <el-table-column prop="subContractorName" :show-overflow-tooltip="true" width="150"  label="企业名称">
            </el-table-column>
             <el-table-column prop="entryTime" width="160"  :show-overflow-tooltip="true" label="进场时间">
            </el-table-column>
             <el-table-column prop="exitTime"  width="160" :show-overflow-tooltip="true"  label="离场时间">
            </el-table-column>
             <el-table-column prop="bankName" width="150" :show-overflow-tooltip="true"  label="银行名称">
            </el-table-column>
            <el-table-column prop="bankNumber"  width="150"  :show-overflow-tooltip="true" label="银行账号">
            </el-table-column>
             <el-table-column prop="bankLinkNumber"  width="150" :show-overflow-tooltip="true"  label="银行联号">
            </el-table-column>
                <el-table-column prop="pmName" width="150" :show-overflow-tooltip="true" label="项目经理姓名">
            </el-table-column>
              <el-table-column prop="pmIdCardNumber" width="150" :show-overflow-tooltip="true"  label="项目经理证件号">
            </el-table-column>
                   <el-table-column prop="pmPhone" width="150" :show-overflow-tooltip="true"  label="项目经理电话">
            </el-table-column>
                 <el-table-column prop="contractorType.contractorTypeName" width="150" :show-overflow-tooltip="true" label="参建类型">
            </el-table-column>
               <el-table-column prop="credentials.credentialsName" width="150" :show-overflow-tooltip="true"  label="证件类型">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="修改"
              width="85">
               <template slot-scope="scope">
                     <span class="glyphicon glyphicon-pencil text-warning" @click="handleEdit(scope.row)"></span> 
                </template>
            </el-table-column>
                      <el-table-column
              fixed="right"
              label="删除"
              width="85">
               <template slot-scope="scope">
                   <span class="glyphicon glyphicon-trash text-danger" @click="handleDelete(scope.row)"></span>
                </template>
            </el-table-column>
        </el-table>
        <div class="fenye_5">
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
    
</template>

<script>
export default {
  name: "participationCompany",
  data() {
    return {
      currentPage: 1,
      totalPage:+"",
      options1:[],
      uid: "",
      options: [],
      input10:"",
      input11:"",
      tiao:"8",
      yeshuo:"1",
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
    //分页
    handleSizeChange(val) {
      var that =this
      that.tiao=` ${val} `
      that.childMethod()
    },
    handleCurrentChange(val) {
       var that =this
      that.yeshuo=`${val}`
       that.childMethod()
    },
    
    //查询
    query(){
       var that = this;
      that.axios
        .get("/apis/admin/projectSubContractor/pageList", {
          params: {
            page: that.yeshuo,
            pageSize: that.tiao,
            projectCode:that.input10,

            
          }
        })
        .then(function(response) {
          console.log(response.data);
          that.totalPage=response.data.totalPage
          that.tableData = response.data.rows;
        });
      
    },
    childMethod() { 

      var that = this;
      that.axios
        .get("/apis/admin/projectSubContractor/pageList", {
          params: {
            page: that.yeshuo,
            pageSize: that.tiao,
          }
        })
        .then(function(response) {
          console.log(response.data);
          that.totalPage=response.data.totalPage
          that.tableData = response.data.rows;
        });
    },
    //添加按钮
    Addit() {
      var that =this
      that.Addition = true;

        if (JSON.stringify(that.tableData1)!=="{}") {
        that.tableData1={};
      } 
         that.axios
          .get("/apis/front/public/loadCredentialsList")  //证件下拉框
          .then(function(response) {
            console.log(response.data);
            that.options1=response.data.credentialsList
           
          });
          that.axios
          .get("/apis/front/public/loadContractorTypeList")  //参建类型下拉框
          .then(function(response) {
            console.log(response.data);
            that.options=response.data.contractorTypeList
           
          });
    },
    //弹框
    add() {
       var that = this;
      that.axios
        .get("/apis/admin/projectSubContractor/add", {
          params: {
            projectCode:that.tableData1.projectCode,
            subContractorCode:that.tableData1.subContractorCode,
            entryTime:that.tableData1.entryTime,
             exitTime:that.tableData1.exitTime,
             bankName:that.tableData1.bankName,
             bankNumber:that.tableData1.bankNumber,
             bankLinkNumber:that.tableData1.bankLinkNumber,
             pmName:that.tableData1.pmName,
             pmIdCardNumber:that.tableData1. pmIdCardNumber,
             pmPhone:that.tableData1.pmPhone,
             contractorTypeId:that.tableData1.contractorTypeId,
             credentialsId:that.tableData1.credentialsId, 
              
          }
        })
        .then(function(response) {
          console.log(response.data);
            that.childMethod()
            if (response.data.code=="0") {
               that.$message.error(response.data.message);

            }
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
        that.axios
          .get("/apis/front/public/loadCredentialsList")  //证件下拉框
          .then(function(response) {
            console.log(response.data);
            that.options1=response.data.credentialsList
           
          });
          that.axios
          .get("/apis/front/public/loadContractorTypeList")  //参建类型下拉框
          .then(function(response) {
            console.log(response.data);
            that.options=response.data.contractorTypeList
           
          });
      that.hand = true;
    },
    //弹框修改按钮
    modify(){
      var that =this
      that.axios
        .get("/apis/admin/projectSubContractor/update", {
          params: {
            projectCode:that.tableData2.projectCode,
            subContractorCode:that.tableData2.subContractorCode,
            entryTime:that.tableData2.entryTime,
             exitTime:that.tableData2.exitTime,
             bankName:that.tableData2.bankName,
             bankNumber:that.tableData2.bankNumber,
             bankLinkNumber:that.tableData2.bankLinkNumber,
             pmName:that.tableData2.pmName,
             pmIdCardNumber:that.tableData2. pmIdCardNumber,
             pmPhone:that.tableData2.pmPhone,
             contractorTypeId:that.tableData2.contractorTypeId,
             credentialsId:that.tableData2.credentialsId, 
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
        .get("/apis/admin/projectSubContractor/delete", {
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
#participationCompany{
  height: 100%;
  position: relative;
}
.header15{
  height: 88%;
  overflow: auto;
}
.query_4{
  width: 10%;
  margin-right: 30%;
  float: left;

}
.title_1{
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    
}
.fenye_5{
  position: absolute;
  right: 0px;
  bottom: 1%;

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
.Add_2 {
  float: right;
}
.block_1 {
  width: 100%;
  height: 40px;
  float: left;
}
.base_1{
   width: 23%;
  height: 28px;
  margin-left: 3%;
  float: left;
  
}
.tj_1{
   float: left;
  line-height: 28px;

}
.chaxun_1{
   width: 62%;
  float: left;
  
}
</style>