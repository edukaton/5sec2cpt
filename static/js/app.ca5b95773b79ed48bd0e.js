webpackJsonp([1],{"9Ion":function(i,t){},CPv0:function(i,t,e){i.exports=e.p+"static/img/randki.cfde905.png"},EZtT:function(i,t,e){i.exports=e.p+"static/img/landing_img.c1e1fa1.png"},NHnr:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("7+uW"),s={render:function(){var i=this.$createElement,t=this._self._c||i;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"main ui container"},[t("router-view")],1)])},staticRenderFns:[]};var n=e("VU/8")({name:"App"},s,!1,function(i){e("9Ion")},null,null).exports,o=e("NYxO");a.default.use(o.a);var c=[0,2,4,5],r=new o.a.Store({state:{danger:[{title:"Bańka informacyjna",text:"Koleżanka opowiada Ci o artyście z Ameryki Południowej, którego pseudonim brzmi tak samo jak nazwisko Twojego ulubionego pisarza. Szukasz informacji o nim w sieci. Niestety, okazuje się, że Twoja wyszukiwarka nie zna tego artysty. Na kolejnych stronach wyszukiwań nie znajdujesz o nim żadnej wzmianki, a jedynie informacje o dobrze Ci znanym pisarzu",img:"banka.png",critical:!1,skill:[0,1,2,5]},{title:"Podejrzane pytania",text:"Po obejrzeniu filmu dokumentalnego o fałszywych alarmach bombowych zaczynasz szukać w Internecie odpowiedzi na pytanie, dlaczego nie wszystkich sprawców udaje się wykryć, oraz informacji o używanych przez nich metodach ukrywania tożsamości. Twoja ciekawość nie pozostaje niezauważona. Służby zaczynają się Tobą interesować i zbierać informacje na Twój temat.",img:"podejrzane.png",critical:!1,skill:[0,5]},{title:"Fejkowe wideo z Twoim wizerunkiem",text:"Do sieci wycieka wideo, na którym widać Twoją twarz podczas zamieszek po przegranym meczu. Jesteś jednym z napastników, którzy biją kibiców konkurencyjnego klubu. Przychodzi do Ciebie policja, aby Cię aresztować.",img:"kompromitujace.png",critical:!0,skill:[4,8,9]},{title:"Fałszywe informacje w internecie",text:"Robiąc research do pracy zaliczeniowej z wiedzy o społeczeństwie znajdujesz stronę, na której znajdujesz wszystkie najważniejsze daty i wydarzenia o zamachach terrorystycznych w ostatnich latach w Europie. Kopiujesz to wszystko do swojego pliku i oddajesz nauczycielowi. Po tygodniu dowiadujesz się, że nie zaliczyłeś przedmiotu, a sprawdzone przez Ciebie informacje są nieprawdziwe.",img:"przereklamowany.png",critical:!1,skill:[5,7]}],skills:[{id:0,title:"TOR",text:"Łączysz się z Internetem za pomocą Tora – narzędzia, które zapewnia użytkownikom anonimowe korzystanie z zasobów Internetu oraz usług dostępnych tylko za jego pomocą.",img:"tor.png",hex:"#F58D46"},{id:1,title:"USTAWIENIA PRZEGLĄDARKI",text:"Nie zdajesz się na domyślne rozwiązania. Zmieniasz ustawienia Twojej przeglądarki internetowej tak, by lepiej chroniła Twoją prywatność.",img:"przegladarki.png",hex:"#307B8B"},{id:2,title:"UNIKANIE ŚLEDZENIA",text:"Zdajesz sobie sprawę z tego, że każdy Twój ruch w sieci jest śledzony przez wiele podmiotów. Korzystasz z rozwiązań, które pomagają Ci się przed tym bronić.",img:"unikanie.png",hex:"#F58D46"},{id:3,title:"POWŚCIĄGLIWE APLIKACJE",text:"Korzystasz tylko z takich aplikacji, które zbierają jedynie dane niezbędne do prawidłowego działania i nie udostępniają automatycznie żadnych informacji portalom społecznościowym i reklamodawcom.",img:"powsciagliwe.png",hex:"#6ABD51"},{id:4,title:"STOP PORTALOM SPOŁECZNOŚCIOWYM",text:"Nie posiadasz profilu na największym portalu społecznościowym ani na żadnym innym. Komunikujesz się ze znajomymi za pomocą e-maila, czatu i forów internetowych. A najchętniej: na żywo.",img:"stop.png",hex:"#E2315A"},{id:5,title:"ALTERNATYWNA WYSZUKIWARKA",text:"Korzystasz z wyszukiwarki, która – w przeciwieństwie do najpopularniejszej w sieci – nie buduje, w oparciu o wpisywane słowa, Twojego profilu dla reklamodawców ani nie dostosowuje do niego wyników wyszukiwania.",img:"alternatywna.png",hex:"#6ABD51"},{id:6,title:"POUFNE KONTO POCZTOWE",text:"Cenisz sobie tajemnicę korespondencji. Spośród dostępnych kont pocztowych wybierasz usługę płatną, ale za to taką, która nie analizuje treści Twoich e-maili.",img:"poufne.png",hex:"#6ABD51"},{id:7,title:"WYSZUKANE MENU INFORMACYJNE",text:"Nie dajesz łatwo schlebiać swoim poglądom. Wiesz, że czerpanie informacji z jednego źródła nie daje całościowego obrazu, dlatego starasz się sięgać do różnych mediów i słuchać wielu opinii.",img:"wyszukane.png",hex:"#6ABD51"},{id:8,title:"WSTRZEMIĘŹLIWOŚĆ INFORMACYJNA",text:"Unikasz publikowania informacji o sobie w sieci. Dlatego nie da się łatwo odtworzyć Twojej historii z pojedynczych informacji ani wykorzystać CV opublikowanego na portalu „zawodowym”.",img:"wstrzemiezliwosc.png",hex:"#E2315A"},{id:9,title:"USTAWIENIA PRYWATNOŚCI",text:"Korzystasz z portali społecznościowych, ale starasz się zachować tyle kontroli nad swoimi danymi i wizerunkiem, ile można. Dlatego dbasz o odpowiednie ustawienia prywatności.",img:"ustawienia.png",hex:"#307B8B"}],percent:50,index:0,chosen:[]},getters:{defense:function(i,t){var e=t.current.skill;return i.skills.filter(function(i){return e.includes(i.id)})},percent:function(i){return i.percent},index:function(i){return i.index},current:function(i){if(i.index<i.danger.length)return i.danger[i.index]},chosen:function(i,t){return t.user_skills.filter(function(t){return i.chosen.includes(t.id)})},ifChosen:function(i){return function(t){return i.chosen.includes(t)}},ifSuccess:function(i,t){return function(i){return t.current.skill.includes(i)}},user_skills:function(i){return i.skills.filter(function(i){return c.includes(i.id)})}},mutations:{answer:function(i){},next:function(i){i.chosen=[],i.index++},chose:function(i,t){i.chosen.includes(t)?i.chosen.splice(i.chosen.indexOf(t),1):i.chosen.length>=2||i.chosen.push(t)}}}),d=e("/ocq"),l={computed:Object(o.b)(["index","percent"])},u={render:function(){var i=this.$createElement,t=this._self._c||i;return t("div",[t("div",{staticClass:"ui top fixed menu"},[t("div",{staticClass:"ui container"},[t("div",{staticClass:"item"},[t("h3",[this._v("\n          Zagrożenie #"+this._s(this.index+1)+"\n        ")])]),this._v(" "),t("div",{staticClass:"wrapper"},[t("sui-progress",{attrs:{state:"active",indicating:"",percent:this.percent}})],1)])]),this._v(" "),t("div",{staticClass:"body"},[t("router-view")],1)])},staticRenderFns:[]};var v=e("VU/8")(l,u,!1,function(i){e("ftgd")},null,null).exports,m={computed:Object(o.b)(["ifChosen","chose","percent","current","user_skills"]),methods:{select:function(i){this.$store.commit("chose",i)},answer:function(){this.$store.commit("answer"),this.$router.push("/gra/rozwiazanie")}}},z={render:function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"ui grid container"},[e("div",{staticClass:"row ui segment"},[e("div",{staticClass:"column ten wide"},[e("img",{staticClass:"ui image medium left floated",attrs:{src:"/static/"+i.current.img}}),i._v(" "),e("h3",{staticClass:"quest-title"},[i._v("\n        "+i._s(i.current.title)+"\n      ")]),i._v(" "),e("p",{staticClass:"quest-text"},[i._v("\n        "+i._s(i.current.text)+"\n      ")])])]),i._v(" "),e("div",{staticClass:"row centered"},[e("bitton",{staticClass:"ui secondary button huge",attrs:{to:"rozwiazanie"},on:{click:i.answer}},[i._v("Sprawdzam")])],1),i._v(" "),e("div",{staticClass:"ui row ui four doubling cards"},i._l(i.user_skills,function(t){return e("div",{staticClass:"ui card fluid link",on:{click:function(e){i.select(t.id)}}},[e("div",{staticClass:"content"},[e("div",{staticClass:"header"},[i._v("\n          "+i._s(t.title)+"\n        ")])]),i._v(" "),e("div",{staticClass:"image"},[e("img",{attrs:{src:"/static/"+t.img}})]),i._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"description"},[i._v("\n          "+i._s(t.text)+"\n        ")])]),i._v(" "),i.ifChosen(t.id)?e("div",{staticClass:"ui bottom green attached button"},[e("i",{staticClass:"checkmark icon"}),i._v("\n        Wybrano!\n      ")]):e("div",{staticClass:"ui bottom attached button"},[e("i",{staticClass:"add icon"}),i._v("\n        Wybierz Kartę\n      ")])])}))])},staticRenderFns:[]};var w=e("VU/8")(m,z,!1,function(i){e("eWo+")},"data-v-5bf7c75a",null).exports,p={computed:Object(o.b)(["index","defense","chosen","percent","ifChosen","ifSuccess","current"]),methods:{next:function(){this.$store.commit("next"),this.$router.push("/gra/zagrozenie")}}},h={render:function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"ui grid container"},[i._m(0),i._v(" "),e("div",{staticClass:"ui row ui six centered doubling cards"},i._l(i.defense,function(t,a){return e("div",{staticClass:"ui card fluid link"},[e("div",{staticClass:"image"},[e("img",{attrs:{src:"/static/"+t.img}})]),i._v(" "),e("div",{staticClass:"content"},[i._v("\n        "+i._s(t.title)+"\n      ")]),i._v(" "),e("div",{staticClass:"ui bottom attached button",style:"background-color: "+t.hex+"; color: white"},[i._v("\n        Zobacz opis\n      ")])])})),i._v(" "),e("div",{staticClass:"ui divider"}),i._v(" "),e("div",{staticClass:"row centered"},[e("button",{staticClass:"ui secondary button huge",attrs:{to:"rozwiazanie"},on:{click:i.next}},[i._v("Dalej")])]),i._v(" "),i._m(1),i._v(" "),e("div",{staticClass:"ui row ui four doubling centered cards"},i._l(i.chosen,function(t){return e("div",{staticClass:"ui card fluid",class:i.ifSuccess(t.id)?"":"fail"},[e("div",{staticClass:"content"},[e("div",{staticClass:"header"},[i._v("\n          "+i._s(t.title)+"\n        ")])]),i._v(" "),e("div",{staticClass:"image"},[e("img",{attrs:{src:"/static/"+t.img}})]),i._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"description"},[i._v("\n          "+i._s(t.text)+"\n        ")])]),i._v(" "),i.ifSuccess(t.id)?e("div",{staticClass:"ui bottom green attached button"},[i._v("\n        Sukces!\n      ")]):e("div",{staticClass:"ui bottom red attached button"},[i._v("\n        Fail!\n      ")])])}))])},staticRenderFns:[function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"row centered"},[t("h1",[this._v("Możliwa obrona")])])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"row centered"},[t("h1",[this._v("Twoja obrona")])])}]};var f=e("VU/8")(p,h,!1,function(i){e("wvp6")},null,null).exports,_={render:function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("div",{staticClass:"hello ui two column centered grid"},[a("div",{staticClass:"column aligned"},[a("h1",[i._v("Internet - czas się bronić!")]),i._v(" "),a("img",{attrs:{src:e("EZtT")}}),i._v(" "),a("ul",[a("li",[a("router-link",{staticClass:"ui primary button",attrs:{to:"/wybor-postaci"}},[i._v("\n          Graj\n        ")]),i._v(" "),a("router-link",{staticClass:"ui primary button",attrs:{to:"/nowy-scenariusz"}},[i._v("\n          Dodaj\n        ")])],1)]),i._v(" "),a("h5",[i._v("Czy wiesz, że każdego dnia zostawiasz w internecie ślad po swojej aktywności? To mogą być Twoje dane osobowe, ale także gust do ubrań, upodobania żywieniowe lub prywatne zdjęcia. Pozostawione przez Ciebie dane mogą zostać użyte przez osoby, które chcą Ci zaszkodzić. Otaczająca Cię bańka informacyjna może ograniczyć Ci dostęp do różnorodnej wiedzy. Nie daj się! Naucz się bezpiecznie korzystać z internetu!\n\n    ")])])])},staticRenderFns:[]};var C=e("VU/8")({name:"HelloWorld",data:function(){return{msg:"Witajcie w naszej bajce"}}},_,!1,function(i){e("zxLI")},"data-v-4a102288",null).exports,y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("div",[a("h1",{staticClass:"ui header"},[i._v("\n    Dodaj nowy scenariusz\n    "),a("div",{staticClass:"sub header"},[i._v("\n      Opisz zagrożenie i jak się przed nim uchronić\n    ")])]),i._v(" "),a("div",{staticClass:"ui form"},[a("div",{staticClass:"row"},[a("div",{staticClass:"column"})]),i._v(" "),a("div",{staticClass:"field"},[a("label",[i._v("Opis")]),i._v(" "),a("textarea")]),i._v(" "),a("div",{staticClass:"ui divider"}),i._v(" "),a("div",{staticClass:"ui three column divided grid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"column"},[a("div",{staticClass:"inline fields"},[a("div",{staticClass:"five wide field"},[a("img",{staticClass:"ui middle aligned tiny image",attrs:{src:e("CPv0")}})]),i._v(" "),a("div",{staticClass:"five wide field"},[a("span",[i._v("Szyfrowanie hasła")])]),i._v(" "),a("div",{staticClass:"five wide field"},[a("input",{attrs:{type:"number"}})])])]),i._v(" "),a("div",{staticClass:"column"},[a("div",{staticClass:"inline fields"},[a("div",{staticClass:"five wide field"},[a("img",{staticClass:"ui middle aligned tiny image",attrs:{src:e("CPv0")}})]),i._v(" "),a("div",{staticClass:"five wide field"},[a("span",[i._v("Szyfrowanie hasła")])]),i._v(" "),a("div",{staticClass:"five wide field"},[a("input",{attrs:{type:"number"}})])])]),i._v(" "),a("div",{staticClass:"column"},[a("div",{staticClass:"inline fields"},[a("div",{staticClass:"five wide field"},[a("img",{staticClass:"ui middle aligned tiny image",attrs:{src:e("CPv0")}})]),i._v(" "),a("div",{staticClass:"five wide field"},[a("span",[i._v("Szyfrowanie hasła")])]),i._v(" "),a("div",{staticClass:"five wide field"},[a("input",{attrs:{type:"number"}})])])])]),i._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"column"},[a("div",{staticClass:"inline fields"},[a("div",{staticClass:"five wide field"},[a("img",{staticClass:"ui middle aligned tiny image",attrs:{src:e("CPv0")}})]),i._v(" "),a("div",{staticClass:"five wide field"},[a("span",[i._v("Szyfrowanie hasła")])]),i._v(" "),a("div",{staticClass:"five wide field"},[a("input",{attrs:{type:"number"}})])])]),i._v(" "),a("div",{staticClass:"column"},[a("div",{staticClass:"inline fields"},[a("div",{staticClass:"five wide field"},[a("img",{staticClass:"ui middle aligned tiny image",attrs:{src:e("CPv0")}})]),i._v(" "),a("div",{staticClass:"five wide field"},[a("span",[i._v("Szyfrowanie hasła")])]),i._v(" "),a("div",{staticClass:"five wide field"},[a("input",{attrs:{type:"number"}})])])]),i._v(" "),a("div",{staticClass:"column"},[a("div",{staticClass:"inline fields"},[a("div",{staticClass:"five wide field"},[a("img",{staticClass:"ui middle aligned tiny image",attrs:{src:e("CPv0")}})]),i._v(" "),a("div",{staticClass:"five wide field"},[a("span",[i._v("Szyfrowanie hasła")])]),i._v(" "),a("div",{staticClass:"five wide field"},[a("input",{attrs:{type:"number"}})])])])])]),i._v(" "),a("div",{staticClass:"ui divider"}),i._v(" "),a("button",{staticClass:"ui primary button"},[i._v("\n      Dodaj\n    ")])])])}]};var g=e("VU/8")({name:"NewScenario",data:function(){return{msg:""}}},y,!1,function(i){e("Nzdo")},"data-v-1bc96e6d",null).exports,k={computed:Object(o.b)(["selected"]),methods:{selectHero:function(i){return this.$router.push("/kompetencje")}}},j={render:function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[i._m(0),i._v(" "),e("div",{staticClass:"ui row ui four doubling cards"},[e("div",{staticClass:"ui card fluid link"},[i._m(1),i._v(" "),i._m(2),i._v(" "),i._m(3),i._v(" "),e("div",{staticClass:"ui bottom attached button",on:{click:function(t){i.selectHero()}}},[e("i",{staticClass:"add icon"}),i._v("\n        Wybierz Kartę\n      ")])]),i._v(" "),e("div",{staticClass:"ui card fluid link"},[i._m(4),i._v(" "),i._m(5),i._v(" "),i._m(6),i._v(" "),e("div",{staticClass:"ui bottom attached button",on:{click:function(t){i.selectHero()}}},[e("i",{staticClass:"add icon"}),i._v("\n        Wybierz Kartę\n      ")])]),i._v(" "),e("div",{staticClass:"ui card fluid link"},[i._m(7),i._v(" "),i._m(8),i._v(" "),i._m(9),i._v(" "),e("div",{staticClass:"ui bottom attached button",on:{click:function(t){i.selectHero()}}},[e("i",{staticClass:"add icon"}),i._v("\n        Wybierz Kartę\n      ")])]),i._v(" "),e("div",{staticClass:"ui card fluid link"},[i._m(10),i._v(" "),i._m(11),i._v(" "),i._m(12),i._v(" "),e("div",{staticClass:"ui bottom attached button",on:{click:function(t){i.selectHero()}}},[e("i",{staticClass:"add icon"}),i._v("\n        Wybierz Kartę\n      ")])])])])},staticRenderFns:[function(){var i=this.$createElement,t=this._self._c||i;return t("h1",{staticClass:"ui header"},[this._v("\n    Wybierz swojego bohatera\n    "),t("div",{staticClass:"sub header"},[this._v("\n      Wybierz bohatera\n    ")])])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"content"},[t("div",{staticClass:"header"},[this._v("\n          Hipster\n        ")])])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"image"},[t("img",{attrs:{src:e("YhBn")}})])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"content text"},[t("div",{staticClass:"description"},[this._v("\n          Alternatywna wyszukiwarka? Podawanie danych z kosmosu? Wyszukiwanie „gwiazdek” i „drobnych druczków” w regulaminach? Hipster nie da się oszukać. Chronisz się przed zagrożeniami w sieci przede wszystkim dlatego, że jest to na czasie. Zapominasz jednak o podstawowych zabezpieczeniach, ponieważ bardziej niż prywatność cenisz sobie rozpoznawalność i bycie zawsze online.\n        ")])])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"content"},[t("div",{staticClass:"header"},[this._v("\n          Haker\n        ")])])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"image"},[t("img",{attrs:{src:e("r+Hy")}})])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"content text"},[t("div",{staticClass:"description"},[this._v("\n          Jesteś urodzonym łamaczem kodów i dlatego szyfrujesz wszystko co się da: maile, pliki i smsy. Nikt nie może dostać się do Twoich dysków. Masz jednak słabość do nowinek technologicznych i nie zawsze skutecznie zabezpieczasz się przed manipulacjami w sieci.\n        ")])])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"content"},[t("div",{staticClass:"header"},[this._v("\n          Cwaniak\n        ")])])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"image"},[t("img",{attrs:{src:e("wvqX")}})])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"content text"},[t("div",{staticClass:"description"},[this._v("\n          Wiesz, że jakakolwiek obecność i aktywność w sieci zostawia po sobie ślad. Dlatego ograniczasz ją do minimum – kupujesz w realu, nie korzystasz z mediów społecznościowych i dysków do przechowywania danych w chmurze. Przez to odcinasz się od wielu potrzebnych Ci informacji, które mógłbyś znaleźć w sieci. Wiele rzeczy zajmuje Ci też duuużo czasu.\n\n        ")])])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"content"},[t("div",{staticClass:"header"},[this._v("\n          Agent\n        ")])])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"image"},[t("img",{attrs:{src:e("fJEe")}})])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"content text"},[t("div",{staticClass:"description"},[this._v("\n          Nie jesteś mocny w kodowaniu, ale dobrze znasz dostępne w sieci narzędzia do zabezpieczania się przed kradzieżą danych. Blokujesz reklamy, kładziesz nacisk na mocne hasła i włączasz ustawienia prywatności. Twoja przeglądarka to za każdym uruchomieniem terra incognita. Mimo ostrożności, nadal możesz paść ofiarą „fake newsów” i dezinformacji.\n        ")])])}]};var b=e("VU/8")(k,j,!1,function(i){e("jp3x")},"data-v-d32a1fae",null).exports,x={computed:Object(o.b)(["selected"]),methods:{selectHero:function(i){return this.$router.push("/kompetencje")}}},E={render:function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[i._m(0),i._v(" "),e("div",{staticClass:"ui row ui four doubling cards"},[e("div",{staticClass:"ui card fluid link"},[i._m(1),i._v(" "),i._m(2),i._v(" "),i._m(3),i._v(" "),e("div",{staticClass:"ui bottom attached button",on:{click:function(t){i.selectHero()}}},[e("i",{staticClass:"add icon"}),i._v("\n        Zobacz poradę\n      ")])]),i._v(" "),e("div",{staticClass:"ui card fluid link"},[i._m(4),i._v(" "),i._m(5),i._v(" "),i._m(6),i._v(" "),e("div",{staticClass:"ui bottom attached button",on:{click:function(t){i.selectHero()}}},[e("i",{staticClass:"add icon"}),i._v("\n        Zobacz poradę\n      ")])]),i._v(" "),e("div",{staticClass:"ui card fluid link"},[i._m(7),i._v(" "),i._m(8),i._v(" "),i._m(9),i._v(" "),e("div",{staticClass:"ui bottom attached button",on:{click:function(t){i.selectHero()}}},[e("i",{staticClass:"add icon"}),i._v("\n        Zobacz poradę\n      ")])]),i._v(" "),e("div",{staticClass:"ui card fluid link"},[i._m(10),i._v(" "),i._m(11),i._v(" "),i._m(12),i._v(" "),e("div",{staticClass:"ui bottom attached button",on:{click:function(t){i.selectHero()}}},[e("i",{staticClass:"add icon"}),i._v("\n        Zobacz poradę\n      ")])])])])},staticRenderFns:[function(){var i=this.$createElement,t=this._self._c||i;return t("h1",{staticClass:"ui header"},[this._v("\n    Twój bohater ma takie umiejętności\n    "),t("div",{staticClass:"sub header"},[this._v("\n     Przeczytaj opis\n    ")])])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"content"},[t("div",{staticClass:"header"},[this._v("\n          Tor\n        ")])])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"image"},[t("img",{attrs:{src:e("YhBn")}})])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"content text"},[t("div",{staticClass:"description"},[this._v("\n          Łączysz się z Internetem za pomocą Tora – narzędzia, które zapewnia użytkownikom anonimowe korzystanie z zasobów Internetu oraz usług dostępnych tylko za jego pomocą.\n        ")])])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"content"},[t("div",{staticClass:"header"},[this._v("\n          Unikanie śledzenie\n        ")])])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"image"},[t("img",{attrs:{src:e("r+Hy")}})])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"content text"},[t("div",{staticClass:"description"},[this._v("\n          Zdajesz sobie sprawę z tego, że każdy Twój ruch w sieci jest śledzony przez wiele podmiotów. Korzystasz z rozwiązań, które pomagają Ci się przed tym bronić\n        ")])])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"content"},[t("div",{staticClass:"header"},[this._v("\n          Alternatywna przeglądarka\n        ")])])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"image"},[t("img",{attrs:{src:e("wvqX")}})])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"content text"},[t("div",{staticClass:"description"},[this._v("\n          Korzystasz z wyszukiwarki, która – w przeciwieństwie do najpopularniejszej w sieci – nie buduje, w oparciu o wpisywane słowa, Twojego profilu dla reklamodawców ani nie dostosowuje do niego wyników wyszukiwania.\n        ")])])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"content"},[t("div",{staticClass:"header"},[this._v("\n          Ustawienia prywatności\n        ")])])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"image"},[t("img",{attrs:{src:e("fJEe")}})])},function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"content text"},[t("div",{staticClass:"description"},[this._v("\n          Nie zdajesz się na domyślne rozwiązania. Zmieniasz ustawienia Twojej przeglądarki internetowej tak, by lepiej chroniła Twoją prywatność.\n        ")])])}]};var $=e("VU/8")(x,E,!1,function(i){e("O1pa")},"data-v-6cf47af8",null).exports;a.default.use(d.a);var T=new d.a({routes:[{path:"/gra",name:"game",component:v,children:[{path:"zagrozenie",component:w},{path:"rozwiazanie",component:f}]},{path:"/",name:"LandingPage",component:C},{path:"/nowy-scenariusz",name:"NewScenario",component:g},{path:"/kompetencje",name:"Competences",component:$},{path:"/wybor-postaci",name:"ChooseHero",component:b}]}),A=e("myK/"),N=e.n(A);e("kVq8");a.default.use(N.a),a.default.config.productionTip=!1,new a.default({el:"#app",store:r,router:T,components:{App:n},template:"<App/>"})},Nzdo:function(i,t){},O1pa:function(i,t){},YhBn:function(i,t,e){i.exports=e.p+"static/img/hipster.6794236.png"},"eWo+":function(i,t){},fJEe:function(i,t,e){i.exports=e.p+"static/img/agent.cd35d93.png"},ftgd:function(i,t){},jp3x:function(i,t){},kVq8:function(i,t){},"r+Hy":function(i,t,e){i.exports=e.p+"static/img/haker.fb6242c.png"},wvp6:function(i,t){},wvqX:function(i,t,e){i.exports=e.p+"static/img/cwaniak.9457597.png"},zxLI:function(i,t){}},["NHnr"]);
//# sourceMappingURL=app.ca5b95773b79ed48bd0e.js.map