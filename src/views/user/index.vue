<template>
  <div class="wrap">
       {{mes}}
  </div>
</template>

<script>
 export default {
     name: 'User',
     data(){
         return {
             mes: 'test'
         }
     }
 }   
</script>


<style scoped>
   .wrap{
       width: 300px;
       height: 300px;
       background: red;
   }
</style>