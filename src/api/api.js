import * as axios from 'axios';

const instance = axios.create({
    withCredetials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "6808dd11-9add-445a-ac42-dc94690a452d"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
    // getUsers2(currentPage = 1, pageSize = 10) => {
    //     return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
    //         .then(response => response.data);
    // }
}



