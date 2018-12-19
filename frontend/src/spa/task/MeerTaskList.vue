<template>
  <div class="meer-task-list-w">
    <div class="meer-task-list-c">
      <div class="meer-task-input-w">
        <div class="meer-task-input-c">
          <input type="text" v-model='title' @keyup="checkTitle"/>
          <button>
            <font-awesome-icon icon="plus"></font-awesome-icon>
          </button>
        </div>
      </div>
      <div class="meer-task-validation-p">
        <p>{{validationTitle}}</p>
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
      validationTitle : '' 
    }
  },
  methods : {
    checkTitle(){
      let title = this.title
      if(validation.length(title, 30)) this.validationTitle = ''
      else {
        this.validationTitle = '30자 이하로 입렵해주세요.'
      } 
    }
  }
  
}
</script>
<style lang="scss" src="@/assets/scss/task/meer-task-list.scss"></style>