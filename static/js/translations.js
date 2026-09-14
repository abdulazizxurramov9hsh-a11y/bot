// Multi-language system (UZ, RU, EN) for Xurramov Abdulaziz's Portfolio
const TRANSLATIONS = {
    uz: {
        // Navigation
        nav_home: "🏠 Bosh sahifa",
        nav_photos: "📸 Fotolarim",
        nav_about: "👤 Men haqimda",
        nav_services: "⚡ Xizmatlar",
        nav_contact: "📫 Aloqa",
        footer_rights: "© 2026 Xurramov Abdulaziz. Barcha huquqlar himoyalangan. 🚀",

        // Index / Home Page
        hero_badge: "✨ Kelajak Dasturchisi & IT Lideri",
        hero_greet: "Assalomu alaykum! Men <br>",
        hero_name: "Xurramov Abdulaziz",
        hero_suffix: "man 🚀",
        hero_hint: "👆 (Ismim ustiga bosing — to'g'ridan-to'g'ri tanishuv sahifasiga o'tasiz!)",
        hero_lead: "Men zamonaviy dasturlash, Python & Django backend, ilg'or texnologiyalar va yangi g'oyalarni hayotga tatbiq etishga qiziquvchi izlanuvchan va maqsad sari intiluvchan insonman! 🌟🔥",
        btn_photos: "📸 Fotolarga Kirish 🚀",
        btn_telegram: "✈️ Telegram: Bog'lanish 🚀",
        btn_about: "👤 Men haqimda ℹ️",
        post_badge: "📌 Shaxsiy Fikr & Mulohaza",
        post_year: "• 2026-yil",
        post_quote: "\"Kamtarlik va intizom — haqiqiy kuchning eng yuksak belgisi.\"",
        post_text: "Har bir katta natija ortida baland ovozda maqtanish emas, balki jimjitlikda qilingan sabrli mehnat, doimiy intilish va o'z ustida ishlash yotadi. Har kuni yangi bilim o'rganish, zamonaviy texnologiyalarni o'zlashtirish va jamiyatga foydasi tegadigan IT loyihalar yaratish — mening asosiy maqsadimdir.",
        
        card1_title: "Foto Galereya",
        card1_desc: "Mening sevimli rasmlarim, texnologiya, tabiat va ijodiy suratlar kolleksiyasi.",
        card1_link: "Rasmlarni ko'rish →",
        card2_title: "Xurramov Abdulaziz Kim?",
        card2_desc: "Mening qobiliyatlarim, qiziqishlarim, maqsadlarim va hayotiy qarashlarim.",
        card2_link: "Batafsil tanishing →",
        card3_title: "Mening Mahoratim",
        card3_desc: "Dasturlash, Django, veb-loyihalar va zamonaviy IT xizmatlari.",
        card3_link: "Xizmatlarni ko'rish →",
        card4_title: "Men Bilan Bog'laning",
        card4_desc: "Hamkorlik, maslahat yoki savollaringiz bo'lsa to'g'ridan-to'g'ri aloqaga chiqing.",
        card4_link: "Xabar yozish →",

        // Photos Page
        photos_badge: "📸 Maxsus Foto To'plam",
        photos_title_prefix: "Abdulazizning ",
        photos_title_highlight: "Foto Galereyasi",
        photos_lead: "Dasturlash, texnologiya, tabiat va muvaffaqiyat ilhomlantiruvchi ajoyib suratlar. Rasmlarni kattalashtirish uchun ustiga bosing!",
        photo1_title: "🎩 Xurramov Abdulaziz",
        photo1_desc: "Kamtarlik, intizom va yuksak maqsadlar sari odimlash ✨",
        photo2_title: "📸 Abdulaziz (Xotiralar)",
        photo2_desc: "Har bir bosqich — tajriba va shaxsiy o'sish 🚀",
        photo3_title: "💻 Dasturchi Mehnat Makoni",
        photo3_desc: "Kod yozish, yangi g'oyalar va cheksiz izlanish 🚀",
        photo4_title: "🏔️ Yuksak Cho'qqilar Sari",
        photo4_desc: "Har bir maqsad — zabt etilishi kerak bo'lgan cho'qqidir 🎯",
        photo5_title: "⚡ Python & Django Sehr-jodusi",
        photo5_desc: "Kuchli algoritmlar va xavfsiz backend arxitekturasi 🛡️",
        photo6_title: "👥 Ijodiy Jamoa Bilan Ishlash",
        photo6_desc: "Katta loyihalarni birgalikda muvaffaqiyatli yakunlash 🤝",
        photo7_title: "🌌 Cheksiz Orzular & Koinot",
        photo7_desc: "Tasavvur chegarasiz — natijalar esa buyuk bo'ladi 🌟",
        photo8_title: "🏙️ Kelajak Megapolislari",
        photo8_desc: "IT texnologiyalar hayotimizni qulay va chiroyli qiladi ✨",
        btn_back_home: "← 🏠 Bosh sahifaga qaytish",

        // About Page
        about_badge: "🌟 Tanishing & Ma'lumot",
        about_title_prefix: "Xurramov Abdulaziz — ",
        about_title_highlight: "Kreativ Dasturchi",
        about_p1: "Salom! Men <strong>Xurramov Abdulaziz</strong> — axborot texnologiyalari, Python, Django freymvorki va zamonaviy veb-ishlanmalarga mehr qo'ygan iqtidorli dasturchiman. 💻⚡",
        about_quote: "\"Har bir katta muvaffaqiyat — intilish, qat'iyat va har kuni o'z ustida ishlash bilan boshlanadi.\" 🎯🔥",
        about_p2: "Men o'z oldimga har doim yuksak maqsadlarni qo'yaman. Har qanday yangi loyiha va muammoni ijodiy hamda professional yondashuv bilan yechishga harakat qilaman. Doimo yangiliklarga ochiqman va eng so'nggi texnologiyalarni o'rganishdan to'xtamayman! 🌐✨",
        skill1_title: "Python & Django",
        skill1_desc: "Backend arxitektura va logika",
        skill2_title: "Zamonaviy Web UI",
        skill2_desc: "HTML5, CSS3, Chiroyli Dizayn",
        skill3_title: "Tezkorlik & Sifat",
        skill3_desc: "Toza kod va yuqori unumdorlik",
        skill4_title: "Kreativ Yondashuv",
        skill4_desc: "Yangi g'oyalar va innovatsiya",
        btn_view_photos: "📸 Fotolarimni Ko'rish →",
        card_role: "⚡ Python & Django Developer",
        btn_telegram_chat: "✈️ Telegram: Bog'lanish",

        // Services Page
        services_badge: "💼 Mahorat & Xizmatlar",
        services_title_prefix: "Abdulazizning ",
        services_title_highlight: "Xizmatlari",
        services_lead: "Yuqori sifat, zamonaviy uslub va ishonchli IT ishlanmalari bilan loyihalaringizni yangi bosqichga olib chiqamiz! ⚡",
        serv1_title: "Python & Django Veb Saytlar",
        serv1_desc: "Tezkor, ishonchli va xavfsiz backend tizimiga ega zamonaviy Django veb-ilovalari.",
        serv1_f1: "🚀 Kuchli Django arxitekturasi",
        serv1_f2: "🔒 Yuqori xavfsizlik va ma'lumotlar bazasi",
        serv1_f3: "⚡ Tez yuklanuvchi dinamik sahifalar",
        serv2_title: "Zamonaviy & Skromniy UI Dizayn",
        serv2_desc: "Ko'zni charchatmaydigan, nafis va jozibador ranglar uyg'unligidagi interfeyslar.",
        serv2_f1: "✨ Elegant dark mavzular",
        serv2_f2: "📱 Barcha qurilmalarga to'liq mos",
        serv2_f3: "🎯 Foydalanuvchi uchun qulay boshqaruv",
        serv3_title: "Media & Foto Galereyalar",
        serv3_desc: "Interaktiv va yengil yuklanuvchi fotogalereyalar, portfolio va taqdimot sahifalari.",
        serv3_f1: "🖼️ Chiroyli modal ko'rish oynasi",
        serv3_f2: "⚡ Yuqori sifatli rasmlar optimizatsiyasi",
        serv3_f3: "💫 Micro-animatsiyalar va effektlar",

        // Contact Page
        contact_badge: "📫 Aloqa & Muloqot",
        contact_title_prefix: "Abdulaziz Bilan ",
        contact_title_highlight: "Bog'lanish",
        contact_lead: "Hamkorlik, yangi IT loyihalar, takliflar yoki shunchaki suhbat uchun quyidagi kanallar orqali bog'lanishingiz mumkin! 🚀",
        info_phone: "Telefon",
        info_telegram: "Telegram",
        info_location: "Manzil",
        info_location_val: "Toshkent shahri, O'zbekiston 🇺🇿",
        info_email: "Elektron Pochta",
        form_name_label: "👤 Ismingiz",
        form_name_ph: "Ismingizni kiriting...",
        form_email_label: "✉️ Elektron pochtangiz / Telegramingiz",
        form_email_ph: "@username yoki pochta...",
        form_msg_label: "✍️ Xabaringiz",
        form_msg_ph: "Taklif yoki fikringizni yozing...",
        form_submit_btn: "Abdulazizga Yuborish 🚀",
        form_alert: "Xabaringiz Abdulazizga muvaffaqiyatli yuborildi! 🚀"
    },

    ru: {
        // Navigation
        nav_home: "🏠 Главная",
        nav_photos: "📸 Фотографии",
        nav_about: "👤 Обо мне",
        nav_services: "⚡ Услуги",
        nav_contact: "📫 Контакты",
        footer_rights: "© 2026 Хуррамов Абдулазиз. Все права защищены. 🚀",

        // Index / Home Page
        hero_badge: "✨ Будущий разработчик & IT-лидер",
        hero_greet: "Здравствуйте! Я <br>",
        hero_name: "Хуррамов Абдулазиз",
        hero_suffix: " 🚀",
        hero_hint: "👆 (Нажмите на имя — сразу перейдёте на страницу обо мне!)",
        hero_lead: "Я целеустремленный разработчик, увлеченный современным программированием, бэкендом на Python & Django, инновациями и воплощением смелых идей в реальность! 🌟🔥",
        btn_photos: "📸 Смотреть фото 🚀",
        btn_telegram: "✈️ Написать в Telegram 🚀",
        btn_about: "👤 Обо мне ℹ️",
        post_badge: "📌 Личная мысль & Кредо",
        post_year: "• 2026 год",
        post_quote: "\"Скромность и дисциплина — высший признак истинной силы.\"",
        post_text: "За каждым большим успехом стоит не громкое хвастовство, а терпеливый ежедневный труд, дисциплина и саморазвитие. Моя цель — каждый день учиться новому, осваивать передовые технологии и создавать полезные IT-проекты для общества.",
        
        card1_title: "Фотогалерея",
        card1_desc: "Коллекция любимых фотографий, технологии, природа и творческие кадры.",
        card1_link: "Смотреть фото →",
        card2_title: "Кто такой Хуррамов Абдулазиз?",
        card2_desc: "Мои навыки, интересы, амбициозные цели и жизненное мировоззрение.",
        card2_link: "Подробнее обо мне →",
        card3_title: "Мои навыки",
        card3_desc: "Программирование, Django, веб-проекты и современные IT-услуги.",
        card3_link: "Смотреть услуги →",
        card4_title: "Связаться со мной",
        card4_desc: "Сотрудничество, консультация или возникшие вопросы — напишите напрямую.",
        card4_link: "Написать сообщение →",

        // Photos Page
        photos_badge: "📸 Избранная фотогалерея",
        photos_title_prefix: "Фотогалерея ",
        photos_title_highlight: "Абдулазиза",
        photos_lead: "Фотографии, вдохновляющие на программирование, развитие, технологии и покорение новых высот. Нажмите на фото для просмотра!",
        photo1_title: "🎩 Хуррамов Абдулазиз",
        photo1_desc: "Скромность, дисциплина и уверенный шаг к большим целям ✨",
        photo2_title: "📸 Абдулазиз (Воспоминания)",
        photo2_desc: "Каждый пройденный этап — это опыт и личностный рост 🚀",
        photo3_title: "💻 Рабочее место разработчика",
        photo3_desc: "Написание чистого кода, новые идеи и постоянный поиск 🚀",
        photo4_title: "🏔️ К высоким вершинам",
        photo4_desc: "Каждая цель — это вершина, которую нужно покорить 🎯",
        photo5_title: "⚡ Сила Python & Django",
        photo5_desc: "Мощные алгоритмы и надежная архитектура бэкенда 🛡️",
        photo6_title: "👥 Командная работа",
        photo6_desc: "Успешная реализация масштабных проектов вместе 🤝",
        photo7_title: "🌌 Безграничные мечты & Космос",
        photo7_desc: "Воображение безгранично — результаты превзойдут ожидания 🌟",
        photo8_title: "🏙️ Мегаполисы будущего",
        photo8_desc: "IT-технологии делают мир удобным, быстрым и красивым ✨",
        btn_back_home: "← 🏠 Вернуться на главную",

        // About Page
        about_badge: "🌟 Знакомство & Информация",
        about_title_prefix: "Хуррамов Абдулазиз — ",
        about_title_highlight: "Креативный разработчик",
        about_p1: "Здравствуйте! Я <strong>Хуррамов Абдулазиз</strong> — увлеченный разработчик информационных технологий, специализирующийся на Python, Django и современных веб-решениях. 💻⚡",
        about_quote: "\"Любой большой успех начинается с упорства, дисциплины и ежедневной работы над собой.\" 🎯🔥",
        about_p2: "Я всегда ставлю перед собой высокие цели. К каждой задаче и проекту подхожу ответственно и креативно. Всегда открыт для новых знаний и не перестаю развиваться в сфере IT! 🌐✨",
        skill1_title: "Python & Django",
        skill1_desc: "Архитектура и логика бэкенда",
        skill2_title: "Современный Web UI",
        skill2_desc: "HTML5, CSS3, стильный дизайн",
        skill3_title: "Скорость & Качество",
        skill3_desc: "Чистый код и высокая производительность",
        skill4_title: "Креативный подход",
        skill4_desc: "Свежие идеи и инновации",
        btn_view_photos: "📸 Посмотреть фотогалерею →",
        card_role: "⚡ Python & Django разработчик",
        btn_telegram_chat: "✈️ Telegram: Связаться",

        // Services Page
        services_badge: "💼 Навыки & Услуги",
        services_title_prefix: "Услуги ",
        services_title_highlight: "Абдулазиза",
        services_lead: "Высокое качество, современный стиль и надежные решения поднимут ваши IT-проекты на новый уровень! ⚡",
        serv1_title: "Веб-сайты на Python & Django",
        serv1_desc: "Быстрые, безопасные и отказоустойчивые веб-приложения на базе Django.",
        serv1_f1: "🚀 Мощная архитектура Django",
        serv1_f2: "🔒 Высокий уровень безопасности и защита данных",
        serv1_f3: "⚡ Быстрая загрузка динамических страниц",
        serv2_title: "Современный стильный UI дизайн",
        serv2_desc: "Гармоничные, эстетичные и удобные интерфейсы в темных тонах.",
        serv2_f1: "✨ Элегантная темная тема",
        serv2_f2: "📱 Полная адаптивность под любые устройства",
        serv2_f3: "🎯 Удобный и интуитивный интерфейс",
        serv3_title: "Медиа & Фотогалереи",
        serv3_desc: "Интерактивные и легкие галереи, портфолио и презентационные страницы.",
        serv3_f1: "🖼️ Удобный модальный просмотр",
        serv3_f2: "⚡ Оптимизация изображений без потери качества",
        serv3_f3: "💫 Плавные микроанимации и эффекты",

        // Contact Page
        contact_badge: "📫 Контакты & Связь",
        contact_title_prefix: "Связаться с ",
        contact_title_highlight: "Абдулазизом",
        contact_lead: "Для сотрудничества, новых IT-проектов, предложений или просто интересной беседы свяжитесь со мной удобным для вас способом! 🚀",
        info_phone: "Телефон",
        info_telegram: "Telegram",
        info_location: "Локация",
        info_location_val: "город Ташкент, Узбекистан 🇺🇿",
        info_email: "Электронная почта",
        form_name_label: "👤 Ваше имя",
        form_name_ph: "Введите ваше имя...",
        form_email_label: "✉️ Эл. почта / Telegram",
        form_email_ph: "@username или email...",
        form_msg_label: "✍️ Ваше сообщение",
        form_msg_ph: "Напишите предложение или вопрос...",
        form_submit_btn: "Отправить Абдулазизу 🚀",
        form_alert: "Ваше сообщение успешно отправлено Абдулазизу! 🚀"
    },

    en: {
        // Navigation
        nav_home: "🏠 Home",
        nav_photos: "📸 Photos",
        nav_about: "👤 About Me",
        nav_services: "⚡ Services",
        nav_contact: "📫 Contact",
        footer_rights: "© 2026 Xurramov Abdulaziz. All rights reserved. 🚀",

        // Index / Home Page
        hero_badge: "✨ Future Developer & IT Leader",
        hero_greet: "Hello! I am <br>",
        hero_name: "Xurramov Abdulaziz",
        hero_suffix: " 🚀",
        hero_hint: "👆 (Click on my name — go straight to the About page!)",
        hero_lead: "I am an ambitious and passionate software developer focused on modern programming, Python & Django backend, cutting-edge technologies, and turning ideas into impactful realities! 🌟🔥",
        btn_photos: "📸 View Photos 🚀",
        btn_telegram: "✈️ Telegram: Connect 🚀",
        btn_about: "👤 About Me ℹ️",
        post_badge: "📌 Personal Thoughts & Creed",
        post_year: "• 2026",
        post_quote: "\"Humility and discipline are the ultimate signs of true strength.\"",
        post_text: "Behind every great result lies not loud boasting, but quiet, patient labor, relentless striving, and continuous self-improvement. Learning new skills daily, mastering modern tools, and crafting valuable IT projects for society is my core mission.",
        
        card1_title: "Photo Gallery",
        card1_desc: "A collection of favorite pictures, technology, nature, and creative moments.",
        card1_link: "View photos →",
        card2_title: "Who is Xurramov Abdulaziz?",
        card2_desc: "My skills, interests, ambitious milestones, and life philosophies.",
        card2_link: "Learn more →",
        card3_title: "My Skills & Mastery",
        card3_desc: "Programming, Django, web projects, and contemporary IT services.",
        card3_link: "View services →",
        card4_title: "Contact Me",
        card4_desc: "Collaborations, advisory, or questions — reach out directly anytime.",
        card4_link: "Send message →",

        // Photos Page
        photos_badge: "📸 Featured Photo Gallery",
        photos_title_prefix: "Abdulaziz's ",
        photos_title_highlight: "Photo Gallery",
        photos_lead: "Inspiring pictures celebrating coding, modern technology, nature, and growth. Click any image to enlarge!",
        photo1_title: "🎩 Xurramov Abdulaziz",
        photo1_desc: "Humility, discipline, and confident steps toward ambitious goals ✨",
        photo2_title: "📸 Abdulaziz (Memories)",
        photo2_desc: "Every milestone is valuable experience and personal growth 🚀",
        photo3_title: "💻 Developer's Workspace",
        photo3_desc: "Clean code, innovative ideas, and perpetual curiosity 🚀",
        photo4_title: "🏔️ Reaching New Heights",
        photo4_desc: "Every goal is a peak waiting to be conquered 🎯",
        photo5_title: "⚡ Power of Python & Django",
        photo5_desc: "Robust algorithms and secure backend architecture 🛡️",
        photo6_title: "👥 Team Collaboration",
        photo6_desc: "Delivering large-scale projects successfully together 🤝",
        photo7_title: "🌌 Endless Dreams & Universe",
        photo7_desc: "Imagination is limitless — the achievements will be great 🌟",
        photo8_title: "🏙️ Cities of the Future",
        photo8_desc: "IT innovations making our daily lives seamless and smart ✨",
        btn_back_home: "← 🏠 Back to Home",

        // About Page
        about_badge: "🌟 Overview & Biography",
        about_title_prefix: "Xurramov Abdulaziz — ",
        about_title_highlight: "Creative Developer",
        about_p1: "Hello! I am <strong>Xurramov Abdulaziz</strong> — an enthusiastic software developer with a strong passion for information technology, Python, Django, and modern web craft. 💻⚡",
        about_quote: "\"Every significant achievement begins with perseverance, discipline, and daily self-cultivation.\" 🎯🔥",
        about_p2: "I always set ambitious goals for myself. I approach each challenge with both creativity and professional dedication. I am continuously eager to learn and master cutting-edge technologies! 🌐✨",
        skill1_title: "Python & Django",
        skill1_desc: "Backend architecture & business logic",
        skill2_title: "Modern Web UI",
        skill2_desc: "HTML5, CSS3, aesthetic styling",
        skill3_title: "Speed & Quality",
        skill3_desc: "Clean code and high performance",
        skill4_title: "Creative Approach",
        skill4_desc: "Fresh thinking & innovation",
        btn_view_photos: "📸 View My Photos →",
        card_role: "⚡ Python & Django Developer",
        btn_telegram_chat: "✈️ Telegram: Connect",

        // Services Page
        services_badge: "💼 Skills & Services",
        services_title_prefix: "Abdulaziz's ",
        services_title_highlight: "Services",
        services_lead: "Delivering top-tier quality, modern aesthetics, and rock-solid IT development to bring your ideas to life! ⚡",
        serv1_title: "Python & Django Web Apps",
        serv1_desc: "Fast, reliable, and secure web applications built on the Django framework.",
        serv1_f1: "🚀 Robust Django architecture",
        serv1_f2: "🔒 High security and database integrity",
        serv1_f3: "⚡ High-speed dynamic rendering",
        serv2_title: "Modern & Sleek UI Design",
        serv2_desc: "Comfortable, dark-themed, and eye-friendly interfaces crafted with precision.",
        serv2_f1: "✨ Elegant dark mode aesthetics",
        serv2_f2: "📱 Fully responsive across all devices",
        serv2_f3: "🎯 Intuitive user experience",
        serv3_title: "Media & Photo Galleries",
        serv3_desc: "Interactive, lightweight galleries, portfolios, and presentation pages.",
        serv3_f1: "🖼️ Smooth lightbox modal viewer",
        serv3_f2: "⚡ Optimized image loading",
        serv3_f3: "💫 Subtle micro-animations and effects",

        // Contact Page
        contact_badge: "📫 Contact & Connect",
        contact_title_prefix: "Get in Touch with ",
        contact_title_highlight: "Abdulaziz",
        contact_lead: "Whether for collaboration, new IT projects, proposals, or just a friendly chat, feel free to reach out anytime! 🚀",
        info_phone: "Phone",
        info_telegram: "Telegram",
        info_location: "Location",
        info_location_val: "Tashkent city, Uzbekistan 🇺🇿",
        info_email: "Email Address",
        form_name_label: "👤 Your Name",
        form_name_ph: "Enter your name...",
        form_email_label: "✉️ Email / Telegram",
        form_email_ph: "@username or email...",
        form_msg_label: "✍️ Your Message",
        form_msg_ph: "Write your proposal or inquiry...",
        form_submit_btn: "Send to Abdulaziz 🚀",
        form_alert: "Your message has been sent successfully to Abdulaziz! 🚀"
    }
};

function getActiveLanguage() {
    const urlParam = new URLSearchParams(window.location.search).get('lang');
    if (urlParam && ['uz', 'ru', 'en'].includes(urlParam.toLowerCase())) {
        return urlParam.toLowerCase();
    }
    return localStorage.getItem('site_lang') || 'uz';
}

function setLanguage(lang) {
    if (!['uz', 'ru', 'en'].includes(lang)) return;
    localStorage.setItem('site_lang', lang);
    applyLanguage(lang);
}

function applyLanguage(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.uz;
    document.documentElement.lang = lang;

    // Update active button state in language switchers
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update text/html for data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (dict[key] !== undefined) {
            el.setAttribute('placeholder', dict[key]);
        }
    });

    // Update title attributes
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (dict[key] !== undefined) {
            el.setAttribute('title', dict[key]);
        }
    });
}

// Handle form submissions with active language alert
function handleContactFormSubmit(event) {
    event.preventDefault();
    const lang = getActiveLanguage();
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.uz;
    alert(dict.form_alert || "Xabaringiz Abdulazizga muvaffaqiyatli yuborildi! 🚀");
    event.target.reset();
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = getActiveLanguage();
    applyLanguage(currentLang);
});
