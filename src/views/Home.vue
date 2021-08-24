<template>
  <div class="flex flex-row flex-wrap lg:pt-32 z-0">
    <router-link to="/solutions" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="50">
      <HoverBox solution-num="1" solution-name="Reduced Food Waste" @click="setSolutionIndex(1)"/>
    </router-link>
    <router-link @click="setSolutionIndex(1)" to="/solutions" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="50">
      <HoverBox solution-num="2" solution-name="Health and Education"/>
    </router-link>
    <router-link to="/solutions" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="50">
      <HoverBox solution-num="3" solution-name="Plant-Rich Diet" />
    </router-link>
    <router-link to="/solutions" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="50">
      <HoverBox solution-num="4" solution-name="Reduced Food Waste" />
    </router-link>
    <router-link to="/solutions" class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="50">
      <HoverBox solution-num="5" solution-name="Tropical Forest Restoration" />
    </router-link>
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
