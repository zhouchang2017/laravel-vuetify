<script>
  export default {
    name: 'num',
    render: function (createElement) {
      return createElement(
        'div',
        this.animatedNumber
      )
    },
    props:{
      num:{
        type:Number,
        default:0
      }
    },
    data(){
      return {
        tweenedNumber:0
      }
    },
    computed:{
      animatedNumber(){
        return this.tweenedNumber.toFixed(0);
      }
    },
    watch: {
      num(newValue){
        TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
      }
    }
  }
</script>