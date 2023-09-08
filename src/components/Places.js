import React, {useState, useEffect } from 'react';
import './place.css'; // Import the CSS file for styling
import Navbar from './Navbar';
import {Link, useParams } from 'react-router-dom';
import Footer from './Footer';
import {states} from './States';
import FamousFood from './FamousFood'




const  PlacesData = [{stateid:0,state:'Andhra Pradesh',data:[

  {
    name:  'Tirupathi',
    description: 'Tirupathi is a renowned pilgrimage destination located in the state of Andhra Pradesh, India. It is home to the sacred hill of Tirumala, which is famous for the Venkateswara Temple, dedicated to Lord Venkateswara. Pilgrims from all over the world visit Thirupathi to seek blessings and offer prayers at the temple. The picturesque surroundings and serene atmosphere make Thirupathi a spiritual and peaceful place to visit.',
    image: '/images/andra/tirupati.jpg',
    famousFood: {
      name: 'Pulihora',
      description: 'One of the popular food of Tirupati is Pulihora, It is also known as tamarind rice in various parts of India. The preparation includes cooked rice which is seasoned with tamarind paste, giving it a tangy taste.',
      image: '/images/fooditem/pulihora.jpg',
    },
  },
  
  {
   
    name: ' Visakhapatnam',
    description: 'Also known as Vizag, Visakhapatnam is a coastal city with beautiful beaches, such as Rishikonda Beach and Ramakrishna Beach. The city also offers attractions like the Submarine Museum, Kailasagiri Hill Park, and the scenic Araku Valley.Also known as Vizag, Visakhapatnam is a coastal city with beautiful beaches, such as Rishikonda Beach and Ramakrishna Beach. The city also offers attractions like the Submarine Museum, Kailasagiri Hill Park, and the scenic Araku Valley.',
    image: '/images/andra/vijaz.jpg',
    famousFood: {
      name: 'Royyala Vepudu',
      description: 'which is a delicious prawn fry dish. Royyala Vepudu is a popular Andhra seafood preparation that showcases the bold flavors and spicy profile characteristic of Andhra cuisine. The prawns are marinated with a blend of aromatic spices and then deep-fried until crispy and flavorful. It is a beloved local dish that captures the essence of Visakhapatnam coastal culinary heritage',
      image: '/images/fooditem/vizag.jpg',
    },



  },
  {
    name: 'Aaraku',
    description: ' Araku Valley is a picturesque hill station nestled in the Eastern Ghats of Andhra Pradesh, India. Known for its lush green landscapes, cascading waterfalls, and coffee plantations, Araku offers a tranquil retreat from the bustling city life. The valley is also home to indigenous tribal communities, and visitors can explore their unique culture and traditions. With pleasant weather, scenic viewpoints, and hiking trails, Araku is a perfect destination for nature lovers and those seeking a rejuvenating getaway.',
    image: '/images/andra/araku.jpg',
    famousFood: {
      name: 'Bamboo Chiken',
      description: 'It is basically a chicken rice recipe steamed and cooked inside a bamboo stem, but what makes it unique is its rustic taste, texture and the use of zero oil or water. This traditional rice recipe hails from the tribal cuisine of the Araku Valley.',
      image: '/images/fooditem/aaraku.png',
    },
  },
  {
    name: 'Srisailam',
    description: 'Situated on the banks of the River Krishna in Andhra Pradesh, Srisailam is a revered pilgrimage town and an important spiritual center. It is famous for the Mallikarjuna Jyotirlinga Temple, dedicated to Lord Shiva, and the Bhramaramba Devi Temple, dedicated to the goddess Parvati. The town is surrounded by the Nallamala Hills, offering breathtaking views and opportunities for trekking and wildlife spotting. Srisailam attracts devotees and nature enthusiasts alike, providing a blend of spiritual and natural experiences.',
    image: '/images/andra/srisailam.jpg',
    famousFood: {
      name: 'Masala Dosa',
      description: 'Masala Dosa is a beloved item on the menu of many restaurants and eateries. It is a classic South Indian dish known for its crispy texture and flavorful potato filling.A thin and crispy crepe made from fermented rice and urad dal (black gram) batter.',
      image: '/images/fooditem/srisailam.jpg',
    },
  },
  {
    name: 'Papikondalu',
    description: 'Papikondalu is a scenic hill range situated along the Godavari River in Andhra Pradesh, India. The region is known for its breathtaking landscapes, dense forests, and serene backwaters. A popular way to explore Papikondalu is by taking a boat cruise along the river, enjoying the picturesque views and experiencing the tranquility of the surroundings. The journey through the winding river amidst the hills is a memorable experience, allowing visitors to connect with natures beauty and unwind in a peaceful setting.',
    image: '/images/andra/papikondalu.jpg',
    famousFood: {
      name: 'Andra Meal',
      description: 'Many local eateries and restaurants offer traditional Andhra meals, which typically include rice served with a variety of vegetable and lentil dishes, sambar (a lentil-based vegetable stew), rasam (a tangy soup), curd (yogurt), and accompaniments like papad and pickle..',
      image: '/images/fooditem/Papikondalu.jpg',
    },
  },

  {
    theme: 'beach',
    places: [
      {
        name: 'Rishikonda ',
        description: 'The Rishikonda Beach of Andhra Pradesh is absolutely exotic. The pristine waters, long stretch of golden sand and pleasant climate are going to rejuvenate your mind, body and soul. It is about 600 kilometres away from Hyderabad and has thousands of tourists every year. It is the most visited place in Vizag and one of the most famous and popular beaches in Andhra Pradesh.',
        image: '/images/rishikonda.jpg',
      },
      {
        name: 'Mypadu',
        description: 'Located about 25km away from Nellore city, Mypadu beach is one Andhra’s most picturesque beaches. The tree-lined golden sandy beach slips into the blue waters of the Bay of Bengal sea. Bask in the sun or bathe in the sea or take walk along the beach; round up your visit with a snack break at the beachside stalls. The speedboats are the newest addition',
        image: '/images/myapadu.jpg',
      },
      
    ],
  },

{
    theme: 'pilgrimage',
    places: [
      {
        name: 'Tirupathi',
        description: 'Tirupathi is a renowned pilgrimage destination located in the state of Andhra Pradesh, India. It is home to the sacred hill of Tirumala, which is famous for the Venkateswara Temple, dedicated to Lord Venkateswara. Pilgrims from all over the world visit Thirupathi to seek blessings and offer prayers at the temple. The picturesque surroundings and serene atmosphere make Thirupathi a spiritual and peaceful place to visit.',
        image: '/images/tirupati1.jpg',
      },
      {
        name: 'Srisailam',
        description: 'Srisailam is one of the twelve Jyotirlingas of Lord Shiva situated on the banks of River Krishna in Kurnool district of Andhra Pradesh. It is one of the most important pilgrimage centers of Lord Shiva in India and also one of the top Places to visit in Andhra. Srisailam is also one of the most popular weekend getaways from Hyderabad.Srisailam is famous for Srisailam Dam & Bhramaramba Mallikarjuna Temple which is dedicated to Lord Shiva. ',
        image: '/images/srisailam.png',
      },
      
    ],
  },
{
        theme: 'heritage',
         places: [
      {
        name: "Gandikota",
        description: "A historical fort on the banks of the Penna River, Gandikota is located in the Kadapa district of Andhra Pradesh. This heritage site in Andhra Pradesh was once the centre of power for various dynasties, such as the Kalyani Chalukyas, Golconda Sultanate and the Pemmasani Nayakas, whose capital city was Gandikota for over 300 years. Best known for the Gandikota Canyon, which is also called the Grand Canyon of India. ",
        image: "/images/gandikota1.jpg",
      },
      {
        name: "Kurnool Fort",
        description: "Kurnool Fort, originally known as Konda Reddy Buruju is a fort located in the heart of the Kurnool city of the scenic Andhra Pradesh. A major getaway place and outing region, Kurnool Fort has been a frequent place of visit for many people over the years. Located at the scenic region of Tungabhadra River, this gives a feel of the yesteryear’s glorious past .",
        image: "/images/kondareddy.jpg",
      },
      
    ],
  },
  {
    theme: 'wildlife',
    places: [
      {
        name: "Coringa Wildlife Sanctuary1",
        description: "Located around 18 km away from the port city of Kakinada in Andhra Pradesh, the Coringa Wildlife Sanctuary is one of the top wildlife sanctuaries in Andhra Pradesh. The sanctuary is known for its wide range of mangrove vegetation around the place. It also does have a dry deciduous forest around. The main component that the sanctuary is known around for is the wide range of birds and the small fishes and shrimps around.",
        image: "/images/coringa.jpg",
      },
      {
        name: "Rollapadu Wildlife Sanctuary",
        description: "Located around 40 km away from Kurnool, the Rollapadu Wildlife Sanctuary is one of the most popular wildlife sanctuaries in Andhra Pradesh. The place is known for the habitat of the Great Indian Bustard, which is one of the rarest species of birds found. More than animals, people visiting this sanctuary come here to see the sea of migratory birds that flock in from all directions.",
        image: "/images/rollapadu.jpg",
      },
      
    ],
  },
  {
    theme:'hillstation',
   places: [
      {
        name: "Araku Valley",
        description: "One of the most famous places to visit in Andhra Pradesh, Araku Valley is an enigmatic location where you can rejuvenate your mind and relax in the most amazing manner. The hill station is surrounded by lush greenery and natural flora and fauna. The soul-soothing climate of the Araku Valley makes it a tourist hotspot in Andhra Pradesh",
        image: "/images/araku.jpg",
      },
       {
       name: 'Papikondalu',
      description: 'Papikondalu is a scenic hill range situated along the Godavari River in Andhra Pradesh, India. The region is known for its breathtaking landscapes, dense forests, and serene backwaters. A popular way to explore Papikondalu is by taking a boat cruise along the river, enjoying the picturesque views and experiencing the tranquility of the surroundings. The journey through the winding river amidst the hills is a memorable experience, allowing visitors to connect with natures beauty and unwind in a peaceful setting.',
      image: '/images/andra/papikondalu.jpg',
     },
      
    ],
 
  },
    
    ]},




{stateid:1,state:'Arunachal Pradesh', data:[
  {
    name: 'Tawang',
    description: 'Tawang, situated at an elevation of around 3,000 meters in Arunachal Pradesh, is a picturesque town blessed with natural beauty and spiritual significance. It is home to the famous Tawang Monastery, the largest Buddhist monastery in India. The monasterys grandeur, along with the awe-inspiring views of the Himalayan peaks, draws visitors from far and wide. Tawang also offers opportunities for trekking, exploring alpine lakes, and witnessing the unique tribal culture of the Monpa people.',
    image: '/images/arp/Tawang_Gate.jpg',
    famousFood: {
      name: 'Thukpa',
      description: 'Thukpa is a traditional Tibetan noodle soup that is popular in Tawang. It is made with wheat or rice noodles, vegetables,and meat (usually chicken or mutton), and seasoned with various spices.',
      image: '/images/fooditem/Thukpa.jpeg',
      
    },
    
  },
  {
    name: 'Ziro',
    description: 'Ziro, a beautiful hill station in Arunachal Pradesh, is renowned for its captivating landscapes and serene surroundings. The town is inhabited by the Apatani tribe, known for their unique culture and sustainable agricultural practices. Ziro Valley is a UNESCO World Heritage Site and attracts travelers with its terraced rice fields, pine-clad hills, and pleasant weather. The annual Ziro Music Festival, featuring local and international artists, adds to the vibrant cultural scene of the region.',
    image: '/images/arp/ziro.jpg',
    famousFood: {
      name: 'Bamboo Shoot Curry',
      description: 'Bamboo shoots are a staple ingredient in the cuisine of Ziro. The tender bamboo shoots are cooked with various spices and herbs to make a delicious and aromatic curry.',
      image: '/images/fooditem/Bamboo-Shoot-Curry.png',
      
    },
  },
  {
    name: 'Tezu',
    description: 'Located in the easternmost part of Arunachal Pradesh, India, Tezu is a scenic town nestled in the picturesque Lohit Valley. It offers mesmerizing views of the snow-capped mountains and lush greenery. The town is known for its rich cultural heritage, and visitors can explore local tribal traditions and craftsmanship. Tezu is also a gateway to various adventure activities like river rafting and trekking, making it an ideal destination for nature lovers and adventure enthusiasts.',
    image: '/images/arp/tezu.jpg',
    famousFood: {
      name: 'Thukpa',
      description: 'Thukpa is a traditional Tibetan noodle soup that is popular in Tawang. It is made with wheat or rice noodles, vegetables,and meat (usually chicken or mutton), and seasoned with various spices.',
      image: '/images/fooditem/Thukpa.jpeg',
      
    },
  },
  {
    name: 'Itanagar',
    description: 'Itanagar serves as the capital city of Arunachal Pradesh and showcases a blend of modernity and tradition. The city is known for its architectural marvel, the Ita Fort, which dates back to the 14th century. Itanagar also houses the Jawaharlal Nehru State Museum, which exhibits tribal artifacts and cultural heritage. Visitors can immerse themselves in the local culture by exploring the bustling markets, witnessing traditional dance performances, and interacting with the diverse tribal communities.',
    image: '/images/arp/itanagar.jpg',
    famousFood: {
      name: 'Momos',
      description: 'Momos are dumplings filled with meat or vegetables, typically served with spicy chili sauce. They are a favorite snack and a must-try in Tawang.',
      image: '/images/fooditem/momos.jpg',
      
    },
  },
  {
    name: 'Bomdila-Buddisth',
    description: 'The Bomdila region in Arunachal Pradesh is famous for its Buddhist monasteries, serene landscapes, and panoramic views of the Himalayas. The Bomdila Monastery, situated at an altitude of over 2,500 meters, is a significant religious center and offers a peaceful ambiance for spiritual seekers. The regions natural beauty, with rolling hills, apple orchards, and cascading waterfalls, provides a serene escape from the citys hustle and bustle. Bomdila-Buddisth is an ideal destination.',
    image: '/images/arp/bomdila-buddist.jpg',
    famousFood: {
      name: 'Thukpa',
      description: 'Thukpa is a traditional Tibetan noodle soup that is popular in Tawang. It is made with wheat or rice noodles, vegetables,and meat (usually chicken or mutton), and seasoned with various spices.',
      image: '/images/fooditem/Thukpa.jpeg',
      
    },
  },
 
  
      {
        theme: 'pilgrimage',
        places: [
          {
            name: 'Bomdila-Buddisth',
            description: 'The Bomdila region in Arunachal Pradesh is famous for its Buddhist monasteries, serene landscapes, and panoramic views of the Himalayas. The Bomdila Monastery, situated at an altitude of over 2,500 meters, is a significant religious center and offers a peaceful ambiance for spiritual seekers. The regions natural beauty, with rolling hills, apple orchards, and cascading waterfalls, provides a serene escape from the citys hustle and bustle. Bomdila-Buddisth is an ideal destination.',
            image: '/images/arp/bomdila-buddist.jpg',
          },
          {
            name: 'Lepakshi Nandi temple',
            description: 'At a distance of 500 m from Lepakshi Bus Stand and 500 m from Sri Veerabhadra Temple (Lepakshi Temple), Lepakshi Nandi (Bull) is one of the main attractions in Lepakshi and a well-known landmark for the tourism of Lepakshi. It was built during Vijayanagara period when the main Veerabhadra Temple was built.The Lepakshi Nandi is made out of single granite. The monolithic Nandi sculpture is said to be the second largest monolithic structure in India after Gomateshwara in Shravanabelagola.',
            image: '/images/lepakshi nandi temple.jpg',
          },
          
          
        ],
      },
    {
            theme: 'heritage',
             places: [
          {
            name: 'tawang monastery',
            description: 'About 2 Kms from the town is the Tawang Monastery. The Monastery is the second biggest and oldest in Asia and is known as the Tawang Ganden Namgyal Lhatse.i.e., the celestial paradise of divine site chosen by the horse was founded by Merag Lodroe Gyamtso in the year 1680-81. The Dalai Lama gave him a painting of goddess Palden Lhamo to be kept in the monastery. The 8 m high glided statue of Lord Buddha dominates the sanctum. The great rotating prayer wheels, priceless thangkas, the drone of monks in prayer, sputtering butter lamps are an evocative vision.',
            image: '/images/tawang monster.jpg',
          },
          {
            name: "The Golden Pagoda",
            description: "The Golden Pagoda is built on plateau overlooking the plains at the foothill of the last fringes of Eastern Himalayas of patkai Range in Arunachal Pradesh. It is built in Burmese architectural design and style. The Golden Pagoda complex is spread over 20 Hectares of land and the main shrine stands on a plinth area of 4272.58 sq ft.",
            image: "/images/golden pagoda.webp",
          },
          
         
        ],
      },
      {
        theme: 'wildlife',
        places: [
          {
            name: " Dibang Wildlife Sanctuary",
            description: "The Dibang wildlife sanctuary is one of the eight wildlife sanctuaries and it is located nearby Anini district, Arunachal Pradesh.This wildlife attraction in Arunachal is endowed with various species like mishmi takin, red goral, musk deer, red panda, asiatic black bear, tiger, gongshan muntjac, sclater's monal and blyth's tragopan. Serving as a home to various flora and fauna, this sanctuary is one of the major tourist attraction and popular bio-diversity hotspots.",
            image: "/images/dibang wildlife.jpg",
          },
          {
            name: "Pakhui Wildlife Sanctuary:-  ",
            description: "Situated in the East Kameng District, Pakke Tiger Reserve is a part of Pakhui or Pakke Wildlife Sanctuary. The wildlife reserve is an ideal place for viewing and photographing four species of hornbills along with numerous animal and bird species.Pakke Tiger Reserve (PTR) offers a pristine landscape and is home to some of the rare species of flora and fauna.",
            image: "/images/pakke tiger.jpg",
          },
        
        ],
      },
      {
        theme:'hillstation',
       places: [
        {
          name: 'Ziro',
          description: 'Ziro, a beautiful hill station in Arunachal Pradesh, is renowned for its captivating landscapes and serene surroundings. The town is inhabited by the Apatani tribe, known for their unique culture and sustainable agricultural practices. Ziro Valley is a UNESCO World Heritage Site and attracts travelers with its terraced rice fields, pine-clad hills, and pleasant weather. The annual Ziro Music Festival, featuring local and international artists, adds to the vibrant cultural scene of the region.',
          image: '/images/arp/ziro.jpg',
        },
          {
            name: "Khonsa",
            description: "Khonsa is the headquarters of Tirap district in Arunachal Pradesh and is located in the Tirap Valley surrounded by Himalayan ranges. Streams, deep gorges, dense forests and snow-clad hills are some of the features which describe the terrain in Khonsa.At an average elevation of about 1,215 m from sea level, Khonsa is a beautiful little hill-station with natural beauty all around it. Bordering Myanmar in the east and Assam in the south, Khonsa is also an important military area in the North-East.",
            image: "/images/khonsa.jpg",
          },
         
        ],
      
      },
    
    
]},

{stateid:2,state:'Assam', data:[

  {
    name: 'Taiwan Tea Plant ',
    description: 'The island nation of Taiwan has been caught in the middle of diplomatic and military struggles with China, Japan, and the West for centuries, and its tea history reflects this.  Tea production started here in the late 17th century when China occupied the island.  The migration of Chinese brought tea plants and seeds.',
    image: '/images/assam1.jpg',
    famousFood: {
        name: 'BubbleTea',
        description: 'Bubble Tea, also known as Boba Tea, originated in Taiwan but has become a global sensation. It is a refreshing and fun beverage made with tea (often milk tea) and chewy tapioca pearls. It can be served hot or cold and comes in various flavors, allowing people to customize their drinks with different tea bases, milk choices, and sweeteners.',
        image: '/images/fooditem/bubbleteataiwan.jpg',

      },
  },

  {
    name: 'Kaziranga national park',
    description: 'Kaziranga National Park is a national park in the Golaghat and Nagaon districts of the state of Assam, India. The park, Kaziranga is a vast expanse of tall elephant grass, marshland, and dense tropical moist broadleaf forests, criss-crossed by four major rivers, including the Brahmaputra, and the park includes numerous small bodies of water. Kaziranga has been the theme of several books, songs, and documentaries.',
    image: '/images/kaziranga.webp',
    famousFood: {
        name: 'Tea',
        description: 'Assam is renowned for its robust and flavorful tea, which is one of the major tea-producing regions in India. Assam tea is famous for its bold and malty taste, making it a preferred choice for black tea enthusiasts worldwide. It is commonly consumed with milk and sugar, and its the base for popular beverages like "Chai" (Indian tea) and "Cutting Chai."',
        image: '/images/fooditem/assamtea.webp',

      },
  },
  {
    name: 'Kakochang waterfalls',
    description: 'The Kakochang Waterfalls is located 13 km from Bokakhat in Golaghat district, Assam. It is a beautiful waterfall that is tucked away in natures paradise. The waterfall comes cascading down in between the coffee and rubber plantations of the district making a scene breathtakingly beautiful. The Kakochang waterfall is a popular picnic spot and frequented by locals and tourists alike.',
    image: '/images/kakochangfalls.jpg',
    famousFood: {
        name: 'Laksa',
        description: 'Assam Laksa is a popular dish in Assam, Malaysia, and Singapore. It is a tangy and flavorful noodle soup made with a fish-based broth, tamarind, lemongrass, and various herbs and spices. The soup is served with thick rice noodles and garnished with shredded fish, cucumber, pineapple, mint, and torch ginger flower, adding to its unique taste and aroma.',
        image: '/images/fooditem/assamlaksa.png',

      },
  },

  {
    name: 'Kamakhya Temple',
    description: 'Located on the Nilanchal Hill in the western part of Guwahati in Assam,  Kamakhya Temple is one of the most revered shrines of Goddess Shakti in India. According to the Hindu scriptures, there are four important Shakti Peethas (Temples with highest powers of divinity) in the country and Kamakhya Temple is one of them.',
    image: '/images/kamakya.jpg',
    famousFood: {
        name: 'SimpleMeal',
        description: 'A simple Assamese meal typically consists of boiled or steamed rice served with a variety of vegetable curries, lentils (dal), and fish or meat dishes. Assam has a rich agricultural heritage, and its cuisine relies heavily on fresh and seasonal produce. The use of herbs and spices like ginger, garlic, and mustard seeds imparts a distinct flavor to the dishes.',
        image: '/images/fooditem/assamesemeal.jpg',

      },
  },
  {
    name: 'Bomdila Monastery',
    description: 'With majestic Himalayas bestowing their shadow, the beautiful town of Bomdila will offer you all an area in this terrain should.Other than sceneries and views making the area a visual treat for the eyes, wrapped around in a cool breeze and pleasant climate, the area will offer you a number of spots such as temples and wildlife sanctuaries.',
    image: '/images/bomdilla.jpg',
    famousFood: {
        name: 'Momos',
        description: 'Momos are dumplings filled with meat or vegetables, typically served with spicy chili sauce. They are a favorite snack and a must-try in Tawang.',
        image: '/images/fooditem/momos.jpg',

      },
  },
  {
        theme: 'beach',
        places: [
          
        ],
      },
      {
        theme: 'pilgrimage',
        places: [
          {
            name: 'Kedareswara Temple',
            description: 'Kedareswar temple is a significant medieval temple dedicated to Lord Shiva, constructed by the Ahom King Rajeswar Singha in the year 1753. The temple is located on the top of Madanchala Hillock in Hajo about 32Km from Guwahati, Assam. This is one of the rare Svyambhu (self-originated) linga in the Ardhnareswar (male & female) form of Lord Shiva. The linga is kept covered by a metal bowl by the priests.',
            image: '/images/assamthemes/kedareswartemple.jpg',
          },
          {
            name: 'Kamakhya Temple',
            description: 'The Kamakhya Temple, situated on the Nilachal Hill in western part of Guwahati city in Assam is one of the oldest of the 51 Shakti Peethas in India. The main temple is surrounded by individual temples dedicated to the ten Mahavidyas: Kali, Tara, Sodashi, Bhuvaneshwari, Bhairavi, Chhinnamasta, Dhumavati, Bagalamukhi, Matangi and Kamalatmika.Being the centre for Tantra worship this temple attracts thousands of tantra devotees in an annual festival known as the Ambubachi Mela. Another annual celebration is the Manasha Puja. Durga Puja is also celebrated annually at Kamakhya during Navaratri in the autumn. This five-day festival attracts several thousand visitors.',
            image: '/images/assamthemes/kamakya.jpg',
          },
          
        ],
      },
    {
            theme: 'heritage',
             places: [
          {
            name: "Rock Cut Caves",
            description: "The Rock Cut Caves in Bongaigaon are evidence of the far-reaching rock-cut architectural movement during the Salasthamba period. These five caves at Jogighopa, at the bank of the Brahmaputra river, are some of the best known examples of rock-cut structures in Assam. The Archaeological Survey of India now preserve these caves.",
            image: "/images/assamthemes/rockcutcaves.jpg",
          },
          {
            name: "Kachari Fort",
            description: "Kachar Fort often tops the chart of the most popular heritage sites in Assam. It was built by the Cachar clan during medieval times. The noteworthy architecture with splendid interior exudes charm and elegance. The fort is contoured with verdant hues which makes this place all the more picturesque. Although Kachari Fort is worn out with time, the eclectic mix of Non-Aryan and Hinduism culture enhances its glory.",
            image: "/images/assamthemes/kacharifort.jpg",
          },
          
        ],
      },
      {
        theme: 'wildlife',
        places: [
          {
            name: "Kaziranga National Park",
            description: "Kaziranga National Park is one of the most popular places to visit in Assam. The park is the home to the great One-Horned Rhinoceros. It was also declared a tiger reserve in the year 2006 and boasts a diverse flora and fauna. The national park also hosts large populations of water buffalo, elephants and swamp deer. It is also a UNESCO World Heritage Site and the ideal place to experience wildlife in Assam.",
            image: "/images/assamthemes/kaziranga.jpg",
          },
          {
            name: "Manas National Park",
            description: "Deemed as a safe shelter for several rare and endangered species, Manas National Park in Assam is a UNESCO Natural World Heritage Site, a tiger and elephant reserve, and a biosphere reserve. Manas National Park gets its name from the River Manas, which flows through the reserve and is also the major tributary of Brahmaputra River.  Sprawling in a large area of 950 sq km, the national park shares border with Bhutan's Royal Manas National Park and is also home to species like Assam roofed turtle, hispid hare, golden langur and pygmy hog. ",
            image: "/images/assamthemes/manas.jpg",
          },
          
        ],
      },
      {
        theme:'hillstation',
       places: [
          {
            name: "Haflong Hill",
            description: "Belonging to the Dima Hasao district, Haflong is the only hill station of Assam. It is a picturesque hill station that is surrounded by numerous beautiful lakes, streams, waterfalls and lush vibrant forests. Haflong is a dream destination for nature lovers and camping enthusiasts. At an altitude of more than 600 meters above sea level, it is an ideal getaway for a serene vacation. Haflong Hill is one of the major tourist attractions of Dima Hasao. It is renowned for its majestic view of the mountain ranges, bounty vibrant green forests and trekking adventures for the nature lovers.",
            image: "/images/assamthemes/haflong.jpg",
          },
          {
            name: "Umrangshu Hill",
            description: "Umrangshu is one of the well-known hill-stations of Assam, which is located exactly at the border of Assam and Meghalaya. It is about 112 km from Haflong and lies against the superb background of the exquisite North Cacher Hill region. It is located at a distance of 224 km from Guwahati, the commercial city of Assam. The hill-station deserves a commendable importance as one of the must-visit places of Assam, owing to its rich natural beauty. The place is untouched by any tints of modernity and hence, one finds nature in its true and unadulterated form here.",
            image: "/images/assamthemes/umrangshu.jpg",
          },
        
        ],
      
      },
]},

{stateid:3,state:'Bihar', data:[
  {
    name: 'Mahabodhi Temple',
    description: 'Mahabodhi Temple, one of the holiest sites of Buddhism, marking the spot of the Buddha’s Enlightenment (Bodhi). It is located in Bodh Gaya (in central Bihar state, northeastern India) on the banks of the Niranjana River.The temple is 55 metres (180 feet) in height. Its pyramidal shikhara (tower) comprises several layers of niches, arch motifs, and fine engravings.',
    image: '/images/bihar.jpg',
    famousFood: {
      name: 'Litti Chokha',
      description: 'Litti Chokha is a traditional and popular dish from the Indian state of Bihar. It consists of wheat flour balls called "litti" that are filled with a savory mixture of roasted gram flour (sattu), spices, and herbs. The stuffed litti is then baked or roasted until it becomes crisp and golden brown. Litti is traditionally served with "chokha," a flavorful mash made from roasted and mashed vegetables, such as eggplant (baingan), tomatoes, and potatoes, seasoned with spices and herbs.',
      image: '/images/fooditem/littichoka.jpg',
    },
  },
  {
    name: 'Mahavirswami Jain water temple',
    description: 'The Jal Mandir or Water Temple is situated in Pawapuri, in the Indian state of Bihar. It is a major pilgrimage destination of Jains and the temple is dedicated to Mahavira, the 24th Tirthankara, which marks the place of his cremation. Mahavira attained Nirvana in Pawapuri in 527 BC.The temple was originally built by King Nandivardhan, elder brother of Mahavira.',
    image: '/images/jainwatertemple.jpg',
    famousFood: {
      name: 'Mawa Kachori',
      description: 'Mawa Kachori is a delicious and indulgent sweet dish that originates from the Indian state of Rajasthan. It is a variation of the traditional savory kachori, but instead of a savory filling, it is filled with a rich and sweet mixture of mawa (khoya), nuts, and aromatic spices.',
      image: '/images/fooditem/mawa.jpg',
    },

  },
  {
    name: 'Ruins Of Nalanda University',
    description: 'Nalanda was a renowned mahavihara in ancient Magadha, eastern India. Considered by historians to be the worlds first residential university and among the greatest centers of learning in the ancient world, it was located near the city of Rajagriha and about 90 kilometres southeast of Pataliputra.Operating from 427 until 1197 CE,[7][8] Nalanda played a vital role.',
    image: '/images/nalanda.jpg',
    famousFood: {
      name: 'Malpua',
      description: 'Malpua is a popular sweet dish in Bihar, especially during festivals. It is a deep-fried pancake made with a batter of flour, milk, and sugar, soaked in sugar syrup, and garnished with nuts.Malpua is often garnished with chopped nuts like almonds and pistachios, and sometimes even desiccated coconut. Some variations include adding mashed ripe bananas or khoya (reduced milk solids) to the batter for extra richness.',
      image: '/images/fooditem/malpua.jpg',
    },

  },
  {
    name: 'Great Buddha (Bodh Gaya)',
    description: 'The Great Buddha statue (Daibutsu) is one of the popular stops on the Buddhist pilgrimage and tourist routes in Bodh Gaya, Bihar (India). The statue is 18.5 m (61 ft)[1] high representing the Buddha seated in a meditation pose, or dhyana mudra, on a lotus in the open air.[2] The total height of the construction is 80 ft (24 m) of which the Buddha makes up 64 ft (20 m).',
    image: '/images/buddha.jpg',
    famousFood: {
      name: 'Sattu Paratha',
      description: 'Sattu Paratha is a popular and nutritious flatbread from the Indian state of Bihar. The key ingredient in this paratha is "sattu," which is roasted gram flour. Sattu is known for its high protein content and is a common ingredient in Bihari cuisineTo prepare Sattu Paratha, a mixture of sattu, finely chopped onions, green chilies, and spices like roasted cumin seeds, ajwain (carom seeds), and salt is used as the filling. This flavorful stuffing is then enclosed within a whole wheat dough, similar to the process of making regular parathas.',
      image: '/images/fooditem/sattuparatha.jpg',
    },
  },
  {
    name: 'Takhat Sri Harimandir Ji (Patna Sahib)',
    description: 'Takht Sri Patna Sahib also known as Takhat Sri Harimandir Ji, Patna Sahib, is one of the five takhts of the Sikhs, located in Patna, Bihar, India. The construction of the takht was commissioned by Maharaja Ranjit Singh in the 18th century to mark the birthplace of Guru Gobind Singh.Due to the damage caused by an earthquake in 1934, the building was rebuilt between 1948 and 1957 for ₹20,00,000.',
    image: '/images/thakha mandir.jpg',
    famousFood: {
      name: 'Karah prasad',
      description: 'Karah Prasad is a traditional and revered sweet preparation that is an integral part of Sikh Langar. It is made with utmost love, devotion, and reverence. The process of making Karah Prasad involves combining equal quantities of wheat flour, ghee, and sugar in a specific manner.To make Karah Prasad, ghee is heated in a karah (iron vessel) over a low flame. Wheat flour is added gradually and continuously stirred to form a smooth and golden-brown mixture. Sugar is then added to sweeten the mixture, creating a delightful blend of flavors and aromas.',
      image: '/images/fooditem/kadaprasad.jpg',
    },
  },

  {
    theme: 'beach',
    places: [
      {
        name: 'Digha Beach',
        description: ' Digha is a residential neighbourhood in Patna. The area is served by Digha PS under Patna Police. Digha is mostly known for the "Ghats" mean place near Ganga river. Digha is also known for Rnet Software (software company located in Digha Bans Kothi), ITI college and WITI (Women ITI) college. It comes under Digha (Vidhan Sabha constituency). There is a place called Digha Ghat Chauhatta and a colony named Haripur colony.',
        image: '/images/digha.jpg',
      },
      {
        name: 'Mandarmani Beach',
        description: 'Mandarmani is a seaside resort village in the state of West Bengal, India, and lies in East Midnapore district, at the northern end of the Bay of Bengal. It is one of the largest seaside resorts of West Bengal, fast-developing.It is almost 172 km from Kolkata Airport on the Kolkata - Digha route. Red crabs crawling around the 13 km long beach is a special attraction of Mandarmani. It was argued to be the longest driveable (drive in) beach in India.It is located under Contai Sub division area. ',
        image: '/images/mandarmani.jpg',
      },
      
    ],
  },
  {
    theme: 'pilgrimage',
    places: [
      {
        name: 'Bodhgaya ',
        description: 'Bodh Gaya is a Buddhist pilgrimage site in Gaya District of Bihar. Famous for the Mahabodhi Temple, It was here under the Bodhi tree that Gautama Buddha attained enlightenment.It is now one of the UNESCO World Heritage Sites, and a lot of foreign countries, including Japan and China, have helped the Indian government in building facilities for the Buddhist pilgrims. The place is bustling with pilgrims all through the year from India and abroad who come to pay their homage in monasteries, temples and remnants of Bodhi Tree. ',
        image: '/images/bodhgara.jpg',
      },
      {
        name: ' Rajgir',
        description: 'Rajgir, though small area wise, is an important pilgrimage center for three of the great religions of India, Hinduism, Buddhism, and Jainism. There are pilgrimage sites of each of these religions in the town. On the Vaibhava hill are the Saptkarni caves where the first Buddhist Council was held. The Saptkarni cave is also the source of the Rajgir hot Sulphur springs that have curative properties and are scared to the Hindu.',
        image: '/images/rajgir.jpg',
      },
     
    ],
  },
  {
    theme: 'heritage',
    places: [
      {
        name: ' Nalanda ',
        description: 'The history of Nalanda in the 1st-millennium BCE is linked to the nearby city of Rajagriha (modern Rajgir) – the capital of Magadha and on the trade routes of ancient India. Given the university prestige, rulers in northeast India bequeathed villages to help fund Nalanda; the king of Sumatra contributed villages for the monastery endowment. A special fund was also established to support scholars from China ',
        image: '/images/nalanda.jpg',
      },
      {
        name: ' Golghar',
        description: 'Built in the Stupa architecture, the building has a height of 29 m. It is pillar-less with a wall of thickness of 3.6 m at the base. One can climb to the top of the Golghar via its 145-step spiral stairway. The spiral staircase was designed to facilitate the passage of the workers who loaded and unloaded the grain in the granary, who had to carry grain-bags up one flight, deliver their load through a hole at the top, and descend the other stairs. ',
        image: '/images/golghar.jpg',
      },
      
    ],
  },
  {
    theme: 'wildlife',
    places: [
      {
        name: 'Valmiki National Park',
        description: 'The extensive forest area of Valmikinagar (formally known as Bhainsa Lotan) was previously owned by the Bettiah Raj and Ramanagar Raj until the early 1950s.It was declared a Wildlife Sanctuary in 1978. Valmiki National Park was established in the year 1990. Total area of the park is about 335.65 Km2. Valmiki Wildlife Sanctuary and National Park is the 18th Tiger Reserve of the country. The Valmiki Tiger Reserve comprises the National Park and the Wildlife Sanctuary. ',
        image: '/images/valmiki.jpg',
      },
      {
        name: 'Kanwar Lake Bird Sanctuary',
        description: ' The Kanwar Taal or Kabar Taal Lake or Kabartal Wetland located in Begusarai district of Bihar, India, is Asia largest freshwater oxbow lake. It is approximately six times the size of the Bharatpur Sanctuary. In November 2020, the Ministry of Environment, Forest and Climate Change (MoEFCC) declared it the first Ramsar site in Bihar. There are a total of 75 Ramsar Sites in India till 2022',
        image: '/images/kanwar.webp',
      },
      
     
    ],
  },
  {
    theme: 'hillstation',
    places: [
      {
        name: 'Ramshila Hill Sation',
        description: 'Ramshila Hill Station is located a few kilometres from Gaya and is known for its scenic views and natural beauty. This is the first choice as far as the magnificent hill stations of Bihar are concerned. According to mythological texts, Lord Rama gave Pind Daan to his ancestors at this place and there is a temple dedicated to him, Goddess Sita and Lord Hanuman. The best time to explore the hill station is between October and February. ',
        image: '/images/ramshila.jpg',
      },
      {
        name: 'Pretshila Hill Station ',
        description: 'Around 10 km from Ramshila Hill stands Pretshila Hill and right below is the Brahma Kund where people take a dip before going for pinda-daan (offerings made to ancestors for them to have peace). The main attraction is a temple dedicated to Lord Yama, the god of death, that is situated on top of the hill. ',
        image: '/images/pretshila.jpg',
      },
      
      
    ],
  },
]},


{stateid:4, state:'Chattisgarh', data:[
  {
    name: 'Chitrakote Waterfalls',
    description: 'The Chitrakote Falls is a natural waterfall on the Indravati River, located approximately 38 kilometres to the west of Jagdalpur, in Bastar district in the Indian state of Chhattisgarh. The height of the falls is about 29 metres.It is the widest waterfall in India, reaching a width of nearly 300 metres (980 ft) during the monsoon season. Because of its width and its widespread horseshoe shape during the monsoon season.',
    image: '/images/chitrakote.jpg',
          famousFood: {
        name: 'Muthia',
        description: 'There are a variety of snacks, both sweet and savory, when it comes to Gujarati cuisine. Gujaratis love their snacks as much as other dishes and ‘muthiya’ is one of those many. This Methi Muthiya recipe is a variant, made with fresh fenugreek leaves (methi) and the core ingredient gram flour (besan). In this Muthiya recipe, I’ve shown you both the steamed and fried versions.',
        image: '/images/fooditem/muthiya.webp',

      },
  },
  {
    name: 'Bhoramdev Temple',
    description: 'Bhoramdeo Temple is a complex of Hindu temples dedicated to the god Shiva in Bhoramdeo, in the Indian state of Chhattisgarh. It comprises a group of four temples of which the earliest is a brick-temple. The main temple is the Bhoramdeo temple built in stone.The architectural features with erotic sculptures has given a distinct style akin to the Khajuraho temple and the Konarak Sun Temple in Odisha, and hence the Bhoramdeo com.',
    image: '/images/bhoramdev mandir.webp',
     famousFood: {
        name: ' Aamat',
        description: 'The locals recommend rice and pej, but they are not obligatory. The area`s indigenous people highly value the nutritional value of wild-grown veggies. The common cold, the flu, a chest infection, and a cough can all be avoided by ingesting hot Aamat. It also works well to eliminate the unpleasant aftertaste associated with a fever.',
        image: '/images/fooditem/aamat.jpg',

      },
  },
  {
    name: 'Rajiv Lochan Temple',
    description: 'Located in right bank of the Mahanadi river on the north-east of Gariaband, where it joins its tributaries called “Parry” and “Sodhur”. It is connected by road from the district headquarters and regular runs buses on the road. It is 45km far from Raipur district headquarter in the south-east. A small rail line “Raipur-Dhamtari” emanating from the Abhanapur and combines Navapara located on the other side of Rajim.',
    image: '/images/rajhivtemple.jpg',
    famousFood: {
        name: 'Chila',
        description: ' Chila is a Rajasthani breakfast dish generally made with gram flour/besan. Onion and spices are added and the batter is cooked like a dosa. I included jowar flour along with besan and mixed cucumber and amaranth leaves which make this simple dish a wholesome healthy food!',
        image: '/images/fooditem/chilla.jpg',

      },
  },
  {
    name: 'Kanger Valley National Park',
    description: 'The state of Chhattisgarh has abundant natural resources including forests and wildlife. 44% of the state is covered with forests, ranking it third in India in terms of forest cover. The state falls under the Deccan bio-geographical zone.Among the various Protected Areas (PA) in the country, Kanger Valley National Park in the Bastar region of Chhattisgarh is one of the most beautiful and densest national parks, well known for its biodiversity with picturesque landscape, magnificent waterfalls.',
    image: '/images/kangerghati.jpg',
     famousFood: {
        name: ' Bhajia',
        description: ' If you suffer from diabetes, onion bhajia can help you with balancing out glucose, which thusly could stop its beginning. Onion bhajia are rich in minerals, it contains great measures of vitamin C. It also contains fiber, manganese, nutrient B6, potassium, copper.',
        image: '/images/fooditem/bhajia.webp',

      },
  },
  {
    name: ' Barnawapara',
    description: ' Barnawapara Wildlife sanctuary, is named after Bar and Nawapara forest villages, which are in the heart of the sanctuary. It is a land mass of undulating terrain dotted with numerous low and high hillocks well forested area of North-eastern corner of Raipur district. The Tributaries of Mahanadi are the source of water. River Balamdehi forms the western boundary and Jonk River forms the north-eastern boundary of the Sanctuary. The well stocked forests of the sanctuary classified as teas, sal and mixed forests. This sanctuary is famous for the frequent sighting of the Indian bison (Gaur) Cheetal, Sambhar, Neelgai, Wild boar are commonly seen. Bar-Nawapara boosts of over 150 species Birds.',
    image: '/images/barnawarp.jpg',
    famousFood: {
        name: ' Sabudana ki Kichdi',
        description: ' Sago, also known as sabudana in Hindi, which is sold in the market in the form of small bead-like balls, is a processed and easily digestible food made up of starch and also a rich source of carbohydrates. The sago pearls (sabudana) are small; their size usually varies from 2 to 4.5 mm.1 To ensure national food security, especially at the time of natural disasters, indigenous crops like sabudana make a great choice due to their resilience against harsh environmental changes.',
        image: '/images/fooditem/khichdi1.jpg',

      },
  },
  {
    theme: 'beach',
    places: [
      {
        name: 'Bova Beach',
        description: ' In 1983, during excavations for roadwork, the ruins of the Bova Marina Synagogue were discovered. This is the second oldest confirmed site of a synagogue in Italy, the oldest being the ancient synagogue of Ostia Antica near Rome. Parts of the ancient mosaic floor are still intact, which display ancient Jewish symbols, such as the menorah and Solomon knot.',
        image: '/images/bova.jpg',
      },
   
    ],
  },
  {
    theme: 'pilgrimage',
    places: [
      {
        name: 'Dongargarh',
        description: ' Dongargarh is a Major town of india and municipality in Rajnandgaon District in the state of Chhattisgarh, India and the site of the Bambleshwari Temple and Chandragiri Jain Temple. A prominent pilgrim destination in Rajnandgaon District, the city lies about 35 kilometres (22 mi) west from Rajnandgaon, 67 kilometres (42 mi) west from Durg and 132 kilometres (82 mi) east from Bhandara which are situated on National Highway 6.',
        image: '/images/dongargarh.jpg',
      },
      {
        name: 'Pragya Giri',
        description: ' Pragya giri is an area of Dongargarh in the Rajnandgaon district of the Indian state of Chhattisgarh situated on a hilltop of 1,000 feet (300 m). There is a Buddh vihara with a large Buddha statue facing east. There are 225 steps leading up the mountain. Construction of Pragyagiri was done in 1998 by Pujya Bhadant Sangharatna Manake k (President Pannya Metta Sangha India).',
        image: '/images/pragyagiri.jpg',
      },
     
    ],
  },{
    theme: 'heritage',
    places: [
      {
        name: 'Bhoramdeo',
        description: 'The temple complex, rich in history and archeological details, is dated to the Kalachuri period (10th-12th centuries, one ruling over areas in Central India in west Madhya Pradesh, Rajasthan and were called Chedi or Haihaya (Heyheya) (northern branch)) with close identity with the sculptures found in nearby archeological sites such as Janjgir, Kalachuri, Narayanpur and Ratanpur sites.  ',
        image: '/images/bhoramdeo.jpg',
      },
      {
        name: 'Ratanpur Fort ',
        description: ' Ratanpura, originally known as Ratnapura, was the capital of Kalachuris of Ratnapura, who were a branch of the Kalachuris of Tripuri. According to the 1114 CE Ratanpur inscription of the local king Jajjaladeva I, his ancestor Kalingaraja conquered Dakshina Kosala region, and made Tummana (modern Tuman) his capital. Kalingaraja grandson Ratnaraja established Ratnapura (modern Ratanpur).',
        image: '/images/rathanpur.jpg',
      },
    
    ],
  },
  {
    theme: 'wildlife',
    places: [
      {
        name: 'Pamed',
        description: 'According to Census 2011 information the location code or village code of Pamed village is 450963. Pamed village is located in Usur tehsil of Bijapur district in Chhattisgarh, India. It is situated 85km away from sub-district headquarter Usur (tehsildar office) and 98km away from district headquarter Bijapur. As per 2009 stats, Pamed village is also a gram panchayat. ',
        image: '/images/pamed.webp',
      },
      {
        name: 'gomarda',
        description: 'Gomarda Wildlife Sanctuary, Chattisgarh has different varities of wild animals. Some of the common species are different types of dears and buffalos. Tourists visit the place to see wild buffalos who move in flocks and make for a pretty sight. If you are lucky then you can also get a other species like the Nilgiri, Sambars, Gaurs, Barking Deer, Chausinkara, Muntjac, Sloth Bear, Wild Boar, Dhole or the wild dog and the Jackel. ',
        image: '/images/gomarda.jpg',
      },
      
    ],
  },
  {
    theme: 'hillstation',
    places: [
      {
        name: 'Mainpat',
        description: 'Mainpat is an underrated hill station with green pastures, deep valleys, breathtaking waterfalls, dense forests and untouched rivulets. The hill station hasn’t been completely commercialised yet and receives a relatively smaller influx of tourists compared to its counterparts.',
        image: '/images/manipat.jpg',
      },
      {
        name: 'Chirmiri',
        description: 'At first, it was privately owned coal-mines. Dadu Lehri, as he is lovingly called, is said to be the founder of Chirimiri. Tata Iron and Steel Company then initiated prospecting of coal but no mining was carried out by them. The Chirimiri colliery was opened in 1930 (production started in 1932), New Chirimiri colliery came up in 1942, Pure Chirimiri colliery in 1945, and North Chirimiri colliery in 1946.',
        image: '/images/chirmiri.jpg',
      },
      
    ],
  },
]},

{stateid:5, state:'Goa', data:[
  {
    name: 'Calangute Beach',
    description: `Calangute is a town in the North Goa district of the Indian state of Goa.
     It is famous for its beach, the largest in North Goa and a popular tourist destination.
     The peak tourist season is during Christmas and New Year, and during the summer in May.
     During the monsoon season, from June through September, the sea can be rough and swimming
     is prohibited. The beach offers water sport activities like parasailing and water skiing, among others.` ,
    image: '/images/calangutebeach.jpg',
     famousFood: {
        name: 'Goan Fish Curry',
        description: 'Malabar matthi curry, also known as fish curry, is an Indian and Goan dish. It consists of sardines semi-stewed in a Kerala-style curry with assorted vegetables, such as okra or onions. It is usually served with rice, naan, bread, or tapioca.',
        image: '/images/goanfishcurry.webp',

      },
  },
  {
    name: 'Fort Aguada',
    description: `The fort was originally constructed in 1612 to guard against the Dutch.
    It was a reference point for the vessels coming from Europe at that time.
    This old Portuguese fort stands on the beach south of Candolim,
    at the shore of the Mandovi River. It was initially tasked with defense of shipping
    and the nearby Bardez sub-district.`,
    image: '/images/fortaguada.jpg',
     famousFood: {
        name: 'Chicken Cafreal',
        description: 'Frango à Cafreal is a spicy chicken preparation consumed widely in the Indian state of Goa. The preparation originated from the Portuguese colonies in the African continent. It was introduced into the Goan cuisine by the Portuguese and the African soldiers serving under the Portuguese.',
        image: '/images/chickencafreal.jpg',

      },
  },
  {
    name: 'Arvalem Water Falls',
    description: `There are some places which are best visited during monsoons, and Arvalem Waterfalls is one of them. Cascading from an impressive height of almost 100 feet, it’s a sight to be reckoned with.

    The intensity with which the water crashes into the lake below, is a sight that remains etched in your memory for a long time. What is especially enjoyable is the fact that you are able to enjoy viewing the waterfall from a very close distance, thanks to the walkway with secured railings that takes you quite near to it.`,
    image: '/images/arvalemwaterfalls.jpg',
      famousFood: {
        name: 'Goan Pork Vindaloo.',
        description: 'Goan vindaloo or vindalho is an Indian curry dish, which is originally from Goa, based on the Portuguese dish carne de vinha It is known globally in its British Indian form as a staple of curry house and Indian restaurant menus and is often regarded as a fiery, spicy dish. The traditional recipe uses pork, but alternative versions have been prepared with beef, mutton, prawns, chicken, lamb, vegetables and tofu',
        image: '/images/porkvindalo.jpg',

      },
  },
  {
    name: 'Dudhsagar WaterFalls',
    description: `Dudhsagar Falls ('Sea of Milk') is a four-tiered waterfall located on the Mandovi River in the Indian state of Goa. It is 60 km from Panaji by road and is located on the Belgaum–Vasco Da Gama rail route about 46 km east of Madgaon and 80 km south of Belgaum. Dudhsagar Falls is amongst India's tallest waterfalls with a height of 310 m (1017 feet) and an average width of 30 metres (100 feet).`,
    image: '/images/dudhsagar.jpg',
      famousFood: {
        name: 'Chicken Xacuti.',
        description: 'Xacuti (Konkani: शागोती Shāgōtī) is a curry prepared in Goa, India, with complex spicing, including white poppy seeds, sliced onions, toasted grated coconut, and large dried red chillies.It is usually prepared with crabs, chicken, lamb, or beef. It is also known as ‘Chacuti’ in Portuguese.',
        image: '/images/chickenxacuti.jpg',

      },
  },
  {
    name: 'Shri Mangeshi Temple',
    description: `Shri Manguesh temple (Devanagari: श्री मंगेश मंदीर) is located at Mangeshi Village in Priol, Ponda taluk, Goa.[1] It is at a distance of 1 km from Mardol close to Nagueshi, 21 km from Panaji the capital of Goa,[1] and 26 km from Margao Shree Mangueshi is the Kuldeva (family deity) of Goud Saraswat Brahman. Shrimad Swamiji of Shri Kavale Math is Spiritual chief Of Shri Manguesh Saunsthan, Mangueshi. This temple is one of the largest and most frequently visited temples in Goa.`,
    image: '/images/shrimangeshi.jpg',
     famousFood: {
        name: 'Shark Ambot',
        description: 'Goan cuisine consists of regional foods popular in Goa, an Indian state located along India west coast on the shore of the Arabian Sea. Rice, seafood, coconut, vegetables, meat, bread, pork and local spices are some of the main ingredients in Goan cuisine. Use of kokum and vinegar is another distinct feature. Goan food is considered incomplete without fish.',
        image: '/images/sharkambot.webp',

      },
  },
  {
    theme: 'beach',
    places: [
      {
        name: 'Baga Beach',
        description: 'Baga Beach is a popular beach and tourist destination in North Goa.[1][2] Baga is located at the north end of the contiguous beach stretch that starts from Sinquerim, Candolim, leads to Calangute, and then to Baga.Dolphins can be located at around 1–2 km from the shorelineParasailing in Baga BeachThe beach contains rows of shacks and fishing boats, and at high tide the beach is narrow.The beach is named after the Baga Creek, which empties into the Arabian Sea at the north end of the beach.',
        image: '/images/baga.jpg',
      },
      {
        name: 'Candolim Beach',
        description: 'Candolim Beach is one of most frequented and popular beach of Northern Goa. The beach starts at the footsteps of the highly acclaimed Fort Aguada, built by the Portuguese in 1612.This sandy stretch runs into Calangute Beach, a busy and commercialized center. ',
        image: '/images/candolim.jpg',
      },
     
    ],
  },
  {
    theme: 'pilgrimage',
    places: [
      {
        name: 'Basilica Of Bom Jesus',
        description: 'Bom Jesus (meaning, "Good/ Infant Jesus" in Portuguese) is the name used for the Ecce Homo in countries of the Lusosphere. This Jesuit church is Indias first minor basilica, and is considered to be one of the best examples of baroque architecture and Portuguese Colonial architecture in India ',
        image: '/images/basilica.jpg',
      },
      {
        name: ' Shree Mangeshi Temple',
        description: ' Shri Mangeshi temple is located at Mangeshi Village in Priol, Ponda taluk, Goa. It is at a distance of 1 Km from Mardol close to Nagueshi, 22 Km from Panaji the capital of Goa and 26 Km from Margao.This temple is one of the largest, most enchanting, serene and most frequently visited temples in Goa.',
        image: '/images/mangeshi.jpg',
      },
      
      
    ],
  },
  {
    theme: 'heritage',
    places: [
      {
        name: 'Se Cathedral ',
        description: 'The word Sé is Portuguese for See. The Se Cathedral was built to commemorate the victory of the Portuguese under Afonso de Albuquerque over a Muslim army, leading to the capture of the city of Goa in 1510. Since the day of the victory happened to be on the feast of Saint Catherine, the cathedral was dedicated to her.',
        image: '/images/secathedral.jpg',
      },
      {
        name: 'Chapora Fort',
        description: 'Across the Chapora river, the Hindu ruler of Pernem, the Maharaja of Sawantwadi who was an old enemy of the Portuguese held the fort for two years. The Portuguese came in 1717, and carried out extensive repairs of the fort, adding features like bastions and a tunnel that extended to the seashore and banks of the Chapora River for emergencies ',
        image: '/images/chapora.jpg',
      },
     
    ],
  },
  {
    theme: 'wildlife',
    places: [
      {
        name: 'Bondla Wildlife',
        description: 'Bondla Wildlife Sanctuary is located in northeastern Goa, India in Ponda taluka. The total area of the park is 8 km2. It is a popular destination for both tourists and schoolchildren. A wide variety of animal life can be encountered, including: sambar deer, Indian bison, Malabar giant squirrel, Indian peafowl and many species of snakes.',
        image: '/images/bondla.jpg',
      },
      {
        name: 'Mollem National Park',
        description: 'Bhagwan Mahaveer Sanctuary and Mollem National Park is a 240 square kilometres (93 sq mi) protected area located in the Western Ghats of West India, in Dharbandora taluk, Goa State, along the eastern border with Karnataka. The area is situated near the town of Molem, 57 kilometres (35 mi) east of Panaji, the state capital of Goa.',
        image: '/images/mollem.jpg',
      },
      
     
    ],
  },
  {
    theme: 'hillstation',
    places: [
      {
        name: 'Dandeli Hill Station ',
        description: 'Dandeli is made up of trails and green environment. The beauty of this place resides significantly in the adventurous hikes and beauty of Western Ghats. The untouched green landscapes house a staggering range of flora and fauna. Apart from the adventurous activities, there are several historical places including Ulavi temple, ancient caves of Kavla, and much more.',
        image: '/images/dandeli.jpg',
      },
      {
        name: 'Agume',
        description: 'Agumbe is a tiny hillstation tucked away in the heart of the Karnataka Western Ghats. A contiguous reserve forest borders the Someshwara wildlife sanctuary and the Kudremukha wildlife sanctuary, it is a perfect place for those who needs peace with nature. It lies in the Thirthahalli taluk and the Malnad region of Shimoga district, at a height of 2725 ft above sea level. ',
        image: '/images/agumbe.jpg',
      },
      
    ],
  },
]},

{stateid:6,state:'Gujarath', data:[
  {
    name: 'Rann Of Kutch',
    description: 'Rann of Kutch is no less than a magical place to visit mainly due to the surreal landscapes which one can witness here. It is a perfect blend between the Arabian Sea and the Thar Desert which makes it even more attractive not just to the eyes but the soul itself. And if you really want to see this magic unfurling before your eyes then you must visit here especially during nighttime.',
    image: '/images/gujrath.jpg',
    famousFood: {
        name: 'Kutchidabeli',
        description: 'Kutchi Dabeli is a popular street food snack that originated in Kutch, Gujarat. It is a flavorful and spicy potato filling sandwiched between a pav (soft bun) that is grilled with butter. The filling is made with boiled potatoes, spices, tamarind chutney, peanuts, pomegranate seeds, and sev (crunchy gram flour noodles). The combination of sweet, spicy, and tangy flavors makes Kutchi Dabeli a favorite among locals and tourists alike.',
        image: '/images/fooditem/kutchidabeli.jpg',

      },
  },
  {
    name: 'Dwaraka',
    description: 'The main draw for tourists coming to Dwarka, the Dwarkadhish Temple (Jagat Mandir), is believed to have been established more than 2500 years ago by Lord Krishnas great grandson, Vajranabh. The ancient temple has been renovated several times, especially leaving imprints of 16th and 19th centuries. The temple stands on a small hill accessed by 50 plus steps, with heavily sculptured walls that cocoon the sanctum with the main Krishna idol.',
    image: '/images/dwaraka.jpg',
    famousFood: {
        name: 'Khichdi',
        description: 'Khichidi is a simple and comforting dish made with rice and lentils, usually seasoned with basic spices like cumin seeds, turmeric, and ghee. In Gujarat, a popular variation is the "Khichidi Kadhi," where the khichidi is served with a creamy and tangy yogurt-based curry called kadhi. It is a comforting and nourishing dish often prepared during festivals and special occasions.',
        image: '/images/fooditem/khichdi.jpg',

      },
  },
  {
    name: 'Somnath Temple',
    description: 'The intricately carved honey-coloured Somnath temple on the western edge of the state is believed to be the place where the first of the twelve holy jyotirlingas emerged in India  a spot where Shiva appeared as a fiery column of light. The temples lies at the meeting of Kapila, Hiran and Sarasvati rivers and the waves of the Arabian Sea ebb and flow touching the shore on which it is constructed.',
    image: '/images/somnath.jpg',
    famousFood: {
        name: 'Khichdi',
        description: 'Khichidi is a simple and comforting dish made with rice and lentils, usually seasoned with basic spices like cumin seeds, turmeric, and ghee. In Gujarat, a popular variation is the "Khichidi Kadhi," where the khichidi is served with a creamy and tangy yogurt-based curry called kadhi. It is a comforting and nourishing dish often prepared during festivals and special occasions.',
        image: '/images/fooditem/khichdi.webp',

      },
  },
  {
    name: 'Akshardam Temple',
    description: 'Akshardham literally means the divine abode of God. It is an eternal place for one to offer devotion and experience everlasting peace. Swaminarayan Akshardham at Gandhinagar is a mandir a Hindu house of worship, a dwelling place for God, and a spiritual and cultural campus dedicated to devotion, education and unification. Timeless devotional messages and vibrant Hindu traditions are echoed in its art and architecture.',
    image: '/images/akshadarma.jpg',
    famousFood: {
        name: 'Thali',
        description: 'A "Thali" is a traditional Indian meal served on a large platter that consists of a balanced assortment of various dishes. In the context of Gujarat, a typical Gujarati Thali includes a variety of vegetarian dishes such as dal (lentils), kadhi (yogurt-based curry), vegetable curries, pickles, papad (crispy flatbread), roti (wheat bread), puri (deep-fried bread), rice, and a selection of sweets and desserts. It offers a wholesome and flavorful dining experience with an array of dishes showcasing the diverse flavors of Gujarat.',
        image: '/images/fooditem/akshardamthali.webp',

      },
  },
  {
    name: 'Statue Of Unity',
    description: 'The Statue of Unity is the worlds tallest statue, with a height of 182 metres (597 feet),located near Kevadia in the state of Gujarat, India. It depicts Indian statesman and independence activist Vallabhbhai Patel (1875–1950), who was the first deputy prime minister and home minister of independent India and an adherent of Mahatma Gandhi. Patel is highly respected for his leadership in uniting 562 princely states of India to form the single Union of India. The statue is located in Gujarat on the Narmada River in the Kevadiya colony, facing the Sardar Sarovar Dam 100 kilometres (62 mi) southeast of the city of Vadodara.',
    image: '/images/statue.jpg',
    famousFood: {
        name: 'Dhokla',
        description: 'Dhokla is a popular Gujarati snack made from fermented rice and chickpea flour. It has a spongy and slightly tangy texture and is often garnished with mustard seeds, curry leaves, and grated coconut. Dhokla is usually served with green chutney or tamarind chutney, making it a light and tasty snack that is enjoyed at any time of the day.',
        image: '/images/fooditem/dhoklasuntemple.jpg',

      },
  },
  {
    theme: 'beach',
    places: [
      {
        name: 'Dwarka Beach',
        description: 'The beach is highly popular not only for its beauty but also for the Jagat Mandir or Dwarkadheesh temple that is located closely. This beach gains major popularity among tourists due to its mesmerizing marine life. It is extremely usual to spot octopus, urchins, sea turtles, jelly fishes and dolphins on your tour around the beach. Apart from these, you can indulge in an adventurous fun time by enjoying activities such as scuba diving and swimming at Dwarka beach.',
        image: '/images/dwarkabeach.webp',
      },
      {
        name: 'Mandvi Beach ',
        description: 'Mandvi beach is situated in the Kutch district and is also a widely popular beach among tourists. This beach comprises of beautiful golden yellow sand which presents a striking colour and looks wonderful in contrast to the emerald waters that lash out at shores. Apart from experiencing its beauty, you can also indulge in a wide range of water sports such as speed boating, surfing, skiing, water scooting, parasailing, paragliding, and so on.',
        image: '/images/mandvibeach.webp',
      },
     
    ],
  },
  {
    theme: 'pilgrimage',
    places: [
      {
        name: 'Dwarkadhish Temple',
        description: ' The main draw for tourists coming to Dwarka, the Dwarkadhish Temple (Jagat Mandir), is believed to have been established more than 2500 years ago by Lord Krishna’s great grandson, Vajranabh. The ancient temple has been renovated several times, especially leaving imprints of 16th and 19th centuries. The temple stands on a small hill accessed by 50 plus steps, with heavily sculptured walls that cocoon the sanctum with the main Krishna idol.',
        image: '/images/dwarka.jpg',
      },
      {
        name: 'Somnath Temple',
        description: 'Somnath TempleSomnath Temple is a significant temple, comprising one of the twelve Jyotirlingas of Lord Shiva. Located in Prabhas Kshetra near Veraval, Somnath Mandir falls in Saurashtra region that lies on the western coast of Gujarat. The temple of Somnath can be easily reached from anywhere in Gujarat. Bus services to Somnath are available from all the cities and towns of Gujarat. To ensure a comfortable journey, one can also opt for taxis that can be hired throughout the state of Gujarat. ',
        image: '/images/somnathtemple.jpg',
      },
      
    ],
  },
  {
    theme: 'heritage',
    places: [
      {
        name: 'Rani ki vav',
        description: 'Rani Ki Vav or Queens Stepwell is a distinctive form of water storage system located in the small town of Gujarat called Patan, on the banks of River Saraswati. Believed to be the grandest stepwell in the state of Gujarat, Rani ka Vav epitomises the peak of Maru-Gujarat architectural style. The 900-year-old structure listed as a UNESCO World Heritage Site is displayed prominently in the new ₹ 100 currency note issued by the Reserve Bank of India.',
        image: '/images/ranikivav.jpg',
      },
      {
        name: 'Laxmi Vilas Palace',
        description: 'The Lakshmi Vilas Palace is located in Vadodara, Gujarat. It was constructed by the Maratha Gaekwad family, who ruled the Baroda State. Surprisingly, it has been the largest private palace built until that time, and is four times the size of Buckingham Palace. The Palace compound is of over 500 acres and houses a number of buildings.Laxmi Vilas Palace is indeed one of the grandest structures in India. Created in Indo-Saracenic style, it is a magnificent hybrid of elements from Hindu.',
        image: '/images/laxmivilaspalace.jpg',
      },
     
    ],
  },
  {
    theme: 'wildlife',
    places: [
      {
        name: 'Gir National Park',
        description: 'Located around 43kms from Somnath and 60kms from Junagadh, Gir National Park is one of the major attractions of Gujarat. Spread across nearly 1412 sq km of land, Gir National Park in Gujarat is the only place in India having the largest population of Asiatic lions. Apart from lions, the park is home to wild boar, sambar deer, spotted deer, Nilgai, and carnivorous animals, including hyena, wild cat, fox and leopard, and more than 300 species of birds.',
        image: '/images/gir.jpg',
      },
      {
        name: 'Velavadar National Park',
        description: 'Established in 1976, the Velavadar Blackbuck National Park is situated in Bhavnagar in Gujarat. Initially a private hunting ground for the Maharaja of Bhavnagar, Velavadar National Park is famous for having the rare species of blackbuck. The wildlife sanctuary is home to more than 3,000 blackbucks and over 120 species of birds, including flamingos, Pelicans, white and painted storks, etc. The Velavadar blackbuck national park also has mammals like nilgai (another Indian antelope), jungle cat, jackal, fox.',
        image: '/images/velavadarnationalpark.jpg',
      },
      
    ],
  },
  {
    theme: 'hillstation',
    places: [
      {
        name: 'Wilson Hills',
        description: 'Wilson Hills is a hill station in Gujarat in Dharampur Tehsil that is also the closest hill station to Valsad and Surat. It is located at a height of 750 m above sea level. It is located in a heavily forested location near the Pangarbari Wildlife Sanctuary and boasts amazing inspirational valleys, clean lakes, and misty clouds, not to mention the stunning dawn and sunset views across the sea. Wilson Hills will undoubtedly provide you with magnificent vistas at every step! ',

        image: '/images/wilsonhills.png',
      },
      {
        name: 'Saputara Hill Station',
        description: 'Saputara is known as a well-planned resort hill station in Gujarat because of the innumerable sightseeing, trekking and boating activities. Popular for lush green forests, undulating mountains, dazzling waterfalls, dreamy winding roads, livid landscapes and plenty of charming cubbyholes to spend time with your loved ones, the town is the first favourite among tourists.',
        image: '/images/saputarahillstation.jpg',
      },
      
    ],
  },
]},



{stateid:7, state:'Haryana', data:[
  {
    name: 'Gurgaon',
    description: `Gurgaon is India's second largest information technology hub and third largest financial and banking hub.[9][10] Gurgaon is also home to one of India's largest medical tourism industry.[11] Despite being India's 56th largest city in terms of population, Gurgaon is the 8th largest city in the country in terms of total wealth.[12] Gurgaon serves as the headquarters of many of India's largest companies, is home to thousands of startup companies and has local offices for more than 250 Fortune 500 companies`,
    image: '/images/haryana2.jpg',
     famousFood: {
        name: 'Kachri Ki Sabzi.',
        description: 'Kachri Phali ki Sabzi is a traditional Rajasthani dry vegetable recipe. A simple, rustic, and delicious village recipe made of Kachri, which belongs to the melon family and looks like a wild cucumber, with fresh green beans (phali). Kachri is a vegetable which is a wild variety of cucumber, which grows on vines. It resembles a melon but is small in size and brownish-yellow in colour.',
        image: '/images/kachriphalisabzi.jpg',

      },
  },
  {
    name: 'Panchakuta',
    description: `Panchkula[3] is a planned city and district headquarter in the Panchkula district, part of the Ambala division in Haryana, India. Panchkula is a border city with Punjab, majority of the population belongs to Punjabi community.[4] The origin of the name Panchkula came from the place where five irrigation canals meet. At present, it forms a part of an adjoining area to the Chandigarh, Mohali and Zirakpur. It is approximately 4 km (2.5 mi) southeast of Chandigarh, 105 km.`,
    image: '/images/panchakunta.jpg',
     famousFood: {
        name: 'Singri Ki Sabzi.',
        description: 'Ker Sangri is a Rajasthani delicacy made using dried Ker berries and Sangri beans. Very simple to make and delicious to eat, it is made in almost all Rajasthani households, especially in the Marwad region of the state.The berries and beans are washed very well to remove any dirt and then soaked to rehydrate them. They are then cooked in a yogurt bases spicy masala.',
        image: '/images/sangri.jpg',

      },
  },
  {
    name: 'Kingdom Of Dreams',
    description: `Kingdom of Dreams is an entertainment complex located in the Indian city of Gurgaon. Owned by the Great Indian Nautanki Company (GINC), a joint venture between Apra Group and Wizcraft, and opened in 2010, the 6 acres (24,000 m2) facility consisted of two auditoriums, the 864-seat Nautanki Mahal, the 350-seat Showshaa Theatre, and an indoor cultural "boulevard" featuring dining, crafts, and entertainment.`,
    image:'/images/kingdomofdreams.webp',
   famousFood: {
        name: 'Hara Dhania Cholia.',
        description: 'Hara Chana or green chickpeas is a favorite winter vegetable like hyacinth beans, and it is widely used in Punjabi and Haryanvi cuisine. Aloo Cholia / Potato green channa curry is one among the popular recipes with choliya. But as we love cilantro flavor, I went with Hara Dhaniya Cholia.',
        image: '/images/haracholiya.webp',

      },
  },
  {
    name: 'Kurukshetra',
    description: `A land of spiritual and historical importance, Kurukshetra is among the most visited tourist attractions in the state of Haryana. The verdant land that one can witness today, a long time back covered with the blood of Kauravas (characters on the wrong side of Dharma in Mahabharata Epic) who lost the Kurukshetra war. Having imposing history of centuries, it is said that this was the place where the battle for the Kingdom of Hastinapur had been taken place between Kauravas and Pandavas.`,
    image: '/images/kurukshetra.jpg',
     famousFood: {
        name: 'Methi Gajjar',
        description: 'Methi is a green leafy Indian vegetable that is packed with nutrients. It is loaded with iron, which is essential for the body’s growth and development.It is also rich in fiber, which keeps you filled for longer and helps in weight loss.Methi is a great green leafy vegetable to include in your diet if you are diabetic. It helps in controlling blood sugar levels.',
        image: '/images/methigajar.jpg',

      },
  },
  {
    name: 'Leisure Valley Parks',
    description: `Since Gurgaon has a dearth of green places, the Leisure Valley Park provides a welcome relief to tourists and locals who enjoy an early morning jog or just a few moments alone beside the soothing water fountain. Catering to both the young and old, the park is a great place to relax and unwind – a faraway from the hustle and bustle of city life`,
    image: '/images/leisurevalleypark1.jpg',
     famousFood: {
        name: 'Kadhi Pakora.',
        description: 'A Kadhi recipe that is a family heirloom recipe and tastes super delicious. This fabulous Kadhi Pakora is my mother-in-law’s treasured recipe of making the traditional Punjabi Kadhi with onion pakora. Here the crispy onion fritters are dunked in a spiced, savory, tangy yogurt sauce. A recipe she has been making for ages and loved by all of us.',
        image: '/images/kadhi.jpg',

      },
  },
 
  {
    theme: 'pilgrimage',
    places: [
      {
        name: 'Shree Mansdevi Temple',
        description: 'The temple, also known as Bilwa Tirth is one of the Panch Tirth (Five Pilgrimages) within Haridwar.The temple is known for being the holy abode of Mansa Devi, a form of Shakti and is said to have emerged from the mind of the Lord Shiva. Mansa is regarded as the sister of the Nāga (serpent) Vasuki.',
        image: '/images/mansadevi.jpg',
      },
      {
        name: 'Sheetala Devi Temple',
        description: 'One of the nine Shaktipeeths in the country Sheetala Mata Devi in ​​Gurgaon Village The Religious Temple pond, attracts a huge crowd of people, the year around, especially during Navaratri, around Diwali festival this temple holds two times a year in Chaitra and Ashadh months.',
        image: '/images/sheetaladevi.jpg',
      },
      
    ],
  },
  {
    theme: 'heritage',
    places: [
      {
        name: 'Sheikh Chilli Tomb',
        description: 'The main tomb belongs to Sufi Abd-ur-Rahim Abdul-Karim Abd-ur-Razak, popularly known by the name of Sheikh Chilli. He was Qadiriyya Sufi master of Mughal Prince Dara Shikoh. The architectural plan of the tomb shows considerable Persian influence. There is another tomb in the complex, believed to be of Sheikh Chilli wife',
        image: '/images/sheikhchillitomb.jpeg',
      },
      {
        name: 'Nahar Singh Mahal',
        description: 'Nahar Singh Mahal is located at Ballabhgarh in Faridabad district of Haryana.This fort was built by the forefathers of Jat Raja Nahar Singh around 1739 AD, and after whom Ballabgarh was named, the construction however continued in parts till about 1850. The fort is also known as Raja Nahar Singh Palace.',
        image: '/images/naharsign.jpg',
      },
     
    ],
  },
  {
    theme: 'wildlife',
    places: [
      {
        name: 'Kalesar National Park',
        description: 'Kalesar National Park is situated in the foot hills of Shiwalik ranges of mighty Himalayas. On map it is located between 300 18’ to 300 27’ North latitude & 770 18’ to 770 35’ East longitude. It falls under Yamunanagar District of Haryana, sharing boundary with three States viz., Himachal Pradesh, Uttranchal & U.P. The Yamuna river form the Eastern boundary with Uttar Pradesh, the main Shiwalik ridge separates State boundary among Haryana, Himachal Pradesh & Uttaranchal in the north.',
        image: '/images/kalesar.webp',
      },
      {
        name: 'Sulthanpur National Park',
        description: 'Sultanpur is named after Chauhan Rajput raja Sultan Singh Chauhan, a great grandson of Harsh Dev Singh Chauhan.[4] Harsh was one of 21 sons of king Sangat Singh Chauhan.[4] Raja Sangat Singh was a great-grandnephew of king Prithviraj Chauhan (reign. c. 1178–1192 CE ) according to historical recorded by British raj Indian civil servant and historian Henry Elliot (1817-1907)',
        image: '/images/sulthanpur.jpg',
      },
   
    ],
  },
  {
    theme: 'hillstation',
    places: [
      {
        name: 'Parwanoo Hill Station ',
        description: 'Parwanoo or Parwanu is a municipal council in Solan district in the Indian state of Himachal Pradesh. It is an industrial town. It has himachal biggest wholesale market. It borders Panchkula district of Haryana, and is after the towns of Pinjore and Kalka on the Chandigarh Simla Highway. In fact it is separated by a river bed from the town of Kalka.Pinjore to Parwanoo is almost a continuous urban belt. From Pinjore there is also a road to Baddi. Another nearby industrial town of Himachal.',
        image: '/images/parwanoo.jpg',
      },
      {
        name: 'Morni Hill Station',
        description: 'Morni Hills is a hill station situated on the outskirts of Panchkula in Haryana close to Chandigarh. Being the only hill stations in Haryana, it is also a popular picnic destination for locals and tourists alike. The hills are 1,220 metres in height and have some really stunning views to offer. In addition to being a grand vista point, Morni Hills is also an important archaeological site where carvings dating back to 7th Century have been found in the Thakur Dwar Temple.',
        image: '/images/morni.jpg',
      },
      
    ],
  },

]},

{stateid:8,state:'Himachal Pradesh', data:[
  {
    name: 'Shimla',
    description: 'Often called the Queen of Hills, Shimla is a mesmerizing hill station in Himachal Pradesh. It is one of the top hill stations in India, and among the top Himachal tourist places. It is located about 112 km from Chandigarh, and 348 km from New Delhi.Among the top hill stations in Himachal, Shimla derives its name from Goddess Shyamala, an incarnation of Goddess Kali. Kali Bari Temple, Annandale, Vice Regal Lodge, Jakhu Temple / Jakhu Hill, The Mall, Tara Devi Temple, Christ Church in Shimla.',
    image: '/images/himachalpradesh.jpg',
    famousFood:{
      name:'Madra',
      description:'Chana means “chickpeas” and Madra means “thick yogurt curry” in Himachal. So Chana Madra is nothing but a simple curry from the Pahari cuisine where white chickpeas are boiled and added to a spicy and tangy yogurt based gravy.',
      //https://www.fabhotels.com/blog/wp-content/uploads/2022/07/maxresdefault-2-1.jpg
      image:'/images/Madra.jpg',
},

  },
  {
    name: 'Manali',
    description: 'Manali is a breathtakingly beautiful hill station nestled in the mountains of Himachal Pradesh near the northern end of the Kullu Valley. About 295 km from Chandigarh, and 545 km from Delhi, it is one of the top hill stations in Himachal, and among the top places to visit near Chandigarh.Renowned for its snow-covered mountains, scenic beauty, history, and culture, Manali is located at an altitude of 2050 m and is spread along the banks of the river Beas. Manali is named after the Hindu lawgiver Manu.',
    image: '/images/mannali.jpg',
    famousFood:{
      name:'Dham',
      description:'The food is served on leaf plates called pattal or pattlu   in local Himachali language. The dham includes plain aromatic rice, fried pulses or dal, spicy vegetable curry of red kidney beans and many desserts to satisfy ones appetite. The traditional dham differs in every region of the state.',
      //https://assets.cntraveller.in/photos/62284352810f046cc2f6dc1c/16:9/w_1920,h_1080,c_limit/HImachali%20Dham.jpg
      image:'/images/Dham.jpg',
},
  },
  {
    name: 'Dharamshala',
    description: 'At an average altitude of 1,475 m above sea level, Dharamshala is a pristine hill station situated in the Kangra district of Himachal Pradesh. It is one of the best hill stations in Himachal Pradesh, and among the most famous places to visit near Delhi. It is about 234 km from Manali, 237 km from Shimla, and 486 km from Delhi.Often called the gateway to the Kangra valley, Dharamshala is the headquarters of Kangra district and among the must-include places in Himachal tour packages.',
    image: '/images/dharmashala.jpg',
    famousFood:{
      name:'Tudkiya Bhath',
      description:'Tudkiya Bhath is a slow-cooked rice recipe that originates from the northern state of Himachal Pradesh. Along with being blessed with one of the most picturesque places in the country, the hill state is also home to some scrumptious dishes that once tasted, will leave a mark on your taste buds forever!',
      //https://www.honeymoonbug.com/blog/wp-content/uploads/2023/04/Mittha-food-himachal.jpg
      image:'/images/tudkiya-bhaat.jpg',
},
  },
  {
    name: 'DalHousie',
    description: ' Netaji Subhash Chandra Bose was won over by the beauty of Dalhousie, a famous tourist destination in Himachal Pradesh, so much so, that he stayed here for many months in 1937. Today, he has two places named after him - Subhash Baoli and Subhash Chowk. The hill station has the same effect on tourists today, with its waterfalls, rivers making their way through mountains, dense forest trails that run parallel to enormous cliffs with grand views of Dauladhar range in the distance and a couple of churches that were built during the British Raj. Cafes, markest, Mall Road, those are equally convincing reasons to plan a trip to Dalhousie.',
    image: '/images/dalhousei.webp',
    famousFood:{
      name:'Bhey or Spicy Lotus stems',
      description:'The next state in our food series is Himachal Pradesh. The people of HP prefer very spicy food mainly influenced with Punjabi and Tibetan cuisine.One of the most important food item is Dal and Chawal or plain rice and pulses. Another delicious food item is Roti and Sabzi or like wheat flatbread and vegetable curry.',
      //https://www.fabhotels.com/blog/wp-content/uploads/2022/07/bhey-min.jpg
      image:'/images/bhey spicy lotus stem.jpg',
},
  },
  {
    name: 'Mcleodganj',
    description: 'Mcleodganj, Himachal Pradesh is one of the most popular tourist destinations for its tibetan culture, nature treks, greenery, ancient temples & monasteries, and british influence. Located in the Kangra district, its on the outskirts of Dharamshala.Famous for being home to the Tibetan spiritual leader Dalai Lama, Mcleod Ganj is culturally blessed by a prominent Tibetan influence owing to the major settlement of Tibetans here who fled their homeland.',
    image: '/images/mcleod.jpg',
    famousFood:{
      name:'Thenthuck',
      description:'Thenthuk -Tibetan- Wylie: then thug or hand-pulled noodle soup (thukpa), is a very common noodle soup in Tibetan cuisine, especially in Amdo, Tibet where it is served as dinner and sometimes lunch. The main ingredients are wheat flour dough, mixed vegetables and some pieces of mutton or yak meat.',
      //https://static-blog.treebo.com/wp-content/uploads/2017/12/Thenthuck.jpg
      image:'/images/thenthuk-3.jpg',

},
  },
  
  {
    theme: 'beach',
    places: [
      {
        name: 'Kashwari',
        description: 'kashawari river beach Himachal Pradesh Kashawari river beach is on the way to Kasol.its beautiful place to spend time at beach side .',
        image: '/images/kashawari.webp',
      },
     
    
    ],
  },
  {
    theme: 'pilgrimage',
    places: [
      {
        name: ' Naina Devi ',
        description: 'Naina Devi is the first on the list of most popular pilgrimage sites in Himachal Pradesh. This temple is located in the Bilaspur district at an altitude of 1177 meters. It is said Goddess Sati burnt herself, this made Lord Shiva furious. When Lord Shiva gets enraged he performs his Tandav Dance, and so he did holding Goddess Sati on his shoulders.This further led Lord Vishnu to strike his Chakra cutting the body parts of Goddess Sati into several pieces, and her eyes fell to this temple.',
        image: '/images/Naina-Devi-temple.jpg',
      },
      {
        name: 'Jwalamukhi Temple (Kangra)',
        description: 'The temple lies in the Kangra district of Himachal Pradesh and is counted among the most visited pilgrimage sites of Himachal Pradesh. Jwalamukhi got its name from Jwala (flame) and mukhi (mouth). The idol of this temple is one of its kind; an eternal flame in the rocks.The temple is dedicated to Goddess Jwala and it is believed that here is Goddess Satis tongue fell after being struck by Vishnu’s Chakra.',
        image: '/images/Jwalamukhi_temple,kangra,_himachal_prades.jpg',
      },
      {
       name:'Baijnath (Dhauladhar)',
       description:'Baijnath Temple lies in a small town in Dhauladhar Range and is one of the most religious pilgrimage sites in Himachal Pradesh. This one thousand-year-old temple is dedicated to Lord Shiva. A great throng of pilgrims visits Baijnath Temple, especially during the Shivratri festival.',
       image:'/images/Baijnath-Temple.jpg',
      },
      
    ],
  },
{
        theme: 'heritage',
         places: [
      {
        name: "McLeod Ganj",
        description: "Hill Station Historical & Heritage Surrounded by the Dhauladhar ranges, McLeod Ganj, also spelt McLeodGanj, is a scenic hill station that lies at an altitude of 2082 m in Himachal Pradesh. About238 km from Manali, 240 km from Shimla, and 490 km from Delhi, it is one of the popular places to visit as part of Himachal",
        image: "/images/McLeodganj.jpg",
      },
      {
        name: "Dharamshala",
        description: "Hill Station Historical & Heritage At an average altitude of 1,475 m above sea level, Dharamshala is a pristine hill station situated in the Kangra district of Himachal Pradesh. It is one of the best hill stations in Himachal Pradesh, and among the most famous places to visit near Delhi. It is about 234 km from Manali, 237 km from Shimla, and 486 km from Delhi.",
        image: "/images/monast.jpg",
      },
      {
        name: "Arki Fort And Palace (Near Shimla)",
        description: "Historical & Heritage At a distance of 38 km from Shimla, Arki is a small town situated at 4100 ft above sea level in the Solan district of Himachal. Arki Fort is one of the famous places to visit near Shimla, and among the best places of heritage in Himachal.",
        image: "/images/Arki.jpg",
      },
      
    ],
  },
  {
    theme: 'wildlife',
    places: [
      {
        name: "Great Himalayan National Park",
        description: "The Great Himalayan National Park is one of the most famous national parks in India and a UNESCO World Heritage Site. Stretched across an area of 754sq. km, it is situated in the Kullu district. It consists mostly of temperate and alpine forests along with virgin coniferous forests.The park also covers enormous areas of alpine pastures and glaciers. Several important wildlife species of Western Himalayas like musk deer, goral, leopard, snow leopard, serow, bharal, brown bear, kalij, monal, tragopan, cheer, kolkas, and snow cock, besides others, can be found here.",
        image: "/images/Great-Himalayan-National-Park-Musk-deer.jpg",
      },
      {
        name: "Bandli Sanctuary",
        description: "Bandli Wildlife Sanctuary, Himachal Pradesh is home to the rare snow leopard and Chir pheasant.Situated seven kilometers from Sunder Nagar town, Mandi, Bandli Sanctuary- Himachal Pradesh, is a must see if you are in the vicinity of Himachal Pradesh.The government of Himachal Pradesh is instrumental in preserving the wildlife sanctuaries and parks of the state, with a view to balance the ecological system.",
        image: "/images/HIMACHAL-PRADESH.webp",
      },
      {
        name: "Chail Wildlife Sanctuary",
        description:"Chail Wildlife Sanctuary is counted among the best national parks and wildlife sanctuaries in Himachal Pradesh. The wildlife sanctuary was established in the year 1976 and is home to an impressive variety of wildlife. The flora consists of mostly deodar and oak forests, with grasslands too in abundance.The main attractions are sambhar, goral, and cheer pheasants. Some of the most commonly spotted wildlife are Rhesus Macaque, Leopard, Indian Muntjac, Goral and Crested Porcupine, Himalayan Black Bear, Wild Boar, and common Langur. Another special attraction for tourists is the Cheer pheasant breeding center.",
        image: "/images/Chail-Wildlife-Sanctuary-Himachal2.webp",
      },
      
    ],
  },
  {
    theme:'hillstation',
   places: [
      {
        name: "Manali",
        description: "Manali is a town, near Kullu town in Kullu district in the Indian state of Himachal Pradesh.It is situated in the northern end of the Kullu Valley, formed by the Beas River. The town is located in the Kullu district, approximately 270 kilometres (170 mi) north of the state capital of Shimla and 544 kilometres (338 mi) northeast of the national capital of New Delhi.",
        image: "/images/mannali.jpg",
      },
      {
        name: "Dalhousie",
        description: "Dalhousie is a high-altitude town spread across 5 hills near the Dhauladhar mountain range in the north Indian state of Himachal Pradesh. It's home to colonial-era buildings, including St. Francis and St. John’s churches, which date back to the rule of the British Raj in the 1800s. A trek up Dainkund Peak leads to Pholani Devi Temple. To the north, Subhash Baoli is a peaceful area with pine trees and panoramic views. ",
        image: "/images/dalhousie-_new.jpg",
      },
      {
        name:'Shoghi',
        description:'shoghi is a village located in Shimla district of Himachal Pradesh, India. The village is situated 15 km away from Shimla, district & sub-district headquarter of the village. According to 15th Indian Census the village has a total population of 1,256 peoples with 685 male population and 571 female population.Shogi village is known as a village of temples.',
        image:'/images/download.jpg',
      },
   ]
  }
]},

{stateid:9,state:'Jammu And Kashmir', data:[
  {
    name: 'Sonmarg',
    description: 'Sonamarg is a picturesque hill station in Jammu and Kashmir, located 80km north-east of Srinagar. At an elevation of around 2,730 metres above sea level, Sonamarg is known for its snow-laden fields, surrounded by majestic glaciers and serene lakes which casts subtle spells on the travellers.The hill is enveloped by the great Himalayan glaciers - Kolhoi Glacier and Machoi Glacier - and gives rise to the famous Three Sisters of Kashmir Valley.',
    image: '/images/sonmarg.jpg',
    famousFood: {
        name: 'RajmaChawal',
        description: 'Rajma Chawal is a staple and comforting dish in Jammu and Kashmir cuisine. It is made with kidney beans (rajma) cooked in a thick and spicy tomato-based gravy, usually served with steamed rice (chawal). Rajma Chawal is a popular and nutritious meal loved by locals and visitors alike.',
        image: '/images/fooditem/rajmachawal.webp',

      },
  },
  {
    name: 'Vaishnodevi Mandir',
    description: 'The Vaishno Devi Temple is an important Hindu temple dedicated to Vaishno Devi located in Katra at the Trikuta Mountains within the Indian Union territory of Jammu and Kashmir. It is one of the most visited pilgrimage centers of India. Every year millions of visitors visit the temple.Vaishno Devi (also known as Mata Rani, Trikuta, Ambe and Vaishnavi) is a manifestation of the Hindu mother goddess Durga or Adi Shakti.',
    image: '/images/vaishnavdevi.jpg',
    famousFood: {
        name: 'PuriBhaji',
        description: 'Puri Bhaji is a popular vegetarian dish in Jammu and Kashmir cuisine. It consists of puris (deep-fried bread) served with a spicy and flavorful potato curry called "Bhaji." The puris are light and puffy, while the bhaji is made with potatoes cooked in a blend of spices, including cumin, turmeric, and coriander. It is a favorite breakfast or brunch option for many in the region.',
        image: '/images/fooditem/puribhaji.png',

      },
  },
  {
    name: 'Dal Lake',
    description: 'Bounded by Pir Panjal mountain ranges and enclosed by Mughal Gardens, Dal Lake is one of the most popular places in Srinagar. Reckoned to be the pride of Kashmir, this serene lake is nestled in the heart of Srinagar. The houseboats and Shikaras are the significant attractions of Dal Lake in Kashmir. Dal Lake is also famous for its floating market, which boasts incredible vistas and jaw-dropping beauty. The lakes shoreline is almost 15.5 km and sprawling with numerous gardens and hotels. ',
    image: '/images/dallake.jpg',
    famousFood: {
        name: 'Wazwan',
        description: 'Wazwan is not a specific dish but a traditional multi-course meal of Kashmiri cuisine, typically served during special occasions and celebrations. It is a grand feast comprising various dishes, mostly prepared with mutton. Some of the popular dishes served in a Wazwan include Roganjosh, Rista (meatballs in red gravy), Gushtaba (minced mutton meatballs in yogurt-based gravy), and Seekh Kebabs. Wazwan represents the rich culinary heritage of Kashmir and is often served by skilled chefs known as "Wazas."',
        image: '/images/fooditem/kashmiriwazwan.jpg',

      },
    
   
  },
  {
    name: 'Srinagar ',
    description: ' It is the largest city and summer capital of Jammu and Kashmir, which is an Indian-administered union territory. It lies in the Kashmir Valley along the banks of the Jhelum River, and the shores of Dal and Anchar lakes, between the Hari Parbat and Shankaracharya hills. The city is known for its natural environment, various gardens, waterfronts and houseboats. It is also known for traditional Kashmiri handicrafts like the Kashmir shawl (made of pashmina and cashmere wool), papier-mâché, wood carving, carpet weaving, and jewel making, as well as for dried fruits ',
    image: '/images/srinagar.jpg',
    famousFood: {
        name: 'Mutton Roganjosh',
        description: 'Mutton Roganjosh is a signature Kashmiri dish made with tender pieces of mutton (lamb or goat) cooked in a rich and aromatic red gravy. The dish is flavored with a blend of traditional Kashmiri spices, such as fennel seeds, ginger, garlic, and Kashmiri red chili powder. It is slow-cooked until the meat becomes tender and absorbs all the flavorful spices, resulting in a mouthwatering and comforting dish.',
        image: '/images/fooditem/muttonroganjosh.jpg',

      },
  },
  {
    name: 'Amarnath Temple',
    description: 'Amarnath cave is a famous Hindu shrine, which contains the Shiva Linga formed due to melting of ice from the roof of the cave onto the floor. The cave is situated at a height of 3,888 m and is 141 km from Srinagar, the capital of Jammu and Kashmir. The cave which is surrounded by snowy mountains on all sides holds an important part in the Hindu religious system and is considered as one of the holiest shrines of Lord Shiva.',
    image: '/images/amarnathcave.jpg',
   famousFood: {
        name: 'Vegetable Thali',
        description: 'A "Thali" is a traditional Indian meal served on a large platter that consists of a balanced assortment of various dishes. In the context of Jammu and Kashmir cuisine, a typical Kashmiri Thali may include aromatic rice, roti or naan, a variety of vegetarian and non-vegetarian dishes, dal, curries, chutneys, and desserts. It offers a wholesome and flavorsome dining experience with a combination of sweet, savory, and spicy flavors.',
        image: '/images/fooditem/amarnaththali.jpg',

      },
  },
  {
    theme: 'beach',
    places: [
      {
        name: 'Purthu Beach',
        description: 'Purthu beach is a big lush green chunk of land encircled by the backwaters of the RSD from the three sides in a peninsular shape. Some Date trees are seen grown on the periphery of the enclosed ground. The fresh blue water wavelets and the ripples formed due to the movement of the lake water toss the banks producing soothing musical notes.The tourists who spend their nights at the beach arrange small tents to live within. Some of the tourists prepare their meals there but many manage their lunch packs from the local caterers',
        image: '/images/purthubeach.webp',
      }, 
    ],
  },
  {
    theme: 'pilgrimage',
    places: [
      {
        name: 'Vaishno Devi Temple',
        description: 'The Vaishno Devi Temple is an important Hindu temple dedicated to Vaishno Devi located in Katra at the Trikuta Mountains within the Indian Union territory of Jammu and Kashmir. The temple is one of the 108 Shakti Peethas dedicated to Durga, who is worshipped as Vaishno Devi.Former Governor of Jammu and Kashmir Jagmohan says, "the Mata Vaishno Devi shrine is an ancient one whose antiquity is pre-Mahabharathan.',
        image: '/images/vaishnodevitemple.jpg',
      },
      {
        name: 'Amarnath Cave Temple',
        description: 'Amaranth cave, one of the important and holiest shrines in Hinduism, is located in Jammu & Kashmir. The cave is situated about 141 km from Srinagar, the summer capital of Jammu & Kashmir. The cave is covered with snow throughout the year, except the very short period of summer when it is open for pilgrims.Amarnath caves are one of the most famous shrines in Hindu. Dedicated to the god Shiva, the shrine is said to be over 5,000 years old. The shrine forms an important part of Hinduism. The cave is surrounded by snowy mountains.',
        image: '/images/amarnathcavetemple.jpg',
      },
      
    ],
  },
  {
    theme: 'heritage',
    places: [
      {
        name: 'Amar Mahal Palace',
        description: 'Amar Mahal Palace, a palace earlier, has now been converted into a museum. A French architect constructed the museum for Raja Amar Singh in 1862. The architectural style of the palace is the Continental Castle style. This palace is located at the top of the hill and overlooks the Tawi river.A golden throne weighing 120 kg, Pahari and Kangra miniature paintings, a library of 25,000 antique books, and many rare art collections can be found here easily.',
        image: '/images/amarmahal.webp',
      },
      {
        name: 'Bahu Fort',
        description: 'Situated 5 kms away from the city centre, Bahu Fort stands on a rock face on the left bank of the river Tawi. Perhaps the oldest fort and edifice in the city, it was constructed originally by Raja Bahulochan over 3,000 years ago. The existing fort was more recently improved upon and extended by the Dogra rulers. Inside, there is a temple dedicated to the Hindu goddess Kali. An extensive terraced garden, known as Bagh-e-Bahu, has been developed around the fort.Bahu Temple is situated inside the Bahu Fort, popularly called Bave Wali Mata Mandir.',
        image: '/images/bahufort.jpg',
      },
      
    ],
  },
  {
    theme: 'wildlife',
    places: [
      {
        name: 'Kazinag National Park',
        description: 'This national park is located on the north bank of the Jhelum river. Kazinag National Park is situated within a distance of 70 kilometers from Srinagar. This rich topography is home to almost 120 species of mammals and 20 species of birds.Here you can see endangered and threatened animals like markhor, musk deer, Himalayan Marmot, common leopard, Himalayan Black Bear and the Kashmir flying squirrel. You can visit this national park from October to April.',
        image: '/images/kazinag.webp',
      },
      {
        name: 'Hirpora Wildlife Sanctuary',
        description: 'If you want to explore the famous wildlife sanctuaries and national parks in Jammu and Kashmir, you must visit the Hirpora Wildlife Sanctuary. Here, you can explore more than 130 species of birds. The rich fauna of this wildlife sanctuary will captivate you surely. Besides, the vegetation inside this wildlife sanctuary is pretty rich.If you want to explore the famous wildlife sanctuaries and national parks in Jammu and Kashmir, you must visit the Hirpora Wildlife Sanctuary. Here, you can explore more than 130 species of birds.',
        image: '/images/hirpora.webp',
      },
      
    ],
  },
  {
    theme: 'hillstation',
    places: [
      {
        name: 'Gulmarg',
        description: 'Gulmarg is one of the top honeymoon destinations in India. Gulmarg has also been developed as an adventure hub as the Indian Institute of Skiing, and Mountaineering is located here. A lot of courses on trekking, mountaineering, skiing, and snowboarding are offered by IISM. There are a lot of other private tour operators in Gulmarg as well, which provide similar courses and facilities for skiing and snowboarding. Known for its scenic beauty, Gulmarg has also been a popular destination for shooting various Bollywood films.',
        image: '/images/gulmarg.webp',
      },
      {
        name: 'Patnitop',
        description: 'Patnitop is a small hill-station town in the Jammu Division of Jammu and Kashmir, far away from the military tension in the Kashmir Valley.Origin of the name Patnitop is a distortion of the original name of "Patan Da Talab", meaning "Pond of the Princess". In olden times a pond existed in the meadows and the kings princess often used to have her bath there. Part of the pond still exists near the youth hostel. The British probably couldnt get the name correct in their revenue records, and over the years it changed from "Patan Da Talab" to Patnitop.',
        image: '/images/patnitop.jpg',
      },
     
    ],
  },

]},

{stateid:10,state:'Jharkand', data:[
  {
    name: 'Dassam Falls',
    description: 'The Dassam Falls is situated at 34 km from the city of Ranchi on Ranchi-Tata road near the Taimara village. The place is also known as Dassam Garh. The major water source of this waterfall is River Kachni, which falls here from an altitude of 144 feet. The unique feature of this fall is that when the waterfall is seen, 10 water streams are also seen falling.Located near the Taimara village in the Ranchi district, Dasham Falls, also known as Dassam Falls, is a spectacular waterfall.',
    image: '/images/jharkand.jpg',
    famousFood:{
      name:'Aloo Boonda',
      description:'Bonda is a deep-fried South Indian potato snack that has various sweet and savory versions in different regions. The most common is aloo bonda (potato bonda), and other region-specific variations include potato replaced with sweet potato, tapioca, grated pineapple, green peas, paneer, or other ingredients.',
      //https://www.archanaskitchen.com/images/Aloo_Bonda_Recipe_Tea_Time_Snack_Low_Fat_Healthy-1.jpg
      image:'/images/Aloo_Bonda.jpg',
},
  },
  {
    name: ' Ranchi Hills',
    description: `Ranchi is also one of the oldest cities in Jharkhand. Jagannath Temple and Ratu Palace are some sights which witnessed the history of Ranchi.Ranchi is rapidly growing its economy, and certain parks, special economic zones and industrial areas are being developed. Of late, new sectors and modern areas have been built for the city's development.`,
    image: '/images/ranchi hills.jpg',
    famousFood:{
      name:'Pittha',
      description:'Pitha is traditional dish of both jharkhand and odisha it is normally prepared in homes after worshiping to god it isusually served to members of family and neighbours.',
      //https://tourism.jharkhand.gov.in/assets/images/resources/Daal-Pitha.jpg
      
      image:'/images/pitha.webp',
},
  },
  {
    name: 'Baba Baidyanath Dham',
    description: 'The Vaidyanatha temple, also called Baba Vaidyanath dham or Vaidyanath dham, is one of the twelve Jyotirlingas, and one of the most revered places where Shiva lives. It is located in Deoghar at the Santhal Parganas division of the state of Jharkhand, India.According to the Hindu beliefs, the demon king Ravana worshipped Shiva at this place to obtain boons, which he later used to wreak havoc on the world. Ravana offered his ten heads, one after another, to Shiva as a sacrifice',
    image: '/images/baidyanath.jpg',
    famousFood:{
      name:'Litti chokha',
      description:'Litti Chokha is a famous dish of Singrauli, which is delicious and nutritious. very commonly found at restaurants and street vendors. It is made with whole wheat, black gram flour and brinjal. This main course recipe has an authentic flavour of Indian spices.',
      //https://images.hindi.news18.com/ibnkhabar/uploads/2021/10/Litti-Chokha-16334210844x3.jpg
      image:'/images/Litti chokha.webp',

},
  },
  {
    name: 'Deoghar',
    description:'Deoghar, a popular religious destination in Jharkhand is blessed with one of the 12 Jyotirlinga temples known as temple Baidyanath.Baidyanath Dham in Deoghar becomes the most famous during the Shravan month of the Hindu Lunar Calendar, when millions of devotees bring holy water for the Linga in Pitchers called Kanwads, and hence known as Kanwariyas, to perform the holy ritual of Rudrabhishek [The Holy Bath] in this holy month. Deoghar is also known as the cultural capital of Jharkhand.',
    image: '/images/deoghar.jpg',
    famousFood:{
      name:'Pedda',
      description:'Devotees throng the holy city of Deogarh for two reasons namely to have darshan of Lord Bholenath at Baba Baidyanath Mandir and to sample their world-famous prasad, the delectable peda. The temple of Baba Baidyanath, a Jyotirlinga is said to have been built by the Pala Empire (Pala Dynasty of Orissa) and the tradition of offering peda to Lord Shiva has been followed for centuries.',
      image:'/images/Pedda.jpg',
},
  },
  {
    name: 'Jamshedpur',
    description: 'The largest city in Jharkhand, Jamshedpur is an aesthetically planned township with an appealing infrastructure and landscape. Juxtaposed against the beautiful Dalma Hills, Jamshedpur is the worlds eighth-largest steel manufacturing company, along with being Indias first planned city.Being the largest city in Jharkhand, the main attractions in Jamshedpur are the vast, tree-lined Jubilee Park (housing Tata Zoological Park with species like tigers and leopards).',
    image: '/images/jamshedpur.jpg',
    famousFood:{
      name:'Chilka Roti',
      description:'Chhilka Roti is a traditional bread of Jharkhand, India.[1] It is prepared using rice flour and chana dal. It is served with chutney, vegetables and meat. It is also known as Chilka Roti.The rice and chana dal soaked in water for a night. It is grinded in morning after filtering the water to make batter and salt added for taste. Then a little oil is greased in the heated tawa and half bowl of batter is dispersed in it. ',
      //https://img-global.cpcdn.com/recipes/56c09c617237858c/1200x630cq70/photo.jpg
      image:'/images/Chilka Roti.jpg',

},
  },
  {
    theme: 'beach',
    places: [
    
    
    ],
  },
  {
    theme: 'pilgrimage',
    places: [
      {
        name: 'Baba Baidyanathdham',
        description:'Deoghar is located at 24.48°N 86.7°E.[4] It has an average elevation of 255 metres (833 feet). It is a part of the Indian peninsular plateau which forms a part of the oldest landmass on Earth, Gondwana land.Deoghar, also known as Baidyanath Dham, is an important Hindu pilgrimage site. It is one of the twelve and also one of the 51, and is famous for the mela of Shrawan, 5th month according to the Hindu calendar system. It is, along with Shrisailam, one of the few places in India where the Jyotirlinga and the Shaktipeeth are together, lying side beside each other.',
        image: '/images/Baba-Baidyanath-temple.jpg',
      },
      {
        name: 'Pahari Mandir, Ranchi',
        description: 'Pahari Mandir is a temple located in hilltop in Ranchi the capital of Jharkhand. The temple is dedicated to Shiva. This temple is located at 2140 feet above sea level and 350 feet above the ground. To reach the temple one has to climb 468 steps. The entire Ranchi city can be seen from the temple. Lord Shiva is worshiped in linga form in the hill temple. There is a large crowd of Shiva devotees come here during the month of Shivaratri and Sawan.',
        image: '/images/pahari-mandir.webp',
      },
      
    ],
  },
{
        theme: 'heritage',
         places: [
      {
        name: "Terracotta Temples of Maluti",
        description: "Maluti temples are a group of 72 extant terracotta temples (out of the original number of 108),located in the Maluti village near Shikaripara in Dumka district on the eastern part of the Chota Nagpur Plateau, Indian state of Jharkhand.hese temples, according to the Indian Trust for Rural Heritage and Development (ITRHD), were built between the 17th and 19th centuries. The kings of Baj Basanta dynasty built these temples in Maluti, their capital, inspired by goddess Mowlakshi, their family deity. Many of the temples are deified with different denominations of gods and goddesses, apart from the tutelary deity Mowlakshi, and others such as Shiva, Durga, Kali and Vishnu.",
        image: "/images/maluti.jpg",
      },
      {
        name:'Palamu fort',
        description:'The Palamu fort are two ruined forts located 3 k.m from Betla National Park, Latehar district on the bank of Auranga River, in the Indian state of Jharkhand. The old fort in the plains, which existed even before the Chero dynasty, was built by the King of Raksel dynasty. The original fort in the plains and the other on an adjoining hill are attributed to the kings of the Chero dynasty. The fort in the plains had defences on three sides and three main gates. The New fort was constructed by Raja Medini Ray. ',
        image:'/images/Palamu_Fort.jpg',
      },
      
    ],
  },
  {
    theme: 'wildlife',
    places: [
      {
        name: "Betla National Park",
        description: "Betla National Park is a national park located on the Chota Nagpur Plateau in the Latehar and Palamu district of Jharkhand, India. The park hosts a wide variety of wildlife.Initially comprising 1,026 km2 (396 sq mi) of the Palamu Tiger Reserve, an additional 226 km2 (87 sq mi) was added to the park in 1989 and 63 km2 (24 sq mi) of the Mahuadanr Wolf Sanctuary.Betla was one of the first national parks in India to become a tiger reserve under Project Tiger, in 1974.",
        image: "/images/betla-park.jpg",
      },
      {
        name: "Palamau Tiger Reserve",
        description: "The Palamau Tiger Reserve is one of the nine original tiger reserves in Jharkhand, India and the only one in this state. It forms part of Betla National Park and Palamau Wildlife Sanctuary. As of 2022, the reserve is reported to be largely under Naxal control.The area in Latehar District in Jharkhand was set aside as protected in 1974 under the Indian Forests Act. Before the formation of the reserve, the area was used for cattle grazing and camping; it was acutely prone to forest fire.In 1973, the area was set up as the Palamu Tiger Reserve.The tiger reserve has a total area of 1,129.93 square kilometres (436 sq mi) with a core area of 414.93 km2 and a buffer area of 650 km2.",
        image: "/images/palamau-tiger-reserve.jpg",
      },
      
    ],
  },
  {
    theme:'hillstation',
   places: [
      {
        name: "Dassam Falls",
        description: "The Dassam Falls (also known as Dassam Ghagh) is a waterfall located near Taimara village in Bundu police station of Ranchi district in the Indian state of Jharkhand.Dassam is a changed form of word Da:song which means in mundari language the act of pouring water. Da: means water and song means pouring or measuring. The water fall resembles like somebody is pouring water so the name was Da:song earlier but afterwards the name was changed to Dassam.",
        image: "/images/Dasam-Falls-18.jpg",
      },
      {
        name: "Lower Ghaghri Falls",
        description: "Lower Ghaghri Falls is located 10 kilometres (6.2 mi) from Netarhat in Latehar district in the Indian state of Jharkhand. It is the 33rd highest waterfall in India.It is known for its mesmerizing beauty and a major tourist attraction in Jharkhand.This waterfall is situated on the Ghaghri River, tributary of Auranga River. The forest around the Lower Ghaghri Falls is so dense that even sun rays find it difficult to pierce through. The water falls from the height of 320 feet (98 m) from the cascade. The sound of falling water makes the surrounding musical. The Upper Ghaghri Falls, 4 kilometres (2.5 mi) from Netarhat, is a smaller waterfall, below Netarhat Dam.",
        image: "/images/lower-ghaghri-waterfalls.jpg",
      },
      
    ],
  },
]},
{stateid:11,state:'Karnataka', data:[
  {
    name: 'Mysore',
    description: 'Mysore Palace also known as Amba Vilas Palace located at the heart of Mysore city is the most prominent tourist destination of Mysore that attracts millions of visitors round the year. This historical palace housed within the Old Fort facing the Chamunda Hills stands as the official residence of the Wadiyar dynasty who ruled the Kingdom of Mysore from 1399 to 1950. Displaying Indo-Saracenic style of architecture, this sprawling building is a replacement of the old wooden building.',
    image: '/images/karnataka1.jpg',
    famousFood: {
        name: 'MysoreDosa',
        description: 'Mysore Dosa is a popular South Indian breakfast dish originating from Mysore, Karnataka. It is a variation of the regular dosa but with a spicy twist. The dosa is spread with a unique chutney made with red chilies, garlic, and other spices before being cooked on a griddle. Mysore Dosa is crisp, flavorful, and often served with coconut chutney and sambar.',
        image: '/images/fooditem/mysoredosa.jpg',
      },

  },
  {
    name: 'Gokarna',
    description: 'Gokarna is a small and less populated town situated in the north Kannad district of Karnataka. It is around 150 km from the Vasco Da Gama airport and around 60 km from the Karwar rail station. This place is of the best tourist places in Karnataka due to its peaceful ambiance.  Your trip surely will be incompleted without a visit to the famous Mahabaleshwara temple and Om beach. Gokarna is just like a Goa. The beaches in this town are fantastic and perfect for a day out in the sun. ',
    image: '/images/gokarna.jpg',
    famousFood: {
        name: 'FishCurry',
        description: 'Karnatakas coastal region offers a variety of delicious fish curries. The curry is made with freshly caught fish cooked in a tangy and spicy coconut-based gravy, enriched with regional spices like tamarind, mustard seeds, and curry leaves. Fish curry is typically enjoyed with steamed rice or neer dosa.',
        image: '/images/fooditem/fishcurry.webp',
      },
  },
  {
    name: 'Hampi',
    description: 'Hampi, a temple town in northern Karnataka, was once the capital of the historical Vijayanagara Dynasty. This quaint place, lying amidst striking ruins of the past, has been receiving tourists from far off for ages. The magnificence of the ruins of temples and other structures of Vijayanagar, dating back to 1500 AD, is the main attraction of this place. According to some accounts, Hampi used to be the second largest city of the world.',
    image: '/images/karnataka.jpg',
    famousFood: {
    name: 'Thali',
    description: 'A "Thali" is a traditional Indian meal served on a large platter that consists of a balanced assortment of various dishes. In the context of Karnataka cuisine, a typical Karnataka Thali includes a variety of vegetarian and non-vegetarian dishes such as rice, rasam, sambar, palya (vegetable stir-fry), curries, papad (crispy flatbread), pickles, and desserts. It offers a wholesome and flavorsome dining experience with an array of dishes showcasing the diverse flavors of Karnataka.',
    image: '/images/fooditem/thalihampi.jpg',
  },

  },
  {
    name: 'Abbey Falls',
    description: 'Coorg is a landlocked district in the State of Karnataka, officially known as Kodagu. The district is spread across an area of 4,102 square kilometers. Area-wise Coorg is bigger than the State of Goa. Most of the area in Coorg is hilly and covered with forests and plantations. Coffee plantations being the most visible part of Coorg. Only Kushalnagar town and the areas around it is in the plains (flat land), the rest of Coorg is mountainous with hills and valleys crisscrossing the landscape.',
    image: '/images/abbey.jpg',
    famousFood: {
        name: 'PorkCurry',
        description: 'Pork Curry is a popular non-vegetarian dish in certain regions of Karnataka, especially among the Coorgi community. It is made with tender pieces of pork cooked in a flavorful gravy made with spices like black pepper, coriander seeds, and dried red chilies. The dish is rich and aromatic, best enjoyed with steamed rice or akki roti (rice flour flatbread).',
        image: '/images/fooditem/porkcurrycoorg.jpg',
      },
  },
  {
    name: 'Chikmagalur ',
    description: 'Chikmagalur is the region where the Hoysala rulers started and spent the early days of their dynasty. According to a legend, it was at Sosevur, now identified with Angadi in Mudigere Taluk that Sala, the founder of the Hoysala dynasty, killed the legendary tiger, immortalised in the Hoysala crest.[4][5] It is known that Veera Ballala II (1173-1220 CE), the great king of Hoysala empire, has built the Amriteshwara temple at Amrithapura in Tarikere Taluk ',
    image: '/images/chikmagaluru.webp',
    famousFood: {
        name: 'Coffee',
        description: 'Karnataka is famous for its aromatic and flavorful coffee, especially in the regions of Chikmagalur and Coorg. The states coffee plantations produce high-quality Arabica and Robusta beans. Filter coffee is a popular preparation, where freshly ground coffee is brewed using a metal filter and served with milk and sugar, creating a rich and comforting cup of coffee.',
        image: '/images/fooditem/coffeechikmagalur.jpg',
      },
  },
  {
    theme: 'beach',
    places: [
      {
        name: 'Paradise Beach',
        description: 'Paradise beach is also known as the full moon beach. It can be accused by three different ways, since there is no road connectivity one can board a motor boat from Om beach or Half moon beach. Another way is to hike from the Half moon beach. It is a 20 minutes hike and walking on a the big rocks and going around the hill is enjoyable. The beach stretches over 150 metres in length and 70% of the beach is rocks. The remaining portion has clean white sand.',
        image: '/images/paradisebeach.png',
      },
      {
        name: 'Someshwara Beach',
        description: 'Someshwara Beach is a rocky beach on the outskirts of Mangaluru city in coastal Karnataka. River Netravati confluences with Arabian Sea near the Beach. The Beach gets its name from Someshwara temple nearby.Someshwara beach is located 9 km from Mangalore city. The beach is close to Byndoor and Ullal towns.  Mangalore is well connected to the rest of India by road and rail. The nearest airport to Someshwara beach is Mangalore.',
        image: '/images/someshwarabeach.jpg',
      },
      
    ],
  },
  {
    theme: 'pilgrimage',
    places: [
      {
        name: 'Murudeshwar Shiva Temple',
        description: 'Built on the Kanduka hill in the town of Murudeshwar, this Temple is indeed one of the most popular Temples in the state. The 123 feet tall idol is the world’s second-largest statue of Lord Shiva. The Temple is also surrounded by the Arabian Sea on three sides, thus offering breathtaking views. The Temple’s Gopuram (237 ft) is also one of the tallest in India.',
        image: '/images/murudeshwar.jpg',
      },
      {
        name: 'Kukke Subramanya Temple',
        description: 'Nestled between hills, this pilgrim center is famous for the 5000 years old Kukke Subramanya temple on the banks of Kumaradhara river. The epics narrate how the divine serpent Vasuki and other snakes took refuge under Lord Subrahmanya, in the caves. Here Lord Subrahmanya is worshipped as a snake and pooja is offered to Him, who is merged with serpent king Vasuki. Hence, believed to be the ultimate solace for salvation from any sort of Naga Doshas. A ritual dance called Nagamandala is also performed here.',
        image: '/images/kukke.jpg',
      },
      
    ],
  },
  {
    theme: 'heritage',
    places: [
      {
        name: 'Mysore Palace',
        description: 'Mysore Palace, also called Mysuru Palace, or Amba Vilas, a sprawling three-story, gray granite, Indo-Saracenic building capped by a five-story tower that culminates in a gilded dome in the southern Indian city of Mysuru in Karnataka state.It is a historical palace and a royal residence of the Wodeyar dynasty and the Kingdom of Mysore. It is named after Goddess Amba, a Hindu deity, and also known as Amba Vilas Palace.',
        image: '/images/mysorefort.jpg',
      },
      {
        name: 'Hampi',
        description: 'Hampi, a temple town in northern Karnataka, was once the capital of the historical Vijayanagara Dynasty. This quaint place, lying amidst striking ruins of the past, has been receiving tourists from far off for ages. The magnificence of the ruins of temples and other structures of Vijayanagar, dating back to 1500 AD, is the main attraction of this place. According to some accounts, Hampi used to be the second largest city of the world.',
        image: '/images/hampi.jpg',
      },
     
    ],
  },
  {
    theme: 'wildlife',
    places: [
      {
        name: 'Bandipur National Park',
        description: 'Popularly known as Bandipur Tiger Reserve, this place was once the private hunting reserve for the Maharaja of the Kingdom of Mysore. This national park is located in Gundlupet Taluk, in the district of Chamarajanagar.Bandipur became one of India’s first Tiger Reserves and in 1974, under the Wildlife Protection Act, Bandipur got the status of a National Park. Bandipur National Park is often visited. Thanks to its proximity to the metro hub of Bangalore. ',
        image: '/images/bandipur.jpg',
      },
      {
        name: 'Mookambika Wildlife Sanctuary',
        description: 'Named after the goddess Mookambika, this sanctuary holds the famous Mookambika Temple in Kolluru in its heart. This wildlife sanctuary spans over  370.37 sq. km and is covered in thick evergreen and deciduous forests. Major attractions of the Mookambika Wildlife Sanctuary range from the Mookambika Temple, the Kodachadri hills, the beautiful waterfalls like the Koosalli waterfalls to reptiles such as King Cobras and other wildlife & rare birds.',
        image: '/images/mookambika.jpg',
      },
      
    ],
  },
  {
    theme: 'hillstation',
    places: [
      {
        name: 'Nandi Hills',
        description: 'Nandi Hills also called Nandi Durga is arguably the most popular weekend destination for the city crowd of Bengaluru. The rivers North Palar, South Pennar, Chitravathi, Arkavathi and Papaghni take their birth at Nandi Hills.Located around 60 kilometres away from Bangalore, Nandi Hills is one such tourist spot that has gradually been discovered by visitors over the years and has now become a well-known weekend getaway.',
        image: '/images/nandihills.jpg',
      },
      {
        name: 'Chikmagalur',
        description: 'Chikmagaluru is known as the coffee district of Karnataka and is a famous place among the coffee enthusiasts. Filled with stunning hills and valleys, this serene town in the laps of nature is a must visit for anyone who loves a good stay amidst nature.  The place offers a lot of activities from trekking to Mullayanagiri to river rafting in the Bhadra river and is also great for solo travelers yearning for a getaway from the hustle bustle of the city life and comes as a breath of fresh air because of its undiscovered lands.',
        image: '/images/chickmagalur.jpg',
      },
      
    ],
  },
]
},

{stateid:12, state:'Kerala', data:[
  {
    name: 'Allepey',
    description: `Alleppey vacations promise to offer loads of fun, beauty and adventure. If you want to take a break from the stressful daily life travel to Alleppey and make your holidays the most memorable one. Alleppey also known as Alappuzha is the city of canals and lagoons. Alleppey is the hub of backwater tourism. This huge backwaters of canals, lagoons and lakes provide the lifeline of Alleppey. You might be surprised to know that Alleppey is the only city in Kerala without forests.`,
    image: '/images/alleppey.jpg',
     famousFood: {
        name: 'Puttu and kadala curry',
        description: 'It is the go-to dish for most Keralites with its rich flavour and easy to follow recipe. The aroma itself is mesmerising and by the time the first mouthful of soft puttu and spicy kadala (Black Chickpea) curry melts in your mouth, you will be transported to another dimension altogether. Below is the recipe for one of the finest delicacies made in God’s Own Country.',
        image: '/images/puttukadalacurry.jpg',

      },
  },
  {
    name: 'Munnuar',
    description: `Munnar is a town and hill station in the Idukki district of the southwestern Indian state of Kerala. Munnar is situated at around 1,600 metres (5,200 ft) above mean sea level, in the Western Ghats mountain range. Munnar is also called the "Kashmir of South India" and is a popular honeymoon destination. The name Munnar is believed to mean "three rivers", referring to its location at the confluence of the Mudhirapuzha, Nallathanni and Kundali rivers. It was to be nearly 50 years. `,
    image: '/images/munnar.jpg',
    famousFood: {
        name: 'Appam with stew ',
        description: 'Kerala is a state in the South West region of India. It is bordered by Karnataka, Tamil Nadu and the Lakshadweep Sea. The state capital is Tiruvananthapuram and the language is Malayalam. Kerala has a heavy seasonal rainfall with almost 120-140 rainy days in a year. Kerala produces 97% of the nation’s total Black pepper and also is one of the nation’s largest rubber producers. They also grow many different spices like cardamom, vanilla, nutmeg and cinnamon along with coconut, tea and coffee. ',
        image: '/images/appam.jpg',

      },
  },
  {
    name: 'Kochi',
    description: `Widely known as the ‘Queen of Arabian Sea’, Kochi/Cochin is a paradise for travelers who come in search of wonders. Kochi is one among the top-rated international travel destinations where tourists can closely experience the glimpses of pre-historic, historic and modern era. Kochi is, in fact, the heart of God's own country – Kerala. It is the financial capital of the city with booming IT industry and various other trading endeavors as it is one of the chief port cities in the country.`,
    image: '/images/kochi.jpg',
     famousFood: {
        name: 'Karimeen pollichathu (fish) ',
        description: 'Meen Pollichathu Recipe | Kerala style Fish Pollichathu recipe with step-by-step pictures and instructions. Meen Pollichathu is a traditional Kerala starter where fish coated with masala is wrapped in banana leaves and cooked. It is popularly known as karimeen Pollichathu because traditionally they use karimeen(pearl spot) fish to make this dish.',
        image: '/images/karimeen.jpg',

      },

  },
  {
    name: 'Thekkady',
    description: `Thekkady is situated about 257 km (160 mi) from Trivandrum, 145 km from Cochin International Airport, and 114 km from Kottayam railway station. Thekkady is located 4 km away from Kumily, a plantation town in the Kerala-Tamil Nadu border. The sanctuary is famous for its dense evergreen, semi-evergreen, moist deciduous forests, and savanna grasslands. It is home to herds of elephants, sambar, tigers, gaur, lion-tailed macaques, and Nilgiri langurs. Due to the density of the forest unlikely.`,
    image: '/images/thekkady.jpg',
   famousFood: {
        name: 'Malabar Parotta',
        description: ' In South Indian cuisine, a Parotta Recipe is what a regular paratha recipe in North Indian cuisine would be. The main differentiating factor between these two are that while parathas in North India are traditionally made with only whole wheat flour (atta), its counterpart in South India may be made with only all-purpose flour or a mix of both. But never, only atta.',
        image: '/images/malabarparrota.webp',

      },
  },
  {
    name: 'Shabarimalla ',
    description: `The temple is situated on a hilltop (about 3000 feet above sea level) named Sabarimala in Pathanamthitta district, which is unique. The temple is open to people belonging to all religions. There is a place near the temple; east of Sannidhanam (the abode of Lord Ayyappa), dedicated to Vavar (a close friend of Lord Ayyappa) which is called Vavaru Nada, an epitome of religious harmony. Another unique aspect of this temple is that it is not open throughout the year. It is open for worship only during the days of Mandalapooja, Makaravilakku, Vishu and also during the first day of every Malayalam month. `,
    image: '/images/sabarimala.jpg',
     famousFood: {
        name: ' sabarimala prasadam',
        description: 'Located in the beautiful hills of Sabarimala, Kerala, the Ayyappa Swami Temple is a popular Hindu pilgrimage site. Devotees from all over the country flock to the temple to seek blessings from Lord Ayyappa, the patron deity of the temple. One of the most important parts of the pilgrimage is the offering of prasadam, or holy offerings, to the deity. One of the most popular prasadams offered at the Ayyappa Swami Temple is Aravana payasam.',
        image: '/images/shabarimalapra.jpg',

      },
  },
  {
    theme: 'beach',
    places: [
      {
        name: 'Varkala Beach',
        description: 'Varkala beach is the only place in southern Kerala where cliffs are found adjacent to the Arabian Sea. These cliffs are of tertiary[clarification needed] sedimentary formation and named by geologists as Varkala Formation. They are a geological monument as recorded by the Geological Survey of India. Water spouts and spas occur on the sides of these cliffs.',
        image: '/images/varkala.jpeg',
      },
      {
        name: 'Kovalam Beach',
        description: 'Kovalam is an internationally renowned beach with three adjacent crescent beaches. It has been a favourite haunt of tourists since the 1930s. A massive rocky promontory on the beach has created a beautiful bay of calm waters ideal for sea bathing.',
        image: '/images/kovalambeach.webp',
      },
      
    ],
  },
  {
    theme: 'pilgrimage',
    places: [
      {
        name: 'Sabarimala Temple',
        description: ' The Sabarimala temple does not have any ancient or medieval references. Nevertheless, there are extant late medieval references pertaining to the temple.In 1793, a mortgage document was drafted by the Pandalam ruling family. It states that the royal family is pledging the revenue returns, which encompass the income generated by the Sabarimala Temple, to the Tranvancore state',
        image: '/images/sabarimala.jpg',
      },
      {
        name: 'Padmanabhaswamy Temple',
        description: ' The Shree Padmanabhaswamy Temple dates back to 8th century CE, say historians. The temple, built in the Chera style of architecture, is unique to Kerala and the neighbouring states, as the construction was done keeping the local weather and wind direction in mind. Temples made in the Chera style are usually square, rectangular, octagonal or star-shaped. ',
        image: '/images/padmanabhaswamy.jpg',
      },
     
    ],
  },
  {
    theme: 'heritage',
    places: [
      {
        name: 'Bekal Fort',
        description: 'Shaped like a giant keyhole, the Bekal fort is bordered by the Arabian on three sides. A set of 45 caves called the Nityanandashram caves, Kappil Beach and Chandragiri fort are few of the other major attractions. Bekal was also selected as one among the top ten travel destinations by Lonely Planet. The nearest airport is at Mangalore while the nearby railway station is in Kanhangad.',
        image: '/images/bekalfort.jpg',
      },
      {
        name: 'Padmanabhapuram',
        description: 'Padmanabhapuram was the erstwhile capital of the Kingdom of Travancore (now part of India). The Travancore King, Rama Varma, who was popularly known as Dharma Raja, shifted the capital in 1795 from Padmanabhapuram to Thiruvananthapuram. By that time, the boundaries of the Travancore had extended to less than half of the present day Indian state of Kerala. Up to 1957, Padmanabhapuram formed part of the Travancore Kingdom and subsequently the Travancore-Cochin State.',
        image: '/images/padmanapuram.jpg',
      },
   
    ],
  },
  {
    theme: 'wildlife',
    places: [
      {
        name: 'Eravikulum National Park',
        description: 'Eravikulam National Park is a 97 km2 national park located along the Western Ghats in the Idukki and Ernakulam districts of Kerala in India.It was established in 1978.Eravikulam National Park is administered by the Kerala Department of Forests and Wildlife, Munnar Wildlife Division, which also runs the nearby Mathikettan Shola National Park, Anamudi Shola National Park, Pambadum Shola National Park, Chinnar Wildlife Sanctuary and the Kurinjimala Sanctuary.',
        image: '/images/eravikulam.jpg',
      },
      {
        name: 'Periyar National Park',
        description: 'Periyar National Park and Wildlife Sanctuary (PNP) is a protected area located in the districts of Idukki and Pathanamthitta in Kerala, India. It is notable as an elephant reserve and a tiger reserve. The protected area encompasses 925 km2 (357 sq mi), of which 305 km2 (118 sq mi) of the core zone was declared as the Periyar National Park in 1982. The park is a repository of rare, endemic, and endangered flora and fauna and forms the major watershed of two important rivers of Kerala: the Periyar and the Pamba.',
        image: '/images/periyar.jpg',
      },
      
    ],
  },
  {
    theme: 'hillstation',
    places: [
      {
        name: 'Vagamon Hill Station',
        description: 'Vagamon is a tiny plantation township in Central Travancore, Vagamon has an overtone of green. With a never-ending line of lush green hills, breathtaking ravines and meandering rivulets. A perfect tourist place situated 1200 meters above the sea level spot surrounded by the greenery of tea gardens , Fresh cool air, murmuring Pine forest ,small waterfalls , attractive meadows inviting you to vagamon.',
        image: '/images/vagamon.jpg',
      },
      {
        name: ' Ponmudi',
        description: 'Locals in the capital city of Thiruvananthapuram will declare that a weekend drive to Ponmudi is among the best ways to spend time in the city. Families and friends alike are known to go on long drives up the winding paths for a view they insist rivals any other in the State. The slopes shrouded in mist fill one with a feeling of wonder and amazement. A large amount of rare flora and fauna can be seen here including mountain flowers, wild orchids and exotic butterflies.  ',
        image: '/images/ponmudi.jpg',
      },
    
    ],
  },
]},

{stateid:13, state:'Madhya Pradesh', data:[
  {
    name: ' Khajuraho',
    description: ` Khajuraho is a very special city and tourist destination in Madhya
    Pradesh located in the middle of India, which is famous for its
    ancient and medieval temples in the nation and worldwide.
    Khajuraho, the curious land of Kamasutra in Madhya Pradesh,
    has drawn visitors worldwide. This little village in the Chhatarpur
    district is well known for its good suggestive set of memorials,
    which has made its standing on the list of UNESCO World
    Heritage Sites. `,
    image: '/images/khajuraho.jpg',
    famousFood: {
      name: 'Chiken Korma',
      description: 'Chicken Korma is a traditionally an Indian dish, curry made with tomato paste with an almond flavour that’s light and flavour, Many of spices and cream  buttery and completely delicious..',
      image: '/images/fooditem/khajuraho.png',
    },
  },
  {
    name: ' Jahaz Mahal,Mandu',
    description: `Jahaz Mahal (in Urdu language ‘Jahaz’ means "Ship" and ‘Mahal’ means "Palace", the "Ship Palace"), is located next to Hauz-i-Shamsi in Mehrauli, Delhi on its northeastern corner. It was so named, since its reflection (illusion) in the surrounding reservoir looked like a ship floating on a lake. It is inferred to have been built during the Lodi dynasty period (1452–1526) as a pleasure resort, Sarai or an inn `,
    image: '/images/jahaz.jpg',
    famousFood: {
      name: 'Dal Bafla',
      description: 'Similar to Daal Baati in its taste and texture, Daal Bafla is equally delicious. It is prepared by baking wheat balls, which are later dipped in ghee and consumed with a spicy daal, curry and chutney. It is an important part of the menu for special occasions and social gatherings.',
      image: '/images/fooditem/jahaz mahal mandu.jpg',
    },
  },
  {
    name: ' Gwalior',
    description: ` King Surajsen builds the famous city of Gwalior. The beauty of
    this historical city, the attractive monuments, palaces, and
    temples are less appreciated. The splendid architectural work has
    been done in the mosques, rock temples, and sculptural
    structures. Gwalior is not limited to palaces only; its hills and
    beautiful greenery attract many tourists. Let us tell you that
    Tansen was born in Gwalior, and his tomb remains the same.`,
    image: '/images/GWALIOR.jpg',
    famousFood: {
      name: 'Poha',
      description: 'Poha is another tasty snack when it comes to street foods in Gwalior. The famous shop Aggarwal Poha Bhandar takes all the credits for serving this soul-filling snack whose one bite will turn you head over heels! What makes the poha of this shop stand above the others is its different style of cooking. It is cooked with extra masalas which will spice up your tastebuds for sure.',
      image: '/images/fooditem/gwalior.webp',
    },
  },
  {
    name: 'Orchha',
    description: `Orchha Fort is situated on the island of Betwa river at a distance
    of 16 km from Jhansi in Madhya Pradesh. Orchha Fort was
    constructed in the 16th century by Raja Rudra Pratap
    Singh. The main attraction of this fort is the Raja Mahal, which
    displays intricate architecture. Along with the Raja Mahal, many
    attractions like Sheesh Mahal, Phool Bagh, Rai Praveen Mahal,
    and Jahangir Mahal are located in this fort to attract tourists,
    which adds to the charm of this fort. `,
    image: '/images/orchha.jpg',
    famousFood: {
      name: 'Bundelkhand Kebab',
      description: 'The melt-in-the-mouth meat kebabs and vegetable grilled skewers, their vegetarian counterpart, are the highlight of Orchha cuisine. Bundelkhandi cuisine extensively uses clay pot for the preparation of food and the fact that it is cooked on firewood gives it a unique smoky flavour.',
      image: '/images/fooditem/orchha.webp',
    },
  },
  {
    name: 'Sanchi',
    description: `Sanchi, one of the Buddhist pilgrimage sites in Madhya Pradesh,
    is famous for the oldest stone structures in India. The Buddhist
    Monuments at Sanchi symbolize the vast heritage of culturally
    rich India. Emperor Ashoka of the Maurya dynasty established the
    great stupa in the 3rd century BC. The stupas at Sanchi were built
    as homes to Lord Buddha and many important Buddhist relics.
    This place is surrounded by lush green gardens, which provide a
    different kind of joy and peace to the tourists visiting here. `,
    image: '/images/sanchi.jpg',
    famousFood: {
      name: 'Biryani Pilaf',
      description: 'Biryani Pilaf is the traditional dish of Madhya Pradesh, also known as Mutton Pulav. This dish is prepared with boiled rice, meat, milk, sugar, and flavored with cardamom, raisins, saffron, pistachio, or almonds.',
      image: '/images/fooditem/sanchii.webp',
    },
  },
  {
    theme: 'beach',
    places: [

  
    ],
  },
  {
    theme: 'pilgrimage',
    places: [
      {
        name: 'Ujjain ',
        description: 'The ancient city dating back to 600 BC prides in having some of the most fascinating pilgrimage sites in Madhya Pradesh. It’s one of the holiest cities for the Hindus and you’ll find some prominent temples here. Being one of the 12 auspicious Jyotirlingas of the country, the religious significance of Ujjain is certainly undeniable. You’ll always see the rush of pilgrims visiting here to pay homage at the significant temples like Mahakaleshwar Jyotirlinga Temple, Swayambhu Temple, Kal Bhairav Temple, Gadkalika Temple, etc.',
        image: '/images/ujjain.jpg',
      },
      {
        name: 'Orchha',
        description: 'One of the finest tourist attractions in Madhya Pradesh, Orchha is a combination of history and folklore of this land. The Raja Ram Temple located here is a special pilgrimage centre specially attributed to Lord Ram and upholds his reign in this area. The magnificent palace in this city holds a prominent place in the Hindu religion and India’s history as well. While you are visiting here for your religious purpose, do visit the River Betwa and Orchha Wildlife Sanctuary as well..',
        image: '/images/orchha.webp',
      },
   
   
    ],
  },
{
        theme: 'heritage',
         places: [
      {
        name: "Gwalior",
        description: "Gwalior is a historical city situated in the central Indian state of Madhya Pradesh. It is one of the important tourist places near Agra and also one of the top tourist destinations in Madhya Pradesh.One of the most beautiful cities of Madhya Pradesh, Gwalior is very famous for its glorious history and rich cultural heritage. After being founded by Maharaja Suraj Sen in 8th century AD, Gwalior Fort was described as the pearl amongst fortresses in India.",
        image: "/images/GWALIOR.jpg",
      },
      {
        name: "Khajuraho",
        description: "Khajuraho is a historical town located in Chhatarpur district of Madhya Pradesh.Khajuraho was the cultural capital of Chandela Rajputs who ruled this part of India during 10th to 12th centuries AD. Khajuraho Temples were built by the Chandela monarchs over a span of 200 years, from 950 to 1150 AD.The Khajuraho group of monuments has been listed as a UNESCO World Heritage Site.",
        image:"/images/khajuraho.jpg"
      },

     
    ],
  },
  {
    theme: 'wildlife',
    places: [
      {
        name: "Panna National Park",
        description: "Panna National Park is one of the wonderful places in Madhya Pradesh for having wildlife trips. The thick forests along the slope of the Vindhyan Hills surrounded by the verdant valleys on the bank of the Ken River in Panna are home to some stunning creatures to watch amidst pure nature. The main reason to visit here is to spot the seven different species of vultures along with the Indian leopard, chinkara, sloth bears and more.",
        image: "/images/panna.jpg",
      },
      {
        name: "Ghatigaon Wildlife",
        description: "The Ghatigaon Wildlife Sanctuary, located in the Gwalior district of Madhya Pradesh,  is one of the best wildlife parks in Madhya Pradesh. Established back in 1981, it spreads across a vast area of 511 sq. km and hosts a variety of natural habitats. Apart from the Great Indian Bustard, numerous rare birds like herons, egrets, and spoonbills can be seen here. The wildlife sanctuary also houses other creatures like blackbucks, chitals, monkeys, wolves, blue bulls, wild boars and foxes, and hyenas; making it a perfect destination for animal admirers as well",
        image: "/images/ghatigaon.jpg",
      },

     
    ],
  },
  {
    theme:'hillstation',
   places: [
      {
        name: "Pachmarhi",
        description: "Another name for Pachmarhi hill is “Queen of the Satpuras” which is in Hoshangabad district of Madhya Pradesh. It is called so because it is above the sea level of the Satpura range. Here it has a famous five cave commonly called Pandavas cave. It also contains a Priyadarshini waterfall which is likely falling from heaven. Here a Beautiful place called Apsara vihar, which is best suited for a family picnic. In this world, the most beautiful visualization is sunset.",
        image: "/images/pachmarhi1.jpg",
      },
      {
        name: "Mandu hill",
        description: "It is best known for architectural beauty, and it is a place for an ancient monument in India. It is present at the Malwa- region of western Madhya Pradesh. Here stone pillars ware surrounded with different entrance. Here it consists of a lake and palace which is best suited for the lovely couple to spend some romantic time. During the month between March and October, the climate was so pleasant. ",
        image: "/images/mandu.jpg",
      },
 
      
    ],
 
  },

]},


{stateid:14,state:'Maharashtra', data:[
  {
    name: 'Gateway Of India ',
    description: 'The Gateway of India is an arch-monument built in the early 20th century in the city of Mumbai, India. It was erected to commemorate the landing of King-Emperor George V, the first British monarch to visit India, in December 1911 at Strand Road near Wellington Fountain.The foundation stone was laid in March 1913 for a monument built in the Indo-Islamic style, inspired by elements of 16th-century Gujarati architecture. The final design of the monument by architect George.',
    image: '/images/gateofindia.jpg',
    famousFood:{
      name:'Pav Bhaji',
      description:'Pav bhaji is a street food dish from India consisting of a thick vegetable curry (bhaji) served with a soft bread roll (pav). It originated in the city of Mumbai.The dish originated as a fast lunchtime dish for textile mill workers in Mumbai.Pav bhaji was later served at restaurants throughout the city.Pav bhaji is now offered at outlets from simple hand carts to formal restaurants in India and abroad.Pav bhaji is a spiced mixture of mashed vegetables in a thick gravy served with bread.',
      //https://www.chefkunalkapur.com/wp-content/uploads/2023/02/DSC08513-1300x731.jpg?v=1676714719
      image:'/images/pav bhaji.jpg',
},
  },
  {
    name: 'Mahabaleshwar',
    description: 'Mahabaleshwar is a hill station in Indias forested Western Ghats range, south of Mumbai. It features several elevated viewing points, such as Arthur’s Seat. West of here is centuries-old Pratapgad Fort, perched atop a mountain spur. East, Lingmala Waterfall tumbles off a sheer cliff. Colorful boats dot Venna Lake, while 5 rivers meet at Panch Ganga Temple to the north.Trot along on horseback for a delightful four-legged tour of the gorgeous Venna Lake area, and savour juicy.',
    image: '/images/mahabaleshwar.jpg',
    famousFood:{
      name:'Milkshakes',
      description:'A milkshake -sometimes simply called a shake is a sweet beverage made by blending milk, ice cream, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup, fruit syrup, or whole fruit, nuts, or seeds into a thick, sweet, cold mixture.',
      //https://static-blog.treebo.com/wp-content/uploads/2018/04/shutterstock_5341804_0h0Rh.jpg
      image:'/images/milk shake.jpg',
},
  },
  {
    name: 'Shirdi',
    description: ' Shirdi, also known as Sainagar, is a town located in the Rahata Taluka of district Ahmednagar. The quaint city of Shirdi is one of the holiest places to visit in Maharashtra. While most people know Shirdi for its temples and pilgrimages, the city has so much more to offer to tourists.The city is famous around the globe as the birthplace of late 19th century spiritual guru Sai Baba. His temple, Sai Baba Mandir attracts thousands of tourists each year and gives peace and solace to the visitors. ',
    image: '/images/shirdi.jpg',
    famousFood:{
      name:'Maharashtrian Thali',
      description:'The everyday thali will have a flat bread  can be chapati, phulka, bhakri, or poori, a koshimbir -salad, a chutney, a dry vegetable curry, papad, pickle and a sweet dish. Puranpoli -stuffed sweet lentil flat bread is made on all special occasions and festivals.',
      //https://hoteliersweb.com/News/wp-content/uploads/2022/07/Maharashtrian-Thali-at-Courtyard-Mahabaleshwar-1.jpg
      image:'/images/Maharashtrian-thali.jpg',
},
  },
  {
    name: 'Lonavala',
    description: 'Lonavala is a hill station surrounded by green valleys in western India near Mumbai. The Karla Caves and the Bhaja Caves are ancient Buddhist shrines carved out of the rock. They feature massive pillars and intricate relief sculptures. South of the Bhaja Caves sits the imposing Lohagad Fort, with its 4 gates. West of here is Bhushi Dam, where water overflows onto a set of steps during rainy season.Lonavala is famous for its production of the hard candy chikki which is a sweet.',
    image: '/images/lonavala1.jpg',
    famousFood:{
      name:'Pitla Bhakri',
      description:'The origins of pithla bhakri can be traced back to the rural parts of Maharashtra where farmers and labourers needed a nutritious meal that would sustain them throughout the day. With limited resources and ingredients, they came up with this simple yet delicious recipe that has stood the test of time.',
      //https://4.bp.blogspot.com/-PWe2aXQTAnI/WMrFnX3MjaI/AAAAAAAABr4/X2jVxGvWNuQjfbbpJlkIY41o_giE8DVpACLcB/s1600/Velas%2BBlog%2B-%2BPithla%2BBhakri%2BThecha-1.jpg
      image:'/images/pitla-bhakri.jpg',
},
  },
  {
    name: 'Nashik',
    description: 'Nashik is an ancient holy city in Maharashtra, a state in western India. It’s known for its links to the “Ramayana” epic poem. On the Godavari River is Panchavati, a temple complex. Nearby, Lord Rama was thought to have bathed at Ram Kund water tank, today attended by Hindu devotees. Shri Kalaram Sansthan Mandir is an ancient shrine to Rama, while Rama and Sita are said to have worshipped at Sita Gufaa caves.The city is home to plenty of exotic temples and is known in Hindu mythology.',
    image: '/images/nashik.jpg',
    famousFood:{
      name:'Thalipeeth',
      description:'Thalipeeth is a savoury multi-grain flatbread popular in Western India, particularly Maharashtra. The flour for thalipeeth, called bhajanee, is prepared from roasted grains, legumes and spices. The ingredients include grains such as rice,wheat, bajra, and jowar; legumes such as chana, and urad; and spices, most commonly coriander and cumin seeds.When preparing the dough, other ingredients such as onion, fresh coriander, other vegetables and spices are added.',
      //https://static-blog.treebo.com/wp-content/uploads/2018/07/Delicious-Thali-Meal-at-Heramb.jpg
      image:'/images/Thalipeeth.jpg',
},
  },

  {
    theme: 'beach',
    places: [
      {
        name: 'Nainital lake',
        description:'Nainital Lake, famously known as Naini Lake is the major attraction of Naintal town as well of Uttarakhand. Surrounded by panoramic seven hills, Nainital lake is a favourite spot among romantic travellers around the world. It is one of the most visited lakes in India.situated amidst the town of Nainital in Kumaon, Uttarakhand, India. It is tectonic in origin and is mango shaped or crescent shaped and has an outfall at the southeastern end.Nainital, along with other lakes of Kumaon, is integral to tourism and recreation in Kumaon. The lake is also an integral part of Kumaoni folklore.',
        image: '/images/Nainital-Lake.webp',
        },
      // Add more beach places for Andhra Pradesh
    ],
  },
  
  {
    theme: 'pilgrimage',
    places: [
      {
        name: 'Shirdi',
        description: 'Shirdi is also known as Sainagar is a city in the Indian state of Maharashtra. It is located in the Rahata taluka of Ahmednagar District. It is accessible via the Ahmednagar–Malegaon State Highway No.10, approximately 83 km (52 mi) from Ahmednagar and 15 km (9.3 mi) from Kopargaon. It is located 185 km (115 mi) east of the Western Seashore line (the Ahmednagar–Manmad road), a very busy route.Shirdi is famously known as the home of the late 19th century saint Shri Sai Baba.The Shri Saibaba Sansthan Trust located in Shirdi is one of the richest temple organisations.',
        image: '/images/shirdi1.jpg',
      },
      {
        name: 'Nashik',
        description: 'Pilgrimage Nashik or Nasik is the third-largest city by population in Maharashtra. Situated about 182 km from Mumbai, and 211 km from Pune, it is one of the popular places of pilgrimage in Maharashtra, and among the famous places to visit near Mumbai.',
        image: '/images/Nashik-3.jpg',
      },
      
    
    ],
  },
{
        theme: 'heritage',
         places: [
      {
        name: "Ajanta Caves",
        description: "The Ajanta Caves are approximately 30 rock-cut Buddhist cave monuments which date from the 2nd century BCE to about 480 CE in Aurangabad district of Maharashtra.",
        image: "/images/ajanta-caves.jpg",
      },
      {
        name: "The Gateway Of India",
        description: "The Gateway of India is an arch-monument built in the early 20th century in the city of Mumbai (Bombay), India. It was erected to commemorate the landing of King-Emperor George V, the first British monarch to visit India, in December 1911 at Strand Road near Wellington Fountain.",
        image: "/images/Gateway_of_India.jpg",
      },
     
      
    ],
  },
  {
    theme: 'wildlife',
    places: [
      {
        name: "Nagzira Wildlife Sanctuary",
        description: "Nagzira Wildlife Sanctuary is a very beautiful and quite a decent wildlife sanctuary which is located between Bhandara and Gondia district of Maharashtra. It is home to several wild animals, reptiles and birds of various species. It attracts a wide number of visitors owing to its picturesque landscapes and a great ambience. It was indeed a perfect place to visit with friends and family without an inch of doubt or hesitation.",
        image: "/images/nagzira.jpg",
      },
      {
        name: "Melghat Wildlife Sanctuary",
        description: "Melghat was among the first nine tiger reserves of India to be notified in 1973 under Project Tiger. It is located at 21°26′45″N 77°11′50″E in the northern part of Amravati District of Maharashtra. Melghat Wildlife Sanctuary was declared as in 1985. The Tapti River flows through the northern part of Melghat Tiger Reserve and forms the boundary of the reserve together with the Gawilghur ridge of the Satpura Range.",
        image: "/images/Melghat.jpg",
      },
      
      
    ],
  },
  {
    theme:'hillstation',
   places: [
      {
        name: "Lonavala",
        description: "Lonavala (ISO: Loṇāvaḷā) is a hill station town and a Municipal Council in the Pune district, Maharashtra, India. It is about 64 km (40 miles) west of Pune and 96 km (60 miles) to the east of Mumbai. It is known for its production of the hard candy chikki and is also a major stop on the railway line connecting Mumbai and Pune. From the Pune suburbs, local trains are available from Pune Junction. Both the Mumbai-Pune Expressway as well as the Mumbai-Bengaluru highway pass through Lonavala.",
        image: "/images/lonavala2.jpg",
      },
      {
        name: " Matheran: A Serene Hill Station",
        description: "This article is about the municipality in Maharashtra, India. For its namesake district, see Osmanabad district. For its namesake tahsil, see Osmanabad Tahsil. For the village in Golestan Province, Iran, see Osmanabad, Golestan.Dharashiv redirects here. For other use, see Dharashiv Caves.",
        image: "/images/matheran.jpg",
      },
    
     
    ],
 
  },
]
},

{stateid:15,state:'Manipur', data:[
  {
    name: 'Loktak Lake',
    description: 'Loktak Lake is the best tourist destination in Manipur and is 53 kilometres distant from Imphal. This capital city is situated in the heart of a lovely valley and is one of the oldest towns in India. Due to its extensive pastures and lush woodland, it also resembles paradise on earth. The Loktak nere is noted for its phumdis or spherical-shaped floating marshlands. This largest natural freshwater reserve covers an arena of 280 square kilometres. The last remaining natural habitat.',
    image: '/images/manipur.jpg',
    famousFood: {
      name: 'Eromba',
      description: 'Eromba is a traditional Manipuri stew made with various vegetables, bamboo shoots, and fermented fish. It is known for its spicy and tangy flavor.',
      image: '/images/fooditem/Manipuri-Cuisine-Eromba.jpg',
      
    },
  },
  {
    name: 'Senapati',
    description: 'Senapati is a less well-known place in Manipur. However, one must have a stroll amidst the quirky surroundings in order to admire this heavenly space. One of the top tourist destinations in Manipur, Senapati, is a simple but captivating refuge that is bestowed with the abundance of nature. Here, lush forests occupy almost 80% of the land, with villages dotting the remaining 20%.Its picturesque surroundings, which are embellished with glistening meandering streams and untamed mountains.',

    image: '/images/senapati1.jpg',
    famousFood: {
      name: 'Eromba',
      description: 'Eromba is a traditional Manipuri stew made with various vegetables, bamboo shoots, and fermented fish. It is known for its spicy and tangy flavor.',
      image: '/images/fooditem/Manipuri-Cuisine-Eromba.jpg',
      
    },
  },
  {
    name: 'Imphal Valley',
    description: 'Imphal Valley, an oval shaped canyon, makes for a marvelous sight when you are visiting Manipur. It has been formed as a result of drainage of several little rivers draining their water here. These rivers largely originate from the surrounding hills and include rivers like, River Iril, Imphal, Khuga, Thoubal and Sekmai.The entire valley spans across an expansive area of 1843 sq km, almost one tenth of the total area of the state of Manipur. Visitors here bundle up this trip with their tour of the southern part of this valley.',
    image: '/images/imphal.webp',
    famousFood: {
      name: 'Chakhao Kheer',
      description: 'Chak hao kheer is a combination of black glutinous rice, water, milk, spices, and sugar. These ingredients create the perfect flavor.',
      image: '/images/fooditem/Chakhoa-kheer.jpg',
      
    },
  },
  {
    name: 'Keibul Lamjao National Park',
    description: 'The park is located in the south western part of the Loktak lake. This is the last natural habitat of the brow-antlered deer(Sangai) the dancing deer of Manipur. Keibul Lamjao National Park is the only floating park in the world. A glimpse of the deer in this unique wetland ecosystem is a must for any wildlife enthusiast. Other wildlife to be seen include: Hog Deer, Otter, a host of water fowls and migratory birds, the latter usually sighted during November to March.',
    image: '/images/keibul.jpg',
    famousFood: {
      name: 'Kangsoi',
      description: 'Kangsoi or Kangshoi is a dish from the Meitei community of Manipur in Northeastern India. This authentic, traditional dish of Manipur is a very simple and totally oil free, water-based stew',
      image: '/images/fooditem/Kangsoi.jpg',
      
    },
  },
  {
    name: 'Kangla Fort',
    description: 'Being one of the famous tourist places in Manipur, Kangla Fort holds a special place of reverence among the people of Manipur as it is an embodiment of the state’s glory and rich historical past. This ancient capital had been the seat of Manipur’s power till 1891 and is a scintillating representation of the different rulers that reigned over this magical land. It is also a reflection of the people of Manipur, their way of life, culture and tradition.Located in the heart.',
    image: '/images/kangla.jpg',
    famousFood: {
      name: 'Singju',
      description: 'Singju or Singsu (Manipuri salad) is a Meitei Manipuri dish, mainly made up of a leafy green vegetables. It is generally consumed as a spicy side dish.',
      image: '/images/fooditem/Singju.jpg',
      
    },
  },
  {
        theme: 'beach',
        places: [
   
        ],
      },
  
      {
        theme: 'pilgrimage',
        places: [
          {
            name: 'Shyamrai Temple',
            description: 'A 17th-century pilgrimage site in Bishnupur, Shyamrai Temple is one of those numerous monuments and temples that was built by Raghunath Singha - Malla King.Because of the astonishing architecture, the temple has listed in the list of Archaeological Survey of India (ASI). Located in the Rajdarbar area of Bishnupur town, Shyamrai is a five-peaked shrine that displays the exquisite terracotta art. ',
            image: '/images/shyamrai-temple.jpeg',
          },
          {
            name: 'Shree Govindajee Temple',
            description: 'Being largely visited by the people every year, Shree Govindajee Temple in Imphal is the shining golden building that attracts many tourists besides the regular devotees. Being one of the prime attractions of Manipur the temple has the deities of Hindu gods, Radha and Krishna Govinda.  Visiting the temple, one could witness the appealing architecture which comprised red brick and boasts of a rectangular medieval style architecture.',
            image: '/images/shree-govindajee-temple.jpeg',
          },
          
        ],
      },
    {
            theme: 'heritage',
             places: [
          {
            name: 'Kangla Fort',
            description: 'Being one of the famous tourist places in Manipur, Kangla Fort holds a special place of reverence among the people of Manipur as it is an embodiment of the state’s glory and rich historical past. This ancient capital had been the seat of Manipur’s power till 1891 and is a scintillating representation of the different rulers that reigned over this magical land. It is also a reflection of the people of Manipur, their way of life, culture and tradition.Located in the heart.',
            image: '/images/kangla.jpg',
          },
          {
            name: "Imphal War Cemetery",
            description: "Situated at Dewlahland, Imphal, the Imphal War Cemetery is dedicated to the Commonwealth soldiers who died in the Battle of Imphal during WWII. The cemetery is maintained by the Commonwealth War Graves Commission and it has 1600 burials. Stones and copper plaques are erected there to display the story of the solemn sacrifices of those brave martyrs.",
            image: "/images/Imphal-war.jpg",
          },
          
         
        ],
      },
      {
        theme: 'wildlife',
        places: [
          {
            name: 'Keibul Lamjao National Park',
            description: 'The park is located in the south western part of the Loktak lake. This is the last natural habitat of the brow-antlered deer(Sangai) the dancing deer of Manipur. Keibul Lamjao National Park is the only floating park in the world. A glimpse of the deer in this unique wetland ecosystem is a must for any wildlife enthusiast. Other wildlife to be seen include: Hog Deer, Otter, a host of water fowls and migratory birds, the latter usually sighted during November to March.',
            image: '/images/keibul.jpg',
          },
          {
            name: "Lokchao Wildlife Sanctuary",
            description: "Lokchao Sanctuary is one in all the 9 vital Bird Areas (IBA) known in Manipur. The Sanctuary is found at the Indo-Myanmar border at Chandel.Endemic Bird space illustrious for harboring a number of the rare and restricted bird species found obscurity else within the world such as Genus Sphenocichla (Babblers), Peafowl-Pavo muticus (Wahong Asangba) etc. ",
            image: "/images/Yangoupokpi-Lokchao.png",
          },
          
          
        ],
      },
      {
        theme:'hillstation',
       places: [
          {
            name: 'Imphal Valley',
            description: 'Imphal Valley, an oval shaped canyon, makes for a marvelous sight when you are visiting Manipur. It has been formed as a result of drainage of several little rivers draining their water here. These rivers largely originate from the surrounding hills and include rivers like, River Iril, Imphal, Khuga, Thoubal and Sekmai.The entire valley spans across an expansive area of 1843 sq km, almost one tenth of the total area of the state of Manipur. Visitors here bundle up this trip with their tour of the southern part of this valley.',
            image: '/images/imphal.webp',
          },
          {
            name: "Kaina Hill Station ",
            description: "Kaina Hill station is nestled in the Capital city of Imphal. This is amongst the best hill stations in Manipur to visit especially during the beginning of Indian summers. Kaina is 921 meters above the mean sea level. Such a beautiful summer destination also attracts a lot of spiritual tourists, especially the Vaishnava Hindus due to its religious significance in Hindu mythology.",
            image: "/images/Kaina-Hill-Station.webp",
          },
         
        ],
      },
]},

{stateid:16, state:'Meghalaya', data:[

  {
    name: 'Shillong',
    description: `Shillong is a hill station and the capital of Meghalaya, a state in northeastern India. It is the headquarters of the East Khasi Hills district. Shillong is the 330th most populous city in India with a population of 143,229 according to the 2011 census.Shillong was capital for composite Assam during the British regime and later till a separate State of Meghalaya was formed. David Scott, the British civil servant of the East India Company, was the Agent of the Governor-General Assam.`,
    image: '/images/shillong.jpg',
      famousFood: {
        name: 'Jadoh',
        description: ' In Khasi language Ja = ‘Rice’, and ‘Doh’ = ‘meat’. There are many different forms of meat in Khasi food, but vegetables are generally relegated to salads and most tourists choose the Jadoh because it is prepared in pork fat. Jadoh is a staple food of Maghalaya which is made with red rice and is similar to a biryani. It is especially eye appealing because of its rich and unique color. This recipe is however made with meat, pork, chicken or fish, but today we will be sharing a vegan version of the same.',
        image: '/images/jadoh.jpg',

      },
  },

  {
    name: 'Cherrapunji',
    description: `The history of the Khasi people – native inhabitants of Sohra– may be traced from the early part of the 16th century. Between the 16th and 18th centuries, these people were ruled by their tribal 'Syiems (rajas or chiefs) of Khyriem' in the Khasi Hills.The original name for this town was Sohra (soh-ra), which was pronounced "Cherra" by the British. This name eventually evolved into a temporary name, Cherrapunji, meaning 'land of oranges', which was first used by tourists.`,
    image: '/images/cherrapunji.jpg',
     famousFood: {
        name: ' Doh-Khlieh',
        description: '  Doh Khlieh, is a delicious delicacy that comprises of pig brains cooked in curry and eaten with Indian bread. Doh Khlieh is also cooked as a salad with steamed pork, pig brain and onions. Are you up for it brain eater? While most of the delicacies above seem weird, it is definitely worth a nibble on each one of these. ',
        image: '/images/dohkhlieh.webp',

      },
  },
  {
    name: 'Balpakram',
    description: `Balpakram National Park is a national park in Meghalaya, India, located in the south of the Garo Hills at an altitude of about 910 m (3,000 ft). Visitors can get a chance to witness the exquisite Bengal tiger and red panda in this national park which has been open since December 1987.The Balpakram plateau and surrounding woodlands are also part of the park. Balpakram is a land of constant winds, with tigers, elephants, bison, black bears, leopards, and sambar deer inhabiting an area of around 220 square kilometres.`,
    image: '/images/balpakramnationalpark.jpg',
      famousFood: {
        name: ' Nakham Bitchi',
        description: 'Nakham Bitchi is a delicious soup which is taken mainly after a heavy spicy meal. Variety in food habits is not a new thing for us, and it differs completely from other communities.Being one of the oldest community in the north east, we have a different taste and recipe which is a special feature of our region.  ',
        image: '/images/nakham.jpg',

      },
  },
 
   
  {
    name: 'Elephant WaterFalls',
    description: `The Elephant Falls are a two-tier waterfall in Shillong, Meghalaya, India.[1] The mountain stream descends through two successive falls set in dells of fern-covered rocks The first fall of Elephant Falls is an example of a horsetail-punchbowl waterfall. The first fall is very broad and is hidden among trees. The second fall however, is quite domesticated and in the winters (and drier months) looks inconsequential`,
    image: '/images/elephantwaterfalls.jpg',
     famousFood: {
        name: 'Pumaloi',
        description: ' Pomelo is a large Asian citrus fruit that’s closely related to grapefruit.It’s shaped like a teardrop and has green or yellow flesh and a thick, pale rind. It can grow to the size of a cantaloupe or larger.Pomelo tastes similar to grapefruit, but it’s sweeter.It contains several vitamins, minerals, and antioxidants that make it a healthy addition to your diet.Here are 9 health benefits of pomelo, including how to easily add it to your diet.',
        image: '/images/pumaloi.jpg',

      },

  },
  {
    name: 'Double Decker Living Root Bridge',
    description: `The double decker living root bridges are two bridges stacked one above the other, located in Cherrapunjee. This stacking is possible due to the entanglement of roots. It takes over 15 years for a root bridge to grow and develop as a strong bridge that can sustain the weight of the people crossing it. The roots become stronger over the years. The double decker root bridge is a very popular tourist destination in Cherrapunjee.`,
    image: '/images/doubledeckerbridge.jpg',
     famousFood: {
        name: 'Tungrymbai ',
        description: 'The soybeans are washed then boiled until they are soft. After boiling, the excess water is drained off and the beans are left to cool. The beans are then transferred to a bamboo basket lined with fresh slamet (Phrynium pubinerve) leaves. The leaves are then wrapped over the beans and hot charcoal is placed on top before more leaves are wrapped over once again. ',
        image: '/images/tungrymbai.jpg',

      },
  },
  {
    theme: 'beach',
    places: [
      {
        name: 'Nongkhnum  River Island Beach',
        description: 'One of the largest river islands in Asia, Nongkhnum is an enigma that attracts those who seek solitude and nature. Flanked by gushing, clear waters, Nongkhnum also is host to popular annual festivals where visitors can enjoy local cuisines and witness the region’s love for music and entertainment.This is where Meghalaya’s longest river, the powerful Kynshi, splits into the Phanliang and the Namliang rivers. This distinctive geographic formation resulted in the creation of a pristine river beach. ',
        image: '/images/nangkhnum.jpg',
      },
      {
        name: 'Ranikor River Beach',
        description: ' The Ranikor river, which was once known for its crystal clear water and home to various species of fish and other aquatic life, is now a dying river and this is evident from the mass death of aquatic species.The issue of dying rivers in Meghalaya is not a new thing. Shillong, the capital city of Meghalaya, has, infact, two major river bodies which are now reduced to streams — Umkhrah and Umshyrpi rivers and this was caused by habitation and lack of civic sense amongst the residents.',
        image: '/images/ranikor.jpeg',
      },
     
    ],
  },
  {
    theme: 'pilgrimage',
    places: [
      {
        name: 'Nartiang Durga Temple ',
        description: ' Devi left thigh is believed to have fallen at Nartiang in the Jaintia Hills. Hence the Goddess is known as Jainteshwari. The Jaintia king Jaso Manik (1606–1641) had married Lakshmi Narayana, the daughter of the Hindu Koch king Nara Narayana. It is believed that it was Lakshmi Narayana who had influenced the Jaintia Royalty to embrace Hinduism. King Dhan Manik had made Nartiang the summer capital of the Jaintia Kingdom about 600 years ago.',
        image: '/images/nartiangdurga.jpg',
      },
      {
        name: ' Siju Caves',
        description: 'Siju Cave, also known as Bat Cave in English, is located in the North East Indian state of Meghalaya near the Napak Lake and Simsang River game reserve. It is a limestone cave and is famous for its stalagmites and stalactites.The Siju cave-system is more than 4 kilometres long, but nearly all of it is filled with water and inaccessible. The limestone hills of Meghalaya receive a lot of rain and moisture and holds many other cave-systems, some of them much longer and larger than Siju, but Siju Cave is among the most thoroughly researched and explored systems. ',
        image: '/images/sijucave.jpg',
      },
      
    ],
  },
  {
    theme: 'heritage',
    places: [
      {
        name: 'Mawphlang Sacred Grove ',
        description: 'For centuries now, Khasi customs and traditions have been woven into the land and the forests. One of these forests still retains its significance today – the Sacred Groves of Mawphlang. Visitors are not allowed to take anything away from this hallowed forest, not even a pebble or a twig. The dark canopy above and soft humus under your feet will transport you to a primaeval age – a contrast from the green meadows and sprightly pines that dominate the surrounding hills. ',
        image: '/images/sacredgrove.jpg',
      },
      {
        name: 'Ward Lake ',
        description: 'Ward’s Lake is amongst the popular tourist attractions of Shillong which is a must-visit. It is also known as Pollock’s Lake (Nan Polok) because of a popular engineer during the per-independence era. It is said to be around a 100 years old. The establishment of this lake was planned by the then Chief Commissioner of Assam, Sir William Ward. Construction was done by Colonel Hopkins in the year 1894.',
        image: '/images/wardlake.jpg',
      },
   
    ],
  },
  {
    theme: 'wildlife',
    places: [
      {
        name: ' Balapkram National Park',
        description: ' Balpakram National Park is a national park to the south of Garo Hills in Meghalaya, India, located at an altitude of about 910 m (3,000 ft) close to the international border with Bangladesh. It was inaugurated in December 1987 and provides habitat for barking deer, Asian golden cat, Bengal tiger, marbled cat, wild water buffalo, red panda and Indian elephant. Balpakram means "land of the eternal wind" according to the myth of the Garo people.',
        image: '/images/balpakramnationalpark.jpg',
      },
      {
        name: 'Nokrek National Park ',
        description: ' The Nokrek National Park[1], the core area of the Nokrek Biosphere Reserve, is a National park located approximately 2 km away from Tura Peak in West Garo Hills district of Meghalaya, India.The Nokrek Biosphere Reserve along with the Nokrek National Park was added by UNESCO to its list of Biosphere Reserves in May 2009.[2][3] along with the Balpakram National Park in South Garo Hills.',
        image: '/images/nokrek.jpg',
      },
      
    ],
  },
  {
    theme: 'hillstation',
    places: [
      {
        name: ' Mawlynnong Hill Station ',
        description: 'Mawlynnong or Mawlynnong Village where cleanliness and environment friendliness is an age old tradition, is located in the East Khasi Hills district of Meghalaya state in North East India. The village has won the acclaim of being the cleanest village in Asia, more than once. Barely 4km from the Bangladeshi border, the village offers breathtaking view of Bangladesh plains. Mawlynnong is located 90 km from Shillong, Meghalaya"s Capital. ',
        image: '/images/Mawlynnong.webp',
      },
      {
        name: 'Cherrapunji ',
        description: ' Located in the abode of clouds i.e. state of Meghalaya, Cherrapunjee sits atop an elevation of 1,484 meters above sea level. Cherrapunjee was famous for its annual rainfall and was known as the wettest place on earth before the title was taken away by Mawsynram which is located at a short distance of 80 kilometers from Cherrapunjee. Recently the town has been renamed to its historic name Sohra which was changed to Cherrapunjee by the British during the 18th century. The town is known for its heavy annual rainfall which has held the record for the highest rainfall several times in the past and currently holds the record for the highest rainfall in a calendar year.',
        image: '/images/cherrapunji.jpg',
      },
      
    ],
  },
]},


{stateid:17,state:'Mizoram', data:[
  {
    name: 'Aizawl',
    description: 'Aizawl is the capital of the state of Mizoram in India. Aizawl was officially established on 25 February 1890. With a population of 293,416, it is the largest city in the state. It is also the centre of administration containing all the important government offices, state assembly house and civil secretariat.It also enhouses different communities of Mizo wherein they maintain Peaceful Coexistence as the main theme.',
    image: '/images/aizwal1.jpg',
    famousFood: {
      name: 'Misa Mash Poora',
      description: 'Misa Mash Poora is the best way to treat yourself when in Aizawl. This dish is cooked with shrimps, onions, coriander, peppercorns and lime juice. Its bold flavors will make every foodie’s mouth water. Misa Mach Poora is a popular dish from the northeast cuisine which is very easy and simple to prepare with just a few ingredients available at the home. Grilled shrimps make for an awesomely delicious and luscious dinner; irresistibly marinated with subtle flavors, ready to be eaten with a bowl of hot rice. If you are in love with seafood, this dish is made for you.',
      image: '/images/fooditem/aizawl.jpeg',

    },

  },
  {
    name: 'Vantawng Falls',
    description: 'The Vantawng Khawhthla is located 5 kilometres south of Thenzawl in Serchhip district in the Indian state of Mizoram. It is one of the highest waterfall in Mizoram. It is about 92 kilometres away from Aizawl.It is located in the Vanva River near Thenzawl which is known for its rampaging speed of flow. Vantawng Falls are testament to the amazing natural beauty that is hidden within the North-East.',
    image: '/images/vantwang.jpg',
    famousFood: {
      name: 'Bamboo Shoot Fry',
      description: 'If you’re a vegetarian, you should try out the Bamboo Shoot Fry in Mizoram. Bamboo is first fried and tossed up with herbs. In some cases, shitake mushrooms and other vegetables are added to the mixture. It is a wonderful dish that is also light on the stomach.',
      image: '/images/fooditem/ventwangfals.jpg',

    },

  },
  {
    name: 'Lunglei',
    description: 'Lunglei is a town, situated in the south-central part of Mizoram state, northeastern India. Lunglei, literally meaning "bridge of rock" got its name from a bridge like rock found in the riverine area around Nghasih - a small tributary of Tlawng the longest river in Mizoram.Lunglei is an ideal offbeat destination for those who love natural sightseeing and adventure activities bundled into one.',
    image: '/images/lunglei.jpg',
    famousFood: {
      name: 'Bai',
      description: 'This is one of the most popular dishes of Mizoram. The key factor of this dish is that it is prepared using lots of locally available herbs and spices. The main ingredients include pork, bamboo shoots and steamed vegetables. Wherever you go within Mizoram, Bai is one dish that you will find very easily! Some even consume this as a soup, before starting off with their main course.',
      image: '/images/fooditem/lunglei.webp',

    },

  },
  {
    name: 'Reiek',
    description: 'Reiek is a mountain and tourist spot 29 km from Aizawl, Mizoram, India. It rests at an elevation of 1,465 metres overlooking Aizawl and offers a view of the surrounding valleys and hills. On a clear day, the plains of Bangladesh can be seen from the top of the hill.As is the case with most North Eastern destination of India, the peak of Reiek is also relatively unexplored and sits pretty as a pearl in the hills.',
    image: '/images/reiek.jpg',
    famousFood: {
      name: 'Mizo Thalis',
      description: 'Some local eateries might offer Mizo thalis, which are complete meals featuring a variety of dishes served on a single platter. This can be a great way to sample a range of Mizo flavors.When visiting Reiek or any other part of Mizoram, you have the opportunity to immerse yourself in the local culinary culture and experience the unique flavors of Mizo cuisine',
      image: '/images/fooditem/reiek.jpg',

    },

  },
  {
    name: 'Champhai',
    description: 'The town of Champhai on the eastern border of Mizoram close to the Indo-Myanmar border is the administrative headquarters of the Champhai district. It is located at a distance of 188 Kms from the capital of Aizawl and is strategically and commercially important for the state of Mizoram as well as for India. Champhai and its surrounding regions are primarily known for their natural beauty and vast valleys of rice fields.ultivation.',
    image: '/images/champhai.jpg',
    famousFood: {
      name: ' Koat Pitha',
      description: 'Koat Pitha is essentially a fried dish. It is made using rice flour and bananas. They also add fish to it, as it is considered to be one of their staples. It looks crispy from the outside but is soft and warm from the inside. It makes for an ideal snack with tea. It generally tastes a little sweet because of the presence of bananas.',
      image: '/images/fooditem/champhali.webp',

    },
  },

  {
    theme: 'pilgrimage',
    places: [
      {
        name: ' Reiek',
        description: 'Reiek is a mountain and tourist spot 29 km from Aizawl, Mizoram, India. It rests at an elevation of 1,465 metres[1] overlooking Aizawl and offers a view of the surrounding valleys and hills. On a clear day, the plains of Bangladesh can be seen from the top of the hill. Reiek Hill is surrounded by thick lush green temperate trees and bushes. ',
        image: '/images/rei.jpg',
      },
      {
        name: 'Tuirihiau ',
        description: ' uirihiau Falls Khawhthla or Tuirihiau Falls Falls is the most spectacular of all the waterfalls and cascades in the fast flowing rivers of Mizoram. It is located in Vanva river near Buangpui. The uniqueness of this waterfall is that there are caves behind the waterfalls and you see the falls from behind.',
        image: '/images/tuirihiau.jpg',
      },
      
    ],
  },
  {
    theme: 'heritage',
    places: [
      {
        name: 'Solomon Temple',
        description: 'Dr. L.B. Sailo, the founder of Kohhran Thianghlim Church, said, "In the year 1991, God showed me Solomon Temple in my dreams. I had never thought of Solomon temple before, nor had any dream of constructing it, but when I saw it in my dreams in 1991, as soon as I woke up, I wrote down the temple as I saw in my dream." ',
        image: '/images/solomon.jpg',
      },
      {
        name: 'Lamsial Puk',
        description: ' Lamsial Puk is a cave situated in proximity to the Farkawn village, in Champhai district of Mizoram.The cave stood witness to one of the most fatal wars that was fought in the region. If one is to believe the archived materials, it is said that in the olden times, there was a fierce battle which took place at this very site. The clash happened between two adjacent villages who disagreed upon land issues.',
        image: '/images/lamsial.webp',
      },
      
    ],
  },
  {
    theme: 'wildlife',
    places: [
      {
        name: 'Ngengpui',
        description: ' Lengteng is home to a variety of animal species including birds. The most notable birds are the dark-rumped swift, grey sibia, Mrs. Hume pheasant, grey peacock pheasant, Oriental pied hornbill, rufous-bellied eagle, and white-naped yuhina. Blyth tragopan was also reported from a survey in 2011. Common animal species include tiger, leopard, sambar deer, barking deer, goral, serow, hoolock gibbon, rhesus macaque and wild boars.',
        image: '/images/ngengpui.jpg',
      },
      {
        name: ' Khawnglung',
        description: 'Khawnglung is a mountain situated near Pangzawl in Aizawl – Lunglei road about 160 km from Aizawl. A village of the same name used to be located on the ridge and was the scene of one of the bloodiest massacre during the days of internecine feuds between the Sailo chiefs in the middle of the nineteenth century. ',
        image: '/images/khawnglung.webp',
      },
     
    ],
  },
  {
    theme: 'hillstation',
    places: [
      {
        name: 'Mamit',
        description: 'The district of Mamit lies in the North Western part of Mizoram. The district boasts of the most sought after and visited hill station of Mizoram, Reiek. The largest wildlife reserve ‘Dampa Tiger Reserve’ part of the ‘Project Tiger’ funded by the Government of India also lies within this district. The district of Mamit was bifurcated from Aizawl district in 1998. ',
        image: '/images/mamit.jpg',
      },
      {
        name: ' Champhai ',
        description: 'Champhai has a number of tourist attractions mostly including natural settings. These include a cave called the Kungawrhi Puk, a river called Tiau Lui, Lianchhiari Lunglen Tlang and a few more. Rih Dil Lake is another famous natural attraction known to Champhai and the state of Mizoram. Adventure enthusiast can indulge in some trekking at the Thasiama Seno Neihna which is about 83 Kms south of Champhai. ',
        image: '/images/cham.jpg',
      },
      
    ],
  },
]},

{stateid:18, state:'Nagaland', data:[

  {
    name: 'Dzukou Valley ',
    description: 'Located some 25 km south of Kohima, Dzukou valley and Japfu Peak offer one of the most breathtaking landscapes of the continent. Nagaland is called the Switzerland of the East and Dzukou valley and Japfu Peak provide solid proof to that moniker. Dzukou valley and Japfu Peak trek is an absolute must for all trekking enthusiasts.The Japfu Peak standing tall at 3048 meters is the second highest peak in Nagaland and provides the perfect vantage point for admiring the heavenly beauty of the Dzukou Valley.',
    image: '/images/dzova valley.jpg',
    famousFood: {
      name: 'Smoked Pork',
      description: 'This curry is also one of the popular Naga pork curry prepared with smoked pork and potatoes. The pork is cooked along with potatoes, tomatoes, green chillies. Then this ingredients once cooked is mashed to form a semi-thick curry.',
      image: '/images/fooditem/Smoked-Pork.jpg',
      
    },
  },
  {
    name: 'Kohima-Untouched Nature',
    description: 'The capital of Nagaland deserves to be on the must-visit list of everyone. Kohima, originally Kewhira, is pure bliss for anyone who loves being amidst untouched nature. It is located at a height of 1500 meters above sea level. It is surrounded by breathtaking mountains and forests. One can also indulge in adventures like trekking, hiking, and camping in this region. This place is home to the Angami tribe.',
    image: '/images/kohima.jpg',
    famousFood: {
      name: 'Bamboo Shoots',
      description: 'Bamboo shoot is an important ingredient in almost the whole of the North Eastern part of India. It is mainly used in pork preparation. The Bamboo shoot is used in both dried and fermented form. It gives a little sour flavour to the dishes',
      image: '/images/fooditem/Boldhamii-Shoot.png',
      
    },
  },
  {
    name: 'Dimapur',
    description: 'Dimapur serves as the main entry point into Nagaland. This is also the commercial center of the state. While nature lovers are enthralled by the scenic landscape of the place, history lovers are attracted to the 10th century Kachari ruins found here. Given below are some of the leading destinations here.Perfect for nature lovers and history buffs, Dimapur is one of the major tourist attractions places to visit in Nagaland.',
    image: '/images/dimapur.jpg',
    famousFood: {
      name: 'Bamboo Shoots',
      description: 'Bamboo shoot is an important ingredient in almost the whole of the North Eastern part of India. It is mainly used in pork preparation. The Bamboo shoot is used in both dried and fermented form. It gives a little sour flavour to the dishes',
      image: '/images/fooditem/Boldhamii-Shoot.png',
      
    },
  },
  {
    name: 'Mokokchung',
    description: 'Mokokchung, considered the cultural and intellectual capital of Nagaland, is one of the most important districts in the state. Picturesque hills and the musical sounds of the streams running mesmerize you. This traditional land gets vibrant with activity during the festival seasons. Though most of the Aos, the tribes, have converted to Christianity, they retain the essence of their tribal features.',
    image: '/images/mokokchung.jpg',
    famousFood: {
      name: 'Smoked Pork',
      description: 'This curry is also one of the popular Naga pork curry prepared with smoked pork and potatoes. The pork is cooked along with potatoes, tomatoes, green chillies. Then this ingredients once cooked is mashed to form a semi-thick curry.',
      image: '/images/fooditem/Smoked-Pork.jpg',
      
    },
  },
  {
    name: 'Phek WaterFalls',
    description: 'Phek Waterfall is one of most beautiful tourist attractions of Nagaland if you are an admirer of nature. In the lap of green forest and woods, you will find the Phek Waterfall flowing through it. This is one of the places to visit with family and kids although little trekking is required to reach this attraction. In fact Phek has become popular as a tourism place in Nagaland owing to waterfall in the jungle',
    image: '/images/phek.jpg',
    famousFood: {
      name: 'Smoked Pork',
      description: 'This curry is also one of the popular Naga pork curry prepared with smoked pork and potatoes. The pork is cooked along with potatoes, tomatoes, green chillies. Then this ingredients once cooked is mashed to form a semi-thick curry.',
      image: '/images/fooditem/Smoked-Pork.jpg',
      
    },
  },
  {
        theme: 'beach',
        places: [

        ],
      },
  
      {
        theme: 'pilgrimage',
        places: [
          {
            name: 'Dimapur Jain Temple',
            description: 'Dimapur Jain Temple is a Jain temple built in 1947. The temple is located on Jain Temple Road and has Lord Mahavira as its Moolnayak. The temple is under the aegis of the SD Jain Samaj Dimapur ',
            image: '/images/dimapur-jain-temple.jpg',
          },
          {
            name: 'Kalibari Temple',
            description: 'Discover the divine aura of the Dimapur Kalibari, a temple dedicated to Goddess Kali. Located in Dimapur, this temple serves as a spiritual refuge for devotees seeking solace and blessings from the fierce and compassionate goddess.The exquisite architecture, intricate detailing, and vibrant festivals make the Dimapur Kalibari a must-visit destination for those seeking a deep connection with the divine.',
            image: '/images/Dimapur-Kalibari.jpg',
          },
          
        ],
      },
    {
            theme: 'heritage',
             places: [
          {
            name: 'Dimapur',
            description: 'Dimapur serves as the main entry point into Nagaland. This is also the commercial center of the state. While nature lovers are enthralled by the scenic landscape of the place, history lovers are attracted to the 10th century Kachari ruins found here. Given below are some of the leading destinations here.Perfect for nature lovers and history buffs, Dimapur is one of the major tourist attractions places to visit in Nagaland.',
            image: '/images/dimapur.jpg',
          },
          {
            name: "Naga Heritage-Kohima",
            description: "Naga Heritage Village also known as Kisama Heritage Village is only one in Nagaland. The place is wrapped in breathtaking scenic views at the foothills of the lustrous and evergreen hills on the borderline of this village. It is surrounded by all types of flora. Naga Heritage village is rich in its tradition and cultural activities. Being one of the prime tourist attractions, the village sees hundreds of tourists round the year. Visiting this place is an experience of one of its kind and probably different from any part of the country. ",
            image: "/images/naga-heritage.jpg",
          },

          
        ],
      },
      {
        theme: 'wildlife',
        places: [
          {
            name: "Ghosu Bird Sanctuary",
            description: "Ghosu Bird sanctuary is one of the most scenic wildlife sanctuaries in Nagaland. With an area of around 650 hectares, this sanctuary is home to some of the most endangered birds in India. The city is located by the bank of river Langki, and it is situated in the Zunheboto area of Nagaland. If you go there, you will be mesmerized by the natural beauty surrounding the forests.",
            image: "/images/ghosu-bird-sanctuary.webp",
          },
          {
            name: "Fakim Wildlife Sanctuary",
            description: "Located in the Kiphire district of Nagaland, this wildlife sanctuary is one of the best wildlife sanctuaries in Nagaland. It is quite popular all across the world as it is home to some of the rarest wild animals including wild buffaloes, hoolock gibbons, leopards and Mithoon. The area is also home to different categories of birds, including hornbills and others. Apart from fauna, these forests are filled with diverse groups of trees as well.",
            image: "/images/Fakim-Wildlife-Sanctuary.webp",
          },
          
        ],
      },
      {
        theme:'hillstation',
       places: [
        {
          name: 'Dzukou Valley ',
          description: 'Located some 25 km south of Kohima, Dzukou valley and Japfu Peak offer one of the most breathtaking landscapes of the continent. Nagaland is called the Switzerland of the East and Dzukou valley and Japfu Peak provide solid proof to that moniker. Dzukou valley and Japfu Peak trek is an absolute must for all trekking enthusiasts.The Japfu Peak standing tall at 3048 meters is the second highest peak in Nagaland and provides the perfect vantage point for admiring the heavenly beauty of the Dzukou Valley.',
          image: '/images/dzova valley.jpg',
        },
        {
          name: 'Mokokchung',
          description: 'Mokokchung, considered the cultural and intellectual capital of Nagaland, is one of the most important districts in the state. Picturesque hills and the musical sounds of the streams running mesmerize you. This traditional land gets vibrant with activity during the festival seasons. Though most of the Aos, the tribes, have converted to Christianity, they retain the essence of their tribal features.',
          image: '/images/mokokchung.jpg',
        },
          
        ],
      
      },
 
]},

{stateid:19, state:'Odisha', data:[
  {
    name: ' Shree Jagannath Temple',
    description: `Located in the sacred town of Puri, the Jagannath Temple or the
    pride of India was built in the 11 th  century by King Indradyumna.
    This glorious temple is the abode of Lord Jagannath who is a form
    of Lord Vishnu. It is the most revered pilgrimage site for Hindus
    and is included in the pious Char Dham Yatra with Badrinath,
    Dwarka, and Rameshwaram.`,
    image: '/images/jagannath.jpg',
    famousFood: {
      name: 'Abhada',
      description: 'Abhada" is a term used to refer to the cooked and offered food that is served as prasadam (blessed food) to devotees at the Jagannath Temple in Puri, Odisha, India. The Abhada is an integral part of the temple  rituals and is considered to be a divine offering from Lord Jagannath.',
      image: '/images/fooditem/jagannath temple.jpg',
    },

  },
  {
    name: 'Konark Sun Temple',
    description: `Konark is a town situated in the Puri district in the state of Odisha,
    India. It is the site of the 7 th  century Sun Temple, also known as
    the Black Pagoda, built in black granite during the reign of
    Narasimhadeva-I. The temple is a world heritage site.
    Konark is also home to an annual dance festival called Konark
    Dance Festival, devoted to classical Indian dance forms. Every
    year Konark Festival.`,
    image: '/images/konark.jpg',
    famousFood: {
      name: 'Sea food',
      description: 'Since Konark is located on the coast of the Bay of Bengal, you can find a wide variety of fresh seafood, including fish, prawns, crabs, and more. These are often prepared with local spices and flavors.',
      image: '/images/fooditem/konark.webp',
    },

  },
  {
    name: 'Dhauli Giri(Shanti Stupa)',
    description: `Also known as Peace Pagoda, is a Buddhist structure built jointly
    in 1972 by the Japan Buddha Sangh and the Kalinga Nippon
    Buddha Sangh. Situated on the opposite hill of Dhauli Giri, it was
    built through the Indo-Japanese collaboration. Stupa is domed on
    top with mushroom-like structures and adorned with ‘speaking’
    stone panels. Reclining Buddha, an elephant procession, the
    bodhi tree and footprints of Buddha..`,
    image: '/images/dhauli.jpg',
    famousFood: {
      name: 'Pakhala',
      description: 'A cooling and refreshing dish made with rice and water, typically served with curd, vegetables, and fried fish. It is especially popular during hot weather.',
      image: '/images/fooditem/dhauli.jpeg',
    },
  },
  {
    name: 'Udayagiri And Khandagiri',
    description: `Udayagiri and Khandagiri Caves are a glorious element of Odisha
    Tourism. Around 6km east of Bhubaneswar, the twin caves rise
    abruptly from the coastal plain. Partly natural and partly artificial,
    these caves are comprised of small blocks which were once used
    by the mendicants for meditation. While Udayagiri has 18 caves,
    the Khandagiri has 15. The most significant of these caves group
    is Ranigumpha.`,
    image: '/images/udayagiri.jpg',
    famousFood: {
      name: ' Choole Samosa Or Shingada',
      description: 'Choole Samosa or popularly known as “Shingada” in Bhubaneswar is what you should never forget to try when you are in the city. Thin pockets of maida or white flour are made and are filled with Choole. These thin pockets are then fried deeply and served with chilly chutney. You would surely love the special Choole Samosa in Bhubaneswar.',
      image: '/images/fooditem/udayagiri.jpg',
    },

  },
  {
    name: ' Lingaraj Temple',
    description: `Lingaraj Temple is one of the oldest and largest Hindu temples in
    Bhubaneswar. The temple is the most prominent landmark of the
    Bhubaneswar city and also one of the top places to visit in
    Bhubaneswar.Dedicated to Harihara, a combined form of Vishnu and Shiva,
    Lingaraja Temple was built in 11 th  century CE by King Jajati
    Keshari of Somavanshi dynasty. He started the construction of
    the temple while he shifted his capital from Jajpur to
    Bhubaneswar.`,
    image: '/images/lingrajtemple.jpg',
    famousFood: {
      name: 'Kora Khai',
      description: 'Korakhai is a traditional Odia food, mainly served as a prasad in temples. It is a common food in the state of Odisha.Pilgrims offers Korakhai as a form of prasad to lord Lingaraj. It is also a form of caramelized Lia. Khai is also known by the name of Leeaa in western Odisha.',
      image: '/images/fooditem/lingraj.jpg',
    },
  },
  {
    theme: 'beach',
    places: [


{
        name: 'Golden Beach ',
        description: 'The pilgrim town is famous for its golden beaches which forms its eastern boundary. Considered one of the safest beaches in the country, one can find tourists taking to sea and enjoying a leisurely bath. The beach congregation of people throughout the day except may be in the afternoon.Puri is one of the few destinations which offers spiritual salvation along with the thrill of nature.',
        image: '/images/puribeach.jpg',
      },
      {
        name: 'Chandrabhaga Beach',
        description: 'Walking down the empty beach, with the setting sun on the horizon is just magical. That’s what Chandrabhaga offers to its visitors. Located at the Konark, the abode of the magnificent Sun Temple, the beach is known for its stunning sunrise and sunset.As per legend Sambha son of Lord Krishna prayed here to the Sun God and through the latter’s blessings he got rid of leprosy. Thus the beach has an important spiritual significance in Odisha.',
        image:'/images/chandrabhaga.jpg',
      },
     
    ],
  },
  {
    theme: 'pilgrimage',
    places: [
      {
        name: 'Jagannath Temple ',
        description: 'Jagannatha Temple is one of the four most sacred sites in entire India called the "Char Dham". most visited cities in Orissa. The main deities of the temple are Lord Jagannatha, Lord Balabhadra and Goddess Subhadra. Jagannatha Temple was built by Raja Ananta Varman Chodaganga Dev in 12th century. Standing to a height of 214 feet, it is one of the tallest temple structures in India.',
        image: '/images/jagannath.jpg',
      },
      {
        name: 'Konark Sun Temple',
        description: 'Konark Sun temple is easily one of the most visited temples in Orissa. There are many temples dedicated to Sun God, but there are none that are as magnificent and venerated as Konark Sun Temple. Situated on the shores of Konark, the 13th-century temple once served as a landmark for many sailors. The temple is build of Black granite and thus, is also called "The Black Pagoda". The uniqueness of the temple lies in the fact that it is built in the form of a chariot.',
        image: '/images/konark.jpg',
      },
      
    ],
  },
{
        theme: 'heritage',
         places: [
      {
        name: "Konark",
        description: "The name Konark is derived from two Sanskrit words - Kona meaning angle and Arka meaning sun, in reference to the temple which was dedicated to the Sun God. Also known as the Black Pagoda, the Sun Temple was built in black granite during the reign of Narasimhadeva-I. The temple resembles the mythical chariot of the Sun God and is a UNESCO World Heritage Site since 1984.",
        image: "/images/konark.jpg",
      },
      {
        name: "Barabati Fort",
        description: "The Barbati Fort in Cuttack in Oddisa is a well known fort with carved gateway. It is about 8km away from the city. It is a 14th-century fort built during the Ganga dynasty. Situated on the river Mahanadi, the fort is a famous historical place in Odisha. The fort is situated at such a calculated place that it provides a beautiful and spectacular view of the modern Cuttack city. It is the earthen mound of the 9 storeyed palaces. The monument was built with fortification to protect from enemy attacks.",
        image:"/images/barabati1.jpg"
      },
      
    ],
  },
  {
    theme: 'wildlife',
    places: [
      {
        name: "Similipal National Park",
        description: "Similipal National Park, located in a picturesque and beautiful town in Odisha, reflects the natural splendor of a past era. It was previously a hunting place for the kings of the province and is located near Mayurbhanj. Similipal is India’s largest wildlife sanctuary and one of the nation’s most significant tiger conservation projects.The area is abundant in lush woods, stunning meadows, breathtaking waterfalls, and gorgeous rivers.",
        image: "/images/similipal.jpg",
      },
      {
        name: "Chilika Wildlife",
        description: "A spectacular spot for all birdwatching enthusiasts, Chilika Wildlife Sanctuary is another popular wildlife sanctuary in Odisha that you must visit on your vacation. This wildlife sanctuary is an abode to a plethora of species of birds like Flamingo, Openbilled Stork, White Bellied Sea Eagle, Brahminy Kite, Spoonbill, Spot-billed Pelican, and Bar-headed Goose. This sanctuary provides all the nature lovers the chance to witness animals like Blackbuck, Golden Jackals Spotted Deer and Hyenas. ",
        image: "/images/chilika.jpg",
      },
     
    ],
  },
  {
    theme:'hillstation',
   places: [
      {
        name: "Daringbadi",
        description: "Popularly known as ‘The Kashmir of Odisha’, the spectacular hill station of Daringbadi happens to be a quaint town packed with pine forests, cascading waterfalls, and lush hills. The town also shelters many enchanting plateaus and valleys where the locals practice tea, coffee, and spices plantations.amous for its unadulterated natural beauty and amazing viewpoints.",
        image: "/images/daringbadi.jpeg",
      },
      {name: "Deomali hill",
      description: "Perched at a height of 1,672 metres, Deomali Mountain is the highest peak for the tourists to admire natural beauty in Odisha. Encompassed by verdant green forests, this place is well-known for its stunning flora and fauna. The popular hill station is a haven for adventure seekers as you get to enjoy many thrilling sports like hang gliding, mountaineering and trekking.When you are here, you can admire the breathtaking views and spend time looking at the beautiful waterfalls amidst the pristine surroundings.  ",
      image: "/images/deomali.jpg",

      }
    
    ],
 
  },
]},

{stateid:20, state:'Punjab', data:[
  {
    name: 'Amritsar',
    description: 'Home of the glorious Golden Temple, the iconic city of Amritsar, portrays the heroic character of Punjab.  The second-largest city of the Indian state of Punjab, Amritsar is colloquially known as Ambarsar. Apart from the Golden Temple, Amritsar is known for its lip-smacking street food.Amritsar is a city in the northwestern Indian state of Punjab, 28 kilometers from the border with Pakistan.',
    image: '/images/amritsar1.jpg',
    famousFood:{
      name:'​Sarso ka Saag and Makki di Roti',
      description:'Sarso ka Saag and Makki di Roti its a traditional dish and punjabs very famous dish you will feal good after trying it in Winter it gives somany benifits to body and sarson da saag is served with deshi ghew de makhi di roti.',
      image:'/images/Makki-di-Roti-and-Sarson-ka-Saag-in-Punjab.webp',
},
  },
  {
    name: 'Gurudwara',
    description: 'Located in the city of Sultanpur Lodhi in Punjab is Gurudwara Ber Sahib where Sri Guru Nanak Dev Ji spent a good part of his life. Sultanpur Lodhi is where Guru Nanak Dev Ji got married to Bibi Sulakhani and gave birth to their 2 sons, Sri Chand and Lakshmi Das in 1494 AD and 1497 AD respectively.Guru Nanak Dev Ji was situated at Sultanpur Lodhi for 14 years before he ventured out to spread Sikhism and its teachings to the world.',
    image: '/images/gurudwara.jpg',
    famousFood:{
      name:'​Sarso ka Saag and Makki di Roti',
      description:'Sarso ka Saag and Makki di Roti its a traditional dish and punjabs very famous dish you will feal good after trying it in Winter it gives somany benifits to body and sarson da saag is served with deshi ghew de makhi di roti.',
      image:'/images/Makki-di-Roti-and-Sarson-ka-Saag-in-Punjab.webp',
},
  },
  {
    name: 'Ludhiana',
    description: 'Situated on the banks of river Sutlej, Ludhiana, Punjab’s largest city, is one of the biggest manufacturing hubs in India. Also known as Manchester of India, Ludhiana is famous for its hosiery industries, the ancient ruins of the Lodi dynasty and the war museum.Named after the Lodi dynasty, the city has retained the old world charm, kept the spirituality intact but also hasnt failed to keep up with the changing times and traditions of the country.',
    image: '/images/ludhiana.jpg',
    famousFood:{
      name:'Chicken murg masala',
      description:'Delicious Indian Murgh Masala recipe made with chicken, yoghurt, and rich aromatic tomato curry sauce. A classic Indian chicken curry that you can cook everything from scratch with cupboard-friendly spices. Serve with fluffy basmati rice. Simple, quick curry dinner ready in 30 minutes!',

      //https://d4t7t8y8xqo0t.cloudfront.net/resized/720X480/restaurant%2F674178%2Frestaurant020210923104641.jpg
      image:'/images/chicken murg masala.jpg'
},
  },
  {
    name: 'Jallianwala Bagh',
    description: 'The Jallianwala Bagh Massacre is a significant event in Indian history that took place on April 13, 1919. British troops, under the command of General Reginald Dyer, fired on a crowd of unarmed Indian civilians who had gathered in Jallianwala Bagh in Amritsar to peacefully protest against the arrest and deportation of two Indian leaders. The event resulted in the deaths of hundreds of people and left many more injured.',
    image: '/images/jallianwalabagh.jpg',
    famousFood:{
      name:'Chole Bhature',
      description:'Chole bhature is a food dish popular in the Northern areas of the Indian subcontinent. It is a combination of chana masala (spicy white chickpeas) and bhatura/puri, a deep-fried bread made from maida.It is mostly found in punjab,delhi-dariyaganj.',
      //https://media.vogue.in/wp-content/uploads/2020/08/chole-bhature-recipe.jpg
      image:'/images/chole-bhature.jpg',
},
  },
  {
    name: 'Pathankot',
    description: 'Pathankot lies at the congruence of three states, Punjab, Himachal Pradesh, and Jammu Kashmir, and shares the border with Pakistan. Situated at the foothills of the Himalayas and very close to hill stations like Dalhousie and the Kangra valley, Pathankot demonstrates Punjabi history and heritage. The Nurpur Fort is a symbol of the great Pathans who inhabit the region that is protected by the lofty ranges of the Himalayas.',
    image: '/images/pathankot.jpg',
    famousFood:{
      name:'Dal Tadka',
      description:'Dal tadka is a simple Indian lentil curry tempered with spices and herbs. This staple is common in almost every Indian household and packed with protein. Serve with flatbread or rice! Almost every Indian will have some memory of dal chawal at home ',
      //https://i.ytimg.com/vi/sweWjbaCk8s/maxresdefault.jpg
      image:'/images/Dal Tadka.jpg',
},
  },
  {
    theme: 'beach',
    places: [
     
    
    ],
  },
  {
    theme: 'pilgrimage',
    places: [
      {
        name: 'The Golden Temple,Amritsar',
        description:'Constructed between 1585 and 1604, Golden Temple or Harmandir Sahib is the holiest place for the Sikh community. One of the major pilgrimage sites in Punjab, Golden Temple is visited by tourists as well as devotees from across the world. The temple got its name as the Golden Temple because of its sanctum center that is covered with gold foil. There is a man-made pool that surrounds the temple, and it is said that the water in the pool has healing power.',
        image: '/images/Amritsar.png',
      },
      {
        name: 'Tarn Taran Sahib, Amritsar',
        description:'Tarn Taran Sahib was established by the 5th Sikh Guru, Guru Arjan Dev in 1590. It is one of the sacred places in Punjab for the Sikh community. Devotees gather at Tarn Taran every month on the day of Amavas.',
        image: '/images/Tarn-Taran-Sahib.jpg',
      },
      
    ],
  },
{
        theme: 'heritage',
         places: [
      {
        name: "Jallianwala Bagh massacre",
        description: "The Jallianwala Bagh massacre, also known as the Amritsar massacre, took place on 13 April 1919. A large, peaceful crowd had gathered at the Jallianwala Bagh in Amritsar, Punjab, British India, to protest against the Rowlatt Act and arrest of pro-independence activists Saifuddin Kitchlu and Satyapal. In response to the public gathering, the temporary brigadier general R. E. H. Dyer, surrounded the protesters with his Gurkha, Baloch, Rajput and Sikh troops from 2-9th Gurkhas, the 54th Sikhs and the 59th Scinde Rifles of the British Indian Army.",
        image: "/images/Feature-image-Jallianwala-Bagh.webp",
      },
      {
        name: "Attari–Wagah border ceremony",
        description: "The lowering of the flags ceremony at the Attari–Wagah border is a daily Central Armed Police Force's (CAPF) practice that the security forces of India (Border Security Force) and Pakistan (Pakistan Rangers) have jointly followed since 1959.The drill is characterized by elaborate and rapid dance-like manoeuvres and raising legs as high as possible, which have been described as colourful.It is both a symbol of the two countries’ rivalry, and a display of brotherhood and cooperation between the two nations.",
        image: "/images/daily-retreat-ceremony.jpg",
      },
      {
        name:'Maharaja Ranjit Singh Museum',
        description:'Summer palace turned into museum, Maharaja Ranjit Singh Museum is a lovely building which archives the Royal Heritage of Maharaja Ranjit Singh such as arms and armour, outstanding paintings and century old coins and manuscripts.',
        image:'/images/maharajaranjitsingh.webp',
      },
     
    ],
  },
  {
    theme: 'wildlife',
    places: [
      {
        name: "Abohar Wildlife Sanctuary",
        description: "Abohar Wildlife Sanctuary earned the status of a sanctuary in 1975 and again in 2000 under the Wildlife Protection Act 1972. It is located in the Fazilka district of Punjab and is a private nature reserve.It is known for being a preservation hotspot for Black Buck, which is regarded as a sacred animal by the people of Bishnoi community who are native to the place.The blackbuck deer are at risk of extirpation from the sanctuary due to predation by feral dogs, habitat destruction, and the installation of cobra wiring (bladed-edged iron wire mesh) by local farmers.",
        image: "/images/abohar.jpg",
      },
      {
        name: "Harike Wildlife Sanctuary",
        description: "Harike Wildlife Sanctuary is located near the rivers Beas and Sutluj. Known for the Ramsar site which is home to numerous waterfalls, the sanctuary is home to a variety of fauna and flora. One of the major activities here is bird-watching with about a hundred different birds coming here fr0m all over the world during winters. The Harike lake is famous for housing fresh water dolphins which is a major attraction amongst tourists. Among the animals found here, some are; common teal, darter, purple moorhen, goose and pochards.",
        image: "/images/Harike-Lake-and-Wetland-Wildlife-Sanctuary.jpg",
      },
    
    ],
  },
  {
    theme:'hillstation',
   places: [
      {
        name: "Panchkula",
        description: "Panchkula is a planned city and district headquarter in the Panchkula district, part of the Ambala division in Haryana, India. Panchkula is a border city with Punjab, majority of the population belongs to Punjabi community.The origin of the name Panchkula came from the place where five irrigation canals meet. At present, it forms a part of an adjoining area to the Chandigarh, Mohali and Zirakpur. It is approximately 4 km (2.5 mi) southeast of Chandigarh, 105 km (65 mi) southwest of Shimla, 44 km (27 mi) from Ambala and 259 km (161 mi) northeast of New Delhi, the national capital.",
        image: "/images/panckula1.jpg",
      },
      {
        name: " Parwanoo",
        description: "Parwanoo is also an unexplored hill station in Solan district, near the contour line of Haryana and Himachal Pradesh. The hill station is a perfect balance of city life and tranquillity. This is because, with the scenic beauty, you will see industrial working here. In addition to it, one of the main attraction points of this region is the Trikuta range with a high altitude of 2500m.",
        image: "/images/parwanoo-image.jpg",
      },

    ],
},
]},

{stateid:21, state:'Rajasthan', data:[
  {
    name: 'Jaipur',
    description: `The capital of the state, Jaipur is also the largest city in the
    princely state of Rajasthan. It was founded in 1727, by the
    Kachwaha Rajput Ruler Sawai Jaisingh II, who was the ruler of
    Amber. Also known by the nickname ‘Pink City of India’ which is
    due to the distinctive saffron or pink color of the buildings. The
    planning of the city was done according to the Vedic Vastu
    Shastra (Indian architecture).`,
    image: '/images/jaipur.jpg',
    famousFood: {
      name: 'Dal Batti Churma',
      description: 'Dal Batti Churma is probably the most famous dish in Jaipur and a definite must-eat if you ever find yourself in the city. It is a specialty of Rajasthan and is considered a wholesome meal. A lentil curry or Dal is served with Batti, which is a stuffed baked flour in a round shape that is cooked in an oven or over charcoal. Churma is a dessert that is served with this dish and is made with flour, ghee, sugar or jaggery.',
      image: '/images/fooditem/jaipur.jpg',
    },
  },
  {
    name: 'Udaipur',
    description: ` While in a few texts, it has been termed as the Venice of the
    East, the City of Udaipur is known by its common moniker, the
    city of lakes. The city was the capital of the Sisodiya Rajputs of
    Mewar and is famous for its palaces that exemplify the finesse of
    Rajputana Style architecture. Udaipur was founded in 1553 by the
    Sisodiya Rajput Ruler Maharana Udai Singh II. The Mewar
    Rajputs founded the city to relocate their capital from Chittor to a
    more secure location.`,
    image: '/images/udayagiri.jpg',
    famousFood: {
      name: 'Dabeli',
      description: 'One of the best street foods in Udaipur you can ever get with such cheap prices. Dabeli is like the desi version of the burger, stuffed with potatoes and garnished with peanuts, pomegranate and chutney. All of such rich preparations are available at very low costs due to which you can find a huge crowd covering the street stalls of this food. Shankar Vada Pav is one of the renowned places who serve Dabeli steamy at your tables with dollops of butter and a big smile poured over the crispy food.',
      image: '/images/fooditem/udaipur.webp',
    },
  },

  {
    name: 'Jaisalmer',
    description: `The aptly named “golden city”, which comes from its view during
    the day, the city of Jaisalmer lies in the heart of the Thar Desert.
    The city was founded by The Bhati Rajput ruler Maharawal Jaisal
    Singh in 1156 Ad. The city gets its name from the golden sands of
    the Thar Desert and the same golden colored sandstone used in
    the city’s architecture. The city is a famous tourist spot due to its
    magnificent architecture and the various arts and crafts which are
    unique to this region.`,
    image: '/images/jaisalmer.jpg',
    famousFood: {
      name: 'Kesar Wali Thandai',
      description: 'No trip to Jaisalmer is complete without having a go at the local drink: the Kariya Thandai. Made of cold milk and a lot of dry fruit, the thandai is a go-to drink during a desert safari. The most popular drink of Jaisalmer is Thandai and its served with an accompaniment of malai – heavy cream, rose petals, nuts, and dry fruits – the Thandai is sure to quench your thirst and pamper your taste buds.',
      image: '/images/fooditem/jaisalmer.webp',
    },
  },

  {
    name: 'Jodhpur',
    description: `The second largest City of Rajasthan, Jodhpur is also the second
    most populated city of Rajasthan after Jaipur. The city was
    founded in 1459 by the Rathore Rajput Ruler, Rao Jodha Singh of
    Marwar. The city was founded as Marwar’s new capital after the
    fall of the former capital of Mandore. Jodhpur is also called
    the Sun City as it enjoys a bright sunny weather all year round.
    Strategically.`,
    image: '/images/jodhpur.jpg',
    famousFood: {
      name: 'Makhaniya Lassi',
      description: 'One of the best street food in Jodhpur, the Makhaniya Lassi is among the many culinary delights offered by this city. It is a thick creamy concoction of buttermilk flavoured with saffron, cardamom, rose water among other things. It is topped with a big dollop of hung curd and yoghurt cream. This rich and flavourful drink is perfect to cool your body after a stroll in the hot dusty streets of Jodhpur. You’ll have to eat this lassi with a spoon as it too thick to drink.',

      image: '/images/fooditem/jodhpur.jpg',
    },
  },
 
  {
    name: 'Pushkar',
    description: ` Lying in the Ajmer District of Rajasthan, the holy City
    of Pushkar is often described as the king of pilgrimage sites in
    India. The town is located at the shores of the Pushkar Lake,
    which was created by the tears of Lord Shiva. The town is one of
    the oldest cities of India and the date of its origin is unknown and
    is often associated with the Hindu mythology. The town is famous
    for its temples and various Ghats.`,
    image: '/images/puskar lake.jpg',
    famousFood: {
      name: 'Malpua',
      description: 'Malpua is a sweet delicacy that is made best only in Pushkar and that too in Halwai Ki Gali. These little ‘pancakes’ coated with nutty sugar syrup are the ultimate sweet indulgence. Malpuas are quiet heavy on stomach but no one can stop at just one. They are made even richer when served with Rabdi (sweet condensed milk). Sarvadia Mishtan Bhandar is the name to remember as they serve the best Malpuas in Pushkar.',
      image: '/images/fooditem/pushkar.webp',
    },
  },
  {
    theme: 'beach',
    places: [
     
    ],
  },
  {
    theme: 'pilgrimage',
    places: [
      {
        name: 'Ajmer ',
        description: 'Ajmere is one of the popular pilgrimage sites near Delhi, and among the most important religious places to visit in Rajasthan. It is situated about 132 km from Jaipur, and 390 km from Delhi.Ajmer is can be visited along with Jaipur tour packages. The city of Ajmer gets its name from "Ajay Meru" which means invincible hills. Ajmer is home to the famous Dargah Sharif, which houses the Tomb of Garib Nawaz, also known as Moinuddin Chishti .',
        image: '/images/ajmer.webp',
      },
      {
        name: 'Dilwara Temple',
        description: 'At a distance of 3 km from Mount Abu Bus Station, Dilwara Temples are the group of five Jain temples situated at Dilwara in Rajasthan. These are among the best places of pilgrimage in Rajasthan, and among the top Mount Abu places to visit.Dilwara Temples were built between the 11th and 13th centuries AD and are world-famous for their stunning use of marble. Archaeological evidence suggests that Mahavira himself visited the site, making it sacred to the Jains as a tirtha. ',
        image: '/images/dilwara.jpg',
      },
     
    ],
  },
{
        theme: 'heritage',
         places: [
      {
        name: "Kumbhalgarh Fort",
        description: "The invincible Kumbhalgarh Fort stands on an 1180-meter high ridge, providing a picturesque view. Its 36-kilometer long wall is the second longest in the world, after the Great Wall of China. This magnificent fort has 360 temples, such as a Ganesh Temple and also those dedicated to Jain deities. Despite being around 700 years old, it is still intact and stands spectacularly against the untouched backdrop .",
        image: "/images/kumbhalgarh.jpg",
      },
      {
        name: "Chittorgarh Fort",
        description: "Extensive greenery surrounds Chittorgarh Fort, and a tranquil lake lies within its bricked walls. A sightseer would observe that the regal fort zigzags towards the entrance. It has an ascent of 1 km from the plains after crossing a bridge made of limestone. Two high towers dominate this majestic fortress. Upon entering, you’ll likely be awestruck by the sheer magnitude of the palaces and temples that it encompasses.",
        image:"/images/chittorgarh.jpg"
      },
     
    ],
  },
  {
    theme: 'wildlife',
    places: [
      {
        name: "Ranthambore National Park",
        description: "Ranthambore National Park is located at a distance of 158 km from Jaipur in Sawai Madhopur district of Rajasthan. It engulfs an area about 392 sq km, neighbouring Mansingh and Keoladeo Sanctuary. It is the biggest National park in Northern India and one of the most promising alluring Wildlife Tourist spot in India. The Ranthambore National Park is best known for the tiger population and is one of the perfect destinations in India to witness the majestic predators in the jungle living naturally..",
        image: "/images/ranthambore.webp  ",
      },
      {
        name: "Sariska National Park",
        description: "Situated approximately 200 km from Delhi and 107 km from Jaipur, the Sariska National Park of Rajasthan has a landscape similar to that of Ranthambore. Housing the National Animal of India, Tiger, the Sariska Tiger Reserve of India spreads over an area of 800 km, the core area being 500 km. After being declared a sanctuary in 1955, it was later converted into a National Park, in 1979. Although Sariska remains open almost throughout the year, but the best time to visit is from October to April. ",
        image: "/images/sariska.webp",
      },
    
    ],
  },
  {
    theme:'hillstation',
   places: [
      {
        name: "Mount Abu",
        description: "Mount Abu is one of the small yet spectacular hill stations of Rajasthan, an amazing and picture-perfect place, known for its architectural structures and lush greenery, Mount Abu looks awe-striking during the daytime. Mount Abu will amaze you with its beauty. Mount Abu is situated almost 163km away from the city of Udaipur. So, the most convenient way to go there would be either by bus or a car. Due to the Aravalli Mountains, the place looks gorgeous and scenic. Over thousands of visitors every year from all over the world visit this splendid beauty..",
        image: "/images/mountabu.jpg",
      },
      {
        name: "Guru Shikhar ",
        description: "Guru Shikhar is known as the Peak of the Guru and is considered as a land of tranquillity by its visitors. One of the most famous hill stations of Rajasthan. Guru Shikhar was named after the god, Dattatreya, who was staying in this place during his early days. The hill station is located quite close to Mount Abu. Guru Shikhar is located only 10.5km away from Mount Abu. So, if you are thinking of going there from Mount Abu, then a simple cab ride will do the job",
        image: "/images/gurushikar.jpg",
      },
     
    ],
 
  },

]},


{stateid:22, state:'Sikkim', data:[

  {
    name: 'Tsomgo Lake',
    description: 'On a visit to Gangtok, do not miss the chance to visit the Tsomgo Lake or the Changu Lake! Located only 38km from Sikkims capital, it lies at an altitude of 12,400ft and is one of the highest lakes in India.While the lake remains frozen during the winters, summer brings in a magical charm and appeal to Tsomgo. It is during this time of the year, the turquoise waters of the lake reflects the amazing views of the nearby peaks and the azure sky above',
    image: '/images/tsomgolake.jpg',
    famousFood: {
      name: 'Momos',
      description: 'Momos are dumplings filled with meat or vegetables, typically served with spicy chili sauce. They are a favorite snack and a must-try in Tawang.',
      image: '/images/fooditem/momos.jpg',
      
    },
  },
  {
    name: 'Gangtok',
    description: 'Believe it or not, but resisting the alluring charm and appeal of Gangtok is almost impossible for anyone! The capital city of Sikkim, Gangtok is nestled in the Eastern Himalayas and is one of the kaleidoscopic tourist destinations in the state.Whether you are looking for serene beauty, lush forests, gurgling rivers or mental peace, Gangtok travel packages will cuddle up your Sikkim holidays. For the nature lovers, a holiday in this scenic city is enough to fulfill all their wishes.',
    image: '/images/gangtak.jpg',
    famousFood: {
      name: 'Thukpa',
      description: 'Thukpa is a traditional Tibetan noodle soup that is popular in Tawang. It is made with wheat or rice noodles, vegetables,and meat (usually chicken or mutton), and seasoned with various spices.',
      image: '/images/fooditem/Thukpa.jpeg',
      
    },
  },
  {
    name: 'Yuksom',
    description: 'Located in the Western parts of Sikkim, Yuksom is the origin of several enthralling treks into the Himalayas or the magical Kanchenjunga. The once a capital of Sikkim, this hamlet is more known for its pristine beauty and rustic appeal.Also known as the ‘Meeting place of Three Lamas, this Sikkimese village has recently started gaining tourism attention. Well, this is also the reason, you can expect pristine beauty and untouched nature in Yuksom.',
    image: '/images/yuksom.jpg',
    famousFood: {
      name: 'Momos',
      description: 'Momos are dumplings filled with meat or vegetables, typically served with spicy chili sauce. They are a favorite snack and a must-try in Tawang.',
      image: '/images/fooditem/momos.jpg',
      
    },
  },
 
  {
    name: 'Nathula Pass',
    description: 'The once a part of the historic Silk Road, a visit to Nathu La is a must in any of the Sikkim travel packages. One of the highest motorable pass in the world, this amazing pass is located at a towering height of 4,310m above the sea level and connects Sikkim with Tibet.The pass is open to Indians; however, one has to obtain permission from the tourism department in order to visit this pass. And for the foreign national, they cannot make it to Nathu La.',
    image: '/images/nathulpass.jpg',
    famousFood: {
      name: 'Thukpa',
      description: 'Thukpa is a traditional Tibetan noodle soup that is popular in Tawang. It is made with wheat or rice noodles, vegetables,and meat (usually chicken or mutton), and seasoned with various spices.',
      image: '/images/fooditem/Thukpa.jpeg',
      
    },
  },
  {
    name: 'Pelling',
    description: 'If you are an ardent fan of the captivating Himalayan Range, Pelling is the destination for you! It is from this Sikkimese town, one can have the best views of the Himalayas and the Kanchenjunga Peak, and can experience the best of their Sikkim holidays.The main highlight of the place includes a view of the Kanchenjunga Mountains, many gorgeous waterfalls, bridges, ancient monasteries and so on.',
    image: '/images/phelling.jpg',
    famousFood: {
      name: 'Momos',
      description: 'Momos are dumplings filled with meat or vegetables, typically served with spicy chili sauce. They are a favorite snack and a must-try in Tawang.',
      image: '/images/fooditem/momos.jpg',
      
    },
  },
  {
        theme: 'beach',
        places: [

        ],
      },
  
      {
        theme: 'pilgrimage',
        places: [
          {
            name: 'Solophok Chardham Namchi',
            description: 'To promote Religious Tourism in Sikkim, this newly developed Pilgrimage-cum-Cultural Centre is constructed on top of the Solophok Hill in South-Sikkim. View for miles, the 26½ m high statue of Lord Shiva in sitting posture that marks the location of the main temple. Apart from this giant statue, the replicas of twelve Jyotirlingas along with the four Dhams; Badrinath, Jagannath, Dwarka and Rameshwaram are also installed in the complex (7 acres approx). This stunning imitation of chardham amidst the serene nature of Sikkim',
            image: '/images/solophok-chardham-namchi.jpg',
          },
          {
            name: 'Kirateshwar Mahadev Temple',
            description: 'Positioned amidst emerald forests and on the edges of the glittering River Rangit, Kirateshwar Mahadev Temple is a renowned Hindu pilgrimage site. It is said, that whoever prays at this temple, all his wishes come true if you pray whole-heartedly. However, the temple is also widely visited because the premises houses three separate platforms to pray to Goddess Durga, Lord Rama and Lord Shiva. It is said that Kirateshwar Mahadev is the oldest temple in the state. ',
            image: '/images/kirateshwar-mahadev-mandir.jpg',
          },
          
        ],
      },
    {
            theme: 'heritage',
             places: [
          {
            name: "Dubdi Monastery",
            description: "It is a Buddhist monastery of the Nigyam sect of Tibetan Buddhist near Yuksom, which gives it its another name, Yuksom Monastery. This monastery, established either in 1642 or 1701 by the Chogyar Namgyal, is associated with the history of the creation of the state. Dubdi Monastery is located on top of the hill in Yuksom village, and claims to be the first and the oldest monastery in Sikkim, making it the top Heritage tourism attraction in the state.",
            image: "/images/Yuksom-Dubdi-Gompa.jpg",
          },
          {
            name: 'Rabdentse Ruins ',
            description: 'According to the pre-historic times, it was first established by Chadok Namgyal; son of Phuntsog Namgyal, in the year 1670. The Gurkha army who came to invade the place, destroyed the city, and left it in ruins, which are now designated as of national importance by the Archaeological Survey of India. The vantage point of this former capital, gives a mesmerizing view of the Khangchendzonga ranges.',
            image: '/images/rabdentse-ruins.jpg',
          },
          
        ],
      },
      {
        theme: 'wildlife',
        places: [
          {
            name: "Khangchendzonga National Park",
            description: "Khangchendzonga National Park encompasses an area covering 1784 sq km. It is bounded in the north by the Tent Peak and the ridge of the Zemu glacier. The eastern boundary of this park comprises of the ridge of the Mountain Lamaongden. The southern boundary includes Mount Narsing and Mount Pandim. The western boundary comprises of the mighty Kanchendzonga which presides over its namesake park and the Nepal Peak.",
            image: "/images/Khangchendzonga National Park.webp",
          },
          {
            name: "Fambong Lho Sanctuary",
            description: "Fambong Lho Sanctuary is located about 20 kilometres from Gangtok and covers an area of about 5200 hectares above the road between Singtam and Dikchu with the highest point at a place called Tinjure where a wooden observation tower of the Forest Department exists. The Sanctuary is the home of Himalayan Black Bear, Red Panda, Civet cat and many varieties of birds and butterflies.",
            image: "/images/Fambong Lho Sanctuary.webp",
          },
          
        ],
      },
      {
        theme:'hillstation',
       places: [
        {
          name: 'Pelling',
          description: 'If you are an ardent fan of the captivating Himalayan Range, Pelling is the destination for you! It is from this Sikkimese town, one can have the best views of the Himalayas and the Kanchenjunga Peak, and can experience the best of their Sikkim holidays.The main highlight of the place includes a view of the Kanchenjunga Mountains, many gorgeous waterfalls, bridges, ancient monasteries and so on.',
          image: '/images/phelling.jpg',
        },
        {
          name: 'Yuksom',
          description: 'Located in the Western parts of Sikkim, Yuksom is the origin of several enthralling treks into the Himalayas or the magical Kanchenjunga. The once a capital of Sikkim, this hamlet is more known for its pristine beauty and rustic appeal.Also known as the ‘Meeting place of Three Lamas, this Sikkimese village has recently started gaining tourism attention. Well, this is also the reason, you can expect pristine beauty and untouched nature in Yuksom.',
          image: '/images/yuksom.jpg',
        },
          
        ],
      
      },
]},

{stateid:23, state:'Tamil Nadu',data:[

  {
    name: 'Madhura Meenakshi Temple',
    description: `Arulmigu Meenakshi Sundaraswarar Temple is a historic Hindu temple located on the southern bank of the Vaigai River[3] in the temple city[4] of Madurai, Tamil Nadu, India. It is dedicated to the goddess Meenakshi, a form of Shakti, and her consort, Sundareshwarar, a form of Shiva.[5] The temple is at the center of the ancient temple city of Madurai mentioned in the Tamil Sangam literature, with the goddess temple mentioned in 6th-century-CE texts.`,
    image: '/images/menakshi1.jpg',
     famousFood: {
        name: 'Idli ',
        description: '  It is a type of savoury rice cake, originating from South India, popular as a breakfast food in Southern India and in Sri Lanka. The cakes are made by steaming a batter consisting of fermented black lentils (de-husked) and rice. The fermentation process breaks down the starches so that they are more readily metabolised by the body. ',
        image: '/images/idli.jpg',

      },
  },

  {
    name: 'Ooty',
    description: `OOty hills are the one of the most famous tourist places in tamilnadu
    and those hill stations are very cool and dangerous too so it is best for the
    family vacations and it is very nice place to visit in holidays too. Originally occupied by the Badaga and Toda people, the area came under the rule of the East India Company at the end of the 18th century. The economy is based on tourism and agriculture, along with the manufacture of medicines and photographic film.`,
    image: '/images/ooty.jpg',
     famousFood: {
        name: 'Sambar ',
        description: ' Sambar is a South Indian lentil and vegetable stew made with pigeon pea lentils, tamarind and a unique spice blend called sambar powder. It is a staple dish in South Indian homes and is also equally popular and loved by many. A basic sambar recipe will have a mix or one or two types of vegetables along with lentils, tamarind, sambar powder and a few spices.',
        image: '/images/sambar.webp',

      },
  },

  {
    name: 'kodaikanal lake',
    description: `Kodaikanal Lake, also known as Kodai Lake, is a manmade lake located in the Kodaikanal city in Dindigul district in Tamil Nadu, India. Sir Vere Henry Levinge,[1] the then Collector of Madurai, was instrumental in creating the lake in 1863, amidst the Kodaikanal town which was developed by the British and early missionaries from USA. The lake is said to be Kodaikanal's most popular geographic landmark and tourist attraction`,
    image: '/images/kodaikanallake.jpg',
     famousFood: {
        name: 'Chicken chettinad ',
        description: ' Chettinad Chicken Curry is a fiery hot, delicious, and aromatic dish that hails from the Chettinad region in Tamil Nadu, South India. Known for its bold flavors and spice-infused preparations, Chettinad cuisine has gained popularity worldwide, and this chicken curry is one of its shining stars.This spicy and robust chicken curry is a perfect balance of spices, herbs, and tender chicken, resulting in a rich and flavorful gravy.The key to an authentic Chettinad chicken curry lies in its distinctive blend of spices. ',
        image: '/images/ckckencurry.jpg',

      },
  },
 
  {
    name: 'Rameshwaram',
    description: 'Rameshwaram is located on a beautiful island in the South Indian state of Tamil Nadu. It is separated by a small Pamban channel from Sri Lanka. According to Hindu mythology, this is the place where Lord Rama created a bridge across the sea to Sri Lanka.Rameshwaram has the first sea bridge connecting the town of  Mandapam with Pamban Island, and Rameswaram.',
    image: '/images/RAMESWARAM.jpg',
     famousFood: {
        name: 'Dosa ',
        description: ' A dosa is a thin, spicy, crispy crêpe-like food made from fermented rice, and it is very popular in restaurants in South India. It may be served plain with sambar and chutneys such as coconut chutney, or other curry or gravy. When served with potato folded inside, it is known as masala dosa. To make omelette dosa, simply pour beaten egg on the dosa before it is turned over.',
        image: '/images/dosa.jpg',

      },
  },
  {
    name: 'Thanjavur',
    description: `Thanjavur also Tanjore, is a city in the Indian state of Tamil Nadu.
    Thanjavur is the 8th biggest city in Tamil Nadu. Thanjavur is an
     important center of South Indian religion, art, and architecture.
     Most of the Great Living Chola Temples, which are UNESCO World Heritage Monuments,
     are located in and around Thanjavur. The foremost among these, the Brihadeeswara Temple,
     built by the Chola emperor Rajaraja I, is located in the centre of the city.
     Thanjavur is also home to Tanjore painting, a painting style unique to the region`,
    image: '/images/thanjavur.jpg',
     famousFood: {
        name: 'Sweet Bonda ',
        description: ' Banana Bonda is commonly made with wheat flour and/or all-purpose (maida) flour. I use a 1:1 ratio of both of these flours in my recipe, but feel free to adjust it to your liking. In addition, a spoon or two of rice flour or semolina can be added. As a result, you end up with an even more crunchy bonda. Either way, you’re definitely going to hear that mouthwatering crunch as soon as you take your first bite.',
        image: '/images/bonda.jpg',

      },
  },
  {
    theme: 'beach',
    places: [
      {
        name: ' Marina Beach',
        description: ' Marina beach in Chennai along the Bay of Bengal is India’s longest and world’s second longest beach. This predominantly sandy of nearly 12 kilometers extends from Beasant Nagar in the south to Fort St. George in the north. Chennai Marina beach was renovated by Governor Mountstuart Elphinstone Grant Duff in 1880s. All tourists traveling to Chennai never miss visiting this grand Chennai beach. Marina beach is easily accessible by buses, taxis, two and three wheelers.',
        image: '/images/marina.jpg',
      },
      {
        name: ' Covelong Beach',
        description: ' Covelong Beach is located along the coastline of Bay of Bengal near the village of Covelong. It was initially established as a port by the Saadat Ali for Carnatic Nawabs which was later occupied by the French in 1746 and ruined by Britishers in 1752.',
        image: '/images/covelongbeach.jpg',
      },
      
    ],
  },
  {
    theme: 'pilgrimage',
    places: [
      {
        name: ' Meenakshi Temple',
        description: 'Meenakshi Amman Temple, also known as Minakshi-Sundareshwara Temple, is one of the oldest and most important temples in India. Located in the city of Madurai, the temple has a great mythological and historical significance. It is believed that Lord Shiva assumed the form of Sundareswarar (the handsome one) and married Parvati (Meenakshi) at the site where the temple is currently located. Renowned for its astonishing architecture, Meenakshi Temple was nominated as one of the wonders of the world, but couldn’t make it into the list of ‘Seven Wonders of the World’. ',
        image: '/images/meenakshi.jpg',
      },
      {
        name: ' Ramanathaswamy Temple',
        description: 'The temple itself was built by rulers since the 12th century with Sethupathy Maravar beginning the construction of the grand Ramanathaswamy temple that boasts of the ‘Third Corridor’, completed by his successor, Maravar – the longest one in Asia with a 197-metre span from East to West and a 133-metre span from South to North, the third largest in the world! It is said that Swamy Vivekananda offered prayers at this temple in 1897. ',
        image: '/images/ramanathaswamy.webp',
      },
      
    ],
  },
  {
    theme: 'heritage',
    places: [
      {
        name: 'The Greate Chola Temple ',
        description: ' The Great Living Chola Temples were built by kings of the Chola Empire, which stretched over all of south India and the neighbouring islands. The site includes three great 11th- and 12th-century Temples: the Brihadisvara Temple at Thanjavur, the Brihadisvara Temple at Gangaikondacholisvaram and the Airavatesvara Temple at Darasuram. The Temple of Gangaikondacholisvaram, built by Rajendra I, was completed in 1035.',
        image: '/images/the-chola-temple.jpg',
      },
      {
        name: ' Mamallapuram',
        description: ' Mamallapuram was one of two major port cities in the Pallava kingdom. The town was named after Pallava king Narasimhavarman I, who was also known as Mamalla. Along with economic prosperity, it became the site of a group of royal monuments, many carved out of the living rock.',
        image: '/images/mamallapuram.webp',
      },
      
    ],
  },
  {
    theme: 'wildlife',
    places: [
      {
        name: 'Annamalai Wild Life  ',
        description: 'Anaimalai Tiger Reserve, earlier known as Indira Gandhi Wildlife Sanctuary and National Park and as Anaimalai Wildlife Sanctuary, is a protected area in the Anaimalai Hills of Pollachi and Valparai taluks of Coimbatore District and Udumalaipettai taluk in Tiruppur District, Tamil Nadu, India. The Tamil Nadu Environment and Forests Department by a notification dated 27 June 2007,[3] declared an extent of 958.59 km2 that encompassed the erstwhile IGWLS&NP or Anaimalai Wildlife Sanctuary, as Anaimalai Tiger Reserve under the Wildlife Protection Act, 1972.  ',
        image: '/images/anamalai.jpg',
      },
      {
        name: ' Point Calimere Wildlife',
        description: ' Point Calimere Wildlife and Bird Sanctuary (PCWBS) is a 21.47-square-kilometre (8.29 sq mi) protected area in Tamil Nadu, South India along the Palk Strait where it meets the Bay of Bengal at Point Calimere (Tamil: கோடியக்கரை Kodiakkarai) at the southeastern tip of Nagapattinam District. The sanctuary was created in 1967 for conservation of the least concern blackbuck antelope, an endemic mammal species of India. ',
        image: '/images/pointcalimere.jpg',
      },
      
    ],
  },
  {
    theme: 'hillstation',
    places: [
      {
        name: 'Kodaikanal Hill Station ',
        description: 'Kodaikanal (Tamil: [koɖaɪkkaːɳal]) is a hill station which is located in Dindigul district in the state of Tamil Nadu, India.[2] Its name in the Tamil language means "The Gift of the Forest".[3] Kodaikanal is referred to as the "Princess of Hill stations" and has a long history as a retreat and tourist destination.Kodaikanal Main Town covered with mist Boating in Kodaikanal Lake Kodaikanal was established in 1845 as a refuge from the high temperatures and tropical diseases of the plains.[4] Much of the local economy is based on the hospitality industry serving tourism. As of 2011, the city had a population of 36,501 ',
        image: '/images/kodikanal.webp',
      },
      {
        name: ' Yercaud Hill Station',
        description: ' Perched in the Shevaroy Hills in the northern part of Tamil Nadu, Yercaud is the highly visited attractions amongst nature lovers, teenagers and families. It is renowned for its splendid exquisiteness, verdant greenery and coffee plantations. The prime crop grown in this beautiful center is coffee and some species like cardamom and black paper are also grown here. It experiences salubrious climate all through the year and offers a great opportunity to the tourists to relish its striking scenic beauty, which is spectacular and amazing.',
        image: '/images/yercaud.webp',
      },
     
    ],
  },
]},

{stateid:24,state:'telanagana',data:[
  {
    name: 'Charminar',
    description: 'Charminar is a magnificent historical monument located in Hyderabad, Telangana, India.Built in 1591, this iconic landmark is a fine example of Islamic architecture and serves as a symbol of Hyderabads rich heritage. The structure features four grand minarets and a central mosque. Visitors can explore the intricate stonework, climb the minarets for panoramic views, and immerse themselves in the bustling markets surrounding Charminar.',
    image: '/images/hyd/hyderabad.jpg',
    famousFood: {
        name: 'Biryani',
        description: 'Hyderabadi Biryani is a world-famous aromatic rice dish that originated in Hyderabad, Telangana. It is made with basmati rice, tender pieces of marinated meat (usually chicken or mutton), and a blend of aromatic spices. The biryani is typically prepared in the "Dum" style, where the rice and meat are layered together and slow-cooked in a sealed pot, allowing the flavors to meld beautifully. Hyderabadi Biryani is known for its rich taste, fragrant aroma, and tender meat, making it a true culinary delight.',
        image: '/images/fooditem/hyderabadibiryani.jpg',

      },

  },
  {
    name: 'Golkonda',
    description: 'Golkonda Fort, situated in Hyderabad, Telangana, is a mesmerizing fortress that holds centuries of history within its walls. Originally constructed in the 13th century, it was later fortified and expanded by the Qutb Shahi dynasty. Golkonda Fort showcases remarkable architecture, including intricate gateways, palaces, royal halls, and an innovative water supply system. The fort also has famous acoustics, where a clap near the entrance can be heard at the highest point of the fort, several kilometers away.',
    image: '/images/hyd/golkonda.jpg',
    famousFood: {
        name: 'Qurbani Ka Meetha',
        description: 'Qubani Ka Meetha is a popular dessert from Hyderabad, Telangana, made with dried apricots soaked in water until they become soft and pulpy. The apricots are then sweetened with sugar and served with a dollop of cream or ice cream. Qubani Ka Meetha has a delightful combination of tangy and sweet flavors, making it a must-try dessert in the region.',
        image: '/images/fooditem/khubanikameetha.jpg',

      },
  },
  {
    name: 'Yadadri temple',
    description: 'Yadadri, also known as Yadagirigutta, is a renowned temple town nestled in the Nalgonda district of Telangana. It is home to the revered Sri Lakshmi Narasimha Swamy Temple. Devotees visit Yadadri to seek blessings from Lord Narasimha, an incarnation of Lord Vishnu. The temple is situated atop a hill, and the climb offers breathtaking views of the surrounding countryside. The temple complex includes intricately carved pillars, pavilions, and shrines dedicated to various deities.',
    image: '/images/hyd/yadadri.jpg',
    famousFood: {
        name: 'Pulihora',
        description: 'Pulihora, also known as Tamarind Rice, is a traditional South Indian dish popular in Telangana as well. Cooked rice is mixed with a tangy and spicy tamarind paste, tempered with mustard seeds, curry leaves, and other spices. It is often served as prasadam in temples and is also a popular dish during festivals and special occasions.',
        image: '/images/fooditem/pulihora.jpg',

      }
  },
  {
    name: 'Cable Bridge',
    description: 'The Cable Bridge, officially known as the Godavari Arch Bridge, is an architectural marvel spanning the Godavari River in Rajahmundry, Andhra Pradesh, which is in close proximity to Telangana. It is one of the longest cable-stayed bridges in India, connecting the town of Rajahmundry with Kovvur. The bridges unique design, with a single arch spanning the river, is an engineering feat. Visitors can enjoy stunning river views and witness the majestic sunset from the bridge.',
    image: '/images/hyd/cablebridge.jpg',
    famousFood: {
        name: 'Panipuri',
        description: 'Panipuri, also known as Golgappa or Pani Puri, is a beloved street food snack widely enjoyed in Telangana and throughout India. It consists of hollow, crispy puris filled with a mixture of spicy and tangy flavored water (pani), boiled chickpeas, potatoes, and tamarind chutney. The burst of flavors and textures in each bite makes panipuri a refreshing and irresistible treat.',
        image: '/images/fooditem/panipuri.webp',

      },
  },
  {
    name: 'Ananthagiri',
    description: 'A trekker’s paradise, Ananthagiri is a beautiful place, a perfect destination to escape mundane life. The serene and placid lake, surrounding the main temple of Lord Shiva and ruined structures creates a perfect ambiance to unwind, relax, and soak in the marvels of nature spread all around. The Anantha Padmanabha Swamy Temple attracts devotees from far and wide areas to seek blessings of the deity, the Protector of the Universe. Built approximately 400 years ago by Nizams of Hyderabad.',
    image: '/images/anatagiri.jpg',
    famousFood: {
        name: 'BambooChicken',
        description: 'Bamboo Chicken is a unique and traditional dish from the tribal regions of Telangana. It involves marinating chicken with local spices, stuffing it into bamboo shoots, and slow-cooking it over an open flame. The bamboo imparts a smoky flavor to the chicken, making it tender and flavorful. Bamboo Chicken is a must-try specialty for those looking to explore the authentic tribal cuisine of Telangana.',
        image: '/images/fooditem/bamboochicken.jpg',

      },
  },
  {
        theme: 'beach',
        places: [
         
          
        ],
      },
      {
        theme: 'pilgrimage',
        places: [
          {
            name: 'Basara Saraswathi Temple',
            description: 'Gnana Saraswati Temple situated in Basara is one of the famous Hindu temples dedicated to goddess Saraswathi. This temple is popularly known for the ritual Aksharabhyasam. Devotees throng to the temple to seek the blessings of mother goddess. Basara is well connected to other major cities, so one can easily reach Basara to seek blessings of mother goddess Saraswati.',
            image: '/images/telanganathemes/basara.jpg',
          },
          {
            name: 'Bhadrachalam Temple',
            description: 'Bhadrachalam temple is an important pilgrimage site not only in Telangana but throughout India and around the world. The temple is an epitome of spirituality and divinity. The rare idols of Lord Rama in the form of Vaikuntha Rama or Rama Narayana attracts thousands of pilgrims every year.',
            image: '/images/telanganathemes/bhadrachalam.jpg',
          },
          
        ],
      },
    {
            theme: 'heritage',
             places: [
          {
            name: "Charminar",
            description: "Built in the year 1591 AD, Charminar is the beating heart of Hyderabadis. The landmark of the city was built by the fifth ruler of Qutb Shahi dynasty, Muhammad Quli Qutb Shah. Charminar, a monument and mosque, is an imposing model that celebrates the influence of the Muslim Turkomans in India. Considered to be in the top ten monuments of the country, here’s a little something about the structure and its history.",
            image: "/images/hyd/hyderabad.jpg",
          },
          {
            name: "Golkonda Fort",
            description: "Golconda, also spelled Golkonda or Golkunda, historic fortress and ruined city lying 5 miles (8 km) west of Hyderabad in western Telangana state, southern India. From 1518 to 1591 it was the capital of the Quṭb Shāhī kingdom (1518–1687), one of five Muslim sultanates of the Deccan.The territory of Golconda lay between the lower reaches of the Godavari and Krishna rivers and extended to the Bay of Bengal coast. In 1687 the ruling dynasty of Quṭb Shāhī was overthrown by the Mughal emperor",
            image: "/images/telanganathemes/golconda.jpg",
          },
          
        ],
      },
      {
        theme: 'wildlife',
        places: [
          {
            name: "Nehru Zoological Park",
            description: "Located at a distance of 16 km from Hyderabad, Nehru Zoological Park was opened to the public in the year of 1963. It is situated near the historically important Mir Alam Tank, which is 200 year old and is the first multi-arch masonry dam in the world. Nehru Zoological Park is one of the largest zoos of India and one of the top sightseeing places to visit in Hyderabad. Run by the Forest department, Government of Telangana, the zoo has been named after Jawaharlal Nehru, the first prime minister of the country.",
            image: "/images/telanganathemes/nehruzoo.jpg",
          },
          {
            name: "Mrugavani National Park",
            description: "Mrugavani National Park is a national park located in Hyderabad, Telangana State, India. It is situated at Chilkur in Moinabad mandal, 20 km from MGBS and covers an area of 3.6 square kilometres (1.4 sq mi) or 1211 acres. It is home to a 600 different types of plant life. The Park is home to around 350 spotted deer.In 1994, it was designated a National Park. The weather in this area is usually pleasant. The vegetation within the park is a kind of mix of both forest and grassland. Degraded tropical waterless deciduous forest covers the park’s vegetation. While the Mrugavani National Park is known for its diverse plant and animal life, it also houses more than 100 different species of birds.",
            image: "/images/telanganathemes/mrugavani.jpg",
          },
          
        ],
      },
      {
        theme:'hillstation',
       places: [
          {
            name: "Ananthagiri Hills",
            description: "Ananthagiri Hills is one of the most natural and beautiful places in the state that appeals to tourists for not only the hiking opportunities along the hillside but also for spending time in the bosom of a dense forest, protecting you from the heat of southern India. This hill station is also the primary source of water for the neighbouring regions of Himayat Sagar as well as Osman Sagar. These water sources are a result of the Musi River that runs through the hill station of Ananthagiri. The Sri Anantha Padmanabha Swamy Temple dedicated to the worship of lord Vishnu overlooks the river, as well as invites pilgrims from all over the country for a spiritual experience. ",
            image: "/images/telanganathemes/ananthagiri.jpg",
          },
          
        
        ],
      
      },
    
]},
{stateid:25, state:'Tripura', data:[

  {
    name: 'Neer Mahal Palace',
    description: 'Famously known as the Lake Palace of Tripura, Neer Mahal Palace is the living witness of Tripura’s Past glory. The antique architectural designs, lush green lawn, and royal decoration of this palace are enough to give you a wow factor. Located in the middle of Rudrasagar Lake, the palace was constructed by King Bir Bikram Kishore Manikya Bahadur.Besides storing the historical and royal significance of Tripura.',
    image: '/images/neermahal.jpg',
    famousFood: {
      name: 'Mui Borok',
      description: 'A traditional Tripuri thali that typically includes dishes like Mui (bamboo shoot) dal, fish stews, smoked pork, and various types of chutneys.',
      image: '/images/fooditem/mui-borok.webp',
      
    },
  },
  {
    name: 'Unakoti',
    description: 'Located around 178 km away from Agartala, Unakoti is one of the prime tourist places in Tripura. Known as the center of ancient pilgrimage, the land of Unakoti is home to numerous historical and religious sculptures. Made out of rocks, the sculptures here speak a lot about Hindu cultures.Every year thousands of devotees pay a visit to this historical place in Tripura. From the famous Kal Bhairava sculpture to Lord Ganesha to Lord Hanuman.',
    image: '/images/unakoti.jpg',
    famousFood: {
      name: 'Wahan Mosdeng',
      description: 'A spicy salad made with fermented fish, garnished with onions, green chilies, and various herbs.',
      image: '/images/fooditem/Wahan-Mosdeng.jpg',
      
    },
  },

  {
    name: 'Agartala',
    description: 'Home to the Manikya Kings in the past, Agartala is the perfect mix of natural beauty combined with diverse and rich culture.Agartala is not just all flowers and valleys but also has a cultural richness with the diversity of people that stay here along with the historical and religious monuments. The capital of Tripura manages to create its culture and personality out of the coming together of stories of all those who reside here.',
    image: '/images/agartala1.jpg',
    famousFood: {
      name: 'Mui Borok',
      description: 'A traditional Tripuri thali that typically includes dishes like Mui (bamboo shoot) dal, fish stews, smoked pork, and various types of chutneys.',
      image: '/images/fooditem/mui-borok.webp',
      
    },
  },
 
  {
    name: 'Jampui Hills',
    description: 'Lying at an altitude of 1000m, the Jampui hills is part of the Mizo hills range located in the northern part of Tripura. This hillside area is quite popular for Orange Plantation. During the Orange festival, thousands of visitors thong towards this beautiful valley. If you want to witness the life of tribal people of Tripura from the closest, Jampui Hill can be the best destination to explore the traditional life of people living here.',
    image: '/images/jumpai.jpg',
    famousFood: {
      name: 'Wahan Mosdeng',
      description: 'A spicy salad made with fermented fish, garnished with onions, green chilies, and various herbs.',
      image: '/images/fooditem/Wahan-Mosdeng.jpg',
      
    },
  },
 
  {
    name: 'Kailashahar',
    description: 'A well liked tourist town near Agartala, Kailashahar was once the capital of Tripuran kingdom and evidence of its royal history can be still seen here.It is a town which gets a major part of it identity from a royal and significant past, the tints of which can still be seen around the town. Kailashahar is not only famous for its temples but is also as a popular trekking destination. The 16 tea estates are also a must see. ',
    image: '/images/kailashahar.jpg',
    famousFood: {
      name: 'Mui Borok',
      description: 'A traditional Tripuri thali that typically includes dishes like Mui (bamboo shoot) dal, fish stews, smoked pork, and various types of chutneys.',
      image: '/images/fooditem/mui-borok.webp',
      
    },
  },
  {
        theme: 'beach',
        places: [
   
        ],
      },
  
      {
        theme: 'pilgrimage',
        places: [
          {
            name: 'Tripura Sundari Temple',
            description: 'This pithasthan is also known as Kurma Pith because the shape of the temple premises resembles that of “Kurma” namely tortoise. The temple structure appears to be a modified Buddhist Stupa at the first look.The temple faces the west and the main entrance of the temple is also in the west though there is a narrow entrance in the north. Though the influence of medieval Bengal “Char Chaala“(4 slanted roof) temple architecture is clearly visible, such a blend is unique to this place and Tripura could distinctly claim this as its own Architectural style.',
            image: '/images/tripura-sundari-temple.png',
          },
          {
            name: 'Chaturdash Devta Temple',
            description: 'The Chaturdasha Temple of Tripura or the Temple Of Fourteen Deities is located near the old part of Agartala where the royal palace is situated. The location of the temple is about 8 kilometers away from the main city of Agartala which is the capital of the state of Tripura in India. The temple was dedicated to the “Chaturdasha Devata” which means fourteen deities. The temple was built by King Krishna Manikya Debbarma who was the ruler of Tripura at that time.',
            image: '/images/Chaturdash temple-Tripura.jpg',
          },
          
        ],
      },
    {
            theme: 'heritage',
             places: [
          {
            name: "Neermahal Water Palace",
            description: "The Lake Palace of Tripura' or the Neermahal is the largest palace of its kind in the entire Indian Subcontinent. This architectural beauty rightly derives its name from its location, i.e. the middle of Rudrasagar Lake. It is one of the two water palaces that our country has. The former royal palace is an outcome of King Bir Bikram Kishore Manikya Bahadur's great perspective. It was the summer palace for the king and his family.",
            image: "/images/neermahal1.jpg",
          },
           {
            name: 'Unakoti',
            description: 'Located around 178 km away from Agartala, Unakoti is one of the prime tourist places in Tripura. Known as the center of ancient pilgrimage, the land of Unakoti is home to numerous historical and religious sculptures. Made out of rocks, the sculptures here speak a lot about Hindu cultures.Every year thousands of devotees pay a visit to this historical place in Tripura. From the famous Kal Bhairava sculpture to Lord Ganesha to Lord Hanuman.',
            image: '/images/unakoti.jpg',
          },
        
        ],
      },
      {
        theme: 'wildlife',
        places: [
          {
            name: "Sepahijala Wildlife Sanctuary",
            description: "This wildlife sanctuary is a perfect host for migratory birds. Some of the special species found in this area are whistling teal, white ibis and open billed stork. The vegetation of this sanctuary is equally diverse and exciting. The sanctuary covers an area of around 18 square km and was established in the year 1987. You can see a wide variety of wildlife in this sanctuary-like Rhesus macaque, Pigtailed macaque, Capped langur, Spectacled langur, and slow loris. Other than this sanctuary you can also enjoy visiting the Sepahijala zoological park which is located near Amrit Sagar Lake. ",
            image: "/images/Sepahijala.png",
          },
          {
            name: "Rowa Wildlife Sanctuary",
            description: "This is one of the famous wildlife sanctuaries which is a natural heritage of Tripura. It was originally a forest that was marked as a sanctuary to safeguard the species living in it. It is in an area of 85 hectares in Panisagar and is rich in flora and fauna. The place is easily accessible and hence is quite crowded during weekends and other public holidays as people love to spend their day here observing the various treasures of nature.",
            image: "/images/Rowa-Wildlife-Sanctuary.webp",
          },
        
        ],
      },
      {
        theme:'hillstation',
            places: [
          {
            name: "Jampui Hills",
            description: "Tripura claims a prominent place in North East India for her exquisite natural beauty spots punctuated with lush green sylvan treasure. The luxuriant forests of Jampui, the premier one among the 6 principal hill ranges of Tripura provides a life time’s exhilarating experience for the tourists.‘Jampui Hill – The permanent seat of spring’ is situated at an altitude of about 3000 feet above the sea level and about 250 kilometers away from Agartala, the capital of Tripura. Jampui is famous for it’s charming landscape and bracing climate. ",
            image: "/images/Jampui Hills.jpg",
          },
          
        ],
      
      },
]},


{stateid:26, state:'Uttar Pradesh', data:[
  {
    name: 'Agra',
    description: ` One of the most important places to visit in Uttar Pradesh and
    famous across the globe for being the home of the Taj Mahal,
    Agra is located on the banks of River Yamuna. Home to two more
    UNESCO World Heritage Sites – Agra Fort and Fatehpur Sikri,
    Agra is indeed a sneak peek into the architectural history and
    legacy of the Mughal empire. The city forms part of the popular
    Golden Triangle Circuit for tourists along with Delhi.`,
    image: '/images/tajmahal4.jpg',
    famousFood: {
      name: 'Petha',
      description: 'A trip to Agra is always incomplete without Petha. It is one of the most iconic street food in Agra. Petha comes in a wide variety, right from Paan to Kesar and if these arent mouthwatering enough for you, then you can always try its other variants. Being a speciality of Agra, it has people rushing over from all parts of the country due to its delicious flavour. Petha is prepared from white pumpkin or ash gourd and mixed with nuts which give it a unique taste. It comes in two varieties. One variety is dry and hard while the other is soft and kind of liquid.',
      image: '/images/fooditem/agra.jpg',
    },

  },
  {
    name: 'Varanasi',
    description: `Varanasi, also known as Kashi and Benaras and
    considered to be the world’s oldest living city is one of the most
    famous tourist places in Uttar Pradesh. Being one of Hinduism’s
    seven holy cities, Varanasi is indeed the spiritual capital of India.
    While you would find temples at almost every turn in the city, the
    Kashi Vishwanath Temple, which is one of the 12 Jyotirlingas, is
    the most visited and the oldest of all. Varanasi is considered an
    auspicious place to die.`,
    image: '/images/varanasi1.jpg',
    famousFood: {
      name: 'Kachori sabzi',
      description: 'This appetising breakfast item in Banaras is the first dish you must try in the city. While the crispy kachoris are made with a stuffing of lentils and spices (called dal ki pithi), the lip-smacking and aromatic sabzi is prepared with boiled potatoes, black pepper, cloves, chillies and other ingredients.  Visit any street food joint in the city in the early morning and you will see many hostelers and office goers enjoying this hot breakfast. So, we can safely say that your trip to Banaras will be incomplete without tasting the authentic Banarasi kachori sabzi.',
      image: '/images/fooditem/varanasi.jpg',
    },
  },

  {
    name: 'Vrindavan',
    description: ` Located only 10 km. away from each other, Mathura and
    Vrindavan are often considered twin cities. One of the oldest cities
    on the banks of Yamuna, Vrindavan is considered to be one of
    the most important places of pilgrimage for the devotees of Lord
    Krishna. Considered to be his childhood abode, the city of
    Vrindavan, which is located along the waters of river Yamuna
    hosts hundreds of Lord Krishna and Radha temples scattered
    throughout. `,
    image: '/images/virndavan.jpg',
     famousFood: {
      name: 'Tikki',
      description: 'Tikki is a fried potato cutlet. It is the base of the savoury chaat in Vrindavan. The chaat here is a combination of spicy mint chutney, chickpeas, and tamarind.',
      image: '/images/fooditem/vrindavan.jpg',
    },
  },

  {
    name: 'Mathura',
    description: 'Mathura is considered the birthplace of Lord Krishna and hence it is one amongst the seven sacred cities for followers of Hinduism. This ancient town has a number of temples belonging to various ages. It was earlier a Buddhist center and was home to 20 monasteries before Hinduism rose to prominence. Some of the tourist attractions of Mathura include:Krishna Janma Bhoomi Mandir, jama mashid,dwarakadhisha temple,kusum sarover',
    image: '/images/mathura1.jpg',
    famousFood: {
      name: 'Peda',
      description: 'Mathura is renowned for its delicious and flavorful pedas. Peda is a traditional Indian sweet made from khoya (reduced milk) and sugar. Mathura pedas are often flavored with cardamom and saffron, and they have a rich, melt-in-the-mouth texture that makes them a popular treat among locals and visitors. Enjoying a Mathura peda is a delightful way to experience the towns culinary heritage and devotion to Lord Krishna..',
      image: '/images/fooditem/mathura.jpg',
    },
  },
 
  {
    name: 'Prayagraj (Allahabad)',
    description: `Prayagraj is officially known as Allahabad and is one of the most
    important places to visit Uttar Pradesh has to offer. It is home to
    the famous Triveni Sangam, or the meeting points of the Ganga,
    Yamuna, and Saraswati rivers. Allahabad is situated at the site of
    the ancient city of Prayag and annually hosts the Maha Kumbh
    Mela, one of the biggest Hindu gatherings in the world.
    In Allahabad, there are numerous places to visit, including the
    UNESCO. `,
    image: '/images/prayagraj.jpg',
    famousFood: {
      name: 'Kachori Sabzi',
      description: 'Kachori Sabzi: Kachori Sabzi is a popular breakfast or snack option in Prayagraj. It consists of deep-fried pastries (kachoris) that are filled with a spiced mixture of lentils or potatoes. These crispy kachoris are often served with a tangy and spicy potato curry (sabzi), creating a flavorful and satisfying combination. It is a beloved street food that you can find in local markets and eateries.',
      image: '/images/fooditem/varanasi.jpg',
    },
  },
  {
    theme: 'beach',
    places: [
      {
        name: 'Chuka Beach',
        description: 'Chuka Beach is located on the banks of the Sharda River in the Pilibhit district of the state of Uttar Pradesh. But it is not much famous as a famous tourist destination. But you can choose this place to have more fun at less cost. Rich in historical and religious sites, Pilibhit is one such district that has a lot to offer to tourists. People from different parts of the country and even from outside come to see the beautiful ambiance, serenity, and various religious places of the district.',
        image: '/images/chukabeach.jpg',
      },
      
    ],
  },
  {
    theme: 'pilgrimage',
    places: [
      {
        name: 'Varanasi ',
        description: 'It is one among the most revered places of Pilgrimage in India and also one of the best places to visit in Uttar Pradesh.Also known as Kashi and Banaras, the city gets its name from two rivers Varuna and Assi. Nicknamed as the cultural capital of India, Varanasi was the seat of learning in the past. Legend has it that Lord Shiva himself established this holy city as his abode. It is one of the twelve Jyotirlinga sites in India and also one of the Shakti Peethas. Varanasi is an important destination among Hindus as they believe those who die in Varanasi will attain salvation .',
        image: '/images/varanasi1.jpg',
      },
      {
        name: 'Mathura',
        description: 'Mathura is an ancient city and also the district headquarters of Mathura in the state of Uttar Pradesh. Mathura is one of the popular tourist places near Agra and also one of the best places to visit near Delhi.Mathura is one of the seven cities (Sapta Puri) considered holy by Hindus, the other six are Ayodhya, Haridwar, Varanasi, Kanchipuram, Ujjain and Dwarka. Mathura has been chosen as one of the heritage cities for HRIDAY - Heritage City Development and Augmentation Yojana scheme of Government of India.',
        image: '/images/mathura1.jpg',
      },
      
    ],
  },
{
        theme: 'heritage',
         places: [
      {
        name: "Taj Mahal",
        description: "First of the World Heritage sites in Uttar Pradesh is one of the world’s most famous places, the incredible Taj Mahal. It was built between 1632 and 1653 by the Mughal emperor, Shah Jahan, as a tomb for his favourite wife, Mumtaz. Commissioned by the stricken emperor after Mumtaz died giving birth in 1631, the Taj Mahal is definitely the world’s most famous monument to love.The Taj Mahal is constructed entirely of gleaming white marble.",
        image: "/images/tajmahal4.jpg",
      },
      {
        name: "Agra Fort",
        description: "Uttar Pradesh UNESCO sites is the amazing Agra Fort. Normally you’d expect a “fort” to be a hardened military installation. But Agra Fort is really more of an imperial palace and walled city. It was built for Mughal emperor Akbar the Great between 1565 and 1573, who recognised the strategic importance of the location. Akbar’s grandson Shah Jahan (builder of the Taj Mahal) applied the finishing touches and gave the Fort its current appearance.",
        image:"/images/agrafort.jpg"
      },
  
    ],
  },
  {
    theme: 'wildlife',
    places: [
      {
        name: "Dudhwa National Park",
        description: "Dudhwa National Park or the Dudhwa Tiger Reserve residing the areas of Lakhimpur & Kheri district of Uttar Pradesh, lying adjacent to the Indo-Nepal border bringing together two most incredible sanctuaries of the area namely, Kishanpur and Katerniaghat Wildlife Sanctuaries to represent the excellent natural forests and greenery along the Terai region. Quite impressively, the northern boundary of the park is being constituted by the Mohana River flowing along the Indo-Nepal border whilst the Southern boundary is formed by the river Suheli. .",
        image: "/images/dudhwa.jpeg",
      },
      {
        name: "Katarniaghat Wildlife",
        description: "Beautifully nestled on the border of Indo-Nepal, Katarniaghat Wildlife Sanctuary lies in the district of Behraich in the state of Uttar Pradesh. Before its establishment as a wildlife sanctuary in Uttar Pradesh in May 1975, Katarniaghat was a part of the West Behraich Forest Division. Sprawls over a massive area of 550 sq km, Katarniaghat Wildlife Sanctuary is home to dense terai jungle that lounge over the ranges of Kakraha, Motipur, Dharampur, Nishangarah and Kareniaghat. A major chunk of the luxuriant woodlands at Kataniaghat Wildlife Sanctuary are consist of Sal (Shorea Robusta) and Teak (Tectona Grandis).. ",
        image: "/images/katarniaghat.jpg",
      },

    ],
  },
  {
    theme:'hillstation',
   places: [
      
    ],
 
  },

]},
{stateid:27, state:'Uttarakhand',  data:[

  {
    name: 'Kedharnath Temple',
    description: `Kedarnath Temple (Sanskrit: केदारनाथ मंदिर, IAST: Kēdāranātha Mandira, lit. 'temple of the God of the field') is a Hindu temple, one of the twelve jyotirlinga of Shiva. The temple is located on the Garhwal Himalayan range[citation needed] near the Mandakini river, in the state of Uttarakhand, India.The name "Kedarnath" means "the lord of the field": it derives from the Sanskrit words kedara ("field") and natha ("lord"). The text Kashi Kedara Mahatmya state `,
    image: '/images/uttarkhand.jpg',
    famousFood: {
      name: 'Rice and Lentils',
      description: 'Simple meals of rice and dal (lentils) are commonly served in the region, providing essential nutrients and energy to pilgrims.',
      image: '/images/fooditem/Kitchari.jpg',
      
    },
  },

  {
    name: 'Rishikesh',
    description: 'Rishikesh is a blend of tranquility and adventure. Its location at the confluence of River Ganges and River Chandrabhaga and views of spectacular hills and various adventurous activities such as trekking, rafting and camping captivate nature lovers; the tranquility of the place with the importance attached to it as a pilgrim center touches the soul of pilgrims. Rishikesh is called as the Yoga Capital of the world.The only season Rishikesh should be avoided is during the monsoons.',
    image: '/images/rishikesh.webp',
    famousFood: {
      name: 'Aloo Poori',
      description: 'Aloo Poori is a popular North Indian breakfast dish. It consists of deep-fried bread (poori) served with a spicy potato curry (aloo).',
      image: '/images/fooditem/aloo-puri.jpg',
      
    },
  },

  {
    name: 'Haridwar',
    description: 'Haridwar is also called as the ‘Gateway to the Lord’ thanks to a great number of temples and ashrams located here. The city is considered holy and hence pilgrims from various parts of the world travel to the place to offer their prayers. It is also famous for the Kumbh Mela, a festival, which is held once in twelve years. Given below are some of the leading attractions in Haridwar.Har-ki Pauri is the most famous spot from where maximum people take a dip in the Ganges.',
    image: '/images/haridwar1.webp',
    famousFood: {
      name: 'Aloo Poori',
      description: 'Aloo Poori is a popular North Indian breakfast dish. It consists of deep-fried bread (poori) served with a spicy potato curry (aloo).',
      image: '/images/fooditem/aloo-puri.jpg',
      
    },
  },

  {
    name: 'Nainital Lake',
    description: `The town is set in a valley around the Nainital Lake - an eye-shaped lake, which is located at an altitude of 1,940 m (6,350 ft) from sea level. The lake is 1,433 m (1,567 yd) long and 463 m (506 yd) wide, and is approximately two miles in circumference.[11] The bed of the lake is at a depth of 85 m (93 yd) near Pashandevi, the deepest point of the lake. The lake is deduced to have been formed tectonically. Balia Nala, which is the main stream feeding the lake is along a fault line.`,
    image: '/images/nainitallake.webp',
    famousFood: {
      name: 'Bal Mithai',
      description: 'Bal Mithai is a famous sweet treat from the Kumaon region. It is made from roasted khoya (dried milk solids) coated with sugar balls. The unique taste of Bal Mithai makes it a must-try delicacy in Nainital.',
      image: '/images/fooditem/Bal-mithai.jpg',
      
    },
  },
  {
    name: ' Mussoorie hill station',
    description: `Mussoorie is a hill station and a municipal board, near Dehradun city in the Dehradun district of the Indian state Uttarakhand. It is about 35 kilometres (22 mi) from the state capital of Dehradun and 290 km (180 mi) north of the national capital of New Delhi. The hill station is in the foothills of the Garhwal Himalayan range.The second highest point is the original Lal Tibba in Landour, with a height of over 2,275 m (7,464 ft). Mussoorie is popularly known as The Queen of the Hills.[4][5]  `,
    image: '/images/mussoorie1.jpg',
    famousFood: {
      name: 'Maggi',
      description: 'Maggi noodles have become synonymous with hill stations in India, and Mussoorie is no exception. You can find numerous stalls and eateries serving steaming hot Maggi with different toppings like vegetables and cheese.',
      image: '/images/fooditem/maggi.jpg',
      
    },
  },
  {
    theme: 'beach',
    places: [
      {
        name: ' Ganga Beach',
        description: 'The wilderness this beach offers is perfect for nature lovers and explorers. Beautiful shimmering waters of the Ganga, a star-filled night sky, lush green surroundings sounds like the perfect idea of spending some quality time while soaking in the natural beauty. It works like magic for city-weary people.',
        image: '/images/ganga-beach.jpg',
      },
      {
        name: 'Nim (neem) Beach',
        description: 'Nim Beach white sand beach on the Ganga river location near Topvan Lakshman jhula This Beach famous places For Rafting End Point in rishikesh and For Best place meditation For foreigners in rishikesh. Rishikesh in Uttarakhand is the yoga capital of the world. Located at the foot of the grand Himalayas and along the sacred Ganges River, this quaint city is a spiritual haven for people around the globe. ',
        image: '/images/neem-beach.jpg',
      },
      
    ],
  },
  {
    theme: 'pilgrimage',
    places: [
      {
        name: 'Kedarnath',
        description: 'Kedarnath Temple (Sanskrit: केदारनाथ मंदिर, IAST: Kēdāranātha Mandira, lit. temple of the God of the field is a Hindu temple, one of the twelve jyotirlinga of Shiva. The temple is located on the Garhwal Himalayan range[citation needed] near the Mandakini river, in the state of Uttarakhand, India.The name "Kedarnath" means "the lord of the field": it derives from the Sanskrit words kedara ("field") and natha ("lord"). The text Kashi Kedara Mahatmya state ',
        image: '/images/uttarkhand.jpg',
      },
      {
        name: ' Rishikesh',
        description: 'Rishikesh is a blend of tranquility and adventure. Its location at the confluence of River Ganges and River Chandrabhaga and views of spectacular hills and various adventurous activities such as trekking, rafting and camping captivate nature lovers; the tranquility of the place with the importance attached to it as a pilgrim center touches the soul of pilgrims. Rishikesh is called as the Yoga Capital of the world.The only season Rishikesh should be avoided is during the monsoons.',
        image: '/images/rishikesh.webp',
      },
      
    ],
  },
  {
    theme: 'heritage',
    places: [
      {
        name: 'Dwarahat (Near Ranikhet)',
        description: ' At a distance of 34 km from Ranikhet & 77 km from Almora, Dwarahat is an ancient town situated in Almora district of Uttarakhand. It is famous for its ancient temples which were constructed mainly by the Katyuri kings and are maintained by ASI.Dwarahat, which means Way to Heaven, was once the principal seat of the Katyuri kings whose empire was stretched from the Sutlez River in the west to river Gandak in the east, ',
        image: '/images/dwarahat.jpg',
      },
      {
        name: 'Katarmal Sun Temple (Near Almora)',
        description: 'At a distance of 20 km from Almora and 30 km from Ranikhet, Katarmal Sun Temple is an ancient Hindu temple situated at Katarmal village in Almora district of Uttarakhand.Katarmal Temple is dedicated to Lord Burhadita or Vriddhaditya (the old Sun God) and is one of the famous historical places of Kumaon hills in Uttarakhand. ',
        image: '/images/katarmal-sun-temple.jpg',
      },
      
    ],
  },
  {
    theme: 'wildlife',
    places: [
      {
        name: 'Binsar Wildlife Sanctuary ',
        description: 'Binsar Wildlife Sanctuary is well located in the foothills of the mighty Himalayas right in Almora district of Uttarakhand. When we speak of the wildlife sanctuaries in Uttarakhand then it is for obvious reasons the very amazing Binsar Wildlife Sanctuary always tops the chart. Since its inception in the year 1988, it has been offering the best it could to every visitor who had been here. It is rightly set at an altitude of 2,270 m and it is said to cover an area about 47.04 sq. km. ',
        image: '/images/Binsar-Wildlife-Sanctuary.webp',
      },
      {
        name: 'Rajaji Wildlife Sanctuary',
        description: 'Rajaji Wildlife Sanctuary is a fine and quite renowned wildlife sanctuary and a recognised Tiger Reserve located near Haridwar, Rishikesh and Dehradun about 8 km, 21 km and 55 km away respectively. This is quite a huge spot sanctuary which is stretched over 820.42 sq. km and it is certainly considered to be one of the must-visit national parks in India for various reasons. ',
        image: '/images/Rajaji-Wildlife-Sanctuary.webp',
      },
      
    ],
  },
  {
    theme: 'hillstation',
    places: [
      {
        name: 'Mussoorie',
        description: 'Mussoorie is a hill station and a municipal board, near Dehradun city in the Dehradun district of the Indian state Uttarakhand. It is about 35 kilometres (22 mi) from the state capital of Dehradun and 290 km (180 mi) north of the national capital of New Delhi.With an expanse of commanding snow ranges to its northeast and gorgeous Doon Valley & Shivalik ranges to the south, Mussoorie is the best hill station in Uttarakhand that appears like a little fairyland to the tourists.',
        image: '/images/mussoorie1.jpg',
      },
      {
        name: 'Kanatal',
        description: 'Kanatal is one of those few hill stations that are still pure and pristine, and have not been victim to commercialisation yet. A visit to Kanatal will introduce you to the actual beauty and scenic views that Uttarakhand has to offer.',
        image: '/images/kanatal.jpg',
      },
    ]

  }
]},

{stateid:28, state:'West Bengal', data:[
  {
    name: ' Darjeeling',
    description: `Darjeeling  Bengali: [ˈdarˌdʒiliŋ], Nepali: [darˈd͡ziliŋ]) is a town and municipality in the northernmost region of the Indian state of West Bengal. Located in the Eastern Himalayas, it has an average elevation of 2,045 metres (6,709 ft).[10] To the west of Darjeeling lies the easternmost province of Nepal, to the east the Kingdom of Bhutan, to the north the Indian state of Sikkim, and farther north the Tibet Autonomous Region region of China.`,
    image: '/images/DARJEELING.jpg',
    famousFood:{
      name:'Thukpa',
      description:'Thukpa is essentially a dish of Darjeeling but finds its roots in the Tibetan cuisine. A hot-noodle soup, Thukpa comprises of many veggies, some customary tinge of spices, and Hakka noodles. It is one of the most admired dishes within the town and is available at almost all the restaurants and roadside stalls.',
      //https://www.holidify.com/images/cmsuploads/compressed/Thukpa,_Manali,_Himachal_Pradesh_20190603041801.jpg
      image:'/images/Thukpa.jpg',
},
  },

  {
    name: ' Victoria Memorial',
    description: `The Victoria Memorial is a large marble building on the Maidan in Central Kolkata, having its entrance on the Queen's Way. It was built between 1906 and 1921 by the British government. It is dedicated to the memory of Queen Victoria, Empress of India from 1876 to 1901.Following the death of Queen Victoria in January 1901,[2] Lord Curzon, the Viceroy of India, suggested that a fitting memorial to the late Queen-Empress should be created in Calcutta. `,
    image: '/images/victorial.jpg',
    famousFood:{
      name:'Kolkata kati rolls',
      description:'A kati roll -sometimes spelt kathi roll -Bengal is a street-food dish originating from Kolkata, West Bengal. In its original form, it is a skewer-roasted kebab wrapped in a paratha bread, although over the years many variants have evolved all of which now go under the generic name of kati roll.',
      //https://assets.cntraveller.in/photos/628f7ec3213f2af0645a407d/16:9/w_1920,h_1080,c_limit/Kolkata-kati-rolls-lead.jpg
      image:'/images/Kolkata-kati-rolls.webp',
},
  },
  {
    name: ' Howrah Bridge',
    description: ` The Howrah Bridge is a balanced cantilever bridge over the Hooghly River in West Bengal. Commissioned in 1943,[9][11] the bridge was originally named the New Howrah Bridge, because it replaced a pontoon bridge at the same location linking the cities of Howrah and Kolkata (Calcutta). On 14 June 1965, it was renamed Rabindra Setu after the great Bengali poet Rabindranath Tagore, who was the first Indian and Asian Nobel laureate.[11] It is still popularly known as the Howrah Bridge.`,
    image: '/images/howrahbridge.jpg',
    famousFood:{
      name:'Puchka',
      description:'Fuchka or Puchka is a is a Bengali word it means street food and it is commonly known as Golgappa or Panipuri in India. It contains boiled chickpeas, boondi, and even sprouts and served with tangy and spicy water.',
      //https://media-cdn.tripadvisor.com/media/photo-s/14/e7/80/f1/cheese-burst-puchka.jpg
      image:'/images/Puchka.jpg',
},
  },
  {
    name: ' Dakshineswar Kali Temple',
    description: `Dakshineswar Kali Temple or Dakshineswar Kalibari is a Hindu navaratna temple in Dakshineswar, Kolkata, West Bengal, India. Situated on the eastern bank of the Hooghly River, the presiding deity of the temple is Bhavatarini, a form of Parashakti Adya Kali, otherwise known as Adishakti Kalika.[1] The temple was built in 1855 by Rani Rashmoni, a Zamindar, philanthropist and a devotee of Kali. The temple is known for its association with Ramakrishna and Ma Sarada Devi, mystics of 19th century Bengal `,
    image: '/images/dakshineswar.jpg',
    famousFood:{
      name:'Ilish Macher jhol bhaat',
      description:'Machher Jhol is a traditional spicy fish curry in Nepalese cuisine -including Maithili Cousine and Bhojpuri Cuisine, Indian Cuisine -including Bengali, Maithili Cuisine, Bhojpuri Cuisine, and Odia cuisines and Bangladeshi Cuisine -Bangla Cuisine in the eastern part of the Indian subcontinent. It is in the form of a very spicy stew or gravy that is served with rice. Machher Jhol is liberally seasoned with turmeric, garlic, onions, and grated ginger and Indian spices. ',   
      //https://img-global.cpcdn.com/recipes/337ff577ded11246/1200x630cq70/photo.jpg
      image:'/images/Ilish Macher jhol bhaat.jpg',
},
  },
  {
    name: 'Kalimpong',
    description: 'Kalimpong is a virgin hill station in West Bengal renowned for its panoramic valley views, Buddhists monasteries and churches and Tibetan handicrafts etc.50 minutes east ofÊDarjeeling, Kalimpong is a hill station on the foothills of Shivalik ranges at an altitude of 1250 m overlooking the Teesta Valley. People say that the area was ruled by Bhutanese kings and was a forward post of the Bhutanese Army till the 19th century. Dotted with ancient Buddhist monasteries, centuries old churches.',
    image: '/images/KALIMPONG.jpg',
    famousFood:{
      name:'Thupka',
      description:'Thukpa is essentially a dish of Darjeeling but finds its roots in the Tibetan cuisine. A hot-noodle soup, Thukpa comprises of many veggies, some customary tinge of spices, and Hakka noodles. It is one of the most admired dishes within the town and is available at almost all the restaurants and roadside stalls.',
      //https://www.travelworldplanet.com/wp-content/uploads/2018/10/Thukpa-dish.jpg
      image:'/images/Thukpa.jpeg',
},
  },
  {
    theme: 'beach',
    places: [
      {
        name: 'Mandarmani',
        description:'Mandarmani is one of the most famous beaches in West Bengal that is visited by several tourists. Mandarmani is also famous for having the longest motorable beach in the country. The stretch is almost 13km long. It is one of the most serene beaches in the state where you will witness the most beautiful sunrise as well as a sunset. While you take a stroll at the beach, you can take sips of the coconut water, and even grab some delectable seafood available in the roadside eateries.',
        image: '/images/Mandarmani.jpg',
      },
      {
        name: 'Shankarpur',
        description: 'Shankarpur beach is one of the most beautiful beaches in West Bengal where you can witness sun rays kissing the sea waves. You can also see the fishermen trailing their nets in the sea with their boats. This is an excellent place for photography enthusiasts.',
        image: '/images/Shankarpur-sea-beach.jpg',
      },
    
    ],
  },
  {
    theme: 'pilgrimage',
    places: [
      {
        name: 'ISKCON Chandrodaya Temple, Mayapur',
        description:'ISKCON Chandrodaya Temple in Mayapur is one of the famous religious places in West Bengal. The temple is dedicated to Lord Krishna, and you will also find the statue of Sri Prabhupada, the founder of ISKCON. The temple is spacious and airy, and there are life-size idols of gods and goddesses in the temple. You can also visit their Govinda Restaurant, which is famous for its sumptuous vegetarian cuisines and one of the best things to do in West Bengal.',
        image: '/images/ISKCON-Temple-Mayapur.jpg',
      },
      {
        name: 'Sri Chaitanya Math, Mayapur',
        description: 'This math was founded by Gaudiya Math’s acharya, Srila Bhaktisiddhanta Sarasvati Maharaja. The math is dedicated to Radha-Govinda; however, the main attraction here is the four altars that are dedicated to the Vaishnava acharyas named Sri Madhvacarya, Sri Nimbarka, Sri Ramanujacarya, and Sri Visnuswami.',
        image: '/images/Sri-Chaitanya-Math-Mayapur.jpg',
      },
   
    ],
  },
{
        theme: 'heritage',
         places: [
      {
        name: "Kolkata, West Bengal - The city of Joy",
        description: "Kolkata, India's second biggest city, is a perpetually ongoing festival of human existence, concurrently luxurious and squalid, refined and frantic, pointedly futuristic, while beautifully in decay. A vibrant 350-year-old metropolis located on India's Eastern Coast, the capital of West Bengal thrives on contradictions and imposing spectacles; nothing is commonplace in this city. Famously known as the City of Joy, Kolkata is, in every sense, the artistic, cultural and intellectual capital of the country. Kolkata's streets are vivid, hectic, chaotic, and yet, brimming with life and creativity. ",
        image: "/images/kolkata.jpg",
      },
      {
        name:"Kalimpong",
        description:"Kalimpong is a virgin hill station in West Bengal renowned for its panoramic valley views, Buddhists monasteries and churches and Tibetan handicrafts etc.50 minutes east ofÊDarjeeling, Kalimpong is a hill station on the foothills of Shivalik ranges at an altitude of 1250 m overlooking the Teesta Valley. People say that the area was ruled by Bhutanese kings and was a forward post of the Bhutanese Army till the 19th century.",
        image: "/images/kalimpong1-scaled.jpg",
      },
    
    ],
  },
  {
    theme: 'wildlife',
    places: [
      {
        name: "Senchal Wildlife Sanctuary",
        description: "This is an old wildlife sanctuary located in Darjeeling. The Senchal Wildlife Sanctuary spreads across 39 square kilometers of area. You will find a wide variety of birds and animals in the sanctuary. This includes Rhesus Monkey, Himalayan Flying Squirrel, Assam Macaque, Wild Boar, Barking Deer and more. You can also find some of the endangered species like the jungle cat, Leopard, and Himalayan Black Bear. It houses many species of birds as well.",
        image: "/images/Senchal-Wildlife-Sanctuary_18th-Feb.webp",
      },
      {
        name: " The Buxa Tiger Reserve",
        description:"With rich biodiversity, the Buxa Tiger Reserve is located in the Indo-Malayan region. It covers a large area providing a home to some of the endangered and rare birds and animals. You will find Tigers, Leopard Cats, Asian Elephants, Regal Pythons, Bengal Floricans, Hog Deer, Hispid Hares, Slender-billed Vultures, and more. The place is rich in flora and fauna. This helps attract tourists to come and visit the place. When visiting the Buxa Tiger reserve, you can also explore other attractions like Mahakaleshwar Jyotirlinga Temple and Buxa Fort.",
        image: "/images/The-Buxa-Tiger-Reserve_18th-Feb.webp",
      },
      
    ],
  },
  {
    theme:'hillstation',
   places: [
      {
        name: "Darjeeling",
        description: "West Bengal is one of the famous Indian states located in the eastern part. This state has marvelous backdrop with a combination of incredible scenic charm. Will the spectacular aura of Himalayan range as a backdrop, the hills and valleys of West Bengal has given some of the really gorgeous hill stations. This stunning state is also a home to Sundarban mangroves which is the key feature and hence every year numerous tourists visit West Bengal’s attractions to explore the states hidden treasures. ",
        image: "/images/darjling.jpg",
      },
      {
        name: "Kalimpong",
        description:"Kalimpong is the neighbor hill station of Darjeeling and it is another amazing hill station in West Bengal. This beautiful hill station of West Bengal houses the Mountain Division 27 of the Indian Army and is also the home to Shivalik Hills. Kalimpong also gains attention as it is one of the hill stations in West Bengal which experiences good rainfall. This hill station is famous for Buddhist monasteries, churches and Tibetan handicrafts. Kalimpong is also the home of tigers which is one of the famous National Park in West Bengal called as Neora Valley National Park.",
        image: "/images/kalimpong1.jpg",
      },
    
    ],
 
  },
]},

{stateid:29, state:'Delhi', data:[
  {
    name: ' India Gate',
    description: `This is one of the most popular sites to visit during your time in Delhi. This monument is originally called ‘All India War Memorial’ which was built in the memory of the Indian Army soldiers who fought in the First World War and the Afghan War. India Gate is a world-famous monument and is visited by hundreds of international tourists every year. During the annual Republic Day of India, a ceremonious parade is a help here every year.`,
    image: '/images/india gate.jpg',
    famousFood: {
      name: 'Chaat',
      description: 'Delhi is famous for its chaat, a savory and tangy street food. You can find various types of chaat, such as Aloo Chaat, Papdi Chaat, and Dahi Puri, served by street vendors near India Gate.',
      image: '/images/fooditem/chaat.jpg',
      
    },
  },
  {
    name: 'Qutub Minar ',
    description: `Qutub Minar is an important destination for tourists visiting the city of Delhi during their sightseeing tour. This historic structure is built in the architectural style of Afghanistan and Iran. The structure is around 72 meters tall with inscriptions and carvings on its surface. One interesting fact is that Qutub Minar is one of the world’s highest minaret with a brick structure `,
    image: '/images/Qutubminar.jpg',
    famousFood: {
      name: 'Kebabs',
      description: 'Delhi is famous for its mouthwatering kebabs, and you can find various types of kebabs, such as Seekh Kebabs, Chicken Tikka, and Boti Kebabs, at nearby eateries.',
      image: '/images/fooditem/Best-Delhi-Kebabs.webp',
      
    },
  },
  {
    name: 'Lotus Temple',
    description: `This beautiful temple made out of marble stone is famous for its beautiful architecture. The shape of the temple resembles that of a lotus flower and after sunset, the temple is beautifully lit. Lotus Temple can be called the most peaceful Delhi tourist places.The lotus temple is known as the place of worship for the Baha'i faith. There is no idol present inside the temple which is per the Baha'i faith. The Lotus Temple is constructed with nine sides to it.`,
    image: '/images/Lotustemple.jpg',
    famousFood: {
      name: 'Chole Bhature',
      description: 'A classic North Indian dish consisting of spicy chickpea curry (chole) served with fluffy deep-fried bread (bhature).',
      image: '/images/fooditem/chola-bhature.jpg',
      
    },
  },
  {
    name: 'Red Fort',
    description: `This UNESCO World Heritage Site is one of the most visited tourist attractions in Delhi and one of the famous tourist destination sites. The Red Fort is constructed with the use of red sandstone and was built around 1630 by the Mughal emperor of that time. The fort is built according to Islamic architecture with many aspects of Persian and Hindu as well. This palace fortress is known as the Red Fort because of the red sandstone fabric of its rampart walls.`,
    image: '/images/redfort.jpg',
    famousFood: {
      name: 'Paranthe Wali Gali',
      description: 'Located in the Chandni Chowk area near the Red Fort, this street is famous for its stuffed parathas, served with a variety of fillings like potatoes, cottage cheese, and mixed vegetables.',
      image: '/images/fooditem/paranthe-wali-gali.jpg',
      
    },
  },
  {
    name: 'Jantar Mantar',
    description: 'Constructed in 1724 by Maharaja Jai Singh of Jaipur, Jantar Mantar is an astronomical observatory and one of the fascinating tourist places to visit in Delhi. Fascinating for their ingenuity, the instruments at Jantar Mantar can no longer be used accurately because of the tall buildings around. However, a visit to admire the science of Indian astronomy makes it one of the most visited tourist attractions in Delhi.',
    image: '/images/jantarmantar.jpg',
    famousFood: {
      name: 'Paranthe Wali Gali',
      description: 'Located in the Chandni Chowk area near the Red Fort, this street is famous for its stuffed parathas, served with a variety of fillings like potatoes, cottage cheese, and mixed vegetables.',
      image: '/images/fooditem/paranthe-wali-gali.jpg',
      
    },
  },
  {
    theme: 'beach',
    places: [
      {
        name: 'Puri Beach',
        description: 'One of the finest coastline of the Bay of Bengal that has sun gleaming on the pristine waters of the beach near New Delhi. This beach is located at a mere distance of 35 km from the Sun Temple which is another famous landmark of India.',
        image: '/images/puribeach.jpg',
      },
      {
        name: 'Astaranga Beach',
        description: 'Astaranga meaning "colourful sunset" is a magnificent beach located in the state of Orissa. As the name suggests this beach is famous for the picturesque views that it provides during the sunset. The sky takes on vivid hues and the blue water in juxtaposition of it makes the whole place look magical.The Astaranga beach is a famous fishing village and every morning a market is set up on the beach from where you can purchase the different varieties of fresh fishes',
        image: '/images/astaranga.jpg',
      },
      
    ],
  },

{
    theme: 'pilgrimage',
    places: [
      {
        name: 'Akshardham Mandir',
        description: 'Akshardham Mandir is one of the most popular Hindu temples in Delhi that is visited by many tourists all through the year. There are more than 200 idols of Hindu Gods and Goddesses in this temple. The temple is spread in a large area of land and you may not be allowed to carry your camera or mobile phone inside the temple. The temple looks spectacular in the evening.',
        image: '/images/Akshardham-Mandir-Delhi.jpg',
      },
      {
        name: 'Kali Bari, Delhi',
        description: 'Delhi Kali Bari was established in the 1930s and still witnesses huge crowds, especially during Kali Pujo or Diwali. It is mostly visited by the Bengali crowd in the city, but on the night of Kali Pujo, you will be able to see people from different corners of the city visiting this temple.',
        image: '/images/Kali-Bari-New-Delhi.jpg',
      },
      
    ],
  },
{
        theme: 'heritage',
         places: [
          {
            name: 'Qutub Minar ',
            description: `Qutub Minar is an important destination for tourists visiting the city of Delhi during their sightseeing tour. This historic structure is built in the architectural style of Afghanistan and Iran. The structure is around 72 meters tall with inscriptions and carvings on its surface. One interesting fact is that Qutub Minar is one of the world’s highest minaret with a brick structure `,
            image: '/images/Qutubminar.jpg',
          },
          {
            name: 'Red Fort',
            description: `This UNESCO World Heritage Site is one of the most visited tourist attractions in Delhi and one of the famous tourist destination sites. The Red Fort is constructed with the use of red sandstone and was built around 1630 by the Mughal emperor of that time. The fort is built according to Islamic architecture with many aspects of Persian and Hindu as well. This palace fortress is known as the Red Fort because of the red sandstone fabric of its rampart walls.`,
            image: '/images/redfort.jpg',
          },
      
      
    ],
  },
  {
    theme: 'wildlife',
    places: [
      {
        name: "Delhi National Zoological Park",
        description: "This park boasts a very successful breeding program for Asiatic Lions, Indian Rhino and the Bengal Tiger etc. The park covers over 170 acres and is easily found situated next to The Old Fort of Delhi.Housing over 1350 animals of more than 125 different species, this well kept and well laid out zoo is very popular. For those too tired to walk in the searing heat of Delhi, there is also an electric vehicle which can be booked to take you round the sites.",
        image: "/images/wildlife sanctuary in delhi.jpg",
      },
      {
        name: "Asola Bhatti Wildlife Sanctuary",
        description: "This sanctuary  is only 25 km from Indira Gandhi Airport, near Tughlaqabad Fort. Near Sanjay Colony, Bhatti Mines, this bird sanctuary is home to around 200 species of bird, both native and migratory. Also to be seen are Blue Bulls (Nilgai), mammals, cats (Civet, Jungle Cat etc), Jackals and so on. Over 1700 troublesome Rhesus Macaque monkeys which have been over running Delhi, have been re homed in a sanctuary here.",
        image: "/images/Leopard-Male-Nagarhole.jpg",
      },
      
    ],
  },
  {
    theme:'hillstation',
   places: [
      
    ],
 
  },
    
    
]},

{stateid:30, state:'Ladakh', data:[
  {
    name: 'Pangog Lake',
    description: ` The most popular tourist attraction in Ladakh, Pangong lake is an endorheic (landlocked) lake situated at 4350 meters. The lake does not remain blue throughout the year or even the day, rather it changes colours from azure to light blue to green and grey too! It is famous amongst tourists as Ladakh lake.The magnificent mountain range running through the lake draws a vivid backdrop for the pictures. Along with the most delightful photo shoot, one can enjoy camping on the banks of this beautiful lake which is about 220km away from Leh.`,
    image: '/images/pangoglake.jpg',
    famousFood: {
                name: 'Thukpa',
                description: 'Thukpa is a much-loved classic of Ladakhi cuisine. It is a clear soup with vegetables and noodles made of wheat or barley flour. This dish also often contains meat such as pieces of chicken, mutton or yak. Thukpa is customarily served with spicy “chutney” to further enhance the taste.',
                image: '/images/Thukpa.jpg',
              },
  },
  {
    name: 'Magnetic Hill ',
    description:`Magnetic Hill is a popular tourist destination located near Leh in the Ladakh region of India. It is known for its intriguing optical illusion that makes it appear as if vehicles can defy gravity and move uphill on their own.The Magnetic Hill is situated on the Leh-Kargil-Srinagar highway, approximately 30 kilometers from Leh. When you reach the designated spot on the road, you will notice a sign indicating the Magnetic Hill. Here's the interesting part: if you turn off your vehicle's engine and place it in neutral, the car will seemingly start moving uphill on its own, defying gravity.`,
    image: '/images/magnetichill.jpg',
    famousFood: {
                name: 'Momos',
                description: 'Momos are cooked in a traditional steamer called “Mokto”. It is a metal container with water at the bottom and several compartments on top of each other with holes for the steam to circulate. Momos are often shaped like a lotus flower or like a crescent. Momos are not only popular in Ladakh but also in Sikkim, Arunachal Pradesh, Bhutan, Nepal.',
                image: '/images/Momos.jpg',
              },
      
  },
  {
    name: 'Leh Palace',
    description: `Leh Palace is a historic palace located in Leh town. Built in the 17th century, it resembles the famous Potala Palace in Lhasa, Tibet. The palace offers panoramic views of the city and the surrounding mountains. It houses a museum that showcases artifacts and artworks from the royal family's era, providing insights into Ladakh's rich cultural heritage.`,
    image: '/images/lehpalace.jpg',
    famousFood: {
                name: 'Skyu',
                description: 'Skyu is another traditional soup-based Ladakhi speciality. It is a stew made with barley or wheat dough kneaded into thumb-sized flatten balls. It is slowly cooked in a pot with water, meat and root vegetables such as potatoes, turnips and carrots. This mouth-watering dish is often prepared in villages and its recipe has remained unchanged for centuries.',
                image: '/images/Skyu.jpg',
              },
  },
  {
    name: 'Nubra Valley',
    description: `Nubra Valley is a picturesque valley located to the north of Leh. It is known for its stunning landscapes, sand dunes, and the enchanting Shyok River. The valley offers a unique experience with its double-humped Bactrian camels that you can ride through the sand dunes. Diskit Monastery, known for its giant statue of Maitreya Buddha, is also a must-visit attraction in the valley.Nubra was earlier known as Ladorma, which means “valley of flowers.`,
    image: '/images/nubravaelley.jpg',
    famousFood: {
                name: 'Chutagi',
                description: 'Chutagi is a famous pasta-like dish with a rich vegetable-based sauce. This is one of Ladakh’s signature dishes and every local restaurant in Leh has its own secret Chutagi recipe. “Chu” means “water” in Ladakhi and “tagi” means “bread”. Therefore, the literal translation of “Chutagi” is “water-bread”.',
                image: '/images/Chutagi.jpg',
              },
  },
  {
    name: 'Kargil',
    description: 'A trip to Leh Ladakh is incomplete without a visit to Kargil which is one of the prime tourist places in Ladakh. This is the second largest town in Ladakh, situated on the banks of the Indus River. It is a transit hub with roads leading to Leh, Padum (Zanskar) and Srinagar. Also, it is a haven for adventure enthusiasts as they can enjoy sports such as trekking and mountaineering.he location of Kargil makes for an extreme climate, with temperatures dropping to as low as -45 degree Celsius in winters!',
    image: '/images/kargil.jpg',
    famousFood: {
                name: 'Khambir',
                description: 'Khambir is a delicious traditional leavened wheat-based bread. The handmade round-shaped fermented dough is baked over a hot stone and then directly in the ﬁre. The bread is even better to eat when it’s freshly baked and still warm. Typically, Ladakhi people eat Khambir with scramble eggs or vegetables for breakfast.',
                image: '/images/Khambir.jpg',
              },
  },
  {
    theme: 'beach',
    places: [
    
    ],
  },
  {
    theme: 'pilgrimage',
    places: [
      {
        name: 'Shanti Stupa buddhist',
        description: 'Built to promote world peace and prosperity as well as to commemorate 2500 years of Buddhism, Shanti Stupa is the major attraction in Leh. Perched on the mountain top, this religious place also offers a panoramic view of the city and the surroundings, and thus is a must-see.This attraction in Leh was built at a part of the Peace Pagoda Mission by Japanese Buddhist Bhikshu. Underneath the stupa is the relic of the Buddha. Sunrise and sunset are considered to be the best time of the day to visit the Shanti Stupa when views from this place to visit in Leh are spectacular.',
        image: '/images/Shanti Stupa buddhist.jpg',
      },
      {
        name: 'Alchi Monastery',
        description: 'Alchi Monastery is a cluster of monasteries considered one of Ladakh’s most prominent Buddhist temples and the oldest study centre for monks. Zumsteg and Manjushri are the two principal temples in this monastic complex, each with a magnificent assembly hall. The presence of the Kashmiri soul can be sensed at the Zumsteg temple because Kashmiri artists created most of the artwork. To get to Manjushri temple, you must first go to the Dukhang or gathering hall. The temple was named after the idols of Manjushri, who were seated back-to-back and looked in all four directions.',
        image: '/images/Alchi Monastery.jpg',
      },
      
    ],
  },
  {
    theme: 'heritage',
    places: [
      {
        name: 'Alchi Monastery in Leh',
        description: 'Known as the oldest monastery in Ladakh, Alchi Monastery is basically a monastic complex situated in Alchi Village in Leh District. The complex has four separate settlements with monuments dating back to different times. The paintings in Alchi Monastery are some of the oldest surviving paintings in Ladakh.Alchi is also part of the three villages that constitute the ‘Alchi group of monuments. The other two villages are the Mangyu and Sumda Chun. The monuments in all these three villages are reckoned to be of unique style and workmanship.',
        image: '/images/Alchi Monastery in Leh.jpg',
      },
      {
        name: 'Thiksey Monastery',
        description: 'The monastery is located at an altitude of 3,600 metres (11,800 ft) in the Indus Valley. It is a twelve-storey complex and houses many items of Buddhist art such as stupas, statues, thangkas, wall paintings and swords. One of the main points of interest is the Maitreya Temple installed to commemorate the visit of the 14th Dalai Lama to this monastery in 1970; it contains a 15 metres (49 ft) high statue of Maitreya, the largest such statue in Ladakh, covering two stories of the building.',
        image: '/images/Thiksey Monastery.jpg',
      },
      
    ],
  },
  {
    theme: 'wildlife',
    places: [
      {
        name: 'Eurasian lynx',
        description: 'The Eurasian Lynx is one of the rare species of cat found in Ladakh. It is bigger in size than cats, and is muscular and has strong limbs. The colour of its coat varies from tan to grey and reddish-brown and has spots over the upper limbs. Its hind legs are longer than the forelegs. It has a distinctive long tuft of hair on its ears. Eurasian Lynx is an excellent climber and is also known to be secretive and elusive. It is considered a loner but can be seen in a group of up to four on rare occasions.',
        image: '/images/Eurasian lynx.jpg',
      },
      {
        name: 'Asiatic ibex',
        description: 'Asiatic Ibex, considered to be a sub-species of the Siberian Ibex, has distinctive beautiful horns. It is known to avoid areas with deep snow and tall vegetation. Asiatic Ibex is active before and after sunrise and remains inactive during the day. However, they are active during the day at the time of heavy snowfall. Asiatic Ibex has thick fur that protects it from the cold in winter, but it shed it once a year in summer. Often found in a herd of 50, Asiatic Ibex is an herbivore and feeds on shrubs and grasses.',
        image: '/images/Asiatic ibex.jpg',
      },
      
    ],
  },
  {
    theme: 'hillstation',
    places: [
      {
        name: 'Khardung-la Pass',
        description: 'Khardungla Pass is a gateway which leads to the Nubra and Shyok valley and is one of the best tourist places in Ladakh. While this might not be a typical tourist attraction in Leh Ladakh, it is definitely among the must-visit places to visit in and around Leh Ladakh for adventure junkies. Managed by the Border Roads Organization,Kardung-la Pass is the gateway to the north and one of the most difficult yet thrilling passes to ride on.',
        image: '/images/Khardung-la Pass.jpg',
      },
      {
        name: 'Chadar Trek',
        description: 'Chadar Trek is one of the most beautiful places to visit in Ladakh such an unbelievable and exciting experience. ‘Chadar’ refers to a blanket, because in winter the popular Zanskar River in Leh Ladakh freezes into a blanket of ice. Come to witness the transformation of colours of this frozen river while you trek on it.The mild blue colour changes to light yellow when the sun shines directly on it for a few hours in the day. It looks milky white on a moonlit night. The Chadar Trek journey is said to be one of the most adventurous and toughest trek journeys.',
        image: '/images/Chadar Trek.jpg',
      },
      
    ],
  },
  


]},
{stateid:31, state:'Pondicherry', data:[
  {
    name: 'Paradise Beach',
    description: 'Located at Chunnambar along the Cuddalore road, Paradise Beach is one of the spectacular Places to visit in Pondicherry. A ferry ride from Chunnambar takes you to this pristine beach that fascinates every traveller with its blue waters, white and golden soft beach sand and tranquil environ. The picturesque beach has pre-built shacks to lounge below, decent changing rooms,showers, and clean toilets.',
    image:'/images/paradisebeach.jpg',
    famousFood: {
                name: 'Achari Paneer Tikka',
                description: 'Achari Paneer Tikka is the most popular vegetarian appetizer in the Punjabi Cuisine. The word achar in Hindi means pickle. Paneer cubes marinated in an achari marinade makes an aromatic, flavorsome party snack. A blend of pickling spices goes into the marinade giving a distinctive flavor to the paneer.',
                image: '/images/Achari Paneer Tikka.jpg',
              },
  },
  {
    name: 'Rock Beach',
    description:`The Rock beach with golden sands in one of the topmost photogenic Pondicherry sightseeing places with friends and family. The beach is well-kept and spectacular that you can spend hours gazing at the beautiful sight of the undulating waves touching the rocky shores. You can also walk along the long stretch of the beach breathing in the fresh ocean air.The beach does get crowded on weekends but still is well-maintained and clean.`,
    image: '/images/rockbeach.jpg',
    famousFood: {
                name: 'Khow Suey',
                description: 'Khow Suey (khao suey) is the Burmese version of the popular Thai dish Khao Soi. This recipe is a one-pot easy version that has all the wonderful flavors of the original. A warm bowl of tender noodles and chicken cooked in creamy coconut curry broth makes this a hearty and comforting meal. It can be made in the Instant Pot or stovetop.',
                image: '/images/Khow Suey.jpg',
              },
  },
  {
    name: 'Auroville',
    description: `Covering an area of several hundreds of kilometres, Auroville was started as an experimental township in the heart of Pondicherry. Founded by Mirra Alfassa, or the Mother, in 1968, the township has become one of the top tourist places in Pondicherry. The beautiful Matrimandir at the centre of the township was designed by Roger Anger and is a true marvel of modern architecture.You can choose to laze at the beach or relish an exquisite houseboat experience .`,
    image: '/images/auroville.jpg',
    famousFood: {
                name: 'Mutton Rolls',
                description: 'Gathering ardent roll and wrap fans from all over Pondicherry, this food joint’s signature mutton rolls on Mission Street are made with tender and spicy shredded mutton, stir-fried and wrapped in hot and fresh parathas. Vegetables, eggs and other South Indian condiments are used for flavouring to add a unique tropical taste.',
                image: '/images/Mutton Rolls.jpg',
              },
  },
  {
    name: 'Chunnambar Boat House',
    description: `Visiting the backwaters is the best experience while in Southern India. Chunnambar is a small village located 7 kilometers from Pondicherry. The hamlet is blessed with natural grandeur and is populaathouse. It is among the most visited tourist places in Pondicherry as it offers the perfect tropical vacation experience.`,
    image: '/images/chunnambar Boat House Puducherry.jpg',
    famousFood: {
                name: 'Kannava Pepper Fry and Steamed Rice',
                description: 'Inspired by cooking styles and ingredients of Malaysian, Singaporean and Indonesian cuisines, Chettinad is Pondicherry’s own twist to South Indian gourmet food. Kannava Pepper Fry is a Chettinad special seafood prepared with sumptuous, thick cuts of fish, marinated in a variety of sauces and peppered broth, and finally steamed to perfection.',
                image: '/images/Kannava Pepper Fry and Steamed Rice.jpg',
              },
  },
  {
    name:'French Colony',
    description:'The French Colony in Pondicherry is what all tourists see when they search social media websites. One of the most picturesque places in India, Pondicherry’s French Colony has been a popular tourist attraction. Many travel enthusiasts come to the French Colony to appreciate its aesthetic beauty. The buildings here are mostly in the French style.',
    image: '/images/frenchcolony.jpg',
    famousFood: {
                name: 'Pondy Moussaka',
                description: 'Offering palatable seafood straight off the sea and dishes cooked with organic vegetables, this beachfront restaurant is renowned for their Moussaka. Borrowed from the Greek cuisine, Moussaka is an acclaimed comfort food in Pondicherry made with eggplant and deep-fried potatoes. The regular Moussaka at Satsang is served hot with a portion of steamed rice, oil-dipped, sauteed vegetables and red wine.',
                image: '/images/Pondy Moussaka.jpg',
              },
  },
  {
    theme: 'beach',
    places: [
      {
        name: 'Auroville Beach',
        description: 'On one hand, the serene beauty and tranquil surroundings of this beach encourage you to meditate as soon as you step into the site while on the other hand, the crystal-clear waters and the blue color of the sea promise to provide you with a picture-perfect backdrop to click some amazing pictures that will make your visit to this beach memorable.The Auroville beach is also considered perfect for swimmers and surfers due to its shallow waters. So, if you want to bring out the best of adventure in you, you can definitely give it a try.',
        image: '/images/Auroville Beach.jpg',
      },
      {
        name: 'Promenade Beach',
        description: 'It is a 1.5 km long beach, bordered by a long walkway. Tourists, as well as the locals, come here for a morning walk, jogging, and strolling. Vehicle entry is banned on the beach front area during the evening, which allows people to chill out and relax in peace. Also, the seashore, beach shacks, food cart, and sea-facing cafes and restaurants that enhance the charm of the beach.',
        image: '/images/Promenade Beach.jpg',
      },
     
    ],
  },
  {
    theme: 'pilgrimage',
    places: [
      {
        name: 'Arulmigu Manakula Vinayagar',
        description: 'The brightly painted gopuram of this temple attracts instant attention of the visitors, but there’s more to Arulmigu Manakula Vinayagar Temple than its vibrant exterior and stunning architecture. Built more than 350 years ago, this ancient temple is dedicated to Lord Ganesha and draws devotees from all over Pondicherry and beyond. One of the unique aspects of this Ganesh temple in Pondicherry is that the deity here is seen in the company of his two consorts, Riddhi and Siddhi, which is a rare thing to witness.',
        image: '/images/Arulmigu Manakula Vinayagar.jpg',
      },
      {
        name: 'Kamakshi Amman Temple',
        description: 'Durga is worshipped by the Hindus in many forms. One such form is Kamakshi and the Kamakshi Amman Temple in Pondicherry is dedicated to this incarnation of the goddess. One of the most revered temples in the town, this ancient shrine is believed to be more than 500 years old. It is built in typical Tamil architectural style and has a large, decorated gopuram at its entrance.',
        image: '/images/Kamakshi Amman Temple.jpg',
      },
    ],
  },
  {
        theme: 'heritage',
        places: [
          {
            name: 'Statue Of Gandhi',
            description: 'Dating its history back to the year 1965, the statue of Mahatma Gandhi was built by the renowned artist, Roy Choudhary, who studied in the Government College of Art and Crafts in Chennai, Madras.It took almost a year to complete the construction of this statue. And finally, on 26 January 1965, the statue was officially inaugurated and made open to the public.',
            image: '/images/Statue Of Gandhi.jpg',
          },
          {
            name: 'Park Monument',
            description: 'King Krishnadevaraya had travelled to Pondicherry one day. A white beautiful building near the coast had grabbed the king’s attention. The king thought it to be a religious place. He went towards it and bowed with his hands folded. People around stared at the king with surprise. Few young people started giggling on seeing the king’s behaviour. An old man came forward and asked him why he bowed down before the building which is a brothel. ',
            image: '/images/Park Monument.jpg',
          },
        ],
      },
]},

{stateid:32, state:'ANDAMAN AND NICOBAR', data:[
  {
    name: 'Port Blair',
    description: 'The capital of Andaman and Nicobar Islands, Port Blair is poignant reminder of the many sacrifices of freedom fighters. The Cellular jail here is perhaps one of the most infamous remnants of India’s struggle for independence. The main motive of the establishment of this prison was solitary confinement of the prisoners. The wings were built in a manner that the face of each cell only saw the back of the cell opposite to it. ',
    image: '/images/port.jpg',
    famousFood: {
          name: 'Prawns Coconut Curry',
          description: 'Prawns Coconut Curry recipe is made with tiger prawns in coconut milk curry is a delight to be enjoyed with hot rice. This delicious cooked seafood recipe is an easy preparation and best enjoyed during cloudy days with steamed rice.',
          image: '/images/Prawns Coconut Curry.jpg',
        },
  },

  {
    name: 'Havelock Islands',
    description: 'Havelock islands is home to Radhanagar beach, one of the most popular beaches in India and also awarded the best beach in Asia by TIME magazine in 2004. The beach is situated around a distance of 12 kilometers from the Havelock islands and is a must visit site. The waters are sparkling blue and devoid of any wave action. There are a huge number of activities that one can do like scuba diving, snorkeling, boating, fishing etc. The beach is especially popular for couples as it is almost vacant and the serene environment adds to the romance.',
    image: '/images/Havelock Islands.webp',
    famousFood: {
          name: 'Chilli Curry',
          description: 'Chilli Curry is a delicious dish which is really typical in the Andaman Islands. This meal is a really hot and happening meal, full of onion, tomatoes and also nice flavors in it. Many foreign tourists have actually appreciated this delicious food from Andaman.',
          image: '/images/Chilli Curry.jpg',
        },
  },
  {
    name: 'Little Andaman Island',
    description: 'It would do you good not to undermine this island based on its name! Surrounded by luscious greenery that will bring tears to your eyes, Little Andaman Island is in fact, the fourth largest island in the Andamans. This island not only promises peaceful beaches, but also enchanting waterfalls. Go surfing, boating and elephant calf training only on this island. Let those gigantic elephants give you a tour of the island on one of those elephant safari.',
    image: '/images/Little Andaman Island.webp',
    famousFood: {
          name: 'Amritsari Kulcha',
          description: 'The Amritsari Kulcha is a scrumptious meal from Andaman. It is stuffed with lots of delicious things like onion, coriander leaves, seasonings, and so on making it a very tasty as well as a scrumptious meal.',
          image: '/images/Amritsari Kulcha.jpg',
        },
  },
  {
    name: 'Mount Harriet National Park',
    description: 'Founded in 1969, Mount Harriet National Park is located on Harriet mountain which is the third largest peak in Andaman. There are reserve forests on mountains and the Kalapathhar, which was also a death sentence ravine used by British for Indian freedom fighters. Afor the national park itself, you have beaches with gorgeous coastlines, butterflies, tribal communities living in self-made huts and birds of many varieties coexisting in peace.',
    image: '/images/Mount Harriet National Park.webp',
    famousFood: {
                name: 'Chicken Tikka Masala',
                description: 'Chicken Tikka Masala is an extremely delicious and hot recipe, which resembles by many. The neighborhood poultry recipe in Andaman has its very own identification. It’s a very yummy as well as a well-presented meal, which really draws in many people and satiates them..',
                image: '/images/Chicken Tikka Masala.jpg',
              },
  },
  {
    name: 'Scuba Diving In Andaman',
    description: 'An archipelago of more than 500 islands, The Andaman & Nicobar Islands are perhaps among the most exotic and remote destinations on the planet. While a part of India, this group of islands is geographically closer to Thailand, and boasts some of the best beaches in Asia. There is always a mysterious air associated with Andaman owing to its esoteric culture, aboriginal tribes, mangrove creeks, cool blue waters and legends from mythology that claim that this is the land of Hanuman. For adventure and water sports enthusiasts, Andaman has several treats in store. ',
    image: '/images/scubadiving.jpg',
    famousFood: {
                name: 'Barbeque Food',
                description: 'Since Andaman is an island, Barbeque food is outstanding and you definitely cannot give it a miss. Freshly caught fishes from the sea are barbequed which includes Sardines, Mackerels, Crab, and King Prawn. You can relish it from anywhere in the locale including from the top of the island or outdoor sightseeing or in the middle of the forests or even in the center of the sea.',
                image: '/images/Barbeque Food.jpg',
              },
  },
  {
    theme: 'beach',
    places: [
      {
        name: 'Bharatpur Beach',
        description: 'Bharatpur beach is the hub for all water activities at Neil Island.  For all water sports activities at Neil Island, you will first have to reach Bharatpur beach and then indulge in any kind of activity that suits you. Now, there are various options of activities available here. The most famous one is the Scuba Diving at Neil Island which is done at Bharatpur beach.  During the diving experience, the members of the dive centre will bring you to Bharatpur beach and your initial training will start from there after you have geared up. A boat then takes you to do the diving with a guide.',
        image: '/images/Bharatpur Beach.jpg',
      },
      {
        name: 'Sitapur Beach',
        description: 'For a better view of the sunset, you can stand near the “Sunset Point” which is a vantage point located at the entrance of the beach.For swimmers and water-lovers Sitapur Beach is a bit extreme. Due to its open sea exposure, the beach is prone to high tides and water currents that make swimming a dangerous adventure. You won’t see anyone wearing their bathing suits here. We recommend not going for a swim in the waters here, as it can be quite troublesome with high waves and uncontrolled water currents.',
        image: '/images/Sitapur Beach.jpg',
      },
      
    ],
  },
  {
    theme: 'pilgrimage',
    places: [
      {
        name: 'Sri Vetrimalai Murugan Temple',
        description: 'Although few, but these are some memorable facts associated with the history of the Shri Vetrimalai Murugan Temple of Port Blair. Another huge attraction about this renowned temple is that it engages largely in charity work, which primarily includes feeding the poor.According to the temple committee members, they feed as many as 40,000 people who come to visit the temple during the main festivals of the Tamilians, such as Kanda Sashti, Panguni Uthram and Thai Poosam. The temple is not only well built and decorated but is also well managed and systematic when it comes to tackling massive crowds.',
        image: '/images/Lord-Vetrimalai-Murugan-Temple.jpg',
      },
      {
        name: 'Shiva temple',
        description: 'Shiva is one of the principal deities of Hinduism. He is the Supreme Being within Shaivism, one of the major traditions within contemporary Hinduism.Shiva is known as the “destroyer and the transformer” within the Trimurti, the Hindu trinity that includes Brahma and Vishnu. In Shaivism tradition, Shiva is the Supreme being who creates, protects and transforms the universe. In the tradition of Hinduism called Shaktism, the Goddess, or Devi, is described as supreme, yet Shiva is revered along with Vishnu and Brahma. A goddess is stated to be the energy and creative power (Shakti) of each, with Parvati (Sati) the equal complementary partner of Shiva.',
        image: '/images/Shiva temple.jpg',
      },
    ],
  },
{
      theme: 'heritage',
      places: [
        {
          name: 'Cellular Jail',
          description: 'Cellular village has seen a lot of bloodsheds - it was made by the freedom fighters so that they can be tortured here. Even before the construction of the Jail, the island was a prison of Indias First War of Independence of 1857. This jail reflects one of the murkiest chapters of in the colonial rules history. It is a mute witness of many heinous acts that British soldiers put on the villagers. In 1906, the jail was completely constructed and was named as Cellular because there cells made for each prison rather than accommodating them in one documentary.',
          image: '/images/Cellular Jail.jpg',
        },
        {
          name: 'Port Blair',
          description: 'The capital of Andaman and Nicobar Islands, Port Blair is poignant reminder of the many sacrifices of freedom fighters. The Cellular jail here is perhaps one of the most infamous remnants of India’s struggle for independence. The main motive of the establishment of this prison was solitary confinement of the prisoners. The wings were built in a manner that the face of each cell only saw the back of the cell opposite to it. Many freedom fighters were incarcerated in this prison colony including Veer Savarkar and Batukeshwar Dutt.',
          image: '/images/Port Blair.jpg',
        },
      ],
    },
    {
      theme: '',
      places: [
       
      ],
    },
]},

{stateid:33, state:'Chandigarh', data:[
  {
    name: 'Iskcon Temple',
    description: 'Peaceful and religious, the Iskon Temple is one of the greatest places to visit in Chandigarh, especially for the spiritual individuals and devotees of Lord Krishan. From daily poojas to customary celebrations throughout the year, every corner of the temple speaks about purity and devotion towards the lords. In the vicinity of the temple are an array of shops where memorabilias and sweets among others can be bought. Surrounding the place is a land encapsulated with dense grass and greenery.',
    image: '/images/ishkon.jpg',
    famousFood: {
          name: 'Garg Chaat',
          description: 'The crunchy crust holding the spicy water or creamy sauce that is the Golgappa that everyone loves! Of course, the criteria of taste is enhanced when you buy the same from Garg Chaat in Chandigarh. If you are visiting for the first time, this hub for street food in Chandigarh might get a little frustrating to wait for your turn.',
          image: '/images/Garg Chaat.jpg',
        },
  },

  {
    name: 'Sukhna Lake',
    description: 'Standing amongst the greatest places to visit in Chandigarh for nature lovers, activities like boat rides across the lake, fishing, water skiing and enjoying the beautiful sunset are much relished by many who visit the lake. The place is also famous among many walkers and joggers who can be seen hogging the place early in the morning. Strolling across the waterfronts of the lake is a delightful experience everybody enthusiast must enjoy.',
    image: '/images/Sukhna Lake.webp',
    famousFood: {
          name: 'Chicken patty',
          description: 'A little crunchy on the outside and juicy on the inside, this chicken patty will make you drool! People from faraway places visit specifically to savour the flavour of the Chicken Patty, freshly cooked and packed here at Classic 44, Chandigarh. They have no seating; you give your order, take your patties and go home enjoy your food with a chilled soft drink.',
          image: '/images/Chicken patty.jpg',
        },
  },
  {
    name: 'Rock Garden',
    description: 'Started as a hobby by the founder Nek Chand Saini in 1957, the Rock Garden of Chandigarh has now become one of the best tourist places in Chandigarh. Spread in more than 40 acres of seamlessly designed and decorated land, Rock Garden is embellished with more than 5,000 illustrations sculptures. Whats more amazing is the fact that everything the place holds is made out of various industrial and urban waste.',
    image: '/images/Rock Garden.jpg',
    famousFood: {
          name: 'Bholey Di Hattey',
          description: 'Rajma is one of the favourite Punjabi dishes. This spicy dark gravy with plain jeera rice will satiate your tummy, and leave one still craving for more. Along with the lovely Rajma rice, chole rice is also some great street food in Chandigarh here. One might get a whole meal in just under Rs. 100.',
          image: '/images/Bholey Di Hattey.jpg',
        },
  },
  {
    name: 'Topiary Park',
    description: 'Built for the little lads, the Topiary Park in Chandigarh is decorated with fresh cut creeps, bush and plants in various shapes of animals including beers, elephants and more. The park was founded in 1987 and its grand orientation has slowly grown into a favourite place among children. Spread in a massive area, the grassland provides a ton of space for a number of activities. For localities, the park serves as the go to destination for weekend extravaganzas and family time',
    image: '/images/Topiary Park.jpg',
    famousFood: {
          name: 'Brick Firewood Pizza',
          description: 'Brick Firewood Pizza is ranked amongst some best pizza places in town. Perfectly baked crust with hot melted cheese at incredibly affordable prices make this spot a favourite amongst locals and tourists alike. You will find a rush of new customers becoming regular invitees the next day, try a bite and be one too.',
          image: '/images/Brick Firewood Pizza.jpg',
        },
  },
  {
    name: 'Government Museum And Art Gallery',
    description: 'Encapsulating an alluring history to it, Government Museum & Art Gallery was brought into existence along with the partition of India in 1947. Before partition, the properties inside the museum were decorated in the Central Museum. However, post partition, up to 6% of all the properties in Central Museum was adopted by Pakistan, others shifted to Government Museum & Art Gallery of Chandigarh.',
    image: '/images/Government Museum And Art Gallery.webp',
    famousFood: {
          name: 'Bawa Juice',
          description: 'Bawa Juice Corner is a decorated outlet with a hypnotic hold over teenagers. Best known for its combination of lemon soda and cheese patty, the place is your spot in Chandigarh! The summer heat is a good excuse for making a stop at the juice corner for a drink and a snack. Also, the cheesy corn patty is quite delicious, and the shakes and other beverages parch your thirst.',
          image: '/images/Bawa Juice.jpg',
        },
  },
  {
    theme: 'pilgrimage',
    places: [
      {
        name: 'Mata Mansa Devi Temple',
        description: 'Located in the foothills of Shivalik Hills, Mata Mansa Devi Mandir is one of the most prominent temples in the entire northern region of the country. Dedicated to Goddess Mansa Devi, it has a massive bunch of dedicated followers and worshipers who visit on regular basis to offer their prayers and attain salvation. Twice a year, during the Navratra Mela, the Mata Mansa Devi temple is jam-packed with lakhs of devotees visiting the holy shrine throughout the auspicious 9 days of Navratras, so when in Chandigarh, this one temple is an absolute unmissable stop. Where: Chandigarh - Panchkula Rd, Mansa Devi Complex, Sector 5, Panchkula.',
        image: '/images/Mata manasa devi mandir.jpg',
      },
      {
        name: 'Saketri Mandir',
        description: 'Dedicated to the Holy Highness, Lord Shiva, this renowned temple is situated in the outskirts of Chandigarh; 20kms away from the buzzing urban city and since its open for only a limited period during the day, its usually thronged by a large number of pious disciples who wish to seek blessings of Lord Shiva. Quite understandably, theres no place to set a foot during Maha Shivratri as thousands of devotees from all over the neighboring regions, make sure to visit the historical temple on this sacred day to attain alleviation and peace of mind and offer their prayers to their almighty.',
        image: '/images/Saketri Mandir.jpg',
      },
      
    ],
  },
{
      theme: 'heritage',
      places: [
        {
          name: 'Burail Fort',
          description: 'Located in the heart of the city, Burail Fort is a Mughal legacy. It was the citadel of a Mughal general till 1712 but due to his oppressive behavior towards the people, he was killed by the members of the Khalsa Army under the orders of their commander, Banda Singh Bahadur.Today, the fort is a neglected and ruined structure that serves as a reminder of its past. One of the forgotten historical places in Chandigarh, it houses the Shahidi Qila Sahib Gurudwara on its premises.',
          image: '/images/Burail Fort.jpg',
        },
        {
          name: 'Capitol Complex',
          description: 'If you simply go by dates, the Capitol Complex may not qualify as one of the historical places to visit in Chandigarh. But it was granted the status of UNESCO World Heritage Site in 2016 to honor the architectural brilliance displayed by Le Corbusier the architect who planned the city of Chandigarh.The complex houses some of the finest examples of Le Corbusier’s works including Punjab and Haryana Secretariat, High Court, and Assembly.',
          image: '/images/Capitol Complex.jpg',
        },
       
      ],
    },
    {
      theme: 'wildlife',
      places: [
        {
          name: 'Chattbir Zoo',
          description: 'Chattbir Zoo is another wildlife sanctuary near the beautiful city of Chandigarh. Located on Chandigarh Patiala Road and mere 5 km from the city this zoological park is home to various mammals, birds and reptiles.The main attraction of Chattbir Zoo is Lion Safari and excursion tour to the reserves of tiger.This zoo was actually initiated in 17th Century and presently this zoo id developed as a large zoological park. This zoological park is a comfortable home to large number of animals which can be seen wandering around.',
          image: '/images/Chattbir Zoo.jpg',
        },
        {
          name: 'Sukhna Wildlife',
          description: 'The history of the Sukhna Lake and the Sukhna Wildlife Sanctuary is intertwined. The lake was created by the architect Le Corbusier in 1958 by diverting the Sukhna Choe, a seasonal stream that flows down from the Shivalik hills. Siltation was a big problem for the Sukhna Lake that had to be tackled and it was minimized by many engineering and soil conservation methods. A large scale afforestation program was taken up in the catchment areas that resulted in a good forest cover developed in the catchment area and the problem of siltation of the lake was also addressed effectively.',
          image: '/images/Sukhna Wildlife.jpg',
        },
        
      ],
    },
  {
        theme: 'hillstation',
        places: [
          {
            name: 'Morni Hills',
            description: 'If spending a few peaceful hours is on your weekend agenda, then Morni Hills is your best bet. It is common for locals as well as tourists to travel to this hill station to chill at one of the many lakes surrounding the area. Covered in verdant greens and at a spitting distance from Chandigarh, you can easily stop by for a picnic here. The breathtaking views coupled with serene lakes make the only hill station in Haryana ideal for a relaxed breather.',
            image: '/images/Morni Hills.jpg',
          },
          {
            name: 'Naldehra Hills',
            description: 'A quaint and offbeat destination a little more than 100 km away from Chandigarh, Naldehra will bring you face to face with flaming sunsets and refreshing sunrises. Surrounded by deodar trees, it is a delightful spot for a tired mind. History has it that Lord Curzon was captivated by its beauty, and even better, he kept Naldehra as the second name for his daughter Alexandra!One of the best things you can do here is to roam around its 18-hole golf course or even indulge in a game if you are ready to splurge.',
            image: '/images/Naldehra.jpg',
          },
          
        ],
      },
]},

{stateid:34, state:'Daman and Diu', data:[
  {
    name: 'Diu Fort',
    description: 'Dating back to 1535 when Portuguese thought of staying India, they built this marvel. Standing still and portraying the greatness of Portugal rulers, this fort bathes in sunlight and glows in the moonlight and stays beside the enormous Arabian Sea each day. The existence of a huge lighthouse beside the fort adds another dimension to the panoramic view of the surrounding. The presence of various arms and the intelligence of Portuguese engineers have proved that strength is not always depicted by the existence of tangible substance but with the power of the mind. ',
    image: '/images/Diu Fort.jpg',
    famousFood: {
          name: 'Fish Koliwada',
          description: 'Fish Koliwada,a spicy fried prawns dish, is said to have its origin in Daman and tingles the taste buds with its mild and subtle flavor. The fish pieces are first marinated for about half an hour, dipped in a spicy batter and then deep fried.',
          image: '/images/Fish Koliwada.png',
        },
  },

  {
    name: 'St.Paul’s Church',
    description: 'While planning a day tour in Diu, this church should be included in the list. One of the best Baroque architectural examples prevails here in this church. Being named after St. Paul, the Apostle of Jesus, this church still continues to function and dates to 1601 AD. It is dedicated to Our Lady of Immaculate Conception and its structure is similar to the famous Bom Jesus Basilica which is in Goa.',
    image: '/images/church.webp',
    famousFood: {
          name: 'Jetty Roll',
          description: 'Jetty Roll is the main specialty which is a local version of Kathi kebab rolls. They are said to have been brought to the region by a Bengali cook and were later adapted to suit the local taste and flavors.',
          image: '/images/Jetty Roll.png',
        },
  },
  {
    name: 'Naida Caves',
    description: 'Despite being constructed by humans on real rocks, this man-made cave is the most underrated tourist attraction. The history of this cave is still a mystery but few say that when the Portuguese wanted to build the Diu fort, so they broke down huge rocks and this is why these caves have such a formation. Being constructed near the Diu fort, this is the best place to visit in morning to see how the sunlight enters this cave. It is worth a treasure for explorers and a treat for photographers. ',
    image: '/images/Naida Caves.jpg',
    famousFood: {
          name: 'Papri',
          description: 'A crispy and flaky dish, papri is one of the most popular evening snacks of Daman. It is generally eaten with a serving of yoghurt and tamarind chutney.',
          image: '/images/Papri.png',
        },
  },
  {
    name: 'Seashells Museum',
    description: 'Located on the Nagao Road in Diu, the Seashell museum is a must visit. Merchant navy Captain Devjibhai Vira Fulbaria established this museum with a collection of thousands of seashells. With captions written in English, this place helps you easily distinguish between different types of shells. It is one of a kind museum where the visitors are given magnifying glasses of different focal lengths. This helps them in looking at the shells rather clearly and carefully. ',
    image: '/images/Seashells Museum.jpg',
    famousFood: {
          name: 'Dhansak',
          description: 'Dhansak is a popular Indian dish, originating among the Parsi Zoroastrian community. It combines elements of Persian and Gujarati cuisine. Dhansak is made by cooking mutton or goat meat with a mixture of lentils and vegetables. This is served with caramelised brown rice, which is rice cooked in caramel water to give it a typical taste and colour.',
          image: '/images/Dhansak.png',
        },
  },
  {
    name: 'Silvassa',
    description: 'Since Silvassa is situated very close to Daman, various tourists make a stop day-trip here. Being a small town in Dadar and Nagar Haveli Union Territory, this place offers a great variety of things that can be done like getting close with nature at Khanvel, gaining knowledge about the tribal life that existed in Dadar and Nagar Haveli at Tribal Cultural Museum, paying a visit to the king of the jungle at Vasona Lion Safari Park, ',
    image: '/images/Silvassa.jpg',
    famousFood: {
          name: 'Silver pomfret',
          description: 'Silver pomfret, largest of its kind found in the country when prepared by in house spices and deep fried is certainly a delight to have it any time of the day.',
          image: '/images/Silver pomfret.png',
        },
  },
  {
        theme: 'beach',
        places: [
          {
            name: 'Jampore Beach.',
            description: 'Jampore beach is one major attraction of Daman. It is situated remotely 5 kilometers away from the Moti Daman Jetty. The beach is famous for its blackish mud-colored water. It is soothing just to have a look at the sea and is a perfect place for the ones seeking some peace and solitude.Jampore beach is one of the significant attractions in Daman. Situated remotely 5 kilometres away from the Moti Daman Jetty, the beach gets fame because of its blackish mud-coloured water. It is a perfect place for the ones seeking longing peace and solitude.',
            image: '/images/jampore-beach.jpg',
          },
          {
            name: 'Devka Beach.',
            description: 'Devka beach is a sight of pure beauty. Like so many other beaches of Daman, this too is a massive, picturesque and quite unspoilt.The place has clean blue waters, well maintained shores and enough beauty for everybody. Also, there is a special Amusement Park here which houses huge fountains and play area for kids.',
            image: '/images/Devka-Beach.jpg',
          },
            
          
        ],
      },
  
      {
        theme: 'pilgrimage',
        places: [
          {
            name: 'Se Cathedral Daman',
            description: 'Daman has a strong link to the Catholics owing to its Portuguese connection and Cathedral of Bom Jesus is among the most important religious monument for them.Out of the various holy places, the Cathedral of Bom Jesus is a one of the most popular one. Built long back in 1603, the structure is still beautiful. The astounding design, expert architecture and fine craftsmanship surely reflect the passion with which the Portuguese built this cathedral.',
            image: '/images/se-cathedral.jpg',
          },
          {
            name: 'Jain Temple Daman',
            description: 'Jain temple in Daman is located towards the north of the famous Nani Daman fort. The intricately designed and decorated inner walls of the temple are worth exploring. The walls of the Jain temple have elegant glass covers which are further adorned with 18th century murals representing the life of Mahavira Swami, who is regarded as the founder of Jainism. ',
            image: '/images/Jain Temple Daman.webp',
          },
          
        ],
      },
    {
            theme: 'heritage',
             places: [
          {
            name: "Diu Fort",
            description: "Dating back to 1535 when Portuguese thought of staying India, they built this marvel. Standing still and portraying the greatness of Portugal rulers, this fort bathes in sunlight and glows in the moonlight and stays beside the enormous Arabian Sea each day. The existence of a huge lighthouse beside the fort adds another dimension to the panoramic view of the surrounding. The presence of various arms and the intelligence of Portuguese engineers have proved that strength is not always depicted by the existence of tangible substance but with the power of the mind.",
            image: "/images/Diu Fort.jpg",
          },
          {
            name: 'Naida Caves',
            description: 'Despite being constructed by humans on real rocks, this man-made cave is the most underrated tourist attraction. The history of this cave is still a mystery but few say that when the Portuguese wanted to build the Diu fort, so they broke down huge rocks and this is why these caves have such a formation. Being constructed near the Diu fort, this is the best place to visit in morning to see how the sunlight enters this cave. It is worth a treasure for explorers and a treat for photographers.',
            image: '/images/Naida Caves.jpg',
          },
          
        ],
      },
      {
        theme: 'wildlife',
        places: [
          {
            name: "Fudam Bird Sanctuary",
            description: "This site is a marshland and thus home to migratory birds like Flamingos, locally called as 'Surkhaab'.[3] Other birds found in the area include the Painted Stork, Paddy field Pipit, Purple Sun Bird, Cattle Egret, Grey Plover, Clamorous Reed Warbler, Striated Heron, Red Neck Phalarope, Red Wattled Lapwing, Indian Carmorant, Red-vented Bulbul, Comb Duck, House Crow, Black Winged Stilt, Asian Palm Swift and Sanderling",
            image: "/images/fudam-wildlife-sanctuary.jpg",
          },
        
        ],
      },
      
]},
{stateid:35, state:'Lakshdweep', data:[
  {
    name: 'Minicoy Island',
    description: 'The island, also called Miliku, is one of the most prominent parts of the Lakshadweep islands. The island is the central hub for all plans to Lakshadweep, or it’s sister islands. Locked on the southwest side of the archipelago, sprinkled with many great attractions. Great for Lakshadweep sightseeing, it has an awe-striking lighthouse and many white-sand beaches.',
    image: '/images/Minicoy Island.jpg',
    famousFood: {
          name: 'Maldivian tuna curry',
          description: 'This tuna curry recipe by Selina Periampillai is a true celebration of Maldivian ingredients and flavours. Tuna and coconut are enhanced with warming spices such as cumin, cardamom and turmeric. Serve with steamed rice for a speedy weeknight dinner.',
          image: '/images/Maldivian tuna curry.jpg',
        },
  },

  {
    name: 'Kavaratti Island',
    description: 'The white sand and beautiful sunsets make this island one of the best places to see in Lakshadweep. This peaceful lagoon has a surprising amount of greenery and plantations. Kavaratti is the ideal getaway for nature lovers. Each year, the city attracts hundreds of foreign tourists who just sit back and enjoy the scenery.',
    image: '/images/kavaratti island.jpg',
    famousFood: {
          name: 'Mus Kavaab',
          description: 'Mus Kavaab is one of the sought after delicacies of the island. It is prepared from boneless fish - mus which is further marinated with a paste made from coconut, turmeric, chilli powder, coriander powder, cardamoms and cloves. After that, these chunks are cooked along with onions, tomato and tossed with curry leaves..',
          image: '/images/Mus Kavaab.jpg',
        },
  },
  {
    name: 'Bangaram  Island',
    description: 'This island is often referred to as a paradise. The island is easily considered one of the best places to visit in Lakshadweep, as it is filled with activities for both nature lovers and adventure fanatics. People typically spend around 4-5 days here to absorb the quiet and calm before heading back to their regular life. The clean blue waters give a sense of liberation like none other. The reason this island is so popular with travelers is that this is the only island where the sales and consumption of alcohol are permitted. ',
    image: '/images/Bangaram Island.jpg',
    famousFood: {
          name: 'Octopus Fry',
          description: 'Octopus fry is a famous dish prepared here. This dish is made by adding green chillies, garlic and salt to baby octopus. A sauce is prepared from the already taken variety of spices and then served alongside the fried octopus.',
          image: '/images/Octopus fry.png',
        },
  },
  {
    name: 'Amini Beach ',
    description: 'Amini Beach is an incredible spot for people who are looking for serene tourist places in Lakshadweep. Located in Amini Island, this beach is popular as it is covered with coral sandstone. You can try various adventurous activities like snorkeling, scuba diving, reef walking, and kayaking. Amini beach is perfect for relaxing and spending a day while basking in the sun and sipping cocktails.',
    image: '/images/amini beach.jpg',
    famousFood: {
          name: 'Fish tikka',
          description: 'For seafood lovers, fish tikka is something to die for. And here in Lakshadweep, it is in abundance and of high reputation. Fish is marinated with variety of spices such as chilly, ginger, garlic and cloves and salt. Later it is grilled in a tandoor or on a griller and then served hot to fulfil the ravenous appetite.',
          image: '/images/Fish tikka.png',
        },
  },
  {
    name: 'Marine Museum',
    description: 'This is where one can witness some of the wealthiest showcases of marine life and artifacts. The museum is established with an aim to educate the masses about the importance of aquatic life and show the various species of fish available. There is a shark skeleton here which is one of the most adored installations. Do add this museum to your list of places to visit in Lakshadweep.',
    image: '/images/MarineMuseum.jpg',
    famousFood: {
          name: 'Fish pakora',
          description: 'Fish pakora is made with boneless fish . The fish is first taken, marinated with salt, and then fried in oil by making a gram flour, turmeric, & salt batter.',
          image: '/images/Fish pakora.png',
        },
  },
  {
    theme: 'beach',
    places: [
      {
        name: 'BangaramBeach',
        description: 'Bangaram Island Package covers a 2 -6 days stay package to Bangaram Island to experience the richness and beauty of marine life. By air is the easiest way to reach Bangaram. Air India servicing from Bangalore-Kochi-Agatti every day except Sunday. A special arranged boat service available all day connects Agatti and Bangaram except Sunday. Tourists are requested to book their flight accordingly after reserving their accommodation at Bangaram.',
        image: '/images/BangaramBeach.jpg',
      },
      {
        name: 'KadamatBeach',
        description: 'A cool vacation in the glittering white sands, this beach is simply so quiet that one can count the immediate tidal waves. Located on the Kadamat Island is to the east of Lakshadweep, this is a beach where the tourists stroll along the shoreline picking up innumerable floating conch shells. The beach extends up to 8 km in length occupied by a beautiful shallow lagoon on the west and a narrow one on its east. Cliffs and the extending pine and coconuts on the shore bank trace the tranquility of the sea.',
        image: '/images/KadamatBeach.jpg',
      },
      
    ],
  },
  {
    theme: 'pilgrimage',
    places: [
      {
        name: 'Mangaladevi Temple',
        description: 'Durga worshipers go to the huge temple, which also attracts tourists who come to see the citys old architecture. After offering their prayers, worshippers can sit and meditate or chant in the huge temple complex, feeling renewed and at peace. Mangalore, the citys name, is taken from the temple. The city was also formed around the temple, which serves as its geographic centre.Lord Parshuram is said to have constructed the exquisite temple. Within the Hindu community in the city, Goddess Mangaladevi is held in great regard.',
        image: '/images/MangaladeviTemple.jpeg',
      },
      {
        name: 'Pilgrimage Place 2',
        description: 'Description of Pilgrimage Place 2',
        image: '/images/andhra/pilgrimage2.jpg',
      },
      
    ],
  },
  {
    theme: 'heritage',
    places: [
    
    ],
  },
  {
    theme: 'wildlife',
    places: [
      {
        name: 'Pitti bird sanctuary',
        description: 'This bird sanctuary in Lakshadweep is located 24 kilometres away, that is, to the north of Kavaratti Island, 37 kilometres away, that is, to the east of Agatti Island, and 42.5 km to the Minicoy Island, Pitti Island in Agatti is important for birds like the sooty tern bird, the greater crested tern bird, and the brown noddy birds  This island is personally belonging to the township of Kavaratti Island in Lakshadweep  The place Is best to find these birds nest side by side on dry coral rubble  Seventy-five seabird species can be found here in this sanctuary, and it is one of the most famous birds watching sites in Lakshadweep wildlife sanctuaries, India.',
        image: '/images/Pitti bird sanctuary.png',
      },
     
    ],
  },


]},
]




  

  



  

  

  const themeData = {
    beach: {
      title: 'Beach',
      icon: '/images/beach-tour.svg'
    },
    pilgrimage: {
      title: 'Pilgrimage',
      icon: '/images/pilgrimage-tour.svg'
    },
    heritage: {
      title: 'Heritage',
      icon: '/images/heritage-tour.svg'
    },
    wildlife: {
      title: 'Wildlife',
      icon: '/images/wildlife-tour.svg'
    },
    hillstation: {
      title: 'Hill Station',
      icon: '/images/hill-station-tour.svg'
    }
  };


  const Places = () => {
    let placesData = [];
    let state = '';
    const { id } = useParams();
    const [selectedTheme, setSelectedTheme] = useState('');
    const [selectedPlacesData, setSelectedPlacesData] = useState([]);
    const [defaultPlacesData, setDefaultPlacesData] = useState([]);
    const [isThemeSelected, setIsThemeSelected] = useState(false);
    const [isFamousFoodSelected, setIsFamousFoodSelected] = useState(false);
    const idAsNumber = parseInt(id, 10); // Using parseInt with base 10
    const totalStates = PlacesData.length;
    // window.scrollTo(0, 0);
    // Calculate previous and next IDs with wrapping logic
    const previousId = (idAsNumber - 1 + totalStates) % totalStates;
    const nextId = (idAsNumber + 1) % totalStates;
   
  
    for (const i in PlacesData) {
      if (PlacesData[i].stateid == id) {
        state = PlacesData[i].state;
        placesData = PlacesData[i].data;
        break;
      }
    }
  
    useEffect(() => {
      setSelectedPlacesData(placesData.slice(0, 5)); // Display initial 5 places
      setDefaultPlacesData(placesData.slice(0, 5)); // Store default 5 places for the state
    }, [placesData]);
  
    const handleThemeClick = (theme) => {
      setSelectedTheme(theme);
      const filteredPlaces = placesData.find((data) => data.theme === theme)?.places || [];
      setSelectedPlacesData(filteredPlaces.slice(0, 3)); // Display 3 theme places
      setIsThemeSelected(true);
      setIsFamousFoodSelected(false);
    };
  
    const handleFamousFoodClick = (foodData) => {
      setSelectedPlacesData([foodData]);
      setIsThemeSelected(false);
      setIsFamousFoodSelected(true);
     
    };
  
    const handleBackButtonClick = () => {
      setSelectedPlacesData(defaultPlacesData.slice(0, 5)); // Display default 5 places
      setSelectedTheme(''); // Clear selected theme
      setIsThemeSelected(false);
      setIsFamousFoodSelected(false);
     
    };
  
    const getCoverPhoto = (id) => {
      switch (id) {
        case '0':
          return '/images/apl1.jpg';
        case '1':
          return '/images/arunachall1.png';
        case '2':
          return '/images/assaml4.jpg';
        case '3':
          return '/images/bihar (3).jpg';
        case '4':
          return '/images/chattisgarhcover.webp';
        case '5':
          return '/images/goacover.png';
        case '6':
          return '/images/gujaratcover.jpg';
        case '7':
          return '/images/haryanacover.webp';  
        case '8':
          return '/images/himachalcover.jpg';
        case '9':
          return '/images/naveen.jpg';
        case '10':
          return '/images/harsha.jpg';
        case '11':
          return '/images/karnatakacover.webp';
          case '12':
          return '/images/keralacover1.webp';
          case '13':
          return '/images/madhyapradeshcover.jpg';
          case '14':
          return '/images/maharastracover.jpg';
          case '15':
          return '/images/manipurcover.jpg';
          case '16':
          return '/images/meghalayacover.jpg';
          case '17':
          return '/images/mizoramcover.jpg';
          case '18':
          return '/images/nagalandl1.png';
          case '19':
          return '/images/odishacover.jpg';
          case '20':
          return '/images/punjabcover.jpg';
          case '21':
          return '/images/rajasthancover.png';
          case '22':
          return '/images/S.png';
          case '23':
          return '/images/tamilnaducover.webp';
          case '24':
          return '/images/telanganacover.jpg';
          case '25':
          return '/images/vignan2.png';
          case '26':
          return '/images/upl2.jpg';
          case '27':
          return '/images/uttarakhandcover.jpg';
          case '28':
          return '/images/westbengalcover.jpg';
          case '29':
          return '/images/delhicover.jpg';
          case '30':
          return '/images/ladakhcover.jpg';
          case '31':
          return '/images/pondicherry3.jpg';
          case '32':
          return '/images/srikar3.jpg';
          case '33':
          return '/images/chandi.jpg';
          case '34':
          return '/images/rohit.png';
          case '35':
          return '/images/lakshadweepl1.jpg';
          default:
          return '';
      }
    };
  
    return (
      <div className="bg"  >
        <div className="navbar-with-bg">
          <Navbar showSearchBar={false} />
        </div>
  
        <div className="coverphoto" > 
        <img src={getCoverPhoto(id)}
          style={{ height: '55vh', overflow: 'hidden', padding:'10px', width: '100%' }}
          alt="abc" 
          stateid={id} />
        </div>
      
        <h1 className="text-center welcome-heading">Themes You Can Explore</h1>
        <div className="containertt">
          {Object.entries(themeData).map(([theme, { title, icon }]) => (
            <div className="theme-image" key={theme} onClick={() => handleThemeClick(theme)}>
              <img src={icon} alt={title} />
              <h5 style={{ color: 'green' }}>{title.toUpperCase()}</h5>
            </div>
          ))}
        </div>
  
        {isFamousFoodSelected ? (
          <FamousFood famousFood={selectedPlacesData[0]} onBackButtonClick={handleBackButtonClick} />
        ) : !isThemeSelected ? (
          <>
            <h1 className="head">
              Best Five Places in <span style={{ color: '#2085f1' }}>{state}</span>
            </h1>
            <div className="places-container">
              {selectedPlacesData.map((place, index) => (
                <div className={`place-card ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                  <div className="place-image">
                    <img src={place.image} alt={place.name} />
                  </div>
                  <div className="place-details">
                    <h2>
                      {index + 1}. {place.name}
                    </h2>
                    <p>{place.description}</p>
                    <button style={{ margin: '3px', borderRadius: '8px' }}>More About</button>
                    <button style={{ margin: '3px', borderRadius: '8px' }}>Near By Hotels</button>
                    <button style={{ margin: '3px', borderRadius: '8px' }}>Transportation</button>
                    <button
                      onClick={() => handleFamousFoodClick(place.famousFood)}
                      style={{ margin: '3px', borderRadius: '8px' }}
                    >
                      Famous Food
                    </button>
                    <a href={`https://www.google.com/maps?q=${place.name}`} target="_blank" rel="noopener noreferrer">
                      <button style={{ margin: '3px', borderRadius: '8px' }}>Maps</button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h1 className="head">
              Best Places for <span style={{ color: '#2085f1' }}>{themeData[selectedTheme]?.title}</span>
            </h1>
            <div className="places-container">
              {selectedPlacesData.length === 0 ? (
                <p style={{ fontSize: '40px', fontWeight: '600px' }}>No places to show</p>
              ) : (
                selectedPlacesData.map((place, index) => (
                  <div className={`place-card ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                    <div className="place-image">
                      <img src={place.image} alt={place.name} />
                    </div>
                    <div className="place-details">
                      <h2>
                        {index + 1}. {place.name}
                      </h2>
                      <p>{place.description}</p>
                      <button style={{ margin: '3px', borderRadius: '8px' }}>More About</button>
                      <button style={{ margin: '3px', borderRadius: '8px' }}>Near By Hotels</button>
                      <button style={{ margin: '3px', borderRadius: '8px' }}>Transportation</button>
                      <a href={`https://www.google.com/maps?q=${place.name}`} target="_blank" rel="noopener noreferrer">
                        <button style={{ margin: '3px', borderRadius: '8px' }}>Maps</button>
                      </a>
                    </div>
                  </div>
                  
                ))
              )}
              
            </div>
            <div className="center">
          <button onClick={handleBackButtonClick} style={{ borderRadius: '10px', width: '80px' }}>
            Back
          </button>
        </div>
          </>
        )}
        <div style={{ padding: '30px' }}>
          <a href="" className="high">
          <center> More places to visit.....</center> 
          </a>
          <div style={{ textAlign: 'center', marginTop: '5px', display: 'flex', justifyContent: 'space-between' }}>
          {!isThemeSelected && !isFamousFoodSelected && ( 
    <>
      <Link to={`/places/${previousId}`}>
        <button style={{ borderRadius: '8px', border: 'none' }}>Previous</button>
      </Link>
      {nextId === 0 ? (
        <Link to={`/places/${totalStates - 1}`}>
          <button style={{ borderRadius: '8px', border: 'none', margin: '3px', }}>Next</button>
        </Link>
      ) : (
        <Link to={`/places/${nextId}`}>
          <button style={{ borderRadius: '8px', border: 'none', margin: '3px',}}>Next</button>
        </Link>
      )}
    </>
  )}
</div>



        </div>
        <Footer />
      </div>
    );
  };
  
  export default Places;