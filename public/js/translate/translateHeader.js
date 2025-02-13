document.addEventListener("DOMContentLoaded", function () {
    const langBtns = document.querySelectorAll(".lang-btn");
    const translations = {
        "UA": {
            "mainLink": "Головна",
            "NameOfRozdilOurWorks":"НАШІ РОБОТИ",
            "aboutUsLink": "Про нас",
            "servicesLink": "Послуги",
            "pricelink": "Ціни",
            "contactsLink": "Контакти",
            "MajorName": "АвтоМажор",
            "DescriptionAutoMajorBackphotoDiv":"Ми надаємо послуги з якісного ремонту та перетяжки салонів автомеблів, маємо власне виробництво авточохлів та автонакидок",
            "CorName": "с Білогородка,вул Володимирівська-35 Б",
            "OurPoslugi": "НАШІ ПОСЛУГИ",
            "linkToPagePeretSalonu" :"ПЕРЕТЯЖКА САЛОНУ",
            "linkToPagePeretiazkaWheel": "ПЕРЕТЯЖКА КЕРМА,КПП,РУЧНЕ ГАЛЬМО",
            "linkToPagePeretiazkaSteli": "ПЕРЕТЯЖКА CТЕЛІ,СТІЙОК КОЗИРКІВ",
            "LinkToPagePeretiazkaDoor":"ПЕРЕТЯЖКА ДВЕРНИХ КАРТ",
            "LinkToPageInstallChohli":"ВСТАНОВЛЕННЯ АВТОЧОХЛІВ",
            "LinkToPageCreationAutoChohli": "ВИРОБНИЦТВО МОДЕЛЬНИХ АВТОЧОХЛІВ",
            "LinkToPagePeretiazkaSelectoruKPP":"ПЕРЕТЯЖКА СЕЛЕКТОРУ КПП",
            "LinkToPageSeatsRepair":"РЕМОНТ СИДІНЬ РЕСТАВРАЦІЯ ПАРАЛОНУ",
            "LinkToPagePeretiazkaPidlokitnikiv":"ПЕРЕТЯЖКА ПІДЛОКІТНИКІВ ТА ІНШИХ ЕЛЕМЕНТІВ САЛОНУ",
            "LinkToPagePeretiazkaMebliv":"ПЕРЕТЯЖКА МЕБЛІВ",
            "LinkToPageEvaCarpets":"EVA КИЛИМКИ,ОРГАНАЙЗЕРИ",
            "LinkToPageCreationAutonakidki":"ВИРОБНИЦТВО АВТОНАКИДОК",
            "AboutUsText":"ПРО НАС",
            "aboutUsTextDivFirstDiv":"Автоательє АвтоМажор – це команда професіоналів ,яка тривалий час займається наданням послуг зякісного ремонту та перетяжки салонів автомобілів  та перетяжкою меблів.За роки своєї діяльності ми досягли високого професіоналізму усвоїй сфері і завоювали довіру клієнтів не лише з Києва, а й з усієї території України.",
            "aboutUsTextDivSecondDiv":"Ми цінуємо якість, комфорт та індивідуальність. Наші фахівці готові допомогти вам зробити ваш автомобільунікальним та максимально комфортним. Усі роботи виконуються з любов'ю до деталейта з використанням високоякісних матеріалів. Обираючи АвтоМажор, ви обираєте надійність, професіоналізм та стиль.",
            "aboutUsTextDivThirdDiv":"Для замовлення та консультації  вам  потрібно  зв'язатися з нами т/вайбер 098-897-37-07 Ми присутні у всіх великих соцмережах, де ви можете побачити наші роботи ,задати питання або дізнатися про появу новинок продукції. Ми завжди раді допомогти!",






        },
        "EN": {
            "mainLink": "Home",
            "NameOfRozdilOurWorks":"OUR WORKS",
            "aboutUsLink": "About Us",
            "servicesLink": "Services",
            "pricelink": "Prices",
            "contactsLink": "Contacts",
            "MajorName": "AutoMajor",
            "DescriptionAutoMajorBackphotoDiv":"We provide high-quality car interior repair and upholstery services, and we have our own production of car seat covers and car throws",
            "CorName": "village of Bilogorodka, street Volodymyrivska-35 B",
            "OurPoslugi": "OUR SERVICES",
            "linkToPagePeretSalonu" :"INTERIOR UPHOLSTERY",
            "linkToPagePeretiazkaWheel": "STEERING WHEEL, GEARSHIFT, HANDBRAKE UPHOLSTERY",
            "linkToPagePeretiazkaSteli": "CEILING, PILLARS, SUN VISORS UPHOLSTERY",
            "LinkToPagePeretiazkaDoor":"DOOR PANELS UPHOLSTERY",
            "LinkToPageInstallChohli":"INSTALLATION OF CAR COVERS",
            "LinkToPageCreationAutoChohli": "MANUFACTURING OF CUSTOM CAR COVERS",
            "LinkToPagePeretiazkaSelectoruKPP":"GEAR SHIFT SELECTOR UPHOLSTERY",
            "LinkToPageSeatsRepair":"SEAT REPAIR, FOAM RESTORATION",
            "LinkToPagePeretiazkaPidlokitnikiv":"UPHOLSTERY OF ARMRESTS AND OTHER INTERIOR ELEMENTS",
            "LinkToPagePeretiazkaMebliv":"FURNITURE UPHOLSTERY",
            "LinkToPageEvaCarpets":"EVA MATS, ORGANIZERS",
            "LinkToPageCreationAutonakidki":"MANUFACTURING OF CAR COVERS",
            "AboutUsText":"ABOUT US",
            "aboutUsTextDivFirstDiv":"Autoatelier AutoMajor is a team of professionals who have been providing high-quality car interior repair and upholstery services, as well as furniture reupholstery, for a long time. Over the years of our activity, we have achieved a high level of professionalism in our field and gained the trust of clients not only from Kyiv but also from all over Ukraine.",
            "aboutUsTextDivSecondDiv":"We value quality, comfort, and individuality. Our specialists are ready to help you make your car unique and as comfortable as possible. All work is done with attention to detail and using high-quality materials. By choosing AutoMajor, you choose reliability, professionalism, and style.",
            "aboutUsTextDivThirdDiv":"To place an order or for consultation, you can contact us via phone/Viber at 098-897-37-07. We are present on all major social media platforms, where you can see our work, ask questions, or learn about new product arrivals. We are always happy to help!",





        }
    };

    function changeLanguage(lang) {
        localStorage.setItem("selectedLang", lang); // Збереження мови
        const translation = translations[lang];

        for (let key in translation) {
            let element = document.getElementById(key);
            if (element) {
                element.textContent = translation[key];
            }
        }
    }

    const savedLang = localStorage.getItem("selectedLang") || "UA";
    changeLanguage(savedLang);

    document.getElementById("btn-uk").addEventListener("click", function () {
        changeLanguage("UA");
    });

    document.getElementById("btn-en").addEventListener("click", function () {
        changeLanguage("EN");
    });
});
