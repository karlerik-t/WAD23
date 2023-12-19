<template>

<Header/>
<SignupForm/>
<Footer/>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SignupForm from '@/components/SignupForm.vue';

export default {
  name: 'SignupView',
  components: {
    Header,
    Footer,
    SignupForm
}
}
</script>
