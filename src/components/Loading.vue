<template>
  <div id="loading">
    <span class="loading">Loading . . .</span>
    <img src="../assets/bgi.jpg">
  </div>
</template>

<script type="text/ecmascript-6">
    setInterval(function (event) {
      window.location.href = '/show'
    }, 3000)
</script>

<style lang="sass" rel="stylesheet/sass">
  body
    margin: 0
    #app
      .loading
        position: absolute
        top: 0
        left: 0
        height: 60px
        width: 100%
        text-align: center
        line-height: 60px
        font-size: 40px
        background-color: rgb(137,225,245)
      img
        width: 100%
        height: 100%
        margin-top: 60px
</style>
