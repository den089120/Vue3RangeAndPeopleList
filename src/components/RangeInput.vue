<template>
  <div class="range__component">
    <div class="range__value">{{ Math.round(rangeInterestValue) }} %</div>
    <div class="range">
      <div
          class="range__circle"
          ref="radioButton"
          :style="{marginLeft: marginLeft1}"
          @mousedown="moveStyle($event)"
          @touchstart="moveStyle($event)"
          ></div>
    </div>
    <div class="range__box__btn">
      <div
          v-for="btn in arrButtonsValue"
          :key="btn"
          @click="buttonStyle(btn)"
          class="range__btn">{{ btn }} %</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RangeInput",
  props: ['interest',]
  ,
  data() {
    return {
      rangeInterestValue: this.$route.params.interest,
      arrButtonsValue: [0, 25, 50, 75, 100],
      widthRange: 0,
      marginLeft1: '5px',
      firstStateMouse: 0,
    }
  },
  mounted() {
    this.widthRange = document.body.offsetWidth - 20
    this.marginLeft1 = ((this.widthRange - 30)/100) * this.rangeInterestValue + 'px'
  },
  methods: {
    moveStyle(event) {
      if (event.type === 'mousedown') {
        this.firstStateMouse = event.x

        event.target.addEventListener('mousemove', this.changeStyle)
        event.target.parentElement.addEventListener('mouseup', ()=> {
          event.target.removeEventListener('mousemove', this.changeStyle)
        })
        event.target.parentElement.addEventListener('mouseleave', ()=> {
          event.target.removeEventListener('mousemove', this.changeStyle)
        })
      }
      else if (event.type === 'touchstart') {
        this.firstStateMouse = event.changedTouches[0].clientX

        event.target.addEventListener('touchmove', this.changeStyle)
        event.target.parentElement.addEventListener('touchcancel', ()=> {
          event.target.removeEventListener('touchmove', this.changeStyle)
        })
      }
    },
    changeStyle(event) {
      if (event.type === 'mousemove') {

        let deltaX = Math.abs(this.firstStateMouse - event.x)

        if ((this.firstStateMouse - event.x) < 0) {
          if (this.rangeInterestValue >= 100) {
            this.marginLeft1 = (this.widthRange - 25) + 'px'
            return
          } else {
            this.rangeInterestValue = this.rangeInterestValue + (deltaX/((this.widthRange - 30)/100))
            this.firstStateMouse = this.firstStateMouse + deltaX
          }
        } else {
          if (Math.round(this.rangeInterestValue) <= 0) {
            this.marginLeft1 = 5 + 'px'
            return
          } else {
            this.rangeInterestValue = this.rangeInterestValue - (deltaX/((this.widthRange - 30)/100))
            this.firstStateMouse = this.firstStateMouse - deltaX
          }
        }
      }
      else if (event.type === 'touchmove') {

        let deltaX = Math.abs(this.firstStateMouse - event.changedTouches[0].clientX)

        if ((this.firstStateMouse - event.changedTouches[0].clientX) < 0) {
          if (this.rangeInterestValue >= 100) {
            this.marginLeft1 = (this.widthRange - 25) + 'px'
            return
          } else {
            this.rangeInterestValue = this.rangeInterestValue + (deltaX/((this.widthRange - 30)/100))
            this.firstStateMouse = this.firstStateMouse + deltaX
          }
        } else {
          if (Math.round(this.rangeInterestValue) <= 0) {
            this.marginLeft1 = 5 + 'px'
            return
          } else {
            this.rangeInterestValue = this.rangeInterestValue - (deltaX/((this.widthRange - 30)/100))
            this.firstStateMouse = this.firstStateMouse - deltaX
          }
        }
      }
      this.marginLeft1 = ((this.widthRange - 30)/100) * this.rangeInterestValue + 'px'
    },
    buttonStyle(btnNumber) {
      this.rangeInterestValue = btnNumber
      if (this.rangeInterestValue <= 0) {
        this.marginLeft1 = 5 + 'px'
        return
      } else if (this.rangeInterestValue >= 100) {
        this.marginLeft1 = (this.widthRange - 25) + 'px'
        return
      }
      this.marginLeft1 = ((this.widthRange - 30)/100) * this.rangeInterestValue + 'px'
    },
  },
}
</script>

<style>
.range__component {
  background-color: rgba(4, 19, 56, 0.9);
  margin: 70px 0 0 0;
  width: 100%;

}
.range__value {
  color: darkgray;
  padding: 5px;
  display: flex;
  justify-content: left;
  margin-left: 10px;
}
.range {
  border-radius: 15px;
  height: 30px;
  margin: 5px 10px;
  background: linear-gradient(to right, rgb(23,194,157), rgb(194,107,95));
  display: flex;
  align-items: center;
}
.range__circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: azure;
  margin-left: 5px;
  cursor: grab;
  box-shadow: 2px 2px 4px dimgray;
}
.range__circle:active {
  cursor: grabbing;
  background-color: antiquewhite;
  box-shadow: 4px 4px 8px black;

}
.range__box__btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
.range__btn {
  margin: 5px 15px;
  color: darkgray;
  height: 30px;
  width: 70px;
  background-color: dimgray;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>