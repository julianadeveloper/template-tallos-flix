<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card
            class="strpied-tabled-with-hover"
            body-classes="table-full-width table-responsive"
          >
            <template >
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
          
              <template>
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
                    <!-- <template #cell(Update)="row">
                      <b-button
                        size="sm"
                        @click="updateComment(row.item)"
                        class="mr-2 btn-simple btn btn-m btn-info"
                      >
                        <i class="fa fa-edit"></i>
                        Update
                      </b-button>
                    </template>
                    <template #cell(Delete)="row">
                      <b-button
                        class="mr-2 btn-simple btn btn-m btn-danger"
                        size="sm"
                        @click="deleteComment(row.item)"
                      >
                        <i class="fa fa-times"></i>

                        Delet
                      </b-button>
                    </template> -->
                  </b-table>
                </div>
              </template>
              <div class="overflow-auto">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="rows"
                  :per-page="perPage"
                  aria-controls="my-table"
                  align="center"
                ></b-pagination>

                <p class="mt-3">Current Page: {{ currentPage }}</p>
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
      fields: ["email", "name", "text", "date"],
      comments: [],
      commentsApi,
      search: "",
      perPage: 10,
      currentPage: 1,
      hover: true,
      
    };
  },

  methods: {
    async listCommentEmail() {
      this.comments = await commentsApi.listCommentsEmail(this.search);
      return this.comments;
    },

    async listComments() {
      const comments = await commentsApi.listAll();
      return comments;
    },
    onInput(searchValue) {
      // ler o valor do meu input
      this.search = searchValue;
    },
    updateComment(comments) {
      console.log(comments);
      alert("this comment is:", comments);
    },
    deleteComment(comments) {
      console.log(comments);
      alert(comments);

      //disparar uma action para o vue ex
      // this.commentsApi.delete([this.comment._id])
    }
  }
};
</script>
<style></style>
