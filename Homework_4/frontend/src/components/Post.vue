<template>
        <section>
            <div class="postheading">
                <!-- can´t use "mustache" in src attribute because it won´t work with js-->
                <img :src="require(`../assets/${postdata.authorAvatar}`)" width="20" height="20">
                <p>{{ postdata.authorName }}</p>
                <h5 style="flex-grow: 10; text-align: end;">{{postdata.date}}</h5>
            </div>
            <div class="postbody">
                <div v-if="postdata.uploadedFile !== null">
                    <img :src="require(`../assets/${postdata.uploadedFile}`)" style="max-width: 580px; max-height: 1000px;">
                </div>
                <p>{{postdata.content}}</p>
            </div>
            <div class="like-section">
              <button @click="likePost">
                <img src="../assets/thumbs-up.svg" width="20" height="20">
              </button>
              <span>{{ postdata.likes || 0 }} Likes</span>
            </div>
        </section>
</template>

<script>
export default {
    name: "Post",
    props: ["postdata"],
    methods: {
    likePost() {
      // Assuming you have a Vuex store mutation to handle likes
      this.$store.commit("incrementLikes", this.postdata.id);
    },
    },
};
</script>

<style>
section {
    display: flex;
    flex-direction: column;
    background-color: rgb(236, 236, 236);
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
}
.postheading{
    justify-content: flex-start;
    display: flex;
    flex-direction: row;
    padding: 2px;
    gap: 10px;
    align-items: center;
}

.postbody {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.postbody img, table, iframe {
  align-self: center;
}

.like-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-weight: bold;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}

</style>
