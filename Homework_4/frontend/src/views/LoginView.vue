<template>

<Header/>
<LoginForm/>
<Footer/>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'LoginView',
  components: {
    Header,
    Footer,
    LoginForm
}
}
</script>