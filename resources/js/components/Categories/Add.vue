<template>
    <div>
        <Sidebar :user="user" />
        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Main content -->
            <section class="content">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h4>Add Category</h4>
                            </div>
                            <div class="card-body">
                                <form @submit.prevent="create">
                                    <div class="row">
                                        <div class="col-12 mb-2">
                                            <div class="form-group">
                                                <label>Title</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    v-model="category.title"
                                                />
                                            </div>
                                        </div>
                                        <div class="col-12 mb-2">
                                            <div class="form-group">
                                                <label>Description</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    v-model="
                                                        category.description
                                                    "
                                                />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button
                                                type="submit"
                                                class="btn btn-primary"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /.content -->
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from "../global/Navbar";
import Sidebar from "../global/Sidebar";
import Footer from "../global/Footer";
export default {
    name: "add-category",
    props: ["user", "breadcrumbs", "domain"],
    components: { Footer, Sidebar, Navbar },
    data() {
        return {
            category: {
                title: "",
                description: ""
            }
        };
    },
    mounted() {
        this.getUser();
    },
    methods: {
        async create() {
            await this.axios
                .post("/api/category", this.category)
                .then(response => {
                    this.$router.push({ name: "categoryList" });
                })
                .catch(error => {
                    console.log(error);
                });
        },

        async getUser() {
            await this.axios.get('api/user').then(response => {
                console.log("RESPONSE",response.body);
            });
        }

    
}
};
</script>
