
// This could be replaced with any api call instead of mocked json in the future
const fetchAll = async () => 
   new Promise((resolve,reject) => {
    fetch('./capi.json') 
    .then(response => response.json())
    .then(response => resolve(response))
    .catch(err => reject(err))
   })

export {
    fetchAll
}