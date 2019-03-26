import Home from 'components/auth/Home.vue';
import UsersList from 'views/users/UsersList.vue';
import UserCreate from 'views/users/UserCreate.vue';

export default [
  {path: '/', component: Home, meta: {title: 'Главная'}},
  {path: '/users', component: UsersList, meta: {title: 'Пользователи'}},
  {path: '/users/create', component: UserCreate, meta: {title: 'Создание пользователя'}},
  {path: '/users/edit/:id', component: UserCreate, meta: {title: 'Редактирование пользователя'}},
];
