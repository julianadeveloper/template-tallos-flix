<template>
  <div class="container-form" :theater="theater">
    <Toast />
    <form action="submit">
      <label>theater_id</label>

      <div class="p-inputgroup">
        <input placeholder="Id" disabled v-model="theater._id" />
      </div>
      <label>theaterId</label>

      <div class="p-inputgroup">
        <input placeholder="TheaterId" v-model="theater.theaterId" />
      </div>

      <label>Street</label>

      <div class="p-inputgroup">
        <input
          placeholder="Street"
          v-model="theater.location.address.street1"
        />
      </div>
      <label>City</label>

      <div class="p-inputgroup">
        <input placeholder="City" v-model="theater.location.address.city" />
      </div>
      <label>State</label>

      <div class="p-inputgroup">
        <input placeholder="State" v-model="theater.location.address.state" />
      </div>
      <label>Zipcode</label>

      <div class="p-inputgroup">
        <input
          placeholder="Zipcode"
          v-model="theater.location.address.zipcode"
        />
      </div>

      <label>Coordinates</label>

      <div class="p-inputgroup">
        <input
          placeholder="Latitude"
          v-model="theater.location.geo.coordinates[0]"
        />
      </div>
      <div class="p-inputgroup">
        <input
          placeholder="Longitude"
          v-model="theater.location.geo.coordinates[1]"
        />
      </div>
      <div class="btn-update">
        <Button
          title="back"
          @click.prevent="closeUpdate()"
          icon="pi pi-check"
          class="p-button-warning"
          placeholder="Save"
          ><i class="fa-solid fa-backward"></i
        ></Button>
        <Button
          @click.prevent="update()"
          icon="pi pi-check"
          class="p-button-success"
          placeholder="Save"
          ><i class="fa-solid fa-floppy-disk"></i
        ></Button>
      </div>
    </form>
  </div>
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
      theatersApi
    };
  },
  methods: {
    testeProps(props) {
      console.log(props);
    },

    async update() {
      const result = await this.theatersApi.TheaterUpdate(
        this.theater._id,
        this.theater
      );
      this.$toast.add({
        severity: "success",
        summary: "registered success",
        life: 3000
      });

      this.$emit("closeUpdate", this.theater);
      return result;
    },

    closeUpdate() {
      this.$emit("closeUpdate", this.theater);
    }
  }
};
</script>
<style scoped>
.btn-update {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.buttons-update-th {
  display: flex;
}
input {
  display: flex;
  width: 260px;
  height: 40px;
  padding: 1rem;
  margin: 0.25rem;
  outline: none;
}
.btn-back-movie {
  display: flex;
}

.container-form {
  width: 80%;
  height: 100%;
  background-color: rgb(43, 43, 43);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 9999;
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

  .container-form {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 9999;
}
}
</style>
