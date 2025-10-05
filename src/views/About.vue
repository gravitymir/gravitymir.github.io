<template>
  <div class="about">
    <div class="about-content">
      <h1>О проекте</h1>
      <p>Это одностраничное приложение создано с помощью Vue.js 3 и размещено на GitHub Pages.</p>
      
      <div class="tech-stack">
        <h2>Технологии:</h2>
        <ul>
          <li>Vue.js 3</li>
          <li>Vue Router 4</li>
          <li>GitHub Pages</li>
          <li>Modern CSS</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
}

.about-content {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 20px;
  color: white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.tech-stack h2 {
  margin-bottom: 1rem;
  color: #FFE66D;
}

.tech-stack ul {
  list-style: none;
  padding: 0;
}

.tech-stack li {
  padding: 0.5rem 0;
  font-size: 1.1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.tech-stack li:last-child {
  border-bottom: none;
}
</style>