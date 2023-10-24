import { ref, computed } from "vue";
import { defineStore } from 'pinia';

export const useProjectStore = defineStore('projectStore', () => {
  const url = 'https://raw.githubusercontent.com/spineag/velovarash/master/';

  const projects = ref([
    {
        id: 1,
        name: 'Памптрек',
        kind: 'PT',
        length: 0.1,
        hard: 1,
        elev: 3,
        type: 'sport, training',
        time: 35,
        priority: 1,
        location: 1, 
        preview: url+'src/assets/img/pump_small.jpg',
        photo: url+'src/assets/img/pump-min.jpeg',
        track: '',
        active: true
    },{
        id: 2,
        name: '100 ВелоВатт +',
        kind: 'XCM',
        length: 100,
        hard: 4,
        elev: 474,
        type: 'sport',
        time: 4*60*60,
        priority: 2,
        location: 1, 
        preview: url+'src/assets/img/100vw_small-min.png',
        photo: url+'src/assets/img/100vwplus-min.jpeg',
        track: '',
        active: true
      },{
        id:3,
        name: 'XCO Паркове',
        kind: 'XCO',
        length: 4.4,
        hard: 2,
        elev: 74,
        type: 'sport',
        time: 12*60 ,
        priority: 3,
        location: 1, 
        preview: url+'src/assets/img/parkove_small-min.jpeg',
        photo: url+'src/assets/img/parkove-min.jpeg',
        track: '',
        active: true
      },{
        id:4,
        name: 'Волинський блуд',
        kind: 'MDR', // multi-day race
        length: 500,
        hard: 4,
        elev: 1267,
        type: 'tourism',
        time: 30*60*60,
        priority: 1001,
        location: 2, 
        preview: url+'src/assets/img/polis_small-min.jpeg',
        photo: url+'src/assets/img/polis-min.jpeg',
        site:'',
        track: '',
        active: true
      },{
        id:5,
        name: 'Кубок Вараша',
        kind: 'CUP', // 
        length: 1,
        hard: 5,
        elev: 1,
        type: 'cup, sport',
        time: 1,
        priority: 1002,
        location: 2, 
        preview: url+'src/assets/img/cup_small.jpg',
        photo: url+'src/assets/img/olimp.jpeg',
        track: '',
        active: true
      // },{
      //   id:6,
      //   name: 'Медове коло',
      //   kind: 'free', // 
      //   length: 250,
      //   hard: 2,
      //   elev: 923,
      //   type: 'tourism',
      //   time: 16*60*60,
      //   priority: 1003,
      //   location: 2, 
      //   preview: 'https://rest.guru.ua/img/place_photo/1167/2560.jpg',
      //   photo: 'https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/217680275_857219068540532_6010218509034933315_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=NDA9-3i-dS0AX-Rnlrf&_nc_ht=scontent-waw1-1.xx&oh=00_AfCgRxQIKXwjqhTu32BXjWdJXPrjTcJ9jyPt3HSBFczZGg&oe=64EA8724',
      //   site: 'https://www.facebook.com/Medove.kolo2019/',
      //   track: '',
      //   active: true
      // },{
      //   id:7,
      //   name: 'TransUkraine',
      //   kind: 'MDR', // 
      //   length: 1500,
      //   hard: 5,
      //   elev: 5000,
      //   type: 'tourism',
      //   time: 7*24*60*60,
      //   priority: 10001,
      //   location: 3, 
      //   preview: 'https://yt3.googleusercontent.com/ytc/AOPolaSTmiePYMRwCAXKFSkCrXpckw7CpPU3MMSPZY7JMg=s900-c-k-c0x00ffffff-no-rj',
      //   photo: 'https://www.everyvelo.com/wp-content/uploads/2020/11/MG_9153.jpg',
      //   site: 'https://www.youtube.com/channel/UCnusq0cEepVKVAlftFn8u5Q',
      //   track: '',
      //   active: true
      // },{
      //   id:8,
      //   name: 'Gravel 200',
      //   kind: 'XCM', // 
      //   length: 200,
      //   hard: 4,
      //   elev: 820,
      //   type: 'sport',
      //   time: 7*24*60*60,
      //   priority: 10002,
      //   location: 3, 
      //   preview: 'https://cdn.mos.cms.futurecdn.net/MWhHZnfDF4TGjzixQxB8Sa-215-80.jpg',
      //   photo: 'https://i.ytimg.com/vi/Vrylwyv3QA0/maxresdefault.jpg',
      //   site: 'https://www.youtube.com/channel/UCnusq0cEepVKVAlftFn8u5Q',
      //   track: '',
      //   active: true
      // },{
      //   id:9,
      //   name: 'Randonneurs',
      //   kind: 'MDR', // 
      //   length: 1200,
      //   hard: 5,
      //   elev: '',
      //   type: 'brevet',
      //   time: '',
      //   priority: 10003,
      //   location: 3, 
      //   preview: 'https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/307756594_468396671983409_781942370345668549_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FncFgLq2BWcAX9OmScP&_nc_ht=scontent-waw1-1.xx&oh=00_AfCFBl0hTqrUyLZ5rnikpfdTRhgJL0ixtl6IT0kfGvFGlg&oe=64EB9B6F',
      //   photo: 'https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/306731248_468396668650076_8679510591017502621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=3ZCTZKL2FzkAX-XoDlm&_nc_ht=scontent-waw1-1.xx&oh=00_AfCb5w4G_9vz1IBw31GNoeEho__6Oad5GYWF7CjwilEbTQ&oe=64EBE9F1',
      //   site: 'https://randonneurs-ua.org/',
      //   track: '',
      //   active: true
      }
  ]);

  const forScreen = computed(() => projects.value.slice(0,5) );

  return { projects, forScreen }

});