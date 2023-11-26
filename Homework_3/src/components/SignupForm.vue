<template>
    <div class="parent">
      <div class="child">
        <div>
          <p>Welcome to PostIt!</p>
        </div><br>
        <div>
          <p id="text">Create an account<br>or<br>Please log in</p>
        </div><br>
        <form action="index.html" method="post">
          <div><input type="text" name="email" placeholder="Email" required>
          </div><br>
          <input type="text" name="password" placeholder="Password" required><br>
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
      name: 'SignupForm'
    }
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
    