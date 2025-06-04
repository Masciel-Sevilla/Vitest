<script>
import Contador from "./components/Contador.vue";

export default {
  components: {
    Contador,
  },
};
</script>

<template>
  <div class="container">
    <header>
      <img
        alt="Vue logo"
        class="logo"
        src="./assets/logo.svg"
        width="100"
        height="100"
      />
      <h1>Bienvenido a mi App con Vue</h1>
    </header>

    <main>
      <Contador />
    </main>
  </div>
</template>

<style scoped>
.container {
  padding: 2rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa, #e4e9f0);
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.logo {
  margin-bottom: 1.5rem;
  border-radius: 50%;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

h1 {
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

main {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
