<template>
	<section>
		<p>按企业注册资本统计</p>
		 <div id="maint" style="width: 300px;height:250px;"></div>
	</section>
</template>

<script>
	
  export default {
    name: "",
	data() {
		return{
		}
	},
	created() {
		
	},
	mounted(){
		 let myChartt = this.$echarts.init(document.getElementById('maint'))
		  var option = {
		    title : {
		        text: '',
		        subtext: '',
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		        data: ['','','','','']
		    },
		    series : [
		        {
		            name: '访问来源',
		            type: 'pie',
		            radius : '75%',
		            data:[
		                {value:335, name:'本科'},
		                {value:310, name:'大专'},
		                {value:234, name:'高中'},
		                {value:135, name:'初中'},
		                {value:1548, name:'文盲'}
		            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                },
	                 normal : {
	                    label : {
	                        show : false   //隐藏标示文字
	                    },
	                    labelLine : {
	                        show : false   //隐藏标示线
	                    }
	                }
	            }
        }
    ]
};

        myChartt.setOption(option);
	}
   }	
</script>

<style scoped>
	p{width: 160px; height: 40px;background: #F1F1F1;border: 1px solid #CCCDCD;
	box-shadow:0px 4px 8px #E0EBF7; line-height: 40px; font-size: 16px;color: #0E0E0E;
	margin-left:20%;}
</style>