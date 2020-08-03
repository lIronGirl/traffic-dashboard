import Mock from 'mockjs';
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

const Random = Mock.Random;

/* const jing_jin_ji = ['北京', '天津', '保定', '唐山', '廊坊', '石家庄', '秦皇岛', '张家口', '承德', '沧州', '衡水', '邢台', '邯郸', '定州', '辛集', '安阳']
const jing_jin_jiGeoCoordMap = {
    '北京': [116.403963, 39.915119],
    '天津': [117.221314, 39.001884],
    '保定': [115.47817, 38.872563],
    '唐山': [118.191771, 39.630695],
    '廊坊': [116.692392, 39.538161],
    '石家庄': [114.530709, 38.040742],
    '秦皇岛': [119.608363, 39.935879],
    '张家口': [114.894056, 40.769837],
    '承德': [117.975603, 40.951423],
    '沧州': [116.848769, 38.305802],
    '衡水': [115.68054, 37.741846],
    '邢台': [114.512312, 37.074079],
    '邯郸': [114.549107, 36.626811],
    '定州': [114.987875, 38.536202],
    '辛集': [115.217841, 37.944911],
    '安阳': [115.217841, 37.944911]
}; */
const tripModeRatio = [{
    name: '飞机出行',
    value: Random.integer(2000, 10000)
}, {
    name: '高铁出行', value: Random.integer(3000, 15000)
}];
Mock.mock('/api/tripmoderatio', 'get', tripModeRatio)

const tripViaAirRankList = [
    [
        {
            name: '北京'
        },
        {
            name: "石家庄",
            index: 40,
            time: 300
        }
    ],
    [
        {
            name: "北京"
        },
        {
            name: "廊坊",
            index: 38,
            time: 58
        }
    ],
    [
        {
            name: "廊坊"
        },
        {
            name: "北京",
            index: 36,
            time: 50
        }
    ],
    [
        {
            name: "北京"
        },
        {
            name: "天津",
            index: 30,
            time: 120
        }
    ],
    [
        {
            name: "北京"
        },
        {
            name: "唐山",
            index: 28,
            time: 240
        }
    ],
    [
        {
            name: "石家庄"
        },
        {
            name: "北京",
            index: 27,
            time: 360
        }
    ],
    [
        {
            name: "石家庄"
        },
        {
            name: "天津",
            index: 25,
            time: 120
        }
    ],
    [
        {
            name: "天津"
        },
        {
            name: "北京",
            index: 25,
            time: 120
        }
    ],
    [
        {
            name: "石家庄"
        },
        {
            name: "唐山",
            index: 23,
            time: 260
        }
    ],
    [
        {
            name: "北京"
        },
        {
            name: "唐山",
            index: 10,
            time: 300
        }
    ]
]
Mock.mock('/api/tripviaairranklist', 'get', tripViaAirRankList)
Mock.mock('/api/tripviarailranklist', 'get', tripViaAirRankList)


/* Random.extend({
    railStation: function () {
        var railStations = ['北京站', '北京西站', '北京南站', '天津站', '天津西站', '石家庄站', '唐山站']
        return this.pick(railStations)
    }
}) */
const index = [8.8, 7.5, 7.4, 5.2, 5.0, 3.8, 1.9];
const railStations = ['北京站', '北京西站', '北京南站', '天津站', '天津西站', '石家庄站', '唐山站'];
const airStations = ['首都机场', '正定机场', '北京南苑机场', '山海关机场', '三女河机场', '邯郸机场', '天津机场'];
const highway = ['京平高速', '京哈高速', '京开高速', '京港澳高速', '京承高速', '京藏高速', '通燕高速'];
const scenicspot = ['天安门', '颐和园', '八达岭长城', '香山公园', '天津之眼', '承德避暑山庄', '奥林匹克公园'];
const stationGeoCoordMap = {
    '北京站': { coords: [116.432296, 39.908958], city: '北京' },
    '北京西站': { coords: [116.328811, 39.901873], city: '北京' },
    '北京南站': { coords: [116.387452, 39.870426], city: '北京' },
    '天津站': { coords: [117.216853, 39.142488], city: '天津' },
    '天津西站': { coords: [117.16998, 39.164265], city: '天津' },
    '石家庄站': { coords: [114.490825, 38.016821], city: '石家庄' },
    '唐山站': { coords: [118.124977, 39.631246], city: '唐山' },
    '首都机场': { coords: [116.609564, 40.083812], city: '北京' },
    '正定机场': { coords: [114.703893, 38.287385], city: '石家庄' },
    '北京南苑机场': { coords: [116.409387, 39.799315], city: '北京' },
    '山海关机场': { coords: [119.736468, 39.982802], city: '秦皇岛' },
    '三女河机场': { coords: [118.01368, 39.725946], city: '唐山' },
    '邯郸机场': { coords: [114.437921, 36.531179], city: '邯郸' },
    '天津机场': { coords: [117.367442, 39.137739], city: '天津' },
    '京平高速': { coords: [117.188932, 40.137582], city: '北京' },
    '京哈高速': { coords: [116.841791, 39.809108], city: '北京' },
    '京开高速': { coords: [116.335798, 39.697022], city: '北京' },
    '京港澳高速': { coords: [116.119431, 39.736555], city: '北京' },
    '京承高速': { coords: [117.127904, 40.410083], city: '北京' },
    '京藏高速': { coords: [115.989628, 40.367651], city: '北京' },
    '通燕高速': { coords: [116.790127, 39.947024], city: '北京' },
    '天安门': { coords: [116.403963, 39.915119], city: '北京' },
    '颐和园': { coords: [116.278749, 40.004869], city: '北京' },
    '八达岭长城': { coords: [116.024067, 40.362639], city: '北京' },
    '香山公园': { coords: [116.195044, 39.996194], city: '北京' },
    '天津之眼': { coords: [117.193047, 39.159697], city: '北京' },
    '承德避暑山庄': { coords: [117.941207, 41.001475], city: '承德' },
    '奥林匹克公园': { coords: [116.399206, 39.999245], city: '北京' }
}
Mock.mock('/api/stationtrafficranklist', 'get', option => {
    let stationType = JSON.parse(option.body).stationType;
    let stationData = [];
    for (let i = 0; i < 7; i++) {
        stationData.push({
            'station|+1': stationType === 'rail' ? railStations : stationType === 'air' ? airStations : stationType === 'highway' ? highway : scenicspot,
            'index|+1': index,
            'speed|5-30.2-2': 1,
            'jamLength': function () {
                return Math.ceil(this.index) * 3;
            },
            'weak2weak': function () {
                let num = Math.ceil(Math.random() * 10);
                return (num % 2 === 1 ? '' : '-') + num;
            },
            'coords': function () {
                return stationGeoCoordMap[this.station];
            }
        })
    }
    return Mock.mock(stationData)
});

Mock.mock('/api/traveltimestatics', 'get', () => {
    let res = [];
    for (let t = 0; t < 24; t++) {
        res.push({
            'time': t,
            'outTravel|1-8': 1,
            'inTravel|2-10': 2
        })
    }
    return Mock.mock(res);
});

Mock.mock('/api/traveldistancestatics', 'get', () => {
    let res = [];
    for (let t = 0; t < 24; t++) {
        res.push({
            'time': t,
            'outTravel|100-500': 100,
            'inTravel|100-600': 100
        })
    }
    return Mock.mock(res);
});

Mock.mock('/api/individuallist', 'get', () => {
    let res = [];
    for (let t = 0; t < 24; t++) {
        res.push({
            'id|+1': 1,
            'name': Random.cname()
        })
    }
    return Mock.mock(res);
});
Mock.mock('/api/individualrank', 'get', (option) => {
    let res = [];
    if (JSON.parse(option.body).name) {
        /* res.push({
            name: JSON.parse(option.body).name,
            'duration|2-20': 2,
            'src|1': jing_jin_ji,
            'dest|1': jing_jin_ji,
            srcCoords: function () {
                return jing_jin_jiGeoCoordMap[this.src]
            },
            destCoords: function () {
                return jing_jin_jiGeoCoordMap[this.dest]
            }
        }) */
        res.push({
            name: JSON.parse(option.body).name,
            'duration|2-20': 2,
            points: [{
                name: '天津站',
                coords: [117.216853, 39.142488],
                'by|1-3': 1
            }, {
                name: '大兴机场',
                coords: [116.42396, 39.511576],
                'by|1-3': 1
            }, {
                name: '北京南',
                coords: [116.385488, 39.87128]
            }]
        })
    } else {
        for (let t = 0; t < 10; t++) {
            /* res.push({
                'name': Random.cname(),
                'duration|2-20': 2,
                'src|1': jing_jin_ji,
                'dest|1': jing_jin_ji,
                srcCoords: function () {
                    return jing_jin_jiGeoCoordMap[this.src]
                },
                destCoords: function () {
                    return jing_jin_jiGeoCoordMap[this.dest]
                }
            }) */
            res.push({
                'name': Random.cname(),
                'duration|2-20': 2,
                points: [{
                    name: '天津站',
                    coords: [117.216853, 39.142488],
                    'by|1-3': 1
                }, {
                    name: '大兴机场',
                    coords: [116.42396, 39.511576],
                    'by|1-3': 1
                }, {
                    name: '北京南',
                    coords: [116.385488, 39.87128]
                }]
            })
        }
    }

    return Mock.mock(res);
});

Mock.mock('/api/connectingtriprank', 'get', () => {
    let res = [];
    // by为交通方式1:飞机，2:轨道，3:汽车，终点不需要有此字段
    res = [{
        points: [{
            name: '北京南',
            coords: [116.385488, 39.87128]
        }, {
            name: '大兴机场',
            coords: [116.42396, 39.511576]
        }, {
            name: '天津站',
            coords: [117.216853, 39.142488]
        }, {
            name: '滨海机场',
            coords: [117.371645, 39.133514]
        }],
        travelVol: 3300
    }, {
        points: [{
            name: '天津站',
            coords: [117.216853, 39.142488]
        }, {
            name: '北京南',
            coords: [116.385488, 39.87128]
        }],
        travelVol: 3120
    }, {
        points: [{
            name: '北京南',
            coords: [116.385488, 39.87128]
        }, {
            name: '大兴机场',
            coords: [116.42396, 39.511576]
        }, {
            name: '天津站',
            coords: [117.216853, 39.142488]
        }],
        travelVol: 2799
    }];

    return Mock.mock(res);
});

// 城市交通预测{time: 时间, index: 指数, type: 类型 1代表历史 2代表预测}
Mock.mock('/api/weekprediction', 'get', (/* option */) => {
    // let cityID = JSON.parse(option.body).cityID;    // 获取city ID
    let res = [];
    // 临时用随机生成数据，后期根据城市赋值对应城市的数据 res = [{time: ‘2020-07-18T01:50:32’, index: 2, type: 1}]
    for (let i = 0; i < 14; i++) {
        res.push({
            time: function () {
                return moment().add(i - 7, 'days');
            },
            'index|2-10': 2,
            type: function () {
                return i < 8 ? 1 : 2
            }
        })
    }

    return Mock.mock(res);
});

Mock.mock('/api/hubtrafficprediction', 'get', (option) => {
    let hubType = JSON.parse(option.body).hubType;
    let res = [];
    for (let i = 0; i < 10; i++) {
        res.push({
            'hubName|1': hubType === 'rail' ? railStations : hubType === 'air' ? airStations : hubType === 'highway' ? highway : scenicspot,
            'bearingCapacity|10000-30000': 10000,
            'psgvolNext1h|10000-30000': 10000,
            'psgvolNext1d|10000-30000': 10000,
            'predAcc|1-10': 1
        })
    }

    return Mock.mock(res);
});

// 交通需求预测-拥堵趋势预测柱状图数据
// type 1~4 代表 ["严重拥堵", "拥堵", "缓行", "通畅"]
Mock.mock('/api/jamtrendprediction', 'get', () => {
    // let hubType = JSON.parse(option.body).hubType;
    let res = [];
    for (let i = 0; i < 8; i++) {
        res.push({
            time: function () {
                return moment().add(i - 1, 'days');
            },
            'index|1-10': 1,
            'type|1-4': 1
        })
    }
    return Mock.mock(res);
});
// 交通需求预测-明日24小时拥堵趋势预测曲线图数据
Mock.mock('/api/jamnextdaytrendprediction', 'get', () => {
    let res = [];
    for (let i = 0; i < 12; i++) {
        res.push({
            time: (i * 2 < 10 ? ('0' + i * 2) : i * 2) + ':00',
            'index|0-10': 0
        })
    }
    return Mock.mock(res);
});

// 主页-城市群出行量 type 1:全国Top5城市，2:京津冀城市群
Mock.mock('/api/cityclustersindex', 'get', (option) => {
    let type = +JSON.parse(option.body).type;
    let res = [];
    /* city: "Shanghai",
        stationCount: 15,
            population: 2000,
                avgDailyTraffic: 100 */
    if (type === 1) {
        res = [
            {
                city: "Shanghai",
                stationCount: 15,
                population: 2000,
                avgDailyTraffic: 100
            },
            {
                city: "Beijing",
                stationCount: 14,
                population: 2300,
                avgDailyTraffic: 150
            },
            {
                city: "Shanghai",
                stationCount: 15,
                population: 2000,
                avgDailyTraffic: 100
            },
            {
                city: "Beijing",
                stationCount: 14,
                population: 2300,
                avgDailyTraffic: 150
            },
            {
                city: "Chongqing",
                stationCount: 14,
                population: 2300,
                avgDailyTraffic: 150
            }
        ];
    } else {
        res = [
            {
                city: "Bengjing",
                stationCount: 15,
                population: 2000,
                avgDailyTraffic: 100
            },
            {
                city: "Tianjin",
                stationCount: 14,
                population: 2300,
                avgDailyTraffic: 150
            },
            {
                city: "Langfang",
                stationCount: 10,
                population: 1000,
                avgDailyTraffic: 90
            },
            {
                city: "Shijianzhuang",
                stationCount: 17,
                population: 1500,
                avgDailyTraffic: 150
            }, {
                city: "Bengjing",
                stationCount: 15,
                population: 2000,
                avgDailyTraffic: 100
            },
            {
                city: "Tianjin",
                stationCount: 14,
                population: 2300,
                avgDailyTraffic: 150
            },
            {
                city: "Langfang",
                stationCount: 10,
                population: 1000,
                avgDailyTraffic: 90
            },
            {
                city: "Shijianzhuang",
                stationCount: 17,
                population: 1500,
                avgDailyTraffic: 150
            }, {
                city: "Bengjing",
                stationCount: 15,
                population: 2000,
                avgDailyTraffic: 100
            },
            {
                city: "Tianjin",
                stationCount: 14,
                population: 2300,
                avgDailyTraffic: 150
            },
            {
                city: "Langfang",
                stationCount: 10,
                population: 1000,
                avgDailyTraffic: 90
            },
            {
                city: "Shijianzhuang",
                stationCount: 17,
                population: 1500,
                avgDailyTraffic: 150
            }
        ];
    }
    return Mock.mock(res);
});

//  sortBy occur:发生量，attr：吸引量，rail：高铁出行量，air：飞机出行量
Mock.mock('/api/citytrafficrank', 'get', (/* option */) => {
    // let sortBy = JSON.parse(option.body).sortBy;
    let res = [];
    for (let i = 0; i < 20; i++) {
        res.push({
            name: Random.city(),
            'occur|10000-100000': 10000,
            'attr|10000-100000': 10000,
            'rail|1000-100000': 1000,
            'air|1000-100000': 1000
        });
    }
    return Mock.mock(res);
});

// 主页-地图-发生量
Mock.mock('/api/occurrencequantity', 'get', () => {
    // 如果城市在 /src/assets/geoCoordMap.js 文件中没有对应的坐标，需要在文件中补充
    let res = [
        { name: "海门", value: 9 },
        { name: "鄂尔多斯", value: 12 },
        { name: "招远", value: 12 },
        { name: "舟山", value: 12 },
        { name: "齐齐哈尔", value: 14 },
        { name: "盐城", value: 15 },
        { name: "赤峰", value: 16 },
        { name: "青岛", value: 18 },
        { name: "乳山", value: 18 },
        { name: "金昌", value: 19 },
        { name: "泉州", value: 21 },
        { name: "莱西", value: 21 },
        { name: "日照", value: 21 },
        { name: "胶南", value: 22 },
        { name: "南通", value: 23 },
        { name: "拉萨", value: 24 },
        { name: "云浮", value: 24 },
        { name: "梅州", value: 25 },
        { name: "文登", value: 25 },
        { name: "上海", value: 25 },
        { name: "攀枝花", value: 25 },
        { name: "威海", value: 25 },
        { name: "承德", value: 25 },
        { name: "厦门", value: 26 },
        { name: "汕尾", value: 26 },
        { name: "潮州", value: 26 },
        { name: "丹东", value: 27 },
        { name: "太仓", value: 27 },
        { name: "曲靖", value: 27 },
        { name: "烟台", value: 28 },
        { name: "福州", value: 29 },
        { name: "瓦房店", value: 30 },
        { name: "即墨", value: 30 },
        { name: "抚顺", value: 31 },
        { name: "玉溪", value: 31 },
        { name: "张家口", value: 31 },
        { name: "阳泉", value: 31 },
        { name: "莱州", value: 32 },
        { name: "湖州", value: 32 },
        { name: "汕头", value: 32 },
        { name: "昆山", value: 33 },
        { name: "宁波", value: 33 },
        { name: "湛江", value: 33 },
        { name: "揭阳", value: 34 },
        { name: "荣成", value: 34 },
        { name: "连云港", value: 35 },
        { name: "葫芦岛", value: 35 },
        { name: "常熟", value: 36 },
        { name: "东莞", value: 36 },
        { name: "河源", value: 36 },
        { name: "淮安", value: 36 },
        { name: "泰州", value: 36 },
        { name: "南宁", value: 37 },
        { name: "营口", value: 37 },
        { name: "惠州", value: 37 },
        { name: "江阴", value: 37 },
        { name: "蓬莱", value: 37 },
        { name: "韶关", value: 38 },
        { name: "嘉峪关", value: 38 },
        { name: "广州", value: 38 },
        { name: "延安", value: 38 },
        { name: "太原", value: 39 },
        { name: "清远", value: 39 },
        { name: "中山", value: 39 },
        { name: "昆明", value: 39 },
        { name: "寿光", value: 40 },
        { name: "盘锦", value: 40 },
        { name: "长治", value: 41 },
        { name: "深圳", value: 41 },
        { name: "珠海", value: 42 },
        { name: "宿迁", value: 43 },
        { name: "咸阳", value: 43 },
        { name: "铜川", value: 44 },
        { name: "平度", value: 44 },
        { name: "佛山", value: 44 },
        { name: "海口", value: 44 },
        { name: "江门", value: 45 },
        { name: "章丘", value: 45 },
        { name: "肇庆", value: 46 },
        { name: "大连", value: 47 },
        { name: "临汾", value: 47 },
        { name: "吴江", value: 47 },
        { name: "石嘴山", value: 49 },
        { name: "沈阳", value: 50 },
        { name: "苏州", value: 50 },
        { name: "茂名", value: 50 },
        { name: "嘉兴", value: 51 },
        { name: "长春", value: 51 },
        { name: "胶州", value: 52 },
        { name: "银川", value: 52 },
        { name: "张家港", value: 52 },
        { name: "三门峡", value: 53 },
        { name: "锦州", value: 54 },
        { name: "南昌", value: 54 },
        { name: "柳州", value: 54 },
        { name: "三亚", value: 54 },
        { name: "自贡", value: 56 },
        { name: "吉林", value: 56 },
        { name: "阳江", value: 57 },
        { name: "泸州", value: 57 },
        { name: "西宁", value: 57 },
        { name: "宜宾", value: 58 },
        { name: "呼和浩特", value: 58 },
        { name: "成都", value: 58 },
        { name: "大同", value: 58 },
        { name: "镇江", value: 59 },
        { name: "桂林", value: 59 },
        { name: "张家界", value: 59 },
        { name: "宜兴", value: 59 },
        { name: "北海", value: 60 },
        { name: "西安", value: 61 },
        { name: "金坛", value: 62 },
        { name: "东营", value: 62 },
        { name: "牡丹江", value: 63 },
        { name: "遵义", value: 63 },
        { name: "绍兴", value: 63 },
        { name: "扬州", value: 64 },
        { name: "常州", value: 64 },
        { name: "潍坊", value: 65 },
        { name: "重庆", value: 66 },
        { name: "台州", value: 67 },
        { name: "南京", value: 67 },
        { name: "滨州", value: 70 },
        { name: "贵阳", value: 71 },
        { name: "无锡", value: 71 },
        { name: "本溪", value: 71 },
        { name: "克拉玛依", value: 72 },
        { name: "渭南", value: 72 },
        { name: "马鞍山", value: 72 },
        { name: "宝鸡", value: 72 },
        { name: "焦作", value: 75 },
        { name: "句容", value: 75 },
        { name: "北京", value: 79 },
        { name: "徐州", value: 79 },
        { name: "衡水", value: 80 },
        { name: "包头", value: 80 },
        { name: "绵阳", value: 80 },
        { name: "乌鲁木齐", value: 84 },
        { name: "枣庄", value: 84 },
        { name: "杭州", value: 84 },
        { name: "淄博", value: 85 },
        { name: "鞍山", value: 86 },
        { name: "溧阳", value: 86 },
        { name: "库尔勒", value: 86 },
        { name: "安阳", value: 90 },
        { name: "开封", value: 90 },
        { name: "济南", value: 92 },
        { name: "德阳", value: 93 },
        { name: "温州", value: 95 },
        { name: "九江", value: 96 },
        { name: "邯郸", value: 98 },
        { name: "临安", value: 99 },
        { name: "兰州", value: 99 },
        { name: "沧州", value: 100 },
        { name: "临沂", value: 103 },
        { name: "南充", value: 104 },
        { name: "天津", value: 105 },
        { name: "富阳", value: 106 },
        { name: "泰安", value: 112 },
        { name: "诸暨", value: 112 },
        { name: "郑州", value: 113 },
        { name: "哈尔滨", value: 114 },
        { name: "聊城", value: 116 },
        { name: "芜湖", value: 117 },
        { name: "唐山", value: 119 },
        { name: "平顶山", value: 119 },
        { name: "邢台", value: 119 },
        { name: "德州", value: 120 },
        { name: "济宁", value: 120 },
        { name: "荆州", value: 127 },
        { name: "宜昌", value: 130 },
        { name: "义乌", value: 132 },
        { name: "丽水", value: 133 },
        { name: "洛阳", value: 134 },
        { name: "秦皇岛", value: 136 },
        { name: "株洲", value: 143 },
        { name: "石家庄", value: 147 },
        { name: "莱芜", value: 148 },
        { name: "常德", value: 152 },
        { name: "保定", value: 153 },
        { name: "湘潭", value: 154 },
        { name: "金华", value: 157 },
        { name: "岳阳", value: 169 },
        { name: "长沙", value: 175 },
        { name: "衢州", value: 177 },
        { name: "廊坊", value: 193 },
        { name: "菏泽", value: 194 },
        { name: "合肥", value: 229 },
        { name: "武汉", value: 273 },
        { name: "大庆", value: 279 }
    ];
    return Mock.mock(res);
});
// 主页-地图-吸引量
Mock.mock('/api/attractionquantity', 'get', () => {
    // 如果城市在 /src/assets/geoCoordMap.js 文件中没有对应的坐标，需要在文件中补充
    let res = [
        { name: "海门", value: 9 },
        { name: "鄂尔多斯", value: 12 },
        { name: "招远", value: 12 },
        { name: "舟山", value: 12 },
        { name: "齐齐哈尔", value: 14 },
        { name: "盐城", value: 15 },
        { name: "赤峰", value: 16 },
        { name: "青岛", value: 180 },
        { name: "乳山", value: 18 },
        { name: "金昌", value: 19 },
        { name: "泉州", value: 21 },
        { name: "莱西", value: 21 },
        { name: "日照", value: 21 },
        { name: "胶南", value: 22 },
        { name: "南通", value: 23 },
        { name: "拉萨", value: 24 },
        { name: "云浮", value: 24 },
        { name: "梅州", value: 25 },
        { name: "文登", value: 25 },
        { name: "上海", value: 25 },
        { name: "攀枝花", value: 25 },
        { name: "威海", value: 25 },
        { name: "承德", value: 25 },
        { name: "厦门", value: 26 },
        { name: "汕尾", value: 26 },
        { name: "潮州", value: 26 },
        { name: "丹东", value: 27 },
        { name: "太仓", value: 27 },
        { name: "曲靖", value: 27 },
        { name: "烟台", value: 28 },
        { name: "福州", value: 29 },
        { name: "瓦房店", value: 30 },
        { name: "即墨", value: 30 },
        { name: "抚顺", value: 31 },
        { name: "玉溪", value: 31 },
        { name: "张家口", value: 31 },
        { name: "阳泉", value: 31 },
        { name: "莱州", value: 32 },
        { name: "湖州", value: 32 },
        { name: "汕头", value: 32 },
        { name: "昆山", value: 33 },
        { name: "宁波", value: 33 },
        { name: "湛江", value: 33 },
        { name: "揭阳", value: 34 },
        { name: "荣成", value: 34 },
        { name: "连云港", value: 35 },
        { name: "葫芦岛", value: 35 },
        { name: "常熟", value: 36 },
        { name: "东莞", value: 36 },
        { name: "河源", value: 36 },
        { name: "淮安", value: 36 },
        { name: "泰州", value: 36 },
        { name: "南宁", value: 37 },
        { name: "营口", value: 37 },
        { name: "惠州", value: 37 },
        { name: "江阴", value: 37 },
        { name: "蓬莱", value: 37 },
        { name: "韶关", value: 38 },
        { name: "嘉峪关", value: 38 },
        { name: "广州", value: 38 },
        { name: "延安", value: 38 },
        { name: "太原", value: 39 },
        { name: "清远", value: 39 },
        { name: "中山", value: 39 },
        { name: "昆明", value: 39 },
        { name: "石嘴山", value: 49 },
        { name: "沈阳", value: 50 },
        { name: "苏州", value: 50 },
        { name: "茂名", value: 50 },
        { name: "嘉兴", value: 51 },
        { name: "长春", value: 51 },
        { name: "胶州", value: 52 },
        { name: "银川", value: 52 },
        { name: "张家港", value: 52 },
        { name: "三门峡", value: 53 },
        { name: "锦州", value: 54 },
        { name: "南昌", value: 54 },
        { name: "柳州", value: 54 },
        { name: "三亚", value: 300 },
        { name: "自贡", value: 56 },
        { name: "吉林", value: 56 },
        { name: "阳江", value: 57 },
        { name: "泸州", value: 57 },
        { name: "西宁", value: 57 },
        { name: "宜宾", value: 58 },
        { name: "呼和浩特", value: 58 },
        { name: "成都", value: 58 },
        { name: "大同", value: 58 },
        { name: "镇江", value: 59 },
        { name: "桂林", value: 59 },
        { name: "张家界", value: 59 },
        { name: "宜兴", value: 59 },
        { name: "北海", value: 60 },
        { name: "西安", value: 61 },
        { name: "金坛", value: 62 },
        { name: "东营", value: 62 },
        { name: "牡丹江", value: 63 },
        { name: "遵义", value: 63 },
        { name: "绍兴", value: 63 },
        { name: "扬州", value: 64 },
        { name: "常州", value: 64 },
        { name: "潍坊", value: 65 },
        { name: "重庆", value: 66 },
        { name: "台州", value: 67 },
        { name: "南京", value: 67 },
        { name: "滨州", value: 70 },
        { name: "贵阳", value: 71 },
        { name: "无锡", value: 71 },
        { name: "本溪", value: 71 },
        { name: "克拉玛依", value: 72 },
        { name: "渭南", value: 72 },
        { name: "马鞍山", value: 72 },
        { name: "宝鸡", value: 72 },
        { name: "焦作", value: 75 },
        { name: "句容", value: 75 },
        { name: "北京", value: 79 },
        { name: "徐州", value: 79 },
        { name: "衡水", value: 80 },
        { name: "包头", value: 80 },
        { name: "绵阳", value: 80 },
        { name: "乌鲁木齐", value: 84 },
        { name: "枣庄", value: 84 },
        { name: "南充", value: 104 },
        { name: "天津", value: 105 },
        { name: "富阳", value: 106 },
        { name: "泰安", value: 112 },
        { name: "诸暨", value: 112 },
        { name: "郑州", value: 113 },
        { name: "哈尔滨", value: 114 },
        { name: "聊城", value: 116 },
        { name: "芜湖", value: 117 },
        { name: "唐山", value: 119 },
        { name: "平顶山", value: 119 },
        { name: "邢台", value: 119 },
        { name: "德州", value: 120 },
        { name: "济宁", value: 120 },
        { name: "荆州", value: 127 },
        { name: "宜昌", value: 130 },
        { name: "义乌", value: 132 },
        { name: "丽水", value: 133 },
        { name: "洛阳", value: 134 },
        { name: "秦皇岛", value: 136 },
        { name: "株洲", value: 143 },
        { name: "石家庄", value: 147 },
        { name: "莱芜", value: 148 },
        { name: "常德", value: 152 },
        { name: "保定", value: 153 },
        { name: "湘潭", value: 154 },
        { name: "金华", value: 157 },
        { name: "岳阳", value: 169 },
        { name: "长沙", value: 175 },
        { name: "衢州", value: 177 },
        { name: "廊坊", value: 193 },
        { name: "菏泽", value: 194 },
        { name: "合肥", value: 229 },
        { name: "武汉", value: 23 },
        { name: "大庆", value: 98 }
    ];
    return Mock.mock(res);
});
// 主页-地图-高铁出行量
Mock.mock('/api/railquantity', 'get', () => {
    // 如果城市在 /src/assets/geoCoordMap.js 文件中没有对应的坐标，需要在文件中补充
    let res = [
        [
            {
                name: "北京"
            },
            {
                name: "上海",
                value: 95
            }
        ],
        [
            {
                name: "北京"
            },
            {
                name: "广州",
                value: 90
            }
        ],
        [
            {
                name: "北京"
            },
            {
                name: "大连",
                value: 80
            }
        ],
        [
            {
                name: "上海"
            },
            {
                name: "南宁",
                value: 70
            }
        ],
        [
            {
                name: "上海"
            },
            {
                name: "南昌",
                value: 60
            }
        ],
        [
            {
                name: "广州"
            },
            {
                name: "拉萨",
                value: 50
            }
        ],
        [
            {
                name: "广州"
            },
            {
                name: "长春",
                value: 40
            }
        ],
        [
            {
                name: "北京"
            },
            {
                name: "包头",
                value: 30
            }
        ],
        [
            {
                name: "北京"
            },
            {
                name: "重庆",
                value: 20
            }
        ],
        [
            {
                name: "北京"
            },
            {
                name: "常州",
                value: 10
            }
        ]
    ];
    return Mock.mock(res);
});
// 主页-地图-飞机出行量
Mock.mock('/api/airquantity', 'get', () => {
    // 如果城市在 /src/assets/geoCoordMap.js 文件中没有对应的坐标，需要在文件中补充
    let res = [
        [
            {
                name: "上海"
            },
            {
                name: "包头",
                value: 95
            }
        ],
        [
            {
                name: "广州"
            },
            {
                name: "昆明",
                value: 90
            }
        ],
        [
            {
                name: "上海"
            },
            {
                name: "广州",
                value: 80
            }
        ],
        [
            {
                name: "广州"
            },
            {
                name: "郑州",
                value: 70
            }
        ],
        [
            {
                name: "北京"
            },
            {
                name: "长春",
                value: 60
            }
        ],
        [
            {
                name: "北京"
            },
            {
                name: "重庆",
                value: 50
            }
        ],
        [
            {
                name: "上海"
            },
            {
                name: "长沙",
                value: 40
            }
        ],
        [
            {
                name: "上海"
            },
            {
                name: "北京",
                value: 30
            }
        ],
        [
            {
                name: "石家庄"
            },
            {
                name: "丹东",
                value: 20
            }
        ],
        [
            {
                name: "石家庄"
            },
            {
                name: "大连",
                value: 10
            }
        ]
    ];
    return Mock.mock(res);
});

// 京津冀场站交通情况-表格数据
Mock.mock('/api/stationtraffic', 'get', (option) => {
    let hubType = JSON.parse(option.body).hubType;
    let res = [];
    for (let i = 0; i < 10; i++) {
        res.push({
            'hubName|1': hubType === 'rail' ? railStations : hubType === 'air' ? airStations : hubType === 'highway' ? highway : scenicspot,
            'bearingCapacity|10000-30000': 10000,
            'passengerVolume|10000-30000': 10000,
            'relievingEfficiency|10000-30000': 10000,
            'city': function () {
                return stationGeoCoordMap[this.hubName].city;
            },
            'coords': function () {
                return stationGeoCoordMap[this.hubName].coords;
            }
        })
    }

    return Mock.mock(res);
});

export default Mock;