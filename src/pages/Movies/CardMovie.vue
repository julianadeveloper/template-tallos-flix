<template>
<card-vue>
  <template #header>
    <div class="card-image">
      <img alt="user header" />
    </div>
  </template>
  <template #title>
  </template>
  <template #content>
  </template>
  <template #footer>
    <Button icon="pi pi-check" label="Save" />
    <Button
      icon="pi pi-times"
      label="Cancel"
      class="p-button-secondary"
      style="margin-left: .5em"
    />
  </template>
</card-vue>
</template>

<script>
export default{
  name: "CardMovies",
    props:{
      movies:{
        type: Object
      }
    
  }
}

</script>
<style>

</style>