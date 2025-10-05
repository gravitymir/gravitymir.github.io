<template>
  <div id="app">
    <nav>
      <router-link to="/">Главная</router-link>
      <router-link to="/about">О проекте</router-link>
      <router-link to="/contact">Контакты</router-link>
    </nav>
    
    <!-- Здесь будут отображаться компоненты маршрутов -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Стили для навигации */
nav {
  padding: 20px;
  background: #f5f5f5;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
}

nav a.router-link-active {
  color: #42b983;
}
</style>