<template>
  <div class="flex flex-row flex-wrap z-0 pb-10">
    <div v-on:click="setSolutionIndex(0)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="50">
      <router-link to="/solutions">
        <HoverBox solution-num="1" solution-name="Reduced Food Waste"/>
      </router-link>
    </div>
    <div v-on:click="setSolutionIndex(1)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="100">
      <router-link to="/solutions">
        <HoverBox solution-num="2" solution-name="Health and Education"/>
      </router-link>
    </div>
    <div v-on:click="setSolutionIndex(2)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="150">
      <router-link to="/solutions">
        <HoverBox solution-num="3" solution-name="Plant-Rich Diet" />
      </router-link>
    </div>
    <div v-on:click="setSolutionIndex(3)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="200">
      <router-link to="/solutions">
        <HoverBox solution-num="4" solution-name="Refrigerant Management" />
      </router-link>
    </div>
    <div v-on:click="setSolutionIndex(4)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="250">
      <router-link to="/solutions">
        <HoverBox solution-num="5" solution-name="Tropical Forest Restoration" />
      </router-link>
    </div>
    <div v-on:click="setSolutionIndex(5)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="300">
      <router-link to="/solutions">
        <HoverBox solution-num="6" solution-name="Onshore Wind Turbines"/>
      </router-link>
    </div>
    <div v-on:click="setSolutionIndex(6)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="350">
      <router-link to="/solutions">
        <HoverBox solution-num="7" solution-name="Alternative Refrigerants"/>
      </router-link>
    </div>
    <div v-on:click="setSolutionIndex(7)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="400">
      <router-link to="/solutions">
        <HoverBox solution-num="8" solution-name="Utility Scale Solar Power" />
      </router-link>
    </div>
    <div v-on:click="setSolutionIndex(8)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="450">
      <router-link to="/solutions">
        <HoverBox solution-num="9" solution-name="Improved Clean Cookstoves" />
      </router-link>
    </div>
    <div v-on:click="setSolutionIndex(9)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="500">
      <router-link to="/solutions">
        <HoverBox solution-num="10" solution-name="Distributed Solar Power" />
      </router-link>
    </div>
     <div v-on:click="setSolutionIndex(10)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="50">
      <router-link to="/solutions">
        <HoverBox solution-num="11" solution-name="Silvopasture"/>
      </router-link>
    </div>
    <div v-on:click="setSolutionIndex(11)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="100">
      <router-link to="/solutions">
        <HoverBox solution-num="12" solution-name="Peatland Protection & Rewetting"/>
      </router-link>
    </div>
    <div v-on:click="setSolutionIndex(12)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="150">
      <router-link to="/solutions">
        <HoverBox solution-num="13" solution-name="Tree Plantations" />
      </router-link>
    </div>
    <div v-on:click="setSolutionIndex(13)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="200">
      <router-link to="/solutions">
        <HoverBox solution-num="14" solution-name="Temperate Forest Restoration" />
      </router-link>
    </div>
    <div v-on:click="setSolutionIndex(14)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="250">
      <router-link to="/solutions">
        <HoverBox solution-num="15" solution-name="Concentrated Solar Power" />
      </router-link>
    </div>
    <div v-on:click="setSolutionIndex(15)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="300">
      <router-link to="/solutions">
        <HoverBox solution-num="16" solution-name="Insulation"/>
      </router-link>
    </div>
    <div v-on:click="setSolutionIndex(16)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="350">
      <router-link to="/solutions">
        <HoverBox solution-num="17" solution-name="Managed Grazing"/>
      </router-link>
    </div>
    <div v-on:click="setSolutionIndex(17)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="400">
      <router-link to="/solutions">
        <HoverBox solution-num="18" solution-name="Led Lighting" />
      </router-link>
    </div>
    <div v-on:click="setSolutionIndex(18)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="450">
      <router-link to="/solutions">
        <HoverBox solution-num="19" solution-name="Perennial Staple Crops" />
      </router-link>
    </div>
    <div v-on:click="setSolutionIndex(19)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="500">
      <router-link to="/solutions">
        <HoverBox solution-num="20" solution-name="Tree Intercropping" />
      </router-link>
    </div>

    <div class="lg:w-1/5 md:w-1/3 w-full p-4 relative" data-aos="fade" data-aos-delay="500">
      <router-link to="/glossary">
        <HoverBoxE top-text="Visit the" main-text="Glossary" img-name="c-glossary" />
      </router-link>
    </div>

    <div class="lg:w-4/5 w-full p-4 relative" data-aos="fade" data-aos-delay="500">
      <router-link to="/about">
        <HoverBoxE top-text="Learn More About" main-text="Climate Solutions For Kids" img-name="c-full" />
      </router-link>
    </div>

   

  </div>
</template>

<script>
import { mapState, mapMutations} from "vuex";
import HoverBox from '@/components/HoverBox.vue'
import HoverBoxE from '@/components/HoverBoxE.vue'

export default {
  name: 'Home',
  components: {
    HoverBox,
    HoverBoxE
  },
  computed: {
        ...mapState(["solutionIndex"])
  },
  methods: {
        ...mapMutations(["setSolutionIndex"])
  },
}

</script>
