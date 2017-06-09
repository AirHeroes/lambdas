const MOCKED_DELAYED_FLIGHT = {
  "flightRecords": [
    {
      "identification": {
        "id": "daaceb6",
        "row": 4046579842,
        "number": {
          "default": "VY8323",
          "alternative": null
        },
        "callsign": "VLG83TJ",
        "codeshare": null
      },
      "status": {
        "live": false,
        "text": "Landed 01:05",
        "icon": "red",
        "estimated": null,
        "ambiguous": false,
        "generic": {
          "status": {
            "text": "landed",
            "type": "arrival",
            "color": "red",
            "diverted": null
          },
          "eventTime": {
            "utc": 1496963100,
            "local": 1496970300
          }
        }
      },
      "aircraft": {
        "model": {
          "code": "A320",
          "text": "Airbus A320-214"
        },
        "hex": "3444D1",
        "registration": "EC-MBE",
        "serialNo": "3476",
        "age": {
          "availability": true,
          "date": "Mar 2008",
          "years": 9,
          "months": 2,
          "days": 12,
          "testflight": false
        },
        "restricted": false,
        "availability": {
          "serialNo": true,
          "age": true
        }
      },
      "owner": {
        "name": "Vueling",
        "code": {
          "iata": "VY",
          "icao": "VLG"
        }
      },
      "airline": {
        "name": "Vueling",
        "short": "Vueling",
        "code": {
          "iata": "VY",
          "icao": "VLG"
        }
      },
      "airport": {
        "origin": {
          "name": "Amsterdam Schiphol Airport",
          "code": {
            "iata": "AMS",
            "icao": "EHAM"
          },
          "position": {
            "latitude": 52.308609,
            "longitude": 4.763889,
            "country": {
              "name": "Netherlands",
              "code": "NL"
            },
            "region": {
              "city": "Amsterdam"
            }
          },
          "timezone": {
            "name": "Europe/Amsterdam",
            "offset": 7200,
            "abbr": "CEST",
            "abbrName": "Central European Summer Time",
            "isDst": true
          },
          "visible": true
        },
        "destination": {
          "name": "Barcelona El Prat Airport",
          "code": {
            "iata": "BCN",
            "icao": "LEBL"
          },
          "position": {
            "latitude": 41.29707,
            "longitude": 2.078463,
            "country": {
              "name": "Spain",
              "code": "ES"
            },
            "region": {
              "city": "Barcelona"
            }
          },
          "timezone": {
            "name": "Europe/Madrid",
            "offset": 7200,
            "abbr": "CEST",
            "abbrName": "Central European Summer Time",
            "isDst": true
          },
          "visible": true
        },
        "real": null
      },
      "time": {
        "scheduled": {
          "departure": 1496940000,
          "arrival": 1496948400
        },
        "real": {
          "departure": 1496955951,
          "arrival": 1496963100
        },
        "estimated": {
          "departure": null,
          "arrival": null
        },
        "other": {
          "eta": 1496962668,
          "updated": 1496963868,
          "duration": 7140
        }
      }
    },
    {
      "identification": {
        "id": null,
        "row": 4052748982,
        "number": {
          "default": "VY8323",
          "alternative": null
        },
        "callsign": "VLG83TJ",
        "codeshare": null
      },
      "status": {
        "live": false,
        "text": "Delayed dep 22:35",
        "icon": "red",
        "estimated": null,
        "ambiguous": false,
        "generic": {
          "status": {
            "text": "delayed",
            "type": "departure",
            "color": "red",
            "diverted": null
          },
          "eventTime": {
            "utc": 1497040500,
            "local": 1497047700
          }
        }
      },
      "aircraft": {
        "model": {
          "code": "320",
          "text": null
        },
        "hex": null,
        "registration": null,
        "serialNo": null,
        "age": null,
        "restricted": null,
        "availability": {
          "serialNo": null,
          "age": null
        }
      },
      "owner": null,
      "airline": {
        "name": "Vueling",
        "short": "Vueling",
        "code": {
          "iata": "VY",
          "icao": "VLG"
        }
      },
      "airport": {
        "origin": {
          "name": "Amsterdam Schiphol Airport",
          "code": {
            "iata": "AMS",
            "icao": "EHAM"
          },
          "position": {
            "latitude": 52.308609,
            "longitude": 4.763889,
            "country": {
              "name": "Netherlands",
              "code": "NL"
            },
            "region": {
              "city": "Amsterdam"
            }
          },
          "timezone": {
            "name": "Europe/Amsterdam",
            "offset": 7200,
            "abbr": "CEST",
            "abbrName": "Central European Summer Time",
            "isDst": true
          },
          "visible": true
        },
        "destination": {
          "name": "Barcelona El Prat Airport",
          "code": {
            "iata": "BCN",
            "icao": "LEBL"
          },
          "position": {
            "latitude": 41.29707,
            "longitude": 2.078463,
            "country": {
              "name": "Spain",
              "code": "ES"
            },
            "region": {
              "city": "Barcelona"
            }
          },
          "timezone": {
            "name": "Europe/Madrid",
            "offset": 7200,
            "abbr": "CEST",
            "abbrName": "Central European Summer Time",
            "isDst": true
          },
          "visible": true
        },
        "real": null
      },
      "time": {
        "scheduled": {
          "departure": Math.round((new Date().getTime()/1000)) + 7456,
          "arrival": Math.round((new Date().getTime()/1000)) + 22456
        },
        "real": {
          "departure": null,
          "arrival": null
        },
        "estimated": {
          "departure": Math.round((new Date().getTime()/1000)) + 18456,
          "arrival": null
        },
        "other": {
          "eta": null,
          "updated": 1496973075,
          "duration": null
        }
      }
    }
  ],
  "input": {
  }
};

module.exports = {
    MOCKED_DELAYED_FLIGHT_NUMBER: 'VY8323',
    MOCKED_DELAYED_FLIGHT: MOCKED_DELAYED_FLIGHT,
};
