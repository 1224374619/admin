import Login from './views/Login.vue'
// import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import RecordCenter from './views/Record/RecordCenter.vue'
// import Form from './views/nav1/Form.vue'
// import user from './views/nav1/user.vue'
import Cteam from './views/asp/Cteam.vue'
import Bteam from './views/asp/Bteam.vue'
import Allenter from './views/asp/Allenter.vue'
import Blackenter from './views/asp/Blackenter.vue'
import Verify from './views/asp/Verify.vue'
import Enterdetail from './views/asp/Enterdetail.vue'
import Tidings from './views/Tidings/Tidings.vue'
import NewsMessage from './views/Tidings/NewsMessage.vue'
import MessageDetail from './views/Tidings/MessageDetail.vue'
import Enterprise from './views/asp/Enterprise.vue'
import Hotwords from './views/asp/Hotwords.vue'
import Carousel from './views/asp/Carousel.vue'
import Position from './views/asp/Position.vue'
import Suggestion from './views/asp/Suggestion.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/Verify',
        component: Verify,
        name: '审核详情页',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '数据概览',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/RecordCenter',iconCls: 'fa fa-id-card-o', component: RecordCenter, name: '数据中心' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '用户管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/Cteam',iconCls: 'fa fa-id-card-o', component: Cteam, name: 'C端用户管理' },
            {
                path: '/Bteam',
                component: Bteam,
                redirect: '/Bteam/Allenter',
                iconCls: 'fa fa-address-card',
                name: '企业用户管理',
                children: [
                    { path: '/Bteam/Enterprise',iconCls: 'fa fa-address-card', component: Enterprise, name: '企业用户' },
                    { path: '/Bteam/Allenter',iconCls: 'fa fa-address-card', component: Allenter, name: '所有企业' },
                    { path: '/Bteam/Blackenter',iconCls: 'fa fa-address-card', component: Blackenter, name: '黑名单' },
                    { path: '/Bteam/Verify',iconCls: 'fa fa-address-card', component: Verify, name: '审核详情页',hidden: true },
                    { path: '/Bteam/Enterdetail',iconCls: 'fa fa-address-card', component: Enterdetail, name: '企业详情页',hidden: true },
                ]
         }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'C端内容管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/Hotwords',iconCls: 'fa fa-id-card-o', component: Hotwords, name: '热搜词管理' },
            { path: '/Carousel',iconCls: 'fa fa-id-card-o', component: Carousel, name: '首页轮播管理' },
            { path: '/Position',iconCls: 'fa fa-id-card-o', component: Position, name: '热门企业管理' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '用户反馈管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/Suggestion',iconCls: 'fa fa-id-card-o', component: Suggestion, name: '投诉建议管理' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '消息中心',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/Tidings',iconCls: 'fa fa-id-card-o', component: Tidings, name: '消息中心' },
            { path: '/NewsMessage',iconCls: 'fa fa-id-card-o', component: NewsMessage, name: '新建消息',hidden: true },
            { path: '/MessageDetail',iconCls: 'fa fa-id-card-o', component: MessageDetail, name: '消息详情页',hidden: true },
        ]
    },
    // {
    //     path: '/',
    //     component: Tidings,
    //     name: '',
    //     iconCls: 'fa fa-address-card',
    //     leaf: true,//只有一个节点
    //     children: [
    //         { path: '/page6', component: Page6, name: '导航三' }
    //     ]
    // },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;
