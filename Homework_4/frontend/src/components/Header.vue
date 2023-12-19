<template>
        <header class="header">
        <div class="buttons">
            <nav>
                <router-link to="/">Home</router-link> |
                <router-link to="/contactusview">Contacts</router-link>
            </nav>
            <router-view/>
        </div>
      </header>
</template>

<script>

export default {
    name: "Header"
}
</script>

<style>
.header {
  display: flex;
  flex-direction: row;
  justify-content:center;
  background-color: #bfbfbf;
  border-radius: 10px;
  padding: 8px;
  align-items: center;
  margin-bottom: 5px;
  font-size: large;
  font-weight: bold;
  top: 10px;
  vertical-align: middle;
}

a {
  color: #34495e;
  text-decoration: none;
}

nav {
  padding: 30px;
}

nav a {
  color: #676666;
}

nav a.router-link-exact-active {
  font-weight: bold;
  color: #000000;
}

nav a:hover {
  color: rgb(160, 109, 118);
}
</style>