import { ref, computed } from "vue";
import { defineStore } from 'pinia';

export const useNewsStore = defineStore('newsStore', () => {
  const url = 'https://raw.githubusercontent.com/spineag/velovarash/master/';
  
  const news = ref([
    {id:1, title: 'Памптрек у Парку', date:'01.03.2024', type:'news',
     preview: url+'src/assets/img/news/news_pumptrack-min.jpeg',
     text:`03.03 підсипка верхнього шару суглинку та остаточне формування геометрії`},
    {id:2, title: 'Поліська Діч 2024', date:'20.01.2024', type:'news',
     preview: url+'src/assets/img/news/news_dich-min.jpg',
     text:`Cтежами предків!
Карколомно, пізнавально, поважально!
Афтепатнє рекавері та ТО - обов'язкові!`},
    {id:3, title: '100ВелоВатт 18+ 2024', date:'11.02.2024', type:'news',
     preview: url+'src/assets/img/news/news_100vw-min.jpeg', 
     text:`Новий формат, філософія та маршрут!
Ліс + болото + пісок - асфальт = *LOVE*`},
    {id:4, title: 'Волинський блуд', date:'22.01.2024', type:'news',
     preview: url+'src/assets/img/news/news_volyn_blud-min.jpeg',
     text:`Серія туристичних маршрутів на декілька днів, що об'єднують найкращі природні атракції історичної Волині. Плануються облаштовані місця ночівлі, харчування, допомоги і т.п.`},
    {id:5, title: 'Львівська Сотка 2024', date:'23.02.2024', type:'news',
     preview: url+'src/assets/img/news/news_lviv100-min.jpeg',
     text:`Реєстрація на легендарну велосотку відкрита!`},
    

    {id:51, title: 'Будова велосипеду', date:'25.01.2023', type:'blog',
     preview: url+'src/assets/img/news/blog_bike_anathomy-min.png',
     text:`Загальна інформація для майбутніх профі. Чому хороший велосипед - це дорого.`},
    {id:52, title: 'Домедична допомога', date:'29.04.2023', type:'blog',
     preview: url+'src/assets/img/news/blog_aid-min.jpg', 
     text:`Загальні знання та навички надання домедичної допомоги. Акцент на більш специфічних для велосипедистів видах ушкоджень та травм.`},
    {id:53, title: 'Париж - Брест - Париж', date:'12.09.2023', type:'blog',
     preview: url+'src/assets/img/news/blog_pbp-min.jpeg',
     text:`Загальна інформація, історія, рандонери, підготовка і чому не варто тим всим займатись:) Ну і т.д., і т.п.`},
    {id:54, title: 'Велорух Вараша', date:'17.12.2023', type:'blog',
     preview: url+'src/assets/img/news/blog_veloruh-min.jpeg',
     text:`Суб'єктивна розповідь про велорух в місті, волонтерів, спортсменів та великої кількості досвідчених їздунів.`},
    {id:55, title: 'Харчування та тренування', date:'22.07.2023', type:'blog',
     preview: url+'src/assets/img/news/blog_eat_train-min.jpeg',
     text:`Поради та короткі історії від велолюбителів міста.`},
    

    {id:101, title: 'Красавело із Рівело та Овсій.', date:'01.01.2024', type:'video',
     preview: url+'src/assets/img/news/video_ovsiy-min.jpeg',
     video:'',
     text:`Вони ще про це не знають, але очікуємо на їхній сумісний стрім на велотематику. Буде дуже круто та цікаво!))`},
    {id:102, title: 'Вараш - Коплище. День 1', date:'01.07.2023', type:'video',
     preview: url+'src/assets/img/news/video_koz1-min.jpg',
     video:'https://www.youtube.com/watch?v=qhiuFe9hFwE',
     text:`Соло байкпакінг вихідні на ровері. Їду до Коплища, це гранітний кар'єр біля Клесова у Рівненській області. Дуже чисте та охайне місце відпочинку. Там вже ночую в гамачку.`},
    {id:103, title: 'Коплище - Вараш. День 2', date:'13.07.2023', type:'video',
     preview: url+'src/assets/img/news/video_koz2-min.jpg', 
     video:'https://www.youtube.com/watch?v=BJYOQCM7h1k',
     text:`Другий день подорожі. Вертаюсь з Коплища до Вараша. Беру в брод Случ бо мост по весні змило. Потім ще Горинь але вже по місточку. Знову цілий день втікав.`},
    {id:104, title: 'Велотріп до Базальтового 2023', date:'15.06.2023', type:'video',
     preview: url+'src/assets/img/news/video_bazalt-min.jpg',
     video:'https://www.youtube.com/watch?v=YStZaVajeq4',
     text:`Щорічний, весняний, розкаточний машрут з Вараша до Базальтового на кр'єр. Маршрут на 150-160км.`},
       
 
    {id:151, title: 'Велоекоквест "Історія Волі"', date:'25.03.2024', type:'action',
     preview: url+'src/assets/img/news/action_quest-min.jpg',
     text:`Цікаві питання, різноманітні маршрути, болота й піски, лісові селфачі! Ну шо ше тра для щастя, га?) п.с. тіко не кажіть шо "піво"...`},
    {id:152, title: 'Велокубок Вараша 2024', date:'01.01.2024', type:'action',
     preview: url+'src/assets/img/news/action_cup-min.jpg',
     text:`Серія офлайн та онлайн заїздів з підсумомуванням результатів та виявлення найнаполегливіших велосипедистів міста. Шанси на табуретку мають всі!`},
  ]);

  const _dateConvert = (st)=>{
    let ar = st.split('.');
    return ar[1]+'/'+ar[0]+'/'+ar[2];
  };  
  news.value.sort((a,b)=>{
    let dateA = new Date(_dateConvert(a.date));
    let dateB = new Date(_dateConvert(b.date));
    return dateB-dateA;
  });

  let nType = ref('all');

  const newsByType = computed(()=>  news.value.filter((el) => nType.value == 'all' || el.type == nType.value)); 

  const setNewsType = (type) => nType.value = type;

  return { news, newsByType, nType, setNewsType, }
});
