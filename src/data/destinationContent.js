import React from "react";
import { Helmet } from "react-helmet-async";
import { PageContainer } from "../components/Destination/DestinationPage.styled";

export const destinationContent = {
    delhi: {
        title: "Delhi Travel Packages",
        subtitle: "History, Heritage & Modern Marvels",
        description: "Explore India's capital with its rich history, iconic monuments, and vibrant culture",
        searchTag: "Delhi,India",
        content: {
            overview: "Delhi, India's capital, seamlessly blends ancient history with modern development. From Mughal monuments like the Red Fort and Humayun's Tomb to contemporary attractions like India Gate and Connaught Place, the city offers diverse experiences for every traveler. The city serves as a multicultural hub celebrating numerous festivals and boasting over 70 million travelers passing through Indira Gandhi International Airport annually. Delhi's unique charm lies in its ability to showcase both traditional bazaars like Chandni Chowk and modern shopping complexes, making it a perfect representation of India's evolution.",
            attractions: "Visit the iconic Red Fort, a UNESCO World Heritage Site showcasing Mughal architecture, and explore India Gate, the war memorial dedicated to Indian soldiers. Don't miss the magnificent Qutub Minar, Lotus Temple known for its unique architecture, and the spiritual Akshardham Temple. Experience the bustling atmosphere of Chandni Chowk market, one of India's oldest and busiest markets, and pay respects at Raj Ghat, Mahatma Gandhi's memorial. The majestic Rashtrapati Bhavan and the serene Humayun's Tomb complete the essential Delhi sightseeing experience.",
            bestTime: "October to March provides the most pleasant weather with comfortable temperatures ranging from 12°C to 25°C, making it ideal for exploring Delhi's numerous outdoor attractions and historical monuments. During these months, the clear skies offer perfect conditions for photography and sightseeing. The post-monsoon period ensures clean air and excellent visibility for enjoying panoramic views from historical forts and monuments."
        }
    },
    chandigarh: {
        title: "Chandigarh Travel Packages",
        subtitle: "The City Beautiful - Modern Planning Meets Nature",
        description: "Discover India's first planned city with its gardens, architecture, and serene landscapes",
        searchTag: "Chandigarh,India",
        content: {
            overview: "Chandigarh, aptly called 'The City Beautiful,' stands as India's first well-planned city, serving as the joint capital of Punjab and Haryana. Designed by renowned Swiss-French architect Le Corbusier, the city features tree-lined roads, avant-garde buildings, and low-rise structures instead of towering skyscrapers. Located at the foothills of the Shivalik Hills, Chandigarh represents a perfect blend of modern urban planning with natural beauty. The city's remarkable organization, cleanliness, and systematic design make it a unique destination that showcases how thoughtful planning can create harmonious living spaces.",
            attractions: "The iconic Capitol Complex houses major government buildings and Le Corbusier's famous Open Hand sculpture. Visit the enchanting Rock Garden, where striking sculptures are crafted from waste materials, creating a unique artistic landscape. Explore the serene Sukhna Lake for boating and peaceful evening walks, and enjoy shopping at Sector 17, the city's main commercial hub. Don't miss the Garden of Fragrance, Rose Garden with over 1,600 varieties of roses, and the Japanese Garden showcasing traditional Japanese landscaping techniques.",
            bestTime: "October to March offers the most comfortable weather with pleasant temperatures and clear skies, perfect for exploring the city's numerous gardens and outdoor attractions. The winter months provide ideal conditions for lake activities at Sukhna Lake and leisurely walks through the various themed gardens that Chandigarh is famous for."
        }
    },
    shimla: {
        title: "Shimla Travel Packages",
        subtitle: "Queen of Hills - Colonial Charm & Mountain Beauty",
        description: "Experience the former British summer capital with its scenic views and pleasant climate",
        searchTag: "Shimla,India",
        content: {
            overview: "Shimla, the erstwhile summer capital of British India, is nestled amidst the snow-capped Shivalik Mountains at an elevation of 2,200 meters. This charming hill station offers stunning views of the mighty Himalayas and showcases beautiful British Gothic architecture throughout the city. The city's colonial heritage is evident in its churches, government buildings, and the famous Ridge area. Shimla's pleasant climate, scenic beauty, and rich history make it a perfect retreat from the plains, attracting visitors seeking both natural beauty and cultural experiences in the lap of the Himalayas.",
            attractions: "Visit the highest point at Jakhu Temple dedicated to Lord Hanuman, offering panoramic views of the Shivalik ranges. Explore the famous Mall Road for shopping and dining, and admire the neo-Gothic architecture of Christ Church. The historic Viceregal Lodge, now Indian Institute of Advanced Study, showcases British colonial architecture. Experience adventure at Kufri, famous for its snow activities and pony rides, and visit the scenic Naldhera with its beautiful golf course. Don't miss the toy train ride, a UNESCO World Heritage railway line connecting Kalka to Shimla.",
            bestTime: "March to June offers pleasant weather perfect for sightseeing and outdoor activities, while October to February provides crisp mountain air and occasional snowfall, especially in nearby areas like Kufri. The summer months are ideal for escaping the heat of the plains, while winter offers a magical snowy landscape for those seeking a different mountain experience."
        }
    },
    amritsar: {
        title: "Amritsar Travel Packages",
        subtitle: "Golden City - Spirituality, History & Patriotism",
        description: "Visit the holy Golden Temple and experience the rich Sikh heritage and Punjabi culture",
        searchTag: "Amritsar,India",
        content: {
            overview: "Amritsar, located 450 km from Delhi and 230 km from Chandigarh, stands as one of Punjab's most significant cities, drawing nearly 10,000 visitors daily. This sacred destination serves as the spiritual center for Sikh followers worldwide, offering warm Punjabi hospitality and rich cultural heritage. The city presents a beautiful blend of spiritual experiences, historical significance, and delicious cuisine. Amritsar's importance extends beyond religion, as it houses crucial historical sites that played pivotal roles in India's freedom struggle, making it a must-visit destination for understanding Indian culture and history.",
            attractions: "The magnificent Golden Temple (Harmandir Sahib), Sikhism's holiest shrine, offers spiritual solace with its golden architecture reflected in the sacred pool. Visit the poignant Jallianwala Bagh, site of the 1919 massacre, now a memorial garden preserving this crucial piece of Indian history. Experience the electrifying Wagah Border ceremony, just 28 km from the city, showcasing the daily flag-lowering ceremony between India and Pakistan. Explore the Partition Museum to understand the 1947 partition's impact, and visit the Maharaja Ranjit Singh Museum celebrating the Sikh empire's legacy.",
            bestTime: "October to March provides the most comfortable weather with cooler temperatures ideal for exploring outdoor attractions and participating in the spiritual activities at the Golden Temple. These months offer perfect conditions for witnessing the Wagah Border ceremony and enjoying the city's famous street food without the discomfort of extreme heat."
        }
    },
    mumbai: {
        title: "Mumbai Travel Packages",
        subtitle: "Maximum City - Dreams, Bollywood & Business",
        description: "Experience India's financial capital with its beaches, heritage sites, and vibrant culture",
        searchTag: "Mumbai,India",
        content: {
            overview: "Mumbai, formerly known as Bombay, stands as India's financial hub and largest city, offering a perfect blend of colonial heritage, modern lifestyle, and coastal charm. The city serves as India's entertainment capital, housing the famous Bollywood film industry, and attracts millions seeking opportunities and experiences. From the iconic Gateway of India overlooking the Arabian Sea to the bustling local trains carrying millions daily, Mumbai represents the spirit of modern India. The city's diverse neighborhoods, from upscale South Mumbai to the suburban film studios, showcase its multifaceted personality and endless energy.",
            attractions: "Visit the iconic Gateway of India, Mumbai's most recognizable landmark overlooking the Arabian Sea, and explore the nearby Taj Mahal Palace Hotel. Take a ferry to Elephanta Caves, a UNESCO World Heritage Site featuring ancient rock-cut temples dedicated to Lord Shiva. Experience the bustling atmosphere of Crawford Market and Colaba Causeway for shopping, and relax at popular beaches like Juhu and Marine Drive, known as the Queen's Necklace. Don't miss the Prince of Wales Museum (now Chhatrapati Shivaji Maharaj Vastu Sangrahalaya) and the vibrant nightlife in areas like Bandra and Lower Parel.",
            bestTime: "November to February offers the most pleasant weather with cool temperatures and minimal humidity, perfect for exploring the city's outdoor attractions and beaches. The post-monsoon period provides clear skies ideal for sightseeing and photography, while avoiding the intense heat of summer and heavy rains of monsoon season."
        }
    },
    bangalore: {
        title: "Bangalore Travel Packages",
        subtitle: "Garden City - IT Hub Meets Natural Beauty",
        description: "Explore India's Silicon Valley with its pleasant climate, parks, and modern attractions",
        searchTag: "Bangalore,India",
        content: {
            overview: "Bangalore, known as the Garden City of India, perfectly balances rich heritage, modern lifestyle, and natural beauty. As India's Silicon Valley, the city hosts numerous multinational companies while maintaining its charm through beautiful parks, pleasant climate, and vibrant culture. The city's numerous gardens, tree-lined streets, and moderate weather throughout the year make it an ideal destination for both business and leisure travelers. Bangalore's cosmopolitan nature, evident in its diverse cuisine, lively nightlife, and cultural events, reflects India's modern urban evolution while preserving its traditional roots.",
            attractions: "Explore the magnificent Lalbagh Botanical Garden spanning 240 acres with over 1,000 species of flora, and enjoy peaceful walks in Cubbon Park, the city's green lung. Visit the stunning Bangalore Palace showcasing Tudor-style architecture, and seek blessings at the famous ISKCON Temple with its impressive architecture. Experience thrills at Wonderla Amusement Park, perfect for families, and learn about the region's history at Tipu Sultan's Summer Palace. Don't miss the vibrant nightlife and craft beer scene in areas like Koramangala, Indiranagar, and Brigade Road, making Bangalore India's pub capital.",
            bestTime: "September to February offers the most pleasant weather with comfortable temperatures ranging from 15°C to 28°C, ideal for exploring the city's numerous parks and outdoor attractions. Bangalore's moderate climate throughout the year makes it a year-round destination, but these months provide the perfect conditions for sightseeing and enjoying the city's famous gardens and outdoor dining experiences."
        }
    },
    pune: {
        title: "Pune Travel Packages",
        subtitle: "Oxford of the East - Education, Culture & Heritage",
        description: "Discover the cultural capital of Maharashtra with its rich Maratha history and educational heritage",
        searchTag: "Pune,India",
        content: {
            overview: "Pune, often called the cultural capital of Maharashtra and the Oxford of the East, beautifully depicts the state's diversity through its historical monuments, gardens, and temples. This second-largest city of Maharashtra has evolved into a major IT and automotive hub while preserving its rich Maratha heritage and educational legacy. Located on the Deccan plateau amidst the Sahyadri Hills, Pune offers a perfect blend of ancient history and modern development. The city's numerous educational institutions, cultural festivals, and historical significance make it an ideal destination for those seeking intellectual and cultural enrichment.",
            attractions: "Visit the historic Shaniwar Wada, the 18th-century fortification that served as the seat of the Peshwa rulers, showcasing magnificent Maratha architecture. Explore the imposing Sinhagad Fort offering panoramic views of the surrounding landscape and rich historical significance. Seek spiritual solace at the famous Dagdusheth Halwai Ganapati Temple and explore the ancient Pataleshwar Cave Temple carved out of a single rock. Don't miss the Aga Khan Palace, where Mahatma Gandhi was imprisoned, and the Raja Dinkar Kelkar Museum housing an extensive collection of Indian artifacts and cultural treasures.",
            bestTime: "October to March provides the most comfortable weather with pleasant temperatures perfect for exploring historical forts, gardens, and outdoor attractions. The post-monsoon period offers clear skies and comfortable conditions for trekking to nearby hill forts and enjoying the city's numerous parks and cultural sites without the discomfort of extreme weather."
        }
    },
    kolkata: {
        title: "Kolkata Travel Packages",
        subtitle: "City of Joy - Culture, Literature & Heritage",
        description: "Experience the cultural capital with its colonial architecture, art, and intellectual legacy",
        searchTag: "Kolkata,India",
        content: {
            overview: "Kolkata, often referred to as the City of Joy, enchants every traveler with its rich heritage, vibrant arts scene, and delectable cuisine. As India's cultural capital, the city seamlessly blends ancient history with modern development, showcasing everything from colonial architecture to contemporary art galleries. Located on the eastern bank of the Hooghly River, Kolkata serves as the primary financial and commercial center of eastern and northeastern India. The city's intellectual legacy, evident in its numerous universities, libraries, and literary traditions, makes it a unique destination for cultural enthusiasts and history lovers.",
            attractions: "Visit the iconic Victoria Memorial, a magnificent marble building housing a museum dedicated to British colonial history, and admire the engineering marvel of Howrah Bridge spanning the Hooghly River. Seek blessings at the spiritual Dakshineswar Kali Temple and explore the peaceful Belur Math, headquarters of the Ramakrishna Mission. Experience the city's cultural richness at the Indian Museum, one of the oldest and largest museums in India, and visit Tagore's House to understand Bengal's literary heritage. Don't miss exploring the bustling New Market and Park Street for shopping and dining experiences that reflect Kolkata's cosmopolitan culture.",
            bestTime: "October to March offers the most pleasant weather with comfortable temperatures ranging from 12°C to 27°C, ideal for exploring the city's numerous outdoor attractions and historical sites. These months provide perfect conditions for enjoying boat rides on the Hooghly River and walking through the city's colonial-era neighborhoods without the discomfort of extreme heat or monsoon rains."
        }
    },
    hyderabad: {
        title: "Hyderabad Travel Packages",
        subtitle: "City of Pearls - Nizami Culture & Modern Technology",
        description: "Explore the pearl city with its magnificent forts, palaces, and world-famous cuisine",
        searchTag: "Hyderabad,India",
        content: {
            overview: "Hyderabad, known as the City of Pearls and Nizams, seamlessly blends ancient grandeur with modern vibrancy. This historic city presents a beautiful perspective of both old and new worlds, from impressive fortress-like structures to cutting-edge technology hubs. The city's rich cultural heritage, evident in its magnificent palaces, tombs, and traditional markets, coexists harmoniously with its status as a major IT destination. Hyderabad's unique charm lies in its ability to preserve centuries-old traditions while embracing technological advancement, making it a fascinating destination for diverse travelers.",
            attractions: "Explore the world-famous Golconda Fort, a stunning monument showcasing the city's glorious history with its impressive architecture and acoustic marvels. Visit the iconic Charminar, the 16th-century monument surrounded by bustling bazaars perfect for shopping pearls and traditional crafts. Experience the grandeur of Chowmahalla Palace, former seat of the Nizams, and explore the extensive collection at Salar Jung Museum, one of India's largest museums. Don't miss the spiritual Mecca Masjid, one of the largest mosques in India, and enjoy entertainment at Ramoji Film City, the world's largest film studio complex.",
            bestTime: "October to March provides the most comfortable weather with pleasant temperatures ranging from 15°C to 28°C, perfect for exploring outdoor attractions like Golconda Fort and enjoying the famous Hyderabadi cuisine. These months offer ideal conditions for visiting the bustling old city markets and experiencing the city's vibrant street life without the discomfort of extreme summer heat."
        }
    },
    goa: {
        pageHeading: "Goa Tour Packages",
        pageTitle: "Looking for the perfect Goa tour package to unwind, explore, or celebrate something special? ",
        pageContent: "Looking for the perfect Goa tour package to unwind, explore, or celebrate something special? If you're traveling as a couple, with friends, or on a solo adventure, our handpicked Goa holiday packages are built to match your style. From beach lovers to heritage seekers, Goa welcomes everyone with open arms, sun-kissed shores, and unforgettable experiences. Our carefully designed Goa trip packages cover stays, meals, airport transfers, and sightseeing. Whether you’re after a short getaway or a week-long escape, we’ve got options that make planning effortless. From the energy of North Goa to the peaceful rhythm of South Goa, every traveler finds their place here.",
       
        title: "Goa Tour Packages",
        searchTag: "Goa,India",
        seo: {
            metaTitle: "Goa Tour Packages – Best Deals for Couples & Families",
            metaDescription:
                "Book top-rated Goa tour packages with hotel, meals, sightseeing & transfers. Explore North & South Goa with custom trips for couples, friends & families.",
            metaKeywords:
                "Goa tour packages, North Goa, South Goa, Goa holidays, couples trip Goa, family trip Goa, Goa sightseeing"
        },
        description:
            "Looking for the perfect Goa tour package to unwind, explore, or celebrate something special? If you're traveling as a couple, with friends, or on a solo adventure, our handpicked Goa holiday packages are built to match your style. From beach lovers to heritage seekers, Goa welcomes everyone with open arms, sun-kissed shores, and unforgettable experiences. Our carefully designed Goa trip packages cover stays, meals, airport transfers, and sightseeing. Whether you’re after a short getaway or a week-long escape, we’ve got options that make planning effortless. From the energy of North Goa to the peaceful rhythm of South Goa, every traveler finds their place here.",

        sections: [
            {
                heading: { h1: "Explore Goa with Our Holiday Packages" },
                paragraph: { p: "Goa is more than just beaches, it's a journey through culture, cuisine, and coastlines. Our holiday packages in Goa cover top destinations such as:" },
                list: [
                    "Baga Beach: Nightlife, water sports, and beach shacks",
                    "Calangute & Anjuna: Local markets and lively scenes",
                    "Palolem & Colva: Calm waters, clean sands, perfect for quiet stays",
                    "Old Goa: Visit Basilica of Bom Jesus, Se Cathedral, and Church of St. Francis of Assisi",
                    "Fort Aguada: panoramic sea views and Portuguese history"
                ]
            },
            {
                heading: { h2: "Honeymoon & Family-Friendly Goa Packages" },
                paragraph: { p: "For couples, our Goa honeymoon packages offer romantic moments like sunset cruises on the Mandovi River, beachside stays in Morjim, and candlelit dinners by the sea. For families, enjoy Dudhsagar Waterfalls, Butterfly Beach, and the Bhagwan Mahavir Wildlife Sanctuary." }
            },
            {
                heading: "Culture, Cuisine & Hidden Corners",
                paragraph: "Beyond the beaches, Goa's heart beats in its traditions. Experience festivals, night markets, the Latin Quarter of Fontainhas, and authentic Goan cuisine such as prawn balchão, fish curry rice, and bebinca."
            },
            {
                backgroundImage: "https://example.com/goa-beach.jpg",
                heading: "Book Your Goa Travel Package Today",
                paragraph: "Whether you're here for a weekend, honeymoon, or longer, our Goa packages give you a complete experience without the stress of planning."
            }
        ],
        faqs: [{
            question: "What is the average Goa trip cost for 3 to 5 days?",
            answer: "₹8,500 to ₹25,000 per person depending on hotel category and season."
        },
        {
            question: "Which are the best places to visit in Goa?",
            answer: "Baga Beach, Fort Aguada, Dudhsagar Waterfalls, Old Goa churches, Palolem, Spice Plantations, Fontainhas."
        },
        {
            question: "Is North Goa or South Goa better for tourists?",
            answer: "North Goa for nightlife and markets, South Goa for peace and nature. Many packages include both."
        },
        {
            question: "What is included in Goa tour packages?",
            answer: "Accommodation, breakfast, sightseeing tours, transfers, and local support."
        },
        {
            question: "When is the best time to visit Goa?",
            answer: "October to March, during pleasant weather and festive celebrations."
        }]

    }

    ,
    chennai: {
        title: "Chennai Travel Packages",
        subtitle: "Detroit of India - Culture, Beaches & Technology",
        description: "Experience South Indian culture with its temples, beaches, and classical arts heritage",
        searchTag: "Chennai,India",
        content: {
            overview: "Chennai, the capital of Tamil Nadu and gateway to South India, offers a perfect blend of traditional culture, modern industry, and coastal beauty. As India's fourth-largest city and second-largest port, Chennai serves as the cultural and economic hub of South India. The city beautifully preserves its rich Tamil heritage through classical music, dance, and literature while embracing technological advancement as a major IT destination. Chennai's unique character is defined by its magnificent temples, extensive coastline along the Bay of Bengal, and its role as the center of Tamil cinema and classical arts.",
            attractions: "Stroll along Marina Beach, one of the world's longest urban beaches, perfect for sunrise views and evening walks. Visit the architectural marvel of Kapaleeshwarar Temple showcasing Dravidian architecture, and explore Fort St. George, the first British fortress in India. Pay respects at the Parthasarathy Temple, one of Chennai's oldest temples, and visit the Government Museum housing an impressive collection of art and artifacts. Don't miss the serene Elliot's Beach in Besant Nagar, the vibrant Mylapore neighborhood for traditional shopping, and day trips to nearby Mahabalipuram with its UNESCO World Heritage rock-cut temples.",
            bestTime: "November to February offers the most pleasant weather with comfortable temperatures and minimal humidity, ideal for exploring beaches, temples, and outdoor attractions. The post-monsoon period provides clear skies perfect for sightseeing and enjoying the city's numerous cultural festivals, while avoiding the intense heat of summer months."
        }
    },
    ahmedabad: {
        title: "Ahmedabad Travel Packages",
        subtitle: "Manchester of India - Heritage, Business & Culture",
        description: "Discover Gujarat's cultural capital with its rich history, textile heritage, and vibrant festivals",
        searchTag: "Ahmedabad,India",
        content: {
            overview: "Ahmedabad, Gujarat's largest city and commercial capital, offers a fascinating journey through India's textile heritage, independence movement history, and vibrant culture. The city serves as a major industrial center while preserving its rich cultural traditions, particularly evident during festivals like Navratri when the entire city comes alive with dance, music, and colorful celebrations. Ahmedabad's unique character lies in its ability to balance rapid industrial growth with deep-rooted traditions, creating a destination that appeals to business travelers, history enthusiasts, and cultural explorers alike.",
            attractions: "Visit the historic Sabarmati Ashram, Mahatma Gandhi's residence and the birthplace of many freedom movements, now a peaceful complex showcasing India's struggle for independence. Explore the magnificent Adalaj Stepwell, an architectural marvel displaying intricate carvings and innovative water management systems. Experience the city's spiritual side at the Akshardham Temple complex and the historic Jama Masjid showcasing Indo-Islamic architecture. Don't miss the vibrant Law Garden night market for traditional handicrafts and the annual International Kite Festival if visiting in January, which transforms the city's skyline into a colorful spectacle.",
            bestTime: "November to February provides the most pleasant weather with comfortable temperatures ranging from 12°C to 30°C, perfect for exploring historical sites and participating in outdoor cultural activities. Winter months coincide with the famous Navratri festival, offering visitors a unique opportunity to experience Gujarat's vibrant cultural celebrations in ideal weather conditions."
        }
    },
    lucknow: {
        title: "Lucknow Travel Packages",
        subtitle: "City of Nawabs - Cuisine, Culture & Tehzeeb",
        description: "Experience the royal heritage with its magnificent monuments, Awadhi cuisine, and refined culture",
        searchTag: "Lucknow,India",
        content: {
            overview: "Lucknow, the capital of Uttar Pradesh, epitomizes the refined culture and royal heritage of the Nawabs of Awadh. This city of gardens and architectural marvels showcases the finest examples of Mughal and Awadhi architecture through its magnificent monuments and historical structures. Known for its legendary hospitality, elegant Urdu poetry, and the famous Lucknowi Tehzeeb (refined etiquette), the city offers a unique glimpse into India's aristocratic past. Lucknow's culinary heritage, particularly the world-renowned Awadhi cuisine and galouti kebabs, makes it a paradise for food enthusiasts seeking authentic royal flavors.",
            attractions: "Visit the architectural marvel of Bara Imambara with its famous Bhool Bhulaiya (labyrinth) and the impressive central hall built without any external support. Explore the elegant Chota Imambara, known as the Palace of Lights, and admire the magnificent Rumi Darwaza, often called the Turkish Gate. Discover the tranquil Ambedkar Memorial Park showcasing modern architecture, and visit the historic Residency, witness to the 1857 uprising. Don't miss shopping for famous Chikankari embroidery, Nagra footwear, and traditional ittar (perfumes) at markets like Aminabad and Hazratganj.",
            bestTime: "October to March offers the most comfortable weather with pleasant temperatures ideal for exploring historical monuments and enjoying outdoor activities. These months provide perfect conditions for food walks to experience Lucknow's famous street food culture and for comfortable sightseeing without the extreme heat of summer months."
        }
    },
    jaipur: {
        title: "Jaipur Travel Packages",
        subtitle: "Pink City - Royal Palaces & Rajasthani Culture",
        description: "Explore the royal heritage with magnificent forts, palaces, and vibrant Rajasthani traditions",
        searchTag: "Jaipur,India",
        content: {
            overview: "Jaipur, the capital of Rajasthan and popularly known as the Pink City, beckons travelers with its majestic forts, opulent palaces, and vibrant bazaars. This UNESCO World Heritage city represents the pinnacle of Rajput architecture and planning, with its unique pink-colored buildings creating a distinctive cityscape. Founded by Maharaja Sawai Jai Singh II in 1727, Jaipur showcases perfect city planning with wide roads, organized markets, and magnificent structures that reflect the grandeur of Rajasthan's royal heritage. The city's rich cultural tapestry, evident in its festivals, handicrafts, and traditional arts, offers visitors an authentic royal experience.",
            attractions: "Explore the magnificent Amber Fort, a UNESCO World Heritage site showcasing spectacular Rajput architecture with its mirror work and intricate carvings. Visit the iconic City Palace complex, still home to the royal family, and marvel at the unique Hawa Mahal (Palace of Winds) with its 953 small windows. Discover the astronomical wonders at Jantar Mantar, an 18th-century observatory, and enjoy panoramic city views from Nahargarh Fort. Don't miss shopping for precious gems, textiles, and handicrafts at the vibrant Johari Bazaar and Bapu Bazaar, and experience authentic Rajasthani cuisine at traditional restaurants.",
            bestTime: "October to March provides the most pleasant weather with comfortable temperatures ranging from 8°C to 25°C, ideal for exploring forts, palaces, and outdoor markets. These months offer perfect conditions for enjoying camel rides, folk performances, and the numerous cultural festivals that showcase Jaipur's rich heritage without the discomfort of extreme summer heat."
        }
    },
    cochin: {
        title: "Cochin Travel Packages",
        subtitle: "Queen of Arabian Sea - Spices, History & Backwaters",
        description: "Discover Kerala's historic port city with its colonial heritage, spice markets, and scenic backwaters",
        searchTag: "Cochin,India",
        content: {
            overview: "Cochin (Kochi), rightfully called the Queen of the Arabian Sea, enchants visitors with its historic palaces, ancient spice markets, pristine beaches, and beautiful churches. This major port city of Kerala showcases a unique blend of Indian, Portuguese, Dutch, and British influences, creating a distinctive cultural landscape. The city's strategic location along the Arabian Sea coast has made it a significant trading center for centuries, particularly for spices, which continues to define its character today. Cochin's backwaters, historic Fort Kochi area, and vibrant marine drive make it an ideal gateway to explore Kerala's natural beauty and cultural richness.",
            attractions: "Explore the historic Fort Kochi area with its famous Chinese Fishing Nets, believed to be introduced by Chinese traders centuries ago. Visit the magnificent Mattancherry Palace (Dutch Palace) showcasing Kerala murals and royal artifacts, and explore the centuries-old Paradesi Synagogue in Jew Town. Discover the spiritual St. Francis Church, one of the oldest European churches in India, and enjoy leisurely walks along the scenic Marine Drive promenade. Don't miss boat cruises through the enchanting backwaters, visits to spice markets for aromatic cardamom and pepper, and day trips to the nearby hill station of Munnar.",
            bestTime: "October to March offers the most pleasant weather with comfortable temperatures and minimal humidity, perfect for backwater cruises, heritage walks, and beach activities. These months provide ideal conditions for exploring the historic Fort Kochi area on foot and enjoying boat rides through the scenic backwaters without the discomfort of monsoon rains or extreme heat."
        }
    },
    nagpur: {
        title: "Nagpur Travel Packages",
        subtitle: "Orange City - Geographical Center & Wildlife Gateway",
        description: "Explore the heart of India with its orange groves, wildlife sanctuaries, and central location",
        searchTag: "Nagpur,India",
        content: {
            overview: "Nagpur, known as the Orange City of India, holds the unique distinction of being the geographical center of the country, making it a strategic hub for transportation and commerce. Located in Maharashtra, this vibrant city serves as the gateway to some of India's most famous wildlife sanctuaries and national parks. Nagpur's rich cultural heritage is reflected in its ancient temples, colonial architecture, and bustling markets selling the famous Nagpur oranges that have made the city renowned worldwide. The city's pleasant climate during winter months and its proximity to major wildlife destinations make it an ideal base for exploring central India.",
            attractions: "Visit the magnificent Deekshabhoomi, one of the largest hollow domes in the world and a significant Buddhist pilgrimage site where Dr. B.R. Ambedkar converted to Buddhism. Explore the beautiful Ambazari Lake, perfect for boating and evening walks, and seek blessings at the ancient Tekdi Ganesh Temple situated on a hilltop. Take day trips to the famous Pench National Park, inspiration for Rudyard Kipling's Jungle Book, and Tadoba-Andhari Tiger Reserve, one of India's premier tiger reserves. Don't miss shopping for famous Nagpur oranges at local markets and visiting the historic Sitabuldi Fort, now housing government offices but offering insights into the region's history.",
            bestTime: "November to February provides the most comfortable weather with pleasant temperatures ideal for wildlife safaris and outdoor sightseeing. These months offer perfect conditions for visiting nearby national parks, as animals are more active during cooler weather, and the reduced vegetation provides better wildlife viewing opportunities."
        }
    },
    trivandrum: {
        title: "Trivandrum Travel Packages",
        subtitle: "Evergreen City - Temples, Beaches & Backwaters",
        description: "Experience Kerala's capital with its sacred temples, pristine beaches, and lush greenery",
        searchTag: "Trivandrum,India",
        content: {
            overview: "Trivandrum (Thiruvananthapuram), the capital city of Kerala, beautifully combines ancient temple architecture, colonial heritage, and modern development amidst lush tropical landscapes. Named after the serpent Anantha on which Lord Vishnu reclines, the city is renowned for its spiritual significance and the famous Padmanabhaswamy Temple. As Kerala's political and cultural center, Trivandrum showcases the state's rich traditions through its classical arts, Ayurvedic treatments, and traditional architecture. The city's proximity to beautiful beaches, backwaters, and hill stations makes it an ideal starting point for exploring Kerala's diverse attractions.",
            attractions: "Visit the magnificent Padmanabhaswamy Temple, one of the richest temples in the world, showcasing exquisite Dravidian architecture and intricate stone carvings. Explore the beautiful Kovalam Beach with its lighthouse and pristine sands perfect for relaxation and water sports. Discover the Napier Museum housing a rare collection of archaeological and historic artifacts, and enjoy peaceful moments at the Kanakakunnu Palace gardens. Don't miss the Veli Tourist Village where backwaters meet the sea, creating a unique landscape, and take day trips to the nearby Agasthyakoodam peak, part of the Western Ghats and a biodiversity hotspot.",
            bestTime: "October to March offers the most pleasant weather with comfortable temperatures and minimal humidity, ideal for temple visits, beach activities, and backwater exploration. These months provide perfect conditions for enjoying outdoor activities and exploring the city's numerous attractions without the discomfort of monsoon rains or extreme summer heat."
        }
    }
};

export const destinationList = [
    'delhi', 'chandigarh', 'shimla', 'amritsar', 'mumbai', 'bangalore',
    'pune', 'kolkata', 'hyderabad', 'goa', 'chennai', 'ahmedabad',
    'lucknow', 'jaipur', 'cochin', 'nagpur', 'trivandrum'
];
