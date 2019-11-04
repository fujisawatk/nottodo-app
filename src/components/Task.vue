<template>
  <div class="main">
    
    <!-- NotToDo一覧 -->
    <div class="todo-list card">
      <div class="header light-blue darken-2 white-text">
        <span>NotToDo List</span>
      </div>
      <div class="item" v-for="list in lists" :key="list.id" :class = "{fade:list.isCompleted}">
        <label>
          <input type="checkbox" class="filled-in" :checked="list.isCompleted" @change="checkList(list.id, $event)" />
          <span></span>
        </label>
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
            <textarea class="materialize-textarea" id="textarea" placeholder="やらないこと" v-model="title"></textarea>
            <input type="submit" class="btn col s1 light-blue darken-2" placeholder="送信" @click.prevent="addList()">
          </div>
          <p class="error">{{ error }}</p>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
import { db } from '@/plugins/firebase';

export default {
  name: "Task",
  data() {
    return {
      lists: [],
      error: "",
      title: "",

    };
  },
  methods: {
    delList(id){
      // firestoreから選択されたidのデータを削除
      db.collection("lists").doc(id).delete()
        // 成功時
        .then(() => {
          // 削除されたidのデータ以外のデータで、新たにdataオプションの配列を作る
          this.lists = this.lists.filter(list => {
          return list.id != id
        })
      })
    },

    addList(){
      if(this.title){
        this.error = ""
        // firestoreのlistsテーブルにデータ追加
        db.collection("lists").add({
          title: this.title,
          isCompleted: false
        }).then(() => {
          // リストを更新するため配列リセット
          this.lists = []
          // firestoreのlistsテーブルからデータを再取得
          db.collection("lists")
            .get()
            .then(snapshot => {
              snapshot.forEach(doc => {
                let list = doc.data()
                list.id = doc.id
                this.lists.push(list)
                // 入力欄リセット
                this.title = ""
              })
            })
        }).catch((err) => {
          console.log(err)
        })
      } else {
        this.error = "項目を入力してください"
      }
    },
    checkList(id, e){
      console.log(id)
      let isChecked = e.target.checked;
      console.log(isChecked)
      db.collection("lists")
        .doc(id)
        .update({
          isCompleted: isChecked
        });
    }
  },
  

  created(){
    // firestoreのlistsテーブルからデータを取得
    db.collection("lists")
      .get()
      .then(snapshot => {
        // 取得したデータの配列を一つずつ実行
        snapshot.forEach(doc => {
          let list = doc.data()
          list.id = doc.id
          // dataオプションの配列listsに追加
          this.lists.push(list)
        })
      })
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
.error{
  color: red;
  margin-left: 3em;
}
</style>