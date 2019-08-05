import axios from 'axios';

const readPullRequestService = () => (
  () => (
    axios.get('http://win10d-02518.northamerica.cerner.net:8999/api/pullRequests', {
      headers: {
        Accept: 'application/json',
      },
    }).then(response => ({ data: response.data })).catch(error => ({ error }))
  )
);

// If exporting multiple service factories this syntax is preferred:
// export { service1, service2, etc};
export default { readPullRequestService };