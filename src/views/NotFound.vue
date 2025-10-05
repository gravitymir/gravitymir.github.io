<template>
  <div class="not-found">
    <h1>404 - Страница не найдена</h1>
    <p>Извините, запрашиваемая страница не существует.</p>
    <router-link to="/" class="home-link">Вернуться на главную</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView'
}
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 2rem;
  color: white;
}

.home-link {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}

.home-link:hover {
  text-decoration: underline;
}
</style>