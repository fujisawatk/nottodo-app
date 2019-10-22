<template>
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
</style>