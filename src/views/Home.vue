<template>
  <div class="flex flex-row flex-wrap z-0">
    <div v-on:click="setSolutionIndex(0)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="50">
      <router-link to="/solutions">
        <HoverBox solution-num="1" solution-name="Reduced Food Waste"/>
      </router-link>
    </div>
    <div v-on:click="setSolutionIndex(1)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="50">
      <router-link to="/solutions">
        <HoverBox solution-num="2" solution-name="Health and Education"/>
      </router-link>
    </div>
    <div v-on:click="setSolutionIndex(2)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="50">
      <router-link to="/solutions">
        <HoverBox solution-num="3" solution-name="Plant-Rich Diet" />
      </router-link>
    </div>
    <div v-on:click="setSolutionIndex(3)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="50">
      <router-link to="/solutions">
        <HoverBox solution-num="4" solution-name="Refrigerant Management" />
      </router-link>
    </div>
    <div v-on:click="setSolutionIndex(4)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="50">
      <router-link to="/solutions">
        <HoverBox solution-num="5" solution-name="Tropical Forest Restoration" />
      </router-link>
    </div>
    <div v-on:click="setSolutionIndex(5)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="50">
      <router-link to="/solutions">
        <HoverBox solution-num="6" solution-name="Onshore Wind Turbines"/>
      </router-link>
    </div>
    <div v-on:click="setSolutionIndex(6)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="50">
      <router-link to="/solutions">
        <HoverBox solution-num="7" solution-name="Alternative Refrigerants"/>
      </router-link>
    </div>
    <div v-on:click="setSolutionIndex(7)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="50">
      <router-link to="/solutions">
        <HoverBox solution-num="8" solution-name="Utility Scale Solar Power" />
      </router-link>
    </div>
    <div v-on:click="setSolutionIndex(8)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="50">
      <router-link to="/solutions">
        <HoverBox solution-num="9" solution-name="Improved Clean Cookstoves" />
      </router-link>
    </div>
    <div v-on:click="setSolutionIndex(9)" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="50">
      <router-link to="/solutions">
        <HoverBox solution-num="10" solution-name="Distributed Solar Power" />
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapMutations} from "vuex";
import HoverBox from '@/components/HoverBox.vue'

export default {
  name: 'Home',
  components: {
    HoverBox
  },
  computed: {
        ...mapState(["solutionIndex"])
  },
  methods: {
        ...mapMutations(["setSolutionIndex"])
  },
}

</script>
