const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/kp',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/kp.vue'], resolve)
    },
];
export default routers;
