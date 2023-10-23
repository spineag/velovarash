import { ref, computed } from "vue";
import { defineStore } from 'pinia';

export const useNewsStore = defineStore('newsStore', () => {
  const news = ref([
    {id:1, title: 'Памптрек у Парку. Фінал.', date:'01.03.2024', type:'news',
     preview:'https://www.villedemont-tremblant.qc.ca/public_upload/images/loisirs/parcs/thumbnails/parc_recreatif_de_velos1-600x355-000000.JPG',
     text:`03.03 підсипка верхнього шару суглинку та остаточне формування геометрії`},
    {id:2, title: 'Поліська Діч 2024', date:'20.01.2024', type:'news',
     preview:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTscOhpv6ov58qN5rcK5E5UpDVr7d40NzHh-Q&usqp=CAU',
     text:`Cтежами наших предків! Карколомно, пізнавально, поважально! Афтепатнє рекавері та ТО - обов'язкові!`},
    {id:3, title: '100ВелоВатт 18+ 2024', date:'11.01.2024', type:'news',
     preview:'https://www.whaka100.co.nz/uploads/1/1/0/1/110154713/published/cosmo-bloor.jpeg?1593552746', 
     text:`Абсолютно новий формат, філософія та маршрут!
     Ліс + болото + пісок - асфальт = *LOVE*`},
    {id:4, title: 'Волиньський блуд', date:'22.01.2024', type:'news',
     preview:'https://www.velociped.de/fileadmin/_processed_/d/1/csm_Mueritz_Nationalpark_227e5068a1.jpg',
     text:`Серія туристичних маршрутів на декілька днів, утворюючих своєріднне коло, яке об'єднує найкращі природні атракції історичної Волині. Плануються облаштовані місця ночівлі, харчування, допомоги і т.п.`},
    {id:5, title: 'Львівська Сотка 2024', date:'23.03.2024', type:'news',
     preview:'https://static.ukrinform.com/photos/2022_05/thumb_files/630_360_1651372637-440.jpeg',
     text:`Тільки у Львові - Пасха, день міста та велосотка в один день!) Поспішайте, адже вже в лютому всі місця ночівлі на травень будуть розібрані!)`},
    

    {id:51, title: 'Будова велосипеду', date:'25.01.2023', type:'blog',
     preview:'https://davisbikecollective.org/wp-content/uploads/2013/09/anatomy.png',
     text:`Загальна інформація для майбутніх профі. Чому хороший велосипед - це дорого.`},
    {id:52, title: 'Домедична допомога', date:'29.04.2023', type:'blog',
     preview:'https://images-eu.ssl-images-amazon.com/images/I/81uD6uB5PuL._AC_UL210_SR210,210_.jpg', 
     text:`Загальні знання та навички надання домедичної допомоги. Акцент на найспецифічніших для велоспедистів видах ушкоджень та травм.`},
    {id:53, title: 'Париж - Брест - Париж', date:'12.09.2023', type:'blog',
     preview:'https://upload.wikimedia.org/wikipedia/commons/1/12/Charles_Terront%2C_vainqueur_de_Paris-Brest-Paris_1891-_2.jpg',
     text:`Загальна інформація, рандонери, підготовка і чому не варто тим всим займатись:) Ну і т.д., і т.п.`},
    {id:54, title: 'Розвиток велоруху у Вараші', date:'17.12.2023', type:'blog',
     preview:'https://s2.wklcdn.com/image_29/889647/5299696/2765888Master.jpg',
     text:`Суб'єктивна розповідь про велорух в місті, волонтерів, спортсменів та великої кількості досвідчених їздунів.`},
    {id:55, title: 'Харчування та тренування', date:'22.07.2023', type:'blog',
     preview:'https://cyclistsauthority.com/wp-content/uploads/2023/03/what-a-cyclist-should-eat-and-dr.jpg',
     text:`Поради та короткі історії від велолюбителів міста.`},
    

    {id:101, title: 'Красавело із Рівело та Овсій.', date:'01.01.2024', type:'video',
     preview:'https://i.ytimg.com/vi/W3Je6wMGcXc/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCQB9T5THhFSwwIexjYMmqQtnjnoA',
     video:'',
     text:`Вони ще про це не знають, але очікуємо на їхній сумісний стрім на велотематику. Буде дуже круто та цікаво!))`},
    {id:102, title: 'Вараш - Коплище. День 1', date:'01.07.2023', type:'video',
     preview:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXnS0C33n2G_oCV2NNnrOJAAXU7O7ewfQUkyAY-aGaue65UVadK9Uj1LdUiL64OsXQ0oE&usqp=CAU',
     video:'https://www.youtube.com/watch?v=qhiuFe9hFwE',
     text:`Соло байкпакінг вихідні на ровері. Їду до Коплища, це гранітний кар'єр біля Клесова у Рівненській області. Дуже чисте та охайне місце відпочинку. Там вже ночую в гамачку.`},
    {id:103, title: 'Коплище - Вараш. День 2', date:'13.07.2023', type:'video',
     preview:'https://static.ukrinform.com/photos/2021_08/thumb_files/630_360_1628233990-141.jpg', 
     video:'https://www.youtube.com/watch?v=BJYOQCM7h1k',
     text:`Другий день подорожі. Вертаюсь з Коплища до Вараша. Беру в брод Случ бо мост по весні змило. Потім ще Горинь але вже по місточку. Знову цілий день втікав.`},
    {id:104, title: 'Велотріп до Базальтового 2023', date:'15.06.2023', type:'video',
     preview:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsxuQecEXZpBOCq9vrdmsnH8pNdufKTkmuIxJFOkTfR0teQYaeXDyWcTUkSZm1qtNZ_ic&usqp=CAU',
     video:'https://www.youtube.com/watch?v=YStZaVajeq4',
     text:`Щорічний, весняний , розкаточний машрут з Вараша  до Базальтового на кр'єр. Маршрут на 150-160км.`},
    {id:105, title: 'В. Капущак. Тренування велосипедистів', date:'22.03.2023', type:'video',
     preview:'https://s0.tchkcdn.com/i/17/1/271146_83a5185a_39e_144728083_898823934198211_6480942272931816090_n.jpg',
     video:'https://www.youtube.com/watch?v=gRjdYCKlDcY',
     text:`Вже почали тренуватися або плануєте?! Ми відповіли на деякі поширені питання стосовно фізичної підготовки велосипедистів.`},
    
 
    {id:151, title: 'Велоекоквест "Історія Волі"', date:'23.04.2024', type:'action',
     preview:'https://i0.wp.com/fissioncycles.com/wp-content/uploads/2022/12/FM-750-750x-Wood-Trail-1920px.jpg?fit=800%2C534&ssl=1',
     text:`Цікаві питання, різноманітні маршрути, болота й піски, лісові селфачі! Ну шо ше тра для щастя, га?) п.с. тіко не кажіть шо "піво"...`},
    {id:152, title: 'Велокубок Вараша 2024', date:'01.03.2024', type:'action',
     preview:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuUXMDLvFE-EG0IMFlaUdn_HWk-eh5O8ekYQ&usqp=CAU',
     text:`Серія офлайн та онлайн заїздів з підсумомуванням результатів та виявленню найнаполегливіших велосипедистів міста. Шанси на табуретку мають всі!`},
    ]);

  let nType = ref('all');
  
  // const _dateConvert = (st)=>{
  //   let ar = st.split('.');
  //   return ar[0]+'/'+ar[1]+'/'+ar[2];
  // };

  // const news = computed(()=>
  //   newsData.value.sort((a,b)=>{
  //     let dateA = new Date(_dateConvert(a.date));
  //     let dateB = new Date(_dateConvert(b.date));
  //     return dateA-dateB;
  //   })
  // );

  const newsByType = computed(()=>
    news.value.filter((el) => nType.value == 'all' || el.type == nType.value)
  ); 

  const setNewsType = (type) => nType.value = type;

  return { news, newsByType, nType, setNewsType, }
});
