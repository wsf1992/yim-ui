import VueRouter from 'vue-router'

const Test = () => import('@/views/test.vue')
const Home = () => import('@/views/Home.vue')
const Select = () => import('@/views/select/index.vue')
const Dialog = () => import('@/views/dialog/index.vue')
const Export = () => import('@/views/export/index.vue')
const Card = () => import('@/views/card/index.vue')
const ListDisplay = () => import('@/views/listDisplay/index.vue')
const Link = () => import('@/views/link/index.vue')
const Tabs = () => import('@/views/tabs/index.vue')
const Title = () => import('@/views/title/index.vue')
const Content = () => import('@/views/content/index.vue')
const Upload = () => import('@/views/upload/index.vue')
const routes = [
    { path: '/test', component: Test },
    { path: '/', component: Home },
    { path: '/link', component: Link },
    { path: '/select', component: Select },
    { path: '/dialog', component: Dialog },
    { path: '/export', component: Export },
    { path: '/card', component: Card },
    { path: '/listdisplay', component: ListDisplay },
    { path: '/tabs', component: Tabs },
    { path: '/title', component: Title },
    { path: '/content', component: Content },
    { path: '/upload', component: Upload },
]

export default new VueRouter({ routes })
