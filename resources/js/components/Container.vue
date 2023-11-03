<template>
    <div>
        <Navbar v-if="temp.nav" :user="user" />

        <Sidebar v-if="temp.side" :user="user" />
        <!-- Content Wrapper. Contains page content -->
        <div v-if="temp.nav" class="content-wrapper"></div>
        <Footer v-if="temp.nav"/>
    </div>
</template>

<script>
import Navbar from "./global/Navbar";
import Sidebar from "./global/Sidebar";
import Footer from "./global/Footer";
export default {
    name: "Container",
    props: ["user", "breadcrumbs", "domain"],
    components: { Footer, Sidebar, Navbar },
    data() {
        return {
            temp: {
                side: false,
                nav: false
            }
        };
    },
    mounted() {
        // Load Js Files
        const jquery = document.createElement("script");
        jquery.setAttribute(
            "src",
            "https://code.jquery.com/jquery-3.7.1.min.js"
        );
        jquery.async = true;
        document.body.appendChild(jquery);

        const bootstrap = document.createElement("script");
        bootstrap.setAttribute(
            "src",
            "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        );
        bootstrap.async = true;
        document.body.appendChild(bootstrap);

        const adminlte = document.createElement("script");
        adminlte.setAttribute(
            "src",
            "https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.2.0/js/adminlte.min.js"
        );
        adminlte.async = true;
        document.body.appendChild(adminlte);

        const overlayScrollBars = document.createElement("script");
        overlayScrollBars.setAttribute(
            "src",
            "https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/1.10.1/js/jquery.overlayScrollbars.min.js"
        );
        overlayScrollBars.async = true;
        document.body.appendChild(overlayScrollBars);
        console.log("ROUTE", this.$route.path);
        if (this.$route.path == "/home") {
            this.temp.side = true;
            this.temp.nav = true;
        }
    }
};
</script>
