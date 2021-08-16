<template>
  <div id="container-for-negara">Negara</div>
</template>

<script>
import {mapState} from 'vuex'
import Highcharts from 'highcharts'
import _ from 'lodash'
import base from './base.vue'

export default {
    extends:base,
    methods:{
        dataSource(){
           const negara =this.list.map(item=>item.negara)
           const base =_(negara)
           .countBy()
           .map((value,key)=>({key, value}))
           .orderBy(['value'],['desc'])
           .value()

         const categories=base.map(item=>item.key)
        const values=base.map(item=>item.value)

           
          this.setup({categories,values})   
        },
        setup(obj){
            const {categories,values}=obj
            Highcharts.chart('container-for-negara', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Diagram Berdasarkan Negara'
                },
                xAxis: {
                    categories: categories,
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Kuantitas'
                    }
                },
                
                series: [{
                    name: 'Kuantitas',
                    data: values

                }]
                
            });
        },
    },

}
</script>

<style>

</style>