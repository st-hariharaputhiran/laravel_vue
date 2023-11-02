// Views
import Vue from "vue";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import Sidebar from "./components/global/Sidebar";
import Container from "./components/Container";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PasswordReset from "./components/auth/PasswordReset";
import PasswordUpdate from "./components/auth/PasswordUpdate";
// import { createRouter, createWebHistory } from "vue-router";
import VueRouter from "vue-router";
import VueAxios from "vue-axios";
import axios from "axios";
import { routes } from "./routes";

require("./bootstrap");

window.Vue = require("vue").default;
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

// const router = createRouter({
//     history: createWebHistory(),
//     routes: routes
// });
const router = new VueRouter({
    mode: "history",
    routes: routes
});

const app = new Vue({
    router,
    el: "#app",
    components: {
        Container,
        Navbar,
        Sidebar,
        Footer,
        Login,
        Register,
        PasswordReset,
        PasswordUpdate
    }
});
