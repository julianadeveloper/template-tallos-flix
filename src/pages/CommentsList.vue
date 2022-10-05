<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card
            class="strpied-tabled-with-hover"
            body-classes="table-full-width table-responsive"
          >
            <template>
              <card>
                <base-input
                  type="text"
                  label="Email User"
                  placeholder="insert email"
                  @input="onInput"
                ></base-input>
                <div class="text-center">
                  <button
                    type="submit"
                    class="btn btn-info btn-fill float-right"
                    @click.prevent="listCommentEmail()"
                  >
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </card>

              <h4 class="card-title">Comments</h4>

              <DataTable :value="comments">
                <Column field="email" header="E-mail"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="text" header="Comment"></Column>
                <Column field="date" header="Date"></Column>
              </DataTable>
              <!-- <template>
                <div sticky-header>
                  <b-table
                    :hover="hover"
                    :per-page="perPage"
                    :current-page="currentPage"
                    id="my-table"
                    :items="comments"
                    :index="index"
                    :fields="fields"
                    responsive="sm"
                  >
                
                  </b-table>
                </div>
              </template> -->
              <div class="overflow-auto">
                <b-pagination
                  v-model="page"
                  :per-page="pagination.perPage"
                  :total-rows="pagination.totalRows"
                  @change="onChange()"
                  aria-controls="my-table"
                  align="center"
                ></b-pagination>
                <p class="mt-3">Current Page: {{ page }}</p>
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Table from "../components/Table.vue";
import Card from "../components/Cards/Card.vue";
import CommentsApi from "../server/comments-api";
import BaseInputVue from "../components/Inputs/BaseInput.vue";
import BaseInput from "../components/Inputs/BaseInput.vue";

const commentsApi = new CommentsApi();
//retornar meus dados aqui
export default {
  components: {
    Card,
    BaseInputVue,
    BaseInput,
    Table
  },
  computed: {
    rows() {
      return this.comments.length;
    }
  },
  data() {
    return {
      stickyHeader: true,
      comments: [],
      commentsApi,
      search: "",
      page: 1,
      limit: 10,
      pagination: {
        totalRows: 1,
        perPage: 10
      }
    };
  },

  methods: {
    onChange(event) {
      this.listComments()

    },
async listCommentEmail(){
 this.comments = await this.commentsApi.listCommentsEmail(this.search)
 return this.comments
},
    async listComments() {
      const result = await commentsApi.listAll({
        page: this.page,
        limit: this.limit
      });
      this.comments = result.content;
      this.pagination.perPage = this.limit;
      this.pagination.totalRows = result.pagesTotal;
    },
    onInput(searchValue) {
      // ler o valor do meu input
      this.search = searchValue;
    },
  
  },
  mounted() {
    this.listComments();
  }
};
</script>
<style></style>
