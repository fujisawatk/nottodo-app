<template>
  <div class="main">
    
    <!-- NotToDo一覧 -->
    <div class="todo-list card">
      <div class="header light-blue darken-2 white-text">
        <span>NotToDo List</span>
      </div>
      <div class="item" v-for="list in lists" :key="list.id">
        <input type="checkbox" class="filled-in" :checked="list.isCompleted" />
        <span id="text">{{ list.title }}</span>
        <div class="right">
          <i class="material-icons small">edit</i>
          <i class="material-icons small" @click="delList(list.id)">delete</i>
        </div>
      </div>
    </div>

    <!-- 入力欄 -->
    <div class="row" id="footer">
      <form class="col s12">
        <div class="row">
          <div class="input-field" id="input">
            <i class="material-icons prefix">message</i>
            <textarea class="materialize-textarea" id="textarea" placeholder="やらないこと"></textarea>
            <input type="submit" class="btn col s1 light-blue darken-2" placeholder="送信">
          </div>
        </div>
      </form>
    </div>

  </div>
</template>

<script>

export default {
  name: "Task",
  data() {
    return {
      lists: [
        {id: "1", title: "Youtubeは一日1時間にする！！", isCompleted: false },
        {id: "2", title: "ゲームやめる！！", isCompleted: true }
        ] 
    };
  },
  methods: {
    delList(id){
      // クリックされたidの要素以外の要素で、新しい配列を作る処理
      this.lists = this.lists.filter(list => {
        return list.id != id
      })
    }
  }
}

</script>

<style>
.todo-list{
  width: 70%;
  margin: 1em auto;
}
.header {
  padding: 1em;
  font-size: 1.5em;
}
.item {
  padding: 1em;
  cursor: pointer;
  font-size: 1.5em;
}
.item:hover {
  background-color: #f3f3f3;
}
#text{
  font-size: 1.25em;
  color: black;
}
#footer{
  position: fixed;
  width: 70%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
}
#input{
  display: flex;
}
#textarea{
  font-size: 1.5em;
}
#textarea:focus {
     border-bottom: 1px solid #0288d1;
     box-shadow: 0 1px 0 0 #0288d1;
}
</style>