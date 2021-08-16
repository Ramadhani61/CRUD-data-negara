<script>
import{mapState} from 'vuex'
export default {
   computed:mapState({
        list:state=>state.list,
        filter:state=>state.filter,
    }),

    watch:{
        list(){
            this.dataSource()
        }
    },
}
</script>