import { defineStore } from "pinia";
import { reactive, readonly } from "vue";
import type { AppState, MenuItem } from "../types";
import { initialAppState } from "../initialAppState";

export const useAppStore = defineStore('app', () => {
    const state = reactive<AppState>({ ...initialAppState });

    function addCategory(category: string) {
        if (!state.categories.includes(category)) {
            state.categories.push(category);
        }
    }

    function addMenuItem(menuItem: MenuItem) {
    const maxId = state.menuItems.reduce(
        (max, mi) => (mi.id > max ? mi.id : max),
        0
    )
    menuItem.id = maxId + 1
    state.menuItems.push(menuItem)
  }

  return {
    state: readonly(state),
    addCategory,
    addMenuItem
  }
})