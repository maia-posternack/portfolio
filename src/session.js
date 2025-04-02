export const session = {
    set(key, value) {
      sessionStorage.setItem(key, JSON.stringify(value))
    },
    get(key) {
      const item = sessionStorage.getItem(key)
      try {
        return JSON.parse(item)
      } catch {
        return item
      }
    },
    clear() {
      sessionStorage.clear()
    }
  }
  