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
const airStations = ['首都国际机场', '正定国际机场', '北京南苑机场', '山海关机场', '三女河机场', '邯郸机场', '天津机场'];
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
    '北京首都机场': { coords: [116.609564, 40.083812], city: '北京' },
    '天津滨海机场': { coords: [117.371645, 39.133514], city: '天津' },
    '保定站': { coords: [115.48644, 38.869177], city: '保定' },
    '正定机场站': { coords: [114.715639, 38.258178], city: '石家庄' },
    '廊坊站': { coords: [116.715217, 39.515411], city: '廊坊' },
    '衡水站': { coords: [115.698201, 37.750136], city: '衡水' },
    '保定东站': { coords: [115.607409, 38.869587], city: '保定' },
    '邯郸东站': { coords: [114.565735, 36.625652], city: '邯郸' },
    '沧州西站': { coords: [116.774624, 38.312952], city: '沧州' },
    '邯郸站': { coords: [114.481854, 36.607487], city: '邯郸' },
    '石家庄北站': { coords: [114.472054, 38.072363], city: '石家庄' },
    '石家庄正定机场': { coords: [114.703893, 38.287385], city: '石家庄' },
    '秦皇岛站': { coords: [119.598879, 39.97155], city: '秦皇岛' },
    '唐山北站': { coords: [118.125922, 39.822666], city: '唐山' },
    '北戴河站': { coords: [119.426456, 39.85749], city: '秦皇岛' },
    '山海关站': { coords: [119.773746, 40.006794], city: '秦皇岛' },
    '天津北站': { coords: [117.216107, 39.173165], city: '天津' },
    '邢台站': { coords: [114.498717, 37.076707], city: '邢台' },
    '沧州站': { coords: [116.884415, 38.315589], city: '沧州' },
    '武清站': { coords: [117.022146, 39.379001], city: '天津' },
    '张家口站': { coords: [114.889172, 40.757657], city: '张家口' },
    '塘沽站': { coords: [117.649499, 39.032391], city: '天津' },
    '滨海西站': { coords: [117.61832, 39.086783], city: '天津' },
    '丰台站': { coords: [116.295153, 39.855027], city: '北京' },
    '邢台东站': { coords: [114.599632, 37.098362], city: '邢台' },
    '邯郸马头机场': { coords: [114.437921, 36.531179], city: '邯郸' },
    '北京北站': { coords: [116.359489, 39.951655], city: '北京' },
    '北京南苑机场': { coords: [116.409387, 39.799315], city: '北京' },
    '北京大兴机场': { coords: [116.42396, 39.511576], city: '北京' },
    '承德站': { coords: [117.962341, 40.971508], city: '承德' },
    '廊坊北站': { coords: [116.712588, 39.518529], city: '廊坊' },
    '滨海站': { coords: [117.691259, 39.010868], city: '天津' },
    '军粮城北站': { coords: [117.434072, 39.071578], city: '天津' },
    '滨海北站': { coords: [117.768932, 39.242654], city: '天津' },
    '清河站': { coords: [116.322224, 40.047221], city: '北京' },
    '张家口宁远机场': { coords: [114.959089, 40.747535], city: '张家口' },
    '秦皇岛北戴河机场': { coords: [119.073417, 39.671808], city: '秦皇岛' },
    '衡水北站': { coords: [115.681229, 37.779285], city: '衡水' },
    '石家庄东站': { coords: [114.635313, 38.055966], city: '石家庄' },
    '承德普宁机场': { coords: [118.086917, 41.134741], city: '承德' },
    '山海关机场': { coords: [119.736468, 39.982802], city: '秦皇岛' },
    '唐山三女河机场': { coords: [118.01368, 39.725946], city: '唐山' },
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
            { "city": "广州", "population": "1530.59", "stationCount": "6", "avgDailyTraffic": "66.26" },
            { "city": "深圳", "population": "1343.88", "stationCount": "7", "avgDailyTraffic": "62.24" },
            { "city": "北京", "population": "2153.6", "stationCount": "8", "avgDailyTraffic": "61.46" },
            { "city": "上海", "population": "2428.14", "stationCount": "5", "avgDailyTraffic": "55.41" },
            { "city": "东莞", "population": "846.45", "stationCount": "4", "avgDailyTraffic": "46.86" }
        ];
    } else {
        res = [
            { "city": "北京", "population": "1530.59", "stationCount": "6", "avgDailyTraffic": "61.46" },
            { "city": "天津", "population": "1343.88", "stationCount": "7", "avgDailyTraffic": "47.81" },
            { "city": "保定", "population": "846.45", "stationCount": "4", "avgDailyTraffic": "42.65" },
            { "city": "廊坊", "population": "2428.14", "stationCount": "5", "avgDailyTraffic": "36.45" }
        ];
    }
    return Mock.mock(res);
});

//  sortBy occur:发生量，attr：吸引量，rail：高铁出行量，air：飞机出行量
Mock.mock('/api/citytrafficrank', 'get', (option) => {
    let sortBy = JSON.parse(option.body).sortBy;
    let tmp = [
        { "name": "东莞", "occur": "1601856", "attr": "1732691", "rail": "415296", "air": "81576" },
        { "name": "佛山", "occur": "1427328", "attr": "1455524", "rail": "370048", "air": "72688" },
        { "name": "苏州", "occur": "1148904", "attr": "1174952", "rail": "297864", "air": "58509" },
        { "name": "深圳", "occur": "1292760", "attr": "1620553", "rail": "335160", "air": "65835" },
        { "name": "上海", "occur": "751032", "attr": "1135227", "rail": "194712", "air": "38247" },
        { "name": "北京", "occur": "634824", "attr": "937510", "rail": "164584", "air": "32329" },
        { "name": "成都", "occur": "691632", "attr": "839219", "rail": "179312", "air": "35222" },
        { "name": "杭州", "occur": "896400", "attr": "984953", "rail": "232400", "air": "45650" },
        { "name": "惠州", "occur": "970056", "attr": "789960", "rail": "251496", "air": "49401" },
        { "name": "西安", "occur": "668088", "attr": "758634", "rail": "173208", "air": "34023" },
        { "name": "无锡", "occur": "799848", "attr": "750008", "rail": "207368", "air": "40733" },
        { "name": "廊坊", "occur": "603936", "attr": "627428", "rail": "156576", "air": "30756" },
        { "name": "郑州", "occur": "641520", "attr": "774524", "rail": "166320", "air": "32670" },
        { "name": "天津", "occur": "634824", "attr": "612900", "rail": "164584", "air": "32329" },
        { "name": "嘉兴", "occur": "632016", "attr": "547751", "rail": "163856", "air": "32186" },
        { "name": "保定", "occur": "523368", "attr": "423809", "rail": "135688", "air": "26653" },
        { "name": "济南", "occur": "581256", "attr": "560690", "rail": "150696", "air": "29601" },
        { "name": "南京", "occur": "558576", "attr": "608360", "rail": "144816", "air": "28446" },
        { "name": "重庆", "occur": "331992", "attr": "377728", "rail": "86072", "air": "16907" },
        { "name": "长沙", "occur": "463536", "attr": "541622", "rail": "120176", "air": "23606" },
        { "name": "常州", "occur": "521208", "attr": "473522", "rail": "135128", "air": "26543" },
        { "name": "中山", "occur": "543024", "attr": "575672", "rail": "140784", "air": "27654" },
        { "name": "咸阳", "occur": "499392", "attr": "447417", "rail": "129472", "air": "25432" },
        { "name": "绍兴", "occur": "487512", "attr": "377501", "rail": "126392", "air": "24827" },
        { "name": "武汉", "occur": "402408", "attr": "505302", "rail": "104328", "air": "20493" },
        { "name": "合肥", "occur": "396576", "attr": "390440", "rail": "102816", "air": "20196" },
        { "name": "潍坊", "occur": "414936", "attr": "349353", "rail": "107576", "air": "21131" },
        { "name": "唐山", "occur": "397008", "attr": "330966", "rail": "102928", "air": "20218" },
        { "name": "沧州", "occur": "429192", "attr": "366832", "rail": "111272", "air": "21857" },
        { "name": "石家庄", "occur": "324216", "attr": "354801", "rail": "84056", "air": "16511" }
    ];
    let res = tmp.sort(function (a, b) {
        return b[sortBy] - a[sortBy];
    });

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

    let tmp = {
        all: [
            { "hub": "北京南站", "all": "245220", "in": "139890", "out": "105330" },
            { "hub": "天津站", "all": "240165", "in": "103455", "out": "136710" },
            { "hub": "北京西站", "all": "218880", "in": "109230", "out": "109650" },
            { "hub": "石家庄站", "all": "125475", "in": "45450", "out": "80025" },
            { "hub": "北京首都机场", "all": "120090", "in": "60960", "out": "59130" },
            { "hub": "天津滨海机场", "all": "112020", "in": "51165", "out": "60855" },
            { "hub": "北京站", "all": "110865", "in": "49365", "out": "61500" },
            { "hub": "保定站", "all": "86175", "in": "50895", "out": "35280" },
            { "hub": "正定机场站", "all": "60330", "in": "35220", "out": "25110" },
            { "hub": "廊坊站", "all": "52245", "in": "29625", "out": "22620" },
            { "hub": "天津西站", "all": "51810", "in": "22560", "out": "29250" },
            { "hub": "唐山站", "all": "50310", "in": "29370", "out": "20940" },
            { "hub": "衡水站", "all": "42855", "in": "24540", "out": "18315" },
            { "hub": "保定东站", "all": "40935", "in": "21525", "out": "19410" },
            { "hub": "石家庄北站", "all": "39570", "in": "15855", "out": "23715" },
            { "hub": "沧州西站", "all": "34935", "in": "18765", "out": "16170" },
            { "hub": "石家庄正定机场", "all": "31365", "in": "14115", "out": "17250" },
            { "hub": "邯郸站", "all": "29340", "in": "17475", "out": "11865" },
            { "hub": "邯郸东站", "all": "28635", "in": "20415", "out": "8220" },
            { "hub": "秦皇岛站", "all": "25635", "in": "13920", "out": "11715" },
            { "hub": "天津北站", "all": "24690", "in": "9795", "out": "14895" },
            { "hub": "邢台站", "all": "22440", "in": "9210", "out": "13230" },
            { "hub": "唐山北站", "all": "21510", "in": "12840", "out": "8670" },
            { "hub": "山海关站", "all": "20775", "in": "10770", "out": "10005" },
            { "hub": "北戴河站", "all": "17985", "in": "12735", "out": "5250" },
            { "hub": "沧州站", "all": "17955", "in": "8835", "out": "9120" },
            { "hub": "武清站", "all": "12840", "in": "7785", "out": "5055" },
            { "hub": "张家口站", "all": "10200", "in": "5595", "out": "4605" },
            { "hub": "丰台站", "all": "9285", "in": "3885", "out": "5400" },
            { "hub": "滨海西站", "all": "9255", "in": "4170", "out": "5085" },
            { "hub": "北京北站", "all": "8580", "in": "2910", "out": "5670" },
            { "hub": "邯郸马头机场", "all": "8325", "in": "3090", "out": "5235" },
            { "hub": "塘沽站", "all": "7665", "in": "4455", "out": "3210" },
            { "hub": "邢台东站", "all": "6690", "in": "3525", "out": "3165" },
            { "hub": "北京大兴机场", "all": "4050", "in": "1665", "out": "2385" },
            { "hub": "承德站", "all": "3465", "in": "1440", "out": "2025" },
            { "hub": "廊坊北站", "all": "2325", "in": "1215", "out": "1110" },
            { "hub": "滨海站", "all": "1905", "in": "885", "out": "1020" },
            { "hub": "清河站", "all": "1830", "in": "675", "out": "1155" },
            { "hub": "滨海北站", "all": "1665", "in": "705", "out": "960" },
            { "hub": "军粮城北站", "all": "1470", "in": "840", "out": "630" },
            { "hub": "张家口宁远机场", "all": "1185", "in": "525", "out": "660" },
            { "hub": "衡水北站", "all": "585", "in": "255", "out": "330" },
            { "hub": "石家庄东站", "all": "375", "in": "180", "out": "195" },
            { "hub": "秦皇岛北戴河机场", "all": "360", "in": "300", "out": "60" },
            { "hub": "承德普宁机场", "all": "240", "in": "180", "out": "60" },
            { "hub": "唐山三女河机场", "all": "135", "in": "60", "out": "75" }
        ],
        out: [
            { "hub": "天津站", "out": "136710", "inc": "-5.26%" },
            { "hub": "北京西站", "out": "109650", "inc": "33.42%" },
            { "hub": "北京南站", "out": "105330", "inc": "22.27%" },
            { "hub": "石家庄站", "out": "80025", "inc": "42.46%" },
            { "hub": "北京站", "out": "61500", "inc": "27.53%" },
            { "hub": "天津滨海机场", "out": "60855", "inc": "-1.67%" },
            { "hub": "北京首都机场", "out": "59130", "inc": "-6.37%" },
            { "hub": "保定站", "out": "35280", "inc": "23.99%" },
            { "hub": "天津西站", "out": "29250", "inc": "25.97%" },
            { "hub": "正定机场站", "out": "25110", "inc": "8.14%" },
            { "hub": "石家庄北站", "out": "23715", "inc": "41.54%" },
            { "hub": "廊坊站", "out": "22620", "inc": "28.01%" },
            { "hub": "唐山站", "out": "20940", "inc": "1.45%" },
            { "hub": "保定东站", "out": "19410", "inc": "2.62%" },
            { "hub": "衡水站", "out": "18315", "inc": "14.54%" },
            { "hub": "石家庄正定机场", "out": "17250", "inc": "-3.04%" },
            { "hub": "沧州西站", "out": "16170", "inc": "-11.13%" },
            { "hub": "天津北站", "out": "14895", "inc": "26.82%" },
            { "hub": "邢台站", "out": "13230", "inc": "4.38%" },
            { "hub": "邯郸站", "out": "11865", "inc": "13.49%" },
            { "hub": "秦皇岛站", "out": "11715", "inc": "11.57%" },
            { "hub": "山海关站", "out": "10005", "inc": "6.04%" },
            { "hub": "沧州站", "out": "9120", "inc": "28.27%" },
            { "hub": "唐山北站", "out": "8670", "inc": "26.75%" },
            { "hub": "邯郸东站", "out": "8220", "inc": "-11.76%" },
            { "hub": "北京北站", "out": "5670", "inc": "83.50%" },
            { "hub": "丰台站", "out": "5400", "inc": "44.00%" },
            { "hub": "北戴河站", "out": "5250", "inc": "-3.85%" },
            { "hub": "邯郸马头机场", "out": "5235", "inc": "-44.34%" },
            { "hub": "滨海西站", "out": "5085", "inc": "-3.42%" },
            { "hub": "武清站", "out": "5055", "inc": "50.45%" },
            { "hub": "张家口站", "out": "4605", "inc": "15.41%" },
            { "hub": "塘沽站", "out": "3210", "inc": "27.38%" },
            { "hub": "邢台东站", "out": "3165", "inc": "-34.27%" },
            { "hub": "北京大兴机场", "out": "2385", "inc": "65.63%" },
            { "hub": "承德站", "out": "2025", "inc": "19.47%" },
            { "hub": "清河站", "out": "1155", "inc": "71.11%" },
            { "hub": "廊坊北站", "out": "1110", "inc": "124.24%" },
            { "hub": "滨海站", "out": "1020", "inc": "4.62%" },
            { "hub": "滨海北站", "out": "960", "inc": "16.36%" },
            { "hub": "张家口宁远机场", "out": "660", "inc": "12.82%" },
            { "hub": "军粮城北站", "out": "630", "inc": "10.53%" },
            { "hub": "衡水北站", "out": "330", "inc": "0.00%" },
            { "hub": "石家庄东站", "out": "195", "inc": "116.67%" },
            { "hub": "唐山三女河机场", "out": "75", "inc": "-6.25%" },
            { "hub": "承德普宁机场", "out": "60", "inc": "0.00%" },
            { "hub": "秦皇岛北戴河机场", "out": "60", "inc": "-33.33%" }
        ],
        in: [
            { "hub": "北京南站", "in": "139890", "inc": "-2.60%" },
            { "hub": "北京西站", "in": "109230", "inc": "12.32%" },
            { "hub": "天津站", "in": "103455", "inc": "10.35%" },
            { "hub": "北京首都机场", "in": "60960", "inc": "-0.27%" },
            { "hub": "天津滨海机场", "in": "51165", "inc": "-17.19%" },
            { "hub": "保定站", "in": "50895", "inc": "67.72%" },
            { "hub": "北京站", "in": "49365", "inc": "-0.30%" },
            { "hub": "石家庄站", "in": "45450", "inc": "26.83%" },
            { "hub": "正定机场站", "in": "35220", "inc": "17.11%" },
            { "hub": "廊坊站", "in": "29625", "inc": "43.32%" },
            { "hub": "唐山站", "in": "29370", "inc": "18.45%" },
            { "hub": "衡水站", "in": "24540", "inc": "58.68%" },
            { "hub": "天津西站", "in": "22560", "inc": "36.60%" },
            { "hub": "保定东站", "in": "21525", "inc": "17.53%" },
            { "hub": "邯郸东站", "in": "20415", "inc": "-8.23%" },
            { "hub": "沧州西站", "in": "18765", "inc": "41.52%" },
            { "hub": "邯郸站", "in": "17475", "inc": "39.35%" },
            { "hub": "石家庄北站", "in": "15855", "inc": "18.10%" },
            { "hub": "石家庄正定机场", "in": "14115", "inc": "4.09%" },
            { "hub": "秦皇岛站", "in": "13920", "inc": "11.40%" },
            { "hub": "唐山北站", "in": "12840", "inc": "66.86%" },
            { "hub": "北戴河站", "in": "12735", "inc": "44.14%" },
            { "hub": "山海关站", "in": "10770", "inc": "27.30%" },
            { "hub": "天津北站", "in": "9795", "inc": "19.82%" },
            { "hub": "邢台站", "in": "9210", "inc": "-0.32%" },
            { "hub": "沧州站", "in": "8835", "inc": "54.59%" },
            { "hub": "武清站", "in": "7785", "inc": "109.27%" },
            { "hub": "张家口站", "in": "5595", "inc": "18.04%" },
            { "hub": "塘沽站", "in": "4455", "inc": "38.14%" },
            { "hub": "滨海西站", "in": "4170", "inc": "6.51%" },
            { "hub": "丰台站", "in": "3885", "inc": "26.34%" },
            { "hub": "邢台东站", "in": "3525", "inc": "-22.95%" },
            { "hub": "邯郸马头机场", "in": "3090", "inc": "-2.37%" },
            { "hub": "北京北站", "in": "2910", "inc": "32.88%" },
            { "hub": "北京大兴机场", "in": "1665", "inc": "24.72%" },
            { "hub": "承德站", "in": "1440", "inc": "9.09%" },
            { "hub": "廊坊北站", "in": "1215", "inc": "179.31%" },
            { "hub": "滨海站", "in": "885", "inc": "22.92%" },
            { "hub": "军粮城北站", "in": "840", "inc": "27.27%" },
            { "hub": "滨海北站", "in": "705", "inc": "-17.54%" },
            { "hub": "清河站", "in": "675", "inc": "4.65%" },
            { "hub": "张家口宁远机场", "in": "525", "inc": "2.94%" },
            { "hub": "秦皇岛北戴河机场", "in": "300", "inc": "150.00%" },
            { "hub": "衡水北站", "in": "255", "inc": "70.00%" },
            { "hub": "石家庄东站", "in": "180", "inc": "9.09%" },
            { "hub": "承德普宁机场", "in": "180", "inc": "0.00%" },
            { "hub": "唐山三女河机场", "in": "60", "inc": "-20.00%" }
        ]
    }
    let res = [];
    if (tmp[hubType]) {
        res = tmp[hubType].map(function (data) {
            return {
                ...data,
                city: stationGeoCoordMap[data.hub].city,
                coords: stationGeoCoordMap[data.hub].coords
            }
        });
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
        tripRank: [
            { "city": "北京", "allVol": "720812", "inVol": "355388", "inVolIncre": "-17.44%", "outVol": "365424", "outVolIncre": "3.49%" },
            { "city": "廊坊", "allVol": "520216", "inVol": "266228", "inVolIncre": "4.64%", "outVol": "253988", "outVolIncre": "-5.36%" },
            { "city": "天津", "allVol": "366504", "inVol": "189616", "inVolIncre": "-16.04%", "outVol": "176888", "outVolIncre": "-18.18%" },
            { "city": "保定", "allVol": "227472", "inVol": "114488", "inVolIncre": "19.44%", "outVol": "112984", "outVolIncre": "-16.21%" },
            { "city": "沧州", "allVol": "173532", "inVol": "85028", "inVolIncre": "-14.89%", "outVol": "88504", "outVolIncre": "-14.70%" },
            { "city": "唐山", "allVol": "168976", "inVol": "81180", "inVolIncre": "-12.65%", "outVol": "87796", "outVolIncre": "-15.46%" },
            { "city": "邢台", "allVol": "141024", "inVol": "73888", "inVolIncre": "-1.87%", "outVol": "67136", "outVolIncre": "2.42%" },
            { "city": "石家庄", "allVol": "139136", "inVol": "67316", "inVolIncre": "-1.60%", "outVol": "71820", "outVolIncre": "16.47%" },
            { "city": "衡水", "allVol": "133640", "inVol": "65748", "inVolIncre": "-6.84%", "outVol": "67892", "outVolIncre": "-14.18%" },
            { "city": "邯郸", "allVol": "89288", "inVol": "41396", "inVolIncre": "2.69%", "outVol": "47892", "outVolIncre": "-6.91%" },
            { "city": "秦皇岛", "allVol": "53004", "inVol": "26776", "inVolIncre": "-1.52%", "outVol": "26228", "outVolIncre": "-15.16%" },
            { "city": "承德", "allVol": "39960", "inVol": "19328", "inVolIncre": "-10.24%", "outVol": "20632", "outVolIncre": "-21.36%" },
            { "city": "张家口", "allVol": "34084", "inVol": "17444", "inVolIncre": "-0.07%", "outVol": "16640", "outVolIncre": "-33.82%" }
        ],
        inRank: [
            { "city": "北京", "inVol": "355388", "inVolIncre": "-17.44%" },
            { "city": "廊坊", "inVol": "266228", "inVolIncre": "4.64%" },
            { "city": "天津", "inVol": "189616", "inVolIncre": "-16.04%" },
            { "city": "保定", "inVol": "114488", "inVolIncre": "19.44%" },
            { "city": "沧州", "inVol": "85028", "inVolIncre": "-14.89%" },
            { "city": "唐山", "inVol": "81180", "inVolIncre": "-12.65%" },
            { "city": "石家庄", "inVol": "73888", "inVolIncre": "-1.87%" },
            { "city": "衡水", "inVol": "67316", "inVolIncre": "-1.60%" },
            { "city": "邢台", "inVol": "65748", "inVolIncre": "-6.84%" },
            { "city": "邯郸", "inVol": "41396", "inVolIncre": "2.69%" },
            { "city": "秦皇岛", "inVol": "26776", "inVolIncre": "-1.52%" },
            { "city": "承德", "inVol": "19328", "inVolIncre": "-10.24%" },
            { "city": "张家口", "inVol": "17444", "inVolIncre": "-0.07%" }
        ],
        outRank: [
            { "city": "北京", "outVol": "365424", "outVolIncre": "3.49%" },
            { "city": "廊坊", "outVol": "253988", "outVolIncre": "-5.36%" },
            { "city": "天津", "outVol": "176888", "outVolIncre": "-18.18%" },
            { "city": "保定", "outVol": "112984", "outVolIncre": "-16.21%" },
            { "city": "沧州", "outVol": "88504", "outVolIncre": "-14.70%" },
            { "city": "唐山", "outVol": "87796", "outVolIncre": "-15.46%" },
            { "city": "衡水", "outVol": "71820", "outVolIncre": "16.47%" },
            { "city": "邢台", "outVol": "67892", "outVolIncre": "-14.18%" },
            { "city": "石家庄", "outVol": "67136", "outVolIncre": "2.42%" },
            { "city": "邯郸", "outVol": "47892", "outVolIncre": "-6.91%" },
            { "city": "秦皇岛", "outVol": "26228", "outVolIncre": "-15.16%" },
            { "city": "承德", "outVol": "20632", "outVolIncre": "-21.36%" },
            { "city": "张家口", "outVol": "16640", "outVolIncre": "-33.82%" }
        ]
    }
    let res = [];
    res = tmp[params.rankType];

    return Mock.mock(res);
});

// 城市群出行-联动表格citydata
Mock.mock('/api/citydata', 'get', (option) => {
    let params = JSON.parse(option.body);
    let tmp = {
        'in': {
            '北京': [
                { "city": "保定", "inVol": "53788", "inVolIncre": "-27.19%" },
                { "city": "沧州", "inVol": "8196", "inVolIncre": "-30.96%" },
                { "city": "承德", "inVol": "10664", "inVolIncre": "-27.20%" },
                { "city": "邯郸", "inVol": "3524", "inVolIncre": "-10.56%" },
                { "city": "衡水", "inVol": "4556", "inVolIncre": "-36.26%" },
                { "city": "廊坊", "inVol": "177112", "inVolIncre": "-1.98%" },
                { "city": "秦皇岛", "inVol": "3836", "inVolIncre": "-37.32%" },
                { "city": "石家庄", "inVol": "8976", "inVolIncre": "-22.35%" },
                { "city": "唐山", "inVol": "10072", "inVolIncre": "-31.30%" },
                { "city": "天津", "inVol": "58964", "inVolIncre": "-27.73%" },
                { "city": "邢台", "inVol": "2356", "inVolIncre": "-10.76%" },
                { "city": "张家口", "inVol": "13344", "inVolIncre": "-38.56%" }
            ],
            '保定': [
                { "city": "北京", "inVol": "52720", "inVolIncre": "12.05%" },
                { "city": "沧州", "inVol": "13948", "inVolIncre": "-0.29%" },
                { "city": "邯郸", "inVol": "908", "inVolIncre": "8.61%" },
                { "city": "衡水", "inVol": "7268", "inVolIncre": "11.68%" },
                { "city": "廊坊", "inVol": "12460", "inVolIncre": "1.30%" },
                { "city": "秦皇岛", "inVol": "712", "inVolIncre": "-4.30%" },
                { "city": "石家庄", "inVol": "20052", "inVolIncre": "133.38%" },
                { "city": "唐山", "inVol": "780", "inVolIncre": "7.14%" },
                { "city": "天津", "inVol": "3884", "inVolIncre": "0.83%" },
                { "city": "邢台", "inVol": "920", "inVolIncre": "25.68%" },
                { "city": "张家口", "inVol": "836", "inVolIncre": "59.54%" }
            ],
            '沧州': [
                { "city": "保定", "inVol": "14876", "inVolIncre": "-13.71%" },
                { "city": "北京", "inVol": "7364", "inVolIncre": "-17.67%" },
                { "city": "邯郸", "inVol": "488", "inVolIncre": "-1.61%" },
                { "city": "衡水", "inVol": "27176", "inVolIncre": "-11.82%" },
                { "city": "廊坊", "inVol": "11892", "inVolIncre": "-15.59%" },
                { "city": "石家庄", "inVol": "3504", "inVolIncre": "-6.71%" },
                { "city": "唐山", "inVol": "1196", "inVolIncre": "-28.30%" },
                { "city": "天津", "inVol": "17912", "inVolIncre": "-18.15%" },
                { "city": "邢台", "inVol": "620", "inVolIncre": "18.32%" }
            ],
            "承德": [
                { "city": "北京", "inVol": "9464", "inVolIncre": "-6.04%" },
                { "city": "廊坊", "inVol": "420", "inVolIncre": "-22.22%" },
                { "city": "秦皇岛", "inVol": "1180", "inVolIncre": "-4.22%" },
                { "city": "唐山", "inVol": "5760", "inVolIncre": "-13.10%" },
                { "city": "天津", "inVol": "1544", "inVolIncre": "-22.80%" },
                { "city": "张家口", "inVol": "960", "inVolIncre": "-9.43%" }
            ],
            '天津': [
                { "city": "保定", "inVol": "3880", "inVolIncre": "-26.68%" },
                { "city": "北京", "inVol": "61956", "inVolIncre": "-15.43%" },
                { "city": "沧州", "inVol": "20396", "inVolIncre": "-16.82%" },
                { "city": "承德", "inVol": "1768", "inVolIncre": "-24.05%" },
                { "city": "邯郸", "inVol": "1072", "inVolIncre": "9.39%" },
                { "city": "衡水", "inVol": "1760", "inVolIncre": "-27.27%" },
                { "city": "廊坊", "inVol": "46648", "inVolIncre": "-13.18%" },
                { "city": "秦皇岛", "inVol": "2064", "inVolIncre": "-25.00%" },
                { "city": "石家庄", "inVol": "1868", "inVolIncre": "0.86%" },
                { "city": "唐山", "inVol": "47112", "inVolIncre": "-17.93%" },
                { "city": "邢台", "inVol": "528", "inVolIncre": "-17.50%" },
                { "city": "张家口", "inVol": "564", "inVolIncre": "-16.57%" }
            ],
            '邢台': [
                { "city": "保定", "inVol": "880", "inVolIncre": "-6.78%" },
                { "city": "北京", "inVol": "2104", "inVolIncre": "-12.04%" },
                { "city": "沧州", "inVol": "720", "inVolIncre": "12.50%" },
                { "city": "邯郸", "inVol": "34924", "inVolIncre": "-4.03%" },
                { "city": "衡水", "inVol": "15988", "inVolIncre": "-6.28%" },
                { "city": "石家庄", "inVol": "18728", "inVolIncre": "8.43%" },
                { "city": "天津", "inVol": "544", "inVolIncre": "-8.72%" }
            ],
            '张家口': [
                { "city": "保定", "inVol": "708", "inVolIncre": "9.94%" },
                { "city": "北京", "inVol": "14528", "inVolIncre": "3.86%" },
                { "city": "承德", "inVol": "928", "inVolIncre": "-4.53%" },
                { "city": "石家庄", "inVol": "696", "inVolIncre": "50.00%" },
                { "city": "天津", "inVol": "584", "inVolIncre": "-32.41%" }
            ],
            '邯郸': [
                { "city": "保定", "inVol": "768", "inVolIncre": "9.09%" },
                { "city": "北京", "inVol": "2952", "inVolIncre": "6.03%" },
                { "city": "沧州", "inVol": "480", "inVolIncre": "-1.64%" },
                { "city": "衡水", "inVol": "900", "inVolIncre": "-35.90%" },
                { "city": "石家庄", "inVol": "5608", "inVolIncre": "-5.27%" },
                { "city": "天津", "inVol": "660", "inVolIncre": "-23.61%" },
                { "city": "邢台", "inVol": "30028", "inVolIncre": "6.68%" }
            ],
            '衡水': [
                { "city": "保定", "inVol": "8044", "inVolIncre": "-2.85%" },
                { "city": "北京", "inVol": "3832", "inVolIncre": "-4.01%" },
                { "city": "沧州", "inVol": "27920", "inVolIncre": "-11.24%" },
                { "city": "邯郸", "inVol": "812", "inVolIncre": "-28.52%" },
                { "city": "廊坊", "inVol": "784", "inVolIncre": "-2.49%" },
                { "city": "石家庄", "inVol": "8788", "inVolIncre": "-0.32%" },
                { "city": "天津", "inVol": "1440", "inVolIncre": "-10.45%" },
                { "city": "邢台", "inVol": "14128", "inVolIncre": "-2.46%" }
            ],
            '石家庄': [
                { "city": "保定", "inVol": "15180", "inVolIncre": "37.50%" },
                { "city": "北京", "inVol": "8664", "inVolIncre": "-0.37%" },
                { "city": "沧州", "inVol": "3820", "inVolIncre": "-17.17%" },
                { "city": "邯郸", "inVol": "6164", "inVolIncre": "-19.61%" },
                { "city": "衡水", "inVol": "9440", "inVolIncre": "-22.06%" },
                { "city": "廊坊", "inVol": "1584", "inVolIncre": "-1.00%" },
                { "city": "秦皇岛", "inVol": "564", "inVolIncre": "6.02%" },
                { "city": "唐山", "inVol": "1276", "inVolIncre": "1.27%" },
                { "city": "天津", "inVol": "1596", "inVolIncre": "-21.30%" },
                { "city": "邢台", "inVol": "18556", "inVolIncre": "0.96%" },
                { "city": "张家口", "inVol": "472", "inVolIncre": "-1.67%" }
            ],
            '唐山': [
                { "city": "保定", "inVol": "772", "inVolIncre": "3.21%" },
                { "city": "北京", "inVol": "10096", "inVolIncre": "-10.43%" },
                { "city": "沧州", "inVol": "1032", "inVolIncre": "-31.75%" },
                { "city": "承德", "inVol": "5532", "inVolIncre": "-12.74%" },
                { "city": "廊坊", "inVol": "2616", "inVolIncre": "-22.88%" },
                { "city": "秦皇岛", "inVol": "17360", "inVolIncre": "-5.20%" },
                { "city": "石家庄", "inVol": "1356", "inVolIncre": "18.53%" },
                { "city": "天津", "inVol": "42416", "inVolIncre": "-14.70%" }
            ],
            '秦皇岛': [
                { "city": "保定", "inVol": "672", "inVolIncre": "9.80%" },
                { "city": "北京", "inVol": "3612", "inVolIncre": "-7.95%" },
                { "city": "承德", "inVol": "1180", "inVolIncre": "4.98%" },
                { "city": "廊坊", "inVol": "472", "inVolIncre": "-32.18%" },
                { "city": "石家庄", "inVol": "548", "inVolIncre": "16.10%" },
                { "city": "唐山", "inVol": "18660", "inVolIncre": "4.78%" },
                { "city": "天津", "inVol": "1632", "inVolIncre": "-22.87%" }
            ],
            '廊坊': [
                { "city": "保定", "inVol": "13416", "inVolIncre": "-13.22%" },
                { "city": "北京", "inVol": "188132", "inVolIncre": "12.83%" },
                { "city": "沧州", "inVol": "11992", "inVolIncre": "-15.76%" },
                { "city": "承德", "inVol": "560", "inVolIncre": "-32.04%" },
                { "city": "衡水", "inVol": "804", "inVolIncre": "-30.21%" },
                { "city": "秦皇岛", "inVol": "512", "inVolIncre": "-31.18%" },
                { "city": "石家庄", "inVol": "1696", "inVolIncre": "-6.61%" },
                { "city": "唐山", "inVol": "2940", "inVolIncre": "-20.45%" },
                { "city": "天津", "inVol": "45712", "inVolIncre": "-6.85%" },
                { "city": "张家口", "inVol": "464", "inVolIncre": "-32.16%" }
            ]
        },
        out: {
            '北京': [
                { "city": "保定", "outVol": "52720", "outVolIncre": "12.05%" },
                { "city": "沧州", "outVol": "7364", "outVolIncre": "-17.67%" },
                { "city": "承德", "outVol": "9464", "outVolIncre": "-6.04%" },
                { "city": "邯郸", "outVol": "2952", "outVolIncre": "6.03%" },
                { "city": "衡水", "outVol": "3832", "outVolIncre": "-4.01%" },
                { "city": "廊坊", "outVol": "188132", "outVolIncre": "12.83%" },
                { "city": "秦皇岛", "outVol": "3612", "outVolIncre": "-7.95%" },
                { "city": "石家庄", "outVol": "8664", "outVolIncre": "-0.37%" },
                { "city": "唐山", "outVol": "10096", "outVolIncre": "-10.43%" },
                { "city": "天津", "outVol": "61956", "outVolIncre": "-15.43%" },
                { "city": "邢台", "outVol": "2104", "outVolIncre": "-12.04%" },
                { "city": "张家口", "outVol": "14528", "outVolIncre": "3.86%" }
            ],
            '天津': [
                { "city": "保定", "outVol": "3884", "outVolIncre": "0.83%" },
                { "city": "北京", "outVol": "58964", "outVolIncre": "-27.73%" },
                { "city": "沧州", "outVol": "17912", "outVolIncre": "-18.15%" },
                { "city": "承德", "outVol": "1544", "outVolIncre": "-22.80%" },
                { "city": "邯郸", "outVol": "660", "outVolIncre": "-23.61%" },
                { "city": "衡水", "outVol": "1440", "outVolIncre": "-10.45%" },
                { "city": "廊坊", "outVol": "45712", "outVolIncre": "-6.85%" },
                { "city": "秦皇岛", "outVol": "1632", "outVolIncre": "-22.87%" },
                { "city": "石家庄", "outVol": "1596", "outVolIncre": "-21.30%" },
                { "city": "唐山", "outVol": "42416", "outVolIncre": "-14.70%" },
                { "city": "邢台", "outVol": "544", "outVolIncre": "-8.72%" },
                { "city": "张家口", "outVol": "584", "outVolIncre": "-32.41%" }
            ],
            '保定': [
                { "city": "北京", "outVol": "53788", "outVolIncre": "-27.19%" },
                { "city": "沧州", "outVol": "14876", "outVolIncre": "-13.71%" },
                { "city": "邯郸", "outVol": "768", "outVolIncre": "9.09%" },
                { "city": "衡水", "outVol": "8044", "outVolIncre": "-2.85%" },
                { "city": "廊坊", "outVol": "13416", "outVolIncre": "-13.22%" },
                { "city": "秦皇岛", "outVol": "672", "outVolIncre": "9.80%" },
                { "city": "石家庄", "outVol": "15180", "outVolIncre": "37.50%" },
                { "city": "唐山", "outVol": "772", "outVolIncre": "3.21%" },
                { "city": "天津", "outVol": "3880", "outVolIncre": "-26.68%" },
                { "city": "邢台", "outVol": "880", "outVolIncre": "-6.78%" },
                { "city": "张家口", "outVol": "708", "outVolIncre": "9.94%" }
            ],
            '沧州': [
                { "city": "保定", "outVol": "13948", "outVolIncre": "-0.29%" },
                { "city": "北京", "outVol": "8196", "outVolIncre": "-30.96%" },
                { "city": "邯郸", "outVol": "480", "outVolIncre": "-1.64%" },
                { "city": "衡水", "outVol": "27920", "outVolIncre": "-11.24%" },
                { "city": "廊坊", "outVol": "11992", "outVolIncre": "-15.76%" },
                { "city": "石家庄", "outVol": "3820", "outVolIncre": "-17.17%" },
                { "city": "唐山", "outVol": "1032", "outVolIncre": "-31.75%" },
                { "city": "天津", "outVol": "20396", "outVolIncre": "-16.82%" },
                { "city": "邢台", "outVol": "720", "outVolIncre": "12.50%" }
            ],
            '廊坊': [
                { "city": "保定", "outVol": "12460", "outVolIncre": "1.30%" },
                { "city": "北京", "outVol": "177112", "outVolIncre": "-1.98%" },
                { "city": "沧州", "outVol": "11892", "outVolIncre": "-15.59%" },
                { "city": "承德", "outVol": "420", "outVolIncre": "-22.22%" },
                { "city": "衡水", "outVol": "784", "outVolIncre": "-2.49%" },
                { "city": "秦皇岛", "outVol": "472", "outVolIncre": "-32.18%" },
                { "city": "石家庄", "outVol": "1584", "outVolIncre": "-1.00%" },
                { "city": "唐山", "outVol": "2616", "outVolIncre": "-22.88%" },
                { "city": "天津", "outVol": "46648", "outVolIncre": "-13.18%" }
            ],
            '唐山': [
                { "city": "保定", "outVol": "780", "outVolIncre": "7.14%" },
                { "city": "北京", "outVol": "10072", "outVolIncre": "-31.30%" },
                { "city": "沧州", "outVol": "1196", "outVolIncre": "-28.30%" },
                { "city": "承德", "outVol": "5760", "outVolIncre": "-13.10%" },
                { "city": "廊坊", "outVol": "2940", "outVolIncre": "-20.45%" },
                { "city": "秦皇岛", "outVol": "18660", "outVolIncre": "4.78%" },
                { "city": "石家庄", "outVol": "1276", "outVolIncre": "1.27%" },
                { "city": "天津", "outVol": "47112", "outVolIncre": "-17.93%" }
            ],
            '邢台': [
                { "city": "保定", "outVol": "920", "outVolIncre": "25.68%" },
                { "city": "北京", "outVol": "2356", "outVolIncre": "-10.76%" },
                { "city": "沧州", "outVol": "620", "outVolIncre": "18.32%" },
                { "city": "邯郸", "outVol": "30028", "outVolIncre": "6.68%" },
                { "city": "衡水", "outVol": "14128", "outVolIncre": "-2.46%" },
                { "city": "石家庄", "outVol": "18556", "outVolIncre": "0.96%" },
                { "city": "天津", "outVol": "528", "outVolIncre": "-17.50%" }
            ],
            '张家口': [
                { "city": "保定", "outVol": "836", "outVolIncre": "59.54%" },
                { "city": "北京", "outVol": "13344", "outVolIncre": "-38.56%" },
                { "city": "承德", "outVol": "960", "outVolIncre": "-9.43%" },
                { "city": "廊坊", "outVol": "464", "outVolIncre": "-32.16%" },
                { "city": "石家庄", "outVol": "472", "outVolIncre": "-1.67%" },
                { "city": "天津", "outVol": "564", "outVolIncre": "-16.57%" }
            ],
            '秦皇岛': [
                { "city": "保定", "outVol": "712", "outVolIncre": "-4.30%" },
                { "city": "北京", "outVol": "3836", "outVolIncre": "-37.32%" },
                { "city": "承德", "outVol": "1180", "outVolIncre": "-4.22%" },
                { "city": "廊坊", "outVol": "512", "outVolIncre": "-31.18%" },
                { "city": "石家庄", "outVol": "564", "outVolIncre": "6.02%" },
                { "city": "唐山", "outVol": "17360", "outVolIncre": "-5.20%" },
                { "city": "天津", "outVol": "2064", "outVolIncre": "-25.00%" }
            ],
            '石家庄': [
                { "city": "保定", "outVol": "20052", "outVolIncre": "133.38%" },
                { "city": "北京", "outVol": "8976", "outVolIncre": "-22.35%" },
                { "city": "沧州", "outVol": "3504", "outVolIncre": "-6.71%" },
                { "city": "邯郸", "outVol": "5608", "outVolIncre": "-5.27%" },
                { "city": "衡水", "outVol": "8788", "outVolIncre": "-0.32%" },
                { "city": "廊坊", "outVol": "1696", "outVolIncre": "-6.61%" },
                { "city": "秦皇岛", "outVol": "548", "outVolIncre": "16.10%" },
                { "city": "唐山", "outVol": "1356", "outVolIncre": "18.53%" },
                { "city": "天津", "outVol": "1868", "outVolIncre": "0.86%" },
                { "city": "邢台", "outVol": "18728", "outVolIncre": "8.43%" },
                { "city": "张家口", "outVol": "696", "outVolIncre": "50.00%" }
            ],
            '承德': [
                { "city": "北京", "outVol": "10664", "outVolIncre": "-27.20%" },
                { "city": "廊坊", "outVol": "560", "outVolIncre": "-32.04%" },
                { "city": "秦皇岛", "outVol": "1180", "outVolIncre": "4.98%" },
                { "city": "唐山", "outVol": "5532", "outVolIncre": "-12.74%" },
                { "city": "天津", "outVol": "1768", "outVolIncre": "-24.05%" },
                { "city": "张家口", "outVol": "928", "outVolIncre": "-4.53%" }
            ],
            '邯郸': [
                { "city": "保定", "outVol": "908", "outVolIncre": "8.61%" },
                { "city": "北京", "outVol": "3524", "outVolIncre": "-10.56%" },
                { "city": "沧州", "outVol": "488", "outVolIncre": "-1.61%" },
                { "city": "衡水", "outVol": "812", "outVolIncre": "-28.52%" },
                { "city": "石家庄", "outVol": "6164", "outVolIncre": "-19.61%" },
                { "city": "天津", "outVol": "1072", "outVolIncre": "9.39%" },
                { "city": "邢台", "outVol": "34924", "outVolIncre": "-4.03%" }
            ],
            '衡水': [
                { "city": "保定", "outVol": "7268", "outVolIncre": "11.68%" },
                { "city": "北京", "outVol": "4556", "outVolIncre": "-36.26%" },
                { "city": "沧州", "outVol": "27176", "outVolIncre": "-11.82%" },
                { "city": "邯郸", "outVol": "900", "outVolIncre": "-35.90%" },
                { "city": "廊坊", "outVol": "804", "outVolIncre": "-30.21%" },
                { "city": "石家庄", "outVol": "9440", "outVolIncre": "-22.06%" },
                { "city": "天津", "outVol": "1760", "outVolIncre": "-27.27%" },
                { "city": "邢台", "outVol": "15988", "outVolIncre": "-6.28%" }
            ]
        }
    }
    let res = [];
    res = tmp[params.inOrOut][params.city];
    return Mock.mock(res);
});

Mock.mock('/api/hubdata', 'get', (option) => {
    let params = JSON.parse(option.body);
    let tmp = {
        'in': {
            "保定东站": [
                { "hub": "北戴河站", "in": "15" },
                { "hub": "北京北站", "in": "90" },
                { "hub": "北京大兴机场", "in": "30" },
                { "hub": "北京南站", "in": "540" },
                { "hub": "北京首都机场", "in": "135" },
                { "hub": "北京西站", "in": "8175" },
                { "hub": "北京站", "in": "45" },
                { "hub": "滨海北站", "in": "15" },
                { "hub": "滨海西站", "in": "225" },
                { "hub": "沧州西站", "in": "105" },
                { "hub": "沧州站", "in": "75" },
                { "hub": "丰台站", "in": "90" },
                { "hub": "邯郸东站", "in": "930" },
                { "hub": "邯郸站", "in": "90" },
                { "hub": "衡水北站", "in": "15" },
                { "hub": "衡水站", "in": "210" },
                { "hub": "军粮城北站", "in": "15" },
                { "hub": "廊坊北站", "in": "15" },
                { "hub": "廊坊站", "in": "195" },
                { "hub": "秦皇岛站", "in": "30" },
                { "hub": "清河站", "in": "45" },
                { "hub": "山海关站", "in": "30" },
                { "hub": "石家庄北站", "in": "150" },
                { "hub": "石家庄东站", "in": "30" },
                { "hub": "石家庄站", "in": "2085" },
                { "hub": "石家庄正定机场", "in": "870" },
                { "hub": "唐山站", "in": "210" },
                { "hub": "塘沽站", "in": "75" },
                { "hub": "天津北站", "in": "60" },
                { "hub": "天津滨海机场", "in": "105" },
                { "hub": "天津西站", "in": "1065" },
                { "hub": "天津站", "in": "480" },
                { "hub": "武清站", "in": "15" },
                { "hub": "邢台东站", "in": "315" },
                { "hub": "邢台站", "in": "15" },
                { "hub": "张家口站", "in": "15" },
                { "hub": "正定机场站", "in": "2805" }],
            "保定站": [
                { "hub": "北戴河站", "in": "15" },
                { "hub": "北京北站", "in": "270" },
                { "hub": "北京大兴机场", "in": "15" },
                { "hub": "北京南站", "in": "795" },
                { "hub": "北京首都机场", "in": "75" },
                { "hub": "北京西站", "in": "15660" },
                { "hub": "北京站", "in": "810" },
                { "hub": "滨海西站", "in": "15" },
                { "hub": "沧州西站", "in": "30" },
                { "hub": "沧州站", "in": "45" },
                { "hub": "承德站", "in": "75" },
                { "hub": "丰台站", "in": "615" },
                { "hub": "邯郸东站", "in": "45" },
                { "hub": "邯郸马头机场", "in": "1005" },
                { "hub": "邯郸站", "in": "2685" },
                { "hub": "衡水站", "in": "45" },
                { "hub": "廊坊站", "in": "210" },
                { "hub": "秦皇岛北戴河机场", "in": "15" },
                { "hub": "秦皇岛站", "in": "120" },
                { "hub": "山海关站", "in": "75" },
                { "hub": "石家庄北站", "in": "2025" },
                { "hub": "石家庄站", "in": "6255" },
                { "hub": "石家庄正定机场", "in": "195" },
                { "hub": "唐山北站", "in": "45" },
                { "hub": "唐山站", "in": "510" },
                { "hub": "塘沽站", "in": "105" },
                { "hub": "天津北站", "in": "330" },
                { "hub": "天津滨海机场", "in": "15" },
                { "hub": "天津西站", "in": "135" },
                { "hub": "天津站", "in": "1380" },
                { "hub": "武清站", "in": "45" },
                { "hub": "邢台东站", "in": "15" },
                { "hub": "邢台站", "in": "1275" },
                { "hub": "张家口站", "in": "315" },
                { "hub": "正定机场站", "in": "15" }],
            "北戴河站": [
                { "hub": "保定东站", "in": "45" },
                { "hub": "保定站", "in": "30" },
                { "hub": "北京北站", "in": "30" },
                { "hub": "北京南站", "in": "135" },
                { "hub": "北京首都机场", "in": "15" },
                { "hub": "北京西站", "in": "120" },
                { "hub": "北京站", "in": "2550" },
                { "hub": "滨海北站", "in": "45" },
                { "hub": "滨海西站", "in": "75" },
                { "hub": "沧州西站", "in": "15" },
                { "hub": "沧州站", "in": "75" },
                { "hub": "丰台站", "in": "30" },
                { "hub": "衡水站", "in": "45" },
                { "hub": "军粮城北站", "in": "30" },
                { "hub": "廊坊站", "in": "30" },
                { "hub": "石家庄北站", "in": "15" },
                { "hub": "石家庄站", "in": "30" },
                { "hub": "唐山北站", "in": "270" },
                { "hub": "唐山站", "in": "660" },
                { "hub": "塘沽站", "in": "60" },
                { "hub": "天津北站", "in": "225" },
                { "hub": "天津滨海机场", "in": "15" },
                { "hub": "天津西站", "in": "45" },
                { "hub": "天津站", "in": "660" }],
            "北京北站": [
                { "hub": "保定东站", "in": "375" },
                { "hub": "保定站", "in": "870" },
                { "hub": "北戴河站", "in": "90" },
                { "hub": "滨海西站", "in": "90" },
                { "hub": "滨海站", "in": "45" },
                { "hub": "沧州西站", "in": "615" },
                { "hub": "沧州站", "in": "30" },
                { "hub": "承德普宁机场", "in": "15" },
                { "hub": "承德站", "in": "45" },
                { "hub": "邯郸东站", "in": "165" },
                { "hub": "邯郸站", "in": "75" },
                { "hub": "衡水站", "in": "240" },
                { "hub": "廊坊北站", "in": "15" },
                { "hub": "廊坊站", "in": "285" },
                { "hub": "秦皇岛北戴河机场", "in": "15" },
                { "hub": "秦皇岛站", "in": "135" },
                { "hub": "山海关站", "in": "90" },
                { "hub": "石家庄北站", "in": "30" },
                { "hub": "石家庄站", "in": "510" },
                { "hub": "石家庄正定机场", "in": "15" },
                { "hub": "唐山北站", "in": "165" },
                { "hub": "唐山站", "in": "30" },
                { "hub": "塘沽站", "in": "105" },
                { "hub": "天津北站", "in": "30" },
                { "hub": "天津滨海机场", "in": "60" },
                { "hub": "天津西站", "in": "120" },
                { "hub": "天津站", "in": "765" },
                { "hub": "武清站", "in": "105" },
                { "hub": "邢台东站", "in": "15" },
                { "hub": "邢台站", "in": "15" },
                { "hub": "张家口宁远机场", "in": "15" },
                { "hub": "张家口站", "in": "150" },
                { "hub": "正定机场站", "in": "345" }],
            "北京大兴机场": [
                { "hub": "保定东站", "in": "75" },
                { "hub": "保定站", "in": "60" },
                { "hub": "滨海站", "in": "30" },
                { "hub": "沧州西站", "in": "45" },
                { "hub": "沧州站", "in": "30" },
                { "hub": "邯郸站", "in": "15" },
                { "hub": "衡水站", "in": "330" },
                { "hub": "廊坊北站", "in": "195" },
                { "hub": "廊坊站", "in": "885" },
                { "hub": "秦皇岛站", "in": "15" },
                { "hub": "石家庄北站", "in": "15" },
                { "hub": "石家庄站", "in": "15" },
                { "hub": "石家庄正定机场", "in": "75" },
                { "hub": "唐山站", "in": "60" },
                { "hub": "塘沽站", "in": "30" },
                { "hub": "天津北站", "in": "45" },
                { "hub": "天津滨海机场", "in": "195" },
                { "hub": "天津西站", "in": "30" },
                { "hub": "天津站", "in": "75" },
                { "hub": "张家口宁远机场", "in": "15" },
                { "hub": "张家口站", "in": "120" },
                { "hub": "正定机场站", "in": "30" }],
            "北京南站": [
                { "hub": "保定东站", "in": "630" },
                { "hub": "保定站", "in": "600" },
                { "hub": "北戴河站", "in": "255" },
                { "hub": "北京首都机场", "in": "23745" },
                { "hub": "滨海北站", "in": "105" },
                { "hub": "滨海西站", "in": "915" },
                { "hub": "滨海站", "in": "540" },
                { "hub": "沧州西站", "in": "9540" },
                { "hub": "沧州站", "in": "1140" },
                { "hub": "承德普宁机场", "in": "15" },
                { "hub": "承德站", "in": "165" },
                { "hub": "邯郸东站", "in": "285" },
                { "hub": "邯郸马头机场", "in": "15" },
                { "hub": "邯郸站", "in": "120" },
                { "hub": "衡水北站", "in": "45" },
                { "hub": "衡水站", "in": "825" },
                { "hub": "军粮城北站", "in": "90" },
                { "hub": "廊坊北站", "in": "300" },
                { "hub": "廊坊站", "in": "7965" },
                { "hub": "秦皇岛站", "in": "720" },
                { "hub": "山海关站", "in": "525" },
                { "hub": "石家庄北站", "in": "105" },
                { "hub": "石家庄站", "in": "660" },
                { "hub": "石家庄正定机场", "in": "75" },
                { "hub": "唐山北站", "in": "150" },
                { "hub": "唐山站", "in": "1245" },
                { "hub": "塘沽站", "in": "990" },
                { "hub": "天津北站", "in": "4035" },
                { "hub": "天津滨海机场", "in": "6405" },
                { "hub": "天津西站", "in": "3375" },
                { "hub": "天津站", "in": "33255" },
                { "hub": "武清站", "in": "5790" },
                { "hub": "邢台站", "in": "30" },
                { "hub": "张家口宁远机场", "in": "15" },
                { "hub": "张家口站", "in": "450" },
                { "hub": "正定机场站", "in": "210" }],
            "北京首都机场": [
                { "hub": "保定东站", "in": "330" },
                { "hub": "保定站", "in": "150" },
                { "hub": "北戴河站", "in": "90" },
                { "hub": "北京南站", "in": "18765" },
                { "hub": "北京西站", "in": "11640" },
                { "hub": "北京站", "in": "22815" },
                { "hub": "滨海西站", "in": "150" },
                { "hub": "滨海站", "in": "60" },
                { "hub": "沧州西站", "in": "135" },
                { "hub": "沧州站", "in": "75" },
                { "hub": "承德普宁机场", "in": "75" },
                { "hub": "承德站", "in": "195" },
                { "hub": "邯郸东站", "in": "75" },
                { "hub": "衡水北站", "in": "30" },
                { "hub": "衡水站", "in": "45" },
                { "hub": "军粮城北站", "in": "15" },
                { "hub": "廊坊北站", "in": "60" },
                { "hub": "廊坊站", "in": "585" },
                { "hub": "秦皇岛站", "in": "105" },
                { "hub": "山海关站", "in": "150" },
                { "hub": "石家庄北站", "in": "45" },
                { "hub": "石家庄站", "in": "120" },
                { "hub": "石家庄正定机场", "in": "120" },
                { "hub": "唐山北站", "in": "45" },
                { "hub": "唐山三女河机场", "in": "15" },
                { "hub": "唐山站", "in": "300" },
                { "hub": "塘沽站", "in": "75" },
                { "hub": "天津北站", "in": "240" },
                { "hub": "天津滨海机场", "in": "1500" },
                { "hub": "天津西站", "in": "75" },
                { "hub": "天津站", "in": "555" },
                { "hub": "武清站", "in": "60" },
                { "hub": "张家口宁远机场", "in": "75" },
                { "hub": "张家口站", "in": "345" },
                { "hub": "正定机场站", "in": "15" }],
            "北京西站": [
                { "hub": "保定东站", "in": "9075" },
                { "hub": "保定站", "in": "26790" },
                { "hub": "北戴河站", "in": "135" },
                { "hub": "北京首都机场", "in": "12405" },
                { "hub": "滨海西站", "in": "30" },
                { "hub": "滨海站", "in": "30" },
                { "hub": "沧州西站", "in": "810" },
                { "hub": "沧州站", "in": "165" },
                { "hub": "承德普宁机场", "in": "15" },
                { "hub": "承德站", "in": "120" },
                { "hub": "邯郸东站", "in": "10245" },
                { "hub": "邯郸马头机场", "in": "645" },
                { "hub": "邯郸站", "in": "3960" },
                { "hub": "衡水北站", "in": "15" },
                { "hub": "衡水站", "in": "5745" },
                { "hub": "廊坊北站", "in": "120" },
                { "hub": "廊坊站", "in": "570" },
                { "hub": "秦皇岛站", "in": "210" },
                { "hub": "山海关站", "in": "180" },
                { "hub": "石家庄北站", "in": "3435" },
                { "hub": "石家庄东站", "in": "30" },
                { "hub": "石家庄站", "in": "16635" },
                { "hub": "石家庄正定机场", "in": "870" },
                { "hub": "唐山北站", "in": "165" },
                { "hub": "唐山站", "in": "90" },
                { "hub": "塘沽站", "in": "75" },
                { "hub": "天津北站", "in": "210" },
                { "hub": "天津滨海机场", "in": "225" },
                { "hub": "天津西站", "in": "105" },
                { "hub": "天津站", "in": "1665" },
                { "hub": "武清站", "in": "300" },
                { "hub": "邢台东站", "in": "1050" },
                { "hub": "邢台站", "in": "885" },
                { "hub": "张家口宁远机场", "in": "15" },
                { "hub": "张家口站", "in": "615" },
                { "hub": "正定机场站", "in": "12015" }],
            "北京站": [
                { "hub": "保定东站", "in": "210" },
                { "hub": "保定站", "in": "1005" },
                { "hub": "北戴河站", "in": "8190" },
                { "hub": "北京首都机场", "in": "19545" },
                { "hub": "滨海西站", "in": "15" },
                { "hub": "滨海站", "in": "30" },
                { "hub": "沧州西站", "in": "480" },
                { "hub": "沧州站", "in": "360" },
                { "hub": "承德普宁机场", "in": "15" },
                { "hub": "承德站", "in": "270" },
                { "hub": "邯郸东站", "in": "90" },
                { "hub": "邯郸马头机场", "in": "30" },
                { "hub": "邯郸站", "in": "210" },
                { "hub": "衡水站", "in": "1545" },
                { "hub": "军粮城北站", "in": "15" },
                { "hub": "廊坊北站", "in": "60" },
                { "hub": "廊坊站", "in": "900" },
                { "hub": "秦皇岛北戴河机场", "in": "45" },
                { "hub": "秦皇岛站", "in": "6105" },
                { "hub": "山海关站", "in": "5415" },
                { "hub": "石家庄北站", "in": "165" },
                { "hub": "石家庄站", "in": "465" },
                { "hub": "石家庄正定机场", "in": "15" },
                { "hub": "唐山北站", "in": "10395" },
                { "hub": "唐山站", "in": "2385" },
                { "hub": "塘沽站", "in": "285" },
                { "hub": "天津北站", "in": "150" },
                { "hub": "天津滨海机场", "in": "180" },
                { "hub": "天津西站", "in": "180" },
                { "hub": "天津站", "in": "1065" },
                { "hub": "武清站", "in": "390" },
                { "hub": "邢台东站", "in": "15" },
                { "hub": "邢台站", "in": "30" },
                { "hub": "张家口宁远机场", "in": "45" },
                { "hub": "张家口站", "in": "1155" },
                { "hub": "正定机场站", "in": "45" }],
            "滨海北站": [
                { "hub": "保定东站", "in": "15" },
                { "hub": "保定站", "in": "15" },
                { "hub": "北戴河站", "in": "90" },
                { "hub": "北京大兴机场", "in": "15" },
                { "hub": "北京南站", "in": "90" },
                { "hub": "北京站", "in": "15" },
                { "hub": "沧州站", "in": "15" },
                { "hub": "邯郸东站", "in": "30" },
                { "hub": "邯郸站", "in": "15" },
                { "hub": "衡水站", "in": "15" },
                { "hub": "廊坊站", "in": "30" },
                { "hub": "秦皇岛站", "in": "90" },
                { "hub": "山海关站", "in": "30" },
                { "hub": "石家庄北站", "in": "15" },
                { "hub": "石家庄站", "in": "45" },
                { "hub": "唐山站", "in": "435" }],
            "滨海西站": [
                { "hub": "保定东站", "in": "15" },
                { "hub": "北戴河站", "in": "345" },
                { "hub": "北京北站", "in": "30" },
                { "hub": "北京大兴机场", "in": "15" },
                { "hub": "北京南站", "in": "405" },
                { "hub": "北京首都机场", "in": "165" },
                { "hub": "北京西站", "in": "30" },
                { "hub": "北京站", "in": "30" },
                { "hub": "沧州西站", "in": "270" },
                { "hub": "衡水北站", "in": "15" },
                { "hub": "衡水站", "in": "15" },
                { "hub": "秦皇岛站", "in": "540" },
                { "hub": "清河站", "in": "30" },
                { "hub": "山海关站", "in": "465" },
                { "hub": "石家庄站", "in": "45" },
                { "hub": "唐山北站", "in": "15" },
                { "hub": "唐山站", "in": "2505" },
                { "hub": "邢台站", "in": "15" },
                { "hub": "张家口站", "in": "15" },
                { "hub": "正定机场站", "in": "120" }],
            "滨海站": [
                { "hub": "保定站", "in": "15" },
                { "hub": "北京北站", "in": "15" },
                { "hub": "北京南站", "in": "675" },
                { "hub": "北京首都机场", "in": "45" },
                { "hub": "北京西站", "in": "15" },
                { "hub": "北京站", "in": "30" },
                { "hub": "沧州西站", "in": "15" },
                { "hub": "沧州站", "in": "15" },
                { "hub": "衡水站", "in": "15" },
                { "hub": "廊坊北站", "in": "15" },
                { "hub": "廊坊站", "in": "15" },
                { "hub": "秦皇岛站", "in": "15" },
                { "hub": "唐山站", "in": "135" }],
            "沧州西站": [
                { "hub": "保定东站", "in": "90" },
                { "hub": "北戴河站", "in": "45" },
                { "hub": "北京北站", "in": "135" },
                { "hub": "北京南站", "in": "13020" },
                { "hub": "北京首都机场", "in": "75" },
                { "hub": "北京西站", "in": "135" },
                { "hub": "北京站", "in": "105" },
                { "hub": "滨海西站", "in": "75" },
                { "hub": "滨海站", "in": "15" },
                { "hub": "丰台站", "in": "30" },
                { "hub": "衡水站", "in": "75" },
                { "hub": "廊坊北站", "in": "15" },
                { "hub": "廊坊站", "in": "465" },
                { "hub": "秦皇岛站", "in": "90" },
                { "hub": "清河站", "in": "15" },
                { "hub": "山海关站", "in": "30" },
                { "hub": "唐山站", "in": "180" },
                { "hub": "塘沽站", "in": "30" },
                { "hub": "天津北站", "in": "60" },
                { "hub": "天津滨海机场", "in": "135" },
                { "hub": "天津西站", "in": "585" },
                { "hub": "天津站", "in": "705" },
                { "hub": "武清站", "in": "15" },
                { "hub": "正定机场站", "in": "45" }],
            "沧州站": [
                { "hub": "保定东站", "in": "15" },
                { "hub": "保定站", "in": "30" },
                { "hub": "北戴河站", "in": "45" },
                { "hub": "北京北站", "in": "75" },
                { "hub": "北京南站", "in": "1515" },
                { "hub": "北京首都机场", "in": "495" },
                { "hub": "北京西站", "in": "120" },
                { "hub": "北京站", "in": "420" },
                { "hub": "滨海北站", "in": "15" },
                { "hub": "滨海西站", "in": "45" },
                { "hub": "承德站", "in": "15" },
                { "hub": "丰台站", "in": "45" },
                { "hub": "邯郸马头机场", "in": "15" },
                { "hub": "邯郸站", "in": "30" },
                { "hub": "衡水北站", "in": "15" },
                { "hub": "衡水站", "in": "495" },
                { "hub": "军粮城北站", "in": "60" },
                { "hub": "廊坊北站", "in": "30" },
                { "hub": "廊坊站", "in": "180" },
                { "hub": "秦皇岛站", "in": "60" },
                { "hub": "清河站", "in": "15" },
                { "hub": "山海关站", "in": "45" },
                { "hub": "石家庄北站", "in": "450" },
                { "hub": "石家庄站", "in": "30" },
                { "hub": "石家庄正定机场", "in": "15" },
                { "hub": "唐山站", "in": "375" },
                { "hub": "塘沽站", "in": "390" },
                { "hub": "天津北站", "in": "1155" },
                { "hub": "天津滨海机场", "in": "90" },
                { "hub": "天津西站", "in": "930" },
                { "hub": "天津站", "in": "1545" },
                { "hub": "武清站", "in": "180" },
                { "hub": "邢台站", "in": "15" },
                { "hub": "张家口站", "in": "165" }],
            "承德普宁机场": [
                { "hub": "北京南站", "in": "15" },
                { "hub": "北京站", "in": "15" },
                { "hub": "唐山站", "in": "15" },
                { "hub": "张家口宁远机场", "in": "15" }],
            "承德站": [
                { "hub": "保定东站", "in": "15" },
                { "hub": "保定站", "in": "60" },
                { "hub": "北京北站", "in": "15" },
                { "hub": "北京南站", "in": "60" },
                { "hub": "北京首都机场", "in": "240" },
                { "hub": "北京西站", "in": "75" },
                { "hub": "北京站", "in": "735" },
                { "hub": "沧州站", "in": "15" },
                { "hub": "丰台站", "in": "30" },
                { "hub": "衡水站", "in": "30" },
                { "hub": "廊坊站", "in": "45" },
                { "hub": "秦皇岛站", "in": "75" },
                { "hub": "石家庄北站", "in": "15" },
                { "hub": "石家庄站", "in": "45" },
                { "hub": "唐山北站", "in": "165" },
                { "hub": "唐山站", "in": "135" },
                { "hub": "天津北站", "in": "75" },
                { "hub": "天津站", "in": "180" },
                { "hub": "正定机场站", "in": "15" }],
            "丰台站": [
                { "hub": "保定东站", "in": "195" },
                { "hub": "保定站", "in": "1095" },
                { "hub": "滨海站", "in": "15" },
                { "hub": "沧州西站", "in": "75" },
                { "hub": "沧州站", "in": "195" },
                { "hub": "承德普宁机场", "in": "15" },
                { "hub": "承德站", "in": "90" },
                { "hub": "邯郸东站", "in": "15" },
                { "hub": "邯郸站", "in": "60" },
                { "hub": "衡水站", "in": "345" },
                { "hub": "廊坊北站", "in": "30" },
                { "hub": "廊坊站", "in": "375" },
                { "hub": "秦皇岛站", "in": "75" },
                { "hub": "山海关站", "in": "15" },
                { "hub": "石家庄北站", "in": "150" },
                { "hub": "石家庄东站", "in": "15" },
                { "hub": "石家庄站", "in": "60" },
                { "hub": "石家庄正定机场", "in": "45" },
                { "hub": "唐山北站", "in": "30" },
                { "hub": "唐山站", "in": "135" },
                { "hub": "塘沽站", "in": "15" },
                { "hub": "天津北站", "in": "150" },
                { "hub": "天津滨海机场", "in": "150" },
                { "hub": "天津西站", "in": "150" },
                { "hub": "天津站", "in": "1065" },
                { "hub": "武清站", "in": "75" },
                { "hub": "邢台站", "in": "15" },
                { "hub": "张家口宁远机场", "in": "15" },
                { "hub": "张家口站", "in": "645" },
                { "hub": "正定机场站", "in": "90" }],
            "邯郸东站": [
                { "hub": "保定东站", "in": "495" },
                { "hub": "保定站", "in": "30" },
                { "hub": "北京北站", "in": "45" },
                { "hub": "北京南站", "in": "15" },
                { "hub": "北京首都机场", "in": "60" },
                { "hub": "北京西站", "in": "2880" },
                { "hub": "北京站", "in": "60" },
                { "hub": "滨海西站", "in": "15" },
                { "hub": "沧州西站", "in": "30" },
                { "hub": "衡水北站", "in": "15" },
                { "hub": "衡水站", "in": "45" },
                { "hub": "军粮城北站", "in": "15" },
                { "hub": "廊坊站", "in": "30" },
                { "hub": "秦皇岛站", "in": "30" },
                { "hub": "石家庄北站", "in": "210" },
                { "hub": "石家庄站", "in": "2745" },
                { "hub": "石家庄正定机场", "in": "105" },
                { "hub": "唐山站", "in": "75" },
                { "hub": "天津西站", "in": "165" },
                { "hub": "天津站", "in": "195" },
                { "hub": "邢台东站", "in": "510" },
                { "hub": "邢台站", "in": "45" },
                { "hub": "正定机场站", "in": "405" }],
            "邯郸马头机场": [
                { "hub": "保定站", "in": "1155" },
                { "hub": "北京北站", "in": "30" },
                { "hub": "北京南站", "in": "90" },
                { "hub": "北京西站", "in": "1275" },
                { "hub": "北京站", "in": "75" },
                { "hub": "丰台站", "in": "120" },
                { "hub": "廊坊北站", "in": "15" },
                { "hub": "石家庄北站", "in": "240" },
                { "hub": "石家庄站", "in": "1245" },
                { "hub": "石家庄正定机场", "in": "15" },
                { "hub": "唐山站", "in": "195" },
                { "hub": "塘沽站", "in": "15" },
                { "hub": "天津北站", "in": "45" },
                { "hub": "天津站", "in": "90" },
                { "hub": "邢台东站", "in": "15" },
                { "hub": "邢台站", "in": "615" }],
            "邯郸站": [
                { "hub": "保定东站", "in": "225" },
                { "hub": "保定站", "in": "1110" },
                { "hub": "北京北站", "in": "30" },
                { "hub": "北京南站", "in": "90" },
                { "hub": "北京西站", "in": "3105" },
                { "hub": "北京站", "in": "90" },
                { "hub": "沧州西站", "in": "15" },
                { "hub": "沧州站", "in": "90" },
                { "hub": "丰台站", "in": "60" },
                { "hub": "衡水北站", "in": "15" },
                { "hub": "衡水站", "in": "135" },
                { "hub": "廊坊站", "in": "15" },
                { "hub": "山海关站", "in": "30" },
                { "hub": "石家庄北站", "in": "390" },
                { "hub": "石家庄站", "in": "3855" },
                { "hub": "石家庄正定机场", "in": "30" },
                { "hub": "唐山站", "in": "60" },
                { "hub": "塘沽站", "in": "150" },
                { "hub": "天津北站", "in": "30" },
                { "hub": "天津站", "in": "270" },
                { "hub": "邢台东站", "in": "105" },
                { "hub": "邢台站", "in": "1905" },
                { "hub": "张家口站", "in": "15" },
                { "hub": "正定机场站", "in": "45" }],
            "衡水北站": [
                { "hub": "保定东站", "in": "30" },
                { "hub": "北京大兴机场", "in": "15" },
                { "hub": "北京南站", "in": "30" },
                { "hub": "北京首都机场", "in": "60" },
                { "hub": "北京西站", "in": "15" },
                { "hub": "沧州西站", "in": "30" },
                { "hub": "丰台站", "in": "15" },
                { "hub": "清河站", "in": "15" },
                { "hub": "石家庄北站", "in": "30" },
                { "hub": "石家庄站", "in": "15" },
                { "hub": "石家庄正定机场", "in": "45" },
                { "hub": "塘沽站", "in": "15" },
                { "hub": "天津站", "in": "15" }],
            "衡水站": [
                { "hub": "保定东站", "in": "15" },
                { "hub": "保定站", "in": "60" },
                { "hub": "北京北站", "in": "60" },
                { "hub": "北京大兴机场", "in": "375" },
                { "hub": "北京南站", "in": "360" },
                { "hub": "北京首都机场", "in": "30" },
                { "hub": "北京西站", "in": "6330" },
                { "hub": "北京站", "in": "870" },
                { "hub": "滨海西站", "in": "45" },
                { "hub": "滨海站", "in": "15" },
                { "hub": "沧州西站", "in": "15" },
                { "hub": "沧州站", "in": "585" },
                { "hub": "丰台站", "in": "30" },
                { "hub": "邯郸东站", "in": "45" },
                { "hub": "邯郸马头机场", "in": "15" },
                { "hub": "邯郸站", "in": "165" },
                { "hub": "军粮城北站", "in": "30" },
                { "hub": "廊坊站", "in": "30" },
                { "hub": "秦皇岛站", "in": "75" },
                { "hub": "山海关站", "in": "45" },
                { "hub": "石家庄北站", "in": "6435" },
                { "hub": "石家庄东站", "in": "105" },
                { "hub": "石家庄站", "in": "150" },
                { "hub": "石家庄正定机场", "in": "105" },
                { "hub": "唐山站", "in": "180" },
                { "hub": "塘沽站", "in": "255" },
                { "hub": "天津北站", "in": "375" },
                { "hub": "天津滨海机场", "in": "15" },
                { "hub": "天津西站", "in": "45" },
                { "hub": "天津站", "in": "915" },
                { "hub": "武清站", "in": "30" },
                { "hub": "邢台站", "in": "90" },
                { "hub": "张家口宁远机场", "in": "15" },
                { "hub": "张家口站", "in": "405" }],
            "军粮城北站": [
                { "hub": "保定东站", "in": "15" },
                { "hub": "北戴河站", "in": "45" },
                { "hub": "北京大兴机场", "in": "15" },
                { "hub": "北京南站", "in": "75" },
                { "hub": "北京首都机场", "in": "15" },
                { "hub": "北京站", "in": "15" },
                { "hub": "沧州西站", "in": "15" },
                { "hub": "承德站", "in": "15" },
                { "hub": "邯郸东站", "in": "15" },
                { "hub": "衡水站", "in": "45" },
                { "hub": "廊坊站", "in": "15" },
                { "hub": "秦皇岛站", "in": "45" },
                { "hub": "山海关站", "in": "75" },
                { "hub": "唐山站", "in": "195" },
                { "hub": "正定机场站", "in": "30" }],
            "廊坊北站": [
                { "hub": "保定东站", "in": "30" },
                { "hub": "北京大兴机场", "in": "135" },
                { "hub": "北京南站", "in": "315" },
                { "hub": "北京首都机场", "in": "60" },
                { "hub": "北京西站", "in": "60" },
                { "hub": "北京站", "in": "105" },
                { "hub": "沧州西站", "in": "15" },
                { "hub": "沧州站", "in": "30" },
                { "hub": "衡水站", "in": "15" },
                { "hub": "秦皇岛站", "in": "15" },
                { "hub": "石家庄站", "in": "15" },
                { "hub": "唐山站", "in": "60" },
                { "hub": "塘沽站", "in": "15" },
                { "hub": "天津北站", "in": "15" },
                { "hub": "天津滨海机场", "in": "60" },
                { "hub": "天津西站", "in": "15" },
                { "hub": "天津站", "in": "45" },
                { "hub": "武清站", "in": "90" },
                { "hub": "邢台站", "in": "15" }],
            "廊坊站": [
                { "hub": "保定东站", "in": "105" },
                { "hub": "保定站", "in": "375" },
                { "hub": "北戴河站", "in": "30" },
                { "hub": "北京北站", "in": "75" },
                { "hub": "北京大兴机场", "in": "690" },
                { "hub": "北京南站", "in": "7065" },
                { "hub": "北京首都机场", "in": "345" },
                { "hub": "北京西站", "in": "525" },
                { "hub": "北京站", "in": "780" },
                { "hub": "滨海西站", "in": "15" },
                { "hub": "沧州西站", "in": "615" },
                { "hub": "沧州站", "in": "270" },
                { "hub": "丰台站", "in": "195" },
                { "hub": "邯郸东站", "in": "15" },
                { "hub": "邯郸站", "in": "75" },
                { "hub": "衡水站", "in": "60" },
                { "hub": "军粮城北站", "in": "15" },
                { "hub": "秦皇岛站", "in": "30" },
                { "hub": "清河站", "in": "30" },
                { "hub": "山海关站", "in": "15" },
                { "hub": "石家庄北站", "in": "75" },
                { "hub": "石家庄站", "in": "165" },
                { "hub": "石家庄正定机场", "in": "75" },
                { "hub": "唐山北站", "in": "15" },
                { "hub": "唐山站", "in": "315" },
                { "hub": "塘沽站", "in": "90" },
                { "hub": "天津北站", "in": "255" },
                { "hub": "天津滨海机场", "in": "375" },
                { "hub": "天津西站", "in": "8040" },
                { "hub": "天津站", "in": "1320" },
                { "hub": "武清站", "in": "330" },
                { "hub": "邢台东站", "in": "15" },
                { "hub": "邢台站", "in": "30" },
                { "hub": "张家口站", "in": "60" },
                { "hub": "正定机场站", "in": "135" }],
            "秦皇岛北戴河机场": [
                { "hub": "石家庄正定机场", "in": "60" }],
            "秦皇岛站": [
                { "hub": "保定东站", "in": "120" },
                { "hub": "保定站", "in": "90" },
                { "hub": "北京北站", "in": "60" },
                { "hub": "北京大兴机场", "in": "45" },
                { "hub": "北京南站", "in": "360" },
                { "hub": "北京首都机场", "in": "135" },
                { "hub": "北京西站", "in": "135" },
                { "hub": "北京站", "in": "4860" },
                { "hub": "滨海北站", "in": "75" },
                { "hub": "滨海西站", "in": "255" },
                { "hub": "滨海站", "in": "30" },
                { "hub": "沧州西站", "in": "150" },
                { "hub": "沧州站", "in": "60" },
                { "hub": "承德站", "in": "60" },
                { "hub": "丰台站", "in": "105" },
                { "hub": "邯郸东站", "in": "15" },
                { "hub": "邯郸站", "in": "15" },
                { "hub": "衡水站", "in": "135" },
                { "hub": "军粮城北站", "in": "90" },
                { "hub": "廊坊北站", "in": "15" },
                { "hub": "廊坊站", "in": "60" },
                { "hub": "清河站", "in": "15" },
                { "hub": "石家庄北站", "in": "45" },
                { "hub": "石家庄站", "in": "105" },
                { "hub": "石家庄正定机场", "in": "30" },
                { "hub": "唐山北站", "in": "555" },
                { "hub": "唐山三女河机场", "in": "15" },
                { "hub": "唐山站", "in": "1395" },
                { "hub": "塘沽站", "in": "105" },
                { "hub": "天津北站", "in": "450" },
                { "hub": "天津滨海机场", "in": "150" },
                { "hub": "天津西站", "in": "195" },
                { "hub": "天津站", "in": "1695" },
                { "hub": "武清站", "in": "30" },
                { "hub": "正定机场站", "in": "60" }],
            "清河站": [
                { "hub": "保定东站", "in": "105" },
                { "hub": "保定站", "in": "90" },
                { "hub": "滨海西站", "in": "75" },
                { "hub": "沧州西站", "in": "30" },
                { "hub": "沧州站", "in": "15" },
                { "hub": "承德普宁机场", "in": "15" },
                { "hub": "承德站", "in": "30" },
                { "hub": "邯郸东站", "in": "45" },
                { "hub": "衡水站", "in": "15" },
                { "hub": "军粮城北站", "in": "15" },
                { "hub": "廊坊站", "in": "30" },
                { "hub": "秦皇岛站", "in": "30" },
                { "hub": "石家庄北站", "in": "15" },
                { "hub": "石家庄站", "in": "135" },
                { "hub": "唐山北站", "in": "30" },
                { "hub": "唐山站", "in": "15" },
                { "hub": "天津滨海机场", "in": "150" },
                { "hub": "天津站", "in": "105" },
                { "hub": "武清站", "in": "45" },
                { "hub": "邢台东站", "in": "15" },
                { "hub": "张家口宁远机场", "in": "60" },
                { "hub": "张家口站", "in": "60" },
                { "hub": "正定机场站", "in": "30" }],
            "山海关站": [
                { "hub": "保定东站", "in": "75" },
                { "hub": "保定站", "in": "30" },
                { "hub": "北京北站", "in": "120" },
                { "hub": "北京南站", "in": "450" },
                { "hub": "北京首都机场", "in": "60" },
                { "hub": "北京西站", "in": "165" },
                { "hub": "北京站", "in": "3825" },
                { "hub": "滨海北站", "in": "30" },
                { "hub": "滨海西站", "in": "315" },
                { "hub": "沧州西站", "in": "165" },
                { "hub": "沧州站", "in": "225" },
                { "hub": "丰台站", "in": "30" },
                { "hub": "邯郸东站", "in": "15" },
                { "hub": "邯郸马头机场", "in": "15" },
                { "hub": "邯郸站", "in": "60" },
                { "hub": "衡水站", "in": "195" },
                { "hub": "军粮城北站", "in": "165" },
                { "hub": "廊坊站", "in": "75" },
                { "hub": "石家庄站", "in": "135" },
                { "hub": "唐山北站", "in": "705" },
                { "hub": "唐山站", "in": "1050" },
                { "hub": "塘沽站", "in": "150" },
                { "hub": "天津北站", "in": "465" },
                { "hub": "天津滨海机场", "in": "105" },
                { "hub": "天津西站", "in": "60" },
                { "hub": "天津站", "in": "1275" },
                { "hub": "武清站", "in": "15" },
                { "hub": "正定机场站", "in": "30" }],
            "石家庄北站": [
                { "hub": "保定东站", "in": "30" },
                { "hub": "保定站", "in": "3120" },
                { "hub": "北戴河站", "in": "15" },
                { "hub": "北京北站", "in": "90" },
                { "hub": "北京大兴机场", "in": "15" },
                { "hub": "北京南站", "in": "450" },
                { "hub": "北京首都机场", "in": "30" },
                { "hub": "北京西站", "in": "4275" },
                { "hub": "北京站", "in": "105" },
                { "hub": "滨海北站", "in": "15" },
                { "hub": "滨海西站", "in": "15" },
                { "hub": "沧州西站", "in": "30" },
                { "hub": "沧州站", "in": "1335" },
                { "hub": "丰台站", "in": "150" },
                { "hub": "邯郸东站", "in": "345" },
                { "hub": "邯郸马头机场", "in": "90" },
                { "hub": "邯郸站", "in": "1170" },
                { "hub": "衡水北站", "in": "45" },
                { "hub": "衡水站", "in": "9720" },
                { "hub": "军粮城北站", "in": "15" },
                { "hub": "廊坊站", "in": "45" },
                { "hub": "唐山站", "in": "210" },
                { "hub": "塘沽站", "in": "150" },
                { "hub": "天津北站", "in": "285" },
                { "hub": "天津西站", "in": "30" },
                { "hub": "天津站", "in": "1260" },
                { "hub": "邢台东站", "in": "60" },
                { "hub": "邢台站", "in": "585" },
                { "hub": "张家口站", "in": "30" }],
            "石家庄东站": [
                { "hub": "丰台站", "in": "15" },
                { "hub": "邯郸站", "in": "45" },
                { "hub": "衡水站", "in": "105" },
                { "hub": "天津站", "in": "15" },
                { "hub": "邢台站", "in": "15" }],
            "石家庄站": [
                { "hub": "保定东站", "in": "4230" },
                { "hub": "保定站", "in": "9000" },
                { "hub": "北戴河站", "in": "90" },
                { "hub": "北京北站", "in": "630" },
                { "hub": "北京大兴机场", "in": "15" },
                { "hub": "北京南站", "in": "885" },
                { "hub": "北京首都机场", "in": "210" },
                { "hub": "北京西站", "in": "39975" },
                { "hub": "北京站", "in": "435" },
                { "hub": "滨海北站", "in": "45" },
                { "hub": "滨海西站", "in": "255" },
                { "hub": "滨海站", "in": "30" },
                { "hub": "沧州西站", "in": "75" },
                { "hub": "沧州站", "in": "30" },
                { "hub": "承德站", "in": "45" },
                { "hub": "丰台站", "in": "300" },
                { "hub": "邯郸东站", "in": "4590" },
                { "hub": "邯郸马头机场", "in": "615" },
                { "hub": "邯郸站", "in": "4545" },
                { "hub": "衡水北站", "in": "15" },
                { "hub": "衡水站", "in": "195" },
                { "hub": "军粮城北站", "in": "90" },
                { "hub": "廊坊站", "in": "225" },
                { "hub": "秦皇岛北戴河机场", "in": "15" },
                { "hub": "秦皇岛站", "in": "240" },
                { "hub": "清河站", "in": "90" },
                { "hub": "山海关站", "in": "60" },
                { "hub": "唐山站", "in": "1080" },
                { "hub": "塘沽站", "in": "165" },
                { "hub": "天津北站", "in": "150" },
                { "hub": "天津滨海机场", "in": "135" },
                { "hub": "天津西站", "in": "2115" },
                { "hub": "天津站", "in": "2340" },
                { "hub": "武清站", "in": "60" },
                { "hub": "邢台东站", "in": "915" },
                { "hub": "邢台站", "in": "3270" },
                { "hub": "张家口宁远机场", "in": "15" },
                { "hub": "张家口站", "in": "255" },
                { "hub": "正定机场站", "in": "2595" }],
            "石家庄正定机场": [
                { "hub": "保定东站", "in": "735" },
                { "hub": "保定站", "in": "120" },
                { "hub": "北京大兴机场", "in": "15" },
                { "hub": "北京南站", "in": "75" },
                { "hub": "北京首都机场", "in": "30" },
                { "hub": "北京西站", "in": "750" },
                { "hub": "北京站", "in": "30" },
                { "hub": "滨海北站", "in": "15" },
                { "hub": "沧州站", "in": "15" },
                { "hub": "丰台站", "in": "15" },
                { "hub": "邯郸东站", "in": "330" },
                { "hub": "邯郸马头机场", "in": "15" },
                { "hub": "邯郸站", "in": "90" },
                { "hub": "衡水北站", "in": "15" },
                { "hub": "衡水站", "in": "270" },
                { "hub": "廊坊北站", "in": "15" },
                { "hub": "廊坊站", "in": "15" },
                { "hub": "秦皇岛北戴河机场", "in": "180" },
                { "hub": "秦皇岛站", "in": "15" },
                { "hub": "清河站", "in": "15" },
                { "hub": "天津滨海机场", "in": "75" },
                { "hub": "天津西站", "in": "30" },
                { "hub": "天津站", "in": "30" },
                { "hub": "邢台东站", "in": "105" },
                { "hub": "邢台站", "in": "60" },
                { "hub": "张家口宁远机场", "in": "210" },
                { "hub": "张家口站", "in": "15" },
                { "hub": "正定机场站", "in": "13965" }],
            "唐山北站": [
                { "hub": "保定东站", "in": "15" },
                { "hub": "保定站", "in": "30" },
                { "hub": "北戴河站", "in": "480" },
                { "hub": "北京北站", "in": "135" },
                { "hub": "北京南站", "in": "90" },
                { "hub": "北京首都机场", "in": "75" },
                { "hub": "北京西站", "in": "165" },
                { "hub": "北京站", "in": "6030" },
                { "hub": "沧州站", "in": "15" },
                { "hub": "承德站", "in": "45" },
                { "hub": "丰台站", "in": "30" },
                { "hub": "衡水站", "in": "15" },
                { "hub": "秦皇岛站", "in": "645" },
                { "hub": "山海关站", "in": "750" },
                { "hub": "天津北站", "in": "15" },
                { "hub": "天津滨海机场", "in": "30" },
                { "hub": "天津站", "in": "90" },
                { "hub": "张家口站", "in": "15" }],
            "唐山三女河机场": [
                { "hub": "清河站", "in": "15" },
                { "hub": "山海关站", "in": "15" },
                { "hub": "石家庄正定机场", "in": "15" },
                { "hub": "天津北站", "in": "15" },
                { "hub": "武清站", "in": "15" }],
            "唐山站": [
                { "hub": "保定东站", "in": "150" },
                { "hub": "保定站", "in": "315" },
                { "hub": "北戴河站", "in": "1110" },
                { "hub": "北京北站", "in": "75" },
                { "hub": "北京大兴机场", "in": "15" },
                { "hub": "北京南站", "in": "1095" },
                { "hub": "北京首都机场", "in": "375" },
                { "hub": "北京西站", "in": "90" },
                { "hub": "北京站", "in": "1695" },
                { "hub": "滨海北站", "in": "345" },
                { "hub": "滨海西站", "in": "1455" },
                { "hub": "滨海站", "in": "45" },
                { "hub": "沧州西站", "in": "150" },
                { "hub": "沧州站", "in": "390" },
                { "hub": "承德普宁机场", "in": "15" },
                { "hub": "承德站", "in": "165" },
                { "hub": "丰台站", "in": "120" },
                { "hub": "邯郸东站", "in": "45" },
                { "hub": "邯郸站", "in": "120" },
                { "hub": "衡水站", "in": "390" },
                { "hub": "军粮城北站", "in": "135" },
                { "hub": "廊坊北站", "in": "45" },
                { "hub": "廊坊站", "in": "225" },
                { "hub": "秦皇岛站", "in": "1935" },
                { "hub": "清河站", "in": "30" },
                { "hub": "山海关站", "in": "945" },
                { "hub": "石家庄北站", "in": "105" },
                { "hub": "石家庄站", "in": "180" },
                { "hub": "石家庄正定机场", "in": "15" },
                { "hub": "塘沽站", "in": "1050" },
                { "hub": "天津北站", "in": "870" },
                { "hub": "天津滨海机场", "in": "1080" },
                { "hub": "天津西站", "in": "540" },
                { "hub": "天津站", "in": "5205" },
                { "hub": "武清站", "in": "180" },
                { "hub": "邢台东站", "in": "15" },
                { "hub": "邢台站", "in": "30" },
                { "hub": "张家口宁远机场", "in": "15" },
                { "hub": "张家口站", "in": "45" },
                { "hub": "正定机场站", "in": "135" }],
            "塘沽站": [
                { "hub": "保定站", "in": "90" },
                { "hub": "北戴河站", "in": "120" },
                { "hub": "北京北站", "in": "15" },
                { "hub": "北京大兴机场", "in": "15" },
                { "hub": "北京南站", "in": "870" },
                { "hub": "北京首都机场", "in": "60" },
                { "hub": "北京站", "in": "60" },
                { "hub": "沧州西站", "in": "45" },
                { "hub": "沧州站", "in": "135" },
                { "hub": "承德站", "in": "15" },
                { "hub": "丰台站", "in": "15" },
                { "hub": "邯郸马头机场", "in": "15" },
                { "hub": "邯郸站", "in": "30" },
                { "hub": "衡水站", "in": "90" },
                { "hub": "廊坊站", "in": "30" },
                { "hub": "秦皇岛站", "in": "60" },
                { "hub": "山海关站", "in": "300" },
                { "hub": "石家庄北站", "in": "30" },
                { "hub": "石家庄站", "in": "30" },
                { "hub": "唐山北站", "in": "15" },
                { "hub": "唐山站", "in": "1170" }],
            "天津北站": [
                { "hub": "保定东站", "in": "45" },
                { "hub": "保定站", "in": "1140" },
                { "hub": "北戴河站", "in": "120" },
                { "hub": "北京北站", "in": "60" },
                { "hub": "北京大兴机场", "in": "45" },
                { "hub": "北京南站", "in": "7035" },
                { "hub": "北京首都机场", "in": "270" },
                { "hub": "北京西站", "in": "390" },
                { "hub": "北京站", "in": "525" },
                { "hub": "沧州西站", "in": "210" },
                { "hub": "沧州站", "in": "720" },
                { "hub": "丰台站", "in": "195" },
                { "hub": "邯郸东站", "in": "45" },
                { "hub": "邯郸马头机场", "in": "15" },
                { "hub": "邯郸站", "in": "210" },
                { "hub": "衡水站", "in": "315" },
                { "hub": "廊坊北站", "in": "15" },
                { "hub": "廊坊站", "in": "510" },
                { "hub": "秦皇岛站", "in": "180" },
                { "hub": "山海关站", "in": "105" },
                { "hub": "石家庄北站", "in": "600" },
                { "hub": "石家庄站", "in": "195" },
                { "hub": "石家庄正定机场", "in": "60" },
                { "hub": "唐山站", "in": "1710" },
                { "hub": "邢台站", "in": "45" },
                { "hub": "张家口站", "in": "135" }],
            "天津滨海机场": [
                { "hub": "保定东站", "in": "120" },
                { "hub": "保定站", "in": "150" },
                { "hub": "北戴河站", "in": "90" },
                { "hub": "北京北站", "in": "90" },
                { "hub": "北京大兴机场", "in": "105" },
                { "hub": "北京南站", "in": "7320" },
                { "hub": "北京首都机场", "in": "1215" },
                { "hub": "北京西站", "in": "210" },
                { "hub": "北京站", "in": "240" },
                { "hub": "沧州西站", "in": "390" },
                { "hub": "沧州站", "in": "195" },
                { "hub": "丰台站", "in": "90" },
                { "hub": "邯郸马头机场", "in": "30" },
                { "hub": "衡水站", "in": "90" },
                { "hub": "廊坊北站", "in": "45" },
                { "hub": "廊坊站", "in": "465" },
                { "hub": "秦皇岛站", "in": "195" },
                { "hub": "清河站", "in": "120" },
                { "hub": "山海关站", "in": "60" },
                { "hub": "石家庄北站", "in": "15" },
                { "hub": "石家庄站", "in": "60" },
                { "hub": "石家庄正定机场", "in": "30" },
                { "hub": "唐山北站", "in": "30" },
                { "hub": "唐山站", "in": "900" },
                { "hub": "天津西站", "in": "3810" },
                { "hub": "天津站", "in": "44685" },
                { "hub": "邢台东站", "in": "30" },
                { "hub": "邢台站", "in": "15" },
                { "hub": "张家口站", "in": "15" },
                { "hub": "正定机场站", "in": "45" }],
            "天津西站": [
                { "hub": "保定东站", "in": "1425" },
                { "hub": "保定站", "in": "75" },
                { "hub": "北戴河站", "in": "165" },
                { "hub": "北京北站", "in": "90" },
                { "hub": "北京大兴机场", "in": "30" },
                { "hub": "北京南站", "in": "3120" },
                { "hub": "北京首都机场", "in": "60" },
                { "hub": "北京西站", "in": "180" },
                { "hub": "北京站", "in": "450" },
                { "hub": "沧州西站", "in": "1455" },
                { "hub": "沧州站", "in": "615" },
                { "hub": "承德站", "in": "15" },
                { "hub": "丰台站", "in": "120" },
                { "hub": "邯郸东站", "in": "300" },
                { "hub": "衡水站", "in": "15" },
                { "hub": "廊坊北站", "in": "30" },
                { "hub": "廊坊站", "in": "12780" },
                { "hub": "秦皇岛站", "in": "615" },
                { "hub": "山海关站", "in": "165" },
                { "hub": "石家庄北站", "in": "60" },
                { "hub": "石家庄站", "in": "795" },
                { "hub": "石家庄正定机场", "in": "30" },
                { "hub": "唐山三女河机场", "in": "15" },
                { "hub": "唐山站", "in": "1245" },
                { "hub": "天津滨海机场", "in": "4020" },
                { "hub": "邢台东站", "in": "135" },
                { "hub": "邢台站", "in": "15" },
                { "hub": "张家口站", "in": "270" },
                { "hub": "正定机场站", "in": "960" }],
            "天津站": [
                { "hub": "保定东站", "in": "750" },
                { "hub": "保定站", "in": "1605" },
                { "hub": "北戴河站", "in": "1155" },
                { "hub": "北京北站", "in": "450" },
                { "hub": "北京大兴机场", "in": "30" },
                { "hub": "北京南站", "in": "69480" },
                { "hub": "北京首都机场", "in": "405" },
                { "hub": "北京西站", "in": "885" },
                { "hub": "北京站", "in": "780" },
                { "hub": "沧州西站", "in": "3090" },
                { "hub": "沧州站", "in": "1425" },
                { "hub": "承德站", "in": "75" },
                { "hub": "丰台站", "in": "330" },
                { "hub": "邯郸东站", "in": "390" },
                { "hub": "邯郸马头机场", "in": "60" },
                { "hub": "邯郸站", "in": "330" },
                { "hub": "衡水北站", "in": "15" },
                { "hub": "衡水站", "in": "2145" },
                { "hub": "廊坊北站", "in": "105" },
                { "hub": "廊坊站", "in": "1860" },
                { "hub": "秦皇岛站", "in": "1380" },
                { "hub": "清河站", "in": "30" },
                { "hub": "山海关站", "in": "1125" },
                { "hub": "石家庄北站", "in": "255" },
                { "hub": "石家庄站", "in": "1425" },
                { "hub": "石家庄正定机场", "in": "30" },
                { "hub": "唐山北站", "in": "30" },
                { "hub": "唐山三女河机场", "in": "15" },
                { "hub": "唐山站", "in": "9885" },
                { "hub": "天津滨海机场", "in": "35805" },
                { "hub": "邢台东站", "in": "30" },
                { "hub": "邢台站", "in": "150" },
                { "hub": "张家口站", "in": "195" },
                { "hub": "正定机场站", "in": "990" }],
            "武清站": [
                { "hub": "保定站", "in": "15" },
                { "hub": "北京北站", "in": "60" },
                { "hub": "北京大兴机场", "in": "15" },
                { "hub": "北京南站", "in": "3960" },
                { "hub": "北京首都机场", "in": "75" },
                { "hub": "北京西站", "in": "105" },
                { "hub": "北京站", "in": "210" },
                { "hub": "沧州西站", "in": "45" },
                { "hub": "沧州站", "in": "15" },
                { "hub": "丰台站", "in": "30" },
                { "hub": "廊坊北站", "in": "75" },
                { "hub": "廊坊站", "in": "330" },
                { "hub": "清河站", "in": "15" },
                { "hub": "唐山站", "in": "75" },
                { "hub": "张家口站", "in": "15" },
                { "hub": "正定机场站", "in": "15" }],
            "邢台东站": [
                { "hub": "保定东站", "in": "105" },
                { "hub": "保定站", "in": "15" },
                { "hub": "北京南站", "in": "15" },
                { "hub": "北京首都机场", "in": "30" },
                { "hub": "北京西站", "in": "960" },
                { "hub": "沧州站", "in": "90" },
                { "hub": "邯郸东站", "in": "660" },
                { "hub": "邯郸马头机场", "in": "45" },
                { "hub": "邯郸站", "in": "195" },
                { "hub": "衡水站", "in": "90" },
                { "hub": "石家庄北站", "in": "15" },
                { "hub": "石家庄站", "in": "795" },
                { "hub": "石家庄正定机场", "in": "60" },
                { "hub": "唐山站", "in": "15" },
                { "hub": "天津西站", "in": "15" },
                { "hub": "天津站", "in": "60" }],
            "邢台站": [
                { "hub": "保定东站", "in": "30" },
                { "hub": "保定站", "in": "945" },
                { "hub": "北京北站", "in": "15" },
                { "hub": "北京南站", "in": "30" },
                { "hub": "北京西站", "in": "2670" },
                { "hub": "北京站", "in": "45" },
                { "hub": "沧州站", "in": "135" },
                { "hub": "丰台站", "in": "15" },
                { "hub": "邯郸东站", "in": "165" },
                { "hub": "邯郸马头机场", "in": "450" },
                { "hub": "邯郸站", "in": "3120" },
                { "hub": "衡水站", "in": "240" },
                { "hub": "廊坊站", "in": "15" },
                { "hub": "秦皇岛站", "in": "15" },
                { "hub": "石家庄北站", "in": "705" },
                { "hub": "石家庄站", "in": "4230" },
                { "hub": "石家庄正定机场", "in": "60" },
                { "hub": "唐山站", "in": "15" },
                { "hub": "塘沽站", "in": "60" },
                { "hub": "天津北站", "in": "15" },
                { "hub": "天津站", "in": "150" },
                { "hub": "张家口站", "in": "75" },
                { "hub": "正定机场站", "in": "30" }],
            "张家口宁远机场": [
                { "hub": "保定东站", "in": "15" },
                { "hub": "保定站", "in": "30" },
                { "hub": "北京北站", "in": "30" },
                { "hub": "北京大兴机场", "in": "15" },
                { "hub": "北京南站", "in": "60" },
                { "hub": "北京首都机场", "in": "165" },
                { "hub": "北京西站", "in": "30" },
                { "hub": "北京站", "in": "30" },
                { "hub": "沧州西站", "in": "15" },
                { "hub": "衡水站", "in": "15" },
                { "hub": "秦皇岛北戴河机场", "in": "30" },
                { "hub": "清河站", "in": "60" },
                { "hub": "石家庄站", "in": "30" },
                { "hub": "石家庄正定机场", "in": "135" }],
            "张家口站": [
                { "hub": "保定站", "in": "585" },
                { "hub": "北京北站", "in": "45" },
                { "hub": "北京南站", "in": "270" },
                { "hub": "北京首都机场", "in": "255" },
                { "hub": "北京西站", "in": "780" },
                { "hub": "北京站", "in": "450" },
                { "hub": "沧州西站", "in": "45" },
                { "hub": "沧州站", "in": "195" },
                { "hub": "丰台站", "in": "1050" },
                { "hub": "邯郸马头机场", "in": "15" },
                { "hub": "邯郸站", "in": "30" },
                { "hub": "衡水站", "in": "180" },
                { "hub": "廊坊站", "in": "60" },
                { "hub": "秦皇岛站", "in": "15" },
                { "hub": "清河站", "in": "135" },
                { "hub": "石家庄北站", "in": "15" },
                { "hub": "石家庄站", "in": "90" },
                { "hub": "石家庄正定机场", "in": "45" },
                { "hub": "唐山北站", "in": "15" },
                { "hub": "天津北站", "in": "30" },
                { "hub": "天津滨海机场", "in": "45" },
                { "hub": "天津西站", "in": "150" },
                { "hub": "天津站", "in": "75" },
                { "hub": "武清站", "in": "15" },
                { "hub": "邢台站", "in": "15" }],
            "正定机场站": [
                { "hub": "保定东站", "in": "1575" },
                { "hub": "北京北站", "in": "45" },
                { "hub": "北京南站", "in": "270" },
                { "hub": "北京西站", "in": "7305" },
                { "hub": "北京站", "in": "30" },
                { "hub": "滨海西站", "in": "90" },
                { "hub": "沧州站", "in": "15" },
                { "hub": "丰台站", "in": "15" },
                { "hub": "邯郸东站", "in": "1515" },
                { "hub": "邯郸站", "in": "15" },
                { "hub": "军粮城北站", "in": "45" },
                { "hub": "廊坊站", "in": "75" },
                { "hub": "秦皇岛站", "in": "15" },
                { "hub": "山海关站", "in": "30" },
                { "hub": "石家庄站", "in": "2055" },
                { "hub": "石家庄正定机场", "in": "10875" },
                { "hub": "唐山站", "in": "120" },
                { "hub": "天津北站", "in": "15" },
                { "hub": "天津滨海机场", "in": "45" },
                { "hub": "天津西站", "in": "555" },
                { "hub": "天津站", "in": "225" },
                { "hub": "邢台东站", "in": "165" },
                { "hub": "邢台站", "in": "15" }]
        },
        'out': {
            '保定东站': [
                { "hub": "北戴河站", "out": "45" },
                { "hub": "北京北站", "out": "375" },
                { "hub": "北京大兴机场", "out": "75" },
                { "hub": "北京南站", "out": "630" },
                { "hub": "北京首都机场", "out": "330" },
                { "hub": "北京西站", "out": "9075" },
                { "hub": "北京站", "out": "210" },
                { "hub": "滨海北站", "out": "15" },
                { "hub": "滨海西站", "out": "15" },
                { "hub": "沧州西站", "out": "90" },
                { "hub": "沧州站", "out": "15" },
                { "hub": "承德站", "out": "15" },
                { "hub": "丰台站", "out": "195" },
                { "hub": "邯郸东站", "out": "495" },
                { "hub": "邯郸站", "out": "225" },
                { "hub": "衡水北站", "out": "30" },
                { "hub": "衡水站", "out": "15" },
                { "hub": "军粮城北站", "out": "15" },
                { "hub": "廊坊北站", "out": "30" },
                { "hub": "廊坊站", "out": "105" },
                { "hub": "秦皇岛站", "out": "120" },
                { "hub": "清河站", "out": "105" },
                { "hub": "山海关站", "out": "75" },
                { "hub": "石家庄北站", "out": "30" },
                { "hub": "石家庄站", "out": "4230" },
                { "hub": "石家庄正定机场", "out": "735" },
                { "hub": "唐山北站", "out": "15" },
                { "hub": "唐山站", "out": "150" },
                { "hub": "天津北站", "out": "45" },
                { "hub": "天津滨海机场", "out": "120" },
                { "hub": "天津西站", "out": "1425" },
                { "hub": "天津站", "out": "750" },
                { "hub": "邢台东站", "out": "105" },
                { "hub": "邢台站", "out": "30" },
                { "hub": "张家口宁远机场", "out": "15" },
                { "hub": "正定机场站", "out": "1575" }
            ],
            "保定站": [
                { "hub": "北戴河站", "out": "30" },
                { "hub": "北京北站", "out": "870" },
                { "hub": "北京大兴机场", "out": "60" },
                { "hub": "北京南站", "out": "600" },
                { "hub": "北京首都机场", "out": "150" },
                { "hub": "北京西站", "out": "26790" },
                { "hub": "北京站", "out": "1005" },
                { "hub": "滨海北站", "out": "15" },
                { "hub": "滨海站", "out": "15" },
                { "hub": "沧州站", "out": "30" },
                { "hub": "承德站", "out": "60" },
                { "hub": "丰台站", "out": "1095" },
                { "hub": "邯郸东站", "out": "30" },
                { "hub": "邯郸马头机场", "out": "1155" },
                { "hub": "邯郸站", "out": "1110" },
                { "hub": "衡水站", "out": "60" },
                { "hub": "廊坊站", "out": "375" },
                { "hub": "秦皇岛站", "out": "90" },
                { "hub": "清河站", "out": "90" },
                { "hub": "山海关站", "out": "30" },
                { "hub": "石家庄北站", "out": "3120" },
                { "hub": "石家庄站", "out": "9000" },
                { "hub": "石家庄正定机场", "out": "120" },
                { "hub": "唐山北站", "out": "30" },
                { "hub": "唐山站", "out": "315" },
                { "hub": "塘沽站", "out": "90" },
                { "hub": "天津北站", "out": "1140" },
                { "hub": "天津滨海机场", "out": "150" },
                { "hub": "天津西站", "out": "75" },
                { "hub": "天津站", "out": "1605" },
                { "hub": "武清站", "out": "15" },
                { "hub": "邢台东站", "out": "15" },
                { "hub": "邢台站", "out": "945" },
                { "hub": "张家口宁远机场", "out": "30" },
                { "hub": "张家口站", "out": "585" }],
            "北戴河站": [
                { "hub": "保定东站", "out": "15" },
                { "hub": "保定站", "out": "15" },
                { "hub": "北京北站", "out": "90" },
                { "hub": "北京南站", "out": "255" },
                { "hub": "北京首都机场", "out": "90" },
                { "hub": "北京西站", "out": "135" },
                { "hub": "北京站", "out": "8190" },
                { "hub": "滨海北站", "out": "90" },
                { "hub": "滨海西站", "out": "345" },
                { "hub": "沧州西站", "out": "45" },
                { "hub": "沧州站", "out": "45" },
                { "hub": "军粮城北站", "out": "45" },
                { "hub": "廊坊站", "out": "30" },
                { "hub": "石家庄北站", "out": "15" },
                { "hub": "石家庄站", "out": "90" },
                { "hub": "唐山北站", "out": "480" },
                { "hub": "唐山站", "out": "1110" },
                { "hub": "塘沽站", "out": "120" },
                { "hub": "天津北站", "out": "120" },
                { "hub": "天津滨海机场", "out": "90" },
                { "hub": "天津西站", "out": "165" },
                { "hub": "天津站", "out": "1155" }],
            "北京北站": [
                { "hub": "保定东站", "out": "90" },
                { "hub": "保定站", "out": "270" },
                { "hub": "北戴河站", "out": "30" },
                { "hub": "滨海西站", "out": "30" },
                { "hub": "滨海站", "out": "15" },
                { "hub": "沧州西站", "out": "135" },
                { "hub": "沧州站", "out": "75" },
                { "hub": "承德站", "out": "15" },
                { "hub": "邯郸东站", "out": "45" },
                { "hub": "邯郸马头机场", "out": "30" },
                { "hub": "邯郸站", "out": "30" },
                { "hub": "衡水站", "out": "60" },
                { "hub": "廊坊站", "out": "75" },
                { "hub": "秦皇岛站", "out": "60" },
                { "hub": "山海关站", "out": "120" },
                { "hub": "石家庄北站", "out": "90" },
                { "hub": "石家庄站", "out": "630" },
                { "hub": "唐山北站", "out": "135" },
                { "hub": "唐山站", "out": "75" },
                { "hub": "塘沽站", "out": "15" },
                { "hub": "天津北站", "out": "60" },
                { "hub": "天津滨海机场", "out": "90" },
                { "hub": "天津西站", "out": "90" },
                { "hub": "天津站", "out": "450" },
                { "hub": "武清站", "out": "60" },
                { "hub": "邢台站", "out": "15" },
                { "hub": "张家口宁远机场", "out": "30" },
                { "hub": "张家口站", "out": "45" },
                { "hub": "正定机场站", "out": "45" }],
            "北京大兴机场": [
                { "hub": "保定东站", "out": "30" },
                { "hub": "保定站", "out": "15" },
                { "hub": "滨海北站", "out": "15" },
                { "hub": "滨海西站", "out": "15" },
                { "hub": "衡水北站", "out": "15" },
                { "hub": "衡水站", "out": "375" },
                { "hub": "军粮城北站", "out": "15" },
                { "hub": "廊坊北站", "out": "135" },
                { "hub": "廊坊站", "out": "690" },
                { "hub": "秦皇岛站", "out": "45" },
                { "hub": "石家庄北站", "out": "15" },
                { "hub": "石家庄站", "out": "15" },
                { "hub": "石家庄正定机场", "out": "15" },
                { "hub": "唐山站", "out": "15" },
                { "hub": "塘沽站", "out": "15" },
                { "hub": "天津北站", "out": "45" },
                { "hub": "天津滨海机场", "out": "105" },
                { "hub": "天津西站", "out": "30" },
                { "hub": "天津站", "out": "30" },
                { "hub": "武清站", "out": "15" },
                { "hub": "张家口宁远机场", "out": "15" }],
            "北京南站": [
                { "hub": "保定东站", "out": "540" },
                { "hub": "保定站", "out": "795" },
                { "hub": "北戴河站", "out": "135" },
                { "hub": "北京首都机场", "out": "18765" },
                { "hub": "滨海北站", "out": "90" },
                { "hub": "滨海西站", "out": "405" },
                { "hub": "滨海站", "out": "675" },
                { "hub": "沧州西站", "out": "13020" },
                { "hub": "沧州站", "out": "1515" },
                { "hub": "承德普宁机场", "out": "15" },
                { "hub": "承德站", "out": "60" },
                { "hub": "邯郸东站", "out": "15" },
                { "hub": "邯郸马头机场", "out": "90" },
                { "hub": "邯郸站", "out": "90" },
                { "hub": "衡水北站", "out": "30" },
                { "hub": "衡水站", "out": "360" },
                { "hub": "军粮城北站", "out": "75" },
                { "hub": "廊坊北站", "out": "315" },
                { "hub": "廊坊站", "out": "7065" },
                { "hub": "秦皇岛站", "out": "360" },
                { "hub": "山海关站", "out": "450" },
                { "hub": "石家庄北站", "out": "450" },
                { "hub": "石家庄站", "out": "885" },
                { "hub": "石家庄正定机场", "out": "75" },
                { "hub": "唐山北站", "out": "90" },
                { "hub": "唐山站", "out": "1095" },
                { "hub": "塘沽站", "out": "870" },
                { "hub": "天津北站", "out": "7035" },
                { "hub": "天津滨海机场", "out": "7320" },
                { "hub": "天津西站", "out": "3120" },
                { "hub": "天津站", "out": "69480" },
                { "hub": "武清站", "out": "3960" },
                { "hub": "邢台东站", "out": "15" },
                { "hub": "邢台站", "out": "30" },
                { "hub": "张家口宁远机场", "out": "60" },
                { "hub": "张家口站", "out": "270" },
                { "hub": "正定机场站", "out": "270" }],
            "北京首都机场": [
                { "hub": "保定东站", "out": "135" },
                { "hub": "保定站", "out": "75" },
                { "hub": "北戴河站", "out": "15" },
                { "hub": "北京南站", "out": "23745" },
                { "hub": "北京西站", "out": "12405" },
                { "hub": "北京站", "out": "19545" },
                { "hub": "滨海西站", "out": "165" },
                { "hub": "滨海站", "out": "45" },
                { "hub": "沧州西站", "out": "75" },
                { "hub": "沧州站", "out": "495" },
                { "hub": "承德站", "out": "240" },
                { "hub": "邯郸东站", "out": "60" },
                { "hub": "衡水北站", "out": "60" },
                { "hub": "衡水站", "out": "30" },
                { "hub": "军粮城北站", "out": "15" },
                { "hub": "廊坊北站", "out": "60" },
                { "hub": "廊坊站", "out": "345" },
                { "hub": "秦皇岛站", "out": "135" },
                { "hub": "山海关站", "out": "60" },
                { "hub": "石家庄北站", "out": "30" },
                { "hub": "石家庄站", "out": "210" },
                { "hub": "石家庄正定机场", "out": "30" },
                { "hub": "唐山北站", "out": "75" },
                { "hub": "唐山站", "out": "375" },
                { "hub": "塘沽站", "out": "60" },
                { "hub": "天津北站", "out": "270" },
                { "hub": "天津滨海机场", "out": "1215" },
                { "hub": "天津西站", "out": "60" },
                { "hub": "天津站", "out": "405" },
                { "hub": "武清站", "out": "75" },
                { "hub": "邢台东站", "out": "30" },
                { "hub": "张家口宁远机场", "out": "165" },
                { "hub": "张家口站", "out": "255" }],
            "北京西站": [
                { "hub": "保定东站", "out": "8175" },
                { "hub": "保定站", "out": "15660" },
                { "hub": "北戴河站", "out": "120" },
                { "hub": "北京首都机场", "out": "11640" },
                { "hub": "滨海西站", "out": "30" },
                { "hub": "滨海站", "out": "15" },
                { "hub": "沧州西站", "out": "135" },
                { "hub": "沧州站", "out": "120" },
                { "hub": "承德站", "out": "75" },
                { "hub": "邯郸东站", "out": "2880" },
                { "hub": "邯郸马头机场", "out": "1275" },
                { "hub": "邯郸站", "out": "3105" },
                { "hub": "衡水北站", "out": "15" },
                { "hub": "衡水站", "out": "6330" },
                { "hub": "廊坊北站", "out": "60" },
                { "hub": "廊坊站", "out": "525" },
                { "hub": "秦皇岛站", "out": "135" },
                { "hub": "山海关站", "out": "165" },
                { "hub": "石家庄北站", "out": "4275" },
                { "hub": "石家庄站", "out": "39975" },
                { "hub": "石家庄正定机场", "out": "750" },
                { "hub": "唐山北站", "out": "165" },
                { "hub": "唐山站", "out": "90" },
                { "hub": "天津北站", "out": "390" },
                { "hub": "天津滨海机场", "out": "210" },
                { "hub": "天津西站", "out": "180" },
                { "hub": "天津站", "out": "885" },
                { "hub": "武清站", "out": "105" },
                { "hub": "邢台东站", "out": "960" },
                { "hub": "邢台站", "out": "2670" },
                { "hub": "张家口宁远机场", "out": "30" },
                { "hub": "张家口站", "out": "780" },
                { "hub": "正定机场站", "out": "7305" }],
            "北京站": [
                { "hub": "保定东站", "out": "45" },
                { "hub": "保定站", "out": "810" },
                { "hub": "北戴河站", "out": "2550" },
                { "hub": "北京首都机场", "out": "22815" },
                { "hub": "滨海北站", "out": "15" },
                { "hub": "滨海西站", "out": "30" },
                { "hub": "滨海站", "out": "30" },
                { "hub": "沧州西站", "out": "105" },
                { "hub": "沧州站", "out": "420" },
                { "hub": "承德普宁机场", "out": "15" },
                { "hub": "承德站", "out": "735" },
                { "hub": "邯郸东站", "out": "60" },
                { "hub": "邯郸马头机场", "out": "75" },
                { "hub": "邯郸站", "out": "90" },
                { "hub": "衡水站", "out": "870" },
                { "hub": "军粮城北站", "out": "15" },
                { "hub": "廊坊北站", "out": "105" },
                { "hub": "廊坊站", "out": "780" },
                { "hub": "秦皇岛站", "out": "4860" },
                { "hub": "山海关站", "out": "3825" },
                { "hub": "石家庄北站", "out": "105" },
                { "hub": "石家庄站", "out": "435" },
                { "hub": "石家庄正定机场", "out": "30" },
                { "hub": "唐山北站", "out": "6030" },
                { "hub": "唐山站", "out": "1695" },
                { "hub": "塘沽站", "out": "60" },
                { "hub": "天津北站", "out": "525" },
                { "hub": "天津滨海机场", "out": "240" },
                { "hub": "天津西站", "out": "450" },
                { "hub": "天津站", "out": "780" },
                { "hub": "武清站", "out": "210" },
                { "hub": "邢台站", "out": "45" },
                { "hub": "张家口宁远机场", "out": "30" },
                { "hub": "张家口站", "out": "450" },
                { "hub": "正定机场站", "out": "30" }],
            "滨海北站": [
                { "hub": "保定东站", "out": "15" },
                { "hub": "北戴河站", "out": "45" },
                { "hub": "北京南站", "out": "105" },
                { "hub": "沧州站", "out": "15" },
                { "hub": "秦皇岛站", "out": "75" },
                { "hub": "山海关站", "out": "30" },
                { "hub": "石家庄北站", "out": "15" },
                { "hub": "石家庄站", "out": "45" },
                { "hub": "石家庄正定机场", "out": "15" },
                { "hub": "唐山站", "out": "345" }],
            "滨海西站": [
                { "hub": "保定东站", "out": "225" },
                { "hub": "保定站", "out": "15" },
                { "hub": "北戴河站", "out": "75" },
                { "hub": "北京北站", "out": "90" },
                { "hub": "北京南站", "out": "915" },
                { "hub": "北京首都机场", "out": "150" },
                { "hub": "北京西站", "out": "30" },
                { "hub": "北京站", "out": "15" },
                { "hub": "沧州西站", "out": "75" },
                { "hub": "沧州站", "out": "45" },
                { "hub": "邯郸东站", "out": "15" },
                { "hub": "衡水站", "out": "45" },
                { "hub": "廊坊站", "out": "15" },
                { "hub": "秦皇岛站", "out": "255" },
                { "hub": "清河站", "out": "75" },
                { "hub": "山海关站", "out": "315" },
                { "hub": "石家庄北站", "out": "15" },
                { "hub": "石家庄站", "out": "255" },
                { "hub": "唐山站", "out": "1455" },
                { "hub": "正定机场站", "out": "90" }],
            "滨海站": [
                { "hub": "北京北站", "out": "45" },
                { "hub": "北京大兴机场", "out": "30" },
                { "hub": "北京南站", "out": "540" },
                { "hub": "北京首都机场", "out": "60" },
                { "hub": "北京西站", "out": "30" },
                { "hub": "北京站", "out": "30" },
                { "hub": "沧州西站", "out": "15" },
                { "hub": "丰台站", "out": "15" },
                { "hub": "衡水站", "out": "15" },
                { "hub": "秦皇岛站", "out": "30" },
                { "hub": "石家庄站", "out": "30" },
                { "hub": "唐山站", "out": "45" }],
            "沧州西站": [
                { "hub": "保定东站", "out": "105" },
                { "hub": "保定站", "out": "30" },
                { "hub": "北戴河站", "out": "15" },
                { "hub": "北京北站", "out": "615" },
                { "hub": "北京大兴机场", "out": "45" },
                { "hub": "北京南站", "out": "9540" },
                { "hub": "北京首都机场", "out": "135" },
                { "hub": "北京西站", "out": "810" },
                { "hub": "北京站", "out": "480" },
                { "hub": "滨海西站", "out": "270" },
                { "hub": "滨海站", "out": "15" },
                { "hub": "丰台站", "out": "75" },
                { "hub": "邯郸东站", "out": "30" },
                { "hub": "邯郸站", "out": "15" },
                { "hub": "衡水北站", "out": "30" },
                { "hub": "衡水站", "out": "15" },
                { "hub": "军粮城北站", "out": "15" },
                { "hub": "廊坊北站", "out": "15" },
                { "hub": "廊坊站", "out": "615" },
                { "hub": "秦皇岛站", "out": "150" },
                { "hub": "清河站", "out": "30" },
                { "hub": "山海关站", "out": "165" },
                { "hub": "石家庄北站", "out": "30" },
                { "hub": "石家庄站", "out": "75" },
                { "hub": "唐山站", "out": "150" },
                { "hub": "塘沽站", "out": "45" },
                { "hub": "天津北站", "out": "210" },
                { "hub": "天津滨海机场", "out": "390" },
                { "hub": "天津西站", "out": "1455" },
                { "hub": "天津站", "out": "3090" },
                { "hub": "武清站", "out": "45" },
                { "hub": "张家口宁远机场", "out": "15" },
                { "hub": "张家口站", "out": "45" }],
            "沧州站": [
                { "hub": "保定东站", "out": "75" },
                { "hub": "保定站", "out": "45" },
                { "hub": "北戴河站", "out": "75" },
                { "hub": "北京北站", "out": "30" },
                { "hub": "北京大兴机场", "out": "30" },
                { "hub": "北京南站", "out": "1140" },
                { "hub": "北京首都机场", "out": "75" },
                { "hub": "北京西站", "out": "165" },
                { "hub": "北京站", "out": "360" },
                { "hub": "滨海北站", "out": "15" },
                { "hub": "滨海站", "out": "15" },
                { "hub": "承德站", "out": "15" },
                { "hub": "丰台站", "out": "195" },
                { "hub": "邯郸站", "out": "90" },
                { "hub": "衡水站", "out": "585" },
                { "hub": "廊坊北站", "out": "30" },
                { "hub": "廊坊站", "out": "270" },
                { "hub": "秦皇岛站", "out": "60" },
                { "hub": "清河站", "out": "15" },
                { "hub": "山海关站", "out": "225" },
                { "hub": "石家庄北站", "out": "1335" },
                { "hub": "石家庄站", "out": "30" },
                { "hub": "石家庄正定机场", "out": "15" },
                { "hub": "唐山北站", "out": "15" },
                { "hub": "唐山站", "out": "390" },
                { "hub": "塘沽站", "out": "135" },
                { "hub": "天津北站", "out": "720" },
                { "hub": "天津滨海机场", "out": "195" },
                { "hub": "天津西站", "out": "615" },
                { "hub": "天津站", "out": "1425" },
                { "hub": "武清站", "out": "15" },
                { "hub": "邢台东站", "out": "90" },
                { "hub": "邢台站", "out": "135" },
                { "hub": "张家口站", "out": "195" },
                { "hub": "正定机场站", "out": "15" }],
            "承德普宁机场": [
                { "hub": "北京北站", "out": "15" },
                { "hub": "北京南站", "out": "15" },
                { "hub": "北京首都机场", "out": "75" },
                { "hub": "北京西站", "out": "15" },
                { "hub": "北京站", "out": "15" },
                { "hub": "丰台站", "out": "15" },
                { "hub": "清河站", "out": "15" },
                { "hub": "唐山站", "out": "15" }],
            "承德站": [
                { "hub": "保定站", "out": "75" },
                { "hub": "北京北站", "out": "45" },
                { "hub": "北京南站", "out": "165" },
                { "hub": "北京首都机场", "out": "195" },
                { "hub": "北京西站", "out": "120" },
                { "hub": "北京站", "out": "270" },
                { "hub": "沧州站", "out": "15" },
                { "hub": "丰台站", "out": "90" },
                { "hub": "军粮城北站", "out": "15" },
                { "hub": "秦皇岛站", "out": "60" },
                { "hub": "清河站", "out": "30" },
                { "hub": "石家庄站", "out": "45" },
                { "hub": "唐山北站", "out": "45" },
                { "hub": "唐山站", "out": "165" },
                { "hub": "塘沽站", "out": "15" },
                { "hub": "天津西站", "out": "15" },
                { "hub": "天津站", "out": "75" }],
            "丰台站": [
                { "hub": "保定东站", "out": "90" },
                { "hub": "保定站", "out": "615" },
                { "hub": "北戴河站", "out": "30" },
                { "hub": "沧州西站", "out": "30" },
                { "hub": "沧州站", "out": "45" },
                { "hub": "承德站", "out": "30" },
                { "hub": "邯郸马头机场", "out": "120" },
                { "hub": "邯郸站", "out": "60" },
                { "hub": "衡水北站", "out": "15" },
                { "hub": "衡水站", "out": "30" },
                { "hub": "廊坊站", "out": "195" },
                { "hub": "秦皇岛站", "out": "105" },
                { "hub": "山海关站", "out": "30" },
                { "hub": "石家庄北站", "out": "150" },
                { "hub": "石家庄东站", "out": "15" },
                { "hub": "石家庄站", "out": "300" },
                { "hub": "石家庄正定机场", "out": "15" },
                { "hub": "唐山北站", "out": "30" },
                { "hub": "唐山站", "out": "120" },
                { "hub": "塘沽站", "out": "15" },
                { "hub": "天津北站", "out": "195" },
                { "hub": "天津滨海机场", "out": "90" },
                { "hub": "天津西站", "out": "120" },
                { "hub": "天津站", "out": "330" },
                { "hub": "武清站", "out": "30" },
                { "hub": "邢台站", "out": "15" },
                { "hub": "张家口站", "out": "1050" },
                { "hub": "正定机场站", "out": "15" }],
            "邯郸东站": [
                { "hub": "保定东站", "out": "930" },
                { "hub": "保定站", "out": "45" },
                { "hub": "北京北站", "out": "165" },
                { "hub": "北京南站", "out": "285" },
                { "hub": "北京首都机场", "out": "75" },
                { "hub": "北京西站", "out": "10245" },
                { "hub": "北京站", "out": "90" },
                { "hub": "滨海北站", "out": "30" },
                { "hub": "丰台站", "out": "15" },
                { "hub": "衡水站", "out": "45" },
                { "hub": "军粮城北站", "out": "15" },
                { "hub": "廊坊站", "out": "15" },
                { "hub": "秦皇岛站", "out": "15" },
                { "hub": "清河站", "out": "45" },
                { "hub": "山海关站", "out": "15" },
                { "hub": "石家庄北站", "out": "345" },
                { "hub": "石家庄站", "out": "4590" },
                { "hub": "石家庄正定机场", "out": "330" },
                { "hub": "唐山站", "out": "45" },
                { "hub": "天津北站", "out": "45" },
                { "hub": "天津西站", "out": "300" },
                { "hub": "天津站", "out": "390" },
                { "hub": "邢台东站", "out": "660" },
                { "hub": "邢台站", "out": "165" },
                { "hub": "正定机场站", "out": "1515" }],
            "邯郸马头机场": [
                { "hub": "保定站", "out": "1005" },
                { "hub": "北京南站", "out": "15" },
                { "hub": "北京西站", "out": "645" },
                { "hub": "北京站", "out": "30" },
                { "hub": "沧州站", "out": "15" },
                { "hub": "衡水站", "out": "15" },
                { "hub": "山海关站", "out": "15" },
                { "hub": "石家庄北站", "out": "90" },
                { "hub": "石家庄站", "out": "615" },
                { "hub": "石家庄正定机场", "out": "15" },
                { "hub": "塘沽站", "out": "15" },
                { "hub": "天津北站", "out": "15" },
                { "hub": "天津滨海机场", "out": "30" },
                { "hub": "天津站", "out": "60" },
                { "hub": "邢台东站", "out": "45" },
                { "hub": "邢台站", "out": "450" },
                { "hub": "张家口站", "out": "15" }],
            "邯郸站": [
                { "hub": "保定东站", "out": "90" },
                { "hub": "保定站", "out": "2685" },
                { "hub": "北京北站", "out": "75" },
                { "hub": "北京大兴机场", "out": "15" },
                { "hub": "北京南站", "out": "120" },
                { "hub": "北京西站", "out": "3960" },
                { "hub": "北京站", "out": "210" },
                { "hub": "滨海北站", "out": "15" },
                { "hub": "沧州站", "out": "30" },
                { "hub": "丰台站", "out": "60" },
                { "hub": "衡水站", "out": "165" },
                { "hub": "廊坊站", "out": "75" },
                { "hub": "秦皇岛站", "out": "15" },
                { "hub": "山海关站", "out": "60" },
                { "hub": "石家庄北站", "out": "1170" },
                { "hub": "石家庄东站", "out": "45" },
                { "hub": "石家庄站", "out": "4545" },
                { "hub": "石家庄正定机场", "out": "90" },
                { "hub": "唐山站", "out": "120" },
                { "hub": "塘沽站", "out": "30" },
                { "hub": "天津北站", "out": "210" },
                { "hub": "天津站", "out": "330" },
                { "hub": "邢台东站", "out": "195" },
                { "hub": "邢台站", "out": "3120" },
                { "hub": "张家口站", "out": "30" },
                { "hub": "正定机场站", "out": "15" }],
            "衡水北站": [
                { "hub": "保定东站", "out": "15" },
                { "hub": "北京南站", "out": "45" },
                { "hub": "北京首都机场", "out": "30" },
                { "hub": "北京西站", "out": "15" },
                { "hub": "滨海西站", "out": "15" },
                { "hub": "沧州站", "out": "15" },
                { "hub": "邯郸东站", "out": "15" },
                { "hub": "邯郸站", "out": "15" },
                { "hub": "石家庄北站", "out": "45" },
                { "hub": "石家庄站", "out": "15" },
                { "hub": "石家庄正定机场", "out": "15" },
                { "hub": "天津站", "out": "15" }],
            "衡水站": [
                { "hub": "保定东站", "out": "210" },
                { "hub": "保定站", "out": "45" },
                { "hub": "北戴河站", "out": "45" },
                { "hub": "北京北站", "out": "240" },
                { "hub": "北京大兴机场", "out": "330" },
                { "hub": "北京南站", "out": "825" },
                { "hub": "北京首都机场", "out": "45" },
                { "hub": "北京西站", "out": "5745" },
                { "hub": "北京站", "out": "1545" },
                { "hub": "滨海北站", "out": "15" },
                { "hub": "滨海西站", "out": "15" },
                { "hub": "滨海站", "out": "15" },
                { "hub": "沧州西站", "out": "75" },
                { "hub": "沧州站", "out": "495" },
                { "hub": "承德站", "out": "30" },
                { "hub": "丰台站", "out": "345" },
                { "hub": "邯郸东站", "out": "45" },
                { "hub": "邯郸站", "out": "135" },
                { "hub": "军粮城北站", "out": "45" },
                { "hub": "廊坊北站", "out": "15" },
                { "hub": "廊坊站", "out": "60" },
                { "hub": "秦皇岛站", "out": "135" },
                { "hub": "清河站", "out": "15" },
                { "hub": "山海关站", "out": "195" },
                { "hub": "石家庄北站", "out": "9720" },
                { "hub": "石家庄东站", "out": "105" },
                { "hub": "石家庄站", "out": "195" },
                { "hub": "石家庄正定机场", "out": "270" },
                { "hub": "唐山北站", "out": "15" },
                { "hub": "唐山站", "out": "390" },
                { "hub": "塘沽站", "out": "90" },
                { "hub": "天津北站", "out": "315" },
                { "hub": "天津滨海机场", "out": "90" },
                { "hub": "天津西站", "out": "15" },
                { "hub": "天津站", "out": "2145" },
                { "hub": "邢台东站", "out": "90" },
                { "hub": "邢台站", "out": "240" },
                { "hub": "张家口宁远机场", "out": "15" },
                { "hub": "张家口站", "out": "180" }],
            "军粮城北站": [
                { "hub": "保定东站", "out": "15" },
                { "hub": "北戴河站", "out": "30" },
                { "hub": "北京南站", "out": "90" },
                { "hub": "北京首都机场", "out": "15" },
                { "hub": "北京站", "out": "15" },
                { "hub": "沧州站", "out": "60" },
                { "hub": "邯郸东站", "out": "15" },
                { "hub": "衡水站", "out": "30" },
                { "hub": "廊坊站", "out": "15" },
                { "hub": "秦皇岛站", "out": "90" },
                { "hub": "清河站", "out": "15" },
                { "hub": "山海关站", "out": "165" },
                { "hub": "石家庄北站", "out": "15" },
                { "hub": "石家庄站", "out": "90" },
                { "hub": "唐山站", "out": "135" },
                { "hub": "正定机场站", "out": "45" }],
            "廊坊北站": [
                { "hub": "保定东站", "out": "15" },
                { "hub": "北京北站", "out": "15" },
                { "hub": "北京大兴机场", "out": "195" },
                { "hub": "北京南站", "out": "300" },
                { "hub": "北京首都机场", "out": "60" },
                { "hub": "北京西站", "out": "120" },
                { "hub": "北京站", "out": "60" },
                { "hub": "滨海站", "out": "15" },
                { "hub": "沧州西站", "out": "15" },
                { "hub": "沧州站", "out": "30" },
                { "hub": "丰台站", "out": "30" },
                { "hub": "邯郸马头机场", "out": "15" },
                { "hub": "秦皇岛站", "out": "15" },
                { "hub": "石家庄正定机场", "out": "15" },
                { "hub": "唐山站", "out": "45" },
                { "hub": "天津北站", "out": "15" },
                { "hub": "天津滨海机场", "out": "45" },
                { "hub": "天津西站", "out": "30" },
                { "hub": "天津站", "out": "105" },
                { "hub": "武清站", "out": "75" }],
            "廊坊站": [
                { "hub": "保定东站", "out": "195" },
                { "hub": "保定站", "out": "210" },
                { "hub": "北戴河站", "out": "30" },
                { "hub": "北京北站", "out": "285" },
                { "hub": "北京大兴机场", "out": "885" },
                { "hub": "北京南站", "out": "7965" },
                { "hub": "北京首都机场", "out": "585" },
                { "hub": "北京西站", "out": "570" },
                { "hub": "北京站", "out": "900" },
                { "hub": "滨海北站", "out": "30" },
                { "hub": "滨海站", "out": "15" },
                { "hub": "沧州西站", "out": "465" },
                { "hub": "沧州站", "out": "180" },
                { "hub": "承德站", "out": "45" },
                { "hub": "丰台站", "out": "375" },
                { "hub": "邯郸东站", "out": "30" },
                { "hub": "邯郸站", "out": "15" },
                { "hub": "衡水站", "out": "30" },
                { "hub": "军粮城北站", "out": "15" },
                { "hub": "秦皇岛站", "out": "60" },
                { "hub": "清河站", "out": "30" },
                { "hub": "山海关站", "out": "75" },
                { "hub": "石家庄北站", "out": "45" },
                { "hub": "石家庄站", "out": "225" },
                { "hub": "石家庄正定机场", "out": "15" },
                { "hub": "唐山站", "out": "225" },
                { "hub": "塘沽站", "out": "30" },
                { "hub": "天津北站", "out": "510" },
                { "hub": "天津滨海机场", "out": "465" },
                { "hub": "天津西站", "out": "12780" },
                { "hub": "天津站", "out": "1860" },
                { "hub": "武清站", "out": "330" },
                { "hub": "邢台站", "out": "15" },
                { "hub": "张家口站", "out": "60" },
                { "hub": "正定机场站", "out": "75" }],
            "秦皇岛北戴河机场": [
                { "hub": "保定站", "out": "15" },
                { "hub": "北京北站", "out": "15" },
                { "hub": "北京站", "out": "45" },
                { "hub": "石家庄站", "out": "15" },
                { "hub": "石家庄正定机场", "out": "180" },
                { "hub": "张家口宁远机场", "out": "30" }],
            "秦皇岛站": [
                { "hub": "保定东站", "out": "30" },
                { "hub": "保定站", "out": "120" },
                { "hub": "北京北站", "out": "135" },
                { "hub": "北京大兴机场", "out": "15" },
                { "hub": "北京南站", "out": "720" },
                { "hub": "北京首都机场", "out": "105" },
                { "hub": "北京西站", "out": "210" },
                { "hub": "北京站", "out": "6105" },
                { "hub": "滨海北站", "out": "90" },
                { "hub": "滨海西站", "out": "540" },
                { "hub": "滨海站", "out": "15" },
                { "hub": "沧州西站", "out": "90" },
                { "hub": "沧州站", "out": "60" },
                { "hub": "承德站", "out": "75" },
                { "hub": "丰台站", "out": "75" },
                { "hub": "邯郸东站", "out": "30" },
                { "hub": "衡水站", "out": "75" },
                { "hub": "军粮城北站", "out": "45" },
                { "hub": "廊坊北站", "out": "15" },
                { "hub": "廊坊站", "out": "30" },
                { "hub": "清河站", "out": "30" },
                { "hub": "石家庄站", "out": "240" },
                { "hub": "石家庄正定机场", "out": "15" },
                { "hub": "唐山北站", "out": "645" },
                { "hub": "唐山站", "out": "1935" },
                { "hub": "塘沽站", "out": "60" },
                { "hub": "天津北站", "out": "180" },
                { "hub": "天津滨海机场", "out": "195" },
                { "hub": "天津西站", "out": "615" },
                { "hub": "天津站", "out": "1380" },
                { "hub": "邢台站", "out": "15" },
                { "hub": "张家口站", "out": "15" },
                { "hub": "正定机场站", "out": "15" }],
            "清河站": [
                { "hub": "保定东站", "out": "45" },
                { "hub": "滨海西站", "out": "30" },
                { "hub": "沧州西站", "out": "15" },
                { "hub": "沧州站", "out": "15" },
                { "hub": "衡水北站", "out": "15" },
                { "hub": "廊坊站", "out": "30" },
                { "hub": "秦皇岛站", "out": "15" },
                { "hub": "石家庄站", "out": "90" },
                { "hub": "石家庄正定机场", "out": "15" },
                { "hub": "唐山三女河机场", "out": "15" },
                { "hub": "唐山站", "out": "30" },
                { "hub": "天津滨海机场", "out": "120" },
                { "hub": "天津站", "out": "30" },
                { "hub": "武清站", "out": "15" },
                { "hub": "张家口宁远机场", "out": "60" },
                { "hub": "张家口站", "out": "135" }],
            "山海关站": [
                { "hub": "保定东站", "out": "30" },
                { "hub": "保定站", "out": "75" },
                { "hub": "北京北站", "out": "90" },
                { "hub": "北京南站", "out": "525" },
                { "hub": "北京首都机场", "out": "150" },
                { "hub": "北京西站", "out": "180" },
                { "hub": "北京站", "out": "5415" },
                { "hub": "滨海北站", "out": "30" },
                { "hub": "滨海西站", "out": "465" },
                { "hub": "沧州西站", "out": "30" },
                { "hub": "沧州站", "out": "45" },
                { "hub": "丰台站", "out": "15" },
                { "hub": "邯郸站", "out": "30" },
                { "hub": "衡水站", "out": "45" },
                { "hub": "军粮城北站", "out": "75" },
                { "hub": "廊坊站", "out": "15" },
                { "hub": "石家庄站", "out": "60" },
                { "hub": "唐山北站", "out": "750" },
                { "hub": "唐山三女河机场", "out": "15" },
                { "hub": "唐山站", "out": "945" },
                { "hub": "塘沽站", "out": "300" },
                { "hub": "天津北站", "out": "105" },
                { "hub": "天津滨海机场", "out": "60" },
                { "hub": "天津西站", "out": "165" },
                { "hub": "天津站", "out": "1125" },
                { "hub": "正定机场站", "out": "30" }],
            "石家庄北站": [
                { "hub": "保定东站", "out": "150" },
                { "hub": "保定站", "out": "2025" },
                { "hub": "北戴河站", "out": "15" },
                { "hub": "北京北站", "out": "30" },
                { "hub": "北京大兴机场", "out": "15" },
                { "hub": "北京南站", "out": "105" },
                { "hub": "北京首都机场", "out": "45" },
                { "hub": "北京西站", "out": "3435" },
                { "hub": "北京站", "out": "165" },
                { "hub": "滨海北站", "out": "15" },
                { "hub": "沧州站", "out": "450" },
                { "hub": "承德站", "out": "15" },
                { "hub": "丰台站", "out": "150" },
                { "hub": "邯郸东站", "out": "210" },
                { "hub": "邯郸马头机场", "out": "240" },
                { "hub": "邯郸站", "out": "390" },
                { "hub": "衡水北站", "out": "30" },
                { "hub": "衡水站", "out": "6435" },
                { "hub": "廊坊站", "out": "75" },
                { "hub": "秦皇岛站", "out": "45" },
                { "hub": "清河站", "out": "15" },
                { "hub": "唐山站", "out": "105" },
                { "hub": "塘沽站", "out": "30" },
                { "hub": "天津北站", "out": "600" },
                { "hub": "天津滨海机场", "out": "15" },
                { "hub": "天津西站", "out": "60" },
                { "hub": "天津站", "out": "255" },
                { "hub": "邢台东站", "out": "15" },
                { "hub": "邢台站", "out": "705" },
                { "hub": "张家口站", "out": "15" }],
            "石家庄东站": [
                { "hub": "保定东站", "out": "30" },
                { "hub": "北京西站", "out": "30" },
                { "hub": "丰台站", "out": "15" },
                { "hub": "衡水站", "out": "105" }],
            "石家庄站": [
                { "hub": "保定东站", "out": "2085" },
                { "hub": "保定站", "out": "6255" },
                { "hub": "北戴河站", "out": "30" },
                { "hub": "北京北站", "out": "510" },
                { "hub": "北京大兴机场", "out": "15" },
                { "hub": "北京南站", "out": "660" },
                { "hub": "北京首都机场", "out": "120" },
                { "hub": "北京西站", "out": "16635" },
                { "hub": "北京站", "out": "465" },
                { "hub": "滨海北站", "out": "45" },
                { "hub": "滨海西站", "out": "45" },
                { "hub": "沧州站", "out": "30" },
                { "hub": "承德站", "out": "45" },
                { "hub": "丰台站", "out": "60" },
                { "hub": "邯郸东站", "out": "2745" },
                { "hub": "邯郸马头机场", "out": "1245" },
                { "hub": "邯郸站", "out": "3855" },
                { "hub": "衡水北站", "out": "15" },
                { "hub": "衡水站", "out": "150" },
                { "hub": "廊坊北站", "out": "15" },
                { "hub": "廊坊站", "out": "165" },
                { "hub": "秦皇岛站", "out": "105" },
                { "hub": "清河站", "out": "135" },
                { "hub": "山海关站", "out": "135" },
                { "hub": "唐山站", "out": "180" },
                { "hub": "塘沽站", "out": "30" },
                { "hub": "天津北站", "out": "195" },
                { "hub": "天津滨海机场", "out": "60" },
                { "hub": "天津西站", "out": "795" },
                { "hub": "天津站", "out": "1425" },
                { "hub": "邢台东站", "out": "795" },
                { "hub": "邢台站", "out": "4230" },
                { "hub": "张家口宁远机场", "out": "30" },
                { "hub": "张家口站", "out": "90" },
                { "hub": "正定机场站", "out": "2055" }],
            "石家庄正定机场": [
                { "hub": "保定东站", "out": "870" },
                { "hub": "保定站", "out": "195" },
                { "hub": "北京北站", "out": "15" },
                { "hub": "北京大兴机场", "out": "75" },
                { "hub": "北京南站", "out": "75" },
                { "hub": "北京首都机场", "out": "120" },
                { "hub": "北京西站", "out": "870" },
                { "hub": "北京站", "out": "15" },
                { "hub": "沧州站", "out": "15" },
                { "hub": "丰台站", "out": "45" },
                { "hub": "邯郸东站", "out": "105" },
                { "hub": "邯郸马头机场", "out": "15" },
                { "hub": "邯郸站", "out": "30" },
                { "hub": "衡水北站", "out": "45" },
                { "hub": "衡水站", "out": "105" },
                { "hub": "廊坊站", "out": "75" },
                { "hub": "秦皇岛北戴河机场", "out": "60" },
                { "hub": "秦皇岛站", "out": "30" },
                { "hub": "唐山三女河机场", "out": "15" },
                { "hub": "唐山站", "out": "15" },
                { "hub": "天津北站", "out": "60" },
                { "hub": "天津滨海机场", "out": "30" },
                { "hub": "天津西站", "out": "30" },
                { "hub": "天津站", "out": "30" },
                { "hub": "邢台东站", "out": "60" },
                { "hub": "邢台站", "out": "60" },
                { "hub": "张家口宁远机场", "out": "135" },
                { "hub": "张家口站", "out": "45" },
                { "hub": "正定机场站", "out": "10875" }],
            "唐山北站": [
                { "hub": "保定站", "out": "45" },
                { "hub": "北戴河站", "out": "270" },
                { "hub": "北京北站", "out": "165" },
                { "hub": "北京南站", "out": "150" },
                { "hub": "北京首都机场", "out": "45" },
                { "hub": "北京西站", "out": "165" },
                { "hub": "北京站", "out": "10395" },
                { "hub": "滨海西站", "out": "15" },
                { "hub": "承德站", "out": "165" },
                { "hub": "丰台站", "out": "30" },
                { "hub": "廊坊站", "out": "15" },
                { "hub": "秦皇岛站", "out": "555" },
                { "hub": "清河站", "out": "30" },
                { "hub": "山海关站", "out": "705" },
                { "hub": "塘沽站", "out": "15" },
                { "hub": "天津滨海机场", "out": "30" },
                { "hub": "天津站", "out": "30" },
                { "hub": "张家口站", "out": "15" }],
            "唐山三女河机场": [
                { "hub": "北京首都机场", "out": "15" },
                { "hub": "秦皇岛站", "out": "15" },
                { "hub": "天津西站", "out": "15" },
                { "hub": "天津站", "out": "15" }],
            "唐山站": [
                { "hub": "保定东站", "out": "210" },
                { "hub": "保定站", "out": "510" },
                { "hub": "北戴河站", "out": "660" },
                { "hub": "北京北站", "out": "30" },
                { "hub": "北京大兴机场", "out": "60" },
                { "hub": "北京南站", "out": "1245" },
                { "hub": "北京首都机场", "out": "300" },
                { "hub": "北京西站", "out": "90" },
                { "hub": "北京站", "out": "2385" },
                { "hub": "滨海北站", "out": "435" },
                { "hub": "滨海西站", "out": "2505" },
                { "hub": "滨海站", "out": "135" },
                { "hub": "沧州西站", "out": "180" },
                { "hub": "沧州站", "out": "375" },
                { "hub": "承德普宁机场", "out": "15" },
                { "hub": "承德站", "out": "135" },
                { "hub": "丰台站", "out": "135" },
                { "hub": "邯郸东站", "out": "75" },
                { "hub": "邯郸马头机场", "out": "195" },
                { "hub": "邯郸站", "out": "60" },
                { "hub": "衡水站", "out": "180" },
                { "hub": "军粮城北站", "out": "195" },
                { "hub": "廊坊北站", "out": "60" },
                { "hub": "廊坊站", "out": "315" },
                { "hub": "秦皇岛站", "out": "1395" },
                { "hub": "清河站", "out": "15" },
                { "hub": "山海关站", "out": "1050" },
                { "hub": "石家庄北站", "out": "210" },
                { "hub": "石家庄站", "out": "1080" },
                { "hub": "塘沽站", "out": "1170" },
                { "hub": "天津北站", "out": "1710" },
                { "hub": "天津滨海机场", "out": "900" },
                { "hub": "天津西站", "out": "1245" },
                { "hub": "天津站", "out": "9885" },
                { "hub": "武清站", "out": "75" },
                { "hub": "邢台东站", "out": "15" },
                { "hub": "邢台站", "out": "15" },
                { "hub": "正定机场站", "out": "120" }],
            "塘沽站": [
                { "hub": "保定东站", "out": "75" },
                { "hub": "保定站", "out": "105" },
                { "hub": "北戴河站", "out": "60" },
                { "hub": "北京北站", "out": "105" },
                { "hub": "北京大兴机场", "out": "30" },
                { "hub": "北京南站", "out": "990" },
                { "hub": "北京首都机场", "out": "75" },
                { "hub": "北京西站", "out": "75" },
                { "hub": "北京站", "out": "285" },
                { "hub": "沧州西站", "out": "30" },
                { "hub": "沧州站", "out": "390" },
                { "hub": "丰台站", "out": "15" },
                { "hub": "邯郸马头机场", "out": "15" },
                { "hub": "邯郸站", "out": "150" },
                { "hub": "衡水北站", "out": "15" },
                { "hub": "衡水站", "out": "255" },
                { "hub": "廊坊北站", "out": "15" },
                { "hub": "廊坊站", "out": "90" },
                { "hub": "秦皇岛站", "out": "105" },
                { "hub": "山海关站", "out": "150" },
                { "hub": "石家庄北站", "out": "150" },
                { "hub": "石家庄站", "out": "165" },
                { "hub": "唐山站", "out": "1050" },
                { "hub": "邢台站", "out": "60" }],
            "天津北站": [
                { "hub": "保定东站", "out": "60" },
                { "hub": "保定站", "out": "330" },
                { "hub": "北戴河站", "out": "225" },
                { "hub": "北京北站", "out": "30" },
                { "hub": "北京大兴机场", "out": "45" },
                { "hub": "北京南站", "out": "4035" },
                { "hub": "北京首都机场", "out": "240" },
                { "hub": "北京西站", "out": "210" },
                { "hub": "北京站", "out": "150" },
                { "hub": "沧州西站", "out": "60" },
                { "hub": "沧州站", "out": "1155" },
                { "hub": "承德站", "out": "75" },
                { "hub": "丰台站", "out": "150" },
                { "hub": "邯郸马头机场", "out": "45" },
                { "hub": "邯郸站", "out": "30" },
                { "hub": "衡水站", "out": "375" },
                { "hub": "廊坊北站", "out": "15" },
                { "hub": "廊坊站", "out": "255" },
                { "hub": "秦皇岛站", "out": "450" },
                { "hub": "山海关站", "out": "465" },
                { "hub": "石家庄北站", "out": "285" },
                { "hub": "石家庄站", "out": "150" },
                { "hub": "唐山北站", "out": "15" },
                { "hub": "唐山三女河机场", "out": "15" },
                { "hub": "唐山站", "out": "870" },
                { "hub": "邢台站", "out": "15" },
                { "hub": "张家口站", "out": "30" },
                { "hub": "正定机场站", "out": "15" }],
            "天津滨海机场": [
                { "hub": "保定东站", "out": "105" },
                { "hub": "保定站", "out": "15" },
                { "hub": "北戴河站", "out": "15" },
                { "hub": "北京北站", "out": "60" },
                { "hub": "北京大兴机场", "out": "195" },
                { "hub": "北京南站", "out": "6405" },
                { "hub": "北京首都机场", "out": "1500" },
                { "hub": "北京西站", "out": "225" },
                { "hub": "北京站", "out": "180" },
                { "hub": "沧州西站", "out": "135" },
                { "hub": "沧州站", "out": "90" },
                { "hub": "丰台站", "out": "150" },
                { "hub": "衡水站", "out": "15" },
                { "hub": "廊坊北站", "out": "60" },
                { "hub": "廊坊站", "out": "375" },
                { "hub": "秦皇岛站", "out": "150" },
                { "hub": "清河站", "out": "150" },
                { "hub": "山海关站", "out": "105" },
                { "hub": "石家庄站", "out": "135" },
                { "hub": "石家庄正定机场", "out": "75" },
                { "hub": "唐山北站", "out": "30" },
                { "hub": "唐山站", "out": "1080" },
                { "hub": "天津西站", "out": "4020" },
                { "hub": "天津站", "out": "35805" },
                { "hub": "张家口站", "out": "45" },
                { "hub": "正定机场站", "out": "45" }],
            "天津西站": [
                { "hub": "保定东站", "out": "1065" },
                { "hub": "保定站", "out": "135" },
                { "hub": "北戴河站", "out": "45" },
                { "hub": "北京北站", "out": "120" },
                { "hub": "北京大兴机场", "out": "30" },
                { "hub": "北京南站", "out": "3375" },
                { "hub": "北京首都机场", "out": "75" },
                { "hub": "北京西站", "out": "105" },
                { "hub": "北京站", "out": "180" },
                { "hub": "沧州西站", "out": "585" },
                { "hub": "沧州站", "out": "930" },
                { "hub": "丰台站", "out": "150" },
                { "hub": "邯郸东站", "out": "165" },
                { "hub": "衡水站", "out": "45" },
                { "hub": "廊坊北站", "out": "15" },
                { "hub": "廊坊站", "out": "8040" },
                { "hub": "秦皇岛站", "out": "195" },
                { "hub": "山海关站", "out": "60" },
                { "hub": "石家庄北站", "out": "30" },
                { "hub": "石家庄站", "out": "2115" },
                { "hub": "石家庄正定机场", "out": "30" },
                { "hub": "唐山站", "out": "540" },
                { "hub": "天津滨海机场", "out": "3810" },
                { "hub": "邢台东站", "out": "15" },
                { "hub": "张家口站", "out": "150" },
                { "hub": "正定机场站", "out": "555" }],
            "天津站": [
                { "hub": "保定东站", "out": "480" },
                { "hub": "保定站", "out": "1380" },
                { "hub": "北戴河站", "out": "660" },
                { "hub": "北京北站", "out": "765" },
                { "hub": "北京大兴机场", "out": "75" },
                { "hub": "北京南站", "out": "33255" },
                { "hub": "北京首都机场", "out": "555" },
                { "hub": "北京西站", "out": "1665" },
                { "hub": "北京站", "out": "1065" },
                { "hub": "沧州西站", "out": "705" },
                { "hub": "沧州站", "out": "1545" },
                { "hub": "承德站", "out": "180" },
                { "hub": "丰台站", "out": "1065" },
                { "hub": "邯郸东站", "out": "195" },
                { "hub": "邯郸马头机场", "out": "90" },
                { "hub": "邯郸站", "out": "270" },
                { "hub": "衡水北站", "out": "15" },
                { "hub": "衡水站", "out": "915" },
                { "hub": "廊坊北站", "out": "45" },
                { "hub": "廊坊站", "out": "1320" },
                { "hub": "秦皇岛站", "out": "1695" },
                { "hub": "清河站", "out": "105" },
                { "hub": "山海关站", "out": "1275" },
                { "hub": "石家庄北站", "out": "1260" },
                { "hub": "石家庄东站", "out": "15" },
                { "hub": "石家庄站", "out": "2340" },
                { "hub": "石家庄正定机场", "out": "30" },
                { "hub": "唐山北站", "out": "90" },
                { "hub": "唐山站", "out": "5205" },
                { "hub": "天津滨海机场", "out": "44685" },
                { "hub": "邢台东站", "out": "60" },
                { "hub": "邢台站", "out": "150" },
                { "hub": "张家口站", "out": "75" },
                { "hub": "正定机场站", "out": "225" }],
            "武清站": [
                { "hub": "保定东站", "out": "15" },
                { "hub": "保定站", "out": "45" },
                { "hub": "北京北站", "out": "105" },
                { "hub": "北京南站", "out": "5790" },
                { "hub": "北京首都机场", "out": "60" },
                { "hub": "北京西站", "out": "300" },
                { "hub": "北京站", "out": "390" },
                { "hub": "沧州西站", "out": "15" },
                { "hub": "沧州站", "out": "180" },
                { "hub": "丰台站", "out": "75" },
                { "hub": "衡水站", "out": "30" },
                { "hub": "廊坊北站", "out": "90" },
                { "hub": "廊坊站", "out": "330" },
                { "hub": "秦皇岛站", "out": "30" },
                { "hub": "清河站", "out": "45" },
                { "hub": "山海关站", "out": "15" },
                { "hub": "石家庄站", "out": "60" },
                { "hub": "唐山三女河机场", "out": "15" },
                { "hub": "唐山站", "out": "180" },
                { "hub": "张家口站", "out": "15" }],
            "邢台东站": [
                { "hub": "保定东站", "out": "315" },
                { "hub": "保定站", "out": "15" },
                { "hub": "北京北站", "out": "15" },
                { "hub": "北京西站", "out": "1050" },
                { "hub": "北京站", "out": "15" },
                { "hub": "邯郸东站", "out": "510" },
                { "hub": "邯郸马头机场", "out": "15" },
                { "hub": "邯郸站", "out": "105" },
                { "hub": "廊坊站", "out": "15" },
                { "hub": "清河站", "out": "15" },
                { "hub": "石家庄北站", "out": "60" },
                { "hub": "石家庄站", "out": "915" },
                { "hub": "石家庄正定机场", "out": "105" },
                { "hub": "唐山站", "out": "15" },
                { "hub": "天津滨海机场", "out": "30" },
                { "hub": "天津西站", "out": "135" },
                { "hub": "天津站", "out": "30" },
                { "hub": "正定机场站", "out": "165" }],
            "邢台站": [
                { "hub": "保定东站", "out": "15" },
                { "hub": "保定站", "out": "1275" },
                { "hub": "北京北站", "out": "15" },
                { "hub": "北京南站", "out": "30" },
                { "hub": "北京西站", "out": "885" },
                { "hub": "北京站", "out": "30" },
                { "hub": "滨海西站", "out": "15" },
                { "hub": "沧州站", "out": "15" },
                { "hub": "丰台站", "out": "15" },
                { "hub": "邯郸东站", "out": "45" },
                { "hub": "邯郸马头机场", "out": "615" },
                { "hub": "邯郸站", "out": "1905" },
                { "hub": "衡水站", "out": "90" },
                { "hub": "廊坊北站", "out": "15" },
                { "hub": "廊坊站", "out": "30" },
                { "hub": "石家庄北站", "out": "585" },
                { "hub": "石家庄东站", "out": "15" },
                { "hub": "石家庄站", "out": "3270" },
                { "hub": "石家庄正定机场", "out": "60" },
                { "hub": "唐山站", "out": "30" },
                { "hub": "天津北站", "out": "45" },
                { "hub": "天津滨海机场", "out": "15" },
                { "hub": "天津西站", "out": "15" },
                { "hub": "天津站", "out": "150" },
                { "hub": "张家口站", "out": "15" },
                { "hub": "正定机场站", "out": "15" }],
            "张家口宁远机场": [
                { "hub": "北京北站", "out": "15" },
                { "hub": "北京大兴机场", "out": "15" },
                { "hub": "北京南站", "out": "15" },
                { "hub": "北京首都机场", "out": "75" },
                { "hub": "北京西站", "out": "15" },
                { "hub": "北京站", "out": "45" },
                { "hub": "承德普宁机场", "out": "15" },
                { "hub": "丰台站", "out": "15" },
                { "hub": "衡水站", "out": "15" },
                { "hub": "清河站", "out": "60" },
                { "hub": "石家庄站", "out": "15" },
                { "hub": "石家庄正定机场", "out": "210" },
                { "hub": "唐山站", "out": "15" }],
            "张家口站": [
                { "hub": "保定东站", "out": "15" },
                { "hub": "保定站", "out": "315" },
                { "hub": "北京北站", "out": "150" },
                { "hub": "北京大兴机场", "out": "120" },
                { "hub": "北京南站", "out": "450" },
                { "hub": "北京首都机场", "out": "345" },
                { "hub": "北京西站", "out": "615" },
                { "hub": "北京站", "out": "1155" },
                { "hub": "滨海西站", "out": "15" },
                { "hub": "沧州站", "out": "165" },
                { "hub": "丰台站", "out": "645" },
                { "hub": "邯郸站", "out": "15" },
                { "hub": "衡水站", "out": "405" },
                { "hub": "廊坊站", "out": "60" },
                { "hub": "清河站", "out": "60" },
                { "hub": "石家庄北站", "out": "30" },
                { "hub": "石家庄站", "out": "255" },
                { "hub": "石家庄正定机场", "out": "15" },
                { "hub": "唐山北站", "out": "15" },
                { "hub": "唐山站", "out": "45" },
                { "hub": "天津北站", "out": "135" },
                { "hub": "天津滨海机场", "out": "15" },
                { "hub": "天津西站", "out": "270" },
                { "hub": "天津站", "out": "195" },
                { "hub": "武清站", "out": "15" },
                { "hub": "邢台站", "out": "75" }],
            "正定机场站": [
                { "hub": "保定东站", "out": "2805" },
                { "hub": "保定站", "out": "15" },
                { "hub": "北京北站", "out": "345" },
                { "hub": "北京大兴机场", "out": "30" },
                { "hub": "北京南站", "out": "210" },
                { "hub": "北京首都机场", "out": "15" },
                { "hub": "北京西站", "out": "12015" },
                { "hub": "北京站", "out": "45" },
                { "hub": "滨海西站", "out": "120" },
                { "hub": "沧州西站", "out": "45" },
                { "hub": "承德站", "out": "15" },
                { "hub": "丰台站", "out": "90" },
                { "hub": "邯郸东站", "out": "405" },
                { "hub": "邯郸站", "out": "45" },
                { "hub": "军粮城北站", "out": "30" },
                { "hub": "廊坊站", "out": "135" },
                { "hub": "秦皇岛站", "out": "60" },
                { "hub": "清河站", "out": "30" },
                { "hub": "山海关站", "out": "30" },
                { "hub": "石家庄站", "out": "2595" },
                { "hub": "石家庄正定机场", "out": "13965" },
                { "hub": "唐山站", "out": "135" },
                { "hub": "天津滨海机场", "out": "45" },
                { "hub": "天津西站", "out": "960" },
                { "hub": "天津站", "out": "990" },
                { "hub": "武清站", "out": "15" },
                { "hub": "邢台站", "out": "30" }
            ]
        }
    }
    let res = [];
    res = tmp[params.inOrOut][params.hub];
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