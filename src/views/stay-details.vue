<template>
 <section class="stay-details">
     <h2>Details page</h2>


 </section>
</template>

<script>
// TODO:import stayservice
export default {
    data(){
        return{
            stay:null
        }
    },
    created(){
        // TODO:try catch
        // const {stayId}=this.$route.params
        // const stay= stayService.getById(stayId)
        // this.stay = stay
    }
}
</script>