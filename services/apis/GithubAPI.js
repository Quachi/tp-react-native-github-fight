import axios from 'axios';

const client_id = "84d8c4aebdd19baeb805";
const client_secret = "dc774a64b387a91f952d09287053b0f5146432e3";

export const getPlayer = (name) => {
    return axios.get(`https://api.github.com/users/${name}?client_id=${client_id}&client_secret=${client_secret}`)
        .then(response => {
            return (response.data)
        })
        .catch(error => {
            return ("Not_find");
        })
}

export const getRepoPopular = (language = 'all') => {
    return axios.get(
        `https://api.github.com/search/repositories` +
        `?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories?client_id=+` +
        `${client_id}&client_secret=${client_secret}`
    )
        .then(response => {
            return (response.data)
        })
        .catch(error => {
            return ("Not_find");
        })
}
