import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNewsStore = defineStore('news', () => {
  const news = ref([
    {id:1, title: 'Disney підвищує тарифи Disney+', date:'1 липня', type:'news',
     preview:'https://itc.ua/wp-content/uploads/2023/08/107239681-1683811899003-gettyimages-1236668881-Exclusive_100-Minute_Sneak_Peek_Of_The_Beatles_Get_Back-835x470.png',
     text:`За словами Айгера, тариф Disney+ Premium (без реклами) коштуватиме з 12 жовтня 13,99 доларів. Це буде друге підвищення на 3 долари за рік, у грудні ціна встановилася на рівні 10,99 долара, передає Engadget. Також збільшиться до 17,99 долара підписка на сервіс Hulu без реклами.
     <br>Логічно, що стане дорожчою і підписка Duo Premium, що включає доступ до контенту Disney+ та Hulu, з жовтня коштуватиме 19,99 грн. Зате в Європі та Канаді стане доступним тарифний план із рекламою за 8 доларів щомісяця.`},
    {id:4, title: 'OnePlus дає довічну гарантію на екрани смартфонів', date:'13 липня', type:'news',
     preview:'https://itc.ua/wp-content/uploads/2023/08/OnePlus-9-Pro-Green-line-issue-768w-1078h.jpeg.jpg', 
     text:`За відомостями Android Authority, упродовж останнього року зростала кількість скарг користувачів смартфонів на дефекти екранів AMOLED – зелені смуги. Згідно з дослідженням сайту, проблема торкнулася користувачів смартфонів різних виробників та цінових категорій. У відповідь на хвилю скарг OnePlus запропонувала своїм клієнтам в Індії довічну гарантію на екрани.
     <br>OnePlus також пояснила, що довічна гарантія на екран поширюється на будь-який телефон OnePlus, з проблемою зеленої лінії в Індії, а не лише на окремі пристрої.
     <br>Компанія пропонує потерпілим від зеленої лінії значні знижки на оновлення смартфонів. OnePlus пропонує власникам OnePlus 8 Pro, 8T, 9 і 9R з дефектом екрана знижковий ваучер на купівлю нового OnePlus.
     <br>Змінні пристрої необхідно придбати лише через вебсайт OnePlus India, не в інших магазинах. Крім того, покупці мають стимул вибрати ексклюзивний для Індії OnePlus 10R – компанія пропонує додаткову знижку на них.
     <br>Попри глобальний характер проблеми, OnePlus стала чи не першою компанією, яка відреагувала на неї, хоча б в окремому регіоні`},
    {id:78, title: 'Sony очікує відновлення на ринку смартфонів тільки у 2024 році', date:'15 липня', type:'news',
     preview:'https://images.ladbible.com/resize?type=jpeg&quality=70&width=720&fit=contain&gravity=null&url=https://eu-images.contentstack.com/v3/assets/bltbc1876152fcd9f07/blt3a9e94386f8c02c5/649d44287dbd1e64b53834f3/russia.jpg',
     text:`Sony переглянула свій прогноз щодо відновлення ринку смартфонів. Тепер компанія очікує на покращення ситуації не раніше 2024 року. Переглянути прогноз довелося після оцінки погіршення попиту з боку Китаю та США.
     <br>Раніше Sony висловлювала впевненість у відновленні світового продажу смартфонів у другій половині 2023 року. Але в останні тижні технологічні компанії говорять про млявий попит, оскільки Китай щосили намагається перезавантажити свою постковідну економіку, а інфляційний тиск впливає на витрати в інших країнах.
     <br>Sony – найбільший у світі постачальник сенсорів для камер смартфонів. Компанія провела брифінг з аналітиками, під час якого підвищила свій прогноз річних доходів. Водночас Sony наголосила на іграх і розвагах та попередила, що ринок смартфонів залишається в депресії. Ці коментарі збіглися за часом зі зниженням попиту на смартфони, комп’ютери та планшети Apple.`},
    {id:43, title: 'Valve описала новий патч Dota 2 виключно за допомогою емоджі', date:'17 липня', type:'news',
     preview:'https://itc.ua/wp-content/uploads/2023/08/Znimok-ekrana-2023-08-09-o-09.42.32-835x568.png',
     text:`Смайлики в пітьмі<br>
     Агов, народ. У мене небагато часу. Я пробрався до Valve й поцупив повний список змін оновлення 7.34, тож публікую їх тут, щоби всі могли прочитати. Та, схоже, щось пішло не так під час копіювання, бо тепер усе стало смайликами. Однак якщо ви розумієтеся на смайликах, то це не проблема.`},
    {id:18, title: 'Липень офіційно став найспекотнішим місяцем', date:'22 липня', type:'news',
     preview:'https://itc.ua/wp-content/uploads/2023/07/greece-835x557.png',
     text:`Як і прогнозувалось, липень став найспекотнішим місяцем на Землі за всю історію спостережень*. Згідно з даними Європейського сервісу моніторингу клімату (C3S) середня температура минулого місяця на третину градуса перевищила рекорд 2019-го року (зазвичай рекорди побиваються лише на десяті чи соті градуса).
     <br>Після найспекотнішого в історії червня, липень не збирався приносити полегшення – вже 6-й день місяця став найспекотнішим в історії. Загалом середня глобальна температура в липні склала 16,95℃, перевищивши попередній рекорд, встановлений у 2019 році, на значні 0,33℃.`},
    {id:6, title: 'Скільки заробляють розробники ігор в Україні', date:'25 липня', type:'news',
     preview:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Money_Cash.jpg/640px-Money_Cash.jpg',
     text:`Загалом, середньостатистичний український розробник ігор виглядає так: 28-річний хлопець, який влаштований ФОПом та донатить на ЗСУ $150 щомісяця. У геймдеві нині працює 27% жінок. Майже половина розробників ігор (44%) живуть в Києві.
     <br>30% айтівців в GameDev складають розробники. На другому місці — тестувальники (22%), на третьому — дизайнери та художники (16%). Геймдизайнери складають 7% фахівців. Ще 6% — це менеджмент проєктів, а 5% — фахівці з HR, рекрутингу та навчання.`},
    
    {id:3, title: 'Жирона цікавиться Піхальонком', date:'1 липня', type:'blog',
     preview:'https://pic.sport.ua/images/news/0/15/185/orig_637162.jpg',
     text:`Іспанська «Жирона» після успішного трансферу Віктора Циганкова проаналізувала весь український ринок в пошуку можливих новачків.
     <br>Як стало відомо Sport.ua, окрім Артема Довбика, наставнику каталонців Мітчелу сподобалися два гравці – Олександр Піхальонок та Володимир Бражко. Обидва гравці розглядалися, як потенційна заміна Оріоль Ромеу, який влітку був проданий до «Барселони»`},
    {id:22, title: 'Карло АНЧЕЛОТТІ: «Ми повністю довіряємо Луніну»', date:'13 липня', type:'blog',
     preview:'https://pic.sport.ua/images/news/0/15/185/orig_637161.jpg', 
     text:`Головний тренер мадридського «Реала» Карло Анчелотті заявив, що повністю довіряє Андрію Луніну, який стає основним воротарем «вершкових» після травми Тібо Куртуа.
     <br>«Учорашній день був невдалим для всіх нас. Ми всі дуже засмучені тим, що трапилося з Куртуа. Дуже сумно. У футболі трапляються травми, ми сподіваємося, що він скоро видужає. Зараз ми повинні підтримувати Луніна. Ми повністю віримо в нього.
     <br>Я спокійний за Луніна. Йому не вистачає досвіду, але він дуже добре проявив себе на передсезонці.`},
    {id:53, title: 'До дна українцям у єврокубках уже зовсім близько', date:'15 липня', type:'blog',
     preview:'https://images.ladbible.com/resize?type=jpeg&quality=70&width=720&fit=contain&gravity=null&url=https://eu-images.contentstack.com/v3/assets/bltbc1876152fcd9f07/blt3a9e94386f8c02c5/649d44287dbd1e64b53834f3/russia.jpg',
     text:`Відбулися поєдинки кваліфікаційного раунду єврокубків за участю представників футбольної України: в Лізі Європи «Дніпро-1» розгромно програв «Славії» з Чехії (0:3), а київське «Динамо» поступилося грецькому «Арісу» (0:1).`},
    {id:14, title: 'ПСЖ змалював Мбаппе наслідки його відходу', date:'17 липня', type:'blog',
     preview:'https://pic.sport.ua/images/news/0/15/185/orig_637118.jpg',
     text:`Клуб «ПСЖ» звернувся з письмовим посланням до нападника Кіліана Мбаппе. У листі парижани пояснили уродженцю французької столиці всі наслідки, які спричинить його відхід із клубу вільним агентом влітку 2024 року.
     <br>«ПСЖ» намалював Мбаппе моторошну картинку майбутнього. У клубі впевнені, що відхід Мбаппе змусить виставити на трансфер низку гравців команди, переглянути процес інтеграції молодих футболістів і, найімовірніше, звільнити багатьох співробітників.`},
    {id:11, title: 'Динамо порушило переможну традицію', date:'22 липня', type:'blog',
     preview:'https://pic.sport.ua/images/news/0/15/185/orig_637107.jpg',
     text:`«Динамо» матчем із «Арісом» (0:1) дебютувало у Лізі конференцій. Кияни стали 5-м українським клубом, який виступав у цьому турнірі. І, на жаль, як і інші наші команди не змогли відсвяткувати вікторію у прем'єрному поєдинку. Мало того, динамівці вперше стартували у новому для себе єврокубковому турнірі з поразки. Раніше біло-сині п'ять разів на почин здобували перемогу і один - задовольнялися нічиєю.`},
    {id:37, title: 'Лунін – основний голкіпер Реала', date:'25 липня', type:'blog',
     preview:'https://pic.sport.ua/images/news/0/15/185/orig_637031.jpg',
     text:`Бельгійський воротар мадридського «Реала» Тібо Куртуа сьогодні, 10 серпня, на тренуванні команди отримав травму.
     <br>Після проведеного обстеження «галактікос» повідомили, що Куртуа травмував хрестоподібну зв'язку коліна. Із тренування Тібо йшов у сльозах.`},

    {id:9, title: 'Вараш - Коплище. День 1', date:'1 липня', type:'video',
     preview:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXnS0C33n2G_oCV2NNnrOJAAXU7O7ewfQUkyAY-aGaue65UVadK9Uj1LdUiL64OsXQ0oE&usqp=CAU',
     video:'https://www.youtube.com/watch?v=qhiuFe9hFwE',
     text:`Соло байкпакінг вихідні на ровері. Їду до Коплища, це гранітний кар'єр біля Клесова у Рівненській області. Дуже чисте та охайне місце відпочинку. Там вже ночую в гамачку. 
     <br>Ровер. Грунти. Легкий байкпакінг. Гамак LELEKA. Сумки KAVOON.
     <br>Маршрут Вараш - Жовкини - Великі Цапцевичи - Тутовичи - Сарни - Клесів з кар'єрами - Коплище.`},
    {id:31, title: 'Коплище - Вараш. День 2', date:'13 липня', type:'video',
     preview:'https://static.ukrinform.com/photos/2021_08/thumb_files/630_360_1628233990-141.jpg', 
     video:'https://www.youtube.com/watch?v=BJYOQCM7h1k',
     text:`Другий день подорожі. Вертаюсь з Коплища до Вараша. Беру в брод Случ бо мост по весні змило. Потім ще Горинь але вже по місточку. Знову цілий день втікав від грозових хмар і приїхав сухий.
     Знайшов ще 1 грунтобанчик і добавивив нової бруківочки в колекцію.`},
    {id:49, title: 'Велотріп до Базальтового 2023', date:'15 липня', type:'video',
     preview:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsxuQecEXZpBOCq9vrdmsnH8pNdufKTkmuIxJFOkTfR0teQYaeXDyWcTUkSZm1qtNZ_ic&usqp=CAU',
     video:'https://www.youtube.com/watch?v=YStZaVajeq4',
     text:`Щорічний, весняний , розкаточний машрут з Вараша  до Базальтового на кр'єр. Маршрут на 150-160км.`},
    {id:68, title: 'XCO в Іспанії', date:'17 липня', type:'video',
     preview:'https://volynonline.com/wp-content/uploads/2019/09/rechi-yaki-varto-vzyaty-z-soboyu.jpg',
     video:'https://www.youtube.com/watch?v=0uCO_DB_jsg',
     text:`Прям біля дому, де зараз мешкаю, прошли змагання по крос кантрі. Було цікаво показати, чим вони відрізняються від наших, та чому.`},
    {id:15, title: 'Тренування велосипедистів', date:'22 липня', type:'video',
     preview:'https://s0.tchkcdn.com/i/17/1/271146_83a5185a_39e_144728083_898823934198211_6480942272931816090_n.jpg',
     video:'https://www.youtube.com/watch?v=gRjdYCKlDcY',
     text:`Вже почали тренуватися або плануєте?! Ми відповіли на деякі поширені питання стосовно фізичної підготовки велосипедистів.`},
    {id:36, title: 'Смішні коменти, українські вело бренди', date:'25 липня', type:'video',
     preview:'https://alexcity.com.ua/wp-content/uploads/2021/11/20211014_085340_result.jpg',
     video:'https://www.youtube.com/watch?v=zx8VuOAsimI',
     text:`Це друга частина відповідей на ваші запитання. Це трішке смішно, але в нас є багато російськомовних запитань які я не зміг обійти стороною)`},
 
     {id:24, title: 'Забіг у Пирогові 2023', date:'1 липня', type:'action', date:'11.11.2023', 
     preview:'https://api.athletic-events.com/uploads/images/events/1955399b9d45d93f996e55ef8ff0ce84.png',
     text:`Святкуємо День Незалежності України на традиційному забігу в музеї просто неба в Пирогові!`},
     {id:7, title: 'Сильні . Незламні. 540 днів', date:'2 липня', type:'action', date:'01.10.2023',
     preview:'https://sport.if.ua/wp-content/uploads/2021/10/image1.jpg',
     text:`Обов’язкова умова - попередння реєстрація онлайн.
     <br>Випробуй себе та свої сили!
     <br>Привітаємо одне одного з Днем Незалежності України, бо разом ми сила!`},
     {id:37, title: 'Велосотка нумбер 1', date:'8 липня', type:'action', date:'09.09.2023',
     preview:'https://prostoinfo.com/uploads/images/default/noviivelosport.jpg',
     text:`Дуже файна та весела, та забавна, та брудна`},
     {id:51, title: 'Карпатська миля', date:'21 липня', type:'action', date:'28.09.2023',
     preview:'https://velolux.od.ua/storage/system/resized/xy_700x304/f74ee2f7337df416f97d7120cd5713c3_b05607eb.jpg',
     text:`Карпатська миля - спортивний комплекс фізичної підготовки сил спеціальних операцій ЗСУ!
     <br>Дистанція 1.6км, яка поділена на 4 вправи по 400метрів кожна!`},
     {id:75, title: 'Бескидський трейл', date:'29 липня', type:'action', date:'10.10.2023',
     preview:'https://runstyle.net/wp-content/uploads/2023/07/zobrazhennya_viber_2023-07-10_15-08-40-756-216x300.jpg',
     text:`Відчуй дух Карпат, силу водоспадів і озер, таємничність древніх печер, величність скель, поєднайся з природою, насолодись вражаючими краєвидами! Відкрий для себе круті локації!
     <br>Сколе - одна з кращих локацій для гірського забігу. Сюди дуже зручний доїзд будь-яким видом транспорту, великий вибір житла для оренди, безліч крутих місць для відвідувань.
     <br>Весь прибуток перерахуємо на підтримку наших воїнів ЗСУ - фонду "Повернись живим". Кожна передана гривня допоможе наблизити нашу Перемогу!`},
     {id:19, title: 'Новий Рік 2024', date:'32 липня', type:'action', date:'01.01.2024',
     preview:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJ2jXact3JAraU6x7hb7k-suO8c14aYfKHw&usqp=CAU',
     text:`Святкуємо сє свято вільними!`}
    ]);
//   const doubleCount = computed(() => count.value * 2);
//   function increment(){ count.value++ }

  return { news }
})
