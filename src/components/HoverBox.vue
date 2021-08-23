<template>
    <div class="lg:w-1/5 md:w-1/3 w-1/2 p-4 relative" data-aos="fade" data-aos-delay="50">
        <div class="hover-container">
            <img :src="['../assets/img/c'+ solutionNum +'.png']" :alt="['Solution #'+solutionNum+' - '+solutionName]" class="hover-img">
            <a href="#">
                <div class="overlay bg-drawdown50 hover:bg-drawdown75">
                    <div class="hover-text font-body font-thin text-white tracking-wide text-smd md:text-sm italic">
                        Solution #{{solutionNum}}
                        <div class="pt-2 m-2 font-display tracking-normal text-mdbs leading-9 md:text-mdsm md:leading-10 not-italic">
                            {{solutionName}}
                        </div>
                    </div>
                </div>
            </a>
        </div>              
    </div>
</template>

<script>
export default {
  name: 'HoverBox',
  props: {
    solutionNum: String,
    solutionName: String
  }
}
</script>