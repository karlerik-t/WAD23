<template>
  <div class="posts">
    <div v-for="post in Posts"   :key="post.index">
      <Post :postdata="post"/>
    </div>
    <div>
    <Post v-for="(post, index) in getPosts" :key="index" :postdata="post" :postIndex="index" />
  </div>
  <section>
  <div class="reset-likes-section">
     <button @click="resetLikes">Reset Likes</button>
   </div>
   </section>
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

<style>
.posts {
  display: flex;
  flex-direction: column;  
  width: 600px;
}
</style>