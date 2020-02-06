let mapStyle1 = [{
    'featureType': 'water',
    'elementType': 'all',
    'stylers': {
        'color': '#1a2028'
    }
}, {
    "featureType": "water",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    'featureType': 'land',
    'elementType': 'all',
    'stylers': {
        'color': '#111316'
    }
}, {
    'featureType': 'railway',
    'elementType': 'all',
    'stylers': {
        'visibility': 'off'
    }
}, {
    'featureType': 'highway',
    'elementType': 'all',
    'stylers': {
        'color': '#fdfdfd'
    }
}, {
    'featureType': 'highway',
    'elementType': 'labels',
    'stylers': {
        'visibility': 'off'
    }
}, {
    'featureType': 'arterial',
    'elementType': 'geometry',
    'stylers': {
        'color': '#fefefe'
    }
}, {
    'featureType': 'arterial',
    'elementType': 'geometry.fill',
    'stylers': {
        'color': '#fefefe'
    }
}, {
    'featureType': 'poi',
    'elementType': 'all',
    'stylers': {
        'visibility': 'off'
    }
}, {
    'featureType': 'green',
    'elementType': 'all',
    'stylers': {
        'visibility': 'off'
    }
}, {
    'featureType': 'subway',
    'elementType': 'all',
    'stylers': {
        'visibility': 'off'
    }
}, {
    'featureType': 'manmade',
    'elementType': 'all',
    'stylers': {
        'color': '#d1d1d1'
    }
}, {
    'featureType': 'local',
    'elementType': 'all',
    'stylers': {
        'color': '#d1d1d1'
    }
}, {
    'featureType': 'arterial',
    'elementType': 'labels',
    'stylers': {
        'visibility': 'off'
    }
}, {
    'featureType': 'boundary',
    'elementType': 'all',
    'stylers': {
        'color': '#344b5d',
        "weight": "0.5"
    }
}, {
    'featureType': 'building',
    'elementType': 'all',
    'stylers': {
        'color': '#d1d1d1'
    }
}, {
    'featureType': 'label',
    'elementType': 'labels.text.fill',
    'stylers': {
        'color': '#999999',
        'visibility': 'off'
    }
}];
let mapStyle2 = [];

export default { mapStyle1, mapStyle2 };