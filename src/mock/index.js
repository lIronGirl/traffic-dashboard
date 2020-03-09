import Mock from 'mockjs';
const Random = Mock.Random;

const tripModeRatio = [{
    name: '飞机出行', value: Random.integer(2000, 10000)
}, {
    name: '高铁出行', value: Random.integer(3000, 15000)
}];


Mock.mock('/api/tripmoderatio', 'get', tripModeRatio)

export default Mock;