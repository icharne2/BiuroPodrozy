//Time do holiday and time

function czas() {
    let date = new Date();
    const form = new Intl.DateTimeFormat( 'pl', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                        } );
    
    let czas = date.toLocaleTimeString();
    
    const holiday = new Date(2021, 6, 26, 0, 0, 1);

        document.getElementById('wakacje').innerHTML = parseInt((holiday - date)/(24*60*60*1000)) + ' dni ' + (parseInt((holiday - date)/(60*60*1000)) % 24) + ' godzin ' + (parseInt((holiday - date)/(60*1000)) % (60)) + ' minut ' + (parseInt((holiday - date)/(1000)) % (60)) + ' sekund.';

    document.getElementById("today").innerHTML = form.format(date) + " " + czas;
}

setInterval("czas()", 1000);

//Cursor

new kursor({
    type: 4,
    removeDefaultCursor: true,
    color: "#FFFFFF"
});

//Quotes

function cytat(){
    var quotes = [
        "Ten kto żyje widzi dużo, ten kto podróżuje widzi więcej. – arabskie przysłowie",
        "Turyści nie wiedzą gdzie byli, podróżnicy nie wiedzą gdzie będą. – Paul Theroux",
        "Podróżowanie to nie jest coś, do czego się nadajesz. To coś, co robisz... – Gayle Forman",
        "Nie musisz być bogaczem aby dobrze podróżować.” – Eugene Fodor",
        "Zła wiadomość jest taka, że czas leci. Dobra wiadomość jest taka, że Ty jesteś pilotem. – Michael Altshuler",
        "Podróżować znaczy żyć. A w każdym razie żyć podwójnie, potrójnie, wielokrotnie. – Andrzej Stasiuk"
    ];
    
    var los = Math.floor(Math.random()*quotes.length);
    
    document.getElementById("quotes").innerHTML = quotes[los];
}

setInterval("cytat()", 5000);
 
//Oferty

    window.onload = initLinks;

    const galeria = new Array("IMG/oferta1.jpg", "IMG/oferta2.jpg", "IMG/oferta3.jpg", "IMG/oferta4.jpg");
    
    const price = new Array("3 000", "3 500", "2 999", "3 699");

    const describe1 = new Array(
        "Norwegia to kraj dzikiej i nieokiełznanej przyrody. To państwo dwóch pór roku i zorzy polarnej, miejsce, gdzie góry i morze łączą się w przepięknej symbiozie zapierających dech w piersiach krajobrazów. Górzyste regiony obfitujące w szerokie płaskowyże i wspaniałe szczyty, a uformowane w okresie lodowcowym fiordy są unikalnym zjawiskiem w skali globu. Natura w Norwegii tworzy arcydzieła, którym żaden turysta nie może się oprzeć.",
        "Malownicze Królestwo Danii, będące jednocześnie najmniejszym państwem Skandynawii, położone jest w północnej części Europy. Dania to piękny kraj o ciekawej historii, który turystów zachwyca niepowtarzalnym klimatem i krajobrazami.",
        "Szwecja, ten rozległy kraj pokryty lasami, poprzecinany rzekami i usiany jeziorami, jest rajem dla miłośników przyrody i wielkich, niezmierzonych przestrzeni. Od wybrzeży Morza Północnego po regiony arktyczne, szwedzka przyroda prezentuje się w niezliczonych formach i szatach: czarujące zielone krajobrazy, rozległe obszary przypominające śnieżną pustynię, noc polarna i zorze północne, wielkie jeziora opatulone nieprzebytymi borami...",
        'Islandia jest wyspą położoną na południe od koła podbiegunowego północnego, co sprawia, iż latem słońce świeci tu prawie przez 24 godziny, zaś zimą prawie przez cały dzień jest ciemno. Północna Islandia jest pod wpływem mroźnego podbiegunowego klimatu, zaś południowa część wyspy jest łagodniejsza dzięki ciepłemu Prądowi Północnoatlantyckiego. Islandia często zwana jest jako "Ziemia Lądu i Ognia", gdyż znajdujące się tu wulkany i gejzery wmieszane są w krajobraz lodowców i krainy wiecznych śniegów. '
    );
    
    const describe2 = new Array(
        "Norwegia jest też krajem niekończących się rzek i potężnych wodospadów, znanych nie tylko wszystkim podróżnikom. Liczba tych cudów natury idzie w setki - tu znajduje się dziewięć z dwudziestu najwyższych wodospadów. Wśród nich króluje Mardalsfossen, który spada kaskadami o łącznej długości ponad sześciuset metrów do jeziora Eikedalsvatnet. Choć widok ten można podziwiać wyłącznie latem.",
        "Dania to przede wszystko piękno przyrody. Zwiedzając kraj możemy zapuścić się w ustępy dziki wrzosowisk, lub podziwiać wzburzone może ze szczytu wapiennych klifów okalających niezamieszkałe wyspy. Wyspy zresztą świadczą o charakterze Danii. Wystarczy wspomnieć o Limfjorden na której znajduje się imponujący Park Jasperhus, na terenie którego rośnie ponad pół miliona kwiatów.Wizytówką Danii jest jej piękna linia brzegowa.",
        "Przywitają nas mieszkańcy początkowo powściągliwi, ale po przełamaniu pierwszych lodów bardzo sympatyczni, mili i uprzejmi. Do domu wrócimy pokrzepieni, ciesząc się z chwil spędzonych na łonie natury i doceniając możliwość obcowania z fundamentalnymi wartościami. W sercu pozostanie tęsknota za nieskażoną przyrodą i ziemią, po której niegdyś stąpali Wikingowie.",
        "Gorące źródła Islandii są niewątpliwie tanią energią, ale także atrakcją turystyczną dla przyjeżdżających tu co roku coraz to większej liczby turystów. Islandia to nieskazitelnie czysta przyroda, jakiej nie ma w całej Europie. Lasów wprawdzie brak, ale są łąki, strumienie, piękne rzeki i jeziorka, które tworzą niezapomniany krajobraz. Jeżeli więc nie interesują cię hałaśliwe kurorty czy też zgiełk dużych miast Islandia będzie idealnym miejscem na wakacje i aktywny wypoczynek w ciszy i spokoju."
    );
    
    const title = new Array("Norwegia", "Dania", "Szwecja", "Islandia");

    let i = 0;

    function initLinks(){
        document.getElementById("prev").onclick = processPrevious;
        document.getElementById("next").onclick = processNext;
    }

    function processPrevious(){
        if(i == 0)
            i = galeria.length;
        i--;
        document.getElementById("title").innerHTML = title[i];
        document.getElementById("image").src = galeria[i];
        document.getElementById("price").innerHTML = price[i];
        document.getElementById("describe").innerHTML = describe1[i] + "<br><br>" + describe2[i];
        return false;
    }

    function processNext(){
        i++;
        if(i == galeria.length)
            i =0;
        document.getElementById("image").src = galeria[i];
        document.getElementById("title").innerHTML = title[i];
        document.getElementById("price").innerHTML = price[i];
        document.getElementById("describe").innerHTML = describe1[i] + "<br><br>" + describe2[i];
        return false;
    }

//Banner

    const nag = new Array(
        "Kraj śniegu i zorzy polarnej",
        "Kraj niezwykłej przyrody i wysp",
        "Kraj lasów, rzek i jezior",
        "Kraj zwany 'Ziemią lądu i ognia'"
    );
    
    const Banner = new Array("IMG/zorza.png", "IMG/port.png", "IMG/jeziorko.png", "IMG/wyspa.png");

    function SetBanner(){
        let los = Math.floor(Math.random()*Banner.length);
        
        document.getElementById("banner").style.backgroundImage = "url('" + Banner[los] + "')";
        document.getElementById("title").innerHTML = title[los];
        document.getElementById("zdanie").innerHTML = nag[los];
    };

    setInterval(SetBanner, 4000);

//Oferta promocyjna
    
    function promka(){
        let losik = Math.floor(Math.random()*title.length);
        const NowaCena = new Array("2 500", "3 000", " 2 499", "3 099");
        const poster = new Array("IMG/prom-norway.jpg", "IMG/copenhagen.jpg", "IMG/sweden.jpg", "IMG/iceland.jpg");
        
        document.getElementById("title2").innerHTML = title[losik];
        document.getElementById("koszt").innerHTML = "wcześniejsza - " + price[losik] + "zł, obecna - <b>" + NowaCena[losik] + " zł </b>.<br>";
        
        document.getElementById("opisik").innerHTML = describe1[losik];
        document.getElementById("promka_zdu").src = poster[losik];
    }

    promka();
    


