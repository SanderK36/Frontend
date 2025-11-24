import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/supabase'
import type { User } from '@supabase/supabase-js'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const loading = ref(true)

  // Hent bruker ved oppstart
  async function init() {
    const { data } = await supabase.auth.getSession()
    user.value = data.session?.user ?? null
    loading.value = false

    // Lytt til fremtidige endringer (innlogging, utlogging osv.)
    supabase.auth.onAuthStateChange((_event, session) => {
      user.value = session?.user ?? null
    })
  }

  async function signUp(email: string, password: string) {
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) throw error
  }

  async function signIn(email: string, password: string) {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
  }

  async function signOut() {
    await supabase.auth.signOut()
    user.value = null
  }

  return { user, loading, init, signUp, signIn, signOut }
})