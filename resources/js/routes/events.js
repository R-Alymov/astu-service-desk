import EventsList from "views/events/EventsList";
import Event from "views/events/Event";
import EventHardware from "views/events/EventHardware";
import EventSoftware from "views/events/EventSoftware";

import ProcessorsList from "views/events/hardware/ProcessorsList";
import RamList from "views/events/hardware/RamList";
import SoftwareList from "views/events/software/SoftwareList";
import Software from "views/events/software/Software";

export default [
  {path: '/events', component: EventsList, meta: {title: 'Мероприятия'}},
  {path: '/events/create', component: Event, meta: {title: 'Создания мероприятия'}},
  {path: '/events/edit/:id', component: Event, meta: {title: 'Редактирование мероприятия'}},
  {path: '/events/hardware/:id', component: EventHardware, meta: {title: 'Редактирование мероприятия'}},
  {path: '/events/software/:id', component: EventSoftware, meta: {title: 'Редактирование мероприятия'}},

  {path: '/processors', component: ProcessorsList, meta: {title: 'Процессоры'}},
  {path: '/ram', component: RamList, meta: {title: 'Оперативная память'}},
  {path: '/software', component: SoftwareList, meta: {title: 'Софт'}},
  {path: '/software/edit/:id', component: Software, meta: {title: 'Редактировать софт'}},
  {path: '/software/create', component: Software, meta: {title: 'Добавить софт'}},
];
