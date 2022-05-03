import { Router } from '@vaadin/router';
import './pages/home.page';
import './pages/posts.page';

const outlet = document.querySelector('#outlet');
const router = new Router(outlet);

router.setRoutes([
    { path: '/', component: 'home-page-genk' },
    { path: '/posts', component: 'posts-page-genk'},
    { path: '(.*)', redirect: '/' }
])

