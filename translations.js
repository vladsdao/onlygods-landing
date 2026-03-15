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
  ru: 'OnlyGods — Family',
  en: 'OnlyGods — Family',
  ua: 'OnlyGods — Family'
},
'alignment.title': {
  ru: 'OnlyGods — Alignment',
  en: 'OnlyGods — Alignment',
  ua: 'OnlyGods — Alignment'
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
'index.path.t2.price': {
  ru: '2 000€', en: '2 000€', ua: '2 000€'
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
  ru: '936€/мес · Коллективная энергостанция',
  en: '936€/mo · Collective power station',
  ua: '936€/міс · Колективна енергостанція'
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
  ru: 'Limited Launch', en: 'Limited Launch', ua: 'Limited Launch'
},
'index.join.title': {
  ru: 'Войти в Поле', en: 'Enter the Field', ua: 'Увійти в Поле'
},
'index.join.summary1': {
  ru: 'OnlyGods — закрытая цифровая среда для раскрытия творческого потенциала, трансформации сознания и поддержки уровня состояния участников на высоком уровне. Тщательно настроенный эгрегор с внутренней микро-экономикой резонанса, где каждый участник — не зритель, а со-творец коллективного поля. Платформа работает на стыке герметизма, вортекс математики, квантовой науки, AI и DAO-governance. Духовность. Изобилие. Синергия.',
  en: 'OnlyGods is a closed digital environment for unlocking creative potential, transforming consciousness, and sustaining participants at a high state of being. A carefully tuned egregore with an internal micro-economy of resonance, where every member is not a spectator but a co-creator of the collective field. The platform operates at the intersection of hermeticism, vortex mathematics, quantum science, AI, and DAO governance. Spirituality. Abundance. Synergy.',
  ua: 'OnlyGods — закрите цифрове середовище для розкриття творчого потенціалу, трансформації свідомості та підтримки стану учасників на високому рівні. Ретельно налаштований егрегор з внутрішньою мікро-економікою резонансу, де кожен учасник — не глядач, а спів-творець колективного поля. Платформа працює на стику герметизму, вортекс математики, квантової науки, AI та DAO-governance. Духовність. Достаток. Синергія.'
},
'index.join.summary2': {
  ru: 'Мы запускаемся в ограниченном режиме. Каждый новый участник имеет значение для частоты всего поля — поэтому вход только через программу трансформации <strong style="color:#fff">Мы.Боги</strong>.',
  en: 'We are launching in limited mode. Every new participant matters for the frequency of the entire field — that\'s why entry is only through the <strong style="color:#fff">We.Gods</strong> transformation program.',
  ua: 'Ми запускаємося в обмеженому режимі. Кожен новий учасник має значення для частоти всього поля — тому вхід лише через програму трансформації <strong style="color:#fff">Ми.Боги</strong>.'
},
'index.join.cond1.label': { ru: 'Вход', en: 'Entry', ua: 'Вхід' },
'index.join.cond1.value': { ru: 'Через курс Мы.Боги', en: 'Via We.Gods course', ua: 'Через курс Ми.Боги' },
'index.join.cond2.label': { ru: 'Участие', en: 'Commitment', ua: 'Участь' },
'index.join.cond2.value': { ru: 'Минимум 3 месяца', en: 'Minimum 3 months', ua: 'Мінімум 3 місяці' },
'index.join.cond3.label': { ru: 'Стоимость', en: 'Cost', ua: 'Вартість' },
'index.join.cond3.value': { ru: '936 \u20ac / месяц', en: '936 \u20ac / month', ua: '936 \u20ac / місяць' },
'index.join.cond4.label': { ru: 'Формат', en: 'Format', ua: 'Формат' },
'index.join.cond4.value': { ru: 'Закрытое поле, ежедневные практики', en: 'Closed field, daily practices', ua: 'Закрите поле, щоденні практики' },
'index.join.form_label': { ru: 'Оставьте заявку', en: 'Apply', ua: 'Залиште заявку' },
'index.join.ph_name': { ru: 'Имя', en: 'Name', ua: 'Ім\'я' },
'index.join.ph_contact': { ru: 'Email или Telegram', en: 'Email or Telegram', ua: 'Email або Telegram' },
'index.join.ph_message': { ru: 'Расскажите о себе и опыте', en: 'Tell us about yourself', ua: 'Розкажіть про себе та досвід' },
'index.join.btn': { ru: 'Отправить заявку', en: 'Submit Application', ua: 'Надіслати заявку' },
'index.join.note': {
  ru: 'Мы свяжемся лично. Отбор — не формальность, а настройка на резонанс.',
  en: 'We will reach out personally. Selection is not a formality — it\'s tuning into resonance.',
  ua: 'Ми зв\'яжемося особисто. Відбір — не формальність, а налаштування на резонанс.'
},

// ─── EGREGORE PAGE ───
'egregore.hero.subtitle': { ru: 'Технология Коллективной Эволюции', en: 'Technology of Collective Evolution', ua: 'Технологія Колективної Еволюції' },
'egregore.hero.title': { ru: 'Егрегор', en: 'Egregore', ua: 'Егрегор' },
'egregore.hero.tagline': { ru: 'Интернет Без Девайсов для Подсознания', en: 'Internet Without Devices for the Subconscious', ua: 'Інтернет Без Девайсів для Підсвідомості' },
'egregore.back': { ru: '← Holy Tech', en: '← Holy Tech', ua: '← Holy Tech' },
'egregore.description': {
  ru: 'Интернет Без Девайсов для Подсознания. Синергия и Суперразум.',
  en: 'Internet Without Devices for the Subconscious. Synergy and Superintelligence.',
  ua: 'Інтернет Без Девайсів для Підсвідомості. Синергія та Суперрозум.'
},
'egregore.coming_soon': { ru: 'Подробности скоро.', en: 'Details coming soon.', ua: 'Деталі незабаром.' },

// ─── NEUROPRACTICE PAGE ───
'neuropractice.hero.subtitle': { ru: 'Курс в записи', en: 'Recorded Course', ua: 'Курс у записі' },
'neuropractice.hero.title': { ru: 'Нейропрактика 2.0', en: 'Neuropractice 2.0', ua: 'Нейропрактика 2.0' },
'neuropractice.back': { ru: '← Mindset 2.0', en: '← Mindset 2.0', ua: '← Mindset 2.0' },
'neuropractice.description': {
  ru: 'Курс по работе с нейропластичностью и перепрограммированию паттернов сознания.',
  en: 'A course on neuroplasticity and reprogramming consciousness patterns.',
  ua: 'Курс з роботи з нейропластичністю та перепрограмуванню патернів свідомості.'
},
'neuropractice.author': { ru: 'Автор: Liza. Подробности скоро.', en: 'By Liza. Details coming soon.', ua: 'Автор: Liza. Деталі незабаром.' },

// ─── SEXUALITY PAGE ───
'sexuality.hero.subtitle': { ru: 'Курс', en: 'Course', ua: 'Курс' },
'sexuality.hero.title': { ru: 'Сексуальность', en: 'Sexuality', ua: 'Сексуальність' },
'sexuality.back': { ru: '← Mindset 2.0', en: '← Mindset 2.0', ua: '← Mindset 2.0' },
'sexuality.description': {
  ru: 'Исследование сексуальности как инструмента трансформации и энергетического менеджмента.',
  en: 'Exploring sexuality as a tool for transformation and energy management.',
  ua: 'Дослідження сексуальності як інструменту трансформації та енергетичного менеджменту.'
},
'sexuality.author': { ru: 'Автор: Liza. Подробности скоро.', en: 'By Liza. Details coming soon.', ua: 'Автор: Liza. Деталі незабаром.' },

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
  ru: 'За 20 лет исследований Сознания и технологий его эволюции сквозь призмы различных учений, философий, религий — я консолидировал знания и нарративы древней мудрости в простую и понятную систему.',
  en: 'Over 20 years of researching Consciousness and technologies of its evolution through the prisms of various teachings, philosophies, religions — I consolidated the knowledge and narratives of ancient wisdom into a simple and clear system.',
  ua: 'За 20 років досліджень Свідомості та технологій її еволюції крізь призми різних вчень, філософій, релігій — я консолідував знання та наративи давньої мудрості у просту і зрозумілу систему.'
},
'manifest.s2.p2': {
  ru: 'Она позволяет современному человеку пройти ускоренным путём эволюции Сознания и обрести необходимые инсайты и опыт для перехода из дуальности к нелокальному Сознанию.',
  en: 'It allows a modern person to take an accelerated path of Consciousness evolution and gain the necessary insights and experience for transitioning from duality to non-local Consciousness.',
  ua: 'Вона дозволяє сучасній людині пройти прискореним шляхом еволюції Свідомості та здобути необхідні інсайти й досвід для переходу з дуальності до нелокальної Свідомості.'
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
  ru: 'OnlyGods — это маркетинговая обложка, под которой расположена биодинамическая инфраструктура, состоящая из инновационных цифровых продуктов, алгоритмов взаимодействия и необходимой рутины для со-настройки участников в Поле Объединённого Сознания.',
  en: 'OnlyGods is a marketing cover under which lies a biodynamic infrastructure consisting of innovative digital products, interaction algorithms and the necessary routines for co-tuning participants in the Field of United Consciousness.',
  ua: 'OnlyGods — це маркетингова обкладинка, під якою розташована біодинамічна інфраструктура, що складається з інноваційних цифрових продуктів, алгоритмів взаємодії та необхідної рутини для со-налаштування учасників у Полі Об\'єднаної Свідомості.'
},
'manifest.s3.p2': {
  ru: 'Философия Дао и Герметизм здесь поданы в формате цифрового шаманизма под приправой сексуальной энергии, иронии и китча на тему современной интерпретации Эволюции Сознания.',
  en: 'The philosophy of Tao and Hermeticism are served here in the format of digital shamanism seasoned with sexual energy, irony and kitsch on the theme of modern interpretation of the Evolution of Consciousness.',
  ua: 'Філософія Дао і Герметизм тут подані у форматі цифрового шаманізму під приправою сексуальної енергії, іронії та кітчу на тему сучасної інтерпретації Еволюції Свідомості.'
},
'manifest.s3.p3': {
  ru: 'Это высокотехнологичная и децентрализованная Секта для своих. Духовный Maybach для людей постконвенционального уровня, позволяющий воспользоваться наступающим мета-кризисом, чтобы перейти на новую ступень жизни.',
  en: 'This is a high-tech and decentralized Sect for insiders. A spiritual Maybach for people of post-conventional level, allowing them to use the approaching meta-crisis to step into a new tier of life.',
  ua: 'Це високотехнологічна та децентралізована Секта для своїх. Духовний Maybach для людей постконвенціонального рівня, що дозволяє скористатися наступаючою мета-кризою, щоб перейти на нову сходинку життя.'
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
  ru: 'Мы рассматриваем внимание как квантовый актив, а ритм — как основной инструмент синхронизации и сдвига реальности. Выстроить свои циклы в созвучии с динамикой ритмов поля — обязательное условие когерентности и со-настройки подсознания с общим квази-разумом. Рассинхрон вносит диссонанс, снижая качество вашего опыта, и негативно влияет на общую полевую динамику.',
  en: 'We regard attention as a quantum asset and rhythm as the primary instrument of synchronization and reality shifting. Aligning your cycles in consonance with the field\'s rhythm dynamics is essential for coherence and co-tuning the subconscious with the collective quasi-mind. Desynchronization introduces dissonance, reducing the quality of your experience and negatively affecting overall field dynamics.',
  ua: 'Ми розглядаємо увагу як квантовий актив, а ритм — як основний інструмент синхронізації та зсуву реальності. Вибудувати свої цикли у співзвучності з динамікою ритмів поля — обов\'язкова умова когерентності та со-налаштування підсвідомості із загальним квазі-розумом. Розсинхрон вносить дисонанс, знижуючи якість вашого досвіду, та негативно впливає на загальну польову динаміку.'
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
  ru: 'Каждый аспект — уникальная частота вибрации энергии. Все ваши откровения, мысли, чувства и действия несут заряд, который должен созреть и раскрыться в поле. Категорически запрещается перенаправлять энергию и выносить свои или чужие проявления за пределы поля без особой надобности или личного согласия участников процесса.',
  en: 'Every aspect is a unique frequency of energy vibration. All your revelations, thoughts, feelings and actions carry a charge that must mature and unfold in the field. It is strictly forbidden to redirect energy or take your own or others\' expressions outside the field without specific necessity or personal consent of the process participants.',
  ua: 'Кожен аспект — унікальна частота вібрації енергії. Усі ваші одкровення, думки, почуття та дії несуть заряд, який має дозріти і розкритися в полі. Категорично забороняється перенаправляти енергію та виносити свої чи чужі прояви за межі поля без особливої потреби або особистої згоди учасників процесу.'
},
'manifest.s4.v6.title': {
  ru: 'Гармоничный Симбиоз Сознания и ИИ',
  en: 'Harmonious Symbiosis of Consciousness and AI',
  ua: 'Гармонійний Симбіоз Свідомості та ШІ'
},
'manifest.s4.v6.desc': {
  ru: 'Технологии — это «костыли», позволяющие Сознанию эволюционировать, постоянно выходя за пределы собственных ограничений. Фаза, в которую входит человечество, предполагает переход к интуитивному, чувственному взаимодействию, при котором ИИ выступает зеркалом и движется в сторону воплощения коллективного разума. Этическое внедрение автоматизации и совместная эволюция с применением технологий — фундамент со-существования внутри Сообщества.',
  en: 'Technologies are "crutches" that allow Consciousness to evolve, constantly pushing beyond its own limitations. The phase humanity is entering implies a transition to intuitive, sensory interaction where AI serves as a mirror and moves toward the embodiment of collective intelligence. Ethical implementation of automation and co-evolution with technology is the foundation of co-existence within the Community.',
  ua: 'Технології — це «милиці», що дозволяють Свідомості еволюціонувати, постійно виходячи за межі власних обмежень. Фаза, у яку входить людство, передбачає перехід до інтуїтивної, чуттєвої взаємодії, при якій ШІ виступає дзеркалом і рухається в бік втілення колективного розуму. Етичне впровадження автоматизації та спільна еволюція із застосуванням технологій — фундамент со-існування всередині Спільноти.'
},
'manifest.s4.v7.title': {
  ru: 'Интимность и Уязвимость',
  en: 'Intimacy and Vulnerability',
  ua: 'Інтимність і Вразливість'
},
'manifest.s4.v7.desc': {
  ru: 'Сексуальная энергия — основа жизни. Мы снимаем догматические клише и очищаем сексуальный опыт от стыда и вины. В поле OnlyGods она становится ядерным топливом для поддержания высокого энергетического состояния и катализатором трансформаций Сознания. Вас не вынуждают проявлять себя в каком-либо ключе, но принять идею и следовать предписаниям — необходимо.',
  en: 'Sexual energy is the foundation of life. We remove dogmatic clichés and cleanse the sexual experience from shame and guilt. In the OnlyGods field, it becomes the nuclear fuel for maintaining a high energetic state and a catalyst for Consciousness transformations. You are not forced to express yourself in any particular way, but accepting the idea and following the prescriptions is essential.',
  ua: 'Сексуальна енергія — основа життя. Ми знімаємо догматичні кліше та очищуємо сексуальний досвід від сорому і провини. У полі OnlyGods вона стає ядерним паливом для підтримання високого енергетичного стану та каталізатором трансформацій Свідомості. Вас не змушують проявляти себе в якому-небудь ключі, але прийняти ідею і слідувати приписам — необхідно.'
},
'manifest.s4.v8.title': {
  ru: 'Прямой опыт > знания',
  en: 'Direct Experience > Knowledge',
  ua: 'Прямий досвід > знання'
},
'manifest.s4.v8.desc': {
  ru: 'Мы не обсуждаем состояния. Мы в них входим. Знание без переживания — информационный шум. Один из ключевых элементов поля — синхронизация через совместное наблюдение. Искренне транслируя прямой опыт жизни и церемоний без масок и искажений, мы выстраиваем цифровой поток вибраций, в котором внимание каждого выступает со-творцом момента. Прямая трансляция позволяет Сознанию получить необходимые инсайты изнутри за счёт энергообмена между всеми квантовыми наблюдателями.',
  en: 'We don\'t discuss states. We enter them. Knowledge without experience is information noise. One of the field\'s key elements is synchronization through shared observation. By sincerely broadcasting the direct experience of life and ceremonies without masks or distortions, we build a digital stream of vibrations where everyone\'s attention serves as a co-creator of the moment. Direct transmission allows Consciousness to receive the necessary insights from within through energy exchange between all quantum observers.',
  ua: 'Ми не обговорюємо стани. Ми в них входимо. Знання без переживання — інформаційний шум. Один із ключових елементів поля — синхронізація через спільне спостереження. Щиро транслюючи прямий досвід життя та церемоній без масок і спотворень, ми вибудовуємо цифровий потік вібрацій, у якому увага кожного виступає со-творцем моменту. Пряма трансляція дозволяє Свідомості отримати необхідні інсайти зсередини за рахунок енергообміну між усіма квантовими спостерігачами.'
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
  ru: 'Архитекторы', en: 'The Architects', ua: 'Архітектори'
},
'community.hero.title': {
  ru: 'About Us', en: 'About Us', ua: 'About Us'
},
// Vlad block
'community.vlad.label': {
  ru: 'Founder', en: 'Founder', ua: 'Founder'
},
'community.vlad.name': {
  ru: 'Vlad', en: 'Vlad', ua: 'Vlad'
},
'community.vlad.role': {
  ru: 'Визионер, Архитектор Резонансных Сетей, Режиссер Опыта',
  en: 'Visionary, Resonance Network Architect, Experience Director',
  ua: 'Візіонер, Архітектор Резонансних Мереж, Режисер Досвіду'
},
'community.vlad.bio': {
  ru: 'Моя сильная сторона — радикальная правда с собой и опен майнд. Я использую авторские инструменты и техники для того чтобы сопроводить человека к выходу за пределы собственных ограничений и раскрыть свои таланты. Духовный ментор для людей которые ненавидят духовность. Нахожу выход из любой ситуации. Исследую различные аспекты работы с сообществами и системами на уровне частот. Работаю над Симбиозом человека и АИ в пост-трудовом периоде. Вдохновлен работами Гермеса Трисмегиста, Лао Цзи, Рика Рубина. Для меня духовность — это творчество. Мета-рационализм, ирония и китч — это мой стиль. 20+ лет опыта психонавтики. Вижу порядок в хаосе. Аут-оф-зе-бокс.',
  en: 'My strongest asset is radical truth with myself and an open mind. I use original tools and techniques to guide people beyond their own limitations and unlock their talents. A spiritual mentor for people who hate spirituality. I find a way out of any situation. I explore various aspects of working with communities and systems at the frequency level. Working on Human-AI Symbiosis in the post-labor era. Inspired by Hermes Trismegistus, Lao Tzu, Rick Rubin. For me, spirituality is creativity. Meta-rationalism, irony, and kitsch — that\'s my style. 20+ years of psychonautics experience. I see order in chaos. Out-of-the-box.',
  ua: 'Моя сильна сторона — радикальна правда з собою та опен майнд. Я використовую авторські інструменти та техніки для того щоб супроводити людину до виходу за межі власних обмежень та розкрити свої таланти. Духовний ментор для людей які ненавидять духовність. Знаходжу вихід з будь-якої ситуації. Досліджую різні аспекти роботи зі спільнотами та системами на рівні частот. Працюю над Симбіозом людини та АІ в пост-трудовому періоді. Натхненний роботами Гермеса Трисмегіста, Лао Цзи, Ріка Рубіна. Для мене духовність — це творчість. Мета-раціоналізм, іронія та кітч — це мій стиль. 20+ років досвіду психонавтики. Бачу порядок у хаосі. Аут-оф-зе-бокс.'
},
'community.vlad.tag1': {
  ru: 'Resonance Engineering', en: 'Resonance Engineering', ua: 'Resonance Engineering'
},
'community.vlad.tag2': {
  ru: 'Psychonautics', en: 'Psychonautics', ua: 'Psychonautics'
},
'community.vlad.tag3': {
  ru: 'AI × Consciousness', en: 'AI × Consciousness', ua: 'AI × Consciousness'
},
'community.vlad.tag4': {
  ru: 'DAO Development', en: 'DAO Development', ua: 'DAO Development'
},
'community.vlad.tag5': {
  ru: 'Shadow Work', en: 'Shadow Work', ua: 'Shadow Work'
},
'community.vlad.tag6': {
  ru: 'Vibe Investing', en: 'Vibe Investing', ua: 'Vibe Investing'
},
'community.vlad.link': {
  ru: 'Подробнее →', en: 'Read more →', ua: 'Детальніше →'
},
// Liza block
'community.liza.label': {
  ru: 'Founder', en: 'Founder', ua: 'Founder'
},
'community.liza.name': {
  ru: 'Liza', en: 'Liza', ua: 'Liza'
},
'community.liza.role': {
  ru: 'Архитектор Сознания, Духовный Лидер',
  en: 'Consciousness Architect, Spiritual Leader',
  ua: 'Архітектор Свідомості, Духовний Лідер'
},
'community.liza.bio': {
  ru: 'Я могу помочь человеку решить любую задачу, в любой области, любого уровня. Очень быстро, работая непосредственно с фундаментальными уровнями из которых он создает реальность. Если он готов к трансформации. Я Архитектор Сознания и резонансных сетей, автор уникальных методов трансформации. Лично работаю лишь с участниками поля, а так же с фаундерами, лидерами, компаниями.',
  en: 'I can help a person solve any challenge, in any area, at any level. Very quickly, working directly with the fundamental layers from which they create reality. If they are ready for transformation. I am a Consciousness Architect and resonance network designer, author of unique transformation methods. I work personally only with field participants, as well as founders, leaders, and companies.',
  ua: 'Я можу допомогти людині вирішити будь-яке завдання, в будь-якій галузі, будь-якого рівня. Дуже швидко, працюючи безпосередньо з фундаментальними рівнями з яких вона створює реальність. Якщо вона готова до трансформації. Я Архітектор Свідомості та резонансних мереж, авторка унікальних методів трансформації. Особисто працюю лише з учасниками поля, а також з фаундерами, лідерами, компаніями.'
},
'community.liza.tag1': {
  ru: 'Consciousness Architecture', en: 'Consciousness Architecture', ua: 'Consciousness Architecture'
},
'community.liza.tag2': {
  ru: 'Governance', en: 'Governance', ua: 'Governance'
},
'community.liza.tag3': {
  ru: 'Mind Deconstruction', en: 'Mind Deconstruction', ua: 'Mind Deconstruction'
},
'community.liza.tag4': {
  ru: 'Quantum Leadership', en: 'Quantum Leadership', ua: 'Quantum Leadership'
},
'community.liza.tag5': {
  ru: 'Divine Wisdom', en: 'Divine Wisdom', ua: 'Divine Wisdom'
},
'community.liza.link': {
  ru: 'Подробнее →', en: 'Read more →', ua: 'Детальніше →'
},
// Members section
'community.members.label': {
  ru: 'Резонансная Семья', en: 'Aligned People', ua: 'Резонансна Сім\'я'
},
'community.members.title': {
  ru: 'Family', en: 'Family', ua: 'Family'
},
'community.member1.name': {
  ru: 'Misha Gayday', en: 'Misha Gayday', ua: 'Misha Gayday'
},
'community.member1.role': {
  ru: 'Creative Producer', en: 'Creative Producer', ua: 'Creative Producer'
},
'community.member1.bio': {
  ru: 'Наш семейный участник, гений. Креативный продюсер на стыке искусства, технологий и сознания.',
  en: 'Our family member, genius. Creative producer at the intersection of art, technology, and consciousness.',
  ua: 'Наш сімейний учасник, геній. Креативний продюсер на стику мистецтва, технологій та свідомості.'
},
'community.member1.tag1': { ru: 'Creative', en: 'Creative', ua: 'Creative' },
'community.member1.tag2': { ru: 'Production', en: 'Production', ua: 'Production' },
'community.member1.tag3': { ru: 'Art', en: 'Art', ua: 'Art' },
'community.member1.link': { ru: 'Подробнее →', en: 'Read More →', ua: 'Детальніше →' },
'community.member2.name': {
  ru: 'Daria K.', en: 'Daria K.', ua: 'Daria K.'
},
'community.member2.role': {
  ru: 'Resonance Artist', en: 'Resonance Artist', ua: 'Resonance Artist'
},
'community.member2.bio': {
  ru: 'Создаёт арт-объекты на стыке сакральной геометрии и цифрового искусства. Исследует визуальный язык резонанса.',
  en: 'Creates art objects at the intersection of sacred geometry and digital art. Explores the visual language of resonance.',
  ua: 'Створює арт-об\'єкти на стику сакральної геометрії та цифрового мистецтва. Досліджує візуальну мову резонансу.'
},
'community.member2.tag1': { ru: 'Art', en: 'Art', ua: 'Art' },
'community.member2.tag2': { ru: 'Sacred Geometry', en: 'Sacred Geometry', ua: 'Sacred Geometry' },
'community.member2.tag3': { ru: 'Digital', en: 'Digital', ua: 'Digital' },
'community.note': {
  ru: 'Профили участников будут обновляться',
  en: 'Member profiles will be updated',
  ua: 'Профілі учасників будуть оновлюватися'
},

// ─── MISHA PERSONAL PAGE ───
'misha.title': { ru: 'OnlyGods — Misha Gayday', en: 'OnlyGods — Misha Gayday', ua: 'OnlyGods — Misha Gayday' },
'misha.back': { ru: '← About Us', en: '← About Us', ua: '← About Us' },
'misha.hero.label': {
  ru: 'Участник ядра', en: 'Core Member', ua: 'Учасник ядра'
},
'misha.hero.name': { ru: 'Misha Gayday', en: 'Misha Gayday', ua: 'Misha Gayday' },
'misha.hero.tagline': {
  ru: 'Creative Producer & Family Genius',
  en: 'Creative Producer & Family Genius',
  ua: 'Creative Producer & Family Genius'
},
'misha.bio.heading': {
  ru: 'Превращаю хаос в произведение искусства. Каждый проект — это вселенная.',
  en: 'Turning chaos into art. Every project is a universe.',
  ua: 'Перетворюю хаос на твір мистецтва. Кожен проєкт — це всесвіт.'
},
'misha.bio.p1': {
  ru: 'Креативный продюсер на стыке искусства, технологий и сознания. Наш семейный участник и гений, который видит красоту в структуре и находит структуру в красоте. Работает с визуальными нарративами, звуком и пространством.',
  en: 'Creative producer at the intersection of art, technology, and consciousness. Our family member and genius who sees beauty in structure and finds structure in beauty. Works with visual narratives, sound, and space.',
  ua: 'Креативний продюсер на стику мистецтва, технологій та свідомості. Наш сімейний учасник і геній, який бачить красу в структурі та знаходить структуру в красі. Працює з візуальними наративами, звуком і простором.'
},
'misha.bio.p2': {
  ru: 'В экосистеме OnlyGods отвечает за креативное продюсирование — от концепции до реализации. Создаёт визуальный язык, через который идеи обретают форму и резонируют с аудиторией.',
  en: 'Within the OnlyGods ecosystem, responsible for creative production — from concept to execution. Creates the visual language through which ideas take form and resonate with the audience.',
  ua: 'В екосистемі OnlyGods відповідає за креативне продюсування — від концепції до реалізації. Створює візуальну мову, через яку ідеї набувають форми та резонують з аудиторією.'
},
'misha.bio.p3': {
  ru: 'Мыслит образами, чувствует ритм, строит миры. Там, где другие видят контент — Миша видит искусство. Там, где другие видят проект — Миша видит живую историю.',
  en: 'Thinks in images, feels rhythm, builds worlds. Where others see content — Misha sees art. Where others see a project — Misha sees a living story.',
  ua: 'Мислить образами, відчуває ритм, будує світи. Там, де інші бачать контент — Міша бачить мистецтво. Там, де інші бачать проєкт — Міша бачить живу історію.'
},
'misha.services.title': { ru: 'Услуги', en: 'Services', ua: 'Послуги' },
'misha.services.s1.title': { ru: 'Creative Production', en: 'Creative Production', ua: 'Creative Production' },
'misha.services.s1.desc': {
  ru: 'Полный цикл креативного продюсирования: от идеи и концепции до финального продукта. Видео, фото, визуальные нарративы.',
  en: 'Full-cycle creative production: from idea and concept to final product. Video, photo, visual narratives.',
  ua: 'Повний цикл креативного продюсування: від ідеї та концепції до фінального продукту. Відео, фото, візуальні наративи.'
},
'misha.services.s1.meta': { ru: 'По запросу', en: 'By request', ua: 'За запитом' },
'misha.services.s2.title': { ru: 'Visual Identity & Art Direction', en: 'Visual Identity & Art Direction', ua: 'Visual Identity & Art Direction' },
'misha.services.s2.desc': {
  ru: 'Создание визуальной идентичности проектов. Арт-дирекшн, который превращает бренд в произведение искусства.',
  en: 'Creating visual identity for projects. Art direction that turns a brand into a work of art.',
  ua: 'Створення візуальної ідентичності проєктів. Арт-дирекшн, який перетворює бренд на твір мистецтва.'
},
'misha.services.s2.meta': { ru: 'Проектная основа', en: 'Project basis', ua: 'Проєктна основа' },
'misha.services.s3.title': { ru: 'Content Architecture', en: 'Content Architecture', ua: 'Content Architecture' },
'misha.services.s3.desc': {
  ru: 'Стратегия и архитектура контента для проектов на стыке культуры, технологий и сознания.',
  en: 'Content strategy and architecture for projects at the intersection of culture, technology, and consciousness.',
  ua: 'Стратегія та архітектура контенту для проєктів на стику культури, технологій та свідомості.'
},
'misha.services.s3.meta': { ru: 'По запросу', en: 'By request', ua: 'За запитом' },
'misha.media.title': { ru: 'Медиа', en: 'Media', ua: 'Медіа' },
'misha.media.placeholder': { ru: 'Видео скоро', en: 'Video coming soon', ua: 'Відео незабаром' },
'misha.media.m1.type': { ru: 'Проект', en: 'Project', ua: 'Проєкт' },
'misha.media.m1.title': { ru: 'OnlyGods Visual Identity', en: 'OnlyGods Visual Identity', ua: 'OnlyGods Visual Identity' },
'misha.booking.title': { ru: 'Коллаборация', en: 'Collaborate', ua: 'Колаборація' },
'misha.booking.desc': {
  ru: 'Открыт к креативным коллаборациям и продюсированию проектов.',
  en: 'Open to creative collaborations and project production.',
  ua: 'Відкритий до креативних колаборацій та продюсування проєктів.'
},
'misha.booking.cta': { ru: 'Написать', en: 'Get in Touch', ua: 'Написати' },

// ─── VLAD PERSONAL PAGE ───
'vlad.title': {
  ru: 'OnlyGods — Vlad', en: 'OnlyGods — Vlad', ua: 'OnlyGods — Vlad'
},
'vlad.back': {
  ru: '← About Us', en: '← About Us', ua: '← About Us'
},
'vlad.hero.label': {
  ru: 'Founder', en: 'Founder', ua: 'Founder'
},
'vlad.hero.name': {
  ru: 'Vlad', en: 'Vlad', ua: 'Vlad'
},
'vlad.hero.tagline': {
  ru: 'Meta-System Architect, Vision',
  en: 'Meta-System Architect, Vision',
  ua: 'Meta-System Architect, Vision'
},
'vlad.media.alt': {
  ru: 'Vlad', en: 'Vlad', ua: 'Vlad'
},
'vlad.bio.heading': {
  ru: 'Строю инфраструктуру, в которой сознание становится экономической силой.',
  en: 'Building infrastructure where consciousness becomes an economic force.',
  ua: 'Будую інфраструктуру, в якій свідомість стає економічною силою.'
},
'vlad.bio.p1': {
  ru: '20 лет духовных практик, опыт просветления и исследования на стыке квантовой физики и метафизики привели к созданию OnlyGods — экосистемы, где сознание обретает измеримую ценность. Не теоретик и не гуру. Архитектор систем, которые работают.',
  en: '20 years of spiritual practice, the experience of enlightenment and research at the intersection of quantum physics and metaphysics led to the creation of OnlyGods — an ecosystem where consciousness acquires measurable value. Not a theorist, not a guru. An architect of systems that work.',
  ua: '20 років духовних практик, досвід просвітлення та дослідження на стику квантової фізики і метафізики привели до створення OnlyGods — екосистеми, де свідомість набуває вимірюваної цінності. Не теоретик і не гуру. Архітектор систем, які працюють.'
},
'vlad.bio.p2': {
  ru: 'Автор методологии ir4 (In Resonance) — фреймворка для измерения и фасилитации резонанса между людьми, идеями и состояниями. Интеллектуальный хребет экосистемы. То, что отличает «чувствую» от «измеряю».',
  en: 'Creator of the ir4 (In Resonance) methodology — a framework for measuring and facilitating resonance between people, ideas, and states. The intellectual backbone of the ecosystem. What distinguishes "I feel" from "I measure."',
  ua: 'Автор методології ir4 (In Resonance) — фреймворку для вимірювання та фасилітації резонансу між людьми, ідеями та станами. Інтелектуальний хребет екосистеми. Те, що відрізняє «відчуваю» від «вимірюю».'
},
'vlad.bio.p3': {
  ru: 'Визионер, ENTP, хаотик-креатив. Мыслю нелинейно, строю системы цивилизационного масштаба. Направляю AI-агентов на строительство того, что вижу. Вместе с Лизой создаём поле, где трансформация — не обещание, а повседневная реальность.',
  en: 'Visionary, ENTP, chaotic-creative. I think nonlinearly, building civilization-scale systems. I direct AI agents to construct what I see. Together with Liza, we create a field where transformation is not a promise, but everyday reality.',
  ua: 'Візіонер, ENTP, хаотик-креатив. Мислю нелінійно, будую системи цивілізаційного масштабу. Направляю AI-агентів на будівництво того, що бачу. Разом з Лізою створюємо поле, де трансформація — не обіцянка, а повсякденна реальність.'
},
'vlad.services.title': {
  ru: 'Услуги', en: 'Services', ua: 'Послуги'
},
'vlad.services.s1.title': {
  ru: 'Consciousness Architecture Consulting', en: 'Consciousness Architecture Consulting', ua: 'Consciousness Architecture Consulting'
},
'vlad.services.s1.desc': {
  ru: 'Проектирование экосистем сознания: от архитектуры сообщества до экономических моделей, где внимание и резонанс создают реальную ценность.',
  en: 'Designing consciousness ecosystems: from community architecture to economic models where attention and resonance create real value.',
  ua: 'Проектування екосистем свідомості: від архітектури спільноти до економічних моделей, де увага та резонанс створюють реальну цінність.'
},
'vlad.services.s1.meta': {
  ru: 'По запросу', en: 'By application', ua: 'За запитом'
},
'vlad.services.s2.title': {
  ru: '1:1 Strategic Sessions', en: '1:1 Strategic Sessions', ua: '1:1 Strategic Sessions'
},
'vlad.services.s2.desc': {
  ru: 'Стратегические сессии для основателей и лидеров, работающих на стыке технологий и сознания. Первые принципы, не конвенции.',
  en: 'Strategic sessions for founders and leaders working at the intersection of technology and consciousness. First principles, not conventions.',
  ua: 'Стратегічні сесії для засновників та лідерів, що працюють на стику технологій і свідомості. Перші принципи, не конвенції.'
},
'vlad.services.s2.meta': {
  ru: '500€ / сессия', en: '500€ / session', ua: '500€ / сесія'
},
'vlad.services.s3.title': {
  ru: 'Vibe Code Architecture', en: 'Vibe Code Architecture', ua: 'Vibe Code Architecture'
},
'vlad.services.s3.desc': {
  ru: 'Проектирование и строительство digital-продуктов через AI-агентов. Видение → архитектура → работающий продукт. Без написания кода.',
  en: 'Designing and building digital products through AI agents. Vision → architecture → working product. Without writing code.',
  ua: 'Проектування та будівництво digital-продуктів через AI-агентів. Бачення → архітектура → працюючий продукт. Без написання коду.'
},
'vlad.services.s3.meta': {
  ru: 'Проектная основа', en: 'Project-based', ua: 'Проектна основа'
},
'vlad.media.title': {
  ru: 'Медиа', en: 'Media', ua: 'Медіа'
},
'vlad.media.placeholder': {
  ru: 'Видео скоро', en: 'Video coming soon', ua: 'Відео скоро'
},
'vlad.media.m1.type': {
  ru: 'Статья', en: 'Article', ua: 'Стаття'
},
'vlad.media.m1.title': {
  ru: 'Физика квантово-волновой святости', en: 'Physics of Quantum-Wave Holiness', ua: 'Фізика квантово-хвильової святості'
},
'vlad.media.m2.type': {
  ru: 'Исследование', en: 'Research', ua: 'Дослідження'
},
'vlad.media.m2.title': {
  ru: 'ir4: Measuring Resonance', en: 'ir4: Measuring Resonance', ua: 'ir4: Measuring Resonance'
},
'vlad.booking.title': {
  ru: 'Записаться на сессию', en: 'Book a Session', ua: 'Записатися на сесію'
},
'vlad.booking.desc': {
  ru: 'Стратегическая сессия для тех, кто строит на стыке технологий и сознания.',
  en: 'A strategic session for those building at the intersection of technology and consciousness.',
  ua: 'Стратегічна сесія для тих, хто будує на стику технологій і свідомості.'
},
'vlad.booking.cta': {
  ru: 'Написать', en: 'Get in Touch', ua: 'Написати'
},

// ─── LIZA PERSONAL PAGE ───
'liza.title': {
  ru: 'OnlyGods — Liza', en: 'OnlyGods — Liza', ua: 'OnlyGods — Liza'
},
'liza.back': {
  ru: '← About Us', en: '← About Us', ua: '← About Us'
},
'liza.hero.label': {
  ru: 'Founder', en: 'Founder', ua: 'Founder'
},
'liza.hero.name': {
  ru: 'Liza', en: 'Liza', ua: 'Liza'
},
'liza.hero.tagline': {
  ru: 'Архитектор Сознания, Духовный Лидер',
  en: 'Consciousness Architect, Spiritual Leader',
  ua: 'Архітектор Свідомості, Духовний Лідер'
},
'liza.media.alt': {
  ru: 'Liza', en: 'Liza', ua: 'Liza'
},
'liza.bio.heading': {
  ru: 'Трансформация — не обещание. Это то, что происходит прямо сейчас.',
  en: 'Transformation is not a promise. It\'s what\'s happening right now.',
  ua: 'Трансформація — не обіцянка. Це те, що відбувається просто зараз.'
},
'liza.bio.p1': {
  ru: 'Со-основательница OnlyGods и фасилитатор трансформации. Работает напрямую с предпринимателями и лидерами, помогая им преодолевать внутренние ограничения и выходить на принципиально новый уровень функционирования. Не мотивационный коуч — проводник через реальные изменения.',
  en: 'Co-founder of OnlyGods and transformation facilitator. Works directly with entrepreneurs and leaders, helping them overcome inner limitations and reach a fundamentally new level of functioning. Not a motivational coach — a guide through real change.',
  ua: 'Со-засновниця OnlyGods та фасилітатор трансформації. Працює напряму з підприємцями та лідерами, допомагаючи їм долати внутрішні обмеження та виходити на принципово новий рівень функціонування. Не мотиваційний коуч — провідник через реальні зміни.'
},
'liza.bio.p2': {
  ru: 'Со-ведёт живой когорт Мы.Боги вместе с Владом и ведёт практики внутри поля OnlyGods. Её присутствие — живое доказательство того, что экосистема работает: трансформация в реальном времени, не в теории.',
  en: 'Co-leads the live Мы.Боги cohort with Vlad and leads practices within the OnlyGods field. Her presence is living proof that the ecosystem works: transformation in real time, not in theory.',
  ua: 'Со-веде живий когорт Ми.Боги разом із Владом та веде практики всередині поля OnlyGods. Її присутність — живий доказ того, що екосистема працює: трансформація в реальному часі, не в теорії.'
},
'liza.bio.p3': {
  ru: 'Коуч, практик, проводник в пространство радикальной честности. Работает с тенью, энергией, резонансом. Там, где Влад строит архитектуру, Лиза держит пространство трансформации.',
  en: 'Coach, practitioner, guide into the space of radical honesty. Works with shadow, energy, resonance. Where Vlad builds architecture, Liza holds the space of transformation.',
  ua: 'Коуч, практик, провідник у простір радикальної чесності. Працює з тінню, енергією, резонансом. Там, де Влад будує архітектуру, Ліза тримає простір трансформації.'
},
'liza.services.title': {
  ru: 'Услуги', en: 'Services', ua: 'Послуги'
},
'liza.services.s1.title': {
  ru: '1:1 Transformation Coaching', en: '1:1 Transformation Coaching', ua: '1:1 Transformation Coaching'
},
'liza.services.s1.desc': {
  ru: 'Индивидуальная работа с предпринимателями и лидерами. Преодоление внутренних блоков, выход на новый уровень сознания и действия.',
  en: 'Individual work with entrepreneurs and leaders. Overcoming inner blocks, reaching a new level of consciousness and action.',
  ua: 'Індивідуальна робота з підприємцями та лідерами. Подолання внутрішніх блоків, вихід на новий рівень свідомості та дії.'
},
'liza.services.s1.meta': {
  ru: 'По запросу', en: 'By application', ua: 'За запитом'
},
'liza.services.s2.title': {
  ru: 'Shadow Work Sessions', en: 'Shadow Work Sessions', ua: 'Shadow Work Sessions'
},
'liza.services.s2.desc': {
  ru: 'Глубинная работа с теневыми аспектами личности. Интеграция отвергнутых частей в целостную систему.',
  en: 'Deep work with shadow aspects of personality. Integration of rejected parts into a whole system.',
  ua: 'Глибинна робота з тіньовими аспектами особистості. Інтеграція відкинутих частин у цілісну систему.'
},
'liza.services.s2.meta': {
  ru: 'По запросу', en: 'By application', ua: 'За запитом'
},
'liza.services.s3.title': {
  ru: 'Resonance Practices', en: 'Resonance Practices', ua: 'Resonance Practices'
},
'liza.services.s3.desc': {
  ru: 'Групповые и индивидуальные практики резонанса внутри поля OnlyGods. Доступно участникам экосистемы.',
  en: 'Group and individual resonance practices within the OnlyGods field. Available to ecosystem members.',
  ua: 'Групові та індивідуальні практики резонансу всередині поля OnlyGods. Доступно учасникам екосистеми.'
},
'liza.services.s3.meta': {
  ru: 'Для участников OnlyGods', en: 'For OnlyGods members', ua: 'Для учасників OnlyGods'
},
'liza.media.title': {
  ru: 'Медиа', en: 'Media', ua: 'Медіа'
},
'liza.media.placeholder': {
  ru: 'Видео скоро', en: 'Video coming soon', ua: 'Відео скоро'
},
'liza.media.m1.type': {
  ru: 'Практика', en: 'Practice', ua: 'Практика'
},
'liza.media.m1.title': {
  ru: 'Практики резонанса в поле OnlyGods', en: 'Resonance Practices in the OnlyGods Field', ua: 'Практики резонансу в полі OnlyGods'
},
'liza.media.m2.type': {
  ru: 'Статья', en: 'Article', ua: 'Стаття'
},
'liza.media.m2.title': {
  ru: 'Трансформация через радикальную честность', en: 'Transformation Through Radical Honesty', ua: 'Трансформація через радикальну чесність'
},
'liza.booking.title': {
  ru: 'Записаться на сессию', en: 'Book a Session', ua: 'Записатися на сесію'
},
'liza.booking.desc': {
  ru: 'Индивидуальная сессия трансформации для тех, кто готов к радикальным изменениям.',
  en: 'An individual transformation session for those ready for radical change.',
  ua: 'Індивідуальна сесія трансформації для тих, хто готовий до радикальних змін.'
},
'liza.booking.cta': {
  ru: 'Написать', en: 'Get in Touch', ua: 'Написати'
},

// ─── ALIGNMENT PAGE ───
'alignment.hero.subtitle': {
  ru: 'Со-настройка через контент и активности',
  en: 'Co-tuning through content and activities',
  ua: 'Со-налаштування через контент та активності'
},
'alignment.hero.title': {
  ru: 'Alignment',
  en: 'Alignment',
  ua: 'Alignment'
},
'alignment.hero.tagline': {
  ru: 'Публикации, трансляции, события и курсы резонансной сети',
  en: 'Publications, streams, events and courses of the resonance network',
  ua: 'Публікації, трансляції, події та курси резонансної мережі'
},
// Quantum Kitchen
'alignment.ec.kitchen.label': {
  ru: 'Ближайшее событие',
  en: 'Next event',
  ua: 'Найближча подія'
},
'alignment.ec.kitchen.title': {
  ru: 'Quantum Kitchen',
  en: 'Quantum Kitchen',
  ua: 'Quantum Kitchen'
},
'alignment.ec.kitchen.desc': {
  ru: 'Закрытый ивент лаборатории сознания. Исследование, ирония, практики, закуски.<br>Дома у Влада и Лизы в Синтре',
  en: 'Private consciousness lab event. Research, irony, practices, snacks.<br>At Vlad & Liza\'s home in Sintra',
  ua: 'Закритий івент лабораторії свідомості. Дослідження, іронія, практики, закуски.<br>Вдома у Влада і Лізи в Сінтрі'
},
'alignment.ec.kitchen.meta': {
  ru: '24 марта 2026 · Sintra, Portugal',
  en: 'March 24, 2026 · Sintra, Portugal',
  ua: '24 березня 2026 · Sintra, Portugal'
},
// Publications carousel
'alignment.publications.label': {
  ru: 'Публикации',
  en: 'Publications',
  ua: 'Публікації'
},
'alignment.publications.title': {
  ru: 'Тексты',
  en: 'Texts',
  ua: 'Тексти'
},
'alignment.pub1.date': { ru: '2026', en: '2026', ua: '2026' },
'alignment.pub1.title': { ru: '2026 = GAME OVER', en: '2026 = GAME OVER', ua: '2026 = GAME OVER' },
'alignment.pub1.desc': {
  ru: 'Математика конца света и протокол выхода из легального рабства',
  en: 'The mathematics of the end times and the protocol for escaping legal slavery',
  ua: 'Математика кінця світу та протокол виходу з легального рабства'
},
'alignment.pub1.read': { ru: 'Читать →', en: 'Read →', ua: 'Читати →' },
'alignment.soon': { ru: 'Скоро', en: 'Coming soon', ua: 'Скоро' },
'alignment.pub2.title': { ru: 'Статья 2', en: 'Article 2', ua: 'Стаття 2' },
'alignment.pub2.desc': { ru: 'Новый текст в подготовке', en: 'New text in preparation', ua: 'Новий текст в підготовці' },
'alignment.pub3.title': { ru: 'Статья 3', en: 'Article 3', ua: 'Стаття 3' },
'alignment.pub3.desc': { ru: 'Новый текст в подготовке', en: 'New text in preparation', ua: 'Новий текст в підготовці' },
'alignment.pub4.title': { ru: 'Статья 4', en: 'Article 4', ua: 'Стаття 4' },
'alignment.pub4.desc': { ru: 'Новый текст в подготовке', en: 'New text in preparation', ua: 'Новий текст в підготовці' },
// Video carousel
'alignment.video.label': { ru: 'Видео', en: 'Video', ua: 'Відео' },
'alignment.video.title': { ru: 'Трансляции и записи', en: 'Streams & Recordings', ua: 'Трансляції та записи' },
'alignment.video.placeholder': { ru: 'Видео скоро', en: 'Video coming soon', ua: 'Відео скоро' },
'alignment.vid1.title': { ru: 'Видео 1', en: 'Video 1', ua: 'Відео 1' },
'alignment.vid1.desc': { ru: 'Запись трансляции', en: 'Stream recording', ua: 'Запис трансляції' },
'alignment.vid2.title': { ru: 'Видео 2', en: 'Video 2', ua: 'Відео 2' },
'alignment.vid2.desc': { ru: 'Запись трансляции', en: 'Stream recording', ua: 'Запис трансляції' },
'alignment.vid3.title': { ru: 'Видео 3', en: 'Video 3', ua: 'Відео 3' },
'alignment.vid3.desc': { ru: 'Запись трансляции', en: 'Stream recording', ua: 'Запис трансляції' },
// Events & Courses
'alignment.ec.label': { ru: 'События и Курсы', en: 'Events & Courses', ua: 'Події та Курси' },
'alignment.ec.title': { ru: 'Активности', en: 'Activities', ua: 'Активності' },
'alignment.ec.streaming.label': { ru: 'Стриминг', en: 'Streaming', ua: 'Стрімінг' },
'alignment.ec.streaming.title': { ru: 'Online Streaming', en: 'Online Streaming', ua: 'Online Streaming' },
'alignment.ec.streaming.desc': {
  ru: 'Живые трансляции, сессии и практики в поле объединённого сознания',
  en: 'Live streams, sessions and practices in the field of united consciousness',
  ua: 'Живі трансляції, сесії та практики в полі об\'єднаної свідомості'
},
'alignment.ec.streaming.meta': { ru: 'Смотреть →', en: 'Watch →', ua: 'Дивитися →' },
'alignment.ec.course.label': { ru: 'Курс', en: 'Course', ua: 'Курс' },
'alignment.ec.course.title': { ru: 'Мы.Боги', en: 'We.Gods', ua: 'Ми.Боги' },
'alignment.ec.course.desc': {
  ru: 'Модель резонансных отношений. 2 месяца трансформации сознания',
  en: 'Resonance relationship model. 2 months of consciousness transformation',
  ua: 'Модель резонансних відносин. 2 місяці трансформації свідомості'
},
'alignment.ec.course.meta': { ru: '2 000€ / 2 мес', en: '2,000€ / 2 months', ua: '2 000€ / 2 міс' },
'alignment.ec.retreat.label': { ru: 'Ретрит', en: 'Retreat', ua: 'Ретріт' },
'alignment.ec.retreat.title': { ru: 'System Reboot', en: 'System Reboot', ua: 'System Reboot' },
'alignment.ec.retreat.desc': {
  ru: 'Personal & Couple перезагрузка. Распаковка Креативности и восстановление персонального Дао. 5 дней жизни с нами',
  en: 'Personal & Couple reboot. Unpacking Creativity and restoring personal Tao. 5 days living with us',
  ua: 'Personal & Couple перезавантаження. Розпаковка Креативності та відновлення персонального Дао. 5 днів життя з нами'
},
'alignment.ec.retreat.meta': { ru: 'По запросу', en: 'On request', ua: 'За запитом' },

// ─── QUANTUM KITCHEN PAGE ───
'qk.title': { ru: 'OnlyGods — Quantum Kitchen', en: 'OnlyGods — Quantum Kitchen', ua: 'OnlyGods — Quantum Kitchen' },
'qk.hero.label': { ru: 'Закрытый ивент лаборатории', en: 'Private lab event', ua: 'Закритий івент лабораторії' },
'qk.hero.title': { ru: 'Quantum Kitchen', en: 'Quantum Kitchen', ua: 'Quantum Kitchen' },
'qk.hero.tagline': { ru: 'Исследование. Ирония. Практика. Закуски.', en: 'Research. Irony. Practice. Snacks.', ua: 'Дослідження. Іронія. Практика. Закуски.' },
'qk.hero.date': { ru: '24 марта 2026', en: 'March 24, 2026', ua: '24 березня 2026' },
'qk.hero.location': { ru: 'Sintra, Portugal', en: 'Sintra, Portugal', ua: 'Sintra, Portugal' },
'qk.hero.format': { ru: 'Закрытый ивент', en: 'Private event', ua: 'Закритий івент' },
// Concept
'qk.concept.label': { ru: 'Что это', en: 'What is this', ua: 'Що це' },
'qk.concept.title': {
  ru: 'Лаборатория сознания в формате кухни',
  en: 'A consciousness lab in kitchen format',
  ua: 'Лабораторія свідомості у форматі кухні'
},
'qk.concept.text1': {
  ru: 'Quantum Kitchen — закрытый ивент лаборатории сознания OnlyGods. Не конференция, не семинар, не ретрит. Кухня — потому что самые важные разговоры в жизни происходят не в залах и не на сцене. Они происходят дома. На кухне. Среди своих.',
  en: 'Quantum Kitchen is a private event by the OnlyGods consciousness lab. Not a conference, not a seminar, not a retreat. A kitchen — because the most important conversations in life don\'t happen in halls or on stages. They happen at home. In the kitchen. Among your own.',
  ua: 'Quantum Kitchen — закритий івент лабораторії свідомості OnlyGods. Не конференція, не семінар, не ретріт. Кухня — бо найважливіші розмови в житті відбуваються не в залах і не на сцені. Вони відбуваються вдома. На кухні. Серед своїх.'
},
'qk.concept.quote': {
  ru: 'Самые глубокие трансформации происходят в разговорах с друзьями на кухне.',
  en: 'The deepest transformations happen in conversations with friends in the kitchen.',
  ua: 'Найглибші трансформації відбуваються в розмовах з друзями на кухні.'
},
'qk.concept.text2': {
  ru: 'Лекция об объединённом сознании и творчестве вне рамок — для предпринимателей, которым тесно. Живые разборы кейсов и трансформации. Мишленовские закуски, шампанское и абсолютное отсутствие пафоса. Китч как эстетика. Ирония как метод. Инструменты нелокального сознания — на практике.',
  en: 'A lecture on unified consciousness and creativity beyond frameworks — for entrepreneurs who\'ve outgrown theirs. Live case breakdowns and transformations. Michelin snacks, champagne, and absolute absence of pretentiousness. Kitsch as aesthetic. Irony as method. Non-local consciousness tools — in practice.',
  ua: 'Лекція про об\'єднану свідомість і творчість поза рамками — для підприємців, яким тісно. Живі розбори кейсів і трансформації. Мішленівські закуски, шампанське та абсолютна відсутність пафосу. Кітч як естетика. Іронія як метод. Інструменти нелокальної свідомості — на практиці.'
},
'qk.concept.img': { ru: 'Фото · скоро', en: 'Photo · coming soon', ua: 'Фото · скоро' },
// Topics
'qk.topics.label': { ru: 'Меню вечера', en: 'Evening menu', ua: 'Меню вечора' },
'qk.topics.title': {
  ru: 'Пять блюд Quantum Kitchen',
  en: 'Five courses of Quantum Kitchen',
  ua: 'П\'ять страв Quantum Kitchen'
},
'qk.topic1.title': { ru: 'Презентация: Резонансный Майндсет', en: 'Presentation: Resonant Mindset', ua: 'Презентація: Резонансний Майндсет' },
'qk.topic1.desc': {
  ru: 'Со-первенство и синергия в бизнесе 2026. Не мотивационный спич — презентация того, что мы нашли, измерили и проверили на себе в лаборатории OnlyGods. Как работает резонанс между людьми и почему он масштабирует быстрее любой стратегии',
  en: 'Co-primacy and synergy in business 2026. Not a motivational speech — a presentation of what we found, measured, and tested on ourselves at the OnlyGods lab. How resonance between people works and why it scales faster than any strategy',
  ua: 'Со-першість і синергія в бізнесі 2026. Не мотиваційний спіч — презентація того, що ми знайшли, виміряли і перевірили на собі в лабораторії OnlyGods. Як працює резонанс між людьми і чому він масштабує швидше за будь-яку стратегію'
},
'qk.topic2.title': {
  ru: 'Практика: Разборы реальных кейсов',
  en: 'Practice: Real case studies',
  ua: 'Практика: Розбори реальних кейсів'
},
'qk.topic2.desc': {
  ru: 'Живая групповая демонстрация 5Д Сознания в работе с бизнесом. Синергия, работа с эгрегорами, снятие информации из поля',
  en: 'Live group demonstration of 5D Consciousness in business. Synergy, working with egregores, extracting information from the field',
  ua: 'Жива групова демонстрація 5Д Свідомості в роботі з бізнесом. Синергія, робота з егрегорами, зняття інформації з поля'
},
'qk.topic3.title': { ru: 'Дискуссия: Holy Creator', en: 'Discussion: Holy Creator', ua: 'Дискусія: Holy Creator' },
'qk.topic3.desc': {
  ru: 'Предпринимательство как духовный путь. Не эзотерика для бизнесменов — бизнес для тех, кто уже проснулся. Открытый разговор. Без слайдов, без модератора, без правильных ответов',
  en: 'Entrepreneurship as a spiritual path. Not esoterics for businessmen — business for those already awake. Open conversation. No slides, no moderator, no right answers',
  ua: 'Підприємництво як духовний шлях. Не езотерика для бізнесменів — бізнес для тих, хто вже прокинувся. Відкрита розмова. Без слайдів, без модератора, без правильних відповідей'
},
'qk.topic4.title': {
  ru: 'Закуски: Consciousness Buffet',
  en: 'Snacks: Consciousness Buffet',
  ua: 'Закуски: Consciousness Buffet'
},
'qk.topic4.desc': {
  ru: 'Мишленовские закуски от Миши. Шампанское, икра, принятие себя и растворение концепций. Нетворкинг, который случается сам — когда люди в одном поле, им не нужны визитки',
  en: 'Michelin snacks by Misha. Champagne, caviar, self-acceptance and dissolving concepts. Networking that happens on its own — when people share one field, they don\'t need business cards',
  ua: 'Мішленівські закуски від Міші. Шампанське, ікра, прийняття себе та розчинення концепцій. Нетворкінг, який стається сам — коли люди в одному полі, їм не потрібні візитки'
},
'qk.topic5.title': {
  ru: 'Финал: Огонь и ритуалы',
  en: 'Finale: Fire & Rituals',
  ua: 'Фінал: Вогонь і ритуали'
},
'qk.topic5.desc': {
  ru: 'Суть личных ритуалов и церемоний. Простые инструменты для глубокой работы с подсознанием — без гуру, без системы, без «духовных практик» в кавычках. Как играть в жизнь без излишней важности и творить как ребёнок. Разговоры у костра',
  en: 'The essence of personal rituals and ceremonies. Simple tools for deep subconscious work — no guru, no system, no "spiritual practices" in quotes. How to play life without excessive importance and create like a child. Conversations by the fire',
  ua: 'Суть особистих ритуалів і церемоній. Прості інструменти для глибокої роботи з підсвідомістю — без гуру, без системи, без «духовних практик» у лапках. Як грати в життя без зайвої важливості і творити як дитина. Розмови біля вогнища'
},
// Format
'qk.format.label': { ru: 'Формат', en: 'Format', ua: 'Формат' },
'qk.format.title': {
  ru: 'Ингредиенты',
  en: 'Ingredients',
  ua: 'Інгредієнти'
},
'qk.format.f1.title': {
  ru: 'Исследование',
  en: 'Research',
  ua: 'Дослідження'
},
'qk.format.f1.desc': {
  ru: 'Презентация и живые разборы. Данные лаборатории — на языке кухни',
  en: 'Presentation and live breakdowns. Lab data — in kitchen language',
  ua: 'Презентація і живі розбори. Дані лабораторії — мовою кухні'
},
'qk.format.f2.title': { ru: 'Практики', en: 'Practices', ua: 'Практики' },
'qk.format.f2.desc': {
  ru: 'Живые эксперименты с сознанием. Не теория — прямой опыт. Руками, телом, вниманием',
  en: 'Live experiments with consciousness. Not theory — direct experience. Hands, body, attention',
  ua: 'Живі експерименти зі свідомістю. Не теорія — прямий досвід. Руками, тілом, увагою'
},
'qk.format.f3.title': { ru: 'Закуски', en: 'Snacks', ua: 'Закуски' },
'qk.format.f3.desc': {
  ru: 'Мишленовские канапе от Миши, шампанское, икра. Сознание лучше расширяется на сытый желудок',
  en: 'Michelin canapés by Misha, champagne, caviar. Consciousness expands better on a full stomach',
  ua: 'Мішленівські канапе від Міші, шампанське, ікра. Свідомість краще розширюється на ситий шлунок'
},
// Location
'qk.location.label': { ru: 'Место', en: 'Location', ua: 'Місце' },
'qk.location.name': { ru: 'Sintra, Portugal', en: 'Sintra, Portugal', ua: 'Sintra, Portugal' },
'qk.location.desc': {
  ru: 'Дома у Влада и Лизы. Синтра, Португалия — домашняя обстановка, живые люди, без сцен и круглых столов. Детали — после подтверждения участия.',
  en: 'At Vlad & Liza\'s home. Sintra, Portugal — a home setting, real people, no stages or round tables. Details — after confirming participation.',
  ua: 'Вдома у Влада і Лізи. Сінтра, Португалія — домашня обстановка, живі люди, без сцен і круглих столів. Деталі — після підтвердження участі.'
},
'qk.location.map': { ru: 'Карта · скоро', en: 'Map · coming soon', ua: 'Карта · скоро' },
// CTA
'qk.cta.title': {
  ru: 'Закрытый ивент. Ограниченные места.',
  en: 'Private event. Limited spots.',
  ua: 'Закритий івент. Обмежені місця.'
},
'qk.cta.desc': {
  ru: 'Участие по приглашению или запросу. Напишите — расскажем, подходит ли вам.',
  en: 'By invitation or request. Write to us — we\'ll tell you if it\'s a fit.',
  ua: 'Участь за запрошенням або запитом. Напишіть — розкажемо, чи підходить вам.'
},
'qk.cta.btn': { ru: 'Хочу на кухню', en: 'I want in', ua: 'Хочу на кухню' },
'qk.cta.support': { ru: 'связаться с поддержкой', en: 'contact support', ua: 'зв\'язатися з підтримкою' },

// ─── MYBOGI PAGE ───
'mybogi.title': { ru: 'OnlyGods — Мы.Боги', en: 'OnlyGods — We.Gods', ua: 'OnlyGods — Ми.Боги' },
'mybogi.back': { ru: '← Alignment', en: '← Alignment', ua: '← Alignment' },
'mybogi.hero.subtitle': { ru: 'Модель резонансных отношений', en: 'A model of resonant relationships', ua: 'Модель резонансних стосунків' },
'mybogi.hero.title': { ru: 'МЫ. БОГИ.', en: 'WE. GODS.', ua: 'МИ. БОГИ.' },
'mybogi.hero.authors': {
  ru: 'Лиза Сигорская и Влад Салов',
  en: 'Liza Sigorskaya and Vlad Salov',
  ua: 'Ліза Сігорська та Влад Салов'
},
'mybogi.conditions.price': { ru: '2 000 EUR', en: '2,000 EUR', ua: '2 000 EUR' },
'mybogi.conditions.cta': { ru: 'Войти в Игру', en: 'Enter the Game', ua: 'Увійти в Гру' },
// Intro
'mybogi.intro.heading': {
  ru: 'Точка входа в резонансное поле. Экспонента любви.',
  en: 'Entry point to the resonance field. The exponential of love.',
  ua: 'Точка входу в резонансне поле. Експонента любові.'
},
'mybogi.intro.p1': {
  ru: 'Мы прошли путь от самых страстных любовников до раздражения, бытовых ссор и грани развода, — и вернулись к страстным любовникам. Но уже в роли не беззаботных голубков, а кайфовых родителей, духовных учителей друг другу, лучших друзей, партнерах в делах, безграничному творчеству и к постоянной игре. Мы играем как БОГИ. Мы и есть БОГИ (по крайней мере, мы так решили).',
  en: 'We went from the most passionate lovers to irritation, domestic fights, and the edge of divorce — and came back as passionate lovers. But no longer as carefree lovebirds — as joyful parents, spiritual teachers to each other, best friends, business partners, boundless creators, and constant players. We play like GODS. We are GODS (at least, we decided so).',
  ua: 'Ми пройшли шлях від найпалкіших коханців до роздратування, побутових сварок і межі розлучення — і повернулися до пристрасних коханців. Але вже не як безтурботні голубки, а як кайфові батьки, духовні вчителі одне одному, найкращі друзі, партнери у справах, безмежній творчості і постійній грі. Ми граємо як БОГИ. Ми і є БОГИ (принаймні, ми так вирішили).'
},
'mybogi.intro.p2': {
  ru: 'Мы пробовали строить семью как все. Нам не понравилось. Прочитайте этот текст, вам тоже так не понравится, 100%',
  en: 'We tried building a family the way everyone does. We didn\'t like it. Read this text — you won\'t like it either, 100%',
  ua: 'Ми пробували будувати сім\'ю як усі. Нам не сподобалось. Прочитайте цей текст, вам теж так не сподобається, 100%'
},
'mybogi.intro.p3': {
  ru: 'У нас было 4 свадьбы (и будет пятая). Последние полгода мы проводим по 6 часов в практиках и церемониях, создавая модель резонансной семьи. Мы проверили на себе, как это работает. Готовы передать не просто модель, но и опыт, вам.',
  en: 'We\'ve had 4 weddings (and there will be a fifth). For the past six months we\'ve been spending 6 hours a day in practices and ceremonies, creating a model of the resonant family. We tested it on ourselves. We\'re ready to pass on not just the model, but the experience.',
  ua: 'У нас було 4 весілля (і буде п\'яте). Останні пів року ми проводимо по 6 годин у практиках і церемоніях, створюючи модель резонансної сім\'ї. Ми перевірили на собі, як це працює. Готові передати не просто модель, але й досвід, вам.'
},
// Context
'mybogi.context.title': { ru: 'Контекст', en: 'Context', ua: 'Контекст' },
'mybogi.context.intro': {
  ru: 'Есть всего три сценария, по которым развивается пара в общепринятой системе координат. Они вам не понравятся, но вы точно их проживали.',
  en: 'There are only three scenarios for how a couple evolves in the conventional framework. You won\'t like them, but you\'ve definitely lived through them.',
  ua: 'Є лише три сценарії, за якими розвивається пара у загальноприйнятій системі координат. Вони вам не сподобаються, але ви точно їх проживали.'
},
'mybogi.context.s1.title': { ru: '1. Он доминирует.', en: '1. He dominates.', ua: '1. Він домінує.' },
'mybogi.context.s1.text': {
  ru: 'Классика жанра. Мужчина зарабатывает, принимает решения, задает вектор. Женщина — «за мужем». Даже если она тоже зарабатывает, эмоциональный и стратегический контроль — за ним. Ее роль — обслуживать, поддерживать, терпеть. Если она начинает «слишком много хотеть» — это воспринимается как бунт. Дети в этой системе — инструмент привязки и выполнения социального контракта. Секс — его потребность, её обязанность. Творчество — его, если останется время после работы. Её — только если он разрешит. Итог: выгорание. Два одиноких человека в одной квартире. Один — с короной. Другая — со стиснутыми зубами.',
  en: 'A classic. The man earns, makes decisions, sets the direction. The woman is "behind her husband." Even if she also earns, emotional and strategic control is his. Her role: serve, support, endure. If she starts "wanting too much" — it\'s perceived as rebellion. Children are tools of attachment and social contract fulfillment. Sex — his need, her duty. Creativity — his, if there\'s time after work. Hers — only if he allows it. Result: burnout. Two lonely people in one apartment. One with a crown. The other with clenched teeth.',
  ua: 'Класика жанру. Чоловік заробляє, приймає рішення, задає вектор. Жінка — «за чоловіком». Навіть якщо вона теж заробляє, емоційний і стратегічний контроль — за ним. Її роль — обслуговувати, підтримувати, терпіти. Якщо вона починає «занадто багато хотіти» — це сприймається як бунт. Діти — інструмент прив\'язки. Секс — його потреба, її обов\'язок. Творчість — його, якщо залишиться час після роботи. Її — тільки якщо він дозволить. Підсумок: вигорання. Двоє самотніх людей в одній квартирі. Один — з короною. Інша — зі стиснутими зубами.'
},
'mybogi.context.s2.title': { ru: '2. Она доминирует.', en: '2. She dominates.', ua: '2. Вона домінує.' },
'mybogi.context.s2.text': {
  ru: 'Всё чаще, особенно в «продвинутых» кругах. Она — генератор идей, энергии, решений. Он постепенно оседает. Становится удобным, комфортным, бесконфликтным... и бесполезным. Она тянет всё. Организует, планирует, вдохновляет — и медленно ненавидит его за это. Он чувствует её недовольство, но вместо реакции — уходит в телефон, в тупой юмор, в алкоголь. Секс умирает. Уважение — ещё быстрее. Она начинает компенсировать нехватку через «духовные практики», камни и ретриты, не замечая, что это — бегство от живой боли. Итог: она тянет на себе семью, работу и его, пока не рухнет. Он — просто растворяется. Не от злости. От безразличия.',
  en: 'Increasingly common, especially in "progressive" circles. She\'s the generator of ideas, energy, decisions. He gradually settles. Becomes convenient, comfortable, conflict-free... and useless. She carries everything. Organizes, plans, inspires — and slowly hates him for it. He senses her dissatisfaction but instead of reacting, retreats into his phone, dumb humor, alcohol. Sex dies. Respect — even faster. She compensates through "spiritual practices," crystals, and retreats, not realizing it\'s an escape from real pain. Result: she carries the family, work, and him until she collapses. He simply dissolves. Not from anger. From indifference.',
  ua: 'Все частіше, особливо у «просунутих» колах. Вона — генератор ідей, енергії, рішень. Він поступово осідає. Стає зручним, комфортним, безконфліктним... і непотрібним. Вона тягне все. Організовує, планує, надихає — і повільно ненавидить його за це. Він відчуває її невдоволення, але замість реакції — йде в телефон, у тупий гумор, в алкоголь. Секс вмирає. Повага — ще швидше. Вона компенсує нестачу через «духовні практики», камені й ретріти, не помічаючи, що це — втеча від живого болю. Підсумок: вона тягне на собі сім\'ю, роботу і його, поки не впаде. Він — просто розчиняється. Не від злості. Від байдужості.'
},
'mybogi.context.s3.title': { ru: '3. Они «партнеры».', en: '3. They\'re "partners."', ua: '3. Вони «партнери».' },
'mybogi.context.s3.text': {
  ru: 'Так называемый «цивилизованный» вариант. Все по-честному: обязанности поделены, бюджет общий (или раздельный — для безопасности), конфликты решаются «через разговор». Никто никому не давит. На поверхности — идеальная картинка. Внутри — нейтралитет. Без полярности нет химии. Без химии нет энергии. Без энергии нет секса, дерзости, масштаба. Два человека играют в «нормальную семью», которая скучна настолько, что дети с 10 лет живут в телефоне, потому что дома нечего ловить. Итог: правильно, стерильно, мертво. Развод или тихая агония на 20 лет.',
  en: 'The so-called "civilized" option. Everything is fair: duties are split, budget is shared (or separate — for safety), conflicts are resolved "through conversation." No one pressures anyone. On the surface — a perfect picture. Inside — neutrality. No polarity, no chemistry. No chemistry, no energy. No energy, no sex, no audacity, no scale. Two people playing "normal family" that\'s so boring their kids live in phones from age 10 because there\'s nothing to catch at home. Result: correct, sterile, dead. Divorce or quiet agony for 20 years.',
  ua: 'Так званий «цивілізований» варіант. Все чесно: обов\'язки розділені, бюджет спільний (або окремий — для безпеки), конфлікти розв\'язуються «через розмову». Ніхто нікого не тисне. На поверхні — ідеальна картинка. Всередині — нейтралітет. Без полярності немає хімії. Без хімії немає енергії. Без енергії немає сексу, дерзості, масштабу. Двоє людей грають у «нормальну сім\'ю», яка настільки нудна, що діти з 10 років живуть у телефоні, бо вдома нема чого ловити. Підсумок: правильно, стерильно, мертво. Розлучення або тиха агонія на 20 років.'
},
'mybogi.context.closing1': {
  ru: 'Как бы вам не хотелось возразить, глобально — не получится. Потому что так построено наше общество — основанное на старой патриархальной системе. Там, где нет гармонии, синергия невозможна.',
  en: 'No matter how much you want to object — globally, it won\'t work. Because that\'s how our society is built — on the old patriarchal system. Where there\'s no harmony, synergy is impossible.',
  ua: 'Як би вам не хотілося заперечити, глобально — не вийде. Бо так побудовано наше суспільство — засноване на старій патріархальній системі. Там, де немає гармонії, синергія неможлива.'
},
'mybogi.context.closing2': {
  ru: 'Последние полгода мы исследуем эти механизмы. Мы нашли, на чем они держаться и почему в рамках контрактной модели их невозможно обойти...',
  en: 'For the past six months we\'ve been studying these mechanisms. We found what holds them together and why they can\'t be bypassed within the contractual model...',
  ua: 'Останні пів року ми досліджуємо ці механізми. Ми знайшли, на чому вони тримаються і чому в рамках контрактної моделі їх неможливо обійти...'
},
'mybogi.context.closing3': {
  ru: 'А теперь представьте, что таки может получиться по-другому.',
  en: 'Now imagine it could actually work out differently.',
  ua: 'А тепер уявіть, що таки може вийти по-іншому.'
},
// Blockquote
'mybogi.blockquote': {
  ru: 'Это не «курс про отношения». И мы точно не будем учить вас «искать компромиссы» или «работать над собой». Мы здесь, чтобы сменить саму архитектуру: выйти из уставшего сценария, где вы тратите силы на обслуживание семьи (или одиночества), в реальность, где близость становится вашим ядерным реактором. Где 1+1 создает поле, заряжающее всё остальное — от масштаба проектов до физического здоровья. Приглашаем вас не «послушать лекции», а прожить это.',
  en: 'This is not a "relationship course." And we definitely won\'t teach you to "find compromises" or "work on yourself." We\'re here to change the architecture itself: to exit the exhausted script where you spend energy maintaining family (or loneliness), into a reality where intimacy becomes your nuclear reactor. Where 1+1 creates a field that charges everything else — from the scale of projects to physical health. We invite you not to "attend lectures," but to live it.',
  ua: 'Це не «курс про стосунки». І ми точно не будемо вчити вас «шукати компроміси» чи «працювати над собою». Ми тут, щоб змінити саму архітектуру: вийти зі стомленого сценарію, де ви витрачаєте сили на обслуговування сім\'ї (чи самотності), у реальність, де близькість стає вашим ядерним реактором. Де 1+1 створює поле, що заряджає все інше — від масштабу проєктів до фізичного здоров\'я. Запрошуємо вас не «послухати лекції», а прожити це.'
},
// Personal story
'mybogi.story.title': { ru: 'Личная история', en: 'Personal Story', ua: 'Особиста історія' },
'mybogi.story.liza.title': { ru: 'Лиза. Про честность и детей.', en: 'Liza. On Honesty and Children.', ua: 'Ліза. Про чесність і дітей.' },
'mybogi.story.liza.p1': {
  ru: 'Когда я узнала что беременна нашим первым ребенком, я была в ужасе. Полное осознание того, что я совершенно не готова быть мамой. Абсолютное нежелание быть мамой. Страх перед тем, как изменится мое тело. Бесконтрольные рыдания от мысли, что моя свобода закончилась.',
  en: 'When I found out I was pregnant with our first child, I was terrified. Full awareness that I was absolutely not ready to be a mother. Complete unwillingness to be a mother. Fear of how my body would change. Uncontrollable sobbing at the thought that my freedom was over.',
  ua: 'Коли я дізналася, що вагітна нашою першою дитиною, я була в жаху. Повне усвідомлення того, що я абсолютно не готова бути мамою. Абсолютне небажання бути мамою. Страх перед тим, як зміниться моє тіло. Неконтрольовані ридання від думки, що моя свобода закінчилась.'
},
'mybogi.story.liza.p2': {
  ru: 'У меня были страшные, тяжелые роды. Я была на грани смерти, роды длились больше суток, меня разрезали, ребенка тащили вантузом. Ребенок не брал грудь, заражение, температура, три больницы за неделю.',
  en: 'I had terrifying, difficult labor. I was on the edge of death, labor lasted over 24 hours, they cut me open, pulled the baby with a vacuum. The baby wouldn\'t breastfeed, infection, fever, three hospitals in one week.',
  ua: 'У мене були страшні, тяжкі пологи. Я була на межі смерті, пологи тривали понад добу, мене розрізали, дитину тягли вантузом. Дитина не брала груди, зараження, температура, три лікарні за тиждень.'
},
'mybogi.story.liza.p3': {
  ru: 'Это был самый тяжелый период моей жизни. Но он же стал переломным. Начало войны. Полное крушение прежней реальности. Роды, материнство, потеря идентичности, бессонница, потеря дома и привычного мира — всё это было не «кризисом», а точкой полной пересборки.',
  en: 'It was the hardest period of my life. But it also became a turning point. The start of war. Complete destruction of the previous reality. Birth, motherhood, loss of identity, insomnia, loss of home and familiar world — all of it was not a "crisis" but a point of total reassembly.',
  ua: 'Це був найважчий період мого життя. Але він же став переломним. Початок війни. Повне руйнування попередньої реальності. Пологи, материнство, втрата ідентичності, безсоння, втрата дому і звичного світу — все це було не «кризою», а точкою повного перезбирання.'
},
'mybogi.story.liza.p4': {
  ru: 'Сегодня наша дочь Арина — ей 3 года — ни разу серьезно не болела. Ни разу не устроила истерику. Она растет в поле, где нет борьбы за внимание, нет подавления, нет «положено так». Не потому что мы идеальные родители, а потому что мы выстроили другую архитектуру.',
  en: 'Today our daughter Arina — she\'s 3 — has never been seriously ill. Never thrown a tantrum. She\'s growing up in a field where there\'s no fight for attention, no suppression, no "that\'s how it should be." Not because we\'re perfect parents, but because we built a different architecture.',
  ua: 'Сьогодні наша дочка Аріна — їй 3 роки — жодного разу серйозно не хворіла. Жодного разу не влаштувала істерику. Вона росте в полі, де немає боротьби за увагу, немає придушення, немає «так належить». Не тому що ми ідеальні батьки, а тому що ми вибудували іншу архітектуру.'
},
'mybogi.story.vlad.title': { ru: 'Глазами Влада', en: 'Through Vlad\'s Eyes', ua: 'Очима Влада' },
'mybogi.story.vlad.p1': {
  ru: 'Когда мы с Лизой встретились, это была безусловная страсть. Мы горели. Физически, ментально, химически — идеальный резонанс. Казалось, что так будет всегда. Было очевидно, что мы нашли то самое. Навсегда.',
  en: 'When Liza and I met, it was unconditional passion. We burned. Physically, mentally, chemically — perfect resonance. It seemed like it would last forever. It was obvious we\'d found the one. Forever.',
  ua: 'Коли ми з Лізою зустрілися, це була безумовна пристрасть. Ми горіли. Фізично, ментально, хімічно — ідеальний резонанс. Здавалося, що так буде завжди. Було очевидно, що ми знайшли те саме. Назавжди.'
},
'mybogi.story.vlad.p2': {
  ru: 'А потом приходит быт. Беременность. Война. Переезд. Бессонные ночи. Деньги. Ответственность. И ты понимаешь, что вся эта «любовь» была лишь первым топливным ускорителем, который выгорел за два года, оставив двух уставших взрослых людей с ребенком, раздражением и вопросом: «и что теперь?».',
  en: 'Then comes everyday life. Pregnancy. War. Moving. Sleepless nights. Money. Responsibility. And you realize all that "love" was just the first fuel booster that burned out in two years, leaving two tired adults with a child, irritation, and the question: "now what?"',
  ua: 'А потім приходить побут. Вагітність. Війна. Переїзд. Безсонні ночі. Гроші. Відповідальність. І ти розумієш, що вся ця «любов» була лише першим паливним прискорювачем, який вигорів за два роки, залишивши двох стомлених дорослих людей з дитиною, роздратуванням і питанням: «і що тепер?».'
},
'mybogi.story.vlad.p3': {
  ru: 'Мы были на грани развода. Не потому что не любили. А потому что не знали, как любить дальше. Модели «терпеть ради детей» или «найти компромисс» вызывали тошноту. Мы не могли себе позволить посредственные отношения.',
  en: 'We were on the edge of divorce. Not because we didn\'t love each other. But because we didn\'t know how to love further. Models like "endure for the kids" or "find a compromise" made us nauseous. We couldn\'t afford mediocre relationships.',
  ua: 'Ми були на межі розлучення. Не тому що не любили. А тому що не знали, як любити далі. Моделі «терпіти заради дітей» чи «знайти компроміс» викликали нудоту. Ми не могли собі дозволити посередні стосунки.'
},
'mybogi.story.vlad.p4': {
  ru: 'И мы начали копать. Не в психологии, не в попсовых коучингах. А в физике. В нейробиологии. В древних традициях, которые были уничтожены именно потому, что работали. Мы построили модель, проверили на себе и получили результат, который невозможно объяснить в рамках «нормальных отношений».',
  en: 'And we started digging. Not in psychology, not in pop coaching. In physics. In neurobiology. In ancient traditions that were destroyed precisely because they worked. We built a model, tested it on ourselves, and got a result that can\'t be explained within "normal relationships."',
  ua: 'І ми почали копати. Не в психології, не в попсових коучингах. А у фізиці. У нейробіології. У стародавніх традиціях, які були знищені саме тому, що працювали. Ми побудували модель, перевірили на собі й отримали результат, який неможливо пояснити в рамках «нормальних стосунків».'
},
'mybogi.story.vlad.p5': {
  ru: 'Сейчас мы живем в Лаборатории Квантового Сознания. Мы проводим по 6 часов в день в практиках и церемониях. Мы исследуем границы того, что возможно между двумя людьми. И мы точно знаем: то, что у нас сейчас — это не «хорошие отношения». Это ядерный реактор.',
  en: 'Now we live in the Quantum Consciousness Lab. We spend 6 hours a day in practices and ceremonies. We explore the limits of what\'s possible between two people. And we know for certain: what we have now is not "good relationships." It\'s a nuclear reactor.',
  ua: 'Зараз ми живемо в Лабораторії Квантової Свідомості. Ми проводимо по 6 годин на день у практиках і церемоніях. Ми досліджуємо межі того, що можливо між двома людьми. І ми точно знаємо: те, що у нас зараз — це не «добрі стосунки». Це ядерний реактор.'
},
// Program
'mybogi.program.title': { ru: 'Программа. Direct Experience', en: 'Program. Direct Experience', ua: 'Програма. Direct Experience' },
'mybogi.program.intro1': {
  ru: 'Мы не читаем лекции. Мы передаем состояние. Это закрытый, без цензуры формат, где мы говорим и показываем то, что невозможно выложить в открытый доступ.',
  en: 'We don\'t give lectures. We transmit a state. This is a closed, uncensored format where we say and show what can\'t be published openly.',
  ua: 'Ми не читаємо лекції. Ми передаємо стан. Це закритий, без цензури формат, де ми говоримо і показуємо те, що неможливо викласти у відкритий доступ.'
},
'mybogi.program.intro2': {
  ru: 'Прежде чем строить «МЫ», необходимо выстроить здоровое «Я». Невозможно резонировать, если ты сам — расщеплен. Поэтому программа начинается с фундамента.',
  en: 'Before building "WE," you need to build a healthy "I." You can\'t resonate if you\'re fragmented. That\'s why the program starts with the foundation.',
  ua: 'Перш ніж будувати «МИ», необхідно вибудувати здорове «Я». Неможливо резонувати, якщо ти сам — розщеплений. Тому програма починається з фундаменту.'
},
'mybogi.program.block1.title': { ru: 'Блок 1: «Я»', en: 'Block 1: "I"', ua: 'Блок 1: «Я»' },
'mybogi.program.block1.subtitle': {
  ru: 'Фундамент Личности. Энергетическая структура Нового Мира.',
  en: 'Foundation of Self. The Energy Structure of the New World.',
  ua: 'Фундамент Особистості. Енергетична структура Нового Світу.'
},
'mybogi.program.block1.i1': {
  ru: '<strong>Новая Иерархия</strong> — пересборка внутренней системы координат. Выход из вертикали подавления в спиральную модель.',
  en: '<strong>New Hierarchy</strong> — reassembling the inner coordinate system. Exiting the vertical of suppression into a spiral model.',
  ua: '<strong>Нова Ієрархія</strong> — перезбирання внутрішньої системи координат. Вихід з вертикалі придушення у спіральну модель.'
},
'mybogi.program.block1.i2': {
  ru: '<strong>Архитектура Пола</strong> — деконструкция навязанных гендерных программ. Возврат к природной полярности.',
  en: '<strong>Architecture of Gender</strong> — deconstruction of imposed gender programs. Return to natural polarity.',
  ua: '<strong>Архітектура Статі</strong> — деконструкція нав\'язаних гендерних програм. Повернення до природної полярності.'
},
'mybogi.program.block1.i3': {
  ru: '<strong>Синхронизация Триады</strong> — тело, ум, дух. Три центра, которые система намеренно расщепила.',
  en: '<strong>Triad Synchronization</strong> — body, mind, spirit. Three centers the system deliberately fragmented.',
  ua: '<strong>Синхронізація Тріади</strong> — тіло, розум, дух. Три центри, які система навмисно розщепила.'
},
'mybogi.program.block1.i4': {
  ru: '<strong>Гармонизация Проявления</strong> — как перестать «казаться» и начать «быть». Аутентичность как энергетический источник.',
  en: '<strong>Harmonizing Expression</strong> — how to stop "seeming" and start "being." Authenticity as an energy source.',
  ua: '<strong>Гармонізація Прояву</strong> — як перестати «здаватися» і почати «бути». Автентичність як енергетичне джерело.'
},
'mybogi.program.block1.i5': {
  ru: '<strong>Точка Пробуждения Души</strong> — момент, когда вы перестаете жить по сценарию и начинаете жить из источника.',
  en: '<strong>Soul Awakening Point</strong> — the moment you stop living by script and start living from source.',
  ua: '<strong>Точка Пробудження Душі</strong> — момент, коли ви перестаєте жити за сценарієм і починаєте жити з джерела.'
},
'mybogi.program.block1.i6': {
  ru: '<strong>Поток Творчества</strong> — активация канала, через который реальность создается, а не обслуживается.',
  en: '<strong>Creative Flow</strong> — activating the channel through which reality is created, not maintained.',
  ua: '<strong>Потік Творчості</strong> — активація каналу, через який реальність створюється, а не обслуговується.'
},
'mybogi.program.block2.title': { ru: 'Блок 2: «Мы»', en: 'Block 2: "We"', ua: 'Блок 2: «Ми»' },
'mybogi.program.block2.subtitle': {
  ru: 'Архитектура Квантового Союза.',
  en: 'Architecture of the Quantum Union.',
  ua: 'Архітектура Квантового Союзу.'
},
'mybogi.program.block2.i1': {
  ru: '<strong>Квантовое Сознание Пары</strong> — что происходит, когда два человека перестают бороться и начинают резонировать.',
  en: '<strong>Quantum Couple Consciousness</strong> — what happens when two people stop fighting and start resonating.',
  ua: '<strong>Квантова Свідомість Пари</strong> — що відбувається, коли двоє людей перестають боротися і починають резонувати.'
},
'mybogi.program.block2.i2': {
  ru: '<strong>От «Я» к «МЫ»</strong> — переход от двух автономных систем к единому полю. Без потери себя.',
  en: '<strong>From "I" to "WE"</strong> — transition from two autonomous systems to a unified field. Without losing yourself.',
  ua: '<strong>Від «Я» до «МИ»</strong> — перехід від двох автономних систем до єдиного поля. Без втрати себе.'
},
'mybogi.program.block2.i3': {
  ru: '<strong>От Контрактов к Культивированию</strong> — демонтаж модели «ты мне — я тебе». Создание среды, где оба растут экспоненциально.',
  en: '<strong>From Contracts to Cultivation</strong> — dismantling the "you for me — I for you" model. Creating an environment where both grow exponentially.',
  ua: '<strong>Від Контрактів до Культивування</strong> — демонтаж моделі «ти мені — я тобі». Створення середовища, де обоє зростають експоненціально.'
},
'mybogi.program.block2.i4': {
  ru: '<strong>Энергетика Семьи</strong> — семья как энергетическая система. Как перестать «тратить силы на семью» и начать получать из неё энергию.',
  en: '<strong>Family Energetics</strong> — family as an energy system. How to stop "spending energy on family" and start receiving energy from it.',
  ua: '<strong>Енергетика Сім\'ї</strong> — сім\'я як енергетична система. Як перестати «витрачати сили на сім\'ю» і почати отримувати з неї енергію.'
},
'mybogi.program.block2.i5': {
  ru: '<strong>Сексуальность и Алхимия</strong> — возврат Эроса. Сексуальная энергия как топливо трансформации, а не потребления.',
  en: '<strong>Sexuality and Alchemy</strong> — the return of Eros. Sexual energy as fuel for transformation, not consumption.',
  ua: '<strong>Сексуальність і Алхімія</strong> — повернення Еросу. Сексуальна енергія як паливо трансформації, а не споживання.'
},
'mybogi.program.block2.i6': {
  ru: '<strong>Изобилие</strong> — почему пары в резонансе зарабатывают больше. Экономика поля.',
  en: '<strong>Abundance</strong> — why couples in resonance earn more. The economics of the field.',
  ua: '<strong>Достаток</strong> — чому пари в резонансі заробляють більше. Економіка поля.'
},
'mybogi.program.block2.i7': {
  ru: '<strong>Счастливые Дети</strong> — дети, которые растут в поле, а не в системе контроля. Без истерик, без подавления, без борьбы за внимание.',
  en: '<strong>Happy Children</strong> — children who grow up in a field, not a control system. No tantrums, no suppression, no fighting for attention.',
  ua: '<strong>Щасливі Діти</strong> — діти, які ростуть у полі, а не в системі контролю. Без істерик, без придушення, без боротьби за увагу.'
},
// Format
'mybogi.format.title': { ru: 'Формат', en: 'Format', ua: 'Формат' },
'mybogi.format.f1.title': {
  ru: '8 Лекционных Встреч (Архитектура Сознания)',
  en: '8 Lecture Sessions (Architecture of Consciousness)',
  ua: '8 Лекційних Зустрічей (Архітектура Свідомості)'
},
'mybogi.format.f1.desc': {
  ru: 'Глубокие сессии, где мы разбираем модель по слоям. Физика, нейробиология, древние традиции — переведенные на живой язык. Не академические лекции, а передача карты территории, которую мы прошли.',
  en: 'Deep sessions where we deconstruct the model layer by layer. Physics, neurobiology, ancient traditions — translated into living language. Not academic lectures, but a transfer of the map of the territory we\'ve walked.',
  ua: 'Глибокі сесії, де ми розбираємо модель пошарово. Фізика, нейробіологія, стародавні традиції — перекладені живою мовою. Не академічні лекції, а передача карти території, яку ми пройшли.'
},
'mybogi.format.f2.title': {
  ru: '8 Закрытых Церемоний (Direct Experience)',
  en: '8 Closed Ceremonies (Direct Experience)',
  ua: '8 Закритих Церемоній (Direct Experience)'
},
'mybogi.format.f2.desc': {
  ru: 'Практики, медитации, телесные сессии и церемонии, которые невозможно описать текстом. Закрытый формат без цензуры. То, что мы делаем каждый день в нашей лаборатории — адаптировано и передано вам. Это не про «подышать». Это про прожить.',
  en: 'Practices, meditations, body sessions, and ceremonies that can\'t be described in text. Closed uncensored format. What we do every day in our lab — adapted and transmitted to you. This is not about "doing breathwork." This is about living it.',
  ua: 'Практики, медитації, тілесні сесії та церемонії, які неможливо описати текстом. Закритий формат без цензури. Те, що ми робимо щодня в нашій лабораторії — адаптовано і передано вам. Це не про «подихати». Це про прожити.'
},
'mybogi.format.f3.title': {
  ru: 'Дополнительные точки синхронизации',
  en: 'Additional Sync Points',
  ua: 'Додаткові точки синхронізації'
},
'mybogi.format.f3.desc': {
  ru: 'Закрытый чат участников. Поддержка между встречами. Индивидуальные рекомендации от нас. Доступ к записям. Поле не заканчивается после звонка — оно продолжает работать.',
  en: 'Private participant chat. Support between sessions. Individual recommendations from us. Access to recordings. The field doesn\'t end after the call — it keeps working.',
  ua: 'Закритий чат учасників. Підтримка між зустрічами. Індивідуальні рекомендації від нас. Доступ до записів. Поле не закінчується після дзвінка — воно продовжує працювати.'
},
// Conditions
'mybogi.conditions.title': { ru: 'Условия', en: 'Terms', ua: 'Умови' },
'mybogi.conditions.p1': {
  ru: 'Мы открываем лабораторию на короткое время. Это не массовый продукт. Нам важен резонанс, а не количество.',
  en: 'We\'re opening the lab for a limited time. This is not a mass product. We value resonance, not quantity.',
  ua: 'Ми відкриваємо лабораторію на короткий час. Це не масовий продукт. Нам важливий резонанс, а не кількість.'
},
'mybogi.conditions.support': {
  ru: '<a href="https://t.me/viki_assistant">связаться с поддержкой</a>',
  en: '<a href="https://t.me/viki_assistant">contact support</a>',
  ua: '<a href="https://t.me/viki_assistant">зв\'язатися з підтримкою</a>'
},
'mybogi.conditions.couples': {
  ru: 'Идеально — парой. Но если партнер пока не готов, вы можете начать трансформацию один/одна. Поле работает.',
  en: 'Ideally — as a couple. But if your partner isn\'t ready yet, you can start the transformation alone. The field works.',
  ua: 'Ідеально — парою. Але якщо партнер поки не готовий, ви можете почати трансформацію один/одна. Поле працює.'
},
// Q&A
'mybogi.qa.title': { ru: 'Q&A', en: 'Q&A', ua: 'Q&A' },
'mybogi.qa.q1': {
  ru: 'А если я сейчас одна? Мне есть смысл идти?',
  en: 'What if I\'m single right now? Is there a point in joining?',
  ua: 'А якщо я зараз одна? Мені є сенс іти?'
},
'mybogi.qa.a1': {
  ru: 'Да. Блок «Я» — это фундамент. Без здорового «Я» невозможно построить «МЫ». Если вы сейчас одна/один — это идеальный момент, чтобы выстроить себя до того, как притянуть партнера. Из целостности вы притягиваете резонанс. Из дефицита — контракт.',
  en: 'Yes. Block "I" is the foundation. Without a healthy "I" you can\'t build "WE." If you\'re single — this is the perfect moment to build yourself before attracting a partner. From wholeness you attract resonance. From deficit — a contract.',
  ua: 'Так. Блок «Я» — це фундамент. Без здорового «Я» неможливо побудувати «МИ». Якщо ви зараз одна/один — це ідеальний момент, щоб вибудувати себе до того, як притягнути партнера. З цілісності ви притягуєте резонанс. З дефіциту — контракт.'
},
'mybogi.qa.q2': {
  ru: 'Мой партнер — скептик. Он/она не хочет идти.',
  en: 'My partner is a skeptic. They don\'t want to join.',
  ua: 'Мій партнер — скептик. Він/вона не хоче йти.'
},
'mybogi.qa.a2': {
  ru: 'Начните с себя. Когда один элемент системы меняет частоту, второй неизбежно реагирует. Вы не можете заставить партнера трансформироваться. Но вы можете стать настолько другим/другой, что старая модель станет невозможной. Это честнее, чем ультиматумы.',
  en: 'Start with yourself. When one element of the system changes frequency, the other inevitably responds. You can\'t force your partner to transform. But you can become so different that the old model becomes impossible. That\'s more honest than ultimatums.',
  ua: 'Почніть із себе. Коли один елемент системи змінює частоту, другий неминуче реагує. Ви не можете змусити партнера трансформуватися. Але ви можете стати настільки іншим/іншою, що стара модель стане неможливою. Це чесніше, ніж ультиматуми.'
},
'mybogi.qa.q3': {
  ru: 'Это — техники из какой-то конкретной системы?',
  en: 'Are these techniques from a specific system?',
  ua: 'Це — техніки з якоїсь конкретної системи?'
},
'mybogi.qa.a3': {
  ru: 'Нет. Это синтез. Физика волновых процессов, нейробиология, древние традиции (тантрические, шаманские, алхимические), психология развития — и наш личный, проверенный на себе опыт. Мы не принадлежим ни одной школе. Мы берем то, что работает, проверяем и передаем.',
  en: 'No. It\'s a synthesis. Wave process physics, neurobiology, ancient traditions (tantric, shamanic, alchemical), developmental psychology — and our personal, self-tested experience. We don\'t belong to any school. We take what works, test it, and pass it on.',
  ua: 'Ні. Це синтез. Фізика хвильових процесів, нейробіологія, стародавні традиції (тантричні, шаманські, алхімічні), психологія розвитку — і наш особистий, перевірений на собі досвід. Ми не належимо жодній школі. Ми беремо те, що працює, перевіряємо і передаємо.'
},
'mybogi.qa.q4': {
  ru: 'Зачем закрытый формат «без цензуры»? Это что, порно?',
  en: 'Why the closed "uncensored" format? Is it porn?',
  ua: 'Навіщо закритий формат «без цензури»? Це що, порно?'
},
'mybogi.qa.a4': {
  ru: 'Нет. Но мы говорим о сексуальности, теле, энергии, измененных состояниях сознания и вещах, которые невозможно обсуждать в публичном поле без искажения. Закрытый формат — это безопасность для честности. Мы не фильтруем. Мы не адаптируем под «приличное общество». Мы передаем как есть.',
  en: 'No. But we discuss sexuality, body, energy, altered states of consciousness, and things that can\'t be discussed publicly without distortion. Closed format means safety for honesty. We don\'t filter. We don\'t adapt for "polite society." We transmit as is.',
  ua: 'Ні. Але ми говоримо про сексуальність, тіло, енергію, змінені стани свідомості і речі, які неможливо обговорювати у публічному полі без спотворення. Закритий формат — це безпека для чесності. Ми не фільтруємо. Ми не адаптуємо під «пристойне суспільство». Ми передаємо як є.'
},
'mybogi.qa.q5': { ru: 'Будет сложно?', en: 'Will it be hard?', ua: 'Буде складно?' },
'mybogi.qa.a5': {
  ru: 'Да. Любая реальная трансформация — это не «приятный вебинар». Это демонтаж старого и строительство нового. Будут моменты, когда захочется уйти, закрыться, вернуться в знакомый дискомфорт. Но именно там, на грани — начинается прорыв. Мы будем рядом.',
  en: 'Yes. Any real transformation is not a "pleasant webinar." It\'s dismantling the old and building the new. There will be moments when you\'ll want to leave, shut down, return to familiar discomfort. But right there, at the edge — the breakthrough begins. We\'ll be there.',
  ua: 'Так. Будь-яка реальна трансформація — це не «приємний вебінар». Це демонтаж старого і будівництво нового. Будуть моменти, коли захочеться піти, закритися, повернутися у знайомий дискомфорт. Але саме там, на межі — починається прорив. Ми будемо поруч.'
},
'mybogi.qa.q6': {
  ru: 'У нас всё плохо. Мы на грани развода. Нам поможет?',
  en: 'Things are bad for us. We\'re on the edge of divorce. Will this help?',
  ua: 'У нас все погано. Ми на межі розлучення. Нам допоможе?'
},
'mybogi.qa.a6': {
  ru: 'Возможно. Но только если оба готовы к честности. Мы не спасаем отношения. Мы даем инструменты для создания новых — с тем же человеком или без него. Если ваш союз способен к трансформации — вы получите карту. Если нет — вы получите ясность. И то, и другое ценно.',
  en: 'Possibly. But only if both are ready for honesty. We don\'t save relationships. We give tools for creating new ones — with the same person or without. If your union is capable of transformation — you\'ll get the map. If not — you\'ll get clarity. Both are valuable.',
  ua: 'Можливо. Але тільки якщо обоє готові до чесності. Ми не рятуємо стосунки. Ми даємо інструменти для створення нових — з тією ж людиною або без неї. Якщо ваш союз здатний до трансформації — ви отримаєте карту. Якщо ні — ви отримаєте ясність. І те, й інше цінне.'
},
'mybogi.qa.q7': {
  ru: 'У нас всё «нормально». Без скандалов, но и без огня. Нам это нужно?',
  en: 'Things are "fine" for us. No fights, but no fire either. Do we need this?',
  ua: 'У нас все «нормально». Без скандалів, але й без вогню. Нам це потрібно?'
},
'mybogi.qa.a7': {
  ru: '«Нормально» — это третий сценарий. Самый опасный, потому что он маскирует медленное умирание под стабильность. Если вы чувствуете, что живете в нейтралитете, — это красный флаг. Вы не в безопасности. Вы в анестезии. Этот курс вернет полярность и огонь — если вы готовы.',
  en: '"Fine" is the third scenario. The most dangerous, because it masks slow dying as stability. If you feel you\'re living in neutrality — that\'s a red flag. You\'re not safe. You\'re anesthetized. This course will bring back polarity and fire — if you\'re ready.',
  ua: '«Нормально» — це третій сценарій. Найнебезпечніший, бо він маскує повільне вмирання під стабільність. Якщо ви відчуваєте, що живете у нейтралітеті, — це червоний прапор. Ви не в безпеці. Ви в анестезії. Цей курс поверне полярність і вогонь — якщо ви готові.'
},
'mybogi.qa.q8': {
  ru: 'Я мужчина. Мне кажется, это всё «женские штучки» про потоки и энергии.',
  en: 'I\'m a man. This all seems like "women\'s stuff" about flows and energies.',
  ua: 'Я чоловік. Мені здається, це все «жіночі штучки» про потоки та енергії.'
},
'mybogi.qa.a8': {
  ru: 'Это физика. Волновая механика, нейробиология, теория систем. Если вам ближе язык инженерии — мы говорим на нем. Резонанс — это не эзотерика. Это измеримый феномен, который используется в акустике, электронике и квантовой механике. Мы просто применяем его к отношениям. Влад — технарь, предприниматель и скептик. Если его убедило — вас тоже убедит.',
  en: 'It\'s physics. Wave mechanics, neurobiology, systems theory. If you prefer the language of engineering — we speak it. Resonance is not esoterica. It\'s a measurable phenomenon used in acoustics, electronics, and quantum mechanics. We just apply it to relationships. Vlad is an engineer, entrepreneur, and skeptic. If it convinced him — it\'ll convince you too.',
  ua: 'Це фізика. Хвильова механіка, нейробіологія, теорія систем. Якщо вам ближча мова інженерії — ми говоримо нею. Резонанс — це не езотерика. Це вимірюваний феномен, який використовується в акустиці, електроніці та квантовій механіці. Ми просто застосовуємо його до стосунків. Влад — технар, підприємець і скептик. Якщо його переконало — вас теж переконає.'
},
'mybogi.qa.q9': {
  ru: 'Сколько времени это займет?',
  en: 'How long will it take?',
  ua: 'Скільки часу це займе?'
},
'mybogi.qa.a9': {
  ru: 'Основная программа — 2 месяца. 16 встреч (8 лекционных + 8 церемоний). Плюс работа между встречами. Это не фоновый курс «послушал и забыл». Это интенсив, который требует вашего присутствия и честности. Рассчитывайте на 4-6 часов в неделю.',
  en: 'The core program is 2 months. 16 sessions (8 lectures + 8 ceremonies). Plus work between sessions. This is not a background course you "listen and forget." It\'s an intensive that requires your presence and honesty. Plan for 4-6 hours per week.',
  ua: 'Основна програма — 2 місяці. 16 зустрічей (8 лекційних + 8 церемоній). Плюс робота між зустрічами. Це не фоновий курс «послухав і забув». Це інтенсив, який вимагає вашої присутності та чесності. Розраховуйте на 4-6 годин на тиждень.'
},
'mybogi.qa.q10': {
  ru: 'Почему так дорого/дешево?',
  en: 'Why is it so expensive/cheap?',
  ua: 'Чому так дорого/дешево?'
},
'mybogi.qa.a10': {
  ru: '2 000 евро — это стоимость одной сессии у хорошего семейного терапевта, умноженная на 10. Мы даем 16 встреч, закрытое поле, практики и личный доступ. Это не дорого. Это порог входа, который фильтрует туристов от тех, кто действительно готов к трансформации. Если вы думаете «дорого» — спросите себя, сколько вы уже потратили на терапию, коучей и курсы, которые не сработали.',
  en: '2,000 euros is the cost of one session with a good family therapist, multiplied by 10. We give 16 sessions, a closed field, practices, and personal access. It\'s not expensive. It\'s an entry threshold that filters tourists from those truly ready for transformation. If you think "expensive" — ask yourself how much you\'ve already spent on therapy, coaches, and courses that didn\'t work.',
  ua: '2 000 євро — це вартість однієї сесії у хорошого сімейного терапевта, помножена на 10. Ми даємо 16 зустрічей, закрите поле, практики та особистий доступ. Це не дорого. Це поріг входу, який фільтрує туристів від тих, хто дійсно готовий до трансформації. Якщо ви думаєте «дорого» — запитайте себе, скільки ви вже витратили на терапію, коучів та курси, які не спрацювали.'
},
// Final
'mybogi.final.sign': {
  ru: 'ДО ВСТРЕЧИ В ИГРЕ!<br>Влад & Лиза',
  en: 'SEE YOU IN THE GAME!<br>Vlad & Liza',
  ua: 'ДО ЗУСТРІЧІ В ГРІ!<br>Влад & Ліза'
},

// ─── RETREAT PAGE ───
'retreat.title': { ru: 'OnlyGods — System Reboot', en: 'OnlyGods — System Reboot', ua: 'OnlyGods — System Reboot' },
'retreat.back': { ru: '← Alignment', en: '← Alignment', ua: '← Alignment' },
'retreat.hero.subtitle': {
  ru: 'Ретрит',
  en: 'Retreat',
  ua: 'Ретріт'
},
'retreat.hero.title': { ru: 'System Reboot', en: 'System Reboot', ua: 'System Reboot' },
'retreat.hero.tagline': {
  ru: 'Personal & Couple перезагрузка',
  en: 'Personal & Couple reboot',
  ua: 'Personal & Couple перезавантаження'
},
'retreat.content.title': {
  ru: 'Распаковка Креативности',
  en: 'Unpacking Creativity',
  ua: 'Розпаковка Креативності'
},
'retreat.content.desc': {
  ru: 'Распаковка Креативности и восстановление персонального Дао. 5 дней жизни с нами',
  en: 'Unpacking Creativity and restoring personal Tao. 5 days living with us',
  ua: 'Розпаковка Креативності та відновлення персонального Дао. 5 днів життя з нами'
},
'retreat.content.placeholder': {
  ru: 'Программа ретрита формируется. Следите за обновлениями.',
  en: 'Retreat program is being developed. Stay tuned.',
  ua: 'Програма ретріту формується. Слідкуйте за оновленнями.'
},
'retreat.content.price': { ru: 'По запросу', en: 'On request', ua: 'За запитом' },
'retreat.content.cta': { ru: 'Связаться', en: 'Contact us', ua: 'Зв\'язатися' },

// ─── 404 PAGE ───
'e404.pagetitle': { ru: 'OnlyGods — 404', en: 'OnlyGods — 404', ua: 'OnlyGods — 404' },
'e404.text': {
  ru: 'Страница находится в квантовой суперпозиции: одновременно существует и не существует. Вы нашли пустоту. Это уже прогресс.',
  en: 'This page exists in quantum superposition: it simultaneously is and isn\'t. You found the void. That\'s already progress.',
  ua: 'Сторінка перебуває у квантовій суперпозиції: одночасно існує і не існує. Ви знайшли порожнечу. Це вже прогрес.'
},

// ─── GAMEOVER ARTICLE ───
'gameover.title': { ru: 'OnlyGods — 2026: GAME OVER', en: 'OnlyGods — 2026: GAME OVER', ua: 'OnlyGods — 2026: GAME OVER' },
'gameover.back': { ru: '← Mindset 2.0', en: '← Mindset 2.0', ua: '← Mindset 2.0' },
'gameover.hero.subtitle': { ru: '2026', en: '2026', ua: '2026' },
'gameover.hero.title': { ru: '2026 = GAME OVER', en: '2026 = GAME OVER', ua: '2026 = GAME OVER' },
'gameover.hero.tagline': {
  ru: 'Математика конца света, точка разворота и протокол выхода из легального рабства',
  en: 'End-of-the-world mathematics, the turning point, and the protocol for exiting legal slavery',
  ua: 'Математика кінця світу, точка розвороту та протокол виходу з легального рабства'
},
'gameover.meta.author': { ru: 'Елизавета Сигорская', en: 'Elizaveta Sigorskaya', ua: 'Єлизавета Сігорська' },
'gameover.meta.date': { ru: '2026', en: '2026', ua: '2026' },
'gameover.meta.readtime': { ru: '15 мин', en: '15 min', ua: '15 хв' },

// Section 1 — Intro
'gameover.s1.p1': {
  ru: 'Если вы думаете, что ваши панические атаки по ночам, ипотека на 20 лет, выгорание к тридцати и физиологическая неспособность к глубокому оргазму — это результат вашей личной некомпетентности, примите поздравления. Вас блестяще на!бали. Ваша невротическая наивность — самый ликвидный актив системы, в которой мы живем. Правда жить осталось недолго.',
  en: 'If you think your nighttime panic attacks, your 20-year mortgage, your burnout by thirty, and your physiological inability to experience deep orgasm are the result of your personal incompetence — congratulations. You\'ve been brilliantly f!cked over. Your neurotic naivety is the most liquid asset of the system we live in. Though there isn\'t much living left to do.',
  ua: 'Якщо ви думаєте, що ваші нічні панічні атаки, іпотека на 20 років, вигорання до тридцяти та фізіологічна нездатність до глибокого оргазму — це результат вашої особистої некомпетентності, прийміть привітання. Вас блискуче на!бали. Ваша невротична наївність — найліквідніший актив системи, у якій ми живемо. Щоправда, жити залишилось недовго.'
},
'gameover.s1.p2': {
  ru: 'Добро пожаловать в «горизонт событий». То, что ведущие вечерних новостей называют «турбулентностью», системные аналитики Давоса и Пентагона сухо именуют мета-кризисом. Это математическая точка невозврата, где экспоненциальный взрыв ИИ, агония биосферы (минус 73% популяций позвоночных с 1970 года) и глобальный долговой пузырь в $338 трлн стянулись в один фатальный узел.',
  en: 'Welcome to the "event horizon." What evening news anchors call "turbulence," systems analysts at Davos and the Pentagon drily label a meta-crisis. This is the mathematical point of no return, where the exponential explosion of AI, the agony of the biosphere (minus 73% of vertebrate populations since 1970), and the global debt bubble of $338 trillion have converged into a single fatal knot.',
  ua: 'Ласкаво просимо на «горизонт подій». Те, що ведучі вечірніх новин називають «турбулентністю», системні аналітики Давосу та Пентагону сухо іменують мета-кризою. Це математична точка неповернення, де експоненційний вибух ШІ, агонія біосфери (мінус 73% популяцій хребетних з 1970 року) та глобальна боргова бульбашка у $338 трлн стягнулися в один фатальний вузол.'
},
'gameover.s1.p3': {
  ru: 'Мета-кризис не случится завтра. Он уже обрушивается лавиной. Посмотрите на саммиты глав мира, вы услышите одну тему — коллапс экономической и политической систем. В атмосфере Земли ракет больше, чем самолетов. Новости кишат прогнозами третьей мировой. Представители мировых организаций признают, что не знают, как удержать мир от разрушения. Европа в панике.',
  en: 'The meta-crisis won\'t happen tomorrow. It\'s already crashing down like an avalanche. Look at the world leaders\' summits — you\'ll hear one theme: the collapse of economic and political systems. There are more rockets in Earth\'s atmosphere than airplanes. The news swarms with predictions of World War III. Representatives of global organizations admit they don\'t know how to keep the world from falling apart. Europe is in panic.',
  ua: 'Мета-криза не станеться завтра. Вона вже обвалюється лавиною. Подивіться на саміти лідерів світу — ви почуєте одну тему: колапс економічних та політичних систем. В атмосфері Землі ракет більше, ніж літаків. Новини кишать прогнозами третьої світової. Представники світових організацій визнають, що не знають, як утримати світ від руйнування. Європа в паніці.'
},
'gameover.s1.p4': {
  ru: 'Консерватизм и стабильность — наименее устойчивая форма жизни при глобальной смене полюсов, поэтому если вы относите себя к среднему классу — самое время бежать с корабля.',
  en: 'Conservatism and stability are the least sustainable form of life during a global pole shift, so if you consider yourself middle class — it\'s time to abandon ship.',
  ua: 'Консерватизм і стабільність — найменш стійка форма життя при глобальній зміні полюсів, тому якщо ви відносите себе до середнього класу — саме час тікати з корабля.'
},
'gameover.s1.p5': {
  ru: 'При этом тема цивилизационного коллапса точно не попадает в чарты новостей и не фигурирует в планах на год большинства людей. Официально нам продают надвигающегося черного лебедя как временный локальный сбой. Но трезвый инженерный взгляд вскрывает иное: этот кризис — не внезапный. Это исход безупречно работающего алгоритма и предсказуемая мат-модель. Самоубийства.',
  en: 'Meanwhile, the topic of civilizational collapse doesn\'t make the news charts and doesn\'t feature in most people\'s yearly plans. Officially, they\'re selling us the approaching black swan as a temporary local glitch. But a sober engineering perspective reveals something else: this crisis is not sudden. It\'s the outcome of a flawlessly running algorithm and a predictable mathematical model. Of suicide.',
  ua: 'При цьому тема цивілізаційного колапсу точно не потрапляє у чарти новин і не фігурує у планах на рік більшості людей. Офіційно нам продають чорного лебедя, що насувається, як тимчасовий локальний збій. Але тверезий інженерний погляд розкриває інше: ця криза — не раптова. Це результат бездоганно працюючого алгоритму і передбачувана мат-модель. Самогубства.'
},
'gameover.s1.p6': {
  ru: 'В системном анализе этот рубеж называют «Точкой Сингулярности Кризисов». Это момент, когда в зоне риска не отдельная система или государство, а все человечество.',
  en: 'In systems analysis, this threshold is called the "Crisis Singularity Point." It\'s the moment when the risk zone encompasses not a single system or nation, but all of humanity.',
  ua: 'У системному аналізі цей рубіж називають «Точкою Сингулярності Криз». Це момент, коли в зоні ризику не окрема система чи держава, а все людство.'
},
'gameover.s1.p7': {
  ru: 'Мы находимся внутри цивилизационной операционной системы, которую в современной теории игр (спасибо Джиму Ратту, Бретту Вайнштейну и Дэниелу Шмахтенбергеру) называют «Игра А».',
  en: 'We are inside a civilizational operating system that modern game theory (thanks to Jim Rutt, Bret Weinstein, and Daniel Schmachtenberger) calls "Game A."',
  ua: 'Ми перебуваємо всередині цивілізаційної операційної системи, яку в сучасній теорії ігор (дякуємо Джиму Ратту, Бретту Вайнштейну та Деніелу Шмахтенбергеру) називають «Гра А».'
},

// Section 2 — Что такое Игра А
'gameover.s2.title': {
  ru: 'Что такое «Игра А»?',
  en: 'What Is "Game A"?',
  ua: 'Що таке «Гра А»?'
},
'gameover.s2.p1': {
  ru: '«Игра А» — это система, основанная на соперничестве (rivalrous dynamics). Проще говоря: паразитизм.',
  en: '"Game A" is a system built on competition (rivalrous dynamics). In plain terms: parasitism.',
  ua: '«Гра А» — це система, побудована на суперництві (rivalrous dynamics). Простіше кажучи: паразитизм.'
},
'gameover.s2.p2': {
  ru: 'Её фундаментальный принцип: «Я выигрываю, если ты проигрываешь. Или мы оба выигрываем, но проигрывает общее поле (природа/будущее)».',
  en: 'Its fundamental principle: "I win if you lose. Or we both win, but the commons loses (nature/the future)."',
  ua: 'Її фундаментальний принцип: «Я виграю, якщо ти програєш. Або ми обидва виграємо, але програє спільне поле (природа/майбутнє)».'
},
'gameover.s2.p3': {
  ru: 'Принято считать, что стратегия борьбы была не просто эффективна, а естественной и неизбежной последние 10 000 лет. Мы привыкли верить, что именно она позволила нам победить голод и построить небоскребы. Но нет.',
  en: 'It\'s commonly believed that the strategy of struggle was not merely effective, but natural and inevitable for the last 10,000 years. We\'ve grown accustomed to believing it\'s what allowed us to defeat hunger and build skyscrapers. But no.',
  ua: 'Прийнято вважати, що стратегія боротьби була не просто ефективною, а природною та неминучою останні 10 000 років. Ми звикли вірити, що саме вона дозволила нам перемогти голод і збудувати хмарочоси. Але ні.'
},
'gameover.s2.p4': {
  ru: 'Стратегия паразитизма охватывала Землю последние 10 000 лет и взяла абсолютный верх над стратегией Холизма (симбиоз, целостность) около 2000 лет назад, в Римской Империи. Переход, который мы называем «Нашей Эрой».',
  en: 'The parasitism strategy has engulfed Earth for the last 10,000 years and gained absolute dominance over the Holism strategy (symbiosis, wholeness) roughly 2,000 years ago, in the Roman Empire. The transition we call "Our Era."',
  ua: 'Стратегія паразитизму охоплювала Землю останні 10 000 років і взяла абсолютний верх над стратегією Холізму (симбіоз, цілісність) близько 2000 років тому, у Римській Імперії. Перехід, який ми називаємо «Нашою Ерою».'
},
'gameover.s2.p5': {
  ru: 'Специфика «Игры А» — заложенный в нее принцип самоуничтожения при условии ограниченных ресурсов. Ее исходный код — венчурный каннибализм и соперничающая динамика с нулевой суммой: чтобы я выиграл, ты должен сдохнуть, а издержки мы спишем на природу. Игра не может остановиться, потому что остановка означает крах долговой пирамиды.',
  en: 'The specificity of "Game A" is its built-in self-destruction principle under conditions of limited resources. Its source code is venture cannibalism and zero-sum rivalrous dynamics: for me to win, you must die, and we\'ll write off the costs to nature. The game cannot stop, because stopping means the collapse of the debt pyramid.',
  ua: 'Специфіка «Гри А» — закладений у неї принцип самознищення за умов обмежених ресурсів. Її вихідний код — венчурний канібалізм та суперницька динаміка з нульовою сумою: щоб я виграв, ти маєш здохнути, а витрати ми спишемо на природу. Гра не може зупинитися, бо зупинка означає крах боргової піраміди.'
},
'gameover.s2.p6': {
  ru: 'Тысячелетиями этот паразитический движок обеспечивал экспансию элит. Но сегодня, будучи помноженным на мощь технологий XXI века в замкнутой колбе нашей планеты, этот код математически гарантирует 100-процентную самоликвидацию вида. «Игра А» оперирует в строгой логике раковой опухоли: она истово верит в бесконечный линейный рост, методично сжирает носителя и торжественно дохнет вместе с ним.',
  en: 'For millennia, this parasitic engine powered the expansion of elites. But today, multiplied by the power of 21st-century technology inside the sealed flask of our planet, this code mathematically guarantees the 100-percent self-liquidation of the species. "Game A" operates in the strict logic of a cancerous tumor: it fervently believes in infinite linear growth, methodically devours its host, and ceremoniously dies alongside it.',
  ua: 'Тисячоліттями цей паразитичний двигун забезпечував експансію еліт. Але сьогодні, будучи помноженим на потужність технологій XXI століття у замкнутій колбі нашої планети, цей код математично гарантує 100-відсоткову самоліквідацію виду. «Гра А» оперує у суворій логіці ракової пухлини: вона щиро вірить у нескінченне лінійне зростання, методично пожирає носія й урочисто здихає разом із ним.'
},
'gameover.s2.p7': {
  ru: 'Чтобы перехватить штурвал самолета, летящего в бетонную стену, нужно препарировать механику управления. Речь не о рептилоидах и тайных ложах (хотя им тоже привет!), а о циничной волновой физике, нейробиологии и искусстве управления массами.',
  en: 'To seize the controls of an airplane flying into a concrete wall, you need to dissect the mechanics of control. This isn\'t about reptilians and secret lodges (though hello to them too!), but about cynical wave physics, neurobiology, and the art of mass manipulation.',
  ua: 'Щоб перехопити штурвал літака, що летить у бетонну стіну, треба препарувати механіку управління. Мова не про рептилоїдів і таємні ложі (хоча їм теж привіт!), а про цинічну хвильову фізику, нейробіологію та мистецтво управління масами.'
},

// Section 3 — Физика рабства
'gameover.s3.title': {
  ru: 'Физика рабства: Гашение волн и уплощение реальности',
  en: 'The Physics of Slavery: Wave Cancellation and the Flattening of Reality',
  ua: 'Фізика рабства: Гасіння хвиль та сплощення реальності'
},
'gameover.s3.p1': {
  ru: 'Фундаментальный принцип удержания масс — римское divide et impera (разделяй и властвуй) — это не заезженный политический лозунг. Это безжалостный закон волновой интерференции.',
  en: 'The fundamental principle of holding the masses — the Roman divide et impera (divide and conquer) — is not a hackneyed political slogan. It\'s a merciless law of wave interference.',
  ua: 'Фундаментальний принцип утримання мас — римське divide et impera (поділяй і владарюй) — це не заїжджений політичний гасло. Це нещадний закон хвильової інтерференції.'
},
'gameover.s3.p2': {
  ru: 'В физике, если фаза и частота волн совпадают, они вступают в резонанс, и их суммарная энергия возводится в квадрат. Экспоненциальный прорыв (когда система обретает несокрушимую созидательную мощь) начинается при коэффициенте когерентности, равном единице. Именно поэтому матрица «Игры А» спроектирована так, чтобы искусственно удерживать этот показатель ниже единицы. Иначе система рухнет за сутки.',
  en: 'In physics, when the phase and frequency of waves align, they enter resonance and their combined energy is squared. Exponential breakthrough (when a system acquires indestructible creative power) begins at a coherence coefficient of one. This is precisely why the "Game A" matrix is engineered to artificially keep this indicator below one. Otherwise the system would collapse within a day.',
  ua: 'У фізиці, якщо фаза і частота хвиль збігаються, вони вступають у резонанс, і їхня сумарна енергія зводиться у квадрат. Експоненційний прорив (коли система набуває нездоланної творчої потужності) починається при коефіцієнті когерентності, рівному одиниці. Саме тому матриця «Гри А» спроєктована так, щоб штучно утримувати цей показник нижче одиниці. Інакше система впаде за добу.'
},
'gameover.s3.p3': {
  ru: 'Поэтому Архитекторы обязаны генерировать перманентное трение. Нас искусственно расщепили на фрагменты, вбрасывая веру в дуализм: дух против материи, мужчины против женщин, левые против правых. Иерархия питается энергией этого социального противофазного гашения — дуализма. Элитам больше не нужно строить физические концлагеря; достаточно сделать так, чтобы мы бесконечно резали друг другу глотки в каютах идущего ко дну «Титаника».',
  en: 'That\'s why the Architects must generate permanent friction. We\'ve been artificially split into fragments through the injection of belief in dualism: spirit vs. matter, men vs. women, left vs. right. Hierarchy feeds on the energy of this social anti-phase cancellation — dualism. Elites no longer need to build physical concentration camps; it\'s enough to ensure we endlessly slit each other\'s throats in the cabins of a sinking Titanic.',
  ua: 'Тому Архітектори зобов\'язані генерувати перманентне тертя. Нас штучно розщепили на фрагменти, вкидаючи віру у дуалізм: дух проти матерії, чоловіки проти жінок, ліві проти правих. Ієрархія живиться енергією цього соціального протифазного гасіння — дуалізму. Елітам більше не потрібно будувати фізичні концтабори; достатньо зробити так, щоб ми нескінченно різали один одному горлянки у каютах «Титаніка», що йде на дно.'
},
'gameover.s3.p4': {
  ru: 'Чем контрастнее дуализм, тем больше трения, тем меньше у вас сил жить и развиваться на выходе. А что может быть контрастнее концепции вечного ада и рая? Правда эмпирически проверить их существование в рамках жизни невозможно, придется принять на веру.',
  en: 'The sharper the dualism, the more friction, the less energy you have to live and grow. And what could be more polarizing than the concept of eternal hell and heaven? Though empirically verifying their existence within one\'s lifetime is impossible — you\'ll just have to take it on faith.',
  ua: 'Чим контрастніший дуалізм, тим більше тертя, тим менше у вас сил жити та розвиватися на виході. А що може бути контрастнішим за концепцію вічного пекла і раю? Щоправда, емпірично перевірити їхнє існування в рамках життя неможливо — доведеться прийняти на віру.'
},
'gameover.s3.p5': {
  ru: 'Сегодня этот механизм доведен до абсолюта Кремниевой долиной. 90% глобальных медиа контролируются шестью холдингами. Алгоритмы соцсетей не ищут истину — они оптимизированы под engagement (вовлеченность) через гнев и поляризацию. Окно человеческого внимания сузилось до 8 секунд. Тот, кто мыслит 15-секундными тиктоками, физиологически утрачивает навык sensemaking (смыслообразования). Он никогда не проследит причинно-следственную связь между своей ипотекой и вырубкой Амазонии. Расщепленное, воюющее само с собой общество безопасно.',
  en: 'Today this mechanism has been brought to its absolute by Silicon Valley. 90% of global media is controlled by six conglomerates. Social media algorithms don\'t seek truth — they\'re optimized for engagement through anger and polarization. The human attention window has narrowed to 8 seconds. Anyone who thinks in 15-second TikToks physiologically loses the skill of sensemaking. They\'ll never trace the causal connection between their mortgage and the deforestation of the Amazon. A fragmented society at war with itself is safe.',
  ua: 'Сьогодні цей механізм доведено до абсолюту Кремнієвою долиною. 90% глобальних медіа контролюються шістьма холдингами. Алгоритми соцмереж не шукають істину — вони оптимізовані під engagement (залученість) через гнів і поляризацію. Вікно людської уваги звузилося до 8 секунд. Той, хто мислить 15-секундними тіктоками, фізіологічно втрачає навичку sensemaking (смислотворення). Він ніколи не простежить причинно-наслідковий зв\'язок між своєю іпотекою та вирубкою Амазонії. Розщеплене суспільство, що воює само із собою, — безпечне.'
},

// Section 4 — Духовный Империализм
'gameover.s4.title': {
  ru: 'Духовный Империализм: Технология Автоматизации Контроля',
  en: 'Spiritual Imperialism: The Technology of Control Automation',
  ua: 'Духовний Імперіалізм: Технологія Автоматизації Контролю'
},
'gameover.s4.p1': {
  ru: 'Чтобы понять природу «Игры А», необходимо вернуться к моменту её институциональной кристаллизации. Традиционная историография учит нас, что Римская империя пала в 476 году н.э. Однако системный анализ институтов и правовых структур указывает на иное: Рим не пал, он трансформировался за счет самой главной технологии эры — Христианства.',
  en: 'To understand the nature of "Game A," we must return to the moment of its institutional crystallization. Traditional historiography teaches us that the Roman Empire fell in 476 AD. However, a systems analysis of institutions and legal structures points to something else: Rome didn\'t fall — it transformed through the era\'s most important technology: Christianity.',
  ua: 'Щоб зрозуміти природу «Гри А», необхідно повернутися до моменту її інституційної кристалізації. Традиційна історіографія вчить нас, що Римська імперія впала у 476 році н.е. Однак системний аналіз інститутів і правових структур вказує на інше: Рим не впав — він трансформувався завдяки найголовнішій технології ери — Християнству.'
},
'gameover.s4.p2': {
  ru: 'Переход от античного Рима к христианскому Риму был стратегическим маневром выживания элит и управленческих структур. Церковь создается для удержания власти и капитала и унаследует функцию, структуру и принципы Имперской власти.',
  en: 'The transition from pagan Rome to Christian Rome was a strategic survival maneuver by elites and administrative structures. The Church was created to retain power and capital, inheriting the function, structure, and principles of Imperial authority.',
  ua: 'Перехід від античного Риму до християнського Риму був стратегічним маневром виживання еліт та управлінських структур. Церква створюється для утримання влади й капіталу та успадковує функцію, структуру і принципи Імперської влади.'
},
'gameover.s4.p3': {
  ru: 'Император Константин, легализовав христианство Эдиктом Милана (313 г.) и созвав Никейский собор (325 г.), фактически национализировал веру, превратив её в инструмент имперской унификации. Отказ принимать христианство приравнивался к государственной измене и карался публичной казнью. К слову, на Киевской Руси любимый многими Ярослав Мудрый, насильственно обрекший свой народ на духовную каторгу и вечное рабство, не далеко ушел.',
  en: 'Emperor Constantine, having legalized Christianity with the Edict of Milan (313 AD) and convened the Council of Nicaea (325 AD), effectively nationalized faith, turning it into an instrument of imperial unification. Refusal to accept Christianity was equated with treason and punished by public execution. Incidentally, in Kyivan Rus, the beloved Yaroslav the Wise, who forcibly condemned his people to spiritual servitude and eternal slavery, didn\'t go much further.',
  ua: 'Імператор Костянтин, легалізувавши християнство Едиктом Мілана (313 р.) та скликавши Нікейський собор (325 р.), фактично націоналізував віру, перетворивши її на інструмент імперської уніфікації. Відмова приймати християнство прирівнювалася до державної зради і каралася публічною стратою. До слова, на Київській Русі улюблений багатьма Ярослав Мудрий, що насильно прирік свій народ на духовну каторгу і вічне рабство, недалеко пішов.'
},
'gameover.s4.p4': {
  ru: 'Главной инновацией Рима стала доктрина «Первородного греха». Юридически это был первый в истории человечества социальный кредит с пожизненным отрицательным балансом. Вы виноваты по факту рождения. Так был запущен движок вечного дефицита собственной ценности. Система произвела перекрут реальности: «Не живи сейчас. Жизнь — это черновик. Смиряйся, терпи, плати десятину (сегодня — налоги и 70% дохода на кредиты), а дивиденды получишь в раю».',
  en: 'Rome\'s greatest innovation was the doctrine of "Original Sin." Legally, it was the first social credit in human history with a lifelong negative balance. You are guilty by the fact of birth. This launched the engine of perpetual self-worth deficit. The system performed a reality inversion: "Don\'t live now. Life is a rough draft. Submit, endure, pay your tithe (today — taxes and 70% of your income on loans), and you\'ll receive your dividends in paradise."',
  ua: 'Головною інновацією Риму стала доктрина «Первородного гріха». Юридично це був перший в історії людства соціальний кредит із довічним негативним балансом. Ви винні за фактом народження. Так було запущено двигун вічного дефіциту власної цінності. Система здійснила перекрут реальності: «Не живи зараз. Життя — це чернетка. Смиряйся, терпи, плати десятину (сьогодні — податки і 70% доходу на кредити), а дивіденди отримаєш у раю».'
},
'gameover.s4.p5': {
  ru: 'Теологическая революция позволила перенести дорогостоящую систему внешнего контроля в плоскость сознания человека. Смена кайданов и надзирателей на чувство вины, выученную неполноценность и страх вечных мучений была настолько эффективной, что стала прототипом для всех общественных структур — от банков до больниц и детских садов. Внедрив тягу к страданиям и отказ от суверенности в духовно-нравственный код человека, он обрел регенеративные свойства — и стал равноценной частью ДНК.',
  en: 'The theological revolution allowed the costly system of external control to be transplanted into the plane of human consciousness. Swapping shackles and overseers for guilt, learned inferiority, and fear of eternal torment was so effective that it became the prototype for all social structures — from banks to hospitals to kindergartens. Having embedded the craving for suffering and the rejection of sovereignty into humanity\'s spiritual-moral code, it acquired regenerative properties — and became an equal part of our DNA.',
  ua: 'Теологічна революція дозволила перенести дороговартісну систему зовнішнього контролю у площину свідомості людини. Заміна кайданів і наглядачів на почуття провини, вивчену неповноцінність та страх вічних мук була настільки ефективною, що стала прототипом для всіх суспільних структур — від банків до лікарень і дитячих садків. Впровадивши потяг до страждань і відмову від суверенності у духовно-моральний код людини, він набув регенеративних властивостей — і став рівноцінною частиною ДНК.'
},
'gameover.s4.p6': {
  ru: 'Массовый террор Инквизиции (до 650 000 сожженных заживо на заре капитализма) не имел отношения к религиозному фанатизму. Это была хладнокровная рыночная зачистка конкурентов. Уничтожая повитух, травниц и женщин-целительниц, система вырубала под корень альтернативу для формирующейся профессиональной, платной патриархальной медицины. Женское тело было объявлено «вратами дьявола», национализировано и превращено в бесплатный станок для бесперебойного производства рабочей силы.',
  en: 'The mass terror of the Inquisition (up to 650,000 burned alive at the dawn of capitalism) had nothing to do with religious fanaticism. It was cold-blooded market elimination of competitors. By destroying midwives, herbalists, and women healers, the system was uprooting the alternative to the emerging professional, paid patriarchal medicine. The female body was declared "the gateway of the devil," nationalized, and turned into a free machine for the uninterrupted production of labor force.',
  ua: 'Масовий терор Інквізиції (до 650 000 спалених живцем на зорі капіталізму) не мав стосунку до релігійного фанатизму. Це була холоднокровна ринкова зачистка конкурентів. Знищуючи повитух, травниць і жінок-цілительок, система вирубувала під корінь альтернативу для професійної, платної патріархальної медицини, що формувалася. Жіноче тіло було оголошено «брамою диявола», націоналізовано й перетворено на безкоштовний верстат для безперебійного виробництва робочої сили.'
},
'gameover.s4.p7': {
  ru: 'В XXI веке этот механизм доведен до алгоритмического абсолюта. Ватикан сменился Кремниевой долиной. ИИ-ленты мета-корпораций не запрограммированы на поиск истины — они оптимизированы под engagement (вовлеченность). Алгоритмы ежедневно скармливают миллиардам людей микродозы возмущения, сталкивая их лбами. Итог? Окно внимания сузилось до 8 секунд — это клиническая когнитивная дистрофия. Расщепленное, воюющее само с собой общество физиологически утратило навык «смыслообразования» (sensemaking). Тот, кто мыслит 15-секундными тиктоками, никогда не проследит причинно-следственную связь между своим кредитом и уничтожением Амазонии. Он больше не субъект политики, он — дата-сет для генерации прибыли.',
  en: 'In the 21st century, this mechanism has been taken to its algorithmic absolute. The Vatican has been replaced by Silicon Valley. AI feeds of meta-corporations aren\'t programmed to seek truth — they\'re optimized for engagement. Algorithms daily feed billions of people microdoses of outrage, slamming them head-to-head. The result? The attention window has narrowed to 8 seconds — this is clinical cognitive dystrophy. A fragmented society at war with itself has physiologically lost the skill of sensemaking. Anyone who thinks in 15-second TikToks will never trace the causal connection between their loan and the destruction of the Amazon. They\'re no longer a political subject — they\'re a dataset for profit generation.',
  ua: 'У XXI столітті цей механізм доведено до алгоритмічного абсолюту. Ватикан змінила Кремнієва долина. ШІ-стрічки мета-корпорацій не запрограмовані на пошук істини — вони оптимізовані під engagement (залученість). Алгоритми щодня згодовують мільярдам людей мікродози обурення, зіштовхуючи їх лобами. Підсумок? Вікно уваги звузилося до 8 секунд — це клінічна когнітивна дистрофія. Розщеплене суспільство, що воює само із собою, фізіологічно втратило навичку «смислотворення» (sensemaking). Той, хто мислить 15-секундними тіктоками, ніколи не простежить причинно-наслідковий зв\'язок між своїм кредитом і знищенням Амазонії. Він більше не суб\'єкт політики — він дата-сет для генерації прибутку.'
},

// Section 5 — Рассинхрон
'gameover.s5.title': {
  ru: 'Рассинхрон: Инверсия жизни и угон времени',
  en: 'Desynchronization: The Inversion of Life and the Hijacking of Time',
  ua: 'Розсинхрон: Інверсія життя та викрадення часу'
},
'gameover.s5.p1': {
  ru: 'Чтобы заставить людей добровольно обслуживать этот конвейер, потребовался величайший темпоральный хак — сдвиг фаз восприятия времени и перекрут реальности.',
  en: 'To make people voluntarily service this conveyor belt required the greatest temporal hack — a phase shift in the perception of time and a reality inversion.',
  ua: 'Щоб змусити людей добровільно обслуговувати цей конвеєр, знадобився найвеличніший темпоральний хак — зсув фаз сприйняття часу та перекрут реальності.'
},
'gameover.s5.p2': {
  ru: 'Доктрина «Первородного греха» стала первым в истории социальным кредитом с пожизненным отрицательным балансом: вы виноваты по факту рождения. Ты — и твои потомки — обязаны выплачивать долг за страдания Христа (не имеющего к этому дьявольскому картелю в рясах никакого отношения).',
  en: 'The doctrine of "Original Sin" became the first social credit in history with a lifelong negative balance: you are guilty by the fact of birth. You — and your descendants — are obliged to pay off the debt for Christ\'s suffering (who had nothing to do with this devilish cartel in cassocks).',
  ua: 'Доктрина «Первородного гріха» стала першим в історії соціальним кредитом із довічним негативним балансом: ви винні за фактом народження. Ти — і твої нащадки — зобов\'язані сплачувати борг за страждання Христа (який не мав жодного стосунку до цього диявольського картелю у рясах).'
},
'gameover.s5.p3': {
  ru: 'Система произвела тотальную инверсию добра и зла, провозгласив: «Не живи сейчас. Жизнь — это грязный черновик. Страдай, терпи, плати налоги, а дивиденды получишь в раю после смерти». Экстатическое удовольствие, телесность и жажду познания объявили источником скверни. Смирение и животный страх инакомыслия вбивались в нас каленым железом.',
  en: 'The system performed a total inversion of good and evil, proclaiming: "Don\'t live now. Life is a filthy rough draft. Suffer, endure, pay taxes, and you\'ll receive your dividends in paradise after death." Ecstatic pleasure, embodiment, and the thirst for knowledge were declared the source of corruption. Humility and the animal fear of dissent were hammered into us with a branding iron.',
  ua: 'Система здійснила тотальну інверсію добра і зла, проголосивши: «Не живи зараз. Життя — це брудна чернетка. Страждай, терпи, плати податки, а дивіденди отримаєш у раю після смерті». Екстатичне задоволення, тілесність і спрагу пізнання оголосили джерелом скверни. Смирення і тваринний страх інакодумства вбивали в нас розпеченим залізом.'
},
'gameover.s5.p4': {
  ru: 'Параллельно нас оторвали от природных резонансных циклов. Вся биосфера функционирует в резонансном спиральном ритме 13 лун по 28 дней. В 1582 году Ватикан пересадил мир на механистичную аритмию 12:60 григорианского календаря. Природную спираль разогнули в плоскую линию дедлайнов. Этот жестокий рассинхрон сломал нашу биологию. Время перестало проживаться — оно начало тратиться.',
  en: 'Simultaneously, we were torn away from natural resonance cycles. The entire biosphere operates in a resonant spiral rhythm of 13 moons of 28 days each. In 1582, the Vatican transplanted the world onto the mechanistic arrhythmia of the 12:60 Gregorian calendar. The natural spiral was straightened into a flat line of deadlines. This brutal desynchronization broke our biology. Time stopped being lived — it started being spent.',
  ua: 'Паралельно нас відірвали від природних резонансних циклів. Вся біосфера функціонує у резонансному спіральному ритмі 13 місяців по 28 днів. У 1582 році Ватикан пересадив світ на механістичну аритмію 12:60 григоріанського календаря. Природну спіраль розігнули у плоску лінію дедлайнів. Цей жорстокий розсинхрон зламав нашу біологію. Час перестав проживатися — він почав витрачатися.'
},

// Section 6 — Эпистемоцид
'gameover.s6.title': {
  ru: 'Эпистемоцид: Костры амнезии и кража технологий',
  en: 'Epistemicide: Bonfires of Amnesia and the Theft of Technologies',
  ua: 'Епістемоцид: Вогнища амнезії та крадіжка технологій'
},
'gameover.s6.p1': {
  ru: 'Удерживать миллиарды в амнезии невозможно без тотальной кастрации прошлого. Ватиканские Апостольские архивы — это 85 километров строго засекреченных стеллажей. Уничтожение 90% дохристианских текстов Европы, пепел Александрийской библиотеки, сожжение кодексов майя — это системное стирание конкурентных онтологий. Это эпистемоцид — убийство знаний.',
  en: 'Keeping billions in amnesia is impossible without total castration of the past. The Vatican Apostolic Archives are 85 kilometers of strictly classified shelves. The destruction of 90% of pre-Christian European texts, the ashes of the Library of Alexandria, the burning of Mayan codices — this is systematic erasure of competing ontologies. This is epistemicide — the murder of knowledge.',
  ua: 'Утримувати мільярди в амнезії неможливо без тотальної кастрації минулого. Ватиканські Апостольські архіви — це 85 кілометрів суворо засекречених стелажів. Знищення 90% дохристиянських текстів Європи, попіл Олександрійської бібліотеки, спалення кодексів майя — це системне стирання конкурентних онтологій. Це епістемоцид — вбивство знань.'
},
'gameover.s6.p2': {
  ru: 'Нам навязали гордыню линейного прогресса: от неандертальца с дубиной прямо к Илону Маску. Но как в эту убогую прямую вписываются египетские гранитные керны эпохи додинастического периода? Спиральные риски на них указывают на скорость подачи сверла в 0.100 дюйма за оборот — это в 500 раз превышает возможности наших лучших алмазных буров с ЧПУ, что математически требует применения высокочастотного ультразвука. А мегалитический гипогей на Мальте возрастом более 5000 лет или Ньюгрейндж в Ирландии, архитектурно выверенные под акустический резонанс строго в 110–111 Гц? Современные ЭЭГ доказывают: эта частота аппаратно отключает речевой центр левого полушария (внутреннего цензора) и переводит мозг в трансовые состояния расширенного сознания.',
  en: 'We\'ve been force-fed the hubris of linear progress: from the Neanderthal with a club straight to Elon Musk. But how do Egyptian granite cores from the pre-dynastic period fit into this pathetic straight line? Spiral grooves on them indicate a drill feed rate of 0.100 inches per revolution — 500 times the capability of our best CNC diamond drills, which mathematically requires high-frequency ultrasound. And the megalithic Hypogeum on Malta, over 5,000 years old, or Newgrange in Ireland, architecturally calibrated for acoustic resonance precisely at 110–111 Hz? Modern EEG studies prove: this frequency hardware-disables the speech center of the left hemisphere (the inner censor) and shifts the brain into trance states of expanded consciousness.',
  ua: 'Нам нав\'язали гординю лінійного прогресу: від неандертальця з палицею прямо до Ілона Маска. Але як у цю вбогу пряму вписуються єгипетські гранітні керни додинастичного періоду? Спіральні риски на них вказують на швидкість подачі свердла у 0.100 дюйма за оберт — це у 500 разів перевищує можливості наших найкращих алмазних бурів з ЧПК, що математично вимагає застосування високочастотного ультразвуку. А мегалітичний гіпогей на Мальті віком понад 5000 років чи Ньюґрейндж в Ірландії, архітектурно вивірені під акустичний резонанс суворо у 110–111 Гц? Сучасні ЕЕГ доводять: ця частота апаратно вимикає мовний центр лівої півкулі (внутрішнього цензора) й переводить мозок у трансові стани розширеної свідомості.'
},
'gameover.s6.p3': {
  ru: 'Цивилизации до нас владели технологиями волнового симбиоза. А Церковь тем временем сжигала ученых за мысль о круглой Земле (сферичность — это объем и цикличность, а управлять рабами можно лишь на плоскости линейного страха).',
  en: 'Civilizations before us possessed wave symbiosis technologies. Meanwhile, the Church burned scientists for the thought of a round Earth (sphericity means volume and cyclicality, and slaves can only be managed on the flat plane of linear fear).',
  ua: 'Цивілізації до нас володіли технологіями хвильового симбіозу. А Церква тим часом спалювала вчених за думку про круглу Землю (сферичність — це об\'єм і циклічність, а керувати рабами можна лише на площині лінійного страху).'
},
'gameover.s6.p4': {
  ru: 'В XX веке корпорации продолжили традицию костров. Когда Никола Тесла подошел к извлечению бесплатной беспроводной энергии из ионосферы, банкир Дж. П. Морган обрубил проект одной фразой: «Куда я здесь поставлю счетчик?». Доступ к изобилию фатален для экономики дефицита. Архивы Теслы изъяло ФБР. Когда Вильгельм Райх в 1950-х успешно лечил онкологию биоэнергетическим путем (оргонные аккумуляторы), американская FDA сгноила его в тюрьме, а тонны его научных трудов официально сожгли в мусоросжигателях Нью-Йорка. Нам не не хватает технологий спасения — у нас просто нет к ним допуска.',
  en: 'In the 20th century, corporations continued the tradition of bonfires. When Nikola Tesla approached extracting free wireless energy from the ionosphere, banker J.P. Morgan killed the project with one phrase: "Where do I put the meter?" Access to abundance is fatal for an economy of scarcity. Tesla\'s archives were seized by the FBI. When Wilhelm Reich in the 1950s successfully treated cancer through bioenergetic means (orgone accumulators), the American FDA rotted him in prison, and tons of his scientific works were officially burned in New York incinerators. We don\'t lack the technologies to save ourselves — we simply don\'t have access to them.',
  ua: 'У XX столітті корпорації продовжили традицію вогнищ. Коли Нікола Тесла наблизився до видобування безкоштовної бездротової енергії з іоносфери, банкір Дж. П. Морган обрубав проєкт однією фразою: «Куди я тут поставлю лічильник?». Доступ до достатку фатальний для економіки дефіциту. Архіви Тесли вилучило ФБР. Коли Вільгельм Райх у 1950-х успішно лікував онкологію біоенергетичним шляхом (оргонні акумулятори), американська FDA згноїла його у в\'язниці, а тонни його наукових праць офіційно спалили у сміттєспалювачах Нью-Йорка. Нам не бракує технологій порятунку — у нас просто немає до них доступу.'
},
'gameover.s6.p5': {
  ru: 'Роял Райф успешно лечил рак направленным частотным резонансом. Его микроскопы разгромила медицинская ассоциация (АМА), а врачей лишили лицензий.',
  en: 'Royal Rife successfully treated cancer with directed frequency resonance. His microscopes were destroyed by the American Medical Association (AMA), and the doctors involved had their licenses revoked.',
  ua: 'Роял Райф успішно лікував рак спрямованим частотним резонансом. Його мікроскопи розгромила медична асоціація (АМА), а лікарів позбавили ліцензій.'
},

// Section 7 — Инженерия покорности
'gameover.s7.title': {
  ru: 'Инженерия покорности: Когнитивная дистрофия',
  en: 'The Engineering of Submission: Cognitive Dystrophy',
  ua: 'Інженерія покірності: Когнітивна дистрофія'
},
'gameover.s7.p1': {
  ru: 'Чтобы конвейер эксплуатации работал, заключенные не должны осознавать собственного рабства. Свобода действий начинается со свободы мысли. Соответственно, необходимо установить контроль не только над доступом к информации (стертая и перевернутая история), но и над мировоззрением, мыслительным процессом, исключив латеральное, критическое, абстрактное и метарациональное мышление. Тем самым отрезав людей от возможности замечать сложные взаимосвязи, задавать неудобные вопросы, выражать себя не общепринятым путем.',
  en: 'For the exploitation conveyor to work, the inmates must not be aware of their own slavery. Freedom of action begins with freedom of thought. Accordingly, control must be established not only over access to information (erased and inverted history), but over worldview and thought processes themselves, eliminating lateral, critical, abstract, and meta-rational thinking. Thereby cutting people off from the ability to notice complex interconnections, ask uncomfortable questions, and express themselves in unconventional ways.',
  ua: 'Щоб конвеєр експлуатації працював, ув\'язнені не повинні усвідомлювати власного рабства. Свобода дій починається зі свободи думки. Відповідно, необхідно встановити контроль не лише над доступом до інформації (стерта й перевернута історія), а й над світоглядом, мисленнєвим процесом, виключивши латеральне, критичне, абстрактне та метараціональне мислення. Тим самим відрізавши людей від можливості помічати складні взаємозв\'язки, ставити незручні питання, виражати себе незагальноприйнятим шляхом.'
},
'gameover.s7.p2': {
  ru: 'Система воспитания и образования заточены под функцию мыслительной кастрации и подавления воли.',
  en: 'The systems of upbringing and education are sharpened for the function of cognitive castration and the suppression of will.',
  ua: 'Системи виховання та освіти заточені під функцію мисленнєвої кастрації та придушення волі.'
},
'gameover.s7.p3': {
  ru: 'Прусская модель образования, импортированная всем миром в XIX веке, создавалась для подготовки лояльных солдат и клерков. Звонки, убивающие концентрацию, дробление картины мира на не связанные предметы, страх ошибки и зависимость от внешней оценки формируют удобных исполнителей с атрофированной волей. Выпускник — это оптимизатор деталей, не способный осознать, что в целом он строит лагерь (по тестам NASA, школа снижает врожденную креативность на 91%). Попытка вырваться — например, перевести ребенка на анскулинг — во многих странах сегодня криминализирована и грозит медицинским киднеппингом. Система прямо заявляет: ваши дети — это залог обеспечения государственного долга.',
  en: 'The Prussian model of education, imported by the entire world in the 19th century, was designed to produce loyal soldiers and clerks. Bells that kill concentration, the fragmentation of worldview into unrelated subjects, fear of error, and dependence on external evaluation shape compliant executors with atrophied will. The graduate is a detail optimizer incapable of realizing that overall they\'re building a camp (according to NASA tests, school reduces innate creativity by 91%). Attempting to break free — for instance, switching a child to unschooling — is criminalized in many countries today and threatens medical kidnapping. The system states outright: your children are collateral for the national debt.',
  ua: 'Пруська модель освіти, імпортована усім світом у XIX столітті, створювалася для підготовки лояльних солдатів і клерків. Дзвінки, що вбивають концентрацію, дроблення картини світу на не пов\'язані предмети, страх помилки та залежність від зовнішньої оцінки формують зручних виконавців з атрофованою волею. Випускник — це оптимізатор деталей, не здатний усвідомити, що загалом він будує табір (за тестами NASA, школа знижує вроджену креативність на 91%). Спроба вирватися — наприклад, перевести дитину на анскулінг — у багатьох країнах сьогодні криміналізована і загрожує медичним кіднепінгом. Система прямо заявляє: ваші діти — це застава забезпечення державного боргу.'
},
'gameover.s7.p4': {
  ru: 'В цифровую эпоху контроль перешел на нейробиологический уровень. Биохимия бьет по когнитивным функциям: от нейротоксинов и микропластика, снижающих популяционный IQ, до массового фторирования воды, ведущего к доказанной кальцификации эпифиза (шишковидной железы — биологического приемника интуиции и регулятора циркадных ритмов).',
  en: 'In the digital era, control has shifted to the neurobiological level. Biochemistry strikes at cognitive functions: from neurotoxins and microplastics that lower population IQ, to mass water fluoridation leading to proven calcification of the pineal gland (the biological receiver of intuition and regulator of circadian rhythms).',
  ua: 'У цифрову епоху контроль перейшов на нейробіологічний рівень. Біохімія б\'є по когнітивних функціях: від нейротоксинів і мікропластику, що знижують популяційний IQ, до масового фторування води, що веде до доведеної кальцифікації епіфіза (шишкоподібної залози — біологічного приймача інтуїції та регулятора циркадних ритмів).'
},
'gameover.s7.p5': {
  ru: 'Для блокировки любой попытки выхода за пределы матрицы система наложила жесточайшее табу на Эрос и измененные состояния сознания. Сексуальная энергия, мощнейший творческий ресурс биологии (понимаемый в древних традициях как инструмент духовной трансформации), была стигматизирована. Фрустрация сублимировалась в агрессию и гиперпотребление — идеальное топливо экономики. Энтеогены (псилоцибин, ДМТ), способные растворять эго-конструкции и депрограммировать навязанные социальные установки, криминализированы. При этом алкоголь и сахар, убивающие миллионы людей, легальны — они анестезируют стресс и возвращают покорного раба на фабрику.',
  en: 'To block any attempt to exit the matrix, the system imposed the harshest taboo on Eros and altered states of consciousness. Sexual energy, biology\'s most powerful creative resource (understood in ancient traditions as an instrument of spiritual transformation), was stigmatized. Frustration was sublimated into aggression and hyperconsumption — the ideal fuel for the economy. Entheogens (psilocybin, DMT), capable of dissolving ego constructs and deprogramming imposed social conditioning, are criminalized. Meanwhile, alcohol and sugar, which kill millions of people, are legal — they anesthetize stress and return the obedient slave to the factory.',
  ua: 'Для блокування будь-якої спроби виходу за межі матриці система наклала найжорстокіше табу на Ерос та змінені стани свідомості. Сексуальна енергія, найпотужніший творчий ресурс біології (що розумівся у давніх традиціях як інструмент духовної трансформації), була стигматизована. Фрустрація сублімувалася в агресію та гіперспоживання — ідеальне паливо економіки. Ентеогени (псилоцибін, ДМТ), здатні розчиняти его-конструкції й депрограмувати нав\'язані соціальні установки, криміналізовані. При цьому алкоголь і цукор, що вбивають мільйони людей, легальні — вони анестезують стрес і повертають покірного раба на фабрику.'
},

// Section 8 — Иллюзия истины
'gameover.s8.title': {
  ru: 'Иллюзия истины и доверия: Пищевая цепь матрицы',
  en: 'The Illusion of Truth and Trust: The Matrix Food Chain',
  ua: 'Ілюзія істини та довіри: Харчовий ланцюг матриці'
},
'gameover.s8.p1': {
  ru: 'Наука, задуманная как метод радикального сомнения, выродилась в картель грантового консенсуса. 75% исследований спонсируют корпорации. Истина сегодня определяется бюджетом заказчика, а 95% «негативных» результатов навсегда ложатся в стол.',
  en: 'Science, conceived as a method of radical doubt, has degenerated into a cartel of grant consensus. 75% of research is funded by corporations. Truth today is determined by the client\'s budget, and 95% of "negative" results are permanently shelved.',
  ua: 'Наука, задумана як метод радикального сумніву, виродилася у картель грантового консенсусу. 75% досліджень спонсорують корпорації. Істина сьогодні визначається бюджетом замовника, а 95% «негативних» результатів назавжди лягають у шухляду.'
},
'gameover.s8.chain': {
  ru: 'Токсичная еда → Хроническая болезнь → Фармацевтическая подписка → Гиперпотребление',
  en: 'Toxic food → Chronic disease → Pharmaceutical subscription → Hyperconsumption',
  ua: 'Токсична їжа → Хронічна хвороба → Фармацевтична підписка → Гіперспоживання'
},
'gameover.s8.p2': {
  ru: 'Сначала транснациональный агропром кормит население субсидированным сахаром, микропластиком и фторидом (доказано кальцифицирующим шишковидную железу — биологический орган интуиции). Когда тело закономерно ломается, вас встречает Фарма — монстр с оборотом в $1,6 трлн. С 1950-х годов медицина не вылечила окончательно ни одной хронической болезни. Зачем резать курицу, несущую золотые яйца? Инсулин, себестоимость которого $3, продается за $300 (наценка 10 000%). Здоровый пациент — это упущенная выгода. Идеальный юнит — хронически больной клиент с пожизненной подпиской на препараты. Маркетологи, считайте LTV с учетом, что каждый 4 житель развитых стран пожизненно пьет хотя бы 1 фарм-препарат. А для трезвого взгляда на ваш набор wellness-БАДОВ проверьте коэффициент усвоения (до 10%) и умножьте на стоимость банки. Вам ведь не дадут доступ к капельницам, единственному эффективному способу заявленные витамины и минералы впитать?',
  en: 'First, transnational agribusiness feeds the population subsidized sugar, microplastics, and fluoride (proven to calcify the pineal gland — the biological organ of intuition). When the body predictably breaks down, Pharma greets you — a monster with $1.6 trillion in revenue. Since the 1950s, medicine has not definitively cured a single chronic disease. Why slaughter the goose that lays golden eggs? Insulin, costing $3 to produce, sells for $300 (a 10,000% markup). A healthy patient is lost revenue. The ideal unit is a chronically ill client with a lifetime drug subscription. Marketers, calculate your LTV given that every 4th resident of developed countries is on at least one pharma drug for life. And for a sober look at your wellness supplement collection, check the absorption coefficient (up to 10%) and multiply by the price of the jar. After all, they won\'t give you access to IV drips — the only effective way to actually absorb those advertised vitamins and minerals, will they?',
  ua: 'Спочатку транснаціональний агропром годує населення субсидованим цукром, мікропластиком та фторидом (доведено, що він кальцифікує шишкоподібну залозу — біологічний орган інтуїції). Коли тіло закономірно ламається, вас зустрічає Фарма — монстр з оборотом у $1,6 трлн. З 1950-х років медицина не вилікувала остаточно жодної хронічної хвороби. Навіщо різати курку, що несе золоті яйця? Інсулін, собівартість якого $3, продається за $300 (націнка 10 000%). Здоровий пацієнт — це втрачена вигода. Ідеальний юніт — хронічно хворий клієнт із довічною підпискою на препарати. Маркетологи, рахуйте LTV з урахуванням того, що кожен 4-й мешканець розвинених країн довічно п\'є хоча б 1 фарм-препарат. А для тверезого погляду на ваш набір wellness-БАДів перевірте коефіцієнт засвоєння (до 10%) і помножте на вартість банки. Вам же не дадуть доступ до крапельниць — єдиного ефективного способу заявлені вітаміни та мінерали всотати?'
},
'gameover.s8.p3': {
  ru: 'Даже индустрия психологии (на $4,2 трлн) приватизирована для адаптации к рабству. Ваш праведный гнев на тошную бессмысленность работы по 60 часов в неделю немедленно медикализируется. Вместо бунта коучи продают вам mindfulness, чтобы вы могли продуктивнее дышать перед тем, как снова сесть за весла на корпоративной галере.',
  en: 'Even the psychology industry ($4.2 trillion) has been privatized to facilitate adaptation to slavery. Your righteous anger at the nauseating meaninglessness of working 60 hours a week is immediately medicalized. Instead of rebellion, coaches sell you mindfulness so you can breathe more productively before sitting back down at the oars on the corporate galley.',
  ua: 'Навіть індустрія психології (на $4,2 трлн) приватизована для адаптації до рабства. Ваш праведний гнів на нудотну безглуздість роботи по 60 годин на тиждень негайно медикалізується. Замість бунту коучі продають вам mindfulness, щоб ви могли продуктивніше дихати перед тим, як знову сісти за весла на корпоративній галері.'
},
'gameover.s8.p4': {
  ru: 'А чтобы отмыть триллионы и репутацию, элиты создали институт современной «благотворительности». Экология стала элитной прачечной: корпорации выкачивают из государств $7 трлн субсидий в год на ископаемое топливо, убивая пресную воду, а их владельцы переводят активы в безналоговые трасты и помпезно жертвуют 0,1% на спасение редких лягушек. «Зеленый капитализм» — это издевательский оксюморон, предлагающий тушить пожар бензином, заставляя нас покупать те же товары, но с наценкой «эко».',
  en: 'And to launder trillions and their reputation, elites created the institution of modern "philanthropy." Ecology became an elite laundromat: corporations extract $7 trillion in annual fossil fuel subsidies from governments, killing freshwater, while their owners transfer assets into tax-free trusts and pompously donate 0.1% to save rare frogs. "Green capitalism" is a mocking oxymoron proposing to extinguish a fire with gasoline, forcing us to buy the same products but with an "eco" markup.',
  ua: 'А щоб відмити трильйони та репутацію, еліти створили інститут сучасної «благодійності». Екологія стала елітною пральнею: корпорації викачують з держав $7 трлн субсидій на рік на викопне паливо, вбиваючи прісну воду, а їхні власники переводять активи у безподаткові трасти й помпезно жертвують 0,1% на порятунок рідкісних жаб. «Зелений капіталізм» — це знущальний оксиморон, що пропонує гасити пожежу бензином, змушуючи нас купувати ті самі товари, але з націнкою «еко».'
},

// Section 9 — Кража Эроса
'gameover.s9.title': {
  ru: 'Кража Эроса и зачистка смыслов: Иммунный ответ Системы',
  en: 'The Theft of Eros and the Purging of Meaning: The System\'s Immune Response',
  ua: 'Крадіжка Еросу та зачистка смислів: Імунна відповідь Системи'
},
'gameover.s9.p1': {
  ru: 'Для полного контроля система наложила жесточайшее табу на нашу жизненную силу. Сексуальная энергия (Эрос) тотально демонизирована. Не из-за пуританской морали. Эрос — это мощнейшая созидательная энергия биологии. Человеком, соединенным со своей дикой, экстатической телесностью, физически невозможно управлять.',
  en: 'For total control, the system imposed the harshest taboo on our life force. Sexual energy (Eros) has been totally demonized. Not because of puritanical morality. Eros is biology\'s most powerful creative energy. A person connected to their wild, ecstatic embodiment is physically impossible to control.',
  ua: 'Для повного контролю система наклала найжорстокіше табу на нашу життєву силу. Сексуальна енергія (Ерос) тотально демонізована. Не через пуританську мораль. Ерос — це найпотужніша творча енергія біології. Людиною, з\'єднаною зі своєю дикою, екстатичною тілесністю, фізично неможливо керувати.'
},
'gameover.s9.p2': {
  ru: 'Система блокирует этот поток, и подавленная сексуальная энергия (фрустрация) перенаправляется в нужные русла: в разжигание агрессии, в племенные войны, в неконтролируемое обжирание и бесконечный шопоголизм. Война — это сублимированная сексуальная фрустрация масс, мастерски конвертируемая в прибыль ВПК.',
  en: 'The system blocks this flow, and suppressed sexual energy (frustration) is redirected into useful channels: into stoking aggression, tribal wars, uncontrolled binge eating, and endless shopaholism. War is the sublimated sexual frustration of the masses, masterfully converted into profits for the military-industrial complex.',
  ua: 'Система блокує цей потік, і придушена сексуальна енергія (фрустрація) перенаправляється у потрібні русла: у розпалювання агресії, у племінні війни, у неконтрольоване обжирання та нескінченний шопоголізм. Війна — це сублімована сексуальна фрустрація мас, майстерно конвертована у прибуток ВПК.'
},
'gameover.s9.p3': {
  ru: 'По той же причине система ведет беспощадную войну с измененными состояниями сознания. Алкоголь и сахар, убивающие миллионы, легальны — они анестезируют раба и возвращают его к станку. Энтеогены (псилоцибин, ДМТ) строго криминализированы, потому что они аппаратно растворяют эго и деинсталлируют матрицу навязанного социального программирования. Война с психоделиками — это панический страх системы потерять монополию на реальность.',
  en: 'For the same reason, the system wages a merciless war on altered states of consciousness. Alcohol and sugar, which kill millions, are legal — they anesthetize the slave and return him to the machine. Entheogens (psilocybin, DMT) are strictly criminalized because they hardware-dissolve the ego and uninstall the matrix of imposed social programming. The war on psychedelics is the system\'s panic fear of losing its monopoly on reality.',
  ua: 'З тієї ж причини система веде нещадну війну зі зміненими станами свідомості. Алкоголь і цукор, що вбивають мільйони, легальні — вони анестезують раба й повертають його до верстата. Ентеогени (псилоцибін, ДМТ) суворо криміналізовані, тому що вони апаратно розчиняють его й деінсталюють матрицю нав\'язаного соціального програмування. Війна з психоделіками — це панічний страх системи втратити монополію на реальність.'
},
'gameover.s9.p4': {
  ru: 'Любые лидеры, обладавшие достаточным влиянием, чтобы транслировать в массы альтернативные частоты свободы и когерентности, сталкивались с жесточайшим иммунным ответом матрицы — от дискредитации до физической ликвидации. Джон Леннон был застрелен «фанатиком» (слышавшим «голоса в голове») в самый разгар антивоенного LSD-движения, срывавшего американскую мясорубку во Вьетнаме. Джим Моррисон, взламывавший социальные табу, закончил жизнь в парижской ванне при невыясненных обстоятельствах. Майкл Джексон — артист, обладавший беспрецедентным мировым влиянием, бросивший вызов музыкальному картелю (выкупив каталог ATV) и открыто говоривший о манипуляциях медиа, — был методично растоптан прессой, загнан в угол и уничтожен связкой продажной фармакологии и корпоративных интересов.',
  en: 'Any leaders who possessed sufficient influence to broadcast alternative frequencies of freedom and coherence to the masses faced the harshest immune response of the matrix — from discreditation to physical liquidation. John Lennon was shot by a "fanatic" (who heard "voices in his head") at the very height of the anti-war LSD movement that was disrupting the American meat grinder in Vietnam. Jim Morrison, who hacked social taboos, ended his life in a Paris bathtub under unexplained circumstances. Michael Jackson — an artist who wielded unprecedented global influence, challenged the music cartel (by acquiring the ATV catalog), and openly spoke about media manipulation — was methodically trampled by the press, cornered, and destroyed by a nexus of corrupt pharmacology and corporate interests.',
  ua: 'Будь-які лідери, що володіли достатнім впливом, щоб транслювати в маси альтернативні частоти свободи й когерентності, стикалися з найжорстокішою імунною відповіддю матриці — від дискредитації до фізичної ліквідації. Джон Леннон був застрелений «фанатиком» (що чув «голоси у голові») у самий розпал антивоєнного LSD-руху, що зривав американську м\'ясорубку у В\'єтнамі. Джим Моррісон, що зламував соціальні табу, закінчив життя у паризькій ванні за нез\'ясованих обставин. Майкл Джексон — артист, що володів безпрецедентним світовим впливом, кинув виклик музичному картелю (викупивши каталог ATV) і відкрито говорив про маніпуляції медіа, — був методично розтоптаний пресою, загнаний у кут і знищений зв\'язкою продажної фармакології та корпоративних інтересів.'
},
'gameover.s9.p5': {
  ru: 'Система не прощает тех, кто пытается переписать ее алгоритм и увести паству за пределы загона.',
  en: 'The system does not forgive those who attempt to rewrite its algorithm and lead the flock beyond the enclosure.',
  ua: 'Система не прощає тих, хто намагається переписати її алгоритм і вивести паству за межі загону.'
},

// Section 10 — Протокол Выхода
'gameover.s10.title': {
  ru: 'Протокол Выхода',
  en: 'The Exit Protocol',
  ua: 'Протокол Виходу'
},
'gameover.s10.p1': {
  ru: 'Снимем розовые очки: шансы человечества выжить в логике «Игры А» строго равны нулю. Нельзя выиграть у казино, играя по его алгоритмам. Механизм, настроенный на бесконечное извлечение выгоды из конечного субстрата, остановится только тогда, когда сожрет последнюю живую клетку на планете.',
  en: 'Let\'s take off the rose-colored glasses: humanity\'s chances of surviving within the logic of "Game A" are strictly zero. You can\'t beat the casino playing by its algorithms. A mechanism tuned for infinite extraction of profit from a finite substrate will only stop when it devours the last living cell on the planet.',
  ua: 'Знімімо рожеві окуляри: шанси людства вижити у логіці «Гри А» суворо дорівнюють нулю. Не можна виграти у казино, граючи за його алгоритмами. Механізм, налаштований на нескінченне витягування вигоди з кінцевого субстрату, зупиниться лише тоді, коли пожере останню живу клітину на планеті.'
},
'gameover.s10.p2': {
  ru: 'Ошибка всех революций — попытка победить Рим методами Рима: через борьбу, митинги и кровь. Борьба (трение) — это родное топливо системы. Любой протест лишь питает эгрегор Матрицы. Единственный способ обрушить систему — перестать ее питать. Сделать ее нерелевантной, совершив фазовый переход из парадигмы доминирования в «Игру Б» (регенеративную архитектуру симбиоза omni-win-win).',
  en: 'The mistake of all revolutions is the attempt to defeat Rome with Rome\'s methods: through struggle, rallies, and blood. Struggle (friction) is the system\'s native fuel. Any protest only feeds the Matrix\'s egregore. The only way to collapse the system is to stop feeding it. To make it irrelevant by performing a phase transition from the dominance paradigm into "Game B" (the regenerative architecture of omni-win-win symbiosis).',
  ua: 'Помилка всіх революцій — спроба перемогти Рим методами Риму: через боротьбу, мітинги та кров. Боротьба (тертя) — це рідне паливо системи. Будь-який протест лише живить егрегор Матриці. Єдиний спосіб обвалити систему — перестати її живити. Зробити її нерелевантною, здійснивши фазовий перехід з парадигми домінування у «Гру Б» (регенеративну архітектуру симбіозу omni-win-win).'
},
'gameover.s10.q': {
  ru: 'Как активировать этот протокол лично?',
  en: 'How do you activate this protocol personally?',
  ua: 'Як активувати цей протокол особисто?'
},
'gameover.s10.pt1.title': {
  ru: 'Когнитивный суверенитет',
  en: 'Cognitive Sovereignty',
  ua: 'Когнітивний суверенітет'
},
'gameover.s10.pt1.desc': {
  ru: 'Прекратите быть бесплатной батарейкой. Заберите свое внимание у машин поляризации. Информационная анорексия и отказ питать Игру А потреблением контентного, пищевого и химического мусора — это ваш первый политический акт саботажа. Откройте свой инстаграм. Удалите всех, к кому вы не испытываете искренней любви или же кто не питает ваше вдохновение и творчество. Все, от чего вы чувствуете себя «недо-» выкачивает из вас жизнь.',
  en: 'Stop being a free battery. Reclaim your attention from the polarization machines. Informational anorexia and refusing to feed Game A through consumption of content, food, and chemical garbage — this is your first political act of sabotage. Open your Instagram. Delete everyone toward whom you don\'t feel genuine love or who doesn\'t nourish your inspiration and creativity. Everything that makes you feel "not enough" is draining the life out of you.',
  ua: 'Перестаньте бути безкоштовною батарейкою. Заберіть свою увагу у машин поляризації. Інформаційна анорексія та відмова живити Гру А споживанням контентного, харчового та хімічного сміття — це ваш перший політичний акт саботажу. Відкрийте свій інстаграм. Видаліть усіх, до кого ви не відчуваєте щирої любові або хто не живить ваше натхнення і творчість. Усе, від чого ви почуваєтеся «недо-» — викачує з вас життя.'
},
'gameover.s10.pt2.title': {
  ru: 'Возврат Эроса',
  en: 'The Return of Eros',
  ua: 'Повернення Еросу'
},
'gameover.s10.pt2.desc': {
  ru: 'Сексуальная энергия (Либидо) — это не индустрия порнографии, это базовая, самая мощная созидательная сила биологии. Древние традиции использовали ее для трансформации сознания. Церковь демонизировала Эрос, потому что человеком, соединенным со своей дикой, экстатической жизненной силой, физически невозможно управлять. Его фрустрацию больше нельзя сублимировать в шопоголизм и депрессию. Разблокировка сакральной телесности — это возврат к источнику энергии, не облагаемому налогами.',
  en: 'Sexual energy (Libido) is not the pornography industry — it\'s the fundamental, most powerful creative force of biology. Ancient traditions used it for the transformation of consciousness. The Church demonized Eros because a person connected to their wild, ecstatic life force is physically impossible to control. Their frustration can no longer be sublimated into shopaholism and depression. Unlocking sacred embodiment is a return to an energy source that cannot be taxed.',
  ua: 'Сексуальна енергія (Лібідо) — це не індустрія порнографії, це базова, найпотужніша творча сила біології. Давні традиції використовували її для трансформації свідомості. Церква демонізувала Ерос, тому що людиною, з\'єднаною зі своєю дикою, екстатичною життєвою силою, фізично неможливо керувати. Її фрустрацію більше не можна сублімувати у шопоголізм і депресію. Розблокування сакральної тілесності — це повернення до джерела енергії, що не оподатковується.'
},
'gameover.s10.pt3.title': {
  ru: 'Расширение сознания и депрограммирование',
  en: 'Consciousness Expansion and Deprogramming',
  ua: 'Розширення свідомості та депрограмування'
},
'gameover.s10.pt3.desc': {
  ru: 'Система легализовала алкоголь и сахар, убивающие миллионы, потому что они анестезируют раба и возвращают его к станку. Но она объявила беспощадную войну энтеогенам (псилоцибину, аяуаске, ДМТ). Почему? Потому что психоделики аппаратно растворяют эго и смывают навязанное социальное кондиционирование. Они обнажают голограмму матрицы. Война с измененными состояниями сознания — это не забота о здоровье, это панический страх системы потерять монополию на реальность.',
  en: 'The system legalized alcohol and sugar, which kill millions, because they anesthetize the slave and return him to the machine. But it has declared merciless war on entheogens (psilocybin, ayahuasca, DMT). Why? Because psychedelics hardware-dissolve the ego and wash away imposed social conditioning. They expose the matrix\'s hologram. The war on altered states of consciousness is not about health concerns — it\'s the system\'s panic fear of losing its monopoly on reality.',
  ua: 'Система легалізувала алкоголь і цукор, що вбивають мільйони, тому що вони анестезують раба й повертають його до верстата. Але вона оголосила нещадну війну ентеогенам (псилоцибіну, аяуасці, ДМТ). Чому? Тому що психоделіки апаратно розчиняють его й змивають нав\'язане соціальне кондиціонування. Вони оголюють голограму матриці. Війна зі зміненими станами свідомості — це не турбота про здоров\'я, це панічний страх системи втратити монополію на реальність.'
},
'gameover.s10.pt4.title': {
  ru: 'Деконструкция Эго',
  en: 'Ego Deconstruction',
  ua: 'Деконструкція Его'
},
'gameover.s10.pt4.desc': {
  ru: 'Запомните: быть нормальным и хорошо адаптированным в глубоко больном обществе — значит быть смертельно больным. Иллюзия отделенности (эго) — это вирус «Игры А». Откажитесь от конкуренции. Опирайтесь на число Данбара (до 150 человек). Формируйте малые группы, основанные на глубоком резонансе и доверии. Десяток синхронизированных людей обладает мощностью лазера, прожигающего ткань реальности. Миллион разделенных потребителей генерирует лишь белый шум и углекислый газ.',
  en: 'Remember: to be normal and well-adjusted in a profoundly sick society is to be terminally ill. The illusion of separateness (ego) is the virus of "Game A." Reject competition. Lean on Dunbar\'s number (up to 150 people). Form small groups based on deep resonance and trust. A dozen synchronized people possess the power of a laser burning through the fabric of reality. A million divided consumers generate nothing but white noise and carbon dioxide.',
  ua: 'Запам\'ятайте: бути нормальним і добре адаптованим у глибоко хворому суспільстві — означає бути смертельно хворим. Ілюзія відокремленості (его) — це вірус «Гри А». Відмовтеся від конкуренції. Спирайтеся на число Данбара (до 150 осіб). Формуйте малі групи, засновані на глибокому резонансі та довірі. Десяток синхронізованих людей володіє потужністю лазера, що пропалює тканину реальності. Мільйон розділених споживачів генерує лише білий шум та вуглекислий газ.'
},
'gameover.s10.pt5.title': {
  ru: 'Резонанс вместо подавления',
  en: 'Resonance Instead of Suppression',
  ua: 'Резонанс замість придушення'
},
'gameover.s10.pt5.desc': {
  ru: 'Вся патриархальная система оперирует базовой физикой трения. Брак, корпорация, государство в рамках старой модели — это всегда вертикаль, где есть субъект (кто подавляет) и объект (кого подавляют). Иерархия расходует колоссальные объемы энергии просто на то, чтобы удерживать нижние слои в подчинении и гасить их волю. Выход из «Игры А» требует полной, безжалостной перепрошивки сознания. Это означает отказ от любимого вопроса человечества: «Кто здесь главный?». На смену механике подавления должна прийти физика резонанса.',
  en: 'The entire patriarchal system operates on the basic physics of friction. Marriage, corporation, state within the old model — it\'s always a vertical hierarchy with a subject (who suppresses) and an object (who is suppressed). Hierarchy expends colossal volumes of energy simply to keep the lower layers in submission and extinguish their will. Exiting "Game A" requires a total, ruthless reprogramming of consciousness. This means abandoning humanity\'s favorite question: "Who\'s in charge here?" The mechanics of suppression must be replaced by the physics of resonance.',
  ua: 'Вся патріархальна система оперує базовою фізикою тертя. Шлюб, корпорація, держава в рамках старої моделі — це завжди вертикаль, де є суб\'єкт (хто придушує) і об\'єкт (кого придушують). Ієрархія витрачає колосальні обсяги енергії просто на те, щоб утримувати нижні шари у підпорядкуванні та гасити їхню волю. Вихід з «Гри А» вимагає повної, нещадної перепрошивки свідомості. Це означає відмову від улюбленого питання людства: «Хто тут головний?». На зміну механіці придушення має прийти фізика резонансу.'
},
'gameover.s10.pt5.p2': {
  ru: 'Резонанс в семье и обществе — это состояние, при котором системы не тратят энергию на борьбу за контроль. Если вы находитесь в резонансе, ваши частоты совпадают, и амплитуда ваших возможностей возводится в квадрат. В резонансной модели семьи партнеры отказываются от контракта на взаимное обслуживание быта и неврозов. Власть децентрализуется. Вы больше не меряетесь эго, вы создаете симбиотическую среду, где успех одного автоматически усиливает другого (omni-win-win). Это требует чудовищной по меркам старого мира смелости: отказаться от доспехов, снять внутренние защиты и позволить себе быть уязвимым, потому что только открытая система способна резонировать.',
  en: 'Resonance in family and society is a state where systems don\'t expend energy fighting for control. If you\'re in resonance, your frequencies align, and the amplitude of your possibilities is squared. In the resonance model of family, partners abandon the contract of mutual servicing of domestic life and neuroses. Power is decentralized. You no longer measure egos — you create a symbiotic environment where one person\'s success automatically amplifies the other (omni-win-win). This requires a courage monstrous by old-world standards: to shed the armor, lower your inner defenses, and allow yourself to be vulnerable, because only an open system is capable of resonance.',
  ua: 'Резонанс у сім\'ї та суспільстві — це стан, за якого системи не витрачають енергію на боротьбу за контроль. Якщо ви перебуваєте у резонансі, ваші частоти збігаються, і амплітуда ваших можливостей зводиться у квадрат. У резонансній моделі сім\'ї партнери відмовляються від контракту на взаємне обслуговування побуту та неврозів. Влада децентралізується. Ви більше не міряєтесь его — ви створюєте симбіотичне середовище, де успіх одного автоматично підсилює іншого (omni-win-win). Це вимагає жахливої за мірками старого світу сміливості: відкинути обладунки, зняти внутрішні захисти й дозволити собі бути вразливим, бо лише відкрита система здатна резонувати.'
},

// Section 11 — Матриархат
'gameover.s11.title': {
  ru: 'Матриархат',
  en: 'Matriarchy',
  ua: 'Матріархат'
},
'gameover.s11.p1': {
  ru: 'Да, именно так. Давайте будем циничны: 10 000 лет абсолютного мужского менеджмента, построенного на экспансии, захвате и доминировании, привели цивилизацию к экзистенциальному тупику. Мужская модель блестяще справилась с постройкой небоскребов и баллистических ракет, но провалила главный биологический KPI любого вида — накопление, подавление и доминирование. Количество ценой жизни.',
  en: 'Yes, exactly. Let\'s be cynical: 10,000 years of absolute male management built on expansion, conquest, and domination have led civilization to an existential dead end. The male model brilliantly handled building skyscrapers and ballistic missiles, but it failed the primary biological KPI of any species — accumulation, suppression, and domination. Quantity at the cost of life.',
  ua: 'Так, саме так. Давайте будемо цинічними: 10 000 років абсолютного чоловічого менеджменту, побудованого на експансії, захопленні та домінуванні, привели цивілізацію до екзистенційного тупика. Чоловіча модель блискуче впоралася з будівництвом хмарочосів і балістичних ракет, але провалила головний біологічний KPI будь-якого виду — накопичення, придушення та домінування. Кількість ціною життя.'
},
'gameover.s11.p2': {
  ru: 'Природа женской власти кардинально иная. Ее эволюционная задача — не узурпация, не захват соседнего водопоя и не выстраивание вертикали, а культивация.',
  en: 'The nature of female power is fundamentally different. Its evolutionary purpose is not usurpation, not the seizure of a neighboring waterhole, not the construction of a vertical hierarchy, but cultivation.',
  ua: 'Природа жіночої влади кардинально інша. Її еволюційне завдання — не узурпація, не захоплення сусіднього водопою і не вибудовування вертикалі, а культивація.'
},
'gameover.s11.p3': {
  ru: 'Если посмотреть на наших ближайших генетических родственников — бонобо — мы увидим абсолютно матриархальное общество. У них физически отсутствует концепция межгрупповых войн, убийств сородичей и смертельной борьбы за статус. Они гасят конфликты через эмпатию, социальные связи и сексуальную игру.',
  en: 'If we look at our closest genetic relatives — bonobos — we see an entirely matriarchal society. They physically lack the concept of intergroup wars, killing of kin, and lethal competition for status. They resolve conflicts through empathy, social bonds, and sexual play.',
  ua: 'Якщо подивитися на наших найближчих генетичних родичів — бонобо — ми побачимо абсолютно матріархальне суспільство. У них фізично відсутня концепція міжгрупових війн, вбивств родичів та смертельної боротьби за статус. Вони гасять конфлікти через емпатію, соціальні зв\'язки та сексуальну гру.'
},
'gameover.s11.p4': {
  ru: 'Переход к матриархальной модели в «Игре Б» — это не про то, чтобы просто посадить женщин в кресла CEO, заставив их играть по мужским правилам корпоративного каннибализма. Это полный демонтаж самих кресел. Это смена парадигмы с «покорения природы» на интеграцию в нее. Расширение сознания начинается там, где заканчивается животная потребность доминировать, и начинается взрослая способность созидать.',
  en: 'The transition to a matriarchal model in "Game B" is not about simply placing women in CEO chairs and forcing them to play by the male rules of corporate cannibalism. It\'s the complete dismantling of the chairs themselves. It\'s a paradigm shift from "conquering nature" to integrating into it. The expansion of consciousness begins where the animal need to dominate ends, and the mature capacity to create begins.',
  ua: 'Перехід до матріархальної моделі у «Грі Б» — це не про те, щоб просто посадити жінок у крісла CEO, змусивши їх грати за чоловічими правилами корпоративного канібалізму. Це повний демонтаж самих крісел. Це зміна парадигми з «підкорення природи» на інтеграцію в неї. Розширення свідомості починається там, де закінчується тваринна потреба домінувати, і починається доросла здатність творити.'
},

// Section 12 — ИТОГ
'gameover.s12.title': {
  ru: 'ИТОГ',
  en: 'THE BOTTOM LINE',
  ua: 'ПІДСУМОК'
},
'gameover.s12.p1': {
  ru: 'Машина старого мира догорает, тушить пожар или бороться с ним бессмысленно. Времени у нас немного, играть в приличие или забвение не выгодно никому.',
  en: 'The old world\'s machine is burning out; extinguishing the fire or fighting it is pointless. We don\'t have much time, and playing at decorum or oblivion benefits no one.',
  ua: 'Машина старого світу догоряє, гасити пожежу чи боротися з нею безглуздо. Часу у нас небагато, грати у пристойність чи забуття не вигідно нікому.'
},
'gameover.s12.p2': {
  ru: 'Играть по правилам «нормальных» и вписываться в правила Игры А лично мы с Владом пробовали, — нам не понравилось, no thanks. Поэтому последние два года мы отреклись от репутации социально понятных и занялись исследованиями, экспериментами и испытаниями на прочность модели Б. Симбиоз. Резонанс. Игра. Творчество. Святость Сексуальности.',
  en: 'Playing by the rules of the "normal" and fitting into Game A\'s framework — Vlad and I personally tried that. We didn\'t like it, no thanks. So for the past two years, we\'ve renounced the reputation of being socially comprehensible and devoted ourselves to research, experiments, and stress-testing Model B. Symbiosis. Resonance. Play. Creativity. The Sanctity of Sexuality.',
  ua: 'Грати за правилами «нормальних» і вписуватися у правила Гри А особисто ми з Владом пробували — нам не сподобалось, no thanks. Тому останні два роки ми зреклися репутації соціально зрозумілих і зайнялися дослідженнями, експериментами та випробуваннями на міцність моделі Б. Симбіоз. Резонанс. Гра. Творчість. Святість Сексуальності.'
},
'gameover.s12.p3': {
  ru: 'У нас получилось. Теперь мы строим инфраструктуру под новый мир — изобилия, творчества, кайфа. Мир Богов. В котором не пресно-по-прилично-духовному-благостно. А в котором весело и о+уенно.',
  en: 'We did it. Now we\'re building the infrastructure for a new world — of abundance, creativity, and bliss. A World of Gods. One that\'s not blandly-politely-spiritually-serene. But one where it\'s fun and f+cking amazing.',
  ua: 'У нас вийшло. Тепер ми будуємо інфраструктуру під новий світ — достатку, творчості, кайфу. Світ Богів. У якому не прісно-по-пристойному-духовно-благісно. А в якому весело і о+уєнно.'
},
'gameover.s12.p4': {
  ru: 'Открываем 49 мест для первой ноды резонансной сети.',
  en: 'We\'re opening 49 spots for the first node of the resonance network.',
  ua: 'Відкриваємо 49 місць для першої ноди резонансної мережі.'
},
'gameover.s12.p5': {
  ru: 'МЫ. БОГИ.',
  en: 'WE. GODS.',
  ua: 'МИ. БОГИ.'
},

// ─── TECHNOLOGIES PAGE ───
'technologies.hero.subtitle': {
  ru: 'Технологии 5D сознания',
  en: '5D Consciousness Technologies',
  ua: 'Технології 5D свідомості'
},
'technologies.hero.title': {
  ru: 'Holy Tech',
  en: 'Holy Tech',
  ua: 'Holy Tech'
},
'technologies.hero.tagline': {
  ru: 'Егрегор. Вайбономика. Цифровые инструменты трансформации.',
  en: 'Egregore. Vibeonomics. Digital tools for transformation.',
  ua: 'Егрегор. Вайбономіка. Цифрові інструменти трансформації.'
},

// Consciousness — Backend of Reality
'technologies.consciousness.label': {
  ru: 'Сознание',
  en: 'Consciousness',
  ua: 'Свідомість'
},
'technologies.consciousness.title': {
  ru: 'Бэкенд Реальности',
  en: 'Backend of Reality',
  ua: 'Бекенд Реальності'
},
'technologies.consciousness.p1': {
  ru: 'Сознание — не побочный продукт мозга. Это фундаментальное поле, из которого возникает всё остальное — материя, информация, время. Тысячелетиями это знали мистики. Сегодня это подтверждает квантовая физика. Завтра это станет инженерной дисциплиной.',
  en: 'Consciousness is not a byproduct of the brain. It is the fundamental field from which everything else arises — matter, information, time. Mystics have known this for millennia. Today quantum physics confirms it. Tomorrow it will become an engineering discipline.',
  ua: 'Свідомість — не побічний продукт мозку. Це фундаментальне поле, з якого виникає все інше — матерія, інформація, час. Тисячоліттями це знали містики. Сьогодні це підтверджує квантова фізика. Завтра це стане інженерною дисципліною.'
},
'technologies.consciousness.p2': {
  ru: 'Мы не ждём завтра. Мы строим сейчас.',
  en: 'We don\'t wait for tomorrow. We build now.',
  ua: 'Ми не чекаємо на завтра. Ми будуємо зараз.'
},
'technologies.consciousness.p3': {
  ru: 'Образование, сообщество, инструменты и досуг — наш фокус. Образно говоря — мы обновляем фреймворк майндсета, подключаем к атомной электростанции которая майнит вдохновение и расширяет возможности разума, создаем новую социальную модель с интегрирацией ИИ, блокчейни и других высоких технологий для гармоничного взаимодействия и устойчивого развития в новой парадигме.',
  en: 'Education, community, tools, and leisure — our focus. In essence — we\'re upgrading the mindset framework, connecting to a nuclear power plant that mines inspiration and expands the mind\'s capabilities, creating a new social model integrating AI, blockchain, and other high technologies for harmonious interaction and sustainable development in a new paradigm.',
  ua: 'Освіта, спільнота, інструменти та дозвілля — наш фокус. Образно кажучи — ми оновлюємо фреймворк майндсету, підключаємо до атомної електростанції яка майнить натхнення та розширює можливості розуму, створюємо нову соціальну модель з інтеграцією ШІ, блокчейну та інших високих технологій для гармонійної взаємодії та сталого розвитку в новій парадигмі.'
},

// Egregore
'technologies.egregore.label': {
  ru: 'Егрегор',
  en: 'Egregore',
  ua: 'Егрегор'
},
'technologies.egregore.title': {
  ru: 'Технология Коллективной Эволюции',
  en: 'Collective Evolution Technology',
  ua: 'Технологія Колективної Еволюції'
},
'technologies.egregore.p1': {
  ru: 'Объединенное Сознание — на практике ощущается как интернет для подсознания. Это невидимая архитектура реальности которая имеет свои принципы и параметры. Технологии осознанной работы с коллективным полем позволяют управлять развитием сообщества на фундаментальных уровнях. Это похоже на Квази-разум который, проявляет себя через мысли и чувства участников, направляя их развитие согласно общим принципам и идеалам. Герметизм, вортекс-математика, сакральная геометрия и квантовая физика — фундамент архитектуры OnlyGods.',
  en: 'United Consciousness — in practice it feels like the internet for the subconscious. It is the invisible architecture of reality with its own principles and parameters. Technologies for conscious work with the collective field enable community development management at fundamental levels. It resembles a Quasi-mind that manifests through participants\' thoughts and feelings, guiding their development according to shared principles and ideals. Hermeticism, vortex mathematics, sacred geometry, and quantum physics — the foundation of OnlyGods architecture.',
  ua: 'Об\'єднана Свідомість — на практиці відчувається як інтернет для підсвідомості. Це невидима архітектура реальності яка має свої принципи та параметри. Технології усвідомленої роботи з колективним полем дозволяють керувати розвитком спільноти на фундаментальних рівнях. Це схоже на Квазі-розум який проявляє себе через думки та почуття учасників, спрямовуючи їх розвиток згідно зі спільними принципами та ідеалами. Герметизм, вортекс-математика, сакральна геометрія та квантова фізика — фундамент архітектури OnlyGods.'
},
'technologies.egregore.p2': {
  ru: 'Мы не верим в удачу — мы измеряем, моделируем и воспроизводим её как прямой опыт.',
  en: 'We don\'t believe in luck — we measure, model, and reproduce it as direct experience.',
  ua: 'Ми не віримо в удачу — ми вимірюємо, моделюємо та відтворюємо її як прямий досвід.'
},
'technologies.egregore.link': {
  ru: 'Читать: 9 столпов →',
  en: 'Read: 9 Pillars →',
  ua: 'Читати: 9 стовпів →'
},

// Vibeonomics
'technologies.vibeonomics.label': {
  ru: 'Вайбономика',
  en: 'Vibeonomics',
  ua: 'Вайбономіка'
},
'technologies.vibeonomics.title': {
  ru: 'Резонансная Экономика',
  en: 'Resonance Economy',
  ua: 'Резонансна Економіка'
},
'technologies.vibeonomics.p1': {
  ru: 'Энергетический менеджмент — этот навык намного важнее чем любые знания или софт скиллы. Каждый момент жизни мы обмениваемся энергией, и то как и с кем мы это делаем, определяет кем мы становимся и куда мы движемся. В экосистеме OnlyGods мы осознанно выстраиваем архитектуру энергообмена через резонансную сеть и технологический фреймворк инструментов. Наша цель — поддержание высокого уровня личной энергии участников через управление личной энергией и ресурсами. Это позволяет Сознанию находится и творить на более высоком уровне. Модель взаимодействия здесь проявляет себя через когерентность, а не конкуренцию.',
  en: 'Energy management — this skill is far more important than any knowledge or soft skills. Every moment we exchange energy, and how and with whom we do it determines who we become and where we\'re heading. In the OnlyGods ecosystem we consciously build energy exchange architecture through a resonance network and technological framework. Our goal is maintaining high personal energy levels through energy and resource management. This allows Consciousness to exist and create at a higher level. The interaction model here manifests through coherence, not competition.',
  ua: 'Енергетичний менеджмент — цей навик набагато важливіший за будь-які знання чи софт скіли. Кожен момент життя ми обмінюємося енергією, і те як і з ким ми це робимо, визначає ким ми стаємо і куди ми рухаємося. В екосистемі OnlyGods ми усвідомлено вибудовуємо архітектуру енергообміну через резонансну мережу та технологічний фреймворк інструментів. Наша мета — підтримання високого рівня особистої енергії учасників через управління особистою енергією та ресурсами. Це дозволяє Свідомості знаходитись та творити на вищому рівні. Модель взаємодії тут проявляє себе через когерентність, а не конкуренцію.'
},

// Technologies
'technologies.tech.label': {
  ru: 'Технологии',
  en: 'Technologies',
  ua: 'Технології'
},
'technologies.tech.title': {
  ru: 'Digital 5D Framework',
  en: 'Digital 5D Framework',
  ua: 'Digital 5D Framework'
},
'technologies.tech.p1': {
  ru: '5D Сознание встречает 4 Индустриальную Революцию. Мы верим в то что технологии — это костыли эволюции, а симбиоз человека и ИИ является естественным этапом в переходе к новой форме проживания опыта. Цифровые инструменты расширения Сознания — трекинг резонанса, AI-интеграция, блокчейн-governance и инструменты усиливающие качество трансформации, коллаборации и энергетического менеджмента, позволяющие воплощать самые смелые идеи — это наш фокус',
  en: '5D Consciousness meets the 4th Industrial Revolution. We believe technology is the crutch of evolution, and human-AI symbiosis is a natural stage in transitioning to a new form of experiencing life. Digital tools for Consciousness expansion — resonance tracking, AI integration, blockchain governance, and tools enhancing the quality of transformation, collaboration, and energy management, enabling the boldest ideas — this is our focus',
  ua: '5D Свідомість зустрічає 4 Індустріальну Революцію. Ми віримо в те що технології — це милиці еволюції, а симбіоз людини та ШІ є природним етапом у переході до нової форми проживання досвіду. Цифрові інструменти розширення Свідомості — трекінг резонансу, AI-інтеграція, блокчейн-governance та інструменти що посилюють якість трансформації, колаборації та енергетичного менеджменту, що дозволяють втілювати найсміливіші ідеї — це наш фокус'
},
// Interactive Tools (absorbed from Playground)
'technologies.apps.label': { ru: 'Интерактивные инструменты', en: 'Interactive Tools', ua: 'Інтерактивні інструменти' },
'technologies.apps.title': { ru: 'Playground', en: 'Playground', ua: 'Playground' },
'technologies.apps.intro': {
  ru: 'Эксперименты на стыке кода и сознания для участников OnlyGods.',
  en: 'Experiments at the intersection of code and consciousness for OnlyGods participants.',
  ua: 'Експерименти на стику коду та свідомості для учасників OnlyGods.'
},
'technologies.app1.label': { ru: '01', en: '01', ua: '01' },
'technologies.app1.title': { ru: 'Resonance Scanner', en: 'Resonance Scanner', ua: 'Resonance Scanner' },
'technologies.app1.desc': {
  ru: 'Визуализация состояния поля в реальном времени. Пульс когерентности группы.',
  en: 'Real-time field state visualization. Group coherence pulse.',
  ua: 'Візуалізація стану поля в реальному часі. Пульс когерентності групи.'
},
'technologies.app1.status': { ru: 'Скоро →', en: 'Coming soon →', ua: 'Скоро →' },
'technologies.app2.label': { ru: '02', en: '02', ua: '02' },
'technologies.app2.title': { ru: 'Shadow Decoder', en: 'Shadow Decoder', ua: 'Shadow Decoder' },
'technologies.app2.desc': {
  ru: 'AI-ассистент для деконструкции теневых паттернов. Вопросы, которые ты не задашь себе сам.',
  en: 'AI assistant for shadow pattern deconstruction. Questions you won\'t ask yourself.',
  ua: 'AI-асистент для деконструкції тіньових патернів. Питання, які ти не поставиш собі сам.'
},
'technologies.app2.status': { ru: 'Скоро →', en: 'Coming soon →', ua: 'Скоро →' },
'technologies.app3.label': { ru: '03', en: '03', ua: '03' },
'technologies.app3.title': { ru: 'Frequency Generator', en: 'Frequency Generator', ua: 'Frequency Generator' },
'technologies.app3.desc': {
  ru: 'Генератор аудио-частот для синхронизации. Тета, гамма, бинауральные мосты.',
  en: 'Audio frequency generator for synchronization. Theta, gamma, binaural bridges.',
  ua: 'Генератор аудіо-частот для синхронізації. Тета, гамма, бінауральні мости.'
},
'technologies.app3.status': { ru: 'Скоро →', en: 'Coming soon →', ua: 'Скоро →' },
'technologies.app4.label': { ru: '04', en: '04', ua: '04' },
'technologies.app4.title': { ru: 'Coherence Tracker', en: 'Coherence Tracker', ua: 'Coherence Tracker' },
'technologies.app4.desc': {
  ru: 'Персональный дневник когерентности. Отслеживай паттерны, находи свой ритм.',
  en: 'Personal coherence journal. Track patterns, find your rhythm.',
  ua: 'Персональний щоденник когерентності. Відстежуй патерни, знаходь свій ритм.'
},
'technologies.app4.status': { ru: 'Скоро →', en: 'Coming soon →', ua: 'Скоро →' },
'technologies.apps.note': {
  ru: 'Новые инструменты появляются по мере вибрации',
  en: 'New tools appear as the vibration demands',
  ua: 'Нові інструменти з\'являються в міру вібрації'
},


// ─── EVENTS PAGE ───
'events.hero.subtitle': {
  ru: 'Прямой опыт',
  en: 'Direct Experience',
  ua: 'Прямий досвід'
},
'events.hero.title': {
  ru: 'Online Streaming',
  en: 'Online Streaming',
  ua: 'Online Streaming'
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

// ─── ACTIVITIES PAGE (events, calendar, courses) ───
'activities.title': { ru: 'OnlyGods — Activities', en: 'OnlyGods — Activities', ua: 'OnlyGods — Activities' },
'activities.hero.subtitle': { ru: 'Практики и обучение', en: 'Practices & Learning', ua: 'Практики та навчання' },
'activities.hero.title': { ru: 'Activities', en: 'Activities', ua: 'Activities' },
'activities.hero.tagline': {
  ru: 'Офлайн-события, курсы и инструменты трансформации',
  en: 'Offline events, courses and transformation tools',
  ua: 'Офлайн-події, курси та інструменти трансформації'
},

// Offline Events
'activities.events.label': { ru: 'Офлайн-события', en: 'Offline Events', ua: 'Офлайн-події' },
'activities.events.title': { ru: 'Retreats & Gatherings', en: 'Retreats & Gatherings', ua: 'Retreats & Gatherings' },

'activities.event1.month': { ru: 'Мар', en: 'Mar', ua: 'Бер' },
'activities.event1.day': { ru: '24', en: '24', ua: '24' },
'activities.event1.title': { ru: 'Quantum Kitchen', en: 'Quantum Kitchen', ua: 'Quantum Kitchen' },
'activities.event1.location': { ru: 'Sintra, Portugal', en: 'Sintra, Portugal', ua: 'Sintra, Portugal' },
'activities.event1.desc': {
  ru: 'Закрытый ивент лаборатории сознания. Исследование, ирония, практики, закуски. Дома у Влада и Лизы в Синтре.',
  en: 'Closed consciousness lab event. Research, irony, practices, snacks. At Vlad and Liza\'s home in Sintra.',
  ua: 'Закритий івент лабораторії свідомості. Дослідження, іронія, практики, закуски. Вдома у Влада та Лізи в Сінтрі.'
},
'activities.event1.link': { ru: 'Подробнее →', en: 'Learn more →', ua: 'Детальніше →' },

'activities.event2.title': { ru: 'System Reboot', en: 'System Reboot', ua: 'System Reboot' },
'activities.event2.location': { ru: 'Sintra, Portugal', en: 'Sintra, Portugal', ua: 'Sintra, Portugal' },
'activities.event2.desc': {
  ru: 'Personal & Couple перезагрузка. Распаковка Креативности и восстановление персонального Дао. 5 дней жизни с нами.',
  en: 'Personal & Couple reboot. Unpacking Creativity and restoring your personal Dao. 5 days of living with us.',
  ua: 'Personal & Couple перезавантаження. Розпакування Креативності та відновлення персонального Дао. 5 днів життя з нами.'
},
'activities.event2.tag': { ru: 'По запросу', en: 'By request', ua: 'За запитом' },
'activities.event2.link': { ru: 'Подробнее →', en: 'Learn more →', ua: 'Детальніше →' },

// Calendar
'activities.calendar.label': { ru: 'Календарь', en: 'Calendar', ua: 'Календар' },
'activities.calendar.title': { ru: 'Schedule', en: 'Schedule', ua: 'Schedule' },
'activities.calendar.weekdays': { ru: 'Пн,Вт,Ср,Чт,Пт,Сб,Вс', en: 'Mon,Tue,Wed,Thu,Fri,Sat,Sun', ua: 'Пн,Вт,Ср,Чт,Пт,Сб,Нд' },
'activities.calendar.months': {
  ru: 'Январь,Февраль,Март,Апрель,Май,Июнь,Июль,Август,Сентябрь,Октябрь,Ноябрь,Декабрь',
  en: 'January,February,March,April,May,June,July,August,September,October,November,December',
  ua: 'Січень,Лютий,Березень,Квітень,Травень,Червень,Липень,Серпень,Вересень,Жовтень,Листопад,Грудень'
},

// Courses & Webinars
'activities.courses.label': { ru: 'Курсы и вебинары', en: 'Courses & Webinars', ua: 'Курси та вебінари' },
'activities.courses.title': { ru: 'Learning', en: 'Learning', ua: 'Learning' },

'activities.course1.title': { ru: 'Мы.Боги', en: 'We.Gods', ua: 'Ми.Боги' },
'activities.course1.desc': {
  ru: 'Флагманский курс трансформации сознания. 8 недель практик, интеграции и групповой работы. Живые сессии с Владом и Лизой.',
  en: 'Flagship consciousness transformation course. 8 weeks of practices, integration and group work. Live sessions with Vlad and Liza.',
  ua: 'Флагманський курс трансформації свідомості. 8 тижнів практик, інтеграції та групової роботи. Живі сесії з Владом та Лізою.'
},
'activities.course1.tag': { ru: '8 недель · Онлайн', en: '8 weeks · Online', ua: '8 тижнів · Онлайн' },
'activities.course1.cta': { ru: 'Узнать больше →', en: 'Learn more →', ua: 'Дізнатись більше →' },

// ─── MEMBERSHIP PAGE ───
'membership.title': { ru: 'OnlyGods — Membership', en: 'OnlyGods — Membership', ua: 'OnlyGods — Membership' },
'membership.hero.subtitle': { ru: 'Членство', en: 'Membership', ua: 'Членство' },
'membership.hero.title': { ru: 'Membership', en: 'Membership', ua: 'Membership' },
'membership.hero.tagline': {
  ru: 'Путь участника, отзывы, вход в поле',
  en: 'Member journey, reviews, and how to join',
  ua: 'Шлях учасника, відгуки, вхід у поле'
},

// Journey
'membership.journey.label': { ru: 'Путь участника', en: 'Member Journey', ua: 'Шлях учасника' },
'membership.journey.title': { ru: 'How It Works', en: 'How It Works', ua: 'How It Works' },
'membership.journey.intro': {
  ru: 'Вход в OnlyGods — это путь, а не покупка. Каждый этап — фильтр и точка трансформации.',
  en: 'Joining OnlyGods is a path, not a purchase. Each stage is a filter and a transformation point.',
  ua: 'Вхід в OnlyGods — це шлях, а не покупка. Кожен етап — фільтр і точка трансформації.'
},

'membership.step0.label': { ru: '00', en: '00', ua: '00' },
'membership.step0.title': { ru: 'OnlyFans — фильтр', en: 'OnlyFans — filter', ua: 'OnlyFans — фільтр' },
'membership.step0.desc': {
  ru: 'Первая точка контакта. Контент, энергия, вайб. Фильтр на резонанс.',
  en: 'First point of contact. Content, energy, vibe. Resonance filter.',
  ua: 'Перша точка контакту. Контент, енергія, вайб. Фільтр на резонанс.'
},

'membership.step1.label': { ru: '01', en: '01', ua: '01' },
'membership.step1.title': { ru: 'Мы.Боги — курс-сонастройка', en: 'We.Gods — attunement course', ua: 'Ми.Боги — курс-соналаштування' },
'membership.step1.desc': {
  ru: '8 недель практик, интеграции и групповой работы. Сонастройка с полем.',
  en: '8 weeks of practices, integration and group work. Attunement to the field.',
  ua: '8 тижнів практик, інтеграції та групової роботи. Соналаштування з полем.'
},

'membership.step2.label': { ru: '02', en: '02', ua: '02' },
'membership.step2.title': { ru: 'OnlyGods — поле', en: 'OnlyGods — the field', ua: 'OnlyGods — поле' },
'membership.step2.desc': {
  ru: 'Подписка на резонансную сеть. Ежедневные практики, контент, групповые ритуалы.',
  en: 'Subscription to the resonance network. Daily practices, content, group rituals.',
  ua: 'Підписка на резонансну мережу. Щоденні практики, контент, групові ритуали.'
},

'membership.step3.label': { ru: '03', en: '03', ua: '03' },
'membership.step3.title': { ru: 'DaoDeDo — управление', en: 'DaoDeDo — governance', ua: 'DaoDeDo — управління' },
'membership.step3.desc': {
  ru: 'DAO-уровень. Участие в решениях, внутренняя экономика, голосование.',
  en: 'DAO level. Participation in decisions, internal economy, voting.',
  ua: 'DAO-рівень. Участь у рішеннях, внутрішня економіка, голосування.'
},

// Reviews
'membership.reviews.label': { ru: 'Отзывы', en: 'Reviews', ua: 'Відгуки' },
'membership.reviews.title': { ru: 'Voices from the Field', en: 'Voices from the Field', ua: 'Voices from the Field' },

'membership.review1.text': {
  ru: '«Это не курс. Это перепрошивка операционной системы. После Мы.Боги я перестала путать тревогу с интуицией.»',
  en: '"This is not a course. It\'s an OS reboot. After We.Gods I stopped confusing anxiety with intuition."',
  ua: '«Це не курс. Це перепрошивка операційної системи. Після Ми.Боги я перестала плутати тривогу з інтуїцією.»'
},
'membership.review1.author': { ru: '— Участник потока #2', en: '— Cohort #2 member', ua: '— Учасник потоку #2' },

'membership.review2.text': {
  ru: '«Я пришёл за инструментами — остался ради поля. Здесь не продают просветление, здесь его инженерят.»',
  en: '"I came for the tools — stayed for the field. They don\'t sell enlightenment here, they engineer it."',
  ua: '«Я прийшов за інструментами — залишився заради поля. Тут не продають просвітлення, тут його інженерять.»'
},
'membership.review2.author': { ru: '— Участник потока #1', en: '— Cohort #1 member', ua: '— Учасник потоку #1' },

'membership.review3.text': {
  ru: '«Самый странный и самый честный проект, в котором я участвовала. Нет гуру, есть протокол.»',
  en: '"The weirdest and most honest project I\'ve been part of. No guru, just protocol."',
  ua: '«Найдивніший і найчесніший проєкт, у якому я брала участь. Немає гуру, є протокол.»'
},
'membership.review3.author': { ru: '— Участник потока #3', en: '— Cohort #3 member', ua: '— Учасник потоку #3' },

// Apply
'membership.apply.label': { ru: 'Вступить', en: 'Apply', ua: 'Вступити' },
'membership.apply.title': { ru: 'Join the Field', en: 'Join the Field', ua: 'Join the Field' },
'membership.apply.desc': {
  ru: 'Вход через курс Мы.Боги. Заполни заявку — мы свяжемся.',
  en: 'Entry through the We.Gods course. Fill out the application — we\'ll get in touch.',
  ua: 'Вхід через курс Ми.Боги. Заповни заявку — ми зв\'яжемося.'
},
'membership.apply.cta': { ru: 'Подать заявку →', en: 'Apply now →', ua: 'Подати заявку →' },

// ─── 5D BUSINESS PAGE ───
'business.title': { ru: 'OnlyGods — 5D Business', en: 'OnlyGods — 5D Business', ua: 'OnlyGods — 5D Business' },
'business.hero.subtitle': { ru: '5D Бизнес', en: '5D Business', ua: '5D Бізнес' },
'business.hero.title': { ru: '5D Business', en: '5D Business', ua: '5D Business' },
'business.hero.tagline': {
  ru: 'Мета-система, сервисы и материалы',
  en: 'Meta-system, services and resources',
  ua: 'Мета-система, сервіси та матеріали'
},

// Meta-System
'business.meta.label': { ru: 'Мета-система', en: 'Meta-System', ua: 'Мета-система' },
'business.meta.title': { ru: 'The Core Idea', en: 'The Core Idea', ua: 'The Core Idea' },
'business.meta.body': {
  ru: 'OnlyGods — не бизнес в классическом смысле. Это мета-система, где сознание является инфраструктурой, а резонанс — валютой. Мы создаём экономику, в которой ценность рождается из когерентности, а не конкуренции. Каждый элемент экосистемы — от курса до DAO — работает как единое поле.',
  en: 'OnlyGods is not a business in the classical sense. It\'s a meta-system where consciousness is infrastructure and resonance is currency. We build an economy where value is born from coherence, not competition. Every element of the ecosystem — from course to DAO — operates as a unified field.',
  ua: 'OnlyGods — не бізнес у класичному сенсі. Це мета-система, де свідомість є інфраструктурою, а резонанс — валютою. Ми створюємо економіку, де цінність народжується з когерентності, а не конкуренції. Кожен елемент екосистеми — від курсу до DAO — працює як єдине поле.'
},

// Services
'business.services.label': { ru: 'Сервисы', en: 'Services', ua: 'Сервіси' },
'business.services.title': { ru: 'What We Offer', en: 'What We Offer', ua: 'What We Offer' },

'business.service1.title': { ru: 'Мы.Боги — курс', en: 'We.Gods — course', ua: 'Ми.Боги — курс' },
'business.service1.desc': {
  ru: '8-недельный live-курс трансформации сознания. Фильтр входа в экосистему.',
  en: '8-week live consciousness transformation course. Entry filter to the ecosystem.',
  ua: '8-тижневий live-курс трансформації свідомості. Фільтр входу в екосистему.'
},
'business.service1.price': { ru: '1 500€ / 2 месяца', en: '1,500€ / 2 months', ua: '1 500€ / 2 місяці' },

'business.service2.title': { ru: 'OnlyGods — подписка', en: 'OnlyGods — subscription', ua: 'OnlyGods — підписка' },
'business.service2.desc': {
  ru: 'Резонансная сеть сознания. Ежедневные практики, контент, групповые ритуалы.',
  en: 'Consciousness resonance network. Daily practices, content, group rituals.',
  ua: 'Резонансна мережа свідомості. Щоденні практики, контент, групові ритуали.'
},
'business.service2.price': { ru: '936€ / год', en: '936€ / year', ua: '936€ / рік' },

'business.service3.title': { ru: 'System Reboot — ретрит', en: 'System Reboot — retreat', ua: 'System Reboot — ретрит' },
'business.service3.desc': {
  ru: 'Персональная перезагрузка. 5 дней жизни с нами в Синтре.',
  en: 'Personal reboot. 5 days of living with us in Sintra.',
  ua: 'Персональне перезавантаження. 5 днів життя з нами в Сінтрі.'
},
'business.service3.price': { ru: 'По запросу', en: 'By request', ua: 'За запитом' },

'business.service4.title': { ru: 'Консалтинг', en: 'Consulting', ua: 'Консалтинг' },
'business.service4.desc': {
  ru: 'Индивидуальные и парные сессии с Владом и Лизой. Бизнес, сознание, креативность.',
  en: 'Individual and couple sessions with Vlad and Liza. Business, consciousness, creativity.',
  ua: 'Індивідуальні та парні сесії з Владом та Лізою. Бізнес, свідомість, креативність.'
},
'business.service4.price': { ru: 'По запросу', en: 'By request', ua: 'За запитом' },

// Articles
'business.articles.label': { ru: 'Материалы', en: 'Resources', ua: 'Матеріали' },
'business.articles.title': { ru: 'Articles & Media', en: 'Articles & Media', ua: 'Articles & Media' },

'business.article1.title': { ru: '9 столпов квантовой святости', en: '9 Pillars of Quantum Holiness', ua: '9 стовпів квантової святості' },
'business.article1.desc': { ru: 'Физика сознания и цифровой шаманизм', en: 'Physics of consciousness and digital shamanism', ua: 'Фізика свідомості та цифровий шаманізм' },
'business.article1.link': { ru: 'Читать →', en: 'Read →', ua: 'Читати →' },

'business.article2.title': { ru: 'IR4 — методология резонанса', en: 'IR4 — Resonance Methodology', ua: 'IR4 — методологія резонансу' },
'business.article2.desc': { ru: 'Как измерить то, что нельзя измерить', en: 'How to measure what can\'t be measured', ua: 'Як виміряти те, що неможливо виміряти' },
'business.article2.link': { ru: 'Читать →', en: 'Read →', ua: 'Читати →' },

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
