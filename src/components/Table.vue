<template>
  <table class="table">
    <thead>
      <slot name="columns">
        <tr>
          <th v-for="column in columns" :key="column">{{ column }}</th>
        </tr>
      </slot>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <slot :row="item">
          <td
            v-for="column in columns"
            :key="column"
            v-if="hasValue(item, column)"
          >
            {{ itemValue(item, column) }}
          </td>
        </slot>
      </tr>
      <th><button></button></th>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "l-table",
  props: {
    columns: Array,
    data: Array
  },
 
};
</script>
<style></style>
