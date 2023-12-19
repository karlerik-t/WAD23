<template>
<div class="container">
  <div class="form">
    <form @submit="Login">
    <div class="form-group">
          <label for="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Email" required />
    </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="passwd"
          name="password"
          placeholder="Password"
          title="Invalid password"
          minlength="8"
          maxlength="14"
          required
        />
        </div>

        <div>
          <button type="submit">Login</button>
          Or 
          <button @click='this.$router.push("/signupview")'>Signup</button>
        </div>

      </form>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "LoginForm",

  methods: {
    Login(email, passwd) {
      var passwd = document.getElementById("passwd").value;
      var email = document.getElementById("email").value;
      var data = {
        email: email,
        password: passwd
      };
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          credentials: 'include', 
          body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.$router.push("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  },
};
</script>
    
<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.form {
  display: flex;
  width: 400px;
  height: 300px;
  background: #99e6ff;
  justify-content: center;
  border-radius: 50px;
  border: 4px solid #00ace6;

}

.form-group{
  display: flex;
  margin-top: 40px;
  margin-bottom: 30px;
  font-size: medium;
  font-weight: bold;
  
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
label {
  text-align: right;
  margin-bottom: 10px;
  margin-right: 10px;
  display: inline-block;
  width: 80px;
}

button:hover {
  background-color: #0056b3;
}
</style>