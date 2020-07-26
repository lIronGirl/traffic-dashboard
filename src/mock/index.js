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
    '北京站': [116.432296, 39.908958],
    '北京西站': [116.328811, 39.901873],
    '北京南站': [116.387452, 39.870426],
    '天津站': [117.216853, 39.142488],
    '天津西站': [117.16998, 39.164265],
    '石家庄站': [114.490825, 38.016821],
    '唐山站': [118.124977, 39.631246],
    '首都机场': [116.609564, 40.083812],
    '正定机场': [114.703893, 38.287385],
    '北京南苑机场': [116.409387, 39.799315],
    '山海关机场': [119.736468, 39.982802],
    '三女河机场': [118.01368, 39.725946],
    '邯郸机场': [114.437921, 36.531179],
    '天津机场': [117.367442, 39.137739],
    '京平高速': [117.188932, 40.137582],
    '京哈高速': [116.841791, 39.809108],
    '京开高速': [116.335798, 39.697022],
    '京港澳高速': [116.119431, 39.736555],
    '京承高速': [117.127904, 40.410083],
    '京藏高速': [115.989628, 40.367651],
    '通燕高速': [116.790127, 39.947024],
    '天安门': [116.403963, 39.915119],
    '颐和园': [116.278749, 40.004869],
    '八达岭长城': [116.024067, 40.362639],
    '香山公园': [116.195044, 39.996194],
    '天津之眼': [117.193047, 39.159697],
    '承德避暑山庄': [117.941207, 41.001475],
    '奥林匹克公园': [116.399206, 39.999245]
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
export default Mock;