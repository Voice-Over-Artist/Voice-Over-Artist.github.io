(function () {
    'use strict';

    var translations = {
        nav_logo: { en: 'VO Portfolios', ar: 'مواقع تعليق صوتي' },
        nav_standard: { en: 'Starter', ar: 'البداية' },
        nav_professional: { en: 'Showcase', ar: 'عرض الأعمال' },
        nav_premium: { en: 'Elite', ar: 'النخبة' },
        nav_addons: { en: 'Add-Ons', ar: 'إضافات' },
        nav_faq: { en: 'FAQ', ar: 'أسئلة شائعة' },
        nav_contact: { en: 'Get in Touch', ar: 'تواصل معنا' },
        lang_toggle: { en: 'عربي', ar: 'EN' },

        hero_badge: { en: 'Ready-Made Templates', ar: 'قوالب جاهزة' },
        hero_title_1: { en: 'Pick a Design,', ar: 'اختر التصميم،' },
        hero_title_2: { en: 'Launch Faster', ar: 'وانطلق بسرعة' },
        hero_subtitle: {
            en: 'Pre-built voice-over portfolio templates at a fraction of the cost. Choose your style, add your content, and go live in days.',
            ar: 'قوالب بورتفوليو جاهزة لفناني التعليق الصوتي بسعر أقل. اختر أسلوبك، أرسل محتواك، وانطلق خلال أيام.'
        },

        how_tag: { en: 'How It Works', ar: 'كيف يعمل' },
        how_title: { en: 'Three Simple Steps', ar: '3 خطوات بسيطة' },
        step_1_title: { en: 'Choose a Template', ar: 'اختر قالباً' },
        step_1_desc: { en: 'Browse our collection and pick the design that fits your style and budget.', ar: 'تصفح القوالب واختر التصميم المناسب لأسلوبك وميزانيتك.' },
        step_2_title: { en: 'Send Your Content', ar: 'أرسل محتواك' },
        step_2_desc: { en: 'Share your voice samples, bio, photos, and branding details with us.', ar: 'شارك العينات الصوتية، النبذة، الصور، وتفاصيل البراند.' },
        step_3_title: { en: 'Go Live', ar: 'انطلق أونلاين' },
        step_3_desc: { en: 'We customize the template with your content and launch your site within days.', ar: 'نخصص القالب بمحتواك ونطلق موقعك خلال أيام.' },

        tier_standard_tag: { en: 'Starter', ar: 'البداية' },
        tier_standard_title: { en: 'Starter Templates', ar: 'قوالب البداية' },
        tier_standard_desc: { en: 'Clean, professional single-page portfolios with 4 essential sections. Perfect for getting started.', ar: 'قوالب صفحة واحدة بشكل احترافي مع 4 أقسام أساسية. مناسبة للبداية.' },

        tier_professional_tag: { en: 'Showcase', ar: 'عرض الأعمال' },
        tier_professional_title: { en: 'Showcase Templates', ar: 'قوالب عرض الأعمال' },
        tier_professional_desc: { en: 'Feature-rich portfolios with 6 sections including testimonials and client logos. Great for growing your brand.', ar: 'قوالب غنية بالميزات مع 6 أقسام تشمل آراء العملاء وشعاراتهم. مناسبة لتطوير البراند.' },

        tier_premium_tag: { en: 'Elite', ar: 'النخبة' },
        tier_premium_title: { en: 'Elite Templates', ar: 'قوالب النخبة' },
        tier_premium_desc: { en: 'Full-featured portfolios with 9 sections including video showreels, services, client brands, and more. The complete package.', ar: 'قوالب كاملة مع 9 أقسام تشمل فيديوهات، خدمات، شعارات العملاء والمزيد. التجربة الكاملة.' },

        tier_most_popular: { en: 'Most Popular', ar: 'الأكثر طلباً' },
        currency: { en: 'EGP', ar: 'جنيه' },
        includes_title: { en: 'Sections included', ar: 'الأقسام الموجودة' },

        sec_home: { en: 'Home', ar: 'الرئيسية' },
        sec_about: { en: 'About', ar: 'عني' },
        sec_samples: { en: 'Voice Samples', ar: 'العينات الصوتية' },
        sec_contact: { en: 'Contact', ar: 'التواصل' },
        sec_testimonials: { en: 'Testimonials', ar: 'آراء العملاء' },
        sec_clients: { en: 'Clients', ar: 'العملاء' },
        sec_showreel: { en: 'Video Showreel', ar: 'فيديو شو ريل' },
        sec_services: { en: 'Services', ar: 'الخدمات' },
        sec_portfolio: { en: 'Portfolio', ar: 'الأعمال' },

        badge_standard: { en: 'Starter', ar: 'البداية' },
        badge_professional: { en: 'Showcase', ar: 'عرض الأعمال' },
        badge_premium: { en: 'Elite', ar: 'النخبة' },

        tmpl_std_1_name: { en: 'Studio Classic', ar: 'ستوديو كلاسيك' },
        tmpl_std_1_desc: { en: 'An editorial starter layout with elegant headings, soft cards, and a welcoming flow that keeps the focus on your demos.', ar: 'تصميم تحريري كبداية قوية بعناوين أنيقة وبطاقات ناعمة وتدفق مريح يركز على عيناتك.' },
        tmpl_std_2_name: { en: 'Modern Minimal', ar: 'المودرن البسيط' },
        tmpl_std_2_desc: { en: 'A clean, modern template with crisp typography and structured blocks—ideal for a fast, no-fuss portfolio.', ar: 'قالب نظيف وحديث بخطوط واضحة وتنظيم مرتب—مناسب لبورتفوليو سريع وبسيط.' },

        tmpl_pro_1_name: { en: 'Storyteller Pro', ar: 'الراوي الاحترافي' },
        tmpl_pro_1_desc: { en: 'A calm, story-first layout with comfortable reading rhythm, tasteful cards, and strong testimonial presence.', ar: 'تخطيط هادئ يركز على القصة مع قراءة مريحة وبطاقات مرتبة وحضور قوي لآراء العملاء.' },
        tmpl_pro_2_name: { en: 'Signature Luxe', ar: 'التوقيع الفاخر' },
        tmpl_pro_2_desc: { en: 'A premium-feeling layout with refined spacing, subtle gradients, and polished typography for high-end positioning.', ar: 'تخطيط فاخر بمسافات مدروسة وتدرجات خفيفة وخطوط مصقولة لتموضع عالي المستوى.' },

        tmpl_prem_1_name: { en: 'Cinematic Prestige', ar: 'الهيبة السينمائية' },
        tmpl_prem_1_desc: { en: 'A magazine-style premium experience with bold headlines, rich sections, and polished details for established talent.', ar: 'تجربة مميزة بأسلوب مجلة بعناوين قوية وأقسام غنية وتفاصيل مصقولة للمحترفين.' },
        tmpl_prem_2_name: { en: 'Creator Spotlight', ar: 'سبوتلايت المبدع' },
        tmpl_prem_2_desc: { en: 'A contemporary, energetic layout with modern cards, friendly motion, and strong visual hierarchy that grabs attention.', ar: 'تخطيط معاصر وحيوي ببطاقات حديثة وحركة لطيفة وتسلسل بصري قوي يجذب الانتباه.' },

        meta_4_sections: { en: '4 Sections', ar: '4 أقسام' },
        meta_6_sections: { en: '6 Sections', ar: '6 أقسام' },
        meta_9_sections: { en: '9 Sections', ar: '9 أقسام' },
        meta_responsive: { en: 'Responsive', ar: 'متجاوب' },
        meta_testimonials: { en: 'Testimonials', ar: 'آراء العملاء' },
        meta_video_showreel: { en: 'Video Showreel', ar: 'فيديو شو ريل' },
        meta_services: { en: 'Services', ar: 'الخدمات' },

        btn_live_preview: { en: 'Live Preview', ar: 'عرض مباشر' },
        btn_order_now: { en: 'Order Now', ar: 'اطلب الآن' },

        addons_tag: { en: 'Add-Ons', ar: 'إضافات' },
        addons_title: { en: 'Template Add-Ons', ar: 'إضافات القوالب' },
        addons_desc: { en: 'Upgrade your template with only what you need: extra demos, extra videos, or a custom domain.', ar: 'طور قالبك بما تحتاجه فقط: عينات إضافية، فيديوهات إضافية، أو دومين خاص.' },
        addon_voice_title: { en: 'Extra Voice Demos', ar: 'عينات صوت إضافية' },
        addon_voice_desc: { en: 'Add 3 more voice samples to your template.', ar: 'أضف 3 عينات صوتية إضافية للقالب.' },
        addon_voice_price: { en: '<bdi dir="ltr">+300</bdi> EGP / <bdi dir="ltr">3</bdi> samples', ar: '<bdi dir="ltr">+300</bdi> جنيه / <bdi dir="ltr">3</bdi> عينات' },
        addon_video_title: { en: 'Extra Video Demos', ar: 'فيديوهات إضافية' },
        addon_video_desc: { en: 'Add 3 more video demos to your template.', ar: 'أضف 3 فيديوهات إضافية للقالب.' },
        addon_video_price: { en: '<bdi dir="ltr">+300</bdi> EGP / <bdi dir="ltr">3</bdi> videos', ar: '<bdi dir="ltr">+300</bdi> جنيه / <bdi dir="ltr">3</bdi> فيديوهات' },
        addon_domain_title: { en: 'Custom Domain', ar: 'دومين خاص' },
        addon_domain_desc: { en: 'Use yourname.github.io or yourname.com. Ask for details and fees.', ar: 'استخدم yourname.github.io أو yourname.com. اسأل عن التفاصيل والرسوم.' },
        addon_domain_price: { en: 'Based on domain cost', ar: 'حسب تكلفة الدومين' },

        cta_title: { en: 'Want Something Fully Custom?', ar: 'تريد موقعاً مخصصاً بالكامل؟' },
        cta_desc: { en: 'Our custom-built packages start at 3,000 EGP with unlimited design possibilities.', ar: 'الباقات المخصصة تبدأ من 3,000 جنيه مع حرية تصميم كاملة.' },
        cta_btn_custom: { en: 'View Custom Packages', ar: 'عرض الباقات المخصصة' },
        cta_btn_whatsapp: { en: 'WhatsApp', ar: 'واتساب' },

        faq_tag: { en: 'FAQ', ar: 'أسئلة شائعة' },
        faq_title: { en: 'Template Information', ar: 'معلومات القوالب' },
        faq_subtitle: { en: 'Clear rules and details about templates before you order.', ar: 'قواعد وتفاصيل واضحة عن القوالب قبل الطلب.' },
        faq_q1: { en: 'What will my website link look like?', ar: 'شكل رابط موقعي سيكون كيف؟' },
        faq_a1: {
            en: 'Your template site link will be <strong><code dir="ltr">https://voice-over-artist.github.io/your-name/</code></strong>. If you want <strong><code dir="ltr">yourname.github.io</code></strong> or <strong><code dir="ltr">yourname.com</code></strong>, ask for details and fees.',
            ar: 'رابط موقع القالب سيكون <strong><code dir="ltr">https://voice-over-artist.github.io/your-name/</code></strong>. إذا تريد <strong><code dir="ltr">yourname.github.io</code></strong> أو <strong><code dir="ltr">yourname.com</code></strong> اسأل عن التفاصيل والرسوم.'
        },
        faq_q2: { en: 'How many meetings are included?', ar: 'كم اجتماع متضمن؟' },
        faq_a2: { en: 'All templates include <strong>2 meetings</strong> only.', ar: 'كل القوالب تشمل <strong>اجتماعين</strong> فقط.' },
        faq_q3: { en: 'How long is maintenance?', ar: 'مدة الصيانة كم؟' },
        faq_a3: { en: 'Templates include <strong>1 month</strong> of maintenance only.', ar: 'القوالب تشمل <strong>شهر واحد</strong> صيانة فقط.' },
        faq_q4: { en: 'How many voice samples are included?', ar: 'كم عينة صوتية متضمنة؟' },
        faq_a4: { en: 'Templates include a maximum of <strong>6 voice samples</strong>. Any increase is added in sets of <strong><bdi dir="ltr">+3</bdi> samples</strong> with an extra charge.', ar: 'القوالب تشمل حد أقصى <strong>6 عينات صوتية</strong>. أي زيادة تُضاف على شكل <strong><bdi dir="ltr">+3</bdi> عينات</strong> برسوم إضافية.' },
        faq_q5: { en: 'How fast is delivery?', ar: 'مدة التسليم كم؟' },
        faq_a5: { en: 'Delivery is within <strong>5 working days</strong>.', ar: 'التسليم خلال <strong>5 أيام عمل</strong>.' },
        faq_q6: { en: 'How is payment split?', ar: 'طريقة الدفع كيف؟' },
        faq_a6: {
            en: '<strong><bdi dir="ltr">50%</bdi> upfront</strong> to start the project, <strong><bdi dir="ltr">50%</bdi> upon delivery</strong>. Payment via Vodafone Cash, InstaPay, or bank transfer.',
            ar: '<strong><bdi dir="ltr">50%</bdi> مقدم</strong> لبدء المشروع، <strong><bdi dir="ltr">50%</bdi> عند التسليم</strong>. الدفع عبر فودافون كاش، إنستاباي، أو تحويل بنكي.'
        },
        faq_q7: { en: 'Do templates support Arabic?', ar: 'هل القوالب تدعم اللغة العربية؟' },
        faq_a7: { en: 'English only for now. If you need Arabic, ask for details.', ar: 'إنجليزي فقط حالياً. إذا تحتاج عربي اسأل عن التفاصيل.' },

        footer_credit: { en: 'Malek Abdelrahman. Engineered with precision.', ar: 'مالك عبد الرحمن. صُمم بدقة.' }
    };

    var currentLang = 'en';
    var savedLang;
    try {
        savedLang = window.localStorage ? window.localStorage.getItem('voTemplatesLang') : null;
    } catch (e) {
        savedLang = null;
    }
    if (savedLang === 'en' || savedLang === 'ar') currentLang = savedLang;

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

    function updateWhatsAppLinks(lang) {
        document.querySelectorAll('a[data-wa-msg-en][data-wa-msg-ar]').forEach(function (a) {
            var msg = a.getAttribute(lang === 'ar' ? 'data-wa-msg-ar' : 'data-wa-msg-en');
            if (!msg) return;
            a.setAttribute('href', 'https://wa.me/201006399425?text=' + encodeURIComponent(msg));
        });
    }

    function applyLanguage(lang) {
        currentLang = lang;

        var html = document.documentElement;
        html.setAttribute('lang', lang === 'ar' ? 'ar' : 'en');
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (!key || !translations[key] || !translations[key][lang]) return;

            var val = translations[key][lang];
            if (/<\w/.test(val)) {
                el.innerHTML = val;
            } else {
                el.textContent = val;
            }
        });

        updateWhatsAppLinks(lang);
        localizeVisibleNumbers(lang);

        try {
            if (window.localStorage) window.localStorage.setItem('voTemplatesLang', lang);
        } catch (e) {
            // ignore
        }
    }

    /* Language toggle */
    var langBtn = document.getElementById('langToggle');
    if (langBtn) {
        langBtn.addEventListener('click', function () {
            applyLanguage(currentLang === 'en' ? 'ar' : 'en');
        });
    }

    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        function setNavOpen(open) {
            navLinks.classList.toggle('open', open);
            hamburger.classList.toggle('active', open);
            hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
            hamburger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
            document.body.classList.toggle('nav-open', open);
        }

        hamburger.addEventListener('click', function () {
            setNavOpen(!navLinks.classList.contains('open'));
        });
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                setNavOpen(false);
            });
        });

        document.addEventListener('click', function (event) {
            if (!navLinks.classList.contains('open')) return;
            var target = event.target;
            if (target && target.closest && target.closest('#navLinks, #hamburger, #langToggle')) return;
            setNavOpen(false);
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') setNavOpen(false);
        });
    }

    var navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function () {
        if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });

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
            if (!item) return;

            var wasOpen = item.classList.contains('active');
            document.querySelectorAll('.faq-item.active').forEach(function (open) {
                open.classList.remove('active');
                var openBtn = open.querySelector('.faq-q');
                if (openBtn) openBtn.setAttribute('aria-expanded', 'false');
            });

            if (!wasOpen) {
                item.classList.add('active');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    /* Make full template cards clickable */
    document.querySelectorAll('.template-card[data-template-url]').forEach(function (card) {
        var url = card.getAttribute('data-template-url');
        if (!url) return;

        card.addEventListener('click', function (event) {
            if (event.target && event.target.closest && event.target.closest('a, button')) return;
            window.location.href = url;
        });

        card.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                window.location.href = url;
            }
        });
    });

    /* Init language */
    applyLanguage(currentLang);
})();
