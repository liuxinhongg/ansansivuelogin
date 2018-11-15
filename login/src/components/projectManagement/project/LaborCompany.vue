<template>
    <div id="LaborCompany">
      <div class="header_45">
        <div class="title">
            <div class="title_1">项目列表</div>

        </div>
        <div class="block">
          <div class="base">
          <div class="tj">项目名称：</div>
          <div class="chaxun">
                <el-input
      placeholder="请输入名称"
      v-model="input10"
      size="mini"
      clearable>
    </el-input>
          </div>
          </div>
                    <div class="base">
          <div class="tj">状态：</div>
          <div class="chaxun">
              <el-select  size="mini" v-model="input11" clearable placeholder="请选择状态" >
                  <el-option label="筹备" value="筹备"></el-option>
                  <el-option label="立项" value="立项"></el-option>
                  <el-option label="在建" value="在建"></el-option>
                  <el-option label="完工" value="完工"></el-option>
                  <el-option label="停工" value="停工"></el-option>
                </el-select>
          </div>
          </div>
                    <!-- <div class="base">
          <div class="tj">项目类型：</div>
          <div class="chaxun">
       <el-select v-model="value4" size="mini" clearable placeholder="请选择">
    <el-option
      v-for="item in Projecttype"
      :key="item.id"
      :label="item.projectCategoryName"
      :value="item.id">
    </el-option>
  </el-select>
          </div>
          </div> -->
            <div class="query_11">
                <el-button class="bnt" size="mini" :plain="true" @click="query">
                    查询
                </el-button>
            </div>
        </div>
        <div class="Add_1">
                <el-button class="bnt" size="mini" :plain="true" @click="Addit">
                    添加
                </el-button>
            </div>

        <!--修改弹出框-->
        <el-dialog title="项目信息修改" :visible.sync="hand" width="50%">
            <span>
               <el-form :model="tableData2" :rules="rules" ref="ruleForm" label-width="160px" class="demo-ruleForm">
                    <el-form-item label="项目编号：" style='width: 50%; float: left;padding-right: 30px;'  prop="projectCode" :rules="[
                    { required: true, message: '项目编号不能为空', trigger: 'blur' },
                     {  trigger: 'blur' }
                  ]">
                        <el-input disabled v-model="tableData2.projectCode"></el-input>
                    </el-form-item>
                    
                         <el-form-item label="建设项目编号：" style='width: 50%; float: left;padding-right: 30px;' prop="buildProjectCode" :rules="[
                    { required: true, message: '建设项目编号不能为空', trigger: 'blur' },
                     {  trigger: 'blur' }
                  ]">
                        <el-input disabled  v-model="tableData2.buildProjectCode"></el-input>
                    </el-form-item>  
                     <el-form-item style='width: 100%; float: left;padding-right: 30px;' label="项目名称：" prop="projectName" :rules="[
                    { required: true, message: '项目名称不能为空', trigger: 'blur' },
                     {  trigger: 'blur' }
                  ]" >
                        <el-input disabled  v-model="tableData2.projectName"></el-input>
                    </el-form-item>
                       <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="项目分类：" prop="projectCategoryId">
                        
                         <el-select v-model="tableData2.projectCategoryId" placeholder="请选择"  style="width:100%">
                            <el-option
                              v-for="item in options1"
                              :key="item.id"
                              :label="item.projectCategoryName"
                              :value="item.id">
                            </el-option>
                          </el-select>
                    </el-form-item>
                          <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="项目状态：">
                    <el-select v-model="tableData2.projectStatus" placeholder="请选择项目状态" style="width:100%">
                      <el-option label="筹备" value="筹备"></el-option>
                      <el-option label="立项" value="立项"></el-option>
                      <el-option label="在建" value="在建"></el-option>
                      <el-option label="完工" value="完工"></el-option>
                      <el-option label="停工" value="停工"></el-option>
                    </el-select>
                  </el-form-item>
                        <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="项目活动类型：" prop="projectActivityTypeId">
                        <el-select v-model="tableData2.projectActivityTypeId" placeholder="请选择"  style="width:100%">
                            <el-option
                              v-for="item in options"
                              :key="item.id"
                              :label="item.projectActivityTypeName"
                              :value="item.id">
                            </el-option>
                          </el-select>
                    </el-form-item>
                   <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="项目来源：" prop="proectSource">
                        <el-input v-model="tableData2.proectSource"></el-input>
                    </el-form-item>
                      <el-form-item label="项目ip地址" prop="ipUrl" style='width: 50%; float: left;padding-right: 30px;'>
                      <el-input disabled v-model="tableData2.ipUrl"></el-input>
                    </el-form-item>
                          
                        <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="是否重点项目：">
                      <el-radio-group v-model="tableData2.isMajorProject">
                        <el-radio :label="1">是</el-radio>
                        <el-radio :label="0">否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    
                    <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="承包方编号：" prop="departmentCode">
                      <el-input v-model="tableData2.departmentCode"></el-input>
                    </el-form-item>
                      <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="建设单位名称：" prop="ownerName">
                        <el-input v-model="tableData2.ownerName"></el-input>
                    </el-form-item>
                    <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="建设单位组织机构代码：" prop="buildCorporationCode">
                        <el-input v-model="tableData2.buildCorporationCode"></el-input>
                    </el-form-item>
                       <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="施工许可证编号：" prop="builderLicenceNum">
                        <el-input v-model="tableData2.builderLicenceNum"></el-input>
                    </el-form-item>
                     <el-form-item style='width: 100%; float: left;padding-right: 30px;' label="施工所在地：" prop="areaCode">
                        <!-- <el-input v-model="tableData2.areaCode"></el-input> -->
                           <v-distpicker :province="user.xtrysf"
                         :city="user.xtrycs"
                        province-city-area
                        :area="user.xtrte"
                          @province="onChangeProvince"
                          @city="onChangeCity"
                          @area="onChangeArea"
                          style="width:100%"></v-distpicker>
                    </el-form-item>
                      <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="承包合同额：" prop="totalContractAmt">
                        <el-input v-model="tableData2.totalContractAmt"></el-input>
                    </el-form-item>
                      <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="建设规模：" prop="buildingScale">
                        <el-input v-model="tableData2.buildingScale"></el-input>
                    </el-form-item>
                          <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="建筑面积：" prop="buildingArea">
                        <el-input v-model="tableData2.buildingArea"></el-input>
                    </el-form-item>
                        <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="开工日期：" >
                     <el-date-picker
                        v-model="tableData2.startDate"
                        format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                        type="date"
                        placeholder="选择日期">
                        </el-date-picker >
                    </el-form-item>
                       <el-form-item  label="竣工日期：" prop="CompleteDate" style='width: 50%; float: left;padding-right: 30px;'>
                        <el-date-picker
                        v-model="tableData2.completeDate"
                        format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                        type="date"
                        placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                    
      

                 
                    <el-form-item label="项目简介：" style='width: 50%; float: left;padding-right: 30px;' prop="projectDescription">
                        <el-input  type="textarea"  v-model="tableData2.projectDescription"></el-input>
                    </el-form-item>
                </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="getCompanyData" size='mini'>取 消</el-button>
                <el-button type="primary" @click="modify" size='mini'>修 改</el-button>
            </span>
        </el-dialog>
        <!--弹出框结束-->
        <!--添加弹出框-->
        <el-dialog title="新增项目信息" :visible.sync="Addition"  width="50%">
            <span>
                  <el-form :model="tableData1" ref="ruleForm" label-width="160px" class="demo-ruleForm" status-icon>
                   <el-form-item label="项目编号：" style='width: 50%; float: left;padding-right: 30px;'  prop="projectCode" :rules="[
                    { required: true, message: '项目编号不能为空', trigger: 'blur' },
                     {  trigger: 'blur' }
                  ]">
                        <el-input  v-model="tableData1.projectCode"></el-input>
                    </el-form-item>
                    
                         <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="建设项目编号：" prop="buildProjectCode" :rules="[
                    { required: true, message: '建设项目编号不能为空', trigger: 'blur' },
                     {  trigger: 'blur' }
                  ]">
                        <el-input   v-model="tableData1.buildProjectCode"></el-input>
                    </el-form-item>  
                     <el-form-item  style='width: 100%; float: left;padding-right: 30px;'label="项目名称：" prop="projectName" :rules="[
                    { required: true, message: '项目名称不能为空', trigger: 'blur' },
                     {  trigger: 'blur' }
                  ]" >
                        <el-input   v-model="tableData1.projectName"></el-input>
                    </el-form-item>
                       <el-form-item style='width: 50%; float: left;padding-right: 30px;'label="项目分类：" prop="projectCategoryId">
                        
                         <el-select v-model="tableData1.projectCategoryId" placeholder="请选择"  style="width:100%">
                            <el-option
                              v-for="item in options1"
                              :key="item.id"
                              :label="item.projectCategoryName"
                              :value="item.id">
                            </el-option>
                          </el-select>
                    </el-form-item>
                          <el-form-item label="项目状态："style='width: 50%; float: left;padding-right: 30px;'>
                    <el-select v-model="tableData1.projectStatus" placeholder="请选择项目状态" style="width:100%">
                      <el-option label="筹备" value="筹备"></el-option>
                      <el-option label="立项" value="立项"></el-option>
                      <el-option label="在建" value="在建"></el-option>
                      <el-option label="完工" value="完工"></el-option>
                      <el-option label="停工" value="停工"></el-option>
                    </el-select>
                  </el-form-item>
                        <el-form-item style='width: 50%; float: left;padding-right: 30px;'label="项目活动类型：" prop="projectActivityTypeId">
                        <el-select v-model="tableData1.projectActivityTypeId" placeholder="请选择"  style="width:100%">
                            <el-option
                              v-for="item in options"
                              :key="item.id"
                              :label="item.projectActivityTypeName"
                              :value="item.id">
                            </el-option>
                          </el-select>
                    </el-form-item>
                   <el-form-item style='width: 50%; float: left;padding-right: 30px;'label="项目来源：" prop="proectSource">
                        <el-input v-model="tableData1.proectSource"></el-input>
                    </el-form-item>
                      <el-form-item style='width: 50%; float: left;padding-right: 30px;'label="项目ip地址：" prop="ipUrl"  :rules="[
                    { required: true, message: '项目ip地址不能为空', trigger: 'blur' },
                     {  trigger: 'blur' }
                  ]" >
                      <el-input  v-model="tableData1.ipUrl"></el-input>
                    </el-form-item>
                          
                        <el-form-item style='width: 50%; float: left;padding-right: 30px;'label="是否重点项目：">
                      <el-radio-group v-model="tableData1.isMajorProject">
                        <el-radio :label="1">是</el-radio>
                        <el-radio :label="0">否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    
                    <el-form-item style='width: 50%; float: left;padding-right: 30px;'label="承包方编号：" prop="departmentCode" :rules="[
                    { required: true, message: '承包方编号不能为空', trigger: 'blur' },
                     {  trigger: 'blur' }
                  ]" >
                      <el-input v-model="tableData1.departmentCode"></el-input>
                    </el-form-item>
                      <el-form-item style='width: 50%; float: left;padding-right: 30px;'label="建设单位名称：" prop="ownerName">
                        <el-input v-model="tableData1.ownerName"></el-input>
                    </el-form-item>
                    <el-form-item style='width: 50%; float: left;padding-right: 30px;'label="建设单位组织机构代码：" prop="buildCorporationCode">
                        <el-input v-model="tableData1.buildCorporationCode"></el-input>
                    </el-form-item>
                       <el-form-item style='width: 50%; float: left;padding-right: 30px;'label="施工许可证编号：" prop="builderLicenceNum">
                        <el-input v-model="tableData1.builderLicenceNum"></el-input>
                    </el-form-item>
                <el-form-item style='width: 100%; float: left;padding-right: 30px;'label="施工所在地：" prop="areaCode">
                        <!-- <el-input v-model="tableData1.areaCode"></el-input> -->
                   
                                 <v-distpicker :province="user.sf"
                         :city="user.s"
                        province-city-area
                          :area="user.x"
                          @province="Province"
                          @city="City"
                          @area="Area"
                          style="width:100%"></v-distpicker>
                    </el-form-item>
                      <el-form-item style='width: 50%; float: left;padding-right: 30px;'label="承包合同额：" prop="totalContractAmt">
                        <el-input v-model="tableData1.totalContractAmt"></el-input>
                    </el-form-item>
                      <el-form-item style='width: 50%; float: left;padding-right: 30px;'label="建设规模：" prop="buildingScale">
                        <el-input v-model="tableData1.buildingScale"></el-input>
                    </el-form-item>
                          <el-form-item style='width: 50%; float: left;padding-right: 30px;'label="建筑面积：" prop="buildingArea">
                        <el-input v-model="tableData1.buildingArea"></el-input>
                    </el-form-item>
                        <el-form-item label="开工日期：" style='width: 50%; float: left;padding-right: 30px;'>
                     <el-date-picker
                        v-model="tableData1.startDate"
                        format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                        type="date"
                        placeholder="选择日期">
                        </el-date-picker >
                    </el-form-item>
                       <el-form-item style='width: 50%; float: left;padding-right: 30px;' label="竣工日期：" prop="CompleteDate" >
                        <el-date-picker
                        v-model="tableData1.completeDate"
                        format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                        type="date"
                        placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                         
                    <el-form-item style='width: 50%; float: left;padding-right: 30px;'label="项目简介：" prop="projectDescription">
                        <el-input  type="textarea"  v-model="tableData1.projectDescription"></el-input>
                    </el-form-item>
                </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="qu(ruleForm)" size='mini'>取 消</el-button>
                <el-button type="primary" @click="add(ruleForm)" size='mini'>添 加</el-button>
            </span>
        </el-dialog>
        <!--弹出框结束-->
        <el-table :data="tableData" style="width: 95%;margin: auto;cursor: pointer;">
            <el-table-column prop="projectName" :show-overflow-tooltip="true"  width="200" label="项目名称">
            </el-table-column>
            <el-table-column prop="ownerName" :show-overflow-tooltip="true" label="承包单位" width="120">
            </el-table-column>
            <el-table-column prop="projectCategory.projectCategoryName" :show-overflow-tooltip="true" label="项目类型" width="120">
            </el-table-column>
            <el-table-column prop="isMajorProject" :show-overflow-tooltip="true" label="是否重点项目" width="120" >
            </el-table-column>
            <el-table-column prop="startDate" :show-overflow-tooltip="true" label="开工日期" width="120">
            </el-table-column>
             <el-table-column prop="projectStatus"  :show-overflow-tooltip="true" label="状态">
            </el-table-column>

             <el-table-column
              fixed="right"
              label="查看项目"
              width="80">
               <template slot-scope="scope">
                 <span class="el-icon-view" @click="See(scope.row)"></span>
                </template>
            </el-table-column>
            <el-table-column
              fixed="right"
              label="修改"
              width="50">
               <template slot-scope="scope">
                     <span class="glyphicon glyphicon-pencil text-warning" @click="handleEdit(scope.row)"></span> 
                </template>
            </el-table-column>
                      <!--<el-table-column
              fixed="right"
              label="删除"
              width="50">
               <template slot-scope="scope">
                   <span class="glyphicon glyphicon-trash text-danger" @click="handleDelete(scope.row)"></span>
                </template>
            </el-table-column>-->
          
        </el-table>
        <div class="page" style="width: 95%; margin: auto;">
        </div>
                 <div class="fenye_1">
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
  <el-dialog
  title="提示"
  :visible.sync="centerDialogVisible"
  width="30%"
  center>
  <span style="font-size: 16px; text-align: center;">该项目暂不允许访问</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false" size="mini">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false" size="mini">确 定</el-button>
  </span>
</el-dialog>
    </div>
</template>

<script>
export default {
  name: "LaborCompany",
  data() {
    return { 
    	centerDialogVisible:false,
      currentPage:1,    //初始第几页
      totalPage:+"", //总数 
      tiao:"10",   //每页多少条
      yeshuo:"1", //页数
      user:[],
      ziid:"",
      input10:"",
      uid: "1",
      StartDate:"",
      rowid:"",
      Projecttype:[],
      value4:"",
      options: [],
      options1:[],
      tableData2:{},
       value: '',
       input11:"",
       value1:"",
       value2:"",
       value3:"",
       dizhi:"",
       province:"",
       city:"",
       ruleForm:{},
       area:"",
       region:"",
      props:{
         label:'name',
            value:'id',
            children: 'children'
      },
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

      tableData: [],
      tableData1:{}
    };
  },


    mounted() {
      var that =this
    that.list()

         

        that.axios
          .get("/apis/admin/projectMaster/pageList", {
            params: {
               page: that.yeshuo,
              pageSize: that.tiao,
              departmentId:that.uid
              
            }
          })
          .then(function(response) {
            console.log(response.data.rows);
             that.totalPage=response.data.totalPage
             that.tableData = response.data.rows
            
            var array =that.tableData
            for (let i = 0; i < array.length; i++) {
                if (array[i].isMajorProject=="1") {

                   array[i].isMajorProject="是"
                  
                } else if(array[i].isMajorProject=="0"){

                  array[i].isMajorProject="否"

                }
               
            }
            
            
          });
    
         that.axios
          .get("/apis/front/public/loadProjectCategoryList")
          .then(function(response) {
            console.log(response.data);
            that.Projecttype= response.data.projectCategoryList;
          });

          //  that.region+=that.province+","+that.city+","+that.area

  },
  methods: {
    See(row){
    	var ipurl=row.ipUrl;
    	if(row.ipUrl==null){
    		this.centerDialogVisible=true
    	}else{
    	var that =this
        that.axios
          .get("/apis/front/public/loadUserIdAndRoleId")
          .then(function(response) {
            console.log(response.data);
             var re=response.data.roleId
             var de=response.data.userId
             var we=row.id
             var mydata={roleId:re,userId:de,projectId:we};
            
            $.ajax({ 
              url: 'http://'+ipurl+'/front/userLogin/login', 
              type: 'GET', 
               dataType: 'JSONP',
               data:mydata,
              jsonpCallback: "callback",
              success: function (res) { 
                 console.log(res);
                   if (res.code=="1") {
		             window.location.href='http://'+ipurl;
//		              window.location.href='http://localhost:8081';

		            } 
              } 
            })    
          });
    	}

          
      
    },
   
         libiao(){
       var that =this
     
        that.axios
          .get("/apis/admin/projectMaster/pageList", {
            params: {
              page: that.yeshuo,
              pageSize: that.tiao,
              departmentId:that.uid
              
            }
          })
          .then(function(response) {
            console.log(response.data.rows);
             that.totalPage=response.data.totalPage
             that.tableData = response.data.rows
            
            var array =that.tableData
            for (let i = 0; i < array.length; i++) {
                if (array[i].isMajorProject=="1") {

                   array[i].isMajorProject="是"
                  
                } else if(array[i].isMajorProject=="0"){

                  array[i].isMajorProject="否"

                }
               
            }
            
            
          });

     },
      list(){
    
    bus.$on("project", data => {
      var that = this;
      that.uid = data.id;
      console.log(that.uid)
      that.ziid=data.state
   
    
        that.axios
          .get("/apis/admin/projectMaster/pageList", {
            params: {
               page: that.yeshuo,
              pageSize: that.tiao,
              departmentId:that.uid
              
            }
          })
          .then(function(response) {
            console.log(response.data.rows);
             that.totalPage=response.data.totalPage
             that.tableData = response.data.rows
            
            var array =that.tableData
            for (let i = 0; i < array.length; i++) {
                if (array[i].isMajorProject=="1") {

                   array[i].isMajorProject="是"
                  
                } else if(array[i].isMajorProject=="0"){

                  array[i].isMajorProject="否"

                }
               
            }
            
            
          });
      });
  },
    //地区
    onChangeProvince(data) {
      this.user.xtrysf = data.value
       this.province=this.user.xtrysf
       console.log(this.province)
       

       
     },
onChangeCity(data) {
      this.user.xtrycs = data.value
      this.city=this.user.xtrycs
      console.log(this.city)
    },
    onChangeArea(data){
      this.user.xtrte=data.value
       this.area=this.user.xtrte
       console.log(this.area)
    },
//添加地区
    Province(data){
      var that =this
      that.user.sf = data.value
      that.sheng= that.user.sf
        console.log(that.sheng)
    },
    City(data){
        var that =this
       that.user.s = data.value
       that.shi= that.user.s
         console.log(that.shi)

    },
    Area(data){
        var that =this
        that.user.x = data.value
        that.xian= that.user.x
       console.log(that.xian)
    },

        handleChange(value) {
        console.log(value);
      },

      //分页
        handleSizeChange(val) {
      
      this.tiao=`${val}`
      this.libiao()
    },
    handleCurrentChange(val) {
        this.yeshuo=`${val}`
         this.libiao()

    },
    //添加按钮
    Addit() {
      var that =this
         if (that.uid==""||that.ziid=="1"||that.uid=="1") {
           this.$message.error('请选择部门后重新添加');
           return
      }
       if (JSON.stringify(this.tableData1)!=="{}") {
        this.tableData1={};
         that.user.sf="",
          that.user.s="",
          that.user.x=""
      } 
      that.Addition = true;
       that.axios
          .get("/apis/front/public/loadProjectActivityTypeList")
          .then(function(response) {
            console.log(response.data.projectActivityTypeList);
            that.options = response.data.projectActivityTypeList;
          });
          that.axios
          .get("/apis/front/public/loadProjectCategoryList")
          .then(function(response) {
            console.log(response.data);
            that.options1 = response.data.projectCategoryList;
           
          });
     
    },
    //查询
    query(){

        var that =this

        that.axios
          .get("/apis/admin/projectMaster/pageList", {
            params: {
              page: that.yeshuo,
              pageSize: that.tiao,
              departmentId:that.uid,
              projectName:that.input10,
              projectStatus:that.input11,
              projectActivityTypeId:that.value4,
              
            }
          })
          .then(function(response) {
            console.log(response.data.rows);
             that.totalPage=response.data.totalPage
             that.tableData = response.data.rows
            
            var array =that.tableData
            for (let i = 0; i < array.length; i++) {
                if (array[i].isMajorProject=="1") {

                   array[i].isMajorProject="是"
                  
                } else if(array[i].isMajorProject=="0"){

                  array[i].isMajorProject="否"

                }
               
            }
            
            
          });
    
    },
    //确定添加
    add(ruleForm) {
    	var that =this
       that.$refs.ruleForm.validate((valid) => {
		          if (valid) {
		           
		            that.dizhi+=that.sheng+","+that.shi+","+that.xian
			      that.axios
			        .get("/apis/admin/projectMaster/add",{
			           params: {
			             projectCode:that.tableData1.projectCode,
			             buildProjectCode:that.tableData1.buildProjectCode,
			             projectName:that.tableData1.projectName,
			             projectDescription:that.tableData1.projectDescription,
			             isMajorProject:that.tableData1.isMajorProject,
			             ownerName:that.tableData1.ownerName,
			             buildCorporationCode:that.tableData1.buildCorporationCode,
			             builderLicenceNum:that.tableData1.builderLicenceNum,
			             areaCode:that.dizhi,
			             totalContractAmt:that.tableData1.totalContractAmt,
			             buildingScale:that.tableData1.buildingScale,
			             buildingArea:that.tableData1.buildingArea,
			             startDate:that.tableData1.startDate,
			             completeDate:that.tableData1.completeDate,
			             ipUrl:that.tableData1.ipUrl,
			             proectSource:that.tableData1.proectSource,
			            projectStatus:that.tableData1. projectStatus,
			            departmentCode:that.tableData1.departmentCode,
			             projectActivityTypeId:that.tableData1.projectActivityTypeId,
			             projectCategoryId:that.tableData1.projectCategoryId,
			             departId:that.uid
			            
			          }
			        })
			        .then(function(response) {
			          console.log(response.data);
			          // that.options1 = response.data.projectCategoryList;
			          that.libiao()
			        });
			     that.Addition = false;
				 } else {
					            alert('信息不全');
					            return false;
				    }
		        });
					
    },
    qu(ruleForm){
    	this.Addition = false;
		      	this.$refs.ruleForm.resetFields();
    },
    handleItemChange(label) {
      alert(label);
    },

    //修改取消按钮
    getCompanyData() {
      var that =this
     that.libiao()     
        that.hand = false;
    
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
      var arr =row.areaCode.split(",");
       that.user.xtrysf=arr[0]
       that.user.xtrycs=arr[1]
       that.user.xtrte=arr[2]

      console.log(arr[0])
      console.log(arr[1])
      console.log(arr[2])      
      
      that.rowid =row.id
       if (row.isMajorProject=="是") {
         row.isMajorProject=1
         
       }else if (row.isMajorProject=="否") {
         row.isMajorProject=0
         
       }
       that.tableData2 = row;

          that.axios
          .get("/apis/front/public/loadProjectActivityTypeList")
          .then(function(response) {
            console.log(response.data.projectActivityTypeList);
            that.options = response.data.projectActivityTypeList;
          });
          that.axios
          .get("/apis/front/public/loadProjectCategoryList")
          .then(function(response) {
            console.log(response.data);
            that.options1 = response.data.projectCategoryList;
           
          });
    
    },

    kong(){
      var that =this
     that.region=""
    //  that.province=undefined
    //  that.city=undefined
    //  that.area=undefined
    },
    //确定修改
    modify(){
          var that =this 
               
         that.region+=that.province+","+that.city+","+that.area
      

        that.axios
          .get("/apis/admin/projectMaster/update",{
             params: {
               projectCode:that.tableData2.projectCode,
               buildProjectCode:that.tableData2.buildProjectCode,
               projectName:that.tableData2.projectName,
               projectDescription:that.tableData2.projectDescription,
               isMajorProject:that.tableData2.isMajorProject,
               ownerName:that.tableData2.ownerName,
               buildCorporationCode:that.tableData2.buildCorporationCode,
               builderLicenceNum:that.tableData2.builderLicenceNum,
               areaCode:that.region,
               totalContractAmt:that.tableData2.totalContractAmt,
               buildingScale:that.tableData2.buildingScale,
               ipUrl:that.tableData2.ipUrl,
               buildingArea:that.tableData2.buildingArea,
               startDate:that.tableData2.startDate,
               completeDate:that.tableData2.completeDate,
               proectSource:that.tableData2.proectSource,
              projectStatus:that.tableData2. projectStatus,
              departmentCode:that.tableData2.departmentCode,
               projectActivityTypeId:that.tableData2.projectActivityTypeId,
               projectCategoryId:that.tableData2.projectCategoryId,
               id:that.rowid,
              
            }
          }) .then(function(response) {
                 that.hand=false
                  that.kong()
                  that.libiao()
           })
          
    },
//  handleDelete(index) {
//    this.$confirm("此操作将永久删除该项目信息, 是否继续?", "提示", {
//      confirmButtonText: "确定",
//      cancelButtonText: "取消",
//      type: "warning"
//    })
//      .then(() => {
//        this.tableData.splice(index, 1);
//        this.$message({
//          type: "success",
//          message: "删除成功!"
//        });
//      })
//      .catch(() => {
//        this.$message({
//          type: "info",
//          message: "已取消删除"
//        });
//      });
//  }
  },
  created() {
    // this.getCompanyData();

  }
};
</script>

<style>
#LaborCompany{
  height: 100%; min-height: 750px;
  position: relative;
}
.header_45{
  height: 88%!important;
  overflow: auto;

}

.query_11{
  float: left;
  margin-left: 1%;
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
.Add_1 {
  float: right;
  margin-right: 3%;
  margin-top: -1%;
  margin-bottom: 1%;
}
.block {
  width: 100%;
  height: 40px;
  float: left;
}
.distpicker-address-wrapper select{
  width: 31.8%;
  font-size: 14px;
}
.fenye_1{
  position: absolute;
  right: 1%;
  bottom: 1%;
}
.chaxun{
  width: 62%;
  float: left;
}
.tj{
  float: left;
  line-height: 28px;
}
.base{
  width: 23%;
  height: 28px;
  margin-left: 3%;
  float: left;
}
</style>