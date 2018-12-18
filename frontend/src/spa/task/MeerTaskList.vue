<template>
  <div class="meer-task-list-w">
    <div class="meer-task-list-c">
      <div class="meer-task-input-w">
        <div class="meer-task-input-c">
          <input type="text" />
          <button>태스크 등록</button>
        </div>
      </div>
      <div class="meer-task-list-p">
        <ul>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
        </ul>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'meer-task-list'
}
</script>
<style lang="scss">
.meer-task-list-w {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .meer-task-list-c {
    width: 60%;
    height: 65vh;
    margin: 0 auto;
    background-color: red;
    .meer-task-input-w {
      width: 100%;
      height: 6vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: yellow;
      .meer-task-input-c {
        input {
          height: 37px;
        }
        button {
          cursor: pointer;
          border-radius: 5px;
          width: 100px;
          height: 30px;
          border: 0px solid #FFF;
          background-color: rgb(252, 234, 79);
          font-weight: bold;
          letter-spacing: .1rem;
          color: #000;
          font-size: 1rem;
          transition: color .5s, background-color .5s;
        }
        button:hover {
          background-color: #000;
          color: rgb(252, 234, 79);
        }
      }
    }
    .meer-task-list-p {
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }

    }

  }

}
</style>
