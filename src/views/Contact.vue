<template>
  <div class="contact">
    <h1>Контакты</h1>
    <p>Свяжитесь с нами!</p>
    <div class="contact-info">
      <p>Email: example@email.com</p>
      <p>Телефон: +7 (123) 456-78-90</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView'
}
</script>

<style scoped>
.contact {
  padding: 20px;
  text-align: center;
}

.contact-info {
  margin-top: 20px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  display: inline-block;
}
</style>