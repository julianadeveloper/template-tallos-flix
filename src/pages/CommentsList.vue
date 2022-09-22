<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card
            class="strpied-tabled-with-hover"
            body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <card>
                <base-input
                  type="text"
                  label="movie-id ou email"
                  placeholder="insira o email"
                  @input="onInput"
                ></base-input>
                <div class="text-center">
                  <button
                    type="submit"
                    class="btn btn-info btn-fill float-right"
                    @click.prevent="listCommentEmail()"
                  >
                    Search Comment
                  </button>
                </div>
              </card>
              <h4 class="card-title">Commentários</h4>
              <p class="card-category">
                Que tal analisar as opiniões sobre o filme que você deseja?
              </p>
              <div class="coments-list">
                {{ comments }}
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LTable from "src/components/Table.vue";
import Card from "src/components/Cards/Card.vue";
import CommentsApi from "../server/comments-api";
import BaseInputVue from "../components/Inputs/BaseInput.vue";
import BaseInput from "../components/Inputs/BaseInput.vue";
const commentsApi = new CommentsApi();
//retornar meus dados aqui
export default {
  components: {
    LTable,
    Card,
    BaseInputVue,
    BaseInput
  },
  data() {
    return {
      comments: [
        {
          id: "",
          name: "",
          email: "",
          movie: "",
          text: "",
          date: ""
        }
      ],
      commentsApi,
      search: ""
    };
  },
  methods: {
    async listCommentEmail() {
      this.comments = await commentsApi.listCommentsEmail(this.search);

      return this.comments[0];
    },

    async listComments() {
      const comments = await commentsApi.listAll();
      console.log(comments, "comments list comment  ");
      return comments;
    },
    onInput(searchValue) {
      // ler o valor do meu input
      this.search = searchValue;
    }
  }
  // mounted(){
  //   this.listComments()
  // }
};
</script>
<style></style>
