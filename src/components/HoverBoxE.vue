<template>
    <div>
        <div class="hover-container">
            <img :src="['../assets/img/'+ imgName +'.png']" :alt="['Solution #'+solutionNum+' - '+solutionName]" class="hover-img">
            <a href="#">
                <div class="overlay bg-drawdown50 hover:bg-drawdown75">
                    <div class="hover-text font-body font-thin text-white tracking-wide text-smd md:text-sm lg:text-base italic">
                        {{topText}}
                        <div class="m-2 lg:pt-5 pt-2 font-display tracking-normal text-mdbs leading-9 md:text-md md:leading-10 lg:text-lg not-italic">
                            {{mainText}}
                        </div>
                    </div>
                </div>
            </a>
        </div>              
    </div>
</template>

<script>
export default {
  name: 'HoverBoxE',
  props: {
    imgName: String,
    topText: String,
    mainText:  String
  }
}
</script>