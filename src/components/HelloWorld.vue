<template>
  <div class="hello">
    <h3 style="margin-bottom: 20px;">Привязка компонента к входящим параметрам</h3>
    <div>
      <input v-model="interestValue">
      <RangeComponent v-model="interestValue"></RangeComponent>
    </div>

  </div>
</template>

<script>
import RangeComponent from "./RangeComponent";
export default {
  name: 'HelloWorld',
  components: {RangeComponent},
  data() {
    return {
      interestValue: 34,
    }
  },
}
</script>
<style scoped>
.hello {
  margin-top: 70px;
}
h3 {
  margin: 40px 0 0;
}
</style>
