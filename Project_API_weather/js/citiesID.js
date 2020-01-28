let cities = [
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=702550&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=702550&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Lviv",
        "country": "UA",
        "coord": {
            "lon": 24.023239,
            "lat": 49.838261
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=691650&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=691650&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Ternopil",
        "country": "UA",
        "coord": {
            "lon": 25.60556,
            "lat": 49.555889
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=701824&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=701824&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Mariupol",
        "country": "UA",
        "coord": {
            "lon": 37.533089,
            "lat": 47.105701
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=710719&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=710719&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Chernivtsi",
        "country": "UA",
        "coord": {
            "lon": 25.94034,
            "lat": 48.291489
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=706448&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=706448&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Kherson",
        "country": "UA",
        "coord": {
            "lon": 32.617802,
            "lat": 46.655811
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=702569&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=702569&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Lutsk",
        "country": "UA",
        "coord": {
            "lon": 25.34244,
            "lat": 50.759319
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=705812&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=705812&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Kropyvnytskiy",
        "country": "UA",
        "coord": {
            "lon": 32.259701,
            "lat": 48.513199
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=692194&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=692194&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Sumy",
        "country": "UA",
        "coord": {
            "lon": 34.800289,
            "lat": 50.9216
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=710735&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=710735&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Chernihiv",
        "country": "UA",
        "coord": {
            "lon": 31.28488,
            "lat": 51.505508
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=710791&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=710791&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Cherkasy",
        "country": "UA",
        "coord": {
            "lon": 32.062069,
            "lat": 49.428539
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=706369&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=706369&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Khmelnytskyy",
        "country": "UA",
        "coord": {
            "lon": 26.996531,
            "lat": 49.421612
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=700569&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=700569&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Mykolayiv",
        "country": "UA",
        "coord": {
            "lon": 31.9974,
            "lat": 46.965912
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=689558&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=689558&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Vinnytsya",
        "country": "UA",
        "coord": {
            "lon": 28.48097,
            "lat": 49.23278
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=696643&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=696643&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Poltava",
        "country": "UA",
        "coord": {
            "lon": 34.54073,
            "lat": 49.593731
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=695594&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=695594&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Rivne",
        "country": "UA",
        "coord": {
            "lon": 26.22743,
            "lat": 50.623081
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=686967&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=686967&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Zhytomyr",
        "country": "UA",
        "coord": {
            "lon": 28.676689,
            "lat": 50.26487
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=709930&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=709930&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Dnipro",
        "country": "UA",
        "coord": {
            "lon": 34.98333,
            "lat": 48.450001
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=709717&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=709717&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Donetsk",
        "country": "UA",
        "coord": {
            "lon": 37.799999,
            "lat": 48
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=690548&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=690548&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Uzhhorod",
        "country": "UA",
        "coord": {
            "lon": 22.299999,
            "lat": 48.616669
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=687700&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=687700&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Zaporizhzhya",
        "country": "UA",
        "coord": {
            "lon": 35.183331,
            "lat": 47.816669
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=706483&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=706483&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Kharkiv",
        "country": "UA",
        "coord": {
            "lon": 36.25,
            "lat": 50
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=703448&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=703448&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Kyiv",
        "country": "UA",
        "coord": {
            "lon": 30.516666,
            "lat": 50.433334
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=702658&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=702658&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Luhansk",
        "country": "UA",
        "coord": {
            "lon": 39.317059,
            "lat": 48.567051
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=693805&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=693805&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Simferopol",
        "country": "UA",
        "coord": {
            "lon": 34.11079,
            "lat": 44.957191
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=756135&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=756135&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Warsaw",
        "country": "PL",
        "coord": {
            "lon": 21.01178,
            "lat": 52.229771
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=2950159&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=2950159&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Berlin",
        "country": "DE",
        "coord": {
            "lon": 13.41053,
            "lat": 52.524368
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=2988507&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=2988507&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Paris",
        "country": "FR",
        "coord": {
            "lon": 2.3488,
            "lat": 48.853409
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=2761369&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=2761369&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Vienna",
        "country": "AT",
        "coord": {
            "lon": 16.37208,
            "lat": 48.208488
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=2759794&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=2759794&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Amsterdam",
        "country": "NL",
        "coord": {
            "lon": 4.88969,
            "lat": 52.374031
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=3067696&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=3067696&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Prague",
        "country": "CZ",
        "coord": {
            "lon": 14.42076,
            "lat": 50.088039
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=593116&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=593116&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Vilnius",
        "country": "LT",
        "coord": {
            "lon": 25.2798,
            "lat": 54.689159
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=456172&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=456172&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Riga",
        "country": "LV",
        "coord": {
            "lon": 24.1,
            "lat": 56.950001
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=588409&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=588409&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Tallinn",
        "country": "EE",
        "coord": {
            "lon": 24.753531,
            "lat": 59.436958
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=658225&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=658225&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Helsinki",
        "country": "FI",
        "coord": {
            "lon": 24.93545,
            "lat": 60.169521
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=6453366&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=6453366&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Oslo",
        "country": "NO",
        "coord": {
            "lon": 10.73367,
            "lat": 59.911831
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=2673730&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=2673730&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Stockholm",
        "country": "SE",
        "coord": {
            "lon": 18.064899,
            "lat": 59.332581
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=2618425&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=2618425&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Copenhagen",
        "country": "DK",
        "coord": {
            "lon": 12.56553,
            "lat": 55.675941
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=3060972&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=3060972&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Bratislava",
        "country": "SK",
        "coord": {
            "lon": 17.106741,
            "lat": 48.148159
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=2661552&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=2661552&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Bern",
        "country": "CH",
        "coord": {
            "lon": 7.44744,
            "lat": 46.94809
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=3169070&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=3169070&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Roma",
        "country": "IT",
        "coord": {
            "lon": 12.4839,
            "lat": 41.894741
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=6359304&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=6359304&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Madrid",
        "country": "ES",
        "coord": {
            "lon": -3.68275,
            "lat": 40.489349
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=2514256&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=2514256&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Malaga",
        "country": "ES",
        "coord": {
            "lon": -4.42034,
            "lat": 36.720161
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=264371&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=264371&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Athens",
        "country": "GR",
        "coord": {
            "lon": 23.716221,
            "lat": 37.97945
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=2643743&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=2643743&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "London",
        "country": "GB",
        "coord": {
            "lon": -0.12574,
            "lat": 51.50853
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=6692263&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=6692263&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Reykjavik",
        "country": "IS",
        "coord": {
            "lon": -21.85799,
            "lat": 64.118401
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=5128638&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=5128638&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "New York",
        "country": "US",
        "coord": {
            "lon": -75.499901,
            "lat": 43.000351
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=4887398&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=4887398&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Chicago",
        "country": "US",
        "coord": {
            "lon": -87.650047,
            "lat": 41.850029
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=5368361&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=5368361&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Los Angeles",
        "country": "US",
        "coord": {
            "lon": -118.243683,
            "lat": 34.052231
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=6094817&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=6094817&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Ottawa",
        "country": "CA",
        "coord": {
            "lon": -75.69812,
            "lat": 45.411171
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=6167865&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=6167865&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Toronto",
        "country": "CA",
        "coord": {
            "lon": -79.416298,
            "lat": 43.700111
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=5946768&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=5946768&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Edmonton",
        "country": "CA",
        "coord": {
            "lon": -113.468712,
            "lat": 53.55014
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=2147714&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=2147714&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Sydney",
        "country": "AU",
        "coord": {
            "lon": 151.207321,
            "lat": -33.867851
        }
    },
    {
        "id": "https://api.openweathermap.org/data/2.5/weather?id=1850147&appid=64aeed9925ade95672e44219e83ee39f",
        "daily": "https://api.openweathermap.org/data/2.5/forecast?id=1850147&cnt=2&appid=64aeed9925ade95672e44219e83ee39f",
        "name": "Tokyo",
        "country": "JP",
        "coord": {
            "lon": 139.691711,
            "lat": 35.689499
        }
    },
];