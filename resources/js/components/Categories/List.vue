<template>
    <div>
        <Sidebar :user="user" />
        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Main content -->
            <section class="content">
                <div class="row">
                    <div class="col-12 mb-2 text-end">
                        <router-link
                            :to="{ name: 'categoryAdd' }"
                            class="btn btn-primary"
                            >Create</router-link
                        >
                    </div>
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h4>Category</h4>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Title</th>
                                                <th>Description</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody v-if="categories.length > 0">
                                            <tr
                                                v-for="(category,
                                                key) in categories"
                                                :key="key"
                                            >
                                                <td>{{ category.id }}</td>
                                                <td>{{ category.title }}</td>
                                                <td>
                                                    {{ category.description }}
                                                </td>
                                                <td>
                                                    <router-link
                                                        :to="{
                                                            name:
                                                                'categoryEdit',
                                                            params: {
                                                                id: category.id
                                                            }
                                                        }"
                                                        class="btn btn-success"
                                                        >Edit</router-link
                                                    >
                                                    <button
                                                        type="button"
                                                        @click="
                                                            deleteCategory(
                                                                category.id
                                                            )
                                                        "
                                                        class="btn btn-danger"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody v-else>
                                            <tr>
                                                <td colspan="4" align="center">
                                                    No Categories Found.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
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
import Navbar from "../global/Sidebar.vue";
import Sidebar from "../global/Sidebar";
import Footer from "../global/Footer";

export default {
    name: "categories",
    props: ["user", "breadcrumbs", "domain"],
    components: { Footer, Sidebar, Navbar },
    data() {
        return {
            categories: []
        };
    },
    mounted() {
        this.getCategories();
        this.getUser();
    },
    methods: {
        async getCategories() {
            await this.axios
                .get("/api/category")
                .then(response => {
                    this.categories = response.data;
                })
                .catch(error => {
                    console.log(error);
                    this.categories = [];
                });
        },
        deleteCategory(id) {
            if (confirm("Are you sure to delete this category ?")) {
                this.axios
                    .delete(`/api/category/${id}`)
                    .then(response => {
                        this.getCategories();
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        },
        async getUser() {
            await this.axios.get('api/user').then(response => {
                console.log("RESPONSE",response.body);
            });
        }
    }
};
</script>
