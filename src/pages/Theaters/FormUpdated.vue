<template>
  <div class="container-theater" :theater="theater">
    <Toast />

    <div class="container">
      <div class="col-2 md:col-4">
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
      </div>
    </div>

    <div class="buttons-update-th">
      <div>
        <Button
          title="back"
          @click.prevent="closeUpdate()"
          icon="pi pi-check"
          class="p-button-success"
          placeholder="Save"
          ><i class="fa-solid fa-backward"></i
        ></Button>
      </div>
    </div>
    <div>
      <Button
        @click.prevent="update()"
        icon="pi pi-check"
        class="p-button-success"
        placeholder="Save"
        ><i class="fa-solid fa-floppy-disk"></i
      ></Button>
    </div>
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

.container-theater {
  width: 60%;
  height: 100%;
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
@media (max-width: 600px) {
  card {
    flex-direction: column;
    flex-wrap: wrap;
  }
  .col-2 {
    flex-wrap: wrap;
  }

  .container-theater {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 9999;
}

}
</style>
