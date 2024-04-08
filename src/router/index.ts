import VueRouter from 'vue-router'

const Test = () => import('@/views/test.vue')
const Home = () => import('@/views/Home.vue')
const Select = () => import('@/views/select/index.vue')
const Dialog = () => import('@/views/dialog/index.vue')
const Export = () => import('@/views/export/index.vue')
const Card = () => import('@/views/card/index.vue')
const ListDisplay = () => import('@/views/listDisplay/index.vue')
const Link = () => import('@/views/link/index.vue')
const Tabs = () => import('@/views/Tabs/index.vue')
const Title = () => import('@/views/Title/index.vue')
const Content = () => import('@/views/Content/index.vue')
const Upload = () => import('@/views/Upload/index.vue')
const Pagination = () => import('@/views/Pagination/index.vue')
const TitlePage = () => import('@/views/Page/Title/index.vue')
const Throttled = () => import('@/views/Methods/Throttled/index.vue')
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
    { path: '/pagination', component: Pagination },
    { path: '/titlepage', component: TitlePage },
    { path: '/throttled', component: Throttled },
]

export default new VueRouter({ routes })
