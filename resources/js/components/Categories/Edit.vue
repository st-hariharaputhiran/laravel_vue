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
                                <h4>Update Category</h4>
                            </div>
                            <div class="card-body">
                                <form @submit.prevent="update">
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
                                                Update
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
    name: "update-category",
    props: ["user", "breadcrumbs", "domain"],
    components: { Footer, Sidebar, Navbar },
    data() {
        return {
            category: {
                title: "",
                description: "",
                _method: "patch"
            }
        };
    },
    mounted() {
        this.showCategory();
    },
    methods: {
        async showCategory() {
            await this.axios
                .get(`/api/category/${this.$route.params.id}`)
                .then(response => {
                    const { title, description } = response.data;
                    this.category.title = title;
                    this.category.description = description;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        async update() {
            await this.axios
                .post(`/api/category/${this.$route.params.id}`, this.category)
                .then(response => {
                    this.$router.push({ name: "categoryList" });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>
