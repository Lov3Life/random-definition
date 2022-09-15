const RandomButton = document.getElementById("random-button");
const Main = document.querySelector("h3");
const lengthObject = document.querySelector("h2");
const P = document.querySelector("p");
const SelectButton = document.getElementById("select-button");
var span = document.querySelector("span");
var inputValue = document.querySelector("input");
const Definictions = [
    "Entropia (s lub S) – termodynamiczna funkcja stanu, określająca kierunek przebiegu procesów spontanicznych (samorzutnych) w odosobnionym układzie termodynamicznym. Entropia jest miarą stopnia nieuporządkowania układu i rozproszenia energii. Jest wielkością ekstensywną. Zgodnie z drugą zasadą termodynamiki, jeżeli układ termodynamiczny przechodzi od jednego stanu równowagi do drugiego, bez udziału czynników zewnętrznych (a więc spontanicznie), to jego entropia zawsze rośnie. Pojęcie entropii wprowadził niemiecki uczony Rudolf Clausius.", 
    "Negentropia (negatywna entropia, ujemna entropia, ekstropia) – w teorii systemów i cybernetyce – miara stopnia organizacji. Stanowi różnicę pomiędzy maksymalną możliwą wartością entropii – odpowiadającą całkowitej dezorganizacji systemu, a jej aktualną wartością. Przy dezorganizacji systemu negentropia maleje, podczas gdy entropia wzrasta i – na odwrót – wzrostowi organizacji odpowiada zawsze wzrost negentropii.",
    "Siła – wektorowa wielkość fizyczna będąca miarą oddziaływań fizycznych między ciałami. Jednostką miary siły w układzie SI jest niuton [N]. Nazwa tej jednostki pochodzi od nazwiska angielskiego fizyka Isaaca Newtona. W układzie CGS jednostką siły jest dyna. W układzie ciężarowym jednostką siły jest kilogram-siła [kgf] (lub [kG], inaczej kilopond [kp]).",
    "Prędkość – wielkość fizyczna opisująca szybkość zmiany położenia ciała względem układu odniesienia. Prędkość jest podstawową koncepcją kinematyki, gałęzi mechaniki klasycznej opisującej ruch ciał.",
    "Droga – długość odcinka toru (krzywej lub prostej), jaką pokonuje wybrany punkt ciała lub punkt materialny podczas swojego ruchu. Droga nie oznacza odległości pomiędzy dwoma punktami wyznaczającymi początek i koniec ruchu. Liczy się ją wzdłuż toru ruchu, czyli po krzywej, po której porusza się ciało.",
    "Czas – wielkość fizyczna określająca kolejność zdarzeń oraz odstępy między zdarzeniami zachodzącymi w tym samym miejscu. Pojęcie to jest również przedmiotem rozważań filozoficznych.",
    "Napięcie elektryczne – różnica potencjałów elektrycznych między dwoma punktami obwodu elektrycznego lub pola elektrycznego. Symbolem napięcia jest U. Napięcie elektryczne jest to stosunek pracy wykonanej przeciwko polu, podczas przenoszenia ładunku elektrycznego między punktami, dla których określa się napięcie, do wartości tego ładunku",
    "Rezystancja, opór (elektryczny, czynny), oporność (czynna) – wielkość charakteryzująca relację między napięciem a natężeniem prądu elektrycznego w obwodach prądu stałego. W obwodach prądu przemiennego rezystancją nazywa się część rzeczywistą impedancji zespolonej.",
    "Natężenie prądu – wielkość fizyczna charakteryzująca przepływ prądu elektrycznego zdefiniowana jako stosunek wartości ładunku elektrycznego przepływającego przez wyznaczoną powierzchnię do czasu przepływu ładunku.",
    "Przewodnik elektryczny – substancja, która dobrze przewodzi prąd elektryczny, a przewodzenie prądu ma charakter elektronowy (przewodnik metaliczny). Atomy przewodnika tworzą wiązania, w których elektrony walencyjne (jeden lub więcej) pozostają swobodne (nie związane z żadnym z atomów), tworząc w ten sposób tzw. gaz elektronowy (zob. też wiązanie metaliczne). W przypadku, gdy nośnikami ładunków są jony, mówi się o przewodnikach jonowych lub przewodnikach elektrolitycznych.",
    "Nadprzewodnictwo – stan materiału polegający na zerowej rezystancji, jest osiągany w niektórych materiałach w niskiej temperaturze.",
    "Półprzewodniki – substancje, najczęściej krystaliczne, których konduktywność może być zmieniana w szerokim zakresie (na przykład od 10<sup>-8</sup> do 10<sup>3</sup> S/cm) poprzez domieszkowanie, ogrzewanie, oświetlanie lub inne czynniki. Przewodnictwo typowego półprzewodnika plasuje się między przewodnictwem metali i dielektryków.",
    "Konduktancja, przewodność elektryczna – miara podatności elementu na przepływ prądu elektrycznego, odwrotność rezystancji. Jednostką konduktancji w układzie SI jest simens (S).",
    "Moc – skalarna wielkość fizyczna określająca pracę wykonaną w jednostce czasu przez układ fizyczny.",
    "Praca – skalarna wielkość fizyczna, miara ilości energii przekazywanej między układami fizycznymi w procesach mechanicznych, elektrycznych, termodynamicznych i innych.",
    "Przemieszczenie (wektor przesunięcia) – wektor łączący położenie początkowe z końcowym. Dla dowolnego ruchu krzywoliniowego wartość tego wektora jest mniejsza bądź równa drodze pokonanej przez ciało. Równość ma miejsce wówczas, gdy promień krzywizny toru dąży do nieskończoności (ruch prostoliniowy).",
    "Tor ruchu, trajektoria – krzywa zakreślana w przestrzeni przez wybrany punkt poruszającego się ciała. W inercjalnym układzie odniesienia, jeżeli na poruszający punkt materialny działa niezrównoważona siła, której kierunek nie jest styczny do toru ruchu, wówczas tor ruchu jest krzywoliniowy.",
    "Przyspieszenie – wektorowa wielkość fizyczna wyrażająca zmianę wektora prędkości w czasie.Przyspieszenie definiuje się jako pochodną prędkości po czasie, czyli jest szybkością zmiany prędkości. Jeśli przyspieszenie jest skierowane przeciwnie do zwrotu prędkości ruchu, to wartość prędkości w tym ruchu maleje, a przyspieszenie to jest wtedy nazywane opóźnieniem.",
    "Grawitacja (ciążenie powszechne) – zjawisko naturalne polegające na tym, że wszystkie obiekty posiadające masę lub energię wzajemnie przyciągają się",
    "Potencjał – pole skalarne określające pewne pole wektorowe."
];

RandomButton.addEventListener("click", getRandomNumber);

function getRandomNumber(){
    let p = (Math.random() * (Definictions.length - 1)).toFixed();
    let x = Number(p);
    x++;
    if(Main.innerHTML == (Definictions[p] + "<br><br><br>Numer przeglądanej definicji w tablicy wynosi: " +  x)) {
        //console.log("przed: " + p);
        return getRandomNumber();
    }
    Main.innerHTML = (Definictions[p] + "<br><br><br>Numer przeglądanej definicji w tablicy wynosi: " +  x);
    //console.log(p);
}

window.onload = HowMuchDefiniction();

function HowMuchDefiniction() {
    lengthObject.innerHTML = "Ilość definicji w tablicy: " + Definictions.length;
    P.innerHTML = "Wybierz definicje z tablicy po jej numerze: <input value='0' min='1' max="+Definictions.length+" type='number'><span>&nbsp;</span>";
}

SelectButton.addEventListener("click", getDefiniction);

function getDefiniction() {
    var input = parseInt(document.querySelector("input").value);
    var z = input;
    z--;
    Main.innerHTML = (Definictions[z] + "<br><br><br>Numer przeglądanej definicji w tablicy wynosi: " +  input);
}

document.querySelector("input").addEventListener("change", () =>{
    var i = parseFloat(document.querySelector("input").value);
    document.querySelector("span").innerHTML = Definictions[i -1].substring(0, Definictions[i -1].indexOf("–") -1);
});