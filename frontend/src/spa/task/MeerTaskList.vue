<template>
  <div class="meer-task-list-w">
    <div class="meer-task-list-c">
      <div class="meer-task-input-w">
        <div class="meer-task-input-c">
          <input type="text" />
          <button>
            <font-awesome-icon icon="plus"></font-awesome-icon>
          </button>
        </div>
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
import MeerTask from '@/shared-components/MeerTask.vue'
export default {
  name: 'meer-task-list',
  components: {
    'meer-task': MeerTask
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" src="@/assets/scss/task/meer-task-list.scss"></style>