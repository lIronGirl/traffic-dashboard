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
    '滨海国际机场': { coords: [117.371645, 39.133514], city: '天津' },
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
    for (let t = 0; t < 10; t++) {
        res.push({
            'id|+1': 1,
            // 'name': ['任秀兰', '吴娟', '郑丽', '李丽', '谭军', '杜秀英', '郑明', '葛华', '关子龙', '莫有'][t]
            name: t + 1
        })
    }
    return Mock.mock(res);
});
Mock.mock('/api/individualrank', 'get', (option) => {
    // by 1: 飞机，2:轨道，3:汽车
    let tmp = [{
        'name': '任秀兰',
        points: [{
            name: '北京南站',
            coords: [116.387452, 39.870426],
            'by': 2
        }, {
            name: '天津站',
            coords: [117.216853, 39.142488],
            'by': 3
        }, {
            name: '滨海国际机场',
            coords: [117.371645, 39.133514]
        }]
    }, {
        'name': '吴娟',
        points: [{
            name: '北京西站',
            coords: [116.328103, 39.900835],
            'by': 2
        }, {
            name: '天津站',
            coords: [117.216853, 39.142488]
        }]
    }, {
        'name': '郑丽',
        points: [{
            name: '北京南站',
            coords: [116.387452, 39.870426],
            'by': 2
        }, {
            name: '天津站',
            coords: [117.216853, 39.142488]
        }]
    }, {
        'name': '李丽',
        points: [{
            name: '北京南站',
            coords: [116.387452, 39.870426],
            'by': 3
        }, {
            name: '首都国际机场',
            coords: [116.609564, 40.083812]
        }]
    }, {
        'name': '谭军',
        points: [{
            name: '滨海国际机场',
            coords: [117.371645, 39.133514],
            'by': 3
        }, {
            name: '天津站',
            coords: [117.216853, 39.142488],
            'by': 2
        }, {
            name: '北京南站',
            coords: [116.387452, 39.870426],
            'by': 3
        }, {
            name: '首都国际机场',
            coords: [116.609564, 40.083812]
        }]
    }, {
        'name': '杜秀英',
        points: [{
            name: '北京西站',
            coords: [116.328103, 39.900835],
            'by': 2
        }, {
            name: '石家庄站',
            coords: [114.490825, 38.016821]
        }]
    }, {
        'name': '郑明',
        points: [{
            name: '天津站',
            coords: [117.216853, 39.142488],
            'by': 2
        }, {
            name: '唐山站',
            coords: [118.124977, 39.631246]
        }]
    }, {
        'name': '葛华',
        points: [{
            name: '天津站',
            coords: [117.216853, 39.142488],
            'by': 2
        }, {
            name: '石家庄站',
            coords: [114.490825, 38.016821]
        }]
    }, {
        'name': '关子龙',
        points: [{
            name: '北京南站',
            coords: [116.387452, 39.870426],
            'by': 3
        }, {
            name: '大兴国际机场',
            coords: [116.42396, 39.511576]
        }]
    }, {
        'name': '莫有',
        points: [{
            name: '天津站',
            coords: [117.216853, 39.142488],
            'by': 3
        }, {
            name: '滨海国际机场',
            coords: [117.371645, 39.133514],
            'by': 1
        }, {
            name: '首都国际机场',
            coords: [116.609564, 40.083812]
        }]
    }];
    let res = [];
    if (JSON.parse(option.body).name) {
        /* res = tmp.filter(function (data) {
            if (data.name === JSON.parse(option.body).name) {
                return data;
            }
        }); */
        res = [tmp[+JSON.parse(option.body).name - 1]];
    } else {
        res = tmp;
    }

    return Mock.mock(res);
});

Mock.mock('/api/connectingtriprank', 'get', () => {
    let res = [];
    // by为交通方式1:飞机，2:轨道，3:汽车，终点不需要有此字段
    res = [{
        points: [{
            name: '北京西站',
            coords: [116.328811, 39.901873]
        }, {
            name: '天津站',
            coords: [117.216853, 39.142488]
        }],
        travelVol: 1365
    }, {
        points: [{
            name: '北京南站',
            coords: [116.385488, 39.87128]
        }, {
            name: '首都国际机场',
            coords: [116.609564, 40.083812]
        }],
        travelVol: 562
    }, {
        points: [{
            name: '北京南站',
            coords: [116.385488, 39.87128]
        }, {
            name: '天津站',
            coords: [117.216853, 39.142488]
        }],
        travelVol: 352
    }, {
        points: [{
            name: '北京西站',
            coords: [116.328811, 39.901873]
        }, {
            name: '石家庄站',
            coords: [114.490825, 38.016821]
        }],
        travelVol: 112
    }, {
        points: [{
            name: '北京南站',
            coords: [116.387452, 39.870426]
        }, {
            name: '天津站',
            coords: [117.216853, 39.142488]
        }, {
            name: '滨海国际机场',
            coords: [117.371645, 39.133514]
        }],
        travelVol: 105
    }, {
        points: [{
            name: '天津站',
            coords: [117.216853, 39.142488]
        }, {
            name: '滨海国际机场',
            coords: [117.371645, 39.133514]
        }, {
            name: '首都国际机场',
            coords: [116.609564, 40.083812]
        }],
        travelVol: 25
    }];

    return Mock.mock(res);
});

// 城市交通预测{time: 时间, index: 指数, type: 类型 1代表历史 2代表预测}
Mock.mock('/api/weekprediction', 'get', (option) => {
    let cityID = JSON.parse(option.body).cityID;    // 获取city ID
    let res = [];
    let tmp = {
        '1': [42.03, 59.37, 49.41, 56.42, 57.25, 42.89, 53.05, 55.36, 56.34, 55.54, 45.93, 53.86, 54.85, 46.87],
        '2': [56.32, 48.42, 40.89, 41.00, 41.10, 53.01, 49.99, 51.33, 41.33, 50.68, 53.69, 40.56, 48.22, 44.13],
        '3': [59.26, 50.92, 45.5, 58.43, 44.56, 42.46, 40.3, 52.37, 56.32, 53.75, 57.4, 55.03, 56.56, 42.44]
    }
    // 临时用随机生成数据，后期根据城市赋值对应城市的数据 res = [{time: ‘2020-07-18T01:50:32’, index: 2, type: 1}]
    for (let i = 0; i < 14; i++) {
        res.push({
            time: function () {
                return moment().add(i - 7, 'days');
            },
            index: tmp[cityID][i],
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
    let tmp = {
        rail: {
            hubName: ['北京西站', '北京南站', '石家庄站', '北京站', '天津站', '天津西站', '唐山站'],
            bearingCapacity: [60, 100, 40, 30, 50, 30, 30],
            psgvolNext1h: [2.02, 1.35, 0.93, 0.91, 0.88, 0.35, 0.22],
            psgvolNext1d: [24.25, 16.25, 11.24, 11.03, 10.56, 4.21, 2.69],
            predAcc: [73.20, 75.25, 66.12, 70.25, 81.35, 75.36, 86.25]
        },
        air: {
            hubName: ['首都国际机场', '滨海国际机场', '正定国际机场', '大兴国际机场', '山海关机场'],
            bearingCapacity: [50, 30, 20, 10, 5],
            psgvolNext1h: [2.12, 0.52, 0.25, 0.06, 0.01],
            psgvolNext1d: [26.38, 6.27, 3.18, 0.76, 0.07],
            predAcc: [82.36, 85.64, 88.45, 90.34, 87.64]
        }
    };

    let currTmp = tmp[hubType];
    if (currTmp) {
        for (let i = 0; i < currTmp.hubName.length; i++) {

            res.push({
                'hubName': currTmp.hubName[i],
                'bearingCapacity': currTmp.bearingCapacity[i],
                'psgvolNext1h': currTmp.psgvolNext1h[i],
                'psgvolNext1d': currTmp.psgvolNext1d[i],
                'predAcc': currTmp.predAcc[i]
            })
        }
    }

    return Mock.mock(res);
});

// 交通需求预测-拥堵趋势预测柱状图数据
// type 1~4 代表 ["严重拥堵", "拥堵", "缓行", "通畅"]
Mock.mock('/api/jamtrendprediction', 'get', (option) => {
    let hubName = JSON.parse(option.body).hubName;
    let tmp = {
        '北京西站': [1.38, 1.32, 1.33, 1.82, 2, 1.66, 1.43, 1.21, 1.27],
        '北京南站': [1.63, 1.94, 1.32, 1.29, 2.17, 1.22, 1.85, 2, 2.17],
        '首都国际机场': [1.55, 1.13, 1.52, 1.18, 1.34, 1.39, 1.46, 1.63, 1.06]
    }
    let res = [];
    for (let i = 0; i < 8; i++) {
        res.push({
            time: function () {
                return moment().add(i - 1, 'days');
            },
            'index': tmp[hubName][i],
            'type': function () {
                if (this.index > 1.8) {
                    return 1;
                } else if (this.index > 1.5) {
                    return 2;
                } else if (this.index > 1.2) {
                    return 3;
                } else {
                    return 4;
                }
            }
        })
    }
    return Mock.mock(res);
});
// 交通需求预测-明日24小时拥堵趋势预测曲线图数据
Mock.mock('/api/jamnextdaytrendprediction', 'get', (option) => {
    let hubName = JSON.parse(option.body).hubName;
    let tmp = {
        '北京西站': [0.22, 0.03, 0.32, 0.32, 0.04, 0.33, 0.57, 0.91, 1.17, 1.13, 1.23, 1.52, 1.23, 0.84, 1.22, 1.39, 1.4, 1.41, 1.62, 1.66, 1.01, 1.2, 1.55, 1.26, 0.8],
        '北京南站': [0.37, 0.34, 0.27, 0.39, 0.38, 0.03, 1.06, 0.65, 1.4, 1.35, 1.6, 1.11, 1.29, 1.07, 1.31, 1.23, 1.38, 1.2, 1.06, 1.67, 1.11, 1.52, 1.51, 1.56, 1.1],
        '首都国际机场': [0.05, 0.04, 0.05, 0.24, 0.35, 0.27, 1.16, 1.57, 1.11, 1.27, 1.24, 1.68, 1.51, 1.31, 0.87, 1.4, 0.99, 1.24, 1.27, 1.33, 1.05, 1.51, 1.3, 1.18, 1.18]
    }

    let res = [];
    for (let i = 0; i < 24; i++) {
        if (tmp[hubName]) {
            res.push({
                time: i + '时',
                'index': tmp[hubName][i]
            })
        } else {
            res.push({
                time: i + '时',
                'index|0-2': 0
            })
        }
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


// 城市群出行-表格数据
Mock.mock('/api/cityclustersdata', 'get', (option) => {
    let params = JSON.parse(option.body);
    // dataRange: that.currDate,
    //     tripMode: that.tripMode,
    //         rankType: that.rankType
    let tmp = {
        passenger: [
            { "city": "北京", "inVol": "937510", "inVolIncre": "0.34%", "outVol": "815765", "outVolIncre": "1.32%" },
            { "city": "廊坊", "inVol": "811056", "inVolIncre": "-0.19%", "outVol": "726883", "outVolIncre": "-1.41%" },
            { "city": "天津", "inVol": "756210", "inVolIncre": "1.78%", "outVol": "658352", "outVolIncre": "-1.47%" },
            { "city": "保定", "inVol": "580315", "inVolIncre": "2.91%", "outVol": "585095", "outVolIncre": "-1.94%" },
            { "city": "沧州", "inVol": "482257", "inVolIncre": "-2.23%", "outVol": "494015", "outVolIncre": "1.55%" },
            { "city": "唐山", "inVol": "433228", "inVolIncre": "-2.26%", "outVol": "456502", "outVolIncre": "-0.86%" },
            { "city": "石家庄", "inVol": "422702", "inVolIncre": "0.54%", "outVol": "407333", "outVolIncre": "0.38%" },
            { "city": "秦皇岛", "inVol": "372288", "inVolIncre": "-2.13%", "outVol": "382478", "outVolIncre": "0.66%" },
            { "city": "张家口", "inVol": "309132", "inVolIncre": "0.99%", "outVol": "352225", "outVolIncre": "-2.83%" },
            { "city": "邢台", "inVol": "290850", "inVolIncre": "2.18%", "outVol": "340238", "outVolIncre": "-0.06%" },
            { "city": "邯郸", "inVol": "281986", "inVolIncre": "2.33%", "outVol": "326703", "outVolIncre": "2.56%" },
            { "city": "承德", "inVol": "261488", "inVolIncre": "1.17%", "outVol": "323295", "outVolIncre": "2.59%" },
            { "city": "衡水", "inVol": "229633", "inVolIncre": "-0.11%", "outVol": "323294", "outVolIncre": "-0.49%" }
        ],
        air: [
            { "city": "北京", "inVol": "81576", "inVolIncre": "1.69%", "outVol": "81576", "outVolIncre": "-1.64%" },
            { "city": "天津", "inVol": "32186", "inVolIncre": "-0.17%", "outVol": "32329", "outVolIncre": "1.53%" },
            { "city": "廊坊", "inVol": "27654", "inVolIncre": "-0.68%", "outVol": "32329", "outVolIncre": "2.35%" },
            { "city": "保定", "inVol": "25432", "inVolIncre": "3.85%", "outVol": "25432", "outVolIncre": "-3.76%" },
            { "city": "沧州", "inVol": "24827", "inVolIncre": "3.81%", "outVol": "24827", "outVolIncre": "2.77%" },
            { "city": "唐山", "inVol": "23606", "inVolIncre": "-0.10%", "outVol": "23606", "outVolIncre": "1.54%" },
            { "city": "石家庄", "inVol": "21857", "inVolIncre": "-3.34%", "outVol": "21857", "outVolIncre": "-2.61%" },
            { "city": "秦皇岛", "inVol": "21131", "inVolIncre": "1.65%", "outVol": "21131", "outVolIncre": "-2.24%" },
            { "city": "张家口", "inVol": "20493", "inVolIncre": "-2.12%", "outVol": "20493", "outVolIncre": "-3.26%" },
            { "city": "邢台", "inVol": "20218", "inVolIncre": "-1.19%", "outVol": "20218", "outVolIncre": "-3.82%" },
            { "city": "承德", "inVol": "20218", "inVolIncre": "-3.09%", "outVol": "16907", "outVolIncre": "1.11%" },
            { "city": "邯郸", "inVol": "20196", "inVolIncre": "1.53%", "outVol": "20196", "outVolIncre": "1.26%" },
            { "city": "衡水", "inVol": "20196", "inVolIncre": "1.49%", "outVol": "16511", "outVolIncre": "2.08%" }
        ],
        rail: [
            { "city": "北京", "inVol": "427448", "inVolIncre": "2.54%", "outVol": "415296", "outVolIncre": "-1.20%" },
            { "city": "廊坊", "inVol": "399784", "inVolIncre": "3.94%", "outVol": "335160", "outVolIncre": "1.76%" },
            { "city": "天津", "inVol": "359072", "inVolIncre": "-0.07%", "outVol": "370048", "outVolIncre": "-2.23%" },
            { "city": "保定", "inVol": "289856", "inVolIncre": "-3.25%", "outVol": "297864", "outVolIncre": "-3.01%" },
            { "city": "沧州", "inVol": "280056", "inVolIncre": "1.01%", "outVol": "194712", "outVolIncre": "1.57%" },
            { "city": "唐山", "inVol": "242984", "inVolIncre": "2.55%", "outVol": "232400", "outVolIncre": "-0.03%" },
            { "city": "石家庄", "inVol": "231280", "inVolIncre": "-1.46%", "outVol": "164584", "outVolIncre": "-0.59%" },
            { "city": "秦皇岛", "inVol": "207032", "inVolIncre": "2.67%", "outVol": "179312", "outVolIncre": "0.02%" },
            { "city": "张家口", "inVol": "194880", "inVolIncre": "-2.23%", "outVol": "251496", "outVolIncre": "0.60%" },
            { "city": "邢台", "inVol": "191072", "inVolIncre": "2.11%", "outVol": "166320", "outVolIncre": "-3.22%" },
            { "city": "邯郸", "inVol": "187152", "inVolIncre": "0.65%", "outVol": "173208", "outVolIncre": "-3.08%" },
            { "city": "承德", "inVol": "185024", "inVolIncre": "3.56%", "outVol": "207368", "outVolIncre": "-1.78%" },
            { "city": "衡水", "inVol": "154784", "inVolIncre": "-0.20%", "outVol": "156576", "outVolIncre": "2.39%" }
        ],
        road: [
            { "city": "北京", "inVol": "673901", "inVolIncre": "1.93%", "outVol": "437911", "outVolIncre": "3.27%" },
            { "city": "廊坊", "inVol": "596965", "inVolIncre": "-3.75%", "outVol": "477098", "outVolIncre": "3.06%" },
            { "city": "天津", "inVol": "550782", "inVolIncre": "0.91%", "outVol": "442530", "outVolIncre": "2.00%" },
            { "city": "保定", "inVol": "545679", "inVolIncre": "-0.75%", "outVol": "669159", "outVolIncre": "-1.43%" },
            { "city": "沧州", "inVol": "537459", "inVolIncre": "1.27%", "outVol": "460857", "outVolIncre": "2.45%" },
            { "city": "唐山", "inVol": "524251", "inVolIncre": "2.53%", "outVol": "551747", "outVolIncre": "-3.14%" },
            { "city": "石家庄", "inVol": "441888", "inVolIncre": "0.64%", "outVol": "416604", "outVolIncre": "-1.90%" },
            { "city": "秦皇岛", "inVol": "429834", "inVolIncre": "-0.65%", "outVol": "385314", "outVolIncre": "0.39%" },
            { "city": "张家口", "inVol": "429371", "inVolIncre": "1.12%", "outVol": "437911", "outVolIncre": "-2.80%" },
            { "city": "邢台", "inVol": "406002", "inVolIncre": "-2.31%", "outVol": "374586", "outVolIncre": "1.98%" },
            { "city": "邯郸", "inVol": "392769", "inVolIncre": "3.89%", "outVol": "400959", "outVolIncre": "1.04%" },
            { "city": "承德", "inVol": "384400", "inVolIncre": "3.90%", "outVol": "319754", "outVolIncre": "-3.83%" },
            { "city": "衡水", "inVol": "380437", "inVolIncre": "-1.77%", "outVol": "435974", "outVolIncre": "2.00%" }
        ]
    }
    let res = [];
    res = tmp[params.tripMode];

    return Mock.mock(res);
});

// 城市群出行-联动表格citydata
Mock.mock('/api/citydata', 'get', (option) => {
    let params = JSON.parse(option.body);
    let tmp = {
        'in': {
            '北京': [
                { "city": "廊坊", "inVol": "235444", "inVolIncre": "2.89%" },
                { "city": "保定", "inVol": "88813", "inVolIncre": "2.26%" },
                { "city": "天津", "inVol": "81744", "inVolIncre": "-2.13%" },
                { "city": "张家口", "inVol": "47850", "inVolIncre": "0.96%" },
                { "city": "沧州", "inVol": "26520", "inVolIncre": "-0.85%" },
                { "city": "唐山", "inVol": "21840", "inVolIncre": "-2.25%" },
                { "city": "石家庄", "inVol": "11856", "inVolIncre": "0.95%" },
                { "city": "秦皇岛", "inVol": "10608", "inVolIncre": "-1.41%" },
                { "city": "邢台", "inVol": "4992", "inVolIncre": "-2.57%" },
                { "city": "承德", "inVol": "3432", "inVolIncre": "-0.43%" },
                { "city": "衡水", "inVol": "1716", "inVolIncre": "3.71%" },
                { "city": "邯郸", "inVol": "624", "inVolIncre": "3.66%" }
            ],
            '天津': [
                { "city": "廊坊", "inVol": "108025", "inVolIncre": "0.79%" },
                { "city": "北京", "inVol": "95632", "inVolIncre": "3.48%" },
                { "city": "唐山", "inVol": "83013", "inVolIncre": "-2.30%" },
                { "city": "沧州", "inVol": "71050", "inVolIncre": "-2.89%" },
                { "city": "石家庄", "inVol": "34068", "inVolIncre": "1.30%" },
                { "city": "秦皇岛", "inVol": "31008", "inVolIncre": "-2.69%" },
                { "city": "张家口", "inVol": "20400", "inVolIncre": "0.34%" },
                { "city": "保定", "inVol": "12648", "inVolIncre": "-0.58%" },
                { "city": "邢台", "inVol": "12444", "inVolIncre": "2.15%" },
                { "city": "邯郸", "inVol": "8568", "inVolIncre": "-2.44%" },
                { "city": "承德", "inVol": "5304", "inVolIncre": "-2.04%" },
                { "city": "衡水", "inVol": "5100", "inVolIncre": "-2.50%" }
            ]
        },
        out: {
            '北京': [
                { "city": "廊坊", "outVol": "235444", "outVolIncre": "2.89%" },
                { "city": "保定", "outVol": "88813", "outVolIncre": "2.26%" },
                { "city": "天津", "outVol": "81744", "outVolIncre": "-2.13%" },
                { "city": "张家口", "outVol": "47850", "outVolIncre": "0.96%" },
                { "city": "沧州", "outVol": "26520", "outVolIncre": "-0.85%" },
                { "city": "唐山", "outVol": "21840", "outVolIncre": "-2.25%" },
                { "city": "石家庄", "outVol": "11856", "outVolIncre": "0.95%" },
                { "city": "秦皇岛", "outVol": "10608", "outVolIncre": "-1.41%" },
                { "city": "邢台", "outVol": "4992", "outVolIncre": "-2.57%" },
                { "city": "承德", "outVol": "3432", "outVolIncre": "-0.43%" },
                { "city": "衡水", "outVol": "1716", "outVolIncre": "3.71%" },
                { "city": "邯郸", "outVol": "624", "outVolIncre": "3.66%" }
            ],
            '天津': [
                { "city": "廊坊", "outVol": "108025", "outVolIncre": "0.79%" },
                { "city": "北京", "outVol": "95632", "outVolIncre": "3.48%" },
                { "city": "唐山", "outVol": "83013", "outVolIncre": "-2.30%" },
                { "city": "沧州", "outVol": "71050", "outVolIncre": "-2.89%" },
                { "city": "石家庄", "outVol": "34068", "outVolIncre": "1.30%" },
                { "city": "秦皇岛", "outVol": "31008", "outVolIncre": "-2.69%" },
                { "city": "张家口", "outVol": "20400", "outVolIncre": "0.34%" },
                { "city": "保定", "outVol": "12648", "outVolIncre": "-0.58%" },
                { "city": "邢台", "outVol": "12444", "outVolIncre": "2.15%" },
                { "city": "邯郸", "outVol": "8568", "outVolIncre": "-2.44%" },
                { "city": "承德", "outVol": "5304", "outVolIncre": "-2.04%" },
                { "city": "衡水", "outVol": "5100", "outVolIncre": "-2.50%" }
            ]
        }
    }
    let res = [];
    res = tmp[params.inOrOut][params.city];
    return Mock.mock(res);
});

// 城市群出行-出行-地图数据
Mock.mock('/api/cityclustersmapdata', 'get', () => {
    let tmp = [
        { "line": "廊坊-北京", "travelVol": "235444" },
        { "line": "北京-廊坊", "travelVol": "270426" },
        { "line": "廊坊-天津", "travelVol": "108025" },
        { "line": "保定-北京", "travelVol": "88813" },
        { "line": "北京-保定", "travelVol": "94975" },
        { "line": "唐山-秦皇岛", "travelVol": "93525" },
        { "line": "北京-张家口", "travelVol": "73588" },
        { "line": "天津-北京", "travelVol": "81744" },
        { "line": "北京-天津", "travelVol": "88994" },
        { "line": "天津-廊坊", "travelVol": "112375" },
        { "line": "天津-唐山", "travelVol": "101500" },
        { "line": "唐山-天津", "travelVol": "83013" },
        { "line": "北京-承德", "travelVol": "49119" },
        { "line": "保定-石家庄", "travelVol": "64706" },
        { "line": "沧州-天津", "travelVol": "71050" },
        { "line": "廊坊-保定", "travelVol": "58544" },
        { "line": "张家口-北京", "travelVol": "47850" },
        { "line": "天津-沧州", "travelVol": "70144" },
        { "line": "石家庄-保定", "travelVol": "58363" },
        { "line": "邢台-石家庄", "travelVol": "59813" }
    ]
    let res = tmp.map(function (data) {
        return [data.line.split('-')[0], data.line.split('-')[1], data.travelVol];
    })

    return Mock.mock(res);
});

export default Mock;