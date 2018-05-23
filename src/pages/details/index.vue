<template>
	<div class="index">
		
	</div>
</template>
<script>
import myTable from '@/components/pices/my-table'
import mySelect from '@/components/pices/my-select'

import Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsDrilldown from 'highcharts/modules/drilldown';
import Highcharts3D from 'highcharts/highcharts-3d';


HighchartsMore(Highcharts)
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);

export default{
		components:{
			myTable,mySelect
		},
		data(){
			return{
			}
		},
        computed:{

        },
        watch:{
       
        },
        methods:{
        	
        },
		created(){
			console.log('index is loaded')
		},
		mounted(){
		}
	}
</script>
<style lang="scss">
</style>