<template>
  <div class="flex flex-row flex-wrap lg:pt-32 z-0">
    <HoverBox solutionNum="1" solutionName="Reduced Food Waste" />
    <HoverBox solutionNum="2" solutionName="Health and Education" />
    <HoverBox solutionNum="3" solutionName="Plant-Rich Diet" />
    <HoverBox solutionNum="4" solutionName="Reduced Food Waste" />
    <HoverBox solutionNum="5" solutionName="Tropical Forest Restoration" />
  </div>
</template>

<script>
// @ is an alias to /src
import HoverBox from '@/components/HoverBox.vue'

export default {
  name: 'Home',
  components: {
    HoverBox
  }
}

</script>
