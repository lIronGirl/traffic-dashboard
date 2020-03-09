import request from '@/utils/request'

export function getTripmodeRatio() {
    return request({
        url: 'api/tripmoderatio',
        method: 'get'
    })
}