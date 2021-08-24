<template>
  <div id="app" class="container overflow-x-hidden overflow-y-auto">
    <div class="w-full text-center text-xl flex flex-row bg-white">
        <header class=" w-1/2 font-display text-drawdown text-base md:text-mdlg text-left pt-5 pb-2" data-aos="fade">
            DRAWDOWN ADAPTED
        </header>
        <div id="nav" class=" w-1/2 text-body text-sml md:text-base text-drawdown text-right pb-0 mb-0 pt-3 md:pt-10">
          <router-link to="/" class="px-5 hover:text-sky" data-aos="fade" data-aos-delay="50">Home</router-link>
          <!-- <router-link to="/solutions" class="px-5 hover:text-sky" data-aos="fade" data-aos-delay="100">Solutions</router-link> -->
        </div>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export default {

}
</script>

<style>
</style>
