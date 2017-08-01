<template>
  <div id="loading">
    <img src="../assets/bgi.jpg">
  </div>
</template>

<script type="text/ecmascript-6">
export default{
  name: 'loading',

  methods: {
    Rflash: function () {
      setTimeout(function () {
        window.location.href = '/show'
      }, 3000)
    }
  }
}
</script>

<style lang="sass" rel="stylesheet/sass">
  #loading
    img
      width: 100%
      height: 100%
</style>
