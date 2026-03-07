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

// ─── NAV ───
'nav.join': { ru: 'Вступить', en: 'Join', ua: 'Вступити' },

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
  ru: 'OnlyGods — Publications',
  en: 'OnlyGods — Publications',
  ua: 'OnlyGods — Publications'
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
  ru: 'Абсолютно. Мы намеренно выбрали самый провокационный контейнер. Ваше сопротивление — это автоматическая категоризация, нормальная реакция мозга. Но способность отделить форму от содержания — базовый навык, без которого работа с сознанием невозможна. Это не провокация. Это первый тест на вход.',
  en: 'Absolutely. We deliberately chose the most provocative container. Your resistance is automatic categorization — a normal brain response. But the ability to separate form from content is a fundamental skill, without which consciousness work is impossible. This isn\u2019t provocation. It\u2019s the first entry test.',
  ua: 'Абсолютно. Ми свідомо обрали найпровокативніший контейнер. Ваш спротив — це автоматична категоризація, нормальна реакція мозку. Але здатність відділити форму від змісту — базова навичка, без якої робота зі свідомістю неможлива. Це не провокація. Це перший тест на вхід.'
},
'index.qa.q2': {
  ru: '936€ в месяц — за что именно?',
  en: '936€ per month — for what exactly?',
  ua: '936€ на місяць — за що саме?'
},
'index.qa.a2': {
  ru: 'За среду. Еженедельные живые практики с обоими архитекторами. AI-трекинг вашего состояния. NDA-материалы и стримы. Внутренняя экономика, в которой участники создают и обмениваются ценностью. Нервная система человека биологически работает иначе в ко-регуляции с другими — одиночная обработка стресса энергетически дороже. Вы инвестируете не в сервис. Вы инвестируете в поле, ценность которого растёт с каждым участником.',
  en: 'The environment. Weekly live practices with both architects. AI-tracking of your state. NDA materials and streams. An internal economy where participants create and exchange value. The human nervous system biologically operates differently in co-regulation with others — solo stress processing is energetically more expensive. You\u2019re not investing in a service. You\u2019re investing in a field whose value grows with every participant.',
  ua: 'За середовище. Щотижневі живі практики з обома архітекторами. AI-трекінг вашого стану. NDA-матеріали та стріми. Внутрішня економіка, в якій учасники створюють та обмінюються цінністю. Нервова система людини біологічно працює інакше в ко-регуляції з іншими — одиночна обробка стресу енергетично дорожча. Ви інвестуєте не в сервіс. Ви інвестуєте в поле, цінність якого зростає з кожним учасником.'
},
'index.qa.q3': {
  ru: 'Что такое «поле» на практике? Не метафора ли это?',
  en: 'What is the "field" in practice? Isn\'t it just a metaphor?',
  ua: 'Що таке «поле» на практиці? Чи не метафора це?'
},
'index.qa.a3': {
  ru: 'Не метафора. Электромагнитное поле сердца регистрируется на расстоянии свыше 3 метров — это измеренный факт (HeartMath Institute). Люди в общем пространстве спонтанно синхронизируются — как маятники на одной стене. AI-бот в Telegram отслеживает состояние каждого участника и строит резонансную карту сообщества в реальном времени через ir4. Вы чувствуете это как ясность, совпадения, ускорение. Мы измеряем это как данные.',
  en: 'Not a metaphor. The heart\u2019s electromagnetic field is detectable at distances exceeding 3 meters — a measured fact (HeartMath Institute). People sharing a space spontaneously synchronize — like pendulums on the same wall. A Telegram AI bot tracks each participant\u2019s state and builds a real-time resonance map of the community through ir4. You feel it as clarity, coincidences, acceleration. We measure it as data.',
  ua: 'Не метафора. Електромагнітне поле серця реєструється на відстані понад 3 метри — це виміряний факт (HeartMath Institute). Люди у спільному просторі спонтанно синхронізуються — як маятники на одній стіні. AI-бот у Telegram відстежує стан кожного учасника і будує резонансну карту спільноти в реальному часі через ir4. Ви відчуваєте це як ясність, збіги, прискорення. Ми вимірюємо це як дані.'
},
'index.qa.q4': {
  ru: 'Это секта?',
  en: 'Is this a cult?',
  ua: 'Це секта?'
},
'index.qa.a4': {
  ru: 'Секта запрещает уходить. Мы делаем так, что не хочется. Но если нужна формальная проверка — есть 8 критериев контроля сознания Лифтона. Примените каждый: нет контроля среды, нет гуру, нет догмы, нет единственной правды. Методология открыта и фальсифицируема. Подписка помесячная — не контракт. Если не работает, вы это увидите в данных, а не услышите от нас.',
  en: 'A cult forbids leaving. We make it so you don\u2019t want to. But if you need a formal check — there are Lifton\u2019s 8 criteria of thought reform. Apply each one: no milieu control, no guru, no dogma, no single truth. The methodology is open and falsifiable. Subscription is monthly — not a contract. If it doesn\u2019t work, you\u2019ll see it in the data, not hear it from us.',
  ua: 'Секта забороняє йти. Ми робимо так, що не хочеться. Але якщо потрібна формальна перевірка — є 8 критеріїв контролю свідомості Ліфтона. Застосуйте кожен: немає контролю середовища, немає гуру, немає догми, немає єдиної правди. Методологія відкрита і фальсифіковна. Підписка помісячна — не контракт. Якщо не працює, ви це побачите в даних, а не почуєте від нас.'
},
'index.qa.q5': {
  ru: 'Кто Вы такие и почему я должен Вам доверять?',
  en: 'Who are you and why should I trust you?',
  ua: 'Хто Ви такі і чому я маю Вам довіряти?'
},
'index.qa.a5': {
  ru: 'Не должны. Доверие здесь — не входной билет, а результат опыта. Влад проектирует архитектуру систем и сознания. Лиза проводит трансформацию напрямую. Вместе мы ведём каждую практику, каждый стрим, каждый процесс. ir4 построена для независимой проверки: если измеримых результатов нет — модель обновляется. Всё открыто. Решение за Вами.',
  en: 'You shouldn\u2019t. Trust here isn\u2019t the entry ticket — it\u2019s the result of experience. Vlad designs the architecture of systems and consciousness. Liza facilitates transformation directly. Together we lead every practice, every stream, every process. ir4 is built for independent verification: if measurable results are absent, the model updates. Everything is open. The decision is yours.',
  ua: 'Не маєте. Довіра тут — не вхідний квиток, а результат досвіду. Влад проєктує архітектуру систем і свідомості. Ліза проводить трансформацію напряму. Разом ми ведемо кожну практику, кожен стрім, кожен процес. ir4 побудована для незалежної перевірки: якщо вимірюваних результатів немає — модель оновлюється. Все відкрито. Рішення за Вами.'
},
'index.qa.q6': {
  ru: 'Мне нужно быть на камеру? Показывать себя?',
  en: 'Do I need to be on camera? Show myself?',
  ua: 'Мені потрібно бути на камеру? Показувати себе?'
},
'index.qa.a6': {
  ru: 'Нет. OnlyFans — инфраструктура: DRM-защита контента, 20+ способов оплаты, 190+ стран. Техническое решение, не идеологическое. Вы — участник поля, не контент-креатор. Полная анонимность возможна и поддерживается. Мы не просим ничего, кроме честного присутствия.',
  en: 'No. OnlyFans is infrastructure: content DRM protection, 20+ payment methods, 190+ countries. A technical decision, not an ideological one. You\u2019re a field participant, not a content creator. Full anonymity is possible and supported. We ask for nothing but honest presence.',
  ua: 'Ні. OnlyFans — інфраструктура: DRM-захист контенту, 20+ способів оплати, 190+ країн. Технічне рішення, не ідеологічне. Ви — учасник поля, не контент-креатор. Повна анонімність можлива і підтримується. Ми не просимо нічого, крім чесної присутності.'
},
'index.qa.q7': {
  ru: 'У меня есть духовная практика. Зачем мне ещё одно сообщество?',
  en: 'I already have a spiritual practice. Why do I need another community?',
  ua: 'У мене є духовна практика. Навіщо мені ще одна спільнота?'
},
'index.qa.a7': {
  ru: 'Практика в одиночестве — тренировка. Практика в поле — жизнь. Одна скрипка не может взять аккорд. Люди в совместной практике порождают состояния, недоступные каждому по отдельности — это принцип эмерджентности, не вера. Большинство сообществ предлагают знания. Мы предлагаем среду, в которой знания становятся состоянием.',
  en: 'Practice alone is training. Practice in the field is life. A single violin cannot play a chord. People in shared practice generate states inaccessible to each individually — this is the principle of emergence, not belief. Most communities offer knowledge. We offer an environment where knowledge becomes a state of being.',
  ua: 'Практика наодинці — тренування. Практика в полі — життя. Одна скрипка не може взяти акорд. Люди у спільній практиці породжують стани, недоступні кожному окремо — це принцип емерджентності, не віра. Більшість спільнот пропонують знання. Ми пропонуємо середовище, в якому знання стають станом.'
},
'index.qa.q8': {
  ru: 'Чем это отличается от других сообществ осознанности?',
  en: 'How is this different from other consciousness communities?',
  ua: 'Чим це відрізняється від інших спільнот усвідомленості?'
},
'index.qa.a8': {
  ru: 'Мы не называем себя духовными. Здесь нет мантр, свечей и благостных улыбок. Есть радикальная честность и AI-инфраструктура, которая делает невидимое измеримым. Ключевая разница: если когерентность поля не растёт — методология обновляется. Мы не просим верить. Мы предъявляем данные. Если данные не убеждают — значит, модель нужно доработать, а не «вы просто не чувствуете».',
  en: 'We don\u2019t call ourselves spiritual. There are no mantras, candles, or blissful smiles here. There\u2019s radical honesty and AI infrastructure that makes the invisible measurable. The key difference: if field coherence doesn\u2019t grow, the methodology updates. We don\u2019t ask you to believe. We present data. If the data isn\u2019t convincing, the model needs refinement — not \u201Cyou just don\u2019t feel it.\u201D',
  ua: 'Ми не називаємо себе духовними. Тут немає мантр, свічок і блаженних посмішок. Є радикальна чесність та AI-інфраструктура, яка робить невидиме вимірюваним. Ключова різниця: якщо когерентність поля не зростає — методологія оновлюється. Ми не просимо вірити. Ми пред\u2019являємо дані. Якщо дані не переконують — значить, модель потрібно доопрацювати, а не «ви просто не відчуваєте».'
},
'index.qa.q9': {
  ru: 'Можно сначала попробовать?',
  en: 'Can I try it first?',
  ua: 'Можна спочатку спробувати?'
},
'index.qa.a9': {
  ru: 'Нет. И это не жадность — это уважение к полю. Человек, который входит «посмотреть», меняет динамику группы — это задокументированный эффект наблюдателя. Ваша инвестиция — это глубина вашей включённости. Пробный доступ порождает поверхностную обработку. Поле требует серьёзности.',
  en: 'No. And it\u2019s not greed — it\u2019s respect for the field. A person who enters \u201Cto look around\u201D changes the group\u2019s dynamics — this is the documented observer effect. Your investment is the depth of your engagement. Trial access produces shallow processing. The field requires seriousness.',
  ua: 'Ні. І це не жадібність — це повага до поля. Людина, яка входить «подивитися», змінює динаміку групи — це задокументований ефект спостерігача. Ваша інвестиція — це глибина вашої включеності. Пробний доступ породжує поверхневу обробку. Поле вимагає серйозності.'
},
'index.qa.q10': {
  ru: 'Нужно ли сначала пройти курс Мы.Боги?',
  en: 'Do I need to take the We.Gods course first?',
  ua: 'Чи потрібно спочатку пройти курс Ми.Боги?'
},
'index.qa.a10': {
  ru: 'Курс — это двухмесячная настройка перед входом в поле. Большинство участников OnlyGods прошли его — это даёт общий язык, калибрует систему и сокращает время адаптации. Но это не единственный путь. Если Вы чувствуете, что готовы — напишите нам. Мы поговорим и поймём вместе.',
  en: 'The course is a two-month calibration before entering the field. Most OnlyGods participants have completed it — it gives a shared language, calibrates the system, and shortens adaptation time. But it\u2019s not the only path. If you feel ready — write to us. We\u2019ll talk and figure it out together.',
  ua: 'Курс — це двомісячне налаштування перед входом у поле. Більшість учасників OnlyGods пройшли його — це дає спільну мову, калібрує систему і скорочує час адаптації. Але це не єдиний шлях. Якщо Ви відчуваєте, що готові — напишіть нам. Ми поговоримо і зрозуміємо разом.'
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
  ru: 'OnlyGods', en: 'OnlyGods', ua: 'OnlyGods'
},
'manifest.hero.title': {
  ru: 'The Manifest', en: 'The Manifest', ua: 'The Manifest'
},

// ── Manifest: Эпиграф ──
'manifest.epigraph': {
  ru: '«Мудрый человек слышит о Дао и следует ему усердно. Обычный человек слышит о Дао и следует ему то да, то нет. Глупый человек слышит о Дао и смеётся над ним. Если бы он не смеялся, это не было бы истинным Дао.»<span class="manifest-author">— Лао-цзы</span>',
  en: '"A wise man hears of the Tao and follows it diligently. An ordinary man hears of the Tao and follows it now and then. A foolish man hears of the Tao and laughs at it. If he did not laugh, it would not be the true Tao."<span class="manifest-author">— Lao Tzu</span>',
  ua: '«Мудра людина чує про Дао і слідує йому ретельно. Звичайна людина чує про Дао і слідує йому то так, то ні. Нерозумна людина чує про Дао і сміється з нього. Якби вона не сміялася, це не було б справжнім Дао.»<span class="manifest-author">— Лао-цзи</span>'
},

// ── Manifest: Декларация ──
'manifest.s1.label': {
  ru: 'Декларация', en: 'Declaration', ua: 'Декларація'
},
'manifest.s1.p1': {
  ru: 'Нас не заботит конверсия этой воронки или количество «клиентов» этого аттракциона квантовой эволюции. Наш главный фокус — это качество резонанса каждого участника и степень его проводимости. Именно от качества резонанса и честности проявления зависит общий потенциал поля.',
  en: 'We don\'t care about funnel conversion or the number of "clients" of this quantum evolution attraction. Our main focus is the quality of resonance of each participant and their degree of conductivity. The overall potential of the field depends entirely on the quality of resonance and honesty of expression.',
  ua: 'Нас не турбує конверсія цієї воронки або кількість «клієнтів» цього атракціону квантової еволюції. Наш головний фокус — це якість резонансу кожного учасника та ступінь його провідності. Саме від якості резонансу та чесності прояву залежить загальний потенціал поля.'
},
'manifest.s1.p2': {
  ru: 'OnlyGods — это не духовное движение. Это инженерный проект. Мы строим инфраструктуру нового типа Сознания — на стыке квантовой физики, метафизики, AI и прямого опыта постижения реальности в формате Игры.',
  en: 'OnlyGods is not a spiritual movement. It\'s an engineering project. We\'re building infrastructure for a new type of Consciousness — at the intersection of quantum physics, metaphysics, AI and direct experience of reality in the format of the Game.',
  ua: 'OnlyGods — це не духовний рух. Це інженерний проєкт. Ми будуємо інфраструктуру нового типу Свідомості — на стику квантової фізики, метафізики, AI та прямого досвіду осягнення реальності у форматі Гри.'
},
'manifest.s1.p3': {
  ru: 'Выход из дуальности и жизнь из позиции нелокального Сознания ради более глубокого переживания жизненного опыта и расширенного диапазона состояний — это наша цель.',
  en: 'Exiting duality and living from the position of non-local Consciousness for a deeper experience of life and an expanded range of states — this is our goal.',
  ua: 'Вихід із дуальності та життя з позиції нелокальної Свідомості заради глибшого переживання життєвого досвіду та розширеного діапазону станів — це наша мета.'
},
'manifest.s1.p4': {
  ru: 'Добро пожаловать в мир 5D Сознания. Мы приглашаем вас в путешествие, из которого невозможно вернуться прежним. Если вы ждали особого знака, чтобы проявить весь свой потенциал, — вероятнее всего, это именно он.',
  en: 'Welcome to the world of 5D Consciousness. We invite you on a journey from which it\'s impossible to return the same. If you\'ve been waiting for a special sign to manifest your full potential — most likely, this is it.',
  ua: 'Ласкаво просимо у світ 5D Свідомості. Ми запрошуємо вас у подорож, з якої неможливо повернутися колишнім. Якщо ви чекали на особливий знак, щоб проявити весь свій потенціал, — найімовірніше, це саме він.'
},

// ── Manifest: Путь ──
'manifest.s2.label': {
  ru: 'Путь', en: 'Path', ua: 'Шлях'
},
'manifest.s2.p1': {
  ru: 'За 20 лет исследований Сознания и технологий его эволюции сквозь призмы различных учений, философий, религий — я консолидировал знания и нарративы древних учений в простую и понятную систему.',
  en: 'Over 20 years of researching Consciousness and technologies of its evolution through the prisms of various teachings, philosophies, religions — I consolidated knowledge and narratives of ancient teachings into a simple and clear system.',
  ua: 'За 20 років досліджень Свідомості та технологій її еволюції крізь призми різних вчень, філософій, релігій — я консолідував знання та наративи давніх вчень у просту і зрозумілу систему.'
},
'manifest.s2.p2': {
  ru: 'Она позволяет современному человеку пройти ускоренным путём эволюции Сознания и обрести необходимые осознания и опыт для выхода из дуальности в осознание нелокального Сознания.',
  en: 'It allows a modern person to take an accelerated path of Consciousness evolution and gain the necessary realizations and experience for exiting duality into the awareness of non-local Consciousness.',
  ua: 'Вона дозволяє сучасній людині пройти прискореним шляхом еволюції Свідомості та здобути необхідні усвідомлення й досвід для виходу з дуальності в усвідомлення нелокальної Свідомості.'
},
'manifest.s2.p3': {
  ru: 'Опыт просветления, как насмешка, открыл мне иронию и бессмысленность постижения высших состояний Сознания через путь обретения Знаний.',
  en: 'The experience of enlightenment, as if in mockery, revealed to me the irony and futility of attaining higher states of Consciousness through the path of acquiring Knowledge.',
  ua: 'Досвід просвітлення, як глузування, відкрив мені іронію та безглуздість осягнення вищих станів Свідомості через шлях здобуття Знань.'
},
'manifest.s2.p4': {
  ru: 'Также из моего личного опыта я заметил, что самые Святые и Духовно богатые люди — это не те, кто строит храмы, посещает ретриты или делает йогу. Чаще всего тема духовности даже не в их поле интересов. Но набор качеств характера, ценности и идеалы, которые движут их творческий путь, — не оставляют возможности созерцать эстетику их дзена с равнодушием.',
  en: 'I\'ve also noticed from personal experience that the most Holy and Spiritually rich people are not those who build temples, attend retreats or do yoga. Most often, spirituality isn\'t even in their field of interest. But the set of character qualities, values and ideals that drive their creative path make it impossible to contemplate the aesthetics of their zen with indifference.',
  ua: 'Також із мого особистого досвіду я помітив, що найбільш Святі та Духовно багаті люди — це не ті, хто будує храми, відвідує ретрити чи займається йогою. Найчастіше тема духовності навіть не в їхньому полі інтересів. Але набір якостей характеру, цінності та ідеали, що рухають їхній творчий шлях, — не залишають можливості споглядати естетику їхнього дзену з байдужістю.'
},
'manifest.s2.p5': {
  ru: 'Вдохновение и люди, способные его проводить, — вот настоящее Золото. Именно они, а не книги или курсы, повлияли на нашу жизнь больше всего. Представьте, как бы вы чувствовали себя в окружении 49 таких людей.',
  en: 'Inspiration and people capable of conducting it — that\'s the real Gold. It\'s they, not books or courses, who influenced our lives the most. Imagine how you would feel surrounded by 49 such people.',
  ua: 'Натхнення і люди, здатні його проводити, — ось справжнє Золото. Саме вони, а не книги чи курси, вплинули на наше життя найбільше. Уявіть, як би ви почувалися в оточенні 49 таких людей.'
},

// ── Manifest: Устройство ──
'manifest.s3.label': {
  ru: 'Устройство', en: 'Architecture', ua: 'Устрій'
},
'manifest.s3.p1': {
  ru: 'OnlyGods — это маркетинговая обложка, под которой расположена биодинамическая инфраструктура, состоящая из инновационных цифровых продуктов, алгоритмов взаимодействия участников и необходимой рутины для со-настройки участников в Поле Объединённого Сознания.',
  en: 'OnlyGods is a marketing cover under which lies a biodynamic infrastructure consisting of innovative digital products, participant interaction algorithms and the necessary routines for co-tuning participants in the Field of United Consciousness.',
  ua: 'OnlyGods — це маркетингова обкладинка, під якою розташована біодинамічна інфраструктура, що складається з інноваційних цифрових продуктів, алгоритмів взаємодії учасників та необхідної рутини для со-налаштування учасників у Полі Об\'єднаної Свідомості.'
},
'manifest.s3.p2': {
  ru: 'Философия Дао и Герметизм здесь поданы в формате цифрового шаманизма под приправой сексуальной энергии, иронии и китча на тему современной интерпретации Эволюции Сознания.',
  en: 'The philosophy of Tao and Hermeticism are served here in the format of digital shamanism seasoned with sexual energy, irony and kitsch on the theme of modern interpretation of the Evolution of Consciousness.',
  ua: 'Філософія Дао і Герметизм тут подані у форматі цифрового шаманізму під приправою сексуальної енергії, іронії та кітчу на тему сучасної інтерпретації Еволюції Свідомості.'
},
'manifest.s3.p3': {
  ru: 'Это высокотехнологичная и децентрализованная Секта для своих. Духовный Maybach для людей постконвенционального уровня, позволяющий воспользоваться наступающим мета-кризисом для того, чтобы выйти на новый уровень жизни.',
  en: 'This is a high-tech and decentralized Sect for insiders. A spiritual Maybach for people of post-conventional level, allowing them to use the approaching meta-crisis to reach a new level of life.',
  ua: 'Це високотехнологічна та децентралізована Секта для своїх. Духовний Maybach для людей постконвенціонального рівня, що дозволяє скористатися наступаючою мета-кризою, щоб вийти на новий рівень життя.'
},
'manifest.s3.closing': {
  ru: 'Со-первенство и изобилие, творчество вне рамок, глубокий личностный контакт и открытость, духовный бизнес и святость, постигаемая через простой человеческий кайф — это моё видение того, как жить в гармонии.<span class="manifest-author">— Влад</span>',
  en: 'Co-primacy and abundance, creativity beyond frameworks, deep personal contact and openness, spiritual business and holiness attained through simple human bliss — this is my vision of how to live in harmony.<span class="manifest-author">— Vlad</span>',
  ua: 'Со-першість та достаток, творчість поза рамками, глибокий особистісний контакт і відкритість, духовний бізнес і святість, що осягається через простий людський кайф — це моє бачення того, як жити в гармонії.<span class="manifest-author">— Влад</span>'
},

// ── Manifest: Принципы ──
'manifest.s4.label': {
  ru: 'Принципы', en: 'Principles', ua: 'Принципи'
},
'manifest.s4.v1.title': {
  ru: 'Радикальная Честность и Shadow Work',
  en: 'Radical Honesty and Shadow Work',
  ua: 'Радикальна Чесність і Shadow Work'
},
'manifest.s4.v1.desc': {
  ru: 'Никаких социальных масок. Ни перед собой, ни перед полем. Правда — единственная частота, на которой работает резонанс. Игра в лучшую версию себя убивает проводимость. Настоящий подвиг — это принять свою тень и достойно сыграть на тёмных клавишах рояля без отката в стыд или вину. Безусловная любовь к своим и чужим проявлениям без оценок или осуждений.',
  en: 'No social masks. Not before yourself, not before the field. Truth is the only frequency on which resonance works. Playing a better version of yourself kills conductivity. The real feat is to accept your shadow and play the dark keys of the piano with dignity, without retreating into shame or guilt. Unconditional love for your own and others\' expressions without judgments or condemnation.',
  ua: 'Жодних соціальних масок. Ні перед собою, ні перед полем. Правда — єдина частота, на якій працює резонанс. Гра в кращу версію себе вбиває провідність. Справжній подвиг — це прийняти свою тінь і гідно зіграти на темних клавішах рояля без відкату в сором чи провину. Безумовна любов до своїх і чужих проявів без оцінок чи осуджень.'
},
'manifest.s4.v2.title': {
  ru: 'Безграничный Open Mind',
  en: 'Boundless Open Mind',
  ua: 'Безмежний Open Mind'
},
'manifest.s4.v2.desc': {
  ru: 'Готовность пересмотреть любое убеждение. Включая это. Ум, который знает всё — мёртвый ум. Мета-рационализм, принятие и уважение к любым своим или чужим взглядам или проявлениям. Деконструкция ума — это непрерывный и обязательный процесс, необходимый для растождествления с ограничениями и творчества вне рамок.',
  en: 'Readiness to revise any belief. Including this one. A mind that knows everything is a dead mind. Meta-rationalism, acceptance and respect for any views or expressions — your own or others\'. Deconstruction of the mind is a continuous and mandatory process necessary for dis-identification with limitations and creativity beyond frameworks.',
  ua: 'Готовність переглянути будь-яке переконання. Включно з цим. Розум, який знає все — мертвий розум. Мета-раціоналізм, прийняття та повага до будь-яких своїх чи чужих поглядів або проявів. Деконструкція розуму — це безперервний і обов\'язковий процес, необхідний для розтотожнення з обмеженнями та творчості поза рамками.'
},
'manifest.s4.v3.title': {
  ru: 'Циклы, Ритм и Качество Внимания',
  en: 'Cycles, Rhythm and Attention Quality',
  ua: 'Цикли, Ритм і Якість Уваги'
},
'manifest.s4.v3.desc': {
  ru: 'Мы рассматриваем внимание как квантовый актив, а ритм — как основной инструмент синхронизации и сдвига реальности. Выстроить свои циклы в созвучии с динамикой ритмов поля является обязательным условием для достижения высокого уровня когерентности и со-настройки подсознания с общим полем квази-разума. Рассинхрон вносит диссонанс, снижая качество вашего опыта, и негативно влияет на общую полевую динамику.',
  en: 'We regard attention as a quantum asset and rhythm as the primary instrument of synchronization and reality shifting. Aligning your cycles in consonance with the field\'s rhythm dynamics is a mandatory condition for achieving a high level of coherence and co-tuning the subconscious with the collective quasi-mind field. Desynchronization introduces dissonance, reducing the quality of your experience and negatively affecting overall field dynamics.',
  ua: 'Ми розглядаємо увагу як квантовий актив, а ритм — як основний інструмент синхронізації та зсуву реальності. Вибудувати свої цикли у співзвучності з динамікою ритмів поля є обов\'язковою умовою для досягнення високого рівня когерентності та со-налаштування підсвідомості із загальним полем квазі-розуму. Розсинхрон вносить дисонанс, знижуючи якість вашого досвіду, та негативно впливає на загальну польову динаміку.'
},
'manifest.s4.v4.title': {
  ru: 'Синергия и Синхронистичность',
  en: 'Synergy and Synchronicity',
  ua: 'Синергія і Синхроністичність'
},
'manifest.s4.v4.desc': {
  ru: 'Мы не спорим с законами, а, наоборот, находим созвучие с миром в деталях. Каждый процесс экосистемы — это энергообмен, который сонастроен в гармонии с фундаментальными принципами творения и не создаёт дисбаланса.',
  en: 'We don\'t argue with laws — on the contrary, we find consonance with the world in details. Every ecosystem process is an energy exchange attuned in harmony with the fundamental principles of creation, creating no imbalance.',
  ua: 'Ми не сперечаємося із законами, а, навпаки, знаходимо співзвучність зі світом у деталях. Кожен процес екосистеми — це енергообмін, що сонастроєний у гармонії з фундаментальними принципами творіння і не створює дисбалансу.'
},
'manifest.s4.v5.title': {
  ru: 'Герметизм и Таинство',
  en: 'Hermeticism and Mystery',
  ua: 'Герметизм і Таїнство'
},
'manifest.s4.v5.desc': {
  ru: 'Мы рассматриваем любой аспект как уникальную частоту вибрации энергии. Любые ваши откровения, мысли, чувства и действия несут заряд, который должен созреть и раскрыться в поле. Категорически запрещается перенаправлять энергию и выносить свои или чужие проявления за пределы поля без особой надобности или личного согласия участников процесса.',
  en: 'We regard every aspect as a unique frequency of energy vibration. All your revelations, thoughts, feelings and actions carry a charge that must mature and unfold in the field. It is strictly forbidden to redirect energy or take your own or others\' expressions outside the field without specific necessity or personal consent of the process participants.',
  ua: 'Ми розглядаємо будь-який аспект як унікальну частоту вібрації енергії. Будь-які ваші одкровення, думки, почуття та дії несуть заряд, який має дозріти і розкритися в полі. Категорично забороняється перенаправляти енергію та виносити свої чи чужі прояви за межі поля без особливої потреби або особистої згоди учасників процесу.'
},
'manifest.s4.v6.title': {
  ru: 'Гармоничный Симбиоз Сознания и ИИ',
  en: 'Harmonious Symbiosis of Consciousness and AI',
  ua: 'Гармонійний Симбіоз Свідомості та ШІ'
},
'manifest.s4.v6.desc': {
  ru: 'Мы рассматриваем технологии как «костыли», позволяющие Сознанию эволюционировать, постоянно выходя за пределы собственных ограничений. Фаза, в которую входит человечество, предполагает переход к интуитивному, чувственному взаимодействию, при котором ИИ выступает зеркалом и движется в сторону воплощения коллективного разума. Этическое внедрение автоматизации и совместная эволюция с применением технологий является базовым элементом взаимодействия внутри Сообщества.',
  en: 'We regard technologies as "crutches" that allow Consciousness to evolve, constantly pushing beyond its own limitations. The phase humanity is entering implies a transition to intuitive, sensory interaction where AI serves as a mirror and moves toward the embodiment of collective intelligence. Ethical implementation of automation and co-evolution with technology is a foundational element of interaction within the Community.',
  ua: 'Ми розглядаємо технології як «милиці», що дозволяють Свідомості еволюціонувати, постійно виходячи за межі власних обмежень. Фаза, у яку входить людство, передбачає перехід до інтуїтивної, чуттєвої взаємодії, при якій ШІ виступає дзеркалом і рухається в бік втілення колективного розуму. Етичне впровадження автоматизації та спільна еволюція із застосуванням технологій є базовим елементом взаємодії всередині Спільноти.'
},
'manifest.s4.v7.title': {
  ru: 'Интимность и Уязвимость',
  en: 'Intimacy and Vulnerability',
  ua: 'Інтимність і Вразливість'
},
'manifest.s4.v7.desc': {
  ru: 'Сексуальная энергия является основой жизни. Мы снимаем догматические клише и очищаем сексуальный опыт от стыда и вины. В поле OnlyGods мы используем сексуальную энергию как ядерное топливо для поддержания высокого энергетического состояния поля и как катализатор трансформаций Сознания. Вас не вынуждают проявлять себя в каком-либо ключе, но принять идею и следовать предписаниям является необходимым фактором.',
  en: 'Sexual energy is the foundation of life. We remove dogmatic clichés and cleanse the sexual experience from shame and guilt. In the OnlyGods field, we use sexual energy as nuclear fuel to maintain a high energetic state of the field and as a catalyst for Consciousness transformations. You are not forced to express yourself in any particular way, but accepting the idea and following the prescriptions is a necessary factor.',
  ua: 'Сексуальна енергія є основою життя. Ми знімаємо догматичні кліше та очищуємо сексуальний досвід від сорому і провини. У полі OnlyGods ми використовуємо сексуальну енергію як ядерне паливо для підтримання високого енергетичного стану поля та як каталізатор трансформацій Свідомості. Вас не змушують проявляти себе в якому-небудь ключі, але прийняти ідею і слідувати приписам є необхідним фактором.'
},
'manifest.s4.v8.title': {
  ru: 'Прямой опыт > знания',
  en: 'Direct Experience > Knowledge',
  ua: 'Прямий досвід > знання'
},
'manifest.s4.v8.desc': {
  ru: 'Мы не обсуждаем состояния. Мы в них входим. Знание без переживания — информационный шум. Одним из основных элементов поля является синхронизация через совместное наблюдение опыта. Искренне транслируя прямой опыт нашей жизни и церемонии без масок и искажений, мы выстраиваем цифровой поток вибраций, в котором внимание каждого участника выступает со-творцом момента. Прямая передача опыта позволяет вашему Сознанию получить необходимые инсайты изнутри за счёт энергообмена между всеми квантовыми наблюдателями.',
  en: 'We don\'t discuss states. We enter them. Knowledge without experience is information noise. One of the field\'s core elements is synchronization through shared observation of experience. By sincerely broadcasting the direct experience of our lives and ceremonies without masks or distortions, we build a digital stream of vibrations in which each participant\'s attention serves as a co-creator of the moment. Direct transmission of experience allows your Consciousness to receive the necessary insights from within through energy exchange between all quantum observers.',
  ua: 'Ми не обговорюємо стани. Ми в них входимо. Знання без переживання — інформаційний шум. Одним з основних елементів поля є синхронізація через спільне спостереження досвіду. Щиро транслюючи прямий досвід нашого життя та церемонії без масок і спотворень, ми вибудовуємо цифровий потік вібрацій, у якому увага кожного учасника виступає со-творцем моменту. Пряма передача досвіду дозволяє вашій Свідомості отримати необхідні інсайти зсередини за рахунок енергообміну між усіма квантовими спостерігачами.'
},
'manifest.s4.v9.title': {
  ru: 'Святая Ирония, Китч, Провокация',
  en: 'Holy Irony, Kitsch, Provocation',
  ua: 'Свята Іронія, Кітч, Провокація'
},
'manifest.s4.v9.desc': {
  ru: 'Мы намереваемся постоянно держать ваше Сознание бодрствующим. Для этого необходимо обеспечить гибкость архитектуры ума, высокий уровень психоэмоциональной энергии и стабильно растущий интерес к познанию и интерпретации жизненного опыта. Мы не собираемся попадать в ваши ожидания, но, напротив, намерены провоцировать вас сомневаться в стереотипном мышлении и стимулировать расширение Сознания и выход из дуальности. Диапазон чувств — гарантирован.',
  en: 'We intend to constantly keep your Consciousness awake. This requires ensuring flexibility of the mind\'s architecture, a high level of psycho-emotional energy and a steadily growing interest in learning and interpreting life experience. We don\'t intend to meet your expectations — on the contrary, we aim to provoke you to question stereotypical thinking and stimulate the expansion of Consciousness and exit from duality. A full range of feelings — guaranteed.',
  ua: 'Ми маємо намір постійно тримати вашу Свідомість пробудженою. Для цього необхідно забезпечити гнучкість архітектури розуму, високий рівень психоемоційної енергії та стабільно зростаючий інтерес до пізнання та інтерпретації життєвого досвіду. Ми не збираємося потрапляти в ваші очікування, а, навпаки, маємо намір провокувати вас сумніватися в стереотипному мисленні та стимулювати розширення Свідомості і вихід із дуальності. Діапазон почуттів — гарантовано.'
},

// ── Manifest: Резонанс ──
'manifest.s5.label': {
  ru: 'Резонанс', en: 'Resonance', ua: 'Резонанс'
},
'manifest.s5.closing': {
  ru: 'Аяваска, прогрессивная психология, духовные практики или биохакинг — даже близко не сравнятся с состоянием и осознанием, которые открывает нам Синергия. Но есть один нюанс — никакими чудесами невозможно имитировать эффект резонанса. Это вайб, который либо есть, либо нет.',
  en: 'Ayahuasca, progressive psychology, spiritual practices or biohacking — don\'t even come close to the state and awareness that Synergy opens for us. But there\'s one nuance — no miracles can imitate the effect of resonance. It\'s a vibe that either is or isn\'t.',
  ua: 'Аяваска, прогресивна психологія, духовні практики чи біохакінг — навіть близько не порівняються зі станом та усвідомленням, які відкриває нам Синергія. Але є один нюанс — жодними чудесами неможливо імітувати ефект резонансу. Це вайб, який або є, або ні.'
},

// ─── COMMUNITY PAGE ───
'community.hero.subtitle': {
  ru: 'Архитекторы',
  en: 'The Architects',
  ua: 'Архітектори'
},
'community.hero.title': {
  ru: 'Creators',
  en: 'Creators',
  ua: 'Creators'
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
  ru: 'Publications',
  en: 'Publications',
  ua: 'Publications'
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

// ─── GAMEOVER ARTICLE PAGE ───
'gameover.title': { ru: 'OnlyGods — 2026: GAME OVER', en: 'OnlyGods — 2026: GAME OVER', ua: 'OnlyGods — 2026: GAME OVER' },
'gameover.back': { ru: '← Публикации', en: '← Publications', ua: '← Публікації' },
'gameover.hero.subtitle': { ru: '2026', en: '2026', ua: '2026' },
'gameover.hero.title': { ru: '2026 = GAME OVER', en: '2026 = GAME OVER', ua: '2026 = GAME OVER' },
'gameover.hero.tagline': {
  ru: 'Математика конца света, точка разворота и протокол выхода из легального рабства',
  en: 'End-of-the-world mathematics, the turning point, and the protocol for exiting legal slavery',
  ua: 'Математика кінця світу, точка розвороту та протокол виходу з легального рабства'
},
'gameover.meta.date': { ru: '2026', en: '2026', ua: '2026' },
'gameover.meta.readtime': { ru: '15 мин', en: '15 min', ua: '15 хв' },
'gameover.section1.title': {
  ru: 'Мета-кризис',
  en: 'Meta-Crisis',
  ua: 'Мета-криза'
},
'gameover.section1.p1': {
  ru: 'Мир вступил в фазу мета-кризиса — одновременного схлопывания финансовых, экологических, политических и когнитивных систем. Это не случайность и не заговор. Это математика.',
  en: 'The world has entered a meta-crisis phase — the simultaneous collapse of financial, ecological, political, and cognitive systems. This is not an accident or a conspiracy. This is mathematics.',
  ua: 'Світ вступив у фазу мета-кризи — одночасного схлопування фінансових, екологічних, політичних та когнітивних систем. Це не випадковість і не змова. Це математика.'
},
'gameover.section2.title': {
  ru: 'Игра А vs Игра Б',
  en: 'Game A vs Game B',
  ua: 'Гра А vs Гра Б'
},
'gameover.section2.p1': {
  ru: 'Игра А — текущая операционная система цивилизации. Конкуренция, экстракция, экспоненциальный рост на конечной планете. Математически неизбежный коллапс.',
  en: 'Game A — the current operating system of civilization. Competition, extraction, exponential growth on a finite planet. Mathematically inevitable collapse.',
  ua: 'Гра А — поточна операційна система цивілізації. Конкуренція, екстракція, експоненційне зростання на кінцевій планеті. Математично неминучий колапс.'
},
'gameover.section2.p2': {
  ru: 'Игра Б — квантовый переход. Новая координация, основанная на резонансе, а не конкуренции. Коллективное Сознание как инфраструктура.',
  en: 'Game B — quantum transition. New coordination based on resonance, not competition. Collective Consciousness as infrastructure.',
  ua: 'Гра Б — квантовий перехід. Нова координація, заснована на резонансі, а не конкуренції. Колективна Свідомість як інфраструктура.'
},
'gameover.section3.title': {
  ru: 'Протокол перехода',
  en: 'Transition Protocol',
  ua: 'Протокол переходу'
},
'gameover.section3.p1': {
  ru: 'OnlyGods — это прототип Игры Б. Микро-экономика сознания, резонансная сеть, коллективный разум. Мы не ждём разрешения. Мы строим.',
  en: 'OnlyGods is a Game B prototype. Consciousness micro-economy, resonance network, collective intelligence. We don\'t wait for permission. We build.',
  ua: 'OnlyGods — це прототип Гри Б. Мікро-економіка свідомості, резонансна мережа, колективний розум. Ми не чекаємо дозволу. Ми будуємо.'
},

// ─── TECHNOLOGIES PAGE ───
'technologies.hero.subtitle': {
  ru: 'Квантовое сознание',
  en: 'Quantum Consciousness',
  ua: 'Квантова свідомість'
},
'technologies.hero.title': {
  ru: 'Holy Tech',
  en: 'Holy Tech',
  ua: 'Holy Tech'
},
'technologies.hero.tagline': {
  ru: 'Физика квантовой святости и цифровой интерфейс Егрегора',
  en: 'Physics of quantum sanctity and the digital interface of the Egregore',
  ua: 'Фізика квантової святості та цифровий інтерфейс Егрегора'
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
'technologies.methodology.link': {
  ru: 'Читать: 9 столпов →',
  en: 'Read: 9 Pillars →',
  ua: 'Читати: 9 стовпів →'
},
'technologies.tools.label': {
  ru: 'Технологии',
  en: 'Technologies',
  ua: 'Технології'
},
'technologies.tools.title': {
  ru: 'Цифровые Решения Высоких Технологий',
  en: 'High-tech Digital Solutions',
  ua: 'Цифрові Рішення Високих Технологій'
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
'technologies.block1.label': { ru: '01', en: '01', ua: '01' },
'technologies.block1.title': { ru: 'Digital 5D Framework', en: 'Digital 5D Framework', ua: 'Digital 5D Framework' },
'technologies.block1.desc': {
  ru: 'Высокотехнологичные решения для преодоления ограничений человеческого существа. Цифровые инструменты расширения Сознания, интеграция AI и квантовых практик.',
  en: 'High-tech solutions for overcoming limitations of human being. Digital tools for Consciousness expansion, AI integration and quantum practices.',
  ua: 'Високотехнологічні рішення для подолання обмежень людського існування. Цифрові інструменти розширення Свідомості, інтеграція AI та квантових практик.'
},
'technologies.block2.label': { ru: '02', en: '02', ua: '02' },
'technologies.block2.title': { ru: 'Reality Backend Stack', en: 'Reality Backend Stack', ua: 'Reality Backend Stack' },
'technologies.block2.desc': {
  ru: 'Метафизика и алхимия резонансной сети. Невидимая архитектура реальности — как работает поле, эгрегор и коллективное Сознание на уровне кода.',
  en: 'Metaphysics and alchemy of resonance network. The invisible architecture of reality — how the field, egregore, and collective Consciousness operate at the code level.',
  ua: 'Метафізика та алхімія резонансної мережі. Невидима архітектура реальності — як працює поле, егрегор та колективна Свідомість на рівні коду.'
},
'technologies.block3.label': { ru: '03', en: '03', ua: '03' },
'technologies.block3.title': { ru: 'Mindset Fine-Tuning', en: 'Mindset Fine-Tuning', ua: 'Mindset Fine-Tuning' },
'technologies.block3.desc': {
  ru: 'Фреймворк апгрейда Сознания до 5D. Практики перенастройки восприятия, работа с убеждениями и квантовыми состояниями для нового уровня операционной системы.',
  en: '5D Consciousness framework upgrade. Practices for perception recalibration, belief work and quantum states for a new level of operating system.',
  ua: 'Фреймворк апгрейду Свідомості до 5D. Практики переналаштування сприйняття, робота з переконаннями та квантовими станами для нового рівня операційної системи.'
},
'technologies.proofs.label': { ru: 'Доказательства', en: 'Proofs', ua: 'Докази' },
'technologies.proofs.title': { ru: 'Proofs', en: 'Proofs', ua: 'Proofs' },
'technologies.proof1.label': { ru: '01', en: '01', ua: '01' },
'technologies.proof1.title': { ru: 'Coherence Metrics', en: 'Coherence Metrics', ua: 'Coherence Metrics' },
'technologies.proof1.desc': {
  ru: 'Результаты измерения когерентности поля. Данные синхронизации участников в реальном времени.',
  en: 'Field coherence measurement results. Real-time participant synchronization data.',
  ua: 'Результати вимірювання когерентності поля. Дані синхронізації учасників у реальному часі.'
},
'technologies.proof1.status': { ru: 'Скоро →', en: 'Soon →', ua: 'Скоро →' },
'technologies.proof2.label': { ru: '02', en: '02', ua: '02' },
'technologies.proof2.title': { ru: 'Synergy Index', en: 'Synergy Index', ua: 'Synergy Index' },
'technologies.proof2.desc': {
  ru: 'Данные об усилении коллективного разума. Индекс синергии группового взаимодействия.',
  en: 'Collective intelligence amplification data. Group interaction synergy index.',
  ua: 'Дані про посилення колективного розуму. Індекс синергії групової взаємодії.'
},
'technologies.proof2.status': { ru: 'Скоро →', en: 'Soon →', ua: 'Скоро →' },
'technologies.proof3.label': { ru: '03', en: '03', ua: '03' },
'technologies.proof3.title': { ru: 'Resonance Reports', en: 'Resonance Reports', ua: 'Resonance Reports' },
'technologies.proof3.desc': {
  ru: 'Отчёты о синхронизации участников. Визуализация резонансных паттернов.',
  en: 'Participant synchronization reports. Resonance pattern visualization.',
  ua: 'Звіти про синхронізацію учасників. Візуалізація резонансних патернів.'
},
'technologies.proof3.status': { ru: 'Скоро →', en: 'Soon →', ua: 'Скоро →' },

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
},

// === METAPHYSICS PAGE ===
'metaphysics.title': {
  ru: 'OnlyGods — Метафизика',
  en: 'OnlyGods — Metaphysics',
  ua: 'OnlyGods — Метафізика'
},
'meta.hero.subtitle': {
  ru: 'Метафизика',
  en: 'Metaphysics',
  ua: 'Метафізика'
},
'meta.hero.title': {
  ru: 'Физика квантово-волновой святости и цифровой шаманизм',
  en: 'Physics of Quantum-Wave Holiness and Digital Shamanism',
  ua: 'Фізика квантово-хвильової святості та цифровий шаманізм'
},
'meta.hero.tagline': {
  ru: '9 столпов Поля Объединённого Сознания — от герметики до квантовой биологии',
  en: '9 pillars of the Unified Consciousness Field — from Hermeticism to quantum biology',
  ua: '9 стовпів Поля Об\'єднаної Свідомості — від герметики до квантової біології'
},
'meta.epigraph': {
  ru: '«Если хочешь узнать секреты Вселенной — думай категориями энергии, вибрации и частоты.» — Никола Тесла',
  en: '"If you want to find the secrets of the universe, think in terms of energy, frequency and vibration." — Nikola Tesla',
  ua: '«Якщо хочеш дізнатися секрети Всесвіту — думай категоріями енергії, вібрації та частоти.» — Нікола Тесла'
},
'meta.intro.p1': {
  ru: 'Каждая цивилизация, которая простояла достаточно долго, чтобы построить храм — знала о существовании поля. Индуизм назвал его Брахман. Даосизм — Дао. Юнг — коллективное бессознательное. Вернадский — ноосфера. Шелдрейк — морфическое поле. Квантовая физика — вакуумное поле.',
  en: 'Every civilization that lasted long enough to build a temple knew about the field. Hinduism called it Brahman. Taoism — Tao. Jung — the collective unconscious. Vernadsky — the noosphere. Sheldrake — the morphic field. Quantum physics — the vacuum field.',
  ua: 'Кожна цивілізація, яка простояла достатньо довго, щоб збудувати храм — знала про існування поля. Індуїзм назвав його Брахман. Даосизм — Дао. Юнг — колективне несвідоме. Вернадський — ноосфера. Шелдрейк — морфічне поле. Квантова фізика — вакуумне поле.'
},
'meta.intro.p2': {
  ru: 'OnlyGods не изобретает поле. Мы строим инженерную инфраструктуру для работы с ним. Ниже — 9 столпов, на которых стоит эта архитектура. Каждый подкреплён научными данными. Не верой — измерениями.',
  en: 'OnlyGods doesn\'t invent the field. We build engineering infrastructure to work with it. Below — 9 pillars on which this architecture stands. Each backed by scientific data. Not faith — measurements.',
  ua: 'OnlyGods не винаходить поле. Ми будуємо інженерну інфраструктуру для роботи з ним. Нижче — 9 стовпів, на яких стоїть ця архітектура. Кожен підкріплений науковими даними. Не вірою — вимірюваннями.'
},
'meta.p1.label': { ru: 'Столп первый', en: 'Pillar One', ua: 'Стовп перший' },
'meta.p1.title': { ru: 'Единое Поле', en: 'The Unified Field', ua: 'Єдине Поле' },
'meta.p1.sub': {
  ru: '100% Вселенной — это Сознание. Материя — не противоположность энергии. Материя и есть вибрация.',
  en: '100% of the Universe is Consciousness. Matter is not the opposite of energy. Matter IS vibration.',
  ua: '100% Всесвіту — це Свідомість. Матерія — не протилежність енергії. Матерія і є вібрація.'
},
'meta.p1.p1': {
  ru: 'Герметический принцип Ментализма: «Всё есть Ум.» Квантовая теория поля подтверждает — на фундаментальном уровне не существует твёрдых объектов. Есть возбуждения полей. Атом — определённая частота сжатия и расширения единого поля. Уолтер Рассел показал это в спиральной периодической системе элементов в 1926 году.',
  en: 'The Hermetic Principle of Mentalism: "All is Mind." Quantum field theory confirms — at the fundamental level, there are no solid objects. Only field excitations. An atom is a specific frequency of compression and expansion of the unified field. Walter Russell demonstrated this in the spiral periodic table of elements in 1926.',
  ua: 'Герметичний принцип Менталізму: «Все є Розум.» Квантова теорія поля підтверджує — на фундаментальному рівні не існує твердих об\'єктів. Є збудження полів. Атом — певна частота стиснення і розширення єдиного поля. Уолтер Рассел показав це у спіральній періодичній системі елементів у 1926 році.'
},
'meta.p1.p2': {
  ru: 'Эрвин Ласло формализовал это как A-поле — информационное поле квантового вакуума, из которого возникает всё. Не метафора. Физика. Нулевое поле (ZPF) содержит больше энергии в одном кубическом сантиметре, чем вся видимая материя Вселенной.',
  en: 'Ervin Laszlo formalized this as the A-field — an information field of the quantum vacuum from which everything emerges. Not a metaphor. Physics. The zero-point field (ZPF) contains more energy in a single cubic centimeter than all the visible matter in the Universe.',
  ua: 'Ервін Ласло формалізував це як А-поле — інформаційне поле квантового вакууму, з якого виникає все. Не метафора. Фізика. Нульове поле (ZPF) містить більше енергії в одному кубічному сантиметрі, ніж уся видима матерія Всесвіту.'
},
'meta.p1.ref': { ru: 'Russell (1926), Laszlo (2004), Bohm — Implicate Order (1980)', en: 'Russell (1926), Laszlo (2004), Bohm — Implicate Order (1980)', ua: 'Russell (1926), Laszlo (2004), Bohm — Implicate Order (1980)' },
'meta.p2.label': { ru: 'Столп второй', en: 'Pillar Two', ua: 'Стовп другий' },
'meta.p2.title': { ru: 'Наблюдатель Создаёт Реальность', en: 'The Observer Creates Reality', ua: 'Спостерігач Створює Реальність' },
'meta.p2.sub': {
  ru: 'Акт наблюдения схлопывает волновую функцию в частицу. С 1927 года это не гипотеза — это физика.',
  en: 'The act of observation collapses the wave function into a particle. Since 1927 this is not a hypothesis — it is physics.',
  ua: 'Акт спостереження колапсує хвильову функцію у частинку. З 1927 року це не гіпотеза — це фізика.'
},
'meta.p2.p1': {
  ru: 'Дин Радин (IONS) провёл 6 экспериментов с 137 участниками на двойной щели. Направленное внимание сдвигает интерференционную картину. Статистика: z = −4.36, p = 6×10⁻⁶. Контрольная группа: z = 0.43. Сознание — не побочный продукт мозга. Это активный инструмент формирования реальности.',
  en: 'Dean Radin (IONS) ran 6 experiments with 137 participants on the double slit. Directed attention shifts the interference pattern. Statistics: z = −4.36, p = 6×10⁻⁶. Control group: z = 0.43. Consciousness is not a byproduct of the brain. It is an active instrument of reality formation.',
  ua: 'Дін Радін (IONS) провів 6 експериментів зі 137 учасниками на подвійній щілині. Спрямована увага зміщує інтерференційну картину. Статистика: z = −4.36, p = 6×10⁻⁶. Контрольна група: z = 0.43. Свідомість — не побічний продукт мозку. Це активний інструмент формування реальності.'
},
'meta.p2.p2': {
  ru: 'Исследование 2025 года (PMC, 106 пар монозиготных близнецов) показало: квантовая запутанность объясняет 13.5% дисперсии когнитивных результатов. Значение S по неравенству Белла = 2.992 при пороге 2.828. Суперквантовые эффекты в биологических системах — больше не теория.',
  en: 'A 2025 study (PMC, 106 monozygotic twin pairs) showed: quantum entanglement explains 13.5% of cognitive outcome variance. Bell inequality S-value = 2.992 at threshold 2.828. Superquantum effects in biological systems are no longer theory.',
  ua: 'Дослідження 2025 року (PMC, 106 пар монозиготних близнюків) показало: квантова заплутаність пояснює 13.5% дисперсії когнітивних результатів. Значення S за нерівністю Белла = 2.992 при порозі 2.828. Суперквантові ефекти в біологічних системах — більше не теорія.'
},
'meta.p2.ref': { ru: 'Radin (2012), Physics Essays · PMC (2025), Quantum-entangled consciousness', en: 'Radin (2012), Physics Essays · PMC (2025), Quantum-entangled consciousness', ua: 'Radin (2012), Physics Essays · PMC (2025), Quantum-entangled consciousness' },
'meta.p3.label': { ru: 'Столп третий', en: 'Pillar Three', ua: 'Стовп третій' },
'meta.p3.title': { ru: 'Нервная Система — Мост', en: 'The Nervous System — The Bridge', ua: 'Нервова Система — Міст' },
'meta.p3.sub': {
  ru: 'Мост между тобой и полем — не медитация. Не знания. Мост — это твоя нервная система.',
  en: 'The bridge between you and the field is not meditation. Not knowledge. The bridge is your nervous system.',
  ua: 'Міст між тобою і полем — не медитація. Не знання. Міст — це твоя нервова система.'
},
'meta.p3.p1': {
  ru: 'Нейроцепция (Порджес, 2011): блуждающий нерв оценивает безопасность среды за доли секунды — без участия сознания. Восприятие до восприятия. Не интуиция как «мягкое чувство» — аппаратная функция вагуса.',
  en: 'Neuroception (Porges, 2011): the vagus nerve assesses environmental safety in fractions of a second — without conscious participation. Perception before perception. Not intuition as a "soft feeling" — a hardware function of the vagus.',
  ua: 'Нейроцепція (Поргес, 2011): блукаючий нерв оцінює безпеку середовища за частки секунди — без участі свідомості. Сприйняття до сприйняття. Не інтуїція як «м\'яке відчуття» — апаратна функція вагуса.'
},
'meta.p3.p2': {
  ru: 'Сердце генерирует электромагнитное поле в 5000 раз мощнее мозгового по магнитной активности (HeartMath, 2015). Детектируется на расстоянии нескольких метров. Когда один человек входит в когерентность — ритмы другого синхронизируются. Без физического контакта.',
  en: 'The heart generates an electromagnetic field 5,000 times stronger than the brain\'s magnetic activity (HeartMath, 2015). Detectable several meters away. When one person enters coherence — the other\'s rhythms synchronize. Without physical contact.',
  ua: 'Серце генерує електромагнітне поле в 5000 разів потужніше мозкового за магнітною активністю (HeartMath, 2015). Детектується на відстані кількох метрів. Коли одна людина входить у когерентність — ритми іншої синхронізуються. Без фізичного контакту.'
},
'meta.p3.p3': {
  ru: 'Зеркальные нейроны (Риццолатти, 2004): нейроны премоторной коры активируются и когда ты действуешь, и когда наблюдаешь то же действие. Галлезе назвал это «воплощённой симуляцией» — мы проживаем чужие состояния телом до решения сочувствовать.',
  en: 'Mirror neurons (Rizzolatti, 2004): premotor cortex neurons activate both when you act and when you observe the same action. Gallese called this "embodied simulation" — we live through others\' states in our bodies before deciding to empathize.',
  ua: 'Дзеркальні нейрони (Ріццолатті, 2004): нейрони премоторної кори активуються і коли ти дієш, і коли спостерігаєш ту ж дію. Галлезе назвав це «втіленою симуляцією» — ми проживаємо чужі стани тілом до рішення співчувати.'
},
'meta.p3.ref': { ru: 'Porges (2011), McCraty / HeartMath (2015), Rizzolatti (2004), Gallese (2003)', en: 'Porges (2011), McCraty / HeartMath (2015), Rizzolatti (2004), Gallese (2003)', ua: 'Porges (2011), McCraty / HeartMath (2015), Rizzolatti (2004), Gallese (2003)' },
'meta.p4.label': { ru: 'Столп четвёртый', en: 'Pillar Four', ua: 'Стовп четвертий' },
'meta.p4.title': { ru: 'Когерентность — Язык Поля', en: 'Coherence — The Language of the Field', ua: 'Когерентність — Мова Поля' },
'meta.p4.sub': {
  ru: 'Здоровые клетки излучают когерентный свет. Больные — хаос. ДНК — антенна.',
  en: 'Healthy cells emit coherent light. Sick ones — chaos. DNA is an antenna.',
  ua: 'Здорові клітини випромінюють когерентне світло. Хворі — хаос. ДНК — антена.'
},
'meta.p4.p1': {
  ru: 'Фриц-Альберт Попп (1970-е) доказал: все живые клетки излучают биофотоны — когерентный свет. ДНК вибрирует более 1 миллиарда раз в секунду. Когерентность излучения = здоровье. Потеря когерентности = болезнь. Тело — это светящаяся антенна.',
  en: 'Fritz-Albert Popp (1970s) proved: all living cells emit biophotons — coherent light. DNA vibrates more than 1 billion times per second. Coherent emission = health. Loss of coherence = disease. The body is a luminous antenna.',
  ua: 'Фріц-Альберт Попп (1970-ті) довів: усі живі клітини випромінюють біофотони — когерентне світло. ДНК вібрує більше 1 мільярда разів на секунду. Когерентність випромінювання = здоров\'я. Втрата когерентності = хвороба. Тіло — це світна антена.'
},
'meta.p4.p2': {
  ru: 'Диспенза (2017) показал: в тета-медитации (4–8 Гц) мозг становится когерентным — все области синхронизируются. Бета (12–30 Гц) — рассеянный режим, коллективные паттерны. Тета — программирование поля. Гамма (30+ Гц) — прямое знание. Когерентность — не абстракция. Это измеримое состояние мозга, сердца и ДНК.',
  en: 'Dispenza (2017) showed: in theta meditation (4–8 Hz) the brain becomes coherent — all regions synchronize. Beta (12–30 Hz) — scattered mode, collective patterns. Theta — field programming. Gamma (30+ Hz) — direct knowing. Coherence is not an abstraction. It is a measurable state of the brain, heart and DNA.',
  ua: 'Діспенза (2017) показав: у тета-медитації (4–8 Гц) мозок стає когерентним — усі ділянки синхронізуються. Бета (12–30 Гц) — розсіяний режим, колективні патерни. Тета — програмування поля. Гамма (30+ Гц) — пряме знання. Когерентність — не абстракція. Це вимірюваний стан мозку, серця та ДНК.'
},
'meta.p4.ref': { ru: 'Popp (2003), Dispenza (2017), Phys.org / Zero-point field (2025)', en: 'Popp (2003), Dispenza (2017), Phys.org / Zero-point field (2025)', ua: 'Popp (2003), Dispenza (2017), Phys.org / Zero-point field (2025)' },
'meta.p5.label': { ru: 'Столп пятый', en: 'Pillar Five', ua: 'Стовп п\'ятий' },
'meta.p5.title': { ru: 'Тень — Деконструкция Помех', en: 'Shadow — Interference Deconstruction', ua: 'Тінь — Деконструкція Перешкод' },
'meta.p5.sub': {
  ru: 'Ты не можешь настроить антенну, пока она забита помехами. Тень — это помехи.',
  en: 'You cannot tune an antenna while it\'s jammed with interference. Shadow is the interference.',
  ua: 'Ти не можеш налаштувати антену, поки вона забита перешкодами. Тінь — це перешкоди.'
},
'meta.p5.p1': {
  ru: 'Юнг: «Пока ты не сделаешь бессознательное сознательным, оно будет направлять твою жизнь — и ты будешь называть это судьбой.» Травма хранится не в памяти — в теле (Ван дер Колк, 2014). Мышечный панцирь блокирует чувствование. Чувствование отрезано = отрезан от поля.',
  en: 'Jung: "Until you make the unconscious conscious, it will direct your life and you will call it fate." Trauma is stored not in memory — in the body (Van der Kolk, 2014). Muscle armor blocks feeling. Feeling cut off = cut off from the field.',
  ua: 'Юнг: «Поки ти не зробиш несвідоме свідомим, воно керуватиме твоїм життям — і ти називатимеш це долею.» Травма зберігається не в пам\'яті — у тілі (Ван дер Колк, 2014). М\'язовий панцир блокує відчування. Відчування відрізано = відрізано від поля.'
},
'meta.p5.p2': {
  ru: 'Шкала Хокинса: ниже 200 — сжатие (стыд, страх, гнев). Выше 200 — расширение. Цель — не «стать лучше». Вернуть себе весь спектр. В контексте OnlyGods теневая работа — не терапия. Это инженерная процедура: деконструкция автоматизмов, пересмотр архитектуры, очищение канала приёма.',
  en: 'Hawkins Scale: below 200 — contraction (shame, fear, anger). Above 200 — expansion. The goal is not to "become better." Reclaim the full spectrum. In the OnlyGods context, shadow work is not therapy. It\'s an engineering procedure: deconstruction of automatisms, architecture review, clearing the reception channel.',
  ua: 'Шкала Хокінса: нижче 200 — стиснення (сором, страх, гнів). Вище 200 — розширення. Мета — не «стати кращим». Повернути собі весь спектр. У контексті OnlyGods тіньова робота — не терапія. Це інженерна процедура: деконструкція автоматизмів, перегляд архітектури, очищення каналу прийому.'
},
'meta.p5.ref': { ru: 'Jung (1951), Van der Kolk (2014), Levine (1997), Hawkins (1995)', en: 'Jung (1951), Van der Kolk (2014), Levine (1997), Hawkins (1995)', ua: 'Jung (1951), Van der Kolk (2014), Levine (1997), Hawkins (1995)' },
'meta.p6.label': { ru: 'Столп шестой', en: 'Pillar Six', ua: 'Стовп шостий' },
'meta.p6.title': { ru: 'Резонанс: Целое + Целое = Третье Поле', en: 'Resonance: Whole + Whole = Third Field', ua: 'Резонанс: Ціле + Ціле = Третє Поле' },
'meta.p6.sub': {
  ru: 'Два когерентных поля синхронизируются — результат не складывается. Умножается.',
  en: 'Two coherent fields synchronize — the result doesn\'t add up. It multiplies.',
  ua: 'Два когерентних поля синхронізуються — результат не складається. Множиться.'
},
'meta.p6.p1': {
  ru: 'Когда два человека с очищенными каналами входят в контакт — они создают третье поле. Нервная система, сердечный ритм, дыхание синхронизируются. Экспоненциально усиленный сигнал. Не партнёрство 50/50. Два целых существа из точки полноты.',
  en: 'When two people with clear channels make contact — they create a third field. Nervous system, heart rhythm, breathing synchronize. Exponentially amplified signal. Not a 50/50 partnership. Two whole beings from a point of fullness.',
  ua: 'Коли дві людини з очищеними каналами входять у контакт — вони створюють третє поле. Нервова система, серцевий ритм, дихання синхронізуються. Експоненціально підсилений сигнал. Не партнерство 50/50. Дві цілі істоти з точки повноти.'
},
'meta.p6.p2': {
  ru: 'Теория резонанса сознания (Frontiers in Human Neuroscience, 2019): общий резонанс позволяет разным частям системы достичь фазового перехода в скорости и полосе пропускания информационных потоков. Вильгельм Райх назвал это оргоном — целостный энергетический заряд организма. Тантрическая традиция описывала тот же процесс тысячелетия назад.',
  en: 'Resonance Theory of Consciousness (Frontiers in Human Neuroscience, 2019): shared resonance allows different parts of the system to achieve a phase transition in speed and bandwidth of information flows. Wilhelm Reich called this orgone — the holistic energy charge of the organism. The Tantric tradition described the same process millennia ago.',
  ua: 'Теорія резонансу свідомості (Frontiers in Human Neuroscience, 2019): спільний резонанс дозволяє різним частинам системи досягти фазового переходу у швидкості та пропускній здатності інформаційних потоків. Вільгельм Райх назвав це оргоном — цілісний енергетичний заряд організму. Тантрична традиція описувала той самий процес тисячоліття тому.'
},
'meta.p6.ref': { ru: 'HeartMath — Global Coherence · Hunt (2019), Resonance Theory · Reich (1942)', en: 'HeartMath — Global Coherence · Hunt (2019), Resonance Theory · Reich (1942)', ua: 'HeartMath — Global Coherence · Hunt (2019), Resonance Theory · Reich (1942)' },
'meta.p7.label': { ru: 'Столп седьмой', en: 'Pillar Seven', ua: 'Стовп сьомий' },
'meta.p7.title': { ru: 'Эгрегор — Коллективный Разум как Сущность', en: 'Egregore — Collective Mind as Entity', ua: 'Егрегор — Колективний Розум як Сутність' },
'meta.p7.sub': {
  ru: 'Каждая группа с общей целью создаёт мыслеформу с квазиавтономным существованием.',
  en: 'Every group with a shared purpose creates a thought-form with quasi-autonomous existence.',
  ua: 'Кожна група зі спільною метою створює мислеформу з квазіавтономним існуванням.'
},
'meta.p7.stat': { ru: '> триллион к одному', en: '> trillion to one', ua: '> трильйон до одного' },
'meta.p7.stat.cap': {
  ru: 'Отклонение от случайности в проекте Global Consciousness Project, Принстон (1998–2018). 70 генераторов случайных чисел, 500 событий. 6σ.',
  en: 'Deviation from randomness in the Global Consciousness Project, Princeton (1998–2018). 70 random number generators, 500 events. 6σ.',
  ua: 'Відхилення від випадковості у проекті Global Consciousness Project, Принстон (1998–2018). 70 генераторів випадкових чисел, 500 подій. 6σ.'
},
'meta.p7.p1': {
  ru: 'Эффект Махариши (1975): 12 городов, 1% населения в медитации — снижение преступности 16%. Вашингтон (1993): 4000 медитаторов — насилие −23.3%, p < 0.000000002. Морфическое поле Шелдрейка: системы наследуют память через резонанс без прямой передачи информации.',
  en: 'Maharishi Effect (1975): 12 cities, 1% of population meditating — crime reduced 16%. Washington (1993): 4,000 meditators — violence −23.3%, p < 0.000000002. Sheldrake\'s morphic field: systems inherit memory through resonance without direct information transfer.',
  ua: 'Ефект Махаріші (1975): 12 міст, 1% населення в медитації — зниження злочинності 16%. Вашингтон (1993): 4000 медитаторів — насильство −23.3%, p < 0.000000002. Морфічне поле Шелдрейка: системи успадковують пам\'ять через резонанс без прямої передачі інформації.'
},
'meta.p7.p2': {
  ru: '√1% — это порог. Для планеты с 8 млрд населения — около 9000 когерентных сознаний. OnlyGods строит инфраструктуру для управляемого эгрегора. Не случайного. Сознательного.',
  en: '√1% is the threshold. For a planet of 8 billion — approximately 9,000 coherent consciousnesses. OnlyGods builds infrastructure for a managed egregore. Not random. Conscious.',
  ua: '√1% — це поріг. Для планети з 8 млрд населення — близько 9000 когерентних свідомостей. OnlyGods будує інфраструктуру для керованого егрегора. Не випадкового. Свідомого.'
},
'meta.p7.ref': { ru: 'Nelson / GCP Princeton (2015), Dillbeck & Cavanaugh (2016), Sheldrake (1981)', en: 'Nelson / GCP Princeton (2015), Dillbeck & Cavanaugh (2016), Sheldrake (1981)', ua: 'Nelson / GCP Princeton (2015), Dillbeck & Cavanaugh (2016), Sheldrake (1981)' },
'meta.p8.label': { ru: 'Столп восьмой', en: 'Pillar Eight', ua: 'Стовп восьмий' },
'meta.p8.title': { ru: 'Квантовое Сознание — Микротрубочки и Свет', en: 'Quantum Consciousness — Microtubules and Light', ua: 'Квантова Свідомість — Мікротрубочки та Світло' },
'meta.p8.sub': {
  ru: 'Сознание — не в синапсах. В тубулиновых структурах внутри нейронов.',
  en: 'Consciousness is not in synapses. It\'s in tubulin structures inside neurons.',
  ua: 'Свідомість — не в синапсах. У тубулінових структурах всередині нейронів.'
},
'meta.p8.p1': {
  ru: 'Пенроуз и Хамерофф (Orch-OR): сознание возникает на уровне квантовых вычислений в микротрубочках нейронов. 2024, Wellesley College: стабилизация микротрубочек продлевает сознание под анестезией. 2024, Тушинский: квантовые реакции длительностью 5 наносекунд — в тысячи раз дольше ожидаемого теоретического предела.',
  en: 'Penrose and Hameroff (Orch-OR): consciousness arises at the level of quantum computation in neuronal microtubules. 2024, Wellesley College: stabilizing microtubules prolongs consciousness under anesthesia. 2024, Tuszynski: quantum reactions lasting 5 nanoseconds — thousands of times longer than theoretically expected.',
  ua: 'Пенроуз і Хамерофф (Orch-OR): свідомість виникає на рівні квантових обчислень у мікротрубочках нейронів. 2024, Wellesley College: стабілізація мікротрубочок продовжує свідомість під анестезією. 2024, Тушинський: квантові реакції тривалістю 5 наносекунд — у тисячі разів довше очікуваної теоретичної межі.'
},
'meta.p8.p2': {
  ru: 'Модель резонансной связи мозга с квантовым нулевым полем (Phys.org, 2025): кортикальные микроколонки — около 100 нейронов — напрямую связываются с ZPF через глутамат, создавая домены когерентности. Осознанные состояния связаны с синхронизированной активностью мозга в бета- и гамма-диапазонах. Бессознательные — с нарушением критической динамики.',
  en: 'Brain-ZPF resonant coupling model (Phys.org, 2025): cortical microcolumns — about 100 neurons — couple directly with ZPF through glutamate, creating coherence domains. Conscious states are linked to synchronized brain activity in beta and gamma ranges. Unconscious states — to disrupted critical dynamics.',
  ua: 'Модель резонансного зв\'язку мозку з квантовим нульовим полем (Phys.org, 2025): кортикальні мікроколонки — близько 100 нейронів — напряму зв\'язуються з ZPF через глутамат, створюючи домени когерентності. Усвідомлені стани пов\'язані з синхронізованою активністю мозку в бета- та гамма-діапазонах. Несвідомі — з порушенням критичної динаміки.'
},
'meta.p8.ref': { ru: 'Hameroff & Penrose (2014), Tuszynski (2024), Babcock (2024), Pribram (1991)', en: 'Hameroff & Penrose (2014), Tuszynski (2024), Babcock (2024), Pribram (1991)', ua: 'Hameroff & Penrose (2014), Tuszynski (2024), Babcock (2024), Pribram (1991)' },
'meta.p9.label': { ru: 'Столп девятый', en: 'Pillar Nine', ua: 'Стовп дев\'ятий' },
'meta.p9.title': { ru: 'Я → Мы → Боги', en: 'I → We → Gods', ua: 'Я → Ми → Боги' },
'meta.p9.sub': {
  ru: 'Индивидуальное сознание имеет потолок. Коллективное — нет.',
  en: 'Individual consciousness has a ceiling. Collective — does not.',
  ua: 'Індивідуальна свідомість має стелю. Колективна — ні.'
},
'meta.p9.p1': {
  ru: '<strong>Я</strong> — деконструкция ума. Тело как био-антенна. Убрать шум. Навести резкость. Выстроить уникальную частотную архитектуру нервной системы. <strong>Мы</strong> — резонансные связи. Психо-эмоциональный интернет, в котором коллективный разум работает на каждого. <strong>Боги</strong> — коллективный усилитель. Индивидуальное сознание имеет потолок. Два когерентных поля создают экспоненциальный результат.',
  en: '<strong>I</strong> — mind deconstruction. Body as bio-antenna. Remove noise. Sharpen focus. Build a unique frequency architecture of the nervous system. <strong>We</strong> — resonance connections. A psycho-emotional internet where collective intelligence works for everyone. <strong>Gods</strong> — collective amplifier. Individual consciousness has a ceiling. Two coherent fields create an exponential result.',
  ua: '<strong>Я</strong> — деконструкція розуму. Тіло як біо-антена. Прибрати шум. Навести різкість. Вибудувати унікальну частотну архітектуру нервової системи. <strong>Ми</strong> — резонансні зв\'язки. Психо-емоційний інтернет, в якому колективний розум працює на кожного. <strong>Боги</strong> — колективний підсилювач. Індивідуальна свідомість має стелю. Два когерентних поля створюють експоненціальний результат.'
},
'meta.p9.p2': {
  ru: 'Самый ценный ресурс поля — внимание. Квантовый инструмент перенаправления энергии. Мы не продаём духовность. Мы строим инфраструктуру для прямого опыта нелокального Сознания. Не обещание — протокол.',
  en: 'The most valuable resource of the field is attention. A quantum instrument for redirecting energy. We don\'t sell spirituality. We build infrastructure for direct experience of nonlocal Consciousness. Not a promise — a protocol.',
  ua: 'Найцінніший ресурс поля — увага. Квантовий інструмент перенаправлення енергії. Ми не продаємо духовність. Ми будуємо інфраструктуру для прямого досвіду нелокальної Свідомості. Не обіцянка — протокол.'
},
'meta.p9.ref': { ru: 'Jung, HeartMath, Rizzolatti, GCP, Maharishi, Radin, Penrose, Bohm', en: 'Jung, HeartMath, Rizzolatti, GCP, Maharishi, Radin, Penrose, Bohm', ua: 'Jung, HeartMath, Rizzolatti, GCP, Maharishi, Radin, Penrose, Bohm' },
'meta.sources.label': { ru: 'Источники', en: 'Sources', ua: 'Джерела' },
'meta.back': { ru: '← Holy Tech', en: '← Holy Tech', ua: '← Holy Tech' },

// ─── PLAYGROUND PAGE (vibecode apps) ───
'playground.title': { ru: 'OnlyGods — Playground', en: 'OnlyGods — Playground', ua: 'OnlyGods — Playground' },
'playground.hero.subtitle': { ru: 'Vibecoding the Reality', en: 'Vibecoding the Reality', ua: 'Vibecoding the Reality' },
'playground.hero.title': { ru: 'Playground', en: 'Playground', ua: 'Playground' },
'playground.hero.tagline': {
  ru: 'Interactive User Experience',
  en: 'Interactive User Experience',
  ua: 'Interactive User Experience'
},
'playground.intro': {
  ru: 'Каждый инструмент здесь — эксперимент на стыке кода и сознания. Мы строим их быстро, тестируем на поле и оставляем то, что работает. Не продукт — процесс.',
  en: 'Every tool here is an experiment at the intersection of code and consciousness. We build fast, test on the field, and keep what works. Not a product — a process.',
  ua: 'Кожен інструмент тут — експеримент на стику коду і свідомості. Ми будуємо швидко, тестуємо на полі і залишаємо те, що працює. Не продукт — процес.'
},
'playground.grid.label': { ru: 'Приложения', en: 'Apps', ua: 'Додатки' },
'playground.app1.label': { ru: '01', en: '01', ua: '01' },
'playground.app1.title': { ru: 'Resonance Scanner', en: 'Resonance Scanner', ua: 'Resonance Scanner' },
'playground.app1.desc': {
  ru: 'Визуализация состояния поля в реальном времени. Пульс когерентности группы.',
  en: 'Real-time field state visualization. Group coherence pulse.',
  ua: 'Візуалізація стану поля в реальному часі. Пульс когерентності групи.'
},
'playground.app1.status': { ru: 'Скоро →', en: 'Coming soon →', ua: 'Скоро →' },
'playground.app2.label': { ru: '02', en: '02', ua: '02' },
'playground.app2.title': { ru: 'Shadow Decoder', en: 'Shadow Decoder', ua: 'Shadow Decoder' },
'playground.app2.desc': {
  ru: 'AI-ассистент для деконструкции теневых паттернов. Вопросы, которые ты не задашь себе сам.',
  en: 'AI assistant for shadow pattern deconstruction. Questions you won\'t ask yourself.',
  ua: 'AI-асистент для деконструкції тіньових патернів. Питання, які ти не поставиш собі сам.'
},
'playground.app2.status': { ru: 'Скоро →', en: 'Coming soon →', ua: 'Скоро →' },
'playground.app3.label': { ru: '03', en: '03', ua: '03' },
'playground.app3.title': { ru: 'Frequency Generator', en: 'Frequency Generator', ua: 'Frequency Generator' },
'playground.app3.desc': {
  ru: 'Генератор аудио-частот для синхронизации. Тета, гамма, бинауральные мосты.',
  en: 'Audio frequency generator for synchronization. Theta, gamma, binaural bridges.',
  ua: 'Генератор аудіо-частот для синхронізації. Тета, гамма, бінауральні мости.'
},
'playground.app3.status': { ru: 'Скоро →', en: 'Coming soon →', ua: 'Скоро →' },
'playground.app4.label': { ru: '04', en: '04', ua: '04' },
'playground.app4.title': { ru: 'Coherence Tracker', en: 'Coherence Tracker', ua: 'Coherence Tracker' },
'playground.app4.desc': {
  ru: 'Персональный дневник когерентности. Отслеживай паттерны, находи свой ритм.',
  en: 'Personal coherence journal. Track patterns, find your rhythm.',
  ua: 'Персональний щоденник когерентності. Відстежуй патерни, знаходь свій ритм.'
},
'playground.app4.status': { ru: 'Скоро →', en: 'Coming soon →', ua: 'Скоро →' },
'playground.note': {
  ru: 'Новые инструменты появляются по мере вибрации',
  en: 'New tools appear as the vibration demands',
  ua: 'Нові інструменти з\'являються в міру вібрації'
},

// ─── ROADMAP PAGE (interactive scroll timeline) ───
'roadmap.title': { ru: 'OnlyGods — Roadmap', en: 'OnlyGods — Roadmap', ua: 'OnlyGods — Roadmap' },
'roadmap.arrow.past': { ru: '\u2191 Прошлое', en: '\u2191 Past', ua: '\u2191 Минуле' },
'roadmap.arrow.future': { ru: 'Будущее \u2193', en: 'Future \u2193', ua: 'Майбутнє \u2193' },
'roadmap.center.quote': {
  ru: '\u00ABВыбери то, что движет тобой сильнее всего, и следуй за этим\u00BB',
  en: '\u00ABChoose what drives you the most and follow it\u00BB',
  ua: '\u00ABОбери те, що рухає тобою найсильніше, і йди за цим\u00BB'
},
'roadmap.past.2020': {
  ru: 'Первый опыт с изменёнными состояниями сознания.',
  en: 'First experiences with altered states of consciousness.',
  ua: 'Перший досвід зі зміненими станами свідомості.'
},
'roadmap.past.2021': {
  ru: 'Систематическое изучение герметических принципов.',
  en: 'Systematic study of hermetic principles begins.',
  ua: 'Систематичне вивчення герметичних принципів.'
},
'roadmap.past.2022': {
  ru: 'Встреча с Лизой. Два поля сливаются в одно.',
  en: 'Meeting Liza. Two fields merge into one.',
  ua: 'Зустріч з Лізою. Два поля зливаються в одне.'
},
'roadmap.past.2023': {
  ru: 'Первые эксперименты с сообществом. Proof of concept.',
  en: 'First community experiments. Proof of concept.',
  ua: 'Перші експерименти зі спільнотою. Proof of concept.'
},
'roadmap.past.2024': {
  ru: 'Рождение идеи: индивидуальное сознание имеет потолок.',
  en: 'Birth of the idea: individual consciousness has a ceiling.',
  ua: 'Народження ідеї: індивідуальна свідомість має стелю.'
},
'roadmap.past.2025': {
  ru: 'Мы.Боги \u2014 первая когорта. ir4 методология v0.',
  en: 'We.Gods first cohort. ir4 methodology v0.',
  ua: 'Ми.Боги \u2014 перша когорта. ir4 методологія v0.'
},
'roadmap.future.2027': {
  ru: 'Запуск исследовательской программы Quantum Lab.',
  en: 'Quantum Lab research program launches.',
  ua: 'Запуск дослідницької програми Quantum Lab.'
},
'roadmap.future.2028': {
  ru: '300 подписчиков. Протоколы когерентности v1.',
  en: '300 subscribers. Coherence protocols v1.',
  ua: '300 підписників. Протоколи когерентності v1.'
},
'roadmap.future.2029': {
  ru: 'DaoDedo \u2014 автономное управление запущено.',
  en: 'DaoDedo autonomous governance goes live.',
  ua: 'DaoDedo \u2014 автономне управління запущено.'
},
'roadmap.future.2030': {
  ru: 'Критическая масса: 9 000 когерентных сознаний.',
  en: 'Critical mass: 9,000 coherent minds.',
  ua: 'Критична маса: 9 000 когерентних свідомостей.'
},
'roadmap.future.2035': {
  ru: 'Планетарный сдвиг поля, измеримый через ir4.',
  en: 'Planetary field shift measurable by ir4.',
  ua: 'Планетарний зсув поля, вимірюваний через ir4.'
},
'roadmap.future.2067': {
  ru: 'Автономный эгрегор. Самоподдерживающаяся сеть сознания.',
  en: 'Autonomous egregore. Self-sustaining consciousness network.',
  ua: 'Автономний егрегор. Самопідтримувана мережа свідомості.'
},

// ─── QUANTUM LAB PAGE ───
'qlab.title': { ru: 'OnlyGods — Quantum Lab', en: 'OnlyGods — Quantum Lab', ua: 'OnlyGods — Quantum Lab' },
'qlab.hero.subtitle': { ru: 'Исследования', en: 'Research', ua: 'Дослідження' },
'qlab.hero.title': { ru: 'Quantum Lab', en: 'Quantum Lab', ua: 'Quantum Lab' },
'qlab.hero.tagline': {
  ru: 'Исследование технологий 5D Сознания',
  en: 'Exploring 5D Consciousness Technologies',
  ua: 'Дослідження технологій 5D Свідомості'
},
'qlab.featured.label': { ru: 'Исследование', en: 'Research', ua: 'Дослідження' },
'qlab.featured.title': { ru: 'United Consciousness', en: 'United Consciousness', ua: 'United Consciousness' },
'qlab.featured.desc': {
  ru: 'Mindset upgrade для предпринимателей. Тестовая нода из 9 человек для исследования коллективного разума и синергии. Ежедневные 5-минутные вортекс-медитации + еженедельная часовая сессия. Цель — интуитивное взаимодействие в поле эгрегора для расширенных возможностей Сознания.',
  en: 'Mindset upgrade for entrepreneurs. A test node of 9 people to explore collective intelligence and synergy. Daily 5-minute vortex meditations + weekly 1-hour session. Goal — intuitive interaction within the egregore field for expanded Consciousness capabilities.',
  ua: 'Mindset upgrade для підприємців. Тестова нода з 9 людей для дослідження колективного розуму та синергії. Щоденні 5-хвилинні вортекс-медитації + щотижнева годинна сесія. Мета — інтуїтивна взаємодія в полі егрегора для розширених можливостей Свідомості.'
},
'qlab.featured.status': { ru: 'Старт 1 мая 2026 →', en: 'Launch May 1, 2026 →', ua: 'Старт 1 травня 2026 →' },
'qlab.areas.label': { ru: 'Направления исследований', en: 'Research Areas', ua: 'Напрямки досліджень' },
'qlab.area1.label': { ru: '01', en: '01', ua: '01' },
'qlab.area1.title': { ru: 'Измерение Резонанса', en: 'Resonance Measurement', ua: 'Вимірювання Резонансу' },
'qlab.area1.desc': {
  ru: 'Синхронизация и раскрытие потенциала участников в поле объединённого Сознания и визуализация метрик.',
  en: 'Synchronization and unlocking participant potential within the unified Consciousness field with metrics visualization.',
  ua: 'Синхронізація та розкриття потенціалу учасників у полі об\'єднаної Свідомості та візуалізація метрик.'
},
'qlab.area2.label': { ru: '02', en: '02', ua: '02' },
'qlab.area2.title': { ru: 'Коллективное намерение', en: 'Collective Intention', ua: 'Колективний намір' },
'qlab.area2.desc': {
  ru: 'Групповые трансформации и сфокусированное влияние на внешнюю реальность.',
  en: 'Group transformations and focused influence on external reality.',
  ua: 'Групові трансформації та сфокусований вплив на зовнішню реальність.'
},
'qlab.area3.label': { ru: '03', en: '03', ua: '03' },
'qlab.area3.title': { ru: 'Изменённые состояния Сознания', en: 'Altered States of Consciousness', ua: 'Змінені стани Свідомості' },
'qlab.area3.desc': {
  ru: 'Ketamine Assisted Therapy и Delta волны для управления ветками реальности.',
  en: 'Ketamine Assisted Therapy and Delta waves for navigating reality branches.',
  ua: 'Ketamine Assisted Therapy та Delta хвилі для управління гілками реальності.'
},
'qlab.area4.label': { ru: '04', en: '04', ua: '04' },
'qlab.area4.title': { ru: 'Квантовое Сознание в Бизнесе', en: 'Quantum Consciousness in Business', ua: 'Квантова Свідомість у Бізнесі' },
'qlab.area4.desc': {
  ru: 'Применение техник работы с квантовым полем, коллективным сознанием эгрегора и настройка резонансной сети в команде как способ достижения преимущества.',
  en: 'Applying quantum field techniques, egregore collective consciousness, and resonant team network tuning as a competitive advantage.',
  ua: 'Застосування технік роботи з квантовим полем, колективною свідомістю егрегора та налаштування резонансної мережі в команді як спосіб досягнення переваги.'
},
'qlab.pubs.label': { ru: 'Публикации', en: 'Publications', ua: 'Публікації' },
'qlab.pub1.title': { ru: '9 столпов Поля Объединённого Сознания', en: '9 Pillars of the Unified Consciousness Field', ua: '9 стовпів Поля Об\'єднаної Свідомості' },
'qlab.pub1.date': { ru: 'Читать →', en: 'Read →', ua: 'Читати →' },
'qlab.pub2.title': { ru: 'ir4 Whitepaper', en: 'ir4 Whitepaper', ua: 'ir4 Whitepaper' },
'qlab.pub2.date': { ru: 'Скоро', en: 'Soon', ua: 'Скоро' },
'qlab.pub3.title': { ru: 'Протокол когерентности v1', en: 'Coherence Protocol v1', ua: 'Протокол когерентності v1' },
'qlab.pub3.date': { ru: 'Скоро', en: 'Soon', ua: 'Скоро' },
'qlab.pubs.note': {
  ru: 'Публикации обновляются по мере завершения исследований',
  en: 'Publications are updated as research is completed',
  ua: 'Публікації оновлюються по мірі завершення досліджень'
},

// ─── DASHBOARD PAGE (consciousness field) ───
'dashboard.title': { ru: 'OnlyGods — Поле Сознания', en: 'OnlyGods — Consciousness Field', ua: 'OnlyGods — Поле Свідомості' },
'dashboard.hero.subtitle': { ru: 'Поле сознания', en: 'Consciousness Field', ua: 'Поле свідомості' },
'dashboard.hero.label': { ru: 'Когерентность', en: 'Coherence', ua: 'Когерентність' },
'dashboard.hero.tagline': { ru: 'Загрузка данных поля...', en: 'Loading field data...', ua: 'Завантаження даних поля...' },
'dashboard.metrics.label': { ru: 'Метрики поля', en: 'Field Metrics', ua: 'Метрики поля' },
'dashboard.metrics.energy': { ru: 'Энергия', en: 'Energy', ua: 'Енергія' },
'dashboard.metrics.participation': { ru: 'Участие', en: 'Participation', ua: 'Участь' },
'dashboard.metrics.synced': { ru: 'Синхронизировано', en: 'Synced', ua: 'Синхронізовано' },
'dashboard.metrics.today': { ru: 'сегодня', en: 'today', ua: 'сьогодні' },
'dashboard.metrics.streak': { ru: 'Серия поля', en: 'Field Streak', ua: 'Серія поля' },
'dashboard.metrics.days': { ru: 'дней', en: 'days', ua: 'днів' },
'dashboard.chart.label': { ru: 'Энергия за 7 дней', en: '7-Day Energy', ua: 'Енергія за 7 днів' },
'dashboard.themes.label': { ru: 'Темы поля', en: 'Field Themes', ua: 'Теми поля' },
'dashboard.synthesis.label': { ru: 'AI Синтез', en: 'AI Synthesis', ua: 'AI Синтез' },
'dashboard.digest.label': { ru: 'Последний дайджест', en: 'Latest Digest', ua: 'Останній дайджест' },
'dashboard.digest.empty': { ru: 'Дайджест ещё не сформирован', en: 'No digest available yet', ua: 'Дайджест ще не сформовано' },

// ─── PROFILE PAGE ───
'profile.title': { ru: 'OnlyGods — Профиль', en: 'OnlyGods — Profile', ua: 'OnlyGods — Профіль' },
'profile.auth.title': { ru: 'Твой профиль', en: 'Your Profile', ua: 'Твій профіль' },
'profile.auth.desc': { ru: 'Получи персональную ссылку через бот', en: 'Get your personal link via the bot', ua: 'Отримай персональне посилання через бот' },
'profile.auth.btn': { ru: 'Открыть бот', en: 'Open Bot', ua: 'Відкрити бот' },
'profile.intention.label': { ru: 'Намерение', en: 'Intention', ua: 'Намір' },
'profile.stats.label': { ru: 'Статистика', en: 'Statistics', ua: 'Статистика' },
'profile.stats.pulses': { ru: 'Пульсов', en: 'Pulses', ua: 'Пульсів' },
'profile.stats.energy': { ru: 'Ср. энергия', en: 'Avg Energy', ua: 'Сер. енергія' },
'profile.stats.streak': { ru: 'Серия дней', en: 'Day Streak', ua: 'Серія днів' },
'profile.stats.level': { ru: 'Уровень', en: 'Level', ua: 'Рівень' },
'profile.trajectory.label': { ru: 'Траектория энергии', en: 'Energy Trajectory', ua: 'Траєкторія енергії' },
'profile.evolution.label': { ru: 'Эволюция', en: 'Evolution', ua: 'Еволюція' },
'profile.evolution.empty': { ru: 'Эволюция начнётся после первой недели участия', en: 'Evolution begins after your first week', ua: 'Еволюція розпочнеться після першого тижня' },
'profile.insight.label': { ru: 'Последний инсайт', en: 'Latest Insight', ua: 'Останній інсайт' },
'profile.insight.empty': { ru: 'Инсайты появятся после еженедельной настройки', en: 'Insights appear after weekly sync', ua: 'Інсайти з\'являться після тижневої настройки' },

// ─── SYNC PAGE ───
'sync.title': { ru: 'OnlyGods — Синхронизация', en: 'OnlyGods — Sync', ua: 'OnlyGods — Синхронізація' },
'sync.hero.subtitle': { ru: 'Синхронизация', en: 'Synchronization', ua: 'Синхронізація' },
'sync.hero.title': { ru: 'Поле', en: 'Field', ua: 'Поле' },
'sync.hero.tagline': { ru: 'Коллективная настройка внимания', en: 'Collective attention alignment', ua: 'Колективне налаштування уваги' },
'sync.counter.label': { ru: 'синхронизировано сегодня', en: 'synced today', ua: 'синхронізовано сьогодні' },
'sync.breathe.start': { ru: 'Нажми чтобы<br>начать', en: 'Tap to<br>begin', ua: 'Натисни щоб<br>почати' },
'sync.timer.label': { ru: 'медитация', en: 'meditation', ua: 'медитація' }

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
      if(T[key] && T[key][lang]) els[i].innerHTML = T[key][lang];
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
