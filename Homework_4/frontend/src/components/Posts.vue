<template>
  <div class="posts">
    <div v-for="post in Posts"   :key="post.index">
      <Post :postdata="post"/>
    </div>
    <div>
    <Post v-for="(post, index) in getPosts" :key="index" :postdata="post" :postIndex="index" />
  </div>
  
  <div class="reset-likes-section">
     <button @click="resetLikes">Reset Likes</button>
  </div>
  
  </div>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue'

export default {
  name: 'Posts',
  components: {
    Post,
  },
  computed: {
    Posts(){
      return this.$store.state.Posts
    },
  },
  methods: {
  resetLikes() {
      this.$store.commit('resetLikes');
    },
  },
};
</script>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;  
  width: 600px;
}

button {
  padding: 15px;
  background-color: #1ab2ff;
  color: #000000;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
}
</style>