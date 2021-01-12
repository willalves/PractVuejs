import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './../components/HcodeSectionBanner'
import News from './../components/HcodeSectionNews'
import Notice from './../components/HcodeSectionNewsNotice'

Vue.use(VueRouter)

export default new VueRouter ({
    mode: 'history',
    linkExactActiveClass: 'link-active',
    routes: [{
        path: '/',
        component: Home
    },
    {
        path: '/news',
        component: News
    },
    {
        path: '/news/:idnotice',
        component: Notice
    }]
})
