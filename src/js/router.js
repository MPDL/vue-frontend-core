import Vue from 'vue'
import VueRouter from 'vue-router'

const COMPONENTS = {
    App: () => import('../App.vue'),
    DefaultPage: () => import('../views/DefaultView.vue'),
    View1: () => import('../views/View1.vue')
}

const root = {
    mode: 'hash', // hash history
    scrollBehavior: () => ({ y: 0 }),
    routes: null
}

const createDynamicConfig = config => {
    root.routes = config.root
    const rt = _.find(root.routes, { children: 'structure' })
    rt.component = COMPONENTS.App
    rt.children = config.routes
    _.each(rt.children, l1 => {
        l1.component = COMPONENTS[l1.component] || COMPONENTS.DefaultPage
        _.each(l1.children, l2 => (l2.component = COMPONENTS[l2.component] || null))
    })
    return root
}
const getRouter = config => {
    Vue.use(VueRouter)
    const router = new VueRouter(createDynamicConfig(config))
    globals.registerRouter(router)
    return router
}
export default getRouter
