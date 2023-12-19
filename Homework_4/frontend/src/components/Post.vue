<template>
        <section>
            <div class="postheading">
                <h5 style="flex-grow: 10; text-align: end;">{{date}}</h5>
            </div>
            <div class="postbody">
                <p>{{content}}</p>
            </div>
        </section>
</template>

<script>
export default {
    name: "Post",
    props: ["date", "content"]
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


button {
  background: none;
  border: none;
  cursor: pointer;
}

</style>
