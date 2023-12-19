<template>
  <div class="posts">
    <div class="container">
      <button   @click="Logout" class="center">Logout</button>
    </div>
    <div v-for="row in posts" :key="row.id">
      <a class= 'singlepost' :href="'/apostview/' + row.id">
        <Post :content="row.content" :date="row.date"/>
      </a>
      
    </div>
    <div class="container">
        <button @click="updatePost" class="updatePost">Add post</button>
        <button @click="deletePost" class="deletePost">Delete all</button>
    </div>
  
  </div>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue'

export default {
  name: 'Posts',
  data() {
    return {
      posts: [],
    };
  },
  components: {
    Post,
  },
  methods: {
    fetchPosts(){
      fetch(`http://localhost:3000/api/posts/`)
        .then((response) => response.json())
        .then((data) => {
          this.posts = data;
        })
        .catch((err) => console.log(err.message));
    },
  },
  mounted() {
    this.fetchPosts();
    console.log("mounted");
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