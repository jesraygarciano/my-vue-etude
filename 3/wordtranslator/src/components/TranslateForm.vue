<template>
  <div id="translateform">
      Translate Form
      <form v-on:submit="formSubmit">
          <input type="text" v-model="textToTranslate" placeholder="Enter a Word...">
          <input type="submit" value="Translate">
      </form>
  </div>
</template>

<script>

export default {
  name: 'translateform',
  data(){
      return {
          textToTranslate: ''
      }
  },
  methods: {
      formSubmit(e){
        //   alert('Submitted');
        this.$emit('formSubmit', this.textToTranslate);
          e.preventDefault();
          
      }
  }
}
</script>

<style>
</style>
