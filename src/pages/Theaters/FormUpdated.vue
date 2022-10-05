<template>
  <card class="container-movies" :theater="theater">
    <Toast />
    <div class="container-columns" >
      <div class="col-2 md:col-4">
        <label>theaterId</label>

        <div class="p-inputgroup">
          <input placeholder="Title" v-model="theater._id"/>
        </div>
        <div class="p-inputgroup">
          <input placeholder="Title" v-model="theater.theaterId"/>
        </div>
        <div class="p-inputgroup">
          <input placeholder="Title" v-model="theater.location.address.street1"/>
        </div>
        <div class="p-inputgroup">
          <input placeholder="Title" v-model="theater.location.address.city"/>
        </div>

        <div class="p-inputgroup">
          <input placeholder="Title" v-model="theater.location.address.state"/>
        </div>

        <div class="p-inputgroup">
          <input placeholder="Title" v-model="theater.location.address.zipcode"/>
        </div>
        <div class="p-inputgroup">
          <input placeholder="Title" v-model="theater.location.geo.coordinates[0]"/>
        </div>
        <div class="p-inputgroup">
          <input placeholder="Title" v-model="theater.location.geo.coordinates[1]"/>
        </div>
      </div>
    </div>

    <div class="btn-create-movie">
      <Button
        title="back"
        @click.prevent="$router.push({ name: 'Theater' })"
        icon="pi pi-check"
        class="p-button-success"
        placeholder="Save"
        ><i class="fa-solid fa-backward"></i
      ></Button>
      <Button
        @click.prevent="testeProps()"
        icon="pi pi-check"
        class="p-button-success"
        placeholder="Save"
        ><i class="fa-solid fa-floppy-disk"></i
      ></Button>
    </div>
  </card>
</template>
<script>
import theathersApi from "../../server/theaters-api";

const theatersApi = new theathersApi();
export default {
  props: {
    theater: {
      type: Object
    }
  },
  data() {
    return {
      theatersApi,
    };
  },
  methods: {
    testeProps(props) {
      console.log(props);
    }
  },
};
</script>
<style scoped>
.btn-back-movie {
  display: flex;
}

.container-movies {
  overflow: hidden;
  width: 80%;
  height: 80%;
  background-color: rgb(43, 43, 43);
  display: flex;
  gap: 1rem;
  position:absolute;
}
.container-columns {
  display: flex;
}

h5 {
  padding: 1rem;
  color: white;
}
label {
  color: white;
}
.btn-create-movie {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}
.btn-back-movie {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
}
@media (max-width: 600px) {
  card {
    flex-direction: column;
    flex-wrap: wrap;
  }
  .col-2 {
    flex-wrap: wrap;
  }
}
</style>
