import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
});
axiosInstance.interceptors.request.use(request => {
    return request;
})

const getAllUsers = async () => {
    return await axiosInstance.get('/users').then((response) => response.data.users);
}

let getPostsOfUserById = async (id: number) => {
    return await axiosInstance.get('/users/' + id + '/posts').then((response) => response.data)
};

export {getAllUsers, getPostsOfUserById}
