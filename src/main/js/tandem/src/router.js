import { createRouter, createWebHashHistory } from 'vue-router';


const routes = [
    {
        path: '/about',
        name: 'about',
        component: () => import('./pages/About.vue'),
    }, 
    {
        path: '/aboutMe',
        name: 'aboutMe',
        component: () => import('./pages/AboutMe.vue'),
    },     
    {
        path: '/login',
        name: 'login',
        component: () => import('./pages/Login.vue'),
    },{
        path: '/AboutWebSite',
        name: 'AboutWebSite',
        component: () => import('./pages/AboutWebSite.vue'),
    },
    {
        path: '/signup',
        name: 'signup',
        component: () => import('./pages/Signup.vue'),
    },
    {
        path: '/chat-panel',
        name: 'chat-panel',
        component: () => import('./pages/MessageChatPanel.vue'),
    },
    {
        path: '/',
        name: 'index',
        component: () => import('./pages/AboutWebSite.vue'),
    },{
        path: '/WordList',
        name: 'WordList',
        component: () => import('./pages/WordList.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;