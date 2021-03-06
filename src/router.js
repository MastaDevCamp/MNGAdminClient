import Router from 'vue-router';
import LoginPage from './pages/LoginPage.vue';
import HomePage from './pages/HomePage.vue';
import UsersPage from './pages/UserPage.vue';
import DefaultPage from './pages/DefaultPage.vue';
import NoticePage from './pages/NoticePage.vue';
import DeleteNoticePage from './pages/DeleteNoticePage.vue'
import CreateNoticePage from './pages/CreateNoticePage.vue';
import ModifyNoticePage from './pages/ModifyNoticePage.vue';
import EventPage from './pages/EventPage.vue';
import GoldPage from './pages/GoldPage.vue';
import RubyPage from './pages/RubyPage.vue';
import AlertPage from './pages/AlertPage.vue';
import VersionPage from './pages/VersionPage.vue';

// import messagesRoutes from '@/modules/messages/router';
// import peopleRoutes from '@/modules/people/router';

const baseRoutes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/users',
    name: 'users',
    component: UsersPage
  },
  {
    path: '/default',
    name: 'default',
    component: DefaultPage
  },
  {
    path: '/notice',
    name: 'notice',
    component: NoticePage, 
  },
  {
    path: '/notice/create',
    name: 'createNotice',
    component: CreateNoticePage, 
  },
  {
    path: '/notice/deleted',
    name: 'deletedNotice',
    component: DeleteNoticePage, 
  },
  {
    path: '/event',
    name: 'event',
    component: EventPage
  },
  {
    path: '/gold',
    name: 'gold',
    component: GoldPage
  },
  {
    path: '/ruby',
    name: 'ruby',
    component: RubyPage
  },
  {
    path: '/alert',
    name: 'alert',
    component: AlertPage
  },
  {
    path: '/version',
    name: 'version',
    component: VersionPage
  },
  {
    path: '*',
    redirect: {
      name: 'home'
    }
  }
];

// const routes = baseRoutes.concat(messagesRoutes, peopleRoutes);
// const routes = baseRoutes;
export default new Router({
  mode : 'history',
  routes : baseRoutes
});
