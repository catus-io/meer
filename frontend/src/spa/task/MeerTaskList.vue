<template>
  <div class="meer-task-list-w">
    <div class="meer-task-list-c">
      <div class="meer-task-input-w">
        <div class="meer-task-input-c">
          <form v-on:submit.prevent="onSubmit"> 
            <input type="text" v-model='title' @keyup="checkTitle"/>
            <button>
              <font-awesome-icon type="submit" icon="plus"></font-awesome-icon>
            </button>
          </form>
        </div>
      </div>
      <div class="meer-task-validation-p">
        <p>{{validationValue}}</p>
      </div>
      <div class="meer-task-list-p">
        <ul>
          <meer-task v-for="index in 30" :key="index"></meer-task>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import validation from '@/commons/validations/validations.js'
import MeerTask from '@/shared-components/MeerTask.vue'
export default {
  name: 'meer-task-list',
  components: {
    'meer-task': MeerTask
  },
  data() {
    return {
      title : '',
      validationValue : '' 
    }
  },
  methods : {
    checkTitle(){
      let title = this.title
      if(validation.length(title, 30)) this.validationValue = ''
      else {
        this.validationValue = '30자 이하로 입렵해주세요.'
      } 
    },
    onSubmit() {
      console.log(localStorage.getItem('user-token'))
      let date = new Date().toLocaleDateString()
      const baseURI = 'http://localhost:3000';
      this.$http.post(
        `${baseURI}/task`,
        { title: this.title, regDate: date },
        {
          headers: {
            'authorization': localStorage.getItem('user-token')
          }
        }
      )
      .then(() => console.log('sever connect OK'))
      .catch(err => this.validationValue = 'sever not connect')
    }
  }
  
}
</script>
<style lang="scss" src="@/assets/scss/task/meer-task-list.scss"></style>