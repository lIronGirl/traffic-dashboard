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

export function getConnectingTripRank() {
    return request({
        url: 'api/connectingtriprank',
        method: 'get'
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

export function getWeekPrediction(cityID) {
    return request({
        url: 'api/weekprediction',
        method: 'get',
        data: {
            cityID: cityID
        }
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

export function getJamTrendPrediction(hubName) {
    return request({
        url: 'api/jamtrendprediction',
        method: 'get',
        data: {
            hubName: hubName
        }
    })
}

export function getJamNextDayTrendPrediction(hubName) {
    return request({
        url: 'api/jamnextdaytrendprediction',
        method: 'get',
        data: {
            hubName: hubName
        }
    })
}

export function getCityClustersIndex(type) {
    return request({
        url: 'api/cityclustersindex',
        method: 'get',
        data: {
            type: type
        }
    })
}

export function getCityTrafficRank(sortBy) {
    return request({
        url: 'api/citytrafficrank',
        method: 'get',
        data: {
            sortBy: sortBy
        }
    })
}

export function getOccurrenceQuantity() {
    return request({
        url: 'api/occurrencequantity',
        method: 'get'
    })
}

export function getAttractionQuantity() {
    return request({
        url: 'api/attractionquantity',
        method: 'get'
    })
}

export function getRailQuantity() {
    return request({
        url: 'api/railquantity',
        method: 'get'
    })
}

export function getAirQuantity() {
    return request({
        url: 'api/airquantity',
        method: 'get'
    })
}

export function getStationTraffic(hubType) {
    return request({
        url: 'api/stationtraffic',
        method: 'get',
        data: {
            hubType: hubType
        }
    })
}

export function getCityClustersData(params) {
    return request({
        url: 'api/cityclustersdata',
        method: 'get',
        data: params
    })
}

export function getCityData(params) {
    return request({
        url: 'api/citydata',
        method: 'get',
        data: params
    })
}

export function getCityClustersMapdata() {
    return request({
        url: 'api/cityclustersmapdata',
        method: 'get'
    })
}

export function getHubData(params) {
    return request({
        url: 'api/hubdata',
        method: 'get',
        data: params
    })
}


export function getStationTrafficMapdata() {
    return request({
        url: 'api/stationtrafficmapdata',
        method: 'get'
    })
}

export function getLines() {
    return request({
        url: 'api/lines',
        method: 'get'
    })
}