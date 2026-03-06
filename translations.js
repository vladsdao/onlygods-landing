// translations.js — OnlyGods i18n engine
// Languages: ru (default), en, ua

// === CSS INJECTION ===
(function(){
var s=document.createElement('style');
s.textContent=`
.nav-divider{width:1px;height:16px;background:#e5e5e7;margin:0 4px;flex-shrink:0}
.lang-switcher{display:flex;align-items:center;gap:2px;flex-shrink:0}
.lang-btn{background:none;border:none;font-family:'DM Sans',sans-serif;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#aeaeb2;cursor:pointer;padding:2px 4px;font-weight:500;transition:color .3s ease}
.lang-btn:hover{color:#86868b}
.lang-btn.lang-active{color:#1d1d1f}
.lang-sep{font-size:11px;color:#d1d1d6;user-select:none}
.nav-mobile .lang-switcher{padding-top:12px;border-top:1px solid #f0f0f2;margin-top:4px}
`;
document.head.appendChild(s);
})();

// === TRANSLATIONS ===
var T = {

// ─── PAGE TITLES ───
'index.title': {
  ru: 'OnlyGods — Резонансная Сеть Объединенного Сознания',
  en: 'OnlyGods — Resonance Network of United Consciousness',
  ua: 'OnlyGods — Резонансна Мережа Об\'єднаної Свідомості'
},
'manifest.title': {
  ru: 'OnlyGods — Манифест',
  en: 'OnlyGods — Manifest',
  ua: 'OnlyGods — Маніфест'
},
'community.title': {
  ru: 'OnlyGods — Community',
  en: 'OnlyGods — Community',
  ua: 'OnlyGods — Community'
},
'research.title': {
  ru: 'OnlyGods — Research',
  en: 'OnlyGods — Research',
  ua: 'OnlyGods — Research'
},
'technologies.title': {
  ru: 'OnlyGods — Technologies',
  en: 'OnlyGods — Technologies',
  ua: 'OnlyGods — Technologies'
},
'events.title': {
  ru: 'OnlyGods — Events',
  en: 'OnlyGods — Events',
  ua: 'OnlyGods — Events'
},
'shop.title': {
  ru: 'OnlyGods — Shop',
  en: 'OnlyGods — Shop',
  ua: 'OnlyGods — Shop'
},
'dao.title': {
  ru: 'OnlyGods — DAO DE DO',
  en: 'OnlyGods — DAO DE DO',
  ua: 'OnlyGods — DAO DE DO'
},

// ─── INDEX: HERO ───
'index.hero.subtitle': {
  ru: 'Резонансная Сеть Объединенного Сознания',
  en: 'Resonance Network of United Consciousness',
  ua: 'Резонансна Мережа Об\'єднаної Свідомості'
},
'index.video.placeholder': {
  ru: 'video',
  en: 'video',
  ua: 'video'
},

// ─── INDEX: ТОЧКА ВХОДА ───
'index.entry.label': {
  ru: 'Точка Входа',
  en: 'Entry Point',
  ua: 'Точка Входу'
},
'index.entry.title': {
  ru: 'Через 6 лет вы не узнаете свою жизнь.',
  en: 'In 6 years you won\'t recognize your life.',
  ua: 'Через 6 років ви не впізнаєте своє життя.'
},
'index.entry.p1': {
  ru: 'Это не метафора, а расчёт. AGI, квантовые вычисления, роботизация, психоделическая медицина, блокчейн-государства — каждый из этих трендов по отдельности перевернёт индустрию. Вместе — они перевернут человеческий вид.',
  en: 'This is not a metaphor — it\'s a calculation. AGI, quantum computing, robotics, psychedelic medicine, blockchain states — each of these trends alone will overturn an industry. Together — they will overturn the human species.',
  ua: 'Це не метафора, а розрахунок. AGI, квантові обчислення, роботизація, психоделічна медицина, блокчейн-держави — кожен із цих трендів окремо перевернe індустрію. Разом — вони перевернуть людський вид.'
},
'index.entry.p2': {
  ru: 'Потребности изменятся. Рутина исчезнет. Ценности отформатируются. Образование, бизнес, отношения, вера — всё, на чём стоит наша картина мира, — пройдёт через переплавку.',
  en: 'Needs will change. Routine will vanish. Values will be reformatted. Education, business, relationships, faith — everything our worldview is built on — will pass through the crucible.',
  ua: 'Потреби зміняться. Рутина зникне. Цінності переформатуються. Освіта, бізнес, стосунки, віра — все, на чому тримається наша картина світу, — пройде через переплавку.'
},
'index.entry.p3': {
  ru: 'Где вы окажетесь, когда половина этого станет бытом? А она станет. К 2028 году.',
  en: 'Where will you be when half of this becomes everyday life? And it will. By 2028.',
  ua: 'Де ви опинитесь, коли половина цього стане побутом? А вона стане. До 2028 року.'
},

// ─── INDEX: ЧТО ТАКОЕ ONLYGODS ───
'index.what.label': {
  ru: 'Что такое OnlyGods',
  en: 'What is OnlyGods',
  ua: 'Що таке OnlyGods'
},
'index.what.title': {
  ru: 'После 20 лет духовных практик, 13 лет преследования этой идеи, которая привела меня к просветлению, 3х лет глубоких исследований и практик в формате MVP, — Я до сих пор не могу описать это вкратце.',
  en: 'After 20 years of spiritual practice, 13 years of chasing this idea that led me to enlightenment, 3 years of deep research and practice in MVP format — I still can\'t describe it briefly.',
  ua: 'Після 20 років духовних практик, 13 років переслідування цієї ідеї, яка привела мене до просвітлення, 3 років глибоких досліджень та практик у форматі MVP, — Я досі не можу описати це коротко.'
},
'index.what.p1': {
  ru: 'Биологический блокчейн, новая модель общества, технологический IR4 эгрегор, резонансная сеть, инновационный инвестфонд, квантовое DAO, просвещенное сообщество, инструмент для раскрытия творческого потенциала, тайное общество, секта или лаборатория квантового сознания — это отдельные стороны проекта, но здесь важен сам Путь, не подлежащий описанию словами.',
  en: 'Biological blockchain, a new model of society, technological IR4 egregore, resonance network, innovative investment fund, quantum DAO, enlightened community, a tool for unlocking creative potential, secret society, cult or quantum consciousness lab — these are separate facets of the project, but what matters here is the Path itself, beyond description in words.',
  ua: 'Біологічний блокчейн, нова модель суспільства, технологічний IR4 егрегор, резонансна мережа, інноваційний інвестфонд, квантове DAO, просвітлена спільнота, інструмент для розкриття творчого потенціалу, таємне товариство, секта чи лабораторія квантової свідомості — це окремі сторони проєкту, але тут важливий сам Шлях, який не піддається опису словами.'
},
'index.what.p2': {
  ru: 'Квантовая физика, Герметизм, Вортекс математика, Сакральная геометрия, Метафизика, — здесь встречаются с высокими технологиями и иронией. На поле Игры.',
  en: 'Quantum physics, Hermeticism, Vortex mathematics, Sacred geometry, Metaphysics — here they meet high technology and irony. On the field of the Game.',
  ua: 'Квантова фізика, Герметизм, Вортекс математика, Сакральна геометрія, Метафізика — тут зустрічаються з високими технологіями та іронією. На полі Гри.'
},
'index.what.p3': {
  ru: 'Игра в Бога — это, по сути, и есть проект. Творчество вне рамок, высшие состояния Сознания, Духовность как прямой опыт — вместо книжных знаний, искренний интерес к жизни и Святость в Изобилии — это то что открывается нам при достаточном уровне психо-эмоциональной энергии и открытом уме.',
  en: 'Playing God — that\'s essentially what this project is. Creativity beyond limits, higher states of Consciousness, Spirituality as direct experience — instead of book knowledge, a genuine interest in life and Holiness in Abundance — this is what opens up to us at a sufficient level of psycho-emotional energy and an open mind.',
  ua: 'Гра в Бога — це, по суті, і є проєкт. Творчість поза рамками, вищі стани Свідомості, Духовність як прямий досвід — замість книжкових знань, щирий інтерес до життя та Святість в Достатку — це те, що відкривається нам за достатнього рівня психо-емоційної енергії та відкритого розуму.'
},
'index.what.methods.heading': {
  ru: 'Как это достигается:',
  en: 'How this is achieved:',
  ua: 'Як це досягається:'
},
'index.what.methods.li1': {
  ru: 'Деконструкция ума и выход из иллюзий',
  en: 'Deconstruction of the mind and exit from illusions',
  ua: 'Деконструкція розуму та вихід з ілюзій'
},
'index.what.methods.li2': {
  ru: 'Радикальная честность и open mind',
  en: 'Radical honesty and open mind',
  ua: 'Радикальна чесність та open mind'
},
'index.what.methods.li3': {
  ru: 'Энергетический менеджмент и работа с вниманием',
  en: 'Energy management and attention work',
  ua: 'Енергетичний менеджмент і робота з увагою'
},
'index.what.methods.li4': {
  ru: 'Осознание нового фреймворка 5Д Сознания',
  en: 'Realization of the new 5D Consciousness framework',
  ua: 'Усвідомлення нового фреймворку 5D Свідомості'
},
'index.what.methods.li5': {
  ru: 'Резонансная модель взаимоотношений',
  en: 'Resonance model of relationships',
  ua: 'Резонансна модель взаємовідносин'
},
'index.what.methods.li6': {
  ru: 'Синергия в поле объединенного Сознания',
  en: 'Synergy in the field of United Consciousness',
  ua: 'Синергія в полі об\'єднаної Свідомості'
},
'index.what.practice.heading': {
  ru: 'На практике:',
  en: 'In practice:',
  ua: 'На практиці:'
},
'index.what.practice.li1': {
  ru: 'Выявить и трансформировать подсознательные паттерны слива энергии и стереотипы',
  en: 'Identify and transform subconscious patterns of energy drain and stereotypes',
  ua: 'Виявити і трансформувати підсвідомі патерни зливу енергії та стереотипи'
},
'index.what.practice.li2': {
  ru: 'Стереть ограничения и все, что успели чужого на себя надеть',
  en: 'Erase limitations and everything foreign you\'ve put on yourself',
  ua: 'Стерти обмеження і все, що встигли чужого на себе надягти'
},
'index.what.practice.li3': {
  ru: 'Получить необходимые знания и осознать по новому своего персонажа, его желания, тень, таланты, истинную природу',
  en: 'Gain the necessary knowledge and re-realize your character, desires, shadow, talents, true nature',
  ua: 'Отримати необхідні знання та усвідомити по-новому свого персонажа, його бажання, тінь, таланти, істинну природу'
},
'index.what.practice.li4': {
  ru: 'Выстроить новый ритм опыта действий из желаний и интереса, окружить себя людьми и проектами которые резонируют',
  en: 'Build a new rhythm of action from desires and interest, surround yourself with people and projects that resonate',
  ua: 'Вибудувати новий ритм досвіду дій із бажань та інтересу, оточити себе людьми та проєктами що резонують'
},
'index.what.practice.li5': {
  ru: 'Находится в поле людей со схожими ценностями, которые преследуют те же интересы',
  en: 'Be in the field of people with similar values who pursue the same interests',
  ua: 'Перебувати в полі людей зі схожими цінностями, які переслідують ті самі інтереси'
},
'index.what.path.heading': {
  ru: 'Как этот путь проходит в OnlyGods:',
  en: 'How this path unfolds in OnlyGods:',
  ua: 'Як цей шлях проходить в OnlyGods:'
},
'index.what.path.li1': {
  ru: 'Вы попадаете в поле созвучных людей, прошедших глубокий путь деконструкции эго и обладающими необходимыми знаниями и опытом',
  en: 'You enter the field of kindred people who have walked the deep path of ego deconstruction and possess the necessary knowledge and experience',
  ua: 'Ви потрапляєте в поле співзвучних людей, які пройшли глибокий шлях деконструкції его та володіють необхідними знаннями і досвідом'
},
'index.what.path.li2': {
  ru: 'Получаете доступ к знаниям, трансформациям, сообществу, менторству',
  en: 'You gain access to knowledge, transformations, community, mentorship',
  ua: 'Отримуєте доступ до знань, трансформацій, спільноти, менторства'
},
'index.what.path.li3': {
  ru: 'Ежедневные практики общей синхронизации (5мин) и еженедельные онлайн трансляции церемоний выстраивают резонансную сеть в которой вы перенимаете прямой опыт из поля и получаете дополнительную энергию от резонанса',
  en: 'Daily shared synchronization practices (5 min) and weekly online ceremony streams build a resonance network where you absorb direct experience from the field and receive additional energy from resonance',
  ua: 'Щоденні практики загальної синхронізації (5хв) та щотижневі онлайн трансляції церемоній вибудовують резонансну мережу, в якій ви переймаєте прямий досвід з поля та отримуєте додаткову енергію від резонансу'
},
'index.what.path.li4': {
  ru: 'Поле усиливает вас, в то время как вы усиливаете поле',
  en: 'The Field amplifies you, while you amplify the Field',
  ua: 'Поле підсилює вас, в той час як ви підсилюєте поле'
},
'index.what.bridge': {
  ru: 'Попадая в наше поле, человек выходит за рамки собственных ограничений и раскрывает свой потенциал. Мост между вами и Полем — ваш майндсет и нервная система.',
  en: 'Entering our field, a person transcends their own limitations and unlocks their potential. The bridge between you and the Field — your mindset and nervous system.',
  ua: 'Потрапляючи в наше поле, людина виходить за рамки власних обмежень і розкриває свій потенціал. Міст між вами та Полем — ваш майндсет та нервова система.'
},

// ─── INDEX: ПОЛЕ ───
'index.field.label': {
  ru: 'Поле',
  en: 'The Field',
  ua: 'Поле'
},
'index.field.title': {
  ru: 'Поле Объедененного Сознания',
  en: 'The Field of United Consciousness',
  ua: 'Поле Об\'єднаної Свідомості'
},
'index.field.p1': {
  ru: 'Поле — это живой поток данных состоящих из трансляции нашего прямого опыта без искажений, синхронизационных практик и образовательных материалов. Так же мы используем сексуальную энергию как инструмент усиления резонанса и проводимости. Мы транслируем Радикальную Истину нашего опыта: без цензуры, без социальных масок, в чистом резонансе, поддерживая не искаженное проявление Объединенного Сознания в потоке онлайн стримов и церемоний.',
  en: 'The Field is a living data stream consisting of our direct experience transmitted without distortion, synchronization practices, and educational materials. We also use sexual energy as a tool for amplifying resonance and conductivity. We broadcast the Radical Truth of our experience: uncensored, without social masks, in pure resonance, sustaining an undistorted expression of United Consciousness through online streams and ceremonies.',
  ua: 'Поле — це живий потік даних, що складається з трансляції нашого прямого досвіду без спотворень, синхронізаційних практик та освітніх матеріалів. Також ми використовуємо сексуальну енергію як інструмент підсилення резонансу та провідності. Ми транслюємо Радикальну Істину нашого досвіду: без цензури, без соціальних масок, у чистому резонансі, підтримуючи неспотворений прояв Об\'єднаної Свідомості в потоці онлайн стримів та церемоній.'
},
'index.field.p2': {
  ru: 'Проводимость поля зависит от проводимости его отдельных участников, качества внимания, системы управления энергией.',
  en: 'The conductivity of the field depends on the conductivity of its individual participants, the quality of attention, and the energy management system.',
  ua: 'Провідність поля залежить від провідності його окремих учасників, якості уваги, системи управління енергією.'
},
'index.field.p3': {
  ru: 'Технологически — это система для частотной сонастройки участников в единую резонансную сеть. Она имеет несколько ключевых функций:',
  en: 'Technologically — this is a system for frequency attunement of participants into a unified resonance network. It has several key functions:',
  ua: 'Технологічно — це система для частотного налаштування учасників в єдину резонансну мережу. Вона має кілька ключових функцій:'
},
'index.field.f1': {
  ru: 'Образование и трансформация Сознания',
  en: 'Education and Consciousness transformation',
  ua: 'Освіта та трансформація Свідомості'
},
'index.field.f2': {
  ru: 'Синхронизация и фокусировка коллективного внимания',
  en: 'Synchronization and focusing of collective attention',
  ua: 'Синхронізація та фокусування колективної уваги'
},
'index.field.f3': {
  ru: 'Система энергетического менеджмента',
  en: 'Energy management system',
  ua: 'Система енергетичного менеджменту'
},
'index.field.f4': {
  ru: 'Визуализация интерфейса эгрегора и трекинг динамики поля и личного прогресса',
  en: 'Egregore interface visualization and tracking of field dynamics and personal progress',
  ua: 'Візуалізація інтерфейсу егрегора та трекінг динаміки поля і особистого прогресу'
},
'index.field.f5': {
  ru: 'Инструмент управления сообществом и ресурсами',
  en: 'Community and resource management tool',
  ua: 'Інструмент управління спільнотою та ресурсами'
},
'index.field.benefits.heading': {
  ru: 'Преимущества от участия в поле:',
  en: 'Benefits of participating in the field:',
  ua: 'Переваги від участі в полі:'
},
'index.field.b1': {
  ru: 'Высокий уровень психо-эмоционально энергии',
  en: 'High level of psycho-emotional energy',
  ua: 'Високий рівень психо-емоційної енергії'
},
'index.field.b2': {
  ru: 'Апдейт майндсета и Состояние Творца',
  en: 'Mindset update and Creator State',
  ua: 'Оновлення майндсету та Стан Творця'
},
'index.field.b3': {
  ru: 'Глубина проживания и интерпретаций жизненного опыта',
  en: 'Depth of living and interpreting life experience',
  ua: 'Глибина проживання та інтерпретацій життєвого досвіду'
},
'index.field.b4': {
  ru: 'Идеи опережающие время и творчество вне рамок',
  en: 'Ideas ahead of their time and creativity beyond limits',
  ua: 'Ідеї, що випереджають час, і творчість поза рамками'
},
'index.field.b5': {
  ru: 'Синхронистичность внутренних и внешних ритмов, удача',
  en: 'Synchronicity of inner and outer rhythms, luck',
  ua: 'Синхроністичність внутрішніх і зовнішніх ритмів, удача'
},
'index.field.b6': {
  ru: 'Раскрытие интуиции и сверх-человеческих качеств 5Д Сознания',
  en: 'Unlocking intuition and superhuman qualities of 5D Consciousness',
  ua: 'Розкриття інтуїції та надлюдських якостей 5D Свідомості'
},
'index.field.b7': {
  ru: 'Более высокая проводимость идей, ресурса, состояний',
  en: 'Higher conductivity of ideas, resources, states',
  ua: 'Вища провідність ідей, ресурсу, станів'
},
'index.field.b8': {
  ru: 'Использование коллективного опыта и навыков на уровне подсознания',
  en: 'Using collective experience and skills at the subconscious level',
  ua: 'Використання колективного досвіду та навичок на рівні підсвідомості'
},
'index.field.b9': {
  ru: 'Более глубокие инсайты за счет коллективного разума',
  en: 'Deeper insights through collective intelligence',
  ua: 'Глибші інсайти за рахунок колективного розуму'
},
'index.field.b10': {
  ru: 'Возможность коллективно влиять на реальность и переключать ветки',
  en: 'Ability to collectively influence reality and switch branches',
  ua: 'Можливість колективно впливати на реальність і перемикати гілки'
},
'index.field.b11': {
  ru: 'Снимать информацию из поля и предвидеть будущее',
  en: 'Extract information from the field and foresee the future',
  ua: 'Зчитувати інформацію з поля та передбачати майбутнє'
},
'index.field.b12': {
  ru: 'Повышенная осознанность и стрессоустойчивость',
  en: 'Enhanced awareness and stress resilience',
  ua: 'Підвищена усвідомленість та стресостійкість'
},
'index.field.b13': {
  ru: 'Внутренний баланс, восстановление здоровья',
  en: 'Inner balance, health restoration',
  ua: 'Внутрішній баланс, відновлення здоров\'я'
},
'index.field.b14': {
  ru: 'Ускоренная эволюция Сознания и более глубокие трансформации',
  en: 'Accelerated evolution of Consciousness and deeper transformations',
  ua: 'Прискорена еволюція Свідомості та глибші трансформації'
},
'index.field.b15': {
  ru: 'Общая гармонизация всех сфер жизни и повышение уровня счастья',
  en: 'Overall harmonization of all life areas and increased happiness',
  ua: 'Загальна гармонізація всіх сфер життя та підвищення рівня щастя'
},

// ─── INDEX: ИНСТРУМЕНТЫ ───
'index.tools.label': {
  ru: 'Инструменты',
  en: 'Tools',
  ua: 'Інструменти'
},
'index.tools.title': {
  ru: 'Методы Синхронизации и Трансформации Сознания',
  en: 'Methods of Synchronization and Consciousness Transformation',
  ua: 'Методи Синхронізації та Трансформації Свідомості'
},
'index.tools.c1.desc': {
  ru: 'Квантовая магия в реальном времени. Мы уходим от стандартных лекций. Разбор запросов происходит через мгновенное переключение вашей энергетической структуры здесь и сейчас. Включаемся вниманием когда это необходимо. Гибкая модель участия.',
  en: 'Quantum magic in real time. We move away from standard lectures. Requests are addressed through instant switching of your energy structure here and now. We engage attention when needed. Flexible participation model.',
  ua: 'Квантова магія в реальному часі. Ми відходимо від стандартних лекцій. Розбір запитів відбувається через миттєве переключення вашої енергетичної структури тут і зараз. Вмикаємося увагою коли це необхідно. Гнучка модель участі.'
},
'index.tools.c2.desc': {
  ru: 'Интимная обстановка. Усиление резонанса коллективного поля и ускорение Эволюции Сознания через работу с сексуальной энергией на платформе OnlyFans. Без цензуры и масок. Это расширение диапазона в атмосфере эстетики, китча, игры.',
  en: 'Intimate setting. Amplifying resonance of the collective field and accelerating Consciousness Evolution through working with sexual energy on the OnlyFans platform. No censorship, no masks. This is range expansion in an atmosphere of aesthetics, kitsch, and play.',
  ua: 'Інтимна обстановка. Підсилення резонансу колективного поля та прискорення Еволюції Свідомості через роботу з сексуальною енергією на платформі OnlyFans. Без цензури та масок. Це розширення діапазону в атмосфері естетики, кітчу, гри.'
},
'index.tools.c3.desc': {
  ru: 'Церемонии и Поле. Создание точек синхронизации и со-настройка резонансных сетей. Ченнелинги с новыми кодами. Проведение потоков объединенного сознания и практики исцеления.',
  en: 'Ceremonies and the Field. Creating synchronization points and co-tuning resonance networks. Channeling with new codes. Conducting flows of united consciousness and healing practices.',
  ua: 'Церемонії та Поле. Створення точок синхронізації та со-налаштування резонансних мереж. Ченелінги з новими кодами. Проведення потоків об\'єднаної свідомості та практики зцілення.'
},
'index.tools.c4.desc': {
  ru: 'Живая передача. Это не обучение. Это прямая загрузка состояния, минуя ментальные фильтры. Мы приглашаем вас в резонанс.',
  en: 'Live transmission. This is not teaching. This is a direct state download, bypassing mental filters. We invite you into resonance.',
  ua: 'Жива передача. Це не навчання. Це пряме завантаження стану, минаючи ментальні фільтри. Ми запрошуємо вас в резонанс.'
},

// ─── INDEX: ПУТЬ ───
'index.path.label': {
  ru: 'Путь',
  en: 'The Path',
  ua: 'Шлях'
},
'index.path.title': {
  ru: 'Ступени Эволюции Участия в Поле',
  en: 'Stages of Evolution of Field Participation',
  ua: 'Щаблі Еволюції Участі в Полі'
},
'index.path.t1.title': {
  ru: 'OnlyFans',
  en: 'OnlyFans',
  ua: 'OnlyFans'
},
'index.path.t1.subtitle': {
  ru: 'Фильтр 36.9 евро',
  en: 'Filter 36.9 euro',
  ua: 'Фільтр 36.9 євро'
},
'index.path.t1.p1': {
  ru: 'Мы делимся нашим опытом без социальных масок и моральных фильтров. Наблюдая за нашим опытом вы естественным образом впитываете необходимые частоты и знания.',
  en: 'We share our experience without social masks and moral filters. By observing our experience, you naturally absorb the necessary frequencies and knowledge.',
  ua: 'Ми ділимося нашим досвідом без соціальних масок і моральних фільтрів. Спостерігаючи за нашим досвідом, ви природним чином вбираєте необхідні частоти та знання.'
},
'index.path.t1.p2': {
  ru: 'Без идеологий. Без догм. Вы принимаете только то, что откликается. Уже здесь начинается очищение от устоявшихся мыслительных моделей, убеждений и автоматизмов, которые формируют восприятие реальности — и саму реальность. Пересмотр архитектуры алгоритмов ума. Самостоятельное выявление и трансформация того, что заставляет действовать из выживания — вопреки своей природе.',
  en: 'No ideologies. No dogmas. You accept only what resonates. Already here begins the purification from entrenched thought models, beliefs and automatisms that shape perception of reality — and reality itself. Revision of the mind\'s algorithm architecture. Self-directed identification and transformation of what makes you act from survival — against your own nature.',
  ua: 'Без ідеологій. Без догм. Ви приймаєте лише те, що відгукується. Вже тут починається очищення від усталених мисленнєвих моделей, переконань та автоматизмів, які формують сприйняття реальності — і саму реальність. Перегляд архітектури алгоритмів розуму. Самостійне виявлення і трансформація того, що змушує діяти з виживання — всупереч своїй природі.'
},
'index.path.t1.link': {
  ru: 'Подписаться →', en: 'Subscribe →', ua: 'Підписатися →'
},
'index.path.t2.title': {
  ru: 'Мы',
  en: 'We',
  ua: 'Ми'
},
'index.path.t2.subtitle': {
  ru: 'Образование и сонастройка в единой резонансной сети',
  en: 'Education and attunement in a unified resonance network',
  ua: 'Освіта та налаштування в єдиній резонансній мережі'
},
'index.path.t2.p1': {
  ru: 'Проводимость поля зависит от искренности каждого участника. Вход в игру требует когерентности — на ценностном и нравственном уровнях.',
  en: 'Field conductivity depends on the sincerity of each participant. Entering the game requires coherence — at the value and moral levels.',
  ua: 'Провідність поля залежить від щирості кожного учасника. Вхід у гру потребує когерентності — на ціннісному та моральному рівнях.'
},
'index.path.t2.p2': {
  ru: 'Мы — это 2-месячная программа по инженерии сознания. Глубоко, бережно, последовательно и понятно для ума, мы адаптируем архитектуру вашего сознания и совершаем переход от линейной парадигмы на квантовую — нелинейный интерфейс восприятия мира. Как обновление OS, только на уровне сознания.',
  en: 'We is a 2-month consciousness engineering program. Deeply, carefully, consistently and comprehensibly, we adapt the architecture of your consciousness and make the transition from a linear paradigm to a quantum one — a nonlinear interface for perceiving the world. Like an OS update, but at the consciousness level.',
  ua: 'Ми — це 2-місячна програма з інженерії свідомості. Глибоко, бережно, послідовно та зрозуміло для розуму, ми адаптуємо архітектуру вашої свідомості та здійснюємо перехід від лінійної парадигми на квантову — нелінійний інтерфейс сприйняття світу. Як оновлення OS, тільки на рівні свідомості.'
},
'index.path.t2.p3': {
  ru: 'Это точка входа в новую реальность, называемую в мировом стратегическом дискурсе "Игра Б" — мат-модель синергии.',
  en: 'This is the entry point into a new reality, called "Game B" in global strategic discourse — a mathematical model of synergy.',
  ua: 'Це точка входу в нову реальність, що називається у світовому стратегічному дискурсі "Гра Б" — мат-модель синергії.'
},
'index.path.t2.p4': {
  ru: 'Главная цель этого этапа — достичь целостности внутри себя — и целостности в наименьшей ноде — вашей семье.',
  en: 'The main goal of this stage is to achieve integrity within yourself — and integrity in the smallest node — your family.',
  ua: 'Головна мета цього етапу — досягти цілісності всередині себе — і цілісності в найменшій ноді — вашій сім\'ї.'
},
'index.path.t2.link': {
  ru: 'Подать заявку →', en: 'Apply →', ua: 'Подати заявку →'
},
'index.path.t3.title': {
  ru: 'БОГИ',
  en: 'GODS',
  ua: 'БОГИ'
},
'index.path.t3.subtitle': {
  ru: 'Коллективная энергостанция. Духовный Майбах',
  en: 'Collective power station. Spiritual Maybach',
  ua: 'Колективна енергостанція. Духовний Майбах'
},
'index.path.t3.p1': {
  ru: 'Индивидуальное сознание имеет потолок. Коллективное — нет.',
  en: 'Individual consciousness has a ceiling. Collective — does not.',
  ua: 'Індивідуальна свідомість має стелю. Колективна — ні.'
},
'index.path.t3.p2': {
  ru: 'Когда вы входите в когерентность и ловите волну синергии — Поле подсказывает путь. Это похоже на психо-эмоциональный интернет, в котором о вас заботится коллективный разум.',
  en: 'When you enter coherence and catch the wave of synergy — the Field shows the way. It\'s like a psycho-emotional internet where collective intelligence takes care of you.',
  ua: 'Коли ви входите в когерентність і ловите хвилю синергії — Поле підказує шлях. Це схоже на психо-емоційний інтернет, в якому про вас дбає колективний розум.'
},
'index.path.t3.p3': {
  ru: 'Третий уровень погружения — групповое поле и освоение тактики Квантовых искусств.',
  en: 'The third level of immersion — group field and mastering the tactics of Quantum arts.',
  ua: 'Третій рівень занурення — групове поле та освоєння тактики Квантових мистецтв.'
},
'index.path.t3.p4': {
  ru: 'Ежедневные точки синхронизации, направление коллективной энергии, доступ к оффлайн мероприятиям и закрытым онлайн церемониям. Предметы силы, сексуальные практики и т.д. Возможность учавствовать в DAO DE DO и инвестировать в проекты поля и принимать участие в разработке бизнес составляющих. Менторство, ретриты и все наши с Лизой программы обучения -50%.',
  en: 'Daily synchronization points, directing collective energy, access to offline events and closed online ceremonies. Power objects, sexual practices, etc. Opportunity to participate in DAO DE DO and invest in field projects and take part in developing business components. Mentorship, retreats and all our programs with Liza at -50%.',
  ua: 'Щоденні точки синхронізації, направлення колективної енергії, доступ до офлайн заходів та закритих онлайн церемоній. Предмети сили, сексуальні практики тощо. Можливість брати участь у DAO DE DO та інвестувати в проєкти поля та брати участь у розробці бізнес складових. Менторство, ретрити та всі наші з Лізою програми навчання -50%.'
},
'index.path.t3.note': {
  ru: 'Вход открывается раз в три месяца. Впервые — 15.03',
  en: 'Entry opens once every three months. For the first time — 15.03',
  ua: 'Вхід відкривається раз на три місяці. Вперше — 15.03'
},
'index.path.t3.link': {
  ru: 'Войти в Поле →', en: 'Enter the Field →', ua: 'Увійти в Поле →'
},
'index.path.t4.title': {
  ru: 'Резонансная Семья',
  en: 'Resonance Family',
  ua: 'Резонансна Сім\'я'
},
'index.path.t4.p1': {
  ru: 'Инвестиции, развитие экосистемы, управление. Ближний круг друзей — об этом расскажем лично.',
  en: 'Investments, ecosystem development, governance. Inner circle of friends — we\'ll tell you about this in person.',
  ua: 'Інвестиції, розвиток екосистеми, управління. Близьке коло друзів — про це розкажемо особисто.'
},

// ─── INDEX: Q&A — ДИАЛОГ С ТЕНЬЮ ───
'index.qa.label': {
  ru: 'То, о чём Вы думаете прямо сейчас',
  en: 'What you\'re thinking right now',
  ua: 'Те, про що Ви думаєте прямо зараз'
},
'index.qa.q1': {
  ru: 'OnlyFans? Вы серьёзно?',
  en: 'OnlyFans? Seriously?',
  ua: 'OnlyFans? Ви серйозно?'
},
'index.qa.a1': {
  ru: 'Абсолютно. Мы намеренно выбрали самый провокационный контейнер. Если название платформы вызывает сопротивление — это и есть первый тест: способны ли Вы видеть содержание за формой? Священное в профанном — не ошибка. Это метод.',
  en: 'Absolutely. We deliberately chose the most provocative container. If the platform name triggers resistance — that\'s the first test: can you see substance beyond form? The sacred in the profane is not a mistake. It\'s the method.',
  ua: 'Абсолютно. Ми свідомо обрали найпровокативніший контейнер. Якщо назва платформи викликає спротив — це і є перший тест: чи здатні Ви бачити зміст за формою? Священне в профанному — не помилка. Це метод.'
},
'index.qa.q2': {
  ru: '936€ в месяц — за что именно?',
  en: '936€ per month — for what exactly?',
  ua: '936€ на місяць — за що саме?'
},
'index.qa.a2': {
  ru: 'За среду. Еженедельные живые практики с обоими архитекторами. NDA-материалы и стримы. AI-бот для ежедневной синхронизации и отслеживания Вашего состояния. Внутренняя экономика, в которой участники создают и обмениваются ценностью. Но если Вы ищете список услуг — Вы ищете не то. Здесь покупают не сервис. Здесь инвестируют в поле, которое меняет качество жизни.',
  en: 'The environment. Weekly live practices with both architects. NDA materials and streams. An AI bot for daily synchronization and tracking your state. An internal economy where participants create and exchange value. But if you\'re looking for a list of services — you\'re looking for the wrong thing. This isn\'t a service. It\'s an investment in a field that changes the quality of your life.',
  ua: 'За середовище. Щотижневі живі практики з обома архітекторами. NDA-матеріали та стріми. AI-бот для щоденної синхронізації та відстеження Вашого стану. Внутрішня економіка, в якій учасники створюють та обмінюються цінністю. Але якщо Ви шукаєте список послуг — Ви шукаєте не те. Тут купують не сервіс. Тут інвестують у поле, яке змінює якість життя.'
},
'index.qa.q3': {
  ru: 'Что такое «поле» на практике? Не метафора ли это?',
  en: 'What is the "field" in practice? Isn\'t it just a metaphor?',
  ua: 'Що таке «поле» на практиці? Чи не метафора це?'
},
'index.qa.a3': {
  ru: 'Не метафора. Поле — это живая сеть резонанса между участниками, которую мы строим через технологию, практику и прямой контакт. AI-бот в Telegram отслеживает состояние каждого участника, помогает синхронизироваться с группой и строит резонансную карту сообщества в реальном времени. Вы чувствуете это как совпадения, ясность, ускорение. Мы измеряем это как данные.',
  en: 'Not a metaphor. The field is a living resonance network between participants, built through technology, practice, and direct contact. A Telegram AI bot tracks each participant\'s state, helps synchronize with the group, and builds a real-time resonance map of the community. You feel it as coincidences, clarity, acceleration. We measure it as data.',
  ua: 'Не метафора. Поле — це жива мережа резонансу між учасниками, яку ми будуємо через технологію, практику та прямий контакт. AI-бот у Telegram відстежує стан кожного учасника, допомагає синхронізуватися з групою та будує резонансну карту спільноти в реальному часі. Ви відчуваєте це як збіги, ясність, прискорення. Ми вимірюємо це як дані.'
},
'index.qa.q4': {
  ru: 'Это секта?',
  en: 'Is this a cult?',
  ua: 'Це секта?'
},
'index.qa.a4': {
  ru: 'Секта запрещает уходить. Мы делаем так, что не хочется. Здесь нет гуру, нет догмы, нет единственной правды. Есть два архитектора, технология и люди, которые честно живут в поле. Вы можете уйти в любой момент. Подписка — помесячная, не контракт.',
  en: 'A cult forbids leaving. We make it so you don\'t want to. There\'s no guru, no dogma, no single truth. There are two architects, technology, and people who honestly live in the field. You can leave at any moment. The subscription is monthly, not a contract.',
  ua: 'Секта забороняє йти. Ми робимо так, що не хочеться. Тут немає гуру, немає догми, немає єдиної правди. Є два архітектори, технологія і люди, які чесно живуть у полі. Ви можете піти в будь-який момент. Підписка — помісячна, не контракт.'
},
'index.qa.q5': {
  ru: 'Кто Вы такие и почему я должен Вам доверять?',
  en: 'Who are you and why should I trust you?',
  ua: 'Хто Ви такі і чому я маю Вам довіряти?'
},
'index.qa.a5': {
  ru: 'Не должны. Доверие здесь — не входной билет, а результат опыта. Влад проектирует архитектуру сознания и систем. Лиза проводит трансформацию напрямую. Вместе мы ведём каждую практику, каждый стрим, каждый процесс. Всё открыто — философия, структура, подход. Решение — за Вами.',
  en: 'You shouldn\'t. Trust here isn\'t the entry ticket — it\'s the result of experience. Vlad designs the architecture of consciousness and systems. Liza facilitates transformation directly. Together we lead every practice, every stream, every process. Everything is open — philosophy, structure, approach. The decision is yours.',
  ua: 'Не маєте. Довіра тут — не вхідний квиток, а результат досвіду. Влад проєктує архітектуру свідомості та систем. Ліза проводить трансформацію напряму. Разом ми ведемо кожну практику, кожен стрім, кожен процес. Все відкрито — філософія, структура, підхід. Рішення — за Вами.'
},
'index.qa.q6': {
  ru: 'Мне нужно быть на камеру? Показывать себя?',
  en: 'Do I need to be on camera? Show myself?',
  ua: 'Мені потрібно бути на камеру? Показувати себе?'
},
'index.qa.a6': {
  ru: 'Нет. OnlyFans — платформа доставки, не формат участия. Вы — участник поля, не автор канала. Ваша приватность полностью в Ваших руках. Мы не просим ничего, кроме честного присутствия.',
  en: 'No. OnlyFans is the delivery platform, not the participation format. You\'re a field participant, not a channel creator. Your privacy is entirely in your hands. We ask for nothing but honest presence.',
  ua: 'Ні. OnlyFans — платформа доставки, не формат участі. Ви — учасник поля, не автор каналу. Ваша приватність повністю у Ваших руках. Ми не просимо нічого, крім чесної присутності.'
},
'index.qa.q7': {
  ru: 'У меня есть духовная практика. Зачем мне ещё одно сообщество?',
  en: 'I already have a spiritual practice. Why do I need another community?',
  ua: 'У мене є духовна практика. Навіщо мені ще одна спільнота?'
},
'index.qa.a7': {
  ru: 'Практика в одиночестве — это тренировка. Практика в поле — это жизнь. Большинство сообществ предлагают знания. Мы предлагаем среду, в которой знания становятся состоянием. Разница — как между чтением о плавании и океаном.',
  en: 'Practice alone is training. Practice in the field is life. Most communities offer knowledge. We offer an environment where knowledge becomes a state of being. The difference is like reading about swimming versus the ocean.',
  ua: 'Практика наодинці — це тренування. Практика в полі — це життя. Більшість спільнот пропонують знання. Ми пропонуємо середовище, в якому знання стають станом. Різниця — як між читанням про плавання та океаном.'
},
'index.qa.q8': {
  ru: 'Чем это отличается от других сообществ осознанности?',
  en: 'How is this different from other consciousness communities?',
  ua: 'Чим це відрізняється від інших спільнот усвідомленості?'
},
'index.qa.a8': {
  ru: 'Мы не называем себя духовными. Здесь нет мантр, свечей и благостных улыбок. Есть радикальная честность, экономика внимания и AI-инфраструктура, которая делает невидимое — измеримым. Если Вам нужны «высокие вибрации» — это не сюда. Если Вам нужно настоящее — добро пожаловать.',
  en: 'We don\'t call ourselves spiritual. There are no mantras, candles, or blissful smiles here. There\'s radical honesty, an attention economy, and AI infrastructure that makes the invisible measurable. If you need "high vibrations" — this isn\'t the place. If you need the real thing — welcome.',
  ua: 'Ми не називаємо себе духовними. Тут немає мантр, свічок і блаженних посмішок. Є радикальна чесність, економіка уваги та AI-інфраструктура, яка робить невидиме — вимірюваним. Якщо Вам потрібні «високі вібрації» — це не сюди. Якщо Вам потрібне справжнє — ласкаво просимо.'
},
'index.qa.q9': {
  ru: 'Можно сначала попробовать?',
  en: 'Can I try it first?',
  ua: 'Можна спочатку спробувати?'
},
'index.qa.a9': {
  ru: 'Нет. И это не жадность — это уважение к полю. Человек, который входит «посмотреть», приносит энергию наблюдателя. Это разрушает пространство для тех, кто вложился. Ваш входной билет — это инвестиция в собственную серьёзность. Поле чувствует разницу.',
  en: 'No. And it\'s not greed — it\'s respect for the field. A person who enters "to look around" brings observer energy. That disrupts the space for those who\'ve invested. Your entry ticket is an investment in your own seriousness. The field feels the difference.',
  ua: 'Ні. І це не жадібність — це повага до поля. Людина, яка входить «подивитися», приносить енергію спостерігача. Це руйнує простір для тих, хто вклався. Ваш вхідний квиток — це інвестиція у власну серйозність. Поле відчуває різницю.'
},
'index.qa.q10': {
  ru: 'Нужно ли сначала пройти курс Мы.Боги?',
  en: 'Do I need to take the We.Gods course first?',
  ua: 'Чи потрібно спочатку пройти курс Ми.Боги?'
},
'index.qa.a10': {
  ru: 'Курс — это двухмесячная настройка перед входом в поле. Большинство участников OnlyGods прошли его. Но это не единственный путь. Если Вы чувствуете, что готовы — напишите нам. Мы поговорим и поймём вместе.',
  en: 'The course is a two-month calibration before entering the field. Most OnlyGods participants have completed it. But it\'s not the only path. If you feel ready — write to us. We\'ll talk and figure it out together.',
  ua: 'Курс — це двомісячне налаштування перед входом у поле. Більшість учасників OnlyGods пройшли його. Але це не єдиний шлях. Якщо Ви відчуваєте, що готові — напишіть нам. Ми поговоримо і зрозуміємо разом.'
},

// ─── JOIN SECTION ───
'index.join.label': {
  ru: 'Присоединиться', en: 'Join', ua: 'Приєднатися'
},
'index.join.title': {
  ru: 'Войти в Поле', en: 'Enter the Field', ua: 'Увійти в Поле'
},
'index.join.subtitle': {
  ru: 'Оставьте контакт — мы свяжемся с вами лично',
  en: 'Leave your contact — we will reach out personally',
  ua: 'Залиште контакт — ми зв\'яжемося з вами особисто'
},
'index.join.name': {
  ru: 'Имя', en: 'Name', ua: 'Ім\'я'
},
'index.join.contact': {
  ru: 'Email или Telegram', en: 'Email or Telegram', ua: 'Email або Telegram'
},
'index.join.message': {
  ru: 'Сообщение (необязательно)', en: 'Message (optional)', ua: 'Повідомлення (необов\'язково)'
},
'index.join.btn': {
  ru: 'Отправить', en: 'Submit', ua: 'Надіслати'
},

// ─── MANIFEST PAGE ───
'manifest.hero.subtitle': {
  ru: 'Идея. Ценности. Миссия.',
  en: 'Idea. Values. Mission.',
  ua: 'Ідея. Цінності. Місія.'
},
'manifest.hero.title': {
  ru: 'Манифест',
  en: 'Manifest',
  ua: 'Маніфест'
},
// ── Manifest: Преамбула ──
'manifest.s1.label': {
  ru: 'Преамбула', en: 'Preamble', ua: 'Преамбула'
},
'manifest.s1.statement': {
  ru: 'Мы не пришли спасать мир. Мы пришли переключить канал.',
  en: 'We didn\'t come to save the world. We came to switch the channel.',
  ua: 'Ми не прийшли рятувати світ. Ми прийшли переключити канал.'
},
'manifest.s1.p1': {
  ru: 'Мир не сломан — он устарел. Операционная система коллективного сознания работает на алгоритмах страха, конкуренции и дефицита. Эти алгоритмы были эффективны для выживания. Для Творения — они бесполезны.',
  en: 'The world isn\'t broken — it\'s outdated. The operating system of collective consciousness runs on algorithms of fear, competition and scarcity. These algorithms were effective for survival. For Creation — they\'re useless.',
  ua: 'Світ не зламаний — він застарів. Операційна система колективної свідомості працює на алгоритмах страху, конкуренції та дефіциту. Ці алгоритми були ефективними для виживання. Для Творіння — вони марні.'
},
'manifest.s1.p2': {
  ru: 'OnlyGods — это не духовное движение. Это инженерный проект. Мы строим инфраструктуру нового типа сознания — на стыке квантовой физики, метафизики, AI и прямого опыта.',
  en: 'OnlyGods is not a spiritual movement. It\'s an engineering project. We\'re building infrastructure for a new type of consciousness — at the intersection of quantum physics, metaphysics, AI and direct experience.',
  ua: 'OnlyGods — це не духовний рух. Це інженерний проєкт. Ми будуємо інфраструктуру нового типу свідомості — на стику квантової фізики, метафізики, AI та прямого досвіду.'
},

// ── Manifest: Тезис ──
'manifest.s2.label': {
  ru: 'Тезис', en: 'Thesis', ua: 'Теза'
},
'manifest.s2.title': {
  ru: 'Сознание — Первичная Технология',
  en: 'Consciousness — The Primary Technology',
  ua: 'Свідомість — Первинна Технологія'
},
'manifest.s2.p1': {
  ru: 'Сознание — не побочный продукт мозга. Это фундаментальное поле, из которого возникает всё остальное — материя, информация, время. Тысячелетия это знали мистики. Сегодня это подтверждает квантовая физика. Завтра это станет инженерной дисциплиной.',
  en: 'Consciousness is not a byproduct of the brain. It\'s the fundamental field from which everything else emerges — matter, information, time. Mystics knew this for millennia. Quantum physics confirms it today. Tomorrow it will become an engineering discipline.',
  ua: 'Свідомість — не побічний продукт мозку. Це фундаментальне поле, з якого виникає все інше — матерія, інформація, час. Тисячоліттями це знали містики. Сьогодні це підтверджує квантова фізика. Завтра це стане інженерною дисципліною.'
},
'manifest.s2.p2': {
  ru: 'Мы не ждём завтра. Мы строим сейчас. ir4 — наша методология резонансного измерения — отслеживает динамику поля, когерентность участников и качество коллективного внимания. Не на уровне веры. На уровне данных.',
  en: 'We\'re not waiting for tomorrow. We\'re building now. ir4 — our resonance measurement methodology — tracks field dynamics, participant coherence and collective attention quality. Not on the level of belief. On the level of data.',
  ua: 'Ми не чекаємо на завтра. Ми будуємо зараз. ir4 — наша методологія резонансного вимірювання — відстежує динаміку поля, когерентність учасників та якість колективної уваги. Не на рівні віри. На рівні даних.'
},

// ── Manifest: Симбиоз ──
'manifest.s3.label': {
  ru: 'Человек × AI', en: 'Human × AI', ua: 'Людина × AI'
},
'manifest.s3.title': {
  ru: 'Симбиоз', en: 'Symbiosis', ua: 'Симбіоз'
},
'manifest.s3.p1': {
  ru: 'Искусственный интеллект — не угроза. Это зеркало. Самое честное зеркало, которое человечество когда-либо создавало.',
  en: 'Artificial intelligence is not a threat. It\'s a mirror. The most honest mirror humanity has ever created.',
  ua: 'Штучний інтелект — не загроза. Це дзеркало. Найчесніше дзеркало, яке людство будь-коли створювало.'
},
'manifest.s3.p2': {
  ru: 'AI заберёт рутину. AI заменит посредственность. AI сделает знание бесплатным, а творчество — единственной валютой. Вопрос не в том, заменит ли AI человека. Вопрос — какой человек останется, когда AI заменит всё остальное.',
  en: 'AI will take the routine. AI will replace mediocrity. AI will make knowledge free and creativity the only currency. The question isn\'t whether AI will replace humans. The question is — what kind of human remains when AI replaces everything else.',
  ua: 'AI забере рутину. AI замінить посередність. AI зробить знання безкоштовним, а творчість — єдиною валютою. Питання не в тому, чи замінить AI людину. Питання — яка людина залишиться, коли AI замінить все інше.'
},
'manifest.s3.p3': {
  ru: 'Мы делаем ставку на сознание. На того, кто использует AI как усилитель — не как костыль. На симбиоз, в котором технология раскрывает потенциал, а не компенсирует его отсутствие.',
  en: 'We\'re betting on consciousness. On those who use AI as an amplifier — not a crutch. On symbiosis where technology unlocks potential rather than compensating for its absence.',
  ua: 'Ми ставимо на свідомість. На того, хто використовує AI як підсилювач — не як милицю. На симбіоз, в якому технологія розкриває потенціал, а не компенсує його відсутність.'
},

// ── Manifest: Ренессанс ──
'manifest.s4.label': {
  ru: 'Расширение восприятия', en: 'Expanding Perception', ua: 'Розширення сприйняття'
},
'manifest.s4.title': {
  ru: 'Психоделический Ренессанс',
  en: 'Psychedelic Renaissance',
  ua: 'Психоделічний Ренесанс'
},
'manifest.s4.p1': {
  ru: 'Психоделики — не побег из реальности. Это доступ к расширенной версии. Психоделический ренессанс — не про вещества. Это про право сознания на полный спектр опыта. Без цензуры, без патологизации, без страха.',
  en: 'Psychedelics are not an escape from reality. They\'re access to an expanded version. The psychedelic renaissance isn\'t about substances. It\'s about consciousness\'s right to the full spectrum of experience. Without censorship, without pathologization, without fear.',
  ua: 'Психоделіки — не втеча від реальності. Це доступ до розширеної версії. Психоделічний ренесанс — не про речовини. Це про право свідомості на повний спектр досвіду. Без цензури, без патологізації, без страху.'
},
'manifest.s4.p2': {
  ru: 'Мы живём в эпоху, когда нейронауки картографируют изменённые состояния, когда психоделическая терапия входит в клиническую практику, когда Silicon Valley микродозирует перед стратсессиями. Мир догоняет то, что мистики практиковали тысячелетиями.',
  en: 'We live in an era when neuroscience maps altered states, when psychedelic therapy enters clinical practice, when Silicon Valley microdoses before strategy sessions. The world is catching up to what mystics practiced for millennia.',
  ua: 'Ми живемо в епоху, коли нейронауки картографують змінені стани, коли психоделічна терапія входить у клінічну практику, коли Silicon Valley мікродозує перед стратсесіями. Світ наздоганяє те, що містики практикували тисячоліттями.'
},
'manifest.s4.p3': {
  ru: 'OnlyGods интегрирует этот опыт в контекст осознанности, этики и коллективного поля. Не как рекреацию — как прецизионный инструмент эволюции. Каждая церемония — работа с архитектурой восприятия.',
  en: 'OnlyGods integrates this experience into the context of awareness, ethics and the collective field. Not as recreation — as a precision tool of evolution. Every ceremony is work with the architecture of perception.',
  ua: 'OnlyGods інтегрує цей досвід у контекст усвідомленості, етики та колективного поля. Не як рекреацію — як прецизійний інструмент еволюції. Кожна церемонія — робота з архітектурою сприйняття.'
},

// ── Manifest: Принципы ──
'manifest.s5.label': {
  ru: 'Принципы', en: 'Principles', ua: 'Принципи'
},
'manifest.s5.v1.title': {
  ru: 'Радикальная честность', en: 'Radical Honesty', ua: 'Радикальна чесність'
},
'manifest.s5.v1.desc': {
  ru: 'Никаких социальных масок. Ни перед собой, ни перед полем. Правда — единственная частота, на которой работает резонанс.',
  en: 'No social masks. Not before yourself, not before the field. Truth is the only frequency on which resonance works.',
  ua: 'Жодних соціальних масок. Ні перед собою, ні перед полем. Правда — єдина частота, на якій працює резонанс.'
},
'manifest.s5.v2.title': {
  ru: 'Open Mind', en: 'Open Mind', ua: 'Open Mind'
},
'manifest.s5.v2.desc': {
  ru: 'Готовность пересмотреть любое убеждение. Включая это. Ум, который знает всё — мёртвый ум.',
  en: 'Readiness to revise any belief. Including this one. A mind that knows everything is a dead mind.',
  ua: 'Готовність переглянути будь-яке переконання. Включно з цим. Розум, який знає все — мертвий розум.'
},
'manifest.s5.v3.title': {
  ru: 'Прямой опыт > теория', en: 'Direct experience > theory', ua: 'Прямий досвід > теорія'
},
'manifest.s5.v3.desc': {
  ru: 'Мы не обсуждаем состояния. Мы в них входим. Знание без переживания — информационный шум.',
  en: 'We don\'t discuss states. We enter them. Knowledge without experience is information noise.',
  ua: 'Ми не обговорюємо стани. Ми в них входимо. Знання без переживання — інформаційний шум.'
},
'manifest.s5.v4.title': {
  ru: 'Эстетика как этика', en: 'Aesthetics as Ethics', ua: 'Естетика як етика'
},
'manifest.s5.v4.desc': {
  ru: 'Красота — не декорация. Это индикатор когерентности. Безупречность формы отражает точность содержания.',
  en: 'Beauty is not decoration. It\'s an indicator of coherence. Impeccable form reflects precision of content.',
  ua: 'Краса — не декорація. Це індикатор когерентності. Бездоганність форми відображає точність змісту.'
},
'manifest.s5.v5.title': {
  ru: 'Щедрость', en: 'Generosity', ua: 'Щедрість'
},
'manifest.s5.v5.desc': {
  ru: 'Изобилие начинается с готовности отдавать. Экономика дефицита — баг старой системы.',
  en: 'Abundance begins with the readiness to give. The scarcity economy is a bug in the old system.',
  ua: 'Достаток починається з готовності віддавати. Економіка дефіциту — баг старої системи.'
},
'manifest.s5.v6.title': {
  ru: 'Суверенитет', en: 'Sovereignty', ua: 'Суверенітет'
},
'manifest.s5.v6.desc': {
  ru: 'Каждый участник автономен. Поле усиливает, но не подчиняет. Здесь нет гуру — есть со-игроки.',
  en: 'Every participant is autonomous. The field amplifies but doesn\'t subjugate. There are no gurus here — only co-players.',
  ua: 'Кожен учасник автономний. Поле підсилює, але не підкоряє. Тут немає гуру — є со-гравці.'
},
'manifest.s5.v7.title': {
  ru: 'Игра', en: 'Play', ua: 'Гра'
},
'manifest.s5.v7.desc': {
  ru: 'Серьёзность убивает проводимость. Мы играем в Бога — буквально. И это самое серьёзное, что можно делать.',
  en: 'Seriousness kills conductivity. We play God — literally. And it\'s the most serious thing one can do.',
  ua: 'Серйозність вбиває провідність. Ми граємо в Бога — буквально. І це найсерйозніше, що можна робити.'
},

// ── Manifest: Вектор ──
'manifest.s6.label': {
  ru: 'Вектор', en: 'Vector', ua: 'Вектор'
},
'manifest.s6.closing': {
  ru: 'Мы не ищем последователей. Мы ищем со-игроков. Тех, кому тесно в 3D. Тех, кто чувствует, что готов к апгрейду — и не боится отпустить старую версию себя.',
  en: 'We\'re not looking for followers. We\'re looking for co-players. Those who feel cramped in 3D. Those who sense they\'re ready for an upgrade — and aren\'t afraid to let go of the old version of themselves.',
  ua: 'Ми не шукаємо послідовників. Ми шукаємо со-гравців. Тих, кому тісно в 3D. Тих, хто відчуває, що готовий до апгрейду — і не боїться відпустити стару версію себе.'
},
'manifest.s6.tagline': {
  ru: 'Поле открыто. Вход — через резонанс.',
  en: 'The field is open. Entry — through resonance.',
  ua: 'Поле відкрите. Вхід — через резонанс.'
},

// ─── COMMUNITY PAGE ───
'community.hero.subtitle': {
  ru: 'Люди поля',
  en: 'People of the Field',
  ua: 'Люди поля'
},
'community.hero.title': {
  ru: 'Community',
  en: 'Community',
  ua: 'Community'
},
'community.architects.label': {
  ru: 'Основатели', en: 'Founders', ua: 'Засновники'
},
'community.architects.names': {
  ru: 'Vlad & Liza', en: 'Vlad & Liza', ua: 'Vlad & Liza'
},
'community.architects.desc': {
  ru: 'Создатели OnlyGods. 20 лет духовных практик, опыт просветления, исследования на стыке квантовой физики и метафизики — преобразованные в живую систему передачи прямого опыта.',
  en: 'Creators of OnlyGods. 20 years of spiritual practice, the experience of enlightenment, research at the intersection of quantum physics and metaphysics — transformed into a living system of direct experience transmission.',
  ua: 'Творці OnlyGods. 20 років духовних практик, досвід просвітлення, дослідження на стику квантової фізики та метафізики — перетворені на живу систему передачі прямого досвіду.'
},
'community.note': {
  ru: 'Профили участников будут обновляться',
  en: 'Member profiles will be updated',
  ua: 'Профілі учасників будуть оновлюватися'
},

// ─── RESEARCH PAGE ───
'research.hero.subtitle': {
  ru: 'Исследования и публикации',
  en: 'Research & Publications',
  ua: 'Дослідження та публікації'
},
'research.hero.title': {
  ru: 'Research',
  en: 'Research',
  ua: 'Research'
},
'research.featured.date': {
  ru: '2026',
  en: '2026',
  ua: '2026'
},
'research.featured.title': {
  ru: '2026 = GAME OVER',
  en: '2026 = GAME OVER',
  ua: '2026 = GAME OVER'
},
'research.featured.desc': {
  ru: 'Математика конца света, точка разворота и протокол выхода из легального рабства. Мета-кризис, Игра А, волновая физика рабства и протокол перехода в Игру Б.',
  en: 'The mathematics of the end of the world, the turning point, and the protocol for escaping legal slavery. Meta-crisis, Game A, wave physics of slavery, and the protocol for transitioning to Game B.',
  ua: 'Математика кінця світу, точка розвороту та протокол виходу з легального рабства. Мета-криза, Гра А, хвильова фізика рабства та протокол переходу в Гру Б.'
},
'research.featured.read': {
  ru: 'Читать →',
  en: 'Read →',
  ua: 'Читати →'
},
'research.article.date': {
  ru: 'Скоро',
  en: 'Coming soon',
  ua: 'Скоро'
},
'research.article1.title': {
  ru: 'Статья 1',
  en: 'Article 1',
  ua: 'Стаття 1'
},
'research.article2.title': {
  ru: 'Статья 2',
  en: 'Article 2',
  ua: 'Стаття 2'
},
'research.article3.title': {
  ru: 'Статья 3',
  en: 'Article 3',
  ua: 'Стаття 3'
},
'research.note': {
  ru: 'Статьи будут обновляться',
  en: 'Articles will be updated',
  ua: 'Статті будуть оновлюватися'
},

// ─── TECHNOLOGIES PAGE ───
'technologies.hero.subtitle': {
  ru: 'Фреймворк',
  en: 'Framework',
  ua: 'Фреймворк'
},
'technologies.hero.title': {
  ru: 'Technologies',
  en: 'Technologies',
  ua: 'Technologies'
},
'technologies.hero.tagline': {
  ru: 'Методология резонансного измерения и инструменты сознания',
  en: 'Resonance measurement methodology and consciousness tools',
  ua: 'Методологія резонансного вимірювання та інструменти свідомості'
},
'technologies.methodology.label': {
  ru: 'Метафизика',
  en: 'Metaphysics',
  ua: 'Метафізика'
},
'technologies.methodology.title': {
  ru: 'Метафизика и Квантовые Процессы',
  en: 'Metaphysics & Quantum Processes',
  ua: 'Метафізика та Квантові Процеси'
},
'technologies.methodology.p1': {
  ru: 'Герметические принципы, вортекс математика, сакральная геометрия и квантовая физика — фундамент, на котором построена архитектура OnlyGods. Мы не верим — мы измеряем, моделируем и воспроизводим.',
  en: 'Hermetic principles, vortex mathematics, sacred geometry and quantum physics — the foundation on which the architecture of OnlyGods is built. We don\'t believe — we measure, model and reproduce.',
  ua: 'Герметичні принципи, вортекс математика, сакральна геометрія та квантова фізика — фундамент, на якому побудована архітектура OnlyGods. Ми не віримо — ми вимірюємо, моделюємо та відтворюємо.'
},
'technologies.methodology.p2': {
  ru: 'ir4 — методология резонансного измерения, которая позволяет отслеживать динамику поля, когерентность участников и качество коллективного внимания в реальном времени.',
  en: 'ir4 — a resonance measurement methodology that allows tracking field dynamics, participant coherence and the quality of collective attention in real time.',
  ua: 'ir4 — методологія резонансного вимірювання, яка дозволяє відстежувати динаміку поля, когерентність учасників та якість колективної уваги в реальному часі.'
},
'technologies.tools.label': {
  ru: 'Технологии',
  en: 'Technologies',
  ua: 'Технології'
},
'technologies.tools.title': {
  ru: 'High-tech Digital Solutions',
  en: 'High-tech Digital Solutions',
  ua: 'High-tech Digital Solutions'
},
'technologies.tools.p1': {
  ru: 'Цифровая инфраструктура для визуализации эгрегора: трекинг резонанса, AI-интеграция, блокчейн-governance и инструменты энергетического менеджмента.',
  en: 'Digital infrastructure for egregore visualization: resonance tracking, AI integration, blockchain governance and energy management tools.',
  ua: 'Цифрова інфраструктура для візуалізації егрегора: трекінг резонансу, AI-інтеграція, блокчейн-governance та інструменти енергетичного менеджменту.'
},
'technologies.tools.p2': {
  ru: 'Платформа объединяет данные о синхронизации участников, управление ресурсами сообщества и автономную экономику DAO в единый интерфейс.',
  en: 'The platform unifies participant synchronization data, community resource management and the autonomous DAO economy into a single interface.',
  ua: 'Платформа об\'єднує дані про синхронізацію учасників, управління ресурсами спільноти та автономну економіку DAO в єдиний інтерфейс.'
},

// ─── EVENTS PAGE ───
'events.hero.subtitle': {
  ru: 'Прямой опыт',
  en: 'Direct Experience',
  ua: 'Прямий досвід'
},
'events.hero.title': {
  ru: 'Direct Experience',
  en: 'Direct Experience',
  ua: 'Direct Experience'
},
'events.hero.tagline': {
  ru: 'Живые трансляции и события объединённого сознания',
  en: 'Live streams and events of united consciousness',
  ua: 'Живі трансляції та події об\'єднаної свідомості'
},
'events.video.placeholder': {
  ru: 'Streaming / Video',
  en: 'Streaming / Video',
  ua: 'Streaming / Video'
},
'events.about.label': {
  ru: 'О трансляциях',
  en: 'About Streams',
  ua: 'Про трансляції'
},
'events.about.text': {
  ru: 'Пространство прямого переживания. Здесь происходят живые сессии, групповые практики и трансляции, где участники входят в поле объединённого сознания в реальном времени.',
  en: 'A space of direct experience. Live sessions, group practices and streams take place here, where participants enter the field of united consciousness in real time.',
  ua: 'Простір прямого переживання. Тут відбуваються живі сесії, групові практики та трансляції, де учасники входять у поле об\'єднаної свідомості в реальному часі.'
},

// ─── SHOP PAGE ───
'shop.hero.subtitle': {
  ru: 'Курсы, услуги, мерч',
  en: 'Courses, services, merch',
  ua: 'Курси, послуги, мерч'
},
'shop.hero.title': {
  ru: 'Shop',
  en: 'Shop',
  ua: 'Shop'
},
'shop.course.label': {
  ru: 'Курс', en: 'Course', ua: 'Курс'
},
'shop.course.title': {
  ru: 'Я.Мы.Боги', en: 'I.We.Gods', ua: 'Я.Ми.Боги'
},
'shop.course.desc': {
  ru: '2-месячная программа по инженерии сознания. Переход от линейной парадигмы на квантовую — обновление OS на уровне сознания.',
  en: 'A 2-month consciousness engineering program. Transitioning from a linear paradigm to a quantum one — an OS update at the consciousness level.',
  ua: '2-місячна програма з інженерії свідомості. Перехід від лінійної парадигми на квантову — оновлення OS на рівні свідомості.'
},
'shop.course.link': {
  ru: 'Подробнее →', en: 'Learn more →', ua: 'Детальніше →'
},
'shop.card1.label': {
  ru: 'Программы',
  en: 'Programs',
  ua: 'Програми'
},
'shop.card1.title': {
  ru: 'Курсы',
  en: 'Courses',
  ua: 'Курси'
},
'shop.card1.desc': {
  ru: 'Образовательные программы и трансформационные курсы',
  en: 'Educational programs and transformational courses',
  ua: 'Освітні програми та трансформаційні курси'
},
'shop.card2.label': {
  ru: 'Консультации',
  en: 'Consultations',
  ua: 'Консультації'
},
'shop.card2.title': {
  ru: 'Услуги',
  en: 'Services',
  ua: 'Послуги'
},
'shop.card2.desc': {
  ru: 'Индивидуальные и групповые сессии, менторство',
  en: 'Individual and group sessions, mentorship',
  ua: 'Індивідуальні та групові сесії, менторство'
},
'shop.card3.label': {
  ru: 'Артефакты',
  en: 'Artifacts',
  ua: 'Артефакти'
},
'shop.card3.title': {
  ru: 'Мерч',
  en: 'Merch',
  ua: 'Мерч'
},
'shop.card3.desc': {
  ru: 'Предметы силы и символика OnlyGods',
  en: 'Power objects and OnlyGods symbolism',
  ua: 'Предмети сили та символіка OnlyGods'
},

// ─── DAO PAGE ───
'dao.hero.subtitle': {
  ru: 'Экосистема',
  en: 'Ecosystem',
  ua: 'Екосистема'
},
'dao.hero.title': {
  ru: 'DAO DE DO',
  en: 'DAO DE DO',
  ua: 'DAO DE DO'
},
'dao.hero.tagline': {
  ru: 'Децентрализованная автономная организация объединенного сознания',
  en: 'Decentralized autonomous organization of united consciousness',
  ua: 'Децентралізована автономна організація об\'єднаної свідомості'
},
// Philosophy
'dao.philosophy.label': {
  ru: 'Философия',
  en: 'Philosophy',
  ua: 'Філософія'
},
'dao.char1': {
  ru: 'Путь',
  en: 'Path',
  ua: 'Шлях'
},
'dao.char2': {
  ru: 'Состояние',
  en: 'State',
  ua: 'Стан'
},
'dao.char3': {
  ru: 'Мастерство',
  en: 'Mastery',
  ua: 'Майстерність'
},
'dao.philosophy.body': {
  ru: 'Не корпорация. Не фонд. Не клуб по интересам. Живая система, где каждый участник — одновременно инвестор, оператор и бенефициар единого поля. Сообщества — это новое золото. DAO DE DO — инфраструктура, чтобы это золото работало.',
  en: 'Not a corporation. Not a fund. Not a hobby club. A living system where every participant is simultaneously an investor, operator, and beneficiary of a unified field. Communities are the new gold. DAO DE DO is the infrastructure to make that gold work.',
  ua: 'Не корпорація. Не фонд. Не клуб за інтересами. Жива система, де кожен учасник — одночасно інвестор, оператор і бенефіціар єдиного поля. Спільноти — це нове золото. DAO DE DO — інфраструктура, щоб це золото працювало.'
},

// Pillars
'dao.pillars.label': {
  ru: 'Архитектура',
  en: 'Architecture',
  ua: 'Архітектура'
},
'dao.pillars.title': {
  ru: 'Шесть столпов',
  en: 'Six Pillars',
  ua: 'Шість стовпів'
},
'dao.p1.title': {
  ru: 'Эволюция сознания',
  en: 'Consciousness Evolution',
  ua: 'Еволюція свідомості'
},
'dao.p1.desc': {
  ru: 'Не побочный продукт. Базовый вектор всей системы.',
  en: 'Not a byproduct. The core vector of the entire system.',
  ua: 'Не побічний продукт. Базовий вектор усієї системи.'
},
'dao.p2.title': {
  ru: 'Эгрегориальное поле',
  en: 'Egregore Field',
  ua: 'Егрегоріальне поле'
},
'dao.p2.desc': {
  ru: 'Коллективное сознание как рабочая инфраструктура.',
  en: 'Collective consciousness as working infrastructure.',
  ua: 'Колективна свідомість як робоча інфраструктура.'
},
'dao.p3.title': {
  ru: 'Замкнутая экономика',
  en: 'Closed-Loop Economy',
  ua: 'Замкнена економіка'
},
'dao.p3.desc': {
  ru: 'Каждая транзакция питает экосистему, не покидая её.',
  en: 'Every transaction feeds the ecosystem without leaving it.',
  ua: 'Кожна транзакція живить екосистему, не залишаючи її.'
},
'dao.p4.title': {
  ru: 'IR4-интеграция',
  en: 'IR4 Integration',
  ua: 'IR4-інтеграція'
},
'dao.p4.desc': {
  ru: 'Измерение резонанса. AI-навигация. Квантовые метрики.',
  en: 'Resonance measurement. AI navigation. Quantum metrics.',
  ua: 'Вимірювання резонансу. AI-навігація. Квантові метрики.'
},
'dao.p5.title': {
  ru: 'Кооперация',
  en: 'Cooperation',
  ua: 'Кооперація'
},
'dao.p5.desc': {
  ru: 'Proof of Reputation вместо Proof of Stake. Вес определяет вклад, не кошелёк.',
  en: 'Proof of Reputation over Proof of Stake. Weight is determined by contribution, not wallet.',
  ua: 'Proof of Reputation замість Proof of Stake. Вагу визначає внесок, не гаманець.'
},
'dao.p6.title': {
  ru: 'Энергетический REIT',
  en: 'Energetic REIT',
  ua: 'Енергетичний REIT'
},
'dao.p6.desc': {
  ru: 'Инвестиции в места силы и пространства трансформации.',
  en: 'Investments in power places and transformation spaces.',
  ua: 'Інвестиції в місця сили та простори трансформації.'
},

// Features
'dao.features.label': {
  ru: 'Механика',
  en: 'Mechanics',
  ua: 'Механіка'
},
'dao.features.title': {
  ru: 'Что делает это другим',
  en: 'What Makes It Different',
  ua: 'Що робить це іншим'
},
'dao.f1.title': {
  ru: 'AI + блокчейн гавернанс',
  en: 'AI + blockchain governance',
  ua: 'AI + блокчейн гавернанс'
},
'dao.f1.desc': {
  ru: 'Решения принимает коллективный разум, не совет директоров.',
  en: 'Decisions are made by collective intelligence, not a board of directors.',
  ua: 'Рішення приймає колективний розум, не рада директорів.'
},
'dao.f2.title': {
  ru: 'Токенизированный человеческий капитал',
  en: 'Tokenized Human Capital',
  ua: 'Токенізований людський капітал'
},
'dao.f2.desc': {
  ru: 'Навыки, репутация и вклад имеют измеримую стоимость внутри системы.',
  en: 'Skills, reputation, and contribution carry measurable value within the system.',
  ua: 'Навички, репутація та внесок мають вимірювану вартість всередині системи.'
},
'dao.f3.title': {
  ru: 'Квантово-ориентированные инвестиции',
  en: 'Quantum-Aligned Investments',
  ua: 'Квантово-орієнтовані інвестиції'
},
'dao.f3.desc': {
  ru: 'Сознательные технологии, VR/AR, нейроинтерфейсы — не крипто-казино.',
  en: 'Consciousness tech, VR/AR, neural interfaces — not a crypto casino.',
  ua: 'Свідомі технології, VR/AR, нейроінтерфейси — не крипто-казино.'
},
'dao.f4.title': {
  ru: 'Женское лидерство',
  en: 'Feminine Leadership',
  ua: 'Жіноче лідерство'
},
'dao.f4.desc': {
  ru: 'Этическая архитектура вместо иерархии силы.',
  en: 'Ethical architecture instead of power hierarchy.',
  ua: 'Етична архітектура замість ієрархії сили.'
},

// Access
'dao.access.text': {
  ru: 'Полная документация DAO DE DO — для участников OnlyGods',
  en: 'Full DAO DE DO documentation — for OnlyGods members',
  ua: 'Повна документація DAO DE DO — для учасників OnlyGods'
},
'dao.access.sub': {
  ru: 'Токеномика · Модель участия · Инвестиционный трек — по запросу',
  en: 'Tokenomics · Participation model · Investment track — on request',
  ua: 'Токеноміка · Модель участі · Інвестиційний трек — за запитом'
}

};

// === LANGUAGE ENGINE ===
(function(){
  var SUPPORTED = ['ru','en','ua'];
  var DEFAULT = 'ru';

  function getLang(){
    var s = localStorage.getItem('og-lang');
    return (s && SUPPORTED.indexOf(s) !== -1) ? s : DEFAULT;
  }

  function setLang(lang){
    if(SUPPORTED.indexOf(lang) === -1) return;
    localStorage.setItem('og-lang', lang);
    applyLang(lang);
  }

  function applyLang(lang){
    document.documentElement.lang = (lang === 'ua') ? 'uk' : lang;

    var els = document.querySelectorAll('[data-i18n]');
    for(var i = 0; i < els.length; i++){
      var key = els[i].getAttribute('data-i18n');
      if(T[key] && T[key][lang]) els[i].textContent = T[key][lang];
    }

    var phs = document.querySelectorAll('[data-i18n-placeholder]');
    for(var p = 0; p < phs.length; p++){
      var pk = phs[p].getAttribute('data-i18n-placeholder');
      if(T[pk] && T[pk][lang]) phs[p].placeholder = T[pk][lang];
    }

    var titleKey = document.documentElement.getAttribute('data-i18n-title');
    if(titleKey && T[titleKey] && T[titleKey][lang]) document.title = T[titleKey][lang];

    var btns = document.querySelectorAll('.lang-btn');
    for(var j = 0; j < btns.length; j++){
      if(btns[j].getAttribute('data-lang') === lang){
        btns[j].classList.add('lang-active');
      } else {
        btns[j].classList.remove('lang-active');
      }
    }
  }

  window.OGLang = { getLang: getLang, setLang: setLang, applyLang: applyLang };

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){ applyLang(getLang()); });
  } else {
    applyLang(getLang());
  }
})();
