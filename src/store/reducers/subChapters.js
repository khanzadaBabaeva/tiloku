// types
import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = [
  {
    parent: "class5-1",
    children: [
      {
        id: "class5-1-1",
        title: "Тил – пикир алышуунун куралы",
        url: "/class/class5/1/1",
        video: "https://youtu.be/NbohJNxX8v0?si=DQmDNm-Fyhry4TPM",
        page: 5,
      },
      {
        id: "class5-1-2",
        title: "Текст, анын мүнөздүү белгилери",
        url: "/class/class5/1/2",
        video: "https://youtu.be/dJdN3STXQMA?si=QQ46fb10Ie1AktVU",
        page: 8,
      },
      {
        id: "class5-1-3",
        title: "Тексттин маанилик бүтүндүгү",
        url: "/class/class5/1/3",
        video: "https://youtu.be/-psP3ijb7Ig?si=eQJ7x7rUSt0VnBXM",
        page: 10,
      },
      {
        id: "class5-1-4",
        title: "Тексттин темасы жана андагы негизги ой",
        url: "/class/class5/1/4",
        video: "https://youtu.be/IYu0PHdU6dI?si=D8rR6HiVWQ-oPn88",
        page: 14,
      },
      {
        id: "class5-1-5",
        title: "Тексттин планы",
        url: "/class/class5/1/5",
        video: "https://youtu.be/hafTZZr-2FM?si=2tlHCXMcCouYO1Oz",
        page: 16,
      },
      {
        id: "class5-1-6",
        title: "Кептин түрлөрү",
        url: "/class/class5/1/6",
        video: "https://youtu.be/vsnlRsqfxgM?si=eEyJKSVk9N8y1kNK",
        page: 18,
      },
      {
        id: "class5-1-7",
        title: "Сүрөттөө",
        url: "/class/class5/1/7",
        video: "https://youtu.be/-DzNp3lJK-c?si=GDNA4AAOJsPzYpgB",
        page: 21,
      },
      {
        id: "class5-1-8",
        title: "Кептин түрлөрү боюнча машыгуу иштери",
        url: "/class/class5/1/8",
        video: "https://youtu.be/PjzdNlz74io?si=rlZm0kH2NOAH_EGJ",
        page: 24,
      },
      {
        id: "class5-1-9",
        title: "Расмий иштиктүү стиль, анын түрлөрү жөнүндө жалпы маалымат",
        url: "/class/class5/1/9",
        video: "https://youtu.be/YEXmvKpr7kI?si=iNj7e4ZrpF02U4i-",
        page: 28,
      },
      {
        id: "class5-1-10",
        title: "Сөз айкашы",
        url: "/class/class5/1/10",
        video: "https://youtu.be/pFKQcFNls_o?si=CQ81tDe5EXkN5HgR",
        page: 34,
      },
      {
        id: "class5-1-11",
        title: "Сөз айкашынын тутумундагы сөздөрдүн өз ара байланышуу жолдору.",
        url: "/class/class5/1/11",
        video: "https://youtu.be/XeS3rZogCgk?si=vO6K3DZLHqBk731-",
        page: 37,
      },
      {
        id: "class5-1-12",
        title: "Ыкташуу байланышы.",
        url: "/class/class5/1/12",
        video: "https://youtu.be/XeS3rZogCgk?si=OHUz8dr-0On7mvqe",
        page: 38,
      },
      {
        id: "class5-1-13",
        title: "Башкаруу байланышы.",
        url: "/class/class5/1/13",
        video: "https://youtu.be/XeS3rZogCgk?si=OHUz8dr-0On7mvqe",
        page: 39,
      },
      {
        id: "class5-1-14",
        title: "Таандык байланыш",
        url: "/class/class5/1/14",
        video: "https://youtu.be/XeS3rZogCgk?si=OHUz8dr-0On7mvqe",
        page: 40,
      },
      {
        id: "class5-1-15",
        title: "Сүйлөм",
        url: "/class/class5/1/15",
        video: "https://youtu.be/u8SeCL8DkOY?si=G8wqDj84z5jGguNd",
        page: 41,
      },
      {
        id: "class5-1-16",
        title: "Жай сүйлөм",
        url: "/class/class5/1/16",
        video: "https://youtu.be/Wl-M0OP5WEg?si=g3bvvZo5h2wSvycN",
        page: 44,
      },
      {
        id: "class5-1-17",
        title: "Суроолуу сүйлөм",
        url: "/class/class5/1/17",
        video: "https://youtu.be/u8SeCL8DkOY?si=wEnHNt3_hQj5uErz",
        page: 45,
      },
      {
        id: "class5-1-18",
        title: "Илептүү сүйлөм",
        url: "/class/class5/1/18",
        video: "https://youtu.be/dlSo2zCUi2s?si=y8clsLPoY6vxe5Vy",
        page: 47,
      },
      {
        id: "class5-1-19",
        title: "Буйрук сүйлөм",
        url: "/class/class5/1/19",
        video: "https://youtu.be/dlSo2zCUi2s?si=y8clsLPoY6vxe5Vy",
        page: 48,
      },
      {
        id: "class5-1-20",
        title: "Сүйлөм мүчөлөрү",
        url: "/class/class5/1/20",
        video: "https://youtu.be/_-EQMTyHWnk?si=FlNYJRu4rJll3DXO",
        page: 49,
      },
      {
        id: "class5-1-21",
        title: "Сүйлөмдүн баш мүчөлөрү",
        url: "/class/class5/1/21",
        video: "https://youtu.be/zAf08qpQ96g?si=OqlBDdlTUCWvN5R5",
        page: 49,
      },
      {
        id: "class5-1-22",
        title: "Сүйлөмдүн айкындооч мүчөлөрү",
        url: "/class/class5/1/22",
        video: "https://youtu.be/-EQMTyHWnk?si=kZEnwxSnyml8f_-e",
        page: 50,
      },
      {
        id: "class5-1-23",
        title: "Сүйлөмдүн бир өңчөй мүчөлөрү",
        url: "/class/class5/1/23",
        video: "https://youtu.be/jIH0DjSp6OY?si=rSWzBDpj1BzkkuN6",
        page: 54,
      },
      {
        id: "class5-1-24",
        title: "Бир өңчөй мүчөлөрдүн байланышуу жолдору жана тыныш белгилери.",
        url: "/class/class5/1/24",
        video: "https://youtu.be/7arLLmRZ3HE?si=uA2ZPw4rI8Xo7No4",
        page: 55,
      },
      {
        id: "class5-1-25",
        title: "Жалаң жана жайылма сүйлөм",
        url: "/class/class5/1/25",
        video: "https://youtu.be/0lYju19UH2w?si=a_p_d13pWZUts3C0",
        page: 56,
      },
      {
        id: "class5-1-26",
        title: "Каратма сөздөр",
        url: "/class/class5/1/26",
        video: "https://youtu.be/zbF1Mi0OJgc?si=O8tkG82AD0c0NXeY",
        page: 58,
      },
      {
        id: "class5-1-27",
        title: "Жөнөкөй сүйлөмдү талдоо",
        url: "/class/class5/1/27",
        video: "https://youtu.be/0lYju19UH2w?si=Z469NFqyMlHU1JIx",
        page: 59,
      },
      {
        id: "class5-1-28",
        title: "Татаал сүйлөм",
        url: "/class/class5/1/28",
        video: "https://youtu.be/986tphjJhY8?si=TqaUGUElmHD9046Y",
        page: 61,
      },
      {
        id: "class5-1-29",
        title: "Тең байланыштагы татаал сүйлөм",
        url: "/class/class5/1/29",
        video: "https://youtu.be/986tphjJhY8?si=Yslx1VB_y8bFAGLE",
        page: 63,
      },
      {
        id: "class5-1-30",
        title: "Багыныңкы байланыштагы татаал сүйлөм",
        url: "/class/class5/1/30",
        video: "https://youtu.be/AZEZMZae94o?si=9w8Jdx7aDLwbBr-Q",
        page: 65,
      },
      {
        id: "class5-1-31",
        title: "Төл жана бөтөн сөздөр.",
        url: "/class/class5/1/31",
        video: "https://youtu.be/4dg8_XRhO3Q?si=aioybdmvVV5FH0KC",
        page: 67,
      },
      {
        id: "class5-1-32",
        title: "Диалог",
        url: "/class/class5/1/32",
        video: "https://youtu.be/lAPAYJRFJ04?si=Gm772lRnyiab_W2y",
        page: 68,
      },
      {
        id: "class5-1-33",
        title: "Синтаксистик талдоо",
        url: "/class/class5/1/33",
        video: "https://youtu.be/zAf08qpQ96g?si=XmgLBlifj4_-xRtl",
        page: 71,
      },
    ],
  },
  {
    parent: "class5-2",
    children: [
      {
        id: "class5-2-1",
        title: "Фонетика жөнүндө түшүнүк",
        url: "/class/class5/2/1",
        video: "https://www.youtube.com/embed/O-kilM6CqoU?si=sqgWtbdXpse5DIp0",
        page: 73,
      },
      {
        id: "class5-2-2",
        title: "Тыбыш жана тамга",
        url: "/class/class5/2/2",
        video: "https://www.youtube.com/embed/O-kilM6CqoU?si=pohcl9m9sRY9PPm5",
        page: 75,
      },
      {
        id: "class5-2-3",
        title: "Үндүү жана үнсүз тыбыштар",
        url: "/class/class5/2/3",
        video: "https://www.youtube.com/embed/O-kilM6CqoU?si=pohcl9m9sRY9PPm5",
        page: 76,
      },
      {
        id: "class5-2-4",
        title: "Жоон жана ичке үндүүлөр",
        url: "/class/class5/2/4",
        video: "https://youtu.be/4vNofAWWsdc?si=Zwz_YRxkmdgG38Ni",
        page: 77,
      },
      {
        id: "class5-2-5",
        title: "Эриндүү үндүүлөр",
        url: "/class/class5/2/5",
        page: 78,
      },
      {
        id: "class5-2-6",
        title: "Кең жана кууш үндүүлөр",
        url: "/class/class5/2/6",
        page: 79,
      },
      {
        id: "class5-2-7",
        title: "Кыска жана созулма үндүүлөр",
        url: "/class/class5/2/7",
        page: 80,
      },
      {
        id: "class5-2-8",
        title: "Бир сөз ичинде үндүүлөрдүн ээрчишип өзгөрүүсү",
        url: "/class/class5/2/8",
        video: "https://youtu.be/qPdjDT8M34E?si=bxjPTlJ1TQjXav5Q",
        page: 81,
      },
      {
        id: "class5-2-9",
        title: "Үнсүз тыбыштардын бөлүнүшү",
        url: "/class/class5/2/9",
        video: "https://youtu.be/dYUYmnI1fQc?si=yeVc76v8HJ_an9oi",
        page: 83,
      },
      {
        id: "class5-2-10",
        title: "Алфавит, андагы тамгалардын аталышы",
        url: "/class/class5/2/10",
        video: "https://youtu.be/3hbhbMn8GqI?si=DXv8ZHvE23u-W1-6",
        page: 86,
      },
      {
        id: "class5-2-11",
        title: "Баш жана кичине тамгалар",
        url: "/class/class5/2/11",
        page: 87,
      },
      {
        id: "class5-2-12",
        title: "Муун, анын түрлөрү. Сөздөрдү муунга ажыратуу",
        url: "/class/class5/2/12",
        video: "https://youtu.be/03ZprvrHwnM?si=R7AFM4VSEUsDyL7M",
        page: 88,
      },
      {
        id: "class5-2-13",
        title: "Интонация.",
        url: "/class/class5/2/13",
        video: "https://youtu.be/znoQ1Ngk-Pc?si=ixwNy8IsPJZIXgBw",
        page: 90,
      },
      {
        id: "class5-2-14",
        title: "Орфоэпия",
        url: "/class/class5/2/14",
        video: "https://youtu.be/FrQef6PJYd4?si=xUCR4ExlVCq4URcq",
        page: 92,
      },
      {
        id: "class5-2-15",
        title:
          "Бир сөз ичинде к,п тыбыштарынын г,б тыбышына өзгөрүп айтылышы жана жазылышы",
        url: "/class/class5/2/15",
        video: "https://youtu.be/KOrgn2m3ll8?si=rPu-y4ZTt60A_5w3",
        page: 93,
      },
      {
        id: "class5-2-16",
        title:
          "Кеп маданияты.з-с, к-г, д-т,б-п,ч-ш сыяктуу түгөйлүү үнсүздөрдүн айтылышы жана жазылышы жана орфографиялык нормалардын сакталышы",
        url: "/class/class5/2/16",
        page: 93,
      },
      {
        id: "class5-2-17",
        title: "Фонетикалык талдоо",
        url: "/class/class5/2/17",
        page: 95,
      },
      {
        id: "class5-2-18",
        title: "Лексика жана кеп маданияты",
        url: "/class/class5/2/18",
        page: 96,
      },
      {
        id: "class5-2-19",
        title: "Сөздүн лексикалык жана грамматикалык маанилери.",
        url: "/class/class5/2/19",
        video: "https://youtu.be/tk6_T54jOAI?si=g9JBz_4rJwgJ6nKH",
        page: 97,
      },
      {
        id: "class5-2-20",
        title: "Бир маанилүү жана көп маанилүү сөздөр",
        url: "/class/class5/2/20",
        video: "https://youtu.be/2CWJM14JbLs?si=dF6_9MQlDBueC3sy",
        page: 98,
      },
      {
        id: "class5-2-21",
        title: "Сөздүн тике жана өтмө мааниси",
        url: "/class/class5/2/21",
        page: 99,
      },
      {
        id: "class5-2-22",
        title: "Сөздүн эмоционалдык мааниси",
        url: "/class/class5/2/22",
        page: 100,
      },
      {
        id: "class5-2-23",
        title: "Синонимдер",
        url: "/class/class5/2/23",
        page: 102,
      },
      {
        id: "class5-2-24",
        title: "Омонимдер.",
        url: "/class/class5/2/24",
        video: "https://youtu.be/fkQScDc2n3Q?si=KRavYKLKPrvJQWf-",
        page: 103,
      },
      {
        id: "class5-2-25",
        title: "Антонимдер. ",
        url: "/class/class5/2/25",
        video: "https://youtu.be/xxmxRqvm9i8?si=K1SOJo6tD7TnCszU",
        page: 104,
      },
      {
        id: "class5-2-26",
        title: "Кеп маданияты. ",
        url: "/class/class5/2/26",
        page: 105,
      },
      {
        id: "class5-2-27",
        title: "Лексикалык тандоо",
        url: "/class/class5/2/27",
        page: 106,
      },
    ],
  },
  {
    parent: "class5-3",
    children: [
      {
        id: "class5-3-1",
        title: "Сөздүн курамы, уңгу жана мүчө ",
        url: "/class/class5/3/1",
        video: "https://youtu.be/7a0GuAvbWSM?si=-Mb1FrpOt3AJHkN8",
        page: 107,
      },
      {
        id: "class5-3-2",
        title: "Мүчөлөрдүн түрлөрү",
        url: "/class/class5/3/2",
        video: "https://youtu.be/2qH_VQV_Of0?si=RHEQ5RC6zojw-FTf",
        page: 108,
      },
      {
        id: "class5-3-3",
        title: "Туунду жана уңгулаш сөз. Тубаса сөз жөнүндө түшүнүк",
        url: "/class/class5/3/3",
        video: "https://youtu.be/iLeGU8Q6o7o?si=G29a29agJWI0rJ1k",
        page: 111,
      },
      {
        id: "class5-3-4",
        title: "Кеп маданияты.",
        url: "/class/class5/3/4",
        page: 112,
      },
      {
        id: "class5-3-5",
        title: "Сөздү курамдык бөлүгү боюнча талдоо.",
        url: "/class/class5/3/5",
        page: 114,
      },
      {
        id: "class5-3-6",
        title: "Сөз түрүкүмү, аны классификациялоодогу принциптер.",
        url: "/class/class5/3/6",
        video: "https://youtu.be/Me2ew8WqmXQ?si=u58iWIG-hA9BjwlI",
        page: 115,
      },
      {
        id: "class5-3-7",
        title: "Зат атооч",
        url: "/class/class5/3/7",
        video: "https://youtu.be/-MYVOp3dUO8?si=sxLg4CZcvCGTuRxP",
        page: 117,
      },
      {
        id: "class5-3-8",
        title: "Жөнөкөй жана татаал зат атоочтор",
        url: "/class/class5/3/8",
        video: "https://youtu.be/stF25RZXcF4?si=yFtYPRudfFbn8vjk",
        page: 119,
      },
      {
        id: "class5-3-9",
        title: "Зат атоочтун жасалышы",
        url: "/class/class5/3/9",
        video: "https://youtu.be/2EhrmFcjzr0?si=wgKpRYOeB0snrXAk",
        page: 121,
      },
      {
        id: "class5-3-10",
        title: "Энчилүү жана жалпы зат атоочтор",
        url: "/class/class5/3/10",
        video: "https://youtu.be/L7IC0K2QHls?si=PWjNmcGLBf8sSnSi",
        page: 122,
      },
      {
        id: "class5-3-11",
        title: "Энчилүү аттардын жазылышы",
        url: "/class/class5/3/11",
        video: "https://youtu.be/vn8r9BBwBvc?si=9egN3mlZSjPzCdMH",
        page: 123,
      },
      {
        id: "class5-3-12",
        title: "Зат атоочтордун көптүк санда өзгөрүшү.",
        url: "/class/class5/3/12",
        video: "https://youtu.be/ba4ksXPvUwQ?si=pRUsCyy_Uzv5-_uu",
        page: 125,
      },
      {
        id: "class5-3-13",
        title: "Таандык мүчөлөр, алардын түрлөрү",
        url: "/class/class5/3/13",
        video: "https://youtu.be/fuGmToKfE3A?si=cHFR5Rn9-Chh_N8d",
        page: 126,
      },
      {
        id: "class5-3-14",
        title: "Жак таандык мүчөлөр",
        url: "/class/class5/3/14",
        page: 127,
      },
      {
        id: "class5-3-15",
        title: "Таандык мүчөнүн сылык түрү",
        url: "/class/class5/3/15",
        page: 128,
      },
      {
        id: "class5-3-16",
        title: "Жалпы таандык мүчө",
        url: "/class/class5/3/16",
        page: 129,
      },
      {
        id: "class5-3-17",
        title: "Зат атоочтун жакталышы.",
        url: "/class/class5/3/17",
        video: "https://youtu.be/g4JbVNl7eWA?si=vjuhDTlxt3WVjB2W",
        page: 131,
      },
      {
        id: "class5-3-18",
        title: "Зат атоочторду морфологиялык жактан талдоо",
        url: "/class/class5/3/18",
        page: 133,
      },
      {
        id: "class5-3-19",
        title: "Сын атооч.",
        url: "/class/class5/3/19",
        video: "https://youtu.be/KdyiTXUtORE?si=pVFLJGWaK8RS8SJE",
        page: 134,
      },
      {
        id: "class5-3-20",
        title: "Жөнөкөй жана татаал сын атоочтор",
        url: "/class/class5/3/20",
        video: "https://youtu.be/PBTTr_vYZuQ?si=u_KUTgMEoeBWNst0",
        page: 135,
      },
      {
        id: "class5-3-21",
        title: "Тубаса жана туунду атоочтор",
        url: "/class/class5/3/21",
        page: 135,
      },
      {
        id: "class5-3-22",
        title: "Сын атоочтун жасалышы.",
        url: "/class/class5/3/22",
        video: "https://youtu.be/JLFmttb6jS8?si=caapGpWGimL8eAnz",
        page: 136,
      },
      {
        id: "class5-3-23",
        title: "Сын атоочту талдоо",
        url: "/class/class5/3/23",
        page: 138,
      },
    ],
  },
  {
    parent: "class5-4",
    children: [
      {
        id: "class5-4-1",
        title: "Этиш.",
        url: "/class/class5/4/1",
        video: "https://youtu.be/P53vYoWF3iI?si=csRcYLZ5T9MisvRR",
        page: 140,
      },
      {
        id: "class5-4-2",
        title: "Жөнөкөй жана татаал этиш",
        url: "/class/class5/4/2",
        video: "https://youtu.be/ClxXpScQ_74?si=RJvePtGLBnlGh74i",
        page: 141,
      },
      {
        id: "class5-4-3",
        title: "Этиштин жасалышы",
        url: "/class/class5/4/3",
        video: "https://youtu.be/KPzywIMqRpg?si=JJ12vNcs-38Xelxq",
        page: 142,
      },
      {
        id: "class5-4-4",
        title:
          "Татаал этиштеги негизги жана жардамчы бөлүктөр, алардын жазылышы",
        url: "/class/class5/4/4",
        page: 143,
      },
      {
        id: "class5-4-5",
        title: "Этиштин жакталышы",
        url: "/class/class5/4/5",
        video: "https://youtu.be/CXg6zlS-fxg?si=Ug3LFqDfrwtlWOlL",
        page: 143,
      },
      {
        id: "class5-4-6",
        title: "Этиштин чактары, учур чак",
        url: "/class/class5/4/6",
        video: "https://youtu.be/Q09t01vPXSk?si=Lsh3eKpA_9J6Y3N7",
        page: 145,
      },
      {
        id: "class5-4-7",
        title: "Келер чак",
        url: "/class/class5/4/7",
        video: "https://youtu.be/jZvOJMZESRM?si=ishs9vKVwn8qn_Xu",
        page: 146,
      },
      {
        id: "class5-4-8",
        title: "Өткөн чак",
        url: "/class/class5/4/8",
        video: "https://youtu.be/Rsifnofm198?si=SWTEu_O7mpbAYzOi",
        page: 147,
      },
      {
        id: "class5-4-9",
        title:
          "Өткөн чактын татаал формаларынын экен, эле, эмес деген жардамчы этиштердин айкаша келиши аркылуу жасалышы",
        url: "/class/class5/4/9",
        page: 148,
      },
      {
        id: "class5-4-10",
        title: "Кеп маданияты",
        url: "/class/class5/4/10",
        page: 149,
      },
      {
        id: "class5-4-11",
        title: "Этишке морфологиялык талдоо жүрүгүзүү",
        url: "/class/class5/4/11",
        page: 150,
      },
      {
        id: "class5-4-12",
        title: "5-класста өтүлгөн материалдарды бекемдөө жана бышыктоо.",
        url: "/class/class5/4/12",
        video: "https://youtu.be/PZp1Ykpu-F0?si=MecJ7v-ojqWnFleP",
        page: 153,
      },
      {
        id: "class5-4-13",
        title: "Тил поэзиянын тилинде",
        url: "/class/class5/4/13",
        page: 162,
      },
    ],
  },
  {
    parent: "class6-1",
    children: [
      {
        id: "class6-1-1",
        title: "Айтылыш максатына карата сүйлөмдөрдүн бөлүнүшү",
        url: "/class/class6/1/1",
        page: 8,
      },
      {
        id: "class6-1-2",
        title: "Сүйлөмдүн бир өңчөй мүчөлөрү",
        url: "/class/class6/1/2",
        page: 10,
      },
      {
        id: "class6-1-3",
        title: "Көп маанилүү жана өтмө маанилүү сөздөр",
        url: "/class/class6/1/3",
        page: 11,
      },
      {
        id: "class6-1-4",
        title: "Уңгу жана мүчөнүн түрлөрү",
        url: "/class/class6/1/4",
        page: 14,
      },
      {
        id: "class6-1-5",
        title: "Орфоэпиянын негизги эрежелери",
        url: "/class/class6/1/5",
        page: 16,
      },
    ],
  },
  {
    parent: "class6-2",
    children: [
      {
        id: "class6-2-1",
        title: "Текст. Тексттин мүнөздүү белгилери",
        url: "/class/class6/2/1",
        page: 18,
      },
      {
        id: "class6-2-2",
        title: "Тексттин маанилик бүтүндүгү",
        url: "/class/class6/2/2",
        page: 19,
      },
      {
        id: "class6-2-3",
        title: "Тексттин байланыштуулугу",
        url: "/class/class6/2/3",
        page: 23,
      },
      {
        id: "class6-2-4",
        title: "Абзац. Анын текст түзүүдөгү мааниси",
        url: "/class/class6/2/4",
        page: 27,
      },
      {
        id: "class6-2-5",
        title: "Тексттин татаал планын түзүү",
        url: "/class/class6/2/5",
        page: 31,
      },
      {
        id: "class6-2-6",
        title: "Кептин түрлөрү",
        url: "/class/class6/2/6",
        page: 36,
      },
      {
        id: "class6-2-7",
        title: "Сүрөттөө, анын мүнөздүү белгилери",
        url: "/class/class6/2/7",
        page: 38,
      },
      {
        id: "class6-2-8",
        title: "Ой жүгүртүү",
        url: "/class/class6/2/8",
        page: 40,
      },
      {
        id: "class6-2-9",
        title: "Кептин түрлөрү боюнча машыгуу иштери",
        url: "/class/class6/2/9",
        page: 42,
      },
      {
        id: "class6-2-10",
        title: "Стиль жөнүндө түшүнүк",
        url: "/class/class6/2/10",
        page: 45,
      },
      {
        id: "class6-2-11",
        title: "Кептин оозеки жана жазма стили",
        url: "/class/class6/2/11",
        page: 47,
      },
      {
        id: "class6-2-12",
        title: "Көркөм стиль",
        url: "/class/class6/2/12",
        page: 51,
      },
      {
        id: "class6-2-13",
        title: "Расмий эмес иш кагаздары",
        url: "/class/class6/2/13",
        page: 56,
      },
      {
        id: "class6-2-14",
        title: "Тил кат",
        url: "/class/class6/2/14",
        page: 57,
      },
      {
        id: "class6-2-15",
        title: "Ишеним кат",
        url: "/class/class6/2/15",
        page: 58,
      },
      {
        id: "class6-2-16",
        title: "Дарек",
        url: "/class/class6/2/16",
        page: 60,
      },
      {
        id: "class6-2-17",
        title: "Телеграмма",
        url: "/class/class6/2/17",
        page: 61,
      },
      {
        id: "class6-2-18",
        title: "Кептин стилдери боюнча машыгуу иштери",
        url: "/class/class6/2/18",
        page: 62,
      },
    ],
  },
  {
    parent: "class6-3",
    children: [
      {
        id: "class6-3-1",
        title: "Кыргыз тилинин сөздүк кору",
        url: "/class/class6/3/1",
        page: 66,
      },
      {
        id: "class6-3-2",
        title: "Диалектилик сөздөр",
        url: "/class/class6/3/2",
        page: 69,
      },
      {
        id: "class6-3-3",
        title: "Кесиптик сөздөр",
        url: "/class/class6/3/3",
        page: 72,
      },
      {
        id: "class6-3-4",
        title: "Терминдер",
        url: "/class/class6/3/4",
        page: 74,
      },
      {
        id: "class6-3-5",
        title: "Эскирген сөздөр",
        url: "/class/class6/3/5",
        page: 75,
      },
      {
        id: "class6-3-6",
        title: "Жаңы сөздөр (неологизмдер) ",
        url: "/class/class6/3/6",
        page: 78,
      },
      {
        id: "class6-3-7",
        title: "Фразеология жөнүндө түшүнүк",
        url: "/class/class6/3/7",
        page: 82,
      },
      {
        id: "class6-3-8",
        title: "Лексикография жөнүндө түшүнүк",
        url: "/class/class6/3/8",
        page: 85,
      },
      {
        id: "class6-3-9",
        title: "Жыйынтыктоо, кайталоо, сабагы",
        url: "/class/class6/3/9",
        page: 87,
      },
    ],
  },
  {
    parent: "class6-4",
    children: [
      {
        id: "class6-4-1",
        title: "Сөз жасоонун жолдору",
        url: "/class/class6/4/1",
        page: 92,
      },
      {
        id: "class6-4-2",
        title: "Сөздөрдүн морфологиялык жол менен жасалышы",
        url: "/class/class6/4/2",
        page: 93,
      },
      {
        id: "class6-4-3",
        title: "Атоочтон атооч жасоочу мүчөлөр",
        url: "/class/class6/4/3",
        page: 94,
      },
      {
        id: "class6-4-4",
        title: "Атоочтон этиш жасоочу мүчөлөр",
        url: "/class/class6/4/4",
        page: 96,
      },
      {
        id: "class6-4-5",
        title: "Этиштен атооч жасоочу мүчөлөр",
        url: "/class/class6/4/5",
        page: 97,
      },
      {
        id: "class6-4-6",
        title: "Этиштен этиш жасоочу мүчөлөр",
        url: "/class/class6/4/6",
        page: 99,
      },
      {
        id: "class6-4-7",
        title: "Сөз жасоонун синтаксистик жолу",
        url: "/class/class6/4/7",
        page: 100,
      },
      {
        id: "class6-4-8",
        title: "Кош сөздөр",
        url: "/class/class6/4/8",
        page: 103,
      },
      {
        id: "class6-4-9",
        title: "Кошмок сөздөр",
        url: "/class/class6/4/9",
        page: 105,
      },
      {
        id: "class6-4-10",
        title: "Кыскартылган сөздөр",
        url: "/class/class6/4/10",
        page: 108,
      },
      {
        id: "class6-4-11",
        title: "Сөздөрдүн лексикалык-семантикалык жол менен жасалышы",
        url: "/class/class6/4/11",
        page: 111,
      },
      {
        id: "class6-4-12",
        title: "Кыргыз орфографиясынын негизги эрежелери",
        url: "/class/class6/4/12",
        page: 113,
      },
      {
        id: "class6-4-13",
        title: "Сөздөрдү бирге жазуу эрежелери",
        url: "/class/class6/4/13",
        page: 115,
      },
      {
        id: "class6-4-14",
        title: "Сөздөрдү бөлөк жазуу эрежелери",
        url: "/class/class6/4/14",
        page: 116,
      },
      {
        id: "class6-4-15",
        title: "Сөздөрдүн араларына дефис коюп жазуу эрежелери",
        url: "/class/class6/4/15",
        page: 117,
      },
      {
        id: "class6-4-16",
        title: "Баш тамгаларды жазуунун эрежелери",
        url: "/class/class6/4/16",
        page: 118,
      },
      {
        id: "class6-4-17",
        title: "Ташымалдап жазуунун эрежелери",
        url: "/class/class6/4/17",
        page: 120,
      },
    ],
  },
  {
    parent: "class6-5",
    children: [
      {
        id: "class6-5-1",
        title:
          "Зат атоочтун жөндөмөлөр менен өзгөрүшү (башталгыч класстарда өтүлгөн материалдарды эске түшүрүү",
        url: "/class/class6/5/1",
        page: 125,
      },
      {
        id: "class6-5-2",
        title: "Аягы үндүүлөр менен бүткөн зат атоочтун жөндөлүшү",
        url: "/class/class6/5/2",
        page: 128,
      },
      {
        id: "class6-5-3",
        title: "Аягы жумшак үнсүздөр менен бүткөн зат атоочтун жөндөлүшү",
        url: "/class/class6/5/3",
        page: 129,
      },
      {
        id: "class6-5-4",
        title: "Аягы каткалаң үнсүздөр менен бүткөн зат атоочтун жөндөлүшү",
        url: "/class/class6/5/4",
        page: 130,
      },
      {
        id: "class6-5-5",
        title: "Таандык мүчөлөр уланып турган зат атоочтордун жөндөлүшү",
        url: "/class/class6/5/5",
        page: 131,
      },
      {
        id: "class6-5-6",
        title:
          "I жактын жекелик жана көптүк санындагы таандык мүчөлөр уланып турган сөздөрдүн жөндөлүшү",
        url: "/class/class6/5/6",
        page: 132,
      },
      {
        id: "class6-5-7",
        title:
          "II жактын жекелик жана көптүк санындагы таандык мүчөлөр уланып турган сөздөрдүн жөндөлүшү",
        url: "/class/class6/5/7",
        page: 133,
      },
      {
        id: "class6-5-8",
        title:
          "III жактын таандык мүчөcү жана жалпы таандык -ныкы мүчөсү уланып турган сөздөрдүн жөндөлүшү",
        url: "/class/class6/5/8",
        page: 136,
      },
      {
        id: "class6-5-9",
        title:
          "Аягы -ск, -нк, -фть, -кт, -нг, -нд, -мн тыбыштары менен бүткөн сөздөрдүн жөндөлүшү",
        url: "/class/class6/5/9",
        page: 138,
      },
      {
        id: "class6-5-10",
        title: "Зат атоочко морфологиялык талдоо жүргүзүүнүн тартиби",
        url: "/class/class6/5/10",
        page: 139,
      },
    ],
  },
  {
    parent: "class6-6",
    children: [
      {
        id: "class6-6-1",
        title: "Сын атоочтун даражалары. Жай даража",
        url: "/class/class6/6/1",
        page: 141,
      },
      {
        id: "class6-6-2",
        title: "Салыштырма даража",
        url: "/class/class6/6/2",
        page: 142,
      },
      {
        id: "class6-6-3",
        title: "Күчөтмө даража",
        url: "/class/class6/6/3",
        page: 143,
      },
      {
        id: "class6-6-4",
        title: "Басаңдатма даража ",
        url: "/class/class6/6/4",
        page: 145,
      },
      {
        id: "class6-6-5",
        title: "Сапаттык сын атоочтор",
        url: "/class/class6/6/5",
        page: 146,
      },
      {
        id: "class6-6-6",
        title: "Катыштык сын атоочтор",
        url: "/class/class6/6/6",
        page: 147,
      },
      {
        id: "class6-6-7",
        title: "Сын атоочтун заттык мааниде колдонулушу",
        url: "/class/class6/6/7",
        page: 148,
      },
      {
        id: "class6-6-8",
        title: "Сын атоочтун жазылышы",
        url: "/class/class6/6/8",
        page: 150,
      },
      {
        id: "class6-6-9",
        title: "Сын атоочту морфологиялык жактан талдоонун тартиби",
        url: "/class/class6/6/9",
        page: 153,
      },
    ],
  },
  {
    parent: "class6-7",
    children: [
      {
        id: "class6-7-1",
        title: "Сан атоочтун сөз түркүмү катары мүнөздөмөсү",
        url: "/class/class6/7/1",
        page: 155,
      },
      {
        id: "class6-7-2",
        title: "Сан атоочтун грамматикалык түзүлүшүнө карай бөлүнүшү",
        url: "/class/class6/7/2",
        page: 157,
      },
      {
        id: "class6-7-3",
        title: "Туунду жана тубаса сан атоочтор",
        url: "/class/class6/7/3",
        page: 158,
      },
      {
        id: "class6-7-4",
        title: "Туунду сан атоочтун морфологиялык жол мененжасалышы",
        url: "/class/class6/7/4",
        page: 160,
      },
      {
        id: "class6-7-5",
        title: "Татаал сан атоочтун синтаксистик жол менен жасалышыи",
        url: "/class/class6/7/5",
        page: 161,
      },
      {
        id: "class6-7-6",
        title: "Сан атоочтун маанисине карай бөлүнүшү",
        url: "/class/class6/7/6",
        page: 162,
      },
      {
        id: "class6-7-7",
        title: "Эсептик сан атооч",
        url: "/class/class6/7/7",
        page: 163,
      },
      {
        id: "class6-7-8",
        title: "Иреттик сан атооч",
        url: "/class/class6/7/8",
        page: 164,
      },
      {
        id: "class6-7-9",
        title: "Жамдама сан атооч",
        url: "/class/class6/7/9",
        page: 166,
      },
      {
        id: "class6-7-10",
        title: "Чамалама сан атооч",
        url: "/class/class6/7/10",
        page: 168,
      },
      {
        id: "class6-7-11",
        title: "Топ сан атооч",
        url: "/class/class6/7/11",
        page: 170,
      },
      {
        id: "class6-7-12",
        title: "Бөлчөк сан атооч",
        url: "/class/class6/7/12",
        page: 172,
      },
      {
        id: "class6-7-13",
        title: "Сан атоочтордун жөндөлүшү",
        url: "/class/class6/7/13",
        page: 173,
      },
      {
        id: "class6-7-14",
        title: "Сан атоочтун жазылышы",
        url: "/class/class6/7/14",
        page: 175,
      },
      {
        id: "class6-7-15",
        title: "Сан атоочту морфологиялык жактан талдоонун тартиби",
        url: "/class/class6/7/15",
        page: 179,
      },
    ],
  },
  {
    parent: "class6-8",
    children: [
      {
        id: "class6-8-1",
        title: "Ат атоочтун сөз түркүмү катары мүнөздөмөсү",
        url: "/class/class6/8/1",
        page: 181,
      },
      {
        id: "class6-8-2",
        title: "Ат атоочтун түзүлүшүнө карай бөлүнүшү",
        url: "/class/class6/8/2",
        page: 183,
      },
      {
        id: "class6-8-3",
        title: "Жактама ат атооч",
        url: "/class/class6/8/3",
        page: 184,
      },
      {
        id: "class6-8-4",
        title: "Шилтеме ат атооч",
        url: "/class/class6/8/4",
        page: 186,
      },
      {
        id: "class6-8-5",
        title: "Сурама ат атооч ",
        url: "/class/class6/8/5",
        page: 189,
      },
      {
        id: "class6-8-6",
        title: "Тангыч ат атооч",
        url: "/class/class6/8/6",
        page: 191,
      },
      {
        id: "class6-8-7",
        title: "Аныктама ат атооч",
        url: "/class/class6/8/7",
        page: 193,
      },
      {
        id: "class6-8-8",
        title: "Белгисиз ат атооч",
        url: "/class/class6/8/8",
        page: 196,
      },
      {
        id: "class6-8-9",
        title: "Шилтеме ат атоочтун жөндөлүшү",
        url: "/class/class6/8/9",
        page: 199,
      },
      {
        id: "class6-8-10",
        title: "Сурама ат атоочтун жөндөлүшү",
        url: "/class/class6/8/10",
        page: 200,
      },
      {
        id: "class6-8-11",
        title: "Тангыч ат атоочтун жөндөлүшү",
        url: "/class/class6/8/11",
        page: 202,
      },
      {
        id: "class6-8-12",
        title: "Аныктама ат атоочтордун жөндөлүшү",
        url: "/class/class6/8/12",
        page: 203,
      },
      {
        id: "class6-8-13",
        title: "Белгисиз ат атоочтун жөндөлүшү",
        url: "/class/class6/8/13",
        page: 204,
      },
      {
        id: "class6-8-14",
        title: "Ат атоочтун жазылышы",
        url: "/class/class6/8/14",
        page: 205,
      },
      {
        id: "class6-8-15",
        title: "Ат атоочко морфологиялык талдоо жүргүзүүнүн тартиби",
        url: "/class/class6/8/15",
        page: 208,
      },
    ],
  },
  {
    parent: "class6-9",
    children: [
      {
        id: "class6-9-1",
        title: "Этиштин ыңгайлары",
        url: "/class/class6/9/1",
        page: 210,
      },
      {
        id: "class6-9-2",
        title: "Баяндагыч ыңгай",
        url: "/class/class6/9/2",
        page: 212,
      },
      {
        id: "class6-9-3",
        title: "Буйрук ыңгай",
        url: "/class/class6/9/3",
        page: 214,
      },
      {
        id: "class6-9-4",
        title: "Шарттуу ыңгай",
        url: "/class/class6/9/4",
        page: 216,
      },
      {
        id: "class6-9-5",
        title: "Каалоо-тилек ыңгай",
        url: "/class/class6/9/5",
        page: 218,
      },
      {
        id: "class6-9-6",
        title: "Максат-ниет ыңгай. Анын жакталышы",
        url: "/class/class6/9/6",
        page: 219,
      },
      {
        id: "class6-9-7",
        title: "Негизги мамиле",
        url: "/class/class6/9/7",
        page: 224,
      },
      {
        id: "class6-9-8",
        title: "Кош мамиле",
        url: "/class/class6/9/8",
        page: 226,
      },
      {
        id: "class6-9-9",
        title: "Өздүк мамиле",
        url: "/class/class6/9/9",
        page: 228,
      },
      {
        id: "class6-9-10",
        title: "Туюк мамиле ",
        url: "/class/class6/9/10",
        page: 229,
      },
      {
        id: "class6-9-11",
        title: "Аркылуу мамиле",
        url: "/class/class6/9/11",
        page: 231,
      },
      {
        id: "class6-9-12",
        title: "Этиштин мамилелерин морфологиялык жактан талдоонун үлгүсү",
        url: "/class/class6/9/12",
        page: 235,
      },
    ],
  },
  {
    parent: "class6-10",
    children: [
      {
        id: "class6-10-1",
        title: "Сөздүн түрлөрү",
        url: "/class/class6/10/1",
        page: 239,
      },
      {
        id: "class6-10-2",
        title: "Сөз жасоону бышыктоо",
        url: "/class/class6/10/2",
        page: 240,
      },
      {
        id: "class6-10-3",
        title: "Зат атоочтун жөндөлүшүн бышыктоо",
        url: "/class/class6/10/3",
        page: 241,
      },
      {
        id: "class6-10-4",
        title: "Сан атоочту бышыктоо",
        url: "/class/class6/10/4",
        page: 242,
      },
      {
        id: "class6-10-5",
        title: "Aт атоочтун маанилик түрлөрү",
        url: "/class/class6/10/5",
        page: 243,
      },
      {
        id: "class6-10-6",
        title: "Этиштин ыңгайларын, мамилелерин бышыктоо",
        url: "/class/class6/10/6",
        page: 244,
      },
      {
        id: "class6-10-7",
        title: "Жазуу эрежелерин бышыктоо",
        url: "/class/class6/10/7",
        page: 245,
      },
      {
        id: "class6-10-8",
        title: " Кыргыз тилиндеги сөз түркүмдөрүнүн таблицалары ",
        url: "/class/class6/10/8",
        page: 246,
      },
    ],
  },
  {
    parent: "class7-1",
    children: [
      {
        id: "class7-1-1",
        title: "Тексттин маанилик бүтүндүгү.",
        url: "/class/class7/1/1",
        page: 6,
      },
      {
        id: "class7-1-2",
        title: "Тексттеги абзац менен кичине темачалардын байланышы",
        url: "/class/class7/1/2",
        page: 9,
      },
      {
        id: "class7-1-3",
        title:
          "Тексттин байланыштуулугу.Тексттеги сүйлөмдөрдүн ез ара ички маанилик байланышуу жолдору (кайталоо)",
        url: "/class/class7/1/3",
        page: 13,
      },
      {
        id: "class7-1-4",
        title: "Тексттеги сүйлөмдөрдү байланыштыруучу тышкы тил каражаттары",
        url: "/class/class7/1/4",
        page: 14,
      },
      {
        id: "class7-1-5",
        title: "Маанилеш сөздөрдүн алмашуусу аркылуу байланышуу",
        url: "/class/class7/1/5",
        page: 19,
      },
      {
        id: "class7-1-6",
        title: "Орундуу кайталоо жана зарылдыты",
        url: "/class/class7/1/6",
        page: 24,
      },
      {
        id: "class7-1-7",
        title: "Орунсуз кайталоо",
        url: "/class/class7/1/7",
        page: 27,
      },
    ],
  },
  {
    parent: "class7-2",
    children: [
      {
        id: "class7-2-1",
        title: "Көркөм стилге мүнөздүү тил каражаттары (кайталоо)",
        url: "/class/class7/2/1",
        page: 29,
      },
      {
        id: "class7-2-2",
        title: "Илимий стиль, анын мүнөздүү белгилери",
        url: "/class/class7/2/2",
        page: 31,
      },
      {
        id: "class7-2-3",
        title: "Илимий стилге мүнөздүү тил каражаттары.",
        url: "/class/class7/2/3",
        page: 32,
      },
      {
        id: "class7-2-4",
        title: "Публицистикалык стиль тууралуу жалпы маалымат",
        url: "/class/class7/2/4",
        page: 36,
      },
      {
        id: "class7-2-5",
        title: "Расмий эмес иш кагаздары тууралуу түшүнүк",
        url: "/class/class7/2/5",
        page: 37,
      },
    ],
  },
  {
    parent: "class7-3",
    children: [
      {
        id: "class7-3-1",
        title: "Баяндоо, суреттеену (айлана-чейрену) кайталоо.",
        url: "/class/class7/3/1",
        page: 42,
      },
      {
        id: "class7-3-2",
        title: "Ал-абалды (адамдарды, айлананы ж. б.) сүрөттөө.",
        url: "/class/class7/3/2",
        page: 43,
      },
      {
        id: "class7-3-3",
        title: "Ой жугуртуунун мүнөздүү белгилери",
        url: "/class/class7/3/3",
        page: 45,
      },
    ],
  },
  {
    parent: "class7-4",
    children: [
      {
        id: "class7-4-1",
        title: " Тактооч. Тактоочтун сөз түркүмү катары касиети",
        url: "/class/class7/4/1",
        page: 48,
      },
      {
        id: "class7-4-2",
        title: " Жөнөкөй тактоочтун жасалышына карай бөлүнүшү.",
        url: "/class/class7/4/2",
        page: 50,
      },
      {
        id: "class7-4-3",
        title: "Туунду тактоочтордун морфологиялык жол менен жасалышы",
        url: "/class/class7/4/3",
        page: 51,
      },
      {
        id: "class7-4-4",
        title: "Татаал тактоочтордун синтаксистик жол менен жасалышы",
        url: "/class/class7/4/4",
        page: 53,
      },
      {
        id: "class7-4-5",
        title: "Мезгил тактооч.",
        url: "/class/class7/4/5",
        page: 56,
      },
      {
        id: "class7-4-6",
        title: "Орун тактооч.",
        url: "/class/class7/4/6",
        page: 58,
      },
      {
        id: "class7-4-7",
        title: "Сын-сыпат тактооч.",
        url: "/class/class7/4/7",
        page: 59,
      },
      {
        id: "class7-4-8",
        title: "Сан-өлчөм тактооч",
        url: "/class/class7/4/8",
        page: 60,
      },
      {
        id: "class7-4-9",
        title: "Тактоочтордун жазылышы",
        url: "/class/class7/4/9",
        page: 62,
      },
      {
        id: "class7-4-10",
        title: "Өтүлгөн материалдарды жыйынтыктоо (кайталоо) сабагы.",
        url: "/class/class7/4/10",
        page: 64,
      },
    ],
  },
  {
    parent: "class7-5",
    children: [
      {
        id: "class7-5-1",
        title: "Тууранды сөздөр",
        url: "/class/class7/5/1",
        page: 67,
      },
      {
        id: "class7-5-2",
        title: "Тууранды сөздөрдүн түзүлүшүнө карай бөлүнүшү.",
        url: "/class/class7/5/2",
        page: 68,
      },
      {
        id: "class7-5-3",
        title: "Табыш туранды сөздөр",
        url: "/class/class7/5/3",
        page: 70,
      },
      {
        id: "class7-5-4",
        title: "Элес тууранды сөздөр ",
        url: "/class/class7/5/4",
        page: 72,
      },
      {
        id: "class7-5-5",
        title: " Тууранды сөздөрдүн жазылышы",
        url: "/class/class7/5/5",
        page: 73,
      },
      {
        id: "class7-5-6",
        title: "Сырдык сөздөр",
        url: "/class/class7/5/6",
        page: 75,
      },
      {
        id: "class7-5-7",
        title: "Сырдык сөздөрдүн маанисине карай бөлүнүшү.",
        url: "/class/class7/5/7",
        page: 77,
      },
      {
        id: "class7-5-8",
        title:
          "Сырдык сөздөргө коюлуучу тыныш белгилер,сырдык сөздөрдүн жазылышы...",
        url: "/class/class7/5/8",
        page: 79,
      },
    ],
  },
  {
    parent: "class7-6",
    children: [
      {
        id: "class7-6-1",
        title: "Атоочтуктар",
        url: "/class/class7/6/1",
        page: 83,
      },
      {
        id: "class7-6-2",
        title: "Атоочтуктардын морфологиялык жол менен жасалышы",
        url: "/class/class7/6/2",
        page: 83,
      },
      {
        id: "class7-6-3",
        title: "Атоочтуктардын синтаксистик жол менен жасалышы",
        url: "/class/class7/6/3",
        page: 85,
      },
      {
        id: "class7-6-4",
        title: "Атоочтуктардын этиштик белгилер",
        url: "/class/class7/6/4",
        page: 86,
      },
      {
        id: "class7-6-5",
        title: "Атоочтуктарды сын атоочко окшош белгилери",
        url: "/class/class7/6/5",
        page: 88,
      },
      {
        id: "class7-6-6",
        title: "Атоочтуктардый заттык мааниде колдонулушу.",
        url: "/class/class7/6/6",
        page: 91,
      },
      {
        id: "class7-6-7",
        title: "Атоочтуктардын синтаксистик кызматы.",
        url: "/class/class7/6/7",
        page: 92,
      },
      {
        id: "class7-6-8",
        title: "Атоочтук түрмөк",
        url: "/class/class7/6/8",
        page: 94,
      },
      {
        id: "class7-6-9",
        title: "Атоочтуктарды кайталоо жана жалпылоо",
        url: "/class/class7/6/9",
        page: 197,
      },
      {
        id: "class7-6-10",
        title: "Чакчылдар",
        url: "/class/class7/6/10",
        page: 100,
      },
      {
        id: "class7-6-11",
        title: "Чакчылдардын тактоочко окшош белгилери",
        url: "/class/class7/6/11",
        page: 104,
      },
      {
        id: "class7-6-12",
        title: "Чакчылдардын этишке окшош белгилери",
        url: "/class/class7/6/12",
        page: 106,
      },
      {
        id: "class7-6-13",
        title: "Чакчыл түрмөк жөнүндө түшүнүк.",
        url: "/class/class7/6/13",
        page: 109,
      },
      {
        id: "class7-6-14",
        title: "Кайталоо (жыйынтыктоо) сабагы.",
        url: "/class/class7/6/14",
        page: 112,
      },
      {
        id: "class7-6-15",
        title: "Кыймыл атоочтор",
        url: "/class/class7/6/15",
        page: 115,
      },
      {
        id: "class7-6-16",
        title: "Кыймыл атоочтун зат атоочко окшош белгилери",
        url: "/class/class7/6/16",
        page: 116,
      },
      {
        id: "class7-6-17",
        title: "Кыймыл атоочтун этишке окшош белгилери.",
        url: "/class/class7/6/17",
        page: 119,
      },
      {
        id: "class7-6-18",
        title: "Кыймыл атоочтун синтаксистик кызматы.",
        url: "/class/class7/6/18",
        page: 122,
      },
      {
        id: "class7-6-19",
        title: "Өтүлгөн материалдарды кайталоо(жалпылоо) сабагы",
        url: "/class/class7/6/19",
        page: 123,
      },
      {
        id: "class7-6-20",
        title: "Кызматчы сөздөр",
        url: "/class/class7/6/20",
        page: 125,
      },
      {
        id: "class7-6-21",
        title: "Жандоочтор",
        url: "/class/class7/6/21",
        page: 127,
      },
      {
        id: "class7-6-22",
        title: "Жандоочтун түрлөрү",
        url: "/class/class7/6/22",
        page: 128,
      },
      {
        id: "class7-6-23",
        title: "Байламталар",
        url: "/class/class7/6/23",
        page: 130,
      },
      {
        id: "class7-6-24",
        title: "Байламталардын маанисине карай бөлүнүшү.",
        url: "/class/class7/6/24",
        page: 132,
      },
      {
        id: "class7-6-25",
        title: "Байланыштыргыч байламта",
        url: "/class/class7/6/25",
        page: 133,
      },
      {
        id: "class7-6-26",
        title: "Божомолдогуч байламта",
        url: "/class/class7/6/26",
        page: 135,
      },
      {
        id: "class7-6-27",
        title: "Каршылагыч байламта",
        url: "/class/class7/6/27",
        page: 136,
      },
      {
        id: "class7-6-28",
        title: "Себеп-натыйжалагыч байламта",
        url: "/class/class7/6/28",
        page: 137,
      },
      {
        id: "class7-6-29",
        title: "Салыштырма байламта",
        url: "/class/class7/6/29",
        page: 138,
      },
      {
        id: "class7-6-30",
        title: "Шарттуу байламта ",
        url: "/class/class7/6/30",
        page: 140,
      },
      {
        id: "class7-6-31",
        title: "Байламталардын тыныш белгилери",
        url: "/class/class7/6/31",
        page: 141,
      },
      {
        id: "class7-6-32",
        title: "Бөлүкчөлөр.",
        url: "/class/class7/6/32",
        page: 144,
      },
      {
        id: "class7-6-33",
        title: "Бөлүкчөлөрдүн маанисине карай бөлүнүшү",
        url: "/class/class7/6/33",
        page: 144,
      },
      {
        id: "class7-6-34",
        title: "Модаль сөздөр",
        url: "/class/class7/6/34",
        page: 147,
      },
      {
        id: "class7-6-35",
        title: "Модаль сөздөрдүн маанисине карай бөлүнүшү.",
        url: "/class/class7/6/35",
        page: 148,
      },
      {
        id: "class7-6-36",
        title: "Модаль сөздөрдүн синтаксистик кызматы жана тыныш белгилери",
        url: "/class/class7/6/36",
        page: 150,
      },
      {
        id: "class7-6-37",
        title: "Өтүлгөн материалдарды жынынтыктоо(кайталоо) сабагы",
        url: "/class/class7/6/37",
        page: 152,
      },
    ],
  },
  {
    parent: "class8-1",
    children: [
      {
        id: "class8-1-1",
        title: "Текстеги абзац жана микротеманын колдонулушу (кайталоо)",
        url: "/class/class8/1/1",
        page: 7,
      },
      {
        id: "class8-1-2",
        title: "Текстеги орундуу жана орунсуз кайталоо",
        url: "/class/class8/1/2",
        page: 12,
      },
      {
        id: "class8-1-3",
        title: "Сүйлөмдүн байланышуу жолдору",
        url: "/class/class8/1/3",
        page: 18,
      },
      {
        id: "class8-1-4",
        title: "Сүйлөмдү байланыштыруунун каражаттары",
        url: "/class/class8/1/4",
        page: 23,
      },
    ],
  },
  {
    parent: "class8-2",
    children: [
      {
        id: "class8-2-1",
        title: "Илимий стилге мүнөздүү каражаттар (кайталоо)",
        url: "/class/class8/2/1",
        page: 28,
      },
      {
        id: "class8-2-2",
        title: "Публицистикалык стиль ",
        url: "/class/class8/2/2",
        page: 34,
      },
      {
        id: "class8-2-3",
        title: "Публицистикалык стилге мүнөздүү тилдик каражаттар",
        url: "/class/class8/2/3",
        page: 35,
      },
      {
        id: "class8-2-4",
        title: "Иш кагаздар",
        url: "/class/class8/2/4",
        page: 40,
      },
    ],
  },
  {
    parent: "class8-3",
    children: [
      {
        id: "class8-3-1",
        title:
          "Сүрөттөөнүн объектилери:жандуу,жансыз заттар,орун,айлана-чөйрө,ал-абал",
        url: "/class/class8/3/1",
        page: 44,
      },
      {
        id: "class8-3-2",
        title: "Ой жүгүртүү",
        url: "/class/class8/3/2",
        page: 48,
      },
      {
        id: "class8-3-3",
        title:
          "5-7-класста өтүлгөн материалдарды системалаштыруу жана жалпылоо",
        url: "/class/class8/3/3",
        page: 54,
      },
    ],
  },
  {
    parent: "class8-4",
    children: [
      {
        id: "class8-4-1",
        title: "Cөз айкашы",
        url: "/class/class8/4/1",
        page: 72,
      },
      {
        id: "class8-4-2",
        title: "Сөз айкашынын түрлөрү",
        page: 75,
      },
      {
        id: "class8-4-3",
        title: "Сөз айкашынын түгөйлөрүнүн байланышуу жолдору",
        page: 82,
      },
      {
        id: "class8-4-4",
        title: "Ыкташуу байланышы",
        page: 83,
      },
      {
        id: "class8-4-5",
        title: "Таандык байланыш",
        page: 86,
      },
      {
        id: "class8-4-6",
        title: "Башкаруу байланышы",
        page: 89,
      },
      {
        id: "class8-4-7",
        title: "Ээрчишүү байланышы",
        page: 91,
      },
    ],
  },
  {
    parent: "class8-5",
    children: [
      {
        id: "class8-5-1",
        title: "Сүйлөмдүн белгилери",
        page: 101,
      },
      {
        id: "class8-5-2",
        title: "Сүйлөмдүн айтылышына карай бөлүнүшү",
        page: 106,
      },
    ],
  },
  {
    parent: "class8-6",
    children: [
      {
        id: "class8-6-1",
        title: "Жалаң жана жайылма сүйлөмдөр",
        page: 115,
      },
      {
        id: "class8-6-2",
        title: "Кемтик сүйлөм",
        page: 118,
      },
      {
        id: "class8-6-3",
        title: "Ээ жана анын түзүлүшү",
        page: 128,
      },
      {
        id: "class8-6-4",
        title: "Баяндооч жана анын түрлөрү",
        page: 132,
      },
      {
        id: "class8-6-5",
        title: "Ээ менен баяндоочтун арасына сызыкчанын коюлушу",
        page: 135,
      },
    ],
  },
  {
    parent: "class8-7",
    children: [
      {
        id: "class8-7-1",
        title: "Аныктооч",
        url: "/class/class8/7/1",
        page: 139,
      },
      {
        id: "class8-7-2",
        title: "Жандама мүчө",
        url: "/class/class8/7/2",
        page: 144,
      },
      {
        id: "class8-7-3",
        title: "Атоочтук түрмөктөрдүн аныктоочтук милдети",
        url: "/class/class8/7/3",
        page: 147,
      },
      {
        id: "class8-7-4",
        title: "Толуктооч жана анын түрлөрү",
        url: "/class/class8/7/4",
        page: 150,
      },
      {
        id: "class8-7-5",
        title: "Бышыктооч жана анын түрлөрү",
        url: "/class/class8/7/5",
        page: 157,
      },
      {
        id: "class8-7-6",
        title: "Чакчыл түрмөктөрдүн бышыктоочтук милдети",
        url: "/class/class8/7/6",
        page: 160,
      },
      {
        id: "class8-7-7",
        title: "Сүйлөмдүн бир өңчөй мүчөлөрү",
        url: "/class/class8/7/7",
        page: 163,
      },
      {
        id: "class8-7-8",
        title: "Бир өңчөй мүчөлөрдүн байланышуу жолдору",
        url: "/class/class8/7/8",
      },
      {
        id: "class8-7-9",
        title: "Бир өңчөй мүчөлөрдө коюлуучу тыныш белгилер",
        url: "/class/class8/7/9",
      },
      {
        id: "class8-7-10",
        title: "Бир өңчөй жана бир өңчөй эмес аныктоочтор",
        url: "/class/class8/7/10",
      },
      {
        id: "class8-7-11",
        title: "Бир өңчөй мүчөлөрдөгү жалпылагыч сөздөр",
        url: "/class/class8/7/11",
      },
      {
        id: "class8-7-12",
        title: "Жалпылагыч сөздөрдө коюлуучу тыныш белгилер",
        url: "/class/class8/7/12",
      },
      {
        id: "class8-7-13",
        title: "Кеп маданияты",
        url: "/class/class8/7/13",
      },
      {
        id: "class8-7-14",
        title: "Сүйлөмдөрдөгү сөздөрдүн орун тартиби",
        url: "/class/class8/7/14",
      },
    ],
  },
  {
    parent: "class8-8",
    children: [
      {
        id: "class8-8-1",
        title: "Жалпы жактуу сүйлөм",
        url: "/class/class8/8/1",
      },
      {
        id: "class8-8-2",
        title: "Белгилүү жактуу сүйлөм",
        url: "/class/class8/8/2",
      },
      {
        id: "class8-8-3",
        title: "Белгисиз жактуу сүйлөм",
        url: "/class/class8/8/3",
      },
      {
        id: "class8-8-4",
        title: "Жаксыз сүйлөм",
        url: "/class/class8/8/4",
      },
      {
        id: "class8-8-5",
        title: "Атама сүйлөм",
        url: "/class/class8/8/5",
      },
    ],
  },
  {
    parent: "class8-9",
    children: [
      {
        id: "class8-9-1",
        title: "Багыныңкы байланыштагы сөздөрдүн өз ара байланышуу жолдору",
        url: "/class/class8/9/1",
      },
      {
        id: "class8-9-2",
        title: "Сүйлөмдүн баш мүчөлөр",
        url: "/class/class8/9/2",
      },
      {
        id: "class8-9-3",
        title: "Сүйлөмдүн айкындооч мүчөлөр",
        url: "/class/class8/9/3",
      },
      {
        id: "class8-9-4",
        title: "Толук жана кемтик сүйлөмдөр,алардын өз ара байланышы",
        url: "/class/class8/9/4",
      },
      {
        id: "class8-9-5",
        title:
          "Сүйлөмдүн бир өңчөй мүчөлөр,жалпылагыч сөз,аларда коюлуучу тыныш белгилер",
        url: "/class/class8/9/5",
      },
    ],
  },
  {
    parent: "class9-1",
    children: [
      {
        id: "class9-1-1",
        title: "Кыргыз тилинин түрк тилдеринен алган орду",
        url: "/class/class9/1/1",
        page: 3,
      },
      {
        id: "class9-1-2",
        title: "Өтүлгөн материалдарды системалаштыруу жана жалпылаштыруу",
        url: "/class/class9/1/2",
        page: 6,
      },
      {
        id: "class9-1-3",
        title: "Текст, анын мүнөздүү белгилери",
        url: "/class/class9/1/3",
        page: 6,
      },
      {
        id: "class9-1-4",
        title: "Тексттин структурасы (түзүлүшү, курулушу)",
        url: "/class/class9/1/4",
        page: 10,
      },
      {
        id: "class9-1-5",
        title:
          "Тексттин темасы, анын кептин жана стилдин түрлөрү менен болгон карым-катышы.",
        url: "/class/class9/1/5",
        page: 14,
      },
    ],
  },
  {
    parent: "class9-2",
    children: [
      {
        id: "class9-2-1",
        title: "Публицистикалык стилдин мүнөздүү белгилери (кайталоо)",
        url: "/class/class9/2/1",
        page: 17,
      },
      {
        id: "class9-2-2",
        title: "Расмий-иштиктуу стиль",
        url: "/class/class9/2/2",
        page: 20,
      },
      {
        id: "class9-2-3",
        title: "Расмий-иштиктуу стилге мүнөздүү тилдик каражаттар",
        url: "/class/class9/2/3",
        page: 21,
      },
      {
        id: "class9-2-4",
        title: "Расмий эмес иш кагаздары.",
        url: "/class/class9/2/4",
        page: 24,
      },
      {
        id: "class9-2-5",
        title: "Расмий иш кагаздары.",
        url: "/class/class9/2/5",
        page: 26,
      },
      {
        id: "class9-2-6",
        title: "Кептин стилдери боюнча машыгуу иштери",
        url: "/class/class9/2/6",
        page: 29,
      },
    ],
  },
  {
    parent: "class9-3",
    children: [
      {
        id: "class9-3-1",
        title: "Баяндоо,сүрөттөө кебинин көркөм стиль менен карым-катышы.",
        url: "/class/class9/3/1",
        page: 32,
      },
      {
        id: "class9-3-2",
        title:
          "Окуучулардын VI класта алган билимдерин эске салуу жана бышыктоо.",
        url: "/class/class9/3/2",
        page: 48,
      },
      {
        id: "class9-3-3",
        title: "Каратма сөз.",
        url: "/class/class9/3/3",
        page: 69,
      },
      {
        id: "class9-3-4",
        title:
          "Каратма сөздүн милдетин аткаруучу сөздөр, сөз тизмектери жана алардын маанилери.",
        url: "/class/class9/3/4",
        page: 70,
      },
      {
        id: "class9-3-5",
        title: "Каратма сөздүн түзүлүшү жана сүйлөмдө алган орду",
        url: "/class/class9/3/5",
        page: 73,
      },
      {
        id: "class9-3-6",
        title: "Каратма сөздө коюлуучу тыныш белгилери.",
        url: "/class/class9/3/6",
        page: 74,
      },
      {
        id: "class9-3-7",
        title: "Киринди сөз.",
        url: "/class/class9/3/7",
        page: 75,
      },
      {
        id: "class9-3-8",
        title: "Киринди сүйлөм.",
        url: "/class/class9/3/8",
        page: 78,
      },
      {
        id: "class9-3-9",
        title: "Киринди сөз жана киринди сүйлөмдөрдө коюлуучу тыныш белгилери",
        url: "/class/class9/3/9",
        page: 80,
      },
      {
        id: "class9-3-10",
        title: "Сырдык сөз.",
        url: "/class/class9/3/10",
        page: 81,
      },
      {
        id: "class9-3-11",
        title: "Сырдык сөздөргө коюлуучу тыныш белгилери.",
        url: "/class/class9/3/11",
        page: 82,
      },
    ],
  },
  {
    parent: "class9-4",
    children: [
      {
        id: "class9-4-1",
        title: "Обочолонгон түшүндүрмө аныктооч.",
        url: "/class/class9/4/1",
        page: 90,
      },
      {
        id: "class9-4-2",
        title: "Обочолонгон түшүндүрмө толуктооч.",
        url: "/class/class9/4/2",
        page: 92,
      },
      {
        id: "class9-4-3",
        title: " Обочолонгон түшүндүрмө бышыктооч.",
        url: "/class/class9/4/3",
        page: 94,
      },
    ],
  },
  {
    parent: "class9-5",
    children: [
      {
        id: "class9-5-1",
        title: "Атоочтук түрмөк, анын грамматикалык белгилери жана түзүлүшү.",
        url: "/class/class9/5/1",
        page: 99,
      },
      {
        id: "class9-5-2",
        title: "Атоочтук түрмөктөрдүн синтаксистик милдеттери",
        url: "/class/class9/5/2",
        page: 101,
      },
      {
        id: "class9-5-3",
        title: "Чакчыл түрмөк,анын грамматикалык белгилери жана түзүлүшү. ",
        url: "/class/class9/5/3",
        page: 110,
      },
      {
        id: "class9-5-4",
        title: "Чакчыл түрмөктөрдүн синтаксистик кызматы",
        url: "/class/class9/5/4",
        page: 112,
      },
      {
        id: "class9-5-5",
        title:
          "Чакчыл түрмөктүн сүйлөмдөгү орду жана ага коюлуучу тыныш белгилери",
        url: "/class/class9/5/5",
        page: 115,
      },
    ],
  },
  {
    parent: "class9-6",
    children: [
      {
        id: "class9-6-1",
        title: "Татаал сүйлөмдөрдүн грамматикалык түзүлүшү. ",
        url: "/class/class9/6/1",
        page: 123,
      },
      {
        id: "class9-6-2",
        title:
          "Татаал сүйлөмдөрдүн синтаксистик түгөйлөрүнүн өз ара байланышуу жолдору ",
        url: "/class/class9/6/2",
        page: 127,
      },
      {
        id: "class9-6-3",
        title: "Тең байланыштагы татаал сүйлөм.",
        url: "/class/class9/6/3",
        page: 129,
      },
      {
        id: "class9-6-4",
        title:
          "Тең байланыштагы татаал сүйлөмдөрдүн тутумундагы жөнөкөй сүйлөмдөрдүн байланышуу жолдору жана алардын түрлөрү.",
        url: "/class/class9/6/4",
        page: 131,
      },
      {
        id: "class9-6-5",
        title:
          "Байламтасыз тең байланыштагы татал сүйлөм жана анын синтаксистик түгөйлөрүнүн маанилик катыштары. ",
        url: "/class/class9/6/5",
        page: 133,
      },
      {
        id: "class9-6-6",
        title:
          "Байламтасыз тең байланыштагы татал сүйлөмдөрдө коюлуучу тыныш белгилери.",
        url: "/class/class9/6/6",
        page: 136,
      },
      {
        id: "class9-6-7",
        title:
          "Байламталуу тенбайланыштагы татал сүйлөм жана анын түгөйлөрүнүн маанилик катыштары.",
        url: "/class/class9/6/7",
        page: 139,
      },
      {
        id: "class9-6-8",
        title:
          "Байламталуу тең байланыштагы татаал сүйлөмдөрдө коюлуучу тыныш белгилери.",
        url: "/class/class9/6/8",
        page: 143,
      },
      {
        id: "class9-6-9",
        title: "Багыныңкы байланыштагы татал сүйлөм.",
        url: "/class/class9/6/9",
        page: 150,
      },
      {
        id: "class9-6-10",
        title:
          "Чакчыл түрмөк менен багыныңкы сүйлөмдөрдүн жалпылыктары жана айырмачылыктары.",
        url: "/class/class9/6/10",
        page: 154,
      },
      {
        id: "class9-6-11",
        title: "Баш жана багыныңкы сүйлөмдөрдүн байланышуу жолдору",
        url: "/class/class9/6/11",
        page: 158,
      },
      {
        id: "class9-6-12",
        title: "Багыныңкы сүйлөмдүн баш сүйлөмгө карата алган орду.",
        url: "/class/class9/6/12",
        page: 162,
      },
      {
        id: "class9-6-13",
        title:
          "Багыныңкы байланыштагы татаал сүйлөмдөрдө коюлуучу тыныш белгилери.",
        url: "/class/class9/6/13",
        page: 164,
      },
      {
        id: "class9-6-14",
        title: "Багыныңкы сүйлөмдөрдүн түрлөрү",
        url: "/class/class9/6/14",
        page: 166,
      },
      {
        id: "class9-6-15",
        title: "Мезгил багыныңкы сүйлөм.",
        url: "/class/class9/6/15",
        page: 169,
      },
      {
        id: "class9-6-16",
        title: "Шарттуу багыныңкы сүйлөм.",
        url: "/class/class9/6/16",
        page: 172,
      },
      {
        id: "class9-6-17",
        title: "Карама-каршы багыныңкы сүйлөм.",
        url: "/class/class9/6/17",
        page: 176,
      },
      {
        id: "class9-6-18",
        title: "Себеп багыныңкы сүйлөм.",
        url: "/class/class9/6/18",
        page: 178,
      },
      {
        id: "class9-6-19",
        title: "Максат багыныңкы сүйлөм",
        url: "/class/class9/6/19",
        page: 182,
      },
      {
        id: "class9-6-20",
        title: "Салыштырма багыныңкы сүйлөм",
        url: "/class/class9/6/20",
        page: 184,
      },
      {
        id: "class9-6-21",
        title: "Сыпат багыныңкы сүйлөм ",
        url: "/class/class9/6/21",
        page: 187,
      },
      {
        id: "class9-6-22",
        title: "Орун багыныңкы сүйлөм ",
        url: "/class/class9/6/22",
        page: 189,
      },
      {
        id: "class9-6-23",
        title: "Өлчөм багыныңкы сүйлөм",
        url: "/class/class9/6/23",
        page: 191,
      },
      {
        id: "class9-6-24",
        title: "Көп багыныңкы татаал сүйлөм ",
        url: "/class/class9/6/24",
        page: 192,
      },
      {
        id: "class9-6-25",
        title: "Аралаш татаал сүйлөм. ",
        url: "/class/class9/6/25",
        page: 197,
      },
      {
        id: "class9-6-26",
        title: "Төл жана бөтөн сөз",
        url: "/class/class9/6/26",
        page: 205,
      },
      {
        id: "class9-6-27",
        title: "Тике жана кыйыр сөз",
        url: "/class/class9/6/27",
        page: 206,
      },
      {
        id: "class9-6-28",
        title: "Цитата",
        url: "/class/class9/6/28",
        page: 210,
      },
      {
        id: "class9-6-29",
        title: "Диалог",
        url: "/class/class9/6/29",
        page: 212,
      },
      {
        id: "class9-6-30",
        title: "Тике сөз менен төл сөздөрдө коюлуучу тыныш белгилери",
        url: "/class/class9/6/30",
        page: 215,
      },
      {
        id: "class9-6-31",
        title: "Тыныш белгилерин коюунун принциптери",
        url: "/class/class9/6/31",
        page: 226,
      },
      {
        id: "class9-6-32",
        title: "Тыныш белгилери жана аларды коюунун эрежелери",
        url: "/class/class9/6/32",
        page: 228,
      },
      {
        id: "class9-6-33",
        title:
          "Жыл боюнча өтүлгөндөрдү кайталоо.  Сүйлөмгө мүчө боло албаган сөздөр",
        url: "/class/class9/6/33",
        page: 253,
      },
    ],
  },
  {
    parent: "class10-1",
    children: [
      {
        id: "class10-1-1",
        title:
          "Кептин стилдери боюнча билимдерин системалаштыруу жана жалпылаштыруу",
        url: "/class/class10/1/1",
        page: 8,
      },
      {
        id: "class10-1-2",
        title: "Көркөм стилдин кептин түрлөрү менен карым-катнашы ",
        url: "/class/class10/1/2",
        page: 9,
      },
      {
        id: "class10-1-3",
        title: "Расмий иш кагаздары",
        url: "/class/class10/1/3",
        page: 17,
      },
      {
        id: "class10-1-4",
        title: "Илимий стилдеги практикалык иштер",
        url: "/class/class10/1/4",
        page: 20,
      },
      {
        id: "class10-1-5",
        title: "Публицистикалык стилдеги практикалык иштер",
        url: "/class/class10/1/5",
        page: 31,
      },
      {
        id: "class10-1-6",
        title:
          "Кептин ой жүгүртүү түрүндө дилбаян жазууга үйрөнүү жана машыгуу ",
        url: "/class/class10/1/6",
        page: 40,
      },
    ],
  },
  {
    parent: "class10-2",
    children: [
      {
        id: "class10-2-1",
        title: "Фонема жөнүндө түшүнүк",
        url: "/class/class10/2/1",
        page: 42,
      },
      {
        id: "class10-2-2",
        title: "Үнсүз тыбыштардын жасалуу ордуна карай бөлүнүшү",
        url: "/class/class10/2/2",
        page: 42,
      },
      {
        id: "class10-2-3",
        title: "Үнсүз тыбыштарды жасалуу ыгына карай бөлүнүшү",
        url: "/class/class10/2/3",
        page: 45,
      },
      {
        id: "class10-2-4",
        title: "Үндөштүк (сингармонизм) мыйзамы",
        url: "/class/class10/2/4",
        page: 48,
      },
      {
        id: "class10-2-5",
        title: "Үндөштүк мыйзамынын түрлөрү",
        url: "/class/class10/2/5",
        page: 51,
      },
      {
        id: "class10-2-6",
        title:
          "Үндүүлөрдүн эрин күүсуүноө карап, үндөшүп өзгөрүүсү (окшошуусу)",
        url: "/class/class10/2/6",
        page: 53,
      },
      {
        id: "class10-2-7",
        title: "Бир сөз ичинде үндүүлөрдүн алга карай ээрчип үндөшүүлөрү",
        url: "/class/class10/2/7",
        page: 55,
      },
      {
        id: "class10-2-8",
        title:
          "Эки сөздүн аралыгында үндүүлөрдүн түшүрүлүп айтылышы, алардын жазылышы",
        url: "/class/class10/2/8",
        page: 57,
      },
      {
        id: "class10-2-9",
        title: "Бир сөз ичинде үнсүздөрдүн алга карай окшошуп өзгөрүүсү",
        url: "/class/class10/2/9",
        page: 58,
      },
      {
        id: "class10-2-10",
        title:
          "Бир сөз ичинде үнсүздөрдүн (Н, 3, Ч) артка карай өзгөрүлүп айтылышы жана жазылышы",
        url: "/class/class10/2/10",
        page: 64,
      },
      {
        id: "class10-2-11",
        title:
          "К, П тыбыштарынын бир сөз ичинде үндүүлөрдүн таасири менен г, б тыбыштарына өтүшү",
        url: "/class/class10/2/11",
        page: 69,
      },
      {
        id: "class10-2-12",
        title:
          "Эки сөз аралыгындагы үнсүз тыбыштардын алга же артка окшошуп өзгөрүүсү жана алардын жазылышы.",
        url: "/class/class10/2/12",
        page: 70,
      },
      {
        id: "class10-2-13",
        title:
          "Эки сөз аралыгындагы унс  үнсүз тыбыштардын алга карай зэрчишип (окшошуп) өзгөрүүсү",
        url: "/class/class10/2/13",
        page: 72,
      },
      {
        id: "class10-2-14",
        title:
          "Эки сөз аралыгындагы үнсүз тыбыштардын артка карай ээрчишип (окшошуп) өзгөрүүсү (ээрчишүүсү)",
        url: "/class/class10/2/14",
        page: 74,
      },
    ],
  },
  {
    parent: "class10-3",
    children: [
      {
        id: "class10-3-1",
        title: "Кыргыз орфографиясынын негизги принциптери",
        url: "/class/class10/3/1",
        page: 80,
      },
      {
        id: "class10-3-2",
        title: "Кыргыз орфографиясынын жалпы эрежелер системасы",
        url: "/class/class10/3/2",
        page: 81,
      },
      {
        id: "class10-3-3",
        title: "Орфоэпияныи негизги эрежелери",
        url: "/class/class10/3/3",
        page: 84,
      },
      {
        id: "class10-3-4",
        title: "Орфоэпиялык жана орфографиялык талдоо",
        url: "/class/class10/3/4",
        page: 86,
      },
    ],
  },
  {
    parent: "class10-4",
    children: [
      {
        id: "class10-4-1",
        title: "Сөздүн көп маанилүүлүгү (полисемия)",
        url: "/class/class10/4/1",
        page: 94,
      },
      {
        id: "class10-4-2",
        title: "Омонимдер жана алардын түрлөрү",
        url: "/class/class10/4/2",
        page: 99,
      },
      {
        id: "class10-4-3",
        title: "Синоним, анын түрлөрү,пайда болуу жолдору",
        url: "/class/class10/4/3",
        page: 106,
      },
      {
        id: "class10-4-4",
        title: "Антоним, анын түрлөрү жана пайда болуу жолдору",
        url: "/class/class10/4/4",
        page: 113,
      },
      {
        id: "class10-4-5",
        title: "Кыргыз лексикасындагы активдүү жана пассивдүү сөз катмарлары",
        url: "/class/class10/4/5",
        page: 118,
      },
      {
        id: "class10-4-6",
        title: "Неологизмдер",
        url: "/class/class10/4/6",
        page: 123,
      },
      {
        id: "class10-4-7",
        title:
          " Кыргыз адабий тили жана алардын жергиликтүү диалектилер менен карым-катышы",
        url: "/class/class10/4/7",
        page: 125,
      },
      {
        id: "class10-4-8",
        title: "Кыргыз ономастикасы жана анын колдонулушу.",
        url: "/class/class10/4/8",
        page: 128,
      },
    ],
  },
  {
    parent: "class10-5",
    children: [
      {
        id: "class10-5-1",
        title: "Этиштин татаал формалар",
        url: "/class/class10/5/1",
        page: 134,
      },
      {
        id: "class10-5-2",
        title: "Жардамчы этиштердин түрлөрү",
        url: "/class/class10/5/2",
        page: 139,
      },
      {
        id: "class10-5-3",
        title: "Этиштин татаал формаларынын жасалышы",
        url: "/class/class10/5/3",
        page: 142,
      },
      {
        id: "class10-5-4",
        title: "Этиштик татаал формалардын түрлөрү",
        url: "/class/class10/5/4",
        page: 147,
      },
      {
        id: "class10-5-5",
        title:
          " Кыймыл-аракеттин узакка созулушун билдирүүчү этиштик татаал формалар.",
        url: "/class/class10/5/5",
        page: 148,
      },
      {
        id: "class10-5-6",
        title:
          "Кыймыл-аракеттин тездик менен капыстан болуп өткөндүгүн билдирүүчү этиштик татаал формалар ",
        url: "/class/class10/5/6",
        page: 148,
      },
      {
        id: "class10-5-7",
        title:
          "Кыймыл-аракеттин аз жерден ишке ашпай калгандыгын билдирүүчү этиштик татаал формалар",
        url: "/class/class10/5/7",
        page: 149,
      },
      {
        id: "class10-5-8",
        title:
          "Кыймыл-аракеттин максатка багытталган билдирүүчү этиштик татаал формалар",
        url: "/class/class10/5/8",
        page: 149,
      },
      {
        id: "class10-5-9",
        title:
          "Кыймыл-аракеттин ишке ашууга даяр экендигин билдирүүчү этиштик татаал формалар ",
        url: "/class/class10/5/9",
        page: 150,
      },
      {
        id: "class10-5-10",
        title:
          "Кыймыл-аракеттин жасалма мүнөздө экендигин билдирүүчү этиштик татаал формалар ",
        url: "/class/class10/5/10",
        page: 150,
      },
      {
        id: "class10-5-11",
        title:
          "Кыймыл-аракеттин бүткөнүн, толук ишке ашканын билдирүүчү этиштик татаал формалар",
        url: "/class/class10/5/11",
        page: 150,
      },
      {
        id: "class10-5-12",
        title:
          "Этиштердин айкашуусу аркылуу жасалган татаал формалар жана алардын түрлөрү",
        url: "/class/class10/5/12",
        page: 159,
      },
      {
        id: "class10-5-13",
        title:
          "Кыймыл-аракеттин башталышын, өнүгүүсүн жана аякталышын билдирүүчү этиштик татаал формалар, алардын жасалышы",
        url: "/class/class10/5/13",
        page: 162,
      },
      {
        id: "class10-5-14",
        title:
          "Атооч сөздөр менен этиштердин айкашуусу аркылуу жасалган этиштик татаал формалар",
        url: "/class/class10/5/14",
        page: 165,
      },
      {
        id: "class10-5-15",
        title:
          "Этиш менен экен, эле, бейм, бекен деген сыяктуу жардамчы сөздөр аркылуу жасалган этиштик татаал формалар",
        url: "/class/class10/5/15",
        page: 169,
      },
      {
        id: "class10-5-16",
        title: "Этиштин өзгөчө формалары ",
        url: "/class/class10/5/16",
        page: 175,
      },
    ],
  },
  {
    parent: "class10-6",
    children: [
      {
        id: "class10-6-1",
        title:
          "Баш мүчөлөрдүн (ээ менен баяндоочтун) ортосуна сызыкчанын коюлушу",
        url: "/class/class10/6/1",
        page: 182,
      },
      {
        id: "class10-6-2",
        title:
          "Сүйлөмдүн баш мүчөлөрүнүн зэрчишүүсү:толук ээрчишүү, толук эмес ээрчишүү",
        url: "/class/class10/6/2",
        page: 185,
      },
      {
        id: "class10-6-3",
        title: "Ээге карата баяндоочтун сан жагынан ээрчибеген учурлары",
        url: "/class/class10/6/3",
        page: 188,
      },
      {
        id: "class10-6-4",
        title:
          "Тең жана багыныңкы татаал сүйлөмдөрдүн грамматикалык түзүлүштөрү боюнча айырмачылыктары",
        url: "/class/class10/6/4",
        page: 194,
      },
      {
        id: "class10-6-5",
        title:
          "Татаал сүйлөмдүн тутумундагы жөнөкөй сүйлөмдүн арасына коюлуучу тыныш белгилер",
        url: "/class/class10/6/5",
        page: 198,
      },
      {
        id: "class10-6-6",
        title:
          "Тике сөздүн түрлөрү: цитата, диалог. Аларда коюлуучу тыныш белгилер ",
        url: "/class/class10/6/6",
        page: 201,
      },
    ],
  },
  {
    parent: "class10-7",
    children: [
      {
        id: "class10-7-1",
        title:
          "Үндүү тыбыштардын бир сөз ичинде жана эки сөз аралыгында тыбыштардын өз ара таасири аркылуу алга карай ээрчип айтылышы жана жазылышын бышыктоо үчүн көнүгүү иштери",
        url: "/class/class10/7/1",
        page: 209,
      },
      {
        id: "class10-7-2",
        title:
          "Үнсүз тыбыштардын бир сөз ичинде жана эки сөз аралыгында тыбыштардын өз ара таасири аркылуу алга же артка карай ээрчип айтылышын, жазылышын бышыктоо жана ага көнүгүү иштери ",
        url: "/class/class10/7/2",
        page: 213,
      },
      {
        id: "class10-7-3",
        title:
          "Өтмө маанилүү сөздөрдүн түрлөрү (метафора, метонимия, синекдоха)",
        url: "/class/class10/7/3",
        page: 216,
      },
      {
        id: "class10-7-4",
        title:
          "Этиштин татаал формаларынын жасалышы, этиштердин өз ара айкашуусу ",
        url: "/class/class10/7/4",
        page: 217,
      },
    ],
  },
  {
    parent: "class11-1",
    children: [
      {
        id: "class11-1-1",
        title:
          "Үндүү жана үнсүз тыбыштардын бир сөз ичинде алга, артка карай зэрчип үндөшүүсү жана өзгөрүүсү",
        url: "/class/class11/1/1",
        page: 9,
      },
      {
        id: "class11-1-2",
        title:
          "Сөздөрдүн көп маанилүүлүгүн жана анын пайда болуу жолдорун бышыктоо үчүн суроолор",
        url: "/class/class11/1/2",
        page: 11,
      },
      {
        id: "class11-1-3",
        title: "Цитата жана диалог боюнча жалпы суроолор",
        url: "/class/class11/1/3",
        page: 12,
      },
    ],
  },
  {
    parent: "class11-2",
    children: [
      {
        id: "class11-2-1",
        title:
          "V- X класстарда байланыштуу кеп боюнча өтүлгөн материалдарды системалаштыруу жана жалпылаштыруу",
        url: "/class/class11/2/1",
        page: 14,
      },
      {
        id: "class11-2-2",
        title: "Кептин стилдери",
        url: "/class/class11/2/2",
        page: 30,
      },
      {
        id: "class11-2-3",
        title:
          "Расмий иш кагаздары боюнча билимдерин системалаштыруу жана жалпылаштыруу.",
        url: "/class/class11/2/3",
        page: 32,
      },
      {
        id: "class11-2-4",
        title: "Публицистикалык стиль",
        url: "/class/class11/2/4",
        page: 38,
      },
      {
        id: "class11-2-5",
        title: "Публицистикалык стилдеги практикалык иштер.",
        url: "/class/class11/2/5",
        page: 42,
      },
      {
        id: "class11-2-6",
        title: "Илимий стилдеги практикалык иштер",
        url: "/class/class11/2/6",
        page: 50,
      },
      {
        id: "class11-2-7",
        title:
          "Кептин түрлөрү жана стилдери боюнча билимдерди системалаштыруу жана жалпылаштыруу",
        url: "/class/class11/2/7",
        page: 62,
      },
    ],
  },
  {
    parent: "class11-3",
    children: [
      {
        id: "class11-3-1",
        title: "Орхон-Енисей (Энесай) жазуулары.",
        url: "/class/class11/3/1",
        page: 68,
      },
      {
        id: "class11-3-2",
        title: "Араб алфавити.",
        url: "/class/class11/3/2",
        page: 70,
      },
      {
        id: "class11-3-3",
        title: "Латын алфавити.",
        url: "/class/class11/3/3",
        page: 72,
      },
      {
        id: "class11-3-4",
        title: "Орус жазуусу",
        url: "/class/class11/3/4",
        page: 75,
      },
    ],
  },
  {
    parent: "class11-4",
    children: [
      {
        id: "class11-4-1",
        title: "Фразеология жөнүндө жалпы маалымат",
        url: "/class/class11/4/1",
        page: 80,
      },
      {
        id: "class11-4-2",
        title: "Фразеологизмдердин мүнөздүү белгилери.",
        url: "/class/class11/4/2",
        page: 82,
      },
      {
        id: "class11-4-3",
        title: "Фразеологиялык ширешме",
        url: "/class/class11/4/3",
        page: 91,
      },
      {
        id: "class11-4-4",
        title: "Фразеологиялык бирдик",
        url: "/class/class11/4/4",
        page: 93,
      },
      {
        id: "class11-4-5",
        title: "Фразеологиялык айкаштар",
        url: "/class/class11/4/5",
        page: 95,
      },
      {
        id: "class11-4-6",
        title: "Фразеологизмдер менен макал, лакаптардын карым-катышы",
        url: "/class/class11/4/6",
        page: 95,
      },
      {
        id: "class11-4-7",
        title:
          "Фразеологизмдердин кептин көркөм стилине мүнөздүүлүгү. Фразеологизмдердин кепте колдонулушу",
        url: "/class/class11/4/7",
        page: 101,
      },
    ],
  },
  {
    parent: "class11-5",
    children: [
      {
        id: "class11-5-1",
        title: "Фразеологизмдердин кепте егеруусуз колдонулушу",
        url: "/class/class11/5/1",
        page: 102,
      },
      {
        id: "class11-5-2",
        title: "Фразеологизмдердин кепте өзгөртүлүп колдонулушу",
        url: "/class/class11/5/2",
        page: 103,
      },
      {
        id: "class11-5-3",
        title: "Фразеологизмдердин жарыш колдонулушу",
        url: "/class/class11/5/3",
        page: 104,
      },
      {
        id: "class11-5-4",
        title:
          "Фразеологизмдердин жеке сөз менен синонимдик катышты түзүшү, алардын кошумча маанилериндеги өзгөчөлүктөр",
        url: "/class/class11/5/4",
        page: 106,
      },
    ],
  },
  {
    parent: "class11-6",
    children: [
      {
        id: "class11-6-1",
        title:
          "Кыргыз тилинин лексикасынын байышынын негизги багыттары, жолдору (булактары)",
        url: "/class/class11/6/1",
        page: 111,
      },
      {
        id: "class11-6-2",
        title: "Морфологиялык (аффиксация) жол аркылуу байышы.",
        url: "/class/class11/6/2",
        page: 112,
      },
      {
        id: "class11-6-3",
        title: "Синтаксистик жол аркылуу байышы",
        url: "/class/class11/6/3",
        page: 114,
      },
      {
        id: "class11-6-4",
        title: "Семантикалык жол аркылуу байышы",
        url: "/class/class11/6/4",
        page: 115,
      },
      {
        id: "class11-6-5",
        title:
          "Башка тилдерден сөзмө-сөз которуу жолу менен байышы же калькалоо",
        url: "/class/class11/6/5",
        page: 117,
      },
      {
        id: "class11-6-6",
        title: "Диалектилик байлыктардан туура пайдалануу аркылуу байышы",
        url: "/class/class11/6/6",
        page: 120,
      },
      {
        id: "class11-6-7",
        title: "Кыргыз тилинин лексикасынын байышынын тышкы булактары",
        url: "/class/class11/6/7",
        page: 122,
      },
      {
        id: "class11-6-8",
        title:
          "Орус тилинен кирген жана орус тили аркылуу кабыл алынган сөздөр",
        url: "/class/class11/6/8",
        page: 123,
      },
      {
        id: "class11-6-9",
        title: "Октябрь революциясына чейин орус тилинен кабыл алынган сөздөр",
        url: "/class/class11/6/9",
        page: 126,
      },
      {
        id: "class11-6-10",
        title: "Советтик доордо, орус тилинен кабыл алынган сөздөр",
        url: "/class/class11/6/10",
        page: 129,
      },
      {
        id: "class11-6-11",
        title: "Араб тилинен кабыл алынган сөздөр",
        url: "/class/class11/6/11",
        page: 131,
      },
      {
        id: "class11-6-12",
        title: "Иран-фарсы тилинен кабыл алынган сөздөр",
        url: "/class/class11/6/12",
        page: 135,
      },
      {
        id: "class11-6-13",
        title: "Монгол тилинен кабыл алынган сөздөр",
        url: "/class/class11/6/13",
        page: 138,
      },
      {
        id: "class11-6-14",
        title: "Кыргыз лексикасынын баюу жолдору боюнча талдоолор",
        url: "/class/class11/6/14",
        page: 140,
      },
      {
        id: "class11-6-15",
        title: "Кеп маданияты",
        url: "/class/class11/6/15",
        page: 146,
      },
    ],
  },
  {
    parent: "class11-7",
    children: [
      {
        id: "class11-7-1",
        title: "Стилистика, анын милдети жана изилдөө объектиси.",
        url: "/class/class11/7/1",
        page: 151,
      },
      {
        id: "class11-7-2",
        title:
          "Кыргыз адабий тилинин өнүгүү этаптарында пайда болгон стилдер жөнүндө жалпы маалымат",
        url: "/class/class11/7/2",
        page: 153,
      },
    ],
  },
  {
    parent: "class11-8",
    children: [
      {
        id: "class11-8-1",
        title:
          "Азыркы кыргыз тили - кыргыз элинин мамлекеттик жана улуттук тили",
        url: "/class/class11/8/1",
        page: 156,
      },
      {
        id: "class11-8-2",
        title:
          "Кыргыз тилиндеги стилдердин пайда болушундагы тышкы факторлордун ролу",
        url: "/class/class11/8/2",
        page: 157,
      },
      {
        id: "class11-8-3",
        title: "Фонетика, орфография жана кеп маданияты боюнча",
        url: "/class/class11/8/3",
        page: 159,
      },
      {
        id: "class11-8-4",
        title:
          "Кыргыз орфографиясынын принциптери жана эрежелери боюнча өтүлгөндөрдү кайталоо.",
        url: "/class/class11/8/4",
        page: 160,
      },
      {
        id: "class11-8-5",
        title: "Лексика, фразеология боюнча",
        url: "/class/class11/8/5",
        page: 163,
      },
      {
        id: "class11-8-6",
        title:
          "Фразеологизмдердин түрлөрү (өз ара бөлүнүштөрү), алардын бири-биринен айырмалары",
        url: "/class/class11/8/6",
        page: 164,
      },
      {
        id: "class11-8-7",
        title:
          "Фразеологизмдердин кептин оозеки сүйлөшүү жана көркөм стилге мүнөздүүдүгү",
        url: "/class/class11/8/7",
        page: 166,
      },
      {
        id: "class11-8-8",
        title:
          "Текст түзүүдө, оозеки пикир алышууда фразеологизмдерди стилдик максаттарга ылайык колдоно билүү",
        url: "/class/class11/8/8",
        page: 168,
      },
      {
        id: "class11-8-9",
        title: "Кепте фразеологизмдерди орундуу пайдалануу.",
        url: "/class/class11/8/9",
        page: 171,
      },
      {
        id: "class11-8-10",
        title:
          "Кыймыл-аракеттин кандайча өтүшүн сыпаттап көрсөтүүчү татаал формалар, алардын жасалышы",
        url: "/class/class11/8/10",
        page: 174,
      },
      {
        id: "class11-8-11",
        title:
          " Кыймыл-аракеттин узакка созулушун, анын тездик менен капыстан болуп өткөндүгүн, ошондой эле жасалма мүнөздө экендигин жана толук ишке ашкандыгын билдирүүчү этиштик татаал формалар",
        url: "/class/class11/8/11",
        page: 179,
      },
      {
        id: "class11-8-12",
        title:
          "Морфологиялык категориялар жана синтаксистик материалдар боюнча көнүгүү, машыгуу иштерин жүргүзүү менен талдоого үйрөнүү",
        url: "/class/class11/8/12",
        page: 185,
      },
    ],
  },
];

// ==============================|| SLICE - MENU ||============================== //

const subChapters = createSlice({
  name: "subChapters",
  initialState,
  reducers: {},
});

export default subChapters.reducer;
