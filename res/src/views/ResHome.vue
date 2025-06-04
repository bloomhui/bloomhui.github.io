<template>
  <div class="container">
 
    <img :src="this.images" class="head-img">
    <!-- <div> <ShortCut class="shortcut"></ShortCut></div> -->
   
   <p class="welcome">welcome to see cats</p>
 </div>
</template>

<script>
// import ShortCut from './ShortCut'

import axios from 'axios'

export default {
  data () {
return{
  images:[]
}
  },
async  created (){
      const res= await axios.get('https://api.thecatapi.com/v1/images/search?size=full')
      console.log(res)
      console.log(res.data[0].url)
      this.images=res.data[0].url
  }

,
components: {
  //  ShortCut
  }
}
</script>


<style>
.head-img {
  height:555px;
  width:1300px;
  z-index:-9;
 
}

.container {
 position:relative;
 width:1300px;
 height:100px;
}
.shortcut {
  position:absolute;
  top:0;
   
}

.welcome {
  position:absolute;
  top:150px;
  left:220px;
  color:aliceblue;
  font-size: 80px;
}
</style>