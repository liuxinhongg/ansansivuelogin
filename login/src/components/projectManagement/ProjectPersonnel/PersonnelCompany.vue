<template>
    <div id="PersonnelCompany">
        <div class="title">
            <div class="title_1">项目人员</div>

        </div>
        <div class="block">
            <div class="Add_84">
                <el-button class="bnt" size="small" @click="Addit">
                    添加
                </el-button>
            </div>
        </div>

        <!--修改弹出框-->
        <el-dialog title="劳务班组" :visible.sync="hand" width="40%">
            <span>
                   <el-form :model="tableData1" :rules="rules" ref="ruleForm"  label-width="110px" class="demo-ruleForm">
                   <el-form-item label="承包单位" prop="GeneralContractorCode">
                        <el-input v-model="tableData1.GeneralContractorCode"></el-input>
                    </el-form-item>
                    <el-form-item label="项目名称" prop="ProjectName">
                        <el-input v-model="tableData1.ProjectName"></el-input>
                    </el-form-item>
                    <el-form-item label="项目地点" prop="AreaCode">
                        <el-input v-model="tableData1.AreaCode"></el-input>
                    </el-form-item>
                    <el-form-item label="项目状态" prop="ProjectStatus">
                        <el-input v-model="tableData1.ProjectStatus"></el-input>
                    </el-form-item>
                    <el-form-item label="项目规模" prop="BuildingScale">
                        <el-input v-model="tableData1.BuildingScale"></el-input>
                    </el-form-item>
                    <el-form-item label="承包合同额" prop="TotalContractAmt">
                        <el-input v-model="tableData1.TotalContractAmt"></el-input>
                    </el-form-item>
                       <el-form-item label="项目活动类型" prop="ProjectActivitvType">
                        <el-input v-model="tableData1.ProjectActivitvType"></el-input>
                    </el-form-item>
                       <el-form-item label="建筑面积" prop="BuildingArea">
                        <el-input v-model="tableData1.BuildingArea"></el-input>
                    </el-form-item>
                      <el-form-item label="是否重点项目">
                        <el-radio-group v-model="tableData1.IsMajorProject">
                        <el-radio label="是"></el-radio>
                        <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                       <el-form-item label="开工日期" prop="StartDate">
                     <el-date-picker
                        v-model="tableData1.StartDate"
                        type="date"
                        placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                       <el-form-item label="竣工日期" prop="CompleteDate">
                        <el-date-picker
                        v-model="tableData1.CompleteDate"
                        type="date"
                        placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                      <el-form-item label="项目简介" prop="ProjectDescription">
                          <el-input type="textarea" v-model="tableData1.ProjectDescription"></el-input>
                    </el-form-item>
                    
                </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="getCompanyData">取 消</el-button>
                <el-button type="primary" @click="hand = false">添 加</el-button>
            </span>
        </el-dialog>
        <!--弹出框结束-->
        <!--添加弹出框-->
        <el-dialog title="新增项目信息" :visible.sync="Addition"  width="50%">
            <span>
                <el-form :model="tableData1" :rules="rules" ref="ruleForm" label-width="110px" class="demo-ruleForm">
                   <el-form-item label="承包单位" prop="GeneralContractorCode">
                        <el-input v-model="tableData1.GeneralContractorCode"></el-input>
                    </el-form-item>
                    <el-form-item label="项目名称" prop="ProjectName">
                        <el-input v-model="tableData1.ProjectName"></el-input>
                    </el-form-item>
                    <el-form-item label="项目地点" prop="AreaCode">
                        <el-input v-model="tableData1.AreaCode"></el-input>
                    </el-form-item>
                    <el-form-item label="项目状态" prop="ProjectStatus">
                        <el-input v-model="tableData1.ProjectStatus"></el-input>
                    </el-form-item>
                    <el-form-item label="项目规模" prop="BuildingScale">
                        <el-input v-model="tableData1.BuildingScale"></el-input>
                    </el-form-item>
                    <el-form-item label="承包合同额" prop="TotalContractAmt">
                        <el-input v-model="tableData1.TotalContractAmt"></el-input>
                    </el-form-item>
                       <el-form-item label="项目活动类型" prop="ProjectActivitvType">
                        <el-input v-model="tableData1.ProjectActivitvType"></el-input>
                    </el-form-item>
                       <el-form-item label="建筑面积" prop="BuildingArea">
                        <el-input v-model="tableData1.BuildingArea"></el-input>
                    </el-form-item>
                      <el-form-item label="是否重点项目">
                        <el-radio-group v-model="tableData1.IsMajorProject">
                        <el-radio label="是"></el-radio>
                        <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                       <el-form-item label="开工日期" prop="StartDate">
                     <el-date-picker
                        v-model="tableData1.StartDate"
                        type="date"
                        placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                       <el-form-item label="竣工日期" prop="CompleteDate">
                        <el-date-picker
                        v-model="tableData1.CompleteDate"
                        type="date"
                        placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                      <el-form-item label="项目简介" prop="ProjectDescription">
                          <el-input type="textarea" v-model="tableData1.ProjectDescription"></el-input>
                    </el-form-item>
                    
                </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="Addition = false">取 消</el-button>
                <el-button type="primary" @click="add">添 加</el-button>
            </span>
        </el-dialog>
        <!--弹出框结束-->
        <el-table :data="tableData" style="width: 95%;margin: auto;">
            <el-table-column prop="ProjectName" label="项目名称">
            </el-table-column>
            <el-table-column prop="GeneralContractorCode" label=" 承包单位 ">
            </el-table-column>
            <el-table-column prop="ProjectActivitvType" label="项目类型">
            </el-table-column>
            <el-table-column prop="IsMajorProject" label="是否重点项目">
            </el-table-column>
            <el-table-column prop="StartDate" label="开工日期">
            </el-table-column>
             <el-table-column prop="ProjectStatus" label="状态">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <span class="glyphicon glyphicon-pencil text-warning" @click="handleEdit(scope.row)"></span>
                    &nbsp;&nbsp;
                    <span class="glyphicon glyphicon-trash text-danger" @click="handleDelete(scope.$index)"></span>
                </template>
            </el-table-column>
        </el-table>
        <div class="page" style="width: 95%; margin: auto;">
        </div>
  
    </div>
</template>

<script>
export default {
  name: "PersonnelCompany",
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      uid: "",
      options: [],
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

      tableData: [
        {
          GeneralContractorCode: "云南",
          ProjectActivitvType: "哈哈哈",
          ProjectName: "云南建设",
          IsMajorProject: "是",
          StartDate: "2018-10.1",
          ProjectStatus: "正常"
        },
        {
          GeneralContractorCode: "云南",
          ProjectActivitvType: "哈哈哈",
          ProjectName: "云南建设",
          IsMajorProject: "是",
          StartDate: "2018-10.1",
          ProjectStatus: "正常"
        },
        {
          GeneralContractorCode: "云南",
          ProjectActivitvType: "哈哈哈",
          ProjectName: "云南建设",
          IsMajorProject: "是",
          StartDate: "2018-10.1",
          ProjectStatus: "正常"
        },
        {
          GeneralContractorCode: "云南",
          ProjectActivitvType: "哈哈哈",
          ProjectName: "云南建设",
          IsMajorProject: "是",
          StartDate: "2018-10.1",
          ProjectStatus: "正常"
        }
      ],
      tableData1: [
        {
          id: "",
          name: "",
          address: "",
          number: "",
          work: ""
        }
      ]
    };
  },

  mounted() {
    bus.$on("show", data => {
      console.log(data.id);
      this.uid = data.id;
    });
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
    childMethod() {
      bus.$on("show", data => {
        console.log(data.id);
        this.uid = data.id;
      });

      //   var that = this;
      //   that.axios
      //     .get("/admin/user/pageList", {
      //       params: {
      //         page: 1,
      //         pageSize: 10,
      //         menuId: that.uid
      //       }
      //     })
      //     .then(function(response) {
      //       console.log(response.data.rows);
      //       that.tableData = response.data.rows;
      //     });
    },
    Addit() {
      this.Addition = true;
      this.tableData1 = {
        id: "",
        name: "",
        address: "",
        number: "",
        work: ""
      };
    },
    add() {
      this.Addition = false;
      this.tableData.push(this.tableData1);
    },
    handleItemChange(label) {
      alert(label);
    },
    getCompanyData() {
      this.hand = false;
      this.tableData = [];
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
    handleEdit(row) {
      this.tableData1 = row;
      console.log(row.id);
      this.hand = true;
    },
    handleDelete(index) {
      this.$confirm("此操作将永久删除该劳务人员信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.tableData.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  created() {
    // this.getCompanyData();
  }
};
</script>

<style>
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
.Add_84 {
  float: right;
  margin-right: 2%;
}
.block {
  width: 100%;
  height: 40px;
  float: left;
}

</style>