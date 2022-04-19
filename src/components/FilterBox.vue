<template>  
    <div @click="fire" :style="'background-image: url('+userImage+')'" :class=" ''+필터+' filter-item' ">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'filterbox',
        data(){
          return{
            바뀐필터 : "",
          }
        },
        props: {
            userImage: String,
            필터: String,
        },
        methods:{
          fire(){
            this.emitter.emit('필터명', this.필터);
          }
        }
    }
</script>

<style>
    .filter-item {
        width: 100px;
        height: 100px;
        margin: 10px 10px 10px auto;
        padding: 8px;
        display: inline-block;
        font-weight: bold;
        color: black;
        background-size: cover;
        background-position: center;
    }
</style>