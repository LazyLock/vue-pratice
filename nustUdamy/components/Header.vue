<template>
  <div class=header>
    <ul class=ul-contents>
      <li>
        <a href="/">home</a>
      </li>
      <li>
        <a href="/users">users</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .header {
    width : 100%;
    height: 60px;
    display :flex;
    justify-content: center;
    align-items: center;
    background-color: blueviolet;
  }

  .ul-contents {
    list-style : none;
    padding: 0;
    margin: 0;
    display : flex;
    justify-content: space-around;
    align-items: center;
    width : 80%;
  }

  .ul-contents a {
    text-decoration: none;
    color :white;
  }

  .ul-contents a:hover,
  .ul-contents a:actiive {
    color: black;
  }
</style>
