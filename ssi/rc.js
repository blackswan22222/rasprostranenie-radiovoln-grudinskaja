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
arNews.push(new arNewsInit(393, "������������� ���� ������� � ����������� ������"));
arNews.push(new arNewsInit(383, "�������� �Mitsubishi Electric�: ������������ ����������� ��������������"));
arNews.push(new arNewsInit(380, "��������� � ����� ���������� � ���������������� � ��������� �������"));
arNews.push(new arNewsInit(370, "���������� ������� ����� ������� � ���. ������?"));
arNews.push(new arNewsInit(369, "������������ ����������������� ������ ������ � ������"));
arNews.push(new arNewsInit(368, "TSMC ������� 3-������������ ������� "));
arNews.push(new arNewsInit(365, "���������������� � ������ ������� � ������"));
arNews.push(new arNewsInit(353, "������������ ���������� � ������"));
arNews.push(new arNewsInit(323, "����� �������� ��� ����������������� ������ ������ �� ������ ������� �������"));//19.03.2020
arNews.push(new arNewsInit(329, "�� AMD Ryzen ������ '������' Raspberry Pi - ��������� �� ��� Windows 10"));//18.03.2020
arNews.push(new arNewsInit(330, "����� ������������ � ����������� ���������� ����� �� '������������' ������ ����"));//10.03.2020
arNews.push(new arNewsInit(332, "�� �������� '��������' ������������ � ����������� Intel 6-������ ��������"));//03.03.2020
arNews.push(new arNewsInit(333, "NVIDIA ���������, ������ ���� ��� ���������� ����� ����"));//20.02.2020
arNews.push(new arNewsInit(320, "� ����� ��������� ��������� ���������� � ������� ���������� �����"));//27.01.2020
arNews.push(new arNewsInit(319, "��������������� �������� ��������� ����������� ����� ������� ����� ��� � ������������ ���������������"));//25.01.2020
arNews.push(new arNewsInit(340, "������ ���������, ����������� ��������� �������� ��������������� � ��������������"));//�� 21.10.2019
arNews.push(new arNewsInit(343, "����������� ���������� ��������� Baikal-M ��� �����������, �������� � ���������"));//�� 02.10.2019
arNews.push(new arNewsInit(315, "������� ��������� ������� �����������"));
arNews.push(new arNewsInit(110, "���� �������� �����������. 10 ��� ������������� �����������"));
arNews.push(new arNewsInit(305, "����� ����������� ����������� � ���� ��������"));
arNews.push(new arNewsInit(299, "�� ���� � �������������� �����������"));
arNews.push(new arNewsInit(286, "����� ���������-һ ������ ���������� ������������ ������� ������������ Trench MOSFET"));
arNews.push(new arNewsInit(288, "������� �������� ��������������� ������ ������ ��� ��������� �����"));
arNews.push(new arNewsInit(290, "���������� ����� ������ ������������������� �����������������"));
arNews.push(new arNewsInit(292, "������ 3D-���������� �������� 3 ��"));
arNews.push(new arNewsInit(294, "����� ��������� ������������������� ����, ������������� �� ���������� � 50 ����������"));
arNews.push(new arNewsInit(295, "������ �������� �������, ������� ��������� ����������������� 10 ��� ��� ����������"));
arNews.push(new arNewsInit(264, "� ����� ��������� ����������� ��� ��� IoT (��������� �����)"));
arNews.push(new arNewsInit(270, "����������������: ��������� ����� ������ ������������� ��������������?"));
arNews.push(new arNewsInit(272, "��������� �������� ������������� ���������� �� ������������ ����� ����� ������������"));
arNews.push(new arNewsInit(280, "������������ ���� ����� ������� �� �� ���������� � ���������� ��"));
arNews.push(new arNewsInit(251, "����� ���������� ������� � ������� ������ �������� ���"));
arNews.push(new arNewsInit(255, "16-� ������������� �������� ChipEXPO 2018 ������ � ������"));
arNews.push(new arNewsInit(257, "������ ��������� � ������������ ����� ID-����������"));
arNews.push(new arNewsInit(260, "��������� ����� � ����������������: ��� �� ����� ���� 7 ���������� � ���������� 7 ��?"));
arNews.push(new arNewsInit(244, "������ ����� ���������� 28-������������ ��������� ��� ��������� ����� � ������������� ������"));
arNews.push(new arNewsInit(246, "���������� ������� ��������� �� ������������ ����������� �����, ���������� � ��������"));
arNews.push(new arNewsInit(229, "Intel - ��� �� ���������� ������������� ���������������"));
arNews.push(new arNewsInit(213, "�������� ������� ���������� �� ���� ���������� ����������� ��������-8ѻ"));
arNews.push(new arNewsInit(220, "������� ����������� ��������� ��������� ���� ������� �� ������������� ������������ ����������������"));
arNews.push(new arNewsInit(216, "����������� ����� ������� �� ����������� ���� ��������, ������������� �� ���������� ���������"));
arNews.push(new arNewsInit(212, "�������� IBM �������� 30 ���� ������������ �� ��� �������� � ������"));
arNews.push(new arNewsInit(215, "Samsung ����� �������� Intel � ����� �������������� ����� �1"));
arNews.push(new arNewsInit(203, "��������� ���������� ��������� ������������� ������� ������� ������� �����������"));
arNews.push(new arNewsInit(205, "Samsung ������ � ���� ��������� ������������ 10-������������ �����"));
arNews.push(new arNewsInit(210, "�� ���� ����������� ���������� ������-64 ������ ���������� ��������� ��� �������"));
arNews.push(new arNewsInit(199, "�������� ������ ���������� ���������� ���������� ���������� ���"));
arNews.push(new arNewsInit(195, "������������� ������������ ��������� ��������-401 �ѻ ����� � �������� ������������"));
arNews.push(new arNewsInit(175, "������� ���� ���������� ���������� ����������� ��������"));
arNews.push(new arNewsInit(185, "��������� ���������� ���������� ����������� �����������"));
arNews.push(new arNewsInit(184, "� ������ ���������� ��������������� ������������� ����� ��� ���������� � �������������"));
arNews.push(new arNewsInit(148, "� ������ ����������� ���������� ������� �������� ��� ������������ ���������� �����������"));
arNews.push(new arNewsInit(140, "������ ����� � ��� � ��������� ������������ ����� 65-45-28 �� � ����������� �����������"));
arNews.push(new arNewsInit(137, "�������� ���������� ������������� ����������������� ������������� ������� 280 ��� �� ����� ����������������� ������"));
arNews.push(new arNewsInit(130, "� ������ ��������� 6-������� 40-�� ���������"));
arNews.push(new arNewsInit(127, "������ ����� - ��������� SAGFET-������������"));
arNews.push(new arNewsInit(120, "� ��� ��� ���� ����������� �� �������� ������� �����������"));
arNews.push(new arNewsInit(104, "����� ���������������� ������ ��������� � ������"));
arNews.push(new arNewsInit(103, "����� 4 ��� ������� ����������� ���������� ������������� ������������"));
arNews.push(new arNewsInit(4, "���� ���� ���� ����� - ������������ ������������ ����"));


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