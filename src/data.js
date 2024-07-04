

const DISTRICT_WTS = { id: 1, name: "Wong Tai Sin", color: "yellow.300" };
const DISTRICT_KLB = { id: 2, name: "Kowloon Bay", color: "yellow.300" };
const DISTRICT_TKO = { id: 3, name: "Tseung Kwan O", color: "green.300" };
const DISTRICT_WC = { id: 4, name: "Wan Chai", color: "blue.300" };
const DISTRICT_YTW = { id: 5, name: "Yau Tsim Wong", color: "yellow.300" };
const DISTRICT_KLT = { id: 6, name: "Kowloon Tong", color: "yellow.300" };
const DISTRICT_KT = { id: 7, name: "Kwun Tong", color: "yellow.300" };
const DISTRICT_SSP = { id: 8, name: "Shum Shui Po", color: "yellow.300" };
const DISTRICT_JP_OKINAWA = { id: 90, name: "Okinawa", color: "purple.300" }
const DISTRICT_JP_OSAKA = { id: 91, name: "Osaka", color: "purple.300" }
export const DISTRICT = [
    DISTRICT_WTS,
    DISTRICT_KLB,
    DISTRICT_TKO,
    DISTRICT_WC,
    DISTRICT_YTW,
    DISTRICT_KLT,
    DISTRICT_KT,
    DISTRICT_SSP,
    DISTRICT_JP_OKINAWA,
    DISTRICT_JP_OSAKA,
];
const TRIED_YES = { id: 1, name: "Yes", color: "green.300" };
const TRIED_NO = { id: 2, name: "No", color: "red.300" };
export const TRIED = [
    TRIED_YES,
    TRIED_NO,
]
const DATA = [
  
    {
        name: "琉球之牛",
        district: DISTRICT_JP_OKINAWA,
        score: 5,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "もとぶ牧場",
        district: DISTRICT_JP_OKINAWA,
        score: 5,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "暖暮拉麵",
        district: DISTRICT_JP_OKINAWA,
        score: 3,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "しらさ食堂",
        district: DISTRICT_JP_OKINAWA,
        score: 4,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "Blue Entrance Kitchen",
        district: DISTRICT_JP_OKINAWA,
        score: 5,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "Steakhouse 88",
        district: DISTRICT_JP_OKINAWA,
        score: 3,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "Agu shabu shabu 神まえ",
        district: DISTRICT_JP_OKINAWA,
        score: 3.5,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "Zhyvago Coffee Works",
        district: DISTRICT_JP_OKINAWA,
        score: 4,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "Taco Rice Cafe Kijimuna",
        district: DISTRICT_JP_OKINAWA,
        score: 4,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "A Happy Pancake",
        district: DISTRICT_JP_OKINAWA,
        score: 5,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "Pique Cafe",
        district: DISTRICT_JP_OKINAWA,
        score: 4,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "Flooding Burger Chimfugas",
        district: DISTRICT_JP_OKINAWA,
        score: 4,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "Okinawa Soba and Cafe Yagiya",
        district: DISTRICT_JP_OKINAWA,
        score: 3,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "挽肉と米",
        district: DISTRICT_WC,
        score: 2,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "すき家",
        district: DISTRICT_WTS,
        score: 4,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "斗滾",
        district: DISTRICT_YTW,
        score: 4,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "得閒飲茶",
        district: DISTRICT_YTW,
        score: 4,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "稻庭養助",
        district: DISTRICT_YTW,
        score: 0,
        notes: "un ken",
        tried: TRIED_NO,
    },
    {
        name: "湘肴世家",
        district: DISTRICT_YTW,
        score: 4.5,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "雄興美食",
        district: DISTRICT_WTS,
        score: 4,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "仝人飯堂",
        district: DISTRICT_KLT,
        score: 3.5,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "麥奀",
        district: DISTRICT_YTW,
        score: 4,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "Hygge",
        district: DISTRICT_TKO,
        score: 4.5,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "泰Grill",
        district: DISTRICT_TKO,
        score: 4,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "蟹道樂",
        district: DISTRICT_JP_OSAKA,
        score: 5,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "一蘭拉麵",
        district: DISTRICT_JP_OSAKA,
        score: 3,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "神座拉麵",
        district: DISTRICT_JP_OSAKA,
        score: 4,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "つるとんたん 宗右衛門町店",
        district: DISTRICT_JP_OSAKA,
        score: 5,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "北極星蛋包飯",
        district: DISTRICT_JP_OSAKA,
        score: 4,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "鳥貴族",
        district: DISTRICT_JP_OSAKA,
        score: 4,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "沖繩二段料理",
        district: DISTRICT_WTS,
        score: 4,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "金飯館",
        district: DISTRICT_YTW,
        score: 0,
        notes: "大島",
        tried: TRIED_NO,
    },
    {
        name: "哈豆",
        district: DISTRICT_KT,
        score: 3,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "城大中菜",
        district: DISTRICT_KLT,
        score: 4,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "聚寶堂",
        district: DISTRICT_KT,
        score: 4,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "第五街冰室",
        district: DISTRICT_WTS,
        score: 4,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "囍運冰室",
        district: DISTRICT_WTS,
        score: 3,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "岡山一番店",
        district: DISTRICT_WTS,
        score: 3,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "茜廊",
        district: DISTRICT_WTS,
        score: 3.5,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "聯合興",
        district: DISTRICT_WTS,
        score: 3.5,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "御滿屋",
        district: DISTRICT_YTW,
        score: 3.5,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "Royal Pantry",
        district: DISTRICT_KLB,
        score: 3,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "阿里山珍珠奶茶·便當",
        district: DISTRICT_KLB,
        score: 3.5,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "九龍海逸君綽酒店自助餐",
        district: DISTRICT_YTW,
        score: 3.5,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "帝苑酒店自助餐",
        district: DISTRICT_YTW,
        score: 4,
        notes: "",
        tried: TRIED_YES,
    },
    {
        name: "C2 Lab",
        district: DISTRICT_SSP,
        score: 5,
        notes: "",
        tried: TRIED_YES,
    },
    
    
    

  
];

export {DATA} ;
