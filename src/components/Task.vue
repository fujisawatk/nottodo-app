<template>
  <div class="main">
    
    <!-- NotToDo一覧 -->
    <div class="todo-list card">
      <div class="header light-blue darken-2 white-text">
        <span>NotToDo List</span>
      </div>
      <div class="item">
        <input type="checkbox" class="filled-in" checked="checked" />
        <span id="text">Youtubeは一日1時間にする！！</span>
        <div class="right">
          <i class="material-icons small">edit</i>
          <i class="material-icons small">delete</i>
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