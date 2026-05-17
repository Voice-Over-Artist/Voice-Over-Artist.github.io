(function () {
    'use strict';

    var translations = {
        nav_logo:        { en: 'VO Portfolios',             ar: 'مواقع تعليق صوتي' },
        nav_work:        { en: 'Our Work',                   ar: 'أعمالنا' },
        nav_pricing:     { en: 'Pricing',                    ar: 'الأسعار' },
        nav_addons:      { en: 'Add-Ons',                    ar: 'إضافات' },
        nav_faq:         { en: 'FAQ',                        ar: 'أسئلة شائعة' },
        nav_contact:     { en: 'Get in Touch',               ar: 'تواصل معنا' },
        lang_toggle:     { en: 'عربي',                       ar: 'EN' },

        hero_badge:      { en: 'For Voice Over Artists',     ar: 'لفناني التعليق الصوتي' },
        hero_title_1:    { en: 'A Website That',             ar: 'موقع إلكتروني' },
        hero_title_2:    { en: 'Sounds Like You',            ar: 'يعبّر عنك' },
        hero_subtitle:   { en: 'Get a stunning portfolio website that showcases your voice, builds your brand, and helps you land more clients.',
                           ar: 'احصل على موقع بورتفوليو مميز يعرض صوتك، يبني علامتك التجارية، ويساعدك في الحصول على عملاء جدد.' },
        hero_cta_packages: { en: 'View Packages',           ar: 'عرض الباقات' },
        hero_cta_work:   { en: 'See Our Work',               ar: 'شاهد أعمالنا' },
        hero_stat_clients:    { en: 'Happy Clients',         ar: 'عملاء سعداء' },
        hero_stat_packages:   { en: 'Packages',             ar: 'باقات' },
        hero_stat_responsive: { en: 'Responsive',           ar: 'متجاوب' },

        portfolio_tag:        { en: 'Our Work',              ar: 'أعمالنا' },
        portfolio_title:      { en: "Websites We've Built",  ar: 'مواقع قمنا ببنائها' },
        portfolio_subtitle:   { en: "Real clients, real results. Here's what your website could look like.",
                                ar: 'عملاء حقيقيون، نتائج حقيقية. هكذا يمكن أن يبدو موقعك.' },
        portfolio_premium:    { en: 'Premium',               ar: 'مميزة' },
        portfolio_noha_desc:  { en: 'Bilingual Arabic-English portfolio with demo filters, script previews, music/clear voice toggle, and a contact form with project types.',
                                ar: 'بورتفوليو ثنائي اللغة عربي-إنجليزي مع فلاتر العينات، معاينة النصوص، زر التبديل بين الصوت بموسيقى/بدون، ونموذج تواصل مع أنواع المشاريع.' },
        portfolio_salma_desc: { en: 'Full-featured bilingual site with partner logos, featured videos, client testimonials, studio details, and a custom domain.',
                                ar: 'موقع ثنائي اللغة متكامل مع شعارات الشركاء، فيديوهات مميزة، آراء العملاء، تفاصيل الاستوديو، ودومين خاص.' },
        portfolio_visit:      { en: 'Visit Live Site',       ar: 'زيارة الموقع' },
        pf_bilingual:    { en: 'Bilingual',                  ar: 'ثنائي اللغة' },
        pf_demos:        { en: '7 Demos',                    ar: '٧ عينات' },
        pf_scripts:      { en: 'Script Previews',            ar: 'معاينة النصوص' },
        pf_music_toggle: { en: 'Music Toggle',               ar: 'زر التبديل' },
        pf_videos:       { en: 'Videos',                     ar: 'فيديوهات' },
        pf_testimonials: { en: 'Testimonials',               ar: 'آراء العملاء' },
        pf_domain:       { en: 'Custom Domain',              ar: 'دومين خاص' },

        pricing_tag:     { en: 'Pricing',                    ar: 'الأسعار' },
        pricing_title:   { en: 'Choose Your Package',        ar: 'اختر الباقة المناسبة' },
        pricing_subtitle:{ en: 'Simple, transparent pricing with no hidden fees.',
                           ar: 'أسعار واضحة وشفافة بدون رسوم مخفية.' },
        pkg_standard:    { en: 'Standard',                   ar: 'الأساسية' },
        pkg_standard_desc: { en: 'Perfect for beginners',    ar: 'مثالية للمبتدئين' },
        pkg_professional: { en: 'Professional',              ar: 'الاحترافية' },
        pkg_professional_desc: { en: 'Best value for serious artists', ar: 'الأفضل قيمة للمحترفين' },
        pkg_premium:     { en: 'Premium',                    ar: 'المميزة' },
        pkg_premium_desc: { en: 'For international reach',   ar: 'للوصول الدولي' },
        pkg_popular:     { en: 'Most Popular',               ar: 'الأكثر طلباً' },
        pkg_cta:         { en: 'Get Started',                ar: 'ابدأ الآن' },
        currency:        { en: 'EGP',                        ar: 'جنيه' },

        std_f1: { en: 'Single page website',                                     ar: 'موقع صفحة واحدة' },
        std_f2: { en: '4 Sections (Home, Demos, Contact, About)',                ar: '٤ أقسام (الرئيسية، العينات، التواصل، عني)' },
        std_f3: { en: 'Up to 6 voice samples',                                  ar: 'حتى ٦ عينات صوتية' },
        std_f4: { en: 'Custom audio player',                                     ar: 'مشغل صوت مخصص' },
        std_f5: { en: 'Mobile responsive design',                               ar: 'تصميم متجاوب للموبايل' },
        std_f6: { en: 'Social media buttons',                                    ar: 'أزرار السوشيال ميديا' },
        std_f7: { en: 'Contact form',                                            ar: 'نموذج تواصل' },
        std_f8: { en: '2 FREE meetings included',                               ar: '٢ اجتماعات مجانية' },
        std_f9: { en: '1 month FREE maintenance (1 minor change)',               ar: 'شهر واحد صيانة مجانية (تغيير واحد بسيط)' },

        pro_f1:  { en: '6 Sections (Home, Demos, About, Services, Contact, Happy Clients)',
                   ar: '٦ أقسام (الرئيسية، العينات، عني، الخدمات، التواصل، العملاء)' },
        pro_f2:  { en: 'Up to 6 voice samples',                                 ar: 'حتى ٦ عينات صوتية' },
        pro_f3:  { en: 'Custom audio player with controls',                     ar: 'مشغل صوت مع عناصر تحكم' },
        pro_f4:  { en: 'Demo category filters',                                 ar: 'فلاتر تصنيف العينات' },
        pro_f5:  { en: 'Navigation bar for easy scrolling',                     ar: 'شريط تنقل للتصفح السهل' },
        pro_f6:  { en: 'Happy clients logos display',                           ar: 'عرض شعارات العملاء الكبار' },
        pro_f7:  { en: 'Social media buttons',                                  ar: 'أزرار السوشيال ميديا' },
        pro_f8:  { en: 'Contact form with project types',                       ar: 'نموذج تواصل مع أنواع المشاريع' },
        pro_f9:  { en: 'Mobile responsive design',                              ar: 'تصميم متجاوب للموبايل' },
        pro_f10: { en: '2 FREE meetings included',                              ar: '٢ اجتماعات مجانية' },
        pro_f11: { en: '2 months FREE maintenance (2 minor changes)',           ar: '٢ شهر صيانة مجانية (٢ تغييرات بسيطة)' },

        prem_f1:  { en: 'All in Professional +',                                ar: 'كل ما في الاحترافية +' },
        prem_f2:  { en: 'All sections included',                                ar: 'جميع الأقسام مشمولة' },
        prem_f3:  { en: 'Bilingual website (Arabic & English)',                 ar: 'موقع ثنائي اللغة (عربي وإنجليزي)' },
        prem_f4:  { en: 'Script preview for each demo',                         ar: 'معاينة النص لكل عينة' },
        prem_f5:  { en: 'Music/Clear voice toggle',                             ar: 'زر التبديل بين الصوت بموسيقى/بدون' },
        prem_f6:  { en: 'Featured videos (3 videos)',                           ar: 'فيديوهات مميزة (٣ فيديوهات)' },
        prem_f7:  { en: 'Client reviews section',                               ar: 'قسم آراء العملاء' },
        prem_f8:  { en: 'Studio details section',                               ar: 'قسم تفاصيل الاستوديو' },
        prem_f9:  { en: '3 FREE meetings included',                             ar: '٣ اجتماعات مجانية' },
        prem_f10: { en: '3 months FREE maintenance (3 minor changes)',          ar: '٣ أشهر صيانة مجانية (٣ تغييرات بسيطة)' },

        free_tag:        { en: 'Included',                   ar: 'مشمول' },
        free_title:      { en: 'FREE With Every Package',    ar: 'مجاناً مع كل الباقات' },
        free_domain:     { en: 'Free GitHub domain (username.github.io)', ar: 'دومين GitHub مجاني (username.github.io)' },
        free_samples:    { en: '6 voice samples included',   ar: '٦ عينات صوتية مشمولة' },
        free_responsive: { en: 'Mobile responsive design',   ar: 'تصميم متجاوب للموبايل' },
        free_contact:    { en: 'Working contact form',       ar: 'نموذج تواصل يعمل' },
        free_social:     { en: 'Social media buttons',       ar: 'أزرار السوشيال ميديا' },

        sections_tag:     { en: 'Sections',                  ar: 'الأقسام' },
        sections_title:   { en: 'Available Website Sections',ar: 'الأقسام المتاحة للموقع' },
        sections_subtitle:{ en: 'Choose the sections you need — add extra sections to any package.',
                            ar: 'اختر الأقسام التي تحتاجها — يمكنك إضافة أقسام إضافية لأي باقة.' },
        sec_home:     { en: 'Home',              ar: 'الرئيسية' },
        sec_demos:    { en: 'Demos',             ar: 'العينات الصوتية' },
        sec_about:    { en: 'About',             ar: 'عني' },
        sec_services: { en: 'Services',          ar: 'الخدمات' },
        sec_studio:   { en: 'Studio Details',    ar: 'تفاصيل الاستوديو' },
        sec_contact:  { en: 'Contact',           ar: 'التواصل' },
        sec_clients:  { en: 'Happy Clients',     ar: 'العملاء السعداء' },
        sec_videos:   { en: 'Featured Videos',   ar: 'فيديوهات مميزة' },
        sec_reviews:  { en: 'Client Reviews',    ar: 'آراء العملاء' },
        sec_other:    { en: 'Any Other Needed Section', ar: 'أي قسم آخر تحتاجه' },

        addons_tag:       { en: 'Add-Ons',                   ar: 'إضافات' },
        addons_title:     { en: 'Add-On Services',           ar: 'خدمات إضافية' },
        addons_subtitle:  { en: 'Customize your package with additional features.',
                            ar: 'خصص باقتك بميزات إضافية.' },
        addon_section:       { en: 'Extra Section',                          ar: 'قسم إضافي' },
        addon_section_desc:  { en: 'Add any additional section to your package.',  ar: 'إضافة أي قسم إضافي لباقتك.' },
        addon_section_price: { en: 'Ask for price',                          ar: 'اسأل عن السعر' },
        addon_multipage:     { en: 'Multi-Page Layout',                      ar: 'تصميم متعدد الصفحات' },
        addon_multipage_desc:{ en: 'Separate pages instead of one-page design.', ar: 'صفحات منفصلة بدلاً من صفحة واحدة.' },
        addon_voice:         { en: 'Extra Voice Samples',                    ar: 'عينات صوتية إضافية' },
        addon_voice_desc:    { en: 'Every additional 3 samples.',            ar: 'كل ٣ عينات إضافية.' },
        addon_video:         { en: 'Extra Video Samples',                    ar: 'عينات فيديو إضافية' },
        addon_video_desc:    { en: 'Every additional 3 video samples.',      ar: 'كل ٣ عينات فيديو إضافية.' },
        addon_domain:        { en: 'Custom Domain',                          ar: 'دومين خاص' },
        addon_domain_desc:   { en: 'Your own domain (yourname.com) — you own it!', ar: 'دومين خاص بك (yourname.com) — ملكك للأبد!' },
        addon_domain_price:  { en: 'Based on domain price++',                ar: 'حسب سعر الدومين++' },
        addon_lang:          { en: 'Additional Language',                    ar: 'لغة إضافية' },
        addon_lang_desc:     { en: 'Add another language version to your site.', ar: 'إضافة نسخة بلغة أخرى للموقع.' },
        addon_maintenance:      { en: 'Monthly Maintenance',                 ar: 'صيانة شهرية' },
        addon_maintenance_desc: { en: 'After free period — sample changes, theme updates, etc.',
                                  ar: 'بعد الفترة المجانية — تغيير العينات، تحديث الألوان، إلخ.' },
        addon_per_month:     { en: '/month',                                 ar: '/شهر' },
        addon_meeting:       { en: 'Extra Meeting/Call',                     ar: 'اجتماع/مكالمة إضافية' },
        addon_meeting_desc:  { en: 'Additional consultation (30 minutes).',  ar: 'استشارة إضافية (٣٠ دقيقة).' },
        addon_rush:          { en: 'Rush Delivery',                          ar: 'تسليم سريع' },
        addon_rush_desc:     { en: 'Get your website in 3 days instead of 10.', ar: 'استلم موقعك في ٣ أيام بدلاً من ١٠.' },
        addon_rush_price:    { en: '+30% of package',                        ar: '+٣٠٪ من سعر الباقة' },

        faq_tag:      { en: 'FAQ',                           ar: 'أسئلة شائعة' },
        faq_title:    { en: 'Important Information',         ar: 'معلومات مهمة' },
        faq_subtitle: { en: 'Everything you need to know before getting started.',
                        ar: 'كل ما تحتاج معرفته قبل البدء.' },
        faq_q1: { en: 'What is the free GitHub domain?',     ar: 'ما هو الدومين المجاني على GitHub؟' },
        faq_a1: { en: 'You get a free website address like <strong>yourname.github.io</strong> at no extra cost. If you prefer a custom domain like <strong>yourname.com</strong>, the price depends on the domain you choose and you own it forever!',
                  ar: 'تحصل على عنوان موقع مجاني مثل <strong>yourname.github.io</strong> بدون تكلفة. إذا أردت دومين خاص مثل <strong>yourname.com</strong>، السعر يعتمد على الدومين الذي تختاره وتملكه للأبد!' },
        faq_q2: { en: 'How many meetings are included?',     ar: 'كم عدد الاجتماعات المتضمنة؟' },
        faq_a2: { en: '<strong>Standard:</strong> 2 meetings | <strong>Professional:</strong> 2 meetings | <strong>Premium:</strong> 3 meetings. Additional meetings are charged at 250 EGP per 30-minute session.',
                  ar: '<strong>الأساسية:</strong> ٢ اجتماعات | <strong>الاحترافية:</strong> ٢ اجتماعات | <strong>المميزة:</strong> ٣ اجتماعات. الاجتماعات الإضافية بـ ٢٥٠ جنيه لكل ٣٠ دقيقة.' },
        faq_q3: { en: 'How long is free maintenance?',       ar: 'ما مدة الصيانة المجانية؟' },
        faq_a3: { en: '<strong>Standard:</strong> 1 month (1 change) | <strong>Professional:</strong> 2 months (2 changes) | <strong>Premium:</strong> 3 months (3 changes). Minor changes include: updating demos, changing theme colors, updating contact info. After the free period, maintenance is 500 EGP/month.',
                  ar: '<strong>الأساسية:</strong> شهر (تغيير واحد) | <strong>الاحترافية:</strong> شهرين (تغييرين) | <strong>المميزة:</strong> ٣ أشهر (٣ تغييرات). التغييرات البسيطة تشمل: تحديث العينات، تغيير ألوان الثيم، تحديث معلومات التواصل. بعد الفترة المجانية، الصيانة بـ ٥٠٠ جنيه/شهر.' },
        faq_q4: { en: 'How many voice samples are included?', ar: 'كم عينة صوتية تشملها الباقة؟' },
        faq_a4: { en: 'All packages include <strong>6 voice samples</strong>. Need more? Add 3 samples for 500 EGP. Each sample includes the audio player.',
                  ar: 'جميع الباقات تشمل <strong>٦ عينات صوتية</strong>. تحتاج أكثر؟ أضف ٣ عينات بـ ٥٠٠ جنيه. كل عينة تشمل مشغل الصوت.' },
        faq_q5: { en: 'Can I choose a multi-page layout?',   ar: 'هل يمكن اختيار تصميم متعدد الصفحات؟' },
        faq_a5: { en: 'All packages come as a <strong>single-page website</strong> by default. Want separate pages for each section? Add the <strong>Multi-Page Layout</strong> option for 2,500 EGP to showcase more work in a structured way.',
                  ar: 'جميع الباقات تأتي كـ<strong>موقع صفحة واحدة</strong> افتراضياً. تريد صفحات منفصلة لكل قسم؟ أضف خيار <strong>التصميم متعدد الصفحات</strong> بـ ٢,٥٠٠ جنيه لعرض أعمال أكثر بطريقة منظمة.' },
        faq_q6: { en: 'How long does delivery take?',        ar: 'كم تستغرق مدة التسليم؟' },
        faq_a6: { en: 'Standard delivery is <strong>7–10 working days</strong>. Rush delivery (3 days) is available at 30% extra of your package price.',
                  ar: 'التسليم العادي <strong>٧-١٠ أيام عمل</strong>. التسليم السريع (٣ أيام) متاح بـ ٣٠٪ إضافية من سعر الباقة.' },
        faq_q7: { en: 'How is payment split?',               ar: 'كيف يتم تقسيم الدفع؟' },
        faq_a7: { en: '<strong>50% upfront</strong> to start the project, <strong>50% upon delivery</strong>. Payment via Vodafone Cash, InstaPay, or bank transfer.',
                  ar: '<strong>٥٠٪ مقدم</strong> لبدء المشروع، <strong>٥٠٪ عند التسليم</strong>. الدفع عبر فودافون كاش، إنستاباي، أو تحويل بنكي.' },

        contact_tag:      { en: 'Contact',                   ar: 'تواصل' },
        contact_title:    { en: 'Ready to Get Started?',     ar: 'مستعد للبدء؟' },
        contact_text:     { en: "Let's build you a website that converts visitors into clients. Contact me today!",
                            ar: 'دعنا نبني لك موقعاً يحول الزوار إلى عملاء. تواصل معي اليوم!' },
        contact_whatsapp: { en: 'WhatsApp',                  ar: 'واتساب' },
        contact_email:    { en: 'Email Me',                  ar: 'إيميل' },
        contact_note:     { en: 'Prices valid as of January 2026 | All prices in Egyptian Pounds (EGP)',
                            ar: 'الأسعار سارية اعتباراً من يناير ٢٠٢٦ | جميع الأسعار بالجنيه المصري' },
        contact_help:     { en: "Questions? Contact me anytime — I'm happy to help!",
                            ar: 'أسئلة؟ تواصل معي في أي وقت — يسعدني مساعدتك!' },

        footer_credit:    { en: 'Malek Abdelrahman. Engineered with precision.',
                            ar: 'مالك عبد الرحمن. صُمم بدقة.' }
    };

    var currentLang = 'en';
    var arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

    function convertDigits(text, lang) {
        if (!text) return text;

        if (lang === 'ar') {
            return text
                .replace(/[0-9]/g, function (digit) {
                    return arabicDigits[Number(digit)];
                })
                .replace(/%/g, '٪');
        }

        return text
            .replace(/[٠-٩]/g, function (digit) {
                return String(arabicDigits.indexOf(digit));
            })
            .replace(/٪/g, '%');
    }

    function localizeVisibleNumbers(lang) {
        if (!document.body) return;

        var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode: function (node) {
                if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;

                var parent = node.parentElement;
                if (!parent) return NodeFilter.FILTER_REJECT;

                var tag = parent.tagName;
                if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') {
                    return NodeFilter.FILTER_REJECT;
                }

                return NodeFilter.FILTER_ACCEPT;
            }
        });

        var textNode;
        while ((textNode = walker.nextNode())) {
            textNode.nodeValue = convertDigits(textNode.nodeValue, lang);
        }
    }

    function applyLanguage(lang) {
        currentLang = lang;
        var html = document.documentElement;
        html.setAttribute('lang', lang === 'ar' ? 'ar' : 'en');
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (translations[key] && translations[key][lang]) {
                var val = translations[key][lang];
                if (/<\w/.test(val)) {
                    el.innerHTML = val;
                } else {
                    el.textContent = val;
                }
            }
        });

        localizeVisibleNumbers(lang);
    }

    /* Language toggle */
    var langBtn = document.getElementById('langToggle');
    if (langBtn) {
        langBtn.addEventListener('click', function () {
            applyLanguage(currentLang === 'en' ? 'ar' : 'en');
        });
    }

    /* Mobile menu */
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('open');
        });
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                hamburger.classList.remove('active');
                navLinks.classList.remove('open');
            });
        });
    }

    /* Navbar scroll shadow */
    var navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function () {
        if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });

    /* Fade-in on scroll */
    var fadeEls = document.querySelectorAll('.fade-in');
    if ('IntersectionObserver' in window) {
        var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    obs.unobserve(e.target);
                }
            });
        }, { threshold: 0.12 });
        fadeEls.forEach(function (el) { obs.observe(el); });
    } else {
        fadeEls.forEach(function (el) { el.classList.add('visible'); });
    }

    /* FAQ accordion */
    document.querySelectorAll('.faq-q').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var item = btn.closest('.faq-item');
            var wasOpen = item.classList.contains('active');

            document.querySelectorAll('.faq-item.active').forEach(function (open) {
                open.classList.remove('active');
                open.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
            });

            if (!wasOpen) {
                item.classList.add('active');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    /* Make full portfolio cards clickable */
    document.querySelectorAll('.portfolio-card[data-site-url]').forEach(function (card) {
        var siteUrl = card.getAttribute('data-site-url');
        if (!siteUrl) return;

        card.addEventListener('click', function (event) {
            if (event.target.closest('a, button')) return;
            window.open(siteUrl, '_blank', 'noopener');
        });

        card.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                window.open(siteUrl, '_blank', 'noopener');
            }
        });
    });
})();
