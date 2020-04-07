import request from '@/utils/request'

export function getTripmodeRatio() {
    return request({
        url: 'api/tripmoderatio',
        method: 'get'
    })
}

export function getTripViaAirRankList(date) {
    return request({
        url: 'api/tripviaairranklist',
        method: 'get',
        data: {
            date: date
        }
    })
}
export function getTripViaRailRankList(date) {
    return request({
        url: 'api/tripviarailranklist',
        method: 'get',
        data: {
            date: date
        }
    })
}

export function getRailStationTraffic() {
    return request({
        url: 'api/stationtrafficranklist',
        method: 'get',
        data: {
            stationType: 'rail'
        }
    })
}
export function getAirStationTraffic() {
    return request({
        url: 'api/stationtrafficranklist',
        method: 'get',
        data: {
            stationType: 'air'
        }
    })
}
export function getHighwayStationTraffic() {
    return request({
        url: 'api/stationtrafficranklist',
        method: 'get',
        data: {
            stationType: 'highway'
        }
    })
}
export function getScenicspotStationTraffic() {
    return request({
        url: 'api/stationtrafficranklist',
        method: 'get',
        data: {
            stationType: 'scenicspot'
        }
    })
}


export function getTravelTimeStatics(city) {
    return request({
        url: 'api/traveltimestatics',
        method: 'get',
        data: {
            city: city
        }
    })
}
export function getTravelDistanceStatics(city) {
    return request({
        url: 'api/traveldistancestatics',
        method: 'get',
        data: {
            city: city
        }
    })
}
export function getIndividualList() {
    return request({
        url: 'api/individuallist',
        method: 'get'
    })
}
export function getIndividualRank(name) {
    return request({
        url: 'api/individualrank',
        method: 'get',
        data: {
            name: name
        }
    })
}

export function getWeekPrediction(city) {
    return request({
        url: 'api/weekprediction',
        method: 'get',
        data: {
            city: city
        }
    })
}
export function getPredictionVarCompare() {
    return request({
        url: 'api/predictionvarcompare',
        method: 'get'
    })
}
export function getHubTrafficPrediction(hubType) {
    return request({
        url: 'api/hubtrafficprediction',
        method: 'get',
        data: {
            hubType: hubType
        }
    })
} 
