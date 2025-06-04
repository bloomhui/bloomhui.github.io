<template>
   <div>
    <div class="header">
       <div class="head"><span class="start">welcome to cat's home!</span></div>
     <img class="logo" src="../assets/logo22.png">
    <ul class="list">
     
      <li><a href="#/home">Home</a></li>
      <li><a href="#/aboutus">About Us</a></li>
      <li><a href="#/menu">Menu</a></li>
      <li><a href="#/branch">Branch</a></li>
      <li><a href="#/contactus">Contact Us</a></li>
    </ul>
  </div>
    <router-view></router-view>
   </div>
    
</template>

<script>


export default {
  data () {
return{
  images:[]
}
  },



components: {
   
  }
}
</script>


<style>
.header {
  width:1300px;
  height:100px;
  margin-right: 0;
  background: white;
}
.head {
  width:1300px;
  height:45px;
  background-color: black;
  color:rgb(201, 202, 203);
  line-height:45px;
  font-size: 14px;
}
.start {
  margin-left: 70px;
}
.logo {
  width:90px;
  height:90px;
  margin:8px 50px 0 100px;
  
}
.list {
  display:flex;
  justify-content: space-between;
  float:right;
  margin-top: 0;
  
}
.list li {
  height:100px;
  line-height:100px;
  font-size: larger;
  font-weight:600;
  padding-left: 40px;
  
}
.list li:last-child {
  padding-right: 50px;
}
a:hover {
  border-bottom:2px solid #2ce04a ;
}



</style>