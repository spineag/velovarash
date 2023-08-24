import { ref, computed } from "vue";
import { defineStore } from 'pinia';

export const useProjectStore = defineStore('projectStore', () => {
  const projects = ref([
    {
        id: 1,
        name: 'Качайгорб',
        type: 'PT',
        length: 0.1,
        hard: 2,
        elev: 10,
        type: 'sport,training',
        time: 752,
        priority: 1,
        location: 1, 
        preview: 'https://christchurch-adventure-park.imgix.net/assets/General/2afe15e2f7/Kids_Pump_Track_Christchurch_Adventure_Park_-v2__ResizedImageWzYwMCw0MDBd.jpg?auto=format',
        photo: 'https://www.forestryengland.uk/sites/default/files/styles/list_image_large_2x/public/media/AL_Forestry_England_2362321.JPG?itok=Z3mpzruI',
        track: '',
        active: true
    },{
        id: 2,
        name: '100 ВелоВатт',
        type: 'XCM',
        length: 100,
        hard: 1,
        elev: 174,
        type: 'sport',
        time: 4*60*60,
        priority: 2,
        location: 1, 
        preview: 'https://www.visti.rovno.ua/img/650/100-velowatt-asfalt-stezhki-brukivka-pisok-ta-slav20210614_8394.png',
        photo: 'https://cdn4.suspilne.media/images/resize/1040x1.78/0f28bdd182a52396.jpg',
        track: '',
        active: true
      },{
        id:3,
        name: 'Хомецька',
        type: 'XCO',
        length: 4.6,
        hard: 2,
        elev: 74,
        type: 'sport',
        time: 21*60 ,
        priority: 3,
        location: 1, 
        preview: 'https://www.rivnenews.com.ua/wp-content/uploads/2019/05/536566565.jpg',
        photo: 'https://www.revelstokemountainresort.com/site/assets/files/3866/hywel-williams--summer-2021-bob-danielmoore-martinlentz-janelleyipper-large_1.1700x815.webp',
        track: '',
        active: true
      },{
        id:4,
        name: 'Поліська Січ',
        type: 'MDR', // multi-day race
        length: 300,
        hard: 2,
        elev: 1267,
        type: 'tourism',
        time: 30*60*60,
        priority: 1001,
        location: 2, 
        preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjGH0ILiFZ8p2uhefNBgPSfxMD-myc9EwnA&usqp=CAU',
        photo: 'https://i.ytimg.com/vi/wm22sWAvj6g/maxresdefault.jpg',
        site:'https://way.rv.ua/',
        track: '',
        active: true
      },{
        id:5,
        name: '100 миль',
        type: 'XCM', // 
        length: 162,
        hard: 4,
        elev: 1571,
        type: 'brevet',
        time: 12*60*60,
        priority: 1002,
        location: 2, 
        preview: 'https://rivnepost.rv.ua/img/650/sprobuyte-proikhati-100-mil-menshe-nizh-za-10-hodi20190716_6954.jpg',
        photo: 'https://i.ytimg.com/vi/x-LtRbfrVOQ/maxresdefault.jpg',
        track: '',
        active: true
      },{
        id:6,
        name: 'Медове коло',
        type: 'free', // 
        length: 250,
        hard: 2,
        elev: 923,
        type: 'tourism',
        time: 16*60*60,
        priority: 1003,
        location: 2, 
        preview: 'https://rest.guru.ua/img/place_photo/1167/2560.jpg',
        photo: 'https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/217680275_857219068540532_6010218509034933315_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=NDA9-3i-dS0AX-Rnlrf&_nc_ht=scontent-waw1-1.xx&oh=00_AfCgRxQIKXwjqhTu32BXjWdJXPrjTcJ9jyPt3HSBFczZGg&oe=64EA8724',
        site: 'https://www.facebook.com/Medove.kolo2019/',
        track: '',
        active: true
      },{
        id:7,
        name: 'TransUkraine',
        type: 'MDR', // 
        length: 1500,
        hard: 3,
        elev: 5000,
        type: 'tourism',
        time: 7*24*60*60,
        priority: 10001,
        location: 3, 
        preview: 'https://yt3.googleusercontent.com/ytc/AOPolaSTmiePYMRwCAXKFSkCrXpckw7CpPU3MMSPZY7JMg=s900-c-k-c0x00ffffff-no-rj',
        photo: 'https://www.everyvelo.com/wp-content/uploads/2020/11/MG_9153.jpg',
        site: 'https://www.youtube.com/channel/UCnusq0cEepVKVAlftFn8u5Q',
        track: '',
        active: true
      },{
        id:8,
        name: 'Gravel 200',
        type: 'XCM', // 
        length: 200,
        hard: 3,
        elev: 820,
        type: 'sport',
        time: 7*24*60*60,
        priority: 10002,
        location: 3, 
        preview: 'https://cdn.mos.cms.futurecdn.net/MWhHZnfDF4TGjzixQxB8Sa-215-80.jpg',
        photo: 'https://i.ytimg.com/vi/Vrylwyv3QA0/maxresdefault.jpg',
        site: 'https://www.youtube.com/channel/UCnusq0cEepVKVAlftFn8u5Q',
        track: '',
        active: true
      },{
        id:9,
        name: 'Randonneurs',
        type: 'MDR', // 
        length: 1200,
        hard: 4,
        elev: '',
        type: 'brevet',
        time: '',
        priority: 10003,
        location: 3, 
        preview: 'https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/307756594_468396671983409_781942370345668549_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FncFgLq2BWcAX9OmScP&_nc_ht=scontent-waw1-1.xx&oh=00_AfCFBl0hTqrUyLZ5rnikpfdTRhgJL0ixtl6IT0kfGvFGlg&oe=64EB9B6F',
        photo: 'https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/306731248_468396668650076_8679510591017502621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=3ZCTZKL2FzkAX-XoDlm&_nc_ht=scontent-waw1-1.xx&oh=00_AfCb5w4G_9vz1IBw31GNoeEho__6Oad5GYWF7CjwilEbTQ&oe=64EBE9F1',
        site: 'https://randonneurs-ua.org/',
        track: '',
        active: true
      }
  ]);

  const forScreen = ()=> { return projects.value.slice(0,4) };

  return { projects, forScreen }

});