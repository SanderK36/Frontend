<!-- src/views/HomeView.vue – PROFF 2025-VERSJON -->
<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import type { AuthError } from '@supabase/supabase-js'

const email = ref('')
const password = ref('')
const message = ref('')

const auth = useAuthStore()
auth.init()

const signup = async () => {
  try {
    await auth.signUp(email.value, password.value)
    message.value = 'Sjekk e-posten – klikk bekreftelseslinken!'
  } catch (error) {
    message.value = 'Feil: ' + (error as AuthError).message
  }
}

const login = async () => {
  try {
    await auth.signIn(email.value, password.value)
    message.value = 'Logget inn!'
  } catch (error) {
    message.value = 'Feil: ' + (error as AuthError).message
  }
}
</script>

<template>
  <div class="container">
    <div class="glass-card">
      <!-- Logo / ikon -->
      <div class="logo">
        <div class="logo-inner">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

      <!-- Tittel -->
      <h1 class="title">
        {{ auth.user ? `Velkommen ${auth.user.email}!` : 'Logg inn' }}
      </h1>

      <!-- Allerede innlogget -->
      <div v-if="auth.user" class="logged-in">
        <p class="subtitle">Du er klar til å fortsette</p>
        <router-link to="/dashboard" class="btn btn-primary">
          Åpne dashboard
        </router-link>
        <button @click="auth.signOut" class="btn btn-ghost mt-4">Logg ut</button>
      </div>

      <!-- Login-form -->
      <form v-else @submit.prevent class="form">
        <input
          v-model="email"
          type="email"
          placeholder="din@epost.no"
          class="input"
          required
        />
        <input
          v-model="password"
          type="password"
          placeholder="Passord (min. 6 tegn)"
          class="input"
          required
        />

        <div class="button-group">
          <button type="button" @click="signup" class="btn btn-ghost">Registrer</button>
          <button type="button" @click="login" class="btn btn-primary">Logg inn</button>
        </div>

        <transition name="fade">
          <p v-if="message" class="message" :class="{ error: message.includes('Feil') }">
            {{ message }}
          </p>
        </transition>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Hovedbakgrunn – gradient som endrer seg litt på mobil */
.container {
  min-height: 100dvh;
  background: linear-gradient(135deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  display: grid;
  place-items: center;
  padding: 1rem;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
}

@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Glassmorphism-kort – ekte proft */
.glass-card {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem);
  width: 100%;
  max-width: 440px;
  text-align: center;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

/* Logo */
.logo {
  margin-bottom: 2rem;
}
.logo-inner {
  width: 90px;
  height: 90px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  margin: 0 auto;
  display: grid;
  place-items: center;
  backdrop-filter: blur(10px);
}
.icon { width: 48px; height: 48px; color: white; }

/* Tekst */
.title {
  font-size: clamp(2rem, 5vw, 2.8rem);
  font-weight: 800;
  background: linear-gradient(90deg, #fff, #e0e7ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0 0 1rem;
}
.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin: 0 0 2rem;
}

/* Input-felt */
.input {
  width: 100%;
  padding: 1.1rem 1.4rem;
  margin: 0.8rem 0;
  border: none;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  color: white;
  font-size: 1.05rem;
  transition: all 0.3s ease;
}
.input::placeholder { color: rgba(255, 255, 255, 0.7); }
.input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.35);
  transform: scale(1.02);
}

/* Knapper */
.btn {
  width: 100%;
  padding: 1.1rem;
  border-radius: 16px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0.5rem 0;
}
.btn-primary {
  background: white;
  color: #4158d0;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
.btn-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}
.btn-ghost {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
}
.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

.button-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

/* Melding */
.message {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 12px;
  font-weight: 500;
  animation: fadeIn 0.4s ease;
}
.message:not(.error) { background: rgba(34, 197, 94, 0.2); color: #86efac; }
.error { background: rgba(239, 68, 68, 0.2); color: #fca5a5; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>