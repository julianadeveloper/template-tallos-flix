import { createStore} from "vuex";

export default createStore({
    state: () => ({
        token: localStorage.getItem("token") || "",
        role : localStorage.getItem("role") || "",
        _id: localStorage.getItem('sessionLogin') || "",
        name: ''


      }),
});
