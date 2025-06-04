<template>
  <div>
    <imageNav class="imgNav"></imageNav>
    <div class="main">
        <div class="content">
         <div class="entry-meta">
            <h1 class="mb-20 pb-20">about-us</h1>
         </div>
        </div>
    </div>
   
  </div>
</template>

<script>
import imageNav from '@/components/imageNav'

export default {
 components: {
    imageNav
  }

}
</script>

<style>
.main {
    width:1257px;
    height:1334px;
    background-color: #f5f5f5;
    overflow:hidden;
}
.imgNav {
  margin-top:30px;
  margin-left:320px;
}
.entry-meta h1{
    border-bottom: 1px dotted #ddd;

}
.pb-20 {
padding-bottom: 20px;
}
.mb-20 {
    margin-bottom: 20px;
}
.content {
    width:1100px;
    height:1300px;
    background-color: white;
    margin-left: 75px;
    margin-top: 20px;
    
}

</style>