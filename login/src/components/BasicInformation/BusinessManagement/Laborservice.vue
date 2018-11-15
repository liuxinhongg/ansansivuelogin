<template>
	<section>
		<p>按劳务公司统计劳务班组数</p>
		 <div id="mains" style="width:100%;height:250px;"></div>
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
		 let myCharts = this.$echarts.init(document.getElementById('mains'))
		  var option = {
		    xAxis: {
		        type: 'category',
		        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		    },
		    yAxis: {
		        type: 'value'
		    },
		    series: [{
		        data: [120, 200, 150, 80, 70, 110, 130],
		        type: 'bar'
		    }]
		};
        myCharts.setOption(option);
	}
   }	
</script>

<style scoped>
	p{width: 200px; height: 40px;background: #F1F1F1;border: 1px solid #CCCDCD;
	box-shadow:0px 4px 8px #E0EBF7; line-height: 40px; font-size: 16px;color: #0E0E0E;
	margin-left:20%;}
</style>