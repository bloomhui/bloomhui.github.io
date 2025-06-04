<template>
  <div class="image-nav">
    <router-link 
      v-for="item in navItems" 
      :key="item.path" 
      :to="item.path"
      class="nav-image"
    >
      <img 
        :src="item.image" 
        :alt="item.title"
        :class="{ 'active': isActive(item.path), 'inactive': !isActive(item.path) }"
      />
      <span>{{ item.title }}</span>
    </router-link>
  </div>

</template>

<script>
export default {
data() {
    return {
      navItems: [
        { path: '/aboutus', image: require('@/assets/1.jpg'), title: '功能1' },
        { path: '/menu', image: require('@/assets/2.jpg'), title: '功能2' },
        { path: '/branch', image: require('@/assets/3.jpg'), title: '功能3' },
        { path: '/contactus', image: require('@/assets/4.png'), title: '功能4' }
      ]
    }
  },
  methods: {
    isActive(path) {
      return this.$route.path.startsWith(path)
    }
  }

}
</script>

<style>
.image-nav {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}

.nav-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
  margin-left: 50px;
}

.nav-image img {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.nav-image img.active {
  border: 3px solid #42b983;
  box-shadow: 0 0 10px rgba(66, 185, 131, 0.5);
  opacity: 1;
}

.nav-image img.inactive {
  opacity: 0.5;
  filter: grayscale(30%) blur(1px);
}

.nav-image span {
  margin-top: 8px;
  font-size: 14px;
}

</style>