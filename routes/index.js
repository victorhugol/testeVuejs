import Vue from '../lib/vue.js';
import VueRouter from '../lib/vue-router.js';
import Topics from '../view/Topics.js';
import Topic from '../view/Topic.js';
import NewTopic from '../view/NewTopic.js';

Vue.use(VueRouter);


const routes = [{
        path: '/',
        name: 'dialogos',
        component: Topics
    },
    {
        name:"TopicById",
        path:"/dialogo/:id",
        component: Topic
    },
    {
        name:"NewTopic",
        path: "/novodialogo",
        component: NewTopic
    }
]

const router = new VueRouter({
    routes
})

export default router;
