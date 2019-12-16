import axios from 'axios';
const instanceusers = axios.create({
    baseURL: 'https://react-my-burger-75cb7.firebaseio.com/orders/-LvjZ5jr_LliJihoc33D/userId'
});

export default instanceusers;
