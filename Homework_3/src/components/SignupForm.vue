<template>
  <div class="parent">
    <div class="child">
      <div>
        <p>Welcome to PostIt!</p>
      </div>
      <br />
      <div>
        <p id="text">Create an account<br />or<br />Please log in</p>
      </div>
      <br />
      <form @submit="validatePasswd">
        <div>
          <input type="text" name="email" placeholder="Email" required />
        </div>
        <br />
        <input
          type="password"
          id="passwd"
          name="password"
          placeholder="Password"
          title="Invalid password"
          minlength="8"
          maxlength="14"
          required
        /><br />
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      <div><p id="text">Forget password</p></div>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "SignupForm",

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
    
<style>
.parent {
  display: flex;
  margin: auto;
  width: 300px;
  height: 400px;
  background: #d8d8d8;
  justify-content: center;
  border-radius: 25px;
}

.child {
  background-color: rgba(148, 186, 230, 0);
  width: 250px;
  height: 300px;
  margin-top: 50px;
  text-align: center;
  justify-content: center;
  font-size: medium;
  overflow: hidden;
  font-family: Tahoma;
}
</style>