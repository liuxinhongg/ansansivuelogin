<template>
	<section>
		<p>按项目统计劳务班组数</p>
		 <div id="maina" style="width: 300px;height:250px;"></div>
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
		 let myCharta = this.$echarts.init(document.getElementById('maina'))
		  var option = {
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        x: 'left',
		        data:['14','13','16','22','12']
		    },
		    series: [
		        {
	            name:'',
	            type:'pie',
	            radius: ['0%', '70%'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                },
	                
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'14'},
                {value:310, name:'13'},
                {value:234, name:'16'},
                {value:135, name:'18'},
                {value:1548, name:'22'}
            ]
        }
    ]
};
        myCharta.setOption(option);
	}
   }	
</script>

<style scoped>
	p{width: 180px; height: 40px;background: #F1F1F1;border: 1px solid #CCCDCD;
	box-shadow:0px 4px 8px #E0EBF7; line-height: 40px; font-size: 16px;color: #0E0E0E;
	margin-left:80px;}
</style>