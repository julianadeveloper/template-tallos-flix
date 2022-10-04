<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">List Users Sessions</h4>
              <p class="card-category">See users with active session</p>
            </template>
            <!-- <div v-for="(sessions, i) in sessions" :key="i"> -->
            <div sticky-header >
              <b-table
              class="table-sessions"
                :hover="hover"
                :per-page="perPage"
                :current-page="currentPage"
                id="my-table"
                :items="sessions"
                :index="index"
                :fields="fields"
                responsive="sm"
              >
              </b-table>
            </div>
            <!-- </div> -->
            <div class="text-center">
              <button
                type="submit"
                class="btn btn-info btn-fill float-right"
                @click.prevent="listSessions()"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>

            <button
              type="submit"
              class="btn btn-danger btn-fill float-left "
              @click.prevent="clearSession()"
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SessionsApi from "../../server/sessions-api";

const sessionsApi = new SessionsApi();

export default {
  data() {
    return {
      sessions: [],
      sessionsApi,
      fields: ["_id", "user_id", "createdAt"],
      stickyHeader: true,
      perPage: 5,
      currentPage: 1,
      hover: true
    };
  },
  computed: {
    rows() {
      return this.sessions.length;
    }
  },
  methods: {
    async listSessions() {
      this.sessions = await sessionsApi.getSessions();
      return this.sessions;
    },
    clearSession() {
      this.sessions = "";
    }
  }
};
</script>
<style scoped>
</style>
