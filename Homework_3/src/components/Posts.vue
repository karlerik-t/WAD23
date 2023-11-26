<template>
  <div class="posts">
    <div v-for="post in Posts"   :key="post.index">
      <Post :postdata="post"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue'

export default {
  name: 'Posts',
  components: {
    Post
  },
  computed: {
    Posts(){
      return this.$store.state.Posts
    }
  }
  }
</script>

<style>
.posts {
  display: flex;
  flex-direction: column;  
  width: 600px;
}
</style>