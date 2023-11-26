<template>

<Header/>
<div class="main">
  <Side/>
  <Posts/>
  <Side/>
</div>
<Footer/>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Side from '@/components/Side.vue'
import Posts from '@/components/Posts.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    Side,
    Posts
  }
}
</script>

<style>
.main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
