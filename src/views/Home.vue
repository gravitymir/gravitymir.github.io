<template>
  <div class="home">
    <div class="hero">
      <h1 class="title">Добро пожаловать!</h1>
      <p class="subtitle">Это мое Vue.js SPA на GitHub Pages</p>
      <button class="cta-button" @click="showAlert">Нажми меня</button>
    </div>
    
    <div class="features">
      <div class="feature-card" v-for="feature in features" :key="feature.id">
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      features: [
        {
          id: 1,
          title: '⚡ Быстро',
          description: 'Быстрая загрузка и отклик'
        },
        {
          id: 2,
          title: '📱 Адаптивно',
          description: 'Работает на всех устройствах'
        },
        {
          id: 3,
          title: '🚀 Современно',
          description: 'Создано на Vue 3'
        }
      ]
    }
  },
  methods: {
    showAlert() {
      alert('Vue.js работает отлично! 🎉')
    }
  }
}
</script>

<style scoped>
.home {
  text-align: center;
}

.hero {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 3rem 2rem;
  border-radius: 20px;
  margin-bottom: 3rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 3rem;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
}

.cta-button {
  background: linear-gradient(45deg, #FF6B6B, #FFE66D);
  border: none;
  padding: 12px 30px;
  font-size: 1.1rem;
  border-radius: 25px;
  color: #333;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
  color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}
</style>