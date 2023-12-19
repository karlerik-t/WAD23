<template>
    <Header />
    <div class="main">
    <Side />
    <div>
      <div id="form">
        <h3>A Post</h3>
        <div class="container">
            <label for="body">Body: </label>
            <input name="body" type="text" id="body" required v-model="post.content" />
        </div>

        <div class="container">
            <button @click="updatePost" class="updatePost">Update</button>
            <button @click="deletePost" class="deletePost">Delete</button>
        </div>
      </div>

    </div>
    <Side />
  </div>

    <Footer/>
  </template>
  
  
  <script>
    import Header from "@/components/Header.vue";
    import Footer from "@/components/Footer.vue";
    import Side from "@/components/Side.vue";


  export default {
    name: "APostView",
    components: {
    Header,
    Footer,
    Side
    },
    data() {
      return {
        post: {
          id: "",
          content: "",
          date: "",
        },
      };
    },
    methods: {
      fetchAPost(id) {
        fetch(`http://localhost:3000/api/posts/${id}`)
          .then((response) => response.json())
          .then((data) => (this.post = data))
          .catch((err) => console.log(err.message));
      },
      updatePost() {
        fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.post),
        })
          .then((response) => {
            console.log(response.data);
            this.$router.push("/");
          })
          .catch((e) => {
            console.log(e);
          });
      },
      deletePost() {
        fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => {
            console.log(response.data);
            this.$router.push("/");
          })
          .catch((e) => {
            console.log(e);
          });
      },
    },
    mounted() {
      this.fetchAPost(this.$route.params.id);
    },
  };
  </script>
  
  <style scoped>
  #form {
    max-width: 420px;
    margin: 30px auto;
    background: rgb(233, 233, 233);
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  h3 {
    text-align: center;
    color: rgb(8, 110, 110);
  }
  label {
    color: rgb(8, 110, 110);
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-radius: 10px;
    border-bottom: 1px solid white;
    color: blue;
  }
  button {
    background: #1ab2ff;
    border: 0;
    padding: 10px 40px;
    margin-top: 20px;
    color: #000000;
    border-radius: 20px;
    font-weight: bold;
  }
  .container {
    display: flex;
    justify-content: center;
  }
  </style>