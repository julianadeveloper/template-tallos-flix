<template>
  <div class="container-theater">
    <Toast />
    <form class="container-columns">
      <div class="content">
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
      </div>
      <div class="btns-form">
        <Button
          title="back"
          @click.prevent="closeCreate()"
          icon="pi pi-check"
          class="p-button-warning"
          placeholder="Save"
          ><i class="fa-solid fa-backward"></i
        ></Button>
        <Button
          @click.prevent="create()"
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
  data() {
    return {
      theater: {
        location: {
          address: {
            street1: "",
            city: "",
            state: "",
            zipcode: 0
          },
          geo: {
            type: "Point",
            coordinates: []
          }
        }
      },
      theatersApi
    };
  },
  methods: {
    closeCreate() {
      this.$emit("closeCreated");
    },
    async create() {
      const result = await this.theatersApi.TheaterCreate(this.theater);
      this.$toast.add({
        severity: "success",
        summary: "registered success",
        life: 3000
      });
      this.$emit("openModal", this.theater);
      this.$emit("closeUpdate", this.theater);
      return result;
    }
  }
};
</script>
<style scoped>
.btns-form {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
input {
  justify-content: center;
  align-items: center;
  display: flex;
  width: 300px;
  height: 40px;
  padding: 1rem;
  margin: 0.25rem;
  outline: none;
}

.container-theater {
  margin-left: 2rem;
  width: 80%;
  height: 80%;
  background-color: rgb(43, 43, 43);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
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

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
