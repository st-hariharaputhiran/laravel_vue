const Home = () =>
    import(
        "./components/Container.vue" /* webpackChunkName: "resource/js/components/category/list" */
    );
const CategoryList = () =>
    import(
        "./components/Categories/List.vue" /* webpackChunkName: "resource/js/components/category/list" */
    );
const CategoryCreate = () =>
    import(
        "./components/Categories/Add.vue" /* webpackChunkName: "resource/js/components/category/add" */
    );
const CategoryEdit = () =>
    import(
        "./components/Categories/Edit.vue" /* webpackChunkName: "resource/js/components/category/edit" */
    );

export const routes = [
    {
        name: "home",
        path: "/home",
        component: Home
    },
    {
        name: "categoryList",
        path: "/Category",
        component: CategoryList
    },
    {
        name: "categoryEdit",
        path: "/Category/:id/edit",
        component: CategoryEdit
    },
    {
        name: "categoryAdd",
        path: "/Category/add",
        component: CategoryCreate
    }
];
