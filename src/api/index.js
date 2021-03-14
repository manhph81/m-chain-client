import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req;
})
// api post
export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
// api product
export const fetchProducts = () => API.get('/products');
export const fetchProduct = (id) => API.get(`/products/${id}`);
export const createProduct = (newProduct) => API.post('/products', newProduct);
export const likeProducts = (id) => API.patch(`/products/${id}/likeProducts`);
export const updateProducts = (id, updatedProduct) => API.patch(`/products/${id}`, updatedProduct);
export const deleteProducts = (id) => API.delete(`/products/${id}`);
// api auth
export const signin=(formData) =>API.post('/users/signin',formData)
export const signup=(formData) =>API.post('/users/signup',formData)
//api actor - process
export const fetchProcess = () => API.get('/process');
export const createProcess = (newProcess) => API.post('/process', newProcess);
export const updateProcess = (id, updatedProcess) => API.patch(`/process/${id}`, updatedProcess);
export const deleteProcess = (id) => API.delete(`/process/${id}`);