const Logo = {
    name : "TopicCard",
    template : `
      <div
    class="box"
    :class="{ 'black-mode' : blackMode, 'bordered' : bordered }" :style="{ 'height': `${size}px`, 'width': `${size}px` }" @click="goToHome()"
  >
    <div class="top">
      <span
        id="title"
        class="title-3 bolder"
      > Cartografia da Cultura. </span>
      <span
        id="m-title"
        class="title-3 bolder"
      > Carto CG. </span>
      <!-- <div class="whitespace"></div> -->
    </div>

    <div class="bottom column">
      <span
        id="forum-info"
        class="body-3 bolder"
      > Fórum municipal <br> de Cultura <br> de Campo Grande </span>
      <div class="line" />
      <span
        id="sub-info"
        class="overline bolder"
      > cultura em movimento </span>
    </div>
  </div>
    `,
    props: {
        blackMode:false,
    props: () => { size:180,

    },
    data() {
        return {
            topics:{}
        }
    },
    methods:{
        goToHome(){
            this.$router.push({name: "Home"})
        }
    }
}



export default TopicCard;
