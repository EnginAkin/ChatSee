<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Word</th>
          <th scope="col">Mean</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="words in WordList" v-bind:key="words.userId">
          <th scope="row">#</th>
          <td>{{ words.word }}</td>
          <td>{{ words.means }}</td>
          <td><i @click="deleteWord(words.id)" class="bi deleteClass bi-x-lg"></i></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      WordList: [],
      counter:0
    };
  },
  methods: {
    deleteWord(wordId){
      console.log("delete Word ",wordId);
      this.$http.request("delete","api/v1/deleteWord/"+wordId,null,true).then((response)=>{
        console.log(response)
        if(response.data.successfull){
          this.WordList=this.WordList.filter(word=> word.id!=wordId);
          console.log("son hali = ",this.WordList)
        }
      })
    },
    
  },
  mounted() {
    this.$http
      .request("get", "api/v1/getWordList", null, true)
      .then((response) => {
        console.log(response);
        response.data.elements[0].forEach((element) => {
          this.WordList.push(element);
        });
      });
  },
};
</script>

<style>
.deleteClass{
  cursor: pointer;


}
</style>