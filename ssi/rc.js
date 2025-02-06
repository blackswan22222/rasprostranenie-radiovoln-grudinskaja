sURL = "rateli.ru";
sNewsDir = "news";
nNewsForShow = 7;

function arNewsInit(nNewsID, sNewsTitle) 
{
	this.nNewsID = nNewsID;
	this.sNewsTitle = sNewsTitle;
}

arNews = new Array();

 
//arNews.push(new arNewsInit(, ""));
arNews.push(new arNewsInit(393, "ќкономическое чудо ’айванЯ и перспективы ђоссии"));
arNews.push(new arNewsInit(383, "ЉомпаниЯ “Mitsubishi Electric”: производство современной электротехники"));
arNews.push(new arNewsInit(380, "’енденции и новые технологии в микроэлектронике в ближайшем будущем"));
arNews.push(new arNewsInit(370, "ѓлобальный дефицит чипов длинною в год. Џочему?"));
arNews.push(new arNewsInit(369, "Џроизводство электролитической медной фольги в ђоссии"));
arNews.push(new arNewsInit(368, "TSMC освоила 3-нанометровый процесс "));
arNews.push(new arNewsInit(365, "Њикроэлектроника в ђоссии сегоднЯ и завтра"));
arNews.push(new arNewsInit(353, "Светодиодные технологии в России"));
arNews.push(new arNewsInit(323, "Новый материал для энергонезависимой памяти создан на основе нитрида кремния"));//19.03.2020
arNews.push(new arNewsInit(329, "На AMD Ryzen создан 'убийца' Raspberry Pi - крохотный ПК для Windows 10"));//18.03.2020
arNews.push(new arNewsInit(330, "Число транзисторов в микросхемах продолжает расти по 'интеловскому' закону Мура"));//10.03.2020
arNews.push(new arNewsInit(332, "По скорости 'Эльбрусы' приблизились к процессорам Intel 6-летней давности"));//03.03.2020
arNews.push(new arNewsInit(333, "NVIDIA объяснила, почему умер так называемый закон Мура"));//20.02.2020
arNews.push(new arNewsInit(320, "В Китае научились охлаждать процессоры с помощью “потеющих” чипов"));//27.01.2020
arNews.push(new arNewsInit(319, "Фундаментальное свойство галоидных перовскитов может открыть новый мир в производстве полупроводников"));//25.01.2020
arNews.push(new arNewsInit(340, "Создан интерфейс, позволяющий соединить напрямую сверхпроводники и полупроводники"));//от 21.10.2019
arNews.push(new arNewsInit(343, "Представлен российский процессор Baikal-M для компьютеров, серверов и ноутбуков"));//от 02.10.2019
arNews.push(new arNewsInit(315, "История появления первого транзистора"));
arNews.push(new arNewsInit(110, "День рождения транзистора. 10 имён твердотельной электроники"));
arNews.push(new arNewsInit(305, "Поиск электронных компонентов в сети Интернет"));
arNews.push(new arNewsInit(299, "На пути к посткремниевой электронике"));
arNews.push(new arNewsInit(286, "Завод «Ангстрем-Т» освоил технологию производства силовых транзисторов Trench MOSFET"));
arNews.push(new arNewsInit(288, "«Микрон» выпустил микроконтроллер защиты данных для интернета вещей"));
arNews.push(new arNewsInit(290, "Установлен новый рекорд высокотемпературной сверхпроводимости"));
arNews.push(new arNewsInit(292, "Сделан 3D-транзистор размером 3 нм"));
arNews.push(new arNewsInit(294, "Самое маленькое электромеханическое реле, срабатывающее от напряжения в 50 милливольт"));
arNews.push(new arNewsInit(295, "Создан источник питания, который сохраняет работоспособность 10 лет без подзарядки"));
arNews.push(new arNewsInit(264, "В НИИМА «Прогресс» разработали чип для IoT (интернета вещей)"));
arNews.push(new arNewsInit(270, "Микроэлектроника: Воздушный зазор вместо традиционного полупроводника?"));
arNews.push(new arNewsInit(272, "«Ангстрем» заключил международное соглашение по производству новых типов транзисторов"));
arNews.push(new arNewsInit(280, "Разработчики всем миром создали ПК на «Байкалах» с российским ПО"));
arNews.push(new arNewsInit(251, "Новая микросхема Микрона – лауреат премии «Золотой чип»"));
arNews.push(new arNewsInit(255, "16-я международная выставка ChipEXPO 2018 прошла в Москве"));
arNews.push(new arNewsInit(257, "Микрон запускает в производство новые ID-микросхемы"));
arNews.push(new arNewsInit(260, "Проектные нормы в микроэлектронике: где на самом деле 7 нанометров в технологии 7 нм?"));
arNews.push(new arNewsInit(244, "Создан новый российский 28-нанометровый процессор для Интернета вещей и компьютерного зрения"));
arNews.push(new arNewsInit(246, "Процессоры «Байкал» проверили на промышленную пригодность огнем, заморозкой и плесенью"));
arNews.push(new arNewsInit(229, "Intel - уже не крупнейший производитель полупроводников"));
arNews.push(new arNewsInit(213, "«Ростех» показал компьютеры на базе российских процессоров «Эльбрус-8С»"));
arNews.push(new arNewsInit(220, "«Байкал Электроникс» выполнила очередной этап проекта по промышленному производству микропроцессоров"));
arNews.push(new arNewsInit(216, "Представлен самый сложный на сегодняшний день микрочип, изготовленный из двумерного материала"));
arNews.push(new arNewsInit(212, "Инженеры IBM уместили 30 млрд транзисторов на чип размером с ноготь"));
arNews.push(new arNewsInit(215, "Samsung может обогнать Intel и стать производителем чипов №1"));
arNews.push(new arNewsInit(203, "«Ангстрем» представил полностью отечественную линейку изделий силовой электроники"));
arNews.push(new arNewsInit(205, "Samsung первой в мире запустила производство 10-нанометровых чипов"));
arNews.push(new arNewsInit(210, "На базе российского процессора КОМДИВ-64 создан защищенный компьютер для военных"));
arNews.push(new arNewsInit(199, "Появился первый официально признанный «полностью российский чип»"));
arNews.push(new arNewsInit(195, "Отечественный персональный компьютер «Эльбрус-401 РС» пошёл в серийное производство"));
arNews.push(new arNewsInit(175, "Названа цена разработки российских процессоров «Эльбрус»"));
arNews.push(new arNewsInit(185, "«Ангстрем» разработал уникальные космические транзисторы"));
arNews.push(new arNewsInit(184, "В России разработан микроконтроллер «электронного мозга» для транспорта и робототехники"));
arNews.push(new arNewsInit(148, "В Томске разработана технология синтеза вещества для производства прозрачной электроники"));
arNews.push(new arNewsInit(140, "Микрон вошёл в ОЭЗ с проектами производства чипов 65-45-28 нм и собственной территорией"));
arNews.push(new arNewsInit(137, "Основной российский производитель электролитических конденсаторов получил 280 млн на новый импортозамещающий проект"));
arNews.push(new arNewsInit(130, "В России выпустили 6-ядерный 40-нм процессор"));
arNews.push(new arNewsInit(127, "Роберт Бауэр - создатель SAGFET-транзисторов"));
arNews.push(new arNewsInit(120, "У нас тут своя архитектура от компании «Байкал Электроникс»"));
arNews.push(new arNewsInit(104, "Завод радиоэлектроники открыт «Микраном» в Томске"));
arNews.push(new arNewsInit(103, "После 4 лет простоя Егоршинский радиозавод модернизирует производство"));
arNews.push(new arNewsInit(4, "Джек Сент Клер Килби - изобретатель интегральных схем"));


function toS6(n) 
{
	s6 = n.toString();
	for (i = s6.length; i < 6; i++) 
	{
		s6 = "0" + s6;
	}	
	return s6;
}

nNewsCount = arNews.length;

sHTML = "";

arNewsID = new Array();
for (i = 0; i < nNewsForShow; i++)
{
//	sHTML += " i = " + i + " ";
	randomly = Math.round ( (nNewsCount - 1) * Math.random() );
//	sHTML += " randomly = " + randomly + " ";
	
	ibreak = 0;

	for(j=0; j<i; j++)
		if (randomly == arNewsID[j])
		{
			i--;
//			document.write('Item err: ' + (randomly) + ' of ' + arNewsID.length + '<br/>');
//			sHTML += " CONTINUE ";
			ibreak = 1;
			continue;
		}
	
	if (ibreak == 1)
		continue;
	
	arNewsID.push(randomly);
}	

for (k = 0; k < nNewsForShow; k++)
{
	sID6 = toS6(arNews[arNewsID[k]].nNewsID);
	sPath = "http://" + sURL + "/" + sNewsDir + "/item/f" + sID6[0] + sID6[1] + "/s" + sID6[2] + sID6[3] + "/n0" + sID6 + "/";
	sHTML += "<br><br><a href='" + sPath + "index.shtml'><img src='" + sPath + "/pic/index.gif' align='left' border='0' width='35' height='35'>" + arNews[arNewsID[k]].sNewsTitle + "</a>";
}

document.getElementById('recartRateli').innerHTML = sHTML;