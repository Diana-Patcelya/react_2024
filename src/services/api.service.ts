import axios from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
});
axiosInstance.interceptors.request.use(request => {
    return request;
})

const getAllUsers = async () :Promise<IUser[]> => {
    return await axiosInstance.get('/users').then((response) => response.data.users);
}

let getPostsOfUserById = async (id: number): Promise<IPost[]> => {
    return await axiosInstance.get('/users/' + id + '/posts').then((response) => response.data)
};

export {getAllUsers, getPostsOfUserById}
