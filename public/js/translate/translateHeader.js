document.addEventListener("DOMContentLoaded", function () {
    const langBtns = document.querySelectorAll(".lang-btn");
    const translations = {
        "UA": {
            /* header /footer */
            "mainLink": "Головна",
            "aboutUsLink": "Про нас",
            "servicesLink": "Послуги",
            "pricelink": "Ціни",
            "contactsLink": "Контакти",
            "MajorName": "АвтоМажор",
            "DescriptionAutoMajorBackphotoDiv":"Ми надаємо послуги з якісного ремонту та перетяжки салонів автомеблів, маємо власне виробництво авточохлів та автонакидок",
            "CorName": "с Білогородка,вул Володимирська-35 Б",


            /* unified word in differend ofers pages*/

            "NameOfRozdilOurWorks":"НАШІ РОБОТИ",

            /* MainPage */
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

            /* Peretiazka Salonu */
            "BannerTextNmaeOfCategoryPeretiazkaSalonu" : "ПЕРЕТЯЖКА САЛОНУ",
            "nameOfDescriptionPeretiazkaSalonuText1":"Перетяжка та пошив салону",
            "nameOfDescriptionPeretiazkaSalonuText2":"є одним із основних напрямків діяльності нашої компанії.",
            "nameOfDescriptionPeretiazkaSalonuText3":"Перетяжка та пошив салону",
            "nameOfDescriptionPeretiazkaSalonuText4":"Повний рестайлінг інтер’єру – це перетяжка сидінь автомобіля шкірою, екошкірою, текстилем, алькантарою. Можна відтворити заводський дизайн чи, навпаки, додати індивідуальних елементів. Виконуємо як комплексну перетяжку салону, так і часткове перешиття сидінь.",
            "nameOfDescriptionPeretiazkaSalonuText5":"Ми продумуємо усе до дрібниць, використовуємо найякісніші матеріали та найоптимальніші рішення для перетяжки салону та ремонту сидінь.",
            "nameOfDescriptionPeretiazkaSalonuText6":"Перетяжка салону авто може бути виконана в наступних варіаціях:",
            "nameOfDescriptionPeretiazkaSalonuText7":"Комплексна перетяжка виконується, коли оригінальна обшивка салону зношена і потребує повної заміни або ж ви хочете кардинально змінити стиль салону вашого автомобіля.",
            "nameOfDescriptionPeretiazkaSalonuText8":"Перетяжка сидінь – виконується як у комплексі з перетяжкою всього салону, так і окремо.",
            "nameOfDescriptionPeretiazkaSalonuText9":"Перетяжка елементів салону це перетяжка ",
            "nameOfDescriptionPeretiazkaSalonuText10":"та інших елементів.",
            "nameOfDescriptionPeretiazkaSalonuText11":"Матеріали, які ми використовуємо для перетяжки автосалону",
            "nameOfDescriptionPeretiazkaSalonuText12":"Матеріал повинен бути міцним, зносостійким, володіти стійкістю до забруднень, вологи та ультрафіолету. Найбільш затребуваними є:",
            "nameOfDescriptionPeretiazkaSalonuText13":"Натуральна шкіра – витримує великі перепади температур, стійка до УФ-променів та стирання.",
            "nameOfDescriptionPeretiazkaSalonuText14":"Алькантара – синтетичний аналог замші, який забезпечує м'якість та комфорт.",
            "nameOfDescriptionPeretiazkaSalonuText15":"Екошкіра – міцний та дихаючий матеріал, простий у догляді.",
            "nameOfDescriptionPeretiazkaSalonuText16":"Автотканина – спеціальні тканини для автомобілів, які не змінюють відтінок та витримують хімчистку.",
            "nameOfDescriptionPeretiazkaSalonuText17":"Відновлення салону авто",
            "nameOfDescriptionPeretiazkaSalonuText18":"Оздоблення натуральною шкірою займає перше місце серед матеріалів.",
            "nameOfDescriptionPeretiazkaSalonuText19":"Що стосується недоліків шкіри, з часом через неправильний догляд вона може тьмяніти, розтягуватись або стискатись.",
            "nameOfDescriptionPeretiazkaSalonuText20":"Відновлення алькантарою – чудовий варіант для тих, хто цінує комфорт. Вона не ковзає навіть при крутих маневрах.",
            "nameOfDescriptionPeretiazkaSalonuText21":"Відновлення екошкірою – один із популярних штучних матеріалів, що відрізняється гіпоалергенністю та простотою догляду.",
            "nameOfDescriptionPeretiazkaSalonuText22":"Тканина для автомобілів – спеціалізовані тканини, стійкі до розривів та забруднень.",
            "nameOfDescriptionPeretiazkaSalonuText23":"Комбінована оббивка",
            "nameOfDescriptionPeretiazkaSalonuText24":"Також ви можете замовити оббивку з кількох матеріалів. Комбінуючи екошкіру, алькантару та натуральну шкіру, ми створимо новий, ексклюзивний дизайн салону вашого авто.",

            /* Peretiazka Salonu - links */
            "LinkOnPagePeretiazkaSalonu1":"дверних карт",
            "LinkOnPagePeretiazkaSalonu2":"стелі",
            "LinkOnPagePeretiazkaSalonu3":"стійок",
            "LinkOnPagePeretiazkaSalonu4":"сонцезахисних козирків",
            "LinkOnPagePeretiazkaSalonu5":"керма",
            "LinkOnPagePeretiazkaSalonu6":"чохла КПП",
            "LinkOnPagePeretiazkaSalonu7":"підлокітників",


            /* Peretiazka Kerma */
            "BannerTextNmaeOfCategoryPeretiazkaKerma":"ПЕРЕТЯЖКА КЕРМА,КПП,РУЧНЕ ГАЛЬМО",
            "nameOfDescriptionPeretiazkaKerma1":"Перетяжка керма",
            "nameOfDescriptionPeretiazkaKerma2":"Зручне кермо – запорука вашої безпеки на дорозі. Адже швидкість повороту, яка важлива в критичних моментах, залежить від того, наскільки надійно ви тримаєте кермо.",
            "nameOfDescriptionPeretiazkaKerma3":"5 причин оновити обшивку",
            "nameOfDescriptionPeretiazkaKerma4":"не подобається оригінальна оббивка виробника в новому авто;",
            "nameOfDescriptionPeretiazkaKerma5":"знос: погіршення зовнішнього вигляду, виникнення потертостей, щілин;",
            "nameOfDescriptionPeretiazkaKerma6":"передпродажна підготовка;",
            "nameOfDescriptionPeretiazkaKerma7":"заміною обшивки керма можна досягти кращої тактильної взаємодії. Водієві стає зручніше керувати транспортним засобом, вдаються більш складні маневри, руки менше ковзають;",
            "nameOfDescriptionPeretiazkaKerma8":"змінити атмосферу в салоні.",
            "nameOfDescriptionPeretiazkaKerma9":"Матеріали, які ми використовуємо для перетяжки керма",
            "nameOfDescriptionPeretiazkaKerma10":"Натуральна шкіра, каучуковий термовініл.",
            "nameOfDescriptionPeretiazkaKerma11":"Професійна перетяжка шкіри на кермі авто",
            "nameOfDescriptionPeretiazkaKerma12":"Це в першу чергу робота з натуральною шкірою. Вона екологічна, довговічна і невибаглива в догляді.",
            "nameOfDescriptionPeretiazkaKerma13":"В каталозі майстерні – тільки перевірена часом автомобільна шкіра європейських виробників (Nappa, Monza, Catania, Dakota та інші). Гладка, структурна, перфорована.",
            "nameOfDescriptionPeretiazkaKerma14":"Переваги:",
            "nameOfDescriptionPeretiazkaKerma15":"представницький вигляд та відмінна якість;",
            "nameOfDescriptionPeretiazkaKerma16":"чудове зчеплення з руками. Шкіряна обшивка прекрасно лягає в руку, добре утримується, дозволяє відчути найменший рух керма;",
            "nameOfDescriptionPeretiazkaKerma17":"відмінна гігроскопічність не дає рукам ковзати;",
            "nameOfDescriptionPeretiazkaKerma18":"зносостійкість.",
            "nameOfDescriptionPeretiazkaKerma19":"Перетяжка керма каучуковим термовінілом",
            "nameOfDescriptionPeretiazkaKerma20":"Однак не менш популярним є перетяжка керма каучуковим термовінілом.",
            "nameOfDescriptionPeretiazkaKerma21":"Термовініл для перетяжки керма буває гладкий з текстурою шкіри та перфорований.",
            "nameOfDescriptionPeretiazkaKerma22":"Перетягнуте каучуковим матеріалом кермо має презентабельний, престижний вигляд. Поверхня керма при цьому приємна на дотик - і в спеку, і в холод.",
            "nameOfDescriptionPeretiazkaKerma23":"Догляд",
            "nameOfDescriptionPeretiazkaKerma24":"Догляд за обтягнутими елементами салону дуже простий. Каучук досить регулярно протирати вологою тканиною та використовувати захисну поліроль з антистатичним ефектом. Не відрізняючись від натуральної шкіри на вигляд, каучуковий матеріал гармонійно поєднується з будь-якими матеріалами інтер'єру салону автомобіля.",
            "nameOfDescriptionPeretiazkaKerma25":"Переваги:",
            "nameOfDescriptionPeretiazkaKerma26":"стійкий до стирання (гарантія пробігу керма понад 100 000 км);",
            "nameOfDescriptionPeretiazkaKerma27":"стійкий до перепадів температур: холоду та спеки;",
            "nameOfDescriptionPeretiazkaKerma28":"стійкий до сонячних променів;",
            "nameOfDescriptionPeretiazkaKerma29":"стійкий до різноманітних механічних, хімічних пошкоджень, а також до розчинників;",
            "nameOfDescriptionPeretiazkaKerma30":"приємний на дотик;",
            "nameOfDescriptionPeretiazkaKerma31":"нетоксичний;",
            "nameOfDescriptionPeretiazkaKerma32":"має різноманітні текстури та відтінки.",
            "nameOfDescriptionPeretiazkaKerma33":"Де ще використовується каучуковий матеріал?",
            "nameOfDescriptionPeretiazkaKerma34":"Каучуковий матеріал використовується також для ручок, чохлів на важелі КПП, дверних карт, передніх панелей.",



            /* Peretiazka Steli */
            "nameOfDescriptionPeretiazkaSteli1": "Перетяжка стелі, стійок, козирків",
            "nameOfDescriptionPeretiazkaSteli2": "Активна експлуатація автомобіля так чи інакше позначається на зовнішньому вигляді інтер’єру салону. І стеля не виняток. Плями, механічні ушкодження у вигляді пропалів, подряпин, порізів, відпала тканина від часу експлуатації або після невдалої хімчистки – з подібними проблемами стикався практично кожен власник авто.",
            "nameOfDescriptionPeretiazkaSteli3": "Довірте рішення цієї проблеми професіоналам. У нас працюють кращі фахівці.",
            "nameOfDescriptionPeretiazkaSteli4": "Що входить у послугу?",
            "nameOfDescriptionPeretiazkaSteli5": "Перетяжка стелі може бути окремо або в комплексі з перетяжкою стійок, сонцезахисних козирків, ручок. При необхідності проводиться фарбування пластику салону під колір обшивки.",
            "nameOfDescriptionPeretiazkaSteli6": "Матеріали для перетяжки",
            "nameOfDescriptionPeretiazkaSteli7": "Тканини та шкіра, якими майстри обтягують елементи стелі автомобіля, еластичні, приймають будь-яку форму. Деякі з них відштовхують воду, не горять та легко чистяться. Найбільш популярні матеріали:",
            "nameOfDescriptionPeretiazkaSteli8": "алькантара;",
            "nameOfDescriptionPeretiazkaSteli9": "екошкіра;",
            "nameOfDescriptionPeretiazkaSteli10": "оригінальні автомобільні тканини (велюр, креп, флок, текстиль та інші).",
            

            /* Peretiazka DoorCarts */
            "BannerTextNmaeOfCategoryPeretiazkaDoorCarts":"ПЕРЕТЯЖКА ДВЕРНИХ КАРТ",
            "nameOfDescriptionPeretiazkaDoorCarts1": "Перетяжка дверних карт",
            "nameOfDescriptionPeretiazkaDoorCarts2": "Перетяжка дверних карт – надійний спосіб повернути дверям автомобіля презентабельний зовнішній вигляд і підкреслити індивідуальність салону. Вона може виконуватись у комплексі з",
            "nameOfDescriptionPeretiazkaDoorCarts3": "Це досить кропітка робота, як і все, що ми робимо в нашому автоательє. Вона потребує певних навичок, уваги та професіоналізму.",
            "nameOfDescriptionPeretiazkaDoorCarts12": "перетяжкою салону",
            "nameOfDescriptionPeretiazkaDoorCarts4": "Який матеріал підходить для перетяжки дверних карт?",
            "nameOfDescriptionPeretiazkaDoorCarts5": "Для перетяжки дверних карт можна використовувати ті ж матеріали, що і для внутрішньої оббивки. Це може бути:",
            "nameOfDescriptionPeretiazkaDoorCarts6": "Натуральна шкіра",
            "nameOfDescriptionPeretiazkaDoorCarts7": "Екошкіра",
            "nameOfDescriptionPeretiazkaDoorCarts8": "Автотканина",
            "nameOfDescriptionPeretiazkaDoorCarts9": "Алькантара",
            "nameOfDescriptionPeretiazkaDoorCarts10": "Вініл",
            "nameOfDescriptionPeretiazkaDoorCarts11": "Та інші оригінальні автомобільні тканини",
            "nameOfDescriptionPeretiazkaDoorCarts13": "Обшивка дверних карт повинна відповідати загальному стилю автомобіля, бути міцною і стійкою до механічних пошкоджень. Ми завжди враховуємо всі побажання наших замовників.",





            /* Instal Chohli */
            "BannerTextNmaeOfCategoryInstalChohli":"ВСТАНОВЛЕННЯ АВТОЧОХЛІВ",
            "nameOfDescriptionInstalChohli1": "Встановлення авточохлів",
            "nameOfDescriptionInstalChohli2": "Наше автоательє не лише має власне , а також виконує їх встановлення. До того ж, ми надаємо послуги з встановлення авточохлів, які ви купили в інших виробників.",
            "nameOfDescriptionInstalChohli21": "виробництво авточохлів",
            "nameOfDescriptionInstalChohli3": "Пам’ятайте: професійне встановлення продовжить строк служби авточохлів. Правильно встановлені чохли – гарантія бездоганної посадки на сидіннях вашого авто.",
            "nameOfDescriptionInstalChohli4": "Як правильно підібрати авточохли?",
            "nameOfDescriptionInstalChohli5": "Автомобільні чохли потрібно підбирати не універсальні, а під конкретну марку авто. Так ви будете впевнені, що розмір чохлів і сидінь на 100% співпадуть між собою.",
            "nameOfDescriptionInstalChohli6": "Види встановлення",
            "nameOfDescriptionInstalChohli7": "Встановлення може бути стандартним або з ушиванням посадкових частин. Ми рекомендуємо другий варіант.",
            "nameOfDescriptionInstalChohli8": "Чому?",
            "nameOfDescriptionInstalChohli9": "Продовжує строк служби авточохлів.",
            "nameOfDescriptionInstalChohli10": "Салон виглядає так, ніби було зроблено повну перетяжку сидінь.",
            "nameOfDescriptionInstalChohli11": "Підшивка авточохла до сидіння виконується без слідів і пошкоджень рідної оббивки.",
            "nameOfDescriptionInstalChohli12": "Як відбувається встановлення?",
            "nameOfDescriptionInstalChohli13": "Щоб правильно і професійно встановити авточохли, потрібно:",
            "nameOfDescriptionInstalChohli14": "1 Зняти всі сидіння.",
            "nameOfDescriptionInstalChohli15": "2 Одягнути авточохли.",
            "nameOfDescriptionInstalChohli16": "3 Встановити сидіння на місце.",
            "nameOfDescriptionInstalChohli17": "4 Підключити всі роз'єми, щоб система працювала коректно.",
            "nameOfDescriptionInstalChohli18": "Скільки часу займає встановлення?",
            "nameOfDescriptionInstalChohli19": "Процедура займає від 2 до 4 годин.",
            "nameOfDescriptionInstalChohli20": "Гарантія на роботу – 1 рік!",


            /* Chohli creation */
            "BannerTextNmaeOfCategoryChohliCreation":"ВИРОБНИЦТВО МОДЕЛЬНИХ АВТОЧОХЛІВ",
            "nameOfDescriptionInstalChohli1": "Модельні авточохли рівня перетяжки",
            "nameOfDescriptionInstalChohli2": "Модельні авточохли – комфорт у салоні та надійний захист сидінь.",
            "nameOfDescriptionInstalChohli3": "Маємо власне виробництво авточохлів та  .",
            "nameOfDescriptionInstalChohli4": "автонакидок",
            "nameOfDescriptionInstalChohli5": "У нас ви не знайдете стандартного макету підбору чохлів, як на інших сайтах, бо ми використовуємо індивідуальний підхід до кожного замовника. А що стосується цін – вони такі ж, як і в інших виробників, а іноді навіть нижчі. Проте якість у нас бездоганна. До того ж ми даємо гарантію не лише на вироби, а й на нашу роботу.",
            "nameOfDescriptionInstalChohli6": "Наші авточохли відповідають таким вимогам:",
            "nameOfDescriptionInstalChohli7": "ідеальна посадка;",
            "nameOfDescriptionInstalChohli8": "безпека;",
            "nameOfDescriptionInstalChohli9": "бездоганна якість;",
            "nameOfDescriptionInstalChohli10": "довговічність;",
            "nameOfDescriptionInstalChohli11": "практичність (простота в догляді);",
            "nameOfDescriptionInstalChohli12": "красивий сучасний дизайн.",
            "nameOfDescriptionInstalChohli13": "Ідеальна посадка",
            "nameOfDescriptionInstalChohli14": "Досягається завдяки точним лекалам. Це кропітка і відповідальна робота. Наші майстрині проміряють кожну деталь сидіння авто, що гарантує ідеальну посадку чохлів. З першого погляду здається, ніби це професійна перетяжка салону.",
            "nameOfDescriptionInstalChohli15": "Безпека",
            "nameOfDescriptionInstalChohli16": "Наші технологи врахували всі системи безпеки автомобіля. Чохли повністю сумісні з активними підголовниками, підігрівом, не заважають роботі електронних модулів та AirBag. Подушка безпеки спрацьовує без втрати властивостей завдяки послабленому шву у відповідних місцях. Авточохли витримують великі навантаження завдяки міцним швам і якісним матеріалам.",
            "nameOfDescriptionInstalChohli17": "Якість матеріалів",
            "nameOfDescriptionInstalChohli18": "Ми використовуємо тільки найкращі матеріали та контролюємо якість на всіх стадіях виробництва. Чохли виготовляються виключно з гіпоалергенних, дихаючих, стійких до пошкоджень тканин з антистатичними властивостями.",
            "nameOfDescriptionInstalChohli19": "Матеріали:",
            "nameOfDescriptionInstalChohli20": "гладка та перфорована екошкіра;",
            "nameOfDescriptionInstalChohli21": "алькантара (антара);",
            "nameOfDescriptionInstalChohli22": "екозамш з водовідштовхувальним просоченням.",
            "nameOfDescriptionInstalChohli23": "Екошкіра добре тягнеться та зберігає форму під час експлуатації, не боїться перепадів температур. Алькантара (екозамш) ідентична натуральній замші, не ковзає, практично не нагрівається влітку та зігріває взимку. Усі матеріали повітропроникні, мають високу зносостійкість і легко очищуються.",
            "nameOfDescriptionInstalChohli24": "Комбінація матеріалів",
            "nameOfDescriptionInstalChohli25": "Гладку екошкіру ми використовуємо на бокових частинах сидінь, позаду та на підголівниках. Перфоровану екошкіру, алькантару або екозамш – у середній частині чохлів. Таке поєднання забезпечує довговічність авточохлів та комфорт у поїздках.",
            "nameOfDescriptionInstalChohli26": "Легкість у догляді",
            "nameOfDescriptionInstalChohli27": "Після встановлення чохлів ви забудете про сліди від ніг на спинках передніх сидінь – тепер для очищення достатньо легкого вологого прибирання.",
            "nameOfDescriptionInstalChohli28": "Професійне встановлення",
            "nameOfDescriptionInstalChohli29": "Щоб полегшити вам життя, ми не лише виготовляємо, а й встановлюємо авточохли. Професійне встановлення продовжує термін їх експлуатації. Ми даємо гарантію як на вироби, так і на роботу.",
            "nameOfDescriptionInstalChohli30": "Звернувшись до 'АвтоМажор', ви отримаєте бездоганний сервіс, гарантію якості та позбудетеся зайвих стресів.",


            /* PERETIAZKA KPP */
            "BannerTextNmaeOfCategoryPeretiazkaKPP":"ПЕРЕТЯЖКА СЕЛЕКТОРУ КПП",
            "nameOfDescriptionPeretiazkaKPP1": "Перетяжка селектора КПП, ручки КПП, ручного гальма",
            "nameOfDescriptionPeretiazkaKPP2": "Перетяжка може бути виконана як окремо, так і в комплексі з : Постійний контакт із руками водія призводить до швидкого забруднення та зносу заводської обшивки. Покриття втрачає свій вигляд, з’являються потертості, тріщини.",
            "nameOfDescriptionPeretiazkaKPP3": "Матеріали",
            "nameOfDescriptionPeretiazkaKPP4": "Ми використовуємо матеріали з високими експлуатаційними та естетичними характеристиками:",
            "nameOfDescriptionPeretiazkaKPP5": "Стійкі до зношування",
            "nameOfDescriptionPeretiazkaKPP6": "Стійкі до УФ-променів",
            "nameOfDescriptionPeretiazkaKPP7": "Стійкі до вологи та хімічних речовин",
            "nameOfDescriptionPeretiazkaKPP8": "Приємні на дотик",
            "nameOfDescriptionPeretiazkaKPP9": "Не ковзають у руці",
            "nameOfDescriptionPeretiazkaKPP10": "Основні матеріали:",
            "nameOfDescriptionPeretiazkaKPP11": "Натуральна шкіра – довговічна, міцна, приємна на дотик",
            "nameOfDescriptionPeretiazkaKPP12": "Каучуковий термовініл – зносостійкий, має гарну тактильність",
            "nameOfDescriptionPeretiazkaKPP13": "Переваги перетяжки",
            "nameOfDescriptionPeretiazkaKPP14": "Перетяжка не тільки відновлює естетичний вигляд, але й покращує тактильні відчуття, робить керування комфортнішим.",
            "nameOfDescriptionPeretiazkaKPP15": "Звертайтеся до 'АвтоМажор' – ми гарантуємо якісну роботу та довговічний результат!",
            "LinkOfDescriptionPeretiazkaKPP1":"перетяжкою керма ,",
            "LinkOfDescriptionPeretiazkaKPP2":"підлокітників та інших елементів салону",


            /* RestavrationSeats */
            "BannerTextNmaeOfCategoryRestavrationSeats":"РЕСТАВРАЦІЯ СИДІНЬ,ПОРОЛОНУ",
            "nameOfDescriptionRestavrationSeats1": "Ремонт сидінь та реставрація поролону",
            "nameOfDescriptionRestavrationSeats2": "Локальний ремонт автомобільних сидінь – це заміна зношених деталей оббивки, реставрація “просівшого” поролону, ушивання розтягнутих шкіряних елементів.",
            "nameOfDescriptionRestavrationSeats3": "При ремонті сидінь ми ретельно підбираємо матеріал, щоб він максимально відповідав рідній оббивці.",
            "nameOfDescriptionRestavrationSeats4": "Можливі матеріали:",
            "nameOfDescriptionRestavrationSeats5": "Натуральна шкіра",
            "nameOfDescriptionRestavrationSeats6": "Алькантара",
            "nameOfDescriptionRestavrationSeats7": "Екошкіра або оригінальний шкірзамінник",
            "nameOfDescriptionRestavrationSeats8": "Автомобільні тканини",
            "nameOfDescriptionRestavrationSeats9": "Коли потрібна реставрація поролону?",
            "nameOfDescriptionRestavrationSeats10": "При тривалій експлуатації автомобіля жорсткість, форма та бічна підтримка сидінь можуть порушуватися через зношування поролонової основи або поломку металевого каркасу. Це може спричиняти:",
            "nameOfDescriptionRestavrationSeats11": "Дискомфорт під час поїздок",
            "nameOfDescriptionRestavrationSeats12": "Біль у спині та втому водія або пасажира",
            "nameOfDescriptionRestavrationSeats13": "Зниження концентрації водія, що збільшує ризик ДТП",
            "nameOfDescriptionRestavrationSeats14": "Проминання, кришіння та розриви оббивки",
            "nameOfDescriptionRestavrationSeats15": "Чому варто звернутися до професіоналів?",
            "nameOfDescriptionRestavrationSeats16": "Самостійний ремонт поролонової основи рідко дає бажаний результат. Наші майстри професійно відреставрують сидіння та всі м'які елементи крісла за доступною ціною.",
            "nameOfDescriptionRestavrationSeats17": "Вартість ремонту",
            "nameOfDescriptionRestavrationSeats18": "Ціна залежить від обсягу робіт: часткова реставрація або повна заміна наповнювача. Ми пропонуємо повернення ергономічності та комфорту вашого крісла за найкращими цінами!",
            "nameOfDescriptionRestavrationSeats19": "Звертайтеся в АвтоМажор – відновимо комфорт вашого авто!",




            /* PeretiazkaPidlokitnikiv */
            "BannerTextNmaeOfCategoryPeretiazkaPidlokitnikiv":"ПЕРЕТЯЖКА ПІДЛОКІТНИКІВ",
            "nameOfDescriptionPeretiazkaPidlokitnikiv1": "Перетяжка підлокітників та інших елементів салону",
            "nameOfDescriptionPeretiazkaPidlokitnikiv2": "У процесі користування підлокітник автомобіля, як і весь салон, зношується. Покриття втрачає свій зовнішній вигляд: з’являються потертості, тріщини. Саме тому до нас звертаються з проханням зробити перетяжку цього та інших елементів салону.",
            "nameOfDescriptionPeretiazkaPidlokitnikiv3": "Який матеріал вибрати?",
            "nameOfDescriptionPeretiazkaPidlokitnikiv4": "Матеріал для перетяжки повинен бути міцним, стійким до забруднень і водночас гармонійно вписуватись у загальний стиль салону авто. Ми рекомендуємо:",
            "nameOfDescriptionPeretiazkaPidlokitnikiv5": "Натуральну шкіру",
            "nameOfDescriptionPeretiazkaPidlokitnikiv6": "Оригінальний шкірзамінник",
            "nameOfDescriptionPeretiazkaPidlokitnikiv7": "Екошкіру",
            "nameOfDescriptionPeretiazkaPidlokitnikiv8": "Алькантару або їх поєднання",
            "nameOfDescriptionPeretiazkaPidlokitnikiv9": "Перераховані матеріали є найбільш практичними і зносостійкими, а значить, прослужать вам довгі роки.",
            "nameOfDescriptionPeretiazkaPidlokitnikiv10": "Наші переваги",
            "nameOfDescriptionPeretiazkaPidlokitnikiv11": "Наші майстри виконають професійну перетяжку будь-якого елемента салону, дотримуючись усіх технологій та з урахуванням ваших побажань.",
            "nameOfDescriptionPeretiazkaPidlokitnikiv12": "Звертайтеся в АвтоМажор – повернемо салону вашого авто презентабельний вигляд!",



            /* RestavrationMebliv */
            "BannerTextNmaeOfCategoryRestavrationMebliv":"ПЕРЕТЯЖКА МЕБЛІВ",
            "nameOfDescriptionRestavrationMebliv1": "Реставрація та перетяжка меблів",
            "nameOfDescriptionRestavrationMebliv2": "З часом оббивка меблів зношується, втрачає привабливий вигляд і комфорт. Наші майстри професійно відреставрують ваші меблі, повернувши їм первісний стан або навіть покращивши дизайн.",
            "nameOfDescriptionRestavrationMebliv3": "Який матеріал вибрати?",
            "nameOfDescriptionRestavrationMebliv4": "Матеріал для реставрації повинен бути зносостійким, приємним на дотик і відповідати загальному стилю інтер’єру. Ми пропонуємо:",
            "nameOfDescriptionRestavrationMebliv5": "Натуральну шкіру",
            "nameOfDescriptionRestavrationMebliv6": "Оригінальний шкірзамінник",
            "nameOfDescriptionRestavrationMebliv7": "Екошкіру",
            "nameOfDescriptionRestavrationMebliv8": "Велюр, жакард, мікрофібру та інші меблеві тканини",
            "nameOfDescriptionRestavrationMebliv9": "Ми допоможемо підібрати матеріал, що відповідатиме вашим вимогам та гармонійно впишеться в інтер'єр.",
            "nameOfDescriptionRestavrationMebliv10": "Наші переваги",
            "nameOfDescriptionRestavrationMebliv11": "Ми використовуємо тільки якісні матеріали та технології, які забезпечують довговічність реставрації. Роботи виконуються швидко та професійно, враховуючи всі ваші побажання.",
            "nameOfDescriptionRestavrationMebliv12": "Звертайтеся в АвтоМажор – вдихнемо нове життя у ваші меблі!",


            /* EvaCarpets */
            "BannerTextNmaeOfCategoryEvaCarpets":"EVA КИЛИМКИ,ОРГАНАЙЗЕРИ",
            "nameOfDescriptionEvaCarpets1": "EVA КИЛИМКИ та ОРГАНАЙЗЕРИ в багажник авто",
            "nameOfDescriptionEvaCarpets2": "EVA Килимки",
            "nameOfDescriptionEvaCarpets3": "Килимки виготовляємо з екологічно чистого матеріалу EVA (Етиленвінілацетат), який має унікальні властивості.",
            "nameOfDescriptionEvaCarpets4": "Переваги EVA килимків:",
            "nameOfDescriptionEvaCarpets5": "Унікальна чарункова структура, яка утримує до 2 літрів води під нахилом 45°;",
            "nameOfDescriptionEvaCarpets6": "Всесезонна експлуатація – матеріал не змінює своїх властивостей від -50°C до +70°C;",
            "nameOfDescriptionEvaCarpets7": "Ідеальна посадка – пошиття за оригінальними лекалами з заводськими кріпленнями;",
            "nameOfDescriptionEvaCarpets8": "Висока зносостійкість – термін служби понад 7 років.",
            "nameOfDescriptionEvaCarpets9": "Органайзери в багажник авто",
            "nameOfDescriptionEvaCarpets10": "Наші органайзери місткі, практичні та зручні у використанні.",
            "nameOfDescriptionEvaCarpets11": "Матеріали:",
            "nameOfDescriptionEvaCarpets12": "Шиємо з EVA матеріалу та екошкіри, які забезпечують довговічність і практичність у використанні.",
            "nameOfDescriptionEvaCarpets13": "Переваги органайзерів:",
            "nameOfDescriptionEvaCarpets14": "Зносостійкий та міцний матеріал EVA гарантує довгий термін служби;",
            "nameOfDescriptionEvaCarpets15": "Стійкість до морозу (-50°C) та спеки (+50°C), ультрафіолету та зимових хімреагентів;",
            "nameOfDescriptionEvaCarpets16": "Якісні застібки та липучки для надійного кріплення;",
            "nameOfDescriptionEvaCarpets17": "Простота догляду – достатньо просто промити водою під напором;",
            "nameOfDescriptionEvaCarpets18": "Не мнеться і зберігає форму навіть після тривалої експлуатації;",
            "nameOfDescriptionEvaCarpets19": "Зручні текстильні ручки для легкого транспортування.",

              /* CreationNakidki */
              "BannerTextNmaeOfCategoryCreationNakidki":"ВИРОБНИЦТВО АВТОНАКИДОК",
              "nameOfDescriptionCreationNakidki1": "Автонакидки",
              "nameOfDescriptionCreationNakidki2": "Автоательє АвтоМажор — виробник автомобільних накидок високої якості, що здатні перевтілити інтер'єр будь-якого авто! Універсальні, підходять на будь-яке авто. Також шиємо індивідуальні накидки, враховуючи ваші побажання.",
              "nameOfDescriptionCreationNakidki3": "Для виробництва накидок використовуються сучасні матеріали. Екошкіра та \"дихаючі\" матеріали (алькантара, антара, екозамш, велюр), що пропускають підігрів сидінь або вентиляцію. Не парять влітку та зігрівають взимку.",
              "nameOfDescriptionCreationNakidki4": "Особливості накидок",
              "nameOfDescriptionCreationNakidki5": "Накидки тришарові:",
              "nameOfDescriptionCreationNakidki6": "Лицьова сторона: матеріал, що володіє високою стійкістю до ультрафіолетових променів та різких перепадів температур, завдяки чому вони не линяють, не вицвітають. Вони будуть вірними супутниками протягом багатьох років.",
              "nameOfDescriptionCreationNakidki7": "Виворітна частина: м'яка, але міцна на розрив тканина, яка відповідає за міцність накидок і збереження обшивки сидінь.",
              "nameOfDescriptionCreationNakidki8": "Наповнювач: поролон товщиною 10 мм, що створює захисний прошарок, здатний утримувати тепло взимку і не дозволяє нагріватись поверхні накидок влітку. Всі ці шари зшиті між собою міцною ниткою, утворюючи однорідне \"дихаюче\" полотно у вигляді рельєфних 3D ромбів. Накидки не втрачають форму під час експлуатації.",
              "nameOfDescriptionCreationNakidki9": "Як встановлюються накидки?",
              "nameOfDescriptionCreationNakidki10": "Накидки на сидіння надійно встановлюються на сидіння за допомогою фастексів на резинках та липучок. Тому під час руху накидки не \"ковзатимуть\" по сидінню завдяки чотириточковій фіксації на посадці та фіксації під підголовником."




























































        },
        "EN": {


            /* header /footer */
            "mainLink": "Home",
            "aboutUsLink": "About Us",
            "servicesLink": "Services",
            "pricelink": "Prices",
            "contactsLink": "Contacts",
            "MajorName": "AutoMajor",
            "DescriptionAutoMajorBackphotoDiv":"We provide high-quality car interior repair and upholstery services, and we have our own production of car seat covers and car throws",
            "CorName": "village of Bilogorodka, street Volodymyrska-35 B",

            /* unified word in differend ofers pages*/
            "NameOfRozdilOurWorks":"OUR WORKS",

            /* MainPage */
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


            /* Peretiazka Salonu */
            "BannerTextNmaeOfCategoryPeretiazkaSalonu" : "INTERIOR UPHOLSTERY",
            "nameOfDescriptionPeretiazkaSalonuText1":"Upholstery and sewing of interior",
            "nameOfDescriptionPeretiazkaSalonuText2":"is one of the main areas of our company's activity.",
            "nameOfDescriptionPeretiazkaSalonuText3":"Upholstery and sewing of interior",
            "nameOfDescriptionPeretiazkaSalonuText4":"Full interior restyling includes upholstery of car seats with leather, eco-leather, textile, or Alcantara. You can recreate the factory design or, on the contrary, add individual elements. We perform both complete interior upholstery and partial seat re-stitching.",
            "nameOfDescriptionPeretiazkaSalonuText5":"We think through every detail, use the highest quality materials, and apply the most optimal solutions for interior upholstery and seat repair.",
            "nameOfDescriptionPeretiazkaSalonuText6":"Car interior upholstery can be done in the following variations:",
            "nameOfDescriptionPeretiazkaSalonuText7":"Comprehensive upholstery is done when the original interior trim is worn out and needs a full replacement or if you want to drastically change the style of your car's interior.",
            "nameOfDescriptionPeretiazkaSalonuText8":"Seat upholstery is done both as part of a full interior reupholstery and separately.",
            "nameOfDescriptionPeretiazkaSalonuText9":"Upholstery of interior elements is upholstery",
            "nameOfDescriptionPeretiazkaSalonuText10":"and other elements.",
            "nameOfDescriptionPeretiazkaSalonuText11":"Materials we use for car interior upholstery",
            "nameOfDescriptionPeretiazkaSalonuText12":"The material should be durable, wear-resistant, and resistant to dirt, moisture, and ultraviolet light. The most demanded are:",
            "nameOfDescriptionPeretiazkaSalonuText13":"Genuine leather -withstands large temperature fluctuations, resistant to UV rays and abrasion.",
            "nameOfDescriptionPeretiazkaSalonuText14":"Alcantara is a synthetic alternative to suede that provides softness and comfort.",
            "nameOfDescriptionPeretiazkaSalonuText15":"Eco-leather is a durable and breathable material, easy to care for.",
            "nameOfDescriptionPeretiazkaSalonuText16":"Automotive fabric – special fabrics for cars that do not change color and can withstand dry cleaning.",
            "nameOfDescriptionPeretiazkaSalonuText17":"Car interior restoration",
            "nameOfDescriptionPeretiazkaSalonuText18":"Finishing with genuine leather takes the first place among materials.",
            "nameOfDescriptionPeretiazkaSalonuText19":"As for the disadvantages of leather, over time, due to improper care, it may become dull, stretch, or shrink.",
            "nameOfDescriptionPeretiazkaSalonuText20":"Restoring with Alcantara is a great option for those who value comfort. It does not slip even during sharp maneuvers.",
            "nameOfDescriptionPeretiazkaSalonuText21":"Restoration with eco-leather is one of the popular synthetic materials, known for its hypoallergenicity and ease of maintenance.",
            "nameOfDescriptionPeretiazkaSalonuText22":"Automotive fabric – specialized fabrics that are resistant to tears and stains.",
            "nameOfDescriptionPeretiazkaSalonuText23":"Combined upholstery",
            "nameOfDescriptionPeretiazkaSalonuText24":"You can also order upholstery made from several materials. By combining eco-leather, Alcantara, and natural leather, we will create a new, exclusive interior design for your car.",
            "nameOfDescriptionPeretiazkaSalonuText25":"",

            /* Peretiazka Salonu - links */
            "LinkOnPagePeretiazkaSalonu1":"door cards",
            "LinkOnPagePeretiazkaSalonu2":"ceiling",
            "LinkOnPagePeretiazkaSalonu3":"pillars",
            "LinkOnPagePeretiazkaSalonu4":"sun visors",
            "LinkOnPagePeretiazkaSalonu5":"steering wheel",
            "LinkOnPagePeretiazkaSalonu6":"gear shift boot",
            "LinkOnPagePeretiazkaSalonu7":"armrests",


            /* Peretiazka Kerma */
            "BannerTextNmaeOfCategoryPeretiazkaKerma":"STEERING WHEEL, GEAR SHIFT, HAND BRAKE UPHOLSTERY",
            "nameOfDescriptionPeretiazkaKerma1":"Steering wheel upholstery",
            "nameOfDescriptionPeretiazkaKerma2":"A comfortable steering wheel is the key to your safety on the road. The steering speed, which is crucial in critical moments, depends on how securely you grip the wheel.",
            "nameOfDescriptionPeretiazkaKerma3":"5 reasons to update the upholstery",
            "nameOfDescriptionPeretiazkaKerma4":"you don't like the original upholstery of the manufacturer in the new car;",
            "nameOfDescriptionPeretiazkaKerma5":"wear: deterioration of appearance, occurrence of abrasions, gaps;",
            "nameOfDescriptionPeretiazkaKerma6":"pre-sale preparation;",
            "nameOfDescriptionPeretiazkaKerma7":"By replacing the steering wheel upholstery, better tactile interaction can be achieved. The driver finds it more comfortable to control the vehicle, more complex maneuvers are possible, and hands slip less.",
            "nameOfDescriptionPeretiazkaKerma8":"change the atmosphere inside the cabin.",
            "nameOfDescriptionPeretiazkaKerma9":"Materials we use for steering wheel reupholstery",
            "nameOfDescriptionPeretiazkaKerma10":"Genuine leather, rubber thermoplastic vinyl.",
            "nameOfDescriptionPeretiazkaKerma11":"Professional leather steering wheel reupholstery",
            "nameOfDescriptionPeretiazkaKerma12":"This is primarily working with genuine leather. It is eco-friendly, durable, and low-maintenance.",
            "nameOfDescriptionPeretiazkaKerma13":"In the workshop catalog – only time-tested automotive leather from European manufacturers (Nappa, Monza, Catania, Dakota, and others). Smooth, textured, perforated.",
            "nameOfDescriptionPeretiazkaKerma14":"Advantages:",
            "nameOfDescriptionPeretiazkaKerma15":"elegant appearance and excellent quality;",
            "nameOfDescriptionPeretiazkaKerma16": "excellent grip with hands. The leather upholstery fits comfortably in the hand, holds well, and allows you to feel the slightest movement of the steering wheel;",
            "nameOfDescriptionPeretiazkaKerma17": "excellent hygroscopicity prevents hands from slipping;",
            "nameOfDescriptionPeretiazkaKerma18": "abrasion resistance.",
            "nameOfDescriptionPeretiazkaKerma19": "Steering Wheel Upholstery with Rubber Thermoplastic Vinyl",
            "nameOfDescriptionPeretiazkaKerma20": "However, another popular option is steering wheel upholstery with rubber thermoplastic vinyl.",
            "nameOfDescriptionPeretiazkaKerma21": "Thermoplastic vinyl for steering wheel upholstery comes in smooth leather texture and perforated versions.",
            "nameOfDescriptionPeretiazkaKerma22": "A steering wheel upholstered with rubber material has a presentable, prestigious look. The surface of the wheel is pleasant to the touch – both in heat and cold.",
            "nameOfDescriptionPeretiazkaKerma23": "Care",
            "nameOfDescriptionPeretiazkaKerma24": "Care for upholstered elements of the interior is very simple. Rubber should be regularly wiped with a damp cloth and treated with a protective polish with an anti-static effect. Not visually different from genuine leather, rubber material harmoniously blends with any interior materials of the car.",
            "nameOfDescriptionPeretiazkaKerma25": "Advantages:",
            "nameOfDescriptionPeretiazkaKerma26": "wear-resistant (guaranteed steering wheel mileage of over 100,000 km);",
            "nameOfDescriptionPeretiazkaKerma27": "resistant to temperature fluctuations: cold and heat;",
            "nameOfDescriptionPeretiazkaKerma28": "resistant to sunlight;",
            "nameOfDescriptionPeretiazkaKerma29": "resistant to various mechanical, chemical damages, and solvents;",
            "nameOfDescriptionPeretiazkaKerma30": "pleasant to the touch;",
            "nameOfDescriptionPeretiazkaKerma31": "non-toxic;",
            "nameOfDescriptionPeretiazkaKerma32": "comes in various textures and shades.",
            "nameOfDescriptionPeretiazkaKerma33": "Where else is rubber material used?",
            "nameOfDescriptionPeretiazkaKerma34": "Rubber material is also used for handles, gear shift knobs, door cards, and dashboards.",


            /* Peretiazka Steli */
            "nameOfDescriptionPeretiazkaSteli1": "Upholstery of the ceiling, pillars, visors",
            "nameOfDescriptionPeretiazkaSteli2": "Active operation of the car inevitably affects the appearance of the interior. The ceiling is no exception. Stains, mechanical damage in the form of burns, scratches, cuts, fabric coming off due to wear or after unsuccessful dry cleaning – such problems have been encountered by almost every car owner.",
            "nameOfDescriptionPeretiazkaSteli3": "Trust the solution of this problem to the professionals. We have the best specialists.",
            "nameOfDescriptionPeretiazkaSteli4": "What is included in the service?",
            "nameOfDescriptionPeretiazkaSteli5": "Ceiling upholstery can be done separately or as part of the complete upholstery of the pillars, sun visors, and handles. If necessary, plastic parts of the interior are painted to match the upholstery color.",
            "nameOfDescriptionPeretiazkaSteli6": "Materials for upholstery",
            "nameOfDescriptionPeretiazkaSteli7": "Fabrics and leather used by the specialists to upholster car ceiling elements are elastic and take any shape. Some of them repel water, are fire-resistant, and are easy to clean. The most popular materials include:",
            "nameOfDescriptionPeretiazkaSteli8": "alcantara;",
            "nameOfDescriptionPeretiazkaSteli9": "eco-leather;",
            "nameOfDescriptionPeretiazkaSteli10": "original automotive fabrics (velour, crepe, flock, textile, and others).",


            /* Peretiazka DoorCarts */
            "BannerTextNmaeOfCategoryPeretiazkaDoorCarts":"REUPHOLSTERY OF DOOR CARDS",
            "nameOfDescriptionPeretiazkaDoorCarts1": "Door Panel Upholstery",
            "nameOfDescriptionPeretiazkaDoorCarts2": "Door panel upholstery is a reliable way to restore the presentable appearance of car doors and emphasize the individuality of the interior. It can be done in combination with",
            "nameOfDescriptionPeretiazkaDoorCarts3": "This is quite meticulous work, as is everything we do in our auto atelier. It requires certain skills, attention, and professionalism.",
            "nameOfDescriptionPeretiazkaDoorCarts12": "interior upholstery",
            "nameOfDescriptionPeretiazkaDoorCarts4": "What material is suitable for door panel upholstery?",
            "nameOfDescriptionPeretiazkaDoorCarts5": "The same materials used for interior upholstery can be used for door panels. These include:",
            "nameOfDescriptionPeretiazkaDoorCarts6": "Genuine leather",
            "nameOfDescriptionPeretiazkaDoorCarts7": "Eco-leather",
            "nameOfDescriptionPeretiazkaDoorCarts8": "Automotive fabric",
            "nameOfDescriptionPeretiazkaDoorCarts9": "Alcantara",
            "nameOfDescriptionPeretiazkaDoorCarts10": "Vinyl",
            "nameOfDescriptionPeretiazkaDoorCarts11": "And other original automotive fabrics",
            "nameOfDescriptionPeretiazkaDoorCarts13": "Door panel upholstery should match the overall style of the car, be durable, and resistant to mechanical damage. We always take into account all the wishes of our customers.",

            /* Instal Chohli */
            "BannerTextNmaeOfCategoryInstalChohli":"INSTALLATION OF CAR COVERS",
            "nameOfDescriptionInstalChohli1": "Car Seat Cover Installation",
            "nameOfDescriptionInstalChohli2": "Our auto studio not only has its own , but also performs seat cover installation. In addition, we provide installation services for seat covers purchased from other manufacturers.",
            "nameOfDescriptionInstalChohli21": "seat cover manufacturing",
            "nameOfDescriptionInstalChohli3": "Remember: professional installation extends the lifespan of seat covers. Properly installed covers ensure a perfect fit on your car seats.",
            "nameOfDescriptionInstalChohli4": "How to Choose the Right Seat Covers?",
            "nameOfDescriptionInstalChohli5": "Car seat covers should be selected not as universal ones, but specifically for your car make and model. This ensures that the size of the covers and seats match 100%.",
            "nameOfDescriptionInstalChohli6": "Types of Installation",
            "nameOfDescriptionInstalChohli7": "Installation can be standard or with seat part stitching. We recommend the second option.",
            "nameOfDescriptionInstalChohli8": "Why?",
            "nameOfDescriptionInstalChohli9": "Extends the lifespan of seat covers.",
            "nameOfDescriptionInstalChohli10": "The interior looks as if the seats have been fully reupholstered.",
            "nameOfDescriptionInstalChohli11": "The seat cover is stitched to the seat without traces or damage to the original upholstery.",
            "nameOfDescriptionInstalChohli12": "How Does the Installation Process Work?",
            "nameOfDescriptionInstalChohli13": "To properly and professionally install seat covers, you need to:",
            "nameOfDescriptionInstalChohli14": "1 Remove all seats.",
            "nameOfDescriptionInstalChohli15": "2 Put on the seat covers.",
            "nameOfDescriptionInstalChohli16": "3 Reinstall the seats.",
            "nameOfDescriptionInstalChohli17": "4 Reconnect all plugs to ensure the system functions correctly.",
            "nameOfDescriptionInstalChohli18": "How Long Does Installation Take?",
            "nameOfDescriptionInstalChohli19": "The process takes between 2 to 4 hours.",
            "nameOfDescriptionInstalChohli20": "Work warranty – 1 year!",

             /* Chohli creation */
            "BannerTextNmaeOfCategoryChohliCreation":"MANUFACTURING OF CUSTOM CAR COVERS",
            "nameOfDescriptionInstalChohli1": "Model Car Covers of Upholstery Level",
            "nameOfDescriptionInstalChohli2": "Model car covers – comfort in the interior and reliable seat protection.",
            "nameOfDescriptionInstalChohli3": "We have our own car cover production and .",
            "nameOfDescriptionInstalChohli4": "car covers",
            "nameOfDescriptionInstalChohli5": "Here, you won’t find the standard layout for selecting covers like on other websites, because we use an individual approach to every customer. As for the prices, they are the same as with other manufacturers, and sometimes even lower. However, the quality is impeccable. Moreover, we provide a warranty not only for the products but also for our work.",
            "nameOfDescriptionInstalChohli6": "Our car covers meet the following requirements:",
            "nameOfDescriptionInstalChohli7": "perfect fit;",
            "nameOfDescriptionInstalChohli8": "safety;",
            "nameOfDescriptionInstalChohli9": "impeccable quality;",
            "nameOfDescriptionInstalChohli10": "durability;",
            "nameOfDescriptionInstalChohli11": "practicality (easy to care for);",
            "nameOfDescriptionInstalChohli12": "beautiful modern design.",
            "nameOfDescriptionInstalChohli13": "Perfect Fit",
            "nameOfDescriptionInstalChohli14": "This is achieved through precise templates. It’s a meticulous and responsible job. Our craftsmen measure every part of the car seat, ensuring a perfect fit of the covers. At first glance, it seems like a professional upholstery job.",
            "nameOfDescriptionInstalChohli15": "Safety",
            "nameOfDescriptionInstalChohli16": "Our engineers have considered all car safety systems. The covers are fully compatible with active headrests, heating, and do not interfere with the operation of electronic modules and airbags. The airbag deploys without losing its properties due to the weakened seam at the right places. The car covers withstand significant loads thanks to strong seams and high-quality materials.",
            "nameOfDescriptionInstalChohli17": "Material Quality",
            "nameOfDescriptionInstalChohli18": "We use only the best materials and control the quality at all stages of production. The covers are made from hypoallergenic, breathable, durable fabrics with anti-static properties.",
            "nameOfDescriptionInstalChohli19": "Materials:",
            "nameOfDescriptionInstalChohli20": "smooth and perforated eco-leather;",
            "nameOfDescriptionInstalChohli21": "alcantara (anta);",
            "nameOfDescriptionInstalChohli22": "eco-suede with water-repellent impregnation.",
            "nameOfDescriptionInstalChohli23": "Eco-leather stretches well and retains its shape during use, it is not afraid of temperature fluctuations. Alcantara (eco-suede) is identical to natural suede, does not slip, does not heat up much in the summer, and keeps warm in the winter. All materials are breathable, highly wear-resistant, and easy to clean.",
            "nameOfDescriptionInstalChohli24": "Combination of materials",
            "nameOfDescriptionInstalChohli25": "We use smooth eco-leather on the side parts of the seats, on the backrests, and on the headrests. Perforated eco-leather, alcantara, or eco-suede – in the middle part of the covers. This combination ensures the durability of the car covers and comfort during trips.",
            "nameOfDescriptionInstalChohli26": "Easy to care for",
            "nameOfDescriptionInstalChohli27": "After installing the covers, you will forget about the footprints on the backrests of the front seats – now, a simple wet cleaning is enough for cleaning.",
            "nameOfDescriptionInstalChohli28": "Professional Installation",
            "nameOfDescriptionInstalChohli29": "To make your life easier, we not only produce but also install car covers. Professional installation extends their service life. We provide a warranty for both the products and the work.",
            "nameOfDescriptionInstalChohli30": "By contacting 'AvtoMajor', you will receive impeccable service, quality warranty, and get rid of unnecessary stress.",
            
            /* PERETIAZKA KPP */
            "BannerTextNmaeOfCategoryPeretiazkaKPP":"GEAR SHIFT SELECTOR UPHOLSTERY",
            "nameOfDescriptionPeretiazkaKPP1": "Gear Selector, Gear Knob, and Handbrake Upholstery",
            "nameOfDescriptionPeretiazkaKPP2": "Upholstery can be done separately or as part of a package with steering wheel, armrests, and other interior elements. Constant contact with the driver’s hands leads to rapid contamination and wear of the factory upholstery. The covering loses its appearance, developing scuffs and cracks.",
            "nameOfDescriptionPeretiazkaKPP3": "Materials",
            "nameOfDescriptionPeretiazkaKPP4": "We use materials with high performance and aesthetic characteristics:",
            "nameOfDescriptionPeretiazkaKPP5": "Wear-resistant",
            "nameOfDescriptionPeretiazkaKPP6": "UV-resistant",
            "nameOfDescriptionPeretiazkaKPP7": "Resistant to moisture and chemicals",
            "nameOfDescriptionPeretiazkaKPP8": "Pleasant to the touch",
            "nameOfDescriptionPeretiazkaKPP9": "Non-slip grip",
            "nameOfDescriptionPeretiazkaKPP10": "Main materials:",
            "nameOfDescriptionPeretiazkaKPP11": "Genuine leather – durable, strong, and pleasant to the touch",
            "nameOfDescriptionPeretiazkaKPP12": "Rubberized thermovinyl – wear-resistant, with excellent tactile properties",
            "nameOfDescriptionPeretiazkaKPP13": "Advantages of Upholstery",
            "nameOfDescriptionPeretiazkaKPP14": "Upholstery not only restores the aesthetic appearance but also improves tactile sensations, making driving more comfortable.",
            "nameOfDescriptionPeretiazkaKPP15": "Contact 'AvtoMajor' – we guarantee high-quality work and long-lasting results!",
            "LinkOfDescriptionPeretiazkaKPP1":"steering wheel reupholstery",
            "LinkOfDescriptionPeretiazkaKPP2":"armrests and other interior elements",




            /* RestavrationSeats */
            "BannerTextNmaeOfCategoryRestavrationSeats":"SEAT REPAIR, FOAM RESTORATION",
            "nameOfDescriptionRestavrationSeats1": "Seat Repair and Foam Restoration",
            "nameOfDescriptionRestavrationSeats2": "Local car seat repair involves replacing worn upholstery parts, restoring sagging foam, and sewing up stretched leather elements.",
            "nameOfDescriptionRestavrationSeats3": "When repairing seats, we carefully select the material to match the original upholstery as closely as possible.",
            "nameOfDescriptionRestavrationSeats4": "Available materials:",
            "nameOfDescriptionRestavrationSeats5": "Genuine leather",
            "nameOfDescriptionRestavrationSeats6": "Alcantara",
            "nameOfDescriptionRestavrationSeats7": "Eco-leather or original leatherette",
            "nameOfDescriptionRestavrationSeats8": "Automotive fabrics",
            "nameOfDescriptionRestavrationSeats9": "When is foam restoration needed?",
            "nameOfDescriptionRestavrationSeats10": "With prolonged vehicle use, the seat’s stiffness, shape, and side support may deteriorate due to foam wear or metal frame breakage. This can cause:",
            "nameOfDescriptionRestavrationSeats11": "Discomfort during trips",
            "nameOfDescriptionRestavrationSeats12": "Back pain and fatigue for the driver or passenger",
            "nameOfDescriptionRestavrationSeats13": "Reduced driver concentration, increasing the risk of accidents",
            "nameOfDescriptionRestavrationSeats14": "Indentations, crumbling, and tears in the upholstery",
            "nameOfDescriptionRestavrationSeats15": "Why consult professionals?",
            "nameOfDescriptionRestavrationSeats16": "DIY foam base repair rarely delivers the desired results. Our specialists professionally restore seats and all soft elements of the chair at an affordable price.",
            "nameOfDescriptionRestavrationSeats17": "Repair cost",
            "nameOfDescriptionRestavrationSeats18": "The price depends on the scope of work: partial restoration or complete replacement of the filler. We offer the best prices for restoring your seat’s ergonomics and comfort!",
            "nameOfDescriptionRestavrationSeats19": "Contact AvtoMajor – we will restore the comfort of your car!",

            /* PeretiazkaPidlokitnikiv */
             "BannerTextNmaeOfCategoryPeretiazkaPidlokitnikiv":"UPHOLSTERY OF ARMRESTS",
             "nameOfDescriptionPeretiazkaPidlokitnikiv1": "Armrest and Interior Element Upholstery",
             "nameOfDescriptionPeretiazkaPidlokitnikiv2": "Over time, the car's armrest, like the entire interior, wears out. The covering loses its appearance: scuffs and cracks appear. That’s why customers come to us to reupholster this and other interior elements.",
             "nameOfDescriptionPeretiazkaPidlokitnikiv3": "Which material to choose?",
             "nameOfDescriptionPeretiazkaPidlokitnikiv4": "The upholstery material should be durable, resistant to dirt, and fit harmoniously into the overall car interior style. We recommend:",
             "nameOfDescriptionPeretiazkaPidlokitnikiv5": "Genuine leather",
             "nameOfDescriptionPeretiazkaPidlokitnikiv6": "Original leatherette",
             "nameOfDescriptionPeretiazkaPidlokitnikiv7": "Eco-leather",
             "nameOfDescriptionPeretiazkaPidlokitnikiv8": "Alcantara or their combination",
             "nameOfDescriptionPeretiazkaPidlokitnikiv9": "The listed materials are the most practical and durable, meaning they will serve you for many years.",
             "nameOfDescriptionPeretiazkaPidlokitnikiv10": "Our advantages",
             "nameOfDescriptionPeretiazkaPidlokitnikiv11": "Our specialists will professionally reupholster any interior element, following all technologies and taking your preferences into account.",
             "nameOfDescriptionPeretiazkaPidlokitnikiv12": "Contact AvtoMajor – we will restore your car interior’s elegant look!",

            /* RestavrationMebliv */
            "BannerTextNmaeOfCategoryRestavrationMebliv":"FURNITURE UPHOLSTERY",
            "nameOfDescriptionRestavrationMebliv1": "Furniture Restoration and Upholstery",
            "nameOfDescriptionRestavrationMebliv2": "Over time, furniture upholstery wears out, losing its attractive appearance and comfort. Our craftsmen professionally restore your furniture, bringing it back to its original state or even enhancing its design.",
            "nameOfDescriptionRestavrationMebliv3": "Which material to choose?",
            "nameOfDescriptionRestavrationMebliv4": "The material for restoration should be durable, pleasant to the touch, and match the overall interior style. We offer:",
            "nameOfDescriptionRestavrationMebliv5": "Genuine leather",
            "nameOfDescriptionRestavrationMebliv6": "Original leatherette",
            "nameOfDescriptionRestavrationMebliv7": "Eco-leather",
            "nameOfDescriptionRestavrationMebliv8": "Velour, jacquard, microfiber, and other furniture fabrics",
            "nameOfDescriptionRestavrationMebliv9": "We will help you choose a material that meets your requirements and harmonizes with your interior.",
            "nameOfDescriptionRestavrationMebliv10": "Our advantages",
            "nameOfDescriptionRestavrationMebliv11": "We use only high-quality materials and technologies that ensure long-lasting restoration. Work is performed quickly and professionally, considering all your preferences.",
            "nameOfDescriptionRestavrationMebliv12": "Contact AvtoMajor – we will breathe new life into your furniture!",


            /* EvaCarpets */
            "BannerTextNmaeOfCategoryEvaCarpets":"EVA MATS, ORGANIZERS",
            "nameOfDescriptionEvaCarpets1": "EVA CARPETS and ORGANIZERS for the car trunk",
            "nameOfDescriptionEvaCarpets2": "EVA Carpets",
            "nameOfDescriptionEvaCarpets3": "We manufacture carpets from environmentally friendly EVA (Ethylene Vinyl Acetate) material, which has unique properties.",
            "nameOfDescriptionEvaCarpets4": "Advantages of EVA carpets:",
            "nameOfDescriptionEvaCarpets5": "Unique honeycomb structure that holds up to 2 liters of water at a 45° incline;",
            "nameOfDescriptionEvaCarpets6": "All-season use – the material retains its properties from -50°C to +70°C;",
            "nameOfDescriptionEvaCarpets7": "Perfect fit – tailored to original templates with factory mounts;",
            "nameOfDescriptionEvaCarpets8": "High wear resistance – lifespan over 7 years.",
            "nameOfDescriptionEvaCarpets9": "Car trunk organizers",
            "nameOfDescriptionEvaCarpets10": "Our organizers are spacious, practical, and convenient to use.",
            "nameOfDescriptionEvaCarpets11": "Materials:",
            "nameOfDescriptionEvaCarpets12": "We sew from EVA material and eco-leather, ensuring durability and practicality.",
            "nameOfDescriptionEvaCarpets13": "Advantages of organizers:",
            "nameOfDescriptionEvaCarpets14": "Durable and wear-resistant EVA material guarantees a long service life;",
            "nameOfDescriptionEvaCarpets15": "Resistant to frost (-50°C) and heat (+50°C), UV rays, and winter chemicals;",
            "nameOfDescriptionEvaCarpets16": "High-quality fasteners and Velcro for secure attachment;",
            "nameOfDescriptionEvaCarpets17": "Easy maintenance – just rinse with water under pressure;",
            "nameOfDescriptionEvaCarpets18": "Does not crumple and retains its shape even after prolonged use;",
            "nameOfDescriptionEvaCarpets19": "Convenient textile handles for easy transportation.",
            
            

            /* CreationNakidki */
            "BannerTextNmaeOfCategoryCreationNakidki":"MANUFACTURING OF CAR COVERS",
            "nameOfDescriptionCreationNakidki1": "Car Seat Covers",
            "nameOfDescriptionCreationNakidki2": "AutoMajors upholstery workshop is a manufacturer of high-quality car seat covers that can transform the interior of any car! They are universal and fit any car. We also sew custom-made covers, taking into account your wishes.",
            "nameOfDescriptionCreationNakidki3": "Modern materials are used for the production of seat covers. Eco-leather and \"breathable\" materials (Alcantara, Antara, eco-suede, velour) allow seat heating or ventilation. They do not overheat in summer and keep warm in winter.",
            "nameOfDescriptionCreationNakidki4": "Features of seat covers",
            "nameOfDescriptionCreationNakidki5": "The covers are three-layered:",
            "nameOfDescriptionCreationNakidki6": "Front side: material with high resistance to UV rays and extreme temperature changes, which prevents fading and wear. They will be your reliable companions for many years.",
            "nameOfDescriptionCreationNakidki7": "Back side: soft but tear-resistant fabric that ensures durability and preserves the seat upholstery.",
            "nameOfDescriptionCreationNakidki8": "Padding: 10mm thick foam that creates a protective layer, retains heat in winter, and prevents overheating in summer. All these layers are stitched together with strong thread, forming a uniform \"breathable\" fabric with embossed 3D rhombuses. The covers do not lose their shape during use.",
            "nameOfDescriptionCreationNakidki9": "How to install seat covers?",
            "nameOfDescriptionCreationNakidki10": "The seat covers are securely fastened to the seats using buckles on elastic bands and Velcro. This ensures they do not slip while driving due to a four-point fixation on the seat and under the headrest."



            
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
