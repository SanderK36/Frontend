<template>
  <div class="dashboard-page">
    <div class="card">
      <div class="icon">
        <svg class="lock" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
      </div>

      <h1>HEMMELIG DASHBOARD</h1>
      <p>Du har tilgang til det hemmelige området</p>

      <router-link to="/" class="btn-back">← Tilbake til start</router-link>
    </div>
  </div>
</template>

<style scoped>
.dashboard-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: system-ui, -apple-system, sans-serif;
}

.card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 4rem 3rem;
  text-align: center;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
}

.icon {
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lock {
  width: 60px;
  height: 60px;
  color: white;
}

h1 {
  font-size: 3.5rem;
  font-weight: 900;
  color: white;
  margin: 0 0 1rem;
}

p {
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 3rem;
}

.btn-back {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 16px;
  font-weight: 600;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.btn-back:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
}
</style>