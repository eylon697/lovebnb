import { storageService } from './async-storage.service.js'

// propertyType: ["Entire apartment","Hotel room"],
// amenities: ["TV", "Wifi", "Kitchen", "Pets allowed", "Hair Dryer","Cookingbasics","Washer","Dryer","Iron","Free street parking","Microwave","Air conditioning","First aid kit"],

const gStays = [{
        _id: "101",
        name: "Junior King size suite",
        imgUrls: [{
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626605717/1_hyvxzu.png',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626605717/2_uyyisj.png',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626605717/3_tqmc7c.png',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626605717/4_zxmaqr.png',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626605717/5_ee7gn8.png',
            },
        ],
        price: 138.0,
        summary: "Open layout modern room with King sized bed This unit is illuminated by floor to ceiling industrial style windows, flooding the home with brilliant light. The room has a big closet, spacious bathroom, full size appliance kitchen, flat-screen smart TV and heat/air conditioning.",
        propertyType: "Hotel room",
        guests: 2,
        bedrooms: 1,
        beds: 2,
        bathrooms: 1,
        closeDates: [],
        amenities: ["TV", "Wifi", "Kitchen", "Washer", "Dryer", "Iron"],
        host: { _id: "51399391", fullName: "Jeniffer", imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626609132/4418653a-0dd7-43a1-b813-03148e1baf5c_flylht.jpg' },
        loc: {
            country: "New York",
            countryCode: "NY",
            city: "Manhattan",
            address: "New York, United States",
            nearness: "Astoria has always been a haven for new immigrants from all over the world. These days, this part of Astoria is known for its progressive politics (AOC is our Rep.), many bars and restaurants, most with sidewalk/garden dining venues. It also hosts a lovely park along the East River, popular with sports enthusiasts, dog-owners, yogis and families.",
            lat: 40.73061,
            lng: -73.935242,
        },
        rateAvg: 4.95,
        reviews: [{
                id: "asd45",
                txt: "It's a great place in a awesome location. We would definitely come back and stay here. Loved it!",
                rate: 4.8,
                at: 1626430025442,
                by: {
                    _id: "u102",
                    fullname: "Tina",
                    imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626604528/3_tmiwvd.png'
                },
            },
            {
                id: "asd46",
                txt: "Amazing! One of my favorite Airbnb stays. Beautiful windows with tons of natural light, comfy bed, nice bathroom, clean and modern space as well as building, great location. Definitely would stay again!",
                rate: 4.8,
                at: 1626430025442,
                by: {
                    _id: "u103",
                    fullname: "Soraya",
                    imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626657189/17_kfpnkm.png'
                },
            },
            {
                id: "asd47",
                txt: "Great location and amenities!",
                rate: 4.5,
                at: 1626430025442,
                by: {
                    _id: "u104",
                    fullname: "Mauricio",
                    imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626604528/4_vjwk2j.png'
                },
            },
            {
                id: "asd48",
                txt: "nice place",
                rate: 4,
                at: 1626430025442,
                by: {
                    _id: "u105",
                    fullname: "Fabian",
                    imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626604528/1_yne2xo.png'
                },
            },
            {
                id: "asd49",
                txt: "The place is wonderful! We really enjoyed our stay. Check in process was easy and the place was spotless. Has all the amenities that you need and great little touches like the coffee in the fridge. Thank you to the host! Would definitely recommend this Airbnb and would love to stay again.",
                rate: 4.2,
                at: 1626430025442,
                by: {
                    _id: "u106",
                    fullname: "Matthew",
                    imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626604528/5_x3lwvo.png'
                },
            },
            {
                id: "asd50",
                txt: "Very helpful hosts. Cooked traditional",
                rate: 4,
                at: 1626430025442,
                by: {
                    _id: "u107",
                    fullname: "Deborah Kim",
                    imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626657189/10_cmf8jg.png'
                },
            },
        ],
    },

    {
        _id: "102",
        name: "Stunner by Met & Central Park",
        imgUrls: [{
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626610639/5789710e-207d-4801-819e-01545a6db823_rrgn5r.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626610580/83a66e70-4edc-400e-a1a3-9400d8200653_udtilo.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626610597/bb8b6a08-5a1b-4f35-91e1-e2c983d6ecbc_ptlyjz.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626610576/aa8c6208-6a4e-40dd-af9b-49a0958be1f0_zpcqzc.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626610647/4ceed69a-1305-4793-89a9-eaae54a57326_yfk7x1.jpg',
            },
        ],
        price: 70.0,
        summary: "Guests enjoy weekly maid & laundry in-residence w/ gorgeous new kitchen, granite countertop workspace, floor-to-ceiling marble bathroom, and dark hardwood floors throughout.All in a smart-access, uber-secure building equipped with ultra high-speed fiberoptic wifi (1,000 Mbps) located next to museums and Central Park.",
        propertyType: "Entire home",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        bathrooms: 1,
        closeDates: [],
        amenities: ["TV", "Wifi", "Kitchen", "Cookingbasics", "Free street parking", ],
        host: { _id: "51399391", fullName: "Joshua", imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626657189/11_peioso.png' },
        loc: {
            country: "New York",
            countryCode: "NY",
            city: "Manhattan",
            address: "New York, United States",
            nearness: "Home to the Metropolitan Museum of Art, the Upper East Side is home to upscale boutiques, storefronts and eateries scattered among luxury townhouses and apartment buildings",
            lat: 40.73061,
            lng: -73.935242,
        },
        rateAvg: 4.65,
        reviews: [{
                id: "asd52",
                txt: "Comfortable, stylish and clean doesn't begin to cover this apartment. The owners take a real pride in details and the comfort of the guest. The communication was flawless, questions were answered and any glitch was taken care of. The place is on a quiet block, with bright big windows, separate comfortable bedroom, modern bathroom and a walk in shower. A home away from home, truly. Thank you for the hospitality Whitney and Josh.",
                rate: 4,
                at: 1626430025442,
                by: {
                    _id: "u108",
                    fullname: "Olga",
                    imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626604528/3_tmiwvd.png',
                },
            },
            {
                id: "asd53",
                txt: " 5 star host! Always available to help with anything you need. Perfect location near the park and museums.",
                rate: 5,
                at: 1626430025442,
                by: {
                    _id: "u109",
                    fullname: "Xilin",
                    imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626611245/Untitled_design_28_j9dfgr.png',
                },
            },
            {
                id: "asd54",
                txt: "Cute place in great neighborhood! Thank you!",
                rate: 4.7,
                at: 1626430025442,
                by: {
                    _id: "u110",
                    fullname: "Janani",
                    imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626610320/6_y2e5fg.png',
                },
            },
            {
                id: "asd56",
                txt: "Great place",
                rate: 4.6,
                at: 1626430025442,
                by: {
                    _id: "u111",
                    fullname: "Jazlyn",
                    imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626610320/5_azmfh4.png',
                },
            },
            {
                id: "asd57",
                txt: "The apartment was spacious and clean. It’s in a great location as well!",
                rate: 4.8,
                at: 1626430025442,
                by: {
                    _id: "u112",
                    fullname: "Alida",
                    imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626616321/17550671-6419-4726-b0ae-654663e9e5fa_oad3qi.jpg',
                },
            },
            {
                id: "asd58",
                txt: "We had a great time staying here. Very close to Times Square. More room than I expected!",
                rate: 4.9,
                at: 1626430025442,
                by: {
                    _id: "u113",
                    fullname: "Roni",
                    imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626657189/9_wvkluw.png',
                },
            }
        ],
    },

    {
        _id: "103",
        name: "Cozy Chic One Bedroom Upper East Side Abode",
        imgUrls: [{
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626614348/4718922c-abcb-466b-8dc1-4cd00f80eb65_qhgjab.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626614354/734726ed-cc81-4c5b-b8bc-bc84d54b9c39_qow6uq.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626614352/15ed18ef-a9f1-4c3a-8438-717f434d3634_xfojux.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626614350/98cb1a16-dc99-4acf-a39e-fb32a44acf20_ydqwxr.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626614356/eedd9cf5-6240-4707-b12f-80e60993f7d7_buxsz6.jpg',
            },
        ],
        price: 80.0,
        summary: "A true one bedroom apartment with exposed brick - both charming and reminiscent of the true NYC experience! Located on the first floor of a walk up building. Private back area, so no loud street noise - very peaceful and safe neighborhood!Location is fantastic — in the heart of the Upper East Side - a 10-minute walk to central park, 20 minute walk to midtown, one block from the subway, steps away from Weill Cornell Medical center. Apartment was also recently renovated, less than a year ago.",
        propertyType: "Entire apartment",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        bathrooms: 1,
        closeDates: [],
        amenities: ["TV", "Wifi", "Kitchen", "Cookingbasics", "Washer", "Dryer"],
        host: { _id: "51399391", fullName: "Monica", imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626614694/d38bb6fe-0a44-4ca4-8a31-ba55915d9ae2_osykfm.jpg' },
        loc: {
            country: "Israel",
            countryCode: "NY",
            city: "Manhattan",
            address: "New York, United States",
            nearness: "Astoria has always been a haven for new immigrants from all over the world. These days, this part of Astoria is known for its progressive politics (AOC is our Rep.), many bars and restaurants, most with sidewalk/garden dining venues. It also hosts a lovely park along the East River, popular with sports enthusiasts, dog-owners, yogis and families.",
            lat: 40.73061,
            lng: -73.935242,
        },
        rateAvg: 4.95,
        reviews: [{
                id: "asd59",
                txt: "Very helpful hosts. Cooked traditional...",
                rate: 4.8,
                at: 1626430025442,
                by: {
                    _id: "u114",
                    fullname: "Johanna",
                    imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626657189/17_kfpnkm.png',
                },
            },
            {
                id: "asd60",
                txt: "Very helpful hosts. Cooked traditional...",
                rate: 4,
                at: 1626430025442,
                by: {
                    _id: "u115",
                    fullname: "Sara",
                    imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626657189/10_cmf8jg.png',
                },
            },
        ],
    },

    {
        _id: "104",
        name: "Old South Lovely Garden Apartment",
        imgUrls: [{
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626616070/cbddd9c3_original_n7dizm.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626616109/16d76e2c_original_zgmm2f.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626616104/7cbec6b5-42bb-4d3f-864c-2562db8e0642_hfwtpc.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626616105/3ce936a0-22a4-407a-8639-800e87d7ee14_c74b1k.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626616107/64758f5f-bb55-47fd-b8df-798b2d563e8c_pdfvbd.jpg',
            },
        ],
        price: 78.0,
        summary: "There is a bus and tram around the corner that will take you to the city centre or any direction you would like to go. I will have a list with how to get around the city from my apartment, printed out in my apartment.",
        propertyType: "Entire apartment",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        bathrooms: 1,
        closeDates: [],
        amenities: ["TV", "Wifi", "Kitchen", "Pets allowed", "Cookingbasics", "Washer", "Dryer", "Air conditioning", "Iron", "First aid kit"],
        host: { _id: "51399391", fullName: "Joyce", imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626616321/17550671-6419-4726-b0ae-654663e9e5fa_oad3qi.jpg' },
        loc: {
            country: "Netherlands",
            countryCode: "NL",
            city: "Amsterdam",
            address: "Amsterdam, North Holland, Netherlands",
            lat: 52.377956,
            lng: 42.6048,
        },
        rateAvg: 4.7,
        reviews: [{
                id: "asd89",
                txt: "This place is really amazing! Great space and fun location for seeing different parts of Amsterdam.",
                rate: 4.5,
                at: 1626430025442,
                by: {
                    _id: "u203",
                    fullname: "Cameron",
                    imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626615942/79605792-0455-4933-a14c-45e96a361047_kzimcx.jpg',
                },
            },
            {
                id: "asd90",
                txt: "The place was lovely, just as pictured. There was lots of natural light and a nice backyard garden. It's in a nice quiet residential neighborhood with restaurants, cafes, and supermarkets nearby. Very close to Vondelpark, which you can walk through (~25 min) to get to the city center. Joyce was very welcoming and provided us with a lot of information about things to do in Amsterdam.",
                rate: 4.6,
                at: 1626430025442,
                by: {
                    _id: "u204",
                    fullname: "Sara",
                    imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626657189/10_cmf8jg.png',
                },
            },
        ],
    },
    {
        _id: "105",
        name: "Furnished Studio in Bowery Street",
        imgUrls: [{
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626615128/408f557d-19bd-4218-898d-5e3ae9be3271_ymmf6q.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626615137/81398973-e723-4d44-9cfc-574583c1125a_kn2myu.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626615032/cbf3c015-4d90-4ad4-84e3-42a8a4a71583_l2u7ho.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626615028/2d3f4873-f03b-4e96-982a-f42c22a90ab6_lhhzcs.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626615030/81398973-e723-4d44-9cfc-574583c1125a_inq5nm.jpg',
            },
        ],
        price: 100.0,
        summary: "Furnished Studio in Bowery Street",
        propertyType: "Entire apartment",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        bathrooms: 1,
        closeDates: [],
        amenities: ["TV", "Wifi", "Kitchen", "Pets allowed", "Cookingbasics", "Washer", "Dryer", "Air conditioning"],
        host: { _id: "51399391", fullName: "Michael", imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626610320/6_y2e5fg.png' },
        loc: {
            country: "New York",
            countryCode: "NY",
            city: "Manhattan",
            address: "New York, United States",
            nearness: "This new building is situated on the dynamic Bowery just steps from Soho, Nolita, Noho, and the East Village.  Its unbeatable location puts the best of downtown's galleries, boutiques, restaurants, wellness and nightlife at your doorstep.",
            lat: 40.73061,
            lng: -73.935242,
        },
        rateAvg: 4.8,
        reviews: [{
                id: "asd80",
                txt: "Newer apartment at a convenient location. Safe and clean with large window that gets a lot of sunlights. Would stay here again",
                rate: 4.8,
                at: 1626430025442,
                by: {
                    _id: "u200",
                    fullname: "Cameron",
                    imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626615942/79605792-0455-4933-a14c-45e96a361047_kzimcx.jpg',
                },
            },
            {
                id: "asd81",
                txt: "Excellent place! Clean and new, very comfortable for a short stay.",
                rate: 4.6,
                at: 1626430025442,
                by: {
                    _id: "u201",
                    fullname: "Sara",
                    imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626657189/10_cmf8jg.png',
                },
            },
        ],
    },
    {
        _id: "106",
        name: "Luxury Apartment Heart of Paris",
        imgUrls: [{
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626616814/5cac9e7b-8b9f-4e56-8746-3e73ff2bf52e_rnd2ey.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626616816/ca9127f0-e217-4931-b239-f1d3369f49d4_py0hez.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626616815/dbc5696f-5d1c-4632-b5a8-197f27a11348_ohanln.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626616817/c2665859-2253-4b4d-a587-048c2c6a0267_q1pj4f.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626616819/68b89c97-11c3-4e77-9433-fbb58acce1b6_brpoqi.jpg',
            },
        ],
        price: 96.0,
        summary: "Furnished Studio in Bowery Street",
        propertyType: "Entire apartment",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        bathrooms: 1,
        closeDates: [],
        amenities: ["TV", "Wifi", "Kitchen", "Cookingbasics", "Washer", "Dryer", "Air conditioning", "Microwave"],
        host: { _id: "51399391", fullName: "Joshua", imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626611245/Untitled_design_28_j9dfgr.png' },
        loc: {
            country: "France",
            countryCode: "FR",
            city: "Paris",
            address: "Paris, Île-de-France, France",
            nearness: "Almost everything is arround with less than 2 minuts walk(Groceries,bakeries,starbucks,ATM,SNCF office,coffees,ect.)and of course don't miss the daily (even Sunday) RUE CLER typical",
            lat: 48.8566,
            lng: 56.4504,
        },
        rateAvg: 4.6,
        reviews: [{
                id: "asd80",
                txt: "Newer apartment at a convenient location. Safe and clean with large window that gets a lot of sunlights. Would stay here again",
                rate: 4.8,
                at: 1626430025442,
                by: {
                    _id: "u200",
                    fullname: "Cameron",
                    imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626615942/79605792-0455-4933-a14c-45e96a361047_kzimcx.jpg',
                },
            },
            {
                id: "asd81",
                txt: "Excellent place! Clean and new, very comfortable for a short stay.",
                rate: 4.6,
                at: 1626430025442,
                by: {
                    _id: "u201",
                    fullname: "Sara",
                    imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626657189/10_cmf8jg.png',
                },
            },
        ],
    },
    {
        _id: "107",
        name: "Entire cabin hosted by Almog",
        imgUrls: [{
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626840862/1_pxhelo.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626840864/2_lczicn.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626840872/3309f896-799d-40b0-a138-1509edfa4c43_wsezwx.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626840869/51d60272-cfa2-4f58-aeea-24b369c65f5b_eex8gj.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626840867/7eee59af-c156-4ea7-95b6-af2391887c4a_t4hr6e.jpg',
            },
        ],
        price: 234.0,
        summary: "We invite you to come on a unique romantic getaway, at the Marom Hagam Cabin and Spa. We offer our guests a large and luxurious log cabin surrounded by natural woods. Once inside you will see that we have thought of every small detail to give you an pampering and romantic experience. The cabin has a huge jacuzzi spa, dry sauna, and an indoor and outdoor seating area. We offer you a variety of massages at an additional cost, that will make your time pleasant and unforgettable",
        propertyType: "Outdoor getaways",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        bathrooms: 1,
        closeDates: [],
        amenities: ["TV", "Wifi", "Kitchen", "Cookingbasics" , "Air conditioning", "Microwave"],
        host: { _id: "51399391", fullName: "Joshua", imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626611245/Untitled_design_28_j9dfgr.png' },
        loc: {
            country: "Israel",
            countryCode: "IL",
            city: "Amirim",
            address: "Amirim,Israel",
            nearness: "There is a grocery store nearby, a boutique store Mandarina with a local artist who designs jewlery from moreno glass and you can order a workshop.The cabin is situated in an area full of attractions and hiking trails. All the information is found in the cabin.",
            lat: 32.9374,
            lng: 35.4504,
        },
        rateAvg: 4.8,
        reviews: [{
                id: "asd80",
                txt: "Newer apartment at a convenient location. Safe and clean with large window that gets a lot of sunlights. Would stay here again",
                rate: 4.8,
                at: 1626430025442,
                by: {
                    _id: "u200",
                    fullname: "Cameron",
                    imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626615942/79605792-0455-4933-a14c-45e96a361047_kzimcx.jpg',
                },
            },
            {
                id: "asd81",
                txt: "Excellent place! Clean and new, very comfortable for a short stay.",
                rate: 4.6,
                at: 1626430025442,
                by: {
                    _id: "u201",
                    fullname: "Sara",
                    imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626657189/10_cmf8jg.png',
                },
            },
        ],
    },
    {
        _id: "108",
        name: "Entire rental unit hosted by Ori",
        imgUrls: [{
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626841763/556ef946-5561-42c7-a65d-52c90c503b82_vsunz4.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626841761/d2cc13c2-4bf4-4f96-a444-39edc6a374ea_uvx03x.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626841758/76c667fe-3022-406c-9a36-e9c57d4eb96a_ttes0a.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626841752/8bddfd2c-a705-4ce2-b182-e1daa493f993_imidf5.jpg',
            },
            {
                url: 'https://res.cloudinary.com/lovebnb/image/upload/v1626841754/f8f5af23-e316-474a-8f99-29aec48afe39_xja4lg.jpg',
            },
        ],
        price: 96.0,
        summary: "Beautiful rooftop Studio Apartment with a wonderful seaview of the Tel Aviv Port.Located very close to the Boardwalk and busy Dizengoff Street (filled with bars and restaurants)",
        propertyType: "Entire apartment",
        guests: 4,
        bedrooms: 2,
        beds: 4,
        bathrooms: 2,
        closeDates: [],
        amenities: ["TV", "Wifi", "Kitchen", "Cookingbasics", "Washer", "Dryer", "Air conditioning","Iron","Free street parking","Microwave","Air conditioning","First aid kit"],
        host: { _id: "51399391", fullName: "Joshua", imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626611245/Untitled_design_28_j9dfgr.png' },
        loc: {
            country: "Israel",
            countryCode: "IL",
            city: "Tel-aviv",
            address: "Tel-Aviv,Israel",
            nearness: "The apartment located in the north of the city, next to Tel Aviv Port. The original port of modern Tel Aviv, it is now not used for commercial shipping and has been converted into a massive compound of leisure.It's unique wooden boardwalk is lined with cafes, bars, restaurants, clothing stores, and ice cream parlors, all of which are set within the converted hangers",
            lat: 48.8566,
            lng: 56.4504,
        },
        rateAvg: 4.4,
        reviews: [{
                id: "asd80",
                txt: "Newer apartment at a convenient location. Safe and clean with large window that gets a lot of sunlights. Would stay here again",
                rate: 4.8,
                at: 1626430025442,
                by: {
                    _id: "u200",
                    fullname: "Cameron",
                    imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626615942/79605792-0455-4933-a14c-45e96a361047_kzimcx.jpg',
                },
            },
            {
                id: "asd81",
                txt: "Excellent place! Clean and new, very comfortable for a short stay.",
                rate: 4.6,
                at: 1626430025442,
                by: {
                    _id: "u201",
                    fullname: "Sara",
                    imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626657189/10_cmf8jg.png',
                },
            },
        ],
    },
]

export const stayService = {
    query,
    getById,
    getCountries,
    getMainFilter
}

const STAY_KEY = 'stays'

async function query(filterBy) {
    console.log(filterBy);
    const staysInStorage = await storageService.queryfiltered(STAY_KEY, filterBy)
    if (!staysInStorage || !staysInStorage.length) {
        storageService.postMany(STAY_KEY, gStays)
        return gStays
    }
    return staysInStorage
}

async function getById(stayId) {
    return await storageService.get(STAY_KEY, stayId)
}

async function getCountries(filterTxt) {
    return await storageService.get(STAY_KEY, filterTxt)
}

function getMainFilter(filterBy) {
    if (filterBy.country) return "country";
    else if (filterBy.propertyType) return "propertyType";
    else if (filterBy.checkIn) return "checkIn";
    else if (filterBy.guests) return "guests";
    return ''
}