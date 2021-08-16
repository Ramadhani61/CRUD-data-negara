<template>
  <div id="container-for-bahasa">Bahasa</div>
</template>


<script>
import base from './base.vue'
import _ from 'lodash'
import Highcharts from 'highcharts'


export default {
    extends:base,

    methods:{
        dataSource(){
           const bahasa =this.list.map(item=>item.bahasa)
           const base =_(bahasa)
           .countBy()
           .map((y,name)=>({y, name}))
           .orderBy(['y'],['desc'])
           .value()

            const subset =base.slice(0,10)
            const total =subset.reduce((acc,item)=>{
                
                return acc +item.y
            },0)

            const finaldata= subset.map(item=>{
                item.y=(item.y/total)*100
                return item
            })
            this.setup({finaldata})
        },
        setup(obj){
            const {finaldata}=obj
            Highcharts.chart('container-for-bahasa', {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: 'Diagram Berdasarkan Bahasa'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                accessibility: {
                    point: {
                        valueSuffix: '%'
                    }
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                        }
                    }
                },
                series: [{
                    name: 'Diagram Negara',
                    colorByPoint: true,
                    data: finaldata

                }]
            });

        },
    },
}
</script>