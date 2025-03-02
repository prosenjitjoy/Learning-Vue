import { ref, watchEffect, toValue, type ComputedRef } from 'vue'

export function useFetch(url: ComputedRef<string>) {
  const data = ref()
  const error = ref()

  watchEffect(async function () {
    data.value = null
    error.value = null

    const urlValue = toValue(url)

    try {
      await timeout()
      const res = await fetch(urlValue)
      data.value = await res.json()
    } catch (e: any) {
      error.value = e
    }
  })

  return { data, error }
}

// artificial delay
function timeout() {
  return new Promise<void>(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() > 0.3) {
        resolve()
      } else {
        reject(new Error('Random Error'))
      }
    }, 300)
  })
}