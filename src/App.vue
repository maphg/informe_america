<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/rm">RM</router-link> |
    <router-link to="/america">America</router-link>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: 500;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #32ca86;
  background-color: #c2ffdb;
  padding: 4px 8px;
  border-radius: 4px;
}

body{
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 15px;
  background-color: #EAEBF1;
}
</style>
