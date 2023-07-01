<template>
  <Nav/>
  
  <Header/>

  <main class="main">
    <About/>

    <Features/>

    <Requirement/>

    <Quotes/>

    <Contact/>

  </main>

  <Footer/>

</template>

<script>
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'
import About from '@/components/About.vue'
import Features from '@/components/Features.vue'
import Requirement from '@/components/Requirement.vue'
import Quotes from '@/components/Quotes.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Nav,
    About,
    Features,
    Requirement,
    Quotes,
    Contact,
    Footer
  }
}

</script>

<style lang="scss" scoped>

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

</style>