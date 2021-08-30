<template>
    <div>
        <div class="hover-container">
            <img :src="['../assets/img/'+ imgName +'.png']" :alt="[topText +' '+ mainText]" class="hover-img">
            <a href="#">
                <div class="overlay bg-drawdown50 hover:bg-drawdown75">
                    <div class="hover-text font-body font-thin text-white tracking-wide text-smd md:text-sm lg:text-base italic px-5">
                        {{topText}}
                        <div class="pt-2 font-display tracking-normal text-mdbs md:text-md leading-none lg:text-lg not-italic">
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
    mainText: String
  }
}
</script>