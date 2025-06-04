<script>
export default {
  data() {
    return {
      msg: "Contador",
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count > 0) {
        this.count--;
      }
    },
    reset() {
      this.count = 0;
    },
  },
};
</script>

<template>
  <div class="counter">
    <h2>{{ msg }}: {{ count }}</h2>
    <div class="buttons">
      <button id="increment" @click="increment">➕ Incrementar</button>
      <button id="decrement" @click="decrement">➖ Decrementar</button>
      <button id="reset" @click="reset">🔄 Reiniciar</button>
    </div>
  </div>
</template>

<style scoped>
.counter {
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.counter:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

h2 {
  margin-bottom: 1.5rem;
  color: #34495e;
  font-weight: 500;
}

.buttons {
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  flex-wrap: wrap;
}

button {
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  background: #42a5f5;
  border: none;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}

button:hover {
  background: #1e88e5;
  transform: scale(1.03);
}

button:active {
  transform: scale(0.98);
}
</style>
