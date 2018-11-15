<template>
	<section>
		<p>按企业所在区域统计</p>
		 <div id="mainw" style="width: 300px;height:250px;"></div>
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
		 let myChartw = this.$echarts.init(document.getElementById('mainw'))
		  var option = {
		    title: {
		        text: ''
		    },
		    tooltip: {},
		    legend: {
		        data: ['', '']
		    },
		    radar: {
		        // shape: 'circle',
		        name: {
		            textStyle: {
		                color: '#fff',
		                backgroundColor: '#999',
		                borderRadius: 3,
		                padding: [1, 1]
		           }
		        },
		        indicator: [
		           { name: '销售', max: 6500},
		           { name: '管理', max: 16000},
		           { name: '信息技术', max: 30000},
		           { name: '客服', max: 38000},
		           { name: '研发', max: 52000},
		           { name: '市场', max: 25000}
		        ]
		    },
		    series: [{
		        name: '预算 vs 开销',
		        type: 'radar',
		        // areaStyle: {normal: {}},
		        data : [
		            {
		                value : [4300, 10000, 28000, 35000, 50000, 19000],
		                name : '预算分配（Allocated Budget）'
		            }
		        ]
		    }]
		};
    
        myChartw.setOption(option);
	}
   }	
</script>

<style scoped>
	p{width: 160px; height: 40px;background: #F1F1F1;border: 1px solid #CCCDCD;
	box-shadow:0px 4px 8px #E0EBF7; line-height: 40px; font-size: 16px;color: #0E0E0E;
	margin-left:80px;}
</style>