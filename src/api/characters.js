const API_URL = 'https://rickandmortyapi.com/api/'

const putSearchParamsToUrl = (url, params) => {
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value)
  })
}

export const charactersApi = {
  async getAllCharacters() {
    try {
      const fetchUrl = new URL(API_URL + 'character/')
      const response = await fetch(fetchUrl.toString(), {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      const {
        info: { pages, next },
        results,
      } = await response.json()

      return { pages, next, results }
    } catch (error) {
      console.log(error)
      return false
    }
  },
  async getCharactersByFilter(filter) {
    try {
      const fetchUrl = new URL(API_URL + 'character')
      putSearchParamsToUrl(fetchUrl, filter)
      const response = await fetch(fetchUrl.toString(), {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })

      const { info, results } = await response.json()
      return { pages: info?.pages, next: info?.next, results }
    } catch (error) {
      console.log(error)
      return false
    }
  },
  async getCharacterById(id) {
    try {
      const fetchUrl = new URL(API_URL + 'character/' + id)
      const response = await fetch(fetchUrl.toString(), {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })

      const result = await response.json()
      return { result }
    } catch (error) {
      console.log(error)
      return false
    }
  },
  async getPage(page, filters) {
    try {
      const fetchUrl = new URL(API_URL + 'character')
      fetchUrl.searchParams.set('page', page)
      putSearchParamsToUrl(fetchUrl, filters)
      const response = await fetch(fetchUrl.toString(), {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })

      const { info, results } = await response.json()

      return { pages: info?.pages, next: info?.next, results }
    } catch (error) {
      console.log(error)
      return false
    }
  },
  async getEpisodeByUrl(url) {
    try {
      const fetchUrl = new URL(url)
      const response = await fetch(fetchUrl.toString(), {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      })

      const result = await response.json()

      return result
    } catch (error) {
      console.log(error)
      return false
    }
  },
}
