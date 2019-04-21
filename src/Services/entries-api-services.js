import config from '../config'

const EntriesApiServices = {
  getAllEntries() {
    return fetch(`${config.API_ENDPOINT}/entries`, {
      headers: {},
    }).then(res => res.json())
  }
    
}

export default EntriesApiServices