<template>
<div class="container">
  <div class="form">
    <form @submit="validatePasswd">
    <div class="form-group">
          <label for="email">Email</label>
          <input type="text" name="email" placeholder="Email" required />
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
    validatePasswd: function (e) {
      var passwd = document.getElementById("passwd").value;

      var regexNumber = /\d+/.test(passwd);
      // Since the first letter has to be uppercase, there is no need for an additional uppercase character check
      var regexFirstUppercase = /^[A-Z]/.test(passwd);
      var regexTwoLowercase = /^(?=.*[a-z].*[a-z]).*$/.test(passwd);
      var regexUnderscore = /_/g.test(passwd);

      if (
        regexNumber &&
        regexFirstUppercase &&
        regexTwoLowercase &&
        regexUnderscore
      ) {
        this.$router.push("/");
      } else {
        alert(
          "Invalid password. Make sure that the following conditions are fulfilled:\n\n•Two lowercase characters\n•One numeric value\n•First character is an uppercase letter\n•Includes character '_'"
        );
        e.preventDefault();
      }
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