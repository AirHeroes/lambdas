const AIRPORTS = [
  {
    "name": "Goroka Airport",
    "city": "Goroka",
    "country": "Papua New Guinea",
    "iata": "GKA",
    "icao": "AYGA"
  },
  {
    "name": "Madang Airport",
    "city": "Madang",
    "country": "Papua New Guinea",
    "iata": "MAG",
    "icao": "AYMD"
  },
  {
    "name": "Mount Hagen Kagamuga Airport",
    "city": "Mount Hagen",
    "country": "Papua New Guinea",
    "iata": "HGU",
    "icao": "AYMH"
  },
  {
    "name": "Nadzab Airport",
    "city": "Nadzab",
    "country": "Papua New Guinea",
    "iata": "LAE",
    "icao": "AYNZ"
  },
  {
    "name": "Port Moresby Jacksons International Airport",
    "city": "Port Moresby",
    "country": "Papua New Guinea",
    "iata": "POM",
    "icao": "AYPY"
  },
  {
    "name": "Wewak International Airport",
    "city": "Wewak",
    "country": "Papua New Guinea",
    "iata": "WWK",
    "icao": "AYWK"
  },
  {
    "name": "Narsarsuaq Airport",
    "city": "Narssarssuaq",
    "country": "Greenland",
    "iata": "UAK",
    "icao": "BGBW"
  },
  {
    "name": "Godthaab / Nuuk Airport",
    "city": "Godthaab",
    "country": "Greenland",
    "iata": "GOH",
    "icao": "BGGH"
  },
  {
    "name": "Kangerlussuaq Airport",
    "city": "Sondrestrom",
    "country": "Greenland",
    "iata": "SFJ",
    "icao": "BGSF"
  },
  {
    "name": "Thule Air Base",
    "city": "Thule",
    "country": "Greenland",
    "iata": "THU",
    "icao": "BGTL"
  },
  {
    "name": "Akureyri Airport",
    "city": "Akureyri",
    "country": "Iceland",
    "iata": "AEY",
    "icao": "BIAR"
  },
  {
    "name": "Egilsstaðir Airport",
    "city": "Egilsstadir",
    "country": "Iceland",
    "iata": "EGS",
    "icao": "BIEG"
  },
  {
    "name": "Hornafjörður Airport",
    "city": "Hofn",
    "country": "Iceland",
    "iata": "HFN",
    "icao": "BIHN"
  },
  {
    "name": "Húsavík Airport",
    "city": "Husavik",
    "country": "Iceland",
    "iata": "HZK",
    "icao": "BIHU"
  },
  {
    "name": "Ísafjörður Airport",
    "city": "Isafjordur",
    "country": "Iceland",
    "iata": "IFJ",
    "icao": "BIIS"
  },
  {
    "name": "Keflavik International Airport",
    "city": "Keflavik",
    "country": "Iceland",
    "iata": "KEF",
    "icao": "BIKF"
  },
  {
    "name": "Patreksfjörður Airport",
    "city": "Patreksfjordur",
    "country": "Iceland",
    "iata": "PFJ",
    "icao": "BIPA"
  },
  {
    "name": "Reykjavik Airport",
    "city": "Reykjavik",
    "country": "Iceland",
    "iata": "RKV",
    "icao": "BIRK"
  },
  {
    "name": "Siglufjörður Airport",
    "city": "Siglufjordur",
    "country": "Iceland",
    "iata": "SIJ",
    "icao": "BISI"
  },
  {
    "name": "Vestmannaeyjar Airport",
    "city": "Vestmannaeyjar",
    "country": "Iceland",
    "iata": "VEY",
    "icao": "BIVM"
  },
  {
    "name": "Sault Ste Marie Airport",
    "city": "Sault Sainte Marie",
    "country": "Canada",
    "iata": "YAM",
    "icao": "CYAM"
  },
  {
    "name": "Winnipeg / St. Andrews Airport",
    "city": "Winnipeg",
    "country": "Canada",
    "iata": "YAV",
    "icao": "CYAV"
  },
  {
    "name": "Halifax / CFB Shearwater Heliport",
    "city": "Halifax",
    "country": "Canada",
    "iata": "YAW",
    "icao": "CYAW"
  },
  {
    "name": "St. Anthony Airport",
    "city": "St. Anthony",
    "country": "Canada",
    "iata": "YAY",
    "icao": "CYAY"
  },
  {
    "name": "Tofino / Long Beach Airport",
    "city": "Tofino",
    "country": "Canada",
    "iata": "YAZ",
    "icao": "CYAZ"
  },
  {
    "name": "Kugaaruk Airport",
    "city": "Pelly Bay",
    "country": "Canada",
    "iata": "YBB",
    "icao": "CYBB"
  },
  {
    "name": "Baie Comeau Airport",
    "city": "Baie Comeau",
    "country": "Canada",
    "iata": "YBC",
    "icao": "CYBC"
  },
  {
    "name": "CFB Bagotville",
    "city": "Bagotville",
    "country": "Canada",
    "iata": "YBG",
    "icao": "CYBG"
  },
  {
    "name": "Baker Lake Airport",
    "city": "Baker Lake",
    "country": "Canada",
    "iata": "YBK",
    "icao": "CYBK"
  },
  {
    "name": "Campbell River Airport",
    "city": "Campbell River",
    "country": "Canada",
    "iata": "YBL",
    "icao": "CYBL"
  },
  {
    "name": "Brandon Municipal Airport",
    "city": "Brandon",
    "country": "Canada",
    "iata": "YBR",
    "icao": "CYBR"
  },
  {
    "name": "Cambridge Bay Airport",
    "city": "Cambridge Bay",
    "country": "Canada",
    "iata": "YCB",
    "icao": "CYCB"
  },
  {
    "name": "Nanaimo Airport",
    "city": "Nanaimo",
    "country": "Canada",
    "iata": "YCD",
    "icao": "CYCD"
  },
  {
    "name": "Castlegar/West Kootenay Regional Airport",
    "city": "Castlegar",
    "country": "Canada",
    "iata": "YCG",
    "icao": "CYCG"
  },
  {
    "name": "Miramichi Airport",
    "city": "Chatham",
    "country": "Canada",
    "iata": "YCH",
    "icao": "CYCH"
  },
  {
    "name": "Charlo Airport",
    "city": "Charlo",
    "country": "Canada",
    "iata": "YCL",
    "icao": "CYCL"
  },
  {
    "name": "Kugluktuk Airport",
    "city": "Coppermine",
    "country": "Canada",
    "iata": "YCO",
    "icao": "CYCO"
  },
  {
    "name": "Coronation Airport",
    "city": "Coronation",
    "country": "Canada",
    "iata": "YCT",
    "icao": "CYCT"
  },
  {
    "name": "Chilliwack Airport",
    "city": "Chilliwack",
    "country": "Canada",
    "iata": "YCW",
    "icao": "CYCW"
  },
  {
    "name": "Clyde River Airport",
    "city": "Clyde River",
    "country": "Canada",
    "iata": "YCY",
    "icao": "CYCY"
  },
  {
    "name": "Coral Harbour Airport",
    "city": "Coral Harbour",
    "country": "Canada",
    "iata": "YZS",
    "icao": "CYZS"
  },
  {
    "name": "Dawson City Airport",
    "city": "Dawson",
    "country": "Canada",
    "iata": "YDA",
    "icao": "CYDA"
  },
  {
    "name": "Burwash Airport",
    "city": "Burwash",
    "country": "Canada",
    "iata": "YDB",
    "icao": "CYDB"
  },
  {
    "name": "Princeton Airport",
    "city": "Princeton",
    "country": "Canada",
    "iata": "YDC",
    "icao": "CYDC"
  },
  {
    "name": "Deer Lake Airport",
    "city": "Deer Lake",
    "country": "Canada",
    "iata": "YDF",
    "icao": "CYDF"
  },
  {
    "name": "Dease Lake Airport",
    "city": "Dease Lake",
    "country": "Canada",
    "iata": "YDL",
    "icao": "CYDL"
  },
  {
    "name": "Dauphin Barker Airport",
    "city": "Dauphin",
    "country": "Canada",
    "iata": "YDN",
    "icao": "CYDN"
  },
  {
    "name": "Dawson Creek Airport",
    "city": "Dawson Creek",
    "country": "Canada",
    "iata": "YDQ",
    "icao": "CYDQ"
  },
  {
    "name": "Edmonton International Airport",
    "city": "Edmonton",
    "country": "Canada",
    "iata": "YEG",
    "icao": "CYEG"
  },
  {
    "name": "Arviat Airport",
    "city": "Eskimo Point",
    "country": "Canada",
    "iata": "YEK",
    "icao": "CYEK"
  },
  {
    "name": "Estevan Airport",
    "city": "Estevan",
    "country": "Canada",
    "iata": "YEN",
    "icao": "CYEN"
  },
  {
    "name": "Edson Airport",
    "city": "Edson",
    "country": "Canada",
    "iata": "YET",
    "icao": "CYET"
  },
  {
    "name": "Eureka Airport",
    "city": "Eureka",
    "country": "Canada",
    "iata": "YEU",
    "icao": "CYEU"
  },
  {
    "name": "Inuvik Mike Zubko Airport",
    "city": "Inuvik",
    "country": "Canada",
    "iata": "YEV",
    "icao": "CYEV"
  },
  {
    "name": "Iqaluit Airport",
    "city": "Iqaluit",
    "country": "Canada",
    "iata": "YFB",
    "icao": "CYFB"
  },
  {
    "name": "Fredericton Airport",
    "city": "Fredericton",
    "country": "Canada",
    "iata": "YFC",
    "icao": "CYFC"
  },
  {
    "name": "Forestville Airport",
    "city": "Forestville",
    "country": "Canada",
    "iata": "NONE",
    "icao": "CYFE"
  },
  {
    "name": "Flin Flon Airport",
    "city": "Flin Flon",
    "country": "Canada",
    "iata": "YFO",
    "icao": "CYFO"
  },
  {
    "name": "Fort Resolution Airport",
    "city": "Fort Resolution",
    "country": "Canada",
    "iata": "YFR",
    "icao": "CYFR"
  },
  {
    "name": "Fort Simpson Airport",
    "city": "Fort Simpson",
    "country": "Canada",
    "iata": "YFS",
    "icao": "CYFS"
  },
  {
    "name": "Kingston Norman Rogers Airport",
    "city": "Kingston",
    "country": "Canada",
    "iata": "YGK",
    "icao": "CYGK"
  },
  {
    "name": "La Grande Rivière Airport",
    "city": "La Grande Riviere",
    "country": "Canada",
    "iata": "YGL",
    "icao": "CYGL"
  },
  {
    "name": "Gaspé (Michel-Pouliot) Airport",
    "city": "Gaspe",
    "country": "Canada",
    "iata": "YGP",
    "icao": "CYGP"
  },
  {
    "name": "Geraldton Greenstone Regional Airport",
    "city": "Geraldton",
    "country": "Canada",
    "iata": "YGQ",
    "icao": "CYGQ"
  },
  {
    "name": "Îles-de-la-Madeleine Airport",
    "city": "Iles De La Madeleine",
    "country": "Canada",
    "iata": "YGR",
    "icao": "CYGR"
  },
  {
    "name": "Hudson Bay Airport",
    "city": "Hudson Bay",
    "country": "Canada",
    "iata": "YHB",
    "icao": "CYHB"
  },
  {
    "name": "Dryden Regional Airport",
    "city": "Dryden",
    "country": "Canada",
    "iata": "YHD",
    "icao": "CYHD"
  },
  {
    "name": "Ulukhaktok Holman Airport",
    "city": "Holman Island",
    "country": "Canada",
    "iata": "YHI",
    "icao": "CYHI"
  },
  {
    "name": "Gjoa Haven Airport",
    "city": "Gjoa Haven",
    "country": "Canada",
    "iata": "YHK",
    "icao": "CYHK"
  },
  {
    "name": "John C. Munro Hamilton International Airport",
    "city": "Hamilton",
    "country": "Canada",
    "iata": "YHM",
    "icao": "CYHM"
  },
  {
    "name": "Montréal / Saint-Hubert Airport",
    "city": "Montreal",
    "country": "Canada",
    "iata": "YHU",
    "icao": "CYHU"
  },
  {
    "name": "Hay River / Merlyn Carter Airport",
    "city": "Hay River",
    "country": "Canada",
    "iata": "YHY",
    "icao": "CYHY"
  },
  {
    "name": "Halifax / Stanfield International Airport",
    "city": "Halifax",
    "country": "Canada",
    "iata": "YHZ",
    "icao": "CYHZ"
  },
  {
    "name": "Atikokan Municipal Airport",
    "city": "Atikokan",
    "country": "Canada",
    "iata": "YIB",
    "icao": "CYIB"
  },
  {
    "name": "Pond Inlet Airport",
    "city": "Pond Inlet",
    "country": "Canada",
    "iata": "YIO",
    "icao": "CYIO"
  },
  {
    "name": "St Jean Airport",
    "city": "St. Jean",
    "country": "Canada",
    "iata": "YJN",
    "icao": "CYJN"
  },
  {
    "name": "Stephenville Airport",
    "city": "Stephenville",
    "country": "Canada",
    "iata": "YJT",
    "icao": "CYJT"
  },
  {
    "name": "Kamloops Airport",
    "city": "Kamloops",
    "country": "Canada",
    "iata": "YKA",
    "icao": "CYKA"
  },
  {
    "name": "Waterloo Airport",
    "city": "Waterloo",
    "country": "Canada",
    "iata": "YKF",
    "icao": "CYKF"
  },
  {
    "name": "Schefferville Airport",
    "city": "Schefferville",
    "country": "Canada",
    "iata": "YKL",
    "icao": "CYKL"
  },
  {
    "name": "Kindersley Airport",
    "city": "Kindersley",
    "country": "Canada",
    "iata": "YKY",
    "icao": "CYKY"
  },
  {
    "name": "Buttonville Municipal Airport",
    "city": "Toronto",
    "country": "Canada",
    "iata": "YKZ",
    "icao": "CYKZ"
  },
  {
    "name": "Chapleau Airport",
    "city": "Chapleau",
    "country": "Canada",
    "iata": "YLD",
    "icao": "CYLD"
  },
  {
    "name": "Meadow Lake Airport",
    "city": "Meadow Lake",
    "country": "Canada",
    "iata": "YLJ",
    "icao": "CYLJ"
  },
  {
    "name": "Lloydminster Airport",
    "city": "Lloydminster",
    "country": "Canada",
    "iata": "YLL",
    "icao": "CYLL"
  },
  {
    "name": "Alert Airport",
    "city": "Alert",
    "country": "Canada",
    "iata": "YLT",
    "icao": "CYLT"
  },
  {
    "name": "Kelowna International Airport",
    "city": "Kelowna",
    "country": "Canada",
    "iata": "YLW",
    "icao": "CYLW"
  },
  {
    "name": "Mayo Airport",
    "city": "Mayo",
    "country": "Canada",
    "iata": "YMA",
    "icao": "CYMA"
  },
  {
    "name": "Moose Jaw Air Vice Marshal C. M. McEwen Airport",
    "city": "Moose Jaw",
    "country": "Canada",
    "iata": "YMJ",
    "icao": "CYMJ"
  },
  {
    "name": "Fort McMurray Airport",
    "city": "Fort Mcmurray",
    "country": "Canada",
    "iata": "YMM",
    "icao": "CYMM"
  },
  {
    "name": "Moosonee Airport",
    "city": "Moosonee",
    "country": "Canada",
    "iata": "YMO",
    "icao": "CYMO"
  },
  {
    "name": "Maniwaki Airport",
    "city": "Maniwaki",
    "country": "Canada",
    "iata": "YMW",
    "icao": "CYMW"
  },
  {
    "name": "Montreal International (Mirabel) Airport",
    "city": "Montreal",
    "country": "Canada",
    "iata": "YMX",
    "icao": "CYMX"
  },
  {
    "name": "Natashquan Airport",
    "city": "Natashquan",
    "country": "Canada",
    "iata": "YNA",
    "icao": "CYNA"
  },
  {
    "name": "Ottawa / Gatineau Airport",
    "city": "Gatineau",
    "country": "Canada",
    "iata": "YND",
    "icao": "CYND"
  },
  {
    "name": "Matagami Airport",
    "city": "Matagami",
    "country": "Canada",
    "iata": "YNM",
    "icao": "CYNM"
  },
  {
    "name": "Old Crow Airport",
    "city": "Old Crow",
    "country": "Canada",
    "iata": "YOC",
    "icao": "CYOC"
  },
  {
    "name": "CFB Cold Lake",
    "city": "Cold Lake",
    "country": "Canada",
    "iata": "YOD",
    "icao": "CYOD"
  },
  {
    "name": "High Level Airport",
    "city": "High Level",
    "country": "Canada",
    "iata": "YOJ",
    "icao": "CYOJ"
  },
  {
    "name": "Ottawa Macdonald-Cartier International Airport",
    "city": "Ottawa",
    "country": "Canada",
    "iata": "YOW",
    "icao": "CYOW"
  },
  {
    "name": "Prince Albert Glass Field",
    "city": "Prince Albert",
    "country": "Canada",
    "iata": "YPA",
    "icao": "CYPA"
  },
  {
    "name": "Peace River Airport",
    "city": "Peace River",
    "country": "Canada",
    "iata": "YPE",
    "icao": "CYPE"
  },
  {
    "name": "Southport Airport",
    "city": "Portage-la-prairie",
    "country": "Canada",
    "iata": "YPG",
    "icao": "CYPG"
  },
  {
    "name": "Pitt Meadows Airport",
    "city": "Pitt Meadows",
    "country": "Canada",
    "iata": "NONE",
    "icao": "CYPK"
  },
  {
    "name": "Pickle Lake Airport",
    "city": "Pickle Lake",
    "country": "Canada",
    "iata": "YPL",
    "icao": "CYPL"
  },
  {
    "name": "Port Menier Airport",
    "city": "Port Menier",
    "country": "Canada",
    "iata": "YPN",
    "icao": "CYPN"
  },
  {
    "name": "Peterborough Airport",
    "city": "Peterborough",
    "country": "Canada",
    "iata": "YPQ",
    "icao": "CYPQ"
  },
  {
    "name": "Prince Rupert Airport",
    "city": "Prince Pupert",
    "country": "Canada",
    "iata": "YPR",
    "icao": "CYPR"
  },
  {
    "name": "Fort Chipewyan Airport",
    "city": "Fort Chipewyan",
    "country": "Canada",
    "iata": "YPY",
    "icao": "CYPY"
  },
  {
    "name": "Muskoka Airport",
    "city": "Muskoka",
    "country": "Canada",
    "iata": "YQA",
    "icao": "CYQA"
  },
  {
    "name": "Quebec Jean Lesage International Airport",
    "city": "Quebec",
    "country": "Canada",
    "iata": "YQB",
    "icao": "CYQB"
  },
  {
    "name": "Red Deer Regional Airport",
    "city": "Red Deer Industrial",
    "country": "Canada",
    "iata": "YQF",
    "icao": "CYQF"
  },
  {
    "name": "Windsor Airport",
    "city": "Windsor",
    "country": "Canada",
    "iata": "YQG",
    "icao": "CYQG"
  },
  {
    "name": "Watson Lake Airport",
    "city": "Watson Lake",
    "country": "Canada",
    "iata": "YQH",
    "icao": "CYQH"
  },
  {
    "name": "Kenora Airport",
    "city": "Kenora",
    "country": "Canada",
    "iata": "YQK",
    "icao": "CYQK"
  },
  {
    "name": "Lethbridge County Airport",
    "city": "Lethbridge",
    "country": "Canada",
    "iata": "YQL",
    "icao": "CYQL"
  },
  {
    "name": "Greater Moncton International Airport",
    "city": "Moncton",
    "country": "Canada",
    "iata": "YQM",
    "icao": "CYQM"
  },
  {
    "name": "Comox Airport",
    "city": "Comox",
    "country": "Canada",
    "iata": "YQQ",
    "icao": "CYQQ"
  },
  {
    "name": "Regina International Airport",
    "city": "Regina",
    "country": "Canada",
    "iata": "YQR",
    "icao": "CYQR"
  },
  {
    "name": "Thunder Bay Airport",
    "city": "Thunder Bay",
    "country": "Canada",
    "iata": "YQT",
    "icao": "CYQT"
  },
  {
    "name": "Grande Prairie Airport",
    "city": "Grande Prairie",
    "country": "Canada",
    "iata": "YQU",
    "icao": "CYQU"
  },
  {
    "name": "Yorkton Municipal Airport",
    "city": "Yorkton",
    "country": "Canada",
    "iata": "YQV",
    "icao": "CYQV"
  },
  {
    "name": "North Battleford Airport",
    "city": "North Battleford",
    "country": "Canada",
    "iata": "YQW",
    "icao": "CYQW"
  },
  {
    "name": "Gander International Airport",
    "city": "Gander",
    "country": "Canada",
    "iata": "YQX",
    "icao": "CYQX"
  },
  {
    "name": "Sydney / J.A. Douglas McCurdy Airport",
    "city": "Sydney",
    "country": "Canada",
    "iata": "YQY",
    "icao": "CYQY"
  },
  {
    "name": "Quesnel Airport",
    "city": "Quesnel",
    "country": "Canada",
    "iata": "YQZ",
    "icao": "CYQZ"
  },
  {
    "name": "Resolute Bay Airport",
    "city": "Resolute",
    "country": "Canada",
    "iata": "YRB",
    "icao": "CYRB"
  },
  {
    "name": "Rivière-du-Loup Airport",
    "city": "Riviere Du Loup",
    "country": "Canada",
    "iata": "YRI",
    "icao": "CYRI"
  },
  {
    "name": "Roberval Airport",
    "city": "Roberval",
    "country": "Canada",
    "iata": "YRJ",
    "icao": "CYRJ"
  },
  {
    "name": "Rocky Mountain House Airport",
    "city": "Rocky Mountain House",
    "country": "Canada",
    "iata": "YRM",
    "icao": "CYRM"
  },
  {
    "name": "Rankin Inlet Airport",
    "city": "Rankin Inlet",
    "country": "Canada",
    "iata": "YRT",
    "icao": "CYRT"
  },
  {
    "name": "Sudbury Airport",
    "city": "Sudbury",
    "country": "Canada",
    "iata": "YSB",
    "icao": "CYSB"
  },
  {
    "name": "Sherbrooke Airport",
    "city": "Sherbrooke",
    "country": "Canada",
    "iata": "YSC",
    "icao": "CYSC"
  },
  {
    "name": "Saint John Airport",
    "city": "St. John",
    "country": "Canada",
    "iata": "YSJ",
    "icao": "CYSJ"
  },
  {
    "name": "Fort Smith Airport",
    "city": "Fort Smith",
    "country": "Canada",
    "iata": "YSM",
    "icao": "CYSM"
  },
  {
    "name": "Nanisivik Airport",
    "city": "Nanisivik",
    "country": "Canada",
    "iata": "YSR",
    "icao": "CYSR"
  },
  {
    "name": "Summerside Airport",
    "city": "Summerside",
    "country": "Canada",
    "iata": "YSU",
    "icao": "CYSU"
  },
  {
    "name": "Sachs Harbour (David Nasogaluak Jr. Saaryuaq) Airport",
    "city": "Sachs Harbour",
    "country": "Canada",
    "iata": "YSY",
    "icao": "CYSY"
  },
  {
    "name": "Cape Dorset Airport",
    "city": "Cape Dorset",
    "country": "Canada",
    "iata": "YTE",
    "icao": "CYTE"
  },
  {
    "name": "Thompson Airport",
    "city": "Thompson",
    "country": "Canada",
    "iata": "YTH",
    "icao": "CYTH"
  },
  {
    "name": "CFB Trenton",
    "city": "Trenton",
    "country": "Canada",
    "iata": "YTR",
    "icao": "CYTR"
  },
  {
    "name": "Timmins/Victor M. Power",
    "city": "Timmins",
    "country": "Canada",
    "iata": "YTS",
    "icao": "CYTS"
  },
  {
    "name": "Billy Bishop Toronto City Centre Airport",
    "city": "Toronto",
    "country": "Canada",
    "iata": "YTZ",
    "icao": "CYTZ"
  },
  {
    "name": "Tuktoyaktuk Airport",
    "city": "Tuktoyaktuk",
    "country": "Canada",
    "iata": "YUB",
    "icao": "CYUB"
  },
  {
    "name": "Montreal / Pierre Elliott Trudeau International Airport",
    "city": "Montreal",
    "country": "Canada",
    "iata": "YUL",
    "icao": "CYUL"
  },
  {
    "name": "Repulse Bay Airport",
    "city": "Repulse Bay",
    "country": "Canada",
    "iata": "YUT",
    "icao": "CYUT"
  },
  {
    "name": "Hall Beach Airport",
    "city": "Hall Beach",
    "country": "Canada",
    "iata": "YUX",
    "icao": "CYUX"
  },
  {
    "name": "Rouyn Noranda Airport",
    "city": "Rouyn",
    "country": "Canada",
    "iata": "YUY",
    "icao": "CYUY"
  },
  {
    "name": "La Ronge Airport",
    "city": "La Ronge",
    "country": "Canada",
    "iata": "YVC",
    "icao": "CYVC"
  },
  {
    "name": "Vermilion Airport",
    "city": "Vermillion",
    "country": "Canada",
    "iata": "YVG",
    "icao": "CYVG"
  },
  {
    "name": "Qikiqtarjuaq Airport",
    "city": "Broughton Island",
    "country": "Canada",
    "iata": "YVM",
    "icao": "CYVM"
  },
  {
    "name": "Val-d'Or Airport",
    "city": "Val D'or",
    "country": "Canada",
    "iata": "YVO",
    "icao": "CYVO"
  },
  {
    "name": "Kuujjuaq Airport",
    "city": "Quujjuaq",
    "country": "Canada",
    "iata": "YVP",
    "icao": "CYVP"
  },
  {
    "name": "Norman Wells Airport",
    "city": "Norman Wells",
    "country": "Canada",
    "iata": "YVQ",
    "icao": "CYVQ"
  },
  {
    "name": "Vancouver International Airport",
    "city": "Vancouver",
    "country": "Canada",
    "iata": "YVR",
    "icao": "CYVR"
  },
  {
    "name": "Buffalo Narrows Airport",
    "city": "Buffalo Narrows",
    "country": "Canada",
    "iata": "YVT",
    "icao": "CYVT"
  },
  {
    "name": "Wiarton Airport",
    "city": "Wiarton",
    "country": "Canada",
    "iata": "YVV",
    "icao": "CYVV"
  },
  {
    "name": "Petawawa Airport",
    "city": "Petawawa",
    "country": "Canada",
    "iata": "YWA",
    "icao": "CYWA"
  },
  {
    "name": "Winnipeg / James Armstrong Richardson International Airport",
    "city": "Winnipeg",
    "country": "Canada",
    "iata": "YWG",
    "icao": "CYWG"
  },
  {
    "name": "Wabush Airport",
    "city": "Wabush",
    "country": "Canada",
    "iata": "YWK",
    "icao": "CYWK"
  },
  {
    "name": "Williams Lake Airport",
    "city": "Williams Lake",
    "country": "Canada",
    "iata": "YWL",
    "icao": "CYWL"
  },
  {
    "name": "Wrigley Airport",
    "city": "Wrigley",
    "country": "Canada",
    "iata": "YWY",
    "icao": "CYWY"
  },
  {
    "name": "Cranbrook/Canadian Rockies International Airport",
    "city": "Cranbrook",
    "country": "Canada",
    "iata": "YXC",
    "icao": "CYXC"
  },
  {
    "name": "Edmonton City Centre (Blatchford Field) Airport",
    "city": "Edmonton",
    "country": "Canada",
    "iata": "YXD",
    "icao": "CYXD"
  },
  {
    "name": "Saskatoon John G. Diefenbaker International Airport",
    "city": "Saskatoon",
    "country": "Canada",
    "iata": "YXE",
    "icao": "CYXE"
  },
  {
    "name": "Medicine Hat Airport",
    "city": "Medicine Hat",
    "country": "Canada",
    "iata": "YXH",
    "icao": "CYXH"
  },
  {
    "name": "Fort St John Airport",
    "city": "Fort Saint John",
    "country": "Canada",
    "iata": "YXJ",
    "icao": "CYXJ"
  },
  {
    "name": "Sioux Lookout Airport",
    "city": "Sioux Lookout",
    "country": "Canada",
    "iata": "YXL",
    "icao": "CYXL"
  },
  {
    "name": "Pangnirtung Airport",
    "city": "Pangnirtung",
    "country": "Canada",
    "iata": "YXP",
    "icao": "CYXP"
  },
  {
    "name": "Earlton (Timiskaming Regional) Airport",
    "city": "Earlton",
    "country": "Canada",
    "iata": "YXR",
    "icao": "CYXR"
  },
  {
    "name": "Prince George Airport",
    "city": "Prince George",
    "country": "Canada",
    "iata": "YXS",
    "icao": "CYXS"
  },
  {
    "name": "Northwest Regional Airport Terrace-Kitimat",
    "city": "Terrace",
    "country": "Canada",
    "iata": "YXT",
    "icao": "CYXT"
  },
  {
    "name": "London Airport",
    "city": "London",
    "country": "Canada",
    "iata": "YXU",
    "icao": "CYXU"
  },
  {
    "name": "Abbotsford Airport",
    "city": "Abbotsford",
    "country": "Canada",
    "iata": "YXX",
    "icao": "CYXX"
  },
  {
    "name": "Whitehorse / Erik Nielsen International Airport",
    "city": "Whitehorse",
    "country": "Canada",
    "iata": "YXY",
    "icao": "CYXY"
  },
  {
    "name": "North Bay Airport",
    "city": "North Bay",
    "country": "Canada",
    "iata": "YYB",
    "icao": "CYYB"
  },
  {
    "name": "Calgary International Airport",
    "city": "Calgary",
    "country": "Canada",
    "iata": "YYC",
    "icao": "CYYC"
  },
  {
    "name": "Smithers Airport",
    "city": "Smithers",
    "country": "Canada",
    "iata": "YYD",
    "icao": "CYYD"
  },
  {
    "name": "Fort Nelson Airport",
    "city": "Fort Nelson",
    "country": "Canada",
    "iata": "YYE",
    "icao": "CYYE"
  },
  {
    "name": "Penticton Airport",
    "city": "Penticton",
    "country": "Canada",
    "iata": "YYF",
    "icao": "CYYF"
  },
  {
    "name": "Charlottetown Airport",
    "city": "Charlottetown",
    "country": "Canada",
    "iata": "YYG",
    "icao": "CYYG"
  },
  {
    "name": "Taloyoak Airport",
    "city": "Spence Bay",
    "country": "Canada",
    "iata": "YYH",
    "icao": "CYYH"
  },
  {
    "name": "Victoria International Airport",
    "city": "Victoria",
    "country": "Canada",
    "iata": "YYJ",
    "icao": "CYYJ"
  },
  {
    "name": "Lynn Lake Airport",
    "city": "Lynn Lake",
    "country": "Canada",
    "iata": "YYL",
    "icao": "CYYL"
  },
  {
    "name": "Swift Current Airport",
    "city": "Swift Current",
    "country": "Canada",
    "iata": "YYN",
    "icao": "CYYN"
  },
  {
    "name": "Churchill Airport",
    "city": "Churchill",
    "country": "Canada",
    "iata": "YYQ",
    "icao": "CYYQ"
  },
  {
    "name": "Goose Bay Airport",
    "city": "Goose Bay",
    "country": "Canada",
    "iata": "YYR",
    "icao": "CYYR"
  },
  {
    "name": "St. John's International Airport",
    "city": "St. John's",
    "country": "Canada",
    "iata": "YYT",
    "icao": "CYYT"
  },
  {
    "name": "Kapuskasing Airport",
    "city": "Kapuskasing",
    "country": "Canada",
    "iata": "YYU",
    "icao": "CYYU"
  },
  {
    "name": "Armstrong Airport",
    "city": "Armstrong",
    "country": "Canada",
    "iata": "YYW",
    "icao": "CYYW"
  },
  {
    "name": "Mont Joli Airport",
    "city": "Mont Joli",
    "country": "Canada",
    "iata": "YYY",
    "icao": "CYYY"
  },
  {
    "name": "Lester B. Pearson International Airport",
    "city": "Toronto",
    "country": "Canada",
    "iata": "YYZ",
    "icao": "CYYZ"
  },
  {
    "name": "Downsview Airport",
    "city": "Toronto",
    "country": "Canada",
    "iata": "YZD",
    "icao": "CYZD"
  },
  {
    "name": "Gore Bay Manitoulin Airport",
    "city": "Gore Bay",
    "country": "Canada",
    "iata": "YZE",
    "icao": "CYZE"
  },
  {
    "name": "Yellowknife Airport",
    "city": "Yellowknife",
    "country": "Canada",
    "iata": "YZF",
    "icao": "CYZF"
  },
  {
    "name": "Slave Lake Airport",
    "city": "Slave Lake",
    "country": "Canada",
    "iata": "YZH",
    "icao": "CYZH"
  },
  {
    "name": "Sandspit Airport",
    "city": "Sandspit",
    "country": "Canada",
    "iata": "YZP",
    "icao": "CYZP"
  },
  {
    "name": "Chris Hadfield Airport",
    "city": "Sarnia",
    "country": "Canada",
    "iata": "YZR",
    "icao": "CYZR"
  },
  {
    "name": "Port Hardy Airport",
    "city": "Port Hardy",
    "country": "Canada",
    "iata": "YZT",
    "icao": "CYZT"
  },
  {
    "name": "Whitecourt Airport",
    "city": "Whitecourt",
    "country": "Canada",
    "iata": "YZU",
    "icao": "CYZU"
  },
  {
    "name": "Sept-Îles Airport",
    "city": "Sept-iles",
    "country": "Canada",
    "iata": "YZV",
    "icao": "CYZV"
  },
  {
    "name": "Teslin Airport",
    "city": "Teslin",
    "country": "Canada",
    "iata": "YZW",
    "icao": "CYZW"
  },
  {
    "name": "CFB Greenwood",
    "city": "Greenwood",
    "country": "Canada",
    "iata": "YZX",
    "icao": "CYZX"
  },
  {
    "name": "Faro Airport",
    "city": "Faro",
    "country": "Canada",
    "iata": "ZFA",
    "icao": "CZFA"
  },
  {
    "name": "Fort Mcpherson Airport",
    "city": "Fort Mcpherson",
    "country": "Canada",
    "iata": "ZFM",
    "icao": "CZFM"
  },
  {
    "name": "Blida Airport",
    "city": "Blida",
    "country": "Algeria",
    "iata": "NONE",
    "icao": "DAAB"
  },
  {
    "name": "Bou Saada Airport",
    "city": "Bou Saada",
    "country": "Algeria",
    "iata": "NONE",
    "icao": "DAAD"
  },
  {
    "name": "Soummam Airport",
    "city": "Bejaja",
    "country": "Algeria",
    "iata": "BJA",
    "icao": "DAAE"
  },
  {
    "name": "Houari Boumediene Airport",
    "city": "Algier",
    "country": "Algeria",
    "iata": "ALG",
    "icao": "DAAG"
  },
  {
    "name": "Djanet Inedbirene Airport",
    "city": "Djanet",
    "country": "Algeria",
    "iata": "DJG",
    "icao": "DAAJ"
  },
  {
    "name": "Boufarik Airport",
    "city": "Boufarik",
    "country": "Algeria",
    "iata": "QFD",
    "icao": "DAAK"
  },
  {
    "name": "Reggane Airport",
    "city": "Reggan",
    "country": "Algeria",
    "iata": "NONE",
    "icao": "DAAN"
  },
  {
    "name": "Illizi Takhamalt Airport",
    "city": "Illizi",
    "country": "Algeria",
    "iata": "VVZ",
    "icao": "DAAP"
  },
  {
    "name": "Ain Oussera Airport",
    "city": "Ain Oussera",
    "country": "Algeria",
    "iata": "NONE",
    "icao": "DAAQ"
  },
  {
    "name": "Aguenar – Hadj Bey Akhamok Airport",
    "city": "Tamanrasset",
    "country": "Algeria",
    "iata": "TMR",
    "icao": "DAAT"
  },
  {
    "name": "Jijel Ferhat Abbas Airport",
    "city": "Jijel",
    "country": "Algeria",
    "iata": "GJL",
    "icao": "DAAV"
  },
  {
    "name": "Mecheria Airport",
    "city": "Mecheria",
    "country": "Algeria",
    "iata": "NONE",
    "icao": "DAAY"
  },
  {
    "name": "Relizane Airport",
    "city": "Relizane",
    "country": "Algeria",
    "iata": "NONE",
    "icao": "DAAZ"
  },
  {
    "name": "Annaba Airport",
    "city": "Annaba",
    "country": "Algeria",
    "iata": "AAE",
    "icao": "DABB"
  },
  {
    "name": "Mohamed Boudiaf International Airport",
    "city": "Constantine",
    "country": "Algeria",
    "iata": "CZL",
    "icao": "DABC"
  },
  {
    "name": "Cheikh Larbi Tébessi Airport",
    "city": "Tebessa",
    "country": "Algeria",
    "iata": "TEE",
    "icao": "DABS"
  },
  {
    "name": "Hassi R'Mel Airport",
    "city": "Tilrempt",
    "country": "Algeria",
    "iata": "HRM",
    "icao": "DAFH"
  },
  {
    "name": "Bou Chekif Airport",
    "city": "Tiaret",
    "country": "Algeria",
    "iata": "TID",
    "icao": "DAOB"
  },
  {
    "name": "Bou Sfer Airport",
    "city": "Bou Sfer",
    "country": "Algeria",
    "iata": "NONE",
    "icao": "DAOE"
  },
  {
    "name": "Tindouf Airport",
    "city": "Tindouf",
    "country": "Algeria",
    "iata": "TIN",
    "icao": "DAOF"
  },
  {
    "name": "Ech Cheliff Airport",
    "city": "Ech-cheliff",
    "country": "Algeria",
    "iata": "QAS",
    "icao": "DAOI"
  },
  {
    "name": "Tafaraoui Airport",
    "city": "Oran",
    "country": "Algeria",
    "iata": "TAF",
    "icao": "DAOL"
  },
  {
    "name": "Zenata – Messali El Hadj Airport",
    "city": "Tlemcen",
    "country": "Algeria",
    "iata": "TLM",
    "icao": "DAON"
  },
  {
    "name": "Es Senia Airport",
    "city": "Oran",
    "country": "Algeria",
    "iata": "ORN",
    "icao": "DAOO"
  },
  {
    "name": "Sidi Bel Abbes Airport",
    "city": "Sidi Bel Abbes",
    "country": "Algeria",
    "iata": "NONE",
    "icao": "DAOS"
  },
  {
    "name": "Ghriss Airport",
    "city": "Ghriss",
    "country": "Algeria",
    "iata": "MUW",
    "icao": "DAOV"
  },
  {
    "name": "Touat Cheikh Sidi Mohamed Belkebir Airport",
    "city": "Adrar",
    "country": "Algeria",
    "iata": "AZR",
    "icao": "DAUA"
  },
  {
    "name": "Biskra Airport",
    "city": "Biskra",
    "country": "Algeria",
    "iata": "BSK",
    "icao": "DAUB"
  },
  {
    "name": "El Golea Airport",
    "city": "El Golea",
    "country": "Algeria",
    "iata": "ELG",
    "icao": "DAUE"
  },
  {
    "name": "Noumérat - Moufdi Zakaria Airport",
    "city": "Ghardaia",
    "country": "Algeria",
    "iata": "GHA",
    "icao": "DAUG"
  },
  {
    "name": "Oued Irara Airport",
    "city": "Hassi Messaoud",
    "country": "Algeria",
    "iata": "HME",
    "icao": "DAUH"
  },
  {
    "name": "In Salah Airport",
    "city": "In Salah",
    "country": "Algeria",
    "iata": "INZ",
    "icao": "DAUI"
  },
  {
    "name": "Touggourt Sidi Madhi Airport",
    "city": "Touggourt",
    "country": "Algeria",
    "iata": "TGR",
    "icao": "DAUK"
  },
  {
    "name": "Laghouat Airport",
    "city": "Laghouat",
    "country": "Algeria",
    "iata": "LOO",
    "icao": "DAUL"
  },
  {
    "name": "Timimoun Airport",
    "city": "Timimoun",
    "country": "Algeria",
    "iata": "TMX",
    "icao": "DAUT"
  },
  {
    "name": "Ain el Beida Airport",
    "city": "Ouargla",
    "country": "Algeria",
    "iata": "OGX",
    "icao": "DAUU"
  },
  {
    "name": "In Aménas Airport",
    "city": "Zarzaitine",
    "country": "Algeria",
    "iata": "IAM",
    "icao": "DAUZ"
  },
  {
    "name": "Cadjehoun Airport",
    "city": "Cotonou",
    "country": "Benin",
    "iata": "COO",
    "icao": "DBBB"
  },
  {
    "name": "Ouagadougou Airport",
    "city": "Ouagadougou",
    "country": "Burkina Faso",
    "iata": "OUA",
    "icao": "DFFD"
  },
  {
    "name": "Bobo Dioulasso Airport",
    "city": "Bobo-dioulasso",
    "country": "Burkina Faso",
    "iata": "BOY",
    "icao": "DFOO"
  },
  {
    "name": "Kotoka International Airport",
    "city": "Accra",
    "country": "Ghana",
    "iata": "ACC",
    "icao": "DGAA"
  },
  {
    "name": "Tamale Airport",
    "city": "Tamale",
    "country": "Ghana",
    "iata": "TML",
    "icao": "DGLE"
  },
  {
    "name": "Wa Airport",
    "city": "Wa",
    "country": "Ghana",
    "iata": "NONE",
    "icao": "DGLW"
  },
  {
    "name": "Sunyani Airport",
    "city": "Sunyani",
    "country": "Ghana",
    "iata": "NYI",
    "icao": "DGSN"
  },
  {
    "name": "Takoradi Airport",
    "city": "Takoradi",
    "country": "Ghana",
    "iata": "TKD",
    "icao": "DGTK"
  },
  {
    "name": "Port Bouet Airport",
    "city": "Abidjan",
    "country": "Cote d'Ivoire",
    "iata": "ABJ",
    "icao": "DIAP"
  },
  {
    "name": "Bouaké Airport",
    "city": "Bouake",
    "country": "Cote d'Ivoire",
    "iata": "BYK",
    "icao": "DIBK"
  },
  {
    "name": "Daloa Airport",
    "city": "Daloa",
    "country": "Cote d'Ivoire",
    "iata": "DJO",
    "icao": "DIDL"
  },
  {
    "name": "Korhogo Airport",
    "city": "Korhogo",
    "country": "Cote d'Ivoire",
    "iata": "HGO",
    "icao": "DIKO"
  },
  {
    "name": "Man Airport",
    "city": "Man",
    "country": "Cote d'Ivoire",
    "iata": "MJC",
    "icao": "DIMN"
  },
  {
    "name": "San Pedro Airport",
    "city": "San Pedro",
    "country": "Cote d'Ivoire",
    "iata": "SPY",
    "icao": "DISP"
  },
  {
    "name": "Yamoussoukro Airport",
    "city": "Yamoussoukro",
    "country": "Cote d'Ivoire",
    "iata": "ASK",
    "icao": "DIYO"
  },
  {
    "name": "Nnamdi Azikiwe International Airport",
    "city": "Abuja",
    "country": "Nigeria",
    "iata": "ABV",
    "icao": "DNAA"
  },
  {
    "name": "Akure Airport",
    "city": "Akure",
    "country": "Nigeria",
    "iata": "AKR",
    "icao": "DNAK"
  },
  {
    "name": "Benin Airport",
    "city": "Benin",
    "country": "Nigeria",
    "iata": "BNI",
    "icao": "DNBE"
  },
  {
    "name": "Margaret Ekpo International Airport",
    "city": "Calabar",
    "country": "Nigeria",
    "iata": "CBQ",
    "icao": "DNCA"
  },
  {
    "name": "Akanu Ibiam International Airport",
    "city": "Enugu",
    "country": "Nigeria",
    "iata": "ENU",
    "icao": "DNEN"
  },
  {
    "name": "Gusau Airport",
    "city": "Gusau",
    "country": "Nigeria",
    "iata": "QUS",
    "icao": "DNGU"
  },
  {
    "name": "Ibadan Airport",
    "city": "Ibadan",
    "country": "Nigeria",
    "iata": "IBA",
    "icao": "DNIB"
  },
  {
    "name": "Ilorin International Airport",
    "city": "Ilorin",
    "country": "Nigeria",
    "iata": "ILR",
    "icao": "DNIL"
  },
  {
    "name": "Yakubu Gowon Airport",
    "city": "Jos",
    "country": "Nigeria",
    "iata": "JOS",
    "icao": "DNJO"
  },
  {
    "name": "Kaduna Airport",
    "city": "Kaduna",
    "country": "Nigeria",
    "iata": "KAD",
    "icao": "DNKA"
  },
  {
    "name": "Mallam Aminu International Airport",
    "city": "Kano",
    "country": "Nigeria",
    "iata": "KAN",
    "icao": "DNKN"
  },
  {
    "name": "Maiduguri International Airport",
    "city": "Maiduguri",
    "country": "Nigeria",
    "iata": "MIU",
    "icao": "DNMA"
  },
  {
    "name": "Makurdi Airport",
    "city": "Makurdi",
    "country": "Nigeria",
    "iata": "MDI",
    "icao": "DNMK"
  },
  {
    "name": "Murtala Muhammed International Airport",
    "city": "Lagos",
    "country": "Nigeria",
    "iata": "LOS",
    "icao": "DNMM"
  },
  {
    "name": "Minna Airport",
    "city": "Minna",
    "country": "Nigeria",
    "iata": "MXJ",
    "icao": "DNMN"
  },
  {
    "name": "Port Harcourt International Airport",
    "city": "Port Hartcourt",
    "country": "Nigeria",
    "iata": "PHC",
    "icao": "DNPO"
  },
  {
    "name": "Sadiq Abubakar III International Airport",
    "city": "Sokoto",
    "country": "Nigeria",
    "iata": "SKO",
    "icao": "DNSO"
  },
  {
    "name": "Yola Airport",
    "city": "Yola",
    "country": "Nigeria",
    "iata": "YOL",
    "icao": "DNYO"
  },
  {
    "name": "Zaria Airport",
    "city": "Zaria",
    "country": "Nigeria",
    "iata": "ZAR",
    "icao": "DNZA"
  },
  {
    "name": "Maradi Airport",
    "city": "Maradi",
    "country": "Niger",
    "iata": "MFQ",
    "icao": "DRRM"
  },
  {
    "name": "Diori Hamani International Airport",
    "city": "Niamey",
    "country": "Niger",
    "iata": "NIM",
    "icao": "DRRN"
  },
  {
    "name": "Tahoua Airport",
    "city": "Tahoua",
    "country": "Niger",
    "iata": "THZ",
    "icao": "DRRT"
  },
  {
    "name": "Mano Dayak International Airport",
    "city": "Agadez",
    "country": "Niger",
    "iata": "AJY",
    "icao": "DRZA"
  },
  {
    "name": "Dirkou Airport",
    "city": "Dirkou",
    "country": "Niger",
    "iata": "NONE",
    "icao": "DRZD"
  },
  {
    "name": "Diffa Airport",
    "city": "Diffa",
    "country": "Niger",
    "iata": "NONE",
    "icao": "DRZF"
  },
  {
    "name": "Zinder Airport",
    "city": "Zinder",
    "country": "Niger",
    "iata": "ZND",
    "icao": "DRZR"
  },
  {
    "name": "Monastir Habib Bourguiba International Airport",
    "city": "Monastir",
    "country": "Tunisia",
    "iata": "MIR",
    "icao": "DTMB"
  },
  {
    "name": "Tunis Carthage International Airport",
    "city": "Tunis",
    "country": "Tunisia",
    "iata": "TUN",
    "icao": "DTTA"
  },
  {
    "name": "Sidi Ahmed Air Base",
    "city": "Bizerte",
    "country": "Tunisia",
    "iata": "NONE",
    "icao": "DTTB"
  },
  {
    "name": "Remada Air Base",
    "city": "Remada",
    "country": "Tunisia",
    "iata": "NONE",
    "icao": "DTTD"
  },
  {
    "name": "Gafsa Ksar International Airport",
    "city": "Gafsa",
    "country": "Tunisia",
    "iata": "GAF",
    "icao": "DTTF"
  },
  {
    "name": "Gabès Matmata International Airport",
    "city": "Gabes",
    "country": "Tunisia",
    "iata": "GAE",
    "icao": "DTTG"
  },
  {
    "name": "Borj El Amri Airport",
    "city": "Bordj El Amri",
    "country": "Tunisia",
    "iata": "NONE",
    "icao": "DTTI"
  },
  {
    "name": "Djerba Zarzis International Airport",
    "city": "Djerba",
    "country": "Tunisia",
    "iata": "DJE",
    "icao": "DTTJ"
  },
  {
    "name": "El Borma Airport",
    "city": "El Borma",
    "country": "Tunisia",
    "iata": "EBM",
    "icao": "DTTR"
  },
  {
    "name": "Sfax Thyna International Airport",
    "city": "Sfax",
    "country": "Tunisia",
    "iata": "SFA",
    "icao": "DTTX"
  },
  {
    "name": "Tozeur Nefta International Airport",
    "city": "Tozeur",
    "country": "Tunisia",
    "iata": "TOE",
    "icao": "DTTZ"
  },
  {
    "name": "Niamtougou International Airport",
    "city": "Niatougou",
    "country": "Togo",
    "iata": "LRL",
    "icao": "DXNG"
  },
  {
    "name": "Lomé-Tokoin Airport",
    "city": "Lome",
    "country": "Togo",
    "iata": "LFW",
    "icao": "DXXX"
  },
  {
    "name": "Antwerp International Airport (Deurne)",
    "city": "Antwerp",
    "country": "Belgium",
    "iata": "ANR",
    "icao": "EBAW"
  },
  {
    "name": "Beauvechain Air Base",
    "city": "Beauvechain",
    "country": "Belgium",
    "iata": "NONE",
    "icao": "EBBE"
  },
  {
    "name": "Kleine Brogel Air Base",
    "city": "Kleine Brogel",
    "country": "Belgium",
    "iata": "NONE",
    "icao": "EBBL"
  },
  {
    "name": "Brussels Airport",
    "city": "Brussels",
    "country": "Belgium",
    "iata": "BRU",
    "icao": "EBBR"
  },
  {
    "name": "Jehonville Air Base",
    "city": "Bertrix",
    "country": "Belgium",
    "iata": "NONE",
    "icao": "EBBX"
  },
  {
    "name": "Brussels South Charleroi Airport",
    "city": "Charleroi",
    "country": "Belgium",
    "iata": "CRL",
    "icao": "EBCI"
  },
  {
    "name": "Chièvres Air Base",
    "city": "Chievres",
    "country": "Belgium",
    "iata": "NONE",
    "icao": "EBCV"
  },
  {
    "name": "Koksijde Air Base",
    "city": "Koksijde",
    "country": "Belgium",
    "iata": "NONE",
    "icao": "EBFN"
  },
  {
    "name": "Florennes Air Base",
    "city": "Florennes",
    "country": "Belgium",
    "iata": "NONE",
    "icao": "EBFS"
  },
  {
    "name": "Wevelgem Airport",
    "city": "Kortrijk-vevelgem",
    "country": "Belgium",
    "iata": "QKT",
    "icao": "EBKT"
  },
  {
    "name": "Liège Airport",
    "city": "Liege",
    "country": "Belgium",
    "iata": "LGG",
    "icao": "EBLG"
  },
  {
    "name": "Ostend-Bruges International Airport",
    "city": "Ostend",
    "country": "Belgium",
    "iata": "OST",
    "icao": "EBOS"
  },
  {
    "name": "Zutendaal Air Base",
    "city": "Zutendaal",
    "country": "Belgium",
    "iata": "NONE",
    "icao": "EBSL"
  },
  {
    "name": "Limburg Regional Airport",
    "city": "Sint-truiden",
    "country": "Belgium",
    "iata": "NONE",
    "icao": "EBST"
  },
  {
    "name": "Saint Hubert Air Base",
    "city": "St.-hubert",
    "country": "Belgium",
    "iata": "NONE",
    "icao": "EBSU"
  },
  {
    "name": "Ursel Air Base",
    "city": "Ursel",
    "country": "Belgium",
    "iata": "NONE",
    "icao": "EBUL"
  },
  {
    "name": "Weelde Air Base",
    "city": "Weelde",
    "country": "Belgium",
    "iata": "NONE",
    "icao": "EBWE"
  },
  {
    "name": "Oostmalle Air Base",
    "city": "Zoersel",
    "country": "Belgium",
    "iata": "NONE",
    "icao": "EBZR"
  },
  {
    "name": "Bautzen Airport",
    "city": "Bautzen",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDAB"
  },
  {
    "name": "Altenburg-Nobitz Airport",
    "city": "Altenburg",
    "country": "Germany",
    "iata": "AOC",
    "icao": "EDAC"
  },
  {
    "name": "Dessau Airport",
    "city": "Dessau",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDAD"
  },
  {
    "name": "Eisenhüttenstadt Airport",
    "city": "Eisenhuettenstadt",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDAE"
  },
  {
    "name": "Großenhain Airport",
    "city": "Suhl",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDAK"
  },
  {
    "name": "Merseburg Airport",
    "city": "Muehlhausen",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDAM"
  },
  {
    "name": "Halle-Oppin Airport",
    "city": "Halle",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDAQ"
  },
  {
    "name": "Riesa-Göhlis Airport",
    "city": "Riesa",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDAU"
  },
  {
    "name": "Rechlin-Lärz Airport",
    "city": "Rechlin-laerz",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDAX"
  },
  {
    "name": "Strausberg Airport",
    "city": "Strausberg",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDAY"
  },
  {
    "name": "Schönhagen Airport",
    "city": "Schoenhagen",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDAZ"
  },
  {
    "name": "Barth Airport",
    "city": "Barth",
    "country": "Germany",
    "iata": "BBH",
    "icao": "EDBH"
  },
  {
    "name": "Jena-Schöngleina Airport",
    "city": "Jena",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDBJ"
  },
  {
    "name": "Kyritz Airport",
    "city": "Kyritz",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDBK"
  },
  {
    "name": "Rothenburg/Görlitz Airport",
    "city": "Rothenburg/ol",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDBR"
  },
  {
    "name": "Anklam Airport",
    "city": "Anklam",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDCA"
  },
  {
    "name": "Cottbus-Drewitz Airport",
    "city": "Cottbus",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDCD"
  },
  {
    "name": "Kamenz Airport",
    "city": "Kamenz",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDCM"
  },
  {
    "name": "Berlin-Schönefeld International Airport",
    "city": "Berlin",
    "country": "Germany",
    "iata": "SXF",
    "icao": "EDDB"
  },
  {
    "name": "Dresden Airport",
    "city": "Dresden",
    "country": "Germany",
    "iata": "DRS",
    "icao": "EDDC"
  },
  {
    "name": "Erfurt Airport",
    "city": "Erfurt",
    "country": "Germany",
    "iata": "ERF",
    "icao": "EDDE"
  },
  {
    "name": "Frankfurt am Main International Airport",
    "city": "Frankfurt",
    "country": "Germany",
    "iata": "FRA",
    "icao": "EDDF"
  },
  {
    "name": "Münster Osnabrück Airport",
    "city": "Munster",
    "country": "Germany",
    "iata": "FMO",
    "icao": "EDDG"
  },
  {
    "name": "Hamburg Airport",
    "city": "Hamburg",
    "country": "Germany",
    "iata": "HAM",
    "icao": "EDDH"
  },
  {
    "name": "Berlin-Tempelhof International Airport",
    "city": "Berlin",
    "country": "Germany",
    "iata": "THF",
    "icao": "EDDI"
  },
  {
    "name": "Cologne Bonn Airport",
    "city": "Cologne",
    "country": "Germany",
    "iata": "CGN",
    "icao": "EDDK"
  },
  {
    "name": "Düsseldorf International Airport",
    "city": "Duesseldorf",
    "country": "Germany",
    "iata": "DUS",
    "icao": "EDDL"
  },
  {
    "name": "Munich International Airport",
    "city": "Munich",
    "country": "Germany",
    "iata": "MUC",
    "icao": "EDDM"
  },
  {
    "name": "Nuremberg Airport",
    "city": "Nuernberg",
    "country": "Germany",
    "iata": "NUE",
    "icao": "EDDN"
  },
  {
    "name": "Leipzig Halle Airport",
    "city": "Leipzig",
    "country": "Germany",
    "iata": "LEJ",
    "icao": "EDDP"
  },
  {
    "name": "Saarbrücken Airport",
    "city": "Saarbruecken",
    "country": "Germany",
    "iata": "SCN",
    "icao": "EDDR"
  },
  {
    "name": "Stuttgart Airport",
    "city": "Stuttgart",
    "country": "Germany",
    "iata": "STR",
    "icao": "EDDS"
  },
  {
    "name": "Berlin-Tegel International Airport",
    "city": "Berlin",
    "country": "Germany",
    "iata": "TXL",
    "icao": "EDDT"
  },
  {
    "name": "Hannover Airport",
    "city": "Hannover",
    "country": "Germany",
    "iata": "HAJ",
    "icao": "EDDV"
  },
  {
    "name": "Bremen Airport",
    "city": "Bremen",
    "country": "Germany",
    "iata": "BRE",
    "icao": "EDDW"
  },
  {
    "name": "Frankfurt-Egelsbach Airport",
    "city": "Egelsbach",
    "country": "Germany",
    "iata": "QEF",
    "icao": "EDFE"
  },
  {
    "name": "Frankfurt-Hahn Airport",
    "city": "Hahn",
    "country": "Germany",
    "iata": "HHN",
    "icao": "EDFH"
  },
  {
    "name": "Mannheim-City Airport",
    "city": "Mannheim",
    "country": "Germany",
    "iata": "MHG",
    "icao": "EDFM"
  },
  {
    "name": "Allendorf/Eder Airport",
    "city": "Allendorf",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDFQ"
  },
  {
    "name": "Worms Airport",
    "city": "Worms",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDFV"
  },
  {
    "name": "Mainz-Finthen Airport",
    "city": "Mainz",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDFZ"
  },
  {
    "name": "Eisenach-Kindel Airport",
    "city": "Eisenach",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDGE"
  },
  {
    "name": "Siegerland Airport",
    "city": "Siegerland",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDGS"
  },
  {
    "name": "Hamburg-Finkenwerder Airport",
    "city": "Hamburg",
    "country": "Germany",
    "iata": "XFW",
    "icao": "EDHI"
  },
  {
    "name": "Kiel-Holtenau Airport",
    "city": "Kiel",
    "country": "Germany",
    "iata": "KEL",
    "icao": "EDHK"
  },
  {
    "name": "Lübeck Blankensee Airport",
    "city": "Luebeck",
    "country": "Germany",
    "iata": "LBC",
    "icao": "EDHL"
  },
  {
    "name": "Flugplatz Dahlemer Binz",
    "city": "Dahlemer Binz",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDKV"
  },
  {
    "name": "Meinerzhagen Airport",
    "city": "Meinerzhagen",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDKZ"
  },
  {
    "name": "Arnsberg-Menden Airport",
    "city": "Arnsberg",
    "country": "Germany",
    "iata": "ZCA",
    "icao": "EDLA"
  },
  {
    "name": "Essen Mulheim Airport",
    "city": "Essen",
    "country": "Germany",
    "iata": "ESS",
    "icao": "EDLE"
  },
  {
    "name": "Bielefeld Airport",
    "city": "Bielefeld",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDLI"
  },
  {
    "name": "Mönchengladbach Airport",
    "city": "Moenchengladbach",
    "country": "Germany",
    "iata": "MGL",
    "icao": "EDLN"
  },
  {
    "name": "Paderborn Lippstadt Airport",
    "city": "Paderborn",
    "country": "Germany",
    "iata": "PAD",
    "icao": "EDLP"
  },
  {
    "name": "Stadtlohn-Vreden Airport",
    "city": "Stadtlohn",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDLS"
  },
  {
    "name": "Dortmund Airport",
    "city": "Dortmund",
    "country": "Germany",
    "iata": "DTM",
    "icao": "EDLW"
  },
  {
    "name": "Augsburg Airport",
    "city": "Augsburg",
    "country": "Germany",
    "iata": "AGB",
    "icao": "EDMA"
  },
  {
    "name": "Biberach a.d. Riß Airport",
    "city": "Biberach",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDMB"
  },
  {
    "name": "Eggenfelden Airport",
    "city": "Eggenfelden",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDME"
  },
  {
    "name": "Mindelheim-Mattsies Airport",
    "city": "Mindelheim",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDMN"
  },
  {
    "name": "Oberpfaffenhofen Airport",
    "city": "Oberpfaffenhofen",
    "country": "Germany",
    "iata": "OBF",
    "icao": "EDMO"
  },
  {
    "name": "Straubing Airport",
    "city": "Straubing",
    "country": "Germany",
    "iata": "RBM",
    "icao": "EDMS"
  },
  {
    "name": "Vilshofen Airport",
    "city": "Vilshofen",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDMV"
  },
  {
    "name": "Leutkirch-Unterzeil Airport",
    "city": "Leutkirch",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDNL"
  },
  {
    "name": "Friedrichshafen Airport",
    "city": "Friedrichshafen",
    "country": "Germany",
    "iata": "FDH",
    "icao": "EDNY"
  },
  {
    "name": "Schwerin Parchim Airport",
    "city": "Parchim",
    "country": "Germany",
    "iata": "SZW",
    "icao": "EDOP"
  },
  {
    "name": "Stendal-Borstel Airport",
    "city": "Stendal",
    "country": "Germany",
    "iata": "ZSN",
    "icao": "EDOV"
  },
  {
    "name": "Aalen-Heidenheim/Elchingen Airport",
    "city": "Aalen-heidenheim",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDPA"
  },
  {
    "name": "Bayreuth Airport",
    "city": "Bayreuth",
    "country": "Germany",
    "iata": "BYU",
    "icao": "EDQD"
  },
  {
    "name": "Burg Feuerstein Airport",
    "city": "Burg Feuerstein",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDQE"
  },
  {
    "name": "Hof-Plauen Airport",
    "city": "Hof",
    "country": "Germany",
    "iata": "HOQ",
    "icao": "EDQM"
  },
  {
    "name": "Haßfurt-Schweinfurt Airport",
    "city": "Hassfurt",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDQT"
  },
  {
    "name": "Koblenz-Winningen Airport",
    "city": "Koblenz",
    "country": "Germany",
    "iata": "ZNV",
    "icao": "EDRK"
  },
  {
    "name": "Trier-Föhren Airport",
    "city": "Trier",
    "country": "Germany",
    "iata": "ZQF",
    "icao": "EDRT"
  },
  {
    "name": "Speyer Airport",
    "city": "Speyer",
    "country": "Germany",
    "iata": "ZQC",
    "icao": "EDRY"
  },
  {
    "name": "Zweibrücken Airport",
    "city": "Zweibruecken",
    "country": "Germany",
    "iata": "ZQW",
    "icao": "EDRZ"
  },
  {
    "name": "Donaueschingen-Villingen Airport",
    "city": "Donaueschingen",
    "country": "Germany",
    "iata": "ZQL",
    "icao": "EDTD"
  },
  {
    "name": "Freiburg i. Br. Airport",
    "city": "Freiburg",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDTF"
  },
  {
    "name": "Mengen-Hohentengen Airport",
    "city": "Mengen",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDTM"
  },
  {
    "name": "Adolf Würth Airport",
    "city": "Schwaebisch Hall",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDTY"
  },
  {
    "name": "Finsterwalde/Schacksdorf Airport",
    "city": "Soest",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDUS"
  },
  {
    "name": "Braunschweig Wolfsburg Airport",
    "city": "Braunschweig",
    "country": "Germany",
    "iata": "BWE",
    "icao": "EDVE"
  },
  {
    "name": "Kassel-Calden Airport",
    "city": "Kassel",
    "country": "Germany",
    "iata": "KSF",
    "icao": "EDVK"
  },
  {
    "name": "Hildesheim Airport",
    "city": "Hildesheim",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDVM"
  },
  {
    "name": "Bremerhaven Airport",
    "city": "Bremerhaven",
    "country": "Germany",
    "iata": "BRV",
    "icao": "EDWB"
  },
  {
    "name": "Emden Airport",
    "city": "Emden",
    "country": "Germany",
    "iata": "EME",
    "icao": "EDWE"
  },
  {
    "name": "Leer-Papenburg Airport",
    "city": "Leer",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDWF"
  },
  {
    "name": "Wilhelmshaven-Mariensiel Airport",
    "city": "Wilhelmshaven",
    "country": "Germany",
    "iata": "WVN",
    "icao": "EDWI"
  },
  {
    "name": "Borkum Airport",
    "city": "Borkum",
    "country": "Germany",
    "iata": "BMK",
    "icao": "EDWR"
  },
  {
    "name": "Norderney Airport",
    "city": "Norderney",
    "country": "Germany",
    "iata": "NRD",
    "icao": "EDWY"
  },
  {
    "name": "Flensburg-Schäferhaus Airport",
    "city": "Flensburg",
    "country": "Germany",
    "iata": "FLF",
    "icao": "EDXF"
  },
  {
    "name": "Rendsburg-Schachtholm Airport",
    "city": "Rendsburg",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDXR"
  },
  {
    "name": "Westerland Sylt Airport",
    "city": "Westerland",
    "country": "Germany",
    "iata": "GWT",
    "icao": "EDXW"
  },
  {
    "name": "Ämari Air Base",
    "city": "Armari Air Force Base",
    "country": "Estonia",
    "iata": "NONE",
    "icao": "EEEI"
  },
  {
    "name": "Kärdla Airport",
    "city": "Kardla",
    "country": "Estonia",
    "iata": "KDL",
    "icao": "EEKA"
  },
  {
    "name": "Kuressaare Airport",
    "city": "Kuressaare",
    "country": "Estonia",
    "iata": "URE",
    "icao": "EEKE"
  },
  {
    "name": "Pärnu Airport",
    "city": "Parnu",
    "country": "Estonia",
    "iata": "EPU",
    "icao": "EEPU"
  },
  {
    "name": "Lennart Meri Tallinn Airport",
    "city": "Tallinn-ulemiste International",
    "country": "Estonia",
    "iata": "TLL",
    "icao": "EETN"
  },
  {
    "name": "Tartu Airport",
    "city": "Tartu",
    "country": "Estonia",
    "iata": "TAY",
    "icao": "EETU"
  },
  {
    "name": "Enontekio Airport",
    "city": "Enontekio",
    "country": "Finland",
    "iata": "ENF",
    "icao": "EFET"
  },
  {
    "name": "Eura Airport",
    "city": "Eura",
    "country": "Finland",
    "iata": "NONE",
    "icao": "EFEU"
  },
  {
    "name": "Halli Airport",
    "city": "Halli",
    "country": "Finland",
    "iata": "KEV",
    "icao": "EFHA"
  },
  {
    "name": "Helsinki Malmi Airport",
    "city": "Helsinki",
    "country": "Finland",
    "iata": "HEM",
    "icao": "EFHF"
  },
  {
    "name": "Helsinki Vantaa Airport",
    "city": "Helsinki",
    "country": "Finland",
    "iata": "HEL",
    "icao": "EFHK"
  },
  {
    "name": "Hameenkyro Airport",
    "city": "Hameenkyro",
    "country": "Finland",
    "iata": "NONE",
    "icao": "EFHM"
  },
  {
    "name": "Hanko Airport",
    "city": "Hanko",
    "country": "Finland",
    "iata": "NONE",
    "icao": "EFHN"
  },
  {
    "name": "Hyvinkää Airfield",
    "city": "Hyvinkaa",
    "country": "Finland",
    "iata": "HYV",
    "icao": "EFHV"
  },
  {
    "name": "Kiikala Airport",
    "city": "Kikala",
    "country": "Finland",
    "iata": "NONE",
    "icao": "EFIK"
  },
  {
    "name": "Immola Airport",
    "city": "Immola",
    "country": "Finland",
    "iata": "NONE",
    "icao": "EFIM"
  },
  {
    "name": "Kitee Airport",
    "city": "Kitee",
    "country": "Finland",
    "iata": "NONE",
    "icao": "EFIT"
  },
  {
    "name": "Ivalo Airport",
    "city": "Ivalo",
    "country": "Finland",
    "iata": "IVL",
    "icao": "EFIV"
  },
  {
    "name": "Joensuu Airport",
    "city": "Joensuu",
    "country": "Finland",
    "iata": "JOE",
    "icao": "EFJO"
  },
  {
    "name": "Jyvaskyla Airport",
    "city": "Jyvaskyla",
    "country": "Finland",
    "iata": "JYV",
    "icao": "EFJY"
  },
  {
    "name": "Kauhava Airport",
    "city": "Kauhava",
    "country": "Finland",
    "iata": "KAU",
    "icao": "EFKA"
  },
  {
    "name": "Kemi-Tornio Airport",
    "city": "Kemi",
    "country": "Finland",
    "iata": "KEM",
    "icao": "EFKE"
  },
  {
    "name": "Kajaani Airport",
    "city": "Kajaani",
    "country": "Finland",
    "iata": "KAJ",
    "icao": "EFKI"
  },
  {
    "name": "Kauhajoki Airport",
    "city": "Kauhajoki",
    "country": "Finland",
    "iata": "NONE",
    "icao": "EFKJ"
  },
  {
    "name": "Kokkola-Pietarsaari Airport",
    "city": "Kruunupyy",
    "country": "Finland",
    "iata": "KOK",
    "icao": "EFKK"
  },
  {
    "name": "Kemijarvi Airport",
    "city": "Kemijarvi",
    "country": "Finland",
    "iata": "NONE",
    "icao": "EFKM"
  },
  {
    "name": "Kuusamo Airport",
    "city": "Kuusamo",
    "country": "Finland",
    "iata": "KAO",
    "icao": "EFKS"
  },
  {
    "name": "Kittilä Airport",
    "city": "Kittila",
    "country": "Finland",
    "iata": "KTT",
    "icao": "EFKT"
  },
  {
    "name": "Kuopio Airport",
    "city": "Kuopio",
    "country": "Finland",
    "iata": "KUO",
    "icao": "EFKU"
  },
  {
    "name": "Lahti Vesivehmaa Airport",
    "city": "Vesivehmaa",
    "country": "Finland",
    "iata": "NONE",
    "icao": "EFLA"
  },
  {
    "name": "Lappeenranta Airport",
    "city": "Lappeenranta",
    "country": "Finland",
    "iata": "LPP",
    "icao": "EFLP"
  },
  {
    "name": "Mariehamn Airport",
    "city": "Mariehamn",
    "country": "Finland",
    "iata": "MHQ",
    "icao": "EFMA"
  },
  {
    "name": "Menkijarvi Airport",
    "city": "Menkijarvi",
    "country": "Finland",
    "iata": "NONE",
    "icao": "EFME"
  },
  {
    "name": "Mikkeli Airport",
    "city": "Mikkeli",
    "country": "Finland",
    "iata": "MIK",
    "icao": "EFMI"
  },
  {
    "name": "Nummela Airport",
    "city": "Nummela",
    "country": "Finland",
    "iata": "NONE",
    "icao": "EFNU"
  },
  {
    "name": "Oulu Airport",
    "city": "Oulu",
    "country": "Finland",
    "iata": "OUL",
    "icao": "EFOU"
  },
  {
    "name": "Piikajarvi Airport",
    "city": "Piikajarvi",
    "country": "Finland",
    "iata": "NONE",
    "icao": "EFPI"
  },
  {
    "name": "Pori Airport",
    "city": "Pori",
    "country": "Finland",
    "iata": "POR",
    "icao": "EFPO"
  },
  {
    "name": "Pudasjärvi Airport",
    "city": "Pudasjarvi",
    "country": "Finland",
    "iata": "NONE",
    "icao": "EFPU"
  },
  {
    "name": "Pyhäsalmi Airport",
    "city": "Pyhasalmi",
    "country": "Finland",
    "iata": "NONE",
    "icao": "EFPY"
  },
  {
    "name": "Raahe Pattijoki Airport",
    "city": "Pattijoki",
    "country": "Finland",
    "iata": "NONE",
    "icao": "EFRH"
  },
  {
    "name": "Rantasalmi Airport",
    "city": "Rantasalmi",
    "country": "Finland",
    "iata": "NONE",
    "icao": "EFRN"
  },
  {
    "name": "Rovaniemi Airport",
    "city": "Rovaniemi",
    "country": "Finland",
    "iata": "RVN",
    "icao": "EFRO"
  },
  {
    "name": "Rayskala Airport",
    "city": "Rayskala",
    "country": "Finland",
    "iata": "NONE",
    "icao": "EFRY"
  },
  {
    "name": "Savonlinna Airport",
    "city": "Savonlinna",
    "country": "Finland",
    "iata": "SVL",
    "icao": "EFSA"
  },
  {
    "name": "Selanpaa Airport",
    "city": "Selanpaa",
    "country": "Finland",
    "iata": "NONE",
    "icao": "EFSE"
  },
  {
    "name": "Sodankyla Airport",
    "city": "Sodankyla",
    "country": "Finland",
    "iata": "SOT",
    "icao": "EFSO"
  },
  {
    "name": "Tampere-Pirkkala Airport",
    "city": "Tampere",
    "country": "Finland",
    "iata": "TMP",
    "icao": "EFTP"
  },
  {
    "name": "Teisko Airport",
    "city": "Teisko",
    "country": "Finland",
    "iata": "NONE",
    "icao": "EFTS"
  },
  {
    "name": "Turku Airport",
    "city": "Turku",
    "country": "Finland",
    "iata": "TKU",
    "icao": "EFTU"
  },
  {
    "name": "Utti Air Base",
    "city": "Utti",
    "country": "Finland",
    "iata": "QVY",
    "icao": "EFUT"
  },
  {
    "name": "Vaasa Airport",
    "city": "Vaasa",
    "country": "Finland",
    "iata": "VAA",
    "icao": "EFVA"
  },
  {
    "name": "Varkaus Airport",
    "city": "Varkaus",
    "country": "Finland",
    "iata": "VRK",
    "icao": "EFVR"
  },
  {
    "name": "Ylivieska Airfield",
    "city": "Ylivieska-raudaskyla",
    "country": "Finland",
    "iata": "NONE",
    "icao": "EFYL"
  },
  {
    "name": "Belfast International Airport",
    "city": "Belfast",
    "country": "United Kingdom",
    "iata": "BFS",
    "icao": "EGAA"
  },
  {
    "name": "St Angelo Airport",
    "city": "Enniskillen",
    "country": "United Kingdom",
    "iata": "ENK",
    "icao": "EGAB"
  },
  {
    "name": "George Best Belfast City Airport",
    "city": "Belfast",
    "country": "United Kingdom",
    "iata": "BHD",
    "icao": "EGAC"
  },
  {
    "name": "City of Derry Airport",
    "city": "Londonderry",
    "country": "United Kingdom",
    "iata": "LDY",
    "icao": "EGAE"
  },
  {
    "name": "Birmingham International Airport",
    "city": "Birmingham",
    "country": "United Kingdom",
    "iata": "BHX",
    "icao": "EGBB"
  },
  {
    "name": "Coventry Airport",
    "city": "Coventry",
    "country": "United Kingdom",
    "iata": "CVT",
    "icao": "EGBE"
  },
  {
    "name": "Leicester Airport",
    "city": "Leicester",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGBG"
  },
  {
    "name": "Gloucestershire Airport",
    "city": "Golouchestershire",
    "country": "United Kingdom",
    "iata": "GLO",
    "icao": "EGBJ"
  },
  {
    "name": "Wolverhampton Halfpenny Green Airport",
    "city": "Halfpenny Green",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGBO"
  },
  {
    "name": "Cotswold Airport",
    "city": "Pailton",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGBP"
  },
  {
    "name": "Turweston Airport",
    "city": "Turweston",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGBT"
  },
  {
    "name": "Wellesbourne Mountford Airport",
    "city": "Wellesbourne",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGBW"
  },
  {
    "name": "Manchester Airport",
    "city": "Manchester",
    "country": "United Kingdom",
    "iata": "MAN",
    "icao": "EGCC"
  },
  {
    "name": "Manchester Woodford Airport",
    "city": "Woodfort",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGCD"
  },
  {
    "name": "Royal Marines Base Chivenor Airport",
    "city": "Chivenor",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGDC"
  },
  {
    "name": "Newquay Cornwall Airport",
    "city": "Newquai",
    "country": "United Kingdom",
    "iata": "NQY",
    "icao": "EGHQ"
  },
  {
    "name": "RAF Lyneham",
    "city": "Lyneham",
    "country": "United Kingdom",
    "iata": "LYE",
    "icao": "EGDL"
  },
  {
    "name": "MoD Boscombe Down Airport",
    "city": "Boscombe Down",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGDM"
  },
  {
    "name": "RNAS Culdrose",
    "city": "Culdrose",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGDR"
  },
  {
    "name": "MOD St. Athan",
    "city": "St. Athan",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGDX"
  },
  {
    "name": "RNAS Yeovilton",
    "city": "Yeovilton",
    "country": "United Kingdom",
    "iata": "YEO",
    "icao": "EGDY"
  },
  {
    "name": "Haverfordwest Airport",
    "city": "Haverfordwest",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGFE"
  },
  {
    "name": "Cardiff International Airport",
    "city": "Cardiff",
    "country": "United Kingdom",
    "iata": "CWL",
    "icao": "EGFF"
  },
  {
    "name": "Swansea Airport",
    "city": "Swansea",
    "country": "United Kingdom",
    "iata": "SWS",
    "icao": "EGFH"
  },
  {
    "name": "Bristol Airport",
    "city": "Bristol",
    "country": "United Kingdom",
    "iata": "BRS",
    "icao": "EGGD"
  },
  {
    "name": "Liverpool John Lennon Airport",
    "city": "Liverpool",
    "country": "United Kingdom",
    "iata": "LPL",
    "icao": "EGGP"
  },
  {
    "name": "London Luton Airport",
    "city": "London",
    "country": "United Kingdom",
    "iata": "LTN",
    "icao": "EGGW"
  },
  {
    "name": "Plymouth City Airport",
    "city": "Plymouth",
    "country": "United Kingdom",
    "iata": "PLH",
    "icao": "EGHD"
  },
  {
    "name": "Bournemouth Airport",
    "city": "Bournemouth",
    "country": "United Kingdom",
    "iata": "BOH",
    "icao": "EGHH"
  },
  {
    "name": "Southampton Airport",
    "city": "Southampton",
    "country": "United Kingdom",
    "iata": "SOU",
    "icao": "EGHI"
  },
  {
    "name": "Lasham Airport",
    "city": "Lasham",
    "country": "United Kingdom",
    "iata": "QLA",
    "icao": "EGHL"
  },
  {
    "name": "Alderney Airport",
    "city": "Alderney",
    "country": "Guernsey",
    "iata": "ACI",
    "icao": "EGJA"
  },
  {
    "name": "Guernsey Airport",
    "city": "Guernsey",
    "country": "Guernsey",
    "iata": "GCI",
    "icao": "EGJB"
  },
  {
    "name": "Jersey Airport",
    "city": "Jersey",
    "country": "Jersey",
    "iata": "JER",
    "icao": "EGJJ"
  },
  {
    "name": "Shoreham Airport",
    "city": "Shoreham By Sea",
    "country": "United Kingdom",
    "iata": "ESH",
    "icao": "EGKA"
  },
  {
    "name": "London Biggin Hill Airport",
    "city": "Biggin Hill",
    "country": "United Kingdom",
    "iata": "BQH",
    "icao": "EGKB"
  },
  {
    "name": "London Gatwick Airport",
    "city": "London",
    "country": "United Kingdom",
    "iata": "LGW",
    "icao": "EGKK"
  },
  {
    "name": "London City Airport",
    "city": "London",
    "country": "United Kingdom",
    "iata": "LCY",
    "icao": "EGLC"
  },
  {
    "name": "Farnborough Airport",
    "city": "Farnborough",
    "country": "United Kingdom",
    "iata": "FAB",
    "icao": "EGLF"
  },
  {
    "name": "Chalgrove Airport",
    "city": "Chalsgrove",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGLJ"
  },
  {
    "name": "Blackbushe Airport",
    "city": "Blackbushe",
    "country": "United Kingdom",
    "iata": "BBS",
    "icao": "EGLK"
  },
  {
    "name": "London Heathrow Airport",
    "city": "London",
    "country": "United Kingdom",
    "iata": "LHR",
    "icao": "EGLL"
  },
  {
    "name": "Southend Airport",
    "city": "Southend",
    "country": "United Kingdom",
    "iata": "SEN",
    "icao": "EGMC"
  },
  {
    "name": "Lydd Airport",
    "city": "Lydd",
    "country": "United Kingdom",
    "iata": "LYX",
    "icao": "EGMD"
  },
  {
    "name": "Kent International Airport",
    "city": "Manston",
    "country": "United Kingdom",
    "iata": "MSE",
    "icao": "EGMH"
  },
  {
    "name": "Brough Airport",
    "city": "Brough",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGNB"
  },
  {
    "name": "Carlisle Airport",
    "city": "Carlisle",
    "country": "United Kingdom",
    "iata": "CAX",
    "icao": "EGNC"
  },
  {
    "name": "Retford Gamston Airport",
    "city": "Repton",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGNE"
  },
  {
    "name": "Blackpool International Airport",
    "city": "Blackpool",
    "country": "United Kingdom",
    "iata": "BLK",
    "icao": "EGNH"
  },
  {
    "name": "Humberside Airport",
    "city": "Humberside",
    "country": "United Kingdom",
    "iata": "HUY",
    "icao": "EGNJ"
  },
  {
    "name": "Barrow Walney Island Airport",
    "city": "Barrow Island",
    "country": "United Kingdom",
    "iata": "BWF",
    "icao": "EGNL"
  },
  {
    "name": "Leeds Bradford Airport",
    "city": "Leeds",
    "country": "United Kingdom",
    "iata": "LBA",
    "icao": "EGNM"
  },
  {
    "name": "Warton Airport",
    "city": "Warton",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGNO"
  },
  {
    "name": "Hawarden Airport",
    "city": "Hawarden",
    "country": "United Kingdom",
    "iata": "CEG",
    "icao": "EGNR"
  },
  {
    "name": "Isle of Man Airport",
    "city": "Isle Of Man",
    "country": "Isle of Man",
    "iata": "IOM",
    "icao": "EGNS"
  },
  {
    "name": "Newcastle Airport",
    "city": "Newcastle",
    "country": "United Kingdom",
    "iata": "NCL",
    "icao": "EGNT"
  },
  {
    "name": "Durham Tees Valley Airport",
    "city": "Teesside",
    "country": "United Kingdom",
    "iata": "MME",
    "icao": "EGNV"
  },
  {
    "name": "East Midlands Airport",
    "city": "East Midlands",
    "country": "United Kingdom",
    "iata": "EMA",
    "icao": "EGNX"
  },
  {
    "name": "Llanbedr Airport",
    "city": "Llanbedr",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGOD"
  },
  {
    "name": "RAF Ternhill",
    "city": "Ternhill",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGOE"
  },
  {
    "name": "RAF Shawbury",
    "city": "Shawbury",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGOS"
  },
  {
    "name": "RAF Woodvale",
    "city": "Woodvale",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGOW"
  },
  {
    "name": "Kirkwall Airport",
    "city": "Kirkwall",
    "country": "United Kingdom",
    "iata": "KOI",
    "icao": "EGPA"
  },
  {
    "name": "Sumburgh Airport",
    "city": "Sumburgh",
    "country": "United Kingdom",
    "iata": "LSI",
    "icao": "EGPB"
  },
  {
    "name": "Wick Airport",
    "city": "Wick",
    "country": "United Kingdom",
    "iata": "WIC",
    "icao": "EGPC"
  },
  {
    "name": "Aberdeen Dyce Airport",
    "city": "Aberdeen",
    "country": "United Kingdom",
    "iata": "ABZ",
    "icao": "EGPD"
  },
  {
    "name": "Inverness Airport",
    "city": "Inverness",
    "country": "United Kingdom",
    "iata": "INV",
    "icao": "EGPE"
  },
  {
    "name": "Glasgow International Airport",
    "city": "Glasgow",
    "country": "United Kingdom",
    "iata": "GLA",
    "icao": "EGPF"
  },
  {
    "name": "Edinburgh Airport",
    "city": "Edinburgh",
    "country": "United Kingdom",
    "iata": "EDI",
    "icao": "EGPH"
  },
  {
    "name": "Islay Airport",
    "city": "Islay",
    "country": "United Kingdom",
    "iata": "ILY",
    "icao": "EGPI"
  },
  {
    "name": "Glasgow Prestwick Airport",
    "city": "Prestwick",
    "country": "United Kingdom",
    "iata": "PIK",
    "icao": "EGPK"
  },
  {
    "name": "Benbecula Airport",
    "city": "Benbecula",
    "country": "United Kingdom",
    "iata": "BEB",
    "icao": "EGPL"
  },
  {
    "name": "Scatsta Airport",
    "city": "Scatsta",
    "country": "United Kingdom",
    "iata": "SCS",
    "icao": "EGPM"
  },
  {
    "name": "Dundee Airport",
    "city": "Dundee",
    "country": "United Kingdom",
    "iata": "DND",
    "icao": "EGPN"
  },
  {
    "name": "Stornoway Airport",
    "city": "Stornoway",
    "country": "United Kingdom",
    "iata": "SYY",
    "icao": "EGPO"
  },
  {
    "name": "Tiree Airport",
    "city": "Tiree",
    "country": "United Kingdom",
    "iata": "TRE",
    "icao": "EGPU"
  },
  {
    "name": "RAF Leuchars",
    "city": "Leuchars",
    "country": "United Kingdom",
    "iata": "ADX",
    "icao": "EGQL"
  },
  {
    "name": "RAF Lossiemouth",
    "city": "Lossiemouth",
    "country": "United Kingdom",
    "iata": "LMO",
    "icao": "EGQS"
  },
  {
    "name": "Cambridge Airport",
    "city": "Cambridge",
    "country": "United Kingdom",
    "iata": "CBG",
    "icao": "EGSC"
  },
  {
    "name": "Peterborough Business Airport",
    "city": "Peterborough",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGSF"
  },
  {
    "name": "Norwich International Airport",
    "city": "Norwich",
    "country": "United Kingdom",
    "iata": "NWI",
    "icao": "EGSH"
  },
  {
    "name": "London Stansted Airport",
    "city": "London",
    "country": "United Kingdom",
    "iata": "STN",
    "icao": "EGSS"
  },
  {
    "name": "North Weald Airport",
    "city": "North Weald",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGSX"
  },
  {
    "name": "Sheffield City Heliport",
    "city": "Fowlmere",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGSY"
  },
  {
    "name": "Cranfield Airport",
    "city": "Cranfield",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGTC"
  },
  {
    "name": "Exeter International Airport",
    "city": "Exeter",
    "country": "United Kingdom",
    "iata": "EXT",
    "icao": "EGTE"
  },
  {
    "name": "Bristol Filton Airport",
    "city": "Bristol",
    "country": "United Kingdom",
    "iata": "FZO",
    "icao": "EGTG"
  },
  {
    "name": "Oxford (Kidlington) Airport",
    "city": "Oxford",
    "country": "United Kingdom",
    "iata": "OXF",
    "icao": "EGTK"
  },
  {
    "name": "RAF Benson",
    "city": "Benson",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGUB"
  },
  {
    "name": "RAF Lakenheath",
    "city": "Lakenheath",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGUL"
  },
  {
    "name": "RAF Mildenhall",
    "city": "Mildenhall",
    "country": "United Kingdom",
    "iata": "MHZ",
    "icao": "EGUN"
  },
  {
    "name": "RAF Wattisham",
    "city": "Wattisham",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGUW"
  },
  {
    "name": "RAF Wyton",
    "city": "Wyton",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGUY"
  },
  {
    "name": "RAF Fairford",
    "city": "Fairford",
    "country": "United Kingdom",
    "iata": "FFD",
    "icao": "EGVA"
  },
  {
    "name": "RAF Brize Norton",
    "city": "Brize Norton",
    "country": "United Kingdom",
    "iata": "BZZ",
    "icao": "EGVN"
  },
  {
    "name": "RAF Odiham",
    "city": "Odiham",
    "country": "United Kingdom",
    "iata": "ODH",
    "icao": "EGVO"
  },
  {
    "name": "DCAE Cosford Air Base",
    "city": "Cosford",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGWC"
  },
  {
    "name": "RAF Northolt",
    "city": "Northolt",
    "country": "United Kingdom",
    "iata": "NHT",
    "icao": "EGWU"
  },
  {
    "name": "RAF Coningsby",
    "city": "Coningsby",
    "country": "United Kingdom",
    "iata": "QCY",
    "icao": "EGXC"
  },
  {
    "name": "RAF Dishforth",
    "city": "Dishforth",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGXD"
  },
  {
    "name": "Leeming Airport",
    "city": "Leeming",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGXE"
  },
  {
    "name": "Leeds East Airport",
    "city": "Church Fenton",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGXG"
  },
  {
    "name": "RAF Honington",
    "city": "Honington",
    "country": "United Kingdom",
    "iata": "BEQ",
    "icao": "EGXH"
  },
  {
    "name": "RAF Cottesmore",
    "city": "Cottesmore",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGXJ"
  },
  {
    "name": "RAF Scampton",
    "city": "Scampton",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGXP"
  },
  {
    "name": "RAF Wittering",
    "city": "Wittering",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGXT"
  },
  {
    "name": "RAF Linton-On-Ouse",
    "city": "Linton-on-ouse",
    "country": "United Kingdom",
    "iata": "HRT",
    "icao": "EGXU"
  },
  {
    "name": "RAF Waddington",
    "city": "Waddington",
    "country": "United Kingdom",
    "iata": "WTN",
    "icao": "EGXW"
  },
  {
    "name": "RAF Topcliffe",
    "city": "Topcliffe",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGXZ"
  },
  {
    "name": "RAF Cranwell",
    "city": "Cranwell",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGYD"
  },
  {
    "name": "RAF Barkston Heath",
    "city": "Barkston Heath",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGYE"
  },
  {
    "name": "RAF Marham",
    "city": "Marham",
    "country": "United Kingdom",
    "iata": "KNF",
    "icao": "EGYM"
  },
  {
    "name": "Mount Pleasant Airport",
    "city": "Mount Pleasant",
    "country": "Falkland Islands",
    "iata": "MPN",
    "icao": "EGYP"
  },
  {
    "name": "Amsterdam Airport Schiphol",
    "city": "Amsterdam",
    "country": "Netherlands",
    "iata": "AMS",
    "icao": "EHAM"
  },
  {
    "name": "Budel Airport",
    "city": "Weert",
    "country": "Netherlands",
    "iata": "NONE",
    "icao": "EHBD"
  },
  {
    "name": "Maastricht Aachen Airport",
    "city": "Maastricht",
    "country": "Netherlands",
    "iata": "MST",
    "icao": "EHBK"
  },
  {
    "name": "Deelen Air Base",
    "city": "Deelen",
    "country": "Netherlands",
    "iata": "NONE",
    "icao": "EHDL"
  },
  {
    "name": "Drachten Airport",
    "city": "Drachten",
    "country": "Netherlands",
    "iata": "NONE",
    "icao": "EHDR"
  },
  {
    "name": "Eindhoven Airport",
    "city": "Eindhoven",
    "country": "Netherlands",
    "iata": "EIN",
    "icao": "EHEH"
  },
  {
    "name": "Eelde Airport",
    "city": "Groningen",
    "country": "Netherlands",
    "iata": "GRQ",
    "icao": "EHGG"
  },
  {
    "name": "Gilze Rijen Air Base",
    "city": "Gilze-rijen",
    "country": "Netherlands",
    "iata": "NONE",
    "icao": "EHGR"
  },
  {
    "name": "De Kooy Airport",
    "city": "De Kooy",
    "country": "Netherlands",
    "iata": "DHR",
    "icao": "EHKD"
  },
  {
    "name": "Lelystad Airport",
    "city": "Lelystad",
    "country": "Netherlands",
    "iata": "LEY",
    "icao": "EHLE"
  },
  {
    "name": "Leeuwarden Air Base",
    "city": "Leeuwarden",
    "country": "Netherlands",
    "iata": "LWR",
    "icao": "EHLW"
  },
  {
    "name": "Rotterdam The Hague Airport",
    "city": "Rotterdam",
    "country": "Netherlands",
    "iata": "RTM",
    "icao": "EHRD"
  },
  {
    "name": "Soesterberg Air Base",
    "city": "Soesterberg",
    "country": "Netherlands",
    "iata": "UTC",
    "icao": "EHSB"
  },
  {
    "name": "Twente Airfield",
    "city": "Enschede",
    "country": "Netherlands",
    "iata": "ENS",
    "icao": "EHTW"
  },
  {
    "name": "Valkenburg Naval Air Base",
    "city": "Valkenburg",
    "country": "Netherlands",
    "iata": "LID",
    "icao": "EHVB"
  },
  {
    "name": "Woensdrecht Air Base",
    "city": "Woensdrecht",
    "country": "Netherlands",
    "iata": "WOE",
    "icao": "EHWO"
  },
  {
    "name": "Cork Airport",
    "city": "Cork",
    "country": "Ireland",
    "iata": "ORK",
    "icao": "EICK"
  },
  {
    "name": "Galway Airport",
    "city": "Galway",
    "country": "Ireland",
    "iata": "GWY",
    "icao": "EICM"
  },
  {
    "name": "Dublin Airport",
    "city": "Dublin",
    "country": "Ireland",
    "iata": "DUB",
    "icao": "EIDW"
  },
  {
    "name": "Ireland West Knock Airport",
    "city": "Connaught",
    "country": "Ireland",
    "iata": "NOC",
    "icao": "EIKN"
  },
  {
    "name": "Kerry Airport",
    "city": "Kerry",
    "country": "Ireland",
    "iata": "KIR",
    "icao": "EIKY"
  },
  {
    "name": "Casement Air Base",
    "city": "Casement",
    "country": "Ireland",
    "iata": "NONE",
    "icao": "EIME"
  },
  {
    "name": "Shannon Airport",
    "city": "Shannon",
    "country": "Ireland",
    "iata": "SNN",
    "icao": "EINN"
  },
  {
    "name": "Sligo Airport",
    "city": "Sligo",
    "country": "Ireland",
    "iata": "SXL",
    "icao": "EISG"
  },
  {
    "name": "Waterford Airport",
    "city": "Waterford",
    "country": "Ireland",
    "iata": "WAT",
    "icao": "EIWF"
  },
  {
    "name": "Aarhus Airport",
    "city": "Aarhus",
    "country": "Denmark",
    "iata": "AAR",
    "icao": "EKAH"
  },
  {
    "name": "Billund Airport",
    "city": "Billund",
    "country": "Denmark",
    "iata": "BLL",
    "icao": "EKBI"
  },
  {
    "name": "Copenhagen Kastrup Airport",
    "city": "Copenhagen",
    "country": "Denmark",
    "iata": "CPH",
    "icao": "EKCH"
  },
  {
    "name": "Esbjerg Airport",
    "city": "Esbjerg",
    "country": "Denmark",
    "iata": "EBJ",
    "icao": "EKEB"
  },
  {
    "name": "Grønholt Hillerød Airport",
    "city": "Gronholt",
    "country": "Denmark",
    "iata": "NONE",
    "icao": "EKGH"
  },
  {
    "name": "Karup Airport",
    "city": "Karup",
    "country": "Denmark",
    "iata": "KRP",
    "icao": "EKKA"
  },
  {
    "name": "Læsø Airport",
    "city": "Laeso",
    "country": "Denmark",
    "iata": "NONE",
    "icao": "EKLS"
  },
  {
    "name": "Lolland Falster Maribo Airport",
    "city": "Maribo",
    "country": "Denmark",
    "iata": "NONE",
    "icao": "EKMB"
  },
  {
    "name": "Odense Airport",
    "city": "Odense",
    "country": "Denmark",
    "iata": "ODE",
    "icao": "EKOD"
  },
  {
    "name": "Kruså-Padborg Airport",
    "city": "Krusa-padborg",
    "country": "Denmark",
    "iata": "NONE",
    "icao": "EKPB"
  },
  {
    "name": "Copenhagen Roskilde Airport",
    "city": "Copenhagen",
    "country": "Denmark",
    "iata": "RKE",
    "icao": "EKRK"
  },
  {
    "name": "Bornholm Airport",
    "city": "Ronne",
    "country": "Denmark",
    "iata": "RNN",
    "icao": "EKRN"
  },
  {
    "name": "Sønderborg Airport",
    "city": "Soenderborg",
    "country": "Denmark",
    "iata": "SGD",
    "icao": "EKSB"
  },
  {
    "name": "Skrydstrup Air Base",
    "city": "Skrydstrup",
    "country": "Denmark",
    "iata": "SKS",
    "icao": "EKSP"
  },
  {
    "name": "Skive Airport",
    "city": "Skive",
    "country": "Denmark",
    "iata": "NONE",
    "icao": "EKSV"
  },
  {
    "name": "Thisted Airport",
    "city": "Thisted",
    "country": "Denmark",
    "iata": "TED",
    "icao": "EKTS"
  },
  {
    "name": "Kolding Vamdrup Airport",
    "city": "Kolding",
    "country": "Denmark",
    "iata": "NONE",
    "icao": "EKVD"
  },
  {
    "name": "Vagar Airport",
    "city": "Vagar",
    "country": "Faroe Islands",
    "iata": "FAE",
    "icao": "EKVG"
  },
  {
    "name": "Vesthimmerlands Flyveplads",
    "city": "Vesthimmerland",
    "country": "Denmark",
    "iata": "NONE",
    "icao": "EKVH"
  },
  {
    "name": "Stauning Airport",
    "city": "Stauning",
    "country": "Denmark",
    "iata": "STA",
    "icao": "EKVJ"
  },
  {
    "name": "Aalborg Airport",
    "city": "Aalborg",
    "country": "Denmark",
    "iata": "AAL",
    "icao": "EKYT"
  },
  {
    "name": "Luxembourg-Findel International Airport",
    "city": "Luxemburg",
    "country": "Luxembourg",
    "iata": "LUX",
    "icao": "ELLX"
  },
  {
    "name": "Ålesund Airport",
    "city": "Alesund",
    "country": "Norway",
    "iata": "AES",
    "icao": "ENAL"
  },
  {
    "name": "Andøya Airport",
    "city": "Andoya",
    "country": "Norway",
    "iata": "ANX",
    "icao": "ENAN"
  },
  {
    "name": "Alta Airport",
    "city": "Alta",
    "country": "Norway",
    "iata": "ALF",
    "icao": "ENAT"
  },
  {
    "name": "Bømoen Airport",
    "city": "Voss",
    "country": "Norway",
    "iata": "NONE",
    "icao": "ENBM"
  },
  {
    "name": "Brønnøysund Airport",
    "city": "Bronnoysund",
    "country": "Norway",
    "iata": "BNN",
    "icao": "ENBN"
  },
  {
    "name": "Bodø Airport",
    "city": "Bodo",
    "country": "Norway",
    "iata": "BOO",
    "icao": "ENBO"
  },
  {
    "name": "Bergen Airport Flesland",
    "city": "Bergen",
    "country": "Norway",
    "iata": "BGO",
    "icao": "ENBR"
  },
  {
    "name": "Båtsfjord Airport",
    "city": "Batsfjord",
    "country": "Norway",
    "iata": "BJF",
    "icao": "ENBS"
  },
  {
    "name": "Kristiansand Airport",
    "city": "Kristiansand",
    "country": "Norway",
    "iata": "KRS",
    "icao": "ENCN"
  },
  {
    "name": "Geilo Airport Dagali",
    "city": "Geilo",
    "country": "Norway",
    "iata": "NONE",
    "icao": "ENDI"
  },
  {
    "name": "Bardufoss Airport",
    "city": "Bardufoss",
    "country": "Norway",
    "iata": "BDU",
    "icao": "ENDU"
  },
  {
    "name": "Harstad/Narvik Airport, Evenes",
    "city": "Harstad/Narvik",
    "country": "Norway",
    "iata": "EVE",
    "icao": null
  },
  {
    "name": "Leirin Airport",
    "city": "Fagernes",
    "country": "Norway",
    "iata": "VDB",
    "icao": "ENFG"
  },
  {
    "name": "Florø Airport",
    "city": "Floro",
    "country": "Norway",
    "iata": "FRO",
    "icao": "ENFL"
  },
  {
    "name": "Oslo Gardermoen Airport",
    "city": "Oslo",
    "country": "Norway",
    "iata": "OSL",
    "icao": "ENGM"
  },
  {
    "name": "Haugesund Airport",
    "city": "Haugesund",
    "country": "Norway",
    "iata": "HAU",
    "icao": "ENHD"
  },
  {
    "name": "Hasvik Airport",
    "city": "Hasvik",
    "country": "Norway",
    "iata": "HAA",
    "icao": "ENHK"
  },
  {
    "name": "Kristiansund Airport (Kvernberget)",
    "city": "Kristiansund",
    "country": "Norway",
    "iata": "KSU",
    "icao": "ENKB"
  },
  {
    "name": "Kjeller Airport",
    "city": "Kjeller",
    "country": "Norway",
    "iata": "NONE",
    "icao": "ENKJ"
  },
  {
    "name": "Kirkenes Airport (Høybuktmoen)",
    "city": "Kirkenes",
    "country": "Norway",
    "iata": "KKN",
    "icao": "ENKR"
  },
  {
    "name": "Lista Airport",
    "city": "Farsund",
    "country": "Norway",
    "iata": "FAN",
    "icao": "ENLI"
  },
  {
    "name": "Molde Airport",
    "city": "Molde",
    "country": "Norway",
    "iata": "MOL",
    "icao": "ENML"
  },
  {
    "name": "Mosjøen Airport (Kjærstad)",
    "city": "Mosjoen",
    "country": "Norway",
    "iata": "MJF",
    "icao": "ENMS"
  },
  {
    "name": "Banak Airport",
    "city": "Lakselv",
    "country": "Norway",
    "iata": "LKL",
    "icao": "ENNA"
  },
  {
    "name": "Notodden Airport",
    "city": "Notodden",
    "country": "Norway",
    "iata": "NTB",
    "icao": "ENNO"
  },
  {
    "name": "Ørland Airport",
    "city": "Orland",
    "country": "Norway",
    "iata": "OLA",
    "icao": "ENOL"
  },
  {
    "name": "Røros Airport",
    "city": "Roros",
    "country": "Norway",
    "iata": "RRS",
    "icao": "ENRO"
  },
  {
    "name": "Moss-Rygge Airport",
    "city": "Rygge",
    "country": "Norway",
    "iata": "RYG",
    "icao": "ENRY"
  },
  {
    "name": "Svalbard Airport, Longyear",
    "city": "Svalbard",
    "country": "Norway",
    "iata": "LYR",
    "icao": null
  },
  {
    "name": "Skien Airport",
    "city": "Skien",
    "country": "Norway",
    "iata": "SKE",
    "icao": "ENSN"
  },
  {
    "name": "Stord Airport",
    "city": "Stord",
    "country": "Norway",
    "iata": "SRP",
    "icao": "ENSO"
  },
  {
    "name": "Sandnessjøen Airport (Stokka)",
    "city": "Sandnessjoen",
    "country": "Norway",
    "iata": "SSJ",
    "icao": "ENST"
  },
  {
    "name": "Tromsø Airport",
    "city": "Tromso",
    "country": "Norway",
    "iata": "TOS",
    "icao": "ENTC"
  },
  {
    "name": "Sandefjord Airport, Torp",
    "city": "Sandefjord",
    "country": "Norway",
    "iata": "TRF",
    "icao": null
  },
  {
    "name": "Trondheim Airport Værnes",
    "city": "Trondheim",
    "country": "Norway",
    "iata": "TRD",
    "icao": "ENVA"
  },
  {
    "name": "Stavanger Airport Sola",
    "city": "Stavanger",
    "country": "Norway",
    "iata": "SVG",
    "icao": "ENZV"
  },
  {
    "name": "Babice Airport",
    "city": "Warsaw",
    "country": "Poland",
    "iata": "NONE",
    "icao": "EPBC"
  },
  {
    "name": "Gdańsk Lech Wałęsa Airport",
    "city": "Gdansk",
    "country": "Poland",
    "iata": "GDN",
    "icao": "EPGD"
  },
  {
    "name": "John Paul II International Airport Kraków-Balice Airport",
    "city": "Krakow",
    "country": "Poland",
    "iata": "KRK",
    "icao": "EPKK"
  },
  {
    "name": "Muchowiec Airport",
    "city": "Katowice",
    "country": "Poland",
    "iata": "NONE",
    "icao": "EPKM"
  },
  {
    "name": "Katowice International Airport",
    "city": "Katowice",
    "country": "Poland",
    "iata": "KTW",
    "icao": "EPKT"
  },
  {
    "name": "Mielec Airport",
    "city": "Mielec",
    "country": "Poland",
    "iata": "NONE",
    "icao": "EPML"
  },
  {
    "name": "Poznań-Ławica Airport",
    "city": "Poznan",
    "country": "Poland",
    "iata": "POZ",
    "icao": "EPPO"
  },
  {
    "name": "Rzeszów-Jasionka Airport",
    "city": "Rzeszow",
    "country": "Poland",
    "iata": "RZE",
    "icao": "EPRZ"
  },
  {
    "name": "Redzikowo Air Base",
    "city": "Slupsk",
    "country": "Poland",
    "iata": "OSP",
    "icao": "EPSK"
  },
  {
    "name": "Swidwin Military Air Base",
    "city": "Shapaja",
    "country": "Poland",
    "iata": "NONE",
    "icao": "EPSN"
  },
  {
    "name": "Warsaw Chopin Airport",
    "city": "Warsaw",
    "country": "Poland",
    "iata": "WAW",
    "icao": "EPWA"
  },
  {
    "name": "Copernicus Wrocław Airport",
    "city": "Wroclaw",
    "country": "Poland",
    "iata": "WRO",
    "icao": "EPWR"
  },
  {
    "name": "Zielona Góra-Babimost Airport",
    "city": "Zielona Gora",
    "country": "Poland",
    "iata": "IEG",
    "icao": "EPZG"
  },
  {
    "name": "Malmen Air Base",
    "city": "Linkoeping",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESCF"
  },
  {
    "name": "Bråvalla Air Base",
    "city": "Norrkoeping",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESCK"
  },
  {
    "name": "Uppsala Airport",
    "city": "Uppsala",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESCM"
  },
  {
    "name": "Ronneby Airport",
    "city": "Ronneby",
    "country": "Sweden",
    "iata": "RNB",
    "icao": "ESDF"
  },
  {
    "name": "Råda Air Base",
    "city": "Rada",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESFR"
  },
  {
    "name": "Gothenburg-Landvetter Airport",
    "city": "Gothenborg",
    "country": "Sweden",
    "iata": "GOT",
    "icao": "ESGG"
  },
  {
    "name": "Jönköping Airport",
    "city": "Joenkoeping",
    "country": "Sweden",
    "iata": "JKG",
    "icao": "ESGJ"
  },
  {
    "name": "Falköping Airport",
    "city": "Falkoping",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESGK"
  },
  {
    "name": "Lidköping-Hovby Airport",
    "city": "Lidkoping",
    "country": "Sweden",
    "iata": "LDK",
    "icao": "ESGL"
  },
  {
    "name": "Gothenburg City Airport",
    "city": "Gothenborg",
    "country": "Sweden",
    "iata": "GSE",
    "icao": "ESGP"
  },
  {
    "name": "Skövde Airport",
    "city": "Skovde",
    "country": "Sweden",
    "iata": "KVB",
    "icao": "ESGR"
  },
  {
    "name": "Trollhättan-Vänersborg Airport",
    "city": "Trollhattan",
    "country": "Sweden",
    "iata": "THN",
    "icao": "ESGT"
  },
  {
    "name": "Karlsborg Air Base",
    "city": "Karlsborg",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESIA"
  },
  {
    "name": "Såtenäs Air Base",
    "city": "Satenas",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESIB"
  },
  {
    "name": "Barkarby Airport",
    "city": "Stockholm",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESKB"
  },
  {
    "name": "Karlskoga Airport",
    "city": "Karlskoga",
    "country": "Sweden",
    "iata": "KSK",
    "icao": "ESKK"
  },
  {
    "name": "Mora Airport",
    "city": "Mora",
    "country": "Sweden",
    "iata": "MXX",
    "icao": "ESKM"
  },
  {
    "name": "Stockholm Skavsta Airport",
    "city": "Stockholm",
    "country": "Sweden",
    "iata": "NYO",
    "icao": "ESKN"
  },
  {
    "name": "Arvika Airport",
    "city": "Arvika",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESKV"
  },
  {
    "name": "Emmaboda Airfield",
    "city": "Emmaboda",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESMA"
  },
  {
    "name": "Feringe Airport",
    "city": "Ljungby",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESMG"
  },
  {
    "name": "Kristianstad Airport",
    "city": "Kristianstad",
    "country": "Sweden",
    "iata": "KID",
    "icao": "ESMK"
  },
  {
    "name": "Landskrona Airport",
    "city": "Landskrona",
    "country": "Sweden",
    "iata": "JLD",
    "icao": "ESML"
  },
  {
    "name": "Oskarshamn Airport",
    "city": "Oskarshamn",
    "country": "Sweden",
    "iata": "OSK",
    "icao": "ESMO"
  },
  {
    "name": "Anderstorp Airport",
    "city": "Anderstorp",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESMP"
  },
  {
    "name": "Kalmar Airport",
    "city": "Kalkmar",
    "country": "Sweden",
    "iata": "KLR",
    "icao": "ESMQ"
  },
  {
    "name": "Malmö Sturup Airport",
    "city": "Malmoe",
    "country": "Sweden",
    "iata": "MMX",
    "icao": "ESMS"
  },
  {
    "name": "Halmstad Airport",
    "city": "Halmstad",
    "country": "Sweden",
    "iata": "HAD",
    "icao": "ESMT"
  },
  {
    "name": "Hagshult Airport",
    "city": "Hagshult",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESMV"
  },
  {
    "name": "Växjö Kronoberg Airport",
    "city": "Vaxjo",
    "country": "Sweden",
    "iata": "VXO",
    "icao": "ESMX"
  },
  {
    "name": "Hallviken Airport",
    "city": "Hallviken",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESNA"
  },
  {
    "name": "Hedlanda Airport",
    "city": "Hede",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESNC"
  },
  {
    "name": "Sveg Airport",
    "city": "Sveg",
    "country": "Sweden",
    "iata": "EVG",
    "icao": "ESND"
  },
  {
    "name": "Gällivare Airport",
    "city": "Gallivare",
    "country": "Sweden",
    "iata": "GEV",
    "icao": "ESNG"
  },
  {
    "name": "Hudiksvall Airport",
    "city": "Hudiksvall",
    "country": "Sweden",
    "iata": "HUV",
    "icao": "ESNH"
  },
  {
    "name": "Jokkmokk Airport",
    "city": "Jokkmokk",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESNJ"
  },
  {
    "name": "Kramfors Sollefteå Airport",
    "city": "Kramfors",
    "country": "Sweden",
    "iata": "KRF",
    "icao": "ESNK"
  },
  {
    "name": "Lycksele Airport",
    "city": "Lycksele",
    "country": "Sweden",
    "iata": "LYC",
    "icao": "ESNL"
  },
  {
    "name": "Optand Airport",
    "city": "Optand",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESNM"
  },
  {
    "name": "Sundsvall-Härnösand Airport",
    "city": "Sundsvall",
    "country": "Sweden",
    "iata": "SDL",
    "icao": "ESNN"
  },
  {
    "name": "Örnsköldsvik Airport",
    "city": "Ornskoldsvik",
    "country": "Sweden",
    "iata": "OER",
    "icao": "ESNO"
  },
  {
    "name": "Piteå Airport",
    "city": "Pitea",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESNP"
  },
  {
    "name": "Kiruna Airport",
    "city": "Kiruna",
    "country": "Sweden",
    "iata": "KRN",
    "icao": "ESNQ"
  },
  {
    "name": "Orsa Airport",
    "city": "Orsa",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESNR"
  },
  {
    "name": "Skellefteå Airport",
    "city": "Skelleftea",
    "country": "Sweden",
    "iata": "SFT",
    "icao": "ESNS"
  },
  {
    "name": "Sättna Airport",
    "city": "Sattna",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESNT"
  },
  {
    "name": "Umeå Airport",
    "city": "Umea",
    "country": "Sweden",
    "iata": "UME",
    "icao": "ESNU"
  },
  {
    "name": "Vilhelmina Airport",
    "city": "Vilhelmina",
    "country": "Sweden",
    "iata": "VHM",
    "icao": "ESNV"
  },
  {
    "name": "Arvidsjaur Airport",
    "city": "Arvidsjaur",
    "country": "Sweden",
    "iata": "AJR",
    "icao": "ESNX"
  },
  {
    "name": "Örebro Airport",
    "city": "Orebro",
    "country": "Sweden",
    "iata": "ORB",
    "icao": "ESOE"
  },
  {
    "name": "Stockholm Västerås Airport",
    "city": "Vasteras",
    "country": "Sweden",
    "iata": "VST",
    "icao": "ESOW"
  },
  {
    "name": "Luleå Airport",
    "city": "Lulea",
    "country": "Sweden",
    "iata": "LLA",
    "icao": "ESPA"
  },
  {
    "name": "Vidsel Air Base",
    "city": "Vidsel",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESPE"
  },
  {
    "name": "Arboga Airport",
    "city": "Arboga",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESQO"
  },
  {
    "name": "Stockholm-Arlanda Airport",
    "city": "Stockholm",
    "country": "Sweden",
    "iata": "ARN",
    "icao": "ESSA"
  },
  {
    "name": "Stockholm-Bromma Airport",
    "city": "Stockholm",
    "country": "Sweden",
    "iata": "BMA",
    "icao": "ESSB"
  },
  {
    "name": "Borlange Airport",
    "city": "Borlange",
    "country": "Sweden",
    "iata": "BLE",
    "icao": "ESSD"
  },
  {
    "name": "Hultsfred Airport",
    "city": "Hultsfred",
    "country": "Sweden",
    "iata": "HLF",
    "icao": "ESSF"
  },
  {
    "name": "Gävle Sandviken Airport",
    "city": "Gavle",
    "country": "Sweden",
    "iata": "GVX",
    "icao": "ESSK"
  },
  {
    "name": "Linköping City Airport",
    "city": "Linkoeping",
    "country": "Sweden",
    "iata": "LPI",
    "icao": "ESSL"
  },
  {
    "name": "Norrköping Airport",
    "city": "Norrkoeping",
    "country": "Sweden",
    "iata": "NRK",
    "icao": "ESSP"
  },
  {
    "name": "Eskilstuna Airport",
    "city": "Eskilstuna",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESSU"
  },
  {
    "name": "Visby Airport",
    "city": "Visby",
    "country": "Sweden",
    "iata": "VBY",
    "icao": "ESSV"
  },
  {
    "name": "Kalixfors Airport",
    "city": "Kalixfors",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESUK"
  },
  {
    "name": "Spangdahlem Air Base",
    "city": "Spangdahlem",
    "country": "Germany",
    "iata": "SPM",
    "icao": "ETAD"
  },
  {
    "name": "Ramstein Air Base",
    "city": "Ramstein",
    "country": "Germany",
    "iata": "RMS",
    "icao": "ETAR"
  },
  {
    "name": "[Duplicate] Giebelstadt Army Air Field",
    "city": "Giebelstadt",
    "country": "Germany",
    "iata": "GHF",
    "icao": "ETEU"
  },
  {
    "name": "Bückeburg Air Base",
    "city": "Brueckeburg",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETHB"
  },
  {
    "name": "Celle Airport",
    "city": "Celle",
    "country": "Germany",
    "iata": "ZCN",
    "icao": "ETHC"
  },
  {
    "name": "Rheine Bentlage Air Base",
    "city": "Rheine-brentlange",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETHE"
  },
  {
    "name": "Fritzlar Airport",
    "city": "Fritzlar",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETHF"
  },
  {
    "name": "Laupheim Air Base",
    "city": "Laupheim",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETHL"
  },
  {
    "name": "Mendig Airport",
    "city": "Mendig",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETHM"
  },
  {
    "name": "Niederstetten Army Air Base",
    "city": "Niederstetten",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETHN"
  },
  {
    "name": "Roth Airport",
    "city": "Roth",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETHR"
  },
  {
    "name": "Fassberg Air Base",
    "city": "Fassberg",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETHS"
  },
  {
    "name": "Grafenwohr Army Air Field",
    "city": "Grafenwoehr",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETIC"
  },
  {
    "name": "Hanau Army Air Field",
    "city": "Hanau",
    "country": "Germany",
    "iata": "ZNF",
    "icao": "ETID"
  },
  {
    "name": "Hohenfels Army Air Field",
    "city": "Hohenfels",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETIH"
  },
  {
    "name": "Kitzingen Army Air Field",
    "city": "Kitzingen",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETIN"
  },
  {
    "name": "Nordholz Naval Airbase",
    "city": "Nordholz",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETMN"
  },
  {
    "name": "Diepholz Air Base",
    "city": "Diepholz",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETND"
  },
  {
    "name": "Geilenkirchen Air Base",
    "city": "Geilenkirchen",
    "country": "Germany",
    "iata": "GKE",
    "icao": "ETNG"
  },
  {
    "name": "Hohn Airport",
    "city": "Hohn",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETNH"
  },
  {
    "name": "Jever Air Base",
    "city": "Jever",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETNJ"
  },
  {
    "name": "Rostock-Laage Airport",
    "city": "Laage",
    "country": "Germany",
    "iata": "RLG",
    "icao": "ETNL"
  },
  {
    "name": "Nörvenich Air Base",
    "city": "Noervenich",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETNN"
  },
  {
    "name": "Schleswig Air Base",
    "city": "Schleswig",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETNS"
  },
  {
    "name": "Wittmundhafen Airport",
    "city": "Wittmundhafen",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETNT"
  },
  {
    "name": "Wunstorf Air Base",
    "city": "Wunstorf",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETNW"
  },
  {
    "name": "Vilseck Army Air Field",
    "city": "Vilseck",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETOI"
  },
  {
    "name": "Coleman Army Air Field",
    "city": "Coleman",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETOR"
  },
  {
    "name": "Wiesbaden Army Airfield",
    "city": "Wiesbaden",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETOU"
  },
  {
    "name": "Landsberg Lech Air Base",
    "city": "Landsberg",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETSA"
  },
  {
    "name": "Büchel Air Base",
    "city": "Buechel",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETSB"
  },
  {
    "name": "Erding Airport",
    "city": "Erding",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETSE"
  },
  {
    "name": "Fürstenfeldbruck Airport",
    "city": "Fuerstenfeldbruck",
    "country": "Germany",
    "iata": "FEL",
    "icao": "ETSF"
  },
  {
    "name": "Holzdorf Air Base",
    "city": "Holzdorf",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETSH"
  },
  {
    "name": "Ingolstadt Manching Airport",
    "city": "Ingolstadt",
    "country": "Germany",
    "iata": "IGS",
    "icao": "ETSI"
  },
  {
    "name": "Lechfeld Airport",
    "city": "Lechfeld",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETSL"
  },
  {
    "name": "Neuburg AFB",
    "city": "Neuburg",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETSN"
  },
  {
    "name": "Gütersloh Air Base",
    "city": "Guetersloh",
    "country": "Germany",
    "iata": "GUT",
    "icao": "ETUO"
  },
  {
    "name": "Alexander Bay Airport",
    "city": "Alexander Bay",
    "country": "South Africa",
    "iata": "ALJ",
    "icao": "FAAB"
  },
  {
    "name": "Aggeneys Airport",
    "city": "Aggeneys",
    "country": "South Africa",
    "iata": "AGZ",
    "icao": "FAAG"
  },
  {
    "name": "Brakpan Airport",
    "city": "Brakpan",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FABB"
  },
  {
    "name": "Bisho Airport",
    "city": "Bisho",
    "country": "South Africa",
    "iata": "BIY",
    "icao": "FABE"
  },
  {
    "name": "Bram Fischer International Airport",
    "city": "Bloemfontein",
    "country": "South Africa",
    "iata": "BFN",
    "icao": "FABL"
  },
  {
    "name": "Bethlehem Airport",
    "city": "Bethlehem",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FABM"
  },
  {
    "name": "Hendrik Potgieter Airport",
    "city": "Bothaville",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FABO"
  },
  {
    "name": "Cape Town International Airport",
    "city": "Cape Town",
    "country": "South Africa",
    "iata": "CPT",
    "icao": "FACT"
  },
  {
    "name": "Calvinia Airport",
    "city": "Calvinia",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FACV"
  },
  {
    "name": "King Shaka International Airport",
    "city": "Durban",
    "country": "South Africa",
    "iata": "DUR",
    "icao": "FALE"
  },
  {
    "name": "Ben Schoeman Airport",
    "city": "East London",
    "country": "South Africa",
    "iata": "ELS",
    "icao": "FAEL"
  },
  {
    "name": "Ermelo Airport",
    "city": "Ermelo",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAEO"
  },
  {
    "name": "Ficksburg Sentraoes Airport",
    "city": "Ficksburg",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAFB"
  },
  {
    "name": "Grand Central Airport",
    "city": "Johannesburg",
    "country": "South Africa",
    "iata": "GCJ",
    "icao": "FAGC"
  },
  {
    "name": "George Airport",
    "city": "George",
    "country": "South Africa",
    "iata": "GRJ",
    "icao": "FAGG"
  },
  {
    "name": "Graaff Reinet Airport",
    "city": "Graaff Reinet",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAGR"
  },
  {
    "name": "Grahamstown Airport",
    "city": "Grahamstown",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAGT"
  },
  {
    "name": "Greytown Airport",
    "city": "Greytown",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAGY"
  },
  {
    "name": "Harmony Airport",
    "city": "Harmony",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAHA"
  },
  {
    "name": "Harrismith Airport",
    "city": "Harrismith",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAHR"
  },
  {
    "name": "Hoedspruit Air Force Base Airport",
    "city": "Hoedspruit",
    "country": "South Africa",
    "iata": "HDS",
    "icao": "FAHS"
  },
  {
    "name": "Gariep Dam Airport",
    "city": "Hendrik Verwoerddam",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAHV"
  },
  {
    "name": "OR Tambo International Airport",
    "city": "Johannesburg",
    "country": "South Africa",
    "iata": "JNB",
    "icao": "FAJS"
  },
  {
    "name": "P C Pelser Airport",
    "city": "Klerksdorp",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAKD"
  },
  {
    "name": "Kimberley Airport",
    "city": "Kimberley",
    "country": "South Africa",
    "iata": "KIM",
    "icao": "FAKM"
  },
  {
    "name": "Krugersdorp Airport",
    "city": "Krugersdorp",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAKR"
  },
  {
    "name": "Kroonstad Airport",
    "city": "Kroonstad",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAKS"
  },
  {
    "name": "Johan Pienaar Airport",
    "city": "Kuruman",
    "country": "South Africa",
    "iata": "KMH",
    "icao": "FAKU"
  },
  {
    "name": "Kleinsee Airport",
    "city": "Kleinsee",
    "country": "South Africa",
    "iata": "KLZ",
    "icao": "FAKZ"
  },
  {
    "name": "Lanseria Airport",
    "city": "Johannesburg",
    "country": "South Africa",
    "iata": "HLA",
    "icao": "FALA"
  },
  {
    "name": "Lichtenburg Airport",
    "city": "Lichtenburg",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FALI"
  },
  {
    "name": "Makhado Air Force Base Airport",
    "city": "Lambertsbaai",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FALM"
  },
  {
    "name": "Langebaanweg Airport",
    "city": "Langebaanweg",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FALW"
  },
  {
    "name": "Ladysmith Airport",
    "city": "Ladysmith",
    "country": "South Africa",
    "iata": "LAY",
    "icao": "FALY"
  },
  {
    "name": "Middelburg Airport",
    "city": "Middelburg",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAMB"
  },
  {
    "name": "Margate Airport",
    "city": "Margate",
    "country": "South Africa",
    "iata": "MGH",
    "icao": "FAMG"
  },
  {
    "name": "Marble Hall Airport",
    "city": "Marble Hall",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAMI"
  },
  {
    "name": "Majuba Power Station Airport",
    "city": "Majuba Power Station",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAMJ"
  },
  {
    "name": "Riverside Airport",
    "city": "Malalane",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAMN"
  },
  {
    "name": "Morningside Farm Airport",
    "city": "Musina",
    "country": "South Africa",
    "iata": "MEZ",
    "icao": "FAMS"
  },
  {
    "name": "Mkuze Airport",
    "city": "Mkuze",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAMU"
  },
  {
    "name": "Newcastle Airport",
    "city": "Newcastle",
    "country": "South Africa",
    "iata": "NCS",
    "icao": "FANC"
  },
  {
    "name": "Nylstroom Airfield",
    "city": "Nylstroom",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FANY"
  },
  {
    "name": "Overberg Airport",
    "city": "Overberg",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAOB"
  },
  {
    "name": "Oudtshoorn Airport",
    "city": "Oudtshoorn",
    "country": "South Africa",
    "iata": "DUH",
    "icao": "FAOH"
  },
  {
    "name": "Port Elizabeth Airport",
    "city": "Port Elizabeth",
    "country": "South Africa",
    "iata": "PLZ",
    "icao": "FAPE"
  },
  {
    "name": "Plettenberg Bay Airport",
    "city": "Plettenberg Bay",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAPG"
  },
  {
    "name": "Hendrik Van Eck Airport",
    "city": "Phalaborwa",
    "country": "South Africa",
    "iata": "PHW",
    "icao": "FAPH"
  },
  {
    "name": "Pietersburg Municipal Airport",
    "city": "Polokwane",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAPI"
  },
  {
    "name": "Port St Johns Airport",
    "city": "Port Saint Johns",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAPJ"
  },
  {
    "name": "Pietermaritzburg Airport",
    "city": "Pietermaritzburg",
    "country": "South Africa",
    "iata": "PZB",
    "icao": "FAPM"
  },
  {
    "name": "Pilanesberg International Airport",
    "city": "Pilanesberg",
    "country": "South Africa",
    "iata": "NTY",
    "icao": "FAPN"
  },
  {
    "name": "Polokwane International Airport",
    "city": "Potgietersrus",
    "country": "South Africa",
    "iata": "PTG",
    "icao": "FAPP"
  },
  {
    "name": "Potchefstroom Airport",
    "city": "Potchefstroom",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAPS"
  },
  {
    "name": "Parys Airport",
    "city": "Parys",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAPY"
  },
  {
    "name": "Queenstown Airport",
    "city": "Queenstown",
    "country": "South Africa",
    "iata": "UTW",
    "icao": "FAQT"
  },
  {
    "name": "Richards Bay Airport",
    "city": "Richard's Bay",
    "country": "South Africa",
    "iata": "RCB",
    "icao": "FARB"
  },
  {
    "name": "Rustenburg Airport",
    "city": "Rustenburg",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FARG"
  },
  {
    "name": "Robertson Airport",
    "city": "Robertson",
    "country": "South Africa",
    "iata": "ROD",
    "icao": "FARS"
  },
  {
    "name": "Springbok Airport",
    "city": "Springbok",
    "country": "South Africa",
    "iata": "SBU",
    "icao": "FASB"
  },
  {
    "name": "Secunda Airport",
    "city": "Secunda",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FASC"
  },
  {
    "name": "Saldanha /Vredenburg Airport",
    "city": "Saldanha",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FASD"
  },
  {
    "name": "Springs Airfield",
    "city": "Springs",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FASI"
  },
  {
    "name": "Swartkop Air Force Base",
    "city": "Swartkop",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FASK"
  },
  {
    "name": "Sishen Airport",
    "city": "Sishen",
    "country": "South Africa",
    "iata": "SIS",
    "icao": "FASS"
  },
  {
    "name": "Hendrik Swellengrebel Airport",
    "city": "Swellendam",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FASX"
  },
  {
    "name": "Skukuza Airport",
    "city": "Skukuza",
    "country": "South Africa",
    "iata": "SZK",
    "icao": "FASZ"
  },
  {
    "name": "Tommys Field Airport",
    "city": "Tommy's Field",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FATF"
  },
  {
    "name": "New Tempe Airport",
    "city": "Bloemfontein",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FATP"
  },
  {
    "name": "Tutuka Power Station Airport",
    "city": "Tutuka",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FATT"
  },
  {
    "name": "Tzaneen Airport",
    "city": "Tzaneen",
    "country": "South Africa",
    "iata": "LTA",
    "icao": "FATZ"
  },
  {
    "name": "Prince Mangosuthu Buthelezi Airport",
    "city": "Ulundi",
    "country": "South Africa",
    "iata": "ULD",
    "icao": "FAUL"
  },
  {
    "name": "Pierre Van Ryneveld Airport",
    "city": "Upington",
    "country": "South Africa",
    "iata": "UTN",
    "icao": "FAUP"
  },
  {
    "name": "K. D. Matanzima Airport",
    "city": "Umtata",
    "country": "South Africa",
    "iata": "UTT",
    "icao": "FAUT"
  },
  {
    "name": "Vryburg Airport",
    "city": "Vryburg",
    "country": "South Africa",
    "iata": "VRU",
    "icao": "FAVB"
  },
  {
    "name": "Virginia Airport",
    "city": "Durban",
    "country": "South Africa",
    "iata": "VIR",
    "icao": "FAVG"
  },
  {
    "name": "Vredendal Airport",
    "city": "Vredendal",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAVR"
  },
  {
    "name": "Vereeniging Airport",
    "city": "Vereeniging",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAVV"
  },
  {
    "name": "Wonderboom Airport",
    "city": "Pretoria",
    "country": "South Africa",
    "iata": "PRY",
    "icao": "FAWB"
  },
  {
    "name": "Witbank Airport",
    "city": "Witbank",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAWI"
  },
  {
    "name": "Waterkloof Air Force Base",
    "city": "Waterkloof",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAWK"
  },
  {
    "name": "Welkom Airport",
    "city": "Welkom",
    "country": "South Africa",
    "iata": "WEL",
    "icao": "FAWM"
  },
  {
    "name": "Ysterplaat Air Force Base",
    "city": "Ysterplaat",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAYP"
  },
  {
    "name": "Zeerust Airport",
    "city": "Zeerust",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAZR"
  },
  {
    "name": "Francistown Airport",
    "city": "Francistown",
    "country": "Botswana",
    "iata": "FRW",
    "icao": "FBFT"
  },
  {
    "name": "Jwaneng Airport",
    "city": "Jwaneng",
    "country": "Botswana",
    "iata": "JWA",
    "icao": "FBJW"
  },
  {
    "name": "Kasane Airport",
    "city": "Kasane",
    "country": "Botswana",
    "iata": "BBK",
    "icao": "FBKE"
  },
  {
    "name": "Maun Airport",
    "city": "Maun",
    "country": "Botswana",
    "iata": "MUB",
    "icao": "FBMN"
  },
  {
    "name": "Sir Seretse Khama International Airport",
    "city": "Gaberone",
    "country": "Botswana",
    "iata": "GBE",
    "icao": "FBSK"
  },
  {
    "name": "Selebi Phikwe Airport",
    "city": "Selebi-phikwe",
    "country": "Botswana",
    "iata": "PKW",
    "icao": "FBSP"
  },
  {
    "name": "Maya-Maya Airport",
    "city": "Brazzaville",
    "country": "Congo (Brazzaville)",
    "iata": "BZV",
    "icao": "FCBB"
  },
  {
    "name": "Owando Airport",
    "city": "Owando",
    "country": "Congo (Kinshasa)",
    "iata": "FTX",
    "icao": "FCOO"
  },
  {
    "name": "Ouesso Airport",
    "city": "Ouesso",
    "country": "Congo (Kinshasa)",
    "iata": "OUE",
    "icao": "FCOU"
  },
  {
    "name": "Pointe Noire Airport",
    "city": "Pointe-noire",
    "country": "Congo (Brazzaville)",
    "iata": "PNR",
    "icao": "FCPP"
  },
  {
    "name": "Matsapha Airport",
    "city": "Manzini",
    "country": "Swaziland",
    "iata": "MTS",
    "icao": "FDMS"
  },
  {
    "name": "Bangui M'Poko International Airport",
    "city": "Bangui",
    "country": "Central African Republic",
    "iata": "BGF",
    "icao": "FEFF"
  },
  {
    "name": "Berbérati Airport",
    "city": "Berberati",
    "country": "Central African Republic",
    "iata": "BBT",
    "icao": "FEFT"
  },
  {
    "name": "Bata Airport",
    "city": "Bata",
    "country": "Equatorial Guinea",
    "iata": "BSG",
    "icao": "FGBT"
  },
  {
    "name": "Malabo Airport",
    "city": "Malabo",
    "country": "Equatorial Guinea",
    "iata": "SSG",
    "icao": "FGSL"
  },
  {
    "name": "RAF Ascension Island",
    "city": "Wide Awake",
    "country": "Saint Helena",
    "iata": "ASI",
    "icao": "FHAW"
  },
  {
    "name": "Sir Seewoosagur Ramgoolam International Airport",
    "city": "Plaisance",
    "country": "Mauritius",
    "iata": "MRU",
    "icao": "FIMP"
  },
  {
    "name": "Sir Charles Gaetan Duval Airport",
    "city": "Rodriguez Island",
    "country": "Mauritius",
    "iata": "RRG",
    "icao": "FIMR"
  },
  {
    "name": "Diego Garcia Naval Support Facility",
    "city": "Diego Garcia Island",
    "country": "British Indian Ocean Territory",
    "iata": "NONE",
    "icao": "FJDG"
  },
  {
    "name": "Tiko Airport",
    "city": "Tiko",
    "country": "Cameroon",
    "iata": "TKC",
    "icao": "FKKC"
  },
  {
    "name": "Douala International Airport",
    "city": "Douala",
    "country": "Cameroon",
    "iata": "DLA",
    "icao": "FKKD"
  },
  {
    "name": "Salak Airport",
    "city": "Maroua",
    "country": "Cameroon",
    "iata": "MVR",
    "icao": "FKKL"
  },
  {
    "name": "Foumban Nkounja Airport",
    "city": "Foumban",
    "country": "Cameroon",
    "iata": "FOM",
    "icao": "FKKM"
  },
  {
    "name": "N'Gaoundéré Airport",
    "city": "N'gaoundere",
    "country": "Cameroon",
    "iata": "NGE",
    "icao": "FKKN"
  },
  {
    "name": "Garoua International Airport",
    "city": "Garoua",
    "country": "Cameroon",
    "iata": "GOU",
    "icao": "FKKR"
  },
  {
    "name": "Bafoussam Airport",
    "city": "Bafoussam",
    "country": "Cameroon",
    "iata": "BFX",
    "icao": "FKKU"
  },
  {
    "name": "Bamenda Airport",
    "city": "Bamenda",
    "country": "Cameroon",
    "iata": "BPC",
    "icao": "FKKV"
  },
  {
    "name": "Yaoundé Airport",
    "city": "Yaounde",
    "country": "Cameroon",
    "iata": "YAO",
    "icao": "FKKY"
  },
  {
    "name": "Kasompe Airport",
    "city": "Kasompe",
    "country": "Zambia",
    "iata": "NONE",
    "icao": "FLKE"
  },
  {
    "name": "Livingstone Airport",
    "city": "Livingstone",
    "country": "Zambia",
    "iata": "LVI",
    "icao": "FLLI"
  },
  {
    "name": "Kenneth Kaunda International Airport Lusaka",
    "city": "Lusaka",
    "country": "Zambia",
    "iata": "LUN",
    "icao": "FLLS"
  },
  {
    "name": "Mfuwe Airport",
    "city": "Mfuwe",
    "country": "Zambia",
    "iata": "MFU",
    "icao": "FLMF"
  },
  {
    "name": "Mongu Airport",
    "city": "Mongu",
    "country": "Zambia",
    "iata": "NONE",
    "icao": "FLMG"
  },
  {
    "name": "Simon Mwansa Kapwepwe International Airport",
    "city": "Ndola",
    "country": "Zambia",
    "iata": "NLA",
    "icao": "FLND"
  },
  {
    "name": "Southdowns Airport",
    "city": "Southdowns",
    "country": "Zambia",
    "iata": "KIW",
    "icao": "FLSO"
  },
  {
    "name": "Prince Said Ibrahim International Airport",
    "city": "Moroni",
    "country": "Comoros",
    "iata": "HAH",
    "icao": "FMCH"
  },
  {
    "name": "Mohéli Bandar Es Eslam Airport",
    "city": "Moheli",
    "country": "Comoros",
    "iata": "NWA",
    "icao": "FMCI"
  },
  {
    "name": "Ouani Airport",
    "city": "Anjouan",
    "country": "Comoros",
    "iata": "AJN",
    "icao": "FMCV"
  },
  {
    "name": "Dzaoudzi Pamandzi International Airport",
    "city": "Dzaoudzi",
    "country": "Mayotte",
    "iata": "DZA",
    "icao": "FMCZ"
  },
  {
    "name": "Roland Garros Airport",
    "city": "St.-denis",
    "country": "Reunion",
    "iata": "RUN",
    "icao": "FMEE"
  },
  {
    "name": "Pierrefonds Airport",
    "city": "St.-pierre",
    "country": "Reunion",
    "iata": "ZSE",
    "icao": "FMEP"
  },
  {
    "name": "Ivato Airport",
    "city": "Antananarivo",
    "country": "Madagascar",
    "iata": "TNR",
    "icao": "FMMI"
  },
  {
    "name": "Miandrivazo Airport",
    "city": "Miandrivazo",
    "country": "Madagascar",
    "iata": "ZVA",
    "icao": "FMMN"
  },
  {
    "name": "Sainte Marie Airport",
    "city": "Sainte Marie",
    "country": "Madagascar",
    "iata": "SMS",
    "icao": "FMMS"
  },
  {
    "name": "Toamasina Airport",
    "city": "Toamasina",
    "country": "Madagascar",
    "iata": "TMM",
    "icao": "FMMT"
  },
  {
    "name": "Morondava Airport",
    "city": "Morondava",
    "country": "Madagascar",
    "iata": "MOQ",
    "icao": "FMMV"
  },
  {
    "name": "Arrachart Airport",
    "city": "Antsiranana",
    "country": "Madagascar",
    "iata": "DIE",
    "icao": "FMNA"
  },
  {
    "name": "Mananara Nord Airport",
    "city": "Mananara",
    "country": "Madagascar",
    "iata": "WMR",
    "icao": "FMNC"
  },
  {
    "name": "Andapa Airport",
    "city": "Andapa",
    "country": "Madagascar",
    "iata": "ZWA",
    "icao": "FMND"
  },
  {
    "name": "Ambilobe Airport",
    "city": "Ambilobe",
    "country": "Madagascar",
    "iata": "AMB",
    "icao": "FMNE"
  },
  {
    "name": "Antsirabato Airport",
    "city": "Antalaha",
    "country": "Madagascar",
    "iata": "ANM",
    "icao": "FMNH"
  },
  {
    "name": "Analalava Airport",
    "city": "Analalava",
    "country": "Madagascar",
    "iata": "HVA",
    "icao": "FMNL"
  },
  {
    "name": "Amborovy Airport",
    "city": "Mahajanga",
    "country": "Madagascar",
    "iata": "MJN",
    "icao": "FMNM"
  },
  {
    "name": "Fascene Airport",
    "city": "Nosy-be",
    "country": "Madagascar",
    "iata": "NOS",
    "icao": "FMNN"
  },
  {
    "name": "Besalampy Airport",
    "city": "Besalampy",
    "country": "Madagascar",
    "iata": "BPY",
    "icao": "FMNQ"
  },
  {
    "name": "Maroantsetra Airport",
    "city": "Maroantsetra",
    "country": "Madagascar",
    "iata": "WMN",
    "icao": "FMNR"
  },
  {
    "name": "Sambava Airport",
    "city": "Sambava",
    "country": "Madagascar",
    "iata": "SVB",
    "icao": "FMNS"
  },
  {
    "name": "Vohimarina Airport",
    "city": "Vohemar",
    "country": "Madagascar",
    "iata": "VOH",
    "icao": "FMNV"
  },
  {
    "name": "Ambalabe Airport",
    "city": "Antsohihy",
    "country": "Madagascar",
    "iata": "WAI",
    "icao": "FMNW"
  },
  {
    "name": "Ampampamena Airport",
    "city": "Ampampamena",
    "country": "Madagascar",
    "iata": "IVA",
    "icao": "FMNZ"
  },
  {
    "name": "Tôlanaro Airport",
    "city": "Tolagnaro",
    "country": "Madagascar",
    "iata": "FTU",
    "icao": "FMSD"
  },
  {
    "name": "Fianarantsoa Airport",
    "city": "Fianarantsoa",
    "country": "Madagascar",
    "iata": "WFI",
    "icao": "FMSF"
  },
  {
    "name": "Farafangana Airport",
    "city": "Farafangana",
    "country": "Madagascar",
    "iata": "RVA",
    "icao": "FMSG"
  },
  {
    "name": "Manakara Airport",
    "city": "Manakara",
    "country": "Madagascar",
    "iata": "WVK",
    "icao": "FMSK"
  },
  {
    "name": "Mananjary Airport",
    "city": "Mananjary",
    "country": "Madagascar",
    "iata": "MNJ",
    "icao": "FMSM"
  },
  {
    "name": "Morombe Airport",
    "city": "Morombe",
    "country": "Madagascar",
    "iata": "MXM",
    "icao": "FMSR"
  },
  {
    "name": "Toliara Airport",
    "city": "Toliara",
    "country": "Madagascar",
    "iata": "TLE",
    "icao": "FMST"
  },
  {
    "name": "Mbanza Congo Airport",
    "city": "M'banza-congo",
    "country": "Angola",
    "iata": "SSY",
    "icao": "FNBC"
  },
  {
    "name": "Benguela Airport",
    "city": "Benguela",
    "country": "Angola",
    "iata": "BUG",
    "icao": "FNBG"
  },
  {
    "name": "Cabinda Airport",
    "city": "Cabinda",
    "country": "Angola",
    "iata": "CAB",
    "icao": "FNCA"
  },
  {
    "name": "Nova Lisboa Airport",
    "city": "Huambo",
    "country": "Angola",
    "iata": "NOV",
    "icao": "FNHU"
  },
  {
    "name": "Kuito Airport",
    "city": "Kuito",
    "country": "Angola",
    "iata": "SVP",
    "icao": "FNKU"
  },
  {
    "name": "Lobito Airport",
    "city": "Lobito",
    "country": "Angola",
    "iata": "NONE",
    "icao": "FNLB"
  },
  {
    "name": "Quatro de Fevereiro Airport",
    "city": "Luanda",
    "country": "Angola",
    "iata": "LAD",
    "icao": "FNLU"
  },
  {
    "name": "Malanje Airport",
    "city": "Malanje",
    "country": "Angola",
    "iata": "MEG",
    "icao": "FNMA"
  },
  {
    "name": "Menongue Airport",
    "city": "Menongue",
    "country": "Angola",
    "iata": "SPP",
    "icao": "FNME"
  },
  {
    "name": "Negage Airport",
    "city": "Negage",
    "country": "Angola",
    "iata": "GXG",
    "icao": "FNNG"
  },
  {
    "name": "Porto Amboim Airport",
    "city": "Porto Amboim",
    "country": "Angola",
    "iata": "PBN",
    "icao": "FNPA"
  },
  {
    "name": "Saurimo Airport",
    "city": "Saurimo",
    "country": "Angola",
    "iata": "VHC",
    "icao": "FNSA"
  },
  {
    "name": "Soyo Airport",
    "city": "Soyo",
    "country": "Angola",
    "iata": "SZA",
    "icao": "FNSO"
  },
  {
    "name": "Lubango Airport",
    "city": "Lubango",
    "country": "Angola",
    "iata": "SDD",
    "icao": "FNUB"
  },
  {
    "name": "Luena Airport",
    "city": "Luena",
    "country": "Angola",
    "iata": "LUO",
    "icao": "FNUE"
  },
  {
    "name": "Uige Airport",
    "city": "Uige",
    "country": "Angola",
    "iata": "UGO",
    "icao": "FNUG"
  },
  {
    "name": "Xangongo Airport",
    "city": "Xangongo",
    "country": "Angola",
    "iata": "XGN",
    "icao": "FNXA"
  },
  {
    "name": "Oyem Airport",
    "city": "Oyem",
    "country": "Gabon",
    "iata": "OYE",
    "icao": "FOGO"
  },
  {
    "name": "Okondja Airport",
    "city": "Okondja",
    "country": "Gabon",
    "iata": "OKN",
    "icao": "FOGQ"
  },
  {
    "name": "Lambarene Airport",
    "city": "Lambarene",
    "country": "Gabon",
    "iata": "LBQ",
    "icao": "FOGR"
  },
  {
    "name": "Bitam Airport",
    "city": "Bitam",
    "country": "Gabon",
    "iata": "BMM",
    "icao": "FOOB"
  },
  {
    "name": "Port Gentil Airport",
    "city": "Port Gentil",
    "country": "Gabon",
    "iata": "POG",
    "icao": "FOOG"
  },
  {
    "name": "Omboue Hopital Airport",
    "city": "Omboue Hospial",
    "country": "Gabon",
    "iata": "OMB",
    "icao": "FOOH"
  },
  {
    "name": "Makokou Airport",
    "city": "Makokou",
    "country": "Gabon",
    "iata": "MKU",
    "icao": "FOOK"
  },
  {
    "name": "Libreville Leon M'ba International Airport",
    "city": "Libreville",
    "country": "Gabon",
    "iata": "LBV",
    "icao": "FOOL"
  },
  {
    "name": "M'Vengue El Hadj Omar Bongo Ondimba International Airport",
    "city": "Franceville",
    "country": "Gabon",
    "iata": "MVB",
    "icao": "FOON"
  },
  {
    "name": "Principe Airport",
    "city": "Principe",
    "country": "Sao Tome and Principe",
    "iata": "PCP",
    "icao": "FPPR"
  },
  {
    "name": "São Tomé International Airport",
    "city": "Sao Tome",
    "country": "Sao Tome and Principe",
    "iata": "TMS",
    "icao": "FPST"
  },
  {
    "name": "Beira Airport",
    "city": "Beira",
    "country": "Mozambique",
    "iata": "BEW",
    "icao": "FQBR"
  },
  {
    "name": "Inhambane Airport",
    "city": "Inhambane",
    "country": "Mozambique",
    "iata": "INH",
    "icao": "FQIN"
  },
  {
    "name": "Lichinga Airport",
    "city": "Lichinga",
    "country": "Mozambique",
    "iata": "VXC",
    "icao": "FQLC"
  },
  {
    "name": "Lumbo Airport",
    "city": "Lumbo",
    "country": "Mozambique",
    "iata": "NONE",
    "icao": "FQLU"
  },
  {
    "name": "Maputo Airport",
    "city": "Maputo",
    "country": "Mozambique",
    "iata": "MPM",
    "icao": "FQMA"
  },
  {
    "name": "Mueda Airport",
    "city": "Mueda",
    "country": "Mozambique",
    "iata": "NONE",
    "icao": "FQMD"
  },
  {
    "name": "Mocímboa da Praia Airport",
    "city": "Mocimboa Da Praia",
    "country": "Mozambique",
    "iata": "MZB",
    "icao": "FQMP"
  },
  {
    "name": "Marrupa Airport",
    "city": "Marrupa",
    "country": "Mozambique",
    "iata": "NONE",
    "icao": "FQMR"
  },
  {
    "name": "Nacala Airport",
    "city": "Nacala",
    "country": "Mozambique",
    "iata": "MNC",
    "icao": "FQNC"
  },
  {
    "name": "Nampula Airport",
    "city": "Nampula",
    "country": "Mozambique",
    "iata": "APL",
    "icao": "FQNP"
  },
  {
    "name": "Pemba Airport",
    "city": "Pemba",
    "country": "Mozambique",
    "iata": "POL",
    "icao": "FQPB"
  },
  {
    "name": "Quelimane Airport",
    "city": "Quelimane",
    "country": "Mozambique",
    "iata": "UEL",
    "icao": "FQQL"
  },
  {
    "name": "Songo Airport",
    "city": "Songo",
    "country": "Mozambique",
    "iata": "NONE",
    "icao": "FQSG"
  },
  {
    "name": "Chingozi Airport",
    "city": "Tete",
    "country": "Mozambique",
    "iata": "TET",
    "icao": "FQTT"
  },
  {
    "name": "Ulongwe Airport",
    "city": "Ulongwe",
    "country": "Mozambique",
    "iata": "NONE",
    "icao": "FQUG"
  },
  {
    "name": "Vilankulo Airport",
    "city": "Vilankulu",
    "country": "Mozambique",
    "iata": "VNX",
    "icao": "FQVL"
  },
  {
    "name": "Alphonse Airport",
    "city": "Alphonse",
    "country": "Seychelles",
    "iata": "NONE",
    "icao": "FSAL"
  },
  {
    "name": "Desroches Airport",
    "city": "Desroches",
    "country": "Seychelles",
    "iata": "DES",
    "icao": "FSDR"
  },
  {
    "name": "Farquhar Airport",
    "city": "Farquhar",
    "country": "Seychelles",
    "iata": "NONE",
    "icao": "FSFA"
  },
  {
    "name": "Seychelles International Airport",
    "city": "Mahe",
    "country": "Seychelles",
    "iata": "SEZ",
    "icao": "FSIA"
  },
  {
    "name": "Praslin Airport",
    "city": "Praslin",
    "country": "Seychelles",
    "iata": "PRI",
    "icao": "FSPP"
  },
  {
    "name": "Coetivy Airport",
    "city": "Coetivy",
    "country": "Seychelles",
    "iata": "NONE",
    "icao": "FSSC"
  },
  {
    "name": "Abeche Airport",
    "city": "Abeche",
    "country": "Chad",
    "iata": "AEH",
    "icao": "FTTC"
  },
  {
    "name": "Moundou Airport",
    "city": "Moundou",
    "country": "Chad",
    "iata": "MQQ",
    "icao": "FTTD"
  },
  {
    "name": "N'Djamena International Airport",
    "city": "N'djamena",
    "country": "Chad",
    "iata": "NDJ",
    "icao": "FTTJ"
  },
  {
    "name": "Faya Largeau Airport",
    "city": "Faya-largeau",
    "country": "Chad",
    "iata": "FYT",
    "icao": "FTTY"
  },
  {
    "name": "Joshua Mqabuko Nkomo International Airport",
    "city": "Bulawayo",
    "country": "Zimbabwe",
    "iata": "BUQ",
    "icao": "FVBU"
  },
  {
    "name": "Charles Prince Airport",
    "city": "Harare",
    "country": "Zimbabwe",
    "iata": "NONE",
    "icao": "FVCP"
  },
  {
    "name": "Buffalo Range Airport",
    "city": "Chiredzi",
    "country": "Zimbabwe",
    "iata": "BFO",
    "icao": "FVCZ"
  },
  {
    "name": "Victoria Falls International Airport",
    "city": "Victoria Falls",
    "country": "Zimbabwe",
    "iata": "VFA",
    "icao": "FVFA"
  },
  {
    "name": "Harare International Airport",
    "city": "Harare",
    "country": "Zimbabwe",
    "iata": "HRE",
    "icao": "FVHA"
  },
  {
    "name": "Kariba International Airport",
    "city": "Kariba",
    "country": "Zimbabwe",
    "iata": "KAB",
    "icao": "FVKB"
  },
  {
    "name": "Mutoko Airport",
    "city": "Mutoko",
    "country": "Zimbabwe",
    "iata": "NONE",
    "icao": "FVMT"
  },
  {
    "name": "Mutare Airport",
    "city": "Mutare",
    "country": "Zimbabwe",
    "iata": "NONE",
    "icao": "FVMU"
  },
  {
    "name": "Masvingo International Airport",
    "city": "Masvingo",
    "country": "Zimbabwe",
    "iata": "MVZ",
    "icao": "FVMV"
  },
  {
    "name": "Zvishavane Airport",
    "city": "Zvishavane",
    "country": "Zimbabwe",
    "iata": "NONE",
    "icao": "FVSH"
  },
  {
    "name": "Thornhill Air Base",
    "city": "Gwert",
    "country": "Zimbabwe",
    "iata": "GWE",
    "icao": "FVTL"
  },
  {
    "name": "Hwange National Park Airport",
    "city": "Hwange National Park",
    "country": "Zimbabwe",
    "iata": "WKM",
    "icao": "FVWN"
  },
  {
    "name": "Chileka International Airport",
    "city": "Blantyre",
    "country": "Malawi",
    "iata": "BLZ",
    "icao": "FWCL"
  },
  {
    "name": "Karonga Airport",
    "city": "Karonga",
    "country": "Malawi",
    "iata": "KGJ",
    "icao": "FWKA"
  },
  {
    "name": "Kasungu Airport",
    "city": "Kasungu",
    "country": "Malawi",
    "iata": "NONE",
    "icao": "FWKG"
  },
  {
    "name": "Lilongwe International Airport",
    "city": "Lilongwe",
    "country": "Malawi",
    "iata": "LLW",
    "icao": "FWKI"
  },
  {
    "name": "Mzuzu Airport",
    "city": "Mzuzu",
    "country": "Malawi",
    "iata": "ZZU",
    "icao": "FWUU"
  },
  {
    "name": "Moshoeshoe I International Airport",
    "city": "Maseru",
    "country": "Lesotho",
    "iata": "MSU",
    "icao": "FXMM"
  },
  {
    "name": "Mejametalana Airbase",
    "city": "Maseru",
    "country": "Lesotho",
    "iata": "NONE",
    "icao": "FXMU"
  },
  {
    "name": "Ndjili International Airport",
    "city": "Kinshasa",
    "country": "Congo (Kinshasa)",
    "iata": "FIH",
    "icao": "FZAA"
  },
  {
    "name": "Ndolo Airport",
    "city": "Kinshasa",
    "country": "Congo (Kinshasa)",
    "iata": "NLO",
    "icao": "FZAB"
  },
  {
    "name": "Muanda Airport",
    "city": "Muanda",
    "country": "Congo (Kinshasa)",
    "iata": "MNB",
    "icao": "FZAG"
  },
  {
    "name": "Kitona Base Airport",
    "city": "Kitona Base",
    "country": "Congo (Kinshasa)",
    "iata": "NONE",
    "icao": "FZAI"
  },
  {
    "name": "Bandundu Airport",
    "city": "Bandoundu",
    "country": "Congo (Kinshasa)",
    "iata": "FDU",
    "icao": "FZBO"
  },
  {
    "name": "Kikwit Airport",
    "city": "Kikwit",
    "country": "Congo (Kinshasa)",
    "iata": "KKW",
    "icao": "FZCA"
  },
  {
    "name": "Mbandaka Airport",
    "city": "Mbandaka",
    "country": "Congo (Kinshasa)",
    "iata": "MDK",
    "icao": "FZEA"
  },
  {
    "name": "Gbadolite Airport",
    "city": "Gbadolite",
    "country": "Congo (Kinshasa)",
    "iata": "BDT",
    "icao": "FZFD"
  },
  {
    "name": "Gemena Airport",
    "city": "Gemena",
    "country": "Congo (Kinshasa)",
    "iata": "GMA",
    "icao": "FZFK"
  },
  {
    "name": "Kotakoli Airport",
    "city": "Kotakoli",
    "country": "Congo (Kinshasa)",
    "iata": "NONE",
    "icao": "FZFP"
  },
  {
    "name": "Lisala Airport",
    "city": "Lisala",
    "country": "Congo (Kinshasa)",
    "iata": "LIQ",
    "icao": "FZGA"
  },
  {
    "name": "Bangoka International Airport",
    "city": "Kisangani",
    "country": "Congo (Kinshasa)",
    "iata": "FKI",
    "icao": "FZIC"
  },
  {
    "name": "Matari Airport",
    "city": "Isiro",
    "country": "Congo (Kinshasa)",
    "iata": "IRP",
    "icao": "FZJH"
  },
  {
    "name": "Bunia Airport",
    "city": "Bunia",
    "country": "Congo (Kinshasa)",
    "iata": "BUX",
    "icao": "FZKA"
  },
  {
    "name": "Buta Zega Airport",
    "city": "Buta Zega",
    "country": "Congo (Kinshasa)",
    "iata": "NONE",
    "icao": "FZKJ"
  },
  {
    "name": "Bukavu Kavumu Airport",
    "city": "Bukavu/kavumu",
    "country": "Congo (Kinshasa)",
    "iata": "BKY",
    "icao": "FZMA"
  },
  {
    "name": "Goma International Airport",
    "city": "Goma",
    "country": "Congo (Kinshasa)",
    "iata": "GOM",
    "icao": "FZNA"
  },
  {
    "name": "Kindu Airport",
    "city": "Kindu",
    "country": "Congo (Kinshasa)",
    "iata": "KND",
    "icao": "FZOA"
  },
  {
    "name": "Lubumbashi International Airport",
    "city": "Lubumashi",
    "country": "Congo (Kinshasa)",
    "iata": "FBM",
    "icao": "FZQA"
  },
  {
    "name": "Kolwezi Airport",
    "city": "Kolwezi",
    "country": "Congo (Kinshasa)",
    "iata": "KWZ",
    "icao": "FZQM"
  },
  {
    "name": "Kalemie Airport",
    "city": "Kalemie",
    "country": "Congo (Kinshasa)",
    "iata": "FMI",
    "icao": "FZRF"
  },
  {
    "name": "Kamina Base Airport",
    "city": "Kamina Base",
    "country": "Congo (Kinshasa)",
    "iata": "KMN",
    "icao": "FZSA"
  },
  {
    "name": "Kananga Airport",
    "city": "Kananga",
    "country": "Congo (Kinshasa)",
    "iata": "KGA",
    "icao": "FZUA"
  },
  {
    "name": "Mbuji Mayi Airport",
    "city": "Mbuji-mayi",
    "country": "Congo (Kinshasa)",
    "iata": "MJM",
    "icao": "FZWA"
  },
  {
    "name": "Senou Airport",
    "city": "Bamako",
    "country": "Mali",
    "iata": "BKO",
    "icao": "GABS"
  },
  {
    "name": "Gao Airport",
    "city": "Gao",
    "country": "Mali",
    "iata": "GAQ",
    "icao": "GAGO"
  },
  {
    "name": "Kayes Dag Dag Airport",
    "city": "Kayes",
    "country": "Mali",
    "iata": "KYS",
    "icao": "GAKY"
  },
  {
    "name": "Mopti Airport",
    "city": "Mopti",
    "country": "Mali",
    "iata": "MZI",
    "icao": "GAMB"
  },
  {
    "name": "Timbuktu Airport",
    "city": "Tombouctou",
    "country": "Mali",
    "iata": "TOM",
    "icao": "GATB"
  },
  {
    "name": "Tessalit Airport",
    "city": "Tessalit",
    "country": "Mali",
    "iata": "NONE",
    "icao": "GATS"
  },
  {
    "name": "Banjul International Airport",
    "city": "Banjul",
    "country": "Gambia",
    "iata": "BJL",
    "icao": "GBYD"
  },
  {
    "name": "Fuerteventura Airport",
    "city": "Fuerteventura",
    "country": "Spain",
    "iata": "FUE",
    "icao": "GCFV"
  },
  {
    "name": "Hierro Airport",
    "city": "Hierro",
    "country": "Spain",
    "iata": "VDE",
    "icao": "GCHI"
  },
  {
    "name": "La Palma Airport",
    "city": "Santa Cruz De La Palma",
    "country": "Spain",
    "iata": "SPC",
    "icao": "GCLA"
  },
  {
    "name": "Gran Canaria Airport",
    "city": "Gran Canaria",
    "country": "Spain",
    "iata": "LPA",
    "icao": "GCLP"
  },
  {
    "name": "Lanzarote Airport",
    "city": "Arrecife",
    "country": "Spain",
    "iata": "ACE",
    "icao": "GCRR"
  },
  {
    "name": "Tenerife South Airport",
    "city": "Tenerife",
    "country": "Spain",
    "iata": "TFS",
    "icao": "GCTS"
  },
  {
    "name": "Tenerife Norte Airport",
    "city": "Tenerife",
    "country": "Spain",
    "iata": "TFN",
    "icao": "GCXO"
  },
  {
    "name": "Melilla Airport",
    "city": "Melilla",
    "country": "Spain",
    "iata": "MLN",
    "icao": "GEML"
  },
  {
    "name": "Lungi International Airport",
    "city": "Freetown",
    "country": "Sierra Leone",
    "iata": "FNA",
    "icao": "GFLL"
  },
  {
    "name": "Cufar Airport",
    "city": "Cufar",
    "country": "Guinea-Bissau",
    "iata": "NONE",
    "icao": "GGCF"
  },
  {
    "name": "Spriggs Payne Airport",
    "city": "Monrovia",
    "country": "Liberia",
    "iata": "MLW",
    "icao": "GLMR"
  },
  {
    "name": "Roberts International Airport",
    "city": "Monrovia",
    "country": "Liberia",
    "iata": "ROB",
    "icao": "GLRB"
  },
  {
    "name": "Al Massira Airport",
    "city": "Agadir",
    "country": "Morocco",
    "iata": "AGA",
    "icao": "GMAD"
  },
  {
    "name": "Tan Tan Airport",
    "city": "Tan Tan",
    "country": "Morocco",
    "iata": "TTA",
    "icao": "GMAT"
  },
  {
    "name": "Saïss Airport",
    "city": "Fes",
    "country": "Morocco",
    "iata": "FEZ",
    "icao": "GMFF"
  },
  {
    "name": "Ifrane Airport",
    "city": "Ifrane",
    "country": "Morocco",
    "iata": "NONE",
    "icao": "GMFI"
  },
  {
    "name": "Moulay Ali Cherif Airport",
    "city": "Er-rachidia",
    "country": "Morocco",
    "iata": "ERH",
    "icao": "GMFK"
  },
  {
    "name": "Bassatine Airport",
    "city": "Meknes",
    "country": "Morocco",
    "iata": "MEK",
    "icao": "GMFM"
  },
  {
    "name": "Angads Airport",
    "city": "Oujda",
    "country": "Morocco",
    "iata": "OUD",
    "icao": "GMFO"
  },
  {
    "name": "Ben Slimane Airport",
    "city": "Ben Slimane",
    "country": "Morocco",
    "iata": "NONE",
    "icao": "GMMB"
  },
  {
    "name": "Rabat-Salé Airport",
    "city": "Rabat",
    "country": "Morocco",
    "iata": "RBA",
    "icao": "GMME"
  },
  {
    "name": "Mohammed V International Airport",
    "city": "Casablanca",
    "country": "Morocco",
    "iata": "CMN",
    "icao": "GMMN"
  },
  {
    "name": "Menara Airport",
    "city": "Marrakech",
    "country": "Morocco",
    "iata": "RAK",
    "icao": "GMMX"
  },
  {
    "name": "Kenitra Airport",
    "city": "Kentira",
    "country": "Morocco",
    "iata": "NNA",
    "icao": "GMMY"
  },
  {
    "name": "Ouarzazate Airport",
    "city": "Ouarzazate",
    "country": "Morocco",
    "iata": "OZZ",
    "icao": "GMMZ"
  },
  {
    "name": "Cherif Al Idrissi Airport",
    "city": "Al Hociema",
    "country": "Morocco",
    "iata": "AHU",
    "icao": "GMTA"
  },
  {
    "name": "Saniat R'mel Airport",
    "city": "Tetouan",
    "country": "Morocco",
    "iata": "TTU",
    "icao": "GMTN"
  },
  {
    "name": "Ibn Batouta Airport",
    "city": "Tanger",
    "country": "Morocco",
    "iata": "TNG",
    "icao": "GMTT"
  },
  {
    "name": "Ziguinchor Airport",
    "city": "Ziguinchor",
    "country": "Senegal",
    "iata": "ZIG",
    "icao": "GOGG"
  },
  {
    "name": "Cap Skirring Airport",
    "city": "Cap Skiring",
    "country": "Senegal",
    "iata": "CSK",
    "icao": "GOGS"
  },
  {
    "name": "Kaolack Airport",
    "city": "Kaolack",
    "country": "Senegal",
    "iata": "KLC",
    "icao": "GOOK"
  },
  {
    "name": "Léopold Sédar Senghor International Airport",
    "city": "Dakar",
    "country": "Senegal",
    "iata": "DKR",
    "icao": "GOOY"
  },
  {
    "name": "Saint Louis Airport",
    "city": "St. Louis",
    "country": "Senegal",
    "iata": "XLS",
    "icao": "GOSS"
  },
  {
    "name": "Bakel Airport",
    "city": "Bakel",
    "country": "Senegal",
    "iata": "BXE",
    "icao": "GOTB"
  },
  {
    "name": "Kédougou Airport",
    "city": "Kedougou",
    "country": "Senegal",
    "iata": "KGG",
    "icao": "GOTK"
  },
  {
    "name": "Tambacounda Airport",
    "city": "Tambacounda",
    "country": "Senegal",
    "iata": "TUD",
    "icao": "GOTT"
  },
  {
    "name": "Aioun el Atrouss Airport",
    "city": "Aioun El Atrouss",
    "country": "Mauritania",
    "iata": "IEO",
    "icao": "GQNA"
  },
  {
    "name": "Tidjikja Airport",
    "city": "Tidjikja",
    "country": "Mauritania",
    "iata": "TIY",
    "icao": "GQND"
  },
  {
    "name": "Kiffa Airport",
    "city": "Kiffa",
    "country": "Mauritania",
    "iata": "KFA",
    "icao": "GQNF"
  },
  {
    "name": "Néma Airport",
    "city": "Nema",
    "country": "Mauritania",
    "iata": "EMN",
    "icao": "GQNI"
  },
  {
    "name": "Kaédi Airport",
    "city": "Kaedi",
    "country": "Mauritania",
    "iata": "KED",
    "icao": "GQNK"
  },
  {
    "name": "Nouakchott International Airport",
    "city": "Nouakschott",
    "country": "Mauritania",
    "iata": "NKC",
    "icao": "GQNN"
  },
  {
    "name": "Sélibaby Airport",
    "city": "Selibabi",
    "country": "Mauritania",
    "iata": "SEY",
    "icao": "GQNS"
  },
  {
    "name": "Atar International Airport",
    "city": "Atar",
    "country": "Mauritania",
    "iata": "ATR",
    "icao": "GQPA"
  },
  {
    "name": "Nouadhibou International Airport",
    "city": "Nouadhibou",
    "country": "Mauritania",
    "iata": "NDB",
    "icao": "GQPP"
  },
  {
    "name": "Bir Moghrein Airport",
    "city": "Bir Moghrein",
    "country": "Mauritania",
    "iata": "NONE",
    "icao": "GQPT"
  },
  {
    "name": "Fria Airport",
    "city": "Fira",
    "country": "Guinea",
    "iata": "FIG",
    "icao": "GUFA"
  },
  {
    "name": "Faranah Airport",
    "city": "Faranah",
    "country": "Guinea",
    "iata": "FAA",
    "icao": "GUFH"
  },
  {
    "name": "Tata Airport",
    "city": "Labe",
    "country": "Guinea",
    "iata": "LEK",
    "icao": "GULB"
  },
  {
    "name": "Amílcar Cabral International Airport",
    "city": "Amilcar Cabral",
    "country": "Cape Verde",
    "iata": "SID",
    "icao": "GVAC"
  },
  {
    "name": "Rabil Airport",
    "city": "Boa Vista",
    "country": "Cape Verde",
    "iata": "BVC",
    "icao": "GVBA"
  },
  {
    "name": "Maio Airport",
    "city": "Maio",
    "country": "Cape Verde",
    "iata": "MMO",
    "icao": "GVMA"
  },
  {
    "name": "Preguiça Airport",
    "city": "Sao Nocolau Island",
    "country": "Cape Verde",
    "iata": "SNE",
    "icao": "GVSN"
  },
  {
    "name": "São Pedro Airport",
    "city": "Sao Vicente Island",
    "country": "Cape Verde",
    "iata": "VXE",
    "icao": "GVSV"
  },
  {
    "name": "Addis Ababa Bole International Airport",
    "city": "Addis Ababa",
    "country": "Ethiopia",
    "iata": "ADD",
    "icao": "HAAB"
  },
  {
    "name": "Lideta Army Airport",
    "city": "Addis Ababa",
    "country": "Ethiopia",
    "iata": "NONE",
    "icao": "HAAL"
  },
  {
    "name": "Arba Minch Airport",
    "city": "Arba Minch",
    "country": "Ethiopia",
    "iata": "AMH",
    "icao": "HAAM"
  },
  {
    "name": "Axum Airport",
    "city": "Axum",
    "country": "Ethiopia",
    "iata": "AXU",
    "icao": "HAAX"
  },
  {
    "name": "Bahir Dar Airport",
    "city": "Bahar Dar",
    "country": "Ethiopia",
    "iata": "BJR",
    "icao": "HABD"
  },
  {
    "name": "Aba Tenna Dejazmach Yilma International Airport",
    "city": "Dire Dawa",
    "country": "Ethiopia",
    "iata": "DIR",
    "icao": "HADR"
  },
  {
    "name": "Gambella Airport",
    "city": "Gambella",
    "country": "Ethiopia",
    "iata": "GMB",
    "icao": "HAGM"
  },
  {
    "name": "Gonder Airport",
    "city": "Gondar",
    "country": "Ethiopia",
    "iata": "GDQ",
    "icao": "HAGN"
  },
  {
    "name": "Jimma Airport",
    "city": "Jimma",
    "country": "Ethiopia",
    "iata": "JIM",
    "icao": "HAJM"
  },
  {
    "name": "Lalibella Airport",
    "city": "Lalibella",
    "country": "Ethiopia",
    "iata": "LLI",
    "icao": "HALL"
  },
  {
    "name": "Mekele Airport",
    "city": "Makale",
    "country": "Ethiopia",
    "iata": "MQX",
    "icao": "HAMK"
  },
  {
    "name": "Asosa Airport",
    "city": "Asosa",
    "country": "Ethiopia",
    "iata": "ASO",
    "icao": "HASO"
  },
  {
    "name": "Bujumbura International Airport",
    "city": "Bujumbura",
    "country": "Burundi",
    "iata": "BJM",
    "icao": "HBBA"
  },
  {
    "name": "Egal International Airport",
    "city": "Hargeisa",
    "country": "Somalia",
    "iata": "HGA",
    "icao": "HCMH"
  },
  {
    "name": "Berbera Airport",
    "city": "Berbera",
    "country": "Somalia",
    "iata": "BBO",
    "icao": "HCMI"
  },
  {
    "name": "Kisimayu Airport",
    "city": "Kismayu",
    "country": "Somalia",
    "iata": "KMU",
    "icao": "HCMK"
  },
  {
    "name": "El Nouzha Airport",
    "city": "Alexandria",
    "country": "Egypt",
    "iata": "ALY",
    "icao": "HEAX"
  },
  {
    "name": "Abu Simbel Airport",
    "city": "Abu Simbel",
    "country": "Egypt",
    "iata": "ABS",
    "icao": "HEBL"
  },
  {
    "name": "Cairo International Airport",
    "city": "Cairo",
    "country": "Egypt",
    "iata": "CAI",
    "icao": "HECA"
  },
  {
    "name": "Cairo West Airport",
    "city": "Cairo",
    "country": "Egypt",
    "iata": "NONE",
    "icao": "HECW"
  },
  {
    "name": "Hurghada International Airport",
    "city": "Hurghada",
    "country": "Egypt",
    "iata": "HRG",
    "icao": "HEGN"
  },
  {
    "name": "El Gora Airport",
    "city": "El Gorah",
    "country": "Egypt",
    "iata": "EGR",
    "icao": "HEGR"
  },
  {
    "name": "Luxor International Airport",
    "city": "Luxor",
    "country": "Egypt",
    "iata": "LXR",
    "icao": "HELX"
  },
  {
    "name": "Mersa Matruh Airport",
    "city": "Mersa-matruh",
    "country": "Egypt",
    "iata": "MUH",
    "icao": "HEMM"
  },
  {
    "name": "Port Said Airport",
    "city": "Port Said",
    "country": "Egypt",
    "iata": "PSD",
    "icao": "HEPS"
  },
  {
    "name": "St Catherine International Airport",
    "city": "St. Catherine",
    "country": "Egypt",
    "iata": "SKV",
    "icao": "HESC"
  },
  {
    "name": "Aswan International Airport",
    "city": "Aswan",
    "country": "Egypt",
    "iata": "ASW",
    "icao": "HESN"
  },
  {
    "name": "El Tor Airport",
    "city": "El-tor",
    "country": "Egypt",
    "iata": "ELT",
    "icao": "HETR"
  },
  {
    "name": "Eldoret International Airport",
    "city": "Eldoret",
    "country": "Kenya",
    "iata": "EDL",
    "icao": "HKEL"
  },
  {
    "name": "Kakamega Airport",
    "city": "Kakamega",
    "country": "Kenya",
    "iata": "NONE",
    "icao": "HKKG"
  },
  {
    "name": "Kisumu Airport",
    "city": "Kisumu",
    "country": "Kenya",
    "iata": "KIS",
    "icao": "HKKI"
  },
  {
    "name": "Kitale Airport",
    "city": "Kitale",
    "country": "Kenya",
    "iata": "KTL",
    "icao": "HKKT"
  },
  {
    "name": "Lodwar Airport",
    "city": "Lodwar",
    "country": "Kenya",
    "iata": "LOK",
    "icao": "HKLO"
  },
  {
    "name": "Manda Airstrip",
    "city": "Lamu",
    "country": "Kenya",
    "iata": "LAU",
    "icao": "HKLU"
  },
  {
    "name": "Mombasa Moi International Airport",
    "city": "Mombasa",
    "country": "Kenya",
    "iata": "MBA",
    "icao": "HKMO"
  },
  {
    "name": "Naivasha Airport",
    "city": "Naivasha",
    "country": "Kenya",
    "iata": "NONE",
    "icao": "HKNV"
  },
  {
    "name": "Nairobi Wilson Airport",
    "city": "Nairobi",
    "country": "Kenya",
    "iata": "WIL",
    "icao": "HKNW"
  },
  {
    "name": "Moi Air Base",
    "city": "Nairobi",
    "country": "Kenya",
    "iata": "NONE",
    "icao": "HKRE"
  },
  {
    "name": "Wajir Airport",
    "city": "Wajir",
    "country": "Kenya",
    "iata": "WJR",
    "icao": "HKWJ"
  },
  {
    "name": "Bu Attifel Airport",
    "city": "Buattifel",
    "country": "Libya",
    "iata": "NONE",
    "icao": "HLFL"
  },
  {
    "name": "Warehouse 59e Airport",
    "city": "Giallo",
    "country": "Libya",
    "iata": "NONE",
    "icao": "HLGL"
  },
  {
    "name": "Ghat Airport",
    "city": "Ghat",
    "country": "Libya",
    "iata": "GHT",
    "icao": "HLGT"
  },
  {
    "name": "Kufra Airport",
    "city": "Kufra",
    "country": "Libya",
    "iata": "AKF",
    "icao": "HLKF"
  },
  {
    "name": "Benina International Airport",
    "city": "Benghazi",
    "country": "Libya",
    "iata": "BEN",
    "icao": "HLLB"
  },
  {
    "name": "Sabha Airport",
    "city": "Sebha",
    "country": "Libya",
    "iata": "SEB",
    "icao": "HLLS"
  },
  {
    "name": "Tripoli International Airport",
    "city": "Tripoli",
    "country": "Libya",
    "iata": "TIP",
    "icao": "HLLT"
  },
  {
    "name": "Marsa Brega Airport",
    "city": "Marsa Brega",
    "country": "Libya",
    "iata": "NONE",
    "icao": "HLMB"
  },
  {
    "name": "Ras Lanuf Oil Airport",
    "city": "Ras Lanouf V 40",
    "country": "Libya",
    "iata": "NONE",
    "icao": "HLNF"
  },
  {
    "name": "Hon Airport",
    "city": "Hon",
    "country": "Libya",
    "iata": "NONE",
    "icao": "HLON"
  },
  {
    "name": "Dahra Airport",
    "city": "Dahra",
    "country": "Libya",
    "iata": "NONE",
    "icao": "HLRA"
  },
  {
    "name": "Ghadames East Airport",
    "city": "Ghadames",
    "country": "Libya",
    "iata": "LTD",
    "icao": "HLTD"
  },
  {
    "name": "Zella 74 Airport",
    "city": "Zella 74",
    "country": "Libya",
    "iata": "NONE",
    "icao": "HLZA"
  },
  {
    "name": "Gisenyi Airport",
    "city": "Gisenyi",
    "country": "Rwanda",
    "iata": "GYI",
    "icao": "HRYG"
  },
  {
    "name": "Kigali International Airport",
    "city": "Kigali",
    "country": "Rwanda",
    "iata": "KGL",
    "icao": "HRYR"
  },
  {
    "name": "Kamembe Airport",
    "city": "Kamembe",
    "country": "Rwanda",
    "iata": "KME",
    "icao": "HRZA"
  },
  {
    "name": "Dongola Airport",
    "city": "Dongola",
    "country": "Sudan",
    "iata": "DOG",
    "icao": "HSDN"
  },
  {
    "name": "Damazin Airport",
    "city": "Damazin",
    "country": "Sudan",
    "iata": "NONE",
    "icao": "HSDZ"
  },
  {
    "name": "El Fasher Airport",
    "city": "El Fasher",
    "country": "Sudan",
    "iata": "ELF",
    "icao": "HSFS"
  },
  {
    "name": "Kassala Airport",
    "city": "Kassala",
    "country": "Sudan",
    "iata": "KSL",
    "icao": "HSKA"
  },
  {
    "name": "Kadugli Airport",
    "city": "Kadugli",
    "country": "Sudan",
    "iata": "NONE",
    "icao": "HSLI"
  },
  {
    "name": "El Obeid Airport",
    "city": "El Obeid",
    "country": "Sudan",
    "iata": "EBD",
    "icao": "HSOB"
  },
  {
    "name": "Juba International Airport",
    "city": "Juba",
    "country": "South Sudan",
    "iata": "JUB",
    "icao": "HSSJ"
  },
  {
    "name": "Malakal Airport",
    "city": "Malakal",
    "country": "Sudan",
    "iata": "MAK",
    "icao": "HSSM"
  },
  {
    "name": "Khartoum International Airport",
    "city": "Khartoum",
    "country": "Sudan",
    "iata": "KRT",
    "icao": "HSSS"
  },
  {
    "name": "Arusha Airport",
    "city": "Arusha",
    "country": "Tanzania",
    "iata": "ARK",
    "icao": "HTAR"
  },
  {
    "name": "Julius Nyerere International Airport",
    "city": "Dar Es Salaam",
    "country": "Tanzania",
    "iata": "DAR",
    "icao": "HTDA"
  },
  {
    "name": "Dodoma Airport",
    "city": "Dodoma",
    "country": "Tanzania",
    "iata": "DOD",
    "icao": "HTDO"
  },
  {
    "name": "Iringa Airport",
    "city": "Iringa",
    "country": "Tanzania",
    "iata": "IRI",
    "icao": "HTIR"
  },
  {
    "name": "Kilimanjaro International Airport",
    "city": "Kilimanjaro",
    "country": "Tanzania",
    "iata": "JRO",
    "icao": "HTKJ"
  },
  {
    "name": "Lake Manyara Airport",
    "city": "Lake Manyara",
    "country": "Tanzania",
    "iata": "LKY",
    "icao": "HTLM"
  },
  {
    "name": "Mtwara Airport",
    "city": "Mtwara",
    "country": "Tanzania",
    "iata": "MYW",
    "icao": "HTMT"
  },
  {
    "name": "Mwanza Airport",
    "city": "Mwanza",
    "country": "Tanzania",
    "iata": "MWZ",
    "icao": "HTMW"
  },
  {
    "name": "Pemba Airport",
    "city": "Pemba",
    "country": "Tanzania",
    "iata": "PMA",
    "icao": "HTPE"
  },
  {
    "name": "Tanga Airport",
    "city": "Tanga",
    "country": "Tanzania",
    "iata": "TGT",
    "icao": "HTTG"
  },
  {
    "name": "Abeid Amani Karume International Airport",
    "city": "Zanzibar",
    "country": "Tanzania",
    "iata": "ZNZ",
    "icao": "HTZA"
  },
  {
    "name": "Entebbe International Airport",
    "city": "Entebbe",
    "country": "Uganda",
    "iata": "EBB",
    "icao": "HUEN"
  },
  {
    "name": "Soroti Airport",
    "city": "Soroti",
    "country": "Uganda",
    "iata": "SRT",
    "icao": "HUSO"
  },
  {
    "name": "Tirana International Airport Mother Teresa",
    "city": "Tirana",
    "country": "Albania",
    "iata": "TIA",
    "icao": "LATI"
  },
  {
    "name": "Burgas Airport",
    "city": "Bourgas",
    "country": "Bulgaria",
    "iata": "BOJ",
    "icao": "LBBG"
  },
  {
    "name": "Gorna Oryahovitsa Airport",
    "city": "Gorna Orechovica",
    "country": "Bulgaria",
    "iata": "GOZ",
    "icao": "LBGO"
  },
  {
    "name": "Plovdiv International Airport",
    "city": "Plovdiv",
    "country": "Bulgaria",
    "iata": "PDV",
    "icao": "LBPD"
  },
  {
    "name": "Sofia Airport",
    "city": "Sofia",
    "country": "Bulgaria",
    "iata": "SOF",
    "icao": "LBSF"
  },
  {
    "name": "Stara Zagora Airport",
    "city": "Stara Zagora",
    "country": "Bulgaria",
    "iata": "NONE",
    "icao": "LBSZ"
  },
  {
    "name": "Varna Airport",
    "city": "Varna",
    "country": "Bulgaria",
    "iata": "VAR",
    "icao": "LBWN"
  },
  {
    "name": "Larnaca International Airport",
    "city": "Larnaca",
    "country": "Cyprus",
    "iata": "LCA",
    "icao": "LCLK"
  },
  {
    "name": "Paphos International Airport",
    "city": "Paphos",
    "country": "Cyprus",
    "iata": "PFO",
    "icao": "LCPH"
  },
  {
    "name": "RAF Akrotiri",
    "city": "Akrotiri",
    "country": "Cyprus",
    "iata": "AKT",
    "icao": "LCRA"
  },
  {
    "name": "Dubrovnik Airport",
    "city": "Dubrovnik",
    "country": "Croatia",
    "iata": "DBV",
    "icao": "LDDU"
  },
  {
    "name": "Osijek-Čepin Airfield",
    "city": "Cepin",
    "country": "Croatia",
    "iata": "NONE",
    "icao": "LDOC"
  },
  {
    "name": "Osijek Airport",
    "city": "Osijek",
    "country": "Croatia",
    "iata": "OSI",
    "icao": "LDOS"
  },
  {
    "name": "Pula Airport",
    "city": "Pula",
    "country": "Croatia",
    "iata": "PUY",
    "icao": "LDPL"
  },
  {
    "name": "Grobnicko Polje Airport",
    "city": "Grobnik",
    "country": "Croatia",
    "iata": "NONE",
    "icao": "LDRG"
  },
  {
    "name": "Rijeka Airport",
    "city": "Rijeka",
    "country": "Croatia",
    "iata": "RJK",
    "icao": "LDRI"
  },
  {
    "name": "Split Airport",
    "city": "Split",
    "country": "Croatia",
    "iata": "SPU",
    "icao": "LDSP"
  },
  {
    "name": "Varaždin Airport",
    "city": "Varazdin",
    "country": "Croatia",
    "iata": "NONE",
    "icao": "LDVA"
  },
  {
    "name": "Zagreb Airport",
    "city": "Zagreb",
    "country": "Croatia",
    "iata": "ZAG",
    "icao": "LDZA"
  },
  {
    "name": "Zemunik Airport",
    "city": "Zadar",
    "country": "Croatia",
    "iata": "ZAD",
    "icao": "LDZD"
  },
  {
    "name": "Udbina Air Base",
    "city": "Udbina",
    "country": "Croatia",
    "iata": "NONE",
    "icao": "LDZU"
  },
  {
    "name": "Albacete-Los Llanos Airport",
    "city": "Albacete",
    "country": "Spain",
    "iata": "NONE",
    "icao": "LEAB"
  },
  {
    "name": "Alicante International Airport",
    "city": "Alicante",
    "country": "Spain",
    "iata": "ALC",
    "icao": "LEAL"
  },
  {
    "name": "Almería International Airport",
    "city": "Almeria",
    "country": "Spain",
    "iata": "LEI",
    "icao": "LEAM"
  },
  {
    "name": "Asturias Airport",
    "city": "Aviles",
    "country": "Spain",
    "iata": "OVD",
    "icao": "LEAS"
  },
  {
    "name": "Córdoba Airport",
    "city": "Cordoba",
    "country": "Spain",
    "iata": "ODB",
    "icao": "LEBA"
  },
  {
    "name": "Bilbao Airport",
    "city": "Bilbao",
    "country": "Spain",
    "iata": "BIO",
    "icao": "LEBB"
  },
  {
    "name": "Barcelona International Airport",
    "city": "Barcelona",
    "country": "Spain",
    "iata": "BCN",
    "icao": "LEBL"
  },
  {
    "name": "Badajoz Airport",
    "city": "Badajoz",
    "country": "Spain",
    "iata": "BJZ",
    "icao": "LEBZ"
  },
  {
    "name": "A Coruña Airport",
    "city": "La Coruna",
    "country": "Spain",
    "iata": "LCG",
    "icao": "LECO"
  },
  {
    "name": "Armilla Air Base",
    "city": "Granada",
    "country": "Spain",
    "iata": "NONE",
    "icao": "LEGA"
  },
  {
    "name": "Girona Airport",
    "city": "Gerona",
    "country": "Spain",
    "iata": "GRO",
    "icao": "LEGE"
  },
  {
    "name": "Federico Garcia Lorca Airport",
    "city": "Granada",
    "country": "Spain",
    "iata": "GRX",
    "icao": "LEGR"
  },
  {
    "name": "Getafe Air Base",
    "city": "Madrid",
    "country": "Spain",
    "iata": "NONE",
    "icao": "LEGT"
  },
  {
    "name": "Ibiza Airport",
    "city": "Ibiza",
    "country": "Spain",
    "iata": "IBZ",
    "icao": "LEIB"
  },
  {
    "name": "Jerez Airport",
    "city": "Jerez",
    "country": "Spain",
    "iata": "XRY",
    "icao": "LEJR"
  },
  {
    "name": "San Javier Airport",
    "city": "Murcia",
    "country": "Spain",
    "iata": "MJV",
    "icao": "LELC"
  },
  {
    "name": "Adolfo Suárez Madrid–Barajas Airport",
    "city": "Madrid",
    "country": "Spain",
    "iata": "MAD",
    "icao": "LEMD"
  },
  {
    "name": "Málaga Airport",
    "city": "Malaga",
    "country": "Spain",
    "iata": "AGP",
    "icao": "LEMG"
  },
  {
    "name": "Menorca Airport",
    "city": "Menorca",
    "country": "Spain",
    "iata": "MAH",
    "icao": "LEMH"
  },
  {
    "name": "Moron Air Base",
    "city": "Sevilla",
    "country": "Spain",
    "iata": "OZP",
    "icao": "LEMO"
  },
  {
    "name": "Ocaña Airport",
    "city": "Ocana",
    "country": "Spain",
    "iata": "NONE",
    "icao": "LEOC"
  },
  {
    "name": "Pamplona Airport",
    "city": "Pamplona",
    "country": "Spain",
    "iata": "PNA",
    "icao": "LEPP"
  },
  {
    "name": "Alcantarilla Air Base",
    "city": "Murcia",
    "country": "Spain",
    "iata": "NONE",
    "icao": "LERI"
  },
  {
    "name": "Reus Air Base",
    "city": "Reus",
    "country": "Spain",
    "iata": "REU",
    "icao": "LERS"
  },
  {
    "name": "Rota Naval Station Airport",
    "city": "Rota",
    "country": "Spain",
    "iata": "NONE",
    "icao": "LERT"
  },
  {
    "name": "Salamanca Airport",
    "city": "Salamanca",
    "country": "Spain",
    "iata": "SLM",
    "icao": "LESA"
  },
  {
    "name": "Son Bonet Airport",
    "city": "Son Bonet",
    "country": "Spain",
    "iata": "NONE",
    "icao": "LESB"
  },
  {
    "name": "San Luis Airport",
    "city": "San Luis",
    "country": "Spain",
    "iata": "NONE",
    "icao": "LESL"
  },
  {
    "name": "San Sebastian Airport",
    "city": "San Sebastian",
    "country": "Spain",
    "iata": "EAS",
    "icao": "LESO"
  },
  {
    "name": "Santiago de Compostela Airport",
    "city": "Santiago",
    "country": "Spain",
    "iata": "SCQ",
    "icao": "LEST"
  },
  {
    "name": "Pirineus - la Seu d'Urgel Airport",
    "city": "Seo De Urgel",
    "country": "Spain",
    "iata": "LEU",
    "icao": "LESU"
  },
  {
    "name": "Torrejón Airport",
    "city": "Madrid",
    "country": "Spain",
    "iata": "TOJ",
    "icao": "LETO"
  },
  {
    "name": "Valencia Airport",
    "city": "Valencia",
    "country": "Spain",
    "iata": "VLC",
    "icao": "LEVC"
  },
  {
    "name": "Valladolid Airport",
    "city": "Valladolid",
    "country": "Spain",
    "iata": "VLL",
    "icao": "LEVD"
  },
  {
    "name": "Vitoria/Foronda Airport",
    "city": "Vitoria",
    "country": "Spain",
    "iata": "VIT",
    "icao": "LEVT"
  },
  {
    "name": "Vigo Airport",
    "city": "Vigo",
    "country": "Spain",
    "iata": "VGO",
    "icao": "LEVX"
  },
  {
    "name": "Santander Airport",
    "city": "Santander",
    "country": "Spain",
    "iata": "SDR",
    "icao": "LEXJ"
  },
  {
    "name": "Zaragoza Air Base",
    "city": "Zaragoza",
    "country": "Spain",
    "iata": "ZAZ",
    "icao": "LEZG"
  },
  {
    "name": "Sevilla Airport",
    "city": "Sevilla",
    "country": "Spain",
    "iata": "SVQ",
    "icao": "LEZL"
  },
  {
    "name": "Calais-Dunkerque Airport",
    "city": "Calais",
    "country": "France",
    "iata": "CQF",
    "icao": "LFAC"
  },
  {
    "name": "Péronne-Saint-Quentin Airport",
    "city": "Peronne",
    "country": "France",
    "iata": "NONE",
    "icao": "LFAG"
  },
  {
    "name": "Nangis-Les Loges Airport",
    "city": "Nangis",
    "country": "France",
    "iata": "NONE",
    "icao": "LFAI"
  },
  {
    "name": "Bagnoles-de-l'Orne-Couterne Airport",
    "city": "Bagnole-de-l'orne",
    "country": "France",
    "iata": "NONE",
    "icao": "LFAO"
  },
  {
    "name": "Albert-Bray Airport",
    "city": "Albert",
    "country": "France",
    "iata": "NONE",
    "icao": "LFAQ"
  },
  {
    "name": "Le Touquet-Côte d'Opale Airport",
    "city": "Le Tourquet",
    "country": "France",
    "iata": "LTQ",
    "icao": "LFAT"
  },
  {
    "name": "Valenciennes-Denain Airport",
    "city": "Valenciennes",
    "country": "France",
    "iata": "NONE",
    "icao": "LFAV"
  },
  {
    "name": "Amiens-Glisy Airport",
    "city": "Amiens",
    "country": "France",
    "iata": "NONE",
    "icao": "LFAY"
  },
  {
    "name": "Agen-La Garenne Airport",
    "city": "Agen",
    "country": "France",
    "iata": "AGF",
    "icao": "LFBA"
  },
  {
    "name": "Cazaux (BA 120) Air Base",
    "city": "Cazaux",
    "country": "France",
    "iata": "NONE",
    "icao": "LFBC"
  },
  {
    "name": "Bordeaux-Mérignac Airport",
    "city": "Bordeaux",
    "country": "France",
    "iata": "BOD",
    "icao": "LFBD"
  },
  {
    "name": "Bergerac-Roumanière Airport",
    "city": "Bergerac",
    "country": "France",
    "iata": "EGC",
    "icao": "LFBE"
  },
  {
    "name": "Toulouse-Francazal (BA 101) Air Base",
    "city": "Toulouse",
    "country": "France",
    "iata": "NONE",
    "icao": "LFBF"
  },
  {
    "name": "Cognac-Châteaubernard (BA 709) Air Base",
    "city": "Cognac",
    "country": "France",
    "iata": "CNG",
    "icao": "LFBG"
  },
  {
    "name": "Poitiers-Biard Airport",
    "city": "Poitiers",
    "country": "France",
    "iata": "PIS",
    "icao": "LFBI"
  },
  {
    "name": "Montluçon-Guéret Airport",
    "city": "Montlucon-gueret",
    "country": "France",
    "iata": "MCU",
    "icao": "LFBK"
  },
  {
    "name": "Limoges Airport",
    "city": "Limoges",
    "country": "France",
    "iata": "LIG",
    "icao": "LFBL"
  },
  {
    "name": "Mont-de-Marsan (BA 118) Air Base",
    "city": "Mont-de-marsan",
    "country": "France",
    "iata": "NONE",
    "icao": "LFBM"
  },
  {
    "name": "Niort-Souché Airport",
    "city": "Niort",
    "country": "France",
    "iata": "NIT",
    "icao": "LFBN"
  },
  {
    "name": "Toulouse-Blagnac Airport",
    "city": "Toulouse",
    "country": "France",
    "iata": "TLS",
    "icao": "LFBO"
  },
  {
    "name": "Pau Pyrénées Airport",
    "city": "Pau",
    "country": "France",
    "iata": "PUF",
    "icao": "LFBP"
  },
  {
    "name": "Muret-Lherm Airport",
    "city": "La Rochelle",
    "country": "France",
    "iata": "NONE",
    "icao": "LFBR"
  },
  {
    "name": "Tarbes-Lourdes-Pyrénées Airport",
    "city": "Tarbes",
    "country": "France",
    "iata": "LDE",
    "icao": "LFBT"
  },
  {
    "name": "Angoulême-Brie-Champniers Airport",
    "city": "Angouleme",
    "country": "France",
    "iata": "ANG",
    "icao": "LFBU"
  },
  {
    "name": "Toul Rosières Air Base",
    "city": "Brive",
    "country": "France",
    "iata": "BVE",
    "icao": "LFSL"
  },
  {
    "name": "Périgueux-Bassillac Airport",
    "city": "Perigueux",
    "country": "France",
    "iata": "PGX",
    "icao": "LFBX"
  },
  {
    "name": "Biarritz-Anglet-Bayonne Airport",
    "city": "Biarritz-bayonne",
    "country": "France",
    "iata": "BIQ",
    "icao": "LFBZ"
  },
  {
    "name": "Cahors-Lalbenque Airport",
    "city": "Cahors",
    "country": "France",
    "iata": "NONE",
    "icao": "LFCC"
  },
  {
    "name": "Saint-Girons-Antichan Airport",
    "city": "St.-girons",
    "country": "France",
    "iata": "NONE",
    "icao": "LFCG"
  },
  {
    "name": "Arcachon-La Teste-de-Buch Airport",
    "city": "Arcachon",
    "country": "France",
    "iata": "XAC",
    "icao": "LFCH"
  },
  {
    "name": "Albi-Le Séquestre Airport",
    "city": "Albi",
    "country": "France",
    "iata": "LBI",
    "icao": "LFCI"
  },
  {
    "name": "Castres-Mazamet Airport",
    "city": "Castres",
    "country": "France",
    "iata": "DCM",
    "icao": "LFCK"
  },
  {
    "name": "Toulouse-Lasbordes Airport",
    "city": "Toulouse",
    "country": "France",
    "iata": "NONE",
    "icao": "LFCL"
  },
  {
    "name": "Millau-Larzac Airport",
    "city": "Millau",
    "country": "France",
    "iata": "NONE",
    "icao": "LFCM"
  },
  {
    "name": "Graulhet-Montdragon Airport",
    "city": "Graulhet",
    "country": "France",
    "iata": "NONE",
    "icao": "LFCQ"
  },
  {
    "name": "Rodez-Marcillac Airport",
    "city": "Rodez",
    "country": "France",
    "iata": "RDZ",
    "icao": "LFCR"
  },
  {
    "name": "Ussel-Thalamy Airport",
    "city": "Ussel",
    "country": "France",
    "iata": "NONE",
    "icao": "LFCU"
  },
  {
    "name": "Villeneuve-sur-Lot Airport",
    "city": "Villeneuve-sur-lot",
    "country": "France",
    "iata": "NONE",
    "icao": "LFCW"
  },
  {
    "name": "Royan-Médis Airport",
    "city": "Royan",
    "country": "France",
    "iata": "RYN",
    "icao": "LFCY"
  },
  {
    "name": "Mimizan Airport",
    "city": "Mimizan",
    "country": "France",
    "iata": "NONE",
    "icao": "LFCZ"
  },
  {
    "name": "Aire-sur-l'Adour Airport",
    "city": "Aire-sur-l'adour",
    "country": "France",
    "iata": "NONE",
    "icao": "LFDA"
  },
  {
    "name": "Montauban Airport",
    "city": "Montauban",
    "country": "France",
    "iata": "NONE",
    "icao": "LFDB"
  },
  {
    "name": "Auch-Lamothe Airport",
    "city": "Auch",
    "country": "France",
    "iata": "NONE",
    "icao": "LFDH"
  },
  {
    "name": "Libourne-Artigues-de-Lussac Airport",
    "city": "Libourne",
    "country": "France",
    "iata": "NONE",
    "icao": "LFDI"
  },
  {
    "name": "Pamiers-Les Pujols Airport",
    "city": "Pamiers",
    "country": "France",
    "iata": "NONE",
    "icao": "LFDJ"
  },
  {
    "name": "Marmande-Virazeil Airport",
    "city": "Marmande",
    "country": "France",
    "iata": "NONE",
    "icao": "LFDM"
  },
  {
    "name": "Rochefort-Saint-Agnant (BA 721) Airport",
    "city": "Rochefort",
    "country": "France",
    "iata": "RCO",
    "icao": "LFDN"
  },
  {
    "name": "Pontivy Airport",
    "city": "Pontivy",
    "country": "France",
    "iata": "NONE",
    "icao": "LFED"
  },
  {
    "name": "Aubigny-sur-Nère Airport",
    "city": "Aubigny-sur-nere",
    "country": "France",
    "iata": "NONE",
    "icao": "LFEH"
  },
  {
    "name": "Guiscriff Scaer Airport",
    "city": "Guiscriff-scaer",
    "country": "France",
    "iata": "NONE",
    "icao": "LFES"
  },
  {
    "name": "Ancenis Airport",
    "city": "Ancenis",
    "country": "France",
    "iata": "NONE",
    "icao": "LFFI"
  },
  {
    "name": "Brienne-le-Château Airport",
    "city": "Brienne-le Chateau",
    "country": "France",
    "iata": "NONE",
    "icao": "LFFN"
  },
  {
    "name": "Colmar-Houssen Airport",
    "city": "Colmar",
    "country": "France",
    "iata": "CMR",
    "icao": "LFGA"
  },
  {
    "name": "Beaune-Challanges Airport",
    "city": "Beaune",
    "country": "France",
    "iata": "NONE",
    "icao": "LFGF"
  },
  {
    "name": "Dole-Tavaux Airport",
    "city": "Dole",
    "country": "France",
    "iata": "DLE",
    "icao": "LFGJ"
  },
  {
    "name": "Joigny Airport",
    "city": "Joigny",
    "country": "France",
    "iata": "NONE",
    "icao": "LFGK"
  },
  {
    "name": "Verdun-Le Rozelier Airfield",
    "city": "Verdun",
    "country": "France",
    "iata": "NONE",
    "icao": "LFGW"
  },
  {
    "name": "Aubenas-Ardèche Méridional Airport",
    "city": "Aubenas-vals-lanas",
    "country": "France",
    "iata": "OBS",
    "icao": "LFHO"
  },
  {
    "name": "Le Puy-Loudes Airport",
    "city": "Le Puy",
    "country": "France",
    "iata": "LPY",
    "icao": "LFHP"
  },
  {
    "name": "Saint-Flour-Coltines Airport",
    "city": "St.-flour",
    "country": "France",
    "iata": "NONE",
    "icao": "LFHQ"
  },
  {
    "name": "Bourg-Ceyzériat Airport",
    "city": "Bourg",
    "country": "France",
    "iata": "XBK",
    "icao": "LFHS"
  },
  {
    "name": "Villefranche-Tarare Airport",
    "city": "Vilefrance",
    "country": "France",
    "iata": "XVF",
    "icao": "LFHV"
  },
  {
    "name": "Moulins-Montbeugny Airport",
    "city": "Moulins",
    "country": "France",
    "iata": "XMU",
    "icao": "LFHY"
  },
  {
    "name": "Saint-Affrique-Belmont Airport",
    "city": "St.-afrique-belmont",
    "country": "France",
    "iata": "NONE",
    "icao": "LFIF"
  },
  {
    "name": "Cassagnes-Bégonhès Airport",
    "city": "Cassagnes-beghones",
    "country": "France",
    "iata": "NONE",
    "icao": "LFIG"
  },
  {
    "name": "Metz-Nancy-Lorraine Airport",
    "city": "Metz",
    "country": "France",
    "iata": "ETZ",
    "icao": "LFJL"
  },
  {
    "name": "Bastia-Poretta Airport",
    "city": "Bastia",
    "country": "France",
    "iata": "BIA",
    "icao": "LFKB"
  },
  {
    "name": "Calvi-Sainte-Catherine Airport",
    "city": "Calvi",
    "country": "France",
    "iata": "CLY",
    "icao": "LFKC"
  },
  {
    "name": "Figari Sud-Corse Airport",
    "city": "Figari",
    "country": "France",
    "iata": "FSC",
    "icao": "LFKF"
  },
  {
    "name": "Ajaccio-Napoléon Bonaparte Airport",
    "city": "Ajaccio",
    "country": "France",
    "iata": "AJA",
    "icao": "LFKJ"
  },
  {
    "name": "Propriano Airport",
    "city": "Propriano",
    "country": "France",
    "iata": "NONE",
    "icao": "LFKO"
  },
  {
    "name": "Solenzara (BA 126) Air Base",
    "city": "Solenzara",
    "country": "France",
    "iata": "SOZ",
    "icao": "LFKS"
  },
  {
    "name": "Corte Airport",
    "city": "Corte",
    "country": "France",
    "iata": "NONE",
    "icao": "LFKT"
  },
  {
    "name": "Auxerre-Branches Airport",
    "city": "Auxerre",
    "country": "France",
    "iata": "AUF",
    "icao": "LFLA"
  },
  {
    "name": "Chambéry-Savoie Airport",
    "city": "Chambery",
    "country": "France",
    "iata": "CMF",
    "icao": "LFLB"
  },
  {
    "name": "Clermont-Ferrand Auvergne Airport",
    "city": "Clermont-Ferrand",
    "country": "France",
    "iata": "CFE",
    "icao": "LFLC"
  },
  {
    "name": "Bourges Airport",
    "city": "Bourges",
    "country": "France",
    "iata": "BOU",
    "icao": "LFLD"
  },
  {
    "name": "Chambéry-Challes-les-Eaux Airport",
    "city": "Chambery",
    "country": "France",
    "iata": "NONE",
    "icao": "LFLE"
  },
  {
    "name": "Chalon-Champforgeuil Airport",
    "city": "Chalon",
    "country": "France",
    "iata": "XCD",
    "icao": "LFLH"
  },
  {
    "name": "Annemasse Airport",
    "city": "Annemasse",
    "country": "France",
    "iata": "QNJ",
    "icao": "LFLI"
  },
  {
    "name": "Lyon Saint-Exupéry Airport",
    "city": "Lyon",
    "country": "France",
    "iata": "LYS",
    "icao": "LFLL"
  },
  {
    "name": "Mâcon-Charnay Airport",
    "city": "Macon",
    "country": "France",
    "iata": "QNX",
    "icao": "LFLM"
  },
  {
    "name": "Saint-Yan Airport",
    "city": "St.-yan",
    "country": "France",
    "iata": "NONE",
    "icao": "LFLN"
  },
  {
    "name": "Roanne-Renaison Airport",
    "city": "Roanne",
    "country": "France",
    "iata": "RNE",
    "icao": "LFLO"
  },
  {
    "name": "Annecy-Haute-Savoie-Mont Blanc Airport",
    "city": "Annecy",
    "country": "France",
    "iata": "NCY",
    "icao": "LFLP"
  },
  {
    "name": "Grenoble-Isère Airport",
    "city": "Grenoble",
    "country": "France",
    "iata": "GNB",
    "icao": "LFLS"
  },
  {
    "name": "Montluçon-Domérat Airport",
    "city": "Montlucon",
    "country": "France",
    "iata": "NONE",
    "icao": "LFLT"
  },
  {
    "name": "Valence-Chabeuil Airport",
    "city": "Valence",
    "country": "France",
    "iata": "VAF",
    "icao": "LFLU"
  },
  {
    "name": "Vichy-Charmeil Airport",
    "city": "Vichy",
    "country": "France",
    "iata": "VHY",
    "icao": "LFLV"
  },
  {
    "name": "Aurillac Airport",
    "city": "Aurillac",
    "country": "France",
    "iata": "AUR",
    "icao": "LFLW"
  },
  {
    "name": "Lyon-Bron Airport",
    "city": "Lyon",
    "country": "France",
    "iata": "LYN",
    "icao": "LFLY"
  },
  {
    "name": "Aix-en-Provence (BA 114) Airport",
    "city": "Aix-les-milles",
    "country": "France",
    "iata": "QXB",
    "icao": "LFMA"
  },
  {
    "name": "Le Luc-Le Cannet Airport",
    "city": "Le Luc",
    "country": "France",
    "iata": "NONE",
    "icao": "LFMC"
  },
  {
    "name": "Cannes-Mandelieu Airport",
    "city": "Cannes",
    "country": "France",
    "iata": "CEQ",
    "icao": "LFMD"
  },
  {
    "name": "Saint-Étienne-Bouthéon Airport",
    "city": "St-Etienne",
    "country": "France",
    "iata": "EBU",
    "icao": "LFMH"
  },
  {
    "name": "Istres Le Tubé/Istres Air Base (BA 125) Airport",
    "city": "Istres",
    "country": "France",
    "iata": "NONE",
    "icao": "LFMI"
  },
  {
    "name": "Carcassonne Airport",
    "city": "Carcassonne",
    "country": "France",
    "iata": "CCF",
    "icao": "LFMK"
  },
  {
    "name": "Marseille Provence Airport",
    "city": "Marseille",
    "country": "France",
    "iata": "MRS",
    "icao": "LFML"
  },
  {
    "name": "Nice-Côte d'Azur Airport",
    "city": "Nice",
    "country": "France",
    "iata": "NCE",
    "icao": "LFMN"
  },
  {
    "name": "Orange-Caritat (BA 115) Air Base",
    "city": "Orange",
    "country": "France",
    "iata": "NONE",
    "icao": "LFMO"
  },
  {
    "name": "Perpignan-Rivesaltes (Llabanère) Airport",
    "city": "Perpignan",
    "country": "France",
    "iata": "PGF",
    "icao": "LFMP"
  },
  {
    "name": "Le Castellet Airport",
    "city": "Le Castellet",
    "country": "France",
    "iata": "CTT",
    "icao": "LFMQ"
  },
  {
    "name": "Alès-Deaux Airport",
    "city": "Ales",
    "country": "France",
    "iata": "NONE",
    "icao": "LFMS"
  },
  {
    "name": "Montpellier-Méditerranée Airport",
    "city": "Montpellier",
    "country": "France",
    "iata": "MPL",
    "icao": "LFMT"
  },
  {
    "name": "Béziers-Vias Airport",
    "city": "Beziers",
    "country": "France",
    "iata": "BZR",
    "icao": "LFMU"
  },
  {
    "name": "Avignon-Caumont Airport",
    "city": "Avignon",
    "country": "France",
    "iata": "AVN",
    "icao": "LFMV"
  },
  {
    "name": "Salon-de-Provence (BA 701) Air Base",
    "city": "Salon",
    "country": "France",
    "iata": "NONE",
    "icao": "LFMY"
  },
  {
    "name": "Lézignan-Corbières Airport",
    "city": "Lezignan-corbieres",
    "country": "France",
    "iata": "NONE",
    "icao": "LFMZ"
  },
  {
    "name": "Mende-Brenoux Airport",
    "city": "Mende",
    "country": "France",
    "iata": "MEN",
    "icao": "LFNB"
  },
  {
    "name": "Carpentras Airport",
    "city": "Carpentras",
    "country": "France",
    "iata": "NONE",
    "icao": "LFNH"
  },
  {
    "name": "Avord (BA 702) Air Base",
    "city": "Avord",
    "country": "France",
    "iata": "NONE",
    "icao": "LFOA"
  },
  {
    "name": "Paris Beauvais Tillé Airport",
    "city": "Beauvais",
    "country": "France",
    "iata": "BVA",
    "icao": "LFOB"
  },
  {
    "name": "Châteaudun (BA 279) Air Base",
    "city": "Chateaudun",
    "country": "France",
    "iata": "NONE",
    "icao": "LFOC"
  },
  {
    "name": "Saumur-Saint-Florent Airport",
    "city": "Saumur",
    "country": "France",
    "iata": "NONE",
    "icao": "LFOD"
  },
  {
    "name": "Évreux-Fauville (BA 105) Air Base",
    "city": "Evreux",
    "country": "France",
    "iata": "NONE",
    "icao": "LFOE"
  },
  {
    "name": "Le Havre Octeville Airport",
    "city": "Le Havre",
    "country": "France",
    "iata": "LEH",
    "icao": "LFOH"
  },
  {
    "name": "Abbeville",
    "city": "Abbeville",
    "country": "France",
    "iata": "NONE",
    "icao": "LFOI"
  },
  {
    "name": "Orléans-Bricy (BA 123) Air Base",
    "city": "Orleans",
    "country": "France",
    "iata": "ORE",
    "icao": "LFOJ"
  },
  {
    "name": "Châlons-Vatry Air Base",
    "city": "Chalons",
    "country": "France",
    "iata": "XCR",
    "icao": "LFOK"
  },
  {
    "name": "Rouen Airport",
    "city": "Rouen",
    "country": "France",
    "iata": "URO",
    "icao": "LFOP"
  },
  {
    "name": "Tours-Val-de-Loire Airport",
    "city": "Tours",
    "country": "France",
    "iata": "TUF",
    "icao": "LFOT"
  },
  {
    "name": "Cholet Le Pontreau Airport",
    "city": "Cholet",
    "country": "France",
    "iata": "CET",
    "icao": "LFOU"
  },
  {
    "name": "Laval-Entrammes Airport",
    "city": "Laval",
    "country": "France",
    "iata": "LVA",
    "icao": "LFOV"
  },
  {
    "name": "Orléans-Saint-Denis-de-l'Hôtel Airport",
    "city": "Orleans",
    "country": "France",
    "iata": "NONE",
    "icao": "LFOZ"
  },
  {
    "name": "Paris-Le Bourget Airport",
    "city": "Paris",
    "country": "France",
    "iata": "LBG",
    "icao": "LFPB"
  },
  {
    "name": "Creil Air Base",
    "city": "Creil",
    "country": "France",
    "iata": "CSF",
    "icao": "LFPC"
  },
  {
    "name": "Charles de Gaulle International Airport",
    "city": "Paris",
    "country": "France",
    "iata": "CDG",
    "icao": "LFPG"
  },
  {
    "name": "Coulommiers-Voisins Airport",
    "city": "Coulommiers",
    "country": "France",
    "iata": "NONE",
    "icao": "LFPK"
  },
  {
    "name": "Melun-Villaroche Air Base",
    "city": "Melun",
    "country": "France",
    "iata": "NONE",
    "icao": "LFPM"
  },
  {
    "name": "Toussus-le-Noble Airport",
    "city": "Toussous-le-noble",
    "country": "France",
    "iata": "TNF",
    "icao": "LFPN"
  },
  {
    "name": "Paris-Orly Airport",
    "city": "Paris",
    "country": "France",
    "iata": "ORY",
    "icao": "LFPO"
  },
  {
    "name": "Pontoise - Cormeilles-en-Vexin Airport",
    "city": "Pontoise",
    "country": "France",
    "iata": "POX",
    "icao": "LFPT"
  },
  {
    "name": "Villacoublay-Vélizy (BA 107) Air Base",
    "city": "Villacoublay",
    "country": "France",
    "iata": "NONE",
    "icao": "LFPV"
  },
  {
    "name": "Reims-Prunay Airport",
    "city": "Reims",
    "country": "France",
    "iata": "NONE",
    "icao": "LFQA"
  },
  {
    "name": "Troyes-Barberey Airport",
    "city": "Troyes",
    "country": "France",
    "iata": "QYR",
    "icao": "LFQB"
  },
  {
    "name": "Lunéville-Croismare Airport",
    "city": "Luneville",
    "country": "France",
    "iata": "NONE",
    "icao": "LFQC"
  },
  {
    "name": "Étain-Rouvres Air Base",
    "city": "Etain",
    "country": "France",
    "iata": "NONE",
    "icao": "LFQE"
  },
  {
    "name": "Autun-Bellevue Airport",
    "city": "Autun",
    "country": "France",
    "iata": "NONE",
    "icao": "LFQF"
  },
  {
    "name": "Nevers-Fourchambault Airport",
    "city": "Nevers",
    "country": "France",
    "iata": "NVS",
    "icao": "LFQG"
  },
  {
    "name": "Cambrai-Épinoy (BA 103) Air Base",
    "city": "Cambrai",
    "country": "France",
    "iata": "NONE",
    "icao": "LFQI"
  },
  {
    "name": "Maubeuge-Élesmes Airport",
    "city": "Maubeuge",
    "country": "France",
    "iata": "NONE",
    "icao": "LFQJ"
  },
  {
    "name": "Besançon-La Vèze Airport",
    "city": "Besancon-la-veze",
    "country": "France",
    "iata": "NONE",
    "icao": "LFQM"
  },
  {
    "name": "Phalsbourg-Bourscheid Air Base",
    "city": "Phalsbourg",
    "country": "France",
    "iata": "NONE",
    "icao": "LFQP"
  },
  {
    "name": "Lille-Lesquin Airport",
    "city": "Lille",
    "country": "France",
    "iata": "LIL",
    "icao": "LFQQ"
  },
  {
    "name": "Merville-Calonne Airport",
    "city": "Merville",
    "country": "France",
    "iata": "NONE",
    "icao": "LFQT"
  },
  {
    "name": "Charleville-Mézières Airport",
    "city": "Charleville",
    "country": "France",
    "iata": "NONE",
    "icao": "LFQV"
  },
  {
    "name": "Vesoul-Frotey Airport",
    "city": "Vesoul-frotey",
    "country": "France",
    "iata": "NONE",
    "icao": "LFQW"
  },
  {
    "name": "Brest Bretagne Airport",
    "city": "Brest",
    "country": "France",
    "iata": "BES",
    "icao": "LFRB"
  },
  {
    "name": "Cherbourg-Maupertus Airport",
    "city": "Cherbourg",
    "country": "France",
    "iata": "CER",
    "icao": "LFRC"
  },
  {
    "name": "Dinard-Pleurtuit-Saint-Malo Airport",
    "city": "Dinard",
    "country": "France",
    "iata": "DNR",
    "icao": "LFRD"
  },
  {
    "name": "La Baule-Escoublac Airport",
    "city": "La Baule",
    "country": "France",
    "iata": "NONE",
    "icao": "LFRE"
  },
  {
    "name": "Granville Airport",
    "city": "Granville",
    "country": "France",
    "iata": "GFR",
    "icao": "LFRF"
  },
  {
    "name": "Deauville-Saint-Gatien Airport",
    "city": "Deauville",
    "country": "France",
    "iata": "DOL",
    "icao": "LFRG"
  },
  {
    "name": "Lorient South Brittany (Bretagne Sud) Airport",
    "city": "Lorient",
    "country": "France",
    "iata": "LRT",
    "icao": "LFRH"
  },
  {
    "name": "La Roche-sur-Yon Airport",
    "city": "La Roche-sur-yon",
    "country": "France",
    "iata": "EDM",
    "icao": "LFRI"
  },
  {
    "name": "Landivisiau Air Base",
    "city": "Landivisiau",
    "country": "France",
    "iata": "NONE",
    "icao": "LFRJ"
  },
  {
    "name": "Caen-Carpiquet Airport",
    "city": "Caen",
    "country": "France",
    "iata": "CFR",
    "icao": "LFRK"
  },
  {
    "name": "Lanvéoc-Poulmic Air Base",
    "city": "Lanvedoc",
    "country": "France",
    "iata": "NONE",
    "icao": "LFRL"
  },
  {
    "name": "Le Mans-Arnage Airport",
    "city": "Le Mans",
    "country": "France",
    "iata": "LME",
    "icao": "LFRM"
  },
  {
    "name": "Rennes-Saint-Jacques Airport",
    "city": "Rennes",
    "country": "France",
    "iata": "RNS",
    "icao": "LFRN"
  },
  {
    "name": "Lannion-Côte de Granit Airport",
    "city": "Lannion",
    "country": "France",
    "iata": "LAI",
    "icao": "LFRO"
  },
  {
    "name": "Quimper-Cornouaille Airport",
    "city": "Quimper",
    "country": "France",
    "iata": "UIP",
    "icao": "LFRQ"
  },
  {
    "name": "Nantes Atlantique Airport",
    "city": "Nantes",
    "country": "France",
    "iata": "NTE",
    "icao": "LFRS"
  },
  {
    "name": "Saint-Brieuc-Armor Airport",
    "city": "St.-brieuc Armor",
    "country": "France",
    "iata": "SBK",
    "icao": "LFRT"
  },
  {
    "name": "Morlaix-Ploujean Airport",
    "city": "Morlaix",
    "country": "France",
    "iata": "MXN",
    "icao": "LFRU"
  },
  {
    "name": "Vannes-Meucon Airport",
    "city": "Vannes",
    "country": "France",
    "iata": "VNE",
    "icao": "LFRV"
  },
  {
    "name": "Saint-Nazaire-Montoir Airport",
    "city": "St.-nazaire",
    "country": "France",
    "iata": "SNR",
    "icao": "LFRZ"
  },
  {
    "name": "EuroAirport Basel-Mulhouse-Freiburg Airport",
    "city": "Mulhouse",
    "country": "France",
    "iata": "BSL",
    "icao": "LFSB"
  },
  {
    "name": "Colmar-Meyenheim Air Base",
    "city": "Colmar",
    "country": "France",
    "iata": "NONE",
    "icao": "LFSC"
  },
  {
    "name": "Dijon-Bourgogne Airport",
    "city": "Dijon",
    "country": "France",
    "iata": "DIJ",
    "icao": "LFSD"
  },
  {
    "name": "Metz-Frescaty (BA 128) Air Base",
    "city": "Metz",
    "country": "France",
    "iata": "MZM",
    "icao": "LFSF"
  },
  {
    "name": "Épinal-Mirecourt Airport",
    "city": "Epinal",
    "country": "France",
    "iata": "EPL",
    "icao": "LFSG"
  },
  {
    "name": "Haguenau Airport",
    "city": "Haguenau",
    "country": "France",
    "iata": "NONE",
    "icao": "LFSH"
  },
  {
    "name": "Saint-Dizier-Robinson (BA 113) Air Base",
    "city": "St.-dizier",
    "country": "France",
    "iata": "NONE",
    "icao": "LFSI"
  },
  {
    "name": "Montbéliard-Courcelles Airfield",
    "city": "Montbeliard",
    "country": "France",
    "iata": "NONE",
    "icao": "LFSM"
  },
  {
    "name": "Nancy-Essey Airport",
    "city": "Nancy",
    "country": "France",
    "iata": "ENC",
    "icao": "LFSN"
  },
  {
    "name": "Nancy-Ochey (BA 133) Air Base",
    "city": "Nancy",
    "country": "France",
    "iata": "NONE",
    "icao": "LFSO"
  },
  {
    "name": "Pontarlier Airport",
    "city": "Pontarlier",
    "country": "France",
    "iata": "NONE",
    "icao": "LFSP"
  },
  {
    "name": "Reims-Champagne (BA 112) Air Base",
    "city": "Reims",
    "country": "France",
    "iata": "RHE",
    "icao": "LFSR"
  },
  {
    "name": "Strasbourg Airport",
    "city": "Strasbourg",
    "country": "France",
    "iata": "SXB",
    "icao": "LFST"
  },
  {
    "name": "Luxeuil-Saint-Sauveur (BA 116) Air Base",
    "city": "Luxeuil",
    "country": "France",
    "iata": "NONE",
    "icao": "LFSX"
  },
  {
    "name": "Cuers-Pierrefeu Airport",
    "city": "Cuers",
    "country": "France",
    "iata": "NONE",
    "icao": "LFTF"
  },
  {
    "name": "Toulon-Hyères Airport",
    "city": "Hyeres",
    "country": "France",
    "iata": "TLN",
    "icao": "LFTH"
  },
  {
    "name": "Nîmes-Arles-Camargue Airport",
    "city": "Nimes",
    "country": "France",
    "iata": "FNI",
    "icao": "LFTW"
  },
  {
    "name": "Miquelon Airport",
    "city": "Miquelon",
    "country": "Saint Pierre and Miquelon",
    "iata": "MQC",
    "icao": "LFVM"
  },
  {
    "name": "St Pierre Airport",
    "city": "St.-pierre",
    "country": "Saint Pierre and Miquelon",
    "iata": "FSP",
    "icao": "LFVP"
  },
  {
    "name": "Ambérieu Air Base (BA 278)",
    "city": "Amberieu",
    "country": "France",
    "iata": "NONE",
    "icao": "LFXA"
  },
  {
    "name": "Damblain Airport",
    "city": "Damblain",
    "country": "France",
    "iata": "NONE",
    "icao": "LFYD"
  },
  {
    "name": "Andravida Air Base",
    "city": "Andravida",
    "country": "Greece",
    "iata": "PYR",
    "icao": "LGAD"
  },
  {
    "name": "Agrinion Air Base",
    "city": "Agrinion",
    "country": "Greece",
    "iata": "AGQ",
    "icao": "LGAG"
  },
  {
    "name": "Dimokritos Airport",
    "city": "Alexandroupolis",
    "country": "Greece",
    "iata": "AXD",
    "icao": "LGAL"
  },
  {
    "name": "Alexandria Airport",
    "city": "Alexandria",
    "country": "Greece",
    "iata": "NONE",
    "icao": "LGAX"
  },
  {
    "name": "Nea Anchialos Airport",
    "city": "Nea Anghialos",
    "country": "Greece",
    "iata": "VOL",
    "icao": "LGBL"
  },
  {
    "name": "Elefsis Airport",
    "city": "Elefsis",
    "country": "Greece",
    "iata": "NONE",
    "icao": "LGEL"
  },
  {
    "name": "Chios Island National Airport",
    "city": "Chios",
    "country": "Greece",
    "iata": "JKH",
    "icao": "LGHI"
  },
  {
    "name": "Ioannina Airport",
    "city": "Ioannina",
    "country": "Greece",
    "iata": "IOA",
    "icao": "LGIO"
  },
  {
    "name": "Heraklion International Nikos Kazantzakis Airport",
    "city": "Heraklion",
    "country": "Greece",
    "iata": "HER",
    "icao": "LGIR"
  },
  {
    "name": "Kastoria National Airport",
    "city": "Kastoria",
    "country": "Greece",
    "iata": "KSO",
    "icao": "LGKA"
  },
  {
    "name": "Kithira Airport",
    "city": "Kithira",
    "country": "Greece",
    "iata": "KIT",
    "icao": "LGKC"
  },
  {
    "name": "Kefallinia Airport",
    "city": "Keffallinia",
    "country": "Greece",
    "iata": "EFL",
    "icao": "LGKF"
  },
  {
    "name": "Kalamata Airport",
    "city": "Kalamata",
    "country": "Greece",
    "iata": "KLX",
    "icao": "LGKL"
  },
  {
    "name": "Amigdhaleon Airport",
    "city": "Kavala",
    "country": "Greece",
    "iata": "NONE",
    "icao": "LGKM"
  },
  {
    "name": "Kos Airport",
    "city": "Kos",
    "country": "Greece",
    "iata": "KGS",
    "icao": "LGKO"
  },
  {
    "name": "Karpathos Airport",
    "city": "Karpathos",
    "country": "Greece",
    "iata": "AOK",
    "icao": "LGKP"
  },
  {
    "name": "Ioannis Kapodistrias International Airport",
    "city": "Kerkyra/corfu",
    "country": "Greece",
    "iata": "CFU",
    "icao": "LGKR"
  },
  {
    "name": "Kasos Airport",
    "city": "Kasos",
    "country": "Greece",
    "iata": "KSJ",
    "icao": "LGKS"
  },
  {
    "name": "Alexander the Great International Airport",
    "city": "Kavala",
    "country": "Greece",
    "iata": "KVA",
    "icao": "LGKV"
  },
  {
    "name": "Filippos Airport",
    "city": "Kozani",
    "country": "Greece",
    "iata": "KZI",
    "icao": "LGKZ"
  },
  {
    "name": "Leros Airport",
    "city": "Leros",
    "country": "Greece",
    "iata": "LRS",
    "icao": "LGLE"
  },
  {
    "name": "Limnos Airport",
    "city": "Limnos",
    "country": "Greece",
    "iata": "LXS",
    "icao": "LGLM"
  },
  {
    "name": "Larisa Airport",
    "city": "Larissa",
    "country": "Greece",
    "iata": "LRA",
    "icao": "LGLR"
  },
  {
    "name": "Megara Airport",
    "city": "Megara",
    "country": "Greece",
    "iata": "NONE",
    "icao": "LGMG"
  },
  {
    "name": "Mikonos Airport",
    "city": "Mykonos",
    "country": "Greece",
    "iata": "JMK",
    "icao": "LGMK"
  },
  {
    "name": "Mytilene International Airport",
    "city": "Mytilini",
    "country": "Greece",
    "iata": "MJT",
    "icao": "LGMT"
  },
  {
    "name": "Aktion National Airport",
    "city": "Preveza",
    "country": "Greece",
    "iata": "PVK",
    "icao": "LGPZ"
  },
  {
    "name": "Maritsa Airport",
    "city": "Rhodos",
    "country": "Greece",
    "iata": "NONE",
    "icao": "LGRD"
  },
  {
    "name": "Diagoras Airport",
    "city": "Rhodos",
    "country": "Greece",
    "iata": "RHO",
    "icao": "LGRP"
  },
  {
    "name": "Araxos Airport",
    "city": "Patras",
    "country": "Greece",
    "iata": "GPA",
    "icao": "LGRX"
  },
  {
    "name": "Chania International Airport",
    "city": "Chania",
    "country": "Greece",
    "iata": "CHQ",
    "icao": "LGSA"
  },
  {
    "name": "Skiathos Island National Airport",
    "city": "Skiathos",
    "country": "Greece",
    "iata": "JSI",
    "icao": "LGSK"
  },
  {
    "name": "Samos Airport",
    "city": "Samos",
    "country": "Greece",
    "iata": "SMI",
    "icao": "LGSM"
  },
  {
    "name": "Sparti Airport",
    "city": "Sparti",
    "country": "Greece",
    "iata": "NONE",
    "icao": "LGSP"
  },
  {
    "name": "Santorini Airport",
    "city": "Thira",
    "country": "Greece",
    "iata": "JTR",
    "icao": "LGSR"
  },
  {
    "name": "Sitia Airport",
    "city": "Sitia",
    "country": "Greece",
    "iata": "JSH",
    "icao": "LGST"
  },
  {
    "name": "Stefanovikion Air Base",
    "city": "Stefanovikion",
    "country": "Greece",
    "iata": "NONE",
    "icao": "LGSV"
  },
  {
    "name": "Skiros Airport",
    "city": "Skiros",
    "country": "Greece",
    "iata": "SKU",
    "icao": "LGSY"
  },
  {
    "name": "Tanagra Air Base",
    "city": "Tanagra",
    "country": "Greece",
    "iata": "NONE",
    "icao": "LGTG"
  },
  {
    "name": "Kasteli Airport",
    "city": "Kasteli",
    "country": "Greece",
    "iata": "NONE",
    "icao": "LGTL"
  },
  {
    "name": "Tripolis Airport",
    "city": "Tripolis",
    "country": "Greece",
    "iata": "NONE",
    "icao": "LGTP"
  },
  {
    "name": "Thessaloniki Macedonia International Airport",
    "city": "Thessaloniki",
    "country": "Greece",
    "iata": "SKG",
    "icao": "LGTS"
  },
  {
    "name": "Tatoi Airport",
    "city": "Dekelia",
    "country": "Greece",
    "iata": "NONE",
    "icao": "LGTT"
  },
  {
    "name": "Dionysios Solomos Airport",
    "city": "Zakynthos",
    "country": "Greece",
    "iata": "ZTH",
    "icao": "LGZA"
  },
  {
    "name": "Budapest Ferenc Liszt International Airport",
    "city": "Budapest",
    "country": "Hungary",
    "iata": "BUD",
    "icao": "LHBP"
  },
  {
    "name": "Debrecen International Airport",
    "city": "Debrecen",
    "country": "Hungary",
    "iata": "DEB",
    "icao": "LHDC"
  },
  {
    "name": "Kecskemét Airport",
    "city": "Kecskemet",
    "country": "Hungary",
    "iata": "NONE",
    "icao": "LHKE"
  },
  {
    "name": "Nyíregyháza Airport",
    "city": "Nyirregyhaza",
    "country": "Hungary",
    "iata": "NONE",
    "icao": "LHNY"
  },
  {
    "name": "Őcsény Airport",
    "city": "Ocseny",
    "country": "Hungary",
    "iata": "NONE",
    "icao": "LHOY"
  },
  {
    "name": "Szentkirályszabadja Airport",
    "city": "Azentkilyszabadja",
    "country": "Hungary",
    "iata": "NONE",
    "icao": "LHSA"
  },
  {
    "name": "Szolnok Airport",
    "city": "Szolnok",
    "country": "Hungary",
    "iata": "NONE",
    "icao": "LHSN"
  },
  {
    "name": "Amendola Air Base",
    "city": "Amendola",
    "country": "Italy",
    "iata": "NONE",
    "icao": "LIBA"
  },
  {
    "name": "Crotone Airport",
    "city": "Crotone",
    "country": "Italy",
    "iata": "CRV",
    "icao": "LIBC"
  },
  {
    "name": "Bari Karol Wojtyła Airport",
    "city": "Bari",
    "country": "Italy",
    "iata": "BRI",
    "icao": "LIBD"
  },
  {
    "name": "Lecce Galatina Air Base",
    "city": "Lecce",
    "country": "Italy",
    "iata": "LCC",
    "icao": "LIBN"
  },
  {
    "name": "Pescara International Airport",
    "city": "Pescara",
    "country": "Italy",
    "iata": "PSR",
    "icao": "LIBP"
  },
  {
    "name": "Brindisi – Salento Airport",
    "city": "Brindisi",
    "country": "Italy",
    "iata": "BDS",
    "icao": "LIBR"
  },
  {
    "name": "Gioia Del Colle Air Base",
    "city": "Gioia Del Colle",
    "country": "Italy",
    "iata": "NONE",
    "icao": "LIBV"
  },
  {
    "name": "Lamezia Terme Airport",
    "city": "Lamezia",
    "country": "Italy",
    "iata": "SUF",
    "icao": "LICA"
  },
  {
    "name": "Catania-Fontanarossa Airport",
    "city": "Catania",
    "country": "Italy",
    "iata": "CTA",
    "icao": "LICC"
  },
  {
    "name": "Lampedusa Airport",
    "city": "Lampedusa",
    "country": "Italy",
    "iata": "LMP",
    "icao": "LICD"
  },
  {
    "name": "Pantelleria Airport",
    "city": "Pantelleria",
    "country": "Italy",
    "iata": "PNL",
    "icao": "LICG"
  },
  {
    "name": "Falcone–Borsellino Airport",
    "city": "Palermo",
    "country": "Italy",
    "iata": "PMO",
    "icao": "LICJ"
  },
  {
    "name": "Palermo-Boccadifalco Airport",
    "city": "Palermo",
    "country": "Italy",
    "iata": "NONE",
    "icao": "LICP"
  },
  {
    "name": "Reggio Calabria Airport",
    "city": "Reggio Calabria",
    "country": "Italy",
    "iata": "REG",
    "icao": "LICR"
  },
  {
    "name": "Vincenzo Florio Airport Trapani-Birgi",
    "city": "Trapani",
    "country": "Italy",
    "iata": "TPS",
    "icao": "LICT"
  },
  {
    "name": "Sigonella Navy Air Base",
    "city": "Sigonella",
    "country": "Italy",
    "iata": "NSY",
    "icao": "LICZ"
  },
  {
    "name": "Alghero-Fertilia Airport",
    "city": "Alghero",
    "country": "Italy",
    "iata": "AHO",
    "icao": "LIEA"
  },
  {
    "name": "Decimomannu Air Base",
    "city": "Decimomannu",
    "country": "Italy",
    "iata": "DCI",
    "icao": "LIED"
  },
  {
    "name": "Cagliari Elmas Airport",
    "city": "Cagliari",
    "country": "Italy",
    "iata": "CAG",
    "icao": "LIEE"
  },
  {
    "name": "Olbia Costa Smeralda Airport",
    "city": "Olbia",
    "country": "Italy",
    "iata": "OLB",
    "icao": "LIEO"
  },
  {
    "name": "Tortolì Airport",
    "city": "Tortoli",
    "country": "Italy",
    "iata": "TTB",
    "icao": "LIET"
  },
  {
    "name": "Torino-Aeritalia Airport",
    "city": "Turin",
    "country": "Italy",
    "iata": "NONE",
    "icao": "LIMA"
  },
  {
    "name": "Milano-Bresso Airport",
    "city": "Milano",
    "country": "Italy",
    "iata": "NONE",
    "icao": "LIMB"
  },
  {
    "name": "Malpensa International Airport",
    "city": "Milano",
    "country": "Italy",
    "iata": "MXP",
    "icao": "LIMC"
  },
  {
    "name": "Il Caravaggio International Airport",
    "city": "Bergamo",
    "country": "Italy",
    "iata": "BGY",
    "icao": "LIME"
  },
  {
    "name": "Turin Airport",
    "city": "Torino",
    "country": "Italy",
    "iata": "TRN",
    "icao": "LIMF"
  },
  {
    "name": "Villanova D'Albenga International Airport",
    "city": "Albenga",
    "country": "Italy",
    "iata": "ALL",
    "icao": "LIMG"
  },
  {
    "name": "Genoa Cristoforo Colombo Airport",
    "city": "Genoa",
    "country": "Italy",
    "iata": "GOA",
    "icao": "LIMJ"
  },
  {
    "name": "Milano Linate Airport",
    "city": "Milan",
    "country": "Italy",
    "iata": "LIN",
    "icao": "LIML"
  },
  {
    "name": "Cameri Air Base [MIL]",
    "city": "Cameri",
    "country": "Italy",
    "iata": "NONE",
    "icao": "LIMN"
  },
  {
    "name": "Parma Airport",
    "city": "Parma",
    "country": "Italy",
    "iata": "PMF",
    "icao": "LIMP"
  },
  {
    "name": "Piacenza San Damiano Air Base",
    "city": "Piacenza",
    "country": "Italy",
    "iata": "QPZ",
    "icao": "LIMS"
  },
  {
    "name": "Cuneo International Airport",
    "city": "Cuneo",
    "country": "Italy",
    "iata": "CUF",
    "icao": "LIMZ"
  },
  {
    "name": "Aviano Air Base",
    "city": "Aviano",
    "country": "Italy",
    "iata": "AVB",
    "icao": "LIPA"
  },
  {
    "name": "Bolzano Airport",
    "city": "Bolzano",
    "country": "Italy",
    "iata": "BZO",
    "icao": "LIPB"
  },
  {
    "name": "Cervia Air Base",
    "city": "Cervia",
    "country": "Italy",
    "iata": "NONE",
    "icao": "LIPC"
  },
  {
    "name": "Bologna Guglielmo Marconi Airport",
    "city": "Bologna",
    "country": "Italy",
    "iata": "BLQ",
    "icao": "LIPE"
  },
  {
    "name": "Treviso-Sant'Angelo Airport",
    "city": "Treviso",
    "country": "Italy",
    "iata": "TSF",
    "icao": "LIPH"
  },
  {
    "name": "Rivolto Air Base",
    "city": "Rivolto",
    "country": "Italy",
    "iata": "NONE",
    "icao": "LIPI"
  },
  {
    "name": "Forlì Airport",
    "city": "Forli",
    "country": "Italy",
    "iata": "FRL",
    "icao": "LIPK"
  },
  {
    "name": "Ghedi Air Base",
    "city": "Ghedi",
    "country": "Italy",
    "iata": "NONE",
    "icao": "LIPL"
  },
  {
    "name": "Verona-Boscomantico Airport",
    "city": "Verona",
    "country": "Italy",
    "iata": "NONE",
    "icao": "LIPN"
  },
  {
    "name": "Brescia Airport",
    "city": "Brescia",
    "country": "Italy",
    "iata": "VBS",
    "icao": "LIPO"
  },
  {
    "name": "Trieste–Friuli Venezia Giulia Airport",
    "city": "Ronchi De Legionari",
    "country": "Italy",
    "iata": "TRS",
    "icao": "LIPQ"
  },
  {
    "name": "Federico Fellini International Airport",
    "city": "Rimini",
    "country": "Italy",
    "iata": "RMI",
    "icao": "LIPR"
  },
  {
    "name": "Istrana Air Base",
    "city": "Treviso",
    "country": "Italy",
    "iata": "NONE",
    "icao": "LIPS"
  },
  {
    "name": "Vicenza Airport",
    "city": "Vicenza",
    "country": "Italy",
    "iata": "VIC",
    "icao": "LIPT"
  },
  {
    "name": "Padova Airport",
    "city": "Padova",
    "country": "Italy",
    "iata": "QPA",
    "icao": "LIPU"
  },
  {
    "name": "Verona Villafranca Airport",
    "city": "Villafranca",
    "country": "Italy",
    "iata": "VRN",
    "icao": "LIPX"
  },
  {
    "name": "Venice Marco Polo Airport",
    "city": "Venice",
    "country": "Italy",
    "iata": "VCE",
    "icao": "LIPZ"
  },
  {
    "name": "Siena-Ampugnano Airport",
    "city": "Siena",
    "country": "Italy",
    "iata": "SAY",
    "icao": "LIQS"
  },
  {
    "name": "Ciampino–G. B. Pastine International Airport",
    "city": "Rome",
    "country": "Italy",
    "iata": "CIA",
    "icao": "LIRA"
  },
  {
    "name": "Pratica Di Mare Air Base",
    "city": "Pratica Di Mare",
    "country": "Italy",
    "iata": "NONE",
    "icao": "LIRE"
  },
  {
    "name": "Leonardo da Vinci–Fiumicino Airport",
    "city": "Rome",
    "country": "Italy",
    "iata": "FCO",
    "icao": "LIRF"
  },
  {
    "name": "Guidonia Air Base",
    "city": "Guidonia",
    "country": "Italy",
    "iata": "NONE",
    "icao": "LIRG"
  },
  {
    "name": "Marina Di Campo Airport",
    "city": "Marina Di Campo",
    "country": "Italy",
    "iata": "EBA",
    "icao": "LIRJ"
  },
  {
    "name": "Latina Air Base",
    "city": "Latina",
    "country": "Italy",
    "iata": "QLT",
    "icao": "LIRL"
  },
  {
    "name": "Grazzanise Airport",
    "city": "Grazzanise",
    "country": "Italy",
    "iata": "NONE",
    "icao": "LIRM"
  },
  {
    "name": "Naples International Airport",
    "city": "Naples",
    "country": "Italy",
    "iata": "NAP",
    "icao": "LIRN"
  },
  {
    "name": "Pisa International Airport",
    "city": "Pisa",
    "country": "Italy",
    "iata": "PSA",
    "icao": "LIRP"
  },
  {
    "name": "Peretola Airport",
    "city": "Florence",
    "country": "Italy",
    "iata": "FLR",
    "icao": "LIRQ"
  },
  {
    "name": "Grosseto Air Base",
    "city": "Grosseto",
    "country": "Italy",
    "iata": "GRS",
    "icao": "LIRS"
  },
  {
    "name": "Urbe Airport",
    "city": "Rome",
    "country": "Italy",
    "iata": "NONE",
    "icao": "LIRU"
  },
  {
    "name": "Viterbo Airport",
    "city": "Viterbo",
    "country": "Italy",
    "iata": "NONE",
    "icao": "LIRV"
  },
  {
    "name": "Perugia San Francesco d'Assisi – Umbria International Airport",
    "city": "Perugia",
    "country": "Italy",
    "iata": "PEG",
    "icao": "LIRZ"
  },
  {
    "name": "Cerklje Airport",
    "city": "Cerklje",
    "country": "Slovenia",
    "iata": "NONE",
    "icao": "LJCE"
  },
  {
    "name": "Ljubljana Jože Pučnik Airport",
    "city": "Ljubljana",
    "country": "Slovenia",
    "iata": "LJU",
    "icao": "LJLJ"
  },
  {
    "name": "Maribor Airport",
    "city": "Maribor",
    "country": "Slovenia",
    "iata": "MBX",
    "icao": "LJMB"
  },
  {
    "name": "Portoroz Airport",
    "city": "Portoroz",
    "country": "Slovenia",
    "iata": "POW",
    "icao": "LJPZ"
  },
  {
    "name": "Slovenj Gradec Airport",
    "city": "Slovenj Gradec",
    "country": "Slovenia",
    "iata": "NONE",
    "icao": "LJSG"
  },
  {
    "name": "České Budějovice Airport",
    "city": "Ceske Budejovice",
    "country": "Czech Republic",
    "iata": "NONE",
    "icao": "LKCS"
  },
  {
    "name": "Čáslav Air Base",
    "city": "Caslav",
    "country": "Czech Republic",
    "iata": "NONE",
    "icao": "LKCV"
  },
  {
    "name": "Hradec Králové Airport",
    "city": "Hradec Kralove",
    "country": "Czech Republic",
    "iata": "NONE",
    "icao": "LKHK"
  },
  {
    "name": "Hořovice Airport",
    "city": "Horovice",
    "country": "Czech Republic",
    "iata": "NONE",
    "icao": "LKHV"
  },
  {
    "name": "Kbely Air Base",
    "city": "Praha",
    "country": "Czech Republic",
    "iata": "NONE",
    "icao": "LKKB"
  },
  {
    "name": "Kunovice Airport",
    "city": "Kunovice",
    "country": "Czech Republic",
    "iata": "NONE",
    "icao": "LKKU"
  },
  {
    "name": "Karlovy Vary International Airport",
    "city": "Karlovy Vary",
    "country": "Czech Republic",
    "iata": "KLV",
    "icao": "LKKV"
  },
  {
    "name": "Plzeň-Líně Airport",
    "city": "Line",
    "country": "Czech Republic",
    "iata": "NONE",
    "icao": "LKLN"
  },
  {
    "name": "Mnichovo Hradiště Airport",
    "city": "Mnichovo Hradiste",
    "country": "Czech Republic",
    "iata": "NONE",
    "icao": "LKMH"
  },
  {
    "name": "Ostrava Leos Janáček Airport",
    "city": "Ostrava",
    "country": "Czech Republic",
    "iata": "OSR",
    "icao": "LKMT"
  },
  {
    "name": "Náměšť Air Base",
    "city": "Namest",
    "country": "Czech Republic",
    "iata": "NONE",
    "icao": "LKNA"
  },
  {
    "name": "Pardubice Airport",
    "city": "Pardubice",
    "country": "Czech Republic",
    "iata": "PED",
    "icao": "LKPD"
  },
  {
    "name": "Pribram Airport",
    "city": "Pribram",
    "country": "Czech Republic",
    "iata": "NONE",
    "icao": "LKPM"
  },
  {
    "name": "Přerov Air Base",
    "city": "Prerov",
    "country": "Czech Republic",
    "iata": "PRV",
    "icao": "LKPO"
  },
  {
    "name": "Václav Havel Airport Prague",
    "city": "Prague",
    "country": "Czech Republic",
    "iata": "PRG",
    "icao": "LKPR"
  },
  {
    "name": "Brno-Tuřany Airport",
    "city": "Brno",
    "country": "Czech Republic",
    "iata": "BRQ",
    "icao": "LKTB"
  },
  {
    "name": "Vodochody Airport",
    "city": "Vodochody",
    "country": "Czech Republic",
    "iata": "NONE",
    "icao": "LKVO"
  },
  {
    "name": "Ben Gurion International Airport",
    "city": "Tel-aviv",
    "country": "Israel",
    "iata": "TLV",
    "icao": "LLBG"
  },
  {
    "name": "Beersheba (Teyman) Airport",
    "city": "Beer-sheba",
    "country": "Israel",
    "iata": "BEV",
    "icao": "LLBS"
  },
  {
    "name": "Tel Nof Air Base",
    "city": "Tel-nof",
    "country": "Israel",
    "iata": "NONE",
    "icao": "LLEK"
  },
  {
    "name": "Ein Shemer Airfield",
    "city": "Eyn-shemer",
    "country": "Israel",
    "iata": "NONE",
    "icao": "LLES"
  },
  {
    "name": "Eilat Airport",
    "city": "Elat",
    "country": "Israel",
    "iata": "ETH",
    "icao": "LLET"
  },
  {
    "name": "Ein Yahav Airfield",
    "city": "Eyn-yahav",
    "country": "Israel",
    "iata": "NONE",
    "icao": "LLEY"
  },
  {
    "name": "Haifa International Airport",
    "city": "Haifa",
    "country": "Israel",
    "iata": "HFA",
    "icao": "LLHA"
  },
  {
    "name": "Hatzor Air Base",
    "city": "Haztor",
    "country": "Israel",
    "iata": "NONE",
    "icao": "LLHS"
  },
  {
    "name": "Ben Ya'akov Airport",
    "city": "Rosh Pina",
    "country": "Israel",
    "iata": "RPN",
    "icao": "LLIB"
  },
  {
    "name": "Megiddo Airport",
    "city": "Megido Airstrip",
    "country": "Israel",
    "iata": "NONE",
    "icao": "LLMG"
  },
  {
    "name": "Bar Yehuda Airfield",
    "city": "Metzada",
    "country": "Israel",
    "iata": "NONE",
    "icao": "LLMZ"
  },
  {
    "name": "Nevatim Air Base",
    "city": "Nevatim",
    "country": "Israel",
    "iata": "NONE",
    "icao": "LLNV"
  },
  {
    "name": "Ovda International Airport",
    "city": "Ovda",
    "country": "Israel",
    "iata": "VDA",
    "icao": "LLOV"
  },
  {
    "name": "Ramat David Air Base",
    "city": "Ramat David",
    "country": "Israel",
    "iata": "NONE",
    "icao": "LLRD"
  },
  {
    "name": "Ramon Air Base",
    "city": "Ramon",
    "country": "Israel",
    "iata": "NONE",
    "icao": "LLRM"
  },
  {
    "name": "Sde Dov Airport",
    "city": "Tel-aviv",
    "country": "Israel",
    "iata": "SDV",
    "icao": "LLSD"
  },
  {
    "name": "Malta International Airport",
    "city": "Malta",
    "country": "Malta",
    "iata": "MLA",
    "icao": "LMML"
  },
  {
    "name": "Wiener Neustadt East Airport",
    "city": "Wiener Neustadt Ost",
    "country": "Austria",
    "iata": "NONE",
    "icao": "LOAN"
  },
  {
    "name": "Wels Airport",
    "city": "Wels",
    "country": "Austria",
    "iata": "NONE",
    "icao": "LOLW"
  },
  {
    "name": "Graz Airport",
    "city": "Graz",
    "country": "Austria",
    "iata": "GRZ",
    "icao": "LOWG"
  },
  {
    "name": "Innsbruck Airport",
    "city": "Innsbruck",
    "country": "Austria",
    "iata": "INN",
    "icao": "LOWI"
  },
  {
    "name": "Linz Hörsching Airport",
    "city": "Linz",
    "country": "Austria",
    "iata": "LNZ",
    "icao": "LOWL"
  },
  {
    "name": "Salzburg Airport",
    "city": "Salzburg",
    "country": "Austria",
    "iata": "SZG",
    "icao": "LOWS"
  },
  {
    "name": "Vienna International Airport",
    "city": "Vienna",
    "country": "Austria",
    "iata": "VIE",
    "icao": "LOWW"
  },
  {
    "name": "Hinterstoisser Air Base",
    "city": "Zeltweg",
    "country": "Austria",
    "iata": "NONE",
    "icao": "LOXZ"
  },
  {
    "name": "Alverca Airport",
    "city": "Alverca",
    "country": "Portugal",
    "iata": "NONE",
    "icao": "LPAR"
  },
  {
    "name": "Santa Maria Airport",
    "city": "Santa Maria (island)",
    "country": "Portugal",
    "iata": "SMA",
    "icao": "LPAZ"
  },
  {
    "name": "Bragança Airport",
    "city": "Braganca",
    "country": "Portugal",
    "iata": "BGC",
    "icao": "LPBG"
  },
  {
    "name": "Beja International Airport",
    "city": "Beja (madeira)",
    "country": "Portugal",
    "iata": "NONE",
    "icao": "LPBJ"
  },
  {
    "name": "Braga Municipal Aerodrome",
    "city": "Braga",
    "country": "Portugal",
    "iata": "NONE",
    "icao": "LPBR"
  },
  {
    "name": "Coimbra Airport",
    "city": "Coimba",
    "country": "Portugal",
    "iata": "NONE",
    "icao": "LPCO"
  },
  {
    "name": "Cascais Airport",
    "city": "Cascais",
    "country": "Portugal",
    "iata": "NONE",
    "icao": "LPCS"
  },
  {
    "name": "Covilhã Airport",
    "city": "Covilha",
    "country": "Portugal",
    "iata": "NONE",
    "icao": "LPCV"
  },
  {
    "name": "Évora Airport",
    "city": "Evora",
    "country": "Portugal",
    "iata": "NONE",
    "icao": "LPEV"
  },
  {
    "name": "Flores Airport",
    "city": "Flores",
    "country": "Portugal",
    "iata": "FLW",
    "icao": "LPFL"
  },
  {
    "name": "Faro Airport",
    "city": "Faro",
    "country": "Portugal",
    "iata": "FAO",
    "icao": "LPFR"
  },
  {
    "name": "Graciosa Airport",
    "city": "Graciosa Island",
    "country": "Portugal",
    "iata": "GRW",
    "icao": "LPGR"
  },
  {
    "name": "Horta Airport",
    "city": "Horta",
    "country": "Portugal",
    "iata": "HOR",
    "icao": "LPHR"
  },
  {
    "name": "Lajes Field",
    "city": "Lajes (terceira Island)",
    "country": "Portugal",
    "iata": "TER",
    "icao": "LPLA"
  },
  {
    "name": "Monte Real Air Base",
    "city": "Monte Real",
    "country": "Portugal",
    "iata": "NONE",
    "icao": "LPMR"
  },
  {
    "name": "Montijo Airport",
    "city": "Montijo",
    "country": "Portugal",
    "iata": "NONE",
    "icao": "LPMT"
  },
  {
    "name": "Ovar Airport",
    "city": "Ovar",
    "country": "Portugal",
    "iata": "NONE",
    "icao": "LPOV"
  },
  {
    "name": "João Paulo II Airport",
    "city": "Ponta Delgada",
    "country": "Portugal",
    "iata": "PDL",
    "icao": "LPPD"
  },
  {
    "name": "Pico Airport",
    "city": "Pico",
    "country": "Portugal",
    "iata": "PIX",
    "icao": "LPPI"
  },
  {
    "name": "Portimão Airport",
    "city": "Portimao",
    "country": "Portugal",
    "iata": "NONE",
    "icao": "LPPM"
  },
  {
    "name": "Francisco de Sá Carneiro Airport",
    "city": "Porto",
    "country": "Portugal",
    "iata": "OPO",
    "icao": "LPPR"
  },
  {
    "name": "Porto Santo Airport",
    "city": "Porto Santo",
    "country": "Portugal",
    "iata": "PXO",
    "icao": "LPPS"
  },
  {
    "name": "Lisbon Portela Airport",
    "city": "Lisbon",
    "country": "Portugal",
    "iata": "LIS",
    "icao": "LPPT"
  },
  {
    "name": "São Jorge Airport",
    "city": "Sao Jorge Island",
    "country": "Portugal",
    "iata": "SJZ",
    "icao": "LPSJ"
  },
  {
    "name": "Sintra Airport",
    "city": "Sintra",
    "country": "Portugal",
    "iata": "NONE",
    "icao": "LPST"
  },
  {
    "name": "Tancos Airbase",
    "city": "Tancos",
    "country": "Portugal",
    "iata": "NONE",
    "icao": "LPTN"
  },
  {
    "name": "Vila Real Airport",
    "city": "Vila Real",
    "country": "Portugal",
    "iata": "VRL",
    "icao": "LPVR"
  },
  {
    "name": "Viseu Airport",
    "city": "Viseu",
    "country": "Portugal",
    "iata": "NONE",
    "icao": "LPVZ"
  },
  {
    "name": "Mostar International Airport",
    "city": "Mostar",
    "country": "Bosnia and Herzegovina",
    "iata": "OMO",
    "icao": "LQMO"
  },
  {
    "name": "Sarajevo International Airport",
    "city": "Sarajevo",
    "country": "Bosnia and Herzegovina",
    "iata": "SJJ",
    "icao": "LQSA"
  },
  {
    "name": "Arad International Airport",
    "city": "Arad",
    "country": "Romania",
    "iata": "ARW",
    "icao": "LRAR"
  },
  {
    "name": "Bacău Airport",
    "city": "Bacau",
    "country": "Romania",
    "iata": "BCM",
    "icao": "LRBC"
  },
  {
    "name": "Tautii Magheraus Airport",
    "city": "Baia Mare",
    "country": "Romania",
    "iata": "BAY",
    "icao": "LRBM"
  },
  {
    "name": "Băneasa International Airport",
    "city": "Bucharest",
    "country": "Romania",
    "iata": "BBU",
    "icao": "LRBS"
  },
  {
    "name": "Mihail Kogălniceanu International Airport",
    "city": "Constanta",
    "country": "Romania",
    "iata": "CND",
    "icao": "LRCK"
  },
  {
    "name": "Cluj-Napoca International Airport",
    "city": "Cluj-napoca",
    "country": "Romania",
    "iata": "CLJ",
    "icao": "LRCL"
  },
  {
    "name": "Caransebeş Airport",
    "city": "Caransebes",
    "country": "Romania",
    "iata": "CSB",
    "icao": "LRCS"
  },
  {
    "name": "Craiova Airport",
    "city": "Craiova",
    "country": "Romania",
    "iata": "CRA",
    "icao": "LRCV"
  },
  {
    "name": "Iaşi Airport",
    "city": "Iasi",
    "country": "Romania",
    "iata": "IAS",
    "icao": "LRIA"
  },
  {
    "name": "Oradea International Airport",
    "city": "Oradea",
    "country": "Romania",
    "iata": "OMR",
    "icao": "LROD"
  },
  {
    "name": "Henri Coandă International Airport",
    "city": "Bucharest",
    "country": "Romania",
    "iata": "OTP",
    "icao": "LROP"
  },
  {
    "name": "Sibiu International Airport",
    "city": "Sibiu",
    "country": "Romania",
    "iata": "SBZ",
    "icao": "LRSB"
  },
  {
    "name": "Satu Mare Airport",
    "city": "Satu Mare",
    "country": "Romania",
    "iata": "SUJ",
    "icao": "LRSM"
  },
  {
    "name": "Suceava Stefan cel Mare Airport",
    "city": "Suceava",
    "country": "Romania",
    "iata": "SCV",
    "icao": "LRSV"
  },
  {
    "name": "Tulcea Airport",
    "city": "Tulcea",
    "country": "Romania",
    "iata": "TCE",
    "icao": "LRTC"
  },
  {
    "name": "Transilvania Târgu Mureş International Airport",
    "city": "Tirgu Mures",
    "country": "Romania",
    "iata": "TGM",
    "icao": "LRTM"
  },
  {
    "name": "Timişoara Traian Vuia Airport",
    "city": "Timisoara",
    "country": "Romania",
    "iata": "TSR",
    "icao": "LRTR"
  },
  {
    "name": "Les Eplatures Airport",
    "city": "Les Eplatures",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSGC"
  },
  {
    "name": "Geneva Cointrin International Airport",
    "city": "Geneva",
    "country": "Switzerland",
    "iata": "GVA",
    "icao": "LSGG"
  },
  {
    "name": "Saanen Airport",
    "city": "Saanen",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSGK"
  },
  {
    "name": "Sion Airport",
    "city": "Sion",
    "country": "Switzerland",
    "iata": "SIR",
    "icao": "LSGS"
  },
  {
    "name": "Alpnach Air Base",
    "city": "Alpnach",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSMA"
  },
  {
    "name": "Dübendorf Air Base",
    "city": "Dubendorf",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSMD"
  },
  {
    "name": "Emmen Air Base",
    "city": "Emmen",
    "country": "Switzerland",
    "iata": "EML",
    "icao": "LSME"
  },
  {
    "name": "Mollis Airport",
    "city": "Mollis",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSMF"
  },
  {
    "name": "Meiringen Airport",
    "city": "Meiringen",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSMM"
  },
  {
    "name": "Payerne Air Base",
    "city": "Payerne",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSMP"
  },
  {
    "name": "Lugano Airport",
    "city": "Lugano",
    "country": "Switzerland",
    "iata": "LUG",
    "icao": "LSZA"
  },
  {
    "name": "Bern Belp Airport",
    "city": "Bern",
    "country": "Switzerland",
    "iata": "BRN",
    "icao": "LSZB"
  },
  {
    "name": "Grenchen Airport",
    "city": "Grenchen",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSZG"
  },
  {
    "name": "Zürich Airport",
    "city": "Zurich",
    "country": "Switzerland",
    "iata": "ZRH",
    "icao": "LSZH"
  },
  {
    "name": "St Gallen Altenrhein Airport",
    "city": "Altenrhein",
    "country": "Switzerland",
    "iata": "ACH",
    "icao": "LSZR"
  },
  {
    "name": "Samedan Airport",
    "city": "Samedan",
    "country": "Switzerland",
    "iata": "SMV",
    "icao": "LSZS"
  },
  {
    "name": "Güvercinlik Airport",
    "city": "Ankara",
    "country": "Turkey",
    "iata": "NONE",
    "icao": "LTAB"
  },
  {
    "name": "Esenboğa International Airport",
    "city": "Ankara",
    "country": "Turkey",
    "iata": "ESB",
    "icao": "LTAC"
  },
  {
    "name": "Etimesgut Air Base",
    "city": "Ankara",
    "country": "Turkey",
    "iata": "ANK",
    "icao": "LTAD"
  },
  {
    "name": "Akıncı Air Base",
    "city": "Ankara",
    "country": "Turkey",
    "iata": "NONE",
    "icao": "LTAE"
  },
  {
    "name": "Adana Airport",
    "city": "Adana",
    "country": "Turkey",
    "iata": "ADA",
    "icao": "LTAF"
  },
  {
    "name": "İncirlik Air Base",
    "city": "Adana",
    "country": "Turkey",
    "iata": "UAB",
    "icao": "LTAG"
  },
  {
    "name": "Afyon Airport",
    "city": "Afyon",
    "country": "Turkey",
    "iata": "AFY",
    "icao": "LTAH"
  },
  {
    "name": "Antalya International Airport",
    "city": "Antalya",
    "country": "Turkey",
    "iata": "AYT",
    "icao": "LTAI"
  },
  {
    "name": "Gaziantep International Airport",
    "city": "Gaziantep",
    "country": "Turkey",
    "iata": "GZT",
    "icao": "LTAJ"
  },
  {
    "name": "İskenderun Airport",
    "city": "Iskenderun",
    "country": "Turkey",
    "iata": "NONE",
    "icao": "LTAK"
  },
  {
    "name": "Konya Airport",
    "city": "Konya",
    "country": "Turkey",
    "iata": "KYA",
    "icao": "LTAN"
  },
  {
    "name": "Malatya Tulga Airport",
    "city": "Malatya",
    "country": "Turkey",
    "iata": "MLX",
    "icao": "LTAO"
  },
  {
    "name": "Amasya Merzifon Airport",
    "city": "Merzifon",
    "country": "Turkey",
    "iata": "MZH",
    "icao": "LTAP"
  },
  {
    "name": "Sivas Nuri Demirağ Airport",
    "city": "Sivas",
    "country": "Turkey",
    "iata": "VAS",
    "icao": "LTAR"
  },
  {
    "name": "Malatya Erhaç Airport",
    "city": "Malatya",
    "country": "Turkey",
    "iata": "NONE",
    "icao": "LTAT"
  },
  {
    "name": "Kayseri Erkilet Airport",
    "city": "Kayseri",
    "country": "Turkey",
    "iata": "ASR",
    "icao": "LTAU"
  },
  {
    "name": "Sivrihisar Airport",
    "city": "Sivrihisar",
    "country": "Turkey",
    "iata": "NONE",
    "icao": "LTAV"
  },
  {
    "name": "Tokat Airport",
    "city": "Tokat",
    "country": "Turkey",
    "iata": "NONE",
    "icao": "LTAW"
  },
  {
    "name": "Çardak Airport",
    "city": "Denizli",
    "country": "Turkey",
    "iata": "DNZ",
    "icao": "LTAY"
  },
  {
    "name": "Atatürk International Airport",
    "city": "Istanbul",
    "country": "Turkey",
    "iata": "IST",
    "icao": "LTBA"
  },
  {
    "name": "Balıkesir Merkez Airport",
    "city": "Balikesir",
    "country": "Turkey",
    "iata": "BZI",
    "icao": "LTBF"
  },
  {
    "name": "Bandırma Airport",
    "city": "Bandirma",
    "country": "Turkey",
    "iata": "BDM",
    "icao": "LTBG"
  },
  {
    "name": "Eskişehir Air Base",
    "city": "Eskisehir",
    "country": "Turkey",
    "iata": "ESK",
    "icao": "LTBI"
  },
  {
    "name": "Adnan Menderes International Airport",
    "city": "Izmir",
    "country": "Turkey",
    "iata": "ADB",
    "icao": "LTBJ"
  },
  {
    "name": "Gaziemir Airport",
    "city": "Izmir",
    "country": "Turkey",
    "iata": "NONE",
    "icao": "LTBK"
  },
  {
    "name": "Çiğli Airport",
    "city": "Izmir",
    "country": "Turkey",
    "iata": "IGL",
    "icao": "LTBL"
  },
  {
    "name": "Isparta Airport",
    "city": "Isparta",
    "country": "Turkey",
    "iata": "NONE",
    "icao": "LTBM"
  },
  {
    "name": "Kütahya Airport",
    "city": "Kutahya",
    "country": "Turkey",
    "iata": "NONE",
    "icao": "LTBN"
  },
  {
    "name": "Yalova Airport",
    "city": "Yalova",
    "country": "Turkey",
    "iata": "NONE",
    "icao": "LTBP"
  },
  {
    "name": "Cengiz Topel Airport",
    "city": "Topel",
    "country": "Turkey",
    "iata": "NONE",
    "icao": "LTBQ"
  },
  {
    "name": "Dalaman International Airport",
    "city": "Dalaman",
    "country": "Turkey",
    "iata": "DLM",
    "icao": "LTBS"
  },
  {
    "name": "Akhisar Airport",
    "city": "Akhisar",
    "country": "Turkey",
    "iata": "NONE",
    "icao": "LTBT"
  },
  {
    "name": "Imsık Airport",
    "city": "Bodrum",
    "country": "Turkey",
    "iata": "BXN",
    "icao": "LTBV"
  },
  {
    "name": "Samandıra Air Base",
    "city": "Istanbul",
    "country": "Turkey",
    "iata": "NONE",
    "icao": "LTBX"
  },
  {
    "name": "Elazığ Airport",
    "city": "Elazig",
    "country": "Turkey",
    "iata": "EZS",
    "icao": "LTCA"
  },
  {
    "name": "Diyarbakir Airport",
    "city": "Diyabakir",
    "country": "Turkey",
    "iata": "DIY",
    "icao": "LTCC"
  },
  {
    "name": "Erzincan Airport",
    "city": "Erzincan",
    "country": "Turkey",
    "iata": "ERC",
    "icao": "LTCD"
  },
  {
    "name": "Erzurum International Airport",
    "city": "Erzurum",
    "country": "Turkey",
    "iata": "ERZ",
    "icao": "LTCE"
  },
  {
    "name": "Trabzon International Airport",
    "city": "Trabzon",
    "country": "Turkey",
    "iata": "TZX",
    "icao": "LTCG"
  },
  {
    "name": "Van Ferit Melen Airport",
    "city": "Van",
    "country": "Turkey",
    "iata": "VAN",
    "icao": "LTCI"
  },
  {
    "name": "Batman Airport",
    "city": "Batman",
    "country": "Turkey",
    "iata": "BAL",
    "icao": "LTCJ"
  },
  {
    "name": "Siirt Airport",
    "city": "Siirt",
    "country": "Turkey",
    "iata": "NONE",
    "icao": "LTCL"
  },
  {
    "name": "Kaklıç Airport",
    "city": "Izmir",
    "country": "Turkey",
    "iata": "NONE",
    "icao": "LTFA"
  },
  {
    "name": "Selçuk Efes Airport",
    "city": "Izmir",
    "country": "Turkey",
    "iata": "NONE",
    "icao": "LTFB"
  },
  {
    "name": "Balti International Airport",
    "city": "Saltsy",
    "country": "Moldova",
    "iata": "BZY",
    "icao": "LUBL"
  },
  {
    "name": "Chişinău International Airport",
    "city": "Chisinau",
    "country": "Moldova",
    "iata": "KIV",
    "icao": "LUKK"
  },
  {
    "name": "Ohrid St. Paul the Apostle Airport",
    "city": "Ohrid",
    "country": "Macedonia",
    "iata": "OHD",
    "icao": "LWOH"
  },
  {
    "name": "Skopje Alexander the Great Airport",
    "city": "Skopje",
    "country": "Macedonia",
    "iata": "SKP",
    "icao": "LWSK"
  },
  {
    "name": "Gibraltar Airport",
    "city": "Gibraltar",
    "country": "Gibraltar",
    "iata": "GIB",
    "icao": "LXGB"
  },
  {
    "name": "Belgrade Nikola Tesla Airport",
    "city": "Belgrade",
    "country": "Serbia",
    "iata": "BEG",
    "icao": "LYBE"
  },
  {
    "name": "Nis Airport",
    "city": "Nis",
    "country": "Serbia",
    "iata": "INI",
    "icao": "LYNI"
  },
  {
    "name": "Podgorica Airport",
    "city": "Podgorica",
    "country": "Montenegro",
    "iata": "TGD",
    "icao": "LYPG"
  },
  {
    "name": "Priština International Airport",
    "city": "Pristina",
    "country": "Serbia",
    "iata": "PRN",
    "icao": "BKPR"
  },
  {
    "name": "Tivat Airport",
    "city": "Tivat",
    "country": "Montenegro",
    "iata": "TIV",
    "icao": "LYTV"
  },
  {
    "name": "Vršac International Airport",
    "city": "Vrsac",
    "country": "Serbia",
    "iata": "NONE",
    "icao": "LYVR"
  },
  {
    "name": "M. R. Štefánik Airport",
    "city": "Bratislava",
    "country": "Slovakia",
    "iata": "BTS",
    "icao": "LZIB"
  },
  {
    "name": "Košice Airport",
    "city": "Kosice",
    "country": "Slovakia",
    "iata": "KSC",
    "icao": "LZKZ"
  },
  {
    "name": "Kuchyňa Air Base",
    "city": "Malacky",
    "country": "Slovakia",
    "iata": "NONE",
    "icao": "LZMC"
  },
  {
    "name": "Piešťany Airport",
    "city": "Piestany",
    "country": "Slovakia",
    "iata": "PZY",
    "icao": "LZPP"
  },
  {
    "name": "Sliač Airport",
    "city": "Sliac",
    "country": "Slovakia",
    "iata": "SLD",
    "icao": "LZSL"
  },
  {
    "name": "Trenčín Airport",
    "city": "Trencin",
    "country": "Slovakia",
    "iata": "NONE",
    "icao": "LZTN"
  },
  {
    "name": "Poprad-Tatry Airport",
    "city": "Poprad",
    "country": "Slovakia",
    "iata": "TAT",
    "icao": "LZTT"
  },
  {
    "name": "North Caicos Airport",
    "city": "North Caicos",
    "country": "Turks and Caicos Islands",
    "iata": "NCA",
    "icao": "MBNC"
  },
  {
    "name": "Providenciales Airport",
    "city": "Providenciales",
    "country": "Turks and Caicos Islands",
    "iata": "PLS",
    "icao": "MBPV"
  },
  {
    "name": "South Caicos Airport",
    "city": "South Caicos",
    "country": "Turks and Caicos Islands",
    "iata": "XSC",
    "icao": "MBSC"
  },
  {
    "name": "Arroyo Barril Airport",
    "city": "Samana",
    "country": "Dominican Republic",
    "iata": "EPS",
    "icao": "MDAB"
  },
  {
    "name": "Maria Montez International Airport",
    "city": "Barahona",
    "country": "Dominican Republic",
    "iata": "BRX",
    "icao": "MDBH"
  },
  {
    "name": "Cabo Rojo Airport",
    "city": "Cabo Rojo",
    "country": "Dominican Republic",
    "iata": "NONE",
    "icao": "MDCR"
  },
  {
    "name": "Casa De Campo International Airport",
    "city": "La Romana",
    "country": "Dominican Republic",
    "iata": "LRM",
    "icao": "MDLR"
  },
  {
    "name": "Punta Cana International Airport",
    "city": "Punta Cana",
    "country": "Dominican Republic",
    "iata": "PUJ",
    "icao": "MDPC"
  },
  {
    "name": "Gregorio Luperon International Airport",
    "city": "Puerto Plata",
    "country": "Dominican Republic",
    "iata": "POP",
    "icao": "MDPP"
  },
  {
    "name": "Las Américas International Airport",
    "city": "Santo Domingo",
    "country": "Dominican Republic",
    "iata": "SDQ",
    "icao": "MDSD"
  },
  {
    "name": "San Isidro Air Base",
    "city": "San Isidoro",
    "country": "Dominican Republic",
    "iata": "NONE",
    "icao": "MDSI"
  },
  {
    "name": "Cibao International Airport",
    "city": "Santiago",
    "country": "Dominican Republic",
    "iata": "STI",
    "icao": "MDST"
  },
  {
    "name": "Bananera Airport",
    "city": "Bananera",
    "country": "Guatemala",
    "iata": "NONE",
    "icao": "MGBN"
  },
  {
    "name": "Coban Airport",
    "city": "Coban",
    "country": "Guatemala",
    "iata": "CBV",
    "icao": "MGCB"
  },
  {
    "name": "La Aurora Airport",
    "city": "Guatemala City",
    "country": "Guatemala",
    "iata": "GUA",
    "icao": "MGGT"
  },
  {
    "name": "Retalhuleu Airport",
    "city": "Retalhuleu",
    "country": "Guatemala",
    "iata": "NONE",
    "icao": "MGRT"
  },
  {
    "name": "San José Airport",
    "city": "San Jose",
    "country": "Guatemala",
    "iata": "NONE",
    "icao": "MGSJ"
  },
  {
    "name": "Goloson International Airport",
    "city": "La Ceiba",
    "country": "Honduras",
    "iata": "LCE",
    "icao": "MHLC"
  },
  {
    "name": "Ramón Villeda Morales International Airport",
    "city": "San Pedro Sula",
    "country": "Honduras",
    "iata": "SAP",
    "icao": "MHLM"
  },
  {
    "name": "La Laguna Airport",
    "city": "Guanaja",
    "country": "Honduras",
    "iata": "GJA",
    "icao": "MHNJ"
  },
  {
    "name": "Juan Manuel Galvez International Airport",
    "city": "Roatan",
    "country": "Honduras",
    "iata": "RTB",
    "icao": "MHRO"
  },
  {
    "name": "Tela Airport",
    "city": "Tela",
    "country": "Honduras",
    "iata": "TEA",
    "icao": "MHTE"
  },
  {
    "name": "Toncontín International Airport",
    "city": "Tegucigalpa",
    "country": "Honduras",
    "iata": "TGU",
    "icao": "MHTG"
  },
  {
    "name": "Trujillo Airport",
    "city": "Trujillo",
    "country": "Honduras",
    "iata": "NONE",
    "icao": "MHTJ"
  },
  {
    "name": "Boscobel Aerodrome",
    "city": "Ocho Rios",
    "country": "Jamaica",
    "iata": "OCJ",
    "icao": "MKBS"
  },
  {
    "name": "Norman Manley International Airport",
    "city": "Kingston",
    "country": "Jamaica",
    "iata": "KIN",
    "icao": "MKJP"
  },
  {
    "name": "Sangster International Airport",
    "city": "Montego Bay",
    "country": "Jamaica",
    "iata": "MBJ",
    "icao": "MKJS"
  },
  {
    "name": "Ken Jones Airport",
    "city": "Port Antonio",
    "country": "Jamaica",
    "iata": "POT",
    "icao": "MKKJ"
  },
  {
    "name": "Tinson Pen Airport",
    "city": "Kingston",
    "country": "Jamaica",
    "iata": "KTP",
    "icao": "MKTP"
  },
  {
    "name": "General Juan N Alvarez International Airport",
    "city": "Acapulco",
    "country": "Mexico",
    "iata": "ACA",
    "icao": "MMAA"
  },
  {
    "name": "Del Norte International Airport",
    "city": "Monterrey",
    "country": "Mexico",
    "iata": "NTR",
    "icao": "MMAN"
  },
  {
    "name": "Jesús Terán Paredo International Airport",
    "city": "Aguascalientes",
    "country": "Mexico",
    "iata": "AGU",
    "icao": "MMAS"
  },
  {
    "name": "Bahías de Huatulco International Airport",
    "city": "Huatulco",
    "country": "Mexico",
    "iata": "HUX",
    "icao": "MMBT"
  },
  {
    "name": "General Mariano Matamoros Airport",
    "city": "Cuernavaca",
    "country": "Mexico",
    "iata": "CVJ",
    "icao": "MMCB"
  },
  {
    "name": "Ciudad Acuña New International Airport",
    "city": "Ciudad Acuna",
    "country": "Mexico",
    "iata": "NONE",
    "icao": "MMCC"
  },
  {
    "name": "Ciudad del Carmen International Airport",
    "city": "Ciudad Del Carmen",
    "country": "Mexico",
    "iata": "CME",
    "icao": "MMCE"
  },
  {
    "name": "Nuevo Casas Grandes Airport",
    "city": "Nuevo Casas Grandes",
    "country": "Mexico",
    "iata": "NONE",
    "icao": "MMCG"
  },
  {
    "name": "Chilpancingo Airport",
    "city": "Chilpancingo",
    "country": "Mexico",
    "iata": "NONE",
    "icao": "MMCH"
  },
  {
    "name": "Bachigualato Federal International Airport",
    "city": "Culiacan",
    "country": "Mexico",
    "iata": "CUL",
    "icao": "MMCL"
  },
  {
    "name": "Chetumal International Airport",
    "city": "Chetumal",
    "country": "Mexico",
    "iata": "CTM",
    "icao": "MMCM"
  },
  {
    "name": "Ciudad Obregón International Airport",
    "city": "Ciudad Obregon",
    "country": "Mexico",
    "iata": "CEN",
    "icao": "MMCN"
  },
  {
    "name": "Ingeniero Alberto Acuña Ongay International Airport",
    "city": "Campeche",
    "country": "Mexico",
    "iata": "CPE",
    "icao": "MMCP"
  },
  {
    "name": "Abraham González International Airport",
    "city": "Ciudad Juarez",
    "country": "Mexico",
    "iata": "CJS",
    "icao": "MMCS"
  },
  {
    "name": "General Roberto Fierro Villalobos International Airport",
    "city": "Chihuahua",
    "country": "Mexico",
    "iata": "CUU",
    "icao": "MMCU"
  },
  {
    "name": "General Pedro Jose Mendez International Airport",
    "city": "Ciudad Victoria",
    "country": "Mexico",
    "iata": "CVM",
    "icao": "MMCV"
  },
  {
    "name": "Cozumel International Airport",
    "city": "Cozumel",
    "country": "Mexico",
    "iata": "CZM",
    "icao": "MMCZ"
  },
  {
    "name": "General Guadalupe Victoria International Airport",
    "city": "Durango",
    "country": "Mexico",
    "iata": "DGO",
    "icao": "MMDO"
  },
  {
    "name": "Amado Nervo National Airport",
    "city": "Tepic",
    "country": "Mexico",
    "iata": "TPQ",
    "icao": "MMEP"
  },
  {
    "name": "Ensenada Airport",
    "city": "Ensenada",
    "country": "Mexico",
    "iata": "ESE",
    "icao": "MMES"
  },
  {
    "name": "Don Miguel Hidalgo Y Costilla International Airport",
    "city": "Guadalajara",
    "country": "Mexico",
    "iata": "GDL",
    "icao": "MMGL"
  },
  {
    "name": "General José María Yáñez International Airport",
    "city": "Guaymas",
    "country": "Mexico",
    "iata": "GYM",
    "icao": "MMGM"
  },
  {
    "name": "Tehuacan Airport",
    "city": "Tehuacan",
    "country": "Mexico",
    "iata": "TCN",
    "icao": "MMHC"
  },
  {
    "name": "General Ignacio P. Garcia International Airport",
    "city": "Hermosillo",
    "country": "Mexico",
    "iata": "HMO",
    "icao": "MMHO"
  },
  {
    "name": "Licenciado Miguel de la Madrid Airport",
    "city": "Colima",
    "country": "Mexico",
    "iata": "CLQ",
    "icao": "MMIA"
  },
  {
    "name": "Isla Mujeres Airport",
    "city": "Isla Mujeres",
    "country": "Mexico",
    "iata": "ISJ",
    "icao": "MMIM"
  },
  {
    "name": "Plan De Guadalupe International Airport",
    "city": "Saltillo",
    "country": "Mexico",
    "iata": "SLW",
    "icao": "MMIO"
  },
  {
    "name": "Ixtepec Airport",
    "city": "Iztepec",
    "country": "Mexico",
    "iata": "NONE",
    "icao": "MMIT"
  },
  {
    "name": "Lázaro Cárdenas Airport",
    "city": "Lazard Cardenas",
    "country": "Mexico",
    "iata": "LZC",
    "icao": "MMLC"
  },
  {
    "name": "Valle del Fuerte International Airport",
    "city": "Los Mochis",
    "country": "Mexico",
    "iata": "LMM",
    "icao": "MMLM"
  },
  {
    "name": "Del Bajío International Airport",
    "city": "Del Bajio",
    "country": "Mexico",
    "iata": "BJX",
    "icao": "MMLO"
  },
  {
    "name": "Manuel Márquez de León International Airport",
    "city": "La Paz",
    "country": "Mexico",
    "iata": "LAP",
    "icao": "MMLP"
  },
  {
    "name": "Loreto International Airport",
    "city": "Loreto",
    "country": "Mexico",
    "iata": "LTO",
    "icao": "MMLT"
  },
  {
    "name": "General Servando Canales International Airport",
    "city": "Matamoros",
    "country": "Mexico",
    "iata": "MAM",
    "icao": "MMMA"
  },
  {
    "name": "Licenciado Manuel Crescencio Rejon Int Airport",
    "city": "Merida",
    "country": "Mexico",
    "iata": "MID",
    "icao": "MMMD"
  },
  {
    "name": "General Rodolfo Sánchez Taboada International Airport",
    "city": "Mexicali",
    "country": "Mexico",
    "iata": "MXL",
    "icao": "MMML"
  },
  {
    "name": "General Francisco J. Mujica International Airport",
    "city": "Morelia",
    "country": "Mexico",
    "iata": "MLM",
    "icao": "MMMM"
  },
  {
    "name": "Minatitlán/Coatzacoalcos National Airport",
    "city": "Minatitlan",
    "country": "Mexico",
    "iata": "MTT",
    "icao": "MMMT"
  },
  {
    "name": "Monclova International Airport",
    "city": "Monclova",
    "country": "Mexico",
    "iata": "LOV",
    "icao": "MMMV"
  },
  {
    "name": "Licenciado Benito Juarez International Airport",
    "city": "Mexico City",
    "country": "Mexico",
    "iata": "MEX",
    "icao": "MMMX"
  },
  {
    "name": "General Mariano Escobedo International Airport",
    "city": "Monterrey",
    "country": "Mexico",
    "iata": "MTY",
    "icao": "MMMY"
  },
  {
    "name": "General Rafael Buelna International Airport",
    "city": "Mazatlan",
    "country": "Mexico",
    "iata": "MZT",
    "icao": "MMMZ"
  },
  {
    "name": "Nogales International Airport",
    "city": "Nogales",
    "country": "Mexico",
    "iata": "NOG",
    "icao": "MMNG"
  },
  {
    "name": "Quetzalcóatl International Airport",
    "city": "Nuevo Laredo",
    "country": "Mexico",
    "iata": "NLD",
    "icao": "MMNL"
  },
  {
    "name": "Xoxocotlán International Airport",
    "city": "Oaxaca",
    "country": "Mexico",
    "iata": "OAX",
    "icao": "MMOX"
  },
  {
    "name": "El Tajín National Airport",
    "city": "Poza Rico",
    "country": "Mexico",
    "iata": "PAZ",
    "icao": "MMPA"
  },
  {
    "name": "Hermanos Serdán International Airport",
    "city": "Puebla",
    "country": "Mexico",
    "iata": "PBC",
    "icao": "MMPB"
  },
  {
    "name": "Ingeniero Juan Guillermo Villasana Airport",
    "city": "Pachuca",
    "country": "Mexico",
    "iata": "PCA",
    "icao": "MMPC"
  },
  {
    "name": "Puerto Peñasco International Airport",
    "city": "Punta Penasco",
    "country": "Mexico",
    "iata": "PPE",
    "icao": "MMPE"
  },
  {
    "name": "Piedras Negras International Airport",
    "city": "Piedras Negras",
    "country": "Mexico",
    "iata": "PDS",
    "icao": "MMPG"
  },
  {
    "name": "Licenciado y General Ignacio Lopez Rayon Airport",
    "city": "Uruapan",
    "country": "Mexico",
    "iata": "UPN",
    "icao": "MMPN"
  },
  {
    "name": "Licenciado Gustavo Díaz Ordaz International Airport",
    "city": "Puerto Vallarta",
    "country": "Mexico",
    "iata": "PVR",
    "icao": "MMPR"
  },
  {
    "name": "Puerto Escondido International Airport",
    "city": "Puerto Escondido",
    "country": "Mexico",
    "iata": "PXM",
    "icao": "MMPS"
  },
  {
    "name": "Querétaro Intercontinental Airport",
    "city": "Queretaro",
    "country": "Mexico",
    "iata": "QRO",
    "icao": "MMQT"
  },
  {
    "name": "General Lucio Blanco International Airport",
    "city": "Reynosa",
    "country": "Mexico",
    "iata": "REX",
    "icao": "MMRX"
  },
  {
    "name": "Los Cabos International Airport",
    "city": "San Jose Del Cabo",
    "country": "Mexico",
    "iata": "SJD",
    "icao": "MMSD"
  },
  {
    "name": "San Felipe International Airport",
    "city": "San Filipe",
    "country": "Mexico",
    "iata": "SFH",
    "icao": "MMSF"
  },
  {
    "name": "Ponciano Arriaga International Airport",
    "city": "San Luis Potosi",
    "country": "Mexico",
    "iata": "SLP",
    "icao": "MMSP"
  },
  {
    "name": "Tlaxcala Airport",
    "city": "Tlaxcala",
    "country": "Mexico",
    "iata": "TXA",
    "icao": "MMTA"
  },
  {
    "name": "Terán Air Base",
    "city": "Tuxtla Gutierrez",
    "country": "Mexico",
    "iata": "NONE",
    "icao": "MMTB"
  },
  {
    "name": "Francisco Sarabia International Airport",
    "city": "Torreon",
    "country": "Mexico",
    "iata": "TRC",
    "icao": "MMTC"
  },
  {
    "name": "Angel Albino Corzo International Airport",
    "city": "Tuxtla Gutierrez",
    "country": "Mexico",
    "iata": "TGZ",
    "icao": "MMTG"
  },
  {
    "name": "General Abelardo L. Rodríguez International Airport",
    "city": "Tijuana",
    "country": "Mexico",
    "iata": "TIJ",
    "icao": "MMTJ"
  },
  {
    "name": "General Francisco Javier Mina International Airport",
    "city": "Tampico",
    "country": "Mexico",
    "iata": "TAM",
    "icao": "MMTM"
  },
  {
    "name": "Tamuin Airport",
    "city": "Tamuin",
    "country": "Mexico",
    "iata": "TSL",
    "icao": "MMTN"
  },
  {
    "name": "Licenciado Adolfo Lopez Mateos International Airport",
    "city": "Toluca",
    "country": "Mexico",
    "iata": "TLC",
    "icao": "MMTO"
  },
  {
    "name": "Tapachula International Airport",
    "city": "Tapachula",
    "country": "Mexico",
    "iata": "TAP",
    "icao": "MMTP"
  },
  {
    "name": "Cancún International Airport",
    "city": "Cancun",
    "country": "Mexico",
    "iata": "CUN",
    "icao": "MMUN"
  },
  {
    "name": "Carlos Rovirosa Pérez International Airport",
    "city": "Villahermosa",
    "country": "Mexico",
    "iata": "VSA",
    "icao": "MMVA"
  },
  {
    "name": "General Heriberto Jara International Airport",
    "city": "Vera Cruz",
    "country": "Mexico",
    "iata": "VER",
    "icao": "MMVR"
  },
  {
    "name": "General Leobardo C. Ruiz International Airport",
    "city": "Zacatecas",
    "country": "Mexico",
    "iata": "ZCL",
    "icao": "MMZC"
  },
  {
    "name": "Ixtapa Zihuatanejo International Airport",
    "city": "Zihuatanejo",
    "country": "Mexico",
    "iata": "ZIH",
    "icao": "MMZH"
  },
  {
    "name": "Zamora Airport",
    "city": "Zamora",
    "country": "Mexico",
    "iata": "ZMM",
    "icao": "MMZM"
  },
  {
    "name": "Playa De Oro International Airport",
    "city": "Manzanillo",
    "country": "Mexico",
    "iata": "ZLO",
    "icao": "MMZO"
  },
  {
    "name": "Zapopan Airport",
    "city": "Zapopan",
    "country": "Mexico",
    "iata": "NONE",
    "icao": "MMZP"
  },
  {
    "name": "Bluefields Airport",
    "city": "Bluefields",
    "country": "Nicaragua",
    "iata": "BEF",
    "icao": "MNBL"
  },
  {
    "name": "Los Brasiles Airport",
    "city": "Los Brasiles",
    "country": "Nicaragua",
    "iata": "NONE",
    "icao": "MNBR"
  },
  {
    "name": "Leon (Fanor Urroz) Airport",
    "city": "Leon",
    "country": "Nicaragua",
    "iata": "NONE",
    "icao": "MNLN"
  },
  {
    "name": "Augusto C. Sandino (Managua) International Airport",
    "city": "Managua",
    "country": "Nicaragua",
    "iata": "MGA",
    "icao": "MNMG"
  },
  {
    "name": "Puerto Cabezas Airport",
    "city": "Puerto Cabezas",
    "country": "Nicaragua",
    "iata": "PUZ",
    "icao": "MNPC"
  },
  {
    "name": "Bocas Del Toro International Airport",
    "city": "Bocas Del Toro",
    "country": "Panama",
    "iata": "BOC",
    "icao": "MPBO"
  },
  {
    "name": "Cap Manuel Niño International Airport",
    "city": "Changuinola",
    "country": "Panama",
    "iata": "CHX",
    "icao": "MPCH"
  },
  {
    "name": "Enrique Malek International Airport",
    "city": "David",
    "country": "Panama",
    "iata": "DAV",
    "icao": "MPDA"
  },
  {
    "name": "Panama Pacific International Airport",
    "city": "Howard",
    "country": "Panama",
    "iata": "BLB",
    "icao": "MPHO"
  },
  {
    "name": "Marcos A. Gelabert International Airport",
    "city": "Panama",
    "country": "Panama",
    "iata": "PAC",
    "icao": "MPMG"
  },
  {
    "name": "Ruben Cantu Airport",
    "city": "Santiago",
    "country": "Panama",
    "iata": "NONE",
    "icao": "MPSA"
  },
  {
    "name": "Tocumen International Airport",
    "city": "Panama City",
    "country": "Panama",
    "iata": "PTY",
    "icao": "MPTO"
  },
  {
    "name": "Buenos Aires Airport",
    "city": "Buenos Aires",
    "country": "Costa Rica",
    "iata": "NONE",
    "icao": "MRBA"
  },
  {
    "name": "Coto 47 Airport",
    "city": "Coto 47",
    "country": "Costa Rica",
    "iata": "OTR",
    "icao": "MRCC"
  },
  {
    "name": "Chacarita Airport",
    "city": "Chacarita",
    "country": "Costa Rica",
    "iata": "NONE",
    "icao": "MRCH"
  },
  {
    "name": "El Carmen de Siquirres Airport",
    "city": "El Carmen",
    "country": "Costa Rica",
    "iata": "NONE",
    "icao": "MREC"
  },
  {
    "name": "Finca 10 / Nuevo Palmar Sur Airport",
    "city": "Finca 10",
    "country": "Costa Rica",
    "iata": "NONE",
    "icao": "MRFI"
  },
  {
    "name": "Golfito Airport",
    "city": "Golfito",
    "country": "Costa Rica",
    "iata": "GLF",
    "icao": "MRGF"
  },
  {
    "name": "Guapiles Airport",
    "city": "Guapiles",
    "country": "Costa Rica",
    "iata": "NONE",
    "icao": "MRGP"
  },
  {
    "name": "Daniel Oduber Quiros International Airport",
    "city": "Liberia",
    "country": "Costa Rica",
    "iata": "LIR",
    "icao": "MRLB"
  },
  {
    "name": "Los Chiles Airport",
    "city": "Los Chiles",
    "country": "Costa Rica",
    "iata": "NONE",
    "icao": "MRLC"
  },
  {
    "name": "Limon International Airport",
    "city": "Limon",
    "country": "Costa Rica",
    "iata": "LIO",
    "icao": "MRLM"
  },
  {
    "name": "Nosara Airport",
    "city": "Nosara Beach",
    "country": "Costa Rica",
    "iata": "NOB",
    "icao": "MRNS"
  },
  {
    "name": "Juan Santamaria International Airport",
    "city": "San Jose",
    "country": "Costa Rica",
    "iata": "SJO",
    "icao": "MROC"
  },
  {
    "name": "Pandora Airport",
    "city": "Pandora",
    "country": "Costa Rica",
    "iata": "NONE",
    "icao": "MRPD"
  },
  {
    "name": "Palmar Sur Airport",
    "city": "Palmar Sur",
    "country": "Costa Rica",
    "iata": "PMZ",
    "icao": "MRPM"
  },
  {
    "name": "Quepos Managua Airport",
    "city": "Quepos",
    "country": "Costa Rica",
    "iata": "XQP",
    "icao": "MRQP"
  },
  {
    "name": "Santa Clara De Guapiles Airport",
    "city": "Santa Clara",
    "country": "Costa Rica",
    "iata": "NONE",
    "icao": "MRSG"
  },
  {
    "name": "San Vito De Java Airport",
    "city": "San Vito De Jaba",
    "country": "Costa Rica",
    "iata": "NONE",
    "icao": "MRSV"
  },
  {
    "name": "El Salvador International Airport",
    "city": "San Salvador",
    "country": "El Salvador",
    "iata": "SAL",
    "icao": "MSLP"
  },
  {
    "name": "Ilopango International Airport",
    "city": "San Salvador",
    "country": "El Salvador",
    "iata": "NONE",
    "icao": "MSSS"
  },
  {
    "name": "Les Cayes Airport",
    "city": "Cayes",
    "country": "Haiti",
    "iata": "NONE",
    "icao": "MTCA"
  },
  {
    "name": "Cap Haitien International Airport",
    "city": "Cap Haitien",
    "country": "Haiti",
    "iata": "CAP",
    "icao": "MTCH"
  },
  {
    "name": "Jacmel Airport",
    "city": "Jacmel",
    "country": "Haiti",
    "iata": "NONE",
    "icao": "MTJA"
  },
  {
    "name": "Toussaint Louverture International Airport",
    "city": "Port-au-prince",
    "country": "Haiti",
    "iata": "PAP",
    "icao": "MTPP"
  },
  {
    "name": "Gustavo Rizo Airport",
    "city": "Baracoa Playa",
    "country": "Cuba",
    "iata": "BCA",
    "icao": "MUBA"
  },
  {
    "name": "Carlos Manuel de Cespedes Airport",
    "city": "Bayamo",
    "country": "Cuba",
    "iata": "BYM",
    "icao": "MUBY"
  },
  {
    "name": "Maximo Gomez Airport",
    "city": "Ciego De Avila",
    "country": "Cuba",
    "iata": "AVI",
    "icao": "MUCA"
  },
  {
    "name": "Jardines Del Rey Airport",
    "city": "Cunagua",
    "country": "Cuba",
    "iata": "CCC",
    "icao": "MUCC"
  },
  {
    "name": "Jaime Gonzalez Airport",
    "city": "Cienfuegos",
    "country": "Cuba",
    "iata": "CFG",
    "icao": "MUCF"
  },
  {
    "name": "Vilo Acuña International Airport",
    "city": "Cayo Largo del Sur",
    "country": "Cuba",
    "iata": "CYO",
    "icao": "MUCL"
  },
  {
    "name": "Ignacio Agramonte International Airport",
    "city": "Camaguey",
    "country": "Cuba",
    "iata": "CMW",
    "icao": "MUCM"
  },
  {
    "name": "Antonio Maceo International Airport",
    "city": "Santiago De Cuba",
    "country": "Cuba",
    "iata": "SCU",
    "icao": "MUCU"
  },
  {
    "name": "Florida Airport",
    "city": "Florida",
    "country": "Cuba",
    "iata": "NONE",
    "icao": "MUFL"
  },
  {
    "name": "Leeward Point Field",
    "city": "Guantanamo",
    "country": "Cuba",
    "iata": "NONE",
    "icao": "MUGM"
  },
  {
    "name": "Mariana Grajales Airport",
    "city": "Guantanamo",
    "country": "Cuba",
    "iata": "GAO",
    "icao": "MUGT"
  },
  {
    "name": "José Martí International Airport",
    "city": "Havana",
    "country": "Cuba",
    "iata": "HAV",
    "icao": "MUHA"
  },
  {
    "name": "Frank Pais International Airport",
    "city": "Holguin",
    "country": "Cuba",
    "iata": "HOG",
    "icao": "MUHG"
  },
  {
    "name": "La Coloma Airport",
    "city": "La Coloma",
    "country": "Cuba",
    "iata": "LCL",
    "icao": "MULM"
  },
  {
    "name": "Orestes Acosta Airport",
    "city": "Moa",
    "country": "Cuba",
    "iata": "MOA",
    "icao": "MUMO"
  },
  {
    "name": "Sierra Maestra Airport",
    "city": "Manzanillo",
    "country": "Cuba",
    "iata": "MZO",
    "icao": "MUMZ"
  },
  {
    "name": "Rafael Cabrera Airport",
    "city": "Nueva Gerona",
    "country": "Cuba",
    "iata": "GER",
    "icao": "MUNG"
  },
  {
    "name": "Playa Baracoa Airport",
    "city": "Baracoa Playa",
    "country": "Cuba",
    "iata": "UPB",
    "icao": "MUPB"
  },
  {
    "name": "Pinar Del Rio Airport",
    "city": "Pinar Del Rio Norte",
    "country": "Cuba",
    "iata": "NONE",
    "icao": "MUPR"
  },
  {
    "name": "San Antonio De Los Banos Airport",
    "city": "San Antonio De Banos",
    "country": "Cuba",
    "iata": "NONE",
    "icao": "MUSA"
  },
  {
    "name": "Abel Santamaria Airport",
    "city": "Santa Clara",
    "country": "Cuba",
    "iata": "SNU",
    "icao": "MUSC"
  },
  {
    "name": "Joaquín de Agüero Airport",
    "city": "Santa Lucia",
    "country": "Cuba",
    "iata": "NONE",
    "icao": "MUSL"
  },
  {
    "name": "Siguanea Airport",
    "city": "Siguanea",
    "country": "Cuba",
    "iata": "NONE",
    "icao": "MUSN"
  },
  {
    "name": "Sancti Spiritus Airport",
    "city": "Sancti Spiritus",
    "country": "Cuba",
    "iata": "NONE",
    "icao": "MUSS"
  },
  {
    "name": "Juan Gualberto Gomez International Airport",
    "city": "Varadero",
    "country": "Cuba",
    "iata": "VRA",
    "icao": "MUVR"
  },
  {
    "name": "Hermanos Ameijeiras Airport",
    "city": "Las Tunas",
    "country": "Cuba",
    "iata": "VTU",
    "icao": "MUVT"
  },
  {
    "name": "Gerrard Smith International Airport",
    "city": "Cayman Brac",
    "country": "Cayman Islands",
    "iata": "CYB",
    "icao": "MWCB"
  },
  {
    "name": "Owen Roberts International Airport",
    "city": "Georgetown",
    "country": "Cayman Islands",
    "iata": "GCM",
    "icao": "MWCR"
  },
  {
    "name": "Clarence A. Bain Airport",
    "city": "Clarence Bain",
    "country": "Bahamas",
    "iata": "NONE",
    "icao": "MYAB"
  },
  {
    "name": "Andros Town Airport",
    "city": "Andros Town",
    "country": "Bahamas",
    "iata": "ASD",
    "icao": "MYAF"
  },
  {
    "name": "Marsh Harbour International Airport",
    "city": "Marsh Harbor",
    "country": "Bahamas",
    "iata": "MHH",
    "icao": "MYAM"
  },
  {
    "name": "San Andros Airport",
    "city": "San Andros",
    "country": "Bahamas",
    "iata": "SAQ",
    "icao": "MYAN"
  },
  {
    "name": "Spring Point Airport",
    "city": "Spring Point",
    "country": "Bahamas",
    "iata": "AXP",
    "icao": "MYAP"
  },
  {
    "name": "Sandy Point Airport",
    "city": "Sandy Point",
    "country": "Bahamas",
    "iata": "NONE",
    "icao": "MYAS"
  },
  {
    "name": "Treasure Cay Airport",
    "city": "Treasure Cay",
    "country": "Bahamas",
    "iata": "TCB",
    "icao": "MYAT"
  },
  {
    "name": "Chub Cay Airport",
    "city": "Chub Cay",
    "country": "Bahamas",
    "iata": "CCZ",
    "icao": "MYBC"
  },
  {
    "name": "Great Harbour Cay Airport",
    "city": "Bullocks Harbour",
    "country": "Bahamas",
    "iata": "NONE",
    "icao": "MYBG"
  },
  {
    "name": "South Bimini Airport",
    "city": "Alice Town",
    "country": "Bahamas",
    "iata": "BIM",
    "icao": "MYBS"
  },
  {
    "name": "Exuma International Airport",
    "city": "Great Exuma",
    "country": "Bahamas",
    "iata": "GGT",
    "icao": "MYEF"
  },
  {
    "name": "George Town Airport",
    "city": "George Town",
    "country": "Bahamas",
    "iata": "NONE",
    "icao": "MYEG"
  },
  {
    "name": "North Eleuthera Airport",
    "city": "North Eleuthera",
    "country": "Bahamas",
    "iata": "ELH",
    "icao": "MYEH"
  },
  {
    "name": "Governor's Harbour Airport",
    "city": "Governor's Harbor",
    "country": "Bahamas",
    "iata": "GHB",
    "icao": "MYEM"
  },
  {
    "name": "Normans Cay Airport",
    "city": "Norman's Cay",
    "country": "Bahamas",
    "iata": "NONE",
    "icao": "MYEN"
  },
  {
    "name": "Rock Sound Airport",
    "city": "Rock Sound",
    "country": "Bahamas",
    "iata": "RSD",
    "icao": "MYER"
  },
  {
    "name": "Staniel Cay Airport",
    "city": "Staniel Cay",
    "country": "Bahamas",
    "iata": "NONE",
    "icao": "MYES"
  },
  {
    "name": "Grand Bahama International Airport",
    "city": "Freeport",
    "country": "Bahamas",
    "iata": "FPO",
    "icao": "MYGF"
  },
  {
    "name": "Inagua Airport",
    "city": "Matthew Town",
    "country": "Bahamas",
    "iata": "IGA",
    "icao": "MYIG"
  },
  {
    "name": "Deadman's Cay Airport",
    "city": "Dead Man's Cay",
    "country": "Bahamas",
    "iata": "LGI",
    "icao": "MYLD"
  },
  {
    "name": "Stella Maris Airport",
    "city": "Stella Maris",
    "country": "Bahamas",
    "iata": "SML",
    "icao": "MYLS"
  },
  {
    "name": "Mayaguana Airport",
    "city": "Mayaguana",
    "country": "Bahamas",
    "iata": "MYG",
    "icao": "MYMM"
  },
  {
    "name": "Lynden Pindling International Airport",
    "city": "Nassau",
    "country": "Bahamas",
    "iata": "NAS",
    "icao": "MYNN"
  },
  {
    "name": "Duncan Town Airport",
    "city": "Duncan Town",
    "country": "Bahamas",
    "iata": "NONE",
    "icao": "MYRD"
  },
  {
    "name": "Rum Cay Airport",
    "city": "Port Nelson",
    "country": "Bahamas",
    "iata": "NONE",
    "icao": "MYRP"
  },
  {
    "name": "San Salvador Airport",
    "city": "Cockburn Town",
    "country": "Bahamas",
    "iata": "ZSA",
    "icao": "MYSM"
  },
  {
    "name": "Philip S. W. Goldson International Airport",
    "city": "Belize City",
    "country": "Belize",
    "iata": "BZE",
    "icao": "MZBZ"
  },
  {
    "name": "Aitutaki Airport",
    "city": "Aitutaki",
    "country": "Cook Islands",
    "iata": "AIT",
    "icao": "NCAI"
  },
  {
    "name": "Rarotonga International Airport",
    "city": "Avarua",
    "country": "Cook Islands",
    "iata": "RAR",
    "icao": "NCRG"
  },
  {
    "name": "Nadi International Airport",
    "city": "Nandi",
    "country": "Fiji",
    "iata": "NAN",
    "icao": "NFFN"
  },
  {
    "name": "Nausori International Airport",
    "city": "Nausori",
    "country": "Fiji",
    "iata": "SUV",
    "icao": "NFNA"
  },
  {
    "name": "Fua'amotu International Airport",
    "city": "Tongatapu",
    "country": "Tonga",
    "iata": "TBU",
    "icao": "NFTF"
  },
  {
    "name": "Vava'u International Airport",
    "city": "Vava'u",
    "country": "Tonga",
    "iata": "VAV",
    "icao": "NFTV"
  },
  {
    "name": "Bonriki International Airport",
    "city": "Tarawa",
    "country": "Kiribati",
    "iata": "TRW",
    "icao": "NGTA"
  },
  {
    "name": "Tabiteuea North Airport",
    "city": "Tabiteuea North",
    "country": "Kiribati",
    "iata": "TBF",
    "icao": "NGTE"
  },
  {
    "name": "Hihifo Airport",
    "city": "Wallis",
    "country": "Wallis and Futuna",
    "iata": "WLS",
    "icao": "NLWW"
  },
  {
    "name": "Faleolo International Airport",
    "city": "Faleolo",
    "country": "Samoa",
    "iata": "APW",
    "icao": "NSFA"
  },
  {
    "name": "Pago Pago International Airport",
    "city": "Pago Pago",
    "country": "American Samoa",
    "iata": "PPG",
    "icao": "NSTU"
  },
  {
    "name": "Rurutu Airport",
    "city": "Rurutu",
    "country": "French Polynesia",
    "iata": "RUR",
    "icao": "NTAR"
  },
  {
    "name": "Tubuai Airport",
    "city": "Tubuai",
    "country": "French Polynesia",
    "iata": "TUB",
    "icao": "NTAT"
  },
  {
    "name": "Anaa Airport",
    "city": "Anaa",
    "country": "French Polynesia",
    "iata": "AAA",
    "icao": "NTGA"
  },
  {
    "name": "Fangatau Airport",
    "city": "Fangatau",
    "country": "French Polynesia",
    "iata": "NONE",
    "icao": "NTGB"
  },
  {
    "name": "Tikehau Airport",
    "city": "Tikehau",
    "country": "French Polynesia",
    "iata": "TIH",
    "icao": "NTGC"
  },
  {
    "name": "Reao Airport",
    "city": "Reao",
    "country": "French Polynesia",
    "iata": "REA",
    "icao": "NTGE"
  },
  {
    "name": "Fakarava Airport",
    "city": "Fakarava",
    "country": "French Polynesia",
    "iata": "FAV",
    "icao": "NTGF"
  },
  {
    "name": "Manihi Airport",
    "city": "Manihi",
    "country": "French Polynesia",
    "iata": "XMH",
    "icao": "NTGI"
  },
  {
    "name": "Totegegie Airport",
    "city": "Totegegie",
    "country": "French Polynesia",
    "iata": "GMR",
    "icao": "NTGJ"
  },
  {
    "name": "Kaukura Airport",
    "city": "Kaukura Atoll",
    "country": "French Polynesia",
    "iata": "KKR",
    "icao": "NTGK"
  },
  {
    "name": "Makemo Airport",
    "city": "Makemo",
    "country": "French Polynesia",
    "iata": "MKP",
    "icao": "NTGM"
  },
  {
    "name": "Puka Puka Airport",
    "city": "Puka Puka",
    "country": "French Polynesia",
    "iata": "PKP",
    "icao": "NTGP"
  },
  {
    "name": "Takapoto Airport",
    "city": "Takapoto",
    "country": "French Polynesia",
    "iata": "TKP",
    "icao": "NTGT"
  },
  {
    "name": "Arutua Airport",
    "city": "Arutua",
    "country": "French Polynesia",
    "iata": "AXR",
    "icao": "NTGU"
  },
  {
    "name": "Mataiva Airport",
    "city": "Mataiva",
    "country": "French Polynesia",
    "iata": "MVT",
    "icao": "NTGV"
  },
  {
    "name": "Takaroa Airport",
    "city": "Takaroa",
    "country": "French Polynesia",
    "iata": "TKX",
    "icao": "NTKR"
  },
  {
    "name": "Nuku Hiva Airport",
    "city": "Nuku Hiva",
    "country": "French Polynesia",
    "iata": "NHV",
    "icao": "NTMD"
  },
  {
    "name": "Bora Bora Airport",
    "city": "Bora Bora",
    "country": "French Polynesia",
    "iata": "BOB",
    "icao": "NTTB"
  },
  {
    "name": "Rangiroa Airport",
    "city": "Rangiroa",
    "country": "French Polynesia",
    "iata": "RGI",
    "icao": "NTTG"
  },
  {
    "name": "Huahine-Fare Airport",
    "city": "Huahine Island",
    "country": "French Polynesia",
    "iata": "HUH",
    "icao": "NTTH"
  },
  {
    "name": "Moorea Airport",
    "city": "Moorea",
    "country": "French Polynesia",
    "iata": "MOZ",
    "icao": "NTTM"
  },
  {
    "name": "Hao Airport",
    "city": "Hao Island",
    "country": "French Polynesia",
    "iata": "HOI",
    "icao": "NTTO"
  },
  {
    "name": "Maupiti Airport",
    "city": "Maupiti",
    "country": "French Polynesia",
    "iata": "MAU",
    "icao": "NTTP"
  },
  {
    "name": "Raiatea Airport",
    "city": "Raiatea Island",
    "country": "French Polynesia",
    "iata": "RFP",
    "icao": "NTTR"
  },
  {
    "name": "Bauerfield International Airport",
    "city": "Port-vila",
    "country": "Vanuatu",
    "iata": "VLI",
    "icao": "NVVV"
  },
  {
    "name": "Koné Airport",
    "city": "Kone",
    "country": "New Caledonia",
    "iata": "KNQ",
    "icao": "NWWD"
  },
  {
    "name": "Koumac Airport",
    "city": "Koumac",
    "country": "New Caledonia",
    "iata": "KOC",
    "icao": "NWWK"
  },
  {
    "name": "Lifou Airport",
    "city": "Lifou",
    "country": "New Caledonia",
    "iata": "LIF",
    "icao": "NWWL"
  },
  {
    "name": "Nouméa Magenta Airport",
    "city": "Noumea",
    "country": "New Caledonia",
    "iata": "GEA",
    "icao": "NWWM"
  },
  {
    "name": "Maré Airport",
    "city": "Mare",
    "country": "New Caledonia",
    "iata": "MEE",
    "icao": "NWWR"
  },
  {
    "name": "Touho Airport",
    "city": "Touho",
    "country": "New Caledonia",
    "iata": "TOU",
    "icao": "NWWU"
  },
  {
    "name": "Ouvéa Airport",
    "city": "Ouvea",
    "country": "New Caledonia",
    "iata": "UVE",
    "icao": "NWWV"
  },
  {
    "name": "La Tontouta International Airport",
    "city": "Noumea",
    "country": "New Caledonia",
    "iata": "NOU",
    "icao": "NWWW"
  },
  {
    "name": "Auckland International Airport",
    "city": "Auckland",
    "country": "New Zealand",
    "iata": "AKL",
    "icao": "NZAA"
  },
  {
    "name": "Taupo Airport",
    "city": "Taupo",
    "country": "New Zealand",
    "iata": "TUO",
    "icao": "NZAP"
  },
  {
    "name": "Ardmore Airport",
    "city": "Ardmore",
    "country": "New Zealand",
    "iata": "AMZ",
    "icao": "NZAR"
  },
  {
    "name": "Christchurch International Airport",
    "city": "Christchurch",
    "country": "New Zealand",
    "iata": "CHC",
    "icao": "NZCH"
  },
  {
    "name": "Chatham Islands-Tuuta Airport",
    "city": "Chatham Island",
    "country": "New Zealand",
    "iata": "CHT",
    "icao": "NZCI"
  },
  {
    "name": "Dunedin Airport",
    "city": "Dunedin",
    "country": "New Zealand",
    "iata": "DUD",
    "icao": "NZDN"
  },
  {
    "name": "Gisborne Airport",
    "city": "Gisborne",
    "country": "New Zealand",
    "iata": "GIS",
    "icao": "NZGS"
  },
  {
    "name": "Glentanner Airport",
    "city": "Glentanner",
    "country": "New Zealand",
    "iata": "NONE",
    "icao": "NZGT"
  },
  {
    "name": "Hokitika Airfield",
    "city": "Hokitika",
    "country": "New Zealand",
    "iata": "HKK",
    "icao": "NZHK"
  },
  {
    "name": "Hamilton International Airport",
    "city": "Hamilton",
    "country": "New Zealand",
    "iata": "HLZ",
    "icao": "NZHN"
  },
  {
    "name": "Hastings Aerodrome",
    "city": "Hastings",
    "country": "New Zealand",
    "iata": "NONE",
    "icao": "NZHS"
  },
  {
    "name": "Kerikeri Airport",
    "city": "Kerikeri",
    "country": "New Zealand",
    "iata": "KKE",
    "icao": "NZKK"
  },
  {
    "name": "Kaitaia Airport",
    "city": "Kaitaia",
    "country": "New Zealand",
    "iata": "KAT",
    "icao": "NZKT"
  },
  {
    "name": "Alexandra Airport",
    "city": "Alexandra",
    "country": "New Zealand",
    "iata": "ALR",
    "icao": "NZLX"
  },
  {
    "name": "Mount Cook Airport",
    "city": "Mount Cook",
    "country": "New Zealand",
    "iata": "MON",
    "icao": "NZMC"
  },
  {
    "name": "Manapouri Airport",
    "city": "Manapouri",
    "country": "New Zealand",
    "iata": "TEU",
    "icao": "NZMO"
  },
  {
    "name": "Hood Airport",
    "city": "Masterton",
    "country": "New Zealand",
    "iata": "MRO",
    "icao": "NZMS"
  },
  {
    "name": "New Plymouth Airport",
    "city": "New Plymouth",
    "country": "New Zealand",
    "iata": "NPL",
    "icao": "NZNP"
  },
  {
    "name": "Nelson Airport",
    "city": "Nelson",
    "country": "New Zealand",
    "iata": "NSN",
    "icao": "NZNS"
  },
  {
    "name": "Invercargill Airport",
    "city": "Invercargill",
    "country": "New Zealand",
    "iata": "IVC",
    "icao": "NZNV"
  },
  {
    "name": "RNZAF Base Ohakea",
    "city": "Ohakea",
    "country": "New Zealand",
    "iata": "NONE",
    "icao": "NZOH"
  },
  {
    "name": "Oamaru Airport",
    "city": "Oamaru",
    "country": "New Zealand",
    "iata": "OAM",
    "icao": "NZOU"
  },
  {
    "name": "Palmerston North Airport",
    "city": "Palmerston North",
    "country": "New Zealand",
    "iata": "PMR",
    "icao": "NZPM"
  },
  {
    "name": "Paraparaumu Airport",
    "city": "Paraparaumu",
    "country": "New Zealand",
    "iata": "PPQ",
    "icao": "NZPP"
  },
  {
    "name": "Queenstown International Airport",
    "city": "Queenstown International",
    "country": "New Zealand",
    "iata": "ZQN",
    "icao": "NZQN"
  },
  {
    "name": "Rotorua Regional Airport",
    "city": "Rotorua",
    "country": "New Zealand",
    "iata": "ROT",
    "icao": "NZRO"
  },
  {
    "name": "Waiouru Airport",
    "city": "Waiouru",
    "country": "New Zealand",
    "iata": "NONE",
    "icao": "NZRU"
  },
  {
    "name": "South Pole Station Airport",
    "city": "Stephen's Island",
    "country": "Antarctica",
    "iata": "NONE",
    "icao": "NZSP"
  },
  {
    "name": "Tauranga Airport",
    "city": "Tauranga",
    "country": "New Zealand",
    "iata": "TRG",
    "icao": "NZTG"
  },
  {
    "name": "Timaru Airport",
    "city": "Timaru",
    "country": "New Zealand",
    "iata": "TIU",
    "icao": "NZTU"
  },
  {
    "name": "Pukaki Airport",
    "city": "Pukaki",
    "country": "New Zealand",
    "iata": "NONE",
    "icao": "NZUK"
  },
  {
    "name": "Woodbourne Airport",
    "city": "Woodbourne",
    "country": "New Zealand",
    "iata": "BHE",
    "icao": "NZWB"
  },
  {
    "name": "Williams Field",
    "city": "Weydon",
    "country": "Antarctica",
    "iata": "NONE",
    "icao": "NZWD"
  },
  {
    "name": "Wanaka Airport",
    "city": "Wanaka",
    "country": "New Zealand",
    "iata": "WKA",
    "icao": "NZWF"
  },
  {
    "name": "Wigram Airport",
    "city": "Wigram",
    "country": "New Zealand",
    "iata": "NONE",
    "icao": "NZWG"
  },
  {
    "name": "Whakatane Airport",
    "city": "Whakatane",
    "country": "New Zealand",
    "iata": "WHK",
    "icao": "NZWK"
  },
  {
    "name": "Wellington International Airport",
    "city": "Wellington",
    "country": "New Zealand",
    "iata": "WLG",
    "icao": "NZWN"
  },
  {
    "name": "Wairoa Airport",
    "city": "Wairoa",
    "country": "New Zealand",
    "iata": "NONE",
    "icao": "NZWO"
  },
  {
    "name": "RNZAF Base Auckland-Whenuapai",
    "city": "Whenuapai",
    "country": "New Zealand",
    "iata": "NONE",
    "icao": "NZWP"
  },
  {
    "name": "Whangarei Airport",
    "city": "Whangarei",
    "country": "New Zealand",
    "iata": "WRE",
    "icao": "NZWR"
  },
  {
    "name": "Westport Airport",
    "city": "Westport",
    "country": "New Zealand",
    "iata": "WSZ",
    "icao": "NZWS"
  },
  {
    "name": "Wanganui Airport",
    "city": "Wanganui",
    "country": "New Zealand",
    "iata": "WAG",
    "icao": "NZWU"
  },
  {
    "name": "Herat Airport",
    "city": "Herat",
    "country": "Afghanistan",
    "iata": "HEA",
    "icao": "OAHR"
  },
  {
    "name": "Jalalabad Airport",
    "city": "Jalalabad",
    "country": "Afghanistan",
    "iata": "JAA",
    "icao": "OAJL"
  },
  {
    "name": "Kabul International Airport",
    "city": "Kabul",
    "country": "Afghanistan",
    "iata": "KBL",
    "icao": "OAKB"
  },
  {
    "name": "Kandahar Airport",
    "city": "Kandahar",
    "country": "Afghanistan",
    "iata": "KDH",
    "icao": "OAKN"
  },
  {
    "name": "Maimana Airport",
    "city": "Maimama",
    "country": "Afghanistan",
    "iata": "MMZ",
    "icao": "OAMN"
  },
  {
    "name": "Mazar I Sharif Airport",
    "city": "Mazar-i-sharif",
    "country": "Afghanistan",
    "iata": "MZR",
    "icao": "OAMS"
  },
  {
    "name": "Shindand Airport",
    "city": "Shindand",
    "country": "Afghanistan",
    "iata": "NONE",
    "icao": "OASD"
  },
  {
    "name": "Sheberghan Airport",
    "city": "Sheberghan",
    "country": "Afghanistan",
    "iata": "NONE",
    "icao": "OASG"
  },
  {
    "name": "Konduz Airport",
    "city": "Kunduz",
    "country": "Afghanistan",
    "iata": "UND",
    "icao": "OAUZ"
  },
  {
    "name": "Bahrain International Airport",
    "city": "Bahrain",
    "country": "Bahrain",
    "iata": "BAH",
    "icao": "OBBI"
  },
  {
    "name": "Sheik Isa Air Base",
    "city": "Bahrain",
    "country": "Bahrain",
    "iata": "NONE",
    "icao": "OBBS"
  },
  {
    "name": "Abha Regional Airport",
    "city": "Abha",
    "country": "Saudi Arabia",
    "iata": "AHB",
    "icao": "OEAB"
  },
  {
    "name": "Al Ahsa Airport",
    "city": "Al-ahsa",
    "country": "Saudi Arabia",
    "iata": "HOF",
    "icao": "OEAH"
  },
  {
    "name": "Al Baha Airport",
    "city": "El-baha",
    "country": "Saudi Arabia",
    "iata": "ABT",
    "icao": "OEBA"
  },
  {
    "name": "Bisha Airport",
    "city": "Bisha",
    "country": "Saudi Arabia",
    "iata": "BHH",
    "icao": "OEBH"
  },
  {
    "name": "Abqaiq Airport",
    "city": "Abqaiq",
    "country": "Saudi Arabia",
    "iata": "NONE",
    "icao": "OEBQ"
  },
  {
    "name": "King Fahd International Airport",
    "city": "Dammam",
    "country": "Saudi Arabia",
    "iata": "DMM",
    "icao": "OEDF"
  },
  {
    "name": "King Abdulaziz Air Base",
    "city": "Dhahran",
    "country": "Saudi Arabia",
    "iata": "DHA",
    "icao": "OEDR"
  },
  {
    "name": "Jizan Regional Airport",
    "city": "Gizan",
    "country": "Saudi Arabia",
    "iata": "GIZ",
    "icao": "OEGN"
  },
  {
    "name": "Gassim Airport",
    "city": "Gassim",
    "country": "Saudi Arabia",
    "iata": "ELQ",
    "icao": "OEGS"
  },
  {
    "name": "Gurayat Domestic Airport",
    "city": "Guriat",
    "country": "Saudi Arabia",
    "iata": "URY",
    "icao": "OEGT"
  },
  {
    "name": "Ha'il Airport",
    "city": "Hail",
    "country": "Saudi Arabia",
    "iata": "HAS",
    "icao": "OEHL"
  },
  {
    "name": "Jubail Airport",
    "city": "Jubail",
    "country": "Saudi Arabia",
    "iata": "NONE",
    "icao": "OEJB"
  },
  {
    "name": "King Faisal Naval Base",
    "city": "Jeddah",
    "country": "Saudi Arabia",
    "iata": "NONE",
    "icao": "OEJF"
  },
  {
    "name": "King Abdulaziz International Airport",
    "city": "Jeddah",
    "country": "Saudi Arabia",
    "iata": "JED",
    "icao": "OEJN"
  },
  {
    "name": "King Khaled Military City Airport",
    "city": "King Khalid Mil.city",
    "country": "Saudi Arabia",
    "iata": "HBT",
    "icao": "OEKK"
  },
  {
    "name": "Prince Mohammad Bin Abdulaziz Airport",
    "city": "Madinah",
    "country": "Saudi Arabia",
    "iata": "MED",
    "icao": "OEMA"
  },
  {
    "name": "Nejran Airport",
    "city": "Nejran",
    "country": "Saudi Arabia",
    "iata": "EAM",
    "icao": "OENG"
  },
  {
    "name": "Al Qaisumah/Hafr Al Batin Airport",
    "city": "Hafr Al-batin",
    "country": "Saudi Arabia",
    "iata": "AQI",
    "icao": "OEPA"
  },
  {
    "name": "Pump Station 3 Airport",
    "city": "Petroline 3",
    "country": "Saudi Arabia",
    "iata": "NONE",
    "icao": "OEPC"
  },
  {
    "name": "Pump Station 6 Airport",
    "city": "Petroline 6",
    "country": "Saudi Arabia",
    "iata": "NONE",
    "icao": "OEPF"
  },
  {
    "name": "Pump Station 10 Airport",
    "city": "Petroline 10",
    "country": "Saudi Arabia",
    "iata": "NONE",
    "icao": "OEPJ"
  },
  {
    "name": "Rabigh Airport",
    "city": "Rabigh",
    "country": "Saudi Arabia",
    "iata": "NONE",
    "icao": "OERB"
  },
  {
    "name": "Rafha Domestic Airport",
    "city": "Rafha",
    "country": "Saudi Arabia",
    "iata": "RAH",
    "icao": "OERF"
  },
  {
    "name": "King Khaled International Airport",
    "city": "Riyadh",
    "country": "Saudi Arabia",
    "iata": "RUH",
    "icao": "OERK"
  },
  {
    "name": "Ras Mishab Airport",
    "city": "Rash Mishab",
    "country": "Saudi Arabia",
    "iata": "NONE",
    "icao": "OERM"
  },
  {
    "name": "Arar Domestic Airport",
    "city": "Arar",
    "country": "Saudi Arabia",
    "iata": "RAE",
    "icao": "OERR"
  },
  {
    "name": "Ras Tanura Airport",
    "city": "Ras Tanura",
    "country": "Saudi Arabia",
    "iata": "NONE",
    "icao": "OERT"
  },
  {
    "name": "Sharurah Airport",
    "city": "Sharurah",
    "country": "Saudi Arabia",
    "iata": "SHW",
    "icao": "OESH"
  },
  {
    "name": "Sulayel Airport",
    "city": "Sulayel",
    "country": "Saudi Arabia",
    "iata": "SLF",
    "icao": "OESL"
  },
  {
    "name": "Tabuk Airport",
    "city": "Tabuk",
    "country": "Saudi Arabia",
    "iata": "TUU",
    "icao": "OETB"
  },
  {
    "name": "Ta’if Regional Airport",
    "city": "Taif",
    "country": "Saudi Arabia",
    "iata": "TIF",
    "icao": "OETF"
  },
  {
    "name": "Thumamah Airport",
    "city": "Thumamah",
    "country": "Saudi Arabia",
    "iata": "NONE",
    "icao": "OETH"
  },
  {
    "name": "Ras Tanajib Airport",
    "city": "Ras Tanajib",
    "country": "Saudi Arabia",
    "iata": "NONE",
    "icao": "OETN"
  },
  {
    "name": "Turaif Domestic Airport",
    "city": "Turaif",
    "country": "Saudi Arabia",
    "iata": "TUI",
    "icao": "OETR"
  },
  {
    "name": "Al Wajh Domestic Airport",
    "city": "Wejh",
    "country": "Saudi Arabia",
    "iata": "EJH",
    "icao": "OEWJ"
  },
  {
    "name": "Prince Abdulmohsin Bin Abdulaziz Airport",
    "city": "Yenbo",
    "country": "Saudi Arabia",
    "iata": "YNB",
    "icao": "OEYN"
  },
  {
    "name": "Abadan Airport",
    "city": "Abadan",
    "country": "Iran",
    "iata": "ABD",
    "icao": "OIAA"
  },
  {
    "name": "Dezful Airport",
    "city": "Dezful",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIAD"
  },
  {
    "name": "Aghajari Airport",
    "city": "Aghajari",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIAG"
  },
  {
    "name": "Gachsaran Airport",
    "city": "Gachsaran",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIAH"
  },
  {
    "name": "Shahid Asyaee Airport",
    "city": "Masjed Soleiman",
    "country": "Iran",
    "iata": "QMJ",
    "icao": "OIAI"
  },
  {
    "name": "Omidiyeh Airport",
    "city": "Omidyeh",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIAJ"
  },
  {
    "name": "Mahshahr Airport",
    "city": "Bandar Mahshahr",
    "country": "Iran",
    "iata": "MRX",
    "icao": "OIAM"
  },
  {
    "name": "Ahwaz Airport",
    "city": "Ahwaz",
    "country": "Iran",
    "iata": "AWZ",
    "icao": "OIAW"
  },
  {
    "name": "Abumusa Island Airport",
    "city": "Abumusa I.",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIBA"
  },
  {
    "name": "Bushehr Airport",
    "city": "Bushehr",
    "country": "Iran",
    "iata": "BUZ",
    "icao": "OIBB"
  },
  {
    "name": "Bastak Airport",
    "city": "Bastak",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIBH"
  },
  {
    "name": "Asaloyeh Airport",
    "city": "Golbandi",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIBI"
  },
  {
    "name": "Kish International Airport",
    "city": "Kish Island",
    "country": "Iran",
    "iata": "KIH",
    "icao": "OIBK"
  },
  {
    "name": "Bandar Lengeh Airport",
    "city": "Bandar Lengeh",
    "country": "Iran",
    "iata": "BDH",
    "icao": "OIBL"
  },
  {
    "name": "Khark Island Airport",
    "city": "Khark Island",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIBQ"
  },
  {
    "name": "Sirri Island Airport",
    "city": "Siri Island",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIBS"
  },
  {
    "name": "Lavan Island Airport",
    "city": "Lavan Island",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIBV"
  },
  {
    "name": "Shahid Ashrafi Esfahani Airport",
    "city": "Bakhtaran",
    "country": "Iran",
    "iata": "KSH",
    "icao": "OICC"
  },
  {
    "name": "Sanandaj Airport",
    "city": "Sanandaj",
    "country": "Iran",
    "iata": "SDG",
    "icao": "OICS"
  },
  {
    "name": "Hesa Airport",
    "city": "Daran",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIFE"
  },
  {
    "name": "Shahid Vatan Pour Air Base",
    "city": "Esfahan",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIFH"
  },
  {
    "name": "Kashan Airport",
    "city": "Kashan",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIFK"
  },
  {
    "name": "Esfahan Shahid Beheshti International Airport",
    "city": "Esfahan",
    "country": "Iran",
    "iata": "IFN",
    "icao": "OIFM"
  },
  {
    "name": "Badr Air Base",
    "city": "Sepah",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIFP"
  },
  {
    "name": "Sardar-e-Jangal Airport",
    "city": "Rasht",
    "country": "Iran",
    "iata": "RAS",
    "icao": "OIGG"
  },
  {
    "name": "Arak Airport",
    "city": "Arak",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIHR"
  },
  {
    "name": "Ghazvin Azadi Airport",
    "city": "Abe-ali",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIIA"
  },
  {
    "name": "Kushke Nosrat Airport",
    "city": "Kushke Nosrat",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIIC"
  },
  {
    "name": "Doshan Tappeh Air Base",
    "city": "Teheran",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIID"
  },
  {
    "name": "Ghale Morghi Airport",
    "city": "Teheran",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIIG"
  },
  {
    "name": "Mehrabad International Airport",
    "city": "Teheran",
    "country": "Iran",
    "iata": "THR",
    "icao": "OIII"
  },
  {
    "name": "Qazvin Airport",
    "city": "Ghazvin",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIIK"
  },
  {
    "name": "Naja Airport",
    "city": "Khoram Dareh",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIIM"
  },
  {
    "name": "Bandar Abbas International Airport",
    "city": "Bandar Abbas",
    "country": "Iran",
    "iata": "BND",
    "icao": "OIKB"
  },
  {
    "name": "Jiroft Airport",
    "city": "Jiroft",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIKJ"
  },
  {
    "name": "Kerman Airport",
    "city": "Kerman",
    "country": "Iran",
    "iata": "KER",
    "icao": "OIKK"
  },
  {
    "name": "Havadarya Airport",
    "city": "Bandar Abbas",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIKP"
  },
  {
    "name": "Dayrestan Airport",
    "city": "Gheshm I.",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIKQ"
  },
  {
    "name": "Sirjan Airport",
    "city": "Sirjan",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIKY"
  },
  {
    "name": "Birjand Airport",
    "city": "Birjand",
    "country": "Iran",
    "iata": "XBJ",
    "icao": "OIMB"
  },
  {
    "name": "Sarakhs Airport",
    "city": "Sarakhs",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIMC"
  },
  {
    "name": "Shahroud Airport",
    "city": "Emam Shahr",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIMJ"
  },
  {
    "name": "Tabas Airport",
    "city": "Tabas",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIMT"
  },
  {
    "name": "Kalaleh Airport",
    "city": "Kalaleh",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OINE"
  },
  {
    "name": "Ramsar Airport",
    "city": "Ramsar",
    "country": "Iran",
    "iata": "RZR",
    "icao": "OINR"
  },
  {
    "name": "Fasa Airport",
    "city": "Fasa",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OISF"
  },
  {
    "name": "Jahrom Airport",
    "city": "Jahrom",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OISJ"
  },
  {
    "name": "Lamerd Airport",
    "city": "Lamerd",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OISR"
  },
  {
    "name": "Shiraz Shahid Dastghaib International Airport",
    "city": "Shiraz",
    "country": "Iran",
    "iata": "SYZ",
    "icao": "OISS"
  },
  {
    "name": "Khoy Airport",
    "city": "Khoy",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OITK"
  },
  {
    "name": "Tabriz International Airport",
    "city": "Tabriz",
    "country": "Iran",
    "iata": "TBZ",
    "icao": "OITT"
  },
  {
    "name": "Zanjan Airport",
    "city": "Zanjan",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OITZ"
  },
  {
    "name": "Shahid Sadooghi Airport",
    "city": "Yazd",
    "country": "Iran",
    "iata": "AZD",
    "icao": "OIYY"
  },
  {
    "name": "Zabol Airport",
    "city": "Zabol",
    "country": "Iran",
    "iata": "ACZ",
    "icao": "OIZB"
  },
  {
    "name": "Konarak Airport",
    "city": "Chah Bahar",
    "country": "Iran",
    "iata": "ZBR",
    "icao": "OIZC"
  },
  {
    "name": "Zahedan International Airport",
    "city": "Zahedan",
    "country": "Iran",
    "iata": "ZAH",
    "icao": "OIZH"
  },
  {
    "name": "Iran Shahr Airport",
    "city": "Iran Shahr",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIZI"
  },
  {
    "name": "Saravan Airport",
    "city": "Saravan",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIZS"
  },
  {
    "name": "Queen Alia International Airport",
    "city": "Amman",
    "country": "Jordan",
    "iata": "AMM",
    "icao": "OJAI"
  },
  {
    "name": "Amman-Marka International Airport",
    "city": "Amman",
    "country": "Jordan",
    "iata": "ADJ",
    "icao": "OJAM"
  },
  {
    "name": "Aqaba King Hussein International Airport",
    "city": "Aqaba",
    "country": "Jordan",
    "iata": "AQJ",
    "icao": "OJAQ"
  },
  {
    "name": "Prince Hassan Air Base",
    "city": "Hotel Four",
    "country": "Jordan",
    "iata": "NONE",
    "icao": "OJHF"
  },
  {
    "name": "Jerusalem Airport",
    "city": "Jerusalem",
    "country": "West Bank",
    "iata": "NONE",
    "icao": "OJJR"
  },
  {
    "name": "King Hussein Air College",
    "city": "Mafraq",
    "country": "Jordan",
    "iata": "OMF",
    "icao": "OJMF"
  },
  {
    "name": "Kuwait International Airport",
    "city": "Kuwait",
    "country": "Kuwait",
    "iata": "KWI",
    "icao": "OKBK"
  },
  {
    "name": "Beirut Rafic Hariri International Airport",
    "city": "Beirut",
    "country": "Lebanon",
    "iata": "BEY",
    "icao": "OLBA"
  },
  {
    "name": "Rene Mouawad Air Base",
    "city": "Kleiat",
    "country": "Lebanon",
    "iata": "NONE",
    "icao": "OLKA"
  },
  {
    "name": "Abu Dhabi International Airport",
    "city": "Abu Dhabi",
    "country": "United Arab Emirates",
    "iata": "AUH",
    "icao": "OMAA"
  },
  {
    "name": "Bateen Airport",
    "city": "Abu Dhabi",
    "country": "United Arab Emirates",
    "iata": "AZI",
    "icao": "OMAD"
  },
  {
    "name": "Al Hamra Aux Airport",
    "city": "Al Hamra",
    "country": "United Arab Emirates",
    "iata": "NONE",
    "icao": "OMAH"
  },
  {
    "name": "Jebel Dhana Airport",
    "city": "Jebel Dhana",
    "country": "United Arab Emirates",
    "iata": "NONE",
    "icao": "OMAJ"
  },
  {
    "name": "Al Dhafra Air Base",
    "city": "Abu Dhabi",
    "country": "United Arab Emirates",
    "iata": "NONE",
    "icao": "OMAM"
  },
  {
    "name": "Arzanah Airport",
    "city": "Arzana",
    "country": "United Arab Emirates",
    "iata": "NONE",
    "icao": "OMAR"
  },
  {
    "name": "Das Island Airport",
    "city": "Das Island",
    "country": "United Arab Emirates",
    "iata": "NONE",
    "icao": "OMAS"
  },
  {
    "name": "Zirku Airport",
    "city": "Zirku",
    "country": "United Arab Emirates",
    "iata": "NONE",
    "icao": "OMAZ"
  },
  {
    "name": "Dubai International Airport",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "iata": "DXB",
    "icao": "OMDB"
  },
  {
    "name": "Fujairah International Airport",
    "city": "Fujeirah",
    "country": "United Arab Emirates",
    "iata": "FJR",
    "icao": "OMFJ"
  },
  {
    "name": "Ras Al Khaimah International Airport",
    "city": "Ras Al Khaimah",
    "country": "United Arab Emirates",
    "iata": "RKT",
    "icao": "OMRK"
  },
  {
    "name": "Sharjah International Airport",
    "city": "Sharjah",
    "country": "United Arab Emirates",
    "iata": "SHJ",
    "icao": "OMSJ"
  },
  {
    "name": "Khasab Air Base",
    "city": "Khasab",
    "country": "Oman",
    "iata": "KHS",
    "icao": "OOKB"
  },
  {
    "name": "Masirah Air Base",
    "city": "Masirah",
    "country": "Oman",
    "iata": "MSH",
    "icao": "OOMA"
  },
  {
    "name": "Muscat International Airport",
    "city": "Muscat",
    "country": "Oman",
    "iata": "MCT",
    "icao": "OOMS"
  },
  {
    "name": "Salalah Airport",
    "city": "Salalah",
    "country": "Oman",
    "iata": "SLL",
    "icao": "OOSA"
  },
  {
    "name": "Thumrait Air Base",
    "city": "Thumrait",
    "country": "Oman",
    "iata": "TTH",
    "icao": "OOTH"
  },
  {
    "name": "Bhagatanwala Airport",
    "city": "Bhagtanwala",
    "country": "Pakistan",
    "iata": "NONE",
    "icao": "OPBG"
  },
  {
    "name": "Faisalabad International Airport",
    "city": "Faisalabad",
    "country": "Pakistan",
    "iata": "LYP",
    "icao": "OPFA"
  },
  {
    "name": "Gwadar International Airport",
    "city": "Gwadar",
    "country": "Pakistan",
    "iata": "GWD",
    "icao": "OPGD"
  },
  {
    "name": "Gilgit Airport",
    "city": "Gilgit",
    "country": "Pakistan",
    "iata": "GIL",
    "icao": "OPGT"
  },
  {
    "name": "Shahbaz Air Base",
    "city": "Jacobsbad",
    "country": "Pakistan",
    "iata": "NONE",
    "icao": "OPJA"
  },
  {
    "name": "Jinnah International Airport",
    "city": "Karachi",
    "country": "Pakistan",
    "iata": "KHI",
    "icao": "OPKC"
  },
  {
    "name": "Alama Iqbal International Airport",
    "city": "Lahore",
    "country": "Pakistan",
    "iata": "LHE",
    "icao": "OPLA"
  },
  {
    "name": "Walton Airport",
    "city": "Lahore",
    "country": "Pakistan",
    "iata": "NONE",
    "icao": "OPLH"
  },
  {
    "name": "Mangla Airport",
    "city": "Mangla",
    "country": "Pakistan",
    "iata": "NONE",
    "icao": "OPMA"
  },
  {
    "name": "Muzaffarabad Airport",
    "city": "Muzaffarabad",
    "country": "Pakistan",
    "iata": "MFG",
    "icao": "OPMF"
  },
  {
    "name": "Mianwali Air Base",
    "city": "Mianwali",
    "country": "Pakistan",
    "iata": "NONE",
    "icao": "OPMI"
  },
  {
    "name": "Moenjodaro Airport",
    "city": "Moenjodaro",
    "country": "Pakistan",
    "iata": "MJD",
    "icao": "OPMJ"
  },
  {
    "name": "Masroor Air Base",
    "city": "Karachi",
    "country": "Pakistan",
    "iata": "NONE",
    "icao": "OPMR"
  },
  {
    "name": "Multan International Airport",
    "city": "Multan",
    "country": "Pakistan",
    "iata": "MUX",
    "icao": "OPMT"
  },
  {
    "name": "Shaheed Benazirabad Airport",
    "city": "Nawabshah",
    "country": "Pakistan",
    "iata": "WNS",
    "icao": "OPNH"
  },
  {
    "name": "Okara Cantonment Airstrip",
    "city": "Okara",
    "country": "Pakistan",
    "iata": "NONE",
    "icao": "OPOK"
  },
  {
    "name": "Panjgur Airport",
    "city": "Panjgur",
    "country": "Pakistan",
    "iata": "PJG",
    "icao": "OPPG"
  },
  {
    "name": "Pasni Airport",
    "city": "Pasni",
    "country": "Pakistan",
    "iata": "PSI",
    "icao": "OPPI"
  },
  {
    "name": "Peshawar International Airport",
    "city": "Peshawar",
    "country": "Pakistan",
    "iata": "PEW",
    "icao": "OPPS"
  },
  {
    "name": "Qasim Airport",
    "city": "Qasim",
    "country": "Pakistan",
    "iata": "NONE",
    "icao": "OPQS"
  },
  {
    "name": "Quetta International Airport",
    "city": "Quetta",
    "country": "Pakistan",
    "iata": "UET",
    "icao": "OPQT"
  },
  {
    "name": "Shaikh Zaid Airport",
    "city": "Rahim Yar Khan",
    "country": "Pakistan",
    "iata": "RYK",
    "icao": "OPRK"
  },
  {
    "name": "Benazir Bhutto International Airport",
    "city": "Islamabad",
    "country": "Pakistan",
    "iata": "ISB",
    "icao": "OPRN"
  },
  {
    "name": "Risalpur Air Base",
    "city": "Risalpur",
    "country": "Pakistan",
    "iata": "NONE",
    "icao": "OPRS"
  },
  {
    "name": "Rawalakot Airport",
    "city": "Rawala Kot",
    "country": "Pakistan",
    "iata": "RAZ",
    "icao": "OPRT"
  },
  {
    "name": "Sukkur Airport",
    "city": "Sukkur",
    "country": "Pakistan",
    "iata": "SKZ",
    "icao": "OPSK"
  },
  {
    "name": "Saidu Sharif Airport",
    "city": "Saidu Sharif",
    "country": "Pakistan",
    "iata": "SDT",
    "icao": "OPSS"
  },
  {
    "name": "Sui Airport",
    "city": "Sui",
    "country": "Pakistan",
    "iata": "SUL",
    "icao": "OPSU"
  },
  {
    "name": "Talhar Airport",
    "city": "Talhar",
    "country": "Pakistan",
    "iata": "BDN",
    "icao": "OPTH"
  },
  {
    "name": "Wana Airport",
    "city": "Wana",
    "country": "Pakistan",
    "iata": "NONE",
    "icao": "OPWN"
  },
  {
    "name": "Zhob Airport",
    "city": "Zhob",
    "country": "Pakistan",
    "iata": "PZH",
    "icao": "OPZB"
  },
  {
    "name": "Basrah International Airport",
    "city": "Basrah",
    "country": "Iraq",
    "iata": "BSR",
    "icao": "ORMM"
  },
  {
    "name": "Aleppo International Airport",
    "city": "Aleppo",
    "country": "Syria",
    "iata": "ALP",
    "icao": "OSAP"
  },
  {
    "name": "Damascus International Airport",
    "city": "Damascus",
    "country": "Syria",
    "iata": "DAM",
    "icao": "OSDI"
  },
  {
    "name": "Deir ez-Zor Airport",
    "city": "Deire Zor",
    "country": "Syria",
    "iata": "DEZ",
    "icao": "OSDZ"
  },
  {
    "name": "Bassel Al-Assad International Airport",
    "city": "Latakia",
    "country": "Syria",
    "iata": "LTK",
    "icao": "OSLK"
  },
  {
    "name": "Palmyra Airport",
    "city": "Palmyra",
    "country": "Syria",
    "iata": "PMS",
    "icao": "OSPR"
  },
  {
    "name": "Doha International Airport",
    "city": "Doha",
    "country": "Qatar",
    "iata": "NONE",
    "icao": "OTBD"
  },
  {
    "name": "Canton Island Airport",
    "city": "Canton Island",
    "country": "Kiribati",
    "iata": "CIS",
    "icao": "PCIS"
  },
  {
    "name": "Rota International Airport",
    "city": "Rota",
    "country": "Northern Mariana Islands",
    "iata": "ROP",
    "icao": "PGRO"
  },
  {
    "name": "Saipan International Airport",
    "city": "Saipan",
    "country": "Northern Mariana Islands",
    "iata": "SPN",
    "icao": "PGSN"
  },
  {
    "name": "Andersen Air Force Base",
    "city": "Andersen",
    "country": "Guam",
    "iata": "UAM",
    "icao": "PGUA"
  },
  {
    "name": "Antonio B. Won Pat International Airport",
    "city": "Agana",
    "country": "Guam",
    "iata": "GUM",
    "icao": "PGUM"
  },
  {
    "name": "Tinian International Airport",
    "city": "West Tinian",
    "country": "Northern Mariana Islands",
    "iata": "TIQ",
    "icao": "PGWT"
  },
  {
    "name": "Marshall Islands International Airport",
    "city": "Majuro",
    "country": "Marshall Islands",
    "iata": "MAJ",
    "icao": "PKMJ"
  },
  {
    "name": "Dyess Army Air Field",
    "city": "Kwajalein",
    "country": "Marshall Islands",
    "iata": "NONE",
    "icao": "PKRO"
  },
  {
    "name": "Bucholz Army Air Field",
    "city": "Kwajalein",
    "country": "Marshall Islands",
    "iata": "KWA",
    "icao": "PKWA"
  },
  {
    "name": "Cassidy International Airport",
    "city": "Kiritimati",
    "country": "Kiribati",
    "iata": "CXI",
    "icao": "PLCH"
  },
  {
    "name": "Henderson Field",
    "city": "Midway",
    "country": "Midway Islands",
    "iata": "MDY",
    "icao": "PMDY"
  },
  {
    "name": "Chuuk International Airport",
    "city": "Chuuk",
    "country": "Micronesia",
    "iata": "TKK",
    "icao": "PTKK"
  },
  {
    "name": "Pohnpei International Airport",
    "city": "Pohnpei",
    "country": "Micronesia",
    "iata": "PNI",
    "icao": "PTPN"
  },
  {
    "name": "Babelthuap Airport",
    "city": "Babelthuap",
    "country": "Palau",
    "iata": "ROR",
    "icao": "PTRO"
  },
  {
    "name": "Kosrae International Airport",
    "city": "Kosrae",
    "country": "Micronesia",
    "iata": "KSA",
    "icao": "PTSA"
  },
  {
    "name": "Yap International Airport",
    "city": "Yap",
    "country": "Micronesia",
    "iata": "YAP",
    "icao": "PTYA"
  },
  {
    "name": "Kinmen Airport",
    "city": "Kinmen",
    "country": "Taiwan",
    "iata": "KNH",
    "icao": "RCBS"
  },
  {
    "name": "Pingtung South Airport",
    "city": "Pingtung",
    "country": "Taiwan",
    "iata": "NONE",
    "icao": "RCDC"
  },
  {
    "name": "Longtan Air Base",
    "city": "Longtang",
    "country": "Taiwan",
    "iata": "NONE",
    "icao": "RCDI"
  },
  {
    "name": "Taitung Airport",
    "city": "Fengnin",
    "country": "Taiwan",
    "iata": "TTT",
    "icao": "RCFN"
  },
  {
    "name": "Lyudao Airport",
    "city": "Green Island",
    "country": "Taiwan",
    "iata": "GNI",
    "icao": "RCGI"
  },
  {
    "name": "Kaohsiung International Airport",
    "city": "Kaohsiung",
    "country": "Taiwan",
    "iata": "KHH",
    "icao": "RCKH"
  },
  {
    "name": "Chiayi Airport",
    "city": "Chiayi",
    "country": "Taiwan",
    "iata": "CYI",
    "icao": "RCKU"
  },
  {
    "name": "Lanyu Airport",
    "city": "Lanyu",
    "country": "Taiwan",
    "iata": "KYD",
    "icao": "RCLY"
  },
  {
    "name": "Taichung Ching Chuang Kang Airport",
    "city": "Taichung",
    "country": "Taiwan",
    "iata": "RMQ",
    "icao": "RCMQ"
  },
  {
    "name": "Tainan Airport",
    "city": "Tainan",
    "country": "Taiwan",
    "iata": "TNN",
    "icao": "RCNN"
  },
  {
    "name": "Hsinchu Air Base",
    "city": "Hsinchu",
    "country": "Taiwan",
    "iata": "NONE",
    "icao": "RCPO"
  },
  {
    "name": "Makung Airport",
    "city": "Makung",
    "country": "Taiwan",
    "iata": "MZG",
    "icao": "RCQC"
  },
  {
    "name": "Chihhang Air Base",
    "city": "Taitung",
    "country": "Taiwan",
    "iata": "NONE",
    "icao": "RCQS"
  },
  {
    "name": "Pingtung North Airport",
    "city": "Pingtung",
    "country": "Taiwan",
    "iata": "PIF",
    "icao": "RCSQ"
  },
  {
    "name": "Taipei Songshan Airport",
    "city": "Taipei",
    "country": "Taiwan",
    "iata": "TSA",
    "icao": "RCSS"
  },
  {
    "name": "Taiwan Taoyuan International Airport",
    "city": "Taipei",
    "country": "Taiwan",
    "iata": "TPE",
    "icao": "RCTP"
  },
  {
    "name": "Wang-an Airport",
    "city": "Wang An",
    "country": "Taiwan",
    "iata": "WOT",
    "icao": "RCWA"
  },
  {
    "name": "Hualien Airport",
    "city": "Hualien",
    "country": "Taiwan",
    "iata": "HUN",
    "icao": "RCYU"
  },
  {
    "name": "Narita International Airport",
    "city": "Tokyo",
    "country": "Japan",
    "iata": "NRT",
    "icao": "RJAA"
  },
  {
    "name": "Matsumoto Airport",
    "city": "Matsumoto",
    "country": "Japan",
    "iata": "MMJ",
    "icao": "RJAF"
  },
  {
    "name": "Hyakuri Airport",
    "city": "Ibaraki",
    "country": "Japan",
    "iata": "IBR",
    "icao": "RJAH"
  },
  {
    "name": "Minami Torishima Airport",
    "city": "Minami Tori Shima",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJAM"
  },
  {
    "name": "Iwo Jima Airport",
    "city": "Iwojima",
    "country": "Japan",
    "iata": "IWO",
    "icao": "RJAW"
  },
  {
    "name": "Nanki Shirahama Airport",
    "city": "Nanki-shirahama",
    "country": "Japan",
    "iata": "SHM",
    "icao": "RJBD"
  },
  {
    "name": "Kohnan Airport",
    "city": "Kohnan",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJBK"
  },
  {
    "name": "Tokachi-Obihiro Airport",
    "city": "Obihiro",
    "country": "Japan",
    "iata": "OBO",
    "icao": "RJCB"
  },
  {
    "name": "New Chitose Airport",
    "city": "Sapporo",
    "country": "Japan",
    "iata": "CTS",
    "icao": "RJCC"
  },
  {
    "name": "Hakodate Airport",
    "city": "Hakodate",
    "country": "Japan",
    "iata": "HKD",
    "icao": "RJCH"
  },
  {
    "name": "Chitose Air Base",
    "city": "Chitose",
    "country": "Japan",
    "iata": "SPK",
    "icao": "RJCJ"
  },
  {
    "name": "Memanbetsu Airport",
    "city": "Memanbetsu",
    "country": "Japan",
    "iata": "MMB",
    "icao": "RJCM"
  },
  {
    "name": "Nakashibetsu Airport",
    "city": "Nakashibetsu",
    "country": "Japan",
    "iata": "SHB",
    "icao": "RJCN"
  },
  {
    "name": "Tokachi Airport",
    "city": "Tokachi",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJCT"
  },
  {
    "name": "Wakkanai Airport",
    "city": "Wakkanai",
    "country": "Japan",
    "iata": "WKJ",
    "icao": "RJCW"
  },
  {
    "name": "Iki Airport",
    "city": "Iki",
    "country": "Japan",
    "iata": "IKI",
    "icao": "RJDB"
  },
  {
    "name": "Yamaguchi Ube Airport",
    "city": "Yamaguchi",
    "country": "Japan",
    "iata": "UBJ",
    "icao": "RJDC"
  },
  {
    "name": "Tsushima Airport",
    "city": "Tsushima",
    "country": "Japan",
    "iata": "TSJ",
    "icao": "RJDT"
  },
  {
    "name": "Monbetsu Airport",
    "city": "Monbetsu",
    "country": "Japan",
    "iata": "MBE",
    "icao": "RJEB"
  },
  {
    "name": "Asahikawa Airport",
    "city": "Asahikawa",
    "country": "Japan",
    "iata": "AKJ",
    "icao": "RJEC"
  },
  {
    "name": "Okushiri Airport",
    "city": "Okushiri",
    "country": "Japan",
    "iata": "OIR",
    "icao": "RJEO"
  },
  {
    "name": "Rishiri Airport",
    "city": "Rishiri Island",
    "country": "Japan",
    "iata": "RIS",
    "icao": "RJER"
  },
  {
    "name": "Ashiya Airport",
    "city": "Ashiya",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJFA"
  },
  {
    "name": "Yakushima Airport",
    "city": "Yakushima",
    "country": "Japan",
    "iata": "KUM",
    "icao": "RJFC"
  },
  {
    "name": "Fukue Airport",
    "city": "Fukue",
    "country": "Japan",
    "iata": "FUJ",
    "icao": "RJFE"
  },
  {
    "name": "Fukuoka Airport",
    "city": "Fukuoka",
    "country": "Japan",
    "iata": "FUK",
    "icao": "RJFF"
  },
  {
    "name": "New Tanegashima Airport",
    "city": "Tanegashima",
    "country": "Japan",
    "iata": "TNE",
    "icao": "RJFG"
  },
  {
    "name": "Kagoshima Airport",
    "city": "Kagoshima",
    "country": "Japan",
    "iata": "KOJ",
    "icao": "RJFK"
  },
  {
    "name": "Miyazaki Airport",
    "city": "Miyazaki",
    "country": "Japan",
    "iata": "KMI",
    "icao": "RJFM"
  },
  {
    "name": "Nyutabaru Airport",
    "city": "Nyutabaru",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJFN"
  },
  {
    "name": "Oita Airport",
    "city": "Oita",
    "country": "Japan",
    "iata": "OIT",
    "icao": "RJFO"
  },
  {
    "name": "Kitakyūshū Airport",
    "city": "Kitakyushu",
    "country": "Japan",
    "iata": "KKJ",
    "icao": "RJFR"
  },
  {
    "name": "Kumamoto Airport",
    "city": "Kumamoto",
    "country": "Japan",
    "iata": "KMJ",
    "icao": "RJFT"
  },
  {
    "name": "Nagasaki Airport",
    "city": "Nagasaki",
    "country": "Japan",
    "iata": "NGS",
    "icao": "RJFU"
  },
  {
    "name": "Kanoya Airport",
    "city": "Kanoya",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJFY"
  },
  {
    "name": "Tsuiki Air Field",
    "city": "Tsuiki",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJFZ"
  },
  {
    "name": "Amami Airport",
    "city": "Amami",
    "country": "Japan",
    "iata": "ASJ",
    "icao": "RJKA"
  },
  {
    "name": "Okierabu Airport",
    "city": "Okierabu",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJKB"
  },
  {
    "name": "Tokunoshima Airport",
    "city": "Tokunoshima",
    "country": "Japan",
    "iata": "TKN",
    "icao": "RJKN"
  },
  {
    "name": "Fukui Airport",
    "city": "Fukui",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJNF"
  },
  {
    "name": "Gifu Airport",
    "city": "Gifu",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJNG"
  },
  {
    "name": "Hamamatsu Airport",
    "city": "Hamamatsu",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJNH"
  },
  {
    "name": "Komatsu Airport",
    "city": "Kanazawa",
    "country": "Japan",
    "iata": "KMQ",
    "icao": "RJNK"
  },
  {
    "name": "Oki Airport",
    "city": "Oki Island",
    "country": "Japan",
    "iata": "OKI",
    "icao": "RJNO"
  },
  {
    "name": "Toyama Airport",
    "city": "Toyama",
    "country": "Japan",
    "iata": "TOY",
    "icao": "RJNT"
  },
  {
    "name": "Shizuhama Airport",
    "city": "Yaizu",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJNY"
  },
  {
    "name": "Hiroshima Airport",
    "city": "Hiroshima",
    "country": "Japan",
    "iata": "HIJ",
    "icao": "RJOA"
  },
  {
    "name": "Okayama Airport",
    "city": "Okayama",
    "country": "Japan",
    "iata": "OKJ",
    "icao": "RJOB"
  },
  {
    "name": "Izumo Airport",
    "city": "Izumo",
    "country": "Japan",
    "iata": "IZO",
    "icao": "RJOC"
  },
  {
    "name": "Hofu Airport",
    "city": "Hofu",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJOF"
  },
  {
    "name": "Miho Yonago Airport",
    "city": "Miho",
    "country": "Japan",
    "iata": "YGJ",
    "icao": "RJOH"
  },
  {
    "name": "Kōchi Ryōma Airport",
    "city": "Kochi",
    "country": "Japan",
    "iata": "KCZ",
    "icao": "RJOK"
  },
  {
    "name": "Matsuyama Airport",
    "city": "Matsuyama",
    "country": "Japan",
    "iata": "MYJ",
    "icao": "RJOM"
  },
  {
    "name": "Osaka International Airport",
    "city": "Osaka",
    "country": "Japan",
    "iata": "ITM",
    "icao": "RJOO"
  },
  {
    "name": "Tottori Airport",
    "city": "Tottori",
    "country": "Japan",
    "iata": "TTJ",
    "icao": "RJOR"
  },
  {
    "name": "Tokushima Airport",
    "city": "Tokushima",
    "country": "Japan",
    "iata": "TKS",
    "icao": "RJOS"
  },
  {
    "name": "Takamatsu Airport",
    "city": "Takamatsu",
    "country": "Japan",
    "iata": "TAK",
    "icao": "RJOT"
  },
  {
    "name": "Yao Airport",
    "city": "Osaka",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJOY"
  },
  {
    "name": "Ozuki Airport",
    "city": "Ozuki",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJOZ"
  },
  {
    "name": "Aomori Airport",
    "city": "Aomori",
    "country": "Japan",
    "iata": "AOJ",
    "icao": "RJSA"
  },
  {
    "name": "Yamagata Airport",
    "city": "Yamagata",
    "country": "Japan",
    "iata": "GAJ",
    "icao": "RJSC"
  },
  {
    "name": "Sado Airport",
    "city": "Sado",
    "country": "Japan",
    "iata": "SDS",
    "icao": "RJSD"
  },
  {
    "name": "Hachinohe Airport",
    "city": "Hachinoe",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJSH"
  },
  {
    "name": "Hanamaki Airport",
    "city": "Hanamaki",
    "country": "Japan",
    "iata": "HNA",
    "icao": "RJSI"
  },
  {
    "name": "Akita Airport",
    "city": "Akita",
    "country": "Japan",
    "iata": "AXT",
    "icao": "RJSK"
  },
  {
    "name": "Misawa Air Base",
    "city": "Misawa",
    "country": "Japan",
    "iata": "MSJ",
    "icao": "RJSM"
  },
  {
    "name": "Sendai Airport",
    "city": "Sendai",
    "country": "Japan",
    "iata": "SDJ",
    "icao": "RJSS"
  },
  {
    "name": "Matsushima Air Base",
    "city": "Matsushima",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJST"
  },
  {
    "name": "Atsugi Naval Air Facility",
    "city": "Atsugi",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJTA"
  },
  {
    "name": "Tateyama Airport",
    "city": "Tateyama",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJTE"
  },
  {
    "name": "Hachijojima Airport",
    "city": "Hachijojima",
    "country": "Japan",
    "iata": "HAC",
    "icao": "RJTH"
  },
  {
    "name": "Iruma Air Base",
    "city": "Iruma",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJTJ"
  },
  {
    "name": "Kisarazu Airport",
    "city": "Kisarazu",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJTK"
  },
  {
    "name": "Shimofusa Airport",
    "city": "Shimofusa",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJTL"
  },
  {
    "name": "Oshima Airport",
    "city": "Oshima",
    "country": "Japan",
    "iata": "OIM",
    "icao": "RJTO"
  },
  {
    "name": "Kastner Army Heliport",
    "city": "Zama",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJTR"
  },
  {
    "name": "Tokyo Haneda International Airport",
    "city": "Tokyo",
    "country": "Japan",
    "iata": "HND",
    "icao": "RJTT"
  },
  {
    "name": "Yokota Air Base",
    "city": "Yokota",
    "country": "Japan",
    "iata": "OKO",
    "icao": "RJTY"
  },
  {
    "name": "Gwangju Airport",
    "city": "Kwangju",
    "country": "South Korea",
    "iata": "KWJ",
    "icao": "RKJJ"
  },
  {
    "name": "Jeon Ju Airport",
    "city": "Jhunju",
    "country": "South Korea",
    "iata": "CHN",
    "icao": "RKJU"
  },
  {
    "name": "Yeosu Airport",
    "city": "Yeosu",
    "country": "South Korea",
    "iata": "RSU",
    "icao": "RKJY"
  },
  {
    "name": "Sokcho Airport",
    "city": "Sokch'o",
    "country": "South Korea",
    "iata": "SHO",
    "icao": "RKND"
  },
  {
    "name": "Gangneung Airport",
    "city": "Kangnung",
    "country": "South Korea",
    "iata": "KAG",
    "icao": "RKNN"
  },
  {
    "name": "Jeju International Airport",
    "city": "Cheju",
    "country": "South Korea",
    "iata": "CJU",
    "icao": "RKPC"
  },
  {
    "name": "Jinhae Airport",
    "city": "Chinhae",
    "country": "South Korea",
    "iata": "NONE",
    "icao": "RKPE"
  },
  {
    "name": "Gimhae International Airport",
    "city": "Busan",
    "country": "South Korea",
    "iata": "PUS",
    "icao": "RKPK"
  },
  {
    "name": "Ulsan Airport",
    "city": "Ulsan",
    "country": "South Korea",
    "iata": "USN",
    "icao": "RKPU"
  },
  {
    "name": "A 511 Airport",
    "city": "Pyongtaek",
    "country": "South Korea",
    "iata": "NONE",
    "icao": "RKSG"
  },
  {
    "name": "Seoul Air Base",
    "city": "Seoul East",
    "country": "South Korea",
    "iata": "SSN",
    "icao": "RKSM"
  },
  {
    "name": "Osan Air Base",
    "city": "Osan",
    "country": "South Korea",
    "iata": "OSN",
    "icao": "RKSO"
  },
  {
    "name": "Gimpo International Airport",
    "city": "Seoul",
    "country": "South Korea",
    "iata": "GMP",
    "icao": "RKSS"
  },
  {
    "name": "Suwon Airport",
    "city": "Suwon",
    "country": "South Korea",
    "iata": "SWU",
    "icao": "RKSW"
  },
  {
    "name": "Pohang Airport",
    "city": "Pohang",
    "country": "South Korea",
    "iata": "KPO",
    "icao": "RKTH"
  },
  {
    "name": "Daegu Airport",
    "city": "Taegu",
    "country": "South Korea",
    "iata": "TAE",
    "icao": "RKTN"
  },
  {
    "name": "Yecheon Airport",
    "city": "Yechon",
    "country": "South Korea",
    "iata": "YEC",
    "icao": "RKTY"
  },
  {
    "name": "Naha Airport",
    "city": "Okinawa",
    "country": "Japan",
    "iata": "OKA",
    "icao": "ROAH"
  },
  {
    "name": "Ie Shima Auxiliary Air Base",
    "city": "Iejima",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RODE"
  },
  {
    "name": "Kadena Air Base",
    "city": "Kadena",
    "country": "Japan",
    "iata": "DNA",
    "icao": "RODN"
  },
  {
    "name": "Ishigaki Airport",
    "city": "Ishigaki",
    "country": "Japan",
    "iata": "ISG",
    "icao": "ROIG"
  },
  {
    "name": "Kumejima Airport",
    "city": "Kumejima",
    "country": "Japan",
    "iata": "UEO",
    "icao": "ROKJ"
  },
  {
    "name": "Minami-Daito Airport",
    "city": "Minami Daito",
    "country": "Japan",
    "iata": "MMD",
    "icao": "ROMD"
  },
  {
    "name": "Miyako Airport",
    "city": "Miyako",
    "country": "Japan",
    "iata": "MMY",
    "icao": "ROMY"
  },
  {
    "name": "Kitadaito Airport",
    "city": "Kitadaito",
    "country": "Japan",
    "iata": "KTD",
    "icao": "RORK"
  },
  {
    "name": "Shimojishima Airport",
    "city": "Shimojishima",
    "country": "Japan",
    "iata": "SHI",
    "icao": "RORS"
  },
  {
    "name": "Tarama Airport",
    "city": "Tarama",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RORT"
  },
  {
    "name": "Yoron Airport",
    "city": "Yoron",
    "country": "Japan",
    "iata": "RNJ",
    "icao": "RORY"
  },
  {
    "name": "Yonaguni Airport",
    "city": "Yonaguni Jima",
    "country": "Japan",
    "iata": "OGN",
    "icao": "ROYN"
  },
  {
    "name": "Ninoy Aquino International Airport",
    "city": "Manila",
    "country": "Philippines",
    "iata": "MNL",
    "icao": "RPLL"
  },
  {
    "name": "Awang Airport",
    "city": "Cotabato",
    "country": "Philippines",
    "iata": "CBO",
    "icao": "RPMC"
  },
  {
    "name": "Cagayan De Oro Airport",
    "city": "Ladag",
    "country": "Philippines",
    "iata": "CGY",
    "icao": "RPML"
  },
  {
    "name": "Pagadian Airport",
    "city": "Pagadian",
    "country": "Philippines",
    "iata": "PAG",
    "icao": "RPMP"
  },
  {
    "name": "General Santos International Airport",
    "city": "Romblon",
    "country": "Philippines",
    "iata": "GES",
    "icao": "RPMR"
  },
  {
    "name": "Zamboanga International Airport",
    "city": "Zamboanga",
    "country": "Philippines",
    "iata": "ZAM",
    "icao": "RPMZ"
  },
  {
    "name": "Loakan Airport",
    "city": "Baguio",
    "country": "Philippines",
    "iata": "BAG",
    "icao": "RPUB"
  },
  {
    "name": "Daet Airport",
    "city": "Daet",
    "country": "Philippines",
    "iata": "NONE",
    "icao": "RPUD"
  },
  {
    "name": "Basa Air Base",
    "city": "Floridablanca",
    "country": "Philippines",
    "iata": "NONE",
    "icao": "RPUF"
  },
  {
    "name": "Lingayen Airport",
    "city": "Lingayen",
    "country": "Philippines",
    "iata": "NONE",
    "icao": "RPUG"
  },
  {
    "name": "San Jose Airport",
    "city": "San Jose",
    "country": "Philippines",
    "iata": "SJI",
    "icao": "RPUH"
  },
  {
    "name": "Fernando Air Base",
    "city": "Lipa",
    "country": "Philippines",
    "iata": "NONE",
    "icao": "RPUL"
  },
  {
    "name": "Mamburao Airport",
    "city": "Mamburao",
    "country": "Philippines",
    "iata": "NONE",
    "icao": "RPUM"
  },
  {
    "name": "Vigan Airport",
    "city": "Vigan",
    "country": "Philippines",
    "iata": "NONE",
    "icao": "RPUQ"
  },
  {
    "name": "Dr.Juan C. Angara Airport",
    "city": "Baler",
    "country": "Philippines",
    "iata": "NONE",
    "icao": "RPUR"
  },
  {
    "name": "Bagabag Airport",
    "city": "Bagabag",
    "country": "Philippines",
    "iata": "NONE",
    "icao": "RPUZ"
  },
  {
    "name": "Daniel Z. Romualdez Airport",
    "city": "Tacloban",
    "country": "Philippines",
    "iata": "TAC",
    "icao": "RPVA"
  },
  {
    "name": "Bacolod-Silay City International Airport",
    "city": "Bacolod",
    "country": "Philippines",
    "iata": "BCD",
    "icao": "RPVB"
  },
  {
    "name": "Sibulan Airport",
    "city": "Dumaguete",
    "country": "Philippines",
    "iata": "DGT",
    "icao": "RPVD"
  },
  {
    "name": "Godofredo P. Ramos Airport",
    "city": "Caticlan",
    "country": "Philippines",
    "iata": "MPH",
    "icao": "RPVE"
  },
  {
    "name": "Guiuan Airport",
    "city": "Guiuan",
    "country": "Philippines",
    "iata": "NONE",
    "icao": "RPVG"
  },
  {
    "name": "Iloilo International Airport",
    "city": "Iloilo",
    "country": "Philippines",
    "iata": "ILO",
    "icao": "RPVI"
  },
  {
    "name": "Kalibo International Airport",
    "city": "Kalibo",
    "country": "Philippines",
    "iata": "KLO",
    "icao": "RPVK"
  },
  {
    "name": "Puerto Princesa Airport",
    "city": "Puerto Princesa",
    "country": "Philippines",
    "iata": "PPS",
    "icao": "RPVP"
  },
  {
    "name": "Evelio Javier Airport",
    "city": "San Jose",
    "country": "Philippines",
    "iata": "NONE",
    "icao": "RPVS"
  },
  {
    "name": "Comodoro Pierrestegui Airport",
    "city": "Concordia",
    "country": "Argentina",
    "iata": "COC",
    "icao": "SAAC"
  },
  {
    "name": "Gualeguaychu Airport",
    "city": "Gualeguaychu",
    "country": "Argentina",
    "iata": "GHU",
    "icao": "SAAG"
  },
  {
    "name": "Junin Airport",
    "city": "Junin",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SAAJ"
  },
  {
    "name": "General Urquiza Airport",
    "city": "Parana",
    "country": "Argentina",
    "iata": "PRA",
    "icao": "SAAP"
  },
  {
    "name": "Islas Malvinas Airport",
    "city": "Rosario",
    "country": "Argentina",
    "iata": "ROS",
    "icao": "SAAR"
  },
  {
    "name": "Sauce Viejo Airport",
    "city": "Santa Fe",
    "country": "Argentina",
    "iata": "SFN",
    "icao": "SAAV"
  },
  {
    "name": "Jorge Newbery Airpark",
    "city": "Buenos Aires",
    "country": "Argentina",
    "iata": "AEP",
    "icao": "SABE"
  },
  {
    "name": "Ingeniero Ambrosio Taravella Airport",
    "city": "Cordoba",
    "country": "Argentina",
    "iata": "COR",
    "icao": "SACO"
  },
  {
    "name": "Chamical Airport",
    "city": "Gobernador Gordillo",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SACT"
  },
  {
    "name": "San Fernando Airport",
    "city": "San Fernando",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SADF"
  },
  {
    "name": "Mariano Moreno Airport",
    "city": "Jose C. Paz",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SADJ"
  },
  {
    "name": "La Plata Airport",
    "city": "La Plata",
    "country": "Argentina",
    "iata": "LPG",
    "icao": "SADL"
  },
  {
    "name": "Moron Airport",
    "city": "Moron",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SADM"
  },
  {
    "name": "El Palomar Airport",
    "city": "El Palomar",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SADP"
  },
  {
    "name": "Chos Malal Airport",
    "city": "Chosmadal",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SAHC"
  },
  {
    "name": "Dr. Arturo H. Illia Airport",
    "city": "Fuerte Gral Roca",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SAHR"
  },
  {
    "name": "El Plumerillo Airport",
    "city": "Mendoza",
    "country": "Argentina",
    "iata": "MDZ",
    "icao": "SAME"
  },
  {
    "name": "Comodoro D.R. Salomón Airport",
    "city": "Malargue",
    "country": "Argentina",
    "iata": "LGS",
    "icao": "SAMM"
  },
  {
    "name": "Suboficial Ay Santiago Germano Airport",
    "city": "San Rafael",
    "country": "Argentina",
    "iata": "AFA",
    "icao": "SAMR"
  },
  {
    "name": "Catamarca Airport",
    "city": "Catamarca",
    "country": "Argentina",
    "iata": "CTC",
    "icao": "SANC"
  },
  {
    "name": "Vicecomodoro Angel D. La Paz Aragonés Airport",
    "city": "Santiago Del Estero",
    "country": "Argentina",
    "iata": "SDE",
    "icao": "SANE"
  },
  {
    "name": "Tinogasta Airport",
    "city": "Tinogasta",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SANI"
  },
  {
    "name": "Capitan V A Almonacid Airport",
    "city": "La Rioja",
    "country": "Argentina",
    "iata": "IRJ",
    "icao": "SANL"
  },
  {
    "name": "Chilecito Airport",
    "city": "Chilecito",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SANO"
  },
  {
    "name": "Teniente Benjamin Matienzo Airport",
    "city": "Tucuman",
    "country": "Argentina",
    "iata": "TUC",
    "icao": "SANT"
  },
  {
    "name": "Domingo Faustino Sarmiento Airport",
    "city": "San Julian",
    "country": "Argentina",
    "iata": "UAQ",
    "icao": "SANU"
  },
  {
    "name": "Area De Material Airport",
    "city": "Rio Cuarto",
    "country": "Argentina",
    "iata": "RCU",
    "icao": "SAOC"
  },
  {
    "name": "Villa Dolores Airport",
    "city": "Villa Dolores",
    "country": "Argentina",
    "iata": "VDR",
    "icao": "SAOD"
  },
  {
    "name": "La Quiaca Airport",
    "city": "Laboulaye",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SAOL"
  },
  {
    "name": "Marcos Juarez Airport",
    "city": "Marcos Juarez",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SAOM"
  },
  {
    "name": "Villa Reynolds Airport",
    "city": "Villa Reynolds",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SAOR"
  },
  {
    "name": "Brigadier Mayor D Cesar Raul Ojeda Airport",
    "city": "San Luis",
    "country": "Argentina",
    "iata": "LUQ",
    "icao": "SAOU"
  },
  {
    "name": "Corrientes Airport",
    "city": "Corrientes",
    "country": "Argentina",
    "iata": "CNQ",
    "icao": "SARC"
  },
  {
    "name": "Resistencia International Airport",
    "city": "Resistencia",
    "country": "Argentina",
    "iata": "RES",
    "icao": "SARE"
  },
  {
    "name": "Formosa Airport",
    "city": "Formosa",
    "country": "Argentina",
    "iata": "FMA",
    "icao": "SARF"
  },
  {
    "name": "Cataratas Del Iguazú International Airport",
    "city": "Iguazu Falls",
    "country": "Argentina",
    "iata": "IGR",
    "icao": "SARI"
  },
  {
    "name": "Paso De Los Libres Airport",
    "city": "Paso De Los Libres",
    "country": "Argentina",
    "iata": "AOL",
    "icao": "SARL"
  },
  {
    "name": "Monte Caseros Airport",
    "city": "Monte Caseros",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SARM"
  },
  {
    "name": "Libertador Gral D Jose De San Martin Airport",
    "city": "Posadas",
    "country": "Argentina",
    "iata": "PSS",
    "icao": "SARP"
  },
  {
    "name": "Martin Miguel De Guemes International Airport",
    "city": "Salta",
    "country": "Argentina",
    "iata": "SLA",
    "icao": "SASA"
  },
  {
    "name": "Gobernador Horacio Guzman International Airport",
    "city": "Jujuy",
    "country": "Argentina",
    "iata": "JUJ",
    "icao": "SASJ"
  },
  {
    "name": "Orán Airport",
    "city": "Oran",
    "country": "Argentina",
    "iata": "ORA",
    "icao": "SASO"
  },
  {
    "name": "Laboulaye Airport",
    "city": "La Quiaca",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SASQ"
  },
  {
    "name": "El Dorado Airport",
    "city": "El Dorado",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SATD"
  },
  {
    "name": "Goya Airport",
    "city": "Goya",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SATG"
  },
  {
    "name": "Oberá Airport",
    "city": "Obera",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SATO"
  },
  {
    "name": "Reconquista Airport",
    "city": "Reconquista",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SATR"
  },
  {
    "name": "Curuzu Cuatia Airport",
    "city": "Curuzu Cuatia",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SATU"
  },
  {
    "name": "El Bolson Airport",
    "city": "El Bolson",
    "country": "Argentina",
    "iata": "EHL",
    "icao": "SAVB"
  },
  {
    "name": "General E. Mosconi Airport",
    "city": "Comodoro Rivadavia",
    "country": "Argentina",
    "iata": "CRD",
    "icao": "SAVC"
  },
  {
    "name": "Brigadier Antonio Parodi Airport",
    "city": "Esquel",
    "country": "Argentina",
    "iata": "EQS",
    "icao": "SAVE"
  },
  {
    "name": "Almirante Marco Andres Zar Airport",
    "city": "Trelew",
    "country": "Argentina",
    "iata": "REL",
    "icao": "SAVT"
  },
  {
    "name": "Gobernador Castello Airport",
    "city": "Viedma",
    "country": "Argentina",
    "iata": "VDM",
    "icao": "SAVV"
  },
  {
    "name": "El Tehuelche Airport",
    "city": "Puerto Madryn",
    "country": "Argentina",
    "iata": "PMY",
    "icao": "SAVY"
  },
  {
    "name": "Marambio Base",
    "city": "Marambio Base",
    "country": "Antarctica",
    "iata": "NONE",
    "icao": "SAWB"
  },
  {
    "name": "Puerto Deseado Airport",
    "city": "Puerto Deseado",
    "country": "Argentina",
    "iata": "PUD",
    "icao": "SAWD"
  },
  {
    "name": "Hermes Quijada International Airport",
    "city": "Rio Grande",
    "country": "Argentina",
    "iata": "RGA",
    "icao": "SAWE"
  },
  {
    "name": "Piloto Civil N. Fernández Airport",
    "city": "Rio Gallegos",
    "country": "Argentina",
    "iata": "RGL",
    "icao": "SAWG"
  },
  {
    "name": "Malvinas Argentinas Airport",
    "city": "Ushuaia",
    "country": "Argentina",
    "iata": "USH",
    "icao": "SAWH"
  },
  {
    "name": "Capitan D Daniel Vazquez Airport",
    "city": "San Julian",
    "country": "Argentina",
    "iata": "ULA",
    "icao": "SAWJ"
  },
  {
    "name": "Perito Moreno Airport",
    "city": "Perito Moreno",
    "country": "Argentina",
    "iata": "PMQ",
    "icao": "SAWP"
  },
  {
    "name": "Santa Cruz Airport",
    "city": "Santa Cruz",
    "country": "Argentina",
    "iata": "RZA",
    "icao": "SAWU"
  },
  {
    "name": "Comandante Espora Airport",
    "city": "Bahia Blanca",
    "country": "Argentina",
    "iata": "BHI",
    "icao": "SAZB"
  },
  {
    "name": "Brigadier D.H.E. Ruiz Airport",
    "city": "Colonel Suarez",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SAZC"
  },
  {
    "name": "Olavarria Airport",
    "city": "Olavarria",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SAZF"
  },
  {
    "name": "General Pico Airport",
    "city": "General Pico",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SAZG"
  },
  {
    "name": "Tres Arroyos Airport",
    "city": "Tres Arroyos",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SAZH"
  },
  {
    "name": "Bolivar Airport",
    "city": "Bolivar",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SAZI"
  },
  {
    "name": "Ástor Piazzola International Airport",
    "city": "Mar Del Plata",
    "country": "Argentina",
    "iata": "MDQ",
    "icao": "SAZM"
  },
  {
    "name": "Presidente Peron Airport",
    "city": "Neuquen",
    "country": "Argentina",
    "iata": "NQN",
    "icao": "SAZN"
  },
  {
    "name": "Comodoro Pedro Zanni Airport",
    "city": "Pehuajo",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SAZP"
  },
  {
    "name": "Santa Rosa Airport",
    "city": "Santa Rosa",
    "country": "Argentina",
    "iata": "RSA",
    "icao": "SAZR"
  },
  {
    "name": "San Carlos De Bariloche Airport",
    "city": "San Carlos De Bariloche",
    "country": "Argentina",
    "iata": "BRC",
    "icao": "SAZS"
  },
  {
    "name": "Héroes De Malvinas Airport",
    "city": "Tandil",
    "country": "Argentina",
    "iata": "TDL",
    "icao": "SAZT"
  },
  {
    "name": "Villa Gesell Airport",
    "city": "Villa Gesell",
    "country": "Argentina",
    "iata": "VLG",
    "icao": "SAZV"
  },
  {
    "name": "Cutral-Co Airport",
    "city": "Cutralco",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SAZW"
  },
  {
    "name": "Aviador C. Campos Airport",
    "city": "San Martin Des Andes",
    "country": "Argentina",
    "iata": "CPC",
    "icao": "SAZY"
  },
  {
    "name": "Conceição do Araguaia Airport",
    "city": "Conceicao Do Araguaia",
    "country": "Brazil",
    "iata": "CDJ",
    "icao": "SBAA"
  },
  {
    "name": "Campo Délio Jardim de Mattos Airport",
    "city": "Rio De Janeiro",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SBAF"
  },
  {
    "name": "Amapá Airport",
    "city": "Amapa",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SBAM"
  },
  {
    "name": "Araraquara Airport",
    "city": "Araracuara",
    "country": "Brazil",
    "iata": "AQA",
    "icao": "SBAQ"
  },
  {
    "name": "Santa Maria Airport",
    "city": "Aracaju",
    "country": "Brazil",
    "iata": "AJU",
    "icao": "SBAR"
  },
  {
    "name": "Piloto Osvaldo Marques Dias Airport",
    "city": "Alta Floresta",
    "country": "Brazil",
    "iata": "AFL",
    "icao": "SBAT"
  },
  {
    "name": "Araçatuba Airport",
    "city": "Aracatuba",
    "country": "Brazil",
    "iata": "ARU",
    "icao": "SBAU"
  },
  {
    "name": "Val de Cans/Júlio Cezar Ribeiro International Airport",
    "city": "Belem",
    "country": "Brazil",
    "iata": "BEL",
    "icao": "SBBE"
  },
  {
    "name": "Comandante Gustavo Kraemer Airport",
    "city": "Bage",
    "country": "Brazil",
    "iata": "BGX",
    "icao": "SBBG"
  },
  {
    "name": "Pampulha - Carlos Drummond de Andrade Airport",
    "city": "Belo Horizonte",
    "country": "Brazil",
    "iata": "PLU",
    "icao": "SBBH"
  },
  {
    "name": "Bacacheri Airport",
    "city": "Curitiba",
    "country": "Brazil",
    "iata": "BFH",
    "icao": "SBBI"
  },
  {
    "name": "Major Brigadeiro Doorgal Borges Airport",
    "city": "Barbacena",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SBBQ"
  },
  {
    "name": "Presidente Juscelino Kubistschek International Airport",
    "city": "Brasilia",
    "country": "Brazil",
    "iata": "BSB",
    "icao": "SBBR"
  },
  {
    "name": "Bauru Airport",
    "city": "Bauru",
    "country": "Brazil",
    "iata": "BAU",
    "icao": "SBBU"
  },
  {
    "name": "Atlas Brasil Cantanhede Airport",
    "city": "Boa Vista",
    "country": "Brazil",
    "iata": "BVB",
    "icao": "SBBV"
  },
  {
    "name": "Barra do Garças Airport",
    "city": "Barra Do Garcas",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SBBW"
  },
  {
    "name": "Cascavel Airport",
    "city": "Cascavel",
    "country": "Brazil",
    "iata": "CAC",
    "icao": "SBCA"
  },
  {
    "name": "Cachimbo Airport",
    "city": "Itaituba",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SBCC"
  },
  {
    "name": "Tancredo Neves International Airport",
    "city": "Belo Horizonte",
    "country": "Brazil",
    "iata": "CNF",
    "icao": "SBCF"
  },
  {
    "name": "Campo Grande Airport",
    "city": "Campo Grande",
    "country": "Brazil",
    "iata": "CGR",
    "icao": "SBCG"
  },
  {
    "name": "Serafin Enoss Bertaso Airport",
    "city": "Chapeco",
    "country": "Brazil",
    "iata": "XAP",
    "icao": "SBCH"
  },
  {
    "name": "Brig. Lysias Augusto Rodrigues Airport",
    "city": "Carolina",
    "country": "Brazil",
    "iata": "CLN",
    "icao": "SBCI"
  },
  {
    "name": "Diomício Freitas Airport",
    "city": "Criciuma",
    "country": "Brazil",
    "iata": "CCM",
    "icao": "SBCM"
  },
  {
    "name": "Canoas Air Force Base",
    "city": "Porto Alegre",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SBCO"
  },
  {
    "name": "Bartolomeu Lisandro Airport",
    "city": "Campos",
    "country": "Brazil",
    "iata": "CAW",
    "icao": "SBCP"
  },
  {
    "name": "Corumbá International Airport",
    "city": "Corumba",
    "country": "Brazil",
    "iata": "CMG",
    "icao": "SBCR"
  },
  {
    "name": "Afonso Pena Airport",
    "city": "Curitiba",
    "country": "Brazil",
    "iata": "CWB",
    "icao": "SBCT"
  },
  {
    "name": "Caravelas Airport",
    "city": "Caravelas",
    "country": "Brazil",
    "iata": "CRQ",
    "icao": "SBCV"
  },
  {
    "name": "Hugo Cantergiani Regional Airport",
    "city": "Caxias Do Sul",
    "country": "Brazil",
    "iata": "CXJ",
    "icao": "SBCX"
  },
  {
    "name": "Marechal Rondon Airport",
    "city": "Cuiaba",
    "country": "Brazil",
    "iata": "CGB",
    "icao": "SBCY"
  },
  {
    "name": "Cruzeiro do Sul Airport",
    "city": "Cruzeiro do Sul",
    "country": "Brazil",
    "iata": "CZS",
    "icao": "SBCZ"
  },
  {
    "name": "Presidente Prudente Airport",
    "city": "President Prudente",
    "country": "Brazil",
    "iata": "PPB",
    "icao": "SBDN"
  },
  {
    "name": "Eduardo Gomes International Airport",
    "city": "Manaus",
    "country": "Brazil",
    "iata": "MAO",
    "icao": "SBEG"
  },
  {
    "name": "Jacareacanga Airport",
    "city": "Jacare-acanga",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SBEK"
  },
  {
    "name": "São Pedro da Aldeia Airport",
    "city": "Sao Pedro Da Aldeia",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SBES"
  },
  {
    "name": "Cataratas International Airport",
    "city": "Foz Do Iguacu",
    "country": "Brazil",
    "iata": "IGU",
    "icao": "SBFI"
  },
  {
    "name": "Hercílio Luz International Airport",
    "city": "Florianopolis",
    "country": "Brazil",
    "iata": "FLN",
    "icao": "SBFL"
  },
  {
    "name": "Fernando de Noronha Airport",
    "city": "Fernando Do Noronha",
    "country": "Brazil",
    "iata": "FEN",
    "icao": "SBFN"
  },
  {
    "name": "Furnas Airport",
    "city": "Alpinopolis",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SBFU"
  },
  {
    "name": "Pinto Martins International Airport",
    "city": "Fortaleza",
    "country": "Brazil",
    "iata": "FOR",
    "icao": "SBFZ"
  },
  {
    "name": "Rio Galeão – Tom Jobim International Airport",
    "city": "Rio De Janeiro",
    "country": "Brazil",
    "iata": "GIG",
    "icao": "SBGL"
  },
  {
    "name": "Guajará-Mirim Airport",
    "city": "Guajara-mirim",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SBGM"
  },
  {
    "name": "Santa Genoveva Airport",
    "city": "Goiania",
    "country": "Brazil",
    "iata": "GYN",
    "icao": "SBGO"
  },
  {
    "name": "EMBRAER - Unidade Gavião Peixoto Airport",
    "city": "Macae",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SBGP"
  },
  {
    "name": "Guarulhos - Governador André Franco Montoro International Airport",
    "city": "Sao Paulo",
    "country": "Brazil",
    "iata": "GRU",
    "icao": "SBGR"
  },
  {
    "name": "Guaratinguetá Airport",
    "city": "Guaratingueta",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SBGW"
  },
  {
    "name": "Altamira Airport",
    "city": "Altamira",
    "country": "Brazil",
    "iata": "ATM",
    "icao": "SBHT"
  },
  {
    "name": "Itacoatiara Airport",
    "city": "Itaituba",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SBIC"
  },
  {
    "name": "Itaituba Airport",
    "city": "Itaituba",
    "country": "Brazil",
    "iata": "ITB",
    "icao": "SBIH"
  },
  {
    "name": "Bahia - Jorge Amado Airport",
    "city": "Ilheus",
    "country": "Brazil",
    "iata": "IOS",
    "icao": "SBIL"
  },
  {
    "name": "Usiminas Airport",
    "city": "Ipatinga",
    "country": "Brazil",
    "iata": "IPN",
    "icao": "SBIP"
  },
  {
    "name": "Francisco Vilela do Amaral Airport",
    "city": "Itumbiara",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SBIT"
  },
  {
    "name": "Prefeito Renato Moreira Airport",
    "city": "Imperatriz",
    "country": "Brazil",
    "iata": "IMP",
    "icao": "SBIZ"
  },
  {
    "name": "Belém/Brigadeiro Protásio de Oliveira Airport",
    "city": "Belem",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SBJC"
  },
  {
    "name": "Francisco de Assis Airport",
    "city": "Juiz De Fora",
    "country": "Brazil",
    "iata": "JDF",
    "icao": "SBJF"
  },
  {
    "name": "Presidente Castro Pinto International Airport",
    "city": "Joao Pessoa",
    "country": "Brazil",
    "iata": "JPA",
    "icao": "SBJP"
  },
  {
    "name": "Lauro Carneiro de Loyola Airport",
    "city": "Joinville",
    "country": "Brazil",
    "iata": "JOI",
    "icao": "SBJV"
  },
  {
    "name": "Presidente João Suassuna Airport",
    "city": "Campina Grande",
    "country": "Brazil",
    "iata": "CPV",
    "icao": "SBKG"
  },
  {
    "name": "Viracopos International Airport",
    "city": "Campinas",
    "country": "Brazil",
    "iata": "VCP",
    "icao": "SBKP"
  },
  {
    "name": "Lages Airport",
    "city": "Lajes",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SBLJ"
  },
  {
    "name": "Lins Airport",
    "city": "Lins",
    "country": "Brazil",
    "iata": "LIP",
    "icao": "SBLN"
  },
  {
    "name": "Governador José Richa Airport",
    "city": "Londrina",
    "country": "Brazil",
    "iata": "LDB",
    "icao": "SBLO"
  },
  {
    "name": "Bom Jesus da Lapa Airport",
    "city": "Bom Jesus Da Lapa",
    "country": "Brazil",
    "iata": "LAZ",
    "icao": "SBLP"
  },
  {
    "name": "Lagoa Santa Airport",
    "city": "Lagoa Santa",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SBLS"
  },
  {
    "name": "João Correa da Rocha Airport",
    "city": "Maraba",
    "country": "Brazil",
    "iata": "MAB",
    "icao": "SBMA"
  },
  {
    "name": "Monte Dourado Airport",
    "city": "Almeirim",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SBMD"
  },
  {
    "name": "Regional de Maringá - Sílvio Nane Junior Airport",
    "city": "Maringa",
    "country": "Brazil",
    "iata": "MGF",
    "icao": "SBMG"
  },
  {
    "name": "Mário Ribeiro Airport",
    "city": "Montes Claros",
    "country": "Brazil",
    "iata": "MOC",
    "icao": "SBMK"
  },
  {
    "name": "Ponta Pelada Airport",
    "city": "Manaus",
    "country": "Brazil",
    "iata": "PLL",
    "icao": "SBMN"
  },
  {
    "name": "Zumbi dos Palmares Airport",
    "city": "Maceio",
    "country": "Brazil",
    "iata": "MCZ",
    "icao": "SBMO"
  },
  {
    "name": "Alberto Alcolumbre Airport",
    "city": "Macapa",
    "country": "Brazil",
    "iata": "MCP",
    "icao": "SBMQ"
  },
  {
    "name": "Dix-Sept Rosado Airport",
    "city": "Mocord",
    "country": "Brazil",
    "iata": "MVF",
    "icao": "SBMS"
  },
  {
    "name": "Campo de Marte Airport",
    "city": "Sao Paulo",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SBMT"
  },
  {
    "name": "Manicoré Airport",
    "city": "Manicore",
    "country": "Brazil",
    "iata": "MNX",
    "icao": "SBMY"
  },
  {
    "name": "Ministro Victor Konder International Airport",
    "city": "Navegantes",
    "country": "Brazil",
    "iata": "NVT",
    "icao": "SBNF"
  },
  {
    "name": "Santo Ângelo Airport",
    "city": "Santo Angelo",
    "country": "Brazil",
    "iata": "GEL",
    "icao": "SBNM"
  },
  {
    "name": "Governador Aluízio Alves International Airport",
    "city": "Natal",
    "country": "Brazil",
    "iata": "NAT",
    "icao": "SBSG"
  },
  {
    "name": "Oiapoque Airport",
    "city": "Oioiapoque",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SBOI"
  },
  {
    "name": "Salgado Filho Airport",
    "city": "Porto Alegre",
    "country": "Brazil",
    "iata": "POA",
    "icao": "SBPA"
  },
  {
    "name": "Prefeito Doutor João Silva Filho Airport",
    "city": "Parnaiba",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SBPB"
  },
  {
    "name": "Poços de Caldas - Embaixador Walther Moreira Salles Airport",
    "city": "Pocos De Caldas",
    "country": "Brazil",
    "iata": "POO",
    "icao": "SBPC"
  },
  {
    "name": "Lauro Kurtz Airport",
    "city": "Passo Fundo",
    "country": "Brazil",
    "iata": "PFB",
    "icao": "SBPF"
  },
  {
    "name": "João Simões Lopes Neto International Airport",
    "city": "Pelotas",
    "country": "Brazil",
    "iata": "PET",
    "icao": "SBPK"
  },
  {
    "name": "Senador Nilo Coelho Airport",
    "city": "Petrolina",
    "country": "Brazil",
    "iata": "PNZ",
    "icao": "SBPL"
  },
  {
    "name": "Porto Nacional Airport",
    "city": "Porto Nacional",
    "country": "Brazil",
    "iata": "PNB",
    "icao": "SBPN"
  },
  {
    "name": "Ponta Porã Airport",
    "city": "Ponta Pora",
    "country": "Brazil",
    "iata": "PMG",
    "icao": "SBPP"
  },
  {
    "name": "Governador Jorge Teixeira de Oliveira Airport",
    "city": "Porto Velho",
    "country": "Brazil",
    "iata": "PVH",
    "icao": "SBPV"
  },
  {
    "name": "Plácido de Castro Airport",
    "city": "Rio Branco",
    "country": "Brazil",
    "iata": "RBR",
    "icao": "SBRB"
  },
  {
    "name": "Guararapes - Gilberto Freyre International Airport",
    "city": "Recife",
    "country": "Brazil",
    "iata": "REC",
    "icao": "SBRF"
  },
  {
    "name": "Santos Dumont Airport",
    "city": "Rio De Janeiro",
    "country": "Brazil",
    "iata": "SDU",
    "icao": "SBRJ"
  },
  {
    "name": "Leite Lopes Airport",
    "city": "Ribeirao Preto",
    "country": "Brazil",
    "iata": "RAO",
    "icao": "SBRP"
  },
  {
    "name": "Santa Cruz Airport",
    "city": "Rio De Janeiro",
    "country": "Brazil",
    "iata": "STU",
    "icao": "SBSC"
  },
  {
    "name": "Professor Urbano Ernesto Stumpf Airport",
    "city": "Sao Jose Dos Campos",
    "country": "Brazil",
    "iata": "SJK",
    "icao": "SBSJ"
  },
  {
    "name": "Marechal Cunha Machado International Airport",
    "city": "Sao Luis",
    "country": "Brazil",
    "iata": "SLZ",
    "icao": "SBSL"
  },
  {
    "name": "Congonhas Airport",
    "city": "Sao Paulo",
    "country": "Brazil",
    "iata": "CGH",
    "icao": "SBSP"
  },
  {
    "name": "Prof. Eribelto Manoel Reino State Airport",
    "city": "Sao Jose Do Rio Preto",
    "country": "Brazil",
    "iata": "SJP",
    "icao": "SBSR"
  },
  {
    "name": "Base Aérea de Santos Airport",
    "city": "Santos",
    "country": "Brazil",
    "iata": "SSZ",
    "icao": "SBST"
  },
  {
    "name": "Deputado Luiz Eduardo Magalhães International Airport",
    "city": "Salvador",
    "country": "Brazil",
    "iata": "SSA",
    "icao": "SBSV"
  },
  {
    "name": "Trombetas Airport",
    "city": "Oriximina",
    "country": "Brazil",
    "iata": "TMT",
    "icao": "SBTB"
  },
  {
    "name": "Senador Petrônio Portela Airport",
    "city": "Teresina",
    "country": "Brazil",
    "iata": "THE",
    "icao": "SBTE"
  },
  {
    "name": "Tefé Airport",
    "city": "Tefe",
    "country": "Brazil",
    "iata": "TFF",
    "icao": "SBTF"
  },
  {
    "name": "Tarauacá Airport",
    "city": "Tarauaca",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SBTK"
  },
  {
    "name": "Telêmaco Borba Airport",
    "city": "Telemaco Borba",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SBTL"
  },
  {
    "name": "Tiriós Airport",
    "city": "Obidos Tirios",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SBTS"
  },
  {
    "name": "Tabatinga Airport",
    "city": "Tabatinga",
    "country": "Brazil",
    "iata": "TBT",
    "icao": "SBTT"
  },
  {
    "name": "Tucuruí Airport",
    "city": "Tucurui",
    "country": "Brazil",
    "iata": "TUR",
    "icao": "SBTU"
  },
  {
    "name": "São Gabriel da Cachoeira Airport",
    "city": "Sao Gabriel",
    "country": "Brazil",
    "iata": "SJL",
    "icao": "SBUA"
  },
  {
    "name": "Paulo Afonso Airport",
    "city": "Paulo Alfonso",
    "country": "Brazil",
    "iata": "PAV",
    "icao": "SBUF"
  },
  {
    "name": "Rubem Berta Airport",
    "city": "Uruguaiana",
    "country": "Brazil",
    "iata": "URG",
    "icao": "SBUG"
  },
  {
    "name": "Ten. Cel. Aviador César Bombonato Airport",
    "city": "Uberlandia",
    "country": "Brazil",
    "iata": "UDI",
    "icao": "SBUL"
  },
  {
    "name": "Mário de Almeida Franco Airport",
    "city": "Uberaba",
    "country": "Brazil",
    "iata": "UBA",
    "icao": "SBUR"
  },
  {
    "name": "Major Brigadeiro Trompowsky Airport",
    "city": "Varginha",
    "country": "Brazil",
    "iata": "VAG",
    "icao": "SBVG"
  },
  {
    "name": "Brigadeiro Camarão Airport",
    "city": "Vilhena",
    "country": "Brazil",
    "iata": "BVH",
    "icao": "SBVH"
  },
  {
    "name": "Eurico de Aguiar Salles Airport",
    "city": "Vitoria",
    "country": "Brazil",
    "iata": "VIX",
    "icao": "SBVT"
  },
  {
    "name": "Iauaretê Airport",
    "city": "Iauarete",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SBYA"
  },
  {
    "name": "Campo Fontenelle Airport",
    "city": "Piracununga",
    "country": "Brazil",
    "iata": "QPS",
    "icao": "SBYS"
  },
  {
    "name": "Chacalluta Airport",
    "city": "Arica",
    "country": "Chile",
    "iata": "ARI",
    "icao": "SCAR"
  },
  {
    "name": "Balmaceda Airport",
    "city": "Balmaceda",
    "country": "Chile",
    "iata": "BBA",
    "icao": "SCBA"
  },
  {
    "name": "El Bosque Airport",
    "city": "Santiago",
    "country": "Chile",
    "iata": "NONE",
    "icao": "SCBQ"
  },
  {
    "name": "Chile Chico Airport",
    "city": "Chile Chico",
    "country": "Chile",
    "iata": "CCH",
    "icao": "SCCC"
  },
  {
    "name": "El Loa Airport",
    "city": "Calama",
    "country": "Chile",
    "iata": "CJC",
    "icao": "SCCF"
  },
  {
    "name": "Gral. Bernardo O´Higgins Airport",
    "city": "Chillan",
    "country": "Chile",
    "iata": "NONE",
    "icao": "SCCH"
  },
  {
    "name": "Pdte. carlos Ibañez del Campo Airport",
    "city": "Punta Arenas",
    "country": "Chile",
    "iata": "PUQ",
    "icao": "SCCI"
  },
  {
    "name": "Teniente Vidal Airport",
    "city": "Coyhaique",
    "country": "Chile",
    "iata": "GXQ",
    "icao": "SCCY"
  },
  {
    "name": "Diego Aracena Airport",
    "city": "Iquique",
    "country": "Chile",
    "iata": "IQQ",
    "icao": "SCDA"
  },
  {
    "name": "Comodoro Arturo Merino Benítez International Airport",
    "city": "Santiago",
    "country": "Chile",
    "iata": "SCL",
    "icao": "SCEL"
  },
  {
    "name": "Cerro Moreno Airport",
    "city": "Antofagasta",
    "country": "Chile",
    "iata": "ANF",
    "icao": "SCFA"
  },
  {
    "name": "Capitan Fuentes Martinez Airport Airport",
    "city": "Porvenir",
    "country": "Chile",
    "iata": "WPR",
    "icao": "SCFM"
  },
  {
    "name": "Futaleufú Airport",
    "city": "Futaleufu",
    "country": "Chile",
    "iata": "NONE",
    "icao": "SCFT"
  },
  {
    "name": "María Dolores Airport",
    "city": "Los Angeles",
    "country": "Chile",
    "iata": "LSQ",
    "icao": "SCGE"
  },
  {
    "name": "Guardiamarina Zañartu Airport",
    "city": "Puerto Williams",
    "country": "Chile",
    "iata": "WPU",
    "icao": "SCGZ"
  },
  {
    "name": "Carriel Sur Airport",
    "city": "Concepcion",
    "country": "Chile",
    "iata": "CCP",
    "icao": "SCIE"
  },
  {
    "name": "Mataveri Airport",
    "city": "Easter Island",
    "country": "Chile",
    "iata": "IPC",
    "icao": "SCIP"
  },
  {
    "name": "Cañal Bajo Carlos - Hott Siebert Airport",
    "city": "Osorno",
    "country": "Chile",
    "iata": "ZOS",
    "icao": "SCJO"
  },
  {
    "name": "Vallenar Airport",
    "city": "Vallenar",
    "country": "Chile",
    "iata": "NONE",
    "icao": "SCLL"
  },
  {
    "name": "De La Independencia Airport",
    "city": "Rancagua",
    "country": "Chile",
    "iata": "NONE",
    "icao": "SCRG"
  },
  {
    "name": "Teniente Rodolfo Marsh Martin Base",
    "city": "Isla Rey Jorge",
    "country": "Antarctica",
    "iata": "NONE",
    "icao": "SCRM"
  },
  {
    "name": "La Florida Airport",
    "city": "La Serena",
    "country": "Chile",
    "iata": "LSC",
    "icao": "SCSE"
  },
  {
    "name": "Eulogio Sánchez Airport",
    "city": "Santiago",
    "country": "Chile",
    "iata": "NONE",
    "icao": "SCTB"
  },
  {
    "name": "Maquehue Airport",
    "city": "Temuco",
    "country": "Chile",
    "iata": "ZCO",
    "icao": "SCTC"
  },
  {
    "name": "El Tepual Airport",
    "city": "Puerto Montt",
    "country": "Chile",
    "iata": "PMC",
    "icao": "SCTE"
  },
  {
    "name": "Chaitén Airport",
    "city": "Chaiten",
    "country": "Chile",
    "iata": "WCH",
    "icao": "SCTN"
  },
  {
    "name": "Pichoy Airport",
    "city": "Valdivia",
    "country": "Chile",
    "iata": "ZAL",
    "icao": "SCVD"
  },
  {
    "name": "Chachoán Airport",
    "city": "Ambato",
    "country": "Ecuador",
    "iata": "ATF",
    "icao": "SEAM"
  },
  {
    "name": "Hacienda Clementina Airport",
    "city": "Clementia",
    "country": "Ecuador",
    "iata": "NONE",
    "icao": "SECM"
  },
  {
    "name": "Francisco De Orellana Airport",
    "city": "Coca",
    "country": "Ecuador",
    "iata": "OCC",
    "icao": "SECO"
  },
  {
    "name": "Mariscal Lamar Airport",
    "city": "Cuenca",
    "country": "Ecuador",
    "iata": "CUE",
    "icao": "SECU"
  },
  {
    "name": "Seymour Airport",
    "city": "Galapagos",
    "country": "Ecuador",
    "iata": "GPS",
    "icao": "SEGS"
  },
  {
    "name": "José Joaquín de Olmedo International Airport",
    "city": "Guayaquil",
    "country": "Ecuador",
    "iata": "GYE",
    "icao": "SEGU"
  },
  {
    "name": "Gualaquiza Airport",
    "city": "Gualaquiza",
    "country": "Ecuador",
    "iata": "NONE",
    "icao": "SEGZ"
  },
  {
    "name": "Atahualpa Airport",
    "city": "Ibarra",
    "country": "Ecuador",
    "iata": "NONE",
    "icao": "SEIB"
  },
  {
    "name": "Km 192 Airport",
    "city": "Km-192",
    "country": "Ecuador",
    "iata": "NONE",
    "icao": "SEKK"
  },
  {
    "name": "Hacienda La Julia Airport",
    "city": "La Julia",
    "country": "Ecuador",
    "iata": "NONE",
    "icao": "SELJ"
  },
  {
    "name": "Cotopaxi International Airport",
    "city": "Latacunga",
    "country": "Ecuador",
    "iata": "LTX",
    "icao": "SELT"
  },
  {
    "name": "Jose Maria Velasco Ibarra Airport",
    "city": "Macara",
    "country": "Ecuador",
    "iata": "NONE",
    "icao": "SEMA"
  },
  {
    "name": "Coronel E Carvajal Airport",
    "city": "Macas",
    "country": "Ecuador",
    "iata": "XMS",
    "icao": "SEMC"
  },
  {
    "name": "General Manuel Serrano Airport",
    "city": "Machala",
    "country": "Ecuador",
    "iata": "MCH",
    "icao": "SEMH"
  },
  {
    "name": "El Carmen Airport",
    "city": "Montalvo",
    "country": "Ecuador",
    "iata": "NONE",
    "icao": "SEMO"
  },
  {
    "name": "Eloy Alfaro International Airport",
    "city": "Manta",
    "country": "Ecuador",
    "iata": "MEC",
    "icao": "SEMT"
  },
  {
    "name": "Maragrosa Airport",
    "city": "Maragrosa",
    "country": "Ecuador",
    "iata": "NONE",
    "icao": "SEMX"
  },
  {
    "name": "Amable Calle Gutierrez Airport",
    "city": "Pasaje",
    "country": "Ecuador",
    "iata": "NONE",
    "icao": "SEPS"
  },
  {
    "name": "Reales Tamarindos Airport",
    "city": "Portoviejo",
    "country": "Ecuador",
    "iata": "PVO",
    "icao": "SEPV"
  },
  {
    "name": "Quevedo Airport",
    "city": "Quevedo",
    "country": "Ecuador",
    "iata": "NONE",
    "icao": "SEQE"
  },
  {
    "name": "Mariscal Sucre International Airport",
    "city": "Quito",
    "country": "Ecuador",
    "iata": "UIO",
    "icao": "SEQM"
  },
  {
    "name": "Chimborazo Airport",
    "city": "Riobamba",
    "country": "Ecuador",
    "iata": "NONE",
    "icao": "SERB"
  },
  {
    "name": "Santa Rosa International Airport",
    "city": "Santa Rosa",
    "country": "Ecuador",
    "iata": "ETR",
    "icao": "SERO"
  },
  {
    "name": "General Ulpiano Paez Airport",
    "city": "Salinas",
    "country": "Ecuador",
    "iata": "SNC",
    "icao": "SESA"
  },
  {
    "name": "Santo Domingo de Los Colorados Airport",
    "city": "Santo Domingo",
    "country": "Ecuador",
    "iata": "NONE",
    "icao": "SESD"
  },
  {
    "name": "Taura Airport",
    "city": "Taura",
    "country": "Ecuador",
    "iata": "NONE",
    "icao": "SETA"
  },
  {
    "name": "Mayor Galo Torres Airport",
    "city": "Tena",
    "country": "Ecuador",
    "iata": "NONE",
    "icao": "SETE"
  },
  {
    "name": "Tarapoa Airport",
    "city": "Tarapoa",
    "country": "Ecuador",
    "iata": "TPC",
    "icao": "SETR"
  },
  {
    "name": "Teniente Coronel Luis a Mantilla Airport",
    "city": "Tulcan",
    "country": "Ecuador",
    "iata": "TUA",
    "icao": "SETU"
  },
  {
    "name": "Silvio Pettirossi International Airport",
    "city": "Asuncion",
    "country": "Paraguay",
    "iata": "ASU",
    "icao": "SGAS"
  },
  {
    "name": "Juan De Ayolas Airport",
    "city": "Ayolas",
    "country": "Paraguay",
    "iata": "NONE",
    "icao": "SGAY"
  },
  {
    "name": "Teniente Col Carmelo Peralta Airport",
    "city": "Conception",
    "country": "Paraguay",
    "iata": "CIO",
    "icao": "SGCO"
  },
  {
    "name": "Itaipú Airport",
    "city": "Itaipu",
    "country": "Paraguay",
    "iata": "NONE",
    "icao": "SGIB"
  },
  {
    "name": "Dr. Luis Maria Argaña International Airport",
    "city": "Mariscal Estigarribia",
    "country": "Paraguay",
    "iata": "NONE",
    "icao": "SGME"
  },
  {
    "name": "Carlos Miguel Gimenez Airport",
    "city": "Pilar",
    "country": "Paraguay",
    "iata": "NONE",
    "icao": "SGPI"
  },
  {
    "name": "El Eden Airport",
    "city": "Armenia",
    "country": "Colombia",
    "iata": "AXM",
    "icao": "SKAR"
  },
  {
    "name": "Tres De Mayo Airport",
    "city": "Puerto Asis",
    "country": "Colombia",
    "iata": "PUU",
    "icao": "SKAS"
  },
  {
    "name": "Las Flores Airport",
    "city": "El Banco",
    "country": "Colombia",
    "iata": "NONE",
    "icao": "SKBC"
  },
  {
    "name": "Palonegro Airport",
    "city": "Bucaramanga",
    "country": "Colombia",
    "iata": "BGA",
    "icao": "SKBG"
  },
  {
    "name": "El Dorado International Airport",
    "city": "Bogota",
    "country": "Colombia",
    "iata": "BOG",
    "icao": "SKBO"
  },
  {
    "name": "Ernesto Cortissoz International Airport",
    "city": "Barranquilla",
    "country": "Colombia",
    "iata": "BAQ",
    "icao": "SKBQ"
  },
  {
    "name": "José Celestino Mutis Airport",
    "city": "Bahia Solano",
    "country": "Colombia",
    "iata": "BSC",
    "icao": "SKBS"
  },
  {
    "name": "Gerardo Tobar López Airport",
    "city": "Buenaventura",
    "country": "Colombia",
    "iata": "BUN",
    "icao": "SKBU"
  },
  {
    "name": "Camilo Daza International Airport",
    "city": "Cucuta",
    "country": "Colombia",
    "iata": "CUC",
    "icao": "SKCC"
  },
  {
    "name": "Rafael Nuñez International Airport",
    "city": "Cartagena",
    "country": "Colombia",
    "iata": "CTG",
    "icao": "SKCG"
  },
  {
    "name": "Alfonso Bonilla Aragon International Airport",
    "city": "Cali",
    "country": "Colombia",
    "iata": "CLO",
    "icao": "SKCL"
  },
  {
    "name": "La Florida Airport",
    "city": "Tumaco",
    "country": "Colombia",
    "iata": "TCO",
    "icao": "SKCO"
  },
  {
    "name": "Las Brujas Airport",
    "city": "Corozal",
    "country": "Colombia",
    "iata": "CZU",
    "icao": "SKCZ"
  },
  {
    "name": "Yariguíes Airport",
    "city": "Barrancabermeja",
    "country": "Colombia",
    "iata": "EJA",
    "icao": "SKEJ"
  },
  {
    "name": "Gustavo Artunduaga Paredes Airport",
    "city": "Florencia",
    "country": "Colombia",
    "iata": "FLA",
    "icao": "SKFL"
  },
  {
    "name": "Santiago Vila Airport",
    "city": "Girardot",
    "country": "Colombia",
    "iata": "NONE",
    "icao": "SKGI"
  },
  {
    "name": "Juan Casiano Airport",
    "city": "Guapi",
    "country": "Colombia",
    "iata": "GPI",
    "icao": "SKGP"
  },
  {
    "name": "Guaymaral Airport",
    "city": "Guaymaral",
    "country": "Colombia",
    "iata": "NONE",
    "icao": "SKGY"
  },
  {
    "name": "Perales Airport",
    "city": "Ibague",
    "country": "Colombia",
    "iata": "IBE",
    "icao": "SKIB"
  },
  {
    "name": "San Luis Airport",
    "city": "Ipiales",
    "country": "Colombia",
    "iata": "IPI",
    "icao": "SKIP"
  },
  {
    "name": "Antonio Roldan Betancourt Airport",
    "city": "Carepa",
    "country": "Colombia",
    "iata": "APO",
    "icao": "SKLC"
  },
  {
    "name": "Jorge Isaac Airport",
    "city": "La Mina",
    "country": "Colombia",
    "iata": "NONE",
    "icao": "SKLM"
  },
  {
    "name": "Alfredo Vásquez Cobo International Airport",
    "city": "Leticia",
    "country": "Colombia",
    "iata": "LET",
    "icao": "SKLT"
  },
  {
    "name": "Enrique Olaya Herrera Airport",
    "city": "Medellin",
    "country": "Colombia",
    "iata": "EOH",
    "icao": "SKMD"
  },
  {
    "name": "Baracoa Airport",
    "city": "Magangue",
    "country": "Colombia",
    "iata": "MGN",
    "icao": "SKMG"
  },
  {
    "name": "Los Garzones Airport",
    "city": "Monteria",
    "country": "Colombia",
    "iata": "MTR",
    "icao": "SKMR"
  },
  {
    "name": "Fabio Alberto Leon Bentley Airport",
    "city": "Mitu",
    "country": "Colombia",
    "iata": "MVP",
    "icao": "SKMU"
  },
  {
    "name": "La Nubia Airport",
    "city": "Manizales",
    "country": "Colombia",
    "iata": "MZL",
    "icao": "SKMZ"
  },
  {
    "name": "Benito Salas Airport",
    "city": "Neiva",
    "country": "Colombia",
    "iata": "NVA",
    "icao": "SKNV"
  },
  {
    "name": "Aguas Claras Airport",
    "city": "Ocana",
    "country": "Colombia",
    "iata": "OCV",
    "icao": "SKOC"
  },
  {
    "name": "Otu Airport",
    "city": "Otu",
    "country": "Colombia",
    "iata": "OTU",
    "icao": "SKOT"
  },
  {
    "name": "Puerto Bolívar Airport",
    "city": "Puerto Bolivar",
    "country": "Colombia",
    "iata": "NONE",
    "icao": "SKPB"
  },
  {
    "name": "German Olano Airport",
    "city": "Puerto Carreno",
    "country": "Colombia",
    "iata": "PCR",
    "icao": "SKPC"
  },
  {
    "name": "Matecaña International Airport",
    "city": "Pereira",
    "country": "Colombia",
    "iata": "PEI",
    "icao": "SKPE"
  },
  {
    "name": "Pitalito Airport",
    "city": "Pitalito",
    "country": "Colombia",
    "iata": "NONE",
    "icao": "SKPI"
  },
  {
    "name": "Guillermo León Valencia Airport",
    "city": "Popayan",
    "country": "Colombia",
    "iata": "PPN",
    "icao": "SKPP"
  },
  {
    "name": "Antonio Narino Airport",
    "city": "Pasto",
    "country": "Colombia",
    "iata": "PSO",
    "icao": "SKPS"
  },
  {
    "name": "El Embrujo Airport",
    "city": "Providencia",
    "country": "Colombia",
    "iata": "PVA",
    "icao": "SKPV"
  },
  {
    "name": "Mariquita Airport",
    "city": "Mariquita",
    "country": "Colombia",
    "iata": "NONE",
    "icao": "SKQU"
  },
  {
    "name": "Jose Maria Córdova International Airport",
    "city": "Rio Negro",
    "country": "Colombia",
    "iata": "MDE",
    "icao": "SKRG"
  },
  {
    "name": "Almirante Padilla Airport",
    "city": "Rio Hacha",
    "country": "Colombia",
    "iata": "RCH",
    "icao": "SKRH"
  },
  {
    "name": "Jorge E. Gonzalez Torres Airport",
    "city": "San Jose Del Guaviare",
    "country": "Colombia",
    "iata": "SJE",
    "icao": "SKSJ"
  },
  {
    "name": "Simón Bolívar International Airport",
    "city": "Santa Marta",
    "country": "Colombia",
    "iata": "SMR",
    "icao": "SKSM"
  },
  {
    "name": "Gustavo Rojas Pinilla International Airport",
    "city": "San Andres Island",
    "country": "Colombia",
    "iata": "ADZ",
    "icao": "SKSP"
  },
  {
    "name": "Eduardo Falla Solano Airport",
    "city": "San Vincente De Caguan",
    "country": "Colombia",
    "iata": "SVI",
    "icao": "SKSV"
  },
  {
    "name": "Gustavo Vargas Airport",
    "city": "Tame",
    "country": "Colombia",
    "iata": "TME",
    "icao": "SKTM"
  },
  {
    "name": "Santiago Perez Airport",
    "city": "Arauca",
    "country": "Colombia",
    "iata": "AUC",
    "icao": "SKUC"
  },
  {
    "name": "El Caraño Airport",
    "city": "Quibdo",
    "country": "Colombia",
    "iata": "UIB",
    "icao": "SKUI"
  },
  {
    "name": "Heriberto Gíl Martínez Airport",
    "city": "Tulua",
    "country": "Colombia",
    "iata": "ULQ",
    "icao": "SKUL"
  },
  {
    "name": "Alfonso López Pumarejo Airport",
    "city": "Valledupar",
    "country": "Colombia",
    "iata": "VUP",
    "icao": "SKVP"
  },
  {
    "name": "Vanguardia Airport",
    "city": "Villavicencio",
    "country": "Colombia",
    "iata": "VVC",
    "icao": "SKVV"
  },
  {
    "name": "Bermejo Airport",
    "city": "Bermejo",
    "country": "Bolivia",
    "iata": "BJO",
    "icao": "SLBJ"
  },
  {
    "name": "Jorge Wilsterman International Airport",
    "city": "Cochabamba",
    "country": "Bolivia",
    "iata": "CBB",
    "icao": "SLCB"
  },
  {
    "name": "Chimore Airport",
    "city": "Chapacura",
    "country": "Bolivia",
    "iata": "NONE",
    "icao": "SLCH"
  },
  {
    "name": "Capitán Aníbal Arab Airport",
    "city": "Cobija",
    "country": "Bolivia",
    "iata": "CIJ",
    "icao": "SLCO"
  },
  {
    "name": "El Alto International Airport",
    "city": "La Paz",
    "country": "Bolivia",
    "iata": "LPB",
    "icao": "SLLP"
  },
  {
    "name": "Juan Mendoza Airport",
    "city": "Oruro",
    "country": "Bolivia",
    "iata": "NONE",
    "icao": "SLOR"
  },
  {
    "name": "Capitan Nicolas Rojas Airport",
    "city": "Potosi",
    "country": "Bolivia",
    "iata": "POI",
    "icao": "SLPO"
  },
  {
    "name": "Capitán Av. Salvador Ogaya G. airport",
    "city": "Puerto Suarez",
    "country": "Bolivia",
    "iata": "PSZ",
    "icao": "SLPS"
  },
  {
    "name": "Santa Ana Del Yacuma Airport",
    "city": "Santa Ana",
    "country": "Bolivia",
    "iata": "NONE",
    "icao": "SLSA"
  },
  {
    "name": "Juana Azurduy De Padilla Airport",
    "city": "Sucre",
    "country": "Bolivia",
    "iata": "SRE",
    "icao": "SLSU"
  },
  {
    "name": "Capitan Oriel Lea Plaza Airport",
    "city": "Tarija",
    "country": "Bolivia",
    "iata": "TJA",
    "icao": "SLTJ"
  },
  {
    "name": "Teniente Av. Jorge Henrich Arauz Airport",
    "city": "Trinidad",
    "country": "Bolivia",
    "iata": "TDD",
    "icao": "SLTR"
  },
  {
    "name": "Teniente Coronel Rafael Pabón Airport",
    "city": "Villa Montes",
    "country": "Bolivia",
    "iata": "NONE",
    "icao": "SLVM"
  },
  {
    "name": "Viru Viru International Airport",
    "city": "Santa Cruz",
    "country": "Bolivia",
    "iata": "VVI",
    "icao": "SLVR"
  },
  {
    "name": "Yacuiba Airport",
    "city": "Yacuiba",
    "country": "Bolivia",
    "iata": "BYC",
    "icao": "SLYA"
  },
  {
    "name": "Johan Adolf Pengel International Airport",
    "city": "Zandery",
    "country": "Suriname",
    "iata": "PBM",
    "icao": "SMJP"
  },
  {
    "name": "Cayenne-Rochambeau Airport",
    "city": "Cayenne",
    "country": "French Guiana",
    "iata": "CAY",
    "icao": "SOCA"
  },
  {
    "name": "Saint-Georges-de-l'Oyapock Airport",
    "city": "St.-georges Oyapock",
    "country": "French Guiana",
    "iata": "NONE",
    "icao": "SOOG"
  },
  {
    "name": "Huancabamba Airport",
    "city": "Huancabamba",
    "country": "Peru",
    "iata": "NONE",
    "icao": "SPAB"
  },
  {
    "name": "Alferez FAP Alfredo Vladimir Sara Bauer Airport",
    "city": "Andoas",
    "country": "Peru",
    "iata": "NONE",
    "icao": "SPAS"
  },
  {
    "name": "Teniente General Gerardo Pérez Pinedo Airport",
    "city": "Atalaya",
    "country": "Peru",
    "iata": "NONE",
    "icao": "SPAY"
  },
  {
    "name": "Iberia Airport",
    "city": "Iberia",
    "country": "Peru",
    "iata": "NONE",
    "icao": "SPBR"
  },
  {
    "name": "Cap FAP David Abenzur Rengifo International Airport",
    "city": "Pucallpa",
    "country": "Peru",
    "iata": "PCL",
    "icao": "SPCL"
  },
  {
    "name": "Teniente FAP Jaime A De Montreuil Morales Airport",
    "city": "Chimbote",
    "country": "Peru",
    "iata": "CHM",
    "icao": "SPEO"
  },
  {
    "name": "Puerto Esperanza Airport",
    "city": "Puerto Esperanza",
    "country": "Peru",
    "iata": "NONE",
    "icao": "SPEP"
  },
  {
    "name": "Cesar Torke Podesta Airport",
    "city": "Moquegua",
    "country": "Peru",
    "iata": "NONE",
    "icao": "SPEQ"
  },
  {
    "name": "Capitan FAP Jose A Quinones Gonzales International Airport",
    "city": "Chiclayo",
    "country": "Peru",
    "iata": "CIX",
    "icao": "SPHI"
  },
  {
    "name": "Coronel FAP Alfredo Mendivil Duarte Airport",
    "city": "Ayacucho",
    "country": "Peru",
    "iata": "AYP",
    "icao": "SPHO"
  },
  {
    "name": "Andahuaylas Airport",
    "city": "Andahuaylas",
    "country": "Peru",
    "iata": "ANS",
    "icao": "SPHY"
  },
  {
    "name": "Comandante FAP German Arias Graziani Airport",
    "city": "Anta",
    "country": "Peru",
    "iata": "ATA",
    "icao": "SPHZ"
  },
  {
    "name": "Jorge Chávez International Airport",
    "city": "Lima",
    "country": "Peru",
    "iata": "LIM",
    "icao": "SPIM"
  },
  {
    "name": "Juanjui Airport",
    "city": "Juanjui",
    "country": "Peru",
    "iata": "JJI",
    "icao": "SPJI"
  },
  {
    "name": "Francisco Carle Airport",
    "city": "Jauja",
    "country": "Peru",
    "iata": "NONE",
    "icao": "SPJJ"
  },
  {
    "name": "Inca Manco Capac International Airport",
    "city": "Juliaca",
    "country": "Peru",
    "iata": "JUL",
    "icao": "SPJL"
  },
  {
    "name": "Ilo Airport",
    "city": "Ilo",
    "country": "Peru",
    "iata": "NONE",
    "icao": "SPLO"
  },
  {
    "name": "Las Palmas Air Base",
    "city": "Las Palmas",
    "country": "Peru",
    "iata": "NONE",
    "icao": "SPLP"
  },
  {
    "name": "Capitan FAP Pedro Canga Rodriguez Airport",
    "city": "Tumbes",
    "country": "Peru",
    "iata": "TBP",
    "icao": "SPME"
  },
  {
    "name": "Moises Benzaquen Rengifo Airport",
    "city": "Yurimaguas",
    "country": "Peru",
    "iata": "YMS",
    "icao": "SPMS"
  },
  {
    "name": "Collique Airport",
    "city": "Collique",
    "country": "Peru",
    "iata": "NONE",
    "icao": "SPOL"
  },
  {
    "name": "Chachapoyas Airport",
    "city": "Chachapoyas",
    "country": "Peru",
    "iata": "CHH",
    "icao": "SPPY"
  },
  {
    "name": "Coronel FAP Francisco Secada Vignetta International Airport",
    "city": "Iquitos",
    "country": "Peru",
    "iata": "IQT",
    "icao": "SPQT"
  },
  {
    "name": "Rodríguez Ballón International Airport",
    "city": "Arequipa",
    "country": "Peru",
    "iata": "AQP",
    "icao": "SPQU"
  },
  {
    "name": "Capitán FAP Leonardo Alvariño Herr Airport",
    "city": "San Ramon",
    "country": "Peru",
    "iata": "NONE",
    "icao": "SPRM"
  },
  {
    "name": "Capitan FAP Carlos Martinez De Pinillos International Airport",
    "city": "Trujillo",
    "country": "Peru",
    "iata": "TRU",
    "icao": "SPRU"
  },
  {
    "name": "Capitán FAP Renán Elías Olivera International Airport",
    "city": "Pisco",
    "country": "Peru",
    "iata": "PIO",
    "icao": "SPSO"
  },
  {
    "name": "Cadete FAP Guillermo Del Castillo Paredes Airport",
    "city": "Tarapoto",
    "country": "Peru",
    "iata": "TPP",
    "icao": "SPST"
  },
  {
    "name": "Coronel FAP Carlos Ciriani Santa Rosa International Airport",
    "city": "Tacna",
    "country": "Peru",
    "iata": "TCQ",
    "icao": "SPTN"
  },
  {
    "name": "Padre Aldamiz International Airport",
    "city": "Puerto Maldonado",
    "country": "Peru",
    "iata": "PEM",
    "icao": "SPTU"
  },
  {
    "name": "Capitán FAP Guillermo Concha Iberico International Airport",
    "city": "Piura",
    "country": "Peru",
    "iata": "PIU",
    "icao": "SPUR"
  },
  {
    "name": "Capitan Montes Airport",
    "city": "Talara",
    "country": "Peru",
    "iata": "TYL",
    "icao": "SPYL"
  },
  {
    "name": "Alejandro Velasco Astete International Airport",
    "city": "Cuzco",
    "country": "Peru",
    "iata": "CUZ",
    "icao": "SPZO"
  },
  {
    "name": "Angel S Adami Airport",
    "city": "Montevideo",
    "country": "Uruguay",
    "iata": "NONE",
    "icao": "SUAA"
  },
  {
    "name": "Santa Bernardina International Airport",
    "city": "Durazno",
    "country": "Uruguay",
    "iata": "NONE",
    "icao": "SUDU"
  },
  {
    "name": "Carrasco International /General C L Berisso Airport",
    "city": "Montevideo",
    "country": "Uruguay",
    "iata": "MVD",
    "icao": "SUMU"
  },
  {
    "name": "Nueva Hesperides International Airport",
    "city": "Salto",
    "country": "Uruguay",
    "iata": "STY",
    "icao": "SUSO"
  },
  {
    "name": "Oswaldo Guevara Mujica Airport",
    "city": "Acarigua",
    "country": "Venezuela",
    "iata": "AGV",
    "icao": "SVAC"
  },
  {
    "name": "Anaco Airport",
    "city": "Anaco",
    "country": "Venezuela",
    "iata": "AAO",
    "icao": "SVAN"
  },
  {
    "name": "San Fernando de Atabapo Airport",
    "city": "San Fernando Deatabapo",
    "country": "Venezuela",
    "iata": "NONE",
    "icao": "SVAT"
  },
  {
    "name": "General Jose Antonio Anzoategui International Airport",
    "city": "Barcelona",
    "country": "Venezuela",
    "iata": "BLA",
    "icao": "SVBC"
  },
  {
    "name": "Barinas Airport",
    "city": "Barinas",
    "country": "Venezuela",
    "iata": "BNS",
    "icao": "SVBI"
  },
  {
    "name": "El Libertador Airbase",
    "city": "Maracaibo",
    "country": "Venezuela",
    "iata": "NONE",
    "icao": "SVBL"
  },
  {
    "name": "Barquisimeto International Airport",
    "city": "Barquisimeto",
    "country": "Venezuela",
    "iata": "BRM",
    "icao": "SVBM"
  },
  {
    "name": "Caicara del Orinoco Airport",
    "city": "Caicara De Orinoco",
    "country": "Venezuela",
    "iata": "NONE",
    "icao": "SVCD"
  },
  {
    "name": "San Carlos Airport",
    "city": "San Carlos",
    "country": "Venezuela",
    "iata": "NONE",
    "icao": "SVCJ"
  },
  {
    "name": "Calabozo Airport",
    "city": "Calabozo",
    "country": "Venezuela",
    "iata": "NONE",
    "icao": "SVCL"
  },
  {
    "name": "Canaima Airport",
    "city": "Canaima",
    "country": "Venezuela",
    "iata": "CAJ",
    "icao": "SVCN"
  },
  {
    "name": "Carora Airport",
    "city": "Carora",
    "country": "Venezuela",
    "iata": "NONE",
    "icao": "SVCO"
  },
  {
    "name": "General Francisco Bermúdez Airport",
    "city": "Carupano",
    "country": "Venezuela",
    "iata": "CUP",
    "icao": "SVCP"
  },
  {
    "name": "José Leonardo Chirinos Airport",
    "city": "Coro",
    "country": "Venezuela",
    "iata": "CZE",
    "icao": "SVCR"
  },
  {
    "name": "Oscar Machado Zuluaga Airport",
    "city": "Caracas",
    "country": "Venezuela",
    "iata": "NONE",
    "icao": "SVCS"
  },
  {
    "name": "Cumaná (Antonio José de Sucre) Airport",
    "city": "Cumana",
    "country": "Venezuela",
    "iata": "CUM",
    "icao": "SVCU"
  },
  {
    "name": "Capitán Manuel Ríos Airbase",
    "city": "Carrizal",
    "country": "Venezuela",
    "iata": "NONE",
    "icao": "SVCZ"
  },
  {
    "name": "El Dorado Airport",
    "city": "El Dorado",
    "country": "Venezuela",
    "iata": "NONE",
    "icao": "SVED"
  },
  {
    "name": "Elorza Airport",
    "city": "Elorza",
    "country": "Venezuela",
    "iata": "NONE",
    "icao": "SVEZ"
  },
  {
    "name": "Guasdalito Airport",
    "city": "Guasdualito",
    "country": "Venezuela",
    "iata": "NONE",
    "icao": "SVGD"
  },
  {
    "name": "Guiria Airport",
    "city": "Guiria",
    "country": "Venezuela",
    "iata": "GUI",
    "icao": "SVGI"
  },
  {
    "name": "Guanare Airport",
    "city": "Guanare",
    "country": "Venezuela",
    "iata": "GUQ",
    "icao": "SVGU"
  },
  {
    "name": "Higuerote Airport",
    "city": "Higuerote",
    "country": "Venezuela",
    "iata": "NONE",
    "icao": "SVHG"
  },
  {
    "name": "Andrés Miguel Salazar Marcano Airport",
    "city": "Isla De Coche",
    "country": "Venezuela",
    "iata": "NONE",
    "icao": "SVIE"
  },
  {
    "name": "Josefa Camejo International Airport",
    "city": "Paraguana",
    "country": "Venezuela",
    "iata": "LSP",
    "icao": "SVJC"
  },
  {
    "name": "San Juan de Los Morros Airport",
    "city": "San Juan De Los Morros",
    "country": "Venezuela",
    "iata": "NONE",
    "icao": "SVJM"
  },
  {
    "name": "La Fria Airport",
    "city": "La Fria",
    "country": "Venezuela",
    "iata": "LFR",
    "icao": "SVLF"
  },
  {
    "name": "La Orchila Airport",
    "city": "La Orchila",
    "country": "Venezuela",
    "iata": "NONE",
    "icao": "SVLO"
  },
  {
    "name": "La Chinita International Airport",
    "city": "Maracaibo",
    "country": "Venezuela",
    "iata": "MAR",
    "icao": "SVMC"
  },
  {
    "name": "Alberto Carnevalli Airport",
    "city": "Merida",
    "country": "Venezuela",
    "iata": "MRD",
    "icao": "SVMD"
  },
  {
    "name": "Del Caribe Santiago Mariño International Airport",
    "city": "Porlamar",
    "country": "Venezuela",
    "iata": "PMV",
    "icao": "SVMG"
  },
  {
    "name": "Simón Bolívar International Airport",
    "city": "Caracas",
    "country": "Venezuela",
    "iata": "CCS",
    "icao": "SVMI"
  },
  {
    "name": "Maturín Airport",
    "city": "Maturin",
    "country": "Venezuela",
    "iata": "MUN",
    "icao": "SVMT"
  },
  {
    "name": "Cacique Aramare Airport",
    "city": "Puerto Ayacucho",
    "country": "Venezuela",
    "iata": "PYH",
    "icao": "SVPA"
  },
  {
    "name": "General Bartolome Salom International Airport",
    "city": "Puerto Cabello",
    "country": "Venezuela",
    "iata": "PBL",
    "icao": "SVPC"
  },
  {
    "name": "Paramillo Airport",
    "city": "San Cristobal",
    "country": "Venezuela",
    "iata": "NONE",
    "icao": "SVPM"
  },
  {
    "name": "General Manuel Carlos Piar International Airport",
    "city": "Guayana",
    "country": "Venezuela",
    "iata": "PZO",
    "icao": "SVPR"
  },
  {
    "name": "Palmarito Airport",
    "city": "Palmarito",
    "country": "Venezuela",
    "iata": "NONE",
    "icao": "SVPT"
  },
  {
    "name": "San Antonio Del Tachira Airport",
    "city": "San Antonio",
    "country": "Venezuela",
    "iata": "SVZ",
    "icao": "SVSA"
  },
  {
    "name": "Santa Bárbara de Barinas Airport",
    "city": "Santa Barbara",
    "country": "Venezuela",
    "iata": "NONE",
    "icao": "SVSB"
  },
  {
    "name": "Santa Elena de Uairen Airport",
    "city": "Santa Ana De Uairen",
    "country": "Venezuela",
    "iata": "SNV",
    "icao": "SVSE"
  },
  {
    "name": "Mayor Buenaventura Vivas International Airport",
    "city": "Santo Domingo",
    "country": "Venezuela",
    "iata": "STD",
    "icao": "SVSO"
  },
  {
    "name": "Sub Teniente Nestor Arias Airport",
    "city": "San Felipe",
    "country": "Venezuela",
    "iata": "NONE",
    "icao": "SVSP"
  },
  {
    "name": "San Fernando De Apure Airport",
    "city": "San Fernando De Apure",
    "country": "Venezuela",
    "iata": "SFD",
    "icao": "SVSR"
  },
  {
    "name": "San Tomé Airport",
    "city": "San Tome",
    "country": "Venezuela",
    "iata": "SOM",
    "icao": "SVST"
  },
  {
    "name": "Santa Bárbara del Zulia Airport",
    "city": "Santa Barbara",
    "country": "Venezuela",
    "iata": "STB",
    "icao": "SVSZ"
  },
  {
    "name": "Tucupita Airport",
    "city": "Tucupita",
    "country": "Venezuela",
    "iata": "TUV",
    "icao": "SVTC"
  },
  {
    "name": "Tumeremo Airport",
    "city": "Tumeremo",
    "country": "Venezuela",
    "iata": "NONE",
    "icao": "SVTM"
  },
  {
    "name": "Arturo Michelena International Airport",
    "city": "Valencia",
    "country": "Venezuela",
    "iata": "VLN",
    "icao": "SVVA"
  },
  {
    "name": "Dr. Antonio Nicolás Briceño Airport",
    "city": "Valera",
    "country": "Venezuela",
    "iata": "VLV",
    "icao": "SVVL"
  },
  {
    "name": "Valle de La Pascua Airport",
    "city": "Valle De La Pascua",
    "country": "Venezuela",
    "iata": "VDP",
    "icao": "SVVP"
  },
  {
    "name": "Linden Airport",
    "city": "Linden",
    "country": "Guyana",
    "iata": "NONE",
    "icao": "SYLD"
  },
  {
    "name": "Lethem Airport",
    "city": "Lethem",
    "country": "Guyana",
    "iata": "LTM",
    "icao": "SYLT"
  },
  {
    "name": "V.C. Bird International Airport",
    "city": "Antigua",
    "country": "Antigua and Barbuda",
    "iata": "ANU",
    "icao": "TAPA"
  },
  {
    "name": "Sir Grantley Adams International Airport",
    "city": "Bridgetown",
    "country": "Barbados",
    "iata": "BGI",
    "icao": "TBPB"
  },
  {
    "name": "Canefield Airport",
    "city": "Canefield",
    "country": "Dominica",
    "iata": "DCF",
    "icao": "TDCF"
  },
  {
    "name": "Melville Hall Airport",
    "city": "Dominica",
    "country": "Dominica",
    "iata": "DOM",
    "icao": "TDPD"
  },
  {
    "name": "Martinique Aimé Césaire International Airport",
    "city": "Fort-de-france",
    "country": "Martinique",
    "iata": "FDF",
    "icao": "TFFF"
  },
  {
    "name": "L'Espérance Airport",
    "city": "St. Martin",
    "country": "Guadeloupe",
    "iata": "SFG",
    "icao": "TFFG"
  },
  {
    "name": "Pointe-à-Pitre Le Raizet",
    "city": "Pointe-a-pitre",
    "country": "Guadeloupe",
    "iata": "PTP",
    "icao": "TFFR"
  },
  {
    "name": "Point Salines International Airport",
    "city": "Point Salines",
    "country": "Grenada",
    "iata": "GND",
    "icao": "TGPY"
  },
  {
    "name": "Cyril E. King Airport",
    "city": "St. Thomas",
    "country": "Virgin Islands",
    "iata": "STT",
    "icao": "TIST"
  },
  {
    "name": "Henry E Rohlsen Airport",
    "city": "St. Croix Island",
    "country": "Virgin Islands",
    "iata": "STX",
    "icao": "TISX"
  },
  {
    "name": "Rafael Hernandez Airport",
    "city": "Aguadilla",
    "country": "Puerto Rico",
    "iata": "BQN",
    "icao": "TJBQ"
  },
  {
    "name": "Diego Jimenez Torres Airport",
    "city": "Fajardo",
    "country": "Puerto Rico",
    "iata": "FAJ",
    "icao": "TJFA"
  },
  {
    "name": "Fernando Luis Ribas Dominicci Airport",
    "city": "San Juan",
    "country": "Puerto Rico",
    "iata": "SIG",
    "icao": "TJIG"
  },
  {
    "name": "Eugenio Maria De Hostos Airport",
    "city": "Mayaguez",
    "country": "Puerto Rico",
    "iata": "MAZ",
    "icao": "TJMZ"
  },
  {
    "name": "Mercedita Airport",
    "city": "Ponce",
    "country": "Puerto Rico",
    "iata": "PSE",
    "icao": "TJPS"
  },
  {
    "name": "Luis Munoz Marin International Airport",
    "city": "San Juan",
    "country": "Puerto Rico",
    "iata": "SJU",
    "icao": "TJSJ"
  },
  {
    "name": "Robert L. Bradshaw International Airport",
    "city": "Basse Terre",
    "country": "Saint Kitts and Nevis",
    "iata": "SKB",
    "icao": "TKPK"
  },
  {
    "name": "George F. L. Charles Airport",
    "city": "Castries",
    "country": "Saint Lucia",
    "iata": "SLU",
    "icao": "TLPC"
  },
  {
    "name": "Hewanorra International Airport",
    "city": "Hewandorra",
    "country": "Saint Lucia",
    "iata": "UVF",
    "icao": "TLPL"
  },
  {
    "name": "Queen Beatrix International Airport",
    "city": "Oranjestad",
    "country": "Aruba",
    "iata": "AUA",
    "icao": "TNCA"
  },
  {
    "name": "Flamingo International Airport",
    "city": "Kralendijk",
    "country": "Netherlands Antilles",
    "iata": "BON",
    "icao": "TNCB"
  },
  {
    "name": "Hato International Airport",
    "city": "Willemstad",
    "country": "Netherlands Antilles",
    "iata": "CUR",
    "icao": "TNCC"
  },
  {
    "name": "F. D. Roosevelt Airport",
    "city": "Oranjestad",
    "country": "Netherlands Antilles",
    "iata": "EUX",
    "icao": "TNCE"
  },
  {
    "name": "Princess Juliana International Airport",
    "city": "Philipsburg",
    "country": "Netherlands Antilles",
    "iata": "SXM",
    "icao": "TNCM"
  },
  {
    "name": "Wallblake Airport",
    "city": "The Valley",
    "country": "Anguilla",
    "iata": "AXA",
    "icao": "TQPF"
  },
  {
    "name": "Tobago-Crown Point Airport",
    "city": "Scarborough",
    "country": "Trinidad and Tobago",
    "iata": "TAB",
    "icao": "TTCP"
  },
  {
    "name": "Piarco International Airport",
    "city": "Port-of-spain",
    "country": "Trinidad and Tobago",
    "iata": "POS",
    "icao": "TTPP"
  },
  {
    "name": "Terrance B. Lettsome International Airport",
    "city": "Tortola",
    "country": "British Virgin Islands",
    "iata": "EIS",
    "icao": "TUPJ"
  },
  {
    "name": "Canouan Airport",
    "city": "Canouan Island",
    "country": "Saint Vincent and the Grenadines",
    "iata": "CIW",
    "icao": "TVSC"
  },
  {
    "name": "Mustique Airport",
    "city": "Mustique",
    "country": "Saint Vincent and the Grenadines",
    "iata": "MQS",
    "icao": "TVSM"
  },
  {
    "name": "E. T. Joshua Airport",
    "city": "Kingstown",
    "country": "Saint Vincent and the Grenadines",
    "iata": "SVD",
    "icao": "TVSV"
  },
  {
    "name": "Almaty Airport",
    "city": "Alma-ata",
    "country": "Kazakhstan",
    "iata": "ALA",
    "icao": "UAAA"
  },
  {
    "name": "Balkhash Airport",
    "city": "Balkhash",
    "country": "Kazakhstan",
    "iata": "BXH",
    "icao": "UAAH"
  },
  {
    "name": "Astana International Airport",
    "city": "Tselinograd",
    "country": "Kazakhstan",
    "iata": "TSE",
    "icao": "UACC"
  },
  {
    "name": "Taraz Airport",
    "city": "Dzhambul",
    "country": "Kazakhstan",
    "iata": "DMB",
    "icao": "UADD"
  },
  {
    "name": "Manas International Airport",
    "city": "Bishkek",
    "country": "Kyrgyzstan",
    "iata": "FRU",
    "icao": "UAFM"
  },
  {
    "name": "Osh Airport",
    "city": "Osh",
    "country": "Kyrgyzstan",
    "iata": "OSS",
    "icao": "UAFO"
  },
  {
    "name": "Shymkent Airport",
    "city": "Chimkent",
    "country": "Kazakhstan",
    "iata": "CIT",
    "icao": "UAII"
  },
  {
    "name": "Uralsk Airport",
    "city": "Uralsk",
    "country": "Kazakhstan",
    "iata": "URA",
    "icao": "UARR"
  },
  {
    "name": "Pavlodar Airport",
    "city": "Pavlodar",
    "country": "Kazakhstan",
    "iata": "PWQ",
    "icao": "UASP"
  },
  {
    "name": "Semipalatinsk Airport",
    "city": "Semiplatinsk",
    "country": "Kazakhstan",
    "iata": "PLX",
    "icao": "UASS"
  },
  {
    "name": "Aktobe Airport",
    "city": "Aktyubinsk",
    "country": "Kazakhstan",
    "iata": "AKX",
    "icao": "UATT"
  },
  {
    "name": "Heydar Aliyev International Airport",
    "city": "Baku",
    "country": "Azerbaijan",
    "iata": "GYD",
    "icao": "UBBB"
  },
  {
    "name": "Yakutsk Airport",
    "city": "Yakutsk",
    "country": "Russia",
    "iata": "YKS",
    "icao": "UEEE"
  },
  {
    "name": "Mirny Airport",
    "city": "Mirnyj",
    "country": "Russia",
    "iata": "MJZ",
    "icao": "UERR"
  },
  {
    "name": "Ignatyevo Airport",
    "city": "Blagoveschensk",
    "country": "Russia",
    "iata": "BQS",
    "icao": "UHBB"
  },
  {
    "name": "Khabarovsk-Novy Airport",
    "city": "Khabarovsk",
    "country": "Russia",
    "iata": "KHV",
    "icao": "UHHH"
  },
  {
    "name": "Provideniya Bay Airport",
    "city": "Provideniya Bay",
    "country": "Russia",
    "iata": "PVS",
    "icao": "UHMD"
  },
  {
    "name": "Sokol Airport",
    "city": "Magadan",
    "country": "Russia",
    "iata": "GDX",
    "icao": "UHMM"
  },
  {
    "name": "Pevek Airport",
    "city": "Pevek",
    "country": "Russia",
    "iata": "PWE",
    "icao": "UHMP"
  },
  {
    "name": "Yelizovo Airport",
    "city": "Petropavlovsk",
    "country": "Russia",
    "iata": "PKC",
    "icao": "UHPP"
  },
  {
    "name": "Yuzhno-Sakhalinsk Airport",
    "city": "Yuzhno-sakhalinsk",
    "country": "Russia",
    "iata": "UUS",
    "icao": "UHSS"
  },
  {
    "name": "Vladivostok International Airport",
    "city": "Vladivostok",
    "country": "Russia",
    "iata": "VVO",
    "icao": "UHWW"
  },
  {
    "name": "Chita-Kadala Airport",
    "city": "Chita",
    "country": "Russia",
    "iata": "HTA",
    "icao": "UIAA"
  },
  {
    "name": "Bratsk Airport",
    "city": "Bratsk",
    "country": "Russia",
    "iata": "BTK",
    "icao": "UIBB"
  },
  {
    "name": "Irkutsk Airport",
    "city": "Irkutsk",
    "country": "Russia",
    "iata": "IKT",
    "icao": "UIII"
  },
  {
    "name": "Ulan-Ude Airport (Mukhino)",
    "city": "Ulan-ude",
    "country": "Russia",
    "iata": "UUD",
    "icao": "UIUU"
  },
  {
    "name": "Boryspil International Airport",
    "city": "Kiev",
    "country": "Ukraine",
    "iata": "KBP",
    "icao": "UKBB"
  },
  {
    "name": "Donetsk International Airport",
    "city": "Donetsk",
    "country": "Ukraine",
    "iata": "DOK",
    "icao": "UKCC"
  },
  {
    "name": "Dnipropetrovsk International Airport",
    "city": "Dnepropetrovsk",
    "country": "Ukraine",
    "iata": "DNK",
    "icao": "UKDD"
  },
  {
    "name": "Simferopol International Airport",
    "city": "Simferopol",
    "country": "Ukraine",
    "iata": "SIP",
    "icao": "UKFF"
  },
  {
    "name": "Kiev Zhuliany International Airport",
    "city": "Kiev",
    "country": "Ukraine",
    "iata": "IEV",
    "icao": "UKKK"
  },
  {
    "name": "Lviv International Airport",
    "city": "Lvov",
    "country": "Ukraine",
    "iata": "LWO",
    "icao": "UKLL"
  },
  {
    "name": "Odessa International Airport",
    "city": "Odessa",
    "country": "Ukraine",
    "iata": "ODS",
    "icao": "UKOO"
  },
  {
    "name": "Pulkovo Airport",
    "city": "St. Petersburg",
    "country": "Russia",
    "iata": "LED",
    "icao": "ULLI"
  },
  {
    "name": "Murmansk Airport",
    "city": "Murmansk",
    "country": "Russia",
    "iata": "MMK",
    "icao": "ULMM"
  },
  {
    "name": "Gomel Airport",
    "city": "Gomel",
    "country": "Belarus",
    "iata": "GME",
    "icao": "UMGG"
  },
  {
    "name": "Vitebsk Vostochny Airport",
    "city": "Vitebsk",
    "country": "Belarus",
    "iata": "VTB",
    "icao": "UMII"
  },
  {
    "name": "Khrabrovo Airport",
    "city": "Kaliningrad",
    "country": "Russia",
    "iata": "KGD",
    "icao": "UMKK"
  },
  {
    "name": "Minsk 1 Airport",
    "city": "Minsk",
    "country": "Belarus",
    "iata": "MHP",
    "icao": "UMMM"
  },
  {
    "name": "Minsk National Airport",
    "city": "Minsk 2",
    "country": "Belarus",
    "iata": "MSQ",
    "icao": "UMMS"
  },
  {
    "name": "Abakan Airport",
    "city": "Abakan",
    "country": "Russia",
    "iata": "ABA",
    "icao": "UNAA"
  },
  {
    "name": "Barnaul Airport",
    "city": "Barnaul",
    "country": "Russia",
    "iata": "BAX",
    "icao": "UNBB"
  },
  {
    "name": "Kemerovo Airport",
    "city": "Kemorovo",
    "country": "Russia",
    "iata": "KEJ",
    "icao": "UNEE"
  },
  {
    "name": "Omsk Central Airport",
    "city": "Omsk",
    "country": "Russia",
    "iata": "OMS",
    "icao": "UNOO"
  },
  {
    "name": "Krasnodar Pashkovsky International Airport",
    "city": "Krasnodar",
    "country": "Russia",
    "iata": "KRR",
    "icao": "URKK"
  },
  {
    "name": "Uytash Airport",
    "city": "Makhachkala",
    "country": "Russia",
    "iata": "MCX",
    "icao": "URML"
  },
  {
    "name": "Mineralnyye Vody Airport",
    "city": "Mineralnye Vody",
    "country": "Russia",
    "iata": "MRV",
    "icao": "URMM"
  },
  {
    "name": "Stavropol Shpakovskoye Airport",
    "city": "Stavropol",
    "country": "Russia",
    "iata": "STW",
    "icao": "URMT"
  },
  {
    "name": "Rostov-on-Don Airport",
    "city": "Rostov",
    "country": "Russia",
    "iata": "ROV",
    "icao": "URRR"
  },
  {
    "name": "Sochi International Airport",
    "city": "Sochi",
    "country": "Russia",
    "iata": "AER",
    "icao": "URSS"
  },
  {
    "name": "Astrakhan Airport",
    "city": "Astrakhan",
    "country": "Russia",
    "iata": "ASF",
    "icao": "URWA"
  },
  {
    "name": "Volgograd International Airport",
    "city": "Volgograd",
    "country": "Russia",
    "iata": "VOG",
    "icao": "URWW"
  },
  {
    "name": "Chelyabinsk Balandino Airport",
    "city": "Chelyabinsk",
    "country": "Russia",
    "iata": "CEK",
    "icao": "USCC"
  },
  {
    "name": "Magnitogorsk International Airport",
    "city": "Magnetiogorsk",
    "country": "Russia",
    "iata": "MQF",
    "icao": "USCM"
  },
  {
    "name": "Nizhnevartovsk Airport",
    "city": "Nizhnevartovsk",
    "country": "Russia",
    "iata": "NJC",
    "icao": "USNN"
  },
  {
    "name": "Bolshoye Savino Airport",
    "city": "Perm",
    "country": "Russia",
    "iata": "PEE",
    "icao": "USPP"
  },
  {
    "name": "Surgut Airport",
    "city": "Surgut",
    "country": "Russia",
    "iata": "SGC",
    "icao": "USRR"
  },
  {
    "name": "Koltsovo Airport",
    "city": "Yekaterinburg",
    "country": "Russia",
    "iata": "SVX",
    "icao": "USSS"
  },
  {
    "name": "Ashgabat Airport",
    "city": "Ashkhabad",
    "country": "Turkmenistan",
    "iata": "ASB",
    "icao": "UTAA"
  },
  {
    "name": "Turkmenbashi Airport",
    "city": "Krasnovodsk",
    "country": "Turkmenistan",
    "iata": "KRW",
    "icao": "UTAK"
  },
  {
    "name": "Turkmenabat Airport",
    "city": "Chardzhou",
    "country": "Turkmenistan",
    "iata": "CRZ",
    "icao": "UTAV"
  },
  {
    "name": "Dushanbe Airport",
    "city": "Dushanbe",
    "country": "Tajikistan",
    "iata": "DYU",
    "icao": "UTDD"
  },
  {
    "name": "Bukhara Airport",
    "city": "Bukhara",
    "country": "Uzbekistan",
    "iata": "BHK",
    "icao": "UTSB"
  },
  {
    "name": "Samarkand Airport",
    "city": "Samarkand",
    "country": "Uzbekistan",
    "iata": "SKD",
    "icao": "UTSS"
  },
  {
    "name": "Tashkent International Airport",
    "city": "Tashkent",
    "country": "Uzbekistan",
    "iata": "TAS",
    "icao": "UTTT"
  },
  {
    "name": "Bryansk Airport",
    "city": "Bryansk",
    "country": "Russia",
    "iata": "BZK",
    "icao": "UUBP"
  },
  {
    "name": "Sheremetyevo International Airport",
    "city": "Moscow",
    "country": "Russia",
    "iata": "SVO",
    "icao": "UUEE"
  },
  {
    "name": "Migalovo Air Base",
    "city": "Tver",
    "country": "Russia",
    "iata": "KLD",
    "icao": "UUEM"
  },
  {
    "name": "Voronezh International Airport",
    "city": "Voronezh",
    "country": "Russia",
    "iata": "VOZ",
    "icao": "UUOO"
  },
  {
    "name": "Vnukovo International Airport",
    "city": "Moscow",
    "country": "Russia",
    "iata": "VKO",
    "icao": "UUWW"
  },
  {
    "name": "Syktyvkar Airport",
    "city": "Syktyvkar",
    "country": "Russia",
    "iata": "SCW",
    "icao": "UUYY"
  },
  {
    "name": "Kazan International Airport",
    "city": "Kazan",
    "country": "Russia",
    "iata": "KZN",
    "icao": "UWKD"
  },
  {
    "name": "Orenburg Central Airport",
    "city": "Orenburg",
    "country": "Russia",
    "iata": "REN",
    "icao": "UWOO"
  },
  {
    "name": "Ufa International Airport",
    "city": "Ufa",
    "country": "Russia",
    "iata": "UFA",
    "icao": "UWUU"
  },
  {
    "name": "Kurumoch International Airport",
    "city": "Samara",
    "country": "Russia",
    "iata": "KUF",
    "icao": "UWWW"
  },
  {
    "name": "Sardar Vallabhbhai Patel International Airport",
    "city": "Ahmedabad",
    "country": "India",
    "iata": "AMD",
    "icao": "VAAH"
  },
  {
    "name": "Akola Airport",
    "city": "Akola",
    "country": "India",
    "iata": "AKD",
    "icao": "VAAK"
  },
  {
    "name": "Aurangabad Airport",
    "city": "Aurangabad",
    "country": "India",
    "iata": "IXU",
    "icao": "VAAU"
  },
  {
    "name": "Chhatrapati Shivaji International Airport",
    "city": "Mumbai",
    "country": "India",
    "iata": "BOM",
    "icao": "VABB"
  },
  {
    "name": "Bilaspur Airport",
    "city": "Bilaspur",
    "country": "India",
    "iata": "PAB",
    "icao": "VABI"
  },
  {
    "name": "Bhuj Airport",
    "city": "Bhuj",
    "country": "India",
    "iata": "BHJ",
    "icao": "VABJ"
  },
  {
    "name": "Belgaum Airport",
    "city": "Belgaum",
    "country": "India",
    "iata": "IXG",
    "icao": "VABM"
  },
  {
    "name": "Vadodara Airport",
    "city": "Baroda",
    "country": "India",
    "iata": "BDQ",
    "icao": "VABO"
  },
  {
    "name": "Raja Bhoj International Airport",
    "city": "Bhopal",
    "country": "India",
    "iata": "BHO",
    "icao": "VABP"
  },
  {
    "name": "Bhavnagar Airport",
    "city": "Bhaunagar",
    "country": "India",
    "iata": "BHU",
    "icao": "VABV"
  },
  {
    "name": "Daman Airport",
    "city": "Daman",
    "country": "India",
    "iata": "NMB",
    "icao": "VADN"
  },
  {
    "name": "Deesa Airport",
    "city": "Deesa",
    "country": "India",
    "iata": "NONE",
    "icao": "VADS"
  },
  {
    "name": "Guna Airport",
    "city": "Guna",
    "country": "India",
    "iata": "NONE",
    "icao": "VAGN"
  },
  {
    "name": "Dabolim Airport",
    "city": "Goa",
    "country": "India",
    "iata": "GOI",
    "icao": "VAGO"
  },
  {
    "name": "Devi Ahilyabai Holkar Airport",
    "city": "Indore",
    "country": "India",
    "iata": "IDR",
    "icao": "VAID"
  },
  {
    "name": "Jabalpur Airport",
    "city": "Jabalpur",
    "country": "India",
    "iata": "JLR",
    "icao": "VAJB"
  },
  {
    "name": "Jamnagar Airport",
    "city": "Jamnagar",
    "country": "India",
    "iata": "JGA",
    "icao": "VAJM"
  },
  {
    "name": "Kandla Airport",
    "city": "Kandla",
    "country": "India",
    "iata": "IXY",
    "icao": "VAKE"
  },
  {
    "name": "Khajuraho Airport",
    "city": "Khajuraho",
    "country": "India",
    "iata": "HJR",
    "icao": "VAKJ"
  },
  {
    "name": "Kolhapur Airport",
    "city": "Kolhapur",
    "country": "India",
    "iata": "KLH",
    "icao": "VAKP"
  },
  {
    "name": "Keshod Airport",
    "city": "Keshod",
    "country": "India",
    "iata": "IXK",
    "icao": "VAKS"
  },
  {
    "name": "Dr. Babasaheb Ambedkar International Airport",
    "city": "Nagpur",
    "country": "India",
    "iata": "NAG",
    "icao": "VANP"
  },
  {
    "name": "Gandhinagar Airport",
    "city": "Nasik Road",
    "country": "India",
    "iata": "ISK",
    "icao": "VANR"
  },
  {
    "name": "Pune Airport",
    "city": "Pune",
    "country": "India",
    "iata": "PNQ",
    "icao": "VAPO"
  },
  {
    "name": "Porbandar Airport",
    "city": "Porbandar",
    "country": "India",
    "iata": "PBD",
    "icao": "VAPR"
  },
  {
    "name": "Rajkot Airport",
    "city": "Rajkot",
    "country": "India",
    "iata": "RAJ",
    "icao": "VARK"
  },
  {
    "name": "Raipur Airport",
    "city": "Raipur",
    "country": "India",
    "iata": "RPR",
    "icao": "VARP"
  },
  {
    "name": "Solapur Airport",
    "city": "Sholapur",
    "country": "India",
    "iata": "SSE",
    "icao": "VASL"
  },
  {
    "name": "Surat Airport",
    "city": "Surat",
    "country": "India",
    "iata": "STV",
    "icao": "VASU"
  },
  {
    "name": "Maharana Pratap Airport",
    "city": "Udaipur",
    "country": "India",
    "iata": "UDR",
    "icao": "VAUD"
  },
  {
    "name": "Bandaranaike International Colombo Airport",
    "city": "Colombo",
    "country": "Sri Lanka",
    "iata": "CMB",
    "icao": "VCBI"
  },
  {
    "name": "Anuradhapura Air Force Base",
    "city": "Anuradhapura",
    "country": "Sri Lanka",
    "iata": "ACJ",
    "icao": "VCCA"
  },
  {
    "name": "Batticaloa Airport",
    "city": "Batticaloa",
    "country": "Sri Lanka",
    "iata": "NONE",
    "icao": "VCCB"
  },
  {
    "name": "Colombo Ratmalana Airport",
    "city": "Colombo",
    "country": "Sri Lanka",
    "iata": "RML",
    "icao": "VCCC"
  },
  {
    "name": "Ampara Airport",
    "city": "Galoya",
    "country": "Sri Lanka",
    "iata": "GOY",
    "icao": "VCCG"
  },
  {
    "name": "Kankesanturai Airport",
    "city": "Jaffna",
    "country": "Sri Lanka",
    "iata": "JAF",
    "icao": "VCCJ"
  },
  {
    "name": "China Bay Airport",
    "city": "Trinciomalee",
    "country": "Sri Lanka",
    "iata": "TRR",
    "icao": "VCCT"
  },
  {
    "name": "Kampong Chhnang Airport",
    "city": "Kompong Chnang",
    "country": "Cambodia",
    "iata": "NONE",
    "icao": "VDKH"
  },
  {
    "name": "Phnom Penh International Airport",
    "city": "Phnom-penh",
    "country": "Cambodia",
    "iata": "PNH",
    "icao": "VDPP"
  },
  {
    "name": "Siem Reap International Airport",
    "city": "Siem-reap",
    "country": "Cambodia",
    "iata": "REP",
    "icao": "VDSR"
  },
  {
    "name": "Stung Treng Airport",
    "city": "Stung Treng",
    "country": "Cambodia",
    "iata": "TNX",
    "icao": "VDST"
  },
  {
    "name": "Along Airport",
    "city": "Along",
    "country": "India",
    "iata": "NONE",
    "icao": "VEAN"
  },
  {
    "name": "Agartala Airport",
    "city": "Agartala",
    "country": "India",
    "iata": "IXA",
    "icao": "VEAT"
  },
  {
    "name": "Lengpui Airport",
    "city": "Aizwal",
    "country": "India",
    "iata": "AJL",
    "icao": "VELP"
  },
  {
    "name": "Bagdogra Airport",
    "city": "Baghdogra",
    "country": "India",
    "iata": "IXB",
    "icao": "VEBD"
  },
  {
    "name": "Bokaro Airport",
    "city": "Bokaro",
    "country": "India",
    "iata": "NONE",
    "icao": "VEBK"
  },
  {
    "name": "Biju Patnaik Airport",
    "city": "Bhubaneswar",
    "country": "India",
    "iata": "BBI",
    "icao": "VEBS"
  },
  {
    "name": "Netaji Subhash Chandra Bose International Airport",
    "city": "Kolkata",
    "country": "India",
    "iata": "CCU",
    "icao": "VECC"
  },
  {
    "name": "Cooch Behar Airport",
    "city": "Cooch-behar",
    "country": "India",
    "iata": "COH",
    "icao": "VECO"
  },
  {
    "name": "Dhanbad Airport",
    "city": "Dhanbad",
    "country": "India",
    "iata": "DBD",
    "icao": "VEDB"
  },
  {
    "name": "Gaya Airport",
    "city": "Gaya",
    "country": "India",
    "iata": "GAY",
    "icao": "VEGY"
  },
  {
    "name": "Hirakud Airport",
    "city": "Hirakud",
    "country": "India",
    "iata": "NONE",
    "icao": "VEHK"
  },
  {
    "name": "Imphal Airport",
    "city": "Imphal",
    "country": "India",
    "iata": "IMF",
    "icao": "VEIM"
  },
  {
    "name": "Jharsuguda Airport",
    "city": "Jharsuguda",
    "country": "India",
    "iata": "NONE",
    "icao": "VEJH"
  },
  {
    "name": "Jamshedpur Airport",
    "city": "Jamshedpur",
    "country": "India",
    "iata": "IXW",
    "icao": "VEJS"
  },
  {
    "name": "Jorhat Airport",
    "city": "Jorhat",
    "country": "India",
    "iata": "JRH",
    "icao": "VEJT"
  },
  {
    "name": "Kailashahar Airport",
    "city": "Kailashahar",
    "country": "India",
    "iata": "IXH",
    "icao": "VEKR"
  },
  {
    "name": "Silchar Airport",
    "city": "Silchar",
    "country": "India",
    "iata": "IXS",
    "icao": "VEKU"
  },
  {
    "name": "North Lakhimpur Airport",
    "city": "Lilabari",
    "country": "India",
    "iata": "IXI",
    "icao": "VELR"
  },
  {
    "name": "Dibrugarh Airport",
    "city": "Mohanbari",
    "country": "India",
    "iata": "DIB",
    "icao": "VEMN"
  },
  {
    "name": "Muzaffarpur Airport",
    "city": "Mazuffarpur",
    "country": "India",
    "iata": "NONE",
    "icao": "VEMZ"
  },
  {
    "name": "Nawapara Airport",
    "city": "Nawapara",
    "country": "India",
    "iata": "NONE",
    "icao": "VENP"
  },
  {
    "name": "Lok Nayak Jayaprakash Airport",
    "city": "Patina",
    "country": "India",
    "iata": "PAT",
    "icao": "VEPT"
  },
  {
    "name": "Purnea Airport",
    "city": "Purnea",
    "country": "India",
    "iata": "NONE",
    "icao": "VEPU"
  },
  {
    "name": "Birsa Munda Airport",
    "city": "Ranchi",
    "country": "India",
    "iata": "IXR",
    "icao": "VERC"
  },
  {
    "name": "Rourkela Airport",
    "city": "Rourkela",
    "country": "India",
    "iata": "RRK",
    "icao": "VERK"
  },
  {
    "name": "Utkela Airport",
    "city": "Utkela",
    "country": "India",
    "iata": "NONE",
    "icao": "VEUK"
  },
  {
    "name": "Vishakhapatnam Airport",
    "city": "Vishakhapatnam",
    "country": "India",
    "iata": "VTZ",
    "icao": "VEVZ"
  },
  {
    "name": "Zero Airport",
    "city": "Zero",
    "country": "India",
    "iata": "NONE",
    "icao": "VEZO"
  },
  {
    "name": "Cox's Bazar Airport",
    "city": "Cox's Bazar",
    "country": "Bangladesh",
    "iata": "CXB",
    "icao": "VGCB"
  },
  {
    "name": "Shah Amanat International Airport",
    "city": "Chittagong",
    "country": "Bangladesh",
    "iata": "CGP",
    "icao": "VGEG"
  },
  {
    "name": "Ishurdi Airport",
    "city": "Ishurdi",
    "country": "Bangladesh",
    "iata": "IRD",
    "icao": "VGIS"
  },
  {
    "name": "Jessore Airport",
    "city": "Jessore",
    "country": "Bangladesh",
    "iata": "JSR",
    "icao": "VGJR"
  },
  {
    "name": "Shah Mokhdum Airport",
    "city": "Rajshahi",
    "country": "Bangladesh",
    "iata": "RJH",
    "icao": "VGRJ"
  },
  {
    "name": "Saidpur Airport",
    "city": "Saidpur",
    "country": "Bangladesh",
    "iata": "SPD",
    "icao": "VGSD"
  },
  {
    "name": "Osmany International Airport",
    "city": "Sylhet Osmani",
    "country": "Bangladesh",
    "iata": "ZYL",
    "icao": "VGSY"
  },
  {
    "name": "Tejgaon Airport",
    "city": "Dhaka",
    "country": "Bangladesh",
    "iata": "NONE",
    "icao": "VGTJ"
  },
  {
    "name": "Dhaka / Hazrat Shahjalal International Airport",
    "city": "Dhaka",
    "country": "Bangladesh",
    "iata": "DAC",
    "icao": "VGZR"
  },
  {
    "name": "Chek Lap Kok International Airport",
    "city": "Hong Kong",
    "country": "Hong Kong",
    "iata": "HKG",
    "icao": "VHHH"
  },
  {
    "name": "Shek Kong Air Base",
    "city": "Sek Kong",
    "country": "Hong Kong",
    "iata": "NONE",
    "icao": "VHSK"
  },
  {
    "name": "Agra Airport",
    "city": "Agra",
    "country": "India",
    "iata": "AGR",
    "icao": "VIAG"
  },
  {
    "name": "Allahabad Airport",
    "city": "Allahabad",
    "country": "India",
    "iata": "IXD",
    "icao": "VIAL"
  },
  {
    "name": "Sri Guru Ram Dass Jee International Airport",
    "city": "Amritsar",
    "country": "India",
    "iata": "ATQ",
    "icao": "VIAR"
  },
  {
    "name": "Nal Airport",
    "city": "Bikaner",
    "country": "India",
    "iata": "NONE",
    "icao": "VIBK"
  },
  {
    "name": "Lal Bahadur Shastri Airport",
    "city": "Varanasi",
    "country": "India",
    "iata": "VNS",
    "icao": "VIBN"
  },
  {
    "name": "Kullu Manali Airport",
    "city": "Kulu",
    "country": "India",
    "iata": "KUU",
    "icao": "VIBR"
  },
  {
    "name": "Bhiwani Airport",
    "city": "Bhiwani",
    "country": "India",
    "iata": "NONE",
    "icao": "VIBW"
  },
  {
    "name": "Chandigarh Airport",
    "city": "Chandigarh",
    "country": "India",
    "iata": "IXC",
    "icao": "VICG"
  },
  {
    "name": "Safdarjung Airport",
    "city": "Delhi",
    "country": "India",
    "iata": "NONE",
    "icao": "VIDD"
  },
  {
    "name": "Dehradun Airport",
    "city": "Dehra Dun",
    "country": "India",
    "iata": "DED",
    "icao": "VIDN"
  },
  {
    "name": "Indira Gandhi International Airport",
    "city": "Delhi",
    "country": "India",
    "iata": "DEL",
    "icao": "VIDP"
  },
  {
    "name": "Gwalior Airport",
    "city": "Gwalior",
    "country": "India",
    "iata": "GWL",
    "icao": "VIGR"
  },
  {
    "name": "Hissar Airport",
    "city": "Hissar",
    "country": "India",
    "iata": "NONE",
    "icao": "VIHR"
  },
  {
    "name": "Jhansi Airport",
    "city": "Jhansi",
    "country": "India",
    "iata": "NONE",
    "icao": "VIJN"
  },
  {
    "name": "Jodhpur Airport",
    "city": "Jodhpur",
    "country": "India",
    "iata": "JDH",
    "icao": "VIJO"
  },
  {
    "name": "Jaipur International Airport",
    "city": "Jaipur",
    "country": "India",
    "iata": "JAI",
    "icao": "VIJP"
  },
  {
    "name": "Jaisalmer Airport",
    "city": "Jaisalmer",
    "country": "India",
    "iata": "JSA",
    "icao": "VIJR"
  },
  {
    "name": "Jammu Airport",
    "city": "Jammu",
    "country": "India",
    "iata": "IXJ",
    "icao": "VIJU"
  },
  {
    "name": "Kanpur Airport",
    "city": "Kanpur",
    "country": "India",
    "iata": "KNU",
    "icao": "VIKA"
  },
  {
    "name": "Kota Airport",
    "city": "Kota",
    "country": "India",
    "iata": "KTU",
    "icao": "VIKO"
  },
  {
    "name": "Ludhiana Airport",
    "city": "Ludhiaha",
    "country": "India",
    "iata": "LUH",
    "icao": "VILD"
  },
  {
    "name": "Leh Kushok Bakula Rimpochee Airport",
    "city": "Leh",
    "country": "India",
    "iata": "IXL",
    "icao": "VILH"
  },
  {
    "name": "Chaudhary Charan Singh International Airport",
    "city": "Lucknow",
    "country": "India",
    "iata": "LKO",
    "icao": "VILK"
  },
  {
    "name": "Patiala Airport",
    "city": "Patiala",
    "country": "India",
    "iata": "NONE",
    "icao": "VIPL"
  },
  {
    "name": "Pantnagar Airport",
    "city": "Nainital",
    "country": "India",
    "iata": "PGH",
    "icao": "VIPT"
  },
  {
    "name": "Fursatganj Airport",
    "city": "Raibarelli",
    "country": "India",
    "iata": "NONE",
    "icao": "VIRB"
  },
  {
    "name": "Sheikh ul Alam Airport",
    "city": "Srinagar",
    "country": "India",
    "iata": "SXR",
    "icao": "VISR"
  },
  {
    "name": "Satna Airport",
    "city": "Satna",
    "country": "India",
    "iata": "TNI",
    "icao": "VIST"
  },
  {
    "name": "Luang Phabang International Airport",
    "city": "Luang Prabang",
    "country": "Laos",
    "iata": "LPQ",
    "icao": "VLLB"
  },
  {
    "name": "Pakse International Airport",
    "city": "Pakse",
    "country": "Laos",
    "iata": "PKZ",
    "icao": "VLPS"
  },
  {
    "name": "Phonesavanh Airport",
    "city": "Phong Savanh",
    "country": "Laos",
    "iata": "NONE",
    "icao": "VLPV"
  },
  {
    "name": "Savannakhet Airport",
    "city": "Savannakhet",
    "country": "Laos",
    "iata": "ZVK",
    "icao": "VLSK"
  },
  {
    "name": "Sam Neua Airport",
    "city": "Sam Neua",
    "country": "Laos",
    "iata": "NONE",
    "icao": "VLSN"
  },
  {
    "name": "Wattay International Airport",
    "city": "Vientiane",
    "country": "Laos",
    "iata": "VTE",
    "icao": "VLVT"
  },
  {
    "name": "Macau International Airport",
    "city": "Macau",
    "country": "Macau",
    "iata": "MFM",
    "icao": "VMMC"
  },
  {
    "name": "Gautam Buddha Airport",
    "city": "Bhairawa",
    "country": "Nepal",
    "iata": "BWA",
    "icao": "VNBW"
  },
  {
    "name": "Janakpur Airport",
    "city": "Janakpur",
    "country": "Nepal",
    "iata": "NONE",
    "icao": "VNJP"
  },
  {
    "name": "Tribhuvan International Airport",
    "city": "Kathmandu",
    "country": "Nepal",
    "iata": "KTM",
    "icao": "VNKT"
  },
  {
    "name": "Pokhara Airport",
    "city": "Pokhara",
    "country": "Nepal",
    "iata": "PKR",
    "icao": "VNPK"
  },
  {
    "name": "Simara Airport",
    "city": "Simara",
    "country": "Nepal",
    "iata": "SIF",
    "icao": "VNSI"
  },
  {
    "name": "Biratnagar Airport",
    "city": "Biratnagar",
    "country": "Nepal",
    "iata": "BIR",
    "icao": "VNVT"
  },
  {
    "name": "Agatti Airport",
    "city": "Agatti Island",
    "country": "India",
    "iata": "AGX",
    "icao": "VOAT"
  },
  {
    "name": "Kempegowda International Airport",
    "city": "Bangalore",
    "country": "India",
    "iata": "BLR",
    "icao": "VOBL"
  },
  {
    "name": "Bellary Airport",
    "city": "Bellary",
    "country": "India",
    "iata": "BEP",
    "icao": "VOBI"
  },
  {
    "name": "Vijayawada Airport",
    "city": "Vijayawada",
    "country": "India",
    "iata": "VGA",
    "icao": "VOBZ"
  },
  {
    "name": "Coimbatore International Airport",
    "city": "Coimbatore",
    "country": "India",
    "iata": "CJB",
    "icao": "VOCB"
  },
  {
    "name": "Cochin International Airport",
    "city": "Kochi",
    "country": "India",
    "iata": "COK",
    "icao": "VOCI"
  },
  {
    "name": "Calicut International Airport",
    "city": "Calicut",
    "country": "India",
    "iata": "CCJ",
    "icao": "VOCL"
  },
  {
    "name": "Cuddapah Airport",
    "city": "Cuddapah",
    "country": "India",
    "iata": "CDP",
    "icao": "VOCP"
  },
  {
    "name": "Dundigul Air Force Academy",
    "city": "Dundigul",
    "country": "India",
    "iata": "NONE",
    "icao": "VODG"
  },
  {
    "name": "Begumpet Airport",
    "city": "Hyderabad",
    "country": "India",
    "iata": "BPM",
    "icao": "VOHY"
  },
  {
    "name": "Madurai Airport",
    "city": "Madurai",
    "country": "India",
    "iata": "IXM",
    "icao": "VOMD"
  },
  {
    "name": "Mangalore International Airport",
    "city": "Mangalore",
    "country": "India",
    "iata": "IXE",
    "icao": "VOML"
  },
  {
    "name": "Chennai International Airport",
    "city": "Madras",
    "country": "India",
    "iata": "MAA",
    "icao": "VOMM"
  },
  {
    "name": "Nagarjuna Sagar Airport",
    "city": "Nagarjunsagar",
    "country": "India",
    "iata": "NONE",
    "icao": "VONS"
  },
  {
    "name": "Vir Savarkar International Airport",
    "city": "Port Blair",
    "country": "India",
    "iata": "IXZ",
    "icao": "VOPB"
  },
  {
    "name": "Pondicherry Airport",
    "city": "Pendicherry",
    "country": "India",
    "iata": "PNY",
    "icao": "VOPC"
  },
  {
    "name": "Rajahmundry Airport",
    "city": "Rajahmundry",
    "country": "India",
    "iata": "RJA",
    "icao": "VORY"
  },
  {
    "name": "Salem Airport",
    "city": "Salem",
    "country": "India",
    "iata": "NONE",
    "icao": "VOSM"
  },
  {
    "name": "Tanjore Air Force Base",
    "city": "Tanjore",
    "country": "India",
    "iata": "NONE",
    "icao": "VOTJ"
  },
  {
    "name": "Tirupati Airport",
    "city": "Tirupeti",
    "country": "India",
    "iata": "TIR",
    "icao": "VOTP"
  },
  {
    "name": "Tiruchirapally Civil Airport Airport",
    "city": "Tiruchirappalli",
    "country": "India",
    "iata": "TRZ",
    "icao": "VOTR"
  },
  {
    "name": "Trivandrum International Airport",
    "city": "Trivandrum",
    "country": "India",
    "iata": "TRV",
    "icao": "VOTV"
  },
  {
    "name": "Paro Airport",
    "city": "Thimphu",
    "country": "Bhutan",
    "iata": "PBH",
    "icao": "VQPR"
  },
  {
    "name": "Malé International Airport",
    "city": "Male",
    "country": "Maldives",
    "iata": "MLE",
    "icao": "VRMM"
  },
  {
    "name": "Don Mueang International Airport",
    "city": "Bangkok",
    "country": "Thailand",
    "iata": "DMK",
    "icao": "VTBD"
  },
  {
    "name": "Kamphaeng Saen Airport",
    "city": "Nakhon Pathom",
    "country": "Thailand",
    "iata": "NONE",
    "icao": "VTBK"
  },
  {
    "name": "Khok Kathiam Airport",
    "city": "Lop Buri",
    "country": "Thailand",
    "iata": "NONE",
    "icao": "VTBL"
  },
  {
    "name": "U-Tapao International Airport",
    "city": "Pattaya",
    "country": "Thailand",
    "iata": "UTP",
    "icao": "VTBU"
  },
  {
    "name": "Watthana Nakhon Airport",
    "city": "Prachin Buri",
    "country": "Thailand",
    "iata": "NONE",
    "icao": "VTBW"
  },
  {
    "name": "Lampang Airport",
    "city": "Lampang",
    "country": "Thailand",
    "iata": "LPT",
    "icao": "VTCL"
  },
  {
    "name": "Phrae Airport",
    "city": "Phrae",
    "country": "Thailand",
    "iata": "PRH",
    "icao": "VTCP"
  },
  {
    "name": "Hua Hin Airport",
    "city": "Prachuap Khiri Khan",
    "country": "Thailand",
    "iata": "HHQ",
    "icao": "VTPH"
  },
  {
    "name": "Takhli Airport",
    "city": "Nakhon Sawan",
    "country": "Thailand",
    "iata": "NONE",
    "icao": "VTPI"
  },
  {
    "name": "Sak Long Airport",
    "city": "Phetchabun",
    "country": "Thailand",
    "iata": "NONE",
    "icao": "VTPL"
  },
  {
    "name": "Nakhon Sawan Airport",
    "city": "Nakhon Sawan",
    "country": "Thailand",
    "iata": "NONE",
    "icao": "VTPN"
  },
  {
    "name": "Phitsanulok Airport",
    "city": "Phitsanulok",
    "country": "Thailand",
    "iata": "PHS",
    "icao": "VTPP"
  },
  {
    "name": "Khunan Phumipol Airport",
    "city": "Tak",
    "country": "Thailand",
    "iata": "NONE",
    "icao": "VTPY"
  },
  {
    "name": "Khoun Khan Airport",
    "city": "Satun",
    "country": "Thailand",
    "iata": "NONE",
    "icao": "VTSA"
  },
  {
    "name": "Narathiwat Airport",
    "city": "Narathiwat",
    "country": "Thailand",
    "iata": "NAW",
    "icao": "VTSC"
  },
  {
    "name": "Krabi Airport",
    "city": "Krabi",
    "country": "Thailand",
    "iata": "KBV",
    "icao": "VTSG"
  },
  {
    "name": "Songkhla Airport",
    "city": "Songkhla",
    "country": "Thailand",
    "iata": "NONE",
    "icao": "VTSH"
  },
  {
    "name": "Pattani Airport",
    "city": "Pattani",
    "country": "Thailand",
    "iata": "PAN",
    "icao": "VTSK"
  },
  {
    "name": "Samui Airport",
    "city": "Ko Samui",
    "country": "Thailand",
    "iata": "USM",
    "icao": "VTSM"
  },
  {
    "name": "Cha Eian Airport",
    "city": "Nakhon Si Thammarat",
    "country": "Thailand",
    "iata": "NONE",
    "icao": "VTSN"
  },
  {
    "name": "Phuket International Airport",
    "city": "Phuket",
    "country": "Thailand",
    "iata": "HKT",
    "icao": "VTSP"
  },
  {
    "name": "Ranong Airport",
    "city": "Ranong",
    "country": "Thailand",
    "iata": "UNN",
    "icao": "VTSR"
  },
  {
    "name": "Hat Yai International Airport",
    "city": "Hat Yai",
    "country": "Thailand",
    "iata": "HDY",
    "icao": "VTSS"
  },
  {
    "name": "Trang Airport",
    "city": "Trang",
    "country": "Thailand",
    "iata": "TST",
    "icao": "VTST"
  },
  {
    "name": "Udon Thani Airport",
    "city": "Udon Thani",
    "country": "Thailand",
    "iata": "UTH",
    "icao": "VTUD"
  },
  {
    "name": "Sakon Nakhon Airport",
    "city": "Sakon Nakhon",
    "country": "Thailand",
    "iata": "SNO",
    "icao": "VTUI"
  },
  {
    "name": "Surin Airport",
    "city": "Surin",
    "country": "Thailand",
    "iata": "NONE",
    "icao": "VTUJ"
  },
  {
    "name": "Loei Airport",
    "city": "Loei",
    "country": "Thailand",
    "iata": "LOE",
    "icao": "VTUL"
  },
  {
    "name": "Khorat Airport",
    "city": "Nakhon Ratchasima",
    "country": "Thailand",
    "iata": "NONE",
    "icao": "VTUN"
  },
  {
    "name": "Rob Muang Airport",
    "city": "Roi Et",
    "country": "Thailand",
    "iata": "NONE",
    "icao": "VTUR"
  },
  {
    "name": "Da Nang International Airport",
    "city": "Danang",
    "country": "Vietnam",
    "iata": "DAD",
    "icao": "VVDN"
  },
  {
    "name": "Gia Lam Air Base",
    "city": "Hanoi",
    "country": "Vietnam",
    "iata": "NONE",
    "icao": "VVGL"
  },
  {
    "name": "Kep Air Base",
    "city": "Kep",
    "country": "Vietnam",
    "iata": "NONE",
    "icao": "VVKP"
  },
  {
    "name": "Noi Bai International Airport",
    "city": "Hanoi",
    "country": "Vietnam",
    "iata": "HAN",
    "icao": "VVNB"
  },
  {
    "name": "Nha Trang Air Base",
    "city": "Nhatrang",
    "country": "Vietnam",
    "iata": "NHA",
    "icao": "VVNT"
  },
  {
    "name": "Phu Bai Airport",
    "city": "Hue",
    "country": "Vietnam",
    "iata": "HUI",
    "icao": "VVPB"
  },
  {
    "name": "Phu Quoc International Airport",
    "city": "Phuquoc",
    "country": "Vietnam",
    "iata": "PQC",
    "icao": "VVPQ"
  },
  {
    "name": "Tan Son Nhat International Airport",
    "city": "Ho Chi Minh City",
    "country": "Vietnam",
    "iata": "SGN",
    "icao": "VVTS"
  },
  {
    "name": "Ann Airport",
    "city": "Ann",
    "country": "Burma",
    "iata": "NONE",
    "icao": "VYAN"
  },
  {
    "name": "Anisakan Airport",
    "city": "Anisakan",
    "country": "Burma",
    "iata": "NONE",
    "icao": "VYAS"
  },
  {
    "name": "Bagan Airport",
    "city": "Bagan",
    "country": "Burma",
    "iata": "NYU",
    "icao": "VYBG"
  },
  {
    "name": "Coco Island Airport",
    "city": "Coco Island",
    "country": "Burma",
    "iata": "NONE",
    "icao": "VYCI"
  },
  {
    "name": "Heho Airport",
    "city": "Heho",
    "country": "Burma",
    "iata": "HEH",
    "icao": "VYHH"
  },
  {
    "name": "Hommalinn Airport",
    "city": "Hommalin",
    "country": "Burma",
    "iata": "NONE",
    "icao": "VYHL"
  },
  {
    "name": "Kengtung Airport",
    "city": "Kengtung",
    "country": "Burma",
    "iata": "KET",
    "icao": "VYKG"
  },
  {
    "name": "Kyaukpyu Airport",
    "city": "Kyaukpyu",
    "country": "Burma",
    "iata": "KYP",
    "icao": "VYKP"
  },
  {
    "name": "Lashio Airport",
    "city": "Lashio",
    "country": "Burma",
    "iata": "LSH",
    "icao": "VYLS"
  },
  {
    "name": "Lanywa Airport",
    "city": "Lanywa",
    "country": "Burma",
    "iata": "NONE",
    "icao": "VYLY"
  },
  {
    "name": "Mandalay International Airport",
    "city": "Mandalay",
    "country": "Burma",
    "iata": "MDL",
    "icao": "VYMD"
  },
  {
    "name": "Myeik Airport",
    "city": "Myeik",
    "country": "Burma",
    "iata": "MGZ",
    "icao": "VYME"
  },
  {
    "name": "Myitkyina Airport",
    "city": "Myitkyina",
    "country": "Burma",
    "iata": "MYT",
    "icao": "VYMK"
  },
  {
    "name": "Momeik Airport",
    "city": "Momeik",
    "country": "Burma",
    "iata": "NONE",
    "icao": "VYMO"
  },
  {
    "name": "Mong Hsat Airport",
    "city": "Mong Hsat",
    "country": "Burma",
    "iata": "MOG",
    "icao": "VYMS"
  },
  {
    "name": "Nampong Air Base",
    "city": "Nampong",
    "country": "Burma",
    "iata": "NONE",
    "icao": "VYNP"
  },
  {
    "name": "Namsang Airport",
    "city": "Namsang",
    "country": "Burma",
    "iata": "NONE",
    "icao": "VYNS"
  },
  {
    "name": "Hpa-N Airport",
    "city": "Hpa-an",
    "country": "Burma",
    "iata": "NONE",
    "icao": "VYPA"
  },
  {
    "name": "Putao Airport",
    "city": "Putao",
    "country": "Burma",
    "iata": "PBU",
    "icao": "VYPT"
  },
  {
    "name": "Pyay Airport",
    "city": "Pyay",
    "country": "Burma",
    "iata": "NONE",
    "icao": "VYPY"
  },
  {
    "name": "Shante Air Base",
    "city": "Shante",
    "country": "Burma",
    "iata": "NONE",
    "icao": "VYST"
  },
  {
    "name": "Sittwe Airport",
    "city": "Sittwe",
    "country": "Burma",
    "iata": "AKY",
    "icao": "VYSW"
  },
  {
    "name": "Thandwe Airport",
    "city": "Thandwe",
    "country": "Burma",
    "iata": "SNW",
    "icao": "VYTD"
  },
  {
    "name": "Tachileik Airport",
    "city": "Tachilek",
    "country": "Burma",
    "iata": "THL",
    "icao": "VYTL"
  },
  {
    "name": "Taungoo Airport",
    "city": "Taungoo",
    "country": "Burma",
    "iata": "NONE",
    "icao": "VYTO"
  },
  {
    "name": "Yangon International Airport",
    "city": "Yangon",
    "country": "Burma",
    "iata": "RGN",
    "icao": "VYYY"
  },
  {
    "name": "Hasanuddin International Airport",
    "city": "Ujung Pandang",
    "country": "Indonesia",
    "iata": "UPG",
    "icao": "WAAA"
  },
  {
    "name": "Frans Kaisiepo Airport",
    "city": "Biak",
    "country": "Indonesia",
    "iata": "BIK",
    "icao": "WABB"
  },
  {
    "name": "Nabire Airport",
    "city": "Nabire",
    "country": "Indonesia",
    "iata": "NBX",
    "icao": "WABI"
  },
  {
    "name": "Moses Kilangin Airport",
    "city": "Timika",
    "country": "Indonesia",
    "iata": "TIM",
    "icao": "WABP"
  },
  {
    "name": "Sentani Airport",
    "city": "Jayapura",
    "country": "Indonesia",
    "iata": "DJJ",
    "icao": "WAJJ"
  },
  {
    "name": "Wamena Airport",
    "city": "Wamena",
    "country": "Indonesia",
    "iata": "WMX",
    "icao": "WAJW"
  },
  {
    "name": "Mopah Airport",
    "city": "Merauke",
    "country": "Indonesia",
    "iata": "MKQ",
    "icao": "WAKK"
  },
  {
    "name": "Jalaluddin Airport",
    "city": "Gorontalo",
    "country": "Indonesia",
    "iata": "GTO",
    "icao": "WAMG"
  },
  {
    "name": "Mutiara Airport",
    "city": "Palu",
    "country": "Indonesia",
    "iata": "PLW",
    "icao": "WAML"
  },
  {
    "name": "Sam Ratulangi Airport",
    "city": "Manado",
    "country": "Indonesia",
    "iata": "MDC",
    "icao": "WAMM"
  },
  {
    "name": "Kasiguncu Airport",
    "city": "Poso",
    "country": "Indonesia",
    "iata": "PSJ",
    "icao": "WAMP"
  },
  {
    "name": "Pitu Airport",
    "city": "Morotai Island",
    "country": "Indonesia",
    "iata": "OTI",
    "icao": "WAMR"
  },
  {
    "name": "Sultan Khairun Babullah Airport",
    "city": "Ternate",
    "country": "Indonesia",
    "iata": "TTE",
    "icao": "WAMT"
  },
  {
    "name": "Bubung Airport",
    "city": "Luwuk",
    "country": "Indonesia",
    "iata": "LUW",
    "icao": "WAMW"
  },
  {
    "name": "Pattimura Airport, Ambon",
    "city": "Ambon",
    "country": "Indonesia",
    "iata": "AMQ",
    "icao": null
  },
  {
    "name": "Fakfak Airport",
    "city": "Fak Fak",
    "country": "Indonesia",
    "iata": "FKQ",
    "icao": "WASF"
  },
  {
    "name": "Kaimana Airport",
    "city": "Kaimana",
    "country": "Indonesia",
    "iata": "KNG",
    "icao": "WASK"
  },
  {
    "name": "Babo Airport",
    "city": "Babo",
    "country": "Indonesia",
    "iata": "BXB",
    "icao": "WASO"
  },
  {
    "name": "Rendani Airport",
    "city": "Manokwari",
    "country": "Indonesia",
    "iata": "MKW",
    "icao": "WASR"
  },
  {
    "name": "Dominique Edward Osok Airport",
    "city": "Sorong",
    "country": "Indonesia",
    "iata": "SOQ",
    "icao": "WAXX"
  },
  {
    "name": "Bintulu Airport",
    "city": "Bintulu",
    "country": "Malaysia",
    "iata": "BTU",
    "icao": "WBGB"
  },
  {
    "name": "Kuching International Airport",
    "city": "Kuching",
    "country": "Malaysia",
    "iata": "KCH",
    "icao": "WBGG"
  },
  {
    "name": "Limbang Airport",
    "city": "Limbang",
    "country": "Malaysia",
    "iata": "LMN",
    "icao": "WBGJ"
  },
  {
    "name": "Marudi Airport",
    "city": "Marudi",
    "country": "Malaysia",
    "iata": "MUR",
    "icao": "WBGM"
  },
  {
    "name": "Miri Airport",
    "city": "Miri",
    "country": "Malaysia",
    "iata": "MYY",
    "icao": "WBGR"
  },
  {
    "name": "Sibu Airport",
    "city": "Sibu",
    "country": "Malaysia",
    "iata": "SBW",
    "icao": "WBGS"
  },
  {
    "name": "Lahad Datu Airport",
    "city": "Lahad Datu",
    "country": "Malaysia",
    "iata": "LDU",
    "icao": "WBKD"
  },
  {
    "name": "Kota Kinabalu International Airport",
    "city": "Kota Kinabalu",
    "country": "Malaysia",
    "iata": "BKI",
    "icao": "WBKK"
  },
  {
    "name": "Labuan Airport",
    "city": "Labuan",
    "country": "Malaysia",
    "iata": "LBU",
    "icao": "WBKL"
  },
  {
    "name": "Tawau Airport",
    "city": "Tawau",
    "country": "Malaysia",
    "iata": "TWU",
    "icao": "WBKW"
  },
  {
    "name": "Brunei International Airport",
    "city": "Bandar Seri Begawan",
    "country": "Brunei",
    "iata": "BWN",
    "icao": "WBSB"
  },
  {
    "name": "Sultan Syarif Kasim Ii (Simpang Tiga) Airport",
    "city": "Pekanbaru",
    "country": "Indonesia",
    "iata": "PKU",
    "icao": "WIBB"
  },
  {
    "name": "Pinang Kampai Airport",
    "city": "Dumai",
    "country": "Indonesia",
    "iata": "DUM",
    "icao": "WIBD"
  },
  {
    "name": "Soekarno-Hatta International Airport",
    "city": "Jakarta",
    "country": "Indonesia",
    "iata": "CGK",
    "icao": "WIII"
  },
  {
    "name": "Binaka Airport",
    "city": "Gunung Sitoli",
    "country": "Indonesia",
    "iata": "GNS",
    "icao": "WIMB"
  },
  {
    "name": "Aek Godang Airport",
    "city": "Padang Sidempuan",
    "country": "Indonesia",
    "iata": "NONE",
    "icao": "WIME"
  },
  {
    "name": "Minangkabau Airport",
    "city": "Padang",
    "country": "Indonesia",
    "iata": "NONE",
    "icao": "WIPT"
  },
  {
    "name": "Soewondo Air Force Base",
    "city": "Medan",
    "country": "Indonesia",
    "iata": "MES",
    "icao": "WIMK"
  },
  {
    "name": "Dr Ferdinand Lumban Tobing Airport",
    "city": "Sibolga",
    "country": "Indonesia",
    "iata": "NONE",
    "icao": "WIMS"
  },
  {
    "name": "Nanga Pinoh Airport",
    "city": "Nangapinoh",
    "country": "Indonesia",
    "iata": "NONE",
    "icao": "WIOG"
  },
  {
    "name": "Ketapang(Rahadi Usman) Airport",
    "city": "Ketapang",
    "country": "Indonesia",
    "iata": "KTG",
    "icao": "WIOK"
  },
  {
    "name": "Supadio Airport",
    "city": "Pontianak",
    "country": "Indonesia",
    "iata": "PNK",
    "icao": "WIOO"
  },
  {
    "name": "Sultan Thaha Airport",
    "city": "Jambi",
    "country": "Indonesia",
    "iata": "DJB",
    "icao": "WIPA"
  },
  {
    "name": "Fatmawati Soekarno Airport",
    "city": "Bengkulu",
    "country": "Indonesia",
    "iata": "BKS",
    "icao": "WIPL"
  },
  {
    "name": "Sultan Mahmud Badaruddin II Airport",
    "city": "Palembang",
    "country": "Indonesia",
    "iata": "PLM",
    "icao": "WIPP"
  },
  {
    "name": "Japura Airport",
    "city": "Rengat",
    "country": "Indonesia",
    "iata": "RGT",
    "icao": "WIPR"
  },
  {
    "name": "Lhok Sukon Airport",
    "city": "Lhok Sukon",
    "country": "Indonesia",
    "iata": "NONE",
    "icao": "WITL"
  },
  {
    "name": "Sultan Iskandar Muda International Airport",
    "city": "Banda Aceh",
    "country": "Indonesia",
    "iata": "BTJ",
    "icao": "WITT"
  },
  {
    "name": "Kluang Airport",
    "city": "Kluang",
    "country": "Malaysia",
    "iata": "NONE",
    "icao": "WMAP"
  },
  {
    "name": "Sultan Abdul Halim Airport",
    "city": "Alor Setar",
    "country": "Malaysia",
    "iata": "AOR",
    "icao": "WMKA"
  },
  {
    "name": "Butterworth Airport",
    "city": "Butterworth",
    "country": "Malaysia",
    "iata": "NONE",
    "icao": "WMKB"
  },
  {
    "name": "Sultan Ismail Petra Airport",
    "city": "Kota Bahru",
    "country": "Malaysia",
    "iata": "KBR",
    "icao": "WMKC"
  },
  {
    "name": "Kuantan Airport",
    "city": "Kuantan",
    "country": "Malaysia",
    "iata": "KUA",
    "icao": "WMKD"
  },
  {
    "name": "Kerteh Airport",
    "city": "Kerteh",
    "country": "Malaysia",
    "iata": "KTE",
    "icao": "WMKE"
  },
  {
    "name": "Simpang Airport",
    "city": "Simpang",
    "country": "Malaysia",
    "iata": "NONE",
    "icao": "WMKF"
  },
  {
    "name": "Sultan Azlan Shah Airport",
    "city": "Ipoh",
    "country": "Malaysia",
    "iata": "IPH",
    "icao": "WMKI"
  },
  {
    "name": "Senai International Airport",
    "city": "Johor Bahru",
    "country": "Malaysia",
    "iata": "JHB",
    "icao": "WMKJ"
  },
  {
    "name": "Kuala Lumpur International Airport",
    "city": "Kuala Lumpur",
    "country": "Malaysia",
    "iata": "KUL",
    "icao": "WMKK"
  },
  {
    "name": "Langkawi International Airport",
    "city": "Langkawi",
    "country": "Malaysia",
    "iata": "LGK",
    "icao": "WMKL"
  },
  {
    "name": "Malacca Airport",
    "city": "Malacca",
    "country": "Malaysia",
    "iata": "MKZ",
    "icao": "WMKM"
  },
  {
    "name": "Sultan Mahmud Airport",
    "city": "Kuala Terengganu",
    "country": "Malaysia",
    "iata": "TGG",
    "icao": "WMKN"
  },
  {
    "name": "Penang International Airport",
    "city": "Penang",
    "country": "Malaysia",
    "iata": "PEN",
    "icao": "WMKP"
  },
  {
    "name": "Suai Airport",
    "city": "Suai",
    "country": "East Timor",
    "iata": "NONE",
    "icao": "WPDB"
  },
  {
    "name": "Presidente Nicolau Lobato International Airport",
    "city": "Dili",
    "country": "East Timor",
    "iata": "DIL",
    "icao": "WPDL"
  },
  {
    "name": "Cakung Airport",
    "city": "Baucau",
    "country": "East Timor",
    "iata": "NONE",
    "icao": "WPEC"
  },
  {
    "name": "Sembawang Air Base",
    "city": "Sembawang",
    "country": "Singapore",
    "iata": "NONE",
    "icao": "WSAG"
  },
  {
    "name": "Paya Lebar Air Base",
    "city": "Paya Lebar",
    "country": "Singapore",
    "iata": "QPG",
    "icao": "WSAP"
  },
  {
    "name": "Tengah Air Base",
    "city": "Tengah",
    "country": "Singapore",
    "iata": "NONE",
    "icao": "WSAT"
  },
  {
    "name": "Seletar Airport",
    "city": "Singapore",
    "country": "Singapore",
    "iata": "XSP",
    "icao": "WSSL"
  },
  {
    "name": "Singapore Changi Airport",
    "city": "Singapore",
    "country": "Singapore",
    "iata": "SIN",
    "icao": "WSSS"
  },
  {
    "name": "Brisbane Archerfield Airport",
    "city": "Brisbane",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YBAF"
  },
  {
    "name": "Northern Peninsula Airport",
    "city": "Amberley",
    "country": "Australia",
    "iata": "ABM",
    "icao": "YBAM"
  },
  {
    "name": "Alice Springs Airport",
    "city": "Alice Springs",
    "country": "Australia",
    "iata": "ASP",
    "icao": "YBAS"
  },
  {
    "name": "Brisbane International Airport",
    "city": "Brisbane",
    "country": "Australia",
    "iata": "BNE",
    "icao": "YBBN"
  },
  {
    "name": "Gold Coast Airport",
    "city": "Coolangatta",
    "country": "Australia",
    "iata": "OOL",
    "icao": "YBCG"
  },
  {
    "name": "Cairns International Airport",
    "city": "Cairns",
    "country": "Australia",
    "iata": "CNS",
    "icao": "YBCS"
  },
  {
    "name": "Charleville Airport",
    "city": "Charlieville",
    "country": "Australia",
    "iata": "CTL",
    "icao": "YBCV"
  },
  {
    "name": "Mount Isa Airport",
    "city": "Mount Isa",
    "country": "Australia",
    "iata": "ISA",
    "icao": "YBMA"
  },
  {
    "name": "Sunshine Coast Airport",
    "city": "Maroochydore",
    "country": "Australia",
    "iata": "MCY",
    "icao": "YBMC"
  },
  {
    "name": "Mackay Airport",
    "city": "Mackay",
    "country": "Australia",
    "iata": "MKY",
    "icao": "YBMK"
  },
  {
    "name": "Proserpine Whitsunday Coast Airport",
    "city": "Prosserpine",
    "country": "Australia",
    "iata": "PPP",
    "icao": "YBPN"
  },
  {
    "name": "Rockhampton Airport",
    "city": "Rockhampton",
    "country": "Australia",
    "iata": "ROK",
    "icao": "YBRK"
  },
  {
    "name": "Townsville Airport",
    "city": "Townsville",
    "country": "Australia",
    "iata": "TSV",
    "icao": "YBTL"
  },
  {
    "name": "Weipa Airport",
    "city": "Weipa",
    "country": "Australia",
    "iata": "WEI",
    "icao": "YBWP"
  },
  {
    "name": "Avalon Airport",
    "city": "Avalon",
    "country": "Australia",
    "iata": "AVV",
    "icao": "YMAV"
  },
  {
    "name": "Albury Airport",
    "city": "Albury",
    "country": "Australia",
    "iata": "ABX",
    "icao": "YMAY"
  },
  {
    "name": "Melbourne Essendon Airport",
    "city": "Melbourne",
    "country": "Australia",
    "iata": "MEB",
    "icao": "YMEN"
  },
  {
    "name": "RAAF Base East Sale",
    "city": "East Sale",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YMES"
  },
  {
    "name": "Hobart International Airport",
    "city": "Hobart",
    "country": "Australia",
    "iata": "HBA",
    "icao": "YMHB"
  },
  {
    "name": "Launceston Airport",
    "city": "Launceston",
    "country": "Australia",
    "iata": "LST",
    "icao": "YMLT"
  },
  {
    "name": "Melbourne Moorabbin Airport",
    "city": "Melbourne",
    "country": "Australia",
    "iata": "MBW",
    "icao": "YMMB"
  },
  {
    "name": "Melbourne International Airport",
    "city": "Melbourne",
    "country": "Australia",
    "iata": "MEL",
    "icao": "YMML"
  },
  {
    "name": "RAAF Williams, Point Cook Base",
    "city": "Point Cook",
    "country": "Australia",
    "iata": "NONE",
    "icao": null
  },
  {
    "name": "Adelaide International Airport",
    "city": "Adelaide",
    "country": "Australia",
    "iata": "ADL",
    "icao": "YPAD"
  },
  {
    "name": "RAAF Base Edinburgh",
    "city": "Edinburgh",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YPED"
  },
  {
    "name": "Perth Jandakot Airport",
    "city": "Perth",
    "country": "Australia",
    "iata": "JAD",
    "icao": "YPJT"
  },
  {
    "name": "Karratha Airport",
    "city": "Karratha",
    "country": "Australia",
    "iata": "KTA",
    "icao": "YPKA"
  },
  {
    "name": "Kalgoorlie Boulder Airport",
    "city": "Kalgoorlie",
    "country": "Australia",
    "iata": "KGI",
    "icao": "YPKG"
  },
  {
    "name": "Kununurra Airport",
    "city": "Kununurra",
    "country": "Australia",
    "iata": "KNX",
    "icao": "YPKU"
  },
  {
    "name": "Learmonth Airport",
    "city": "Learmonth",
    "country": "Australia",
    "iata": "LEA",
    "icao": "YPLM"
  },
  {
    "name": "Port Hedland International Airport",
    "city": "Port Hedland",
    "country": "Australia",
    "iata": "PHE",
    "icao": "YPPD"
  },
  {
    "name": "Adelaide Parafield Airport",
    "city": "Adelaide",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YPPF"
  },
  {
    "name": "Perth International Airport",
    "city": "Perth",
    "country": "Australia",
    "iata": "PER",
    "icao": "YPPH"
  },
  {
    "name": "Woomera Airfield",
    "city": "Woomera",
    "country": "Australia",
    "iata": "UMR",
    "icao": "YPWR"
  },
  {
    "name": "Christmas Island Airport",
    "city": "Christmas Island",
    "country": "Christmas Island",
    "iata": "XCH",
    "icao": "YPXM"
  },
  {
    "name": "Sydney Bankstown Airport",
    "city": "Sydney",
    "country": "Australia",
    "iata": "BWU",
    "icao": "YSBK"
  },
  {
    "name": "Canberra International Airport",
    "city": "Canberra",
    "country": "Australia",
    "iata": "CBR",
    "icao": "YSCB"
  },
  {
    "name": "Coffs Harbour Airport",
    "city": "Coff's Harbour",
    "country": "Australia",
    "iata": "CFS",
    "icao": "YSCH"
  },
  {
    "name": "Camden Airport",
    "city": "Camden",
    "country": "Australia",
    "iata": "CDU",
    "icao": "YSCN"
  },
  {
    "name": "Dubbo City Regional Airport",
    "city": "Dubbo",
    "country": "Australia",
    "iata": "DBO",
    "icao": "YSDU"
  },
  {
    "name": "Norfolk Island International Airport",
    "city": "Norfolk Island",
    "country": "Norfolk Island",
    "iata": "NLK",
    "icao": "YSNF"
  },
  {
    "name": "RAAF Base Richmond",
    "city": "Richmond",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YSRI"
  },
  {
    "name": "Sydney Kingsford Smith International Airport",
    "city": "Sydney",
    "country": "Australia",
    "iata": "SYD",
    "icao": "YSSY"
  },
  {
    "name": "Tamworth Airport",
    "city": "Tamworth",
    "country": "Australia",
    "iata": "TMW",
    "icao": "YSTW"
  },
  {
    "name": "Wagga Wagga City Airport",
    "city": "Wagga Wagga",
    "country": "Australia",
    "iata": "WGA",
    "icao": "YSWG"
  },
  {
    "name": "Beijing Capital International Airport",
    "city": "Beijing",
    "country": "China",
    "iata": "PEK",
    "icao": "ZBAA"
  },
  {
    "name": "Dongshan Airport",
    "city": "Hailar",
    "country": "China",
    "iata": "HLD",
    "icao": "ZBLA"
  },
  {
    "name": "Tianjin Binhai International Airport",
    "city": "Tianjin",
    "country": "China",
    "iata": "TSN",
    "icao": "ZBTJ"
  },
  {
    "name": "Taiyuan Wusu Airport",
    "city": "Taiyuan",
    "country": "China",
    "iata": "TYN",
    "icao": "ZBYN"
  },
  {
    "name": "Guangzhou Baiyun International Airport",
    "city": "Guangzhou",
    "country": "China",
    "iata": "CAN",
    "icao": "ZGGG"
  },
  {
    "name": "Changsha Huanghua International Airport",
    "city": "Changcha",
    "country": "China",
    "iata": "CSX",
    "icao": "ZGHA"
  },
  {
    "name": "Guilin Liangjiang International Airport",
    "city": "Guilin",
    "country": "China",
    "iata": "KWL",
    "icao": "ZGKL"
  },
  {
    "name": "Nanning Wuxu Airport",
    "city": "Nanning",
    "country": "China",
    "iata": "NNG",
    "icao": "ZGNN"
  },
  {
    "name": "Shenzhen Bao'an International Airport",
    "city": "Shenzhen",
    "country": "China",
    "iata": "SZX",
    "icao": "ZGSZ"
  },
  {
    "name": "Zhengzhou Xinzheng International Airport",
    "city": "Zhengzhou",
    "country": "China",
    "iata": "CGO",
    "icao": "ZHCC"
  },
  {
    "name": "Wuhan Tianhe International Airport",
    "city": "Wuhan",
    "country": "China",
    "iata": "WUH",
    "icao": "ZHHH"
  },
  {
    "name": "Pyongyang Sunan International Airport",
    "city": "Pyongyang",
    "country": "North Korea",
    "iata": "FNJ",
    "icao": "ZKPY"
  },
  {
    "name": "Lanzhou Zhongchuan Airport",
    "city": "Lanzhou",
    "country": "China",
    "iata": "LHW",
    "icao": "ZLLL"
  },
  {
    "name": "Xi'an Xianyang International Airport",
    "city": "Xi'an",
    "country": "China",
    "iata": "XIY",
    "icao": "ZLXY"
  },
  {
    "name": "Chinggis Khaan International Airport",
    "city": "Ulan Bator",
    "country": "Mongolia",
    "iata": "ULN",
    "icao": "ZMUB"
  },
  {
    "name": "Xishuangbanna Gasa Airport",
    "city": "Jinghonggasa",
    "country": "China",
    "iata": "JHG",
    "icao": "ZPJH"
  },
  {
    "name": "Kunming Changshui International Airport",
    "city": "Kunming",
    "country": "China",
    "iata": "KMG",
    "icao": "ZPPP"
  },
  {
    "name": "Xiamen Gaoqi International Airport",
    "city": "Xiamen",
    "country": "China",
    "iata": "XMN",
    "icao": "ZSAM"
  },
  {
    "name": "Nanchang Changbei International Airport",
    "city": "Nanchang",
    "country": "China",
    "iata": "KHN",
    "icao": "ZSCN"
  },
  {
    "name": "Fuzhou Changle International Airport",
    "city": "Fuzhou",
    "country": "China",
    "iata": "FOC",
    "icao": "ZSFZ"
  },
  {
    "name": "Hangzhou Xiaoshan International Airport",
    "city": "Hangzhou",
    "country": "China",
    "iata": "HGH",
    "icao": "ZSHC"
  },
  {
    "name": "Ningbo Lishe International Airport",
    "city": "Ninbo",
    "country": "China",
    "iata": "NGB",
    "icao": "ZSNB"
  },
  {
    "name": "Nanjing Lukou Airport",
    "city": "Nanjing",
    "country": "China",
    "iata": "NKG",
    "icao": "ZSNJ"
  },
  {
    "name": "Hefei Luogang International Airport",
    "city": "Hefei",
    "country": "China",
    "iata": "HFE",
    "icao": "ZSOF"
  },
  {
    "name": "Liuting Airport",
    "city": "Qingdao",
    "country": "China",
    "iata": "TAO",
    "icao": "ZSQD"
  },
  {
    "name": "Shanghai Hongqiao International Airport",
    "city": "Shanghai",
    "country": "China",
    "iata": "SHA",
    "icao": "ZSSS"
  },
  {
    "name": "Yantai Laishan Airport",
    "city": "Yantai",
    "country": "China",
    "iata": "YNT",
    "icao": "ZSYT"
  },
  {
    "name": "Chongqing Jiangbei International Airport",
    "city": "Chongqing",
    "country": "China",
    "iata": "CKG",
    "icao": "ZUCK"
  },
  {
    "name": "Longdongbao Airport",
    "city": "Guiyang",
    "country": "China",
    "iata": "KWE",
    "icao": "ZUGY"
  },
  {
    "name": "Chengdu Shuangliu International Airport",
    "city": "Chengdu",
    "country": "China",
    "iata": "CTU",
    "icao": "ZUUU"
  },
  {
    "name": "Xichang Qingshan Airport",
    "city": "Xichang",
    "country": "China",
    "iata": "XIC",
    "icao": "ZUXC"
  },
  {
    "name": "Kashgar Airport",
    "city": "Kashi",
    "country": "China",
    "iata": "KHG",
    "icao": "ZWSH"
  },
  {
    "name": "Hotan Airport",
    "city": "Hotan",
    "country": "China",
    "iata": "HTN",
    "icao": "ZWTN"
  },
  {
    "name": "Ürümqi Diwopu International Airport",
    "city": "Urumqi",
    "country": "China",
    "iata": "URC",
    "icao": "ZWWW"
  },
  {
    "name": "Taiping Airport",
    "city": "Harbin",
    "country": "China",
    "iata": "HRB",
    "icao": "ZYHB"
  },
  {
    "name": "Mudanjiang Hailang International Airport",
    "city": "Mudanjiang",
    "country": "China",
    "iata": "MDG",
    "icao": "ZYMD"
  },
  {
    "name": "Zhoushuizi Airport",
    "city": "Dalian",
    "country": "China",
    "iata": "DLC",
    "icao": "ZYTL"
  },
  {
    "name": "Shanghai Pudong International Airport",
    "city": "Shanghai",
    "country": "China",
    "iata": "PVG",
    "icao": "ZSPD"
  },
  {
    "name": "Pulau Tioman Airport",
    "city": "Tioman",
    "country": "Malaysia",
    "iata": "TOD",
    "icao": "WMBT"
  },
  {
    "name": "Sultan Abdul Aziz Shah International Airport",
    "city": "Kuala Lumpur",
    "country": "Malaysia",
    "iata": "SZB",
    "icao": "WMSA"
  },
  {
    "name": "Noto Airport",
    "city": "Wajima",
    "country": "Japan",
    "iata": "NTQ",
    "icao": "RJNW"
  },
  {
    "name": "Borg El Arab International Airport",
    "city": "Alexandria",
    "country": "Egypt",
    "iata": "HBE",
    "icao": "HEBA"
  },
  {
    "name": "Barter Island LRRS Airport",
    "city": "Barter Island",
    "country": "United States",
    "iata": "BTI",
    "icao": "PABA"
  },
  {
    "name": "Cape Lisburne LRRS Airport",
    "city": "Cape Lisburne",
    "country": "United States",
    "iata": "LUR",
    "icao": "PALU"
  },
  {
    "name": "Point Lay LRRS Airport",
    "city": "Point Lay",
    "country": "United States",
    "iata": "PIZ",
    "icao": "PPIZ"
  },
  {
    "name": "Hilo International Airport",
    "city": "Hilo",
    "country": "United States",
    "iata": "ITO",
    "icao": "PHTO"
  },
  {
    "name": "Orlando Executive Airport",
    "city": "Orlando",
    "country": "United States",
    "iata": "ORL",
    "icao": "KORL"
  },
  {
    "name": "Bettles Airport",
    "city": "Bettles",
    "country": "United States",
    "iata": "BTT",
    "icao": "PABT"
  },
  {
    "name": "Clear Airport",
    "city": "Clear Mews",
    "country": "United States",
    "iata": "Z84",
    "icao": "PACL"
  },
  {
    "name": "Indian Mountain LRRS Airport",
    "city": "Indian Mountains",
    "country": "United States",
    "iata": "UTO",
    "icao": "PAIM"
  },
  {
    "name": "Fort Yukon Airport",
    "city": "Fort Yukon",
    "country": "United States",
    "iata": "FYU",
    "icao": "PFYU"
  },
  {
    "name": "Sparrevohn LRRS Airport",
    "city": "Sparrevohn",
    "country": "United States",
    "iata": "SVW",
    "icao": "PASV"
  },
  {
    "name": "Bryant Army Heliport",
    "city": "Fort Richardson",
    "country": "United States",
    "iata": "FRN",
    "icao": "PAFR"
  },
  {
    "name": "Tatalina LRRS Airport",
    "city": "Tatalina",
    "country": "United States",
    "iata": "TLJ",
    "icao": "PATL"
  },
  {
    "name": "Cape Romanzof LRRS Airport",
    "city": "Cape Romanzof",
    "country": "United States",
    "iata": "CZF",
    "icao": "PACZ"
  },
  {
    "name": "Laurence G Hanscom Field",
    "city": "Bedford",
    "country": "United States",
    "iata": "BED",
    "icao": "KBED"
  },
  {
    "name": "St Paul Island Airport",
    "city": "St. Paul Island",
    "country": "United States",
    "iata": "SNP",
    "icao": "PASN"
  },
  {
    "name": "Cape Newenham LRRS Airport",
    "city": "Cape Newenham",
    "country": "United States",
    "iata": "EHM",
    "icao": "PAEH"
  },
  {
    "name": "St George Airport",
    "city": "Point Barrow",
    "country": "United States",
    "iata": "STG",
    "icao": "PAPB"
  },
  {
    "name": "Iliamna Airport",
    "city": "Iliamna",
    "country": "United States",
    "iata": "ILI",
    "icao": "PAIL"
  },
  {
    "name": "Platinum Airport",
    "city": "Port Moller",
    "country": "United States",
    "iata": "PTU",
    "icao": "PAPM"
  },
  {
    "name": "Big Mountain Airport",
    "city": "Big Mountain",
    "country": "United States",
    "iata": "BMX",
    "icao": "PABM"
  },
  {
    "name": "Oscoda Wurtsmith Airport",
    "city": "Oscoda",
    "country": "United States",
    "iata": "OSC",
    "icao": "KOSC"
  },
  {
    "name": "Marina Municipal Airport",
    "city": "Fort Ord",
    "country": "United States",
    "iata": "OAR",
    "icao": "KOAR"
  },
  {
    "name": "Sacramento Mather Airport",
    "city": "Sacramento",
    "country": "United States",
    "iata": "MHR",
    "icao": "KMHR"
  },
  {
    "name": "Bicycle Lake Army Air Field",
    "city": "Fort Irwin",
    "country": "United States",
    "iata": "BYS",
    "icao": "KBYS"
  },
  {
    "name": "Twentynine Palms (Self) Airport",
    "city": "Twenty Nine Palms",
    "country": "United States",
    "iata": "NXP",
    "icao": "KNXP"
  },
  {
    "name": "Fort Smith Regional Airport",
    "city": "Fort Smith",
    "country": "United States",
    "iata": "FSM",
    "icao": "KFSM"
  },
  {
    "name": "Merrill Field",
    "city": "Anchorage",
    "country": "United States",
    "iata": "MRI",
    "icao": "PAMR"
  },
  {
    "name": "Grants-Milan Municipal Airport",
    "city": "Grants",
    "country": "United States",
    "iata": "GNT",
    "icao": "KGNT"
  },
  {
    "name": "Ponca City Regional Airport",
    "city": "Ponca City",
    "country": "United States",
    "iata": "PNC",
    "icao": "KPNC"
  },
  {
    "name": "Hunter Army Air Field",
    "city": "Hunter Aaf",
    "country": "United States",
    "iata": "SVN",
    "icao": "KSVN"
  },
  {
    "name": "Grand Forks International Airport",
    "city": "Grand Forks",
    "country": "United States",
    "iata": "GFK",
    "icao": "KGFK"
  },
  {
    "name": "Grider Field",
    "city": "Pine Bluff",
    "country": "United States",
    "iata": "PBF",
    "icao": "KPBF"
  },
  {
    "name": "Whiting Field Naval Air Station - North",
    "city": "Milton",
    "country": "United States",
    "iata": "NSE",
    "icao": "KNSE"
  },
  {
    "name": "Hana Airport",
    "city": "Hana",
    "country": "United States",
    "iata": "HNM",
    "icao": "PHHN"
  },
  {
    "name": "Ernest A. Love Field",
    "city": "Prescott",
    "country": "United States",
    "iata": "PRC",
    "icao": "KPRC"
  },
  {
    "name": "Trenton Mercer Airport",
    "city": "Trenton",
    "country": "United States",
    "iata": "TTN",
    "icao": "KTTN"
  },
  {
    "name": "General Edward Lawrence Logan International Airport",
    "city": "Boston",
    "country": "United States",
    "iata": "BOS",
    "icao": "KBOS"
  },
  {
    "name": "Travis Air Force Base",
    "city": "Fairfield",
    "country": "United States",
    "iata": "SUU",
    "icao": "KSUU"
  },
  {
    "name": "Griffiss International Airport",
    "city": "Rome",
    "country": "United States",
    "iata": "RME",
    "icao": "KRME"
  },
  {
    "name": "Wendover Airport",
    "city": "Wendover",
    "country": "United States",
    "iata": "ENV",
    "icao": "KENV"
  },
  {
    "name": "Mobile Downtown Airport",
    "city": "Mobile",
    "country": "United States",
    "iata": "BFM",
    "icao": "KBFM"
  },
  {
    "name": "Metropolitan Oakland International Airport",
    "city": "Oakland",
    "country": "United States",
    "iata": "OAK",
    "icao": "KOAK"
  },
  {
    "name": "Eppley Airfield",
    "city": "Omaha",
    "country": "United States",
    "iata": "OMA",
    "icao": "KOMA"
  },
  {
    "name": "Port Angeles Cgas Airport",
    "city": "Port Angeles",
    "country": "United States",
    "iata": "NOW",
    "icao": "KNOW"
  },
  {
    "name": "Kahului Airport",
    "city": "Kahului",
    "country": "United States",
    "iata": "OGG",
    "icao": "PHOG"
  },
  {
    "name": "Wichita Mid Continent Airport",
    "city": "Wichita",
    "country": "United States",
    "iata": "ICT",
    "icao": "KICT"
  },
  {
    "name": "Kansas City International Airport",
    "city": "Kansas City",
    "country": "United States",
    "iata": "MCI",
    "icao": "KMCI"
  },
  {
    "name": "Dane County Regional Truax Field",
    "city": "Madison",
    "country": "United States",
    "iata": "MSN",
    "icao": "KMSN"
  },
  {
    "name": "Dillingham Airport",
    "city": "Dillingham",
    "country": "United States",
    "iata": "DLG",
    "icao": "PADL"
  },
  {
    "name": "Boone County Airport",
    "city": "Harrison",
    "country": "United States",
    "iata": "HRO",
    "icao": "KHRO"
  },
  {
    "name": "Phoenix Sky Harbor International Airport",
    "city": "Phoenix",
    "country": "United States",
    "iata": "PHX",
    "icao": "KPHX"
  },
  {
    "name": "Bangor International Airport",
    "city": "Bangor",
    "country": "United States",
    "iata": "BGR",
    "icao": "KBGR"
  },
  {
    "name": "Fort Lauderdale Executive Airport",
    "city": "Fort Lauderdale",
    "country": "United States",
    "iata": "FXE",
    "icao": "KFXE"
  },
  {
    "name": "East Texas Regional Airport",
    "city": "Longview",
    "country": "United States",
    "iata": "GGG",
    "icao": "KGGG"
  },
  {
    "name": "Anderson Regional Airport",
    "city": "Andersen",
    "country": "United States",
    "iata": "AND",
    "icao": "KAND"
  },
  {
    "name": "Spokane International Airport",
    "city": "Spokane",
    "country": "United States",
    "iata": "GEG",
    "icao": "KGEG"
  },
  {
    "name": "North Perry Airport",
    "city": "Hollywood",
    "country": "United States",
    "iata": "HWO",
    "icao": "KHWO"
  },
  {
    "name": "San Francisco International Airport",
    "city": "San Francisco",
    "country": "United States",
    "iata": "SFO",
    "icao": "KSFO"
  },
  {
    "name": "Cut Bank International Airport",
    "city": "Cutbank",
    "country": "United States",
    "iata": "CTB",
    "icao": "KCTB"
  },
  {
    "name": "Acadiana Regional Airport",
    "city": "Louisiana",
    "country": "United States",
    "iata": "ARA",
    "icao": "KARA"
  },
  {
    "name": "Gainesville Regional Airport",
    "city": "Gainesville",
    "country": "United States",
    "iata": "GNV",
    "icao": "KGNV"
  },
  {
    "name": "Memphis International Airport",
    "city": "Memphis",
    "country": "United States",
    "iata": "MEM",
    "icao": "KMEM"
  },
  {
    "name": "Bisbee Douglas International Airport",
    "city": "Douglas",
    "country": "United States",
    "iata": "DUG",
    "icao": "KDUG"
  },
  {
    "name": "Allen Army Airfield",
    "city": "Delta Junction",
    "country": "United States",
    "iata": "BIG",
    "icao": "PABI"
  },
  {
    "name": "TSTC Waco Airport",
    "city": "Waco",
    "country": "United States",
    "iata": "CNW",
    "icao": "KCNW"
  },
  {
    "name": "Annette Island Airport",
    "city": "Annette Island",
    "country": "United States",
    "iata": "ANN",
    "icao": "PANT"
  },
  {
    "name": "Caribou Municipal Airport",
    "city": "Caribou",
    "country": "United States",
    "iata": "CAR",
    "icao": "KCAR"
  },
  {
    "name": "Little Rock Air Force Base",
    "city": "Jacksonville",
    "country": "United States",
    "iata": "LRF",
    "icao": "KLRF"
  },
  {
    "name": "Redstone Army Air Field",
    "city": "Redstone",
    "country": "United States",
    "iata": "HUA",
    "icao": "KHUA"
  },
  {
    "name": "Pope Field",
    "city": "Fort Bragg",
    "country": "United States",
    "iata": "POB",
    "icao": "KPOB"
  },
  {
    "name": "Dalhart Municipal Airport",
    "city": "Dalhart",
    "country": "United States",
    "iata": "DHT",
    "icao": "KDHT"
  },
  {
    "name": "Laughlin Air Force Base",
    "city": "Del Rio",
    "country": "United States",
    "iata": "DLF",
    "icao": "KDLF"
  },
  {
    "name": "Los Angeles International Airport",
    "city": "Los Angeles",
    "country": "United States",
    "iata": "LAX",
    "icao": "KLAX"
  },
  {
    "name": "Anniston Metropolitan Airport",
    "city": "Anniston",
    "country": "United States",
    "iata": "ANB",
    "icao": "KANB"
  },
  {
    "name": "Cleveland Hopkins International Airport",
    "city": "Cleveland",
    "country": "United States",
    "iata": "CLE",
    "icao": "KCLE"
  },
  {
    "name": "Dover Air Force Base",
    "city": "Dover",
    "country": "United States",
    "iata": "DOV",
    "icao": "KDOV"
  },
  {
    "name": "Cincinnati Northern Kentucky International Airport",
    "city": "Cincinnati",
    "country": "United States",
    "iata": "CVG",
    "icao": "KCVG"
  },
  {
    "name": "Tipton Airport",
    "city": "Fort Meade",
    "country": "United States",
    "iata": "FME",
    "icao": "KFME"
  },
  {
    "name": "China Lake Naws (Armitage Field) Airport",
    "city": "China Lake",
    "country": "United States",
    "iata": "NID",
    "icao": "KNID"
  },
  {
    "name": "Huron Regional Airport",
    "city": "Huron",
    "country": "United States",
    "iata": "HON",
    "icao": "KHON"
  },
  {
    "name": "Juneau International Airport",
    "city": "Juneau",
    "country": "United States",
    "iata": "JNU",
    "icao": "PAJN"
  },
  {
    "name": "Lafayette Regional Airport",
    "city": "Lafayette",
    "country": "United States",
    "iata": "LFT",
    "icao": "KLFT"
  },
  {
    "name": "Newark Liberty International Airport",
    "city": "Newark",
    "country": "United States",
    "iata": "EWR",
    "icao": "KEWR"
  },
  {
    "name": "Boise Air Terminal/Gowen field",
    "city": "Boise",
    "country": "United States",
    "iata": "BOI",
    "icao": "KBOI"
  },
  {
    "name": "Creech Air Force Base",
    "city": "Indian Springs",
    "country": "United States",
    "iata": "INS",
    "icao": "KINS"
  },
  {
    "name": "Garden City Regional Airport",
    "city": "Garden City",
    "country": "United States",
    "iata": "GCK",
    "icao": "KGCK"
  },
  {
    "name": "Minot International Airport",
    "city": "Minot",
    "country": "United States",
    "iata": "MOT",
    "icao": "KMOT"
  },
  {
    "name": "Wheeler Army Airfield",
    "city": "Wahiawa",
    "country": "United States",
    "iata": "HHI",
    "icao": "PHHI"
  },
  {
    "name": "Maxwell Air Force Base",
    "city": "Montgomery",
    "country": "United States",
    "iata": "MXF",
    "icao": "KMXF"
  },
  {
    "name": "Robinson Army Air Field",
    "city": "Robinson",
    "country": "United States",
    "iata": "NONE",
    "icao": "KRBM"
  },
  {
    "name": "Dallas Love Field",
    "city": "Dallas",
    "country": "United States",
    "iata": "DAL",
    "icao": "KDAL"
  },
  {
    "name": "Butts AAF (Fort Carson) Air Field",
    "city": "Fort Carson",
    "country": "United States",
    "iata": "FCS",
    "icao": "KFCS"
  },
  {
    "name": "Helena Regional Airport",
    "city": "Helena",
    "country": "United States",
    "iata": "HLN",
    "icao": "KHLN"
  },
  {
    "name": "Miramar Marine Corps Air Station - Mitscher Field",
    "city": "Miramar",
    "country": "United States",
    "iata": "NKX",
    "icao": "KNKX"
  },
  {
    "name": "Luke Air Force Base",
    "city": "Phoenix",
    "country": "United States",
    "iata": "LUF",
    "icao": "KLUF"
  },
  {
    "name": "Hurlburt Field",
    "city": "Mary Esther",
    "country": "United States",
    "iata": "NONE",
    "icao": "KHRT"
  },
  {
    "name": "Jack Northrop Field Hawthorne Municipal Airport",
    "city": "Hawthorne",
    "country": "United States",
    "iata": "HHR",
    "icao": "KHHR"
  },
  {
    "name": "Houlton International Airport",
    "city": "Houlton",
    "country": "United States",
    "iata": "HUL",
    "icao": "KHUL"
  },
  {
    "name": "Vance Air Force Base",
    "city": "Enid",
    "country": "United States",
    "iata": "END",
    "icao": "KEND"
  },
  {
    "name": "Point Mugu Naval Air Station (Naval Base Ventura Co)",
    "city": "Point Mugu",
    "country": "United States",
    "iata": "NTD",
    "icao": "KNTD"
  },
  {
    "name": "Edwards Air Force Base",
    "city": "Edwards Afb",
    "country": "United States",
    "iata": "EDW",
    "icao": "KEDW"
  },
  {
    "name": "Lake Charles Regional Airport",
    "city": "Lake Charles",
    "country": "United States",
    "iata": "LCH",
    "icao": "KLCH"
  },
  {
    "name": "Kona International At Keahole Airport",
    "city": "Kona",
    "country": "United States",
    "iata": "KOA",
    "icao": "PHKO"
  },
  {
    "name": "Myrtle Beach International Airport",
    "city": "Myrtle Beach",
    "country": "United States",
    "iata": "MYR",
    "icao": "KMYR"
  },
  {
    "name": "Lemoore Naval Air Station (Reeves Field) Airport",
    "city": "Lemoore",
    "country": "United States",
    "iata": "NLC",
    "icao": "KNLC"
  },
  {
    "name": "Nantucket Memorial Airport",
    "city": "Nantucket",
    "country": "United States",
    "iata": "ACK",
    "icao": "KACK"
  },
  {
    "name": "Felker Army Air Field",
    "city": "Fort Eustis",
    "country": "United States",
    "iata": "FAF",
    "icao": "KFAF"
  },
  {
    "name": "Campbell AAF (Fort Campbell) Air Field",
    "city": "Hopkinsville",
    "country": "United States",
    "iata": "HOP",
    "icao": "KHOP"
  },
  {
    "name": "Ronald Reagan Washington National Airport",
    "city": "Washington",
    "country": "United States",
    "iata": "DCA",
    "icao": "KDCA"
  },
  {
    "name": "Patuxent River Naval Air Station/Trapnell Field Aiport",
    "city": "Patuxent River",
    "country": "United States",
    "iata": "NHK",
    "icao": "KNHK"
  },
  {
    "name": "Palacios Municipal Airport",
    "city": "Palacios",
    "country": "United States",
    "iata": "PSX",
    "icao": "KPSX"
  },
  {
    "name": "Arkansas International Airport",
    "city": "Blytheville",
    "country": "United States",
    "iata": "BYH",
    "icao": "KBYH"
  },
  {
    "name": "Atlantic City International Airport",
    "city": "Atlantic City",
    "country": "United States",
    "iata": "ACY",
    "icao": "KACY"
  },
  {
    "name": "Tinker Air Force Base",
    "city": "Oklahoma City",
    "country": "United States",
    "iata": "TIK",
    "icao": "KTIK"
  },
  {
    "name": "Pueblo Memorial Airport",
    "city": "Pueblo",
    "country": "United States",
    "iata": "PUB",
    "icao": "KPUB"
  },
  {
    "name": "Northern Maine Regional Airport at Presque Isle",
    "city": "Presque Isle",
    "country": "United States",
    "iata": "PQI",
    "icao": "KPQI"
  },
  {
    "name": "Gray Army Air Field",
    "city": "Fort Lewis",
    "country": "United States",
    "iata": "GRF",
    "icao": "KGRF"
  },
  {
    "name": "Kodiak Airport",
    "city": "Kodiak",
    "country": "United States",
    "iata": "ADQ",
    "icao": "PADQ"
  },
  {
    "name": "Upolu Airport",
    "city": "Opolu",
    "country": "United States",
    "iata": "UPP",
    "icao": "PHUP"
  },
  {
    "name": "Fort Lauderdale Hollywood International Airport",
    "city": "Fort Lauderdale",
    "country": "United States",
    "iata": "FLL",
    "icao": "KFLL"
  },
  {
    "name": "Davis Field",
    "city": "Muskogee",
    "country": "United States",
    "iata": "MKO",
    "icao": "KMKO"
  },
  {
    "name": "Falls International Airport",
    "city": "International Falls",
    "country": "United States",
    "iata": "INL",
    "icao": "KINL"
  },
  {
    "name": "Salt Lake City International Airport",
    "city": "Salt Lake City",
    "country": "United States",
    "iata": "SLC",
    "icao": "KSLC"
  },
  {
    "name": "Childress Municipal Airport",
    "city": "Childress",
    "country": "United States",
    "iata": "CDS",
    "icao": "KCDS"
  },
  {
    "name": "Keesler Air Force Base",
    "city": "Biloxi",
    "country": "United States",
    "iata": "BIX",
    "icao": "KBIX"
  },
  {
    "name": "Lawson Army Air Field (Fort Benning)",
    "city": "Fort Benning",
    "country": "United States",
    "iata": "LSF",
    "icao": "KLSF"
  },
  {
    "name": "Marshall Army Air Field",
    "city": "Fort Riley",
    "country": "United States",
    "iata": "FRI",
    "icao": "KFRI"
  },
  {
    "name": "Harrisburg International Airport",
    "city": "Harrisburg",
    "country": "United States",
    "iata": "MDT",
    "icao": "KMDT"
  },
  {
    "name": "Lincoln Airport",
    "city": "Lincoln",
    "country": "United States",
    "iata": "LNK",
    "icao": "KLNK"
  },
  {
    "name": "Capital City Airport",
    "city": "Lansing",
    "country": "United States",
    "iata": "LAN",
    "icao": "KLAN"
  },
  {
    "name": "Waimea Kohala Airport",
    "city": "Kamuela",
    "country": "United States",
    "iata": "MUE",
    "icao": "PHMU"
  },
  {
    "name": "Massena International Richards Field",
    "city": "Massena",
    "country": "United States",
    "iata": "MSS",
    "icao": "KMSS"
  },
  {
    "name": "Hickory Regional Airport",
    "city": "Hickory",
    "country": "United States",
    "iata": "HKY",
    "icao": "KHKY"
  },
  {
    "name": "Albert Whitted Airport",
    "city": "St. Petersburg",
    "country": "United States",
    "iata": "SPG",
    "icao": "KSPG"
  },
  {
    "name": "Page Field",
    "city": "Fort Myers",
    "country": "United States",
    "iata": "FMY",
    "icao": "KFMY"
  },
  {
    "name": "George Bush Intercontinental Houston Airport",
    "city": "Houston",
    "country": "United States",
    "iata": "IAH",
    "icao": "KIAH"
  },
  {
    "name": "Millinocket Municipal Airport",
    "city": "Millinocket",
    "country": "United States",
    "iata": "MLT",
    "icao": "KMLT"
  },
  {
    "name": "Andrews Air Force Base",
    "city": "Camp Springs",
    "country": "United States",
    "iata": "ADW",
    "icao": "KADW"
  },
  {
    "name": "Smith Reynolds Airport",
    "city": "Winston-salem",
    "country": "United States",
    "iata": "INT",
    "icao": "KINT"
  },
  {
    "name": "Southern California Logistics Airport",
    "city": "Victorville",
    "country": "United States",
    "iata": "VCV",
    "icao": "KVCV"
  },
  {
    "name": "Bob Sikes Airport",
    "city": "Crestview",
    "country": "United States",
    "iata": "CEW",
    "icao": "KCEW"
  },
  {
    "name": "Wheeler Sack Army Air Field",
    "city": "Fort Drum",
    "country": "United States",
    "iata": "GTB",
    "icao": "KGTB"
  },
  {
    "name": "St Clair County International Airport",
    "city": "Port Huron",
    "country": "United States",
    "iata": "PHN",
    "icao": "KPHN"
  },
  {
    "name": "Meadows Field",
    "city": "Bakersfield",
    "country": "United States",
    "iata": "BFL",
    "icao": "KBFL"
  },
  {
    "name": "El Paso International Airport",
    "city": "El Paso",
    "country": "United States",
    "iata": "ELP",
    "icao": "KELP"
  },
  {
    "name": "Valley International Airport",
    "city": "Harlingen",
    "country": "United States",
    "iata": "HRL",
    "icao": "KHRL"
  },
  {
    "name": "Columbia Metropolitan Airport",
    "city": "Columbia",
    "country": "United States",
    "iata": "CAE",
    "icao": "KCAE"
  },
  {
    "name": "Davis Monthan Air Force Base",
    "city": "Tucson",
    "country": "United States",
    "iata": "DMA",
    "icao": "KDMA"
  },
  {
    "name": "Pensacola Naval Air Station/Forrest Sherman Field",
    "city": "Pensacola",
    "country": "United States",
    "iata": "NPA",
    "icao": "KNPA"
  },
  {
    "name": "Pensacola Regional Airport",
    "city": "Pensacola",
    "country": "United States",
    "iata": "PNS",
    "icao": "KPNS"
  },
  {
    "name": "Grand Forks Air Force Base",
    "city": "Red River",
    "country": "United States",
    "iata": "RDR",
    "icao": "KRDR"
  },
  {
    "name": "William P Hobby Airport",
    "city": "Houston",
    "country": "United States",
    "iata": "HOU",
    "icao": "KHOU"
  },
  {
    "name": "Buckley Air Force Base",
    "city": "Buckley",
    "country": "United States",
    "iata": "BKF",
    "icao": "KBKF"
  },
  {
    "name": "Northway Airport",
    "city": "Northway",
    "country": "United States",
    "iata": "ORT",
    "icao": "PAOR"
  },
  {
    "name": "Palmer Municipal Airport",
    "city": "Palmer",
    "country": "United States",
    "iata": "PAQ",
    "icao": "PAAQ"
  },
  {
    "name": "Pittsburgh International Airport",
    "city": "Pittsburgh",
    "country": "United States",
    "iata": "PIT",
    "icao": "KPIT"
  },
  {
    "name": "Wiley Post Will Rogers Memorial Airport",
    "city": "Barrow",
    "country": "United States",
    "iata": "BRW",
    "icao": "PABR"
  },
  {
    "name": "Ellington Airport",
    "city": "Houston",
    "country": "United States",
    "iata": "EFD",
    "icao": "KEFD"
  },
  {
    "name": "Whidbey Island Naval Air Station /Ault Field/ Airport",
    "city": "Whidbey Island",
    "country": "United States",
    "iata": "NUW",
    "icao": "KNUW"
  },
  {
    "name": "Alice International Airport",
    "city": "Alice",
    "country": "United States",
    "iata": "ALI",
    "icao": "KALI"
  },
  {
    "name": "Moody Air Force Base",
    "city": "Valdosta",
    "country": "United States",
    "iata": "VAD",
    "icao": "KVAD"
  },
  {
    "name": "Miami International Airport",
    "city": "Miami",
    "country": "United States",
    "iata": "MIA",
    "icao": "KMIA"
  },
  {
    "name": "Seattle Tacoma International Airport",
    "city": "Seattle",
    "country": "United States",
    "iata": "SEA",
    "icao": "KSEA"
  },
  {
    "name": "Lovell Field",
    "city": "Chattanooga",
    "country": "United States",
    "iata": "CHA",
    "icao": "KCHA"
  },
  {
    "name": "Igor I Sikorsky Memorial Airport",
    "city": "Stratford",
    "country": "United States",
    "iata": "BDR",
    "icao": "KBDR"
  },
  {
    "name": "Jackson-Medgar Wiley Evers International Airport",
    "city": "Jackson",
    "country": "United States",
    "iata": "JAN",
    "icao": "KJAN"
  },
  {
    "name": "Scholes International At Galveston Airport",
    "city": "Galveston",
    "country": "United States",
    "iata": "GLS",
    "icao": "KGLS"
  },
  {
    "name": "Long Beach /Daugherty Field/ Airport",
    "city": "Long Beach",
    "country": "United States",
    "iata": "LGB",
    "icao": "KLGB"
  },
  {
    "name": "Dillingham Airfield",
    "city": "Dillingham",
    "country": "United States",
    "iata": "HDH",
    "icao": "PHDH"
  },
  {
    "name": "Williamsport Regional Airport",
    "city": "Williamsport",
    "country": "United States",
    "iata": "IPT",
    "icao": "KIPT"
  },
  {
    "name": "Indianapolis International Airport",
    "city": "Indianapolis",
    "country": "United States",
    "iata": "IND",
    "icao": "KIND"
  },
  {
    "name": "Whiteman Air Force Base",
    "city": "Knobnoster",
    "country": "United States",
    "iata": "SZL",
    "icao": "KSZL"
  },
  {
    "name": "Akron Fulton International Airport",
    "city": "Akron",
    "country": "United States",
    "iata": "AKC",
    "icao": "KAKR"
  },
  {
    "name": "Greenwood–Leflore Airport",
    "city": "Greenwood",
    "country": "United States",
    "iata": "GWO",
    "icao": "KGWO"
  },
  {
    "name": "Westchester County Airport",
    "city": "White Plains",
    "country": "United States",
    "iata": "HPN",
    "icao": "KHPN"
  },
  {
    "name": "Francis S Gabreski Airport",
    "city": "West Hampton Beach",
    "country": "United States",
    "iata": "FOK",
    "icao": "KFOK"
  },
  {
    "name": "Jonesboro Municipal Airport",
    "city": "Jonesboro",
    "country": "United States",
    "iata": "JBR",
    "icao": "KJBR"
  },
  {
    "name": "Tonopah Test Range Airport",
    "city": "Tonopah",
    "country": "United States",
    "iata": "NONE",
    "icao": "KTNX"
  },
  {
    "name": "Palm Beach County Park Airport",
    "city": "West Palm Beach",
    "country": "United States",
    "iata": "LNA",
    "icao": "KLNA"
  },
  {
    "name": "North Island Naval Air Station-Halsey Field",
    "city": "San Diego",
    "country": "United States",
    "iata": "NZY",
    "icao": "KNZY"
  },
  {
    "name": "Biggs Army Air Field (Fort Bliss)",
    "city": "El Paso",
    "country": "United States",
    "iata": "BIF",
    "icao": "KBIF"
  },
  {
    "name": "Yuma MCAS/Yuma International Airport",
    "city": "Yuma",
    "country": "United States",
    "iata": "YUM",
    "icao": "KNYL"
  },
  {
    "name": "Cavern City Air Terminal",
    "city": "Carlsbad",
    "country": "United States",
    "iata": "CNM",
    "icao": "KCNM"
  },
  {
    "name": "Duluth International Airport",
    "city": "Duluth",
    "country": "United States",
    "iata": "DLH",
    "icao": "KDLH"
  },
  {
    "name": "Bethel Airport",
    "city": "Bethel",
    "country": "United States",
    "iata": "BET",
    "icao": "PABE"
  },
  {
    "name": "Bowman Field",
    "city": "Louisville",
    "country": "United States",
    "iata": "LOU",
    "icao": "KLOU"
  },
  {
    "name": "Sierra Vista Municipal Libby Army Air Field",
    "city": "Fort Huachuca",
    "country": "United States",
    "iata": "FHU",
    "icao": "KFHU"
  },
  {
    "name": "Lihue Airport",
    "city": "Lihue",
    "country": "United States",
    "iata": "LIH",
    "icao": "PHLI"
  },
  {
    "name": "Terre Haute International Hulman Field",
    "city": "Terre Haute",
    "country": "United States",
    "iata": "HUF",
    "icao": "KHUF"
  },
  {
    "name": "Havre City County Airport",
    "city": "Havre",
    "country": "United States",
    "iata": "HVR",
    "icao": "KHVR"
  },
  {
    "name": "Grant County International Airport",
    "city": "Grant County Airport",
    "country": "United States",
    "iata": "MWH",
    "icao": "KMWH"
  },
  {
    "name": "Edward F Knapp State Airport",
    "city": "Montpelier",
    "country": "United States",
    "iata": "MPV",
    "icao": "KMPV"
  },
  {
    "name": "San Nicolas Island Nolf Airport",
    "city": "San Nicolas Island",
    "country": "United States",
    "iata": "NONE",
    "icao": "KNSI"
  },
  {
    "name": "Richmond International Airport",
    "city": "Richmond",
    "country": "United States",
    "iata": "RIC",
    "icao": "KRIC"
  },
  {
    "name": "Shreveport Regional Airport",
    "city": "Shreveport",
    "country": "United States",
    "iata": "SHV",
    "icao": "KSHV"
  },
  {
    "name": "Merle K (Mudhole) Smith Airport",
    "city": "Cordova",
    "country": "United States",
    "iata": "CDV",
    "icao": "PACV"
  },
  {
    "name": "Norfolk International Airport",
    "city": "Norfolk",
    "country": "United States",
    "iata": "ORF",
    "icao": "KORF"
  },
  {
    "name": "Southeast Texas Regional Airport",
    "city": "Beaumont",
    "country": "United States",
    "iata": "BPT",
    "icao": "KBPT"
  },
  {
    "name": "Savannah Hilton Head International Airport",
    "city": "Savannah",
    "country": "United States",
    "iata": "SAV",
    "icao": "KSAV"
  },
  {
    "name": "Hill Air Force Base",
    "city": "Ogden",
    "country": "United States",
    "iata": "HIF",
    "icao": "KHIF"
  },
  {
    "name": "Nome Airport",
    "city": "Nome",
    "country": "United States",
    "iata": "OME",
    "icao": "PAOM"
  },
  {
    "name": "Scappoose Industrial Airpark",
    "city": "San Luis",
    "country": "United States",
    "iata": "NONE",
    "icao": "KSPB"
  },
  {
    "name": "St Petersburg Clearwater International Airport",
    "city": "St. Petersburg",
    "country": "United States",
    "iata": "PIE",
    "icao": "KPIE"
  },
  {
    "name": "Menominee Marinette Twin County Airport",
    "city": "Macon",
    "country": "United States",
    "iata": "MNM",
    "icao": "KMNM"
  },
  {
    "name": "Lone Star Executive Airport",
    "city": "Conroe",
    "country": "United States",
    "iata": "CXO",
    "icao": "KCXO"
  },
  {
    "name": "Deadhorse Airport",
    "city": "Deadhorse",
    "country": "United States",
    "iata": "SCC",
    "icao": "PASC"
  },
  {
    "name": "San Antonio International Airport",
    "city": "San Antonio",
    "country": "United States",
    "iata": "SAT",
    "icao": "KSAT"
  },
  {
    "name": "Greater Rochester International Airport",
    "city": "Rochester",
    "country": "United States",
    "iata": "ROC",
    "icao": "KROC"
  },
  {
    "name": "Patrick Air Force Base",
    "city": "Coco Beach",
    "country": "United States",
    "iata": "COF",
    "icao": "KCOF"
  },
  {
    "name": "Teterboro Airport",
    "city": "Teterboro",
    "country": "United States",
    "iata": "TEB",
    "icao": "KTEB"
  },
  {
    "name": "Ellsworth Air Force Base",
    "city": "Rapid City",
    "country": "United States",
    "iata": "RCA",
    "icao": "KRCA"
  },
  {
    "name": "Raleigh Durham International Airport",
    "city": "Raleigh-durham",
    "country": "United States",
    "iata": "RDU",
    "icao": "KRDU"
  },
  {
    "name": "James M Cox Dayton International Airport",
    "city": "Dayton",
    "country": "United States",
    "iata": "DAY",
    "icao": "KDAY"
  },
  {
    "name": "Kenai Municipal Airport",
    "city": "Kenai",
    "country": "United States",
    "iata": "ENA",
    "icao": "PAEN"
  },
  {
    "name": "Mc Alester Regional Airport",
    "city": "Mcalester",
    "country": "United States",
    "iata": "MLC",
    "icao": "KMLC"
  },
  {
    "name": "Niagara Falls International Airport",
    "city": "Niagara Falls",
    "country": "United States",
    "iata": "IAG",
    "icao": "KIAG"
  },
  {
    "name": "Coulter Field",
    "city": "Bryan",
    "country": "United States",
    "iata": "CFD",
    "icao": "KCFD"
  },
  {
    "name": "Wright Aaf (Fort Stewart)/Midcoast Regional Airport",
    "city": "Wright",
    "country": "United States",
    "iata": "NONE",
    "icao": "KLHW"
  },
  {
    "name": "Newport News Williamsburg International Airport",
    "city": "Newport News",
    "country": "United States",
    "iata": "PHF",
    "icao": "KPHF"
  },
  {
    "name": "Esler Regional Airport",
    "city": "Alexandria",
    "country": "United States",
    "iata": "ESF",
    "icao": "KESF"
  },
  {
    "name": "Altus Air Force Base",
    "city": "Altus",
    "country": "United States",
    "iata": "LTS",
    "icao": "KLTS"
  },
  {
    "name": "Tucson International Airport",
    "city": "Tucson",
    "country": "United States",
    "iata": "TUS",
    "icao": "KTUS"
  },
  {
    "name": "Minot Air Force Base",
    "city": "Minot",
    "country": "United States",
    "iata": "MIB",
    "icao": "KMIB"
  },
  {
    "name": "Beale Air Force Base",
    "city": "Marysville",
    "country": "United States",
    "iata": "BAB",
    "icao": "KBAB"
  },
  {
    "name": "Greater Kankakee Airport",
    "city": "Kankakee",
    "country": "United States",
    "iata": "IKK",
    "icao": "KIKK"
  },
  {
    "name": "Seymour Johnson Air Force Base",
    "city": "Goldsboro",
    "country": "United States",
    "iata": "GSB",
    "icao": "KGSB"
  },
  {
    "name": "Theodore Francis Green State Airport",
    "city": "Providence",
    "country": "United States",
    "iata": "PVD",
    "icao": "KPVD"
  },
  {
    "name": "Salisbury Ocean City Wicomico Regional Airport",
    "city": "Salisbury",
    "country": "United States",
    "iata": "SBY",
    "icao": "KSBY"
  },
  {
    "name": "Rancho Murieta Airport",
    "city": "Rancho Murieta",
    "country": "United States",
    "iata": "RIU",
    "icao": "KRIU"
  },
  {
    "name": "Bob Hope Airport",
    "city": "Burbank",
    "country": "United States",
    "iata": "BUR",
    "icao": "KBUR"
  },
  {
    "name": "Detroit Metropolitan Wayne County Airport",
    "city": "Detroit",
    "country": "United States",
    "iata": "DTW",
    "icao": "KDTW"
  },
  {
    "name": "Tampa International Airport",
    "city": "Tampa",
    "country": "United States",
    "iata": "TPA",
    "icao": "KTPA"
  },
  {
    "name": "Pembina Municipal Airport",
    "city": "Pembina",
    "country": "United States",
    "iata": "PMB",
    "icao": "KPMB"
  },
  {
    "name": "Polk Army Air Field",
    "city": "Fort Polk",
    "country": "United States",
    "iata": "POE",
    "icao": "KPOE"
  },
  {
    "name": "Eielson Air Force Base",
    "city": "Fairbanks",
    "country": "United States",
    "iata": "EIL",
    "icao": "PAEI"
  },
  {
    "name": "Range Regional Airport",
    "city": "Hibbing",
    "country": "United States",
    "iata": "HIB",
    "icao": "KHIB"
  },
  {
    "name": "Angelina County Airport",
    "city": "Lufkin",
    "country": "United States",
    "iata": "LFK",
    "icao": "KLFK"
  },
  {
    "name": "Midland International Airport",
    "city": "Midland",
    "country": "United States",
    "iata": "MAF",
    "icao": "KMAF"
  },
  {
    "name": "Austin Straubel International Airport",
    "city": "Green Bay",
    "country": "United States",
    "iata": "GRB",
    "icao": "KGRB"
  },
  {
    "name": "Ardmore Municipal Airport",
    "city": "Ardmore",
    "country": "United States",
    "iata": "ADM",
    "icao": "KADM"
  },
  {
    "name": "Mc Guire Air Force Base",
    "city": "Wrightstown",
    "country": "United States",
    "iata": "WRI",
    "icao": "KWRI"
  },
  {
    "name": "Cherry Point MCAS /Cunningham Field/",
    "city": "Cherry Point",
    "country": "United States",
    "iata": "NONE",
    "icao": "KNKT"
  },
  {
    "name": "Emanuel County Airport",
    "city": "Santa Barbara",
    "country": "United States",
    "iata": "SBO",
    "icao": "KSBO"
  },
  {
    "name": "Augusta Regional At Bush Field",
    "city": "Bush Field",
    "country": "United States",
    "iata": "AGS",
    "icao": "KAGS"
  },
  {
    "name": "Sloulin Field International Airport",
    "city": "Williston",
    "country": "United States",
    "iata": "ISN",
    "icao": "KISN"
  },
  {
    "name": "Bill & Hillary Clinton National Airport/Adams Field",
    "city": "Little Rock",
    "country": "United States",
    "iata": "LIT",
    "icao": "KLIT"
  },
  {
    "name": "Stewart International Airport",
    "city": "Newburgh",
    "country": "United States",
    "iata": "SWF",
    "icao": "KSWF"
  },
  {
    "name": "Baudette International Airport",
    "city": "Baudette",
    "country": "United States",
    "iata": "BDE",
    "icao": "KBDE"
  },
  {
    "name": "Sacramento Executive Airport",
    "city": "Sacramento",
    "country": "United States",
    "iata": "SAC",
    "icao": "KSAC"
  },
  {
    "name": "Homer Airport",
    "city": "Homer",
    "country": "United States",
    "iata": "HOM",
    "icao": "PAHO"
  },
  {
    "name": "Waynesville-St. Robert Regional Forney field",
    "city": "Fort Leonardwood",
    "country": "United States",
    "iata": "TBN",
    "icao": "KTBN"
  },
  {
    "name": "Dobbins Air Reserve Base",
    "city": "Marietta",
    "country": "United States",
    "iata": "MGE",
    "icao": "KMGE"
  },
  {
    "name": "Fairchild Air Force Base",
    "city": "Spokane",
    "country": "United States",
    "iata": "SKA",
    "icao": "KSKA"
  },
  {
    "name": "Roscommon County - Blodgett Memorial Airport",
    "city": "Houghton Lake",
    "country": "United States",
    "iata": "HTL",
    "icao": "KHTL"
  },
  {
    "name": "Tyndall Air Force Base",
    "city": "Panama City",
    "country": "United States",
    "iata": "PAM",
    "icao": "KPAM"
  },
  {
    "name": "Dallas Fort Worth International Airport",
    "city": "Dallas-Fort Worth",
    "country": "United States",
    "iata": "DFW",
    "icao": "KDFW"
  },
  {
    "name": "Melbourne International Airport",
    "city": "Melbourne",
    "country": "United States",
    "iata": "MLB",
    "icao": "KMLB"
  },
  {
    "name": "McChord Air Force Base",
    "city": "Tacoma",
    "country": "United States",
    "iata": "TCM",
    "icao": "KTCM"
  },
  {
    "name": "Austin Bergstrom International Airport",
    "city": "Austin",
    "country": "United States",
    "iata": "AUS",
    "icao": "KAUS"
  },
  {
    "name": "Rickenbacker International Airport",
    "city": "Columbus",
    "country": "United States",
    "iata": "LCK",
    "icao": "KLCK"
  },
  {
    "name": "Sawyer International Airport",
    "city": "Gwinn",
    "country": "United States",
    "iata": "MQT",
    "icao": "KSAW"
  },
  {
    "name": "McGhee Tyson Airport",
    "city": "Knoxville",
    "country": "United States",
    "iata": "TYS",
    "icao": "KTYS"
  },
  {
    "name": "Hood Army Air Field",
    "city": "Fort Hood",
    "country": "United States",
    "iata": "HLR",
    "icao": "KHLR"
  },
  {
    "name": "Lambert St Louis International Airport",
    "city": "St. Louis",
    "country": "United States",
    "iata": "STL",
    "icao": "KSTL"
  },
  {
    "name": "Millville Municipal Airport",
    "city": "Millville",
    "country": "United States",
    "iata": "MIV",
    "icao": "KMIV"
  },
  {
    "name": "Sheppard Air Force Base-Wichita Falls Municipal Airport",
    "city": "Wichita Falls",
    "country": "United States",
    "iata": "SPS",
    "icao": "KSPS"
  },
  {
    "name": "Cincinnati Municipal Airport Lunken Field",
    "city": "Cincinnati",
    "country": "United States",
    "iata": "LUK",
    "icao": "KLUK"
  },
  {
    "name": "Hartsfield Jackson Atlanta International Airport",
    "city": "Atlanta",
    "country": "United States",
    "iata": "ATL",
    "icao": "KATL"
  },
  {
    "name": "Castle Airport",
    "city": "Merced",
    "country": "United States",
    "iata": "MER",
    "icao": "KMER"
  },
  {
    "name": "Mc Clellan Airfield",
    "city": "Sacramento",
    "country": "United States",
    "iata": "MCC",
    "icao": "KMCC"
  },
  {
    "name": "Gerald R. Ford International Airport",
    "city": "Grand Rapids",
    "country": "United States",
    "iata": "GRR",
    "icao": "KGRR"
  },
  {
    "name": "Winkler County Airport",
    "city": "Wink",
    "country": "United States",
    "iata": "INK",
    "icao": "KINK"
  },
  {
    "name": "Fresno Yosemite International Airport",
    "city": "Fresno",
    "country": "United States",
    "iata": "FAT",
    "icao": "KFAT"
  },
  {
    "name": "Vero Beach Municipal Airport",
    "city": "Vero Beach",
    "country": "United States",
    "iata": "VRB",
    "icao": "KVRB"
  },
  {
    "name": "Imperial County Airport",
    "city": "Imperial",
    "country": "United States",
    "iata": "IPL",
    "icao": "KIPL"
  },
  {
    "name": "Nashville International Airport",
    "city": "Nashville",
    "country": "United States",
    "iata": "BNA",
    "icao": "KBNA"
  },
  {
    "name": "Laredo International Airport",
    "city": "Laredo",
    "country": "United States",
    "iata": "LRD",
    "icao": "KLRD"
  },
  {
    "name": "Elmendorf Air Force Base",
    "city": "Anchorage",
    "country": "United States",
    "iata": "EDF",
    "icao": "PAED"
  },
  {
    "name": "Ralph Wien Memorial Airport",
    "city": "Kotzebue",
    "country": "United States",
    "iata": "OTZ",
    "icao": "PAOT"
  },
  {
    "name": "Altoona Blair County Airport",
    "city": "Altoona",
    "country": "United States",
    "iata": "AOO",
    "icao": "KAOO"
  },
  {
    "name": "Dyess Air Force Base",
    "city": "Abilene",
    "country": "United States",
    "iata": "DYS",
    "icao": "KDYS"
  },
  {
    "name": "South Arkansas Regional At Goodwin Field",
    "city": "El Dorado",
    "country": "United States",
    "iata": "ELD",
    "icao": "KELD"
  },
  {
    "name": "La Guardia Airport",
    "city": "New York",
    "country": "United States",
    "iata": "LGA",
    "icao": "KLGA"
  },
  {
    "name": "Tallahassee Regional Airport",
    "city": "Tallahassee",
    "country": "United States",
    "iata": "TLH",
    "icao": "KTLH"
  },
  {
    "name": "Dupage Airport",
    "city": "West Chicago",
    "country": "United States",
    "iata": "DPA",
    "icao": "KDPA"
  },
  {
    "name": "Waco Regional Airport",
    "city": "Waco",
    "country": "United States",
    "iata": "ACT",
    "icao": "KACT"
  },
  {
    "name": "Augusta State Airport",
    "city": "Augusta",
    "country": "United States",
    "iata": "AUG",
    "icao": "KAUG"
  },
  {
    "name": "Hillsboro Municipal Airport",
    "city": "Hillsboro",
    "country": "United States",
    "iata": "INJ",
    "icao": "KINJ"
  },
  {
    "name": "Mc Kellar Sipes Regional Airport",
    "city": "Jackson",
    "country": "United States",
    "iata": "MKL",
    "icao": "KMKL"
  },
  {
    "name": "Molokai Airport",
    "city": "Molokai",
    "country": "United States",
    "iata": "MKK",
    "icao": "PHMK"
  },
  {
    "name": "Godman Army Air Field",
    "city": "Fort Knox",
    "country": "United States",
    "iata": "FTK",
    "icao": "KFTK"
  },
  {
    "name": "New River MCAS /H/ /Mccutcheon Fld/ Airport",
    "city": "Jacksonville",
    "country": "United States",
    "iata": "NONE",
    "icao": "KNCA"
  },
  {
    "name": "San Angelo Regional Mathis Field",
    "city": "San Angelo",
    "country": "United States",
    "iata": "SJT",
    "icao": "KSJT"
  },
  {
    "name": "Calexico International Airport",
    "city": "Calexico",
    "country": "United States",
    "iata": "CXL",
    "icao": "KCXL"
  },
  {
    "name": "Chico Municipal Airport",
    "city": "Chico",
    "country": "United States",
    "iata": "CIC",
    "icao": "KCIC"
  },
  {
    "name": "Burlington International Airport",
    "city": "Burlington",
    "country": "United States",
    "iata": "BTV",
    "icao": "KBTV"
  },
  {
    "name": "Jacksonville International Airport",
    "city": "Jacksonville",
    "country": "United States",
    "iata": "JAX",
    "icao": "KJAX"
  },
  {
    "name": "Durango La Plata County Airport",
    "city": "Durango",
    "country": "United States",
    "iata": "DRO",
    "icao": "KDRO"
  },
  {
    "name": "Washington Dulles International Airport",
    "city": "Washington",
    "country": "United States",
    "iata": "IAD",
    "icao": "KIAD"
  },
  {
    "name": "Easterwood Field",
    "city": "College Station",
    "country": "United States",
    "iata": "CLL",
    "icao": "KCLL"
  },
  {
    "name": "Felts Field",
    "city": "Spokane",
    "country": "United States",
    "iata": "SFF",
    "icao": "KSFF"
  },
  {
    "name": "General Mitchell International Airport",
    "city": "Milwaukee",
    "country": "United States",
    "iata": "MKE",
    "icao": "KMKE"
  },
  {
    "name": "Abilene Regional Airport",
    "city": "Abilene",
    "country": "United States",
    "iata": "ABI",
    "icao": "KABI"
  },
  {
    "name": "Columbia Regional Airport",
    "city": "Columbia",
    "country": "United States",
    "iata": "COU",
    "icao": "KCOU"
  },
  {
    "name": "Portland International Airport",
    "city": "Portland",
    "country": "United States",
    "iata": "PDX",
    "icao": "KPDX"
  },
  {
    "name": "Dade Collier Training and Transition Airport",
    "city": "Miami",
    "country": "United States",
    "iata": "TNT",
    "icao": "KTNT"
  },
  {
    "name": "Palm Beach International Airport",
    "city": "West Palm Beach",
    "country": "United States",
    "iata": "PBI",
    "icao": "KPBI"
  },
  {
    "name": "Fort Worth Meacham International Airport",
    "city": "Fort Worth",
    "country": "United States",
    "iata": "FTW",
    "icao": "KFTW"
  },
  {
    "name": "Ogdensburg International Airport",
    "city": "Ogdensburg",
    "country": "United States",
    "iata": "OGS",
    "icao": "KOGS"
  },
  {
    "name": "Boeing Field King County International Airport",
    "city": "Seattle",
    "country": "United States",
    "iata": "BFI",
    "icao": "KBFI"
  },
  {
    "name": "Lackland Air Force Base",
    "city": "San Antonio",
    "country": "United States",
    "iata": "SKF",
    "icao": "KSKF"
  },
  {
    "name": "Honolulu International Airport",
    "city": "Honolulu",
    "country": "United States",
    "iata": "HNL",
    "icao": "PHNL"
  },
  {
    "name": "Des Moines International Airport",
    "city": "Des Moines",
    "country": "United States",
    "iata": "DSM",
    "icao": "KDSM"
  },
  {
    "name": "Coastal Carolina Regional Airport",
    "city": "New Bern",
    "country": "United States",
    "iata": "EWN",
    "icao": "KEWN"
  },
  {
    "name": "San Diego International Airport",
    "city": "San Diego",
    "country": "United States",
    "iata": "SAN",
    "icao": "KSAN"
  },
  {
    "name": "Monroe Regional Airport",
    "city": "Monroe",
    "country": "United States",
    "iata": "MLU",
    "icao": "KMLU"
  },
  {
    "name": "Shaw Air Force Base",
    "city": "Sumter",
    "country": "United States",
    "iata": "SSC",
    "icao": "KSSC"
  },
  {
    "name": "Ontario International Airport",
    "city": "Ontario",
    "country": "United States",
    "iata": "ONT",
    "icao": "KONT"
  },
  {
    "name": "Majors Airport",
    "city": "Greenvile",
    "country": "United States",
    "iata": "GVT",
    "icao": "KGVT"
  },
  {
    "name": "Roswell International Air Center Airport",
    "city": "Roswell",
    "country": "United States",
    "iata": "ROW",
    "icao": "KROW"
  },
  {
    "name": "Coleman A. Young Municipal Airport",
    "city": "Detroit",
    "country": "United States",
    "iata": "DET",
    "icao": "KDET"
  },
  {
    "name": "Brownsville South Padre Island International Airport",
    "city": "Brownsville",
    "country": "United States",
    "iata": "BRO",
    "icao": "KBRO"
  },
  {
    "name": "Dothan Regional Airport",
    "city": "Dothan",
    "country": "United States",
    "iata": "DHN",
    "icao": "KDHN"
  },
  {
    "name": "Cape May County Airport",
    "city": "Wildwood",
    "country": "United States",
    "iata": "WWD",
    "icao": "KWWD"
  },
  {
    "name": "Selfridge Angb Airport",
    "city": "Mount Clemens",
    "country": "United States",
    "iata": "MTC",
    "icao": "KMTC"
  },
  {
    "name": "Four Corners Regional Airport",
    "city": "Farmington",
    "country": "United States",
    "iata": "FMN",
    "icao": "KFMN"
  },
  {
    "name": "Corpus Christi International Airport",
    "city": "Corpus Christi",
    "country": "United States",
    "iata": "CRP",
    "icao": "KCRP"
  },
  {
    "name": "Syracuse Hancock International Airport",
    "city": "Syracuse",
    "country": "United States",
    "iata": "SYR",
    "icao": "KSYR"
  },
  {
    "name": "Naval Air Station Key West/Boca Chica Field",
    "city": "Key West",
    "country": "United States",
    "iata": "NQX",
    "icao": "KNQX"
  },
  {
    "name": "Chicago Midway International Airport",
    "city": "Chicago",
    "country": "United States",
    "iata": "MDW",
    "icao": "KMDW"
  },
  {
    "name": "Norman Y. Mineta San Jose International Airport",
    "city": "San Jose",
    "country": "United States",
    "iata": "SJC",
    "icao": "KSJC"
  },
  {
    "name": "Lea County Regional Airport",
    "city": "Hobbs",
    "country": "United States",
    "iata": "HOB",
    "icao": "KHOB"
  },
  {
    "name": "Northeast Philadelphia Airport",
    "city": "Philadelphia",
    "country": "United States",
    "iata": "PNE",
    "icao": "KPNE"
  },
  {
    "name": "Denver International Airport",
    "city": "Denver",
    "country": "United States",
    "iata": "DEN",
    "icao": "KDEN"
  },
  {
    "name": "Philadelphia International Airport",
    "city": "Philadelphia",
    "country": "United States",
    "iata": "PHL",
    "icao": "KPHL"
  },
  {
    "name": "Sioux Gateway Col. Bud Day Field",
    "city": "Sioux City",
    "country": "United States",
    "iata": "SUX",
    "icao": "KSUX"
  },
  {
    "name": "Middle Georgia Regional Airport",
    "city": "Macon",
    "country": "United States",
    "iata": "MCN",
    "icao": "KMCN"
  },
  {
    "name": "Truth Or Consequences Municipal Airport",
    "city": "Truth Or Consequences",
    "country": "United States",
    "iata": "TCS",
    "icao": "KTCS"
  },
  {
    "name": "Palmdale Regional/USAF Plant 42 Airport",
    "city": "Palmdale",
    "country": "United States",
    "iata": "PMD",
    "icao": "KPMD"
  },
  {
    "name": "Randolph Air Force Base",
    "city": "San Antonio",
    "country": "United States",
    "iata": "RND",
    "icao": "KRND"
  },
  {
    "name": "El Centro Naf Airport",
    "city": "El Centro",
    "country": "United States",
    "iata": "NJK",
    "icao": "KNJK"
  },
  {
    "name": "Port Columbus International Airport",
    "city": "Columbus",
    "country": "United States",
    "iata": "CMH",
    "icao": "KCMH"
  },
  {
    "name": "Drake Field",
    "city": "Fayetteville",
    "country": "United States",
    "iata": "FYV",
    "icao": "KFYV"
  },
  {
    "name": "Henry Post Army Air Field (Fort Sill)",
    "city": "Fort Sill",
    "country": "United States",
    "iata": "FSI",
    "icao": "KFSI"
  },
  {
    "name": "Princeton Municipal Airport",
    "city": "Princeton",
    "country": "United States",
    "iata": "PNM",
    "icao": "KPNM"
  },
  {
    "name": "Wright-Patterson Air Force Base",
    "city": "Dayton",
    "country": "United States",
    "iata": "FFO",
    "icao": "KFFO"
  },
  {
    "name": "Edward G. Pitka Sr Airport",
    "city": "Galena",
    "country": "United States",
    "iata": "GAL",
    "icao": "PAGA"
  },
  {
    "name": "Chandler Municipal Airport",
    "city": "Chandler",
    "country": "United States",
    "iata": "NONE",
    "icao": "KCHD"
  },
  {
    "name": "Mineral Wells Airport",
    "city": "Mineral Wells",
    "country": "United States",
    "iata": "MWL",
    "icao": "KMWL"
  },
  {
    "name": "Mc Connell Air Force Base",
    "city": "Wichita",
    "country": "United States",
    "iata": "IAB",
    "icao": "KIAB"
  },
  {
    "name": "New Orleans NAS JRB/Alvin Callender Field",
    "city": "New Orleans",
    "country": "United States",
    "iata": "NBG",
    "icao": "KNBG"
  },
  {
    "name": "Beaufort County Airport",
    "city": "Beaufort",
    "country": "United States",
    "iata": "BFT",
    "icao": "KARW"
  },
  {
    "name": "Texarkana Regional Webb Field",
    "city": "Texarkana",
    "country": "United States",
    "iata": "TXK",
    "icao": "KTXK"
  },
  {
    "name": "Plattsburgh International Airport",
    "city": "Plattsburgh",
    "country": "United States",
    "iata": "PBG",
    "icao": "KPBG"
  },
  {
    "name": "Phillips Army Air Field",
    "city": "Aberdeen",
    "country": "United States",
    "iata": "APG",
    "icao": "KAPG"
  },
  {
    "name": "Tucumcari Municipal Airport",
    "city": "Tucumcari",
    "country": "United States",
    "iata": "TCC",
    "icao": "KTCC"
  },
  {
    "name": "Ted Stevens Anchorage International Airport",
    "city": "Anchorage",
    "country": "United States",
    "iata": "ANC",
    "icao": "PANC"
  },
  {
    "name": "Robert Gray  Army Air Field Airport",
    "city": "Killeen",
    "country": "United States",
    "iata": "GRK",
    "icao": "KGRK"
  },
  {
    "name": "Black Rock Airport",
    "city": "Zuni Pueblo",
    "country": "United States",
    "iata": "ZUN",
    "icao": "KZUN"
  },
  {
    "name": "Bellingham International Airport",
    "city": "Bellingham",
    "country": "United States",
    "iata": "BLI",
    "icao": "KBLI"
  },
  {
    "name": "Millington Regional Jetport Airport",
    "city": "Millington",
    "country": "United States",
    "iata": "NQA",
    "icao": "KNQA"
  },
  {
    "name": "Elkins-Randolph Co-Jennings Randolph Field",
    "city": "Elkins",
    "country": "United States",
    "iata": "EKN",
    "icao": "KEKN"
  },
  {
    "name": "Hartford Brainard Airport",
    "city": "Hartford",
    "country": "United States",
    "iata": "HFD",
    "icao": "KHFD"
  },
  {
    "name": "North Central State Airport",
    "city": "Smithfield",
    "country": "United States",
    "iata": "SFZ",
    "icao": "KSFZ"
  },
  {
    "name": "Mobile Regional Airport",
    "city": "Mobile",
    "country": "United States",
    "iata": "MOB",
    "icao": "KMOB"
  },
  {
    "name": "Moffett Federal Airfield",
    "city": "Mountain View",
    "country": "United States",
    "iata": "NUQ",
    "icao": "KNUQ"
  },
  {
    "name": "Santa Fe Municipal Airport",
    "city": "Santa Fe",
    "country": "United States",
    "iata": "SAF",
    "icao": "KSAF"
  },
  {
    "name": "Barking Sands Airport",
    "city": "Barking Sands",
    "country": "United States",
    "iata": "BKH",
    "icao": "PHBK"
  },
  {
    "name": "Beauregard Regional Airport",
    "city": "Deridder",
    "country": "United States",
    "iata": "DRI",
    "icao": "KDRI"
  },
  {
    "name": "Bradshaw Army Airfield",
    "city": "Bradshaw Field",
    "country": "United States",
    "iata": "BSF",
    "icao": "PHSF"
  },
  {
    "name": "Nogales International Airport",
    "city": "Nogales",
    "country": "United States",
    "iata": "OLS",
    "icao": "KOLS"
  },
  {
    "name": "Mac Dill Air Force Base",
    "city": "Tampa",
    "country": "United States",
    "iata": "MCF",
    "icao": "KMCF"
  },
  {
    "name": "Scott AFB/Midamerica Airport",
    "city": "Belleville",
    "country": "United States",
    "iata": "BLV",
    "icao": "KBLV"
  },
  {
    "name": "Opa-locka Executive Airport",
    "city": "Miami",
    "country": "United States",
    "iata": "OPF",
    "icao": "KOPF"
  },
  {
    "name": "Del Rio International Airport",
    "city": "Del Rio",
    "country": "United States",
    "iata": "DRT",
    "icao": "KDRT"
  },
  {
    "name": "Southwest Florida International Airport",
    "city": "Fort Myers",
    "country": "United States",
    "iata": "RSW",
    "icao": "KRSW"
  },
  {
    "name": "King Salmon Airport",
    "city": "King Salmon",
    "country": "United States",
    "iata": "AKN",
    "icao": "PAKN"
  },
  {
    "name": "Muir Army Air Field (Fort Indiantown Gap) Airport",
    "city": "Muir",
    "country": "United States",
    "iata": "MUI",
    "icao": "KMUI"
  },
  {
    "name": "Kapalua Airport",
    "city": "Lahania-kapalua",
    "country": "United States",
    "iata": "JHM",
    "icao": "PHJH"
  },
  {
    "name": "John F Kennedy International Airport",
    "city": "New York",
    "country": "United States",
    "iata": "JFK",
    "icao": "KJFK"
  },
  {
    "name": "Homestead ARB Airport",
    "city": "Homestead",
    "country": "United States",
    "iata": "HST",
    "icao": "KHST"
  },
  {
    "name": "Riverside Municipal Airport",
    "city": "Riverside",
    "country": "United States",
    "iata": "RAL",
    "icao": "KRAL"
  },
  {
    "name": "Sherman Army Air Field",
    "city": "Fort Leavenworth",
    "country": "United States",
    "iata": "FLV",
    "icao": "KFLV"
  },
  {
    "name": "Wallops Flight Facility Airport",
    "city": "Wallops Island",
    "country": "United States",
    "iata": "WAL",
    "icao": "KWAL"
  },
  {
    "name": "Holloman Air Force Base",
    "city": "Alamogordo",
    "country": "United States",
    "iata": "HMN",
    "icao": "KHMN"
  },
  {
    "name": "Willow Grove Naval Air Station/Joint Reserve Base",
    "city": "Willow Grove",
    "country": "United States",
    "iata": "NXX",
    "icao": "KNXX"
  },
  {
    "name": "Cheyenne Regional Jerry Olson Field",
    "city": "Cheyenne",
    "country": "United States",
    "iata": "CYS",
    "icao": "KCYS"
  },
  {
    "name": "Stockton Metropolitan Airport",
    "city": "Stockton",
    "country": "United States",
    "iata": "SCK",
    "icao": "KSCK"
  },
  {
    "name": "Charleston Air Force Base-International Airport",
    "city": "Charleston",
    "country": "United States",
    "iata": "CHS",
    "icao": "KCHS"
  },
  {
    "name": "Reno Tahoe International Airport",
    "city": "Reno",
    "country": "United States",
    "iata": "RNO",
    "icao": "KRNO"
  },
  {
    "name": "Ketchikan International Airport",
    "city": "Ketchikan",
    "country": "United States",
    "iata": "KTN",
    "icao": "PAKT"
  },
  {
    "name": "Willow Run Airport",
    "city": "Detroit",
    "country": "United States",
    "iata": "YIP",
    "icao": "KYIP"
  },
  {
    "name": "Vandenberg Air Force Base",
    "city": "Lompoc",
    "country": "United States",
    "iata": "VBG",
    "icao": "KVBG"
  },
  {
    "name": "Birmingham-Shuttlesworth International Airport",
    "city": "Birmingham",
    "country": "United States",
    "iata": "BHM",
    "icao": "KBHM"
  },
  {
    "name": "Lakehurst Maxfield Field Airport",
    "city": "Lakehurst",
    "country": "United States",
    "iata": "NEL",
    "icao": "KNEL"
  },
  {
    "name": "Nellis Air Force Base",
    "city": "Las Vegas",
    "country": "United States",
    "iata": "LSV",
    "icao": "KLSV"
  },
  {
    "name": "March ARB Airport",
    "city": "Riverside",
    "country": "United States",
    "iata": "RIV",
    "icao": "KRIV"
  },
  {
    "name": "Modesto City Co-Harry Sham Field",
    "city": "Modesto",
    "country": "United States",
    "iata": "MOD",
    "icao": "KMOD"
  },
  {
    "name": "Sacramento International Airport",
    "city": "Sacramento",
    "country": "United States",
    "iata": "SMF",
    "icao": "KSMF"
  },
  {
    "name": "Waukegan National Airport",
    "city": "Chicago",
    "country": "United States",
    "iata": "UGN",
    "icao": "KUGN"
  },
  {
    "name": "City of Colorado Springs Municipal Airport",
    "city": "Colorado Springs",
    "country": "United States",
    "iata": "COS",
    "icao": "KCOS"
  },
  {
    "name": "Buffalo Niagara International Airport",
    "city": "Buffalo",
    "country": "United States",
    "iata": "BUF",
    "icao": "KBUF"
  },
  {
    "name": "Griffing Sandusky Airport",
    "city": "Sandusky",
    "country": "United States",
    "iata": "SKY",
    "icao": "KSKY"
  },
  {
    "name": "Snohomish County (Paine Field) Airport",
    "city": "Everett",
    "country": "United States",
    "iata": "PAE",
    "icao": "KPAE"
  },
  {
    "name": "Mountain Home Air Force Base",
    "city": "Mountain Home",
    "country": "United States",
    "iata": "MUO",
    "icao": "KMUO"
  },
  {
    "name": "Cedar City Regional Airport",
    "city": "Cedar City",
    "country": "United States",
    "iata": "CDC",
    "icao": "KCDC"
  },
  {
    "name": "Bradley International Airport",
    "city": "Windsor Locks",
    "country": "United States",
    "iata": "BDL",
    "icao": "KBDL"
  },
  {
    "name": "Mc Allen Miller International Airport",
    "city": "Mcallen",
    "country": "United States",
    "iata": "MFE",
    "icao": "KMFE"
  },
  {
    "name": "Norfolk Ns (Chambers Fld) Airport",
    "city": "Norfolk",
    "country": "United States",
    "iata": "NGU",
    "icao": "KNGU"
  },
  {
    "name": "Westover ARB/Metropolitan Airport",
    "city": "Chicopee Falls",
    "country": "United States",
    "iata": "CEF",
    "icao": "KCEF"
  },
  {
    "name": "Lubbock Preston Smith International Airport",
    "city": "Lubbock",
    "country": "United States",
    "iata": "LBB",
    "icao": "KLBB"
  },
  {
    "name": "Chicago O'Hare International Airport",
    "city": "Chicago",
    "country": "United States",
    "iata": "ORD",
    "icao": "KORD"
  },
  {
    "name": "Boca Raton Airport",
    "city": "Boca Raton",
    "country": "United States",
    "iata": "BCT",
    "icao": "KBCT"
  },
  {
    "name": "Fairbanks International Airport",
    "city": "Fairbanks",
    "country": "United States",
    "iata": "FAI",
    "icao": "PAFA"
  },
  {
    "name": "Quantico MCAF /Turner field",
    "city": "Quantico",
    "country": "United States",
    "iata": "NYG",
    "icao": "KNYG"
  },
  {
    "name": "Cannon Air Force Base",
    "city": "Clovis",
    "country": "United States",
    "iata": "CVS",
    "icao": "KCVS"
  },
  {
    "name": "Kaneohe Bay MCAS (Marion E. Carl Field) Airport",
    "city": "Kaneohe Bay",
    "country": "United States",
    "iata": "NGF",
    "icao": "PHNG"
  },
  {
    "name": "Offutt Air Force Base",
    "city": "Omaha",
    "country": "United States",
    "iata": "OFF",
    "icao": "KOFF"
  },
  {
    "name": "Gulkana Airport",
    "city": "Gulkana",
    "country": "United States",
    "iata": "GKN",
    "icao": "PAGK"
  },
  {
    "name": "Watertown International Airport",
    "city": "Watertown",
    "country": "United States",
    "iata": "ART",
    "icao": "KART"
  },
  {
    "name": "Palm Springs International Airport",
    "city": "Palm Springs",
    "country": "United States",
    "iata": "PSP",
    "icao": "KPSP"
  },
  {
    "name": "Rick Husband Amarillo International Airport",
    "city": "Amarillo",
    "country": "United States",
    "iata": "AMA",
    "icao": "KAMA"
  },
  {
    "name": "Fort Dodge Regional Airport",
    "city": "Fort Dodge",
    "country": "United States",
    "iata": "FOD",
    "icao": "KFOD"
  },
  {
    "name": "Barksdale Air Force Base",
    "city": "Shreveport",
    "country": "United States",
    "iata": "BAD",
    "icao": "KBAD"
  },
  {
    "name": "Topeka Regional Airport - Forbes Field",
    "city": "Topeka",
    "country": "United States",
    "iata": "FOE",
    "icao": "KFOE"
  },
  {
    "name": "Cotulla-La Salle County Airport",
    "city": "Cotulla",
    "country": "United States",
    "iata": "COT",
    "icao": "KCOT"
  },
  {
    "name": "Wilmington International Airport",
    "city": "Wilmington",
    "country": "United States",
    "iata": "ILM",
    "icao": "KILM"
  },
  {
    "name": "Baton Rouge Metropolitan, Ryan Field",
    "city": "Baton Rouge",
    "country": "United States",
    "iata": "BTR",
    "icao": null
  },
  {
    "name": "Tyler Pounds Regional Airport",
    "city": "Tyler",
    "country": "United States",
    "iata": "TYR",
    "icao": "KTYR"
  },
  {
    "name": "Baltimore/Washington International Thurgood Marshall Airport",
    "city": "Baltimore",
    "country": "United States",
    "iata": "BWI",
    "icao": "KBWI"
  },
  {
    "name": "Hobart Regional Airport",
    "city": "Hobart",
    "country": "United States",
    "iata": "HBR",
    "icao": "KHBR"
  },
  {
    "name": "Lanai Airport",
    "city": "Lanai",
    "country": "United States",
    "iata": "LNY",
    "icao": "PHNY"
  },
  {
    "name": "Alexandria International Airport",
    "city": "Alexandria",
    "country": "United States",
    "iata": "AEX",
    "icao": "KAEX"
  },
  {
    "name": "Condron Army Air Field",
    "city": "White Sands",
    "country": "United States",
    "iata": "WSD",
    "icao": "KWSD"
  },
  {
    "name": "Cold Bay Airport",
    "city": "Cold Bay",
    "country": "United States",
    "iata": "CDB",
    "icao": "PACD"
  },
  {
    "name": "Tulsa International Airport",
    "city": "Tulsa",
    "country": "United States",
    "iata": "TUL",
    "icao": "KTUL"
  },
  {
    "name": "Sitka Rocky Gutierrez Airport",
    "city": "Sitka",
    "country": "United States",
    "iata": "SIT",
    "icao": "PASI"
  },
  {
    "name": "Long Island Mac Arthur Airport",
    "city": "Islip",
    "country": "United States",
    "iata": "ISP",
    "icao": "KISP"
  },
  {
    "name": "Minneapolis-St Paul International/Wold-Chamberlain Airport",
    "city": "Minneapolis",
    "country": "United States",
    "iata": "MSP",
    "icao": "KMSP"
  },
  {
    "name": "New Castle Airport",
    "city": "Wilmington",
    "country": "United States",
    "iata": "ILG",
    "icao": "KILG"
  },
  {
    "name": "Unalaska Airport",
    "city": "Unalaska",
    "country": "United States",
    "iata": "DUT",
    "icao": "PADU"
  },
  {
    "name": "Louis Armstrong New Orleans International Airport",
    "city": "New Orleans",
    "country": "United States",
    "iata": "MSY",
    "icao": "KMSY"
  },
  {
    "name": "Portland International Jetport Airport",
    "city": "Portland",
    "country": "United States",
    "iata": "PWM",
    "icao": "KPWM"
  },
  {
    "name": "Will Rogers World Airport",
    "city": "Oklahoma City",
    "country": "United States",
    "iata": "OKC",
    "icao": "KOKC"
  },
  {
    "name": "Albany International Airport",
    "city": "Albany",
    "country": "United States",
    "iata": "ALB",
    "icao": "KALB"
  },
  {
    "name": "Valdez Pioneer Field",
    "city": "Valdez",
    "country": "United States",
    "iata": "VDZ",
    "icao": "PAVD"
  },
  {
    "name": "Langley Air Force Base",
    "city": "Hampton",
    "country": "United States",
    "iata": "LFI",
    "icao": "KLFI"
  },
  {
    "name": "John Wayne Airport-Orange County Airport",
    "city": "Santa Ana",
    "country": "United States",
    "iata": "SNA",
    "icao": "KSNA"
  },
  {
    "name": "Columbus Air Force Base",
    "city": "Colombus",
    "country": "United States",
    "iata": "CBM",
    "icao": "KCBM"
  },
  {
    "name": "Kendall-Tamiami Executive Airport",
    "city": "Kendall-tamiami",
    "country": "United States",
    "iata": "TMB",
    "icao": "KTMB"
  },
  {
    "name": "Oceana NAS",
    "city": "Oceana",
    "country": "United States",
    "iata": "NTU",
    "icao": "KNTU"
  },
  {
    "name": "Grissom Air Reserve Base",
    "city": "Peru",
    "country": "United States",
    "iata": "GUS",
    "icao": "KGUS"
  },
  {
    "name": "Casper-Natrona County International Airport",
    "city": "Casper",
    "country": "United States",
    "iata": "CPR",
    "icao": "KCPR"
  },
  {
    "name": "Destin-Ft Walton Beach Airport",
    "city": "Valparaiso",
    "country": "United States",
    "iata": "VPS",
    "icao": "KVPS"
  },
  {
    "name": "Craig Field",
    "city": "Selma",
    "country": "United States",
    "iata": "SEM",
    "icao": "KSEM"
  },
  {
    "name": "Key West International Airport",
    "city": "Key West",
    "country": "United States",
    "iata": "EYW",
    "icao": "KEYW"
  },
  {
    "name": "Charlotte Douglas International Airport",
    "city": "Charlotte",
    "country": "United States",
    "iata": "CLT",
    "icao": "KCLT"
  },
  {
    "name": "McCarran International Airport",
    "city": "Las Vegas",
    "country": "United States",
    "iata": "LAS",
    "icao": "KLAS"
  },
  {
    "name": "Orlando International Airport",
    "city": "Orlando",
    "country": "United States",
    "iata": "MCO",
    "icao": "KMCO"
  },
  {
    "name": "Florence Regional Airport",
    "city": "Florence",
    "country": "United States",
    "iata": "FLO",
    "icao": "KFLO"
  },
  {
    "name": "Great Falls International Airport",
    "city": "Great Falls",
    "country": "United States",
    "iata": "GTF",
    "icao": "KGTF"
  },
  {
    "name": "Youngstown Warren Regional Airport",
    "city": "Youngstown",
    "country": "United States",
    "iata": "YNG",
    "icao": "KYNG"
  },
  {
    "name": "Ladd AAF Airfield",
    "city": "Fort Wainwright",
    "country": "United States",
    "iata": "FBK",
    "icao": "PAFB"
  },
  {
    "name": "Mc Minnville Municipal Airport",
    "city": "Mackminnville",
    "country": "United States",
    "iata": "MMV",
    "icao": "KMMV"
  },
  {
    "name": "Robins Air Force Base",
    "city": "Macon",
    "country": "United States",
    "iata": "WRB",
    "icao": "KWRB"
  },
  {
    "name": "Suvarnabhumi Airport",
    "city": "Bangkok",
    "country": "Thailand",
    "iata": "BKK",
    "icao": "VTBS"
  },
  {
    "name": "Naha Airport",
    "city": "Naha",
    "country": "Indonesia",
    "iata": "NAH",
    "icao": "WAMH"
  },
  {
    "name": "Andi Jemma Airport",
    "city": "Masamba",
    "country": "Indonesia",
    "iata": "NONE",
    "icao": "WAWM"
  },
  {
    "name": "Soroako Airport",
    "city": "Soroako",
    "country": "Indonesia",
    "iata": "NONE",
    "icao": "WAWS"
  },
  {
    "name": "Pongtiku Airport",
    "city": "Makale",
    "country": "Indonesia",
    "iata": "TTR",
    "icao": "WAWT"
  },
  {
    "name": "Wolter Monginsidi Airport",
    "city": "Kendari",
    "country": "Indonesia",
    "iata": "KDI",
    "icao": "WAWW"
  },
  {
    "name": "Maimun Saleh Airport",
    "city": "Sabang",
    "country": "Indonesia",
    "iata": "SBG",
    "icao": "WITB"
  },
  {
    "name": "Cibeureum Airport",
    "city": "Tasikmalaya",
    "country": "Indonesia",
    "iata": "NONE",
    "icao": "WICM"
  },
  {
    "name": "Iswahyudi Airport",
    "city": "Madiun",
    "country": "Indonesia",
    "iata": "NONE",
    "icao": "WARI"
  },
  {
    "name": "Abdul Rachman Saleh Airport",
    "city": "Malang",
    "country": "Indonesia",
    "iata": "MLG",
    "icao": "WARA"
  },
  {
    "name": "Budiarto Airport",
    "city": "Tangerang",
    "country": "Indonesia",
    "iata": "NONE",
    "icao": "WICB"
  },
  {
    "name": "Husein Sastranegara International Airport",
    "city": "Bandung",
    "country": "Indonesia",
    "iata": "BDO",
    "icao": "WICC"
  },
  {
    "name": "Penggung Airport",
    "city": "Cirebon",
    "country": "Indonesia",
    "iata": "CBN",
    "icao": "WICD"
  },
  {
    "name": "Adi Sutjipto International Airport",
    "city": "Yogyakarta",
    "country": "Indonesia",
    "iata": "JOG",
    "icao": "WARJ"
  },
  {
    "name": "Tunggul Wulung Airport",
    "city": "Cilacap",
    "country": "Indonesia",
    "iata": "CXP",
    "icao": "WIHL"
  },
  {
    "name": "Pondok Cabe Air Base",
    "city": "Jakarta",
    "country": "Indonesia",
    "iata": "PCB",
    "icao": "WIHP"
  },
  {
    "name": "Achmad Yani Airport",
    "city": "Semarang",
    "country": "Indonesia",
    "iata": "SRG",
    "icao": "WARS"
  },
  {
    "name": "Hang Nadim International Airport",
    "city": "Batam",
    "country": "Indonesia",
    "iata": "BTH",
    "icao": "WIDD"
  },
  {
    "name": "Buluh Tumbang (H A S Hanandjoeddin) Airport",
    "city": "Tanjung Pandan",
    "country": "Indonesia",
    "iata": "TJQ",
    "icao": "WIOD"
  },
  {
    "name": "Pangkal Pinang (Depati Amir) Airport",
    "city": "Pangkal Pinang",
    "country": "Indonesia",
    "iata": "PGK",
    "icao": "WIPK"
  },
  {
    "name": "Raja Haji Fisabilillah International Airport",
    "city": "Tanjung Pinang",
    "country": "Indonesia",
    "iata": "TNJ",
    "icao": "WIDN"
  },
  {
    "name": "Dabo Airport",
    "city": "Singkep",
    "country": "Indonesia",
    "iata": "SIQ",
    "icao": "WIDS"
  },
  {
    "name": "Syamsudin Noor Airport",
    "city": "Banjarmasin",
    "country": "Indonesia",
    "iata": "BDJ",
    "icao": "WAOO"
  },
  {
    "name": "Batu Licin Airport",
    "city": "Batu Licin",
    "country": "Indonesia",
    "iata": "NONE",
    "icao": "WAOC"
  },
  {
    "name": "Iskandar Airport",
    "city": "Pangkalan Bun",
    "country": "Indonesia",
    "iata": "PKN",
    "icao": "WAOI"
  },
  {
    "name": "Tjilik Riwut Airport",
    "city": "Palangkaraya",
    "country": "Indonesia",
    "iata": "PKY",
    "icao": "WAOP"
  },
  {
    "name": "Maumere(Wai Oti) Airport",
    "city": "Maumere",
    "country": "Indonesia",
    "iata": "MOF",
    "icao": "WATC"
  },
  {
    "name": "Ende (H Hasan Aroeboesman) Airport",
    "city": "Ende",
    "country": "Indonesia",
    "iata": "ENE",
    "icao": "WATE"
  },
  {
    "name": "Frans Sales Lega Airport",
    "city": "Ruteng",
    "country": "Indonesia",
    "iata": "RTG",
    "icao": "WATG"
  },
  {
    "name": "El Tari Airport",
    "city": "Kupang",
    "country": "Indonesia",
    "iata": "KOE",
    "icao": "WATT"
  },
  {
    "name": "Komodo (Mutiara II) Airport",
    "city": "Labuhan Bajo",
    "country": "Indonesia",
    "iata": "LBJ",
    "icao": "WATO"
  },
  {
    "name": "Sultan Aji Muhamad Sulaiman Airport",
    "city": "Balikpapan",
    "country": "Indonesia",
    "iata": "BPN",
    "icao": "WALL"
  },
  {
    "name": "Juwata Airport",
    "city": "Taraken",
    "country": "Indonesia",
    "iata": "TRK",
    "icao": "WALR"
  },
  {
    "name": "Temindung Airport",
    "city": "Samarinda",
    "country": "Indonesia",
    "iata": "SRI",
    "icao": "WALS"
  },
  {
    "name": "Tanjung Santan Airport",
    "city": "Tanjung Santan",
    "country": "Indonesia",
    "iata": "NONE",
    "icao": "WALT"
  },
  {
    "name": "Selaparang Airport",
    "city": "Mataram",
    "country": "Indonesia",
    "iata": "AMI",
    "icao": "WADA"
  },
  {
    "name": "Muhammad Salahuddin Airport",
    "city": "Bima",
    "country": "Indonesia",
    "iata": "BMU",
    "icao": "WADB"
  },
  {
    "name": "Waingapu Airport",
    "city": "Waingapu",
    "country": "Indonesia",
    "iata": "WGP",
    "icao": "WADW"
  },
  {
    "name": "Juanda International Airport",
    "city": "Surabaya",
    "country": "Indonesia",
    "iata": "SUB",
    "icao": "WARR"
  },
  {
    "name": "Adi Sumarmo Wiryokusumo Airport",
    "city": "Solo City",
    "country": "Indonesia",
    "iata": "SOC",
    "icao": "WARQ"
  },
  {
    "name": "Incheon International Airport",
    "city": "Seoul",
    "country": "South Korea",
    "iata": "ICN",
    "icao": "RKSI"
  },
  {
    "name": "Chiang Mai International Airport",
    "city": "Chiang Mai",
    "country": "Thailand",
    "iata": "CNX",
    "icao": "VTCC"
  },
  {
    "name": "Chiang Rai International Airport",
    "city": "Chiang Rai",
    "country": "Thailand",
    "iata": "CEI",
    "icao": "VTCT"
  },
  {
    "name": "Nakhon Si Thammarat Airport",
    "city": "Nakhon Si Thammarat",
    "country": "Thailand",
    "iata": "NST",
    "icao": "VTSF"
  },
  {
    "name": "Nakhon Ratchasima Airport",
    "city": "Nakhon Ratchasima",
    "country": "Thailand",
    "iata": "NAK",
    "icao": "VTUQ"
  },
  {
    "name": "Nakhon Phanom Airport",
    "city": "Nakhon Phanom",
    "country": "Thailand",
    "iata": "KOP",
    "icao": "VTUW"
  },
  {
    "name": "Ubon Ratchathani Airport",
    "city": "Ubon Ratchathani",
    "country": "Thailand",
    "iata": "UBP",
    "icao": "VTUU"
  },
  {
    "name": "Khon Kaen Airport",
    "city": "Khon Kaen",
    "country": "Thailand",
    "iata": "KKC",
    "icao": "VTUK"
  },
  {
    "name": "Sukhothai Airport",
    "city": "Sukhothai",
    "country": "Thailand",
    "iata": "THS",
    "icao": "VTPO"
  },
  {
    "name": "Ngurah Rai (Bali) International Airport",
    "city": "Denpasar",
    "country": "Indonesia",
    "iata": "DPS",
    "icao": "WADD"
  },
  {
    "name": "Eleftherios Venizelos International Airport",
    "city": "Athens",
    "country": "Greece",
    "iata": "ATH",
    "icao": "LGAV"
  },
  {
    "name": "Chubu Centrair International Airport",
    "city": "Nagoya",
    "country": "Japan",
    "iata": "NGO",
    "icao": "RJGG"
  },
  {
    "name": "Kobe Airport",
    "city": "Kobe",
    "country": "Japan",
    "iata": "UKB",
    "icao": "RJBE"
  },
  {
    "name": "Pullman Moscow Regional Airport",
    "city": "Pullman",
    "country": "United States",
    "iata": "PUW",
    "icao": "KPUW"
  },
  {
    "name": "Lewiston Nez Perce County Airport",
    "city": "Lewiston",
    "country": "United States",
    "iata": "LWS",
    "icao": "KLWS"
  },
  {
    "name": "Elmira Corning Regional Airport",
    "city": "Elmira",
    "country": "United States",
    "iata": "ELM",
    "icao": "KELM"
  },
  {
    "name": "Ithaca Tompkins Regional Airport",
    "city": "Ithaca",
    "country": "United States",
    "iata": "ITH",
    "icao": "KITH"
  },
  {
    "name": "Monterey Peninsula Airport",
    "city": "Monterey",
    "country": "United States",
    "iata": "MRY",
    "icao": "KMRY"
  },
  {
    "name": "Santa Barbara Municipal Airport",
    "city": "Santa Barbara",
    "country": "United States",
    "iata": "SBA",
    "icao": "KSBA"
  },
  {
    "name": "Daytona Beach International Airport",
    "city": "Daytona Beach",
    "country": "United States",
    "iata": "DAB",
    "icao": "KDAB"
  },
  {
    "name": "Liepāja International Airport",
    "city": "Liepaja",
    "country": "Latvia",
    "iata": "LPX",
    "icao": "EVLA"
  },
  {
    "name": "Riga International Airport",
    "city": "Riga",
    "country": "Latvia",
    "iata": "RIX",
    "icao": "EVRA"
  },
  {
    "name": "Šiauliai International Airport",
    "city": "Siauliai",
    "country": "Lithuania",
    "iata": "SQQ",
    "icao": "EYSA"
  },
  {
    "name": "Barysiai Airport",
    "city": "Barysiai",
    "country": "Lithuania",
    "iata": "HLJ",
    "icao": "EYSB"
  },
  {
    "name": "Kaunas International Airport",
    "city": "Kaunas",
    "country": "Lithuania",
    "iata": "KUN",
    "icao": "EYKA"
  },
  {
    "name": "S. Darius and S. Girėnas Airport",
    "city": "Kaunas",
    "country": "Lithuania",
    "iata": "NONE",
    "icao": "EYKS"
  },
  {
    "name": "Palanga International Airport",
    "city": "Palanga",
    "country": "Lithuania",
    "iata": "PLQ",
    "icao": "EYPA"
  },
  {
    "name": "Vilnius International Airport",
    "city": "Vilnius",
    "country": "Lithuania",
    "iata": "VNO",
    "icao": "EYVI"
  },
  {
    "name": "Panevėžys Air Base",
    "city": "Panevezys",
    "country": "Lithuania",
    "iata": "PNV",
    "icao": "EYPP"
  },
  {
    "name": "Erebuni Airport",
    "city": "Yerevan",
    "country": "Armenia",
    "iata": "NONE",
    "icao": "UDYE"
  },
  {
    "name": "Stepanavan Airport",
    "city": "Stepanavan",
    "country": "Armenia",
    "iata": "NONE",
    "icao": "UDLS"
  },
  {
    "name": "Zvartnots International Airport",
    "city": "Yerevan",
    "country": "Armenia",
    "iata": "EVN",
    "icao": "UDYZ"
  },
  {
    "name": "Gyumri Shirak Airport",
    "city": "Gyumri",
    "country": "Armenia",
    "iata": "LWN",
    "icao": "UDSG"
  },
  {
    "name": "Assab International Airport",
    "city": "Assab",
    "country": "Eritrea",
    "iata": "ASA",
    "icao": "HHSB"
  },
  {
    "name": "Asmara International Airport",
    "city": "Asmara",
    "country": "Eritrea",
    "iata": "ASM",
    "icao": "HHAS"
  },
  {
    "name": "Massawa International Airport",
    "city": "Massawa",
    "country": "Eritrea",
    "iata": "MSW",
    "icao": "HHMS"
  },
  {
    "name": "Yasser Arafat International Airport",
    "city": "Gaza",
    "country": "Palestine",
    "iata": "GZA",
    "icao": "LVGZ"
  },
  {
    "name": "Batumi International Airport",
    "city": "Batumi",
    "country": "Georgia",
    "iata": "BUS",
    "icao": "UGSB"
  },
  {
    "name": "Kopitnari Airport",
    "city": "Kutaisi",
    "country": "Georgia",
    "iata": "KUT",
    "icao": "UGKO"
  },
  {
    "name": "Tbilisi International Airport",
    "city": "Tbilisi",
    "country": "Georgia",
    "iata": "TBS",
    "icao": "UGTB"
  },
  {
    "name": "Mukalla International Airport",
    "city": "Mukalla",
    "country": "Yemen",
    "iata": "RIY",
    "icao": "OYRN"
  },
  {
    "name": "Ta'izz International Airport",
    "city": "Taiz",
    "country": "Yemen",
    "iata": "TAI",
    "icao": "OYTZ"
  },
  {
    "name": "Hodeidah International Airport",
    "city": "Hodeidah",
    "country": "Yemen",
    "iata": "HOD",
    "icao": "OYHD"
  },
  {
    "name": "Aden International Airport",
    "city": "Aden",
    "country": "Yemen",
    "iata": "ADE",
    "icao": "OYAA"
  },
  {
    "name": "Ataq Airport",
    "city": "Ataq",
    "country": "Yemen",
    "iata": "AXK",
    "icao": "OYAT"
  },
  {
    "name": "Al Ghaidah International Airport",
    "city": "Al Ghaidah Intl",
    "country": "Yemen",
    "iata": "AAY",
    "icao": "OYGD"
  },
  {
    "name": "Sana'a International Airport",
    "city": "Sanaa",
    "country": "Yemen",
    "iata": "SAH",
    "icao": "OYSN"
  },
  {
    "name": "Beihan Airport",
    "city": "Beihan",
    "country": "Yemen",
    "iata": "BHN",
    "icao": "OYBN"
  },
  {
    "name": "Socotra International Airport",
    "city": "Socotra",
    "country": "Yemen",
    "iata": "SCT",
    "icao": "OYSQ"
  },
  {
    "name": "Al Badie Airport",
    "city": "Al Badie",
    "country": "Yemen",
    "iata": "NONE",
    "icao": "OYBA"
  },
  {
    "name": "Memmingen Allgau Airport",
    "city": "Memmingen",
    "country": "Germany",
    "iata": "FMM",
    "icao": "EDJA"
  },
  {
    "name": "Nevşehir Kapadokya Airport",
    "city": "Nevsehir",
    "country": "Turkey",
    "iata": "NAV",
    "icao": "LTAZ"
  },
  {
    "name": "Ministro Pistarini International Airport",
    "city": "Buenos Aires",
    "country": "Argentina",
    "iata": "EZE",
    "icao": "SAEZ"
  },
  {
    "name": "Erbil International Airport",
    "city": "Erbil",
    "country": "Iraq",
    "iata": "EBL",
    "icao": "ORER"
  },
  {
    "name": "Emerald Airport",
    "city": "Emerald",
    "country": "Australia",
    "iata": "EMD",
    "icao": "YEML"
  },
  {
    "name": "Athen Helenikon Airport",
    "city": "Athens",
    "country": "Greece",
    "iata": "HEW",
    "icao": "LGAT"
  },
  {
    "name": "Kansai International Airport",
    "city": "Osaka",
    "country": "Japan",
    "iata": "KIX",
    "icao": "RJBB"
  },
  {
    "name": "Tagbilaran Airport",
    "city": "Tagbilaran",
    "country": "Philippines",
    "iata": "TAG",
    "icao": "RPVT"
  },
  {
    "name": "Ilulissat Airport",
    "city": "Ilulissat",
    "country": "Greenland",
    "iata": "JAV",
    "icao": "BGJN"
  },
  {
    "name": "Qasigiannguit Heliport",
    "city": "Qasigiannguit",
    "country": "Greenland",
    "iata": "JCH",
    "icao": "BGCH"
  },
  {
    "name": "Aasiaat Airport",
    "city": "Aasiaat",
    "country": "Greenland",
    "iata": "JEG",
    "icao": "BGAA"
  },
  {
    "name": "Palma De Mallorca Airport",
    "city": "Palma de Mallorca",
    "country": "Spain",
    "iata": "PMI",
    "icao": "LEPA"
  },
  {
    "name": "Darwin International Airport",
    "city": "Darwin",
    "country": "Australia",
    "iata": "DRW",
    "icao": "YPDN"
  },
  {
    "name": "Surat Thani Airport",
    "city": "Surat Thani",
    "country": "Thailand",
    "iata": "URT",
    "icao": "VTSB"
  },
  {
    "name": "Talkeetna Airport",
    "city": "Talkeetna",
    "country": "United States",
    "iata": "TKA",
    "icao": "PATK"
  },
  {
    "name": "Xewkija Heliport",
    "city": "Gozo",
    "country": "Malta",
    "iata": "GZM",
    "icao": "LMMG"
  },
  {
    "name": "Tweed New Haven Airport",
    "city": "New Haven",
    "country": "United States",
    "iata": "HVN",
    "icao": "KHVN"
  },
  {
    "name": "Asheville Regional Airport",
    "city": "Asheville",
    "country": "United States",
    "iata": "AVL",
    "icao": "KAVL"
  },
  {
    "name": "Piedmont Triad International Airport",
    "city": "Greensboro",
    "country": "United States",
    "iata": "GSO",
    "icao": "KGSO"
  },
  {
    "name": "Joe Foss Field Airport",
    "city": "Sioux Falls",
    "country": "United States",
    "iata": "FSD",
    "icao": "KFSD"
  },
  {
    "name": "Ayers Rock Connellan Airport",
    "city": "Uluru",
    "country": "Australia",
    "iata": "AYQ",
    "icao": "YAYE"
  },
  {
    "name": "Manchester Airport",
    "city": "Manchester NH",
    "country": "United States",
    "iata": "MHT",
    "icao": "KMHT"
  },
  {
    "name": "Naples Municipal Airport",
    "city": "Naples",
    "country": "United States",
    "iata": "APF",
    "icao": "KAPF"
  },
  {
    "name": "LTS Pulau Redang Airport",
    "city": "Redang",
    "country": "Malaysia",
    "iata": "RDN",
    "icao": "WMPR"
  },
  {
    "name": "Louisville International Standiford Field",
    "city": "Louisville",
    "country": "United States",
    "iata": "SDF",
    "icao": "KSDF"
  },
  {
    "name": "Charlottesville Albemarle Airport",
    "city": "Charlottesville VA",
    "country": "United States",
    "iata": "CHO",
    "icao": "KCHO"
  },
  {
    "name": "Roanoke–Blacksburg Regional Airport",
    "city": "Roanoke VA",
    "country": "United States",
    "iata": "ROA",
    "icao": "KROA"
  },
  {
    "name": "Blue Grass Airport",
    "city": "Lexington KY",
    "country": "United States",
    "iata": "LEX",
    "icao": "KLEX"
  },
  {
    "name": "Evansville Regional Airport",
    "city": "Evansville",
    "country": "United States",
    "iata": "EVV",
    "icao": "KEVV"
  },
  {
    "name": "Albuquerque International Sunport Airport",
    "city": "Albuquerque",
    "country": "United States",
    "iata": "ABQ",
    "icao": "KABQ"
  },
  {
    "name": "Gallatin Field",
    "city": "Bozeman",
    "country": "United States",
    "iata": "BZN",
    "icao": "KBZN"
  },
  {
    "name": "Billings Logan International Airport",
    "city": "Billings",
    "country": "United States",
    "iata": "BIL",
    "icao": "KBIL"
  },
  {
    "name": "Bert Mooney Airport",
    "city": "Butte",
    "country": "United States",
    "iata": "BTM",
    "icao": "KBTM"
  },
  {
    "name": "Cherry Capital Airport",
    "city": "Traverse City",
    "country": "United States",
    "iata": "TVC",
    "icao": "KTVC"
  },
  {
    "name": "Mundo Maya International Airport",
    "city": "Flores",
    "country": "Guatemala",
    "iata": "FRS",
    "icao": "MGTK"
  },
  {
    "name": "Hancock County-Bar Harbor Airport",
    "city": "Bar Harbor",
    "country": "United States",
    "iata": "BHB",
    "icao": "KBHB"
  },
  {
    "name": "Knox County Regional Airport",
    "city": "Rockland",
    "country": "United States",
    "iata": "RKD",
    "icao": "KRKD"
  },
  {
    "name": "Jackson Hole Airport",
    "city": "Jacksn Hole",
    "country": "United States",
    "iata": "JAC",
    "icao": "KJAC"
  },
  {
    "name": "Chicago Rockford International Airport",
    "city": "Rockford",
    "country": "United States",
    "iata": "RFD",
    "icao": "KRFD"
  },
  {
    "name": "Domodedovo International Airport",
    "city": "Moscow",
    "country": "Russia",
    "iata": "DME",
    "icao": "UUDD"
  },
  {
    "name": "Sanya Phoenix International Airport",
    "city": "Sanya",
    "country": "China",
    "iata": "SYX",
    "icao": "ZJSY"
  },
  {
    "name": "Milford Sound Airport",
    "city": "Milford Sound",
    "country": "New Zealand",
    "iata": "MFN",
    "icao": "NZMF"
  },
  {
    "name": "Lijiang Airport",
    "city": "Lijiang",
    "country": "China",
    "iata": "LJG",
    "icao": "ZPLJ"
  },
  {
    "name": "Greenville Spartanburg International Airport",
    "city": "Greenville",
    "country": "United States",
    "iata": "GSP",
    "icao": "KGSP"
  },
  {
    "name": "Central Illinois Regional Airport at Bloomington-Normal",
    "city": "Bloomington",
    "country": "United States",
    "iata": "BMI",
    "icao": "KBMI"
  },
  {
    "name": "Gulfport Biloxi International Airport",
    "city": "Gulfport",
    "country": "United States",
    "iata": "GPT",
    "icao": "KGPT"
  },
  {
    "name": "Kalamazoo Battle Creek International Airport",
    "city": "Kalamazoo",
    "country": "United States",
    "iata": "AZO",
    "icao": "KAZO"
  },
  {
    "name": "Toledo Express Airport",
    "city": "Toledo",
    "country": "United States",
    "iata": "TOL",
    "icao": "KTOL"
  },
  {
    "name": "Fort Wayne International Airport",
    "city": "Fort Wayne",
    "country": "United States",
    "iata": "FWA",
    "icao": "KFWA"
  },
  {
    "name": "Decatur Airport",
    "city": "Decatur",
    "country": "United States",
    "iata": "DEC",
    "icao": "KDEC"
  },
  {
    "name": "The Eastern Iowa Airport",
    "city": "Cedar Rapids",
    "country": "United States",
    "iata": "CID",
    "icao": "KCID"
  },
  {
    "name": "La Crosse Municipal Airport",
    "city": "La Crosse",
    "country": "United States",
    "iata": "LSE",
    "icao": "KLSE"
  },
  {
    "name": "Central Wisconsin Airport",
    "city": "Wassau",
    "country": "United States",
    "iata": "CWA",
    "icao": "KCWA"
  },
  {
    "name": "General Wayne A. Downing Peoria International Airport",
    "city": "Peoria",
    "country": "United States",
    "iata": "PIA",
    "icao": "KPIA"
  },
  {
    "name": "Appleton International Airport",
    "city": "Appleton",
    "country": "United States",
    "iata": "ATW",
    "icao": "KATW"
  },
  {
    "name": "Rochester International Airport",
    "city": "Rochester",
    "country": "United States",
    "iata": "RST",
    "icao": "KRST"
  },
  {
    "name": "University of Illinois Willard Airport",
    "city": "Champaign",
    "country": "United States",
    "iata": "CMI",
    "icao": "KCMI"
  },
  {
    "name": "Manhattan Regional Airport",
    "city": "Manhattan",
    "country": "United States",
    "iata": "MHK",
    "icao": "KMHK"
  },
  {
    "name": "Kingscote Airport",
    "city": "Kingscote",
    "country": "Australia",
    "iata": "KGC",
    "icao": "YKSC"
  },
  {
    "name": "Hervey Bay Airport",
    "city": "Hervey Bay",
    "country": "Australia",
    "iata": "HVB",
    "icao": "YHBA"
  },
  {
    "name": "Dali Airport",
    "city": "Dali",
    "country": "China",
    "iata": "DLU",
    "icao": "ZPDL"
  },
  {
    "name": "Mulu Airport",
    "city": "Mulu",
    "country": "Malaysia",
    "iata": "MZV",
    "icao": "WBMU"
  },
  {
    "name": "Sharm El Sheikh International Airport",
    "city": "Sharm El Sheikh",
    "country": "Egypt",
    "iata": "SSH",
    "icao": "HESH"
  },
  {
    "name": "Venango Regional Airport",
    "city": "Franklin",
    "country": "United States",
    "iata": "FKL",
    "icao": "KFKL"
  },
  {
    "name": "Jomo Kenyatta International Airport",
    "city": "Nairobi",
    "country": "Kenya",
    "iata": "NBO",
    "icao": "HKJK"
  },
  {
    "name": "Seronera Airport",
    "city": "Seronera",
    "country": "Tanzania",
    "iata": "SEU",
    "icao": "HTSN"
  },
  {
    "name": "El Calafate Airport",
    "city": "El Calafate",
    "country": "Argentina",
    "iata": "FTE",
    "icao": "SAWC"
  },
  {
    "name": "Armidale Airport",
    "city": "Armidale",
    "country": "Australia",
    "iata": "ARM",
    "icao": "YARM"
  },
  {
    "name": "Grand Junction Regional Airport",
    "city": "Grand Junction",
    "country": "United States",
    "iata": "GJT",
    "icao": "KGJT"
  },
  {
    "name": "St George Municipal Airport",
    "city": "Saint George",
    "country": "United States",
    "iata": "SGU",
    "icao": "KSGU"
  },
  {
    "name": "David Wayne Hooks Memorial Airport",
    "city": "Houston",
    "country": "United States",
    "iata": "DWH",
    "icao": "KDWH"
  },
  {
    "name": "Port O'Connor Private Airport",
    "city": "Port O\\\\'Connor",
    "country": "United States",
    "iata": "S46",
    "icao": "XS46"
  },
  {
    "name": "Sarasota Bradenton International Airport",
    "city": "Sarasota",
    "country": "United States",
    "iata": "SRQ",
    "icao": "KSRQ"
  },
  {
    "name": "L.F. Wade International International Airport",
    "city": "Bermuda",
    "country": "Bermuda",
    "iata": "BDA",
    "icao": "TXKF"
  },
  {
    "name": "Van Nuys Airport",
    "city": "Van Nuys",
    "country": "United States",
    "iata": "VNY",
    "icao": "KVNY"
  },
  {
    "name": "Quad City International Airport",
    "city": "Moline",
    "country": "United States",
    "iata": "MLI",
    "icao": "KMLI"
  },
  {
    "name": "Panama City-Bay Co International Airport",
    "city": "Panama City",
    "country": "United States",
    "iata": "PFN",
    "icao": "KPFN"
  },
  {
    "name": "Honiara International Airport",
    "city": "Honiara",
    "country": "Solomon Islands",
    "iata": "HIR",
    "icao": "AGGH"
  },
  {
    "name": "Faa'a International Airport",
    "city": "Papeete",
    "country": "French Polynesia",
    "iata": "PPT",
    "icao": "NTAA"
  },
  {
    "name": "Nauru International Airport",
    "city": "Nauru",
    "country": "Nauru",
    "iata": "INU",
    "icao": "ANYN"
  },
  {
    "name": "Funafuti International Airport",
    "city": "Funafuti",
    "country": "Tuvalu",
    "iata": "FUN",
    "icao": "NGFU"
  },
  {
    "name": "Tolmachevo Airport",
    "city": "Novosibirsk",
    "country": "Russia",
    "iata": "OVB",
    "icao": "UNNT"
  },
  {
    "name": "Samsø Airport",
    "city": "Samsoe",
    "country": "Denmark",
    "iata": "NONE",
    "icao": "EKSS"
  },
  {
    "name": "Xieng Khouang Airport",
    "city": "Phon Savan",
    "country": "Laos",
    "iata": "XKH",
    "icao": "VLXK"
  },
  {
    "name": "Bismarck Municipal Airport",
    "city": "Bismarck",
    "country": "United States",
    "iata": "BIS",
    "icao": "KBIS"
  },
  {
    "name": "Telluride Regional Airport",
    "city": "Telluride",
    "country": "United States",
    "iata": "TEX",
    "icao": "KTEX"
  },
  {
    "name": "Yinchuan Airport",
    "city": "Yinchuan",
    "country": "China",
    "iata": "INC",
    "icao": "ZLIC"
  },
  {
    "name": "Mae Hong Son Airport",
    "city": "Mae Hong Son",
    "country": "Thailand",
    "iata": "HGN",
    "icao": "VTCH"
  },
  {
    "name": "Rapid City Regional Airport",
    "city": "Rapid City",
    "country": "United States",
    "iata": "RAP",
    "icao": "KRAP"
  },
  {
    "name": "Mc Clellan-Palomar Airport",
    "city": "Carlsbad",
    "country": "United States",
    "iata": "CLD",
    "icao": "KCRQ"
  },
  {
    "name": "Bishop International Airport",
    "city": "Flint",
    "country": "United States",
    "iata": "FNT",
    "icao": "KFNT"
  },
  {
    "name": "Francisco Bangoy International Airport",
    "city": "Davao",
    "country": "Philippines",
    "iata": "DVO",
    "icao": "RPMD"
  },
  {
    "name": "Madeira Airport",
    "city": "Funchal",
    "country": "Portugal",
    "iata": "FNC",
    "icao": "LPMA"
  },
  {
    "name": "Maestro Wilson Fonseca Airport",
    "city": "Santarem",
    "country": "Brazil",
    "iata": "STM",
    "icao": "SBSN"
  },
  {
    "name": "Sihanoukville International Airport",
    "city": "Sihanoukville",
    "country": "Cambodia",
    "iata": "KOS",
    "icao": "VDSV"
  },
  {
    "name": "Ekati Airport",
    "city": "Ekati",
    "country": "Canada",
    "iata": "YOA",
    "icao": "CYOA"
  },
  {
    "name": "Hawke's Bay Airport",
    "city": "NAPIER",
    "country": "New Zealand",
    "iata": "NPE",
    "icao": "NZNR"
  },
  {
    "name": "Levuka Airfield",
    "city": "Levuka",
    "country": "Fiji",
    "iata": "LEV",
    "icao": "NFNB"
  },
  {
    "name": "Lhasa Gonggar Airport",
    "city": "Lhasa",
    "country": "China",
    "iata": "LXA",
    "icao": "ZULS"
  },
  {
    "name": "Redding Municipal Airport",
    "city": "Redding",
    "country": "United States",
    "iata": "RDD",
    "icao": "KRDD"
  },
  {
    "name": "Mahlon Sweet Field",
    "city": "Eugene",
    "country": "United States",
    "iata": "EUG",
    "icao": "KEUG"
  },
  {
    "name": "Idaho Falls Regional Airport",
    "city": "Idaho Falls",
    "country": "United States",
    "iata": "IDA",
    "icao": "KIDA"
  },
  {
    "name": "Rogue Valley International Medford Airport",
    "city": "Medford",
    "country": "United States",
    "iata": "MFR",
    "icao": "KMFR"
  },
  {
    "name": "Kaikoura Airport",
    "city": "Kaikoura",
    "country": "New Zealand",
    "iata": "KBZ",
    "icao": "NZKI"
  },
  {
    "name": "Roberts Field",
    "city": "Redmond-Bend",
    "country": "United States",
    "iata": "RDM",
    "icao": "KRDM"
  },
  {
    "name": "Picton Aerodrome",
    "city": "Picton",
    "country": "New Zealand",
    "iata": "PCN",
    "icao": "NZPN"
  },
  {
    "name": "Hosea Kutako International Airport",
    "city": "Windhoek",
    "country": "Namibia",
    "iata": "WDH",
    "icao": "FYWH"
  },
  {
    "name": "Victoria Harbour Seaplane Base",
    "city": "Victoria",
    "country": "Canada",
    "iata": "YWH",
    "icao": "CYWH"
  },
  {
    "name": "Coal Harbour Seaplane Base",
    "city": "Vancouver",
    "country": "Canada",
    "iata": "NONE",
    "icao": "CAQ3"
  },
  {
    "name": "Yaoqiang Airport",
    "city": "Jinan",
    "country": "China",
    "iata": "TNA",
    "icao": "ZSJN"
  },
  {
    "name": "Changzhou Benniu Airport",
    "city": "Changzhou",
    "country": "China",
    "iata": "CZX",
    "icao": "ZSCG"
  },
  {
    "name": "Yibin Caiba Airport",
    "city": "Yibin",
    "country": "China",
    "iata": "YBP",
    "icao": "ZUYB"
  },
  {
    "name": "Roshchino International Airport",
    "city": "Tyumen",
    "country": "Russia",
    "iata": "TJM",
    "icao": "USTR"
  },
  {
    "name": "Akron Canton Regional Airport",
    "city": "Akron",
    "country": "United States",
    "iata": "CAK",
    "icao": "KCAK"
  },
  {
    "name": "Huntsville International Carl T Jones Field",
    "city": "Huntsville",
    "country": "United States",
    "iata": "HSV",
    "icao": "KHSV"
  },
  {
    "name": "Mid Ohio Valley Regional Airport",
    "city": "PARKERSBURG",
    "country": "United States",
    "iata": "PKB",
    "icao": "KPKB"
  },
  {
    "name": "Montgomery Regional (Dannelly Field) Airport",
    "city": "MONTGOMERY",
    "country": "United States",
    "iata": "MGM",
    "icao": "KMGM"
  },
  {
    "name": "Tri Cities Regional Tn Va Airport",
    "city": "BRISTOL",
    "country": "United States",
    "iata": "TRI",
    "icao": "KTRI"
  },
  {
    "name": "Barkley Regional Airport",
    "city": "PADUCAH",
    "country": "United States",
    "iata": "PAH",
    "icao": "KPAH"
  },
  {
    "name": "Djibouti-Ambouli Airport",
    "city": "Djibouti",
    "country": "Djibouti",
    "iata": "JIB",
    "icao": "HDAM"
  },
  {
    "name": "Haikou Meilan International Airport",
    "city": "Haikou",
    "country": "China",
    "iata": "HAK",
    "icao": "ZJHK"
  },
  {
    "name": "Mafia Island Airport",
    "city": "Mafia Island",
    "country": "Tanzania",
    "iata": "MFA",
    "icao": "HTMA"
  },
  {
    "name": "Page Municipal Airport",
    "city": "Page",
    "country": "United States",
    "iata": "PGA",
    "icao": "KPGA"
  },
  {
    "name": "Utila Airport",
    "city": "Utila",
    "country": "Honduras",
    "iata": "UII",
    "icao": "MHUT"
  },
  {
    "name": "Glacier Park International Airport",
    "city": "Kalispell",
    "country": "United States",
    "iata": "FCA",
    "icao": "KGPI"
  },
  {
    "name": "MBS International Airport",
    "city": "Saginaw",
    "country": "United States",
    "iata": "MBS",
    "icao": "KMBS"
  },
  {
    "name": "Greater Binghamton/Edwin A Link field",
    "city": "Binghamton",
    "country": "United States",
    "iata": "BGM",
    "icao": "KBGM"
  },
  {
    "name": "Baghdad International Airport",
    "city": "Baghdad",
    "country": "Iraq",
    "iata": "BGW",
    "icao": "ORBI"
  },
  {
    "name": "Nan Airport",
    "city": "Nan",
    "country": "Thailand",
    "iata": "NNT",
    "icao": "VTCN"
  },
  {
    "name": "Roi Et Airport",
    "city": "Roi Et",
    "country": "Thailand",
    "iata": "ROI",
    "icao": "VTUV"
  },
  {
    "name": "Buri Ram Airport",
    "city": "Buri Ram",
    "country": "Thailand",
    "iata": "BFV",
    "icao": "VTUO"
  },
  {
    "name": "Trat Airport",
    "city": "Trat",
    "country": "Thailand",
    "iata": "TDX",
    "icao": "VTBO"
  },
  {
    "name": "Blythe Airport",
    "city": "Blythe",
    "country": "United States",
    "iata": "BLH",
    "icao": "KBLH"
  },
  {
    "name": "Al Asad Air Base",
    "city": "Al Asad",
    "country": "Iraq",
    "iata": "NONE",
    "icao": "ORAA"
  },
  {
    "name": "Al Taqaddum Air Base",
    "city": "Al Taqaddum",
    "country": "Iraq",
    "iata": "NONE",
    "icao": "ORAT"
  },
  {
    "name": "Joint Base Balad",
    "city": "Al Bakr",
    "country": "Iraq",
    "iata": "NONE",
    "icao": "ORBD"
  },
  {
    "name": "Clark International Airport",
    "city": "Angeles City",
    "country": "Philippines",
    "iata": "CRK",
    "icao": "RPLC"
  },
  {
    "name": "Sandakan Airport",
    "city": "Sandakan",
    "country": "Malaysia",
    "iata": "SDK",
    "icao": "WBKS"
  },
  {
    "name": "Luang Namtha Airport",
    "city": "Luang Namtha",
    "country": "Laos",
    "iata": "LXG",
    "icao": "VLLN"
  },
  {
    "name": "Oudomsay Airport",
    "city": "Muang Xay",
    "country": "Laos",
    "iata": "ODY",
    "icao": "VLOS"
  },
  {
    "name": "Taoxian Airport",
    "city": "Shenyang",
    "country": "China",
    "iata": "SHE",
    "icao": "ZYTX"
  },
  {
    "name": "John A. Osborne Airport",
    "city": "Geralds",
    "country": "Montserrat",
    "iata": "MNI",
    "icao": "TRPG"
  },
  {
    "name": "Petersburg James A Johnson Airport",
    "city": "Petersburg",
    "country": "United States",
    "iata": "PSG",
    "icao": "PAPG"
  },
  {
    "name": "Luoyang Airport",
    "city": "Luoyang",
    "country": "China",
    "iata": "LYA",
    "icao": "ZHLY"
  },
  {
    "name": "Xuzhou Guanyin Airport",
    "city": "Xuzhou",
    "country": "China",
    "iata": "XUZ",
    "icao": "ZSXZ"
  },
  {
    "name": "Magway Airport",
    "city": "Magwe",
    "country": "Burma",
    "iata": "MWQ",
    "icao": "VYMW"
  },
  {
    "name": "Kanti Airport",
    "city": "Khamti",
    "country": "Burma",
    "iata": "KHM",
    "icao": "VYKI"
  },
  {
    "name": "Lien Khuong Airport",
    "city": "Dalat",
    "country": "Vietnam",
    "iata": "DLI",
    "icao": "VVDL"
  },
  {
    "name": "Rach Gia Airport",
    "city": "Rach Gia",
    "country": "Vietnam",
    "iata": "VKG",
    "icao": "VVRG"
  },
  {
    "name": "Cà Mau Airport",
    "city": "Ca Mau",
    "country": "Vietnam",
    "iata": "CAH",
    "icao": "VVCM"
  },
  {
    "name": "Chu Lai International Airport",
    "city": "Chu Lai",
    "country": "Vietnam",
    "iata": "VCL",
    "icao": "VVCA"
  },
  {
    "name": "Dong Tac Airport",
    "city": "Tuy Hoa",
    "country": "Vietnam",
    "iata": "TBB",
    "icao": "VVTH"
  },
  {
    "name": "Mae Hong Son Airport",
    "city": "Pai",
    "country": "Thailand",
    "iata": "PYY",
    "icao": "VTCI"
  },
  {
    "name": "Bol Airport",
    "city": "Brac",
    "country": "Croatia",
    "iata": "BWK",
    "icao": "LDSB"
  },
  {
    "name": "Yaoundé Nsimalen International Airport",
    "city": "Yaounde",
    "country": "Cameroon",
    "iata": "NSI",
    "icao": "FKYS"
  },
  {
    "name": "Conakry International Airport",
    "city": "Conakry",
    "country": "Guinea",
    "iata": "CKY",
    "icao": "GUCY"
  },
  {
    "name": "Aachen-Merzbrück Airport",
    "city": "Aachen",
    "country": "Germany",
    "iata": "AAH",
    "icao": "EDKA"
  },
  {
    "name": "Karlsruhe Baden-Baden Airport",
    "city": "Karlsruhe/Baden-Baden",
    "country": "Germany",
    "iata": "FKB",
    "icao": "EDSB"
  },
  {
    "name": "Orlando Sanford International Airport",
    "city": "Sanford",
    "country": "United States",
    "iata": "SFB",
    "icao": "KSFB"
  },
  {
    "name": "John Murtha Johnstown Cambria County Airport",
    "city": "Johnstown",
    "country": "United States",
    "iata": "JST",
    "icao": "KJST"
  },
  {
    "name": "Lukla Airport",
    "city": "Lukla",
    "country": "Nepal",
    "iata": "LUA",
    "icao": "VNLK"
  },
  {
    "name": "Bhojpur Airport",
    "city": "Bhojpur",
    "country": "Nepal",
    "iata": "BHP",
    "icao": "VNBJ"
  },
  {
    "name": "Lamidanda Airport",
    "city": "Lamidanda",
    "country": "Nepal",
    "iata": "LDN",
    "icao": "VNLD"
  },
  {
    "name": "Jomsom Airport",
    "city": "Jomsom",
    "country": "Nepal",
    "iata": "JMO",
    "icao": "VNJS"
  },
  {
    "name": "Manang Airport",
    "city": "Manang",
    "country": "Nepal",
    "iata": "NGX",
    "icao": "VNMA"
  },
  {
    "name": "Phaplu Airport",
    "city": "Phaplu",
    "country": "Nepal",
    "iata": "PPL",
    "icao": "VNPL"
  },
  {
    "name": "Rumjatar Airport",
    "city": "Rumjatar",
    "country": "Nepal",
    "iata": "RUM",
    "icao": "VNRT"
  },
  {
    "name": "Tulsipur Airport",
    "city": "Dang",
    "country": "Nepal",
    "iata": "DNP",
    "icao": "VNDG"
  },
  {
    "name": "Rukumkot Airport",
    "city": "Rukumkot",
    "country": "Nepal",
    "iata": "RUK",
    "icao": "VNRK"
  },
  {
    "name": "Jumla Airport",
    "city": "Jumla",
    "country": "Nepal",
    "iata": "JUM",
    "icao": "VNJL"
  },
  {
    "name": "Taplejung Airport",
    "city": "Taplejung",
    "country": "Nepal",
    "iata": "TPJ",
    "icao": "VNTJ"
  },
  {
    "name": "Tumling Tar Airport",
    "city": "Tumling Tar",
    "country": "Nepal",
    "iata": "TMI",
    "icao": "VNTR"
  },
  {
    "name": "Surkhet Airport",
    "city": "Surkhet",
    "country": "Nepal",
    "iata": "SKH",
    "icao": "VNSK"
  },
  {
    "name": "Simikot Airport",
    "city": "Simikot",
    "country": "Nepal",
    "iata": "IMK",
    "icao": "VNST"
  },
  {
    "name": "Dolpa Airport",
    "city": "Dolpa",
    "country": "Nepal",
    "iata": "DOP",
    "icao": "VNDP"
  },
  {
    "name": "Bajhang Airport",
    "city": "Bajhang",
    "country": "Nepal",
    "iata": "BJH",
    "icao": "VNBG"
  },
  {
    "name": "Dhangarhi Airport",
    "city": "Dhangarhi",
    "country": "Nepal",
    "iata": "DHI",
    "icao": "VNDH"
  },
  {
    "name": "Muan International Airport",
    "city": "Muan",
    "country": "South Korea",
    "iata": "MWX",
    "icao": "RKJB"
  },
  {
    "name": "Astypalaia Airport",
    "city": "Astypalaia",
    "country": "Greece",
    "iata": "JTY",
    "icao": "LGPL"
  },
  {
    "name": "Ikaria Airport",
    "city": "Ikaria",
    "country": "Greece",
    "iata": "JIK",
    "icao": "LGIK"
  },
  {
    "name": "Kalymnos Airport",
    "city": "Kalymnos",
    "country": "Greece",
    "iata": "JKL",
    "icao": "LGKY"
  },
  {
    "name": "Milos Airport",
    "city": "Milos",
    "country": "Greece",
    "iata": "MLO",
    "icao": "LGML"
  },
  {
    "name": "Naxos Airport",
    "city": "Cyclades Islands",
    "country": "Greece",
    "iata": "JNX",
    "icao": "LGNX"
  },
  {
    "name": "Paros Airport",
    "city": "Paros",
    "country": "Greece",
    "iata": "PAS",
    "icao": "LGPA"
  },
  {
    "name": "Kastelorizo Airport",
    "city": "Kastelorizo",
    "country": "Greece",
    "iata": "KZS",
    "icao": "LGKJ"
  },
  {
    "name": "Marsa Alam International Airport",
    "city": "Marsa Alam",
    "country": "Egypt",
    "iata": "RMF",
    "icao": "HEMA"
  },
  {
    "name": "Weeze Airport",
    "city": "Weeze",
    "country": "Germany",
    "iata": "NRN",
    "icao": "EDLV"
  },
  {
    "name": "Francisco B. Reyes Airport",
    "city": "Busuanga",
    "country": "Philippines",
    "iata": "USU",
    "icao": "RPVV"
  },
  {
    "name": "Bancasi Airport",
    "city": "Butuan",
    "country": "Philippines",
    "iata": "BXU",
    "icao": "RPME"
  },
  {
    "name": "Dipolog Airport",
    "city": "Dipolog",
    "country": "Philippines",
    "iata": "DPL",
    "icao": "RPMG"
  },
  {
    "name": "Laoag International Airport",
    "city": "Laoag",
    "country": "Philippines",
    "iata": "LAO",
    "icao": "RPLI"
  },
  {
    "name": "Legazpi City International Airport",
    "city": "Legazpi",
    "country": "Philippines",
    "iata": "LGP",
    "icao": "RPLP"
  },
  {
    "name": "Labo Airport",
    "city": "Ozamis",
    "country": "Philippines",
    "iata": "OZC",
    "icao": "RPMO"
  },
  {
    "name": "Mactan Cebu International Airport",
    "city": "Cebu",
    "country": "Philippines",
    "iata": "CEB",
    "icao": "RPVM"
  },
  {
    "name": "Norden-Norddeich Airport",
    "city": "Norden",
    "country": "Germany",
    "iata": "NOE",
    "icao": "EDWS"
  },
  {
    "name": "Juist Airport",
    "city": "Juist",
    "country": "Germany",
    "iata": "JUI",
    "icao": "EDWJ"
  },
  {
    "name": "Porto Seguro Airport",
    "city": "Porto Seguro",
    "country": "Brazil",
    "iata": "BPS",
    "icao": "SBPS"
  },
  {
    "name": "Iguatu Airport",
    "city": "Iguatu",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SNIG"
  },
  {
    "name": "Brigadeiro Lysias Rodrigues Airport",
    "city": "Palmas",
    "country": "Brazil",
    "iata": "PMW",
    "icao": "SBPJ"
  },
  {
    "name": "Nelson Ribeiro Guimarães Airport",
    "city": "Caldas Novas",
    "country": "Brazil",
    "iata": "CLV",
    "icao": "SBCN"
  },
  {
    "name": "Missoula International Airport",
    "city": "Missoula",
    "country": "United States",
    "iata": "MSO",
    "icao": "KMSO"
  },
  {
    "name": "Blackall Airport",
    "city": "Blackall",
    "country": "Australia",
    "iata": "BKQ",
    "icao": "YBCK"
  },
  {
    "name": "Bundaberg Airport",
    "city": "Bundaberg",
    "country": "Australia",
    "iata": "BDB",
    "icao": "YBUD"
  },
  {
    "name": "Grand Canyon National Park Airport",
    "city": "Grand Canyon",
    "country": "United States",
    "iata": "GCN",
    "icao": "KGCN"
  },
  {
    "name": "Sugar Land Regional Airport",
    "city": "Sugar Land",
    "country": "United States",
    "iata": "SGR",
    "icao": "KSGR"
  },
  {
    "name": "Hayman Island Heliport",
    "city": "Hayman Island",
    "country": "Australia",
    "iata": "HIS",
    "icao": "YHYN"
  },
  {
    "name": "Centennial Airport",
    "city": "Denver",
    "country": "United States",
    "iata": "APA",
    "icao": "KAPA"
  },
  {
    "name": "Clovis Municipal Airport",
    "city": "Clovis",
    "country": "United States",
    "iata": "CVN",
    "icao": "KCVN"
  },
  {
    "name": "Fort Stockton Pecos County Airport",
    "city": "Fort Stockton",
    "country": "United States",
    "iata": "FST",
    "icao": "KFST"
  },
  {
    "name": "Las Vegas Municipal Airport",
    "city": "Las Vegas",
    "country": "United States",
    "iata": "LVS",
    "icao": "KLVS"
  },
  {
    "name": "West Houston Airport",
    "city": "Houston",
    "country": "United States",
    "iata": "IWS",
    "icao": "KIWS"
  },
  {
    "name": "La Junta Municipal Airport",
    "city": "La Junta",
    "country": "United States",
    "iata": "LHX",
    "icao": "KLHX"
  },
  {
    "name": "Las Cruces International Airport",
    "city": "Las Cruces",
    "country": "United States",
    "iata": "LRU",
    "icao": "KLRU"
  },
  {
    "name": "Stephens County Airport",
    "city": "Breckenridge",
    "country": "United States",
    "iata": "BKD",
    "icao": "KBKD"
  },
  {
    "name": "Draughon Miller Central Texas Regional Airport",
    "city": "Temple",
    "country": "United States",
    "iata": "TPL",
    "icao": "KTPL"
  },
  {
    "name": "Ozona Municipal Airport",
    "city": "Ozona",
    "country": "United States",
    "iata": "OZA",
    "icao": "KOZA"
  },
  {
    "name": "Kaadedhdhoo Airport",
    "city": "Kaadedhdhoo",
    "country": "Maldives",
    "iata": "KDM",
    "icao": "VRMT"
  },
  {
    "name": "Aklavik/Freddie Carmichael Airport",
    "city": "Aklavik",
    "country": "Canada",
    "iata": "LAK",
    "icao": "CYKD"
  },
  {
    "name": "Déline Airport",
    "city": "Deline",
    "country": "Canada",
    "iata": "YWJ",
    "icao": "CYWJ"
  },
  {
    "name": "Tulita Airport",
    "city": "Tulita",
    "country": "Canada",
    "iata": "ZFN",
    "icao": "CZFN"
  },
  {
    "name": "Fort Good Hope Airport",
    "city": "Fort Good Hope",
    "country": "Canada",
    "iata": "YGH",
    "icao": "CYGH"
  },
  {
    "name": "Tanna Airport",
    "city": "Tanna",
    "country": "Vanuatu",
    "iata": "TAH",
    "icao": "NVVW"
  },
  {
    "name": "Paulatuk (Nora Aliqatchialuk Ruben) Airport",
    "city": "Paulatuk",
    "country": "Canada",
    "iata": "YPC",
    "icao": "CYPC"
  },
  {
    "name": "El Trompillo Airport",
    "city": "Santa Cruz",
    "country": "Bolivia",
    "iata": "SRZ",
    "icao": "SLET"
  },
  {
    "name": "Juancho E. Yrausquin Airport",
    "city": "Saba",
    "country": "Netherlands Antilles",
    "iata": "SAB",
    "icao": "TNCS"
  },
  {
    "name": "Eagle County Regional Airport",
    "city": "Vail",
    "country": "United States",
    "iata": "EGE",
    "icao": "KEGE"
  },
  {
    "name": "Stokmarknes Skagen Airport",
    "city": "Stokmarknes",
    "country": "Norway",
    "iata": "SKN",
    "icao": "ENSK"
  },
  {
    "name": "Cuyahoga County Airport",
    "city": "Richmond Heights",
    "country": "United States",
    "iata": "CGF",
    "icao": "KCGF"
  },
  {
    "name": "Mansfield Lahm Regional Airport",
    "city": "Mansfield",
    "country": "United States",
    "iata": "MFD",
    "icao": "KMFD"
  },
  {
    "name": "Columbus Metropolitan Airport",
    "city": "Columbus",
    "country": "United States",
    "iata": "CSG",
    "icao": "KCSG"
  },
  {
    "name": "Lawton Fort Sill Regional Airport",
    "city": "Lawton",
    "country": "United States",
    "iata": "LAW",
    "icao": "KLAW"
  },
  {
    "name": "Fort Collins Loveland Municipal Airport",
    "city": "Fort Collins",
    "country": "United States",
    "iata": "FNL",
    "icao": "KFNL"
  },
  {
    "name": "Flagstaff Pulliam Airport",
    "city": "Flagstaff",
    "country": "United States",
    "iata": "FLG",
    "icao": "KFLG"
  },
  {
    "name": "Lake Tahoe Airport",
    "city": "South Lake Tahoe",
    "country": "United States",
    "iata": "TVL",
    "icao": "KTVL"
  },
  {
    "name": "Joslin Field Magic Valley Regional Airport",
    "city": "Twin Falls",
    "country": "United States",
    "iata": "TWF",
    "icao": "KTWF"
  },
  {
    "name": "Martha's Vineyard Airport",
    "city": "Vineyard Haven MA",
    "country": "United States",
    "iata": "MVY",
    "icao": "KMVY"
  },
  {
    "name": "Concord Municipal Airport",
    "city": "Concord NH",
    "country": "United States",
    "iata": "CON",
    "icao": "KCON"
  },
  {
    "name": "Groton New London Airport",
    "city": "Groton CT",
    "country": "United States",
    "iata": "GON",
    "icao": "KGON"
  },
  {
    "name": "St Cloud Regional Airport",
    "city": "Saint Cloud",
    "country": "United States",
    "iata": "STC",
    "icao": "KSTC"
  },
  {
    "name": "Qinhuangdao Beidaihe Airport",
    "city": "Bagan",
    "country": "Burma",
    "iata": "BPE",
    "icao": "ZBDH"
  },
  {
    "name": "Golden Triangle Regional Airport",
    "city": "Columbus Mississippi",
    "country": "United States",
    "iata": "GTR",
    "icao": "KGTR"
  },
  {
    "name": "Nizhny Novgorod Strigino International Airport",
    "city": "Nizhniy Novgorod",
    "country": "Russia",
    "iata": "GOJ",
    "icao": "UWGG"
  },
  {
    "name": "Bowerman Airport",
    "city": "Hoquiam",
    "country": "United States",
    "iata": "HQM",
    "icao": "KHQM"
  },
  {
    "name": "Erie International Tom Ridge Field",
    "city": "Erie",
    "country": "United States",
    "iata": "ERI",
    "icao": "KERI"
  },
  {
    "name": "Barnstable Municipal Boardman Polando Field",
    "city": "Barnstable",
    "country": "United States",
    "iata": "HYA",
    "icao": "KHYA"
  },
  {
    "name": "Sedona Airport",
    "city": "Sedona",
    "country": "United States",
    "iata": "SDX",
    "icao": "KSEZ"
  },
  {
    "name": "Morgantown Municipal Walter L. Bill Hart Field",
    "city": "Morgantown",
    "country": "United States",
    "iata": "MGW",
    "icao": "KMGW"
  },
  {
    "name": "Yeager Airport",
    "city": "Charleston",
    "country": "United States",
    "iata": "CRW",
    "icao": "KCRW"
  },
  {
    "name": "Wilkes Barre Scranton International Airport",
    "city": "Scranton",
    "country": "United States",
    "iata": "AVP",
    "icao": "KAVP"
  },
  {
    "name": "Bemidji Regional Airport",
    "city": "Bemidji",
    "country": "United States",
    "iata": "BJI",
    "icao": "KBJI"
  },
  {
    "name": "Thangool Airport",
    "city": "Biloela",
    "country": "Australia",
    "iata": "THG",
    "icao": "YTNG"
  },
  {
    "name": "Fagali'i Airport",
    "city": "Apia",
    "country": "Samoa",
    "iata": "FGI",
    "icao": "NSFI"
  },
  {
    "name": "Ballina Byron Gateway Airport",
    "city": "Ballina Byron Bay",
    "country": "Australia",
    "iata": "BNK",
    "icao": "YBNA"
  },
  {
    "name": "Hector International Airport",
    "city": "Fargo",
    "country": "United States",
    "iata": "FAR",
    "icao": "KFAR"
  },
  {
    "name": "Charles B. Wheeler Downtown Airport",
    "city": "Kansas City",
    "country": "United States",
    "iata": "MKC",
    "icao": "KMKC"
  },
  {
    "name": "Ratanakiri Airport",
    "city": "Ratanakiri",
    "country": "Cambodia",
    "iata": "RBE",
    "icao": "VDRK"
  },
  {
    "name": "Gillette Campbell County Airport",
    "city": "Gillette",
    "country": "United States",
    "iata": "GCC",
    "icao": "KGCC"
  },
  {
    "name": "Bogashevo Airport",
    "city": "Tomsk",
    "country": "Russia",
    "iata": "TOF",
    "icao": "UNTT"
  },
  {
    "name": "Phetchabun Airport",
    "city": "Phetchabun",
    "country": "Thailand",
    "iata": "PHY",
    "icao": "VTPB"
  },
  {
    "name": "Chumphon Airport",
    "city": "Chumphon",
    "country": "Thailand",
    "iata": "CJM",
    "icao": "VTSE"
  },
  {
    "name": "Jiuzhai Huanglong Airport",
    "city": "Jiuzhaigou",
    "country": "China",
    "iata": "JZH",
    "icao": "ZUJZ"
  },
  {
    "name": "Jieyang Chaoshan International Airport",
    "city": "Shantou",
    "country": "China",
    "iata": "SWA",
    "icao": "ZGOW"
  },
  {
    "name": "Enghien Moisselles Airport",
    "city": "Enghien-moisselles",
    "country": "France",
    "iata": "NONE",
    "icao": "LFFE"
  },
  {
    "name": "Cheddi Jagan International Airport",
    "city": "Georgetown",
    "country": "Guyana",
    "iata": "GEO",
    "icao": "SYCJ"
  },
  {
    "name": "Guarani International Airport",
    "city": "Ciudad del Este",
    "country": "Paraguay",
    "iata": "AGT",
    "icao": "SGES"
  },
  {
    "name": "Ogle Airport",
    "city": "Georgetown",
    "country": "Guyana",
    "iata": "OGL",
    "icao": "SYGO"
  },
  {
    "name": "Kaieteur International Airport",
    "city": "Kaieteur",
    "country": "Guyana",
    "iata": "KAI",
    "icao": "PKSA"
  },
  {
    "name": "Dunhuang Airport",
    "city": "Dunhuang",
    "country": "China",
    "iata": "DNH",
    "icao": "ZLDH"
  },
  {
    "name": "Ancona Falconara Airport",
    "city": "Ancona",
    "country": "Italy",
    "iata": "AOI",
    "icao": "LIPY"
  },
  {
    "name": "Chamonate Airport",
    "city": "Copiapo",
    "country": "Chile",
    "iata": "CPO",
    "icao": "SCHA"
  },
  {
    "name": "Taba International Airport",
    "city": "Taba",
    "country": "Egypt",
    "iata": "TCP",
    "icao": "HETB"
  },
  {
    "name": "Edward Bodden Airfield",
    "city": "Little Cayman",
    "country": "Cayman Islands",
    "iata": "LYB",
    "icao": "MWCL"
  },
  {
    "name": "Milas Bodrum International Airport",
    "city": "Bodrum",
    "country": "Turkey",
    "iata": "BJV",
    "icao": "LTFE"
  },
  {
    "name": "Tabarka 7 Novembre Airport",
    "city": "Tabarka",
    "country": "Tunisia",
    "iata": "TBJ",
    "icao": "DTKA"
  },
  {
    "name": "Sabiha Gökçen International Airport",
    "city": "Istanbul",
    "country": "Turkey",
    "iata": "SAW",
    "icao": "LTFJ"
  },
  {
    "name": "University Park Airport",
    "city": "State College Pennsylvania",
    "country": "United States",
    "iata": "SCE",
    "icao": "KUNV"
  },
  {
    "name": "Broome International Airport",
    "city": "Broome",
    "country": "Australia",
    "iata": "BME",
    "icao": "YBRM"
  },
  {
    "name": "Newcastle Airport",
    "city": "Newcastle",
    "country": "Australia",
    "iata": "NTL",
    "icao": "YWLM"
  },
  {
    "name": "Bakki Airport",
    "city": "Bakki",
    "country": "Iceland",
    "iata": "NONE",
    "icao": "BIBA"
  },
  {
    "name": "Klagenfurt Airport",
    "city": "Klagenfurt",
    "country": "Austria",
    "iata": "KLU",
    "icao": "LOWK"
  },
  {
    "name": "Hammerfest Airport",
    "city": "Hammerfest",
    "country": "Norway",
    "iata": "HFT",
    "icao": "ENHF"
  },
  {
    "name": "Valan Airport",
    "city": "Honningsvag",
    "country": "Norway",
    "iata": "HVG",
    "icao": "ENHV"
  },
  {
    "name": "Mehamn Airport",
    "city": "Mehamn",
    "country": "Norway",
    "iata": "MEH",
    "icao": "ENMH"
  },
  {
    "name": "Vadsø Airport",
    "city": "Vadsø",
    "country": "Norway",
    "iata": "VDS",
    "icao": "ENVD"
  },
  {
    "name": "Imam Khomeini International Airport",
    "city": "Tehran",
    "country": "Iran",
    "iata": "IKA",
    "icao": "OIIE"
  },
  {
    "name": "Mashhad International Airport",
    "city": "Mashhad",
    "country": "Iran",
    "iata": "MHD",
    "icao": "OIMM"
  },
  {
    "name": "Ust-Ilimsk Airport",
    "city": "Ust Ilimsk",
    "country": "Russia",
    "iata": "UIK",
    "icao": "UIBS"
  },
  {
    "name": "Key Field",
    "city": "Meridian",
    "country": "United States",
    "iata": "MEI",
    "icao": "KMEI"
  },
  {
    "name": "Abraham Lincoln Capital Airport",
    "city": "Springfield",
    "country": "United States",
    "iata": "SPI",
    "icao": "KSPI"
  },
  {
    "name": "Cortez Municipal Airport",
    "city": "Cortez",
    "country": "United States",
    "iata": "CEZ",
    "icao": "KCEZ"
  },
  {
    "name": "Yampa Valley Airport",
    "city": "Hayden",
    "country": "United States",
    "iata": "HDN",
    "icao": "KHDN"
  },
  {
    "name": "Gallup Municipal Airport",
    "city": "Gallup",
    "country": "United States",
    "iata": "GUP",
    "icao": "KGUP"
  },
  {
    "name": "Liberal Mid-America Regional Airport",
    "city": "Liberal",
    "country": "United States",
    "iata": "LBL",
    "icao": "KLBL"
  },
  {
    "name": "Lamar Municipal Airport",
    "city": "Lamar",
    "country": "United States",
    "iata": "LAA",
    "icao": "KLAA"
  },
  {
    "name": "Renner Field-Goodland Municipal Airport",
    "city": "Goodland",
    "country": "United States",
    "iata": "GLD",
    "icao": "KGLD"
  },
  {
    "name": "Yellowstone Regional Airport",
    "city": "Cody",
    "country": "United States",
    "iata": "COD",
    "icao": "KCOD"
  },
  {
    "name": "Ørsta-Volda Airport, Hovden",
    "city": "Orsta-Volda",
    "country": "Norway",
    "iata": "HOV",
    "icao": null
  },
  {
    "name": "St. Mary's Airport",
    "city": "ST MARY\\\\'S",
    "country": "United Kingdom",
    "iata": "ISC",
    "icao": "EGHE"
  },
  {
    "name": "Springfield Branson National Airport",
    "city": "Springfield",
    "country": "United States",
    "iata": "SGF",
    "icao": "KSGF"
  },
  {
    "name": "Narvik Framnes Airport",
    "city": "Narvik",
    "country": "Norway",
    "iata": "NVK",
    "icao": "ENNK"
  },
  {
    "name": "Berlevåg Airport",
    "city": "Berlevag",
    "country": "Norway",
    "iata": "BVG",
    "icao": "ENBV"
  },
  {
    "name": "Oslo, Fornebu Airport",
    "city": "Oslo",
    "country": "Norway",
    "iata": "FBU",
    "icao": null
  },
  {
    "name": "Norilsk-Alykel Airport",
    "city": "Norilsk",
    "country": "Russia",
    "iata": "NSK",
    "icao": "UOOO"
  },
  {
    "name": "Anapa Vityazevo Airport",
    "city": "Anapa",
    "country": "Russia",
    "iata": "AAQ",
    "icao": "URKA"
  },
  {
    "name": "Joplin Regional Airport",
    "city": "Joplin",
    "country": "United States",
    "iata": "JLN",
    "icao": "KJLN"
  },
  {
    "name": "Lehigh Valley International Airport",
    "city": "Allentown",
    "country": "United States",
    "iata": "ABE",
    "icao": "KABE"
  },
  {
    "name": "Northwest Arkansas Regional Airport",
    "city": "Bentonville",
    "country": "United States",
    "iata": "XNA",
    "icao": "KXNA"
  },
  {
    "name": "Atyrau Airport",
    "city": "Atyrau",
    "country": "Kazakhstan",
    "iata": "GUW",
    "icao": "UATG"
  },
  {
    "name": "Kzyl-Orda Southwest Airport",
    "city": "Kzyl-Orda",
    "country": "Kazakhstan",
    "iata": "KZO",
    "icao": "UAOO"
  },
  {
    "name": "South Bend Regional Airport",
    "city": "South Bend",
    "country": "United States",
    "iata": "SBN",
    "icao": "KSBN"
  },
  {
    "name": "Bykovo Airport",
    "city": "Moscow",
    "country": "Russia",
    "iata": "BKA",
    "icao": "UUBB"
  },
  {
    "name": "Talagi Airport",
    "city": "Arkhangelsk",
    "country": "Russia",
    "iata": "ARH",
    "icao": "ULAA"
  },
  {
    "name": "Saratov Central Airport",
    "city": "Saratov",
    "country": "Russia",
    "iata": "RTW",
    "icao": "UWSS"
  },
  {
    "name": "Novy Urengoy Airport",
    "city": "Novy Urengoy",
    "country": "Russia",
    "iata": "NUX",
    "icao": "USMU"
  },
  {
    "name": "Noyabrsk Airport",
    "city": "Noyabrsk",
    "country": "Russia",
    "iata": "NOJ",
    "icao": "USRO"
  },
  {
    "name": "Aktau Airport",
    "city": "Aktau",
    "country": "Kazakhstan",
    "iata": "SCO",
    "icao": "UATE"
  },
  {
    "name": "Ukhta Airport",
    "city": "Ukhta",
    "country": "Russia",
    "iata": "UCT",
    "icao": "UUYH"
  },
  {
    "name": "Usinsk Airport",
    "city": "Usinsk",
    "country": "Russia",
    "iata": "USK",
    "icao": "UUYS"
  },
  {
    "name": "Pechora Airport",
    "city": "Pechora",
    "country": "Russia",
    "iata": "PEX",
    "icao": "UUYP"
  },
  {
    "name": "Naryan Mar Airport",
    "city": "Naryan-Mar",
    "country": "Russia",
    "iata": "NNM",
    "icao": "ULAM"
  },
  {
    "name": "Pskov Airport",
    "city": "Pskov",
    "country": "Russia",
    "iata": "PKV",
    "icao": "ULOO"
  },
  {
    "name": "Kogalym International Airport",
    "city": "Kogalym",
    "country": "Russia",
    "iata": "KGP",
    "icao": "USRK"
  },
  {
    "name": "Yemelyanovo Airport",
    "city": "Krasnoyarsk",
    "country": "Russia",
    "iata": "KJA",
    "icao": "UNKL"
  },
  {
    "name": "Sary-Arka Airport",
    "city": "Karaganda",
    "country": "Kazakhstan",
    "iata": "KGF",
    "icao": "UAKK"
  },
  {
    "name": "Novosibirsk North Airport",
    "city": "Novosibirsk",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UNCC"
  },
  {
    "name": "Uray Airport",
    "city": "Uraj",
    "country": "Russia",
    "iata": "URJ",
    "icao": "USHU"
  },
  {
    "name": "Ivanovo South Airport",
    "city": "Ivanovo",
    "country": "Russia",
    "iata": "IWA",
    "icao": "UUBI"
  },
  {
    "name": "Longjia Airport",
    "city": "Changchun",
    "country": "China",
    "iata": "CGQ",
    "icao": "ZYCC"
  },
  {
    "name": "Niigata Airport",
    "city": "Niigata",
    "country": "Japan",
    "iata": "KIJ",
    "icao": "RJSN"
  },
  {
    "name": "Johnston Atoll Airport",
    "city": "Johnston Island",
    "country": "Johnston Atoll",
    "iata": "JON",
    "icao": "PJON"
  },
  {
    "name": "Smith Field",
    "city": "Fort Wayne IN",
    "country": "United States",
    "iata": "SMD",
    "icao": "KSMD"
  },
  {
    "name": "Arcata Airport",
    "city": "Arcata CA",
    "country": "United States",
    "iata": "ACV",
    "icao": "KACV"
  },
  {
    "name": "Albert J Ellis Airport",
    "city": "Jacksonville NC",
    "country": "United States",
    "iata": "OAJ",
    "icao": "KOAJ"
  },
  {
    "name": "Tuscaloosa Regional Airport",
    "city": "Tuscaloosa AL",
    "country": "United States",
    "iata": "TCL",
    "icao": "KTCL"
  },
  {
    "name": "Dubuque Regional Airport",
    "city": "Dubuque IA",
    "country": "United States",
    "iata": "DBQ",
    "icao": "KDBQ"
  },
  {
    "name": "Shun Tak Heliport",
    "city": "Hong Kong",
    "country": "Hong Kong",
    "iata": "NONE",
    "icao": "VHST"
  },
  {
    "name": "Uru Harbour Airport",
    "city": "Atoifi",
    "country": "Solomon Islands",
    "iata": "ATD",
    "icao": "AGAT"
  },
  {
    "name": "Auki Airport",
    "city": "Auki",
    "country": "Solomon Islands",
    "iata": "AKS",
    "icao": "AGGA"
  },
  {
    "name": "Ballalae Airport",
    "city": "Ballalae",
    "country": "Solomon Islands",
    "iata": "BAS",
    "icao": "AGGE"
  },
  {
    "name": "Fera/Maringe Airport",
    "city": "Fera Island",
    "country": "Solomon Islands",
    "iata": "FRE",
    "icao": "AGGF"
  },
  {
    "name": "Babanakira Airport",
    "city": "Mbambanakira",
    "country": "Solomon Islands",
    "iata": "MBU",
    "icao": "AGGI"
  },
  {
    "name": "Ngorangora Airport",
    "city": "Kirakira",
    "country": "Solomon Islands",
    "iata": "IRA",
    "icao": "AGGK"
  },
  {
    "name": "Santa Cruz/Graciosa Bay/Luova Airport",
    "city": "Santa Cruz/Graciosa Bay/Luova",
    "country": "Solomon Islands",
    "iata": "SCZ",
    "icao": "AGGL"
  },
  {
    "name": "Munda Airport",
    "city": "Munda",
    "country": "Solomon Islands",
    "iata": "MUA",
    "icao": "AGGM"
  },
  {
    "name": "Nusatupe Airport",
    "city": "Gizo",
    "country": "Solomon Islands",
    "iata": "GZO",
    "icao": "AGGN"
  },
  {
    "name": "Mono Airport",
    "city": "Stirling Island",
    "country": "Solomon Islands",
    "iata": "MNY",
    "icao": "AGGO"
  },
  {
    "name": "Rennell/Tingoa Airport",
    "city": "Rennell Island",
    "country": "Solomon Islands",
    "iata": "RNL",
    "icao": "AGGR"
  },
  {
    "name": "Marau Airport",
    "city": "Marau",
    "country": "Solomon Islands",
    "iata": "RUS",
    "icao": "AGGU"
  },
  {
    "name": "Suavanao Airport",
    "city": "Suavanao",
    "country": "Solomon Islands",
    "iata": "VAO",
    "icao": "AGGV"
  },
  {
    "name": "Kaghau Airport",
    "city": "Kagau Island",
    "country": "Solomon Islands",
    "iata": "KGE",
    "icao": "AGKG"
  },
  {
    "name": "Ramata Airport",
    "city": "Ramata",
    "country": "Solomon Islands",
    "iata": "RBV",
    "icao": "AGRM"
  },
  {
    "name": "Buka Airport",
    "city": "Buka Island",
    "country": "Papua New Guinea",
    "iata": "BUA",
    "icao": "AYBK"
  },
  {
    "name": "Chimbu Airport",
    "city": "Kundiawa",
    "country": "Papua New Guinea",
    "iata": "CMU",
    "icao": "AYCH"
  },
  {
    "name": "Daru Airport",
    "city": "Daru",
    "country": "Papua New Guinea",
    "iata": "DAU",
    "icao": "AYDU"
  },
  {
    "name": "Gurney Airport",
    "city": "Gurney",
    "country": "Papua New Guinea",
    "iata": "GUR",
    "icao": "AYGN"
  },
  {
    "name": "Girua Airport",
    "city": "Girua",
    "country": "Papua New Guinea",
    "iata": "PNP",
    "icao": "AYGR"
  },
  {
    "name": "Kimbe Airport",
    "city": "Hoskins",
    "country": "Papua New Guinea",
    "iata": "HKN",
    "icao": "AYHK"
  },
  {
    "name": "Kiunga Airport",
    "city": "Kiunga",
    "country": "Papua New Guinea",
    "iata": "UNG",
    "icao": "AYKI"
  },
  {
    "name": "Kikori Airport",
    "city": "Kikori",
    "country": "Papua New Guinea",
    "iata": "KRI",
    "icao": "AYKK"
  },
  {
    "name": "Kerema Airport",
    "city": "Kerema",
    "country": "Papua New Guinea",
    "iata": "KMA",
    "icao": "AYKM"
  },
  {
    "name": "Kavieng Airport",
    "city": "Kavieng",
    "country": "Papua New Guinea",
    "iata": "KVG",
    "icao": "AYKV"
  },
  {
    "name": "Mendi Airport",
    "city": "Mendi",
    "country": "Papua New Guinea",
    "iata": "MDU",
    "icao": "AYMN"
  },
  {
    "name": "Momote Airport",
    "city": "Momote",
    "country": "Papua New Guinea",
    "iata": "MAS",
    "icao": "AYMO"
  },
  {
    "name": "Moro Airport",
    "city": "Moro",
    "country": "Papua New Guinea",
    "iata": "MXH",
    "icao": "AYMR"
  },
  {
    "name": "Misima Island Airport",
    "city": "Misima Island",
    "country": "Papua New Guinea",
    "iata": "MIS",
    "icao": "AYMS"
  },
  {
    "name": "Tari Airport",
    "city": "Tari",
    "country": "Papua New Guinea",
    "iata": "TIZ",
    "icao": "AYTA"
  },
  {
    "name": "Tabubil Airport",
    "city": "Tabubil",
    "country": "Papua New Guinea",
    "iata": "TBG",
    "icao": "AYTB"
  },
  {
    "name": "Tokua Airport",
    "city": "Tokua",
    "country": "Papua New Guinea",
    "iata": "RAB",
    "icao": "AYTK"
  },
  {
    "name": "Vanimo Airport",
    "city": "Vanimo",
    "country": "Papua New Guinea",
    "iata": "VAI",
    "icao": "AYVN"
  },
  {
    "name": "Wapenamanda Airport",
    "city": "Wapenamanda",
    "country": "Papua New Guinea",
    "iata": "WBM",
    "icao": "AYWD"
  },
  {
    "name": "Alluitsup Paa Heliport",
    "city": "Alluitsup Paa",
    "country": "Greenland",
    "iata": "LLU",
    "icao": "BGAP"
  },
  {
    "name": "Neerlerit Inaat Airport",
    "city": "Neerlerit Inaat",
    "country": "Greenland",
    "iata": "CNP",
    "icao": "BGCO"
  },
  {
    "name": "Paamiut Heliport",
    "city": "Paamiut",
    "country": "Greenland",
    "iata": "JFR",
    "icao": "BGFH"
  },
  {
    "name": "Qeqertarsuaq Heliport",
    "city": "Qeqertarsuaq Airport",
    "country": "Greenland",
    "iata": "JGO",
    "icao": "BGGN"
  },
  {
    "name": "Qaqortoq Heliport",
    "city": "Qaqortoq",
    "country": "Greenland",
    "iata": "JJU",
    "icao": "BGJH"
  },
  {
    "name": "Maniitsoq Airport",
    "city": "Maniitsoq",
    "country": "Greenland",
    "iata": "JSU",
    "icao": "BGMQ"
  },
  {
    "name": "Nanortalik Heliport",
    "city": "Nanortalik",
    "country": "Greenland",
    "iata": "JNN",
    "icao": "BGNN"
  },
  {
    "name": "Narsaq Heliport",
    "city": "Narsaq",
    "country": "Greenland",
    "iata": "JNS",
    "icao": "BGNS"
  },
  {
    "name": "Qaanaaq Airport",
    "city": "Qaanaaq",
    "country": "Greenland",
    "iata": "NAQ",
    "icao": "BGQQ"
  },
  {
    "name": "Sisimiut Airport",
    "city": "Sisimiut",
    "country": "Greenland",
    "iata": "JHS",
    "icao": "BGSS"
  },
  {
    "name": "Upernavik Airport",
    "city": "Upernavik",
    "country": "Greenland",
    "iata": "JUV",
    "icao": "BGUK"
  },
  {
    "name": "Qaarsut Airport",
    "city": "Uummannaq",
    "country": "Greenland",
    "iata": "JQA",
    "icao": "BGUQ"
  },
  {
    "name": "Grímsey Airport",
    "city": "Grímsey",
    "country": "Iceland",
    "iata": "GRY",
    "icao": "BIGR"
  },
  {
    "name": "Thorshofn Airport",
    "city": "Thorshofn",
    "country": "Iceland",
    "iata": "THO",
    "icao": "BITN"
  },
  {
    "name": "Vopnafjörður Airport",
    "city": "Vopnafjörður",
    "country": "Iceland",
    "iata": "VPN",
    "icao": "BIVO"
  },
  {
    "name": "Whistler/Green Lake Water Aerodrome",
    "city": "Whistler",
    "country": "Canada",
    "iata": "YWS",
    "icao": "CAE5"
  },
  {
    "name": "Anahim Lake Airport",
    "city": "Anahim Lake",
    "country": "Canada",
    "iata": "YAA",
    "icao": "CAJ4"
  },
  {
    "name": "Williams Harbour Airport",
    "city": "Williams Harbour",
    "country": "Canada",
    "iata": "YWM",
    "icao": "CCA6"
  },
  {
    "name": "St. Lewis (Fox Harbour) Airport",
    "city": "St. Lewis",
    "country": "Canada",
    "iata": "YFX",
    "icao": "CCK4"
  },
  {
    "name": "Port Hope Simpson Airport",
    "city": "Port Hope Simpson",
    "country": "Canada",
    "iata": "YHA",
    "icao": "CCP4"
  },
  {
    "name": "Rigolet Airport",
    "city": "Rigolet",
    "country": "Canada",
    "iata": "YRG",
    "icao": "CCZ2"
  },
  {
    "name": "Colville Lake Airport",
    "city": "Colville Lake",
    "country": "Canada",
    "iata": "YCK",
    "icao": "CEB3"
  },
  {
    "name": "Whatì Airport",
    "city": "Whatì",
    "country": "Canada",
    "iata": "YLE",
    "icao": "CEM3"
  },
  {
    "name": "Summer Beaver Airport",
    "city": "Summer Beaver",
    "country": "Canada",
    "iata": "SUR",
    "icao": "CJV7"
  },
  {
    "name": "Wapekeka Airport",
    "city": "Angling Lake",
    "country": "Canada",
    "iata": "YAX",
    "icao": "CKB6"
  },
  {
    "name": "Wunnumin Lake Airport",
    "city": "Wunnumin Lake",
    "country": "Canada",
    "iata": "WNN",
    "icao": "CKL3"
  },
  {
    "name": "North Spirit Lake Airport",
    "city": "North Spirit Lake",
    "country": "Canada",
    "iata": "YNO",
    "icao": "CKQ3"
  },
  {
    "name": "Bearskin Lake Airport",
    "city": "Bearskin Lake",
    "country": "Canada",
    "iata": "XBE",
    "icao": "CNE3"
  },
  {
    "name": "Kingfisher Lake Airport",
    "city": "Kingfisher Lake",
    "country": "Canada",
    "iata": "KIF",
    "icao": "CNM5"
  },
  {
    "name": "Ogoki Post Airport",
    "city": "Ogoki Post",
    "country": "Canada",
    "iata": "YOG",
    "icao": "CNT3"
  },
  {
    "name": "Poplar Hill Airport",
    "city": "Poplar Hill",
    "country": "Canada",
    "iata": "YHP",
    "icao": "CPV7"
  },
  {
    "name": "Chisasibi Airport",
    "city": "Chisasibi",
    "country": "Canada",
    "iata": "YKU",
    "icao": "CSU2"
  },
  {
    "name": "Tête-à-la-Baleine Airport",
    "city": "Tête-à-la-Baleine",
    "country": "Canada",
    "iata": "ZTB",
    "icao": "CTB6"
  },
  {
    "name": "La Tabatière Airport",
    "city": "La Tabatière",
    "country": "Canada",
    "iata": "ZLT",
    "icao": "CTU5"
  },
  {
    "name": "Cat Lake Airport",
    "city": "Cat Lake",
    "country": "Canada",
    "iata": "YAC",
    "icao": "CYAC"
  },
  {
    "name": "Fort Frances Municipal Airport",
    "city": "Fort Frances",
    "country": "Canada",
    "iata": "YAG",
    "icao": "CYAG"
  },
  {
    "name": "Kasabonika Airport",
    "city": "Kasabonika",
    "country": "Canada",
    "iata": "XKS",
    "icao": "CYAQ"
  },
  {
    "name": "Kangirsuk Airport",
    "city": "Kangirsuk",
    "country": "Canada",
    "iata": "YKG",
    "icao": "CYAS"
  },
  {
    "name": "Attawapiskat Airport",
    "city": "Attawapiskat",
    "country": "Canada",
    "iata": "YAT",
    "icao": "CYAT"
  },
  {
    "name": "Lac Du Bonnet Airport",
    "city": "Lac Du Bonnet",
    "country": "Canada",
    "iata": "NONE",
    "icao": "CYAX"
  },
  {
    "name": "Uranium City Airport",
    "city": "Uranium City",
    "country": "Canada",
    "iata": "YBE",
    "icao": "CYBE"
  },
  {
    "name": "Lourdes de Blanc Sablon Airport",
    "city": "Lourdes-De-Blanc-Sablon",
    "country": "Canada",
    "iata": "YBX",
    "icao": "CYBX"
  },
  {
    "name": "Cartwright Airport",
    "city": "Cartwright",
    "country": "Canada",
    "iata": "YRF",
    "icao": "CYCA"
  },
  {
    "name": "Chesterfield Inlet Airport",
    "city": "Chesterfield Inlet",
    "country": "Canada",
    "iata": "YCS",
    "icao": "CYCS"
  },
  {
    "name": "Nain Airport",
    "city": "Nain",
    "country": "Canada",
    "iata": "YDP",
    "icao": "CYDP"
  },
  {
    "name": "Fort Severn Airport",
    "city": "Fort Severn",
    "country": "Canada",
    "iata": "YER",
    "icao": "CYER"
  },
  {
    "name": "Fort Albany Airport",
    "city": "Fort Albany",
    "country": "Canada",
    "iata": "YFA",
    "icao": "CYFA"
  },
  {
    "name": "Fort Hope Airport",
    "city": "Fort Hope",
    "country": "Canada",
    "iata": "YFH",
    "icao": "CYFH"
  },
  {
    "name": "Makkovik Airport",
    "city": "Makkovik",
    "country": "Canada",
    "iata": "YMN",
    "icao": "CYFT"
  },
  {
    "name": "Texada Gillies Bay Airport",
    "city": "Texada",
    "country": "Canada",
    "iata": "YGB",
    "icao": "CYGB"
  },
  {
    "name": "Gods Lake Narrows Airport",
    "city": "Gods Lake Narrows",
    "country": "Canada",
    "iata": "YGO",
    "icao": "CYGO"
  },
  {
    "name": "Igloolik Airport",
    "city": "Igloolik",
    "country": "Canada",
    "iata": "YGT",
    "icao": "CYGT"
  },
  {
    "name": "Kuujjuarapik Airport",
    "city": "Kuujjuarapik",
    "country": "Canada",
    "iata": "YGW",
    "icao": "CYGW"
  },
  {
    "name": "Gillam Airport",
    "city": "Gillam",
    "country": "Canada",
    "iata": "YGX",
    "icao": "CYGX"
  },
  {
    "name": "Grise Fiord Airport",
    "city": "Grise Fiord",
    "country": "Canada",
    "iata": "YGZ",
    "icao": "CYGZ"
  },
  {
    "name": "Quaqtaq Airport",
    "city": "Quaqtaq",
    "country": "Canada",
    "iata": "YQC",
    "icao": "CYHA"
  },
  {
    "name": "Vancouver Harbour Water Aerodrome",
    "city": "Vancouver",
    "country": "Canada",
    "iata": "CXH",
    "icao": "CYHC"
  },
  {
    "name": "Nemiscau Airport",
    "city": "Nemiscau",
    "country": "Canada",
    "iata": "YNS",
    "icao": "CYHH"
  },
  {
    "name": "Hopedale Airport",
    "city": "Hopedale",
    "country": "Canada",
    "iata": "YHO",
    "icao": "CYHO"
  },
  {
    "name": "Chevery Airport",
    "city": "Chevery",
    "country": "Canada",
    "iata": "YHR",
    "icao": "CYHR"
  },
  {
    "name": "Ivujivik Airport",
    "city": "Ivujivik",
    "country": "Canada",
    "iata": "YIK",
    "icao": "CYIK"
  },
  {
    "name": "Island Lake Airport",
    "city": "Island Lake",
    "country": "Canada",
    "iata": "YIV",
    "icao": "CYIV"
  },
  {
    "name": "Akulivik Airport",
    "city": "Akulivik",
    "country": "Canada",
    "iata": "AKV",
    "icao": "CYKO"
  },
  {
    "name": "Waskaganish Airport",
    "city": "Waskaganish",
    "country": "Canada",
    "iata": "YKQ",
    "icao": "CYKQ"
  },
  {
    "name": "Aupaluk Airport",
    "city": "Aupaluk",
    "country": "Canada",
    "iata": "YPJ",
    "icao": "CYLA"
  },
  {
    "name": "Kimmirut Airport",
    "city": "Kimmirut",
    "country": "Canada",
    "iata": "YLC",
    "icao": "CYLC"
  },
  {
    "name": "Lansdowne House Airport",
    "city": "Lansdowne House",
    "country": "Canada",
    "iata": "YLH",
    "icao": "CYLH"
  },
  {
    "name": "St Georges Airport",
    "city": "Lutselk'e",
    "country": "Canada",
    "iata": "YSG",
    "icao": "CYSG"
  },
  {
    "name": "Kangiqsualujjuaq (Georges River) Airport",
    "city": "Kangiqsualujjuaq",
    "country": "Canada",
    "iata": "XGR",
    "icao": "CYLU"
  },
  {
    "name": "Mary's Harbour Airport",
    "city": "Mary's Harbour",
    "country": "Canada",
    "iata": "YMH",
    "icao": "CYMH"
  },
  {
    "name": "Chapais Airport",
    "city": "Chibougamau",
    "country": "Canada",
    "iata": "YMT",
    "icao": "CYMT"
  },
  {
    "name": "Umiujaq Airport",
    "city": "Umiujaq",
    "country": "Canada",
    "iata": "YUD",
    "icao": "CYMU"
  },
  {
    "name": "Wemindji Airport",
    "city": "Wemindji",
    "country": "Canada",
    "iata": "YNC",
    "icao": "CYNC"
  },
  {
    "name": "Norway House Airport",
    "city": "Norway House",
    "country": "Canada",
    "iata": "YNE",
    "icao": "CYNE"
  },
  {
    "name": "Points North Landing Airport",
    "city": "Points North Landing",
    "country": "Canada",
    "iata": "YNL",
    "icao": "CYNL"
  },
  {
    "name": "Oxford House Airport",
    "city": "Oxford House",
    "country": "Canada",
    "iata": "YOH",
    "icao": "CYOH"
  },
  {
    "name": "Inukjuak Airport",
    "city": "Inukjuak",
    "country": "Canada",
    "iata": "YPH",
    "icao": "CYPH"
  },
  {
    "name": "Pikangikum Airport",
    "city": "Pikangikum",
    "country": "Canada",
    "iata": "YPM",
    "icao": "CYPM"
  },
  {
    "name": "Peawanuck Airport",
    "city": "Peawanuck",
    "country": "Canada",
    "iata": "YPO",
    "icao": "CYPO"
  },
  {
    "name": "Powell River Airport",
    "city": "Powell River",
    "country": "Canada",
    "iata": "YPW",
    "icao": "CYPW"
  },
  {
    "name": "The Pas Airport",
    "city": "The Pas",
    "country": "Canada",
    "iata": "YQD",
    "icao": "CYQD"
  },
  {
    "name": "Nakina Airport",
    "city": "Nakina",
    "country": "Canada",
    "iata": "YQN",
    "icao": "CYQN"
  },
  {
    "name": "Rae Lakes Airport",
    "city": "Gamètì",
    "country": "Canada",
    "iata": "YRA",
    "icao": "CYRA"
  },
  {
    "name": "Red Lake Airport",
    "city": "Red Lake",
    "country": "Canada",
    "iata": "YRL",
    "icao": "CYRL"
  },
  {
    "name": "Stony Rapids Airport",
    "city": "Stony Rapids",
    "country": "Canada",
    "iata": "YSF",
    "icao": "CYSF"
  },
  {
    "name": "Sanikiluaq Airport",
    "city": "Sanikiluaq",
    "country": "Canada",
    "iata": "YSK",
    "icao": "CYSK"
  },
  {
    "name": "St. Theresa Point Airport",
    "city": "St. Theresa Point",
    "country": "Canada",
    "iata": "YST",
    "icao": "CYST"
  },
  {
    "name": "Big Trout Lake Airport",
    "city": "Big Trout Lake",
    "country": "Canada",
    "iata": "YTL",
    "icao": "CYTL"
  },
  {
    "name": "Deer Lake Airport",
    "city": "Deer Lake",
    "country": "Canada",
    "iata": "YVZ",
    "icao": "CYVZ"
  },
  {
    "name": "Webequie Airport",
    "city": "Webequie",
    "country": "Canada",
    "iata": "YWP",
    "icao": "CYWP"
  },
  {
    "name": "Whale Cove Airport",
    "city": "Whale Cove",
    "country": "Canada",
    "iata": "YXN",
    "icao": "CYXN"
  },
  {
    "name": "Salluit Airport",
    "city": "Salluit",
    "country": "Canada",
    "iata": "YZG",
    "icao": "CYZG"
  },
  {
    "name": "York Landing Airport",
    "city": "York Landing",
    "country": "Canada",
    "iata": "ZAC",
    "icao": "CZAC"
  },
  {
    "name": "Ilford Airport",
    "city": "Ilford",
    "country": "Canada",
    "iata": "ILF",
    "icao": "CZBD"
  },
  {
    "name": "Bathurst Airport",
    "city": "Bathurst",
    "country": "Canada",
    "iata": "ZBF",
    "icao": "CZBF"
  },
  {
    "name": "Eastmain River Airport",
    "city": "Eastmain River",
    "country": "Canada",
    "iata": "ZEM",
    "icao": "CZEM"
  },
  {
    "name": "Fond-Du-Lac Airport",
    "city": "Fond-Du-Lac",
    "country": "Canada",
    "iata": "ZFD",
    "icao": "CZFD"
  },
  {
    "name": "Gods River Airport",
    "city": "Gods River",
    "country": "Canada",
    "iata": "ZGI",
    "icao": "CZGI"
  },
  {
    "name": "Swan River Airport",
    "city": "Swan River",
    "country": "Canada",
    "iata": "ZJN",
    "icao": "CZJN"
  },
  {
    "name": "Kashechewan Airport",
    "city": "Kashechewan",
    "country": "Canada",
    "iata": "ZKE",
    "icao": "CZKE"
  },
  {
    "name": "Muskrat Dam Airport",
    "city": "Muskrat Dam",
    "country": "Canada",
    "iata": "MSA",
    "icao": "CZMD"
  },
  {
    "name": "Masset Airport",
    "city": "Masset",
    "country": "Canada",
    "iata": "ZMT",
    "icao": "CZMT"
  },
  {
    "name": "Sachigo Lake Airport",
    "city": "Sachigo Lake",
    "country": "Canada",
    "iata": "ZPB",
    "icao": "CZPB"
  },
  {
    "name": "Round Lake (Weagamow Lake) Airport",
    "city": "Round Lake",
    "country": "Canada",
    "iata": "ZRJ",
    "icao": "CZRJ"
  },
  {
    "name": "Sandy Lake Airport",
    "city": "Sandy Lake",
    "country": "Canada",
    "iata": "ZSJ",
    "icao": "CZSJ"
  },
  {
    "name": "Shamattawa Airport",
    "city": "Shamattawa",
    "country": "Canada",
    "iata": "ZTM",
    "icao": "CZTM"
  },
  {
    "name": "Churchill Falls Airport",
    "city": "Churchill Falls",
    "country": "Canada",
    "iata": "ZUM",
    "icao": "CZUM"
  },
  {
    "name": "Wollaston Lake Airport",
    "city": "Wollaston Lake",
    "country": "Canada",
    "iata": "ZWL",
    "icao": "CZWL"
  },
  {
    "name": "Batna Airport",
    "city": "Batna",
    "country": "Algeria",
    "iata": "BLJ",
    "icao": "DABT"
  },
  {
    "name": "Béchar Boudghene Ben Ali Lotfi Airport",
    "city": "Béchar",
    "country": "Algeria",
    "iata": "CBH",
    "icao": "DAOR"
  },
  {
    "name": "Bordj Badji Mokhtar Airport",
    "city": "Bordj Badji Mokhtar",
    "country": "Algeria",
    "iata": "BMW",
    "icao": "DATM"
  },
  {
    "name": "Guemar Airport",
    "city": "Guemar",
    "country": "Algeria",
    "iata": "ELU",
    "icao": "DAUO"
  },
  {
    "name": "Kumasi Airport",
    "city": "Kumasi",
    "country": "Ghana",
    "iata": "KMS",
    "icao": "DGSI"
  },
  {
    "name": "Heringsdorf Airport",
    "city": "Heringsdorf",
    "country": "Germany",
    "iata": "HDF",
    "icao": "EDAH"
  },
  {
    "name": "Heide-Büsum Airport",
    "city": "Büsum",
    "country": "Germany",
    "iata": "HEI",
    "icao": "EDXB"
  },
  {
    "name": "Helgoland-Düne Airport",
    "city": "Helgoland",
    "country": "Germany",
    "iata": "HGL",
    "icao": "EDXH"
  },
  {
    "name": "Seinäjoki Airport",
    "city": "Seinäjoki / Ilmajoki",
    "country": "Finland",
    "iata": "SJY",
    "icao": "EFSI"
  },
  {
    "name": "Nottingham Airport",
    "city": "Nottingham",
    "country": "United Kingdom",
    "iata": "NQT",
    "icao": "EGBN"
  },
  {
    "name": "Robin Hood Doncaster Sheffield Airport",
    "city": "Doncaster, Sheffield",
    "country": "United Kingdom",
    "iata": "DSA",
    "icao": null
  },
  {
    "name": "Campbeltown Airport",
    "city": "Campbeltown",
    "country": "United Kingdom",
    "iata": "CAL",
    "icao": "EGEC"
  },
  {
    "name": "Eday Airport",
    "city": "Eday",
    "country": "United Kingdom",
    "iata": "EOI",
    "icao": "EGED"
  },
  {
    "name": "Fair Isle Airport",
    "city": "Fair Isle",
    "country": "United Kingdom",
    "iata": "FIE",
    "icao": "EGEF"
  },
  {
    "name": "North Ronaldsay Airport",
    "city": "North Ronaldsay",
    "country": "United Kingdom",
    "iata": "NRL",
    "icao": "EGEN"
  },
  {
    "name": "Papa Westray Airport",
    "city": "Papa Westray",
    "country": "United Kingdom",
    "iata": "PPW",
    "icao": "EGEP"
  },
  {
    "name": "Stronsay Airport",
    "city": "Stronsay",
    "country": "United Kingdom",
    "iata": "SOY",
    "icao": "EGER"
  },
  {
    "name": "Sanday Airport",
    "city": "Sanday",
    "country": "United Kingdom",
    "iata": "NDY",
    "icao": "EGES"
  },
  {
    "name": "Lerwick / Tingwall Airport",
    "city": "Lerwick",
    "country": "United Kingdom",
    "iata": "LWK",
    "icao": "EGET"
  },
  {
    "name": "Westray Airport",
    "city": "Westray",
    "country": "United Kingdom",
    "iata": "WRY",
    "icao": "EGEW"
  },
  {
    "name": "Land's End Airport",
    "city": "Land's End",
    "country": "United Kingdom",
    "iata": "LEQ",
    "icao": "EGHC"
  },
  {
    "name": "Penzance Heliport",
    "city": "Penzance",
    "country": "United Kingdom",
    "iata": "PZE",
    "icao": "EGHK"
  },
  {
    "name": "Anglesey Airport",
    "city": "Angelsey",
    "country": "United Kingdom",
    "iata": "VLY",
    "icao": "EGOV"
  },
  {
    "name": "Barra Airport",
    "city": "Barra",
    "country": "United Kingdom",
    "iata": "BRR",
    "icao": "EGPR"
  },
  {
    "name": "Donegal Airport",
    "city": "Dongloe",
    "country": "Ireland",
    "iata": "CFN",
    "icao": "EIDL"
  },
  {
    "name": "Weston Airport",
    "city": "Leixlip",
    "country": "Ireland",
    "iata": "NONE",
    "icao": "EIWT"
  },
  {
    "name": "Sindal Airport",
    "city": "Sindal",
    "country": "Denmark",
    "iata": "CNL",
    "icao": "EKSN"
  },
  {
    "name": "Leknes Airport",
    "city": "Leknes",
    "country": "Norway",
    "iata": "LKN",
    "icao": "ENLK"
  },
  {
    "name": "Namsos Høknesøra Airport",
    "city": "Namsos",
    "country": "Norway",
    "iata": "OSY",
    "icao": "ENNM"
  },
  {
    "name": "Mo i Rana Airport, Røssvoll",
    "city": "Mo i Rana",
    "country": "Norway",
    "iata": "MQN",
    "icao": null
  },
  {
    "name": "Rørvik Airport, Ryum",
    "city": "Rørvik",
    "country": "Norway",
    "iata": "RVK",
    "icao": null
  },
  {
    "name": "Røst Airport",
    "city": "Røst",
    "country": "Norway",
    "iata": "RET",
    "icao": "ENRS"
  },
  {
    "name": "Sandane Airport (Anda)",
    "city": "Sandane",
    "country": "Norway",
    "iata": "SDN",
    "icao": "ENSD"
  },
  {
    "name": "Sogndal Airport",
    "city": "Sogndal",
    "country": "Norway",
    "iata": "SOG",
    "icao": "ENSG"
  },
  {
    "name": "Svolvær Helle Airport",
    "city": "Svolvær",
    "country": "Norway",
    "iata": "SVJ",
    "icao": "ENSH"
  },
  {
    "name": "Sørkjosen Airport",
    "city": "Sorkjosen",
    "country": "Norway",
    "iata": "SOJ",
    "icao": "ENSR"
  },
  {
    "name": "Vardø Airport, Svartnes",
    "city": "Vardø",
    "country": "Norway",
    "iata": "VAW",
    "icao": null
  },
  {
    "name": "Værøy Heliport",
    "city": "Værøy",
    "country": "Norway",
    "iata": "VRY",
    "icao": "ENVR"
  },
  {
    "name": "Bydgoszcz Ignacy Jan Paderewski Airport",
    "city": "Bydgoszcz",
    "country": "Poland",
    "iata": "BZG",
    "icao": "EPBY"
  },
  {
    "name": "Łódź Władysław Reymont Airport",
    "city": "Lodz",
    "country": "Poland",
    "iata": "LCJ",
    "icao": "EPLL"
  },
  {
    "name": "Åre Östersund Airport",
    "city": "Östersund",
    "country": "Sweden",
    "iata": "OSD",
    "icao": "ESNZ"
  },
  {
    "name": "Hagfors Airport",
    "city": "Hagfors",
    "country": "Sweden",
    "iata": "HFS",
    "icao": "ESOH"
  },
  {
    "name": "Karlstad Airport",
    "city": "Karlstad",
    "country": "Sweden",
    "iata": "KSD",
    "icao": "ESOK"
  },
  {
    "name": "Torsby Airport",
    "city": "Torsby",
    "country": "Sweden",
    "iata": "TYF",
    "icao": "ESST"
  },
  {
    "name": "Ängelholm-Helsingborg Airport",
    "city": "Ängelholm",
    "country": "Sweden",
    "iata": "AGH",
    "icao": "ESTA"
  },
  {
    "name": "Storuman Airport",
    "city": "Mohed",
    "country": "Sweden",
    "iata": "SQO",
    "icao": "ESUD"
  },
  {
    "name": "Hemavan Airport",
    "city": "Hemavan",
    "country": "Sweden",
    "iata": "HMV",
    "icao": "ESUT"
  },
  {
    "name": "Ventspils International Airport",
    "city": "Ventspils",
    "country": "Latvia",
    "iata": "VTS",
    "icao": "EVVA"
  },
  {
    "name": "Rand Airport",
    "city": "Johannesburg",
    "country": "South Africa",
    "iata": "QRA",
    "icao": "FAGM"
  },
  {
    "name": "Kruger Mpumalanga International Airport",
    "city": "Mpumalanga",
    "country": "South Africa",
    "iata": "MQP",
    "icao": "FAKN"
  },
  {
    "name": "Malamala Airport",
    "city": "Malamala",
    "country": "South Africa",
    "iata": "AAM",
    "icao": "FAMD"
  },
  {
    "name": "Mmabatho International Airport",
    "city": "Mafeking",
    "country": "South Africa",
    "iata": "MBD",
    "icao": "FAMM"
  },
  {
    "name": "Ghanzi Airport",
    "city": "Ghanzi",
    "country": "Botswana",
    "iata": "GNZ",
    "icao": "FBGZ"
  },
  {
    "name": "Orapa Airport",
    "city": "Orapa",
    "country": "Botswana",
    "iata": "ORP",
    "icao": "FBOR"
  },
  {
    "name": "Shakawe Airport",
    "city": "Shakawe",
    "country": "Botswana",
    "iata": "SWX",
    "icao": "FBSW"
  },
  {
    "name": "Limpopo Valley Airport",
    "city": "Tuli Lodge",
    "country": "Botswana",
    "iata": "TLD",
    "icao": "FBTL"
  },
  {
    "name": "Ngot Nzoungou Airport",
    "city": "Loubomo",
    "country": "Congo (Brazzaville)",
    "iata": "DIS",
    "icao": "FCPL"
  },
  {
    "name": "Chipata Airport",
    "city": "Chipata",
    "country": "Zambia",
    "iata": "CIP",
    "icao": "FLCP"
  },
  {
    "name": "Los Alamitos Army Air Field",
    "city": "Solwesi",
    "country": "Zambia",
    "iata": "SLI",
    "icao": "KSLI"
  },
  {
    "name": "Iconi Airport",
    "city": "Moroni",
    "country": "Comoros",
    "iata": "YVA",
    "icao": "FMCN"
  },
  {
    "name": "Antsalova Airport",
    "city": "Antsalova",
    "country": "Madagascar",
    "iata": "WAQ",
    "icao": "FMMG"
  },
  {
    "name": "Ankavandra Airport",
    "city": "Ankavandra",
    "country": "Madagascar",
    "iata": "JVA",
    "icao": "FMMK"
  },
  {
    "name": "Belo sur Tsiribihina Airport",
    "city": "Belo sur Tsiribihina",
    "country": "Madagascar",
    "iata": "BMD",
    "icao": "FMML"
  },
  {
    "name": "Maintirano Airport",
    "city": "Maintirano",
    "country": "Madagascar",
    "iata": "MXT",
    "icao": "FMMO"
  },
  {
    "name": "Morafenobe Airport",
    "city": "Morafenobe",
    "country": "Madagascar",
    "iata": "TVA",
    "icao": "FMMR"
  },
  {
    "name": "Tambohorano Airport",
    "city": "Tambohorano",
    "country": "Madagascar",
    "iata": "WTA",
    "icao": "FMMU"
  },
  {
    "name": "Tsiroanomandidy Airport",
    "city": "Tsiroanomandidy",
    "country": "Madagascar",
    "iata": "WTS",
    "icao": "FMMX"
  },
  {
    "name": "Ambatondrazaka Airport",
    "city": "Ambatondrazaka",
    "country": "Madagascar",
    "iata": "WAM",
    "icao": "FMMZ"
  },
  {
    "name": "Port Bergé Airport",
    "city": "Port Bergé",
    "country": "Madagascar",
    "iata": "WPB",
    "icao": "FMNG"
  },
  {
    "name": "Ambanja Airport",
    "city": "Ambanja",
    "country": "Madagascar",
    "iata": "NONE",
    "icao": "FMNJ"
  },
  {
    "name": "Soalala Airport",
    "city": "Soalala",
    "country": "Madagascar",
    "iata": "DWB",
    "icao": "FMNO"
  },
  {
    "name": "Mampikony Airport",
    "city": "Mampikony",
    "country": "Madagascar",
    "iata": "WMP",
    "icao": "FMNP"
  },
  {
    "name": "Nasa Shuttle Landing Facility Airport",
    "city": "Tsaratanana",
    "country": "Madagascar",
    "iata": "TTS",
    "icao": "KTTS"
  },
  {
    "name": "Mandritsara Airport",
    "city": "Mandritsara",
    "country": "Madagascar",
    "iata": "WMA",
    "icao": "FMNX"
  },
  {
    "name": "Manja Airport",
    "city": "Manja",
    "country": "Madagascar",
    "iata": "MJA",
    "icao": "FMSJ"
  },
  {
    "name": "Catumbela Airport",
    "city": "Catumbela",
    "country": "Angola",
    "iata": "CBT",
    "icao": "FNCT"
  },
  {
    "name": "Dundo Airport",
    "city": "Dundo",
    "country": "Angola",
    "iata": "DUE",
    "icao": "FNDU"
  },
  {
    "name": "Ngjiva Pereira Airport",
    "city": "Ondjiva",
    "country": "Angola",
    "iata": "VPE",
    "icao": "FNGI"
  },
  {
    "name": "Namibe Airport",
    "city": "Mocamedes",
    "country": "Angola",
    "iata": "MSZ",
    "icao": "FNMO"
  },
  {
    "name": "Koulamoutou Mabimbi Airport",
    "city": "Koulamoutou",
    "country": "Gabon",
    "iata": "KOU",
    "icao": "FOGK"
  },
  {
    "name": "Mouilla Ville Airport",
    "city": "Mouila",
    "country": "Gabon",
    "iata": "MJL",
    "icao": "FOGM"
  },
  {
    "name": "Tchibanga Airport",
    "city": "Tchibanga",
    "country": "Gabon",
    "iata": "TCH",
    "icao": "FOOT"
  },
  {
    "name": "Chimoio Airport",
    "city": "Chimoio",
    "country": "Mozambique",
    "iata": "VPY",
    "icao": "FQCH"
  },
  {
    "name": "Sarh Airport",
    "city": "Sarh",
    "country": "Chad",
    "iata": "SRH",
    "icao": "FTTA"
  },
  {
    "name": "Club Makokola Airport",
    "city": "Club Makokola",
    "country": "Malawi",
    "iata": "CMK",
    "icao": "FWCM"
  },
  {
    "name": "Luderitz Airport",
    "city": "Luderitz",
    "country": "Namibia",
    "iata": "LUD",
    "icao": "FYLZ"
  },
  {
    "name": "Ondangwa Airport",
    "city": "Ondangwa",
    "country": "Namibia",
    "iata": "OND",
    "icao": "FYOA"
  },
  {
    "name": "Oranjemund Airport",
    "city": "Oranjemund",
    "country": "Namibia",
    "iata": "OMD",
    "icao": "FYOG"
  },
  {
    "name": "Swakopmund Airport",
    "city": "Swakopmund",
    "country": "Namibia",
    "iata": "SWP",
    "icao": "FYSM"
  },
  {
    "name": "Eros Airport",
    "city": "Windhoek",
    "country": "Namibia",
    "iata": "ERS",
    "icao": "FYWE"
  },
  {
    "name": "Boma Airport",
    "city": "Boma",
    "country": "Congo (Kinshasa)",
    "iata": "BOA",
    "icao": "FZAJ"
  },
  {
    "name": "Tshimpi Airport",
    "city": "Matadi",
    "country": "Congo (Kinshasa)",
    "iata": "MAT",
    "icao": "FZAM"
  },
  {
    "name": "Inongo Airport",
    "city": "Inongo",
    "country": "Congo (Kinshasa)",
    "iata": "INO",
    "icao": "FZBA"
  },
  {
    "name": "Nioki Airport",
    "city": "Nioki",
    "country": "Congo (Kinshasa)",
    "iata": "NIO",
    "icao": "FZBI"
  },
  {
    "name": "Basango Mboliasa Airport",
    "city": "Kiri",
    "country": "Congo (Kinshasa)",
    "iata": "KRZ",
    "icao": "FZBT"
  },
  {
    "name": "Basankusu Airport",
    "city": "Basankusu",
    "country": "Congo (Kinshasa)",
    "iata": "BSU",
    "icao": "FZEN"
  },
  {
    "name": "Tshikapa Airport",
    "city": "Tshikapa",
    "country": "Congo (Kinshasa)",
    "iata": "TSH",
    "icao": "FZUK"
  },
  {
    "name": "Lodja Airport",
    "city": "Lodja",
    "country": "Congo (Kinshasa)",
    "iata": "LJA",
    "icao": "FZVA"
  },
  {
    "name": "Ilebo Airport",
    "city": "Ilebo",
    "country": "Congo (Kinshasa)",
    "iata": "PFR",
    "icao": "FZVS"
  },
  {
    "name": "La Gomera Airport",
    "city": "La Gomera",
    "country": "Spain",
    "iata": "GMZ",
    "icao": "GCGM"
  },
  {
    "name": "Sherbro International Airport",
    "city": "Bonthe",
    "country": "Sierra Leone",
    "iata": "BTE",
    "icao": "GFBN"
  },
  {
    "name": "Bo Airport",
    "city": "Bo",
    "country": "Sierra Leone",
    "iata": "KBS",
    "icao": "GFBO"
  },
  {
    "name": "Kenema Airport",
    "city": "Kenema",
    "country": "Sierra Leone",
    "iata": "KEN",
    "icao": "GFKE"
  },
  {
    "name": "Osvaldo Vieira International Airport",
    "city": "Bissau",
    "country": "Guinea-Bissau",
    "iata": "OXB",
    "icao": "GGOV"
  },
  {
    "name": "Smara Airport",
    "city": "Smara",
    "country": "Western Sahara",
    "iata": "SMW",
    "icao": "GMMA"
  },
  {
    "name": "Dakhla Airport",
    "city": "Dakhla",
    "country": "Western Sahara",
    "iata": "VIL",
    "icao": "GMMH"
  },
  {
    "name": "Mogador Airport",
    "city": "Essadouira",
    "country": "Morocco",
    "iata": "ESU",
    "icao": "GMMI"
  },
  {
    "name": "Hassan I Airport",
    "city": "El Aaiún",
    "country": "Western Sahara",
    "iata": "EUN",
    "icao": "GMML"
  },
  {
    "name": "Nador International Airport",
    "city": "El Aroui",
    "country": "Morocco",
    "iata": "NDR",
    "icao": "GMMW"
  },
  {
    "name": "Praia International Airport",
    "city": "Praia, Santiago Island",
    "country": "Cape Verde",
    "iata": "RAI",
    "icao": null
  },
  {
    "name": "São Filipe Airport",
    "city": "Sao Filipe, Fogo Island",
    "country": "Cape Verde",
    "iata": "SFL",
    "icao": null
  },
  {
    "name": "Baco Airport",
    "city": "Baco",
    "country": "Ethiopia",
    "iata": "BCO",
    "icao": "HABC"
  },
  {
    "name": "Beica Airport",
    "city": "Beica",
    "country": "Ethiopia",
    "iata": "BEI",
    "icao": "HABE"
  },
  {
    "name": "Combolcha Airport",
    "city": "Dessie",
    "country": "Ethiopia",
    "iata": "DSE",
    "icao": "HADC"
  },
  {
    "name": "Dembidollo Airport",
    "city": "Dembidollo",
    "country": "Ethiopia",
    "iata": "DEM",
    "icao": "HADD"
  },
  {
    "name": "Gode Airport",
    "city": "Gode",
    "country": "Ethiopia",
    "iata": "GDE",
    "icao": "HAGO"
  },
  {
    "name": "Gore Airport",
    "city": "Gore",
    "country": "Ethiopia",
    "iata": "GOR",
    "icao": "HAGR"
  },
  {
    "name": "Kabri Dehar Airport",
    "city": "Kabri Dehar",
    "country": "Ethiopia",
    "iata": "ABK",
    "icao": "HAKD"
  },
  {
    "name": "Mizan Teferi Airport",
    "city": "Mizan Teferi",
    "country": "Ethiopia",
    "iata": "MTF",
    "icao": "HAMT"
  },
  {
    "name": "Tippi Airport",
    "city": "Tippi",
    "country": "Ethiopia",
    "iata": "TIE",
    "icao": "HATP"
  },
  {
    "name": "Alula Airport",
    "city": "Alula",
    "country": "Somalia",
    "iata": "ALU",
    "icao": "HCMA"
  },
  {
    "name": "Bosaso Airport",
    "city": "Bosaso",
    "country": "Somalia",
    "iata": "BSA",
    "icao": "HCMF"
  },
  {
    "name": "Aden Adde International Airport",
    "city": "Mogadishu",
    "country": "Somalia",
    "iata": "MGQ",
    "icao": "HCMM"
  },
  {
    "name": "Galcaio Airport",
    "city": "Galcaio",
    "country": "Somalia",
    "iata": "GLK",
    "icao": "HCMR"
  },
  {
    "name": "Burao Airport",
    "city": "Burao",
    "country": "Somalia",
    "iata": "BUO",
    "icao": "HCMV"
  },
  {
    "name": "El Arish International Airport",
    "city": "El Arish",
    "country": "Egypt",
    "iata": "AAC",
    "icao": "HEAR"
  },
  {
    "name": "Assiut International Airport",
    "city": "Asyut",
    "country": "Egypt",
    "iata": "ATZ",
    "icao": "HEAT"
  },
  {
    "name": "Amboseli Airport",
    "city": "Amboseli National Park",
    "country": "Kenya",
    "iata": "ASV",
    "icao": "HKAM"
  },
  {
    "name": "Lokichoggio Airport",
    "city": "Lokichoggio",
    "country": "Kenya",
    "iata": "LKG",
    "icao": "HKLK"
  },
  {
    "name": "Malindi Airport",
    "city": "Malindi",
    "country": "Kenya",
    "iata": "MYD",
    "icao": "HKML"
  },
  {
    "name": "Nanyuki Airport",
    "city": "Nanyuki",
    "country": "Kenya",
    "iata": "NYK",
    "icao": "HKNY"
  },
  {
    "name": "Gardabya Airport",
    "city": "Sirt",
    "country": "Libya",
    "iata": "SRX",
    "icao": "HLGD"
  },
  {
    "name": "Gamal Abdel Nasser Airport",
    "city": "Tobruk",
    "country": "Libya",
    "iata": "TOB",
    "icao": "HLGN"
  },
  {
    "name": "Mitiga Airport",
    "city": "Tripoli",
    "country": "Libya",
    "iata": "MJI",
    "icao": "HLLM"
  },
  {
    "name": "La Abraq Airport",
    "city": "Al Bayda'",
    "country": "Libya",
    "iata": "LAQ",
    "icao": "HLLQ"
  },
  {
    "name": "Atbara Airport",
    "city": "Atbara",
    "country": "Sudan",
    "iata": "ATB",
    "icao": "HSAT"
  },
  {
    "name": "Nyala Airport",
    "city": "Nyala",
    "country": "Sudan",
    "iata": "UYL",
    "icao": "HSNN"
  },
  {
    "name": "Port Sudan New International Airport",
    "city": "Port Sudan",
    "country": "Sudan",
    "iata": "PZU",
    "icao": "HSPN"
  },
  {
    "name": "Bukoba Airport",
    "city": "Bukoba",
    "country": "Tanzania",
    "iata": "BKZ",
    "icao": "HTBU"
  },
  {
    "name": "Kigoma Airport",
    "city": "Kigoma",
    "country": "Tanzania",
    "iata": "TKQ",
    "icao": "HTKA"
  },
  {
    "name": "Kikwetu Airport",
    "city": "Lindi",
    "country": "Tanzania",
    "iata": "LDI",
    "icao": "HTLI"
  },
  {
    "name": "Musoma Airport",
    "city": "Musoma",
    "country": "Tanzania",
    "iata": "MUZ",
    "icao": "HTMU"
  },
  {
    "name": "Shinyanga Airport",
    "city": "Shinyanga",
    "country": "Tanzania",
    "iata": "SHY",
    "icao": "HTSY"
  },
  {
    "name": "Tabora Airport",
    "city": "Tabora",
    "country": "Tanzania",
    "iata": "TBO",
    "icao": "HTTB"
  },
  {
    "name": "Arua Airport",
    "city": "Arua",
    "country": "Uganda",
    "iata": "RUA",
    "icao": "HUAR"
  },
  {
    "name": "Gulu Airport",
    "city": "Gulu",
    "country": "Uganda",
    "iata": "ULU",
    "icao": "HUGU"
  },
  {
    "name": "Diu Airport",
    "city": "Diu",
    "country": "India",
    "iata": "DIU",
    "icao": "VA1P"
  },
  {
    "name": "Aberdeen Regional Airport",
    "city": "Aberdeen",
    "country": "United States",
    "iata": "ABR",
    "icao": "KABR"
  },
  {
    "name": "Southwest Georgia Regional Airport",
    "city": "Albany",
    "country": "United States",
    "iata": "ABY",
    "icao": "KABY"
  },
  {
    "name": "Athens Ben Epps Airport",
    "city": "Athens",
    "country": "United States",
    "iata": "AHN",
    "icao": "KAHN"
  },
  {
    "name": "Alamogordo White Sands Regional Airport",
    "city": "Alamogordo",
    "country": "United States",
    "iata": "ALM",
    "icao": "KALM"
  },
  {
    "name": "Waterloo Regional Airport",
    "city": "Waterloo",
    "country": "United States",
    "iata": "ALO",
    "icao": "KALO"
  },
  {
    "name": "Walla Walla Regional Airport",
    "city": "Walla Walla",
    "country": "United States",
    "iata": "ALW",
    "icao": "KALW"
  },
  {
    "name": "Alpena County Regional Airport",
    "city": "Alpena",
    "country": "United States",
    "iata": "APN",
    "icao": "KAPN"
  },
  {
    "name": "Watertown Regional Airport",
    "city": "Watertown",
    "country": "United States",
    "iata": "ATY",
    "icao": "KATY"
  },
  {
    "name": "Bradford Regional Airport",
    "city": "Bradford",
    "country": "United States",
    "iata": "BFD",
    "icao": "KBFD"
  },
  {
    "name": "Western Neb. Rgnl/William B. Heilig Airport",
    "city": "Scottsbluff",
    "country": "United States",
    "iata": "BFF",
    "icao": "KBFF"
  },
  {
    "name": "Raleigh County Memorial Airport",
    "city": "Beckley",
    "country": "United States",
    "iata": "BKW",
    "icao": "KBKW"
  },
  {
    "name": "Brunswick Golden Isles Airport",
    "city": "Brunswick",
    "country": "United States",
    "iata": "BQK",
    "icao": "KBQK"
  },
  {
    "name": "Southeast Iowa Regional Airport",
    "city": "Burlington",
    "country": "United States",
    "iata": "BRL",
    "icao": "KBRL"
  },
  {
    "name": "Jack Mc Namara Field Airport",
    "city": "Crescent City",
    "country": "United States",
    "iata": "CEC",
    "icao": "KCEC"
  },
  {
    "name": "Cape Girardeau Regional Airport",
    "city": "Cape Girardeau",
    "country": "United States",
    "iata": "CGI",
    "icao": "KCGI"
  },
  {
    "name": "Chippewa County International Airport",
    "city": "Sault Ste Marie",
    "country": "United States",
    "iata": "CIU",
    "icao": "KCIU"
  },
  {
    "name": "North Central West Virginia Airport",
    "city": "Clarksburg",
    "country": "United States",
    "iata": "CKB",
    "icao": "KCKB"
  },
  {
    "name": "William R Fairchild International Airport",
    "city": "Port Angeles",
    "country": "United States",
    "iata": "CLM",
    "icao": "KCLM"
  },
  {
    "name": "Houghton County Memorial Airport",
    "city": "Hancock",
    "country": "United States",
    "iata": "CMX",
    "icao": "KCMX"
  },
  {
    "name": "Dodge City Regional Airport",
    "city": "Dodge City",
    "country": "United States",
    "iata": "DDC",
    "icao": "KDDC"
  },
  {
    "name": "DuBois Regional Airport",
    "city": "Du Bois",
    "country": "United States",
    "iata": "DUJ",
    "icao": "KDUJ"
  },
  {
    "name": "Chippewa Valley Regional Airport",
    "city": "Eau Claire",
    "country": "United States",
    "iata": "EAU",
    "icao": "KEAU"
  },
  {
    "name": "Elko Regional Airport",
    "city": "Elko",
    "country": "United States",
    "iata": "EKO",
    "icao": "KEKO"
  },
  {
    "name": "New Bedford Regional Airport",
    "city": "New Bedford",
    "country": "United States",
    "iata": "EWB",
    "icao": "KEWB"
  },
  {
    "name": "Fayetteville Regional Grannis Field",
    "city": "Fayetteville",
    "country": "United States",
    "iata": "FAY",
    "icao": "KFAY"
  },
  {
    "name": "Wokal Field Glasgow International Airport",
    "city": "Glasgow",
    "country": "United States",
    "iata": "GGW",
    "icao": "KGGW"
  },
  {
    "name": "Central Nebraska Regional Airport",
    "city": "Grand Island",
    "country": "United States",
    "iata": "GRI",
    "icao": "KGRI"
  },
  {
    "name": "Memorial Field",
    "city": "Hot Springs",
    "country": "United States",
    "iata": "HOT",
    "icao": "KHOT"
  },
  {
    "name": "Tri-State/Milton J. Ferguson Field",
    "city": "Huntington",
    "country": "United States",
    "iata": "HTS",
    "icao": "KHTS"
  },
  {
    "name": "Kili Airport",
    "city": "Kili Island",
    "country": "Marshall Islands",
    "iata": "KIO",
    "icao": "Q51"
  },
  {
    "name": "Kirksville Regional Airport",
    "city": "Kirksville",
    "country": "United States",
    "iata": "IRK",
    "icao": "KIRK"
  },
  {
    "name": "Jamestown Regional Airport",
    "city": "Jamestown",
    "country": "United States",
    "iata": "JMS",
    "icao": "KJMS"
  },
  {
    "name": "Laramie Regional Airport",
    "city": "Laramie",
    "country": "United States",
    "iata": "LAR",
    "icao": "KLAR"
  },
  {
    "name": "Arnold Palmer Regional Airport",
    "city": "Latrobe",
    "country": "United States",
    "iata": "LBE",
    "icao": "KLBE"
  },
  {
    "name": "North Platte Regional Airport Lee Bird Field",
    "city": "North Platte",
    "country": "United States",
    "iata": "LBF",
    "icao": "KLBF"
  },
  {
    "name": "Lebanon Municipal Airport",
    "city": "Lebanon",
    "country": "United States",
    "iata": "LEB",
    "icao": "KLEB"
  },
  {
    "name": "Klamath Falls Airport",
    "city": "Klamath Falls",
    "country": "United States",
    "iata": "LMT",
    "icao": "KLMT"
  },
  {
    "name": "Lancaster Airport",
    "city": "Lancaster",
    "country": "United States",
    "iata": "LNS",
    "icao": "KLNS"
  },
  {
    "name": "Lewistown Municipal Airport",
    "city": "Lewistown",
    "country": "United States",
    "iata": "LWT",
    "icao": "KLWT"
  },
  {
    "name": "Lynchburg Regional Preston Glenn Field",
    "city": "Lynchburg",
    "country": "United States",
    "iata": "LYH",
    "icao": "KLYH"
  },
  {
    "name": "Muskegon County Airport",
    "city": "Muskegon",
    "country": "United States",
    "iata": "MKG",
    "icao": "KMKG"
  },
  {
    "name": "Frank Wiley Field",
    "city": "Miles City",
    "country": "United States",
    "iata": "MLS",
    "icao": "KMLS"
  },
  {
    "name": "Northwest Alabama Regional Airport",
    "city": "Muscle Shoals",
    "country": "United States",
    "iata": "MSL",
    "icao": "KMSL"
  },
  {
    "name": "Southwest Oregon Regional Airport",
    "city": "North Bend",
    "country": "United States",
    "iata": "OTH",
    "icao": "KOTH"
  },
  {
    "name": "Owensboro Daviess County Airport",
    "city": "Owensboro",
    "country": "United States",
    "iata": "OWB",
    "icao": "KOWB"
  },
  {
    "name": "Hattiesburg Laurel Regional Airport",
    "city": "Hattiesburg/Laurel",
    "country": "United States",
    "iata": "PIB",
    "icao": "KPIB"
  },
  {
    "name": "Pocatello Regional Airport",
    "city": "Pocatello",
    "country": "United States",
    "iata": "PIH",
    "icao": "KPIH"
  },
  {
    "name": "Pierre Regional Airport",
    "city": "Pierre",
    "country": "United States",
    "iata": "PIR",
    "icao": "KPIR"
  },
  {
    "name": "Pellston Regional Airport of Emmet County Airport",
    "city": "Pellston",
    "country": "United States",
    "iata": "PLN",
    "icao": "KPLN"
  },
  {
    "name": "Portsmouth International at Pease Airport",
    "city": "Portsmouth",
    "country": "United States",
    "iata": "PSM",
    "icao": "KPSM"
  },
  {
    "name": "Reading Regional Carl A Spaatz Field",
    "city": "Reading",
    "country": "United States",
    "iata": "RDG",
    "icao": "KRDG"
  },
  {
    "name": "Rhinelander Oneida County Airport",
    "city": "Rhinelander",
    "country": "United States",
    "iata": "RHI",
    "icao": "KRHI"
  },
  {
    "name": "Rock Springs Sweetwater County Airport",
    "city": "Rock Springs",
    "country": "United States",
    "iata": "RKS",
    "icao": "KRKS"
  },
  {
    "name": "Rutland - Southern Vermont Regional Airport",
    "city": "Rutland",
    "country": "United States",
    "iata": "RUT",
    "icao": "KRUT"
  },
  {
    "name": "San Luis County Regional Airport",
    "city": "San Luis Obispo",
    "country": "United States",
    "iata": "SBP",
    "icao": "KSBP"
  },
  {
    "name": "Sheridan County Airport",
    "city": "Sheridan",
    "country": "United States",
    "iata": "SHR",
    "icao": "KSHR"
  },
  {
    "name": "Adirondack Regional Airport",
    "city": "Saranac Lake",
    "country": "United States",
    "iata": "SLK",
    "icao": "KSLK"
  },
  {
    "name": "Salina Municipal Airport",
    "city": "Salina",
    "country": "United States",
    "iata": "SLN",
    "icao": "KSLN"
  },
  {
    "name": "Santa Maria Pub/Capt G Allan Hancock Field",
    "city": "Santa Maria",
    "country": "United States",
    "iata": "SMX",
    "icao": "KSMX"
  },
  {
    "name": "Tupelo Regional Airport",
    "city": "Tupelo",
    "country": "United States",
    "iata": "TUP",
    "icao": "KTUP"
  },
  {
    "name": "Quincy Regional Baldwin Field",
    "city": "Quincy",
    "country": "United States",
    "iata": "UIN",
    "icao": "KUIN"
  },
  {
    "name": "Victoria Regional Airport",
    "city": "Victoria",
    "country": "United States",
    "iata": "VCT",
    "icao": "KVCT"
  },
  {
    "name": "Valdosta Regional Airport",
    "city": "Valdosta",
    "country": "United States",
    "iata": "VLD",
    "icao": "KVLD"
  },
  {
    "name": "Worland Municipal Airport",
    "city": "Worland",
    "country": "United States",
    "iata": "WRL",
    "icao": "KWRL"
  },
  {
    "name": "Yakima Air Terminal McAllister Field",
    "city": "Yakima",
    "country": "United States",
    "iata": "YKM",
    "icao": "KYKM"
  },
  {
    "name": "Ercan International Airport",
    "city": "Nicosia",
    "country": "Cyprus",
    "iata": "ECN",
    "icao": "LCEN"
  },
  {
    "name": "Logroño-Agoncillo Airport",
    "city": "Logroño-Agoncillo",
    "country": "Spain",
    "iata": "RJL",
    "icao": "LELO"
  },
  {
    "name": "Île d'Yeu Airport",
    "city": "Île d'Yeu",
    "country": "France",
    "iata": "IDY",
    "icao": "LFEY"
  },
  {
    "name": "Angers-Loire Airport",
    "city": "Angers/Marcé",
    "country": "France",
    "iata": "ANE",
    "icao": "LFJR"
  },
  {
    "name": "La Môle Airport",
    "city": "La Môle",
    "country": "France",
    "iata": "LTT",
    "icao": "LFTZ"
  },
  {
    "name": "Syros Airport",
    "city": "Syros Island",
    "country": "Greece",
    "iata": "JSY",
    "icao": "LGSO"
  },
  {
    "name": "Pécs-Pogány Airport",
    "city": "Pécs-Pogány",
    "country": "Hungary",
    "iata": "PEV",
    "icao": "LHPP"
  },
  {
    "name": "Győr-Pér International Airport",
    "city": "Győr",
    "country": "Hungary",
    "iata": "QGY",
    "icao": "LHPR"
  },
  {
    "name": "Sármellék International Airport",
    "city": "Sármellék",
    "country": "Hungary",
    "iata": "SOB",
    "icao": "LHSM"
  },
  {
    "name": "Aosta Airport",
    "city": "Aosta",
    "country": "Italy",
    "iata": "AOT",
    "icao": "LIMW"
  },
  {
    "name": "Salerno Costa d'Amalfi Airport",
    "city": "Salerno",
    "country": "Italy",
    "iata": "QSR",
    "icao": "LIRI"
  },
  {
    "name": "Corvo Airport",
    "city": "Corvo",
    "country": "Portugal",
    "iata": "CVU",
    "icao": "LPCR"
  },
  {
    "name": "Banja Luka International Airport",
    "city": "Banja Luka",
    "country": "Bosnia and Herzegovina",
    "iata": "BNX",
    "icao": "LQBK"
  },
  {
    "name": "Uşak Airport",
    "city": "Usak",
    "country": "Turkey",
    "iata": "USQ",
    "icao": "LTBO"
  },
  {
    "name": "Kars Airport",
    "city": "Kars",
    "country": "Turkey",
    "iata": "KSY",
    "icao": "LTCF"
  },
  {
    "name": "Şanlıurfa Airport",
    "city": "Sanliurfa",
    "country": "Turkey",
    "iata": "SFQ",
    "icao": "LTCH"
  },
  {
    "name": "Kahramanmaraş Airport",
    "city": "Kahramanmaras",
    "country": "Turkey",
    "iata": "KCM",
    "icao": "LTCN"
  },
  {
    "name": "Ağrı Airport",
    "city": "Agri",
    "country": "Turkey",
    "iata": "AJI",
    "icao": "LTCO"
  },
  {
    "name": "Adıyaman Airport",
    "city": "Adiyaman",
    "country": "Turkey",
    "iata": "ADF",
    "icao": "LTCP"
  },
  {
    "name": "Süleyman Demirel International Airport",
    "city": "Isparta",
    "country": "Turkey",
    "iata": "ISE",
    "icao": "LTFC"
  },
  {
    "name": "Balıkesir Körfez Airport",
    "city": "Balikesir Korfez",
    "country": "Turkey",
    "iata": "EDO",
    "icao": "LTFD"
  },
  {
    "name": "Samsun Çarşamba Airport",
    "city": "Samsun",
    "country": "Turkey",
    "iata": "SZF",
    "icao": "LTFH"
  },
  {
    "name": "Žilina Airport",
    "city": "Žilina",
    "country": "Slovakia",
    "iata": "ILZ",
    "icao": "LZZI"
  },
  {
    "name": "JAGS McCartney International Airport",
    "city": "Cockburn Town",
    "country": "Turks and Caicos Islands",
    "iata": "GDT",
    "icao": "MBGT"
  },
  {
    "name": "Middle Caicos Airport",
    "city": "Middle Caicos",
    "country": "Turks and Caicos Islands",
    "iata": "MDS",
    "icao": "MBMC"
  },
  {
    "name": "Salt Cay Airport",
    "city": "Salt Cay",
    "country": "Turks and Caicos Islands",
    "iata": "SLX",
    "icao": "MBSY"
  },
  {
    "name": "Samaná El Catey International Airport",
    "city": "Samana",
    "country": "Dominican Republic",
    "iata": "AZS",
    "icao": "MDCY"
  },
  {
    "name": "La Isabela International Airport",
    "city": "La Isabela",
    "country": "Dominican Republic",
    "iata": "JBQ",
    "icao": "MDJB"
  },
  {
    "name": "Puerto Barrios Airport",
    "city": "Puerto Barrios",
    "country": "Guatemala",
    "iata": "PBR",
    "icao": "MGPB"
  },
  {
    "name": "Quezaltenango Airport",
    "city": "Quezaltenango",
    "country": "Guatemala",
    "iata": "AAZ",
    "icao": "MGQZ"
  },
  {
    "name": "Utirik Airport",
    "city": "Utirik Island",
    "country": "Marshall Islands",
    "iata": "UTK",
    "icao": "03N"
  },
  {
    "name": "Ahuas Airport",
    "city": "Ahuas",
    "country": "Honduras",
    "iata": "AHS",
    "icao": "MHAH"
  },
  {
    "name": "Puerto Lempira Airport",
    "city": "Puerto Lempira",
    "country": "Honduras",
    "iata": "PEU",
    "icao": "MHPL"
  },
  {
    "name": "Mili Island Airport",
    "city": "Mili Island",
    "country": "Marshall Islands",
    "iata": "MIJ",
    "icao": "MLIP"
  },
  {
    "name": "Captain Rogelio Castillo National Airport",
    "city": "Celaya",
    "country": "Mexico",
    "iata": "CYW",
    "icao": "MMCY"
  },
  {
    "name": "Ciudad Constitución Airport",
    "city": "Ciudad Constitución",
    "country": "Mexico",
    "iata": "CUA",
    "icao": "MMDA"
  },
  {
    "name": "Guerrero Negro Airport",
    "city": "Guerrero Negro",
    "country": "Mexico",
    "iata": "GUB",
    "icao": "MMGR"
  },
  {
    "name": "El Lencero Airport",
    "city": "Jalapa",
    "country": "Mexico",
    "iata": "JAL",
    "icao": "MMJA"
  },
  {
    "name": "Alonso Valderrama Airport",
    "city": "Chitré",
    "country": "Panama",
    "iata": "CTD",
    "icao": "MPCE"
  },
  {
    "name": "Enrique Adolfo Jimenez Airport",
    "city": "Colón",
    "country": "Panama",
    "iata": "ONX",
    "icao": "MPEJ"
  },
  {
    "name": "Jaqué Airport",
    "city": "Jaqué",
    "country": "Panama",
    "iata": "JQE",
    "icao": "MPJE"
  },
  {
    "name": "Captain Ramon Xatruch Airport",
    "city": "La Palma",
    "country": "Panama",
    "iata": "PLP",
    "icao": "MPLP"
  },
  {
    "name": "Aerotortuguero Airport",
    "city": "Roxana",
    "country": "Costa Rica",
    "iata": "TTQ",
    "icao": "MRAO"
  },
  {
    "name": "Barra del Colorado Airport",
    "city": "Pococi",
    "country": "Costa Rica",
    "iata": "BCL",
    "icao": "MRBC"
  },
  {
    "name": "Cabo Velas Airport",
    "city": "Nicoya",
    "country": "Costa Rica",
    "iata": "TNO",
    "icao": "MRCV"
  },
  {
    "name": "Islita Airport",
    "city": "Nandayure",
    "country": "Costa Rica",
    "iata": "PBP",
    "icao": "MRIA"
  },
  {
    "name": "Puerto Jimenez Airport",
    "city": "Puerto Jimenez",
    "country": "Costa Rica",
    "iata": "PJM",
    "icao": "MRPJ"
  },
  {
    "name": "Tobias Bolanos International Airport",
    "city": "San Jose",
    "country": "Costa Rica",
    "iata": "SYQ",
    "icao": "MRPV"
  },
  {
    "name": "Playa Samara Airport",
    "city": "Playa Samara",
    "country": "Costa Rica",
    "iata": "NONE",
    "icao": "MRSR"
  },
  {
    "name": "Jérémie Airport",
    "city": "Jeremie",
    "country": "Haiti",
    "iata": "JEE",
    "icao": "MTJE"
  },
  {
    "name": "Port-de-Paix Airport",
    "city": "Port-de-Paix",
    "country": "Haiti",
    "iata": "PAX",
    "icao": "MTPX"
  },
  {
    "name": "Cayo Coco Airport",
    "city": "Cayo Coco",
    "country": "Cuba",
    "iata": "NONE",
    "icao": "MUOC"
  },
  {
    "name": "Alberto Delgado Airport",
    "city": "Trinidad",
    "country": "Cuba",
    "iata": "TND",
    "icao": "MUTD"
  },
  {
    "name": "Congo Town Airport",
    "city": "Andros",
    "country": "Bahamas",
    "iata": "COX",
    "icao": "MYAK"
  },
  {
    "name": "Arthur's Town Airport",
    "city": "Arthur's Town",
    "country": "Bahamas",
    "iata": "ATC",
    "icao": "MYCA"
  },
  {
    "name": "New Bight Airport",
    "city": "Cat Island",
    "country": "Bahamas",
    "iata": "CAT",
    "icao": "MYCB"
  },
  {
    "name": "Colonel Hill Airport",
    "city": "Colonel Hill",
    "country": "Bahamas",
    "iata": "CRI",
    "icao": "MYCI"
  },
  {
    "name": "Nassau Paradise Island Airport",
    "city": "Nassau",
    "country": "Bahamas",
    "iata": "PID",
    "icao": "MYPI"
  },
  {
    "name": "Enua Airport",
    "city": "Atiu Island",
    "country": "Cook Islands",
    "iata": "AIU",
    "icao": "NCAT"
  },
  {
    "name": "Mangaia Island Airport",
    "city": "Mangaia Island",
    "country": "Cook Islands",
    "iata": "MGS",
    "icao": "NCMG"
  },
  {
    "name": "Manihiki Island Airport",
    "city": "Manihiki Island",
    "country": "Cook Islands",
    "iata": "MHX",
    "icao": "NCMH"
  },
  {
    "name": "Mauke Airport",
    "city": "Mauke Island",
    "country": "Cook Islands",
    "iata": "MUK",
    "icao": "NCMK"
  },
  {
    "name": "Mitiaro Island Airport",
    "city": "Mitiaro Island",
    "country": "Cook Islands",
    "iata": "MOI",
    "icao": "NCMR"
  },
  {
    "name": "Tongareva Airport",
    "city": "Penrhyn Island",
    "country": "Cook Islands",
    "iata": "PYE",
    "icao": "NCPY"
  },
  {
    "name": "Cicia Airport",
    "city": "Cicia",
    "country": "Fiji",
    "iata": "ICI",
    "icao": "NFCI"
  },
  {
    "name": "Malolo Lailai Island Airport",
    "city": "Malolo Lailai Island",
    "country": "Fiji",
    "iata": "PTF",
    "icao": "NFFO"
  },
  {
    "name": "Vunisea Airport",
    "city": "Vunisea",
    "country": "Fiji",
    "iata": "KDV",
    "icao": "NFKD"
  },
  {
    "name": "Mana Island Airport",
    "city": "Mana Island",
    "country": "Fiji",
    "iata": "MNF",
    "icao": "NFMA"
  },
  {
    "name": "Moala Airport",
    "city": "Moala",
    "country": "Fiji",
    "iata": "MFJ",
    "icao": "NFMO"
  },
  {
    "name": "Ngau Airport",
    "city": "Ngau",
    "country": "Fiji",
    "iata": "NGI",
    "icao": "NFNG"
  },
  {
    "name": "Lakeba Island Airport",
    "city": "Lakeba Island",
    "country": "Fiji",
    "iata": "LKB",
    "icao": "NFNK"
  },
  {
    "name": "Labasa Airport",
    "city": "Lambasa",
    "country": "Fiji",
    "iata": "LBS",
    "icao": "NFNL"
  },
  {
    "name": "Matei Airport",
    "city": "Matei",
    "country": "Fiji",
    "iata": "TVU",
    "icao": "NFNM"
  },
  {
    "name": "Koro Island Airport",
    "city": "Koro Island",
    "country": "Fiji",
    "iata": "KXF",
    "icao": "NFNO"
  },
  {
    "name": "Rotuma Airport",
    "city": "Rotuma",
    "country": "Fiji",
    "iata": "RTA",
    "icao": "NFNR"
  },
  {
    "name": "Savusavu Airport",
    "city": "Savusavu",
    "country": "Fiji",
    "iata": "SVU",
    "icao": "NFNS"
  },
  {
    "name": "Kaufana Airport",
    "city": "Eua Island",
    "country": "Tonga",
    "iata": "EUA",
    "icao": "NFTE"
  },
  {
    "name": "Lifuka Island Airport",
    "city": "Lifuka",
    "country": "Tonga",
    "iata": "HPA",
    "icao": "NFTL"
  },
  {
    "name": "Mata'aho Airport",
    "city": "Angaha, Niuafo'ou Island",
    "country": "Tonga",
    "iata": "NFO",
    "icao": null
  },
  {
    "name": "Kuini Lavenia Airport",
    "city": "Niuatoputapu",
    "country": "Tonga",
    "iata": "NTT",
    "icao": "NFTP"
  },
  {
    "name": "Vanua Balavu Airport",
    "city": "Vanua Balavu",
    "country": "Fiji",
    "iata": "VBV",
    "icao": "NFVB"
  },
  {
    "name": "Niue International Airport",
    "city": "Alofi",
    "country": "Niue",
    "iata": "IUE",
    "icao": "NIUE"
  },
  {
    "name": "Pointe Vele Airport",
    "city": "Futuna Island",
    "country": "Wallis and Futuna",
    "iata": "FUT",
    "icao": "NLWF"
  },
  {
    "name": "Maota Airport",
    "city": "Savaii Island",
    "country": "Samoa",
    "iata": "MXS",
    "icao": "NSMA"
  },
  {
    "name": "Apataki Airport",
    "city": "Apataki",
    "country": "French Polynesia",
    "iata": "APK",
    "icao": "NTGD"
  },
  {
    "name": "Ahe Airport",
    "city": "Ahe",
    "country": "French Polynesia",
    "iata": "AHE",
    "icao": "NTHE"
  },
  {
    "name": "Hiva Oa-Atuona Airport",
    "city": "Hiva-oa",
    "country": "French Polynesia",
    "iata": "AUQ",
    "icao": "NTMN"
  },
  {
    "name": "Ua Pou Airport",
    "city": "Ua Pou",
    "country": "French Polynesia",
    "iata": "UAP",
    "icao": "NTMP"
  },
  {
    "name": "Ua Huka Airport",
    "city": "Ua Huka",
    "country": "French Polynesia",
    "iata": "UAH",
    "icao": "NTMU"
  },
  {
    "name": "Mota Lava Airport",
    "city": "Ablow",
    "country": "Vanuatu",
    "iata": "MTV",
    "icao": "NVSA"
  },
  {
    "name": "Sola Airport",
    "city": "Sola",
    "country": "Vanuatu",
    "iata": "SLH",
    "icao": "NVSC"
  },
  {
    "name": "Torres Airstrip",
    "city": "Loh/Linua",
    "country": "Vanuatu",
    "iata": "TOH",
    "icao": "NVSD"
  },
  {
    "name": "Siwo Airport",
    "city": "Sangafa",
    "country": "Vanuatu",
    "iata": "EAE",
    "icao": "NVSE"
  },
  {
    "name": "Craig Cove Airport",
    "city": "Craig Cove",
    "country": "Vanuatu",
    "iata": "CCV",
    "icao": "NVSF"
  },
  {
    "name": "Longana Airport",
    "city": "Longana",
    "country": "Vanuatu",
    "iata": "LOD",
    "icao": "NVSG"
  },
  {
    "name": "Sara Airport",
    "city": "Pentecost Island",
    "country": "Vanuatu",
    "iata": "SSR",
    "icao": "NVSH"
  },
  {
    "name": "Tavie Airport",
    "city": "Paama Island",
    "country": "Vanuatu",
    "iata": "PBJ",
    "icao": "NVSI"
  },
  {
    "name": "Lamap Airport",
    "city": "Lamap",
    "country": "Vanuatu",
    "iata": "LPM",
    "icao": "NVSL"
  },
  {
    "name": "Lamen Bay Airport",
    "city": "Lamen Bay",
    "country": "Vanuatu",
    "iata": "LNB",
    "icao": "NVSM"
  },
  {
    "name": "Maewo-Naone Airport",
    "city": "Maewo Island",
    "country": "Vanuatu",
    "iata": "MWF",
    "icao": "NVSN"
  },
  {
    "name": "Lonorore Airport",
    "city": "Lonorore",
    "country": "Vanuatu",
    "iata": "LNE",
    "icao": "NVSO"
  },
  {
    "name": "Norsup Airport",
    "city": "Norsup",
    "country": "Vanuatu",
    "iata": "NUS",
    "icao": "NVSP"
  },
  {
    "name": "Gaua Island Airport",
    "city": "Gaua Island",
    "country": "Vanuatu",
    "iata": "ZGU",
    "icao": "NVSQ"
  },
  {
    "name": "Redcliffe Airport",
    "city": "Redcliffe",
    "country": "Vanuatu",
    "iata": "RCL",
    "icao": "NVSR"
  },
  {
    "name": "Santo Pekoa International Airport",
    "city": "Santo",
    "country": "Vanuatu",
    "iata": "SON",
    "icao": "NVSS"
  },
  {
    "name": "Tongoa Airport",
    "city": "Tongoa Island",
    "country": "Vanuatu",
    "iata": "TGH",
    "icao": "NVST"
  },
  {
    "name": "Uléi Airport",
    "city": "Ambryn Island",
    "country": "Vanuatu",
    "iata": "ULB",
    "icao": "NVSU"
  },
  {
    "name": "Valesdir Airport",
    "city": "Valesdir",
    "country": "Vanuatu",
    "iata": "VLS",
    "icao": "NVSV"
  },
  {
    "name": "Southwest Bay Airport",
    "city": "Malekula Island",
    "country": "Vanuatu",
    "iata": "SWJ",
    "icao": "NVSX"
  },
  {
    "name": "North West Santo Airport",
    "city": "Olpoi",
    "country": "Vanuatu",
    "iata": "OLZ",
    "icao": "NVSZ"
  },
  {
    "name": "Aneityum Airport",
    "city": "Anelghowhat",
    "country": "Vanuatu",
    "iata": "AUY",
    "icao": "NVVA"
  },
  {
    "name": "Aniwa Airport",
    "city": "Aniwa",
    "country": "Vanuatu",
    "iata": "AWD",
    "icao": "NVVB"
  },
  {
    "name": "Dillon's Bay Airport",
    "city": "Dillon's Bay",
    "country": "Vanuatu",
    "iata": "DLY",
    "icao": "NVVD"
  },
  {
    "name": "Futuna Airport",
    "city": "Futuna Island",
    "country": "Vanuatu",
    "iata": "FTA",
    "icao": "NVVF"
  },
  {
    "name": "Ipota Airport",
    "city": "Ipota",
    "country": "Vanuatu",
    "iata": "IPA",
    "icao": "NVVI"
  },
  {
    "name": "Tiga Airport",
    "city": "Tiga",
    "country": "New Caledonia",
    "iata": "TGJ",
    "icao": "NWWA"
  },
  {
    "name": "Île Art - Waala Airport",
    "city": "Waala",
    "country": "New Caledonia",
    "iata": "BMY",
    "icao": "NWWC"
  },
  {
    "name": "Île des Pins Airport",
    "city": "Île des Pins",
    "country": "New Caledonia",
    "iata": "ILP",
    "icao": "NWWE"
  },
  {
    "name": "Fayzabad Airport",
    "city": "Faizabad",
    "country": "Afghanistan",
    "iata": "FBD",
    "icao": "OAFZ"
  },
  {
    "name": "Dawadmi Domestic Airport",
    "city": "Dawadmi",
    "country": "Saudi Arabia",
    "iata": "DWD",
    "icao": "OEDW"
  },
  {
    "name": "Al-Jawf Domestic Airport",
    "city": "Al-Jawf",
    "country": "Saudi Arabia",
    "iata": "AJF",
    "icao": "OESK"
  },
  {
    "name": "Wadi Al Dawasir Airport",
    "city": "Wadi-al-dawasir",
    "country": "Saudi Arabia",
    "iata": "EWD",
    "icao": "OEWD"
  },
  {
    "name": "Khoram Abad Airport",
    "city": "Khorram Abad",
    "country": "Iran",
    "iata": "KHD",
    "icao": "OICK"
  },
  {
    "name": "Bam Airport",
    "city": "Bam",
    "country": "Iran",
    "iata": "BXR",
    "icao": "OIKM"
  },
  {
    "name": "Rafsanjan Airport",
    "city": "Rafsanjan",
    "country": "Iran",
    "iata": "RJN",
    "icao": "OIKR"
  },
  {
    "name": "Bojnord Airport",
    "city": "Bojnourd",
    "country": "Iran",
    "iata": "BJB",
    "icao": "OIMN"
  },
  {
    "name": "Sabzevar National Airport",
    "city": "Sabzevar",
    "country": "Iran",
    "iata": "AFZ",
    "icao": "OIMS"
  },
  {
    "name": "Noshahr Airport",
    "city": "Noshahr",
    "country": "Iran",
    "iata": "NSH",
    "icao": "OINN"
  },
  {
    "name": "Dasht-e Naz Airport",
    "city": "Dasht-e-naz",
    "country": "Iran",
    "iata": "SRY",
    "icao": "OINZ"
  },
  {
    "name": "Lar Airport",
    "city": "Lar",
    "country": "Iran",
    "iata": "LRR",
    "icao": "OISL"
  },
  {
    "name": "Ardabil Airport",
    "city": "Ardabil",
    "country": "Iran",
    "iata": "ADU",
    "icao": "OITL"
  },
  {
    "name": "Urmia Airport",
    "city": "Uromiyeh",
    "country": "Iran",
    "iata": "OMH",
    "icao": "OITR"
  },
  {
    "name": "Al Ain International Airport",
    "city": "Al Ain",
    "country": "United Arab Emirates",
    "iata": "AAN",
    "icao": "OMAL"
  },
  {
    "name": "Bannu Airport",
    "city": "Bannu",
    "country": "Pakistan",
    "iata": "BNP",
    "icao": "OPBN"
  },
  {
    "name": "Bahawalpur Airport",
    "city": "Bahawalpur",
    "country": "Pakistan",
    "iata": "BHV",
    "icao": "OPBW"
  },
  {
    "name": "Chitral Airport",
    "city": "Chitral",
    "country": "Pakistan",
    "iata": "CJL",
    "icao": "OPCH"
  },
  {
    "name": "Dalbandin Airport",
    "city": "Dalbandin",
    "country": "Pakistan",
    "iata": "DBA",
    "icao": "OPDB"
  },
  {
    "name": "Dera Ghazi Khan Airport",
    "city": "Dera Ghazi Khan",
    "country": "Pakistan",
    "iata": "DEA",
    "icao": "OPDG"
  },
  {
    "name": "Dera Ismael Khan Airport",
    "city": "Dera Ismael Khan",
    "country": "Pakistan",
    "iata": "DSK",
    "icao": "OPDI"
  },
  {
    "name": "Jiwani Airport",
    "city": "Jiwani",
    "country": "Pakistan",
    "iata": "JIW",
    "icao": "OPJI"
  },
  {
    "name": "Hyderabad Airport",
    "city": "Hyderabad",
    "country": "Pakistan",
    "iata": "HDD",
    "icao": "OPKD"
  },
  {
    "name": "Khuzdar Airport",
    "city": "Khuzdar",
    "country": "Pakistan",
    "iata": "KDD",
    "icao": "OPKH"
  },
  {
    "name": "Ormara Airport",
    "city": "Ormara Raik",
    "country": "Pakistan",
    "iata": "ORW",
    "icao": "OPOR"
  },
  {
    "name": "Parachinar Airport",
    "city": "Parachinar",
    "country": "Pakistan",
    "iata": "PAJ",
    "icao": "OPPC"
  },
  {
    "name": "Skardu Airport",
    "city": "Skardu",
    "country": "Pakistan",
    "iata": "KDU",
    "icao": "OPSD"
  },
  {
    "name": "Sehwan Sharif Airport",
    "city": "Sehwan Sharif",
    "country": "Pakistan",
    "iata": "SYW",
    "icao": "OPSN"
  },
  {
    "name": "Turbat International Airport",
    "city": "Turbat",
    "country": "Pakistan",
    "iata": "TUK",
    "icao": "OPTU"
  },
  {
    "name": "Sulaymaniyah International Airport",
    "city": "Sulaymaniyah",
    "country": "Iraq",
    "iata": "ISU",
    "icao": "ORSU"
  },
  {
    "name": "Kamishly Airport",
    "city": "Kamishly",
    "country": "Syria",
    "iata": "KAC",
    "icao": "OSKL"
  },
  {
    "name": "Sayun International Airport",
    "city": "Sayun Intl",
    "country": "Yemen",
    "iata": "GXF",
    "icao": "OYSY"
  },
  {
    "name": "Adak Airport",
    "city": "Adak Island",
    "country": "United States",
    "iata": "ADK",
    "icao": "PADK"
  },
  {
    "name": "Gustavus Airport",
    "city": "Gustavus",
    "country": "United States",
    "iata": "GST",
    "icao": "PAGS"
  },
  {
    "name": "Skagway Airport",
    "city": "Skagway",
    "country": "United States",
    "iata": "SGY",
    "icao": "PAGY"
  },
  {
    "name": "Holy Cross Airport",
    "city": "Holy Cross",
    "country": "United States",
    "iata": "HCR",
    "icao": "PAHC"
  },
  {
    "name": "Haines Airport",
    "city": "Haines",
    "country": "United States",
    "iata": "HNS",
    "icao": "PAHN"
  },
  {
    "name": "Kalskag Airport",
    "city": "Kalskag",
    "country": "United States",
    "iata": "KLG",
    "icao": "PALG"
  },
  {
    "name": "McGrath Airport",
    "city": "Mcgrath",
    "country": "United States",
    "iata": "MCG",
    "icao": "PAMC"
  },
  {
    "name": "Mountain Village Airport",
    "city": "Mountain Village",
    "country": "United States",
    "iata": "MOU",
    "icao": "PAMO"
  },
  {
    "name": "Aniak Airport",
    "city": "Aniak",
    "country": "United States",
    "iata": "ANI",
    "icao": "PANI"
  },
  {
    "name": "Chevak Airport",
    "city": "Chevak",
    "country": "United States",
    "iata": "VAK",
    "icao": "PAVA"
  },
  {
    "name": "Wrangell Airport",
    "city": "Wrangell",
    "country": "United States",
    "iata": "WRG",
    "icao": "PAWG"
  },
  {
    "name": "Kalaupapa Airport",
    "city": "Molokai",
    "country": "United States",
    "iata": "LUP",
    "icao": "PHLU"
  },
  {
    "name": "Eniwetok Airport",
    "city": "Eniwetok Atoll",
    "country": "Marshall Islands",
    "iata": "ENT",
    "icao": "PKMA"
  },
  {
    "name": "Matsu Nangan Airport",
    "city": "Matsu Islands",
    "country": "Taiwan",
    "iata": "LZN",
    "icao": "RCFG"
  },
  {
    "name": "Hengchun Airport",
    "city": "Hengchun",
    "country": "Taiwan",
    "iata": "HCN",
    "icao": "RCKW"
  },
  {
    "name": "Matsu Beigan Airport",
    "city": "Matsu Islands",
    "country": "Taiwan",
    "iata": "MFK",
    "icao": "RCMT"
  },
  {
    "name": "Kushiro Airport",
    "city": "Kushiro",
    "country": "Japan",
    "iata": "KUH",
    "icao": "RJCK"
  },
  {
    "name": "Okadama Airport",
    "city": "Sapporo",
    "country": "Japan",
    "iata": "OKD",
    "icao": "RJCO"
  },
  {
    "name": "Saga Airport",
    "city": "Saga",
    "country": "Japan",
    "iata": "HSG",
    "icao": "RJFS"
  },
  {
    "name": "Nagoya Airport",
    "city": "Nagoya",
    "country": "Japan",
    "iata": "NKM",
    "icao": "RJNA"
  },
  {
    "name": "Iwami Airport",
    "city": "Iwami",
    "country": "Japan",
    "iata": "IWJ",
    "icao": "RJOW"
  },
  {
    "name": "Fukushima Airport",
    "city": "Fukushima",
    "country": "Japan",
    "iata": "FKS",
    "icao": "RJSF"
  },
  {
    "name": "Odate Noshiro Airport",
    "city": "Odate Noshiro",
    "country": "Japan",
    "iata": "ONJ",
    "icao": "RJSR"
  },
  {
    "name": "Shonai Airport",
    "city": "Shonai",
    "country": "Japan",
    "iata": "SYO",
    "icao": "RJSY"
  },
  {
    "name": "Miyakejima Airport",
    "city": "Miyakejima",
    "country": "Japan",
    "iata": "MYE",
    "icao": "RJTQ"
  },
  {
    "name": "Kunsan Air Base",
    "city": "Kunsan",
    "country": "South Korea",
    "iata": "KUV",
    "icao": "RKJK"
  },
  {
    "name": "Mokpo Heliport",
    "city": "Mokpo",
    "country": "South Korea",
    "iata": "MPK",
    "icao": "RKJM"
  },
  {
    "name": "Wonju Airport",
    "city": "Wonju",
    "country": "South Korea",
    "iata": "WJU",
    "icao": "RKNW"
  },
  {
    "name": "Yangyang International Airport",
    "city": "Sokcho / Gangneung",
    "country": "South Korea",
    "iata": "YNY",
    "icao": "RKNY"
  },
  {
    "name": "Sacheon Air Base",
    "city": "Sacheon",
    "country": "South Korea",
    "iata": "HIN",
    "icao": "RKPS"
  },
  {
    "name": "Cheongju International Airport",
    "city": "Chongju",
    "country": "South Korea",
    "iata": "CJJ",
    "icao": "RKTU"
  },
  {
    "name": "Subic Bay International Airport",
    "city": "Olongapo City",
    "country": "Philippines",
    "iata": "SFS",
    "icao": "RPLB"
  },
  {
    "name": "Cuyo Airport",
    "city": "Cuyo",
    "country": "Philippines",
    "iata": "CYU",
    "icao": "RPLO"
  },
  {
    "name": "Rajah Buayan Air Base",
    "city": "General Santos City",
    "country": "Philippines",
    "iata": "NONE",
    "icao": "RPMB"
  },
  {
    "name": "Camiguin Airport",
    "city": "Camiguin",
    "country": "Philippines",
    "iata": "CGM",
    "icao": "RPMH"
  },
  {
    "name": "Jolo Airport",
    "city": "Jolo",
    "country": "Philippines",
    "iata": "JOL",
    "icao": "RPMJ"
  },
  {
    "name": "Sanga Sanga Airport",
    "city": "Sanga Sanga",
    "country": "Philippines",
    "iata": "SGS",
    "icao": "RPMN"
  },
  {
    "name": "Surigao Airport",
    "city": "Sangley Point",
    "country": "Philippines",
    "iata": "SUG",
    "icao": "RPMS"
  },
  {
    "name": "Tandag Airport",
    "city": "Tandag",
    "country": "Philippines",
    "iata": "TDG",
    "icao": "RPMW"
  },
  {
    "name": "Naga Airport",
    "city": "Naga",
    "country": "Philippines",
    "iata": "WNP",
    "icao": "RPUN"
  },
  {
    "name": "Basco Airport",
    "city": "Basco",
    "country": "Philippines",
    "iata": "BSO",
    "icao": "RPUO"
  },
  {
    "name": "San Fernando Airport",
    "city": "San Fernando",
    "country": "Philippines",
    "iata": "SFE",
    "icao": "RPUS"
  },
  {
    "name": "Tuguegarao Airport",
    "city": "Tuguegarao",
    "country": "Philippines",
    "iata": "TUG",
    "icao": "RPUT"
  },
  {
    "name": "Virac Airport",
    "city": "Virac",
    "country": "Philippines",
    "iata": "VRC",
    "icao": "RPUV"
  },
  {
    "name": "Calbayog Airport",
    "city": "Calbayog City",
    "country": "Philippines",
    "iata": "CYP",
    "icao": "RPVC"
  },
  {
    "name": "Catarman National Airport",
    "city": "Catarman",
    "country": "Philippines",
    "iata": "CRM",
    "icao": "RPVF"
  },
  {
    "name": "Moises R. Espinosa Airport",
    "city": "Masbate",
    "country": "Philippines",
    "iata": "MBT",
    "icao": "RPVJ"
  },
  {
    "name": "Roxas Airport",
    "city": "Roxas City",
    "country": "Philippines",
    "iata": "RXS",
    "icao": "RPVR"
  },
  {
    "name": "General Enrique Mosconi Airport",
    "city": "Tartagal",
    "country": "Argentina",
    "iata": "TTG",
    "icao": "SAST"
  },
  {
    "name": "Las Heras Airport",
    "city": "Las Heras",
    "country": "Argentina",
    "iata": "LHS",
    "icao": "SAVH"
  },
  {
    "name": "Antoine De St Exupery Airport",
    "city": "San Antonio Oeste",
    "country": "Argentina",
    "iata": "OES",
    "icao": "SAVN"
  },
  {
    "name": "Lago Argentino Airport",
    "city": "El Calafate",
    "country": "Argentina",
    "iata": "ING",
    "icao": "SAWA"
  },
  {
    "name": "Gobernador Gregores Airport",
    "city": "Gobernador Gregores",
    "country": "Argentina",
    "iata": "GGS",
    "icao": "SAWR"
  },
  {
    "name": "Santa Teresita Airport",
    "city": "Santa Teresita",
    "country": "Argentina",
    "iata": "SST",
    "icao": "SAZL"
  },
  {
    "name": "Necochea Airport",
    "city": "Necochea",
    "country": "Argentina",
    "iata": "NEC",
    "icao": "SAZO"
  },
  {
    "name": "Orlando Bezerra de Menezes Airport",
    "city": "Juazeiro Do Norte",
    "country": "Brazil",
    "iata": "JDO",
    "icao": "SBJU"
  },
  {
    "name": "Coronel Horácio de Mattos Airport",
    "city": "Lençóis",
    "country": "Brazil",
    "iata": "LEC",
    "icao": "SBLE"
  },
  {
    "name": "Macaé Airport",
    "city": "Macaé",
    "country": "Brazil",
    "iata": "MEA",
    "icao": "SBME"
  },
  {
    "name": "Frank Miloye Milenkowichi–Marília State Airport",
    "city": "Marília",
    "country": "Brazil",
    "iata": "MII",
    "icao": "SBML"
  },
  {
    "name": "Vitória da Conquista Airport",
    "city": "Vitória Da Conquista",
    "country": "Brazil",
    "iata": "VDC",
    "icao": "SBQV"
  },
  {
    "name": "Santa Maria Airport",
    "city": "Santa Maria",
    "country": "Brazil",
    "iata": "RIA",
    "icao": "SBSM"
  },
  {
    "name": "Toledo Airport",
    "city": "Toledo",
    "country": "Brazil",
    "iata": "TOW",
    "icao": "SBTD"
  },
  {
    "name": "Ricardo García Posada Airport",
    "city": "El Salvador",
    "country": "Chile",
    "iata": "ESR",
    "icao": "SCES"
  },
  {
    "name": "Pucón Airport",
    "city": "Pucon",
    "country": "Chile",
    "iata": "ZPC",
    "icao": "SCPC"
  },
  {
    "name": "Sorocaba Airport",
    "city": "Sorocaba",
    "country": "Brazil",
    "iata": "SOD",
    "icao": "SDCO"
  },
  {
    "name": "San Cristóbal Airport",
    "city": "San Cristóbal",
    "country": "Ecuador",
    "iata": "SCY",
    "icao": "SEST"
  },
  {
    "name": "Camilo Ponce Enriquez Airport",
    "city": "La Toma (Catamayo)",
    "country": "Ecuador",
    "iata": "LOH",
    "icao": "SETM"
  },
  {
    "name": "General Rivadeneira Airport",
    "city": "Esmeraldas",
    "country": "Ecuador",
    "iata": "ESM",
    "icao": "SETN"
  },
  {
    "name": "Port Stanley Airport",
    "city": "Stanley",
    "country": "Falkland Islands",
    "iata": "PSY",
    "icao": "SFAL"
  },
  {
    "name": "Santa Ana Airport",
    "city": "Cartago",
    "country": "Colombia",
    "iata": "CRC",
    "icao": "SKGO"
  },
  {
    "name": "La Jagua Airport",
    "city": "Garzón",
    "country": "Colombia",
    "iata": "GLJ",
    "icao": "SKGZ"
  },
  {
    "name": "Caucaya Airport",
    "city": "Puerto Leguízamo",
    "country": "Colombia",
    "iata": "LQM",
    "icao": "SKLG"
  },
  {
    "name": "La Pedrera Airport",
    "city": "La Pedrera",
    "country": "Colombia",
    "iata": "LPD",
    "icao": "SKLP"
  },
  {
    "name": "Reyes Murillo Airport",
    "city": "Nuquí",
    "country": "Colombia",
    "iata": "NQU",
    "icao": "SKNQ"
  },
  {
    "name": "Obando Airport",
    "city": "Puerto Inírida",
    "country": "Colombia",
    "iata": "PDA",
    "icao": "SKPD"
  },
  {
    "name": "El Yopal Airport",
    "city": "Yopal",
    "country": "Colombia",
    "iata": "EYP",
    "icao": "SKYP"
  },
  {
    "name": "Capitán de Av. Emilio Beltrán Airport",
    "city": "Guayaramerín",
    "country": "Bolivia",
    "iata": "GYA",
    "icao": "SLGY"
  },
  {
    "name": "Puerto Rico Airport",
    "city": "Puerto Rico/Manuripi",
    "country": "Bolivia",
    "iata": "PUR",
    "icao": "SLPR"
  },
  {
    "name": "Capitán Av. Selin Zeitun Lopez Airport",
    "city": "Riberalta",
    "country": "Bolivia",
    "iata": "RIB",
    "icao": "SLRI"
  },
  {
    "name": "Reyes Airport",
    "city": "Reyes",
    "country": "Bolivia",
    "iata": "REY",
    "icao": "SLRY"
  },
  {
    "name": "Capitán Av. German Quiroga G. Airport",
    "city": "San Borja",
    "country": "Bolivia",
    "iata": "SRJ",
    "icao": "SLSB"
  },
  {
    "name": "Zorg en Hoop Airport",
    "city": "Paramaribo",
    "country": "Suriname",
    "iata": "ORG",
    "icao": "SMZO"
  },
  {
    "name": "Mucuri Airport",
    "city": "Mucuri",
    "country": "Brazil",
    "iata": "MVS",
    "icao": "SNMU"
  },
  {
    "name": "Caballococha Airport",
    "city": "Caballococha",
    "country": "Peru",
    "iata": "LHC",
    "icao": "SPBC"
  },
  {
    "name": "Mayor General FAP Armando Revoredo Iglesias Airport",
    "city": "Cajamarca",
    "country": "Peru",
    "iata": "CJA",
    "icao": "SPJR"
  },
  {
    "name": "Alferez Fap David Figueroa Fernandini Airport",
    "city": "Huánuco",
    "country": "Peru",
    "iata": "HUU",
    "icao": "SPNC"
  },
  {
    "name": "Maria Reiche Neuman Airport",
    "city": "Nazca",
    "country": "Peru",
    "iata": "NZC",
    "icao": "SPZA"
  },
  {
    "name": "Santa Rosa Airport",
    "city": "Santa Rosa",
    "country": "Brazil",
    "iata": "SRA",
    "icao": "SSZR"
  },
  {
    "name": "El Jagüel / Punta del Este Airport",
    "city": "Maldonado",
    "country": "Uruguay",
    "iata": "MDO",
    "icao": "SUPE"
  },
  {
    "name": "Escuela Mariscal Sucre Airport",
    "city": "Maracay",
    "country": "Venezuela",
    "iata": "MYC",
    "icao": "SVBS"
  },
  {
    "name": "Juan Pablo Pérez Alfonso Airport",
    "city": "El Vigía",
    "country": "Venezuela",
    "iata": "VIG",
    "icao": "SVVG"
  },
  {
    "name": "Ji-Paraná Airport",
    "city": "Ji-Paraná",
    "country": "Brazil",
    "iata": "JPR",
    "icao": "SWJI"
  },
  {
    "name": "Codrington Airport",
    "city": "Codrington",
    "country": "Antigua and Barbuda",
    "iata": "BBQ",
    "icao": "TAPH"
  },
  {
    "name": "La Désirade Airport",
    "city": "Grande Anse",
    "country": "Guadeloupe",
    "iata": "DSD",
    "icao": "TFFA"
  },
  {
    "name": "Baillif Airport",
    "city": "Basse Terre",
    "country": "Guadeloupe",
    "iata": "BBR",
    "icao": "TFFB"
  },
  {
    "name": "St-François Airport",
    "city": "St-François",
    "country": "Guadeloupe",
    "iata": "SFC",
    "icao": "TFFC"
  },
  {
    "name": "Les Bases Airport",
    "city": "Grand Bourg",
    "country": "Guadeloupe",
    "iata": "GBJ",
    "icao": "TFFM"
  },
  {
    "name": "Vance W. Amory International Airport",
    "city": "Charlestown",
    "country": "Saint Kitts and Nevis",
    "iata": "NEV",
    "icao": "TKPN"
  },
  {
    "name": "Virgin Gorda Airport",
    "city": "Spanish Town",
    "country": "British Virgin Islands",
    "iata": "VIJ",
    "icao": "TUPW"
  },
  {
    "name": "J F Mitchell Airport",
    "city": "Bequia",
    "country": "Saint Vincent and the Grenadines",
    "iata": "BQU",
    "icao": "TVSB"
  },
  {
    "name": "Union Island International Airport",
    "city": "Union Island",
    "country": "Saint Vincent and the Grenadines",
    "iata": "UNI",
    "icao": "TVSU"
  },
  {
    "name": "Kokshetau Airport",
    "city": "Kokshetau",
    "country": "Kazakhstan",
    "iata": "KOV",
    "icao": "UACK"
  },
  {
    "name": "Petropavlosk South Airport",
    "city": "Petropavlosk",
    "country": "Kazakhstan",
    "iata": "PPK",
    "icao": "UACP"
  },
  {
    "name": "Zhezkazgan Airport",
    "city": "Zhezkazgan",
    "country": "Kazakhstan",
    "iata": "DZN",
    "icao": "UAKD"
  },
  {
    "name": "Ust-Kamennogorsk Airport",
    "city": "Ust Kamenogorsk",
    "country": "Kazakhstan",
    "iata": "UKK",
    "icao": "UASK"
  },
  {
    "name": "Kostanay West Airport",
    "city": "Kostanay",
    "country": "Kazakhstan",
    "iata": "KSN",
    "icao": "UAUU"
  },
  {
    "name": "Ganja Airport",
    "city": "Ganja",
    "country": "Azerbaijan",
    "iata": "KVD",
    "icao": "UBBG"
  },
  {
    "name": "Nakhchivan Airport",
    "city": "Nakhchivan",
    "country": "Azerbaijan",
    "iata": "NAJ",
    "icao": "UBBN"
  },
  {
    "name": "Chulman Airport",
    "city": "Neryungri",
    "country": "Russia",
    "iata": "CNN",
    "icao": "UELL"
  },
  {
    "name": "Polyarny Airport",
    "city": "Yakutia",
    "country": "Russia",
    "iata": "PYJ",
    "icao": "UERP"
  },
  {
    "name": "Chokurdakh Airport",
    "city": "Chokurdah",
    "country": "Russia",
    "iata": "CKH",
    "icao": "UESO"
  },
  {
    "name": "Cherskiy Airport",
    "city": "Cherskiy",
    "country": "Russia",
    "iata": "CYX",
    "icao": "UESS"
  },
  {
    "name": "Tiksi Airport",
    "city": "Tiksi",
    "country": "Russia",
    "iata": "IKS",
    "icao": "UEST"
  },
  {
    "name": "Komsomolsk-on-Amur Airport",
    "city": "Komsomolsk-on-Amur",
    "country": "Russia",
    "iata": "KXK",
    "icao": "UHKK"
  },
  {
    "name": "Ugolny Airport",
    "city": "Anadyr",
    "country": "Russia",
    "iata": "DYR",
    "icao": "UHMA"
  },
  {
    "name": "Okhotsk Airport",
    "city": "Okhotsk",
    "country": "Russia",
    "iata": "OHO",
    "icao": "UHOO"
  },
  {
    "name": "Ujae Atoll Airport",
    "city": "Ujae Atoll",
    "country": "Marshall Islands",
    "iata": "UJE",
    "icao": "UJAP"
  },
  {
    "name": "Mariupol International Airport",
    "city": "Mariupol International",
    "country": "Ukraine",
    "iata": "MPW",
    "icao": "UKCM"
  },
  {
    "name": "Luhansk International Airport",
    "city": "Lugansk",
    "country": "Ukraine",
    "iata": "VSG",
    "icao": "UKCW"
  },
  {
    "name": "Zaporizhzhia International Airport",
    "city": "Zaporozhye",
    "country": "Ukraine",
    "iata": "OZH",
    "icao": "UKDE"
  },
  {
    "name": "Kryvyi Rih International Airport",
    "city": "Krivoy Rog",
    "country": "Ukraine",
    "iata": "KWG",
    "icao": "UKDR"
  },
  {
    "name": "Kharkiv International Airport",
    "city": "Kharkov",
    "country": "Ukraine",
    "iata": "HRK",
    "icao": "UKHH"
  },
  {
    "name": "Ivano-Frankivsk International Airport",
    "city": "Ivano-Frankivsk",
    "country": "Ukraine",
    "iata": "IFO",
    "icao": "UKLI"
  },
  {
    "name": "Chernivtsi International Airport",
    "city": "Chernovtsk",
    "country": "Ukraine",
    "iata": "CWC",
    "icao": "UKLN"
  },
  {
    "name": "Rivne International Airport",
    "city": "Rivne",
    "country": "Ukraine",
    "iata": "RWN",
    "icao": "UKLR"
  },
  {
    "name": "Uzhhorod International Airport",
    "city": "Uzhgorod",
    "country": "Ukraine",
    "iata": "UDJ",
    "icao": "UKLU"
  },
  {
    "name": "Solovki Airport",
    "city": "Solovetsky Islands",
    "country": "Russia",
    "iata": "CSH",
    "icao": "ULAS"
  },
  {
    "name": "Cherepovets Airport",
    "city": "Cherepovets",
    "country": "Russia",
    "iata": "CEE",
    "icao": "ULBC"
  },
  {
    "name": "Amderma Airport",
    "city": "Amderma",
    "country": "Russia",
    "iata": "AMV",
    "icao": "ULDD"
  },
  {
    "name": "Kotlas Airport",
    "city": "Kotlas",
    "country": "Russia",
    "iata": "KSZ",
    "icao": "ULKK"
  },
  {
    "name": "Petrozavodsk Airport",
    "city": "Petrozavodsk",
    "country": "Russia",
    "iata": "PES",
    "icao": "ULPB"
  },
  {
    "name": "Hrodna Airport",
    "city": "Hrodna",
    "country": "Belarus",
    "iata": "GNA",
    "icao": "UMMG"
  },
  {
    "name": "Mogilev Airport",
    "city": "Mogilev",
    "country": "Belarus",
    "iata": "MVQ",
    "icao": "UMOO"
  },
  {
    "name": "Yeniseysk Airport",
    "city": "Yeniseysk",
    "country": "Russia",
    "iata": "EIE",
    "icao": "UNII"
  },
  {
    "name": "Kyzyl Airport",
    "city": "Kyzyl",
    "country": "Russia",
    "iata": "KYZ",
    "icao": "UNKY"
  },
  {
    "name": "Spichenkovo Airport",
    "city": "Novokuznetsk",
    "country": "Russia",
    "iata": "NOZ",
    "icao": "UNWW"
  },
  {
    "name": "Khatanga Airport",
    "city": "Khatanga",
    "country": "Russia",
    "iata": "HTG",
    "icao": "UOHH"
  },
  {
    "name": "Igarka Airport",
    "city": "Igarka",
    "country": "Russia",
    "iata": "IAA",
    "icao": "UOII"
  },
  {
    "name": "Khankala Air Base",
    "city": "Grozny",
    "country": "Russia",
    "iata": "GRV",
    "icao": "URMG"
  },
  {
    "name": "Nalchik Airport",
    "city": "Nalchik",
    "country": "Russia",
    "iata": "NAL",
    "icao": "URMN"
  },
  {
    "name": "Beslan Airport",
    "city": "Beslan",
    "country": "Russia",
    "iata": "OGZ",
    "icao": "URMO"
  },
  {
    "name": "Elista Airport",
    "city": "Elista",
    "country": "Russia",
    "iata": "ESL",
    "icao": "URWI"
  },
  {
    "name": "Aleknagik / New Airport",
    "city": "Aleknagik",
    "country": "United States",
    "iata": "WKK",
    "icao": "5A8"
  },
  {
    "name": "Mercer County Airport",
    "city": "Bluefield",
    "country": "United States",
    "iata": "BLF",
    "icao": "KBLF"
  },
  {
    "name": "Mid Delta Regional Airport",
    "city": "Greenville",
    "country": "United States",
    "iata": "GLH",
    "icao": "KGLH"
  },
  {
    "name": "Tri Cities Airport",
    "city": "Pasco",
    "country": "United States",
    "iata": "PSC",
    "icao": "KPSC"
  },
  {
    "name": "Akutan Seaplane Base",
    "city": "Akutan",
    "country": "United States",
    "iata": "KQA",
    "icao": "KQA"
  },
  {
    "name": "Lopez Island Airport",
    "city": "Lopez",
    "country": "United States",
    "iata": "LPS",
    "icao": "S31"
  },
  {
    "name": "Salekhard Airport",
    "city": "Salekhard",
    "country": "Russia",
    "iata": "SLY",
    "icao": "USDD"
  },
  {
    "name": "Khanty Mansiysk Airport",
    "city": "Khanty-Mansiysk",
    "country": "Russia",
    "iata": "HMA",
    "icao": "USHH"
  },
  {
    "name": "Nyagan Airport",
    "city": "Nyagan",
    "country": "Russia",
    "iata": "NYA",
    "icao": "USHN"
  },
  {
    "name": "Sovetskiy Airport",
    "city": "Sovetskiy",
    "country": "Russia",
    "iata": "OVS",
    "icao": "USHS"
  },
  {
    "name": "Izhevsk Airport",
    "city": "Izhevsk",
    "country": "Russia",
    "iata": "IJK",
    "icao": "USII"
  },
  {
    "name": "Pobedilovo Airport",
    "city": "Kirov",
    "country": "Russia",
    "iata": "KVX",
    "icao": "USKK"
  },
  {
    "name": "Nadym Airport",
    "city": "Nadym",
    "country": "Russia",
    "iata": "NYM",
    "icao": "USMM"
  },
  {
    "name": "Raduzhny Airport",
    "city": "Raduzhnyi",
    "country": "Russia",
    "iata": "RAT",
    "icao": "USNR"
  },
  {
    "name": "Nefteyugansk Airport",
    "city": "Nefteyugansk",
    "country": "Russia",
    "iata": "NFG",
    "icao": "USRN"
  },
  {
    "name": "Kurgan Airport",
    "city": "Kurgan",
    "country": "Russia",
    "iata": "KRO",
    "icao": "USUU"
  },
  {
    "name": "Khudzhand Airport",
    "city": "Khudzhand",
    "country": "Tajikistan",
    "iata": "LBD",
    "icao": "UTDL"
  },
  {
    "name": "Andizhan Airport",
    "city": "Andizhan",
    "country": "Uzbekistan",
    "iata": "AZN",
    "icao": "UTKA"
  },
  {
    "name": "Fergana International Airport",
    "city": "Fergana",
    "country": "Uzbekistan",
    "iata": "FEG",
    "icao": "UTKF"
  },
  {
    "name": "Namangan Airport",
    "city": "Namangan",
    "country": "Uzbekistan",
    "iata": "NMA",
    "icao": "UTKN"
  },
  {
    "name": "Nukus Airport",
    "city": "Nukus",
    "country": "Uzbekistan",
    "iata": "NCU",
    "icao": "UTNN"
  },
  {
    "name": "Urgench Airport",
    "city": "Urgench",
    "country": "Uzbekistan",
    "iata": "UGC",
    "icao": "UTNU"
  },
  {
    "name": "Karshi Khanabad Airport",
    "city": "Khanabad",
    "country": "Uzbekistan",
    "iata": "KSQ",
    "icao": "UTSL"
  },
  {
    "name": "Termez Airport",
    "city": "Termez",
    "country": "Uzbekistan",
    "iata": "TMJ",
    "icao": "UTST"
  },
  {
    "name": "Staroselye Airport",
    "city": "Rybinsk",
    "country": "Russia",
    "iata": "RYB",
    "icao": "UUBK"
  },
  {
    "name": "Belgorod International Airport",
    "city": "Belgorod",
    "country": "Russia",
    "iata": "EGO",
    "icao": "UUOB"
  },
  {
    "name": "Kursk East Airport",
    "city": "Kursk",
    "country": "Russia",
    "iata": "URS",
    "icao": "UUOK"
  },
  {
    "name": "Lipetsk Airport",
    "city": "Lipetsk",
    "country": "Russia",
    "iata": "LPK",
    "icao": "UUOL"
  },
  {
    "name": "Vorkuta Airport",
    "city": "Vorkuta",
    "country": "Russia",
    "iata": "VKT",
    "icao": "UUYW"
  },
  {
    "name": "Bugulma Airport",
    "city": "Bugulma",
    "country": "Russia",
    "iata": "UUA",
    "icao": "UWKB"
  },
  {
    "name": "Yoshkar-Ola Airport",
    "city": "Yoshkar-Ola",
    "country": "Russia",
    "iata": "JOK",
    "icao": "UWKJ"
  },
  {
    "name": "Cheboksary Airport",
    "city": "Cheboksary",
    "country": "Russia",
    "iata": "CSY",
    "icao": "UWKS"
  },
  {
    "name": "Ulyanovsk East Airport",
    "city": "Ulyanovsk",
    "country": "Russia",
    "iata": "ULY",
    "icao": "UWLW"
  },
  {
    "name": "Orsk Airport",
    "city": "Orsk",
    "country": "Russia",
    "iata": "OSW",
    "icao": "UWOR"
  },
  {
    "name": "Penza Airport",
    "city": "Penza",
    "country": "Russia",
    "iata": "PEZ",
    "icao": "UWPP"
  },
  {
    "name": "Saransk Airport",
    "city": "Saransk",
    "country": "Russia",
    "iata": "SKX",
    "icao": "UWPS"
  },
  {
    "name": "Balakovo Airport",
    "city": "Balakovo",
    "country": "Russia",
    "iata": "BWO",
    "icao": "UWSB"
  },
  {
    "name": "Hubli Airport",
    "city": "Hubli",
    "country": "India",
    "iata": "HBX",
    "icao": "VAHB"
  },
  {
    "name": "Koggala Airport",
    "city": "Koggala",
    "country": "Sri Lanka",
    "iata": "KCT",
    "icao": "VCCK"
  },
  {
    "name": "Weerawila Airport",
    "city": "Wirawila",
    "country": "Sri Lanka",
    "iata": "WRZ",
    "icao": "VCCW"
  },
  {
    "name": "Battambang Airport",
    "city": "Battambang",
    "country": "Cambodia",
    "iata": "BBM",
    "icao": "VDBG"
  },
  {
    "name": "Shillong Airport",
    "city": "Shillong",
    "country": "India",
    "iata": "SHL",
    "icao": "VEBI"
  },
  {
    "name": "Lokpriya Gopinath Bordoloi International Airport",
    "city": "Guwahati",
    "country": "India",
    "iata": "GAU",
    "icao": "VEGT"
  },
  {
    "name": "Dimapur Airport",
    "city": "Dimapur",
    "country": "India",
    "iata": "DMU",
    "icao": "VEMR"
  },
  {
    "name": "Tezpur Airport",
    "city": "Tezpur",
    "country": "India",
    "iata": "TEZ",
    "icao": "VETZ"
  },
  {
    "name": "Barisal Airport",
    "city": "Barisal",
    "country": "Bangladesh",
    "iata": "BZL",
    "icao": "VGBR"
  },
  {
    "name": "Ban Huoeisay Airport",
    "city": "Huay Xai",
    "country": "Laos",
    "iata": "OUI",
    "icao": "VLHS"
  },
  {
    "name": "Bharatpur Airport",
    "city": "Bharatpur",
    "country": "Nepal",
    "iata": "BHR",
    "icao": "VNBP"
  },
  {
    "name": "Bhadrapur Airport",
    "city": "Chandragarhi",
    "country": "Nepal",
    "iata": "BDP",
    "icao": "VNCG"
  },
  {
    "name": "Meghauli Airport",
    "city": "Meghauli",
    "country": "Nepal",
    "iata": "MEY",
    "icao": "VNMG"
  },
  {
    "name": "Nepalgunj Airport",
    "city": "Nepalgunj",
    "country": "Nepal",
    "iata": "KEP",
    "icao": "VNNG"
  },
  {
    "name": "Gan International Airport",
    "city": "Gan Island",
    "country": "Maldives",
    "iata": "GAN",
    "icao": "VRMG"
  },
  {
    "name": "Hanimaadhoo Airport",
    "city": "Haa Dhaalu Atoll",
    "country": "Maldives",
    "iata": "HAQ",
    "icao": "VRMH"
  },
  {
    "name": "Kadhdhoo Airport",
    "city": "Laamu Atoll",
    "country": "Maldives",
    "iata": "KDO",
    "icao": "VRMK"
  },
  {
    "name": "Mae Sot Airport",
    "city": "Tak",
    "country": "Thailand",
    "iata": "MAQ",
    "icao": "VTPM"
  },
  {
    "name": "Buon Ma Thuot Airport",
    "city": "Buonmethuot",
    "country": "Vietnam",
    "iata": "BMV",
    "icao": "VVBM"
  },
  {
    "name": "Cat Bi International Airport",
    "city": "Haiphong",
    "country": "Vietnam",
    "iata": "HPH",
    "icao": "VVCI"
  },
  {
    "name": "Cam Ranh Airport",
    "city": "Nha Trang",
    "country": "Vietnam",
    "iata": "CXR",
    "icao": "VVCR"
  },
  {
    "name": "Co Ong Airport",
    "city": "Conson",
    "country": "Vietnam",
    "iata": "VCS",
    "icao": "VVCS"
  },
  {
    "name": "Can Tho International Airport",
    "city": "Can Tho",
    "country": "Vietnam",
    "iata": "VCA",
    "icao": "VVCT"
  },
  {
    "name": "Dien Bien Phu Airport",
    "city": "Dienbienphu",
    "country": "Vietnam",
    "iata": "DIN",
    "icao": "VVDB"
  },
  {
    "name": "Phu Cat Airport",
    "city": "Phucat",
    "country": "Vietnam",
    "iata": "UIH",
    "icao": "VVPC"
  },
  {
    "name": "Pleiku Airport",
    "city": "Pleiku",
    "country": "Vietnam",
    "iata": "PXU",
    "icao": "VVPK"
  },
  {
    "name": "Vinh Airport",
    "city": "Vinh",
    "country": "Vietnam",
    "iata": "VII",
    "icao": "VVVH"
  },
  {
    "name": "Banmaw Airport",
    "city": "Banmaw",
    "country": "Burma",
    "iata": "BMO",
    "icao": "VYBM"
  },
  {
    "name": "Dawei Airport",
    "city": "Dawei",
    "country": "Burma",
    "iata": "TVY",
    "icao": "VYDW"
  },
  {
    "name": "Kawthoung Airport",
    "city": "Kawthoung",
    "country": "Burma",
    "iata": "KAW",
    "icao": "VYKT"
  },
  {
    "name": "Loikaw Airport",
    "city": "Loikaw",
    "country": "Burma",
    "iata": "LIW",
    "icao": "VYLK"
  },
  {
    "name": "Mawlamyine Airport",
    "city": "Mawlamyine",
    "country": "Burma",
    "iata": "MNU",
    "icao": "VYMM"
  },
  {
    "name": "Pathein Airport",
    "city": "Pathein",
    "country": "Burma",
    "iata": "BSX",
    "icao": "VYPN"
  },
  {
    "name": "Pakhokku Airport",
    "city": "Pakhokku",
    "country": "Burma",
    "iata": "PKK",
    "icao": "VYPU"
  },
  {
    "name": "Sumbawa Besar Airport",
    "city": "Sumbawa Island",
    "country": "Indonesia",
    "iata": "SWQ",
    "icao": "WADS"
  },
  {
    "name": "Tambolaka Airport",
    "city": "Waikabubak-Sumba Island",
    "country": "Indonesia",
    "iata": "TMC",
    "icao": "WADT"
  },
  {
    "name": "Bokondini Airport",
    "city": "Bokondini-Papua Island",
    "country": "Indonesia",
    "iata": "BUI",
    "icao": "WAJB"
  },
  {
    "name": "Senggeh Airport",
    "city": "Senggeh-Papua Island",
    "country": "Indonesia",
    "iata": "SEH",
    "icao": "WAJS"
  },
  {
    "name": "Tanjung Harapan Airport",
    "city": "Tanjung Selor-Borneo Island",
    "country": "Indonesia",
    "iata": "TJS",
    "icao": "WALG"
  },
  {
    "name": "Datadawai Airport",
    "city": "Datadawai-Borneo Island",
    "country": "Indonesia",
    "iata": "DTD",
    "icao": "WALJ"
  },
  {
    "name": "Barau(Kalimaru) Airport",
    "city": "Tanjung Redep-Borneo Island",
    "country": "Indonesia",
    "iata": "BEJ",
    "icao": "WALK"
  },
  {
    "name": "Warukin Airport",
    "city": "Tanjung-Borneo Island",
    "country": "Indonesia",
    "iata": "TJG",
    "icao": "WAON"
  },
  {
    "name": "Sampit(Hasan) Airport",
    "city": "Sampit-Borneo Island",
    "country": "Indonesia",
    "iata": "SMQ",
    "icao": "WAOS"
  },
  {
    "name": "Dumatumbun Airport",
    "city": "Langgur-Kei Islands",
    "country": "Indonesia",
    "iata": "LUV",
    "icao": "WAPL"
  },
  {
    "name": "Mali Airport",
    "city": "Alor Island",
    "country": "Indonesia",
    "iata": "ARD",
    "icao": "WATM"
  },
  {
    "name": "Belaga Airport",
    "city": "Belaga",
    "country": "Malaysia",
    "iata": "BLG",
    "icao": "WBGC"
  },
  {
    "name": "Long Lellang Airport",
    "city": "Long Datih",
    "country": "Malaysia",
    "iata": "LGL",
    "icao": "WBGF"
  },
  {
    "name": "Long Seridan Airport",
    "city": "Long Seridan",
    "country": "Malaysia",
    "iata": "ODN",
    "icao": "WBGI"
  },
  {
    "name": "Mukah Airport",
    "city": "Mukah",
    "country": "Malaysia",
    "iata": "MKM",
    "icao": "WBGK"
  },
  {
    "name": "Bakalalan Airport",
    "city": "Bakalalan",
    "country": "Malaysia",
    "iata": "BKM",
    "icao": "WBGQ"
  },
  {
    "name": "Lawas Airport",
    "city": "Lawas",
    "country": "Malaysia",
    "iata": "LWY",
    "icao": "WBGW"
  },
  {
    "name": "Bario Airport",
    "city": "Bario",
    "country": "Malaysia",
    "iata": "BBN",
    "icao": "WBGZ"
  },
  {
    "name": "Tomanggong Airport",
    "city": "Tomanggong",
    "country": "Malaysia",
    "iata": "TMG",
    "icao": "WBKM"
  },
  {
    "name": "Kudat Airport",
    "city": "Kudat",
    "country": "Malaysia",
    "iata": "KUD",
    "icao": "WBKT"
  },
  {
    "name": "Radin Inten II (Branti) Airport",
    "city": "Bandar Lampung-Sumatra Island",
    "country": "Indonesia",
    "iata": "TKG",
    "icao": "WIAT"
  },
  {
    "name": "Halim Perdanakusuma International Airport",
    "city": "Jakarta",
    "country": "Indonesia",
    "iata": "HLP",
    "icao": "WIHH"
  },
  {
    "name": "Ranai Airport",
    "city": "Ranai-Natuna Besar Island",
    "country": "Indonesia",
    "iata": "NTX",
    "icao": "WION"
  },
  {
    "name": "Pangsuma Airport",
    "city": "Putussibau-Borneo Island",
    "country": "Indonesia",
    "iata": "PSU",
    "icao": "WIOP"
  },
  {
    "name": "Sintang(Susilo) Airport",
    "city": "Sintang-Borneo Island",
    "country": "Indonesia",
    "iata": "SQG",
    "icao": "WIOS"
  },
  {
    "name": "Pendopo Airport",
    "city": "Talang Gudang-Sumatra Island",
    "country": "Indonesia",
    "iata": "PDO",
    "icao": "WIPQ"
  },
  {
    "name": "Malikus Saleh Airport",
    "city": "Lhok Seumawe-Sumatra Island",
    "country": "Indonesia",
    "iata": "LSW",
    "icao": "WITM"
  },
  {
    "name": "Pulau Pangkor Airport",
    "city": "Pangkor Island",
    "country": "Malaysia",
    "iata": "PKG",
    "icao": "WMPA"
  },
  {
    "name": "Long Bawan Airport",
    "city": "Long Bawan-Borneo Island",
    "country": "Indonesia",
    "iata": "LBW",
    "icao": "WRLB"
  },
  {
    "name": "Nunukan Airport",
    "city": "Nunukan-Nunukan Island",
    "country": "Indonesia",
    "iata": "NNX",
    "icao": "WRLF"
  },
  {
    "name": "Long Apung Airport",
    "city": "Long Apung-Borneo Island",
    "country": "Indonesia",
    "iata": "LPU",
    "icao": "WRLP"
  },
  {
    "name": "Albany Airport",
    "city": "Albany",
    "country": "Australia",
    "iata": "ALH",
    "icao": "YABA"
  },
  {
    "name": "Argyle Airport",
    "city": "Argyle",
    "country": "Australia",
    "iata": "GYL",
    "icao": "YARG"
  },
  {
    "name": "Aurukun Airport",
    "city": "Aurukun",
    "country": "Australia",
    "iata": "AUU",
    "icao": "YAUR"
  },
  {
    "name": "Barcaldine Airport",
    "city": "Barcaldine",
    "country": "Australia",
    "iata": "BCI",
    "icao": "YBAR"
  },
  {
    "name": "Badu Island Airport",
    "city": "Badu Island",
    "country": "Australia",
    "iata": "BDD",
    "icao": "YBAU"
  },
  {
    "name": "Birdsville Airport",
    "city": "Birdsville",
    "country": "Australia",
    "iata": "BVI",
    "icao": "YBDV"
  },
  {
    "name": "Broken Hill Airport",
    "city": "Broken Hill",
    "country": "Australia",
    "iata": "BHQ",
    "icao": "YBHI"
  },
  {
    "name": "Hamilton Island Airport",
    "city": "Hamilton Island",
    "country": "Australia",
    "iata": "HTI",
    "icao": "YBHM"
  },
  {
    "name": "Bedourie Airport",
    "city": "Bedourie",
    "country": "Australia",
    "iata": "BEU",
    "icao": "YBIE"
  },
  {
    "name": "Bourke Airport",
    "city": "Bourke",
    "country": "Australia",
    "iata": "BRK",
    "icao": "YBKE"
  },
  {
    "name": "Burketown Airport",
    "city": "Burketown",
    "country": "Australia",
    "iata": "BUC",
    "icao": "YBKT"
  },
  {
    "name": "Boigu Airport",
    "city": "Boigu",
    "country": "Australia",
    "iata": "GIC",
    "icao": "YBOI"
  },
  {
    "name": "Oakey Airport",
    "city": "Oakey",
    "country": "Australia",
    "iata": "OKY",
    "icao": "YBOK"
  },
  {
    "name": "Boulia Airport",
    "city": "Boulia",
    "country": "Australia",
    "iata": "BQL",
    "icao": "YBOU"
  },
  {
    "name": "Bathurst Airport",
    "city": "Bathurst",
    "country": "Australia",
    "iata": "BHS",
    "icao": "YBTH"
  },
  {
    "name": "Blackwater Airport",
    "city": "Blackwater",
    "country": "Australia",
    "iata": "BLT",
    "icao": "YBTR"
  },
  {
    "name": "Carnarvon Airport",
    "city": "Carnarvon",
    "country": "Australia",
    "iata": "CVQ",
    "icao": "YCAR"
  },
  {
    "name": "Cobar Airport",
    "city": "Cobar",
    "country": "Australia",
    "iata": "CAZ",
    "icao": "YCBA"
  },
  {
    "name": "Coober Pedy Airport",
    "city": "Coober Pedy",
    "country": "Australia",
    "iata": "CPD",
    "icao": "YCBP"
  },
  {
    "name": "Coconut Island Airport",
    "city": "Coconut Island",
    "country": "Australia",
    "iata": "CNC",
    "icao": "YCCT"
  },
  {
    "name": "Cloncurry Airport",
    "city": "Cloncurry",
    "country": "Australia",
    "iata": "CNJ",
    "icao": "YCCY"
  },
  {
    "name": "Ceduna Airport",
    "city": "Ceduna",
    "country": "Australia",
    "iata": "CED",
    "icao": "YCDU"
  },
  {
    "name": "Cooktown Airport",
    "city": "Cooktown",
    "country": "Australia",
    "iata": "CTN",
    "icao": "YCKN"
  },
  {
    "name": "Cunnamulla Airport",
    "city": "Cunnamulla",
    "country": "Australia",
    "iata": "CMA",
    "icao": "YCMU"
  },
  {
    "name": "Coonamble Airport",
    "city": "Coonamble",
    "country": "Australia",
    "iata": "CNB",
    "icao": "YCNM"
  },
  {
    "name": "Coen Airport",
    "city": "Coen",
    "country": "Australia",
    "iata": "CUQ",
    "icao": "YCOE"
  },
  {
    "name": "Cooma Snowy Mountains Airport",
    "city": "Cooma",
    "country": "Australia",
    "iata": "OOM",
    "icao": "YCOM"
  },
  {
    "name": "Doomadgee Airport",
    "city": "Doomadgee",
    "country": "Australia",
    "iata": "DMD",
    "icao": "YDMG"
  },
  {
    "name": "Darnley Island Airport",
    "city": "Darnley Island",
    "country": "Australia",
    "iata": "NLF",
    "icao": "YDNI"
  },
  {
    "name": "Devonport Airport",
    "city": "Devonport",
    "country": "Australia",
    "iata": "DPO",
    "icao": "YDPO"
  },
  {
    "name": "Elcho Island Airport",
    "city": "Elcho Island",
    "country": "Australia",
    "iata": "ELC",
    "icao": "YELD"
  },
  {
    "name": "Esperance Airport",
    "city": "Esperance",
    "country": "Australia",
    "iata": "EPR",
    "icao": "YESP"
  },
  {
    "name": "Flinders Island Airport",
    "city": "Flinders Island",
    "country": "Australia",
    "iata": "FLS",
    "icao": "YFLI"
  },
  {
    "name": "Geraldton Airport",
    "city": "Geraldton",
    "country": "Australia",
    "iata": "GET",
    "icao": "YGEL"
  },
  {
    "name": "Gladstone Airport",
    "city": "Gladstone",
    "country": "Australia",
    "iata": "GLT",
    "icao": "YGLA"
  },
  {
    "name": "Groote Eylandt Airport",
    "city": "Groote Eylandt",
    "country": "Australia",
    "iata": "GTE",
    "icao": "YGTE"
  },
  {
    "name": "Griffith Airport",
    "city": "Griffith",
    "country": "Australia",
    "iata": "GFF",
    "icao": "YGTH"
  },
  {
    "name": "Horn Island Airport",
    "city": "Horn Island",
    "country": "Australia",
    "iata": "HID",
    "icao": "YHID"
  },
  {
    "name": "Hooker Creek Airport",
    "city": "Hooker Creek",
    "country": "Australia",
    "iata": "HOK",
    "icao": "YHOO"
  },
  {
    "name": "Mount Hotham Airport",
    "city": "Mount Hotham",
    "country": "Australia",
    "iata": "MHU",
    "icao": "YHOT"
  },
  {
    "name": "Hughenden Airport",
    "city": "Hughenden",
    "country": "Australia",
    "iata": "HGD",
    "icao": "YHUG"
  },
  {
    "name": "Julia Creek Airport",
    "city": "Julia Creek",
    "country": "Australia",
    "iata": "JCK",
    "icao": "YJLC"
  },
  {
    "name": "Kalbarri Airport",
    "city": "Kalbarri",
    "country": "Australia",
    "iata": "KAX",
    "icao": "YKBR"
  },
  {
    "name": "King Island Airport",
    "city": "King Island",
    "country": "Australia",
    "iata": "KNS",
    "icao": "YKII"
  },
  {
    "name": "Kalkgurung Airport",
    "city": "Kalkgurung",
    "country": "Australia",
    "iata": "KFG",
    "icao": "YKKG"
  },
  {
    "name": "Karumba Airport",
    "city": "Karumba",
    "country": "Australia",
    "iata": "KRB",
    "icao": "YKMB"
  },
  {
    "name": "Kowanyama Airport",
    "city": "Kowanyama",
    "country": "Australia",
    "iata": "KWM",
    "icao": "YKOW"
  },
  {
    "name": "Kubin Airport",
    "city": "Kubin",
    "country": "Australia",
    "iata": "KUG",
    "icao": "YKUB"
  },
  {
    "name": "Leonora Airport",
    "city": "Leonora",
    "country": "Australia",
    "iata": "LNO",
    "icao": "YLEO"
  },
  {
    "name": "Lake Evella Airport",
    "city": "Lake Evella",
    "country": "Australia",
    "iata": "LEL",
    "icao": "YLEV"
  },
  {
    "name": "Lord Howe Island Airport",
    "city": "Lord Howe Island",
    "country": "Australia",
    "iata": "LDH",
    "icao": "YLHI"
  },
  {
    "name": "Lockhart River Airport",
    "city": "Lockhart River",
    "country": "Australia",
    "iata": "IRG",
    "icao": "YLHR"
  },
  {
    "name": "Lismore Airport",
    "city": "Lismore",
    "country": "Australia",
    "iata": "LSY",
    "icao": "YLIS"
  },
  {
    "name": "Lightning Ridge Airport",
    "city": "Lightning Ridge",
    "country": "Australia",
    "iata": "LHG",
    "icao": "YLRD"
  },
  {
    "name": "Longreach Airport",
    "city": "Longreach",
    "country": "Australia",
    "iata": "LRE",
    "icao": "YLRE"
  },
  {
    "name": "Leinster Airport",
    "city": "Leinster",
    "country": "Australia",
    "iata": "LER",
    "icao": "YLST"
  },
  {
    "name": "Laverton Airport",
    "city": "Laverton",
    "country": "Australia",
    "iata": "LVO",
    "icao": "YLTN"
  },
  {
    "name": "Mabuiag Island Airport",
    "city": "Mabuiag Island",
    "country": "Australia",
    "iata": "UBB",
    "icao": "YMAA"
  },
  {
    "name": "Meekatharra Airport",
    "city": "Meekatharra",
    "country": "Australia",
    "iata": "MKR",
    "icao": "YMEK"
  },
  {
    "name": "Merimbula Airport",
    "city": "Merimbula",
    "country": "Australia",
    "iata": "MIM",
    "icao": "YMER"
  },
  {
    "name": "Milingimbi Airport",
    "city": "Milingimbi",
    "country": "Australia",
    "iata": "MGT",
    "icao": "YMGB"
  },
  {
    "name": "Maningrida Airport",
    "city": "Maningrida",
    "country": "Australia",
    "iata": "MNG",
    "icao": "YMGD"
  },
  {
    "name": "McArthur River Mine Airport",
    "city": "McArthur River Mine",
    "country": "Australia",
    "iata": "MCV",
    "icao": "YMHU"
  },
  {
    "name": "Mildura Airport",
    "city": "Mildura",
    "country": "Australia",
    "iata": "MQL",
    "icao": "YMIA"
  },
  {
    "name": "Mount Magnet Airport",
    "city": "Mount Magnet",
    "country": "Australia",
    "iata": "MMG",
    "icao": "YMOG"
  },
  {
    "name": "Moree Airport",
    "city": "Moree",
    "country": "Australia",
    "iata": "MRZ",
    "icao": "YMOR"
  },
  {
    "name": "Moranbah Airport",
    "city": "Moranbah",
    "country": "Australia",
    "iata": "MOV",
    "icao": "YMRB"
  },
  {
    "name": "Moruya Airport",
    "city": "Moruya",
    "country": "Australia",
    "iata": "MYA",
    "icao": "YMRY"
  },
  {
    "name": "Mount Gambier Airport",
    "city": "Mount Gambier",
    "country": "Australia",
    "iata": "MGB",
    "icao": "YMTG"
  },
  {
    "name": "Mornington Island Airport",
    "city": "Mornington Island",
    "country": "Australia",
    "iata": "ONG",
    "icao": "YMTI"
  },
  {
    "name": "Murray Island Airport",
    "city": "Murray Island",
    "country": "Australia",
    "iata": "MYI",
    "icao": "YMUI"
  },
  {
    "name": "Maryborough Airport",
    "city": "Maryborough",
    "country": "Australia",
    "iata": "MBH",
    "icao": "YMYB"
  },
  {
    "name": "Narrandera Airport",
    "city": "Narrandera",
    "country": "Australia",
    "iata": "NRA",
    "icao": "YNAR"
  },
  {
    "name": "Narrabri Airport",
    "city": "Narrabri",
    "country": "Australia",
    "iata": "NAA",
    "icao": "YNBR"
  },
  {
    "name": "Normanton Airport",
    "city": "Normanton",
    "country": "Australia",
    "iata": "NTN",
    "icao": "YNTN"
  },
  {
    "name": "Newman Airport",
    "city": "Newman",
    "country": "Australia",
    "iata": "ZNE",
    "icao": "YNWN"
  },
  {
    "name": "Olympic Dam Airport",
    "city": "Olympic Dam",
    "country": "Australia",
    "iata": "OLP",
    "icao": "YOLD"
  },
  {
    "name": "Port Augusta Airport",
    "city": "Argyle",
    "country": "Australia",
    "iata": "PUG",
    "icao": "YPAG"
  },
  {
    "name": "Palm Island Airport",
    "city": "Palm Island",
    "country": "Australia",
    "iata": "PMK",
    "icao": "YPAM"
  },
  {
    "name": "Paraburdoo Airport",
    "city": "Paraburdoo",
    "country": "Australia",
    "iata": "PBO",
    "icao": "YPBO"
  },
  {
    "name": "Cocos (Keeling) Islands Airport",
    "city": "Cocos Keeling Island",
    "country": "Cocos (Keeling) Islands",
    "iata": "CCK",
    "icao": "YPCC"
  },
  {
    "name": "Gove Airport",
    "city": "Gove",
    "country": "Australia",
    "iata": "GOV",
    "icao": "YPGV"
  },
  {
    "name": "Parkes Airport",
    "city": "Parkes",
    "country": "Australia",
    "iata": "PKE",
    "icao": "YPKS"
  },
  {
    "name": "Port Lincoln Airport",
    "city": "Port Lincoln",
    "country": "Australia",
    "iata": "PLO",
    "icao": "YPLC"
  },
  {
    "name": "Pormpuraaw Airport",
    "city": "Pormpuraaw",
    "country": "Australia",
    "iata": "EDR",
    "icao": "YPMP"
  },
  {
    "name": "Port Macquarie Airport",
    "city": "Port Macquarie",
    "country": "Australia",
    "iata": "PQQ",
    "icao": "YPMQ"
  },
  {
    "name": "Portland Airport",
    "city": "Portland",
    "country": "Australia",
    "iata": "PTJ",
    "icao": "YPOD"
  },
  {
    "name": "Quilpie Airport",
    "city": "Quilpie",
    "country": "Australia",
    "iata": "ULP",
    "icao": "YQLP"
  },
  {
    "name": "Ramingining Airport",
    "city": "Ramingining",
    "country": "Australia",
    "iata": "RAM",
    "icao": "YRNG"
  },
  {
    "name": "Roma Airport",
    "city": "Roma",
    "country": "Australia",
    "iata": "RMA",
    "icao": "YROM"
  },
  {
    "name": "St George Airport",
    "city": "St George",
    "country": "Australia",
    "iata": "SGO",
    "icao": "YSGE"
  },
  {
    "name": "Shark Bay Airport",
    "city": "Shark Bay",
    "country": "Australia",
    "iata": "MJK",
    "icao": "YSHK"
  },
  {
    "name": "Saibai Island Airport",
    "city": "Saibai Island",
    "country": "Australia",
    "iata": "SBR",
    "icao": "YSII"
  },
  {
    "name": "Strahan Airport",
    "city": "Strahan",
    "country": "Australia",
    "iata": "SRN",
    "icao": "YSRN"
  },
  {
    "name": "Thargomindah Airport",
    "city": "Thargomindah",
    "country": "Australia",
    "iata": "XTG",
    "icao": "YTGM"
  },
  {
    "name": "Tennant Creek Airport",
    "city": "Tennant Creek",
    "country": "Australia",
    "iata": "TCA",
    "icao": "YTNK"
  },
  {
    "name": "Victoria River Downs Airport",
    "city": "Victoria River Downs",
    "country": "Australia",
    "iata": "VCD",
    "icao": "YVRD"
  },
  {
    "name": "Warraber Island Airport",
    "city": "Sue Islet",
    "country": "Australia",
    "iata": "SYU",
    "icao": "YWBS"
  },
  {
    "name": "Windorah Airport",
    "city": "Windorah",
    "country": "Australia",
    "iata": "WNR",
    "icao": "YWDH"
  },
  {
    "name": "Whyalla Airport",
    "city": "Whyalla",
    "country": "Australia",
    "iata": "WYA",
    "icao": "YWHA"
  },
  {
    "name": "Wiluna Airport",
    "city": "Wiluna",
    "country": "Australia",
    "iata": "WUN",
    "icao": "YWLU"
  },
  {
    "name": "Wollongong Airport",
    "city": "Wollongong",
    "country": "Australia",
    "iata": "WOL",
    "icao": "YWOL"
  },
  {
    "name": "Winton Airport",
    "city": "Winton",
    "country": "Australia",
    "iata": "WIN",
    "icao": "YWTN"
  },
  {
    "name": "Wynyard Airport",
    "city": "Burnie",
    "country": "Australia",
    "iata": "BWT",
    "icao": "YWYY"
  },
  {
    "name": "Yorke Island Airport",
    "city": "Yorke Island",
    "country": "Australia",
    "iata": "OKR",
    "icao": "YYKI"
  },
  {
    "name": "Yam Island Airport",
    "city": "Yam Island",
    "country": "Australia",
    "iata": "XMY",
    "icao": "YYMI"
  },
  {
    "name": "Beijing Nanyuan Airport",
    "city": "Beijing",
    "country": "China",
    "iata": "NAY",
    "icao": "ZBNY"
  },
  {
    "name": "Chifeng Airport",
    "city": "Chifeng",
    "country": "China",
    "iata": "CIF",
    "icao": "ZBCF"
  },
  {
    "name": "Changzhi Airport",
    "city": "Changzhi",
    "country": "China",
    "iata": "CIH",
    "icao": "ZBCZ"
  },
  {
    "name": "Datong Airport",
    "city": "Datong",
    "country": "China",
    "iata": "DAT",
    "icao": "ZBDT"
  },
  {
    "name": "Baita International Airport",
    "city": "Hohhot",
    "country": "China",
    "iata": "HET",
    "icao": "ZBHH"
  },
  {
    "name": "Baotou Airport",
    "city": "Baotou",
    "country": "China",
    "iata": "BAV",
    "icao": "ZBOW"
  },
  {
    "name": "Shijiazhuang Daguocun International Airport",
    "city": "Shijiazhuang",
    "country": "China",
    "iata": "SJW",
    "icao": "ZBSJ"
  },
  {
    "name": "Tongliao Airport",
    "city": "Tongliao",
    "country": "China",
    "iata": "TGO",
    "icao": "ZBTL"
  },
  {
    "name": "Ulanhot Airport",
    "city": "Ulanhot",
    "country": "China",
    "iata": "HLH",
    "icao": "ZBUL"
  },
  {
    "name": "Xilinhot Airport",
    "city": "Xilinhot",
    "country": "China",
    "iata": "XIL",
    "icao": "ZBXH"
  },
  {
    "name": "Beihai Airport",
    "city": "Beihai",
    "country": "China",
    "iata": "BHY",
    "icao": "ZGBH"
  },
  {
    "name": "Changde Airport",
    "city": "Changde",
    "country": "China",
    "iata": "CGD",
    "icao": "ZGCD"
  },
  {
    "name": "Dayong Airport",
    "city": "Dayong",
    "country": "China",
    "iata": "DYG",
    "icao": "ZGDY"
  },
  {
    "name": "Meixian Airport",
    "city": "Meixian",
    "country": "China",
    "iata": "MXZ",
    "icao": "ZGMX"
  },
  {
    "name": "Zhuhai Jinwan Airport",
    "city": "Zhuhai",
    "country": "China",
    "iata": "ZUH",
    "icao": "ZGSD"
  },
  {
    "name": "Liuzhou Bailian Airport",
    "city": "Liuzhou",
    "country": "China",
    "iata": "LZH",
    "icao": "ZGZH"
  },
  {
    "name": "Zhanjiang Airport",
    "city": "Zhanjiang",
    "country": "China",
    "iata": "ZHA",
    "icao": "ZGZJ"
  },
  {
    "name": "Enshi Airport",
    "city": "Enshi",
    "country": "China",
    "iata": "ENH",
    "icao": "ZHES"
  },
  {
    "name": "Nanyang Jiangying Airport",
    "city": "Nanyang",
    "country": "China",
    "iata": "NNY",
    "icao": "ZHNY"
  },
  {
    "name": "Xiangyang Liuji Airport",
    "city": "Xiangfan",
    "country": "China",
    "iata": "XFN",
    "icao": "ZHXF"
  },
  {
    "name": "Yichang Sanxia Airport",
    "city": "Yichang",
    "country": "China",
    "iata": "YIH",
    "icao": "ZHYC"
  },
  {
    "name": "Ankang Wulipu Airport",
    "city": "Ankang",
    "country": "China",
    "iata": "AKA",
    "icao": "ZLAK"
  },
  {
    "name": "Golmud Airport",
    "city": "Golmud",
    "country": "China",
    "iata": "GOQ",
    "icao": "ZLGM"
  },
  {
    "name": "Hanzhong Chenggu Airport",
    "city": "Hanzhong",
    "country": "China",
    "iata": "HZG",
    "icao": "ZLHZ"
  },
  {
    "name": "Qingyang Airport",
    "city": "Qingyang",
    "country": "China",
    "iata": "IQN",
    "icao": "ZLQY"
  },
  {
    "name": "Xining Caojiabu Airport",
    "city": "Xining",
    "country": "China",
    "iata": "XNN",
    "icao": "ZLXN"
  },
  {
    "name": "Yan'an Ershilipu Airport",
    "city": "Yan'an",
    "country": "China",
    "iata": "ENY",
    "icao": "ZLYA"
  },
  {
    "name": "Yulin Yuyang Airport",
    "city": "Yulin",
    "country": "China",
    "iata": "UYN",
    "icao": "ZLYL"
  },
  {
    "name": "Arvaikheer Airport",
    "city": "Arvaikheer",
    "country": "Mongolia",
    "iata": "AVK",
    "icao": "ZMAH"
  },
  {
    "name": "Altai Airport",
    "city": "Altai",
    "country": "Mongolia",
    "iata": "LTI",
    "icao": "ZMAT"
  },
  {
    "name": "Bayankhongor Airport",
    "city": "Bayankhongor",
    "country": "Mongolia",
    "iata": "BYN",
    "icao": "ZMBH"
  },
  {
    "name": "Dalanzadgad Airport",
    "city": "Dalanzadgad",
    "country": "Mongolia",
    "iata": "DLZ",
    "icao": "ZMDZ"
  },
  {
    "name": "Khovd Airport",
    "city": "Khovd",
    "country": "Mongolia",
    "iata": "HVD",
    "icao": "ZMKD"
  },
  {
    "name": "Mörön Airport",
    "city": "Muren",
    "country": "Mongolia",
    "iata": "MXV",
    "icao": "ZMMN"
  },
  {
    "name": "Diqing Airport",
    "city": "Shangri-La",
    "country": "China",
    "iata": "DIG",
    "icao": "ZPDQ"
  },
  {
    "name": "Mangshi Airport",
    "city": "Luxi",
    "country": "China",
    "iata": "LUM",
    "icao": "ZPLX"
  },
  {
    "name": "Pu'er Simao Airport",
    "city": "Simao",
    "country": "China",
    "iata": "SYM",
    "icao": "ZPSM"
  },
  {
    "name": "Zhaotong Airport",
    "city": "Zhaotong",
    "country": "China",
    "iata": "ZAT",
    "icao": "ZPZT"
  },
  {
    "name": "Ganzhou Airport",
    "city": "Ganzhou",
    "country": "China",
    "iata": "KOW",
    "icao": "ZSGZ"
  },
  {
    "name": "Jingdezhen Airport",
    "city": "Jingdezhen",
    "country": "China",
    "iata": "JDZ",
    "icao": "ZSJD"
  },
  {
    "name": "Jiujiang Lushan Airport",
    "city": "Jiujiang",
    "country": "China",
    "iata": "JIU",
    "icao": "ZSJJ"
  },
  {
    "name": "Quzhou Airport",
    "city": "Quzhou",
    "country": "China",
    "iata": "JUZ",
    "icao": "ZSJU"
  },
  {
    "name": "Lianyungang Airport",
    "city": "Lianyungang",
    "country": "China",
    "iata": "LYG",
    "icao": "ZSLG"
  },
  {
    "name": "Huangyan Luqiao Airport",
    "city": "Huangyan",
    "country": "China",
    "iata": "HYN",
    "icao": "ZSLQ"
  },
  {
    "name": "Shubuling Airport",
    "city": "Linyi",
    "country": "China",
    "iata": "LYI",
    "icao": "ZSLY"
  },
  {
    "name": "Quanzhou Jinjiang International Airport",
    "city": "Quanzhou",
    "country": "China",
    "iata": "JJN",
    "icao": "ZSQZ"
  },
  {
    "name": "Tunxi International Airport",
    "city": "Huangshan",
    "country": "China",
    "iata": "TXN",
    "icao": "ZSTX"
  },
  {
    "name": "Weifang Airport",
    "city": "Weifang",
    "country": "China",
    "iata": "WEF",
    "icao": "ZSWF"
  },
  {
    "name": "Weihai Airport",
    "city": "Weihai",
    "country": "China",
    "iata": "WEH",
    "icao": "ZSWH"
  },
  {
    "name": "Sunan Shuofang International Airport",
    "city": "Wuxi",
    "country": "China",
    "iata": "WUX",
    "icao": "ZSWX"
  },
  {
    "name": "Nanping Wuyishan Airport",
    "city": "Wuyishan",
    "country": "China",
    "iata": "WUS",
    "icao": "ZSWY"
  },
  {
    "name": "Wenzhou Yongqiang Airport",
    "city": "Wenzhou",
    "country": "China",
    "iata": "WNZ",
    "icao": "ZSWZ"
  },
  {
    "name": "Yancheng Airport",
    "city": "Yancheng",
    "country": "China",
    "iata": "YNZ",
    "icao": "ZSYN"
  },
  {
    "name": "Yiwu Airport",
    "city": "Yiwu",
    "country": "China",
    "iata": "YIW",
    "icao": "ZSYW"
  },
  {
    "name": "Zhoushan Airport",
    "city": "Zhoushan",
    "country": "China",
    "iata": "HSN",
    "icao": "ZSZS"
  },
  {
    "name": "Qamdo Bangda Airport",
    "city": "Bangda",
    "country": "China",
    "iata": "BPX",
    "icao": "ZUBD"
  },
  {
    "name": "Dachuan Airport",
    "city": "Dazhou",
    "country": "China",
    "iata": "DAX",
    "icao": "ZUDX"
  },
  {
    "name": "Guangyuan Airport",
    "city": "Guangyuan",
    "country": "China",
    "iata": "GYS",
    "icao": "ZUGU"
  },
  {
    "name": "Luzhou Airport",
    "city": "Luzhou",
    "country": "China",
    "iata": "LZO",
    "icao": "ZULZ"
  },
  {
    "name": "Mianyang Airport",
    "city": "Mianyang",
    "country": "China",
    "iata": "MIG",
    "icao": "ZUMY"
  },
  {
    "name": "Nanchong Airport",
    "city": "Nanchong",
    "country": "China",
    "iata": "NAO",
    "icao": "ZUNC"
  },
  {
    "name": "Nyingchi Airport",
    "city": "Nyingchi",
    "country": "China",
    "iata": "LZY",
    "icao": "ZUNZ"
  },
  {
    "name": "Wanxian Airport",
    "city": "Wanxian",
    "country": "China",
    "iata": "WXN",
    "icao": "ZUWX"
  },
  {
    "name": "Aksu Airport",
    "city": "Aksu",
    "country": "China",
    "iata": "AKU",
    "icao": "ZWAK"
  },
  {
    "name": "Qiemo Airport",
    "city": "Qiemo",
    "country": "China",
    "iata": "IQM",
    "icao": "ZWCM"
  },
  {
    "name": "Kuqa Airport",
    "city": "Kuqa",
    "country": "China",
    "iata": "KCA",
    "icao": "ZWKC"
  },
  {
    "name": "Korla Airport",
    "city": "Korla",
    "country": "China",
    "iata": "KRL",
    "icao": "ZWKL"
  },
  {
    "name": "Karamay Airport",
    "city": "Karamay",
    "country": "China",
    "iata": "KRY",
    "icao": "ZWKM"
  },
  {
    "name": "Yining Airport",
    "city": "Yining",
    "country": "China",
    "iata": "YIN",
    "icao": "ZWYN"
  },
  {
    "name": "Heihe Airport",
    "city": "Heihe",
    "country": "China",
    "iata": "HEK",
    "icao": "ZYHE"
  },
  {
    "name": "Jiamusi Airport",
    "city": "Jiamusi",
    "country": "China",
    "iata": "JMU",
    "icao": "ZYJM"
  },
  {
    "name": "Jinzhou Airport",
    "city": "Jinzhou",
    "country": "China",
    "iata": "JNZ",
    "icao": "ZYJZ"
  },
  {
    "name": "Qiqihar Sanjiazi Airport",
    "city": "Qiqihar",
    "country": "China",
    "iata": "NDG",
    "icao": "ZYQQ"
  },
  {
    "name": "Yanji Chaoyangchuan Airport",
    "city": "Yanji",
    "country": "China",
    "iata": "YNJ",
    "icao": "ZYYJ"
  },
  {
    "name": "Waikoloa Heliport",
    "city": "Waikoloa Village",
    "country": "United States",
    "iata": "WKL",
    "icao": "HI07"
  },
  {
    "name": "Mount Keith Airport",
    "city": "Mount Keith",
    "country": "Australia",
    "iata": "WME",
    "icao": "YMNE"
  },
  {
    "name": "Los Roques Airport",
    "city": "Los Roques",
    "country": "Venezuela",
    "iata": "LRV",
    "icao": "SVRS"
  },
  {
    "name": "Inishmore Aerodrome",
    "city": "Inis Mor",
    "country": "Ireland",
    "iata": "IOR",
    "icao": "EIIM"
  },
  {
    "name": "Connemara Regional Airport",
    "city": "Indreabhan",
    "country": "Ireland",
    "iata": "NNR",
    "icao": "EICA"
  },
  {
    "name": "Rügen Airport",
    "city": "Ruegen",
    "country": "Germany",
    "iata": "GTI",
    "icao": "EDCG"
  },
  {
    "name": "Berezovo Airport",
    "city": "Berezovo",
    "country": "Russia",
    "iata": "NBB",
    "icao": "USHB"
  },
  {
    "name": "Szczecin-Dąbie Airport",
    "city": "Szczecin",
    "country": "Poland",
    "iata": "NONE",
    "icao": "EPSD"
  },
  {
    "name": "Worcester Regional Airport",
    "city": "Worcester",
    "country": "United States",
    "iata": "ORH",
    "icao": "KORH"
  },
  {
    "name": "Anqing Tianzhushan Airport",
    "city": "Anqing",
    "country": "China",
    "iata": "AQG",
    "icao": "ZSAQ"
  },
  {
    "name": "Shanhaiguan Airport",
    "city": "Qinhuangdao",
    "country": "China",
    "iata": "SHP",
    "icao": "ZBSH"
  },
  {
    "name": "Yuncheng Guangong Airport",
    "city": "Yuncheng",
    "country": "China",
    "iata": "YCU",
    "icao": "ZBYC"
  },
  {
    "name": "Lanzhou City Airport",
    "city": "Lanzhou",
    "country": "China",
    "iata": "NONE",
    "icao": "ZLAN"
  },
  {
    "name": "Jiayuguan Airport",
    "city": "Jiayuguan",
    "country": "China",
    "iata": "JGN",
    "icao": "ZLJQ"
  },
  {
    "name": "Ordos Ejin Horo Airport",
    "city": "Dongsheng",
    "country": "China",
    "iata": "DSN",
    "icao": "ZBDS"
  },
  {
    "name": "Bremerton National Airport",
    "city": "Bremerton",
    "country": "United States",
    "iata": "PWT",
    "icao": "KPWT"
  },
  {
    "name": "Spencer Municipal Airport",
    "city": "Spencer",
    "country": "United States",
    "iata": "SPW",
    "icao": "KSPW"
  },
  {
    "name": "Jefferson City Memorial Airport",
    "city": "Jefferson City",
    "country": "United States",
    "iata": "JEF",
    "icao": "KJEF"
  },
  {
    "name": "Tannheim Airport",
    "city": "Tannheim",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDMT"
  },
  {
    "name": "Unst Airport",
    "city": "Unst",
    "country": "United Kingdom",
    "iata": "UNT",
    "icao": "EGPW"
  },
  {
    "name": "Berkley Structures Heliport",
    "city": "Pagerungan",
    "country": "Indonesia",
    "iata": "NONE",
    "icao": "WA19"
  },
  {
    "name": "Provincetown Municipal Airport",
    "city": "Provincetown",
    "country": "United States",
    "iata": "PVC",
    "icao": "KPVC"
  },
  {
    "name": "Anduki Airport",
    "city": "Seria",
    "country": "Brunei",
    "iata": "NONE",
    "icao": "WBAK"
  },
  {
    "name": "Gustaf III Airport",
    "city": "Gustavia",
    "country": "France",
    "iata": "SBH",
    "icao": "TFFJ"
  },
  {
    "name": "Kostroma Sokerkino Airport",
    "city": "Kostroma",
    "country": "Russia",
    "iata": "KMW",
    "icao": "UUBA"
  },
  {
    "name": "Sukhumi Dranda Airport",
    "city": "Sukhumi",
    "country": "Georgia",
    "iata": "SUI",
    "icao": "UGSS"
  },
  {
    "name": "Donskoye Airport",
    "city": "Tambow",
    "country": "Russia",
    "iata": "TBW",
    "icao": "UUOT"
  },
  {
    "name": "Oban Airport",
    "city": "North Connel",
    "country": "United Kingdom",
    "iata": "OBN",
    "icao": "EGEO"
  },
  {
    "name": "Erechim Airport",
    "city": "Erechim",
    "country": "Brazil",
    "iata": "ERM",
    "icao": "SSER"
  },
  {
    "name": "La Côte Airport",
    "city": "Prangins",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSGP"
  },
  {
    "name": "Courchevel Airport",
    "city": "Courcheval",
    "country": "France",
    "iata": "CVF",
    "icao": "LFLJ"
  },
  {
    "name": "Fullerton Municipal Airport",
    "city": "Fullerton",
    "country": "United States",
    "iata": "FUL",
    "icao": "KFUL"
  },
  {
    "name": "Concord Regional Airport",
    "city": "Concord",
    "country": "United States",
    "iata": "NONE",
    "icao": "KJQF"
  },
  {
    "name": "Isle of Wight / Sandown Airport",
    "city": "Isle Of Wight",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGHN"
  },
  {
    "name": "Navoi Airport",
    "city": "Navoi",
    "country": "Uzbekistan",
    "iata": "NVI",
    "icao": "UTSA"
  },
  {
    "name": "Andernos Les Bains Airport",
    "city": "Andernos-Les-Bains",
    "country": "France",
    "iata": "NONE",
    "icao": "LFCD"
  },
  {
    "name": "Bienenfarm Airport",
    "city": "Nauen",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDOI"
  },
  {
    "name": "Ain Arnat Airport",
    "city": "Setif",
    "country": "Algeria",
    "iata": "QSF",
    "icao": "DAAS"
  },
  {
    "name": "La Rochelle-Île de Ré Airport",
    "city": "La Rochelle",
    "country": "France",
    "iata": "LRH",
    "icao": "LFBH"
  },
  {
    "name": "Friedman Memorial Airport",
    "city": "Hailey",
    "country": "United States",
    "iata": "SUN",
    "icao": "KSUN"
  },
  {
    "name": "Yverdon-les-Bains Airport",
    "city": "Yverdon-Les-Bains",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSGY"
  },
  {
    "name": "Bielsko Biala Airport",
    "city": "Bielsko-Biala",
    "country": "Poland",
    "iata": "NONE",
    "icao": "EPBA"
  },
  {
    "name": "Mason City Municipal Airport",
    "city": "Mason City",
    "country": "United States",
    "iata": "MCW",
    "icao": "KMCW"
  },
  {
    "name": "Phoenix-Mesa-Gateway Airport",
    "city": "Mesa",
    "country": "United States",
    "iata": "AZA",
    "icao": "KIWA"
  },
  {
    "name": "Saúl Airport",
    "city": "Saul",
    "country": "French Guiana",
    "iata": "XAU",
    "icao": "SOOS"
  },
  {
    "name": "Tekapo Aerodrome",
    "city": "Lake Tekapo",
    "country": "New Zealand",
    "iata": "NONE",
    "icao": "NZTL"
  },
  {
    "name": "Niederoeblarn Airport",
    "city": "Niederoeblarn",
    "country": "Austria",
    "iata": "NONE",
    "icao": "LOGO"
  },
  {
    "name": "Vöslau Airport",
    "city": "Bad Voeslau",
    "country": "Austria",
    "iata": "NONE",
    "icao": "LOAV"
  },
  {
    "name": "Uetersen/Heist Airport",
    "city": "Uetersen",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDHE"
  },
  {
    "name": "Anaktuvuk Pass Airport",
    "city": "Anaktuvuk Pass",
    "country": "United States",
    "iata": "AKP",
    "icao": "PAKP"
  },
  {
    "name": "Anvik Airport",
    "city": "Anvik",
    "country": "United States",
    "iata": "ANV",
    "icao": "PANV"
  },
  {
    "name": "Atqasuk Edward Burnell Sr Memorial Airport",
    "city": "Atqasuk",
    "country": "United States",
    "iata": "ATK",
    "icao": "PATQ"
  },
  {
    "name": "Gambell Airport",
    "city": "Gambell",
    "country": "United States",
    "iata": "GAM",
    "icao": "PAGM"
  },
  {
    "name": "Hooper Bay Airport",
    "city": "Hooper Bay",
    "country": "United States",
    "iata": "HPB",
    "icao": "PAHP"
  },
  {
    "name": "Kaltag Airport",
    "city": "Kaltag",
    "country": "United States",
    "iata": "KAL",
    "icao": "PAKV"
  },
  {
    "name": "St Mary's Airport",
    "city": "St Mary's",
    "country": "United States",
    "iata": "KSM",
    "icao": "PASM"
  },
  {
    "name": "Kivalina Airport",
    "city": "Kivalina",
    "country": "United States",
    "iata": "KVL",
    "icao": "PAVL"
  },
  {
    "name": "Mekoryuk Airport",
    "city": "Mekoryuk",
    "country": "United States",
    "iata": "MYU",
    "icao": "PAMY"
  },
  {
    "name": "Ruby Airport",
    "city": "Ruby",
    "country": "United States",
    "iata": "RBY",
    "icao": "PARY"
  },
  {
    "name": "Shishmaref Airport",
    "city": "Shishmaref",
    "country": "United States",
    "iata": "SHH",
    "icao": "PASH"
  },
  {
    "name": "Savoonga Airport",
    "city": "Savoonga",
    "country": "United States",
    "iata": "SVA",
    "icao": "PASA"
  },
  {
    "name": "Noatak Airport",
    "city": "Noatak",
    "country": "United States",
    "iata": "WTK",
    "icao": "PAWN"
  },
  {
    "name": "Ormoc Airport",
    "city": "Ormoc City",
    "country": "Philippines",
    "iata": "OMC",
    "icao": "RPVO"
  },
  {
    "name": "Puvirnituq Airport",
    "city": "Puvirnituq",
    "country": "Canada",
    "iata": "YPX",
    "icao": "CYPX"
  },
  {
    "name": "Tasiujaq Airport",
    "city": "Tasiujaq",
    "country": "Canada",
    "iata": "YTQ",
    "icao": "CYTQ"
  },
  {
    "name": "Arctic Village Airport",
    "city": "Arctic Village",
    "country": "United States",
    "iata": "ARC",
    "icao": "PARC"
  },
  {
    "name": "Sam Mbakwe International Airport",
    "city": "Imo",
    "country": "Nigeria",
    "iata": "QOW",
    "icao": "DNIM"
  },
  {
    "name": "Arenal Airport",
    "city": "La Fortuna/San Carlos",
    "country": "Costa Rica",
    "iata": "FON",
    "icao": "MRAN"
  },
  {
    "name": "Tambor Airport",
    "city": "Nicoya",
    "country": "Costa Rica",
    "iata": "TMU",
    "icao": "MRTR"
  },
  {
    "name": "Cauayan Airport",
    "city": "Cauayan",
    "country": "Philippines",
    "iata": "CYZ",
    "icao": "RPUY"
  },
  {
    "name": "Kirovsk-Apatity Airport",
    "city": "Apatity",
    "country": "Russia",
    "iata": "KVK",
    "icao": "ULMK"
  },
  {
    "name": "Coronel Altino Machado de Oliveira Airport",
    "city": "Governador Valadares",
    "country": "Brazil",
    "iata": "GVR",
    "icao": "SBGV"
  },
  {
    "name": "Pajala Airport",
    "city": "Pajala",
    "country": "Sweden",
    "iata": "PJA",
    "icao": "ESUP"
  },
  {
    "name": "Bella Coola Airport",
    "city": "Bella Coola",
    "country": "Canada",
    "iata": "QBC",
    "icao": "CYBD"
  },
  {
    "name": "Hagerstown Regional Richard A Henson Field",
    "city": "Hagerstown",
    "country": "United States",
    "iata": "HGR",
    "icao": "KHGR"
  },
  {
    "name": "Araracuara Airport",
    "city": "Araracuara",
    "country": "Colombia",
    "iata": "ACR",
    "icao": "SKAC"
  },
  {
    "name": "Gorakhpur Airport",
    "city": "Gorakhpur",
    "country": "India",
    "iata": "GOP",
    "icao": "VEGK"
  },
  {
    "name": "Sand Point Airport",
    "city": "Sand Point",
    "country": "United States",
    "iata": "SDP",
    "icao": "PASD"
  },
  {
    "name": "Hami Airport",
    "city": "Hami",
    "country": "China",
    "iata": "HMI",
    "icao": "ZWHM"
  },
  {
    "name": "Wuzhou Changzhoudao Airport",
    "city": "Wuzhou",
    "country": "China",
    "iata": "WUZ",
    "icao": "ZGWZ"
  },
  {
    "name": "Tugdan Airport",
    "city": "Romblon",
    "country": "Philippines",
    "iata": "TBH",
    "icao": "RPVU"
  },
  {
    "name": "Sahand Airport",
    "city": "Maragheh",
    "country": "Iran",
    "iata": "ACP",
    "icao": "OITM"
  },
  {
    "name": "Gorgan Airport",
    "city": "Gorgan",
    "country": "Iran",
    "iata": "GBT",
    "icao": "OING"
  },
  {
    "name": "Ilam Airport",
    "city": "Ilam",
    "country": "Iran",
    "iata": "IIL",
    "icao": "OICI"
  },
  {
    "name": "Parsabade Moghan Airport",
    "city": "Parsabad",
    "country": "Iran",
    "iata": "PFQ",
    "icao": "OITP"
  },
  {
    "name": "Tocache Airport",
    "city": "Tocache",
    "country": "Peru",
    "iata": "NONE",
    "icao": "SPCH"
  },
  {
    "name": "Tacheng Airport",
    "city": "Tacheng",
    "country": "China",
    "iata": "TCG",
    "icao": "ZWTC"
  },
  {
    "name": "Mardin Airport",
    "city": "Mardin",
    "country": "Turkey",
    "iata": "MQM",
    "icao": "LTCR"
  },
  {
    "name": "Sugraly Airport",
    "city": "Zarafshan",
    "country": "Uzbekistan",
    "iata": "AFS",
    "icao": "UTSN"
  },
  {
    "name": "Deering Airport",
    "city": "Deering",
    "country": "United States",
    "iata": "DRG",
    "icao": "PADE"
  },
  {
    "name": "Leon Airport",
    "city": "Leon",
    "country": "Spain",
    "iata": "LEN",
    "icao": "LELN"
  },
  {
    "name": "Burgos Airport",
    "city": "Burgos",
    "country": "Spain",
    "iata": "RGS",
    "icao": "LEBG"
  },
  {
    "name": "Sege Airport",
    "city": "Sege",
    "country": "Solomon Islands",
    "iata": "EGM",
    "icao": "AGGS"
  },
  {
    "name": "Shahrekord Airport",
    "city": "Shahre Kord",
    "country": "Iran",
    "iata": "CQD",
    "icao": "OIFS"
  },
  {
    "name": "Kangra Airport",
    "city": "Kangra",
    "country": "India",
    "iata": "DHM",
    "icao": "VIGG"
  },
  {
    "name": "Nanded Airport",
    "city": "Nanded",
    "country": "India",
    "iata": "NDC",
    "icao": "VAND"
  },
  {
    "name": "Shimla Airport",
    "city": "Shimla",
    "country": "India",
    "iata": "SLV",
    "icao": "VISM"
  },
  {
    "name": "Igiugig Airport",
    "city": "Igiugig",
    "country": "United States",
    "iata": "IGG",
    "icao": "PAIG"
  },
  {
    "name": "New Stuyahok Airport",
    "city": "New Stuyahok",
    "country": "United States",
    "iata": "KNW",
    "icao": "PANW"
  },
  {
    "name": "King Cove Airport",
    "city": "King Cove",
    "country": "United States",
    "iata": "KVC",
    "icao": "PAVC"
  },
  {
    "name": "Port Heiden Airport",
    "city": "Port Heiden",
    "country": "United States",
    "iata": "PTH",
    "icao": "PAPH"
  },
  {
    "name": "Togiak Airport",
    "city": "Togiak Village",
    "country": "United States",
    "iata": "TOG",
    "icao": "PATG"
  },
  {
    "name": "Geneina Airport",
    "city": "Geneina",
    "country": "Sudan",
    "iata": "EGN",
    "icao": "HSGN"
  },
  {
    "name": "Long Akah Airport",
    "city": "Long Akah",
    "country": "Malaysia",
    "iata": "LKH",
    "icao": "WBGL"
  },
  {
    "name": "Walaha Airport",
    "city": "Walaha",
    "country": "Vanuatu",
    "iata": "WLH",
    "icao": "NVSW"
  },
  {
    "name": "Chaoyang Airport",
    "city": "Chaoyang",
    "country": "China",
    "iata": "CHG",
    "icao": "ZYCY"
  },
  {
    "name": "Samburu South Airport",
    "city": "Samburu South",
    "country": "Kenya",
    "iata": "UAS",
    "icao": "HKSB"
  },
  {
    "name": "Brus Laguna Airport",
    "city": "Brus Laguna",
    "country": "Honduras",
    "iata": "BHG",
    "icao": "MHBL"
  },
  {
    "name": "Bonaventure Airport",
    "city": "Bonaventure",
    "country": "Canada",
    "iata": "YVB",
    "icao": "CYVB"
  },
  {
    "name": "Sialkot Airport",
    "city": "Sialkot",
    "country": "Pakistan",
    "iata": "SKT",
    "icao": "OPST"
  },
  {
    "name": "Capitan Corbeta CA Curbelo International Airport",
    "city": "Punta del Este",
    "country": "Uruguay",
    "iata": "PDP",
    "icao": "SULS"
  },
  {
    "name": "Walvis Bay Airport",
    "city": "Walvis Bay",
    "country": "Namibia",
    "iata": "WVB",
    "icao": "FYWB"
  },
  {
    "name": "Katima Mulilo Airport",
    "city": "Mpacha",
    "country": "Namibia",
    "iata": "MPA",
    "icao": "FYKM"
  },
  {
    "name": "Anadolu Airport",
    "city": "Eskissehir",
    "country": "Turkey",
    "iata": "AOE",
    "icao": "LTBY"
  },
  {
    "name": "Çanakkale Airport",
    "city": "Canakkale",
    "country": "Turkey",
    "iata": "CKZ",
    "icao": "LTBH"
  },
  {
    "name": "Muş Airport",
    "city": "Mus",
    "country": "Turkey",
    "iata": "MSR",
    "icao": "LTCK"
  },
  {
    "name": "Sinop Airport",
    "city": "Sinop",
    "country": "Turkey",
    "iata": "SIC",
    "icao": "LTCM"
  },
  {
    "name": "Tekirdağ Çorlu Airport",
    "city": "Çorlu",
    "country": "Turkey",
    "iata": "TEQ",
    "icao": "LTBU"
  },
  {
    "name": "Bursa Yenişehir Airport",
    "city": "Yenisehir",
    "country": "Turkey",
    "iata": "YEI",
    "icao": "LTBR"
  },
  {
    "name": "Terre-de-Haut Airport",
    "city": "Les Saintes",
    "country": "Guadeloupe",
    "iata": "LSS",
    "icao": "TFFS"
  },
  {
    "name": "Kalay Airport",
    "city": "Kalemyo",
    "country": "Myanmar",
    "iata": "KMV",
    "icao": "VYKL"
  },
  {
    "name": "Vieques Airport",
    "city": "Vieques Island",
    "country": "Puerto Rico",
    "iata": "VQS",
    "icao": "TJCG"
  },
  {
    "name": "St Augustin Airport",
    "city": "St-Augustin",
    "country": "Canada",
    "iata": "YIF",
    "icao": "CYIF"
  },
  {
    "name": "Hamadan Airport",
    "city": "Hamadan",
    "country": "Iran",
    "iata": "HDM",
    "icao": "OIHH"
  },
  {
    "name": "Marinduque Airport",
    "city": "Gasan",
    "country": "Philippines",
    "iata": "MRQ",
    "icao": "RPUW"
  },
  {
    "name": "Grafton Airport",
    "city": "Grafton",
    "country": "Australia",
    "iata": "GFN",
    "icao": "YGFN"
  },
  {
    "name": "Orange Airport",
    "city": "Orange",
    "country": "Australia",
    "iata": "OAG",
    "icao": "YORG"
  },
  {
    "name": "Taree Airport",
    "city": "Taree",
    "country": "Australia",
    "iata": "TRO",
    "icao": "YTRE"
  },
  {
    "name": "Choibalsan Airport",
    "city": "Choibalsan",
    "country": "Mongolia",
    "iata": "COQ",
    "icao": "ZMCD"
  },
  {
    "name": "Hohenems-Dornbirn Airport",
    "city": "Hohenems",
    "country": "Austria",
    "iata": "HOJ",
    "icao": "LOIH"
  },
  {
    "name": "Weser-Wümme Airport",
    "city": "Hellwege",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDWM"
  },
  {
    "name": "Krems Airport",
    "city": "Krems",
    "country": "Austria",
    "iata": "NONE",
    "icao": "LOAG"
  },
  {
    "name": "Delta County Airport",
    "city": "Escanaba",
    "country": "United States",
    "iata": "ESC",
    "icao": "KESC"
  },
  {
    "name": "Yakutat Airport",
    "city": "Yakutat",
    "country": "United States",
    "iata": "YAK",
    "icao": "PAYA"
  },
  {
    "name": "Goulburn Airport",
    "city": "Goulburn",
    "country": "Australia",
    "iata": "GUL",
    "icao": "YGLB"
  },
  {
    "name": "Cessnock Airport",
    "city": "Cessnock",
    "country": "Australia",
    "iata": "CES",
    "icao": "YCNK"
  },
  {
    "name": "Scone Airport",
    "city": "Scone",
    "country": "Australia",
    "iata": "NSO",
    "icao": "YSCO"
  },
  {
    "name": "Mudgee Airport",
    "city": "Mudgee",
    "country": "Australia",
    "iata": "DGE",
    "icao": "YMDG"
  },
  {
    "name": "Maitland Airport",
    "city": "Maitland",
    "country": "Australia",
    "iata": "MTL",
    "icao": "YMND"
  },
  {
    "name": "Benjamin Rivera Noriega Airport",
    "city": "Culebra Island",
    "country": "Puerto Rico",
    "iata": "CPX",
    "icao": "TJCP"
  },
  {
    "name": "Raron Airport",
    "city": "Raron",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSTA"
  },
  {
    "name": "Borovaya Airfield",
    "city": "Minsk",
    "country": "Belarus",
    "iata": "NONE",
    "icao": "UMMB"
  },
  {
    "name": "Amlikon Glider Airport",
    "city": "Amlikon",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSPA"
  },
  {
    "name": "Lommis Airfield",
    "city": "Lommis",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSZT"
  },
  {
    "name": "Williamson County Regional Airport",
    "city": "Marion",
    "country": "United States",
    "iata": "MWA",
    "icao": "KMWA"
  },
  {
    "name": "Burnet Municipal Kate Craddock Field",
    "city": "Bamburi",
    "country": "Kenya",
    "iata": "BMQ",
    "icao": "KBMQ"
  },
  {
    "name": "Oceanside Municipal Airport",
    "city": "Fraser Island",
    "country": "Australia",
    "iata": "OKB",
    "icao": "KOKB"
  },
  {
    "name": "Flugplatz Finsterwalde/Heinrichsruh",
    "city": "Finsterwalde",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDAS"
  },
  {
    "name": "Kirkuk Air Base",
    "city": "Kirkuk",
    "country": "Iraq",
    "iata": "KIK",
    "icao": "ORKK"
  },
  {
    "name": "Al Udeid Air Base",
    "city": "Doha",
    "country": "Qatar",
    "iata": "IUD",
    "icao": "OTBH"
  },
  {
    "name": "Great Barrier Aerodrome",
    "city": "Claris",
    "country": "New Zealand",
    "iata": "GBZ",
    "icao": "NZGB"
  },
  {
    "name": "Ford Airport",
    "city": "Iron Mountain",
    "country": "United States",
    "iata": "IMT",
    "icao": "KIMT"
  },
  {
    "name": "Marquette Airport",
    "city": "Marquette",
    "country": "United States",
    "iata": "NONE",
    "icao": "KMQT"
  },
  {
    "name": "Allakaket Airport",
    "city": "Allakaket",
    "country": "United States",
    "iata": "AET",
    "icao": "PFAL"
  },
  {
    "name": "Dinslaken/Schwarze Heide Airport",
    "city": "Dinslaken",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDLD"
  },
  {
    "name": "Höxter-Holzminden Airport",
    "city": "Hoexter Holzminden",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDVI"
  },
  {
    "name": "Niijima Airport",
    "city": "Niijima",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJAN"
  },
  {
    "name": "Michigan City Municipal Airport",
    "city": "Michigan City",
    "country": "United States",
    "iata": "MGC",
    "icao": "KMGC"
  },
  {
    "name": "Seward Airport",
    "city": "Seward",
    "country": "United States",
    "iata": "SWD",
    "icao": "PAWD"
  },
  {
    "name": "Grand Marais Cook County Airport",
    "city": "Grand Marais",
    "country": "United States",
    "iata": "GRM",
    "icao": "KCKC"
  },
  {
    "name": "Wausau Downtown Airport",
    "city": "Wausau",
    "country": "United States",
    "iata": "AUW",
    "icao": "KAUW"
  },
  {
    "name": "Kalundborg Airport",
    "city": "Kalundborg",
    "country": "Denmark",
    "iata": "NONE",
    "icao": "EKKL"
  },
  {
    "name": "Mary Airport",
    "city": "Mary",
    "country": "Turkmenistan",
    "iata": "MYP",
    "icao": "UTAM"
  },
  {
    "name": "Bungle Bungle Airport",
    "city": "Bungle Bungle",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YBUU"
  },
  {
    "name": "Sazená Airport",
    "city": "Sazena",
    "country": "Czech Republic",
    "iata": "LKS",
    "icao": "LKSZ"
  },
  {
    "name": "Spray View Airport",
    "city": "Spray View",
    "country": "Zimbabwe",
    "iata": "NONE",
    "icao": "FVSV"
  },
  {
    "name": "Reykjahlíð Airport",
    "city": "Myvatn",
    "country": "Iceland",
    "iata": "MVA",
    "icao": "BIRL"
  },
  {
    "name": "Sabadell Airport",
    "city": "Sabadell",
    "country": "Spain",
    "iata": "QSA",
    "icao": "LELL"
  },
  {
    "name": "Whitsunday Island Airport",
    "city": "Airlie Beach",
    "country": "Australia",
    "iata": "WSY",
    "icao": "YWHI"
  },
  {
    "name": "Delaware County Johnson Field",
    "city": "Muncie",
    "country": "United States",
    "iata": "MIE",
    "icao": "KMIE"
  },
  {
    "name": "Purdue University Airport",
    "city": "Lafayette",
    "country": "United States",
    "iata": "LAF",
    "icao": "KLAF"
  },
  {
    "name": "Brown County Airport",
    "city": "Georgetown",
    "country": "United States",
    "iata": "NONE",
    "icao": "KGEO"
  },
  {
    "name": "North Las Vegas Airport",
    "city": "Las Vegas",
    "country": "United States",
    "iata": "VGT",
    "icao": "KVGT"
  },
  {
    "name": "Kenosha Regional Airport",
    "city": "Kenosha",
    "country": "United States",
    "iata": "ENW",
    "icao": "KENW"
  },
  {
    "name": "Montrose Regional Airport",
    "city": "Montrose CO",
    "country": "United States",
    "iata": "MTJ",
    "icao": "KMTJ"
  },
  {
    "name": "Riverton Regional Airport",
    "city": "Riverton WY",
    "country": "United States",
    "iata": "RIW",
    "icao": "KRIW"
  },
  {
    "name": "Eastern Oregon Regional At Pendleton Airport",
    "city": "Pendleton",
    "country": "United States",
    "iata": "PDT",
    "icao": "KPDT"
  },
  {
    "name": "Lympne Airport",
    "city": "Lympne",
    "country": "United Kingdom",
    "iata": "LYM",
    "icao": "EGMK"
  },
  {
    "name": "Porto Cheli Airport",
    "city": "Porto Heli",
    "country": "Greece",
    "iata": "PKH",
    "icao": "LGHL"
  },
  {
    "name": "Zell Am See Airport",
    "city": "Zell am See",
    "country": "Austria",
    "iata": "NONE",
    "icao": "LOWZ"
  },
  {
    "name": "RAAF Base Amberley",
    "city": "Amberley",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YAMB"
  },
  {
    "name": "Tindal Airport",
    "city": "Katherine",
    "country": "Australia",
    "iata": "KTR",
    "icao": "YPTN"
  },
  {
    "name": "RAAF Williams, Laverton Base",
    "city": "Laverton",
    "country": "Australia",
    "iata": "NONE",
    "icao": null
  },
  {
    "name": "Nowra Airport",
    "city": "Nowra",
    "country": "Australia",
    "iata": "NOA",
    "icao": "YSNW"
  },
  {
    "name": "Lutsk Airport",
    "city": "Lutsk",
    "country": "Ukraine",
    "iata": "UKC",
    "icao": "UKLC"
  },
  {
    "name": "Chernihiv Shestovitsa Airport",
    "city": "Chernigov",
    "country": "Ukraine",
    "iata": "CEJ",
    "icao": "UKRR"
  },
  {
    "name": "Ternopil International Airport",
    "city": "Ternopol",
    "country": "Ukraine",
    "iata": "TNL",
    "icao": "UKLT"
  },
  {
    "name": "Brest Airport",
    "city": "Brest",
    "country": "Belarus",
    "iata": "BQT",
    "icao": "UMBB"
  },
  {
    "name": "Wittman Regional Airport",
    "city": "Oshkosh",
    "country": "United States",
    "iata": "OSH",
    "icao": "KOSH"
  },
  {
    "name": "Harle Airport",
    "city": "Harlesiel",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDXP"
  },
  {
    "name": "Wangerooge Airport",
    "city": "Wangerooge",
    "country": "Germany",
    "iata": "AGE",
    "icao": "EDWG"
  },
  {
    "name": "RAAF Base Pearce",
    "city": "Perth",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YPEA"
  },
  {
    "name": "Bendigo Airport",
    "city": "Bendigo",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YBDG"
  },
  {
    "name": "Pangborn Memorial Airport",
    "city": "Wenatchee",
    "country": "United States",
    "iata": "EAT",
    "icao": "KEAT"
  },
  {
    "name": "Antonio Nery Juarbe Pol Airport",
    "city": "Arecibo",
    "country": "Puerto Rico",
    "iata": "ARE",
    "icao": "TJAB"
  },
  {
    "name": "Ringi Cove Airport",
    "city": "Ringi Cove",
    "country": "Solomon Islands",
    "iata": "RIN",
    "icao": "AGRC"
  },
  {
    "name": "Kirensk Airport",
    "city": "Kirensk",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UIKK"
  },
  {
    "name": "Ust-Kut Airport",
    "city": "Ust-Kut",
    "country": "Russia",
    "iata": "UKX",
    "icao": "UITT"
  },
  {
    "name": "Rimatara Airport",
    "city": "Rimatara",
    "country": "French Polynesia",
    "iata": "RMT",
    "icao": "NTAM"
  },
  {
    "name": "Triengen Airport",
    "city": "Triengen",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSPN"
  },
  {
    "name": "Lausanne-Blécherette Airport",
    "city": "Lausanne",
    "country": "Switzerland",
    "iata": "QLS",
    "icao": "LSGL"
  },
  {
    "name": "Speck-Fehraltorf Airport",
    "city": "Fehraltorf",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSZK"
  },
  {
    "name": "Locarno Airport",
    "city": "Locarno",
    "country": "Switzerland",
    "iata": "ZJI",
    "icao": "LSZL"
  },
  {
    "name": "Neuchatel Airport",
    "city": "Neuchatel",
    "country": "Switzerland",
    "iata": "QNC",
    "icao": "LSGN"
  },
  {
    "name": "Taganrog Yuzhny Airport",
    "city": "Taganrog",
    "country": "Russia",
    "iata": "NONE",
    "icao": "URRT"
  },
  {
    "name": "Gelendzhik Airport",
    "city": "Gelendzhik",
    "country": "Russia",
    "iata": "GDZ",
    "icao": "URKG"
  },
  {
    "name": "Zhukovsky International Airport",
    "city": "Ramenskoe",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UUBW"
  },
  {
    "name": "Khabarovsk Airport",
    "city": "Khabarovsk",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UHHT"
  },
  {
    "name": "Dzemgi Airport",
    "city": "Komsomolsk-on-Amur",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UHKD"
  },
  {
    "name": "Belaya Air Base",
    "city": "Sredniiy",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UIIB"
  },
  {
    "name": "Tunoshna Airport",
    "city": "Yaroslavl",
    "country": "Russia",
    "iata": "IAR",
    "icao": "UUDL"
  },
  {
    "name": "Gu-Lian Airport",
    "city": "Mohe County",
    "country": "China",
    "iata": "OHE",
    "icao": "ZYMH"
  },
  {
    "name": "Jining Qufu Airport",
    "city": "Jining",
    "country": "China",
    "iata": "JNG",
    "icao": "ZLJN"
  },
  {
    "name": "Drake Bay Airport",
    "city": "Puntarenas",
    "country": "Costa Rica",
    "iata": "DRK",
    "icao": "MRDK"
  },
  {
    "name": "Tuzla International Airport",
    "city": "Null",
    "country": "Bosnia and Herzegovina",
    "iata": "NONE",
    "icao": "LQTZ"
  },
  {
    "name": "NAS Fort Worth JRB/Carswell Field",
    "city": "Dallas",
    "country": "United States",
    "iata": "NONE",
    "icao": "KNFW"
  },
  {
    "name": "Naypyidaw Airport",
    "city": "Naypyidaw",
    "country": "Burma",
    "iata": "NYT",
    "icao": "VYEL"
  },
  {
    "name": "Kyaukhtu South Airport",
    "city": "Kyauktu",
    "country": "Burma",
    "iata": "NONE",
    "icao": "VYXG"
  },
  {
    "name": "Jan Mayensfield",
    "city": "Jan Mayen",
    "country": "Norway",
    "iata": "ZXB",
    "icao": "ENJA"
  },
  {
    "name": "Bokpyinn Airport",
    "city": "Bokepyin",
    "country": "Burma",
    "iata": "NONE",
    "icao": "VYBP"
  },
  {
    "name": "Wuhai Airport",
    "city": "Wuhai",
    "country": "China",
    "iata": "WUA",
    "icao": "ZBUH"
  },
  {
    "name": "Gary Chicago International Airport",
    "city": "Gary",
    "country": "United States",
    "iata": "GYY",
    "icao": "KGYY"
  },
  {
    "name": "Brainerd Lakes Regional Airport",
    "city": "Brainerd",
    "country": "United States",
    "iata": "BRD",
    "icao": "KBRD"
  },
  {
    "name": "Greenbrier Valley Airport",
    "city": "Lewisburg",
    "country": "United States",
    "iata": "LWB",
    "icao": "KLWB"
  },
  {
    "name": "Pitt Greenville Airport",
    "city": "Greenville",
    "country": "United States",
    "iata": "PGV",
    "icao": "KPGV"
  },
  {
    "name": "Chefornak Airport",
    "city": "Chefornak",
    "country": "United States",
    "iata": "CYF",
    "icao": "PACK"
  },
  {
    "name": "Oxnard Airport",
    "city": "Oxnard",
    "country": "United States",
    "iata": "OXR",
    "icao": "KOXR"
  },
  {
    "name": "Tongren Fenghuang Airport",
    "city": "Tongren",
    "country": "China",
    "iata": "TEN",
    "icao": "ZUTR"
  },
  {
    "name": "Naiu Airport",
    "city": "Niau",
    "country": "French Polynesia",
    "iata": "NIU",
    "icao": "NTKN"
  },
  {
    "name": "Schenectady County Airport",
    "city": "Scotia NY",
    "country": "United States",
    "iata": "SCH",
    "icao": "KSCH"
  },
  {
    "name": "Begishevo Airport",
    "city": "Nizhnekamsk",
    "country": "Russia",
    "iata": "NBC",
    "icao": "UWKE"
  },
  {
    "name": "Volkel Air Base",
    "city": "Volkel",
    "country": "Netherlands",
    "iata": "NONE",
    "icao": "EHVK"
  },
  {
    "name": "Siargao Airport",
    "city": "Siargao",
    "country": "Philippines",
    "iata": "IAO",
    "icao": "RPNS"
  },
  {
    "name": "Langeoog Airport",
    "city": "Langeoog",
    "country": "Germany",
    "iata": "LGO",
    "icao": "EDWL"
  },
  {
    "name": "Biel-Kappelen Airport",
    "city": "Biel",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSZP"
  },
  {
    "name": "Nelspruit Airport",
    "city": "Nelspruit",
    "country": "South Africa",
    "iata": "NLP",
    "icao": "FANS"
  },
  {
    "name": "Cherkasy International Airport",
    "city": "Cherkassy",
    "country": "Ukraine",
    "iata": "CKC",
    "icao": "UKKE"
  },
  {
    "name": "Northeast Florida Regional Airport",
    "city": "St. Augustine Airport",
    "country": "United States",
    "iata": "UST",
    "icao": "KSGJ"
  },
  {
    "name": "Mykolaiv International Airport",
    "city": "Nikolayev",
    "country": "Ukraine",
    "iata": "NLV",
    "icao": "UKON"
  },
  {
    "name": "Ramechhap Airport",
    "city": "Ramechhap",
    "country": "Nepal",
    "iata": "RHP",
    "icao": "VNRC"
  },
  {
    "name": "Charles M. Schulz Sonoma County Airport",
    "city": "Santa Rosa",
    "country": "United States",
    "iata": "STS",
    "icao": "KSTS"
  },
  {
    "name": "Kissimmee Gateway Airport",
    "city": "Kissimmee",
    "country": "United States",
    "iata": "ISM",
    "icao": "KISM"
  },
  {
    "name": "Lake City Gateway Airport",
    "city": "Lake City",
    "country": "United States",
    "iata": "LCQ",
    "icao": "KLCQ"
  },
  {
    "name": "Deland Municipal Sidney H Taylor Field",
    "city": "DeLand",
    "country": "United States",
    "iata": "NONE",
    "icao": "KDED"
  },
  {
    "name": "Haller Airpark",
    "city": "Green Cove Springs",
    "country": "United States",
    "iata": "NONE",
    "icao": "7FL4"
  },
  {
    "name": "Palmar Airport",
    "city": "Santa Lucia",
    "country": "Peru",
    "iata": "NONE",
    "icao": "SLPA"
  },
  {
    "name": "Logan-Cache Airport",
    "city": "Logan",
    "country": "United States",
    "iata": "LGU",
    "icao": "KLGU"
  },
  {
    "name": "Brigham City Airport",
    "city": "Brigham City",
    "country": "United States",
    "iata": "BMC",
    "icao": "KBMC"
  },
  {
    "name": "Malad City Airport",
    "city": "Malad City",
    "country": "United States",
    "iata": "MLD",
    "icao": "KMLD"
  },
  {
    "name": "Aspen-Pitkin Co/Sardy Field",
    "city": "Aspen",
    "country": "United States",
    "iata": "ASE",
    "icao": "KASE"
  },
  {
    "name": "Ulyanovsk Baratayevka Airport",
    "city": "Ulyanovsk",
    "country": "Russia",
    "iata": "ULV",
    "icao": "UWLL"
  },
  {
    "name": "Kerrville Municipal Louis Schreiner Field",
    "city": "Kerrville",
    "country": "United States",
    "iata": "ERV",
    "icao": "KERV"
  },
  {
    "name": "Birrfeld Airport",
    "city": "Birrfeld",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSZF"
  },
  {
    "name": "Sussex County Airport",
    "city": "Georgetown",
    "country": "United States",
    "iata": "GED",
    "icao": "KGED"
  },
  {
    "name": "Prince Rupert/Seal Cove Seaplane Base",
    "city": "Prince Rupert",
    "country": "Canada",
    "iata": "ZSW",
    "icao": "CZSW"
  },
  {
    "name": "Great Bend Municipal Airport",
    "city": "Great Bend",
    "country": "United States",
    "iata": "GBN",
    "icao": "KGBD"
  },
  {
    "name": "Hays Regional Airport",
    "city": "Hays",
    "country": "United States",
    "iata": "HYS",
    "icao": "KHYS"
  },
  {
    "name": "Spirit of St Louis Airport",
    "city": "Null",
    "country": "United States",
    "iata": "SUS",
    "icao": "KSUS"
  },
  {
    "name": "Ely Municipal Airport",
    "city": "Ely",
    "country": "United States",
    "iata": "LYU",
    "icao": "KELO"
  },
  {
    "name": "Grand Rapids Itasca Co-Gordon Newstrom field",
    "city": "Grand Rapids MN",
    "country": "United States",
    "iata": "GPZ",
    "icao": "KGPZ"
  },
  {
    "name": "Thief River Falls Regional Airport",
    "city": "Thief River Falls",
    "country": "United States",
    "iata": "TVF",
    "icao": "KTVF"
  },
  {
    "name": "Eagle River Union Airport",
    "city": "Eagle River",
    "country": "United States",
    "iata": "EGV",
    "icao": "KEGV"
  },
  {
    "name": "Lakeland-Noble F. Lee Memorial field",
    "city": "Minocqua - Woodruff",
    "country": "United States",
    "iata": "ARV",
    "icao": "KARV"
  },
  {
    "name": "Ankeny Regional Airport",
    "city": "Ankeny",
    "country": "United States",
    "iata": "IKV",
    "icao": "KIKV"
  },
  {
    "name": "Berens River Airport",
    "city": "Berens River",
    "country": "Canada",
    "iata": "YBV",
    "icao": "CYBV"
  },
  {
    "name": "Corpus Christi Naval Air Station/Truax Field",
    "city": "Corpus Christi",
    "country": "United States",
    "iata": "NGP",
    "icao": "KNGP"
  },
  {
    "name": "Catalina Airport",
    "city": "Catalina Island",
    "country": "United States",
    "iata": "AVX",
    "icao": "KAVX"
  },
  {
    "name": "Mojave Airport",
    "city": "Mojave",
    "country": "United States",
    "iata": "MHV",
    "icao": "KMHV"
  },
  {
    "name": "Interlaken Air Base",
    "city": "Interlaken",
    "country": "Switzerland",
    "iata": "ZIN",
    "icao": "LSMI"
  },
  {
    "name": "Inisheer Aerodrome",
    "city": "Inisheer",
    "country": "Ireland",
    "iata": "INQ",
    "icao": "EIIR"
  },
  {
    "name": "Strezhevoy Airport",
    "city": "Strezhevoy",
    "country": "Russia",
    "iata": "SWT",
    "icao": "UNSS"
  },
  {
    "name": "Hutchinson Municipal Airport",
    "city": "Hutchinson",
    "country": "United States",
    "iata": "HUT",
    "icao": "KHUT"
  },
  {
    "name": "Bagram Air Base",
    "city": "Kabul",
    "country": "Afghanistan",
    "iata": "NONE",
    "icao": "OAIX"
  },
  {
    "name": "Prince Sultan Air Base",
    "city": "Al Kharj",
    "country": "Saudi Arabia",
    "iata": "NONE",
    "icao": "OEPS"
  },
  {
    "name": "Rosecrans Memorial Airport",
    "city": "Rosecrans",
    "country": "United States",
    "iata": "STJ",
    "icao": "KSTJ"
  },
  {
    "name": "Pápa Air Base",
    "city": "Papa",
    "country": "Hungary",
    "iata": "NONE",
    "icao": "LHPA"
  },
  {
    "name": "Whiting Field Naval Air Station South Airport",
    "city": "Cuxhaven",
    "country": "Germany",
    "iata": "NDZ",
    "icao": "KNDZ"
  },
  {
    "name": "Volk Field",
    "city": "Camp Douglas",
    "country": "United States",
    "iata": "VOK",
    "icao": "KVOK"
  },
  {
    "name": "Gunnison Crested Butte Regional Airport",
    "city": "Gunnison",
    "country": "United States",
    "iata": "GUC",
    "icao": "KGUC"
  },
  {
    "name": "Xi'an Xiguan Airport",
    "city": "Xi\\\\'AN",
    "country": "China",
    "iata": "SIA",
    "icao": "ZLSN"
  },
  {
    "name": "Zamperini Field",
    "city": "Torrance",
    "country": "United States",
    "iata": "TOA",
    "icao": "KTOA"
  },
  {
    "name": "Manistee Co Blacker Airport",
    "city": "Manistee",
    "country": "United States",
    "iata": "MBL",
    "icao": "KMBL"
  },
  {
    "name": "Charlotte County Airport",
    "city": "Punta Gorda",
    "country": "United States",
    "iata": "PGD",
    "icao": "KPGD"
  },
  {
    "name": "Northern Aroostook Regional Airport",
    "city": "Frenchville",
    "country": "United States",
    "iata": "WFK",
    "icao": "KFVE"
  },
  {
    "name": "Chautauqua County-Jamestown Airport",
    "city": "Jamestown",
    "country": "United States",
    "iata": "JHW",
    "icao": "KJHW"
  },
  {
    "name": "La Macaza / Mont-Tremblant International Inc Airport",
    "city": "Mont-Tremblant",
    "country": "Canada",
    "iata": "YTM",
    "icao": "CYFJ"
  },
  {
    "name": "Lake Cumberland Regional Airport",
    "city": "Somerset",
    "country": "United States",
    "iata": "SME",
    "icao": "KSME"
  },
  {
    "name": "Shenandoah Valley Regional Airport",
    "city": "Weyers Cave",
    "country": "United States",
    "iata": "SHD",
    "icao": "KSHD"
  },
  {
    "name": "Devils Lake Regional Airport",
    "city": "Devils Lake",
    "country": "United States",
    "iata": "DVL",
    "icao": "KDVL"
  },
  {
    "name": "Dickinson Theodore Roosevelt Regional Airport",
    "city": "Dickinson",
    "country": "United States",
    "iata": "DIK",
    "icao": "KDIK"
  },
  {
    "name": "Sidney Richland Municipal Airport",
    "city": "Sidney",
    "country": "United States",
    "iata": "SDY",
    "icao": "KSDY"
  },
  {
    "name": "Chadron Municipal Airport",
    "city": "Chadron",
    "country": "United States",
    "iata": "CDR",
    "icao": "KCDR"
  },
  {
    "name": "Alliance Municipal Airport",
    "city": "Alliance",
    "country": "United States",
    "iata": "AIA",
    "icao": "KAIA"
  },
  {
    "name": "Mc Cook Ben Nelson Regional Airport",
    "city": "McCook",
    "country": "United States",
    "iata": "MCK",
    "icao": "KMCK"
  },
  {
    "name": "The Florida Keys Marathon Airport",
    "city": "Marathon",
    "country": "United States",
    "iata": "MTH",
    "icao": "KMTH"
  },
  {
    "name": "Dawson Community Airport",
    "city": "Glendive",
    "country": "United States",
    "iata": "GDV",
    "icao": "KGDV"
  },
  {
    "name": "L M Clayton Airport",
    "city": "Wolf Point",
    "country": "United States",
    "iata": "OLF",
    "icao": "KOLF"
  },
  {
    "name": "Yellowstone Airport",
    "city": "West Yellowstone",
    "country": "United States",
    "iata": "WYS",
    "icao": "KWYS"
  },
  {
    "name": "San Luis Valley Regional Bergman Field",
    "city": "Alamosa",
    "country": "United States",
    "iata": "ALS",
    "icao": "KALS"
  },
  {
    "name": "Canyonlands Field",
    "city": "Moab",
    "country": "United States",
    "iata": "CNY",
    "icao": "KCNY"
  },
  {
    "name": "Ely Airport Yelland Field",
    "city": "Ely",
    "country": "United States",
    "iata": "ELY",
    "icao": "KELY"
  },
  {
    "name": "Vernal Regional Airport",
    "city": "Vernal",
    "country": "United States",
    "iata": "VEL",
    "icao": "KVEL"
  },
  {
    "name": "Sierra Blanca Regional Airport",
    "city": "Ruidoso",
    "country": "United States",
    "iata": "SRR",
    "icao": "KSRR"
  },
  {
    "name": "Show Low Regional Airport",
    "city": "Show Low",
    "country": "United States",
    "iata": "SOW",
    "icao": "KSOW"
  },
  {
    "name": "McCall Municipal Airport",
    "city": "McCall",
    "country": "United States",
    "iata": "MYL",
    "icao": "KMYL"
  },
  {
    "name": "Lemhi County Airport",
    "city": "Salmon",
    "country": "United States",
    "iata": "SMN",
    "icao": "KSMN"
  },
  {
    "name": "Mammoth Yosemite Airport",
    "city": "Mammoth Lakes",
    "country": "United States",
    "iata": "MMH",
    "icao": "KMMH"
  },
  {
    "name": "Friday Harbor Airport",
    "city": "Friday Harbor",
    "country": "United States",
    "iata": "FRD",
    "icao": "KFHR"
  },
  {
    "name": "Orcas Island Airport",
    "city": "Eastsound",
    "country": "United States",
    "iata": "ESD",
    "icao": "KORS"
  },
  {
    "name": "Astoria Regional Airport",
    "city": "Astoria",
    "country": "United States",
    "iata": "AST",
    "icao": "KAST"
  },
  {
    "name": "Newport Municipal Airport",
    "city": "Newport",
    "country": "United States",
    "iata": "ONP",
    "icao": "KONP"
  },
  {
    "name": "Emmonak Airport",
    "city": "Emmonak",
    "country": "United States",
    "iata": "EMK",
    "icao": "PAEM"
  },
  {
    "name": "Unalakleet Airport",
    "city": "Unalakleet",
    "country": "United States",
    "iata": "UNK",
    "icao": "PAUN"
  },
  {
    "name": "Ugnu-Kuparuk Airport",
    "city": "Kuparuk",
    "country": "United States",
    "iata": "UUK",
    "icao": "PAKU"
  },
  {
    "name": "Shageluk Airport",
    "city": "Shageluk",
    "country": "United States",
    "iata": "SHX",
    "icao": "PAHX"
  },
  {
    "name": "Nuiqsut Airport",
    "city": "Nuiqsut",
    "country": "United States",
    "iata": "NUI",
    "icao": "PAQT"
  },
  {
    "name": "Eek Airport",
    "city": "Eek",
    "country": "United States",
    "iata": "EEK",
    "icao": "PAEE"
  },
  {
    "name": "Kasigluk Airport",
    "city": "Kasigluk",
    "country": "United States",
    "iata": "KUK",
    "icao": "PFKA"
  },
  {
    "name": "Kwethluk Airport",
    "city": "Kwethluk",
    "country": "United States",
    "iata": "KWT",
    "icao": "PFKW"
  },
  {
    "name": "Kwigillingok Airport",
    "city": "Kwigillingok",
    "country": "United States",
    "iata": "KWK",
    "icao": "PAGG"
  },
  {
    "name": "Marshall Don Hunter Sr Airport",
    "city": "Marshall",
    "country": "United States",
    "iata": "MLL",
    "icao": "PADM"
  },
  {
    "name": "Russian Mission Airport",
    "city": "Russian Mission",
    "country": "United States",
    "iata": "RSH",
    "icao": "PARS"
  },
  {
    "name": "Koliganek Airport",
    "city": "Koliganek",
    "country": "United States",
    "iata": "KGK",
    "icao": "PAJZ"
  },
  {
    "name": "Manokotak Airport",
    "city": "Manokotak",
    "country": "United States",
    "iata": "KMO",
    "icao": "PAMB"
  },
  {
    "name": "Chalkyitsik Airport",
    "city": "Chalkyitsik",
    "country": "United States",
    "iata": "CIK",
    "icao": "PACI"
  },
  {
    "name": "Eagle Airport",
    "city": "Eagle",
    "country": "United States",
    "iata": "EAA",
    "icao": "PAEG"
  },
  {
    "name": "Hughes Airport",
    "city": "Hughes",
    "country": "United States",
    "iata": "HUS",
    "icao": "PAHU"
  },
  {
    "name": "Huslia Airport",
    "city": "Huslia",
    "country": "United States",
    "iata": "HSL",
    "icao": "PAHL"
  },
  {
    "name": "Nulato Airport",
    "city": "Nulato",
    "country": "United States",
    "iata": "NUL",
    "icao": "PANU"
  },
  {
    "name": "Venetie Airport",
    "city": "Venetie",
    "country": "United States",
    "iata": "VEE",
    "icao": "PAVE"
  },
  {
    "name": "Beaver Airport",
    "city": "Beaver",
    "country": "United States",
    "iata": "WBQ",
    "icao": "PAWB"
  },
  {
    "name": "Central Airport",
    "city": "Central",
    "country": "United States",
    "iata": "CEM",
    "icao": "PACE"
  },
  {
    "name": "Shungnak Airport",
    "city": "Shungnak",
    "country": "United States",
    "iata": "SHG",
    "icao": "PAGH"
  },
  {
    "name": "Inyokern Airport",
    "city": "Inyokern",
    "country": "United States",
    "iata": "IYK",
    "icao": "KIYK"
  },
  {
    "name": "Visalia Municipal Airport",
    "city": "Visalia",
    "country": "United States",
    "iata": "VIS",
    "icao": "KVIS"
  },
  {
    "name": "Merced Regional Macready Field",
    "city": "Merced",
    "country": "United States",
    "iata": "MCE",
    "icao": "KMCE"
  },
  {
    "name": "Laguna de Los Patos International Airport",
    "city": "Colonia",
    "country": "Uruguay",
    "iata": "CYR",
    "icao": "SUCA"
  },
  {
    "name": "Amarais Airport",
    "city": "Campinas",
    "country": "Brazil",
    "iata": "CPQ",
    "icao": "SDAM"
  },
  {
    "name": "Phoenix Goodyear Airport",
    "city": "Goodyear",
    "country": "United States",
    "iata": "NONE",
    "icao": "KGYR"
  },
  {
    "name": "Toowoomba Airport",
    "city": "Toowoomba",
    "country": "Australia",
    "iata": "TWB",
    "icao": "YTWB"
  },
  {
    "name": "Ballera Airport",
    "city": "Ballera",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YLLE"
  },
  {
    "name": "Gatton Campus Airport",
    "city": "Gatton",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YGAT"
  },
  {
    "name": "Arkalyk North Airport",
    "city": "Arkalyk",
    "country": "Kazakhstan",
    "iata": "AYK",
    "icao": "UAUR"
  },
  {
    "name": "Nabern/Teck Airport",
    "city": "Kirchheim-Teck",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDTN"
  },
  {
    "name": "Angoon Seaplane Base",
    "city": "Angoon",
    "country": "United States",
    "iata": "AGN",
    "icao": "PAGN"
  },
  {
    "name": "Elfin Cove Seaplane Base",
    "city": "Elfin Cove",
    "country": "United States",
    "iata": "ELV",
    "icao": "PAEL"
  },
  {
    "name": "Funter Bay Seaplane Base",
    "city": "Funter Bay",
    "country": "United States",
    "iata": "FNR",
    "icao": "PANR"
  },
  {
    "name": "Hoonah Airport",
    "city": "Hoonah",
    "country": "United States",
    "iata": "HNH",
    "icao": "PAOH"
  },
  {
    "name": "Kake Airport",
    "city": "Kake",
    "country": "United States",
    "iata": "AFE",
    "icao": "PAFE"
  },
  {
    "name": "Metlakatla Seaplane Base",
    "city": "Metakatla",
    "country": "United States",
    "iata": "MTM",
    "icao": "PAMM"
  },
  {
    "name": "Hydaburg Seaplane Base",
    "city": "Hydaburg",
    "country": "United States",
    "iata": "HYG",
    "icao": "PAHY"
  },
  {
    "name": "Egegik Airport",
    "city": "Egegik",
    "country": "United States",
    "iata": "EGX",
    "icao": "PAII"
  },
  {
    "name": "Perryville Airport",
    "city": "Perryville",
    "country": "United States",
    "iata": "KPV",
    "icao": "PAPE"
  },
  {
    "name": "Pilot Point Airport",
    "city": "Pilot Point",
    "country": "United States",
    "iata": "PIP",
    "icao": "PAPN"
  },
  {
    "name": "South Naknek Nr 2 Airport",
    "city": "South Naknek",
    "country": "United States",
    "iata": "WSN",
    "icao": "PFWS"
  },
  {
    "name": "Akhiok Airport",
    "city": "Akhiok",
    "country": "United States",
    "iata": "AKK",
    "icao": "PAKH"
  },
  {
    "name": "Karluk Airport",
    "city": "Karluk",
    "country": "United States",
    "iata": "KYK",
    "icao": "PAKY"
  },
  {
    "name": "Larsen Bay Airport",
    "city": "Larsen Bay",
    "country": "United States",
    "iata": "KLN",
    "icao": "PALB"
  },
  {
    "name": "Ambler Airport",
    "city": "Ambler",
    "country": "United States",
    "iata": "ABL",
    "icao": "PAFM"
  },
  {
    "name": "Buckland Airport",
    "city": "Buckland",
    "country": "United States",
    "iata": "BKC",
    "icao": "PABL"
  },
  {
    "name": "Bob Baker Memorial Airport",
    "city": "Kiana",
    "country": "United States",
    "iata": "IAN",
    "icao": "PAIK"
  },
  {
    "name": "Kobuk Airport",
    "city": "Kobuk",
    "country": "United States",
    "iata": "OBU",
    "icao": "PAOB"
  },
  {
    "name": "Robert (Bob) Curtis Memorial Airport",
    "city": "Noorvik",
    "country": "United States",
    "iata": "ORV",
    "icao": "PFNO"
  },
  {
    "name": "Selawik Airport",
    "city": "Selawik",
    "country": "United States",
    "iata": "WLK",
    "icao": "PASK"
  },
  {
    "name": "Brevig Mission Airport",
    "city": "Brevig Mission",
    "country": "United States",
    "iata": "KTS",
    "icao": "PFKT"
  },
  {
    "name": "Elim Airport",
    "city": "Elim",
    "country": "United States",
    "iata": "ELI",
    "icao": "PFEL"
  },
  {
    "name": "Golovin Airport",
    "city": "Golovin",
    "country": "United States",
    "iata": "GLV",
    "icao": "PAGL"
  },
  {
    "name": "Teller Airport",
    "city": "Teller",
    "country": "United States",
    "iata": "TLA",
    "icao": "PATE"
  },
  {
    "name": "Wales Airport",
    "city": "Wales",
    "country": "United States",
    "iata": "WAA",
    "icao": "PAIW"
  },
  {
    "name": "White Mountain Airport",
    "city": "White Mountain",
    "country": "United States",
    "iata": "WMO",
    "icao": "PAWM"
  },
  {
    "name": "Koyuk Alfred Adams Airport",
    "city": "Koyuk",
    "country": "United States",
    "iata": "KKA",
    "icao": "PAKK"
  },
  {
    "name": "St Michael Airport",
    "city": "St. Michael",
    "country": "United States",
    "iata": "SMK",
    "icao": "PAMK"
  },
  {
    "name": "Shaktoolik Airport",
    "city": "Shaktoolik",
    "country": "United States",
    "iata": "SKK",
    "icao": "PFSH"
  },
  {
    "name": "Tin City Long Range Radar Station Airport",
    "city": "Tin City",
    "country": "United States",
    "iata": "TNC",
    "icao": "PATC"
  },
  {
    "name": "Atka Airport",
    "city": "Atka",
    "country": "United States",
    "iata": "AKB",
    "icao": "PAAK"
  },
  {
    "name": "Yakataga Airport",
    "city": "Yakataga",
    "country": "United States",
    "iata": "CYT",
    "icao": "PACY"
  },
  {
    "name": "Alakanuk Airport",
    "city": "Alakanuk",
    "country": "United States",
    "iata": "AUK",
    "icao": "PAUK"
  },
  {
    "name": "Kipnuk Airport",
    "city": "Kipnuk",
    "country": "United States",
    "iata": "KPN",
    "icao": "PAKI"
  },
  {
    "name": "False Pass Airport",
    "city": "False Pass",
    "country": "United States",
    "iata": "KFP",
    "icao": "PAKF"
  },
  {
    "name": "Nelson Lagoon Airport",
    "city": "Nelson Lagoon",
    "country": "United States",
    "iata": "NLG",
    "icao": "PAOU"
  },
  {
    "name": "Port Moller Airport",
    "city": "Cold Bay",
    "country": "United States",
    "iata": "PML",
    "icao": "PAAL"
  },
  {
    "name": "Klawock Airport",
    "city": "Klawock",
    "country": "United States",
    "iata": "KLW",
    "icao": "PAKW"
  },
  {
    "name": "Quinhagak Airport",
    "city": "Quinhagak",
    "country": "United States",
    "iata": "KWN",
    "icao": "PAQH"
  },
  {
    "name": "Kotlik Airport",
    "city": "Kotlik",
    "country": "United States",
    "iata": "KOT",
    "icao": "PFKO"
  },
  {
    "name": "Koyukuk Airport",
    "city": "Koyukuk",
    "country": "United States",
    "iata": "KYU",
    "icao": "PFKU"
  },
  {
    "name": "Scammon Bay Airport",
    "city": "Scammon Bay",
    "country": "United States",
    "iata": "SCM",
    "icao": "PACM"
  },
  {
    "name": "Nondalton Airport",
    "city": "Nondalton",
    "country": "United States",
    "iata": "NNL",
    "icao": "PANO"
  },
  {
    "name": "Kongiganak Airport",
    "city": "Kongiganak",
    "country": "United States",
    "iata": "KKH",
    "icao": "PADY"
  },
  {
    "name": "Nikolai Airport",
    "city": "Nikolai",
    "country": "United States",
    "iata": "NIB",
    "icao": "PAFS"
  },
  {
    "name": "Akiak Airport",
    "city": "Akiak",
    "country": "United States",
    "iata": "AKI",
    "icao": "PFAK"
  },
  {
    "name": "Wainwright Airport",
    "city": "Wainwright",
    "country": "United States",
    "iata": "AIN",
    "icao": "PAWI"
  },
  {
    "name": "Zapala Airport",
    "city": "ZAPALA",
    "country": "Argentina",
    "iata": "APZ",
    "icao": "SAHZ"
  },
  {
    "name": "Rincon De Los Sauces Airport",
    "city": "Rincon de los Sauces",
    "country": "Argentina",
    "iata": "RDS",
    "icao": "SAHS"
  },
  {
    "name": "Tte. Julio Gallardo Airport",
    "city": "Puerto Natales",
    "country": "Chile",
    "iata": "PNT",
    "icao": "SCNT"
  },
  {
    "name": "Sierra Grande Airport",
    "city": "Sierra Grande",
    "country": "Argentina",
    "iata": "SGV",
    "icao": "SAVS"
  },
  {
    "name": "Cabo F.A.A. H. R. Bordón Airport",
    "city": "Ingeniero Jacobacci",
    "country": "Argentina",
    "iata": "IGB",
    "icao": "SAVJ"
  },
  {
    "name": "Chenega Bay Airport",
    "city": "Chenega",
    "country": "United States",
    "iata": "NCN",
    "icao": "PFCB"
  },
  {
    "name": "Tok Junction Airport",
    "city": "Tok",
    "country": "United States",
    "iata": "TKJ",
    "icao": "PFTO"
  },
  {
    "name": "Circle City /New/ Airport",
    "city": "Circle",
    "country": "United States",
    "iata": "IRC",
    "icao": "PACR"
  },
  {
    "name": "Sleetmute Airport",
    "city": "Sleetmute",
    "country": "United States",
    "iata": "SLQ",
    "icao": "PASL"
  },
  {
    "name": "Healy River Airport",
    "city": "Healy",
    "country": "United States",
    "iata": "HKB",
    "icao": "PAHV"
  },
  {
    "name": "Klawock Seaplane Base",
    "city": "Klawock",
    "country": "United States",
    "iata": "AQC",
    "icao": "PAQC"
  },
  {
    "name": "Minchumina Airport",
    "city": "Lake Minchumina",
    "country": "United States",
    "iata": "MHM",
    "icao": "PAMH"
  },
  {
    "name": "Manley Hot Springs Airport",
    "city": "Manley Hot Springs",
    "country": "United States",
    "iata": "MLY",
    "icao": "PAML"
  },
  {
    "name": "Natuashish Airport",
    "city": "Natuashish",
    "country": "Canada",
    "iata": "NONE",
    "icao": "CNH2"
  },
  {
    "name": "Postville Airport",
    "city": "Postville",
    "country": "Canada",
    "iata": "YSO",
    "icao": "CCD4"
  },
  {
    "name": "Kangiqsujuaq (Wakeham Bay) Airport",
    "city": "Kangiqsujuaq",
    "country": "Canada",
    "iata": "YWB",
    "icao": "CYKG"
  },
  {
    "name": "Alma Airport",
    "city": "Alma",
    "country": "Canada",
    "iata": "YTF",
    "icao": "CYTF"
  },
  {
    "name": "Havre St Pierre Airport",
    "city": "Havre-Saint-Pierre",
    "country": "Canada",
    "iata": "YGV",
    "icao": "CYGV"
  },
  {
    "name": "Rimouski Airport",
    "city": "Rimouski",
    "country": "Canada",
    "iata": "YXK",
    "icao": "CYXK"
  },
  {
    "name": "Tadoule Lake Airport",
    "city": "Tadoule Lake",
    "country": "Canada",
    "iata": "XTL",
    "icao": "CYBQ"
  },
  {
    "name": "Lac Brochet Airport",
    "city": "Lac Brochet",
    "country": "Canada",
    "iata": "XLB",
    "icao": "CZWH"
  },
  {
    "name": "South Indian Lake Airport",
    "city": "South Indian Lake",
    "country": "Canada",
    "iata": "XSI",
    "icao": "CZSN"
  },
  {
    "name": "Brochet Airport",
    "city": "Brochet",
    "country": "Canada",
    "iata": "YBT",
    "icao": "CYBT"
  },
  {
    "name": "Little Grand Rapids Airport",
    "city": "Little Grand Rapids",
    "country": "Canada",
    "iata": "ZGR",
    "icao": "CZGR"
  },
  {
    "name": "Cross Lake (Charlie Sinclair Memorial) Airport",
    "city": "Cross Lake",
    "country": "Canada",
    "iata": "YCR",
    "icao": "CYCR"
  },
  {
    "name": "Red Sucker Lake Airport",
    "city": "Red Sucker Lake",
    "country": "Canada",
    "iata": "YRS",
    "icao": "CYRS"
  },
  {
    "name": "Rainbow Lake Airport",
    "city": "Rainbow Lake",
    "country": "Canada",
    "iata": "YOP",
    "icao": "CYOP"
  },
  {
    "name": "Bonnyville Airport",
    "city": "Bonnyville",
    "country": "Canada",
    "iata": "YBY",
    "icao": "CYBF"
  },
  {
    "name": "Nanaimo Harbour Water Airport",
    "city": "Nanaimo",
    "country": "Canada",
    "iata": "ZNA",
    "icao": "CAC8"
  },
  {
    "name": "Ganges Seaplane Base",
    "city": "Ganges",
    "country": "Canada",
    "iata": "YGG",
    "icao": "CAX6"
  },
  {
    "name": "Fort St James Airport",
    "city": "Fort St. James",
    "country": "Canada",
    "iata": "YJM",
    "icao": "CYJM"
  },
  {
    "name": "Boundary Bay Airport",
    "city": "Boundary Bay",
    "country": "Canada",
    "iata": "YDT",
    "icao": "CZBB"
  },
  {
    "name": "Langley Airport",
    "city": "Langley Township",
    "country": "Canada",
    "iata": "NONE",
    "icao": "CYNJ"
  },
  {
    "name": "Denny Island Airport",
    "city": "Bella Bella",
    "country": "Canada",
    "iata": "ZEL",
    "icao": "CYJQ"
  },
  {
    "name": "Wekweètì Airport",
    "city": "Wekweeti",
    "country": "Canada",
    "iata": "YFJ",
    "icao": "CFJ2"
  },
  {
    "name": "Camaguey-Campo Cuatro Milpas Airport",
    "city": "Guasave",
    "country": "Mexico",
    "iata": "NONE",
    "icao": "MM52"
  },
  {
    "name": "Cabo San Lucas International Airport",
    "city": "Cabo San Lucas",
    "country": "Mexico",
    "iata": "NONE",
    "icao": "MMSL"
  },
  {
    "name": "Corn Island",
    "city": "Corn Island",
    "country": "Nicaragua",
    "iata": "RNI",
    "icao": "MNCI"
  },
  {
    "name": "San Pedro Airport",
    "city": "Bonanza",
    "country": "Nicaragua",
    "iata": "BZA",
    "icao": "MNBZ"
  },
  {
    "name": "Rosita Airport",
    "city": "Rosita",
    "country": "Nicaragua",
    "iata": "RFS",
    "icao": "MNRT"
  },
  {
    "name": "Siuna",
    "city": "Siuna",
    "country": "Nicaragua",
    "iata": "SIU",
    "icao": "MNSI"
  },
  {
    "name": "Waspam Airport",
    "city": "Waspam",
    "country": "Nicaragua",
    "iata": "WSP",
    "icao": "MNWP"
  },
  {
    "name": "San Carlos",
    "city": "San Carlos",
    "country": "Nicaragua",
    "iata": "NONE",
    "icao": "MNSC"
  },
  {
    "name": "Playa Samara/Carrillo Airport",
    "city": "Carrillo",
    "country": "Costa Rica",
    "iata": "PLD",
    "icao": "MRCR"
  },
  {
    "name": "Constanza - Expedición 14 de Junio National Airport",
    "city": "Constanza",
    "country": "Dominican Republic",
    "iata": "COZ",
    "icao": "MDCZ"
  },
  {
    "name": "Negril Airport",
    "city": "Negril",
    "country": "Jamaica",
    "iata": "NEG",
    "icao": "MKNG"
  },
  {
    "name": "José Aponte de la Torre Airport",
    "city": "Ceiba",
    "country": "Puerto Rico",
    "iata": "RVR",
    "icao": "TJRV"
  },
  {
    "name": "Charlotte Amalie Harbor Seaplane Base",
    "city": "Charlotte Amalie",
    "country": "Virgin Islands",
    "iata": "SPB",
    "icao": "VI22"
  },
  {
    "name": "D. Casimiro Szlapelis Airport",
    "city": "Alto Rio Senguer",
    "country": "Argentina",
    "iata": "ARR",
    "icao": "SAVR"
  },
  {
    "name": "Jose De San Martin Airport",
    "city": "Jose de San Martin",
    "country": "Argentina",
    "iata": "JSM",
    "icao": "SAWS"
  },
  {
    "name": "Uyuni Airport",
    "city": "Uyuni",
    "country": "Bolivia",
    "iata": "UYU",
    "icao": "SLUY"
  },
  {
    "name": "Abaiang Airport",
    "city": "Abaiang Atoll",
    "country": "Kiribati",
    "iata": "ABF",
    "icao": "NGAB"
  },
  {
    "name": "Afobakka Airstrip",
    "city": "Afobaka",
    "country": "Suriname",
    "iata": "NONE",
    "icao": "SMAF"
  },
  {
    "name": "Alalapadu Airstrip",
    "city": "Alapadu",
    "country": "Suriname",
    "iata": "NONE",
    "icao": "SMDU"
  },
  {
    "name": "Albina Airport",
    "city": "Albina",
    "country": "Suriname",
    "iata": "ABN",
    "icao": "SMBN"
  },
  {
    "name": "Drietabbetje Airport",
    "city": "Drietabbetje",
    "country": "Suriname",
    "iata": "DRJ",
    "icao": "SMDA"
  },
  {
    "name": "Kabalebo Airport",
    "city": "Kabalebo",
    "country": "Suriname",
    "iata": "NONE",
    "icao": "SMKA"
  },
  {
    "name": "Kayser Airport",
    "city": "Kayser",
    "country": "Suriname",
    "iata": "NONE",
    "icao": "SMKE"
  },
  {
    "name": "Kwamalasoemoetoe Airport Airport",
    "city": "Kwamelasemoetoe",
    "country": "Suriname",
    "iata": "NONE",
    "icao": "SMSM"
  },
  {
    "name": "Moengo Airstrip",
    "city": "Moengo",
    "country": "Suriname",
    "iata": "NONE",
    "icao": "SMMO"
  },
  {
    "name": "Nieuw Nickerie Airport",
    "city": "Nieuw Nickerie",
    "country": "Suriname",
    "iata": "ICK",
    "icao": "SMNI"
  },
  {
    "name": "Vincent Fayks Airport",
    "city": "Paloemeu",
    "country": "Suriname",
    "iata": "OEM",
    "icao": "SMPA"
  },
  {
    "name": "Sipaliwini Airport",
    "city": "Sipaliwini",
    "country": "Suriname",
    "iata": "NONE",
    "icao": "SMSI"
  },
  {
    "name": "Stoelmanseiland Airport",
    "city": "Stoelmans Eiland",
    "country": "Suriname",
    "iata": "SMZ",
    "icao": "SMST"
  },
  {
    "name": "Totness Airport",
    "city": "Totness",
    "country": "Suriname",
    "iata": "TOT",
    "icao": "SMCO"
  },
  {
    "name": "Wageningen Airstrip",
    "city": "Wageningen",
    "country": "Suriname",
    "iata": "AGI",
    "icao": "SMWA"
  },
  {
    "name": "Codela Airport",
    "city": "Guapiles",
    "country": "Costa Rica",
    "iata": "CSC",
    "icao": "MRCA"
  },
  {
    "name": "Orinduik Airport",
    "city": "Orinduik",
    "country": "Guyana",
    "iata": "ORJ",
    "icao": "SYOR"
  },
  {
    "name": "Annai Airport",
    "city": "Annai",
    "country": "Guyana",
    "iata": "NAI",
    "icao": "SYAN"
  },
  {
    "name": "Apoteri Airport",
    "city": "Apoteri",
    "country": "Guyana",
    "iata": "NONE",
    "icao": "SYAP"
  },
  {
    "name": "Imbaimadai Airport",
    "city": "Imbaimadai",
    "country": "Guyana",
    "iata": "IMB",
    "icao": "SYIB"
  },
  {
    "name": "Kamarang Airport",
    "city": "Kamarang",
    "country": "Guyana",
    "iata": "KAR",
    "icao": "SYKM"
  },
  {
    "name": "Mabaruma Airport",
    "city": "Mabaruma",
    "country": "Guyana",
    "iata": "USI",
    "icao": "SYMB"
  },
  {
    "name": "Mahdia Airport",
    "city": "Mahdia",
    "country": "Guyana",
    "iata": "MHA",
    "icao": "SYMD"
  },
  {
    "name": "Dr Augusto Roberto Fuster International Airport",
    "city": "Pedro Juan Caballero",
    "country": "Paraguay",
    "iata": "PJC",
    "icao": "SGPJ"
  },
  {
    "name": "Alcides Fernández Airport",
    "city": "Acandi",
    "country": "Colombia",
    "iata": "ACD",
    "icao": "SKAD"
  },
  {
    "name": "Los Colonizadores Airport",
    "city": "Saravena",
    "country": "Colombia",
    "iata": "RVE",
    "icao": "SKSA"
  },
  {
    "name": "Batagay Airport",
    "city": "Batagay",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UEBB"
  },
  {
    "name": "Villa Garzón Airport",
    "city": "Villa Garzon",
    "country": "Colombia",
    "iata": "VGZ",
    "icao": "SKVG"
  },
  {
    "name": "El Bagre Airport",
    "city": "El Bagre",
    "country": "Colombia",
    "iata": "EBG",
    "icao": "SKEB"
  },
  {
    "name": "Juan H White Airport",
    "city": "Caucasia",
    "country": "Colombia",
    "iata": "CAQ",
    "icao": "SKCU"
  },
  {
    "name": "Mandinga Airport",
    "city": "Condoto",
    "country": "Colombia",
    "iata": "COG",
    "icao": "SKCD"
  },
  {
    "name": "Golfo de Morrosquillo Airport",
    "city": "Tolu",
    "country": "Colombia",
    "iata": "TLU",
    "icao": "SKTL"
  },
  {
    "name": "Cabo Frio Airport",
    "city": "Cabo Frio",
    "country": "Brazil",
    "iata": "CFB",
    "icao": "SBCB"
  },
  {
    "name": "Presidente João Batista Figueiredo Airport",
    "city": "Sinop",
    "country": "Brazil",
    "iata": "OPS",
    "icao": "SWSI"
  },
  {
    "name": "Gurupi Airport",
    "city": "Gurupi",
    "country": "Brazil",
    "iata": "GRP",
    "icao": "SWGI"
  },
  {
    "name": "Santana do Araguaia Airport",
    "city": "Santana do Araguaia",
    "country": "Brazil",
    "iata": "CMP",
    "icao": "SNKE"
  },
  {
    "name": "Breves Airport",
    "city": "Breves",
    "country": "Brazil",
    "iata": "BVS",
    "icao": "SNVS"
  },
  {
    "name": "Soure Airport",
    "city": "Soure",
    "country": "Brazil",
    "iata": "SFK",
    "icao": "SNSW"
  },
  {
    "name": "Parintins Airport",
    "city": "Parintins",
    "country": "Brazil",
    "iata": "PIN",
    "icao": "SWPI"
  },
  {
    "name": "Barreiras Airport",
    "city": "Barreiras",
    "country": "Brazil",
    "iata": "BRA",
    "icao": "SNBR"
  },
  {
    "name": "Santa Terezinha Airport",
    "city": "Santa Terezinha",
    "country": "Brazil",
    "iata": "STZ",
    "icao": "SWST"
  },
  {
    "name": "Minaçu Airport",
    "city": "Minacu",
    "country": "Brazil",
    "iata": "MQH",
    "icao": "SBMC"
  },
  {
    "name": "Araguaína Airport",
    "city": "Araguaina",
    "country": "Brazil",
    "iata": "AUX",
    "icao": "SWGN"
  },
  {
    "name": "Novo Aripuanã Airport",
    "city": "Novo Aripuana",
    "country": "Brazil",
    "iata": "NVP",
    "icao": "SWNA"
  },
  {
    "name": "Fazenda Colen Airport",
    "city": "Lucas do Rio Verde",
    "country": "Brazil",
    "iata": "LVR",
    "icao": "SWFE"
  },
  {
    "name": "Franca Airport",
    "city": "Franca",
    "country": "Brazil",
    "iata": "FRC",
    "icao": "SIMK"
  },
  {
    "name": "Dourados Airport",
    "city": "Dourados",
    "country": "Brazil",
    "iata": "DOU",
    "icao": "SSDO"
  },
  {
    "name": "Lábrea Airport",
    "city": "Labrea",
    "country": "Brazil",
    "iata": "LBR",
    "icao": "SWLB"
  },
  {
    "name": "Maestro Marinho Franco Airport",
    "city": "Rondonopolis",
    "country": "Brazil",
    "iata": "ROO",
    "icao": "SWRD"
  },
  {
    "name": "Tancredo Thomas de Faria Airport",
    "city": "Guarapuava",
    "country": "Brazil",
    "iata": "GPB",
    "icao": "SBGU"
  },
  {
    "name": "Santa Terezinha Airport",
    "city": "Joacaba",
    "country": "Brazil",
    "iata": "JCB",
    "icao": "SSJA"
  },
  {
    "name": "General Leite de Castro Airport",
    "city": "Rio Verde",
    "country": "Brazil",
    "iata": "RVD",
    "icao": "SWLC"
  },
  {
    "name": "Romeu Zema Airport",
    "city": "Araxa",
    "country": "Brazil",
    "iata": "AAX",
    "icao": "SBAX"
  },
  {
    "name": "Maués Airport",
    "city": "Maues",
    "country": "Brazil",
    "iata": "MBZ",
    "icao": "SWMW"
  },
  {
    "name": "Borba Airport",
    "city": "Borba",
    "country": "Brazil",
    "iata": "RBB",
    "icao": "SWBR"
  },
  {
    "name": "Coari Airport",
    "city": "Coari",
    "country": "Brazil",
    "iata": "CIZ",
    "icao": "SWKO"
  },
  {
    "name": "Barcelos Airport",
    "city": "Barcelos",
    "country": "Brazil",
    "iata": "BAZ",
    "icao": "SWBC"
  },
  {
    "name": "Diamantino Airport",
    "city": "Diamantino",
    "country": "Brazil",
    "iata": "DMT",
    "icao": "SWDM"
  },
  {
    "name": "Guanambi Airport",
    "city": "Guanambi",
    "country": "Brazil",
    "iata": "GNM",
    "icao": "SNGI"
  },
  {
    "name": "Tsletsi Airport",
    "city": "Djelfa",
    "country": "Algeria",
    "iata": "QDJ",
    "icao": "DAFI"
  },
  {
    "name": "Nzagi Airport",
    "city": "Nzagi",
    "country": "Angola",
    "iata": "NZA",
    "icao": "FNZG"
  },
  {
    "name": "Lucapa Airport",
    "city": "Lucapa",
    "country": "Angola",
    "iata": "LBZ",
    "icao": "FNLK"
  },
  {
    "name": "Am Timan Airport",
    "city": "Am Timan",
    "country": "Chad",
    "iata": "AMC",
    "icao": "FTTN"
  },
  {
    "name": "Shark El Oweinat International Airport",
    "city": "Sharq Al-Owainat",
    "country": "Egypt",
    "iata": "GSQ",
    "icao": "HEOW"
  },
  {
    "name": "Eastern WV Regional Airport/Shepherd Field",
    "city": "Martinsburg",
    "country": "United States",
    "iata": "MRB",
    "icao": "KMRB"
  },
  {
    "name": "Awassa Airport",
    "city": "Awasa",
    "country": "Ethiopia",
    "iata": "AWA",
    "icao": "HALA"
  },
  {
    "name": "Wilwal International Airport",
    "city": "Jijiga",
    "country": "Ethiopia",
    "iata": "JIJ",
    "icao": "HAJJ"
  },
  {
    "name": "Mekane Selam Airport",
    "city": "Mekane Selam",
    "country": "Ethiopia",
    "iata": "MKS",
    "icao": "HAMA"
  },
  {
    "name": "Debra Marcos Airport",
    "city": "Debre Marqos",
    "country": "Ethiopia",
    "iata": "DBM",
    "icao": "HADM"
  },
  {
    "name": "Debre Tabor Airport",
    "city": "Debre Tabor",
    "country": "Ethiopia",
    "iata": "DBT",
    "icao": "HADT"
  },
  {
    "name": "Harar Meda Airport",
    "city": "Debre Zeyit",
    "country": "Ethiopia",
    "iata": "QHR",
    "icao": "HAHM"
  },
  {
    "name": "Robe Airport",
    "city": "Goba",
    "country": "Ethiopia",
    "iata": "GOB",
    "icao": "HAGB"
  },
  {
    "name": "Mayumba Airport",
    "city": "Mayumba",
    "country": "Gabon",
    "iata": "MYB",
    "icao": "FOOY"
  },
  {
    "name": "Mara Serena Lodge Airstrip",
    "city": "Masai Mara",
    "country": "Kenya",
    "iata": "MRE",
    "icao": "HKMS"
  },
  {
    "name": "Meru Mulika Airport",
    "city": "Meru National Park",
    "country": "Kenya",
    "iata": "NONE",
    "icao": "HKMK"
  },
  {
    "name": "Rumbek Airport",
    "city": "Rumbek",
    "country": "Sudan",
    "iata": "RBX",
    "icao": "HSMK"
  },
  {
    "name": "Yei Airport",
    "city": "Yei",
    "country": "Sudan",
    "iata": "NONE",
    "icao": "HSYE"
  },
  {
    "name": "Cape Palmas Airport",
    "city": "Greenville",
    "country": "Liberia",
    "iata": "CPA",
    "icao": "GLCP"
  },
  {
    "name": "Ecuvillens Airport",
    "city": "Ecuvillens",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSGE"
  },
  {
    "name": "Inhaca Airport",
    "city": "Inhaca",
    "country": "Mozambique",
    "iata": "NONE",
    "icao": "FQIA"
  },
  {
    "name": "Ouro Sogui Airport",
    "city": "Matam",
    "country": "Senegal",
    "iata": "MAX",
    "icao": "GOSM"
  },
  {
    "name": "Bird Island Airport",
    "city": "Bird Island",
    "country": "Seychelles",
    "iata": "BDI",
    "icao": "FSSB"
  },
  {
    "name": "Wadi Halfa Airport",
    "city": "Wadi Halfa",
    "country": "Sudan",
    "iata": "WHF",
    "icao": "HSSW"
  },
  {
    "name": "Kidepo Airport",
    "city": "Kidepo",
    "country": "Uganda",
    "iata": "NONE",
    "icao": "HUKD"
  },
  {
    "name": "Kitgum Airport",
    "city": "Kitgum",
    "country": "Uganda",
    "iata": "NONE",
    "icao": "HUKT"
  },
  {
    "name": "Bugungu Airport",
    "city": "Pakuba",
    "country": "Uganda",
    "iata": "PAF",
    "icao": "HUPA"
  },
  {
    "name": "Svea Airport",
    "city": "Sveagruva",
    "country": "Svalbard",
    "iata": "NONE",
    "icao": "ENSA"
  },
  {
    "name": "Ny-Ålesund Airport (Hamnerabben)",
    "city": "Ny-Alesund",
    "country": "Svalbard",
    "iata": "NONE",
    "icao": "ENAS"
  },
  {
    "name": "Hatay Airport",
    "city": "Hatay",
    "country": "Turkey",
    "iata": "HTY",
    "icao": "LTDA"
  },
  {
    "name": "Kihnu Airfield",
    "city": "Kihnu",
    "country": "Estonia",
    "iata": "NONE",
    "icao": "EEKU"
  },
  {
    "name": "Ruhnu Airfield",
    "city": "Ruhnu",
    "country": "Estonia",
    "iata": "NONE",
    "icao": "EERU"
  },
  {
    "name": "Raivavae Airport",
    "city": "Raivavae",
    "country": "French Polynesia",
    "iata": "RVV",
    "icao": "NTAV"
  },
  {
    "name": "Lleida-Alguaire Airport",
    "city": "Lleida",
    "country": "Spain",
    "iata": "ILD",
    "icao": "LEDA"
  },
  {
    "name": "Ouessant Airport",
    "city": "Ouessant",
    "country": "France",
    "iata": "NONE",
    "icao": "LFEC"
  },
  {
    "name": "Bildudalur Airport",
    "city": "Bildudalur",
    "country": "Iceland",
    "iata": "BIU",
    "icao": "BIBD"
  },
  {
    "name": "Gjögur Airport",
    "city": "Gjogur",
    "country": "Iceland",
    "iata": "GJR",
    "icao": "BIGJ"
  },
  {
    "name": "Sauðárkrókur Airport",
    "city": "Saudarkrokur",
    "country": "Iceland",
    "iata": "SAK",
    "icao": "BIKR"
  },
  {
    "name": "Selfoss Airport",
    "city": "Selfoss",
    "country": "Iceland",
    "iata": "NONE",
    "icao": "BISF"
  },
  {
    "name": "Inishmaan Aerodrome",
    "city": "Inishmaan",
    "country": "Ireland",
    "iata": "IIA",
    "icao": "EIMN"
  },
  {
    "name": "Ak Bashat Airport",
    "city": "Taldykorgan",
    "country": "Kazakhstan",
    "iata": "TDK",
    "icao": "UAAT"
  },
  {
    "name": "Ulgii Mongolei Airport",
    "city": "Olgii",
    "country": "Mongolia",
    "iata": "ULG",
    "icao": "ZMUL"
  },
  {
    "name": "Qurghonteppa International Airport",
    "city": "Kurgan Tyube",
    "country": "Tajikistan",
    "iata": "NONE",
    "icao": "UTDT"
  },
  {
    "name": "Vologda Airport",
    "city": "Vologda",
    "country": "Russia",
    "iata": "VGD",
    "icao": "ULWW"
  },
  {
    "name": "Severo-Evensk Airport",
    "city": "Evensk",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UHMW"
  },
  {
    "name": "Olenyok Airport",
    "city": "Olenyok",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UERO"
  },
  {
    "name": "Saskylakh Airport",
    "city": "Saskylakh",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UERS"
  },
  {
    "name": "Leshukonskoye Airport",
    "city": "Arkhangelsk",
    "country": "Russia",
    "iata": "LDG",
    "icao": "ULAL"
  },
  {
    "name": "Nizhneangarsk Airport",
    "city": "Nizhneangarsk",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UIUN"
  },
  {
    "name": "Vanavara Airport",
    "city": "Vanavara",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UNIW"
  },
  {
    "name": "Aykhal Airport",
    "city": "Aykhal",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UERA"
  },
  {
    "name": "Uktus Airport",
    "city": "Yekaterinburg",
    "country": "Russia",
    "iata": "NONE",
    "icao": "USSK"
  },
  {
    "name": "Baykit Airport",
    "city": "Baykit",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UNIB"
  },
  {
    "name": "Biysk Airport",
    "city": "Biysk",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UNBI"
  },
  {
    "name": "Huesca/Pirineos Airport",
    "city": "Huesca",
    "country": "Spain",
    "iata": "HSK",
    "icao": "LEHC"
  },
  {
    "name": "Ciudad Real Central Airport",
    "city": "Ciudad Real",
    "country": "Spain",
    "iata": "CQM",
    "icao": "LERL"
  },
  {
    "name": "Al Najaf International Airport",
    "city": "Najaf",
    "country": "Iraq",
    "iata": "NJF",
    "icao": "ORNI"
  },
  {
    "name": "Colonsay Airstrip",
    "city": "Colonsay",
    "country": "United Kingdom",
    "iata": "CSA",
    "icao": "EGEY"
  },
  {
    "name": "Rock Hill - York County Airport",
    "city": "Rock Hill",
    "country": "United States",
    "iata": "RKH",
    "icao": "KUZA"
  },
  {
    "name": "Allegheny County Airport",
    "city": "Pittsburgh",
    "country": "United States",
    "iata": "AGC",
    "icao": "KAGC"
  },
  {
    "name": "Cecil Airport",
    "city": "Jacksonville",
    "country": "United States",
    "iata": "NONE",
    "icao": "KVQQ"
  },
  {
    "name": "Fulton County Airport Brown Field",
    "city": "Atlanta",
    "country": "United States",
    "iata": "FTY",
    "icao": "KFTY"
  },
  {
    "name": "Tresco Heliport",
    "city": "Tresco",
    "country": "United Kingdom",
    "iata": "TSO",
    "icao": "EGHT"
  },
  {
    "name": "Tarin Kowt Airport",
    "city": "Tarin Kowt",
    "country": "Afghanistan",
    "iata": "TII",
    "icao": "OATN"
  },
  {
    "name": "Zaranj Airport",
    "city": "Zaranj",
    "country": "Afghanistan",
    "iata": "ZAJ",
    "icao": "OAZJ"
  },
  {
    "name": "Chakcharan Airport",
    "city": "Chaghcharan",
    "country": "Afghanistan",
    "iata": "CCN",
    "icao": "OACC"
  },
  {
    "name": "Fuyang Xiguan Airport",
    "city": "Fuyang",
    "country": "China",
    "iata": "FUG",
    "icao": "ZSFY"
  },
  {
    "name": "Longyan Guanzhishan Airport",
    "city": "Longyan",
    "country": "China",
    "iata": "LCX",
    "icao": "ZSLD"
  },
  {
    "name": "Xingyi Airport",
    "city": "Xingyi",
    "country": "China",
    "iata": "ACX",
    "icao": "ZUYI"
  },
  {
    "name": "Liping Airport",
    "city": "Liping",
    "country": "China",
    "iata": "HZH",
    "icao": "ZUNP"
  },
  {
    "name": "Stepanakert Air Base",
    "city": "Stepanakert",
    "country": "Azerbaijan",
    "iata": "NONE",
    "icao": "UB13"
  },
  {
    "name": "Ohio State University Airport",
    "city": "Columbus",
    "country": "United States",
    "iata": "OSU",
    "icao": "KOSU"
  },
  {
    "name": "Addison Airport",
    "city": "Addison",
    "country": "United States",
    "iata": "ADS",
    "icao": "KADS"
  },
  {
    "name": "Destin Executive Airport",
    "city": "Destin",
    "country": "United States",
    "iata": "DTS",
    "icao": "KDTS"
  },
  {
    "name": "Chernobayevka Airport",
    "city": "Kherson",
    "country": "Ukraine",
    "iata": "KHE",
    "icao": "UKOH"
  },
  {
    "name": "Ryans Creek Aerodrome",
    "city": "Stewart Island",
    "country": "New Zealand",
    "iata": "SZS",
    "icao": "NZRC"
  },
  {
    "name": "Assumption Island Airport",
    "city": "Assumption Island",
    "country": "Seychelles",
    "iata": "NONE",
    "icao": "FSAS"
  },
  {
    "name": "Zhijiang Airport",
    "city": "Zhijiang",
    "country": "China",
    "iata": "HJJ",
    "icao": "ZGCJ"
  },
  {
    "name": "Yarmouth Airport",
    "city": "Yarmouth",
    "country": "Canada",
    "iata": "YQI",
    "icao": "CYQI"
  },
  {
    "name": "Kinston Regional Jetport At Stallings Field",
    "city": "Kinston",
    "country": "United States",
    "iata": "ISO",
    "icao": "KISO"
  },
  {
    "name": "First Flight Airport",
    "city": "Kill Devil Hills",
    "country": "United States",
    "iata": "FFA",
    "icao": "KFFA"
  },
  {
    "name": "Maturacá Airport",
    "city": "Maturaca",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SWMK"
  },
  {
    "name": "Carajás Airport",
    "city": "Parauapebas",
    "country": "Brazil",
    "iata": "CKS",
    "icao": "SBCJ"
  },
  {
    "name": "Centro de Lançamento de Alcântara Airport",
    "city": "Alcantara",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SNCW"
  },
  {
    "name": "Tarempa Airport",
    "city": "Anambas Islands",
    "country": "Indonesia",
    "iata": "MWK",
    "icao": "WIOM"
  },
  {
    "name": "Würzburg-Schenkenturm Airport",
    "city": "Wuerzburg",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDFW"
  },
  {
    "name": "São Jacinto Airport",
    "city": "Aveiro",
    "country": "Portugal",
    "iata": "NONE",
    "icao": "LPAV"
  },
  {
    "name": "Hopsten Air Base",
    "city": "Hopsten",
    "country": "Germany",
    "iata": "NONE",
    "icao": "ETNP"
  },
  {
    "name": "Persian Gulf International Airport",
    "city": "Khalije Fars",
    "country": "Iran",
    "iata": "PGU",
    "icao": "OIBP"
  },
  {
    "name": "Yasouj Airport",
    "city": "Yasuj",
    "country": "Iran",
    "iata": "YES",
    "icao": "OISY"
  },
  {
    "name": "Mosul International Airport",
    "city": "Mosul",
    "country": "Iraq",
    "iata": "OSB",
    "icao": "ORBM"
  },
  {
    "name": "Tajima Airport",
    "city": "Toyooka",
    "country": "Japan",
    "iata": "TJH",
    "icao": "RJBT"
  },
  {
    "name": "Amakusa Airport",
    "city": "Amakusa",
    "country": "Japan",
    "iata": "AXJ",
    "icao": "RJDA"
  },
  {
    "name": "Kikai Airport",
    "city": "Kikai",
    "country": "Japan",
    "iata": "KKX",
    "icao": "RJKI"
  },
  {
    "name": "Aguni Airport",
    "city": "Aguni",
    "country": "Japan",
    "iata": "AGJ",
    "icao": "RORA"
  },
  {
    "name": "Donoi Airport",
    "city": "Uliastai",
    "country": "Mongolia",
    "iata": "NONE",
    "icao": "ZMDN"
  },
  {
    "name": "Bulgan Airport",
    "city": "Bulgan",
    "country": "Mongolia",
    "iata": "UGA",
    "icao": "ZMBN"
  },
  {
    "name": "Ulaangom Airport",
    "city": "Ulaangom",
    "country": "Mongolia",
    "iata": "ULO",
    "icao": "ZMUG"
  },
  {
    "name": "Borongan Airport",
    "city": "Borongan",
    "country": "Philippines",
    "iata": "BPR",
    "icao": "RPVW"
  },
  {
    "name": "Lubang Airport",
    "city": "Lubang",
    "country": "Philippines",
    "iata": "LBX",
    "icao": "RPLU"
  },
  {
    "name": "Kulob Airport",
    "city": "Kulyab",
    "country": "Tajikistan",
    "iata": "TJU",
    "icao": "UTDK"
  },
  {
    "name": "Daşoguz Airport",
    "city": "Dasoguz",
    "country": "Turkmenistan",
    "iata": "TAZ",
    "icao": "UTAT"
  },
  {
    "name": "Barrow Island Airport",
    "city": "Barrow Island",
    "country": "Australia",
    "iata": "BWB",
    "icao": "YBWX"
  },
  {
    "name": "Derby Airport",
    "city": "Derby",
    "country": "Australia",
    "iata": "DRB",
    "icao": "YDBY"
  },
  {
    "name": "Walgett Airport",
    "city": "Walgett",
    "country": "Australia",
    "iata": "WGE",
    "icao": "YWLG"
  },
  {
    "name": "Bathurst Island Airport",
    "city": "Bathurst Island",
    "country": "Australia",
    "iata": "BRT",
    "icao": "YBTI"
  },
  {
    "name": "Dunk Island Airport",
    "city": "Dunk Island",
    "country": "Australia",
    "iata": "DKI",
    "icao": "YDKI"
  },
  {
    "name": "Lizard Island Airport",
    "city": "Lizard Island",
    "country": "Australia",
    "iata": "LZR",
    "icao": "YLZI"
  },
  {
    "name": "Hamilton Airport",
    "city": "Hamilton",
    "country": "Australia",
    "iata": "HLT",
    "icao": "YHML"
  },
  {
    "name": "Halls Creek Airport",
    "city": "Halls Creek",
    "country": "Australia",
    "iata": "HCQ",
    "icao": "YHLC"
  },
  {
    "name": "Fitzroy Crossing Airport",
    "city": "Fitzroy Crossing",
    "country": "Australia",
    "iata": "FIZ",
    "icao": "YFTZ"
  },
  {
    "name": "Ravensthorpe Airport",
    "city": "Ravensthorpe",
    "country": "Australia",
    "iata": "RVT",
    "icao": "YNRV"
  },
  {
    "name": "Wilkins Runway",
    "city": "Budd Coast",
    "country": "Antarctica",
    "iata": "NONE",
    "icao": "YWKS"
  },
  {
    "name": "Provo Municipal Airport",
    "city": "Provo",
    "country": "United States",
    "iata": "PVU",
    "icao": "KPVU"
  },
  {
    "name": "Steamboat Springs Bob Adams Field",
    "city": "Steamboat Springs",
    "country": "United States",
    "iata": "SBS",
    "icao": "KSBS"
  },
  {
    "name": "Delta Municipal Airport",
    "city": "Delta",
    "country": "United States",
    "iata": "DTA",
    "icao": "KDTA"
  },
  {
    "name": "Richfield Municipal Airport",
    "city": "Richfield",
    "country": "United States",
    "iata": "RIF",
    "icao": "KRIF"
  },
  {
    "name": "Carbon County Regional/Buck Davis Field",
    "city": "Price",
    "country": "United States",
    "iata": "PUC",
    "icao": "KPUC"
  },
  {
    "name": "Los Alamos Airport",
    "city": "Los Alamos",
    "country": "United States",
    "iata": "LAM",
    "icao": "KLAM"
  },
  {
    "name": "Lake Havasu City Airport",
    "city": "Lake Havasu City",
    "country": "United States",
    "iata": "HII",
    "icao": "KHII"
  },
  {
    "name": "Winslow Lindbergh Regional Airport",
    "city": "Winslow",
    "country": "United States",
    "iata": "INW",
    "icao": "KINW"
  },
  {
    "name": "Douglas Municipal Airport",
    "city": "Douglas",
    "country": "United States",
    "iata": "DGL",
    "icao": "KDGL"
  },
  {
    "name": "Marakei Airport",
    "city": "Marakei",
    "country": "Kiribati",
    "iata": "MZK",
    "icao": "NGMK"
  },
  {
    "name": "Abemama Atoll Airport",
    "city": "Abemama",
    "country": "Kiribati",
    "iata": "AEA",
    "icao": "NGTB"
  },
  {
    "name": "Buariki Airport",
    "city": "Buariki",
    "country": "Kiribati",
    "iata": "AAK",
    "icao": "NGUK"
  },
  {
    "name": "Kuria Airport",
    "city": "Kuria",
    "country": "Kiribati",
    "iata": "KUC",
    "icao": "NGKT"
  },
  {
    "name": "Arorae Island Airport",
    "city": "Arorae",
    "country": "Kiribati",
    "iata": "AIS",
    "icao": "NGTR"
  },
  {
    "name": "Tamana Island Airport",
    "city": "Tamana",
    "country": "Kiribati",
    "iata": "TMN",
    "icao": "NGTM"
  },
  {
    "name": "Beru Airport",
    "city": "Beru Island",
    "country": "Kiribati",
    "iata": "BEZ",
    "icao": "NGBR"
  },
  {
    "name": "Nikunau Airport",
    "city": "Nikunau",
    "country": "Kiribati",
    "iata": "NIG",
    "icao": "NGNU"
  },
  {
    "name": "Butaritari Atoll Airport",
    "city": "Butaritari",
    "country": "Kiribati",
    "iata": "BBG",
    "icao": "NGTU"
  },
  {
    "name": "Makin Island Airport",
    "city": "Makin",
    "country": "Kiribati",
    "iata": "MTK",
    "icao": "NGMN"
  },
  {
    "name": "Maiana Airport",
    "city": "Maiana",
    "country": "Kiribati",
    "iata": "MNK",
    "icao": "NGMA"
  },
  {
    "name": "Nonouti Airport",
    "city": "Nonouti",
    "country": "Kiribati",
    "iata": "NON",
    "icao": "NGTO"
  },
  {
    "name": "Tabiteuea South Airport",
    "city": "Tabiteuea",
    "country": "Kiribati",
    "iata": "TSU",
    "icao": "NGTS"
  },
  {
    "name": "Whitianga Airport",
    "city": "Whitianga",
    "country": "New Zealand",
    "iata": "WTZ",
    "icao": "NZWT"
  },
  {
    "name": "Takaka Airport",
    "city": "Takaka",
    "country": "New Zealand",
    "iata": "KTF",
    "icao": "NZTK"
  },
  {
    "name": "Afutara Aerodrome",
    "city": "Afutara",
    "country": "Solomon Islands",
    "iata": "AFT",
    "icao": "AGAF"
  },
  {
    "name": "Ulawa Airport",
    "city": "Ulawa",
    "country": "Solomon Islands",
    "iata": "RNA",
    "icao": "AGAR"
  },
  {
    "name": "Choiseul Bay Airport",
    "city": "Choiseul Bay",
    "country": "Solomon Islands",
    "iata": "CHY",
    "icao": "AGGC"
  },
  {
    "name": "Santa Ana Airport",
    "city": "Santa Ana",
    "country": "Solomon Islands",
    "iata": "NNB",
    "icao": "AGGT"
  },
  {
    "name": "Yandina Airport",
    "city": "Yandina",
    "country": "Solomon Islands",
    "iata": "XYA",
    "icao": "AGGY"
  },
  {
    "name": "Bartow Municipal Airport",
    "city": "Bartow",
    "country": "United States",
    "iata": "BOW",
    "icao": "KBOW"
  },
  {
    "name": "Dyagilevo Air Base",
    "city": "Kostroma",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UUBD"
  },
  {
    "name": "Fitiuta Airport",
    "city": "Fiti\\\\'uta",
    "country": "American Samoa",
    "iata": "FTI",
    "icao": "NSFQ"
  },
  {
    "name": "Livermore Municipal Airport",
    "city": "Livermore",
    "country": "United States",
    "iata": "LVK",
    "icao": "KLVK"
  },
  {
    "name": "Mariposa Yosemite Airport",
    "city": "Mariposa",
    "country": "United States",
    "iata": "RMY",
    "icao": "KMPI"
  },
  {
    "name": "Grootfontein Airport",
    "city": "Grootfontein",
    "country": "Namibia",
    "iata": "GFY",
    "icao": "FYGF"
  },
  {
    "name": "Rundu Airport",
    "city": "Rundu",
    "country": "Namibia",
    "iata": "NDU",
    "icao": "FYRU"
  },
  {
    "name": "Tasiilaq Heliport",
    "city": "Angmagssalik",
    "country": "Greenland",
    "iata": "AGM",
    "icao": "BGAM"
  },
  {
    "name": "Jacqueline Cochran Regional Airport",
    "city": "Palm Springs",
    "country": "United States",
    "iata": "TRM",
    "icao": "KTRM"
  },
  {
    "name": "Santa Monica Municipal Airport",
    "city": "Santa Monica",
    "country": "United States",
    "iata": "SMO",
    "icao": "KSMO"
  },
  {
    "name": "Bermuda Dunes Airport",
    "city": "Palm Springs",
    "country": "United States",
    "iata": "UDD",
    "icao": "KUDD"
  },
  {
    "name": "Scottsdale Airport",
    "city": "Scottsdale",
    "country": "United States",
    "iata": "ZSY",
    "icao": "KSDL"
  },
  {
    "name": "Olympia Regional Airport",
    "city": "Olympia",
    "country": "United States",
    "iata": "OLM",
    "icao": "KOLM"
  },
  {
    "name": "Yolo County Davis Woodland Winters Airport",
    "city": "Davis-Woodland-Winters",
    "country": "United States",
    "iata": "DWA",
    "icao": "KDWA"
  },
  {
    "name": "Garfield County Regional Airport",
    "city": "Rifle",
    "country": "United States",
    "iata": "RIL",
    "icao": "KRIL"
  },
  {
    "name": "Shively Field",
    "city": "SARATOGA",
    "country": "United States",
    "iata": "SAA",
    "icao": "KSAA"
  },
  {
    "name": "DeKalb Peachtree Airport",
    "city": "Atlanta",
    "country": "United States",
    "iata": "PDK",
    "icao": "KPDK"
  },
  {
    "name": "Monroe County Airport",
    "city": "Bloomington",
    "country": "United States",
    "iata": "BMG",
    "icao": "KBMG"
  },
  {
    "name": "Witham Field",
    "city": "Stuart",
    "country": "United States",
    "iata": "SUA",
    "icao": "KSUA"
  },
  {
    "name": "Morristown Municipal Airport",
    "city": "Morristown",
    "country": "United States",
    "iata": "MMU",
    "icao": "KMMU"
  },
  {
    "name": "Napa County Airport",
    "city": "Napa",
    "country": "United States",
    "iata": "APC",
    "icao": "KAPC"
  },
  {
    "name": "Brown Field Municipal Airport",
    "city": "San Diego",
    "country": "United States",
    "iata": "SDM",
    "icao": "KSDM"
  },
  {
    "name": "Wangen-Lachen Airport",
    "city": "Wangen-Lachen",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSPV"
  },
  {
    "name": "Venice Municipal Airport",
    "city": "Venice",
    "country": "United States",
    "iata": "VNC",
    "icao": "KVNC"
  },
  {
    "name": "Palm Beach County Glades Airport",
    "city": "Pahokee",
    "country": "United States",
    "iata": "PHK",
    "icao": "KPHK"
  },
  {
    "name": "Northwest Florida Beaches International Airport",
    "city": "Panama City",
    "country": "United States",
    "iata": "ECP",
    "icao": "KECP"
  },
  {
    "name": "San Bernardino International Airport",
    "city": "San Bernardino",
    "country": "United States",
    "iata": "SBD",
    "icao": "KSBD"
  },
  {
    "name": "Valença Airport",
    "city": "Valenca",
    "country": "Brazil",
    "iata": "VAL",
    "icao": "SNVB"
  },
  {
    "name": "Caruaru Airport",
    "city": "Caruaru",
    "country": "Brazil",
    "iata": "CAU",
    "icao": "SNRU"
  },
  {
    "name": "Wake Island Airfield",
    "city": "Wake island",
    "country": "Wake Island",
    "iata": "AWK",
    "icao": "PWAK"
  },
  {
    "name": "Aeroclube Airport",
    "city": "Nova Iguacu",
    "country": "Brazil",
    "iata": "QNV",
    "icao": "SDNY"
  },
  {
    "name": "San Carlos Airport",
    "city": "San Carlos",
    "country": "United States",
    "iata": "SQL",
    "icao": "KSQL"
  },
  {
    "name": "Courtelary Airport",
    "city": "Courtelary ",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSZJ"
  },
  {
    "name": "Koszalin Zegrze Pomorskie Air Base",
    "city": "Koszalin",
    "country": "Poland",
    "iata": "OSZ",
    "icao": "EPKO"
  },
  {
    "name": "Camp Okavango Airport",
    "city": "Okavango Delta",
    "country": "Botswana",
    "iata": "NONE",
    "icao": "FBCO"
  },
  {
    "name": "Rocky Mount Wilson Regional Airport",
    "city": "Rocky Mount",
    "country": "United States",
    "iata": "RWI",
    "icao": "KRWI"
  },
  {
    "name": "Whittier Airport",
    "city": "Whittier",
    "country": "United States",
    "iata": "NONE",
    "icao": "PAWR"
  },
  {
    "name": "Soldotna Airport",
    "city": "Soldotna",
    "country": "United States",
    "iata": "SXQ",
    "icao": "PASX"
  },
  {
    "name": "Gillespie Field",
    "city": "El Cajon",
    "country": "United States",
    "iata": "SEE",
    "icao": "KSEE"
  },
  {
    "name": "San Clemente Island Naval Auxiliary Landing Field",
    "city": "San Clemente Island",
    "country": "United States",
    "iata": "NONE",
    "icao": "KNUC"
  },
  {
    "name": "Phan Rang Airport",
    "city": "Phan Rang",
    "country": "Vietnam",
    "iata": "PHA",
    "icao": "VVPR"
  },
  {
    "name": "Na-San Airport",
    "city": "Son-La",
    "country": "Vietnam",
    "iata": "SQH",
    "icao": "VVNS"
  },
  {
    "name": "Truckee Tahoe Airport",
    "city": "Truckee",
    "country": "United States",
    "iata": "TKF",
    "icao": "KTRK"
  },
  {
    "name": "Fréjus Airport",
    "city": "Frejus",
    "country": "France",
    "iata": "FRJ",
    "icao": "LFTU"
  },
  {
    "name": "Geelong Airport",
    "city": "Geelong",
    "country": "Australia",
    "iata": "GEX",
    "icao": "YGLG"
  },
  {
    "name": "Mezen Airport",
    "city": "Mezen",
    "country": "Russia",
    "iata": "NONE",
    "icao": "ULAE"
  },
  {
    "name": "Vaskovo Airport",
    "city": "Arkhangelsk",
    "country": "Russia",
    "iata": "NONE",
    "icao": "ULAH"
  },
  {
    "name": "Cobb County-Mc Collum Field",
    "city": "Atlanta",
    "country": "United States",
    "iata": "RYY",
    "icao": "KRYY"
  },
  {
    "name": "Brumowski  Air Base",
    "city": "Tulln",
    "country": "Austria",
    "iata": "NONE",
    "icao": "LOXT"
  },
  {
    "name": "Dell Flight Strip",
    "city": "Dell",
    "country": "United States",
    "iata": "4U9",
    "icao": "K4U9"
  },
  {
    "name": "Mission Field",
    "city": "Livingston-Montana",
    "country": "United States",
    "iata": "LVM",
    "icao": "KLVM"
  },
  {
    "name": "Big Timber Airport",
    "city": "Big Timber",
    "country": "United States",
    "iata": "6S0",
    "icao": "K6S0"
  },
  {
    "name": "Tulip City Airport",
    "city": "Holland",
    "country": "United States",
    "iata": "BIV",
    "icao": "KBIV"
  },
  {
    "name": "London Heliport",
    "city": "London",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGLW"
  },
  {
    "name": "Venice-Lido Airport",
    "city": "Venice",
    "country": "Italy",
    "iata": "NONE",
    "icao": "LIPV"
  },
  {
    "name": "Tallinn Linnahall Heliport",
    "city": "Tallinn",
    "country": "Estonia",
    "iata": "NONE",
    "icao": "EECL"
  },
  {
    "name": "Hernesaari Heliport",
    "city": "Helsinki",
    "country": "Finland",
    "iata": "HEN",
    "icao": "EFHE"
  },
  {
    "name": "Linkenheim Airport",
    "city": "Linkenheim",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDRI"
  },
  {
    "name": "Monument Valley Airport",
    "city": "Monument Valley",
    "country": "United States",
    "iata": "NONE",
    "icao": "UT25"
  },
  {
    "name": "Hilversum Airport",
    "city": "Hilversum",
    "country": "Netherlands",
    "iata": "NONE",
    "icao": "EHHV"
  },
  {
    "name": "Texel Airport",
    "city": "Texel",
    "country": "Netherlands",
    "iata": "NONE",
    "icao": "EHTX"
  },
  {
    "name": "La Cerdanya Airport",
    "city": "Das i Fontanals de Cerdanya",
    "country": "Spain",
    "iata": "NONE",
    "icao": "LECD"
  },
  {
    "name": "Lakeland Linder Regional Airport",
    "city": "Lakeland",
    "country": "United States",
    "iata": "LAL",
    "icao": "KLAL"
  },
  {
    "name": "Stary Oskol Airport",
    "city": "Stary Oskol",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UUOS"
  },
  {
    "name": "Syangboche Airport",
    "city": "Syangboche",
    "country": "Nepal",
    "iata": "SYH",
    "icao": "VNSB"
  },
  {
    "name": "Indianola Municipal Airport",
    "city": "New York",
    "country": "United States",
    "iata": "IDL",
    "icao": "KIDL"
  },
  {
    "name": "Cheremshanka Airport",
    "city": "Krasnoyarsk",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UNKM"
  },
  {
    "name": "French Valley Airport",
    "city": "Murrieta-Temecula",
    "country": "United States",
    "iata": "RBK",
    "icao": "KF70"
  },
  {
    "name": "Oristano-Fenosu Airport",
    "city": "Oristano",
    "country": "Italy",
    "iata": "FNU",
    "icao": "LIER"
  },
  {
    "name": "White Waltham Airfield",
    "city": "Maidenhead",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGLM"
  },
  {
    "name": "Mysore Airport",
    "city": "Mysore",
    "country": "India",
    "iata": "MYQ",
    "icao": "VOMY"
  },
  {
    "name": "Carl R Keller Field",
    "city": "Port Clinton",
    "country": "United States",
    "iata": "PCW",
    "icao": "KPCW"
  },
  {
    "name": "Dayton-Wright Brothers Airport",
    "city": "Dayton",
    "country": "United States",
    "iata": "MGY",
    "icao": "KMGY"
  },
  {
    "name": "Richmond Municipal Airport",
    "city": "Richmond",
    "country": "United States",
    "iata": "RID",
    "icao": "KRID"
  },
  {
    "name": "Findlay Airport",
    "city": "Findley",
    "country": "United States",
    "iata": "FDY",
    "icao": "KFDY"
  },
  {
    "name": "Burlington Executive",
    "city": "Burlington",
    "country": "Canada",
    "iata": "NONE",
    "icao": "CZBA"
  },
  {
    "name": "Penneshaw Airport",
    "city": "Penneshaw",
    "country": "Australia",
    "iata": "PEA",
    "icao": "YPSH"
  },
  {
    "name": "Engels heliport",
    "city": "Ebenhofen",
    "country": "Germany",
    "iata": "EBE",
    "icao": "EBEN"
  },
  {
    "name": "Emporia Municipal Airport",
    "city": "Kempten",
    "country": "Germany",
    "iata": "EMP",
    "icao": "KEMP"
  },
  {
    "name": "Skå-Edeby Airport",
    "city": "Essen",
    "country": "Germany",
    "iata": "ESX",
    "icao": "ESSE"
  },
  {
    "name": "Wycombe Air Park",
    "city": "Wycombe",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGTB"
  },
  {
    "name": "Bembridge Airport",
    "city": "Bembridge",
    "country": "United Kingdom",
    "iata": "BBP",
    "icao": "EGHJ"
  },
  {
    "name": "Waterville / Kings County Municipal Airport",
    "city": "Waterville",
    "country": "Canada",
    "iata": "NONE",
    "icao": "CCW3"
  },
  {
    "name": "Black Hills Airport-Clyde Ice Field",
    "city": "Spearfish-South Dakota",
    "country": "United States",
    "iata": "SPF",
    "icao": "KSPF"
  },
  {
    "name": "Westkapelle heliport",
    "city": "Knokke",
    "country": "Belgium",
    "iata": "NONE",
    "icao": "EBKW"
  },
  {
    "name": "Redcliffe Airport",
    "city": "Rothwell",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YRED"
  },
  {
    "name": "Oksywie Military Air Base",
    "city": "Gdynia",
    "country": "Poland",
    "iata": "QYD",
    "icao": "EPOK"
  },
  {
    "name": "Malbork Military Air Base",
    "city": "Malbork",
    "country": "Poland",
    "iata": "NONE",
    "icao": "EPMB"
  },
  {
    "name": "Lask Military Air Base",
    "city": "Lask",
    "country": "Poland",
    "iata": "NONE",
    "icao": "EPLK"
  },
  {
    "name": "Miroslawiec Military Air Base",
    "city": "Miroslawiec",
    "country": "Poland",
    "iata": "NONE",
    "icao": "EPMI"
  },
  {
    "name": "Krzesiny Military Air Base",
    "city": "Poznan",
    "country": "Poland",
    "iata": "NONE",
    "icao": "EPKS"
  },
  {
    "name": "Olive Branch Airport",
    "city": "Olive Branch",
    "country": "United States",
    "iata": "OLV",
    "icao": "KOLV"
  },
  {
    "name": "Viña del mar Airport",
    "city": "Vina del Mar",
    "country": "Chile",
    "iata": "NONE",
    "icao": "SCVM"
  },
  {
    "name": "Brampton Airport",
    "city": "Brampton",
    "country": "Canada",
    "iata": "NONE",
    "icao": "CNC3"
  },
  {
    "name": "Zonguldak Airport",
    "city": "Zonguldak",
    "country": "Turkey",
    "iata": "ONQ",
    "icao": "LTAS"
  },
  {
    "name": "Rocky Mountain Metropolitan Airport",
    "city": "Broomfield-CO",
    "country": "United States",
    "iata": "BJC",
    "icao": "KBJC"
  },
  {
    "name": "Salem Municipal Airport/McNary Field",
    "city": "Salem",
    "country": "United States",
    "iata": "SLE",
    "icao": "KSLE"
  },
  {
    "name": "Tunica Municipal Airport",
    "city": "Tunica",
    "country": "United States",
    "iata": "UTM",
    "icao": "KUTA"
  },
  {
    "name": "Batken Airport",
    "city": "Batken",
    "country": "Kyrgyzstan",
    "iata": "NONE",
    "icao": "UA30"
  },
  {
    "name": "Kasaba Bay Airport",
    "city": "Kasaba Bay",
    "country": "Zambia",
    "iata": "ZKB",
    "icao": "FLKY"
  },
  {
    "name": "Hunt Field",
    "city": "Lindau",
    "country": "Germany",
    "iata": "LND",
    "icao": "KLND"
  },
  {
    "name": "Hoogeveen Airport",
    "city": "Hoogeveen",
    "country": "Netherlands",
    "iata": "NONE",
    "icao": "EHHO"
  },
  {
    "name": "Teuge Airport",
    "city": "Deventer",
    "country": "Netherlands",
    "iata": "NONE",
    "icao": "EHTE"
  },
  {
    "name": "Midden-Zeeland Airport",
    "city": "Middelburg",
    "country": "Netherlands",
    "iata": "NONE",
    "icao": "EHMZ"
  },
  {
    "name": "Ameland Airport",
    "city": "Ameland",
    "country": "Netherlands",
    "iata": "NONE",
    "icao": "EHAL"
  },
  {
    "name": "Saint-Cyr-l'École Airport",
    "city": "Saint-Cyr",
    "country": "France",
    "iata": "NONE",
    "icao": "LFPZ"
  },
  {
    "name": "Lawrence J Timmerman Airport",
    "city": "Milwaukee",
    "country": "United States",
    "iata": "MWC",
    "icao": "KMWC"
  },
  {
    "name": "Southern Wisconsin Regional Airport",
    "city": "Janesville",
    "country": "United States",
    "iata": "JVL",
    "icao": "KJVL"
  },
  {
    "name": "Mantsonyane Airport",
    "city": "Mantsonyane",
    "country": "Lesotho",
    "iata": "NONE",
    "icao": "FXMN"
  },
  {
    "name": "Arlington Municipal Airport",
    "city": "Arlington",
    "country": "United States",
    "iata": "GKY",
    "icao": "KGKY"
  },
  {
    "name": "Gwinnett County Briscoe Field",
    "city": "Lawrenceville",
    "country": "United States",
    "iata": "LZU",
    "icao": "KLZU"
  },
  {
    "name": "Bowling Green Warren County Regional Airport",
    "city": "Bowling Green",
    "country": "United States",
    "iata": "BWG",
    "icao": "KBWG"
  },
  {
    "name": "Richard Lloyd Jones Jr Airport",
    "city": "Tulsa",
    "country": "United States",
    "iata": "RVS",
    "icao": "KRVS"
  },
  {
    "name": "Al Minhad Air Base",
    "city": "Minhad AB",
    "country": "United Arab Emirates",
    "iata": "NHD",
    "icao": "OMDM"
  },
  {
    "name": "Kirovograd Airport",
    "city": "Kirovograd",
    "country": "Ukraine",
    "iata": "KGO",
    "icao": "UKKG"
  },
  {
    "name": "Roitzschjora Airport",
    "city": "Roitzschjora",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDAW"
  },
  {
    "name": "El Alamein International Airport",
    "city": "Dabaa City",
    "country": "Egypt",
    "iata": "DBB",
    "icao": "HEAL"
  },
  {
    "name": "Bryce Canyon Airport",
    "city": "Bryce Canyon",
    "country": "United States",
    "iata": "BCE",
    "icao": "KBCE"
  },
  {
    "name": "Burlington Alamance Regional Airport",
    "city": "Burlington",
    "country": "United States",
    "iata": "NONE",
    "icao": "KBUY"
  },
  {
    "name": "Chkalovskiy Airport",
    "city": "Shchyolkovo",
    "country": "Russia",
    "iata": "CKL",
    "icao": "UUMU"
  },
  {
    "name": "Tengchong Tuofeng Airport",
    "city": "Tengchong",
    "country": "China",
    "iata": "TCZ",
    "icao": "ZUTC"
  },
  {
    "name": "Belbek Airport",
    "city": "Sevastopol",
    "country": "Ukraine",
    "iata": "UKS",
    "icao": "UKFB"
  },
  {
    "name": "De Peel Air Base",
    "city": "Deurne",
    "country": "Netherlands",
    "iata": "NONE",
    "icao": "EHDP"
  },
  {
    "name": "Camp Bastion Airport",
    "city": "Camp Bastion",
    "country": "Afghanistan",
    "iata": "NONE",
    "icao": "OAZI"
  },
  {
    "name": "New Century Aircenter Airport",
    "city": "Olathe",
    "country": "United States",
    "iata": "JCI",
    "icao": "KIXD"
  },
  {
    "name": "Easton Newnam Field",
    "city": "Easton",
    "country": "United States",
    "iata": "ESN",
    "icao": "KESN"
  },
  {
    "name": "Stafsberg Airport",
    "city": "Hamar",
    "country": "Norway",
    "iata": "HMR",
    "icao": "ENHA"
  },
  {
    "name": "Ringebu Airfield Frya",
    "city": "Frya",
    "country": "Norway",
    "iata": "NONE",
    "icao": "ENRI"
  },
  {
    "name": "Yuba County Airport",
    "city": "Yuba City",
    "country": "United States",
    "iata": "MYV",
    "icao": "KMYV"
  },
  {
    "name": "Phillip Island Airport",
    "city": "Phillip Island",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YPID"
  },
  {
    "name": "Halliburton Field",
    "city": "Duncan",
    "country": "United States",
    "iata": "DUC",
    "icao": "KDUC"
  },
  {
    "name": "Garner Field",
    "city": "Uvalde",
    "country": "United States",
    "iata": "UVA",
    "icao": "KUVA"
  },
  {
    "name": "Lewis University Airport",
    "city": "Lockport",
    "country": "United States",
    "iata": "LOT",
    "icao": "KLOT"
  },
  {
    "name": "Buchanan Field",
    "city": "Concord",
    "country": "United States",
    "iata": "CCR",
    "icao": "KCCR"
  },
  {
    "name": "Ocean Reef Club Airport",
    "city": "Ocean Reef Club Airport",
    "country": "United States",
    "iata": "OCA",
    "icao": "07FA"
  },
  {
    "name": "Strasbourg Neuhof Airport",
    "city": "Strasbourg Neudorf",
    "country": "France",
    "iata": "NONE",
    "icao": "LFGC"
  },
  {
    "name": "Nannhausen Airport",
    "city": "Nannhausen",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDRN"
  },
  {
    "name": "Yushu Batang Airport",
    "city": "Yushu",
    "country": "China",
    "iata": "YUS",
    "icao": "ZYLS"
  },
  {
    "name": "Oshawa Airport",
    "city": "Oshawa",
    "country": "Canada",
    "iata": "YOO",
    "icao": "CYOO"
  },
  {
    "name": "Marl-Loemühle Airport",
    "city": "Recklinghausen",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDLM"
  },
  {
    "name": "Färila Air Base",
    "city": "Farila",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESNF"
  },
  {
    "name": "Lahr Airport",
    "city": "Lahr",
    "country": "Germany",
    "iata": "LHA",
    "icao": "EDTL"
  },
  {
    "name": "Monywar Airport",
    "city": "Monywa",
    "country": "Burma",
    "iata": "NONE",
    "icao": "VYMY"
  },
  {
    "name": "Ohio University Snyder Field",
    "city": "Athens",
    "country": "United States",
    "iata": "NONE",
    "icao": "KUNI"
  },
  {
    "name": "Springfield-Beckley Municipal Airport",
    "city": "Springfield",
    "country": "United States",
    "iata": "SGH",
    "icao": "KSGH"
  },
  {
    "name": "Fazenda Palmital Airport",
    "city": "South Aari Atoll",
    "country": "Maldives",
    "iata": "MSI",
    "icao": "SIAM"
  },
  {
    "name": "Fes Sefrou Airport",
    "city": "Fes",
    "country": "Morocco",
    "iata": "NONE",
    "icao": "GMFU"
  },
  {
    "name": "Herrera Airport",
    "city": "Santo Domingo",
    "country": "Dominican Republic",
    "iata": "HEX",
    "icao": "MDHE"
  },
  {
    "name": "Cooinda Airport",
    "city": "Cooinda",
    "country": "Australia",
    "iata": "CDA",
    "icao": "YCOO"
  },
  {
    "name": "Jabiru Airport",
    "city": "Jabiru",
    "country": "Australia",
    "iata": "JAB",
    "icao": "YJAB"
  },
  {
    "name": "Regensburg-Oberhub Airport",
    "city": "Regensburg",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDNR"
  },
  {
    "name": "Hastings Airport",
    "city": "Freetown",
    "country": "Sierra Leone",
    "iata": "HGS",
    "icao": "GFHA"
  },
  {
    "name": "Philip Billard Municipal Airport",
    "city": "Topeka",
    "country": "United States",
    "iata": "TOP",
    "icao": "KTOP"
  },
  {
    "name": "Benson Airstrip",
    "city": "Uvalde",
    "country": "United States",
    "iata": "NONE",
    "icao": "2XS8"
  },
  {
    "name": "Rough River State Park Airport",
    "city": "Null",
    "country": "United States",
    "iata": "NONE",
    "icao": "K2I3"
  },
  {
    "name": "Smyrna Airport",
    "city": "Smyrna",
    "country": "United States",
    "iata": "NONE",
    "icao": "KMQY"
  },
  {
    "name": "Franklin County Airport",
    "city": "Sewanee",
    "country": "United States",
    "iata": "NONE",
    "icao": "KUOS"
  },
  {
    "name": "Ngari Gunsa Airport",
    "city": "Shiquanhe",
    "country": "China",
    "iata": "NGQ",
    "icao": "ZUAL"
  },
  {
    "name": "Cochstedt Airport",
    "city": "Cochstedt",
    "country": "Germany",
    "iata": "CSO",
    "icao": "EDBC"
  },
  {
    "name": "Collin County Regional At Mc Kinney Airport",
    "city": "DALLAS",
    "country": "United States",
    "iata": "TKI",
    "icao": "KTKI"
  },
  {
    "name": "Chicago Executive Airport",
    "city": "Chicago-Wheeling",
    "country": "United States",
    "iata": "PWK",
    "icao": "KPWK"
  },
  {
    "name": "Southwest Washington Regional Airport",
    "city": "Kelso",
    "country": "United States",
    "iata": "KLS",
    "icao": "KKLS"
  },
  {
    "name": "Benešov Airport",
    "city": "Benesov",
    "country": "Czech Republic",
    "iata": "NONE",
    "icao": "LKBE"
  },
  {
    "name": "Bougouni Airport",
    "city": "Bougouni",
    "country": "Mali",
    "iata": "NONE",
    "icao": "GABG"
  },
  {
    "name": "Tureia Airport",
    "city": "Tureia",
    "country": "French Polynesia",
    "iata": "ZTA",
    "icao": "NTGY"
  },
  {
    "name": "McMurdo Station Ice Runway",
    "city": "Ross Island",
    "country": "Antarctica",
    "iata": "NONE",
    "icao": "NZIR"
  },
  {
    "name": "Keekorok Airport",
    "city": "Keekorok",
    "country": "Kenya",
    "iata": "NONE",
    "icao": "HKKE"
  },
  {
    "name": "Puerto Obaldia Airport",
    "city": "Puerto Obaldia",
    "country": "Panama",
    "iata": "PUE",
    "icao": "MPOA"
  },
  {
    "name": "Kerch Airport",
    "city": "Kerch",
    "country": "Ukraine",
    "iata": "KHC",
    "icao": "UKFK"
  },
  {
    "name": "Ukunda Airstrip",
    "city": "Ukunda",
    "country": "Kenya",
    "iata": "UKA",
    "icao": "HKUK"
  },
  {
    "name": "Wilmington Airpark",
    "city": "Wilmington",
    "country": "United States",
    "iata": "ILN",
    "icao": "KILN"
  },
  {
    "name": "Marana Regional Airport",
    "city": "Tucson",
    "country": "United States",
    "iata": "AVW",
    "icao": "KAVQ"
  },
  {
    "name": "Casa Grande Municipal Airport",
    "city": "Casa Grande",
    "country": "United States",
    "iata": "CGZ",
    "icao": "KCGZ"
  },
  {
    "name": "Mobile Airport",
    "city": "Mobile",
    "country": "United States",
    "iata": "NONE",
    "icao": "1AZ0"
  },
  {
    "name": "Buckeye Municipal Airport",
    "city": "Buckeye",
    "country": "United States",
    "iata": "BXK",
    "icao": "KBXK"
  },
  {
    "name": "Gila Bend Municipal Airport",
    "city": "Gila Bend",
    "country": "United States",
    "iata": "E63",
    "icao": "KE63"
  },
  {
    "name": "McMinn County Airport",
    "city": "Athens",
    "country": "United States",
    "iata": "MMI",
    "icao": "KMMI"
  },
  {
    "name": "Sterling Municipal Airport",
    "city": "Sterling",
    "country": "United States",
    "iata": "STK",
    "icao": "KSTK"
  },
  {
    "name": "Rawlins Municipal Airport/Harvey Field",
    "city": "Rawlins",
    "country": "United States",
    "iata": "RWL",
    "icao": "KRWL"
  },
  {
    "name": "Mackenzie Airport",
    "city": "Mackenzie British Columbia",
    "country": "Canada",
    "iata": "YZY",
    "icao": "CYZY"
  },
  {
    "name": "Essex County Airport",
    "city": "Caldwell",
    "country": "United States",
    "iata": "CDW",
    "icao": "KCDW"
  },
  {
    "name": "Lee C Fine Memorial Airport",
    "city": "Kaiser Lake Ozark",
    "country": "United States",
    "iata": "AIZ",
    "icao": "KAIZ"
  },
  {
    "name": "Thomasville Regional Airport",
    "city": "Thomasville",
    "country": "United States",
    "iata": "TVI",
    "icao": "KTVI"
  },
  {
    "name": "Henderson Executive Airport",
    "city": "Henderson",
    "country": "United States",
    "iata": "HSH",
    "icao": "KHND"
  },
  {
    "name": "Gostomel Airport",
    "city": "Kiev",
    "country": "Ukraine",
    "iata": "GML",
    "icao": "UKKM"
  },
  {
    "name": "Henry Tift Myers Airport",
    "city": "Tifton",
    "country": "United States",
    "iata": "TMA",
    "icao": "KTMA"
  },
  {
    "name": "Landshut Airport",
    "city": "Landshut",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDML"
  },
  {
    "name": "Itzehoe/Hungriger Wolf Airport",
    "city": "Itzehoe",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDHF"
  },
  {
    "name": "Radom Airport",
    "city": "RADOM",
    "country": "Poland",
    "iata": "QXR",
    "icao": "EPRA"
  },
  {
    "name": "Phoenix Deer Valley Airport",
    "city": "Phoenix ",
    "country": "United States",
    "iata": "DVT",
    "icao": "KDVT"
  },
  {
    "name": "Calgary / Springbank Airport",
    "city": "Calgary",
    "country": "Canada",
    "iata": "NONE",
    "icao": "CYBW"
  },
  {
    "name": "Golden Airport",
    "city": "Golden",
    "country": "Canada",
    "iata": "YGE",
    "icao": "CYGE"
  },
  {
    "name": "Revelstoke Airport",
    "city": "Revelstoke",
    "country": "Canada",
    "iata": "YRV",
    "icao": "CYRV"
  },
  {
    "name": "Republic Airport",
    "city": "Farmingdale",
    "country": "United States",
    "iata": "NONE",
    "icao": "KFRG"
  },
  {
    "name": "Allstedt Airport",
    "city": "Allstedt",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDBT"
  },
  {
    "name": "General Freire Airport",
    "city": "Curico",
    "country": "Chile",
    "iata": "NONE",
    "icao": "SCIC"
  },
  {
    "name": "Peine-Eddesse Airport",
    "city": "Peine",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDVP"
  },
  {
    "name": "South Texas Regional Airport at Hondo",
    "city": "Hondo",
    "country": "United States",
    "iata": "HDO",
    "icao": "KHDO"
  },
  {
    "name": "Zhongwei Shapotou Airport",
    "city": "Zhongwei",
    "country": "China",
    "iata": "ZHY",
    "icao": "ZLZW"
  },
  {
    "name": "McKinley National Park Airport",
    "city": "McKinley Park",
    "country": "United States",
    "iata": "MCL",
    "icao": "PAIN"
  },
  {
    "name": "Lake Hood Seaplane Base",
    "city": "Anchorage",
    "country": "United States",
    "iata": "LHD",
    "icao": "PALH"
  },
  {
    "name": "Prospect Creek Airport",
    "city": "Prospect Creek",
    "country": "United States",
    "iata": "PPC",
    "icao": "PAPR"
  },
  {
    "name": "Khwai River Lodge Airport",
    "city": "Khwai River",
    "country": "Botswana",
    "iata": "KHW",
    "icao": "FBKR"
  },
  {
    "name": "Spremberg-Welzow Airport",
    "city": "Welzow",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDCY"
  },
  {
    "name": "Taichung Airport",
    "city": "Taichung",
    "country": "Taiwan",
    "iata": "TXG",
    "icao": "RCLG"
  },
  {
    "name": "Wheeling Ohio County Airport",
    "city": "Wheeling",
    "country": "United States",
    "iata": "HLG",
    "icao": "KHLG"
  },
  {
    "name": "Fitzgerald Municipal Airport",
    "city": "Fitzgerald",
    "country": "United States",
    "iata": "FZG",
    "icao": "KFZG"
  },
  {
    "name": "Ye Airport",
    "city": "Ye",
    "country": "Burma",
    "iata": "XYE",
    "icao": "VYYE"
  },
  {
    "name": "Isla San Felix Airport",
    "city": "Isla San Felix",
    "country": "Chile",
    "iata": "NONE",
    "icao": "SCFX"
  },
  {
    "name": "Shaibah Airport",
    "city": "Shaybah",
    "country": "Saudi Arabia",
    "iata": "NONE",
    "icao": "OESB"
  },
  {
    "name": "Al Maktoum International Airport",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "iata": "DWC",
    "icao": "OMDW"
  },
  {
    "name": "Aransas County Airport",
    "city": "Rockport",
    "country": "United States",
    "iata": "RKP",
    "icao": "KRKP"
  },
  {
    "name": "Megève Airport",
    "city": "Verdun",
    "country": "France",
    "iata": "MVV",
    "icao": "LFHM"
  },
  {
    "name": "Méribel Altiport",
    "city": "Ajaccio",
    "country": "France",
    "iata": "MFX",
    "icao": "LFKX"
  },
  {
    "name": "Okaukuejo Airport",
    "city": "Okaukuejo",
    "country": "Namibia",
    "iata": "OKF",
    "icao": "FYOO"
  },
  {
    "name": "Mokuti Lodge Airport",
    "city": "Mokuti Lodge",
    "country": "Namibia",
    "iata": "OKU",
    "icao": "FYMO"
  },
  {
    "name": "Rotenburg (Wümme) Airport",
    "city": "Rotenburg Wuemme",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDXQ"
  },
  {
    "name": "Wipperfürth-Neye Airport",
    "city": "Wipperfuerth",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDKN"
  },
  {
    "name": "Osnabrück-Atterheide Airport",
    "city": "Osnabrueck",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDWO"
  },
  {
    "name": "Flugplatz Ballenstedt",
    "city": "Ballenstedt",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDCB"
  },
  {
    "name": "Hartenholm Airport",
    "city": "Hasenmoor",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDHM"
  },
  {
    "name": "Ganderkesee Atlas Airfield Airport",
    "city": "Ganderkesee",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDWQ"
  },
  {
    "name": "Nienburg-Holzbalge Airport",
    "city": "Nienburg Weser",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDXI"
  },
  {
    "name": "Damme Airport",
    "city": "Damme",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDWC"
  },
  {
    "name": "Borkenberge Airport",
    "city": "Duelmen",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDLB"
  },
  {
    "name": "Obermehler-Schlotheim Airport",
    "city": "Obermehler",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDCO"
  },
  {
    "name": "Hodenhagen Airport",
    "city": "Hodenhagen",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDVH"
  },
  {
    "name": "Grube Airport",
    "city": "Grube",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDHB"
  },
  {
    "name": "Tønder Airport",
    "city": "Toender",
    "country": "Denmark",
    "iata": "NONE",
    "icao": "EKTD"
  },
  {
    "name": "Celle-Arloh Airport",
    "city": "Celle",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDVC"
  },
  {
    "name": "Uelzen Airport",
    "city": "Uelzen",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDVU"
  },
  {
    "name": "Hamm-Lippewiesen Airport",
    "city": "Hamm",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDLH"
  },
  {
    "name": "Lüsse Airport",
    "city": "Luesse",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDOJ"
  },
  {
    "name": "Porta Westfalica Airport",
    "city": "Bad Oeynhausen",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDVY"
  },
  {
    "name": "Brilon/Hochsauerlandkreis Airport",
    "city": "Brilon",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDKO"
  },
  {
    "name": "Hameln-Pyrmont Airport",
    "city": "Bad Pyrmont",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDVW"
  },
  {
    "name": "Nordholz-Spieka Airfield",
    "city": "Cuxhaven",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDXN"
  },
  {
    "name": "Köthen Airport",
    "city": "Koethen",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDCK"
  },
  {
    "name": "St. Michaelisdonn Airport",
    "city": "Sankt Michaelisdonn",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDXM"
  },
  {
    "name": "Salzgitter-Drütte Airport",
    "city": "Salzgitter",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDVS"
  },
  {
    "name": "Karlshöfen Airport",
    "city": "Karlshoefen",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDWK"
  },
  {
    "name": "Oldenburg-Hatten Airport",
    "city": "Oldenburg",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDWH"
  },
  {
    "name": "Rinteln Airport",
    "city": "Rinteln",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDVR"
  },
  {
    "name": "Münster-Telgte Airport",
    "city": "Muenster",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDLT"
  },
  {
    "name": "St. Peter-Ording Airport",
    "city": "Sankt Peter-Ording",
    "country": "Germany",
    "iata": "PSH",
    "icao": "EDXO"
  },
  {
    "name": "Lüchow-Rehbeck Airport",
    "city": "Luechow",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDHC"
  },
  {
    "name": "Klietz/Scharlibbe Airport",
    "city": "Scharlibbe",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDCL"
  },
  {
    "name": "Burg Airport",
    "city": "Burg",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDBG"
  },
  {
    "name": "Crisp County Cordele Airport",
    "city": "Cordele",
    "country": "United States",
    "iata": "CKF",
    "icao": "KCKF"
  },
  {
    "name": "Ormond Beach Municipal Airport",
    "city": "Ormond Beach",
    "country": "United States",
    "iata": "OMN",
    "icao": "KOMN"
  },
  {
    "name": "Bad Neuenahr-Ahrweiler Airport",
    "city": "Bad Neuenahr",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDRA"
  },
  {
    "name": "Bad Dürkheim Airport",
    "city": "Bad Duerkheim",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDRF"
  },
  {
    "name": "Portland Troutdale Airport",
    "city": "Troutdale",
    "country": "United States",
    "iata": "TTD",
    "icao": "KTTD"
  },
  {
    "name": "Portland Hillsboro Airport",
    "city": "Hillsboro",
    "country": "United States",
    "iata": "HIO",
    "icao": "KHIO"
  },
  {
    "name": "One Police Plaza Heliport",
    "city": "New York",
    "country": "United States",
    "iata": "NONE",
    "icao": "NK39"
  },
  {
    "name": "Leverkusen Airport",
    "city": "Leverkusen",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDKL"
  },
  {
    "name": "Wershofen/Eifel Airport",
    "city": "Wershofen",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDRV"
  },
  {
    "name": "Khost Airport",
    "city": "Khost",
    "country": "Afghanistan",
    "iata": "KHT",
    "icao": "OAKS"
  },
  {
    "name": "Namtu Airport",
    "city": "Naypyidaw",
    "country": "Burma",
    "iata": "NONE",
    "icao": "VYNT"
  },
  {
    "name": "Bend Municipal Airport",
    "city": "Bend",
    "country": "United States",
    "iata": "NONE",
    "icao": "KBDN"
  },
  {
    "name": "Christmas Valley Airport",
    "city": "Christmas Valley",
    "country": "United States",
    "iata": "NONE",
    "icao": "K62S"
  },
  {
    "name": "Burns Municipal Airport",
    "city": "Burns",
    "country": "United States",
    "iata": "NONE",
    "icao": "KBNO"
  },
  {
    "name": "Prineville Airport",
    "city": "Prineville",
    "country": "United States",
    "iata": "NONE",
    "icao": "KS39"
  },
  {
    "name": "Red Bluff Municipal Airport",
    "city": "Red Bluff",
    "country": "United States",
    "iata": "NONE",
    "icao": "KRBL"
  },
  {
    "name": "Marin County Airport - Gnoss Field",
    "city": "Novato",
    "country": "United States",
    "iata": "NONE",
    "icao": "KDVO"
  },
  {
    "name": "Lake County Airport",
    "city": "Lakeview",
    "country": "United States",
    "iata": "NONE",
    "icao": "KLKV"
  },
  {
    "name": "Tillamook Airport",
    "city": "Tillamook",
    "country": "United States",
    "iata": "NONE",
    "icao": "KTMK"
  },
  {
    "name": "Ontario Municipal Airport",
    "city": "Ontario",
    "country": "United States",
    "iata": "NONE",
    "icao": "KONO"
  },
  {
    "name": "Columbia Gorge Regional the Dalles Municipal Airport",
    "city": "The Dalles",
    "country": "United States",
    "iata": "NONE",
    "icao": "KDLS"
  },
  {
    "name": "Montgomery County Airpark",
    "city": "Gaithersburg",
    "country": "United States",
    "iata": "GAI",
    "icao": "KGAI"
  },
  {
    "name": "Sharana Airstrip",
    "city": "Sharona",
    "country": "Afghanistan",
    "iata": "AZ3",
    "icao": "OASA"
  },
  {
    "name": "Pembroke Airport",
    "city": "Pembroke",
    "country": "Canada",
    "iata": "YTA",
    "icao": "CYTA"
  },
  {
    "name": "Tsumeb Airport",
    "city": "Tsumeb",
    "country": "Namibia",
    "iata": "TSB",
    "icao": "FYTM"
  },
  {
    "name": "Suffield Heliport",
    "city": "Suffield",
    "country": "Canada",
    "iata": "YSD",
    "icao": "CYSD"
  },
  {
    "name": "Blumenau Airport",
    "city": "BLUMENAU",
    "country": "Brazil",
    "iata": "BNU",
    "icao": "SSBL"
  },
  {
    "name": "Charlevoix Municipal Airport",
    "city": "Charelvoix",
    "country": "United States",
    "iata": "CVX",
    "icao": "KCVX"
  },
  {
    "name": "Mykines Heliport",
    "city": "Mykines",
    "country": "Faroe Islands",
    "iata": "NONE",
    "icao": "EKMS"
  },
  {
    "name": "Cornwall Regional Airport",
    "city": "Cornwall",
    "country": "Canada",
    "iata": "YCC",
    "icao": "CYCC"
  },
  {
    "name": "Seppe Airport",
    "city": "Bosschenhoofd",
    "country": "Netherlands",
    "iata": "NONE",
    "icao": "EHSE"
  },
  {
    "name": "St Stephan Airport",
    "city": "St.Stephan",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSTS"
  },
  {
    "name": "Zona da Mata Regional Airport",
    "city": "Juiz de Fora",
    "country": "Brazil",
    "iata": "IZA",
    "icao": "SDZY"
  },
  {
    "name": "Flagler County Airport",
    "city": "Flagler",
    "country": "United States",
    "iata": "XFL",
    "icao": "KXFL"
  },
  {
    "name": "Morrisville Stowe State Airport",
    "city": "Morrisville",
    "country": "United States",
    "iata": "MVL",
    "icao": "KMVL"
  },
  {
    "name": "Dallas Executive Airport",
    "city": "Dallas",
    "country": "United States",
    "iata": "RBD",
    "icao": "KRBD"
  },
  {
    "name": "Como (Idroscalo - Water Ad) Hidroport",
    "city": "Como",
    "country": "Italy",
    "iata": "NONE",
    "icao": "LILY"
  },
  {
    "name": "Westerly State Airport",
    "city": "Washington County",
    "country": "United States",
    "iata": "WST",
    "icao": "KWST"
  },
  {
    "name": "Block Island State Airport",
    "city": "Block Island",
    "country": "United States",
    "iata": "BID",
    "icao": "KBID"
  },
  {
    "name": "Nightmute Airport",
    "city": "Nightmute",
    "country": "United States",
    "iata": "NME",
    "icao": "PAGT"
  },
  {
    "name": "Toksook Bay Airport",
    "city": "Toksook Bay",
    "country": "United States",
    "iata": "OOK",
    "icao": "PAOO"
  },
  {
    "name": "Ittoqqortoormiit Heliport",
    "city": "Ittoqqortoormiit",
    "country": "Greenland",
    "iata": "OBY",
    "icao": "BGSC"
  },
  {
    "name": "Vinnytsia/Gavyryshivka Airport",
    "city": "Vinnitsa",
    "country": "Ukraine",
    "iata": "VIN",
    "icao": "UKWW"
  },
  {
    "name": "Decatur County Industrial Air Park",
    "city": "Bainbridge",
    "country": "United States",
    "iata": "BGE",
    "icao": "KBGE"
  },
  {
    "name": "La Romaine Airport",
    "city": "La Romaine",
    "country": "Canada",
    "iata": "NONE",
    "icao": "CTT5"
  },
  {
    "name": "Kegaska Airport",
    "city": "Kegaska",
    "country": "Canada",
    "iata": "ZKG",
    "icao": "CTK6"
  },
  {
    "name": "Black Tickle Airport",
    "city": "Black Tickle",
    "country": "Canada",
    "iata": "YBI",
    "icao": "CCE4"
  },
  {
    "name": "Silver Springs Airport",
    "city": "Silver Springs",
    "country": "United States",
    "iata": "SPZ",
    "icao": "KSPZ"
  },
  {
    "name": "Whiteman Airport",
    "city": "Los Angeles",
    "country": "United States",
    "iata": "WHP",
    "icao": "KWHP"
  },
  {
    "name": "Madera Municipal Airport",
    "city": "Madera",
    "country": "United States",
    "iata": "MAE",
    "icao": "KMAE"
  },
  {
    "name": "Trail Airport",
    "city": "Trail",
    "country": "Canada",
    "iata": "YZZ",
    "icao": "CAD4"
  },
  {
    "name": "Victoria Airport",
    "city": "Patricia Bay",
    "country": "Canada",
    "iata": "NONE",
    "icao": "CAP5"
  },
  {
    "name": "Old Arctic Bay Airport",
    "city": "Arctic Bay",
    "country": "Canada",
    "iata": "YAB",
    "icao": "CJX7"
  },
  {
    "name": "Birchwood Airport",
    "city": "Belmopan",
    "country": "Belize",
    "iata": "BCV",
    "icao": "PABV"
  },
  {
    "name": "Grand-Santi Airport",
    "city": "Grand-Santi",
    "country": "French Guiana",
    "iata": "NONE",
    "icao": "SOGS"
  },
  {
    "name": "Maripasoula Airport",
    "city": "Maripasoula",
    "country": "French Guiana",
    "iata": "MPY",
    "icao": "SOOA"
  },
  {
    "name": "Saint-Laurent-du-Maroni Airport",
    "city": "Saint-Laurent-du-Maroni",
    "country": "French Guiana",
    "iata": "LDX",
    "icao": "SOOM"
  },
  {
    "name": "Kanas Airport",
    "city": "Burqin",
    "country": "China",
    "iata": "KJI",
    "icao": "ZWKN"
  },
  {
    "name": "Capurganá Airport",
    "city": "Capurgana",
    "country": "Colombia",
    "iata": "CPB",
    "icao": "SKCA"
  },
  {
    "name": "Sohag International Airport",
    "city": "Sohag",
    "country": "Egypt",
    "iata": "HMB",
    "icao": "HEMK"
  },
  {
    "name": "Presidente General Don Oscar D. Gestido International Airport",
    "city": "Rivera",
    "country": "Uruguay",
    "iata": "RVY",
    "icao": "SURV"
  },
  {
    "name": "Patos de Minas Airport",
    "city": "Patos de Minas",
    "country": "Brazil",
    "iata": "POJ",
    "icao": "SNPD"
  },
  {
    "name": "Bauru - Arealva Airport",
    "city": "Bauru",
    "country": "Brazil",
    "iata": "JTC",
    "icao": "SJTC"
  },
  {
    "name": "Ourilândia do Norte Airport",
    "city": "Ourilandia do Norte",
    "country": "Brazil",
    "iata": "OIA",
    "icao": "SDOW"
  },
  {
    "name": "Redenção Airport",
    "city": "Redencao",
    "country": "Brazil",
    "iata": "RDC",
    "icao": "SNDC"
  },
  {
    "name": "São Félix do Xingu Airport",
    "city": "Sao Felix do Xingu",
    "country": "Brazil",
    "iata": "SXX",
    "icao": "SNFX"
  },
  {
    "name": "Bonito Airport",
    "city": "Bointo",
    "country": "Brazil",
    "iata": "BYO",
    "icao": "SJDB"
  },
  {
    "name": "São Félix do Araguaia Airport",
    "city": "Sao Felix do Araguaia",
    "country": "Brazil",
    "iata": "SXO",
    "icao": "SWFX"
  },
  {
    "name": "Caçador Airport",
    "city": "Cacador",
    "country": "Brazil",
    "iata": "CFC",
    "icao": "SBCD"
  },
  {
    "name": "Carauari Airport",
    "city": "Carauari",
    "country": "Brazil",
    "iata": "CAF",
    "icao": "SWCA"
  },
  {
    "name": "Urucu Airport",
    "city": "Porto Urucu",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SWUY"
  },
  {
    "name": "Eirunepé Airport",
    "city": "Eirunepe",
    "country": "Brazil",
    "iata": "ERN",
    "icao": "SWEI"
  },
  {
    "name": "Concórdia Airport",
    "city": "Concordia",
    "country": "Brazil",
    "iata": "CCI",
    "icao": "SSCK"
  },
  {
    "name": "Francisco Beltrão Airport",
    "city": "Francisco Beltrao",
    "country": "Brazil",
    "iata": "FBE",
    "icao": "SSFB"
  },
  {
    "name": "Confresa Airport",
    "city": "Confresa",
    "country": "Brazil",
    "iata": "CFO",
    "icao": "SJHG"
  },
  {
    "name": "Apalachicola Regional Airport",
    "city": "Apalachicola",
    "country": "United States",
    "iata": "AAF",
    "icao": "KAAF"
  },
  {
    "name": "Umuarama Airport",
    "city": "Umuarama",
    "country": "Brazil",
    "iata": "UMU",
    "icao": "SSUM"
  },
  {
    "name": "Diamantina Airport",
    "city": "Diamantina",
    "country": "Brazil",
    "iata": "DTI",
    "icao": "SNDT"
  },
  {
    "name": "Fonte Boa Airport",
    "city": "Fonte Boa",
    "country": "Brazil",
    "iata": "FBA",
    "icao": "SWOB"
  },
  {
    "name": "Senadora Eunice Micheles Airport",
    "city": "Sao Paulo de Olivenca",
    "country": "Brazil",
    "iata": "OLC",
    "icao": "SDCG"
  },
  {
    "name": "Humaitá Airport",
    "city": "Humaita",
    "country": "Brazil",
    "iata": "HUW",
    "icao": "SWHT"
  },
  {
    "name": "Tapuruquara Airport",
    "city": "Santa Isabel do Rio Negro",
    "country": "Brazil",
    "iata": "IRZ",
    "icao": "SWTP"
  },
  {
    "name": "Oriximiná Airport",
    "city": "Oriximina",
    "country": "Brazil",
    "iata": "ORX",
    "icao": "SNOX"
  },
  {
    "name": "Hotel Transamérica Airport",
    "city": "Una",
    "country": "Brazil",
    "iata": "UNA",
    "icao": "SBTC"
  },
  {
    "name": "Telfer Airport",
    "city": "Telfer",
    "country": "Australia",
    "iata": "TEF",
    "icao": "YTEF"
  },
  {
    "name": "Gazipaşa Airport",
    "city": "Alanya",
    "country": "Turkey",
    "iata": "GZP",
    "icao": "LTGP"
  },
  {
    "name": "Douglas Municipal Airport",
    "city": "Douglas",
    "country": "United States",
    "iata": "DQH",
    "icao": "KDQH"
  },
  {
    "name": "St Lucie County International Airport",
    "city": "Fort Pierce",
    "country": "United States",
    "iata": "FRP",
    "icao": "KFPR"
  },
  {
    "name": "Taunton Municipal King Field",
    "city": "Taunton",
    "country": "United States",
    "iata": "TAN",
    "icao": "KTAN"
  },
  {
    "name": "Plymouth Municipal Airport",
    "city": "Plymouth",
    "country": "United States",
    "iata": "PYM",
    "icao": "KPYM"
  },
  {
    "name": "Quonset State Airport",
    "city": "North Kingstown",
    "country": "United States",
    "iata": "OQU",
    "icao": "KOQU"
  },
  {
    "name": "Norwood Memorial Airport",
    "city": "Norwood",
    "country": "United States",
    "iata": "OWD",
    "icao": "KOWD"
  },
  {
    "name": "Barnes Municipal Airport",
    "city": "Westfield",
    "country": "United States",
    "iata": "BAF",
    "icao": "KBAF"
  },
  {
    "name": "Windham Airport",
    "city": "Willimantic",
    "country": "United States",
    "iata": "IJD",
    "icao": "KIJD"
  },
  {
    "name": "Orange County Airport",
    "city": "Montgomery",
    "country": "United States",
    "iata": "MGJ",
    "icao": "KMGJ"
  },
  {
    "name": "Capital City Airport",
    "city": "Harrisburg",
    "country": "United States",
    "iata": "CXY",
    "icao": "KCXY"
  },
  {
    "name": "Marshfield Municipal George Harlow Field",
    "city": "Marshfield",
    "country": "United States",
    "iata": "GHG",
    "icao": "KGHG"
  },
  {
    "name": "Danbury Municipal Airport",
    "city": "Danbury",
    "country": "United States",
    "iata": "DXR",
    "icao": "KDXR"
  },
  {
    "name": "Boire Field",
    "city": "Nashua",
    "country": "United States",
    "iata": "ASH",
    "icao": "KASH"
  },
  {
    "name": "Lawrence Municipal Airport",
    "city": "Lawrence",
    "country": "United States",
    "iata": "LWM",
    "icao": "KLWM"
  },
  {
    "name": "Waterbury Oxford Airport",
    "city": "Oxford",
    "country": "United States",
    "iata": "OXC",
    "icao": "KOXC"
  },
  {
    "name": "Fitchburg Municipal Airport",
    "city": "Fitchburg",
    "country": "United States",
    "iata": "FIT",
    "icao": "KFIT"
  },
  {
    "name": "Earl L. Small Jr. Field/Stockmar Airport",
    "city": "Villa Rica",
    "country": "United States",
    "iata": "NONE",
    "icao": "20GA"
  },
  {
    "name": "Cartersville Airport",
    "city": "Cartersville",
    "country": "United States",
    "iata": "VPC",
    "icao": "KVPC"
  },
  {
    "name": "Centre-Piedmont-Cherokee County Regional Airport",
    "city": "Centre",
    "country": "United States",
    "iata": "PYP",
    "icao": "KPYP"
  },
  {
    "name": "Richard B Russell Airport",
    "city": "Rome",
    "country": "United States",
    "iata": "RMG",
    "icao": "KRMG"
  },
  {
    "name": "Northeast Alabama Regional Airport",
    "city": "Gadsden",
    "country": "United States",
    "iata": "GAD",
    "icao": "KGAD"
  },
  {
    "name": "Knoxville Downtown Island Airport",
    "city": "Knoxville",
    "country": "United States",
    "iata": "DKX",
    "icao": "KDKX"
  },
  {
    "name": "Barrow County Airport",
    "city": "Winder",
    "country": "United States",
    "iata": "WDR",
    "icao": "KWDR"
  },
  {
    "name": "Plantation Airpark",
    "city": "Sylvania",
    "country": "United States",
    "iata": "JYL",
    "icao": "KJYL"
  },
  {
    "name": "Dalton Municipal Airport",
    "city": "Dalton",
    "country": "United States",
    "iata": "DNN",
    "icao": "KDNN"
  },
  {
    "name": "West Georgia Regional O V Gray Field",
    "city": "Carrollton",
    "country": "United States",
    "iata": "CTJ",
    "icao": "KCTJ"
  },
  {
    "name": "Lagrange Callaway Airport",
    "city": "LaGrange",
    "country": "United States",
    "iata": "LGC",
    "icao": "KLGC"
  },
  {
    "name": "Baldwin County Airport",
    "city": "Milledgeville",
    "country": "United States",
    "iata": "MLJ",
    "icao": "KMLJ"
  },
  {
    "name": "Harris County Airport",
    "city": "Pine Mountain",
    "country": "United States",
    "iata": "PIM",
    "icao": "KPIM"
  },
  {
    "name": "Peachtree City Falcon Field",
    "city": "Atlanta",
    "country": "United States",
    "iata": "FFC",
    "icao": "KFFC"
  },
  {
    "name": "Lee Gilmer Memorial Airport",
    "city": "Gainesville",
    "country": "United States",
    "iata": "GVL",
    "icao": "KGVL"
  },
  {
    "name": "Harry Clever Field",
    "city": "New Philadelpha",
    "country": "United States",
    "iata": "PHD",
    "icao": "KPHD"
  },
  {
    "name": "Darlington County Jetport Airport",
    "city": "Darlington",
    "country": "United States",
    "iata": "UDG",
    "icao": "KUDG"
  },
  {
    "name": "Hilton Head Airport",
    "city": "Hilton Head Island",
    "country": "United States",
    "iata": "HHH",
    "icao": "KHXD"
  },
  {
    "name": "Daniel Field",
    "city": "Augusta",
    "country": "United States",
    "iata": "DNL",
    "icao": "KDNL"
  },
  {
    "name": "Foothills Regional Airport",
    "city": "Morganton",
    "country": "United States",
    "iata": "MRN",
    "icao": "KMRN"
  },
  {
    "name": "Pike County-Hatcher Field",
    "city": "Pikeville",
    "country": "United States",
    "iata": "PBX",
    "icao": "KPBX"
  },
  {
    "name": "Mallards Landing Airport",
    "city": "Locust Grove",
    "country": "United States",
    "iata": "NONE",
    "icao": "GA04"
  },
  {
    "name": "Toccoa Airport - R.G. Letourneau Field",
    "city": "Toccoa",
    "country": "United States",
    "iata": "TOC",
    "icao": "KTOC"
  },
  {
    "name": "Compton Abbas Aerodrome",
    "city": "Shaftesbury",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGHA"
  },
  {
    "name": "Suprunovka Airport",
    "city": "Poltava",
    "country": "Ukraine",
    "iata": "PLV",
    "icao": "UKHP"
  },
  {
    "name": "Aweil Airport",
    "city": "Aweil",
    "country": "Sudan",
    "iata": "NONE",
    "icao": "HSAW"
  },
  {
    "name": "Wau Airport",
    "city": "Wau",
    "country": "Sudan",
    "iata": "WUU",
    "icao": "HSWW"
  },
  {
    "name": "Humera Airport",
    "city": "Humera",
    "country": "Ethiopia",
    "iata": "HUE",
    "icao": "HAHU"
  },
  {
    "name": "Moyale Airport",
    "city": "Moyale",
    "country": "Kenya",
    "iata": "OYL",
    "icao": "HKMY"
  },
  {
    "name": "Zagora Airport",
    "city": "Zagora",
    "country": "Morocco",
    "iata": "NONE",
    "icao": "GMAZ"
  },
  {
    "name": "Yengema Airport",
    "city": "Yengema",
    "country": "Sierra Leone",
    "iata": "WYE",
    "icao": "GFYE"
  },
  {
    "name": "Gbangbatok Airport",
    "city": "Gbangbatok",
    "country": "Sierra Leone",
    "iata": "GBK",
    "icao": "GFGK"
  },
  {
    "name": "Turukhansk Airport",
    "city": "Turukhansk",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UOTT"
  },
  {
    "name": "Podkamennaya Tunguska Airport",
    "city": "Bor",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UNIP"
  },
  {
    "name": "Fort Worth Alliance Airport",
    "city": "Fort Worth",
    "country": "United States",
    "iata": "AFW",
    "icao": "KAFW"
  },
  {
    "name": "East Troy Municipal Airport",
    "city": "East Troy",
    "country": "United States",
    "iata": "57C",
    "icao": "K57C"
  },
  {
    "name": "Kolpashevo Airport",
    "city": "Kolpashevo",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UNLL"
  },
  {
    "name": "Ali Al Salem Air Base",
    "city": "Kuwait",
    "country": "Kuwait",
    "iata": "NONE",
    "icao": "OKAS"
  },
  {
    "name": "Renmark Airport",
    "city": "Renmark",
    "country": "Australia",
    "iata": "RMK",
    "icao": "YREN"
  },
  {
    "name": "Leigh Creek Airport",
    "city": "Leigh Creek",
    "country": "Australia",
    "iata": "LGH",
    "icao": "YLEC"
  },
  {
    "name": "Warburton Airport",
    "city": "Warburton Community",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YWBR"
  },
  {
    "name": "Cunderdin Airport",
    "city": "Cunderdin",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YCUN"
  },
  {
    "name": "Rottnest Island Airport",
    "city": "Rottnest Island",
    "country": "Australia",
    "iata": "RTS",
    "icao": "YRTI"
  },
  {
    "name": "Forrest Airport",
    "city": "Forrest",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YFRT"
  },
  {
    "name": "Ballarat Airport",
    "city": "Ballarat",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YBLT"
  },
  {
    "name": "Keewaywin Airport",
    "city": "Keewaywin",
    "country": "Canada",
    "iata": "KEW",
    "icao": "CPV8"
  },
  {
    "name": "Marathon Airport",
    "city": "Marathon",
    "country": "Canada",
    "iata": "YSP",
    "icao": "CYSP"
  },
  {
    "name": "Hearst René Fontaine Municipal Airport",
    "city": "Hearst",
    "country": "Canada",
    "iata": "YHF",
    "icao": "CYHF"
  },
  {
    "name": "Hornepayne Municipal Airport",
    "city": "Hornepayne",
    "country": "Canada",
    "iata": "YHN",
    "icao": "CYHN"
  },
  {
    "name": "Kirkland Lake Airport",
    "city": "Kirkland Lake",
    "country": "Canada",
    "iata": "YKX",
    "icao": "CYKX"
  },
  {
    "name": "Manitouwadge Airport",
    "city": "Manitouwadge",
    "country": "Canada",
    "iata": "YMG",
    "icao": "CYMG"
  },
  {
    "name": "Wawa Airport",
    "city": "Wawa",
    "country": "Canada",
    "iata": "YXZ",
    "icao": "CYXZ"
  },
  {
    "name": "Manitoulin East Municipal Airport",
    "city": "Manitowaning",
    "country": "Canada",
    "iata": "YEM",
    "icao": "CYEM"
  },
  {
    "name": "Slate Falls Airport",
    "city": "Slate Falls",
    "country": "Canada",
    "iata": "NONE",
    "icao": "CKD9"
  },
  {
    "name": "Collingwood Airport",
    "city": "Collingwood",
    "country": "Canada",
    "iata": "NONE",
    "icao": "CNY3"
  },
  {
    "name": "Brantford Municipal Airport",
    "city": "Brantford",
    "country": "Canada",
    "iata": "YFD",
    "icao": "CYFD"
  },
  {
    "name": "Lawrence Municipal Airport",
    "city": "Lawrence",
    "country": "United States",
    "iata": "LWC",
    "icao": "KLWC"
  },
  {
    "name": "Wellington Municipal Airport",
    "city": "Wellington",
    "country": "United States",
    "iata": "EGT",
    "icao": "KEGT"
  },
  {
    "name": "Pompano Beach Airpark",
    "city": "Pompano Beach",
    "country": "United States",
    "iata": "PMP",
    "icao": "KPMP"
  },
  {
    "name": "Mallacoota Airport",
    "city": "Mallacoota",
    "country": "Australia",
    "iata": "XMC",
    "icao": "YMCO"
  },
  {
    "name": "Shelby County Airport",
    "city": "Alabaster",
    "country": "United States",
    "iata": "EET",
    "icao": "KEET"
  },
  {
    "name": "Yuendumu Airport",
    "city": "Yuendumu ",
    "country": "Australia",
    "iata": "YUE",
    "icao": "YYND"
  },
  {
    "name": "Sky Ranch At Carefree Airport",
    "city": "Carefree",
    "country": "United States",
    "iata": "NONE",
    "icao": "18AZ"
  },
  {
    "name": "Lombok International Airport",
    "city": "Praya",
    "country": "Indonesia",
    "iata": "LOP",
    "icao": "WADL"
  },
  {
    "name": "One Hundred Mile House Airport",
    "city": "One Hundred Mile House",
    "country": "Canada",
    "iata": "NONE",
    "icao": "CAV3"
  },
  {
    "name": "South Cariboo Region / 108 Mile Airport",
    "city": "108 Mile Ranch",
    "country": "Canada",
    "iata": "ZML",
    "icao": "CZML"
  },
  {
    "name": "Glasgow City Heliport",
    "city": "Glasgow",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGEG"
  },
  {
    "name": "Yarram Airport",
    "city": "Yarram",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YYRM"
  },
  {
    "name": "Handan Airport",
    "city": "Handan",
    "country": "China",
    "iata": "HDG",
    "icao": "ZBHD"
  },
  {
    "name": "Indianapolis Metropolitan Airport",
    "city": "Indianapolis",
    "country": "United States",
    "iata": "UMP",
    "icao": "KUMP"
  },
  {
    "name": "London-Corbin Airport/Magee Field",
    "city": "London",
    "country": "United States",
    "iata": "LOZ",
    "icao": "KLOZ"
  },
  {
    "name": "Simmons Army Air Field",
    "city": "Fredericksburg",
    "country": "United States",
    "iata": "FBG",
    "icao": "KFBG"
  },
  {
    "name": "Modlin Airport",
    "city": "Warsaw",
    "country": "Poland",
    "iata": "WMI",
    "icao": "EPMO"
  },
  {
    "name": "Jixi Xingkaihu Airport",
    "city": "Jixi",
    "country": "China",
    "iata": "JXA",
    "icao": "ZYJX"
  },
  {
    "name": "Jeongseok Airport",
    "city": "Seogwipo",
    "country": "South Korea",
    "iata": "NONE",
    "icao": "RKPD"
  },
  {
    "name": "Gimli Industrial Park Airport",
    "city": "Gimli",
    "country": "Canada",
    "iata": "YGM",
    "icao": "CYGM"
  },
  {
    "name": "Matheson Island Airport",
    "city": "Matheson Island",
    "country": "Canada",
    "iata": "NONE",
    "icao": "CJT2"
  },
  {
    "name": "Tura Mountain Airport",
    "city": "Tura",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UNIT"
  },
  {
    "name": "Beloyarskiy Airport",
    "city": "Beloyarsky",
    "country": "Russia",
    "iata": "EYK",
    "icao": "USHY"
  },
  {
    "name": "John H Batten Airport",
    "city": "Racine",
    "country": "United States",
    "iata": "RAC",
    "icao": "KRAC"
  },
  {
    "name": "Cesar Lim Rodriguez Airport",
    "city": "Taytay",
    "country": "Philippines",
    "iata": "RZP",
    "icao": "RPSD"
  },
  {
    "name": "Gera-Leumnitz Airport",
    "city": "Gera",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDAJ"
  },
  {
    "name": "Kasimovo Airfield",
    "city": "Saint-Petersburg",
    "country": "Russia",
    "iata": "NONE",
    "icao": "XLLN"
  },
  {
    "name": "Terlet Glider Field",
    "city": "Arnhem",
    "country": "Netherlands",
    "iata": "NONE",
    "icao": "EHTL"
  },
  {
    "name": "Redlands Municipal Airport",
    "city": "Redlands",
    "country": "United States",
    "iata": "REI",
    "icao": "KREI"
  },
  {
    "name": "Flabob Airport",
    "city": "Riverside",
    "country": "United States",
    "iata": "RIR",
    "icao": "KRIR"
  },
  {
    "name": "Tacoma Narrows Airport",
    "city": "Tacoma",
    "country": "United States",
    "iata": "TIW",
    "icao": "KTIW"
  },
  {
    "name": "Oerlinghausen Airport",
    "city": "TELGTE",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDLO"
  },
  {
    "name": "Jack Edwards Airport",
    "city": "Gulf Shores",
    "country": "United States",
    "iata": "JKA",
    "icao": "KJKA"
  },
  {
    "name": "General Villamil Airport",
    "city": "Isabela",
    "country": "Ecuador",
    "iata": "NONE",
    "icao": "SEII"
  },
  {
    "name": "Balzers Heliport",
    "city": "Balzers",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSXB"
  },
  {
    "name": "Flugplatz Punitz",
    "city": "Punitz-Guessing",
    "country": "Austria",
    "iata": "NONE",
    "icao": "LOGG"
  },
  {
    "name": "Khmelnytskyi Airport",
    "city": "Khmeinitskiy",
    "country": "Ukraine",
    "iata": "HMJ",
    "icao": "UKLH"
  },
  {
    "name": "Hiroshimanishi Airport",
    "city": "Hiroshima",
    "country": "Japan",
    "iata": "HIW",
    "icao": "RJBH"
  },
  {
    "name": "Yalata Mission Airport",
    "city": "Yalata",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YYTA"
  },
  {
    "name": "Hazleton Municipal Airport",
    "city": "Hazleton",
    "country": "United States",
    "iata": "HZL",
    "icao": "KHZL"
  },
  {
    "name": "Greater Cumberland Regional Airport",
    "city": "Cumberland",
    "country": "United States",
    "iata": "CBE",
    "icao": "KCBE"
  },
  {
    "name": "Sugar Loaf Shores Airport",
    "city": "Key West",
    "country": "United States",
    "iata": "NONE",
    "icao": "7FA1"
  },
  {
    "name": "Wyndham Airport",
    "city": "Wyndham",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YWYM"
  },
  {
    "name": "Bob Quinn Lake Airport",
    "city": "Bob Quinn Lake",
    "country": "Canada",
    "iata": "YBO",
    "icao": "CBW4"
  },
  {
    "name": "Grabtsevo Airport",
    "city": "Kaluga",
    "country": "Russia",
    "iata": "KLF",
    "icao": "UUBC"
  },
  {
    "name": "Tri-County Regional Airport",
    "city": "Lone Rock",
    "country": "United States",
    "iata": "LNR",
    "icao": "KLNR"
  },
  {
    "name": "Price County Airport",
    "city": "Phillips",
    "country": "United States",
    "iata": "NONE",
    "icao": "KPBH"
  },
  {
    "name": "Monroe Municipal Airport",
    "city": "Monroe",
    "country": "United States",
    "iata": "NONE",
    "icao": "KEFT"
  },
  {
    "name": "Joliet Regional Airport",
    "city": "Joliet",
    "country": "United States",
    "iata": "JOT",
    "icao": "KJOT"
  },
  {
    "name": "Illinois Valley Regional Airport-Walter A Duncan Field",
    "city": "Peru",
    "country": "United States",
    "iata": "VYS",
    "icao": "KVYS"
  },
  {
    "name": "Jackson County Reynolds Field",
    "city": "Jackson",
    "country": "United States",
    "iata": "JXN",
    "icao": "KJXN"
  },
  {
    "name": "Fuerstenwalde Airport",
    "city": "Furstenwalde",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDAL"
  },
  {
    "name": "Eberswalde-Finow Airport",
    "city": "Eberswalde",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDAV"
  },
  {
    "name": "Joseph A. Hardy Connellsville Airport",
    "city": "Connellsville",
    "country": "United States",
    "iata": "NONE",
    "icao": "KVVS"
  },
  {
    "name": "Bedford County Airport",
    "city": "Bedford",
    "country": "United States",
    "iata": "NONE",
    "icao": "KHMZ"
  },
  {
    "name": "Wings Field",
    "city": "Philadelphia",
    "country": "United States",
    "iata": "BBX",
    "icao": "KLOM"
  },
  {
    "name": "Okeechobee County Airport",
    "city": "Okeechobee",
    "country": "United States",
    "iata": "OBE",
    "icao": "KOBE"
  },
  {
    "name": "Sebring Regional Airport",
    "city": "Sebring",
    "country": "United States",
    "iata": "SEF",
    "icao": "KSEF"
  },
  {
    "name": "Avon Park Executive Airport",
    "city": "Avon Park",
    "country": "United States",
    "iata": "AVO",
    "icao": "KAVO"
  },
  {
    "name": "Winter Haven Municipal Airport - Gilbert Field",
    "city": "Winter Haven",
    "country": "United States",
    "iata": "GIF",
    "icao": "KGIF"
  },
  {
    "name": "Zephyrhills Municipal Airport",
    "city": "Zephyrhills",
    "country": "United States",
    "iata": "ZPH",
    "icao": "KZPH"
  },
  {
    "name": "Ocala International Airport - Jim Taylor Field",
    "city": "Ocala",
    "country": "United States",
    "iata": "OCF",
    "icao": "KOCF"
  },
  {
    "name": "Jesup Wayne County Airport",
    "city": "Jesup",
    "country": "United States",
    "iata": "JES",
    "icao": "KJES"
  },
  {
    "name": "Madison Municipal Airport",
    "city": "Madison",
    "country": "United States",
    "iata": "52A",
    "icao": "K52A"
  },
  {
    "name": "Newnan Coweta County Airport",
    "city": "Newnan",
    "country": "United States",
    "iata": "CCO",
    "icao": "KCCO"
  },
  {
    "name": "Thomson-McDuffie County Airport",
    "city": "Thomson",
    "country": "United States",
    "iata": "HQU",
    "icao": "KHQU"
  },
  {
    "name": "Aiken Municipal Airport",
    "city": "Aiken",
    "country": "United States",
    "iata": "AIK",
    "icao": "KAIK"
  },
  {
    "name": "Woodward Field",
    "city": "Camden",
    "country": "United States",
    "iata": "CDN",
    "icao": "KCDN"
  },
  {
    "name": "Lumberton Regional Airport",
    "city": "Lumberton",
    "country": "United States",
    "iata": "LBT",
    "icao": "KLBT"
  },
  {
    "name": "Moore County Airport",
    "city": "Pinehurst-Southern Pines",
    "country": "United States",
    "iata": "SOP",
    "icao": "KSOP"
  },
  {
    "name": "Richmond County Airport",
    "city": "Rockingham",
    "country": "United States",
    "iata": "RCZ",
    "icao": "KRCZ"
  },
  {
    "name": "Baraboo Wisconsin Dells Airport",
    "city": "Baraboo",
    "country": "United States",
    "iata": "DLL",
    "icao": "KDLL"
  },
  {
    "name": "Statesville Regional Airport",
    "city": "Statesville",
    "country": "United States",
    "iata": "SVH",
    "icao": "KSVH"
  },
  {
    "name": "Burlington Municipal Airport",
    "city": "Burlington",
    "country": "United States",
    "iata": "BUU",
    "icao": "KBUU"
  },
  {
    "name": "William T. Piper Memorial Airport",
    "city": "Lock Haven",
    "country": "United States",
    "iata": "LHV",
    "icao": "KLHV"
  },
  {
    "name": "Zelienople Municipal Airport",
    "city": "Zelienople",
    "country": "United States",
    "iata": "NONE",
    "icao": "KPJC"
  },
  {
    "name": "Lorain County Regional Airport",
    "city": "Lorain-Elyria",
    "country": "United States",
    "iata": "LPR",
    "icao": "KLPR"
  },
  {
    "name": "Burke Lakefront Airport",
    "city": "Cleveland",
    "country": "United States",
    "iata": "BKL",
    "icao": "KBKL"
  },
  {
    "name": "Chautauqua County-Dunkirk Airport",
    "city": "Dunkirk",
    "country": "United States",
    "iata": "DKK",
    "icao": "KDKK"
  },
  {
    "name": "South Jersey Regional Airport",
    "city": "Mount Holly",
    "country": "United States",
    "iata": "VAY",
    "icao": "KVAY"
  },
  {
    "name": "Linden Airport",
    "city": "Linden",
    "country": "United States",
    "iata": "LDJ",
    "icao": "KLDJ"
  },
  {
    "name": "Tri State Steuben County Airport",
    "city": "Angola",
    "country": "United States",
    "iata": "ANQ",
    "icao": "KANQ"
  },
  {
    "name": "Warsaw Municipal Airport",
    "city": "Warsaw",
    "country": "United States",
    "iata": "NONE",
    "icao": "KASW"
  },
  {
    "name": "Van Wert County Airport",
    "city": "Van Wert",
    "country": "United States",
    "iata": "VNW",
    "icao": "KVNW"
  },
  {
    "name": "Brooks Field",
    "city": "Marshall",
    "country": "United States",
    "iata": "NONE",
    "icao": "KRMY"
  },
  {
    "name": "Genesee County Airport",
    "city": "Batavia",
    "country": "United States",
    "iata": "GVQ",
    "icao": "KGVQ"
  },
  {
    "name": "Clearwater Air Park",
    "city": "Clearwater",
    "country": "United States",
    "iata": "CLW",
    "icao": "KCLW"
  },
  {
    "name": "Orlampa Inc Airport",
    "city": "Forties Alpha",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "FA08"
  },
  {
    "name": "Chicago Meigs Airport",
    "city": "Chicago",
    "country": "United States",
    "iata": "CGX",
    "icao": "KCGX"
  },
  {
    "name": "Pickens County Airport",
    "city": "Jasper",
    "country": "United States",
    "iata": "JZP",
    "icao": "KJZP"
  },
  {
    "name": "Saarmund Airport",
    "city": "Saarmund",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDCS"
  },
  {
    "name": "Grand Strand Airport",
    "city": "North Myrtle Beach",
    "country": "United States",
    "iata": "CRE",
    "icao": "KCRE"
  },
  {
    "name": "Lansing Municipal Airport",
    "city": "Lansing",
    "country": "United States",
    "iata": "IGQ",
    "icao": "KIGQ"
  },
  {
    "name": "Ramona Airport",
    "city": "Ramona",
    "country": "United States",
    "iata": "RNM",
    "icao": "KRNM"
  },
  {
    "name": "Pont Sur Yonne Airfield",
    "city": "Pont Sur Yonne",
    "country": "France",
    "iata": "NONE",
    "icao": "LFGO"
  },
  {
    "name": "St Florentin Cheu Airfield",
    "city": "St Florentin Cheu",
    "country": "France",
    "iata": "NONE",
    "icao": "LFGP"
  },
  {
    "name": "Saulieu Liernais Airfield",
    "city": "Saulieu",
    "country": "France",
    "iata": "NONE",
    "icao": "LFEW"
  },
  {
    "name": "Olten Airport",
    "city": "Olten",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSPO"
  },
  {
    "name": "Buochs Airport",
    "city": "Buochs",
    "country": "Switzerland",
    "iata": "BXO",
    "icao": "LSZC"
  },
  {
    "name": "Ambri Airport",
    "city": "Quinto",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSPM"
  },
  {
    "name": "Lodrino Air Base",
    "city": "Lodrino",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSML"
  },
  {
    "name": "Roudnice Airport",
    "city": "Roudnice nad Lebem",
    "country": "Czech Republic",
    "iata": "NONE",
    "icao": "LKRO"
  },
  {
    "name": "Usti Nad Labem Airfield",
    "city": "Usti Nad Labem",
    "country": "Czech Republic",
    "iata": "NONE",
    "icao": "LKUL"
  },
  {
    "name": "Mauterndorf Airport",
    "city": "Mauterndorf",
    "country": "Austria",
    "iata": "NONE",
    "icao": "LOSM"
  },
  {
    "name": "Nötsch Im Gailtal Airport",
    "city": "Notsch Im Gailtal",
    "country": "Austria",
    "iata": "NONE",
    "icao": "LOKN"
  },
  {
    "name": "Karlsruhe-Forchheim Airport",
    "city": "Karlsruhe",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDTK"
  },
  {
    "name": "Weinheim/Bergstraße Airport",
    "city": "Weinheim",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDGZ"
  },
  {
    "name": "Meaux Esbly Airport",
    "city": "Meaux",
    "country": "France",
    "iata": "NONE",
    "icao": "LFPE"
  },
  {
    "name": "Château-Thierry - Belleau Airport",
    "city": "Chateau-Thierry",
    "country": "France",
    "iata": "NONE",
    "icao": "LFFH"
  },
  {
    "name": "Branch County Memorial Airport",
    "city": "Coldwater",
    "country": "United States",
    "iata": "OEB",
    "icao": "KOEB"
  },
  {
    "name": "Wilkes Barre Wyoming Valley Airport",
    "city": "Wilkes-Barre",
    "country": "United States",
    "iata": "WBW",
    "icao": "KWBW"
  },
  {
    "name": "Willoughby Lost Nation Municipal Airport",
    "city": "Willoughby",
    "country": "United States",
    "iata": "LNN",
    "icao": "KLNN"
  },
  {
    "name": "Taoyuan Air Base",
    "city": "Taoyuan",
    "country": "Taiwan",
    "iata": "NONE",
    "icao": "RCGM"
  },
  {
    "name": "Uummannaq Heliport",
    "city": "Uummannaq",
    "country": "Greenland",
    "iata": "UMD",
    "icao": "BGUM"
  },
  {
    "name": "Bayannur Tianjitai Airport",
    "city": "Bayannur",
    "country": "China",
    "iata": "RLK",
    "icao": "ZBYZ"
  },
  {
    "name": "Capital City Airport",
    "city": "Frankfort",
    "country": "United States",
    "iata": "FFT",
    "icao": "KFFT"
  },
  {
    "name": "Auburn Lewiston Municipal Airport",
    "city": "Lewiston",
    "country": "United States",
    "iata": "LEW",
    "icao": "KLEW"
  },
  {
    "name": "Inowroclaw Military Air Base",
    "city": "Inowroclaw",
    "country": "Poland",
    "iata": "NONE",
    "icao": "EPIR"
  },
  {
    "name": "Pruszcz Gdanski Air Base",
    "city": "Pruszcz Gdansk",
    "country": "Poland",
    "iata": "NONE",
    "icao": "EPPR"
  },
  {
    "name": "Bloyer Field",
    "city": "Tomah",
    "country": "United States",
    "iata": "NONE",
    "icao": "KY72"
  },
  {
    "name": "Marco Island Airport",
    "city": "Marco Island Airport",
    "country": "United States",
    "iata": "MRK",
    "icao": "KMKY"
  },
  {
    "name": "Drummond Island Airport",
    "city": "Drummond Island",
    "country": "United States",
    "iata": "DRM",
    "icao": "KDRM"
  },
  {
    "name": "Gladwin Zettel Memorial Airport",
    "city": "Gladwin",
    "country": "United States",
    "iata": "GDW",
    "icao": "KGDW"
  },
  {
    "name": "South Haven Area Regional Airport",
    "city": "South Haven",
    "country": "United States",
    "iata": "LWA",
    "icao": "KLWA"
  },
  {
    "name": "Marshfield Municipal Airport",
    "city": "Marshfield",
    "country": "United States",
    "iata": "MFI",
    "icao": "KMFI"
  },
  {
    "name": "Alexander Field South Wood County Airport",
    "city": "Wisconsin Rapids",
    "country": "United States",
    "iata": "ISW",
    "icao": "KISW"
  },
  {
    "name": "Clinton Municipal Airport",
    "city": "Clinton",
    "country": "United States",
    "iata": "CWI",
    "icao": "KCWI"
  },
  {
    "name": "Beverly Municipal Airport",
    "city": "Beverly",
    "country": "United States",
    "iata": "BVY",
    "icao": "KBVY"
  },
  {
    "name": "Nagaur Airport",
    "city": "Nagaur",
    "country": "India",
    "iata": "NONE",
    "icao": "VI73"
  },
  {
    "name": "Ostafyevo International Airport",
    "city": "Moscow",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UUMO"
  },
  {
    "name": "Trois-Rivières Airport",
    "city": "Trois Rivieres",
    "country": "Canada",
    "iata": "YRQ",
    "icao": "CYRQ"
  },
  {
    "name": "Poplar Bluff Municipal Airport",
    "city": "Poplar Bluff",
    "country": "United States",
    "iata": "POF",
    "icao": "KPOF"
  },
  {
    "name": "Somerset Airport",
    "city": "Somerville",
    "country": "United States",
    "iata": "NONE",
    "icao": "KSMQ"
  },
  {
    "name": "Eastport Municipal Airport",
    "city": "Eastport",
    "country": "United States",
    "iata": "EPM",
    "icao": "KEPM"
  },
  {
    "name": "Keokuk Municipal Airport",
    "city": "Keokuk",
    "country": "United States",
    "iata": "EOK",
    "icao": "KEOK"
  },
  {
    "name": "Perth/Scone Airport",
    "city": "Perth",
    "country": "United Kingdom",
    "iata": "PSL",
    "icao": "EGPT"
  },
  {
    "name": "Caernarfon Airport",
    "city": "Caernarfon",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGCK"
  },
  {
    "name": "Grefrath-Niershorst Airport",
    "city": "Grefrath",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDLF"
  },
  {
    "name": "St Paul Downtown Holman Field",
    "city": "St. Paul",
    "country": "United States",
    "iata": "STP",
    "icao": "KSTP"
  },
  {
    "name": "Söderhamn Airport",
    "city": "Soderhamn",
    "country": "Sweden",
    "iata": "SOO",
    "icao": "ESNY"
  },
  {
    "name": "Newcastle Aerodrome",
    "city": "Newcastle",
    "country": "Ireland",
    "iata": "NONE",
    "icao": "EINC"
  },
  {
    "name": "Saravane Airport",
    "city": "Saravane",
    "country": "Laos",
    "iata": "VNA",
    "icao": "VLSV"
  },
  {
    "name": "Segeletz Airport",
    "city": "Segeletz",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDAI"
  },
  {
    "name": "Fuentemilanos Airport",
    "city": "Segovia",
    "country": "Spain",
    "iata": "NONE",
    "icao": "LEFM"
  },
  {
    "name": "Akeno Airport",
    "city": "Akeno",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJOE"
  },
  {
    "name": "Ust-Kamchatsk Airport",
    "city": "Ust Kamchatsk",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UHPK"
  },
  {
    "name": "Oconomowoc Airport",
    "city": "Oconomowoc",
    "country": "United States",
    "iata": "NONE",
    "icao": "0WI8"
  },
  {
    "name": "Kozyrevsk Airport",
    "city": "Kozyrevsk",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UHPO"
  },
  {
    "name": "Dikson Airport",
    "city": "Dikson",
    "country": "Russia",
    "iata": "DKS",
    "icao": "UODD"
  },
  {
    "name": "Beverley Airport",
    "city": "Mine Site",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YBEE"
  },
  {
    "name": "Bantry Aerodrome",
    "city": "Bantry",
    "country": "Ireland",
    "iata": "BYT",
    "icao": "EIBN"
  },
  {
    "name": "Aliwal North Airport",
    "city": "Aliwal North",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FAAN"
  },
  {
    "name": "Alkantpan Copper Airport",
    "city": "Alkantpan",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FACO"
  },
  {
    "name": "Alldays Airport",
    "city": "Alldays",
    "country": "South Africa",
    "iata": "ADY",
    "icao": "FAAL"
  },
  {
    "name": "Barberton Airport",
    "city": "Barberton",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FABR"
  },
  {
    "name": "Butler Co Regional Airport - Hogan Field",
    "city": "Hamilton",
    "country": "United States",
    "iata": "NONE",
    "icao": "KHAO"
  },
  {
    "name": "Bungoma Airport",
    "city": "Bungoma",
    "country": "Kenya",
    "iata": "NONE",
    "icao": "HKBU"
  },
  {
    "name": "Bura East Airport",
    "city": "Bura",
    "country": "Kenya",
    "iata": "NONE",
    "icao": "HKBR"
  },
  {
    "name": "Busia Airport",
    "city": "Busia",
    "country": "Kenya",
    "iata": "NONE",
    "icao": "HKBA"
  },
  {
    "name": "Embu Airport",
    "city": "Embu",
    "country": "Kenya",
    "iata": "NONE",
    "icao": "HKEM"
  },
  {
    "name": "Garba Tula Airport",
    "city": "Garba Tula",
    "country": "Kenya",
    "iata": "NONE",
    "icao": "HKGT"
  },
  {
    "name": "Garissa Airport",
    "city": "Garissa",
    "country": "Kenya",
    "iata": "GAS",
    "icao": "HKGA"
  },
  {
    "name": "Hola Airport",
    "city": "Hola",
    "country": "Kenya",
    "iata": "HOA",
    "icao": "HKHO"
  },
  {
    "name": "Homa Bay Airport",
    "city": "Homa Bay",
    "country": "Kenya",
    "iata": "NONE",
    "icao": "HKHB"
  },
  {
    "name": "Isiolo Airport",
    "city": "Isiolo",
    "country": "Kenya",
    "iata": "NONE",
    "icao": "HKIS"
  },
  {
    "name": "Kericho Airport",
    "city": "Kericho",
    "country": "Kenya",
    "iata": "KEY",
    "icao": "HKKR"
  },
  {
    "name": "Kilaguni Airport",
    "city": "Kilaguni",
    "country": "Kenya",
    "iata": "ILU",
    "icao": "HKKL"
  },
  {
    "name": "Antsirabe Airport",
    "city": "Antsirabe",
    "country": "Madagascar",
    "iata": "ATJ",
    "icao": "FMME"
  },
  {
    "name": "Bekily Airport",
    "city": "Bekily",
    "country": "Madagascar",
    "iata": "OVA",
    "icao": "FMSL"
  },
  {
    "name": "Ust-Tsylma Airport",
    "city": "Ust-Tsylma",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UUYX"
  },
  {
    "name": "Gorno-Altaysk Airport",
    "city": "Gorno-Altaysk",
    "country": "Russia",
    "iata": "RGK",
    "icao": "UNBG"
  },
  {
    "name": "Fond du Lac County Airport",
    "city": "Fond du Lac",
    "country": "United States",
    "iata": "FLD",
    "icao": "KFLD"
  },
  {
    "name": "Waupaca Municipal Airport",
    "city": "Waupaca",
    "country": "United States",
    "iata": "PCZ",
    "icao": "KPCZ"
  },
  {
    "name": "Stevens Point Municipal Airport",
    "city": "Stevens Point",
    "country": "United States",
    "iata": "STE",
    "icao": "KSTE"
  },
  {
    "name": "Mys Shmidta Airport",
    "city": "Mys Shmidta",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UHMI"
  },
  {
    "name": "Moma Airport",
    "city": "Honuu",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UEMA"
  },
  {
    "name": "Luce County Airport",
    "city": "Newberry",
    "country": "United States",
    "iata": "ERY",
    "icao": "KERY"
  },
  {
    "name": "Peenemünde Airport",
    "city": "Peenemunde",
    "country": "Germany",
    "iata": "PEF",
    "icao": "EDCP"
  },
  {
    "name": "Góraszka Airport",
    "city": "Goraszka",
    "country": "Poland",
    "iata": "NONE",
    "icao": "EPGO"
  },
  {
    "name": "Nusawiru Airport",
    "city": "Nusawiru",
    "country": "Indonesia",
    "iata": "NONE",
    "icao": "WI1A"
  },
  {
    "name": "Galion Municipal Airport",
    "city": "Galion",
    "country": "United States",
    "iata": "GQQ",
    "icao": "KGQQ"
  },
  {
    "name": "Tiputini Airport",
    "city": "Tiputini",
    "country": "Ecuador",
    "iata": "TPN",
    "icao": "SETI"
  },
  {
    "name": "Rio Amazonas Airport",
    "city": "Pastaza",
    "country": "Ecuador",
    "iata": "PTZ",
    "icao": "SESM"
  },
  {
    "name": "Clarksville–Montgomery County Regional Airport",
    "city": "Clarksville",
    "country": "United States",
    "iata": "CKV",
    "icao": "KCKV"
  },
  {
    "name": "Lompoc Airport",
    "city": "Lompoc",
    "country": "United States",
    "iata": "LPC",
    "icao": "KLPC"
  },
  {
    "name": "Chester County G O Carlson Airport",
    "city": "Coatesville",
    "country": "United States",
    "iata": "CTH",
    "icao": "KMQS"
  },
  {
    "name": "Bost Airport",
    "city": "Lashkar Gah",
    "country": "Afghanistan",
    "iata": "BST",
    "icao": "OABT"
  },
  {
    "name": "Lankaran International Airport",
    "city": "Lankaran",
    "country": "Azerbaijan",
    "iata": "LLK",
    "icao": "UBBL"
  },
  {
    "name": "Gabala International Airport",
    "city": "Qabala",
    "country": "Azerbaijan",
    "iata": "GBB",
    "icao": "UBBQ"
  },
  {
    "name": "Zaqatala International Airport",
    "city": "Zaqatala",
    "country": "Azerbaijan",
    "iata": "ZTU",
    "icao": "UBBY"
  },
  {
    "name": "Lake Placid Airport",
    "city": "Lake Placid",
    "country": "United States",
    "iata": "LKP",
    "icao": "KLKP"
  },
  {
    "name": "Magan Airport",
    "city": "Yakutsk",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UEMM"
  },
  {
    "name": "Cooma Hospital Helipad",
    "city": "Yuzhno-Kurilsk",
    "country": "Russia",
    "iata": "DEE",
    "icao": "YXCM"
  },
  {
    "name": "Lima Allen County Airport",
    "city": "Lima",
    "country": "United States",
    "iata": "AOH",
    "icao": "KAOH"
  },
  {
    "name": "Sondok Airport",
    "city": "Hamhung",
    "country": "North Korea",
    "iata": "DSO",
    "icao": "ZKSD"
  },
  {
    "name": "Malcolm McKinnon Airport",
    "city": "Brunswick",
    "country": "United States",
    "iata": "SSI",
    "icao": "KSSI"
  },
  {
    "name": "Beaver County Airport",
    "city": "Beaver Falls",
    "country": "United States",
    "iata": "BFP",
    "icao": "KBVI"
  },
  {
    "name": "Georgetown County Airport",
    "city": "Georgetown",
    "country": "United States",
    "iata": "GGE",
    "icao": "KGGE"
  },
  {
    "name": "Hardwick Field",
    "city": "Cleveland",
    "country": "United States",
    "iata": "HDI",
    "icao": "KHDI"
  },
  {
    "name": "Renton Municipal Airport",
    "city": "Renton",
    "country": "United States",
    "iata": "RNT",
    "icao": "KRNT"
  },
  {
    "name": "Brackett Field",
    "city": "La Verne",
    "country": "United States",
    "iata": "POC",
    "icao": "KPOC"
  },
  {
    "name": "Cross City Airport",
    "city": "Cross City",
    "country": "United States",
    "iata": "CTY",
    "icao": "KCTY"
  },
  {
    "name": "Oconee County Regional Airport",
    "city": "Clemson",
    "country": "United States",
    "iata": "CEU",
    "icao": "KCEU"
  },
  {
    "name": "Beech Factory Airport",
    "city": "Wichita",
    "country": "United States",
    "iata": "BEC",
    "icao": "KBEC"
  },
  {
    "name": "Tabing Airport",
    "city": "Padang",
    "country": "Indonesia",
    "iata": "PDG",
    "icao": "WIMG"
  },
  {
    "name": "Tom B. David Field",
    "city": "Calhoun",
    "country": "United States",
    "iata": "NONE",
    "icao": "KCZL"
  },
  {
    "name": "Habersham County Airport",
    "city": "Cornelia",
    "country": "United States",
    "iata": "NONE",
    "icao": "KAJR"
  },
  {
    "name": "Georgetown Municipal Airport",
    "city": "Georgetown",
    "country": "United States",
    "iata": "GTU",
    "icao": "KGTU"
  },
  {
    "name": "Old Rhinebeck Airport",
    "city": "Rhinebeck",
    "country": "United States",
    "iata": "NONE",
    "icao": "NY94"
  },
  {
    "name": "Duxford Airport",
    "city": "Duxford",
    "country": "United Kingdom",
    "iata": "QFO",
    "icao": "EGSU"
  },
  {
    "name": "Sidney Municipal-Lloyd W Carr Field",
    "city": "Sidney",
    "country": "United States",
    "iata": "SNY",
    "icao": "KSNY"
  },
  {
    "name": "Great Keppel Is Airport",
    "city": "Great Keppel Island",
    "country": "Australia",
    "iata": "GKL",
    "icao": "YGKL"
  },
  {
    "name": "Roper Bar Airport",
    "city": "Roper Bar",
    "country": "Australia",
    "iata": "RPB",
    "icao": "YRRB"
  },
  {
    "name": "Mount Garnet Airport",
    "city": "Mount Garnet",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YMRT"
  },
  {
    "name": "Innisfail Airport",
    "city": "Innisfail",
    "country": "Australia",
    "iata": "IFL",
    "icao": "YIFL"
  },
  {
    "name": "Kalaeloa Airport",
    "city": "Kapolei",
    "country": "United States",
    "iata": "NONE",
    "icao": "PHJR"
  },
  {
    "name": "Bamiyan Airport",
    "city": "Bamyan",
    "country": "Afghanistan",
    "iata": "BIN",
    "icao": "OABN"
  },
  {
    "name": "Moomba Airport",
    "city": "Moomba",
    "country": "Australia",
    "iata": "MOO",
    "icao": "YOOM"
  },
  {
    "name": "Iosco County Airport",
    "city": "East Tawas",
    "country": "United States",
    "iata": "ECA",
    "icao": "K6D9"
  },
  {
    "name": "Madison County Executive Airport-Tom Sharp Jr Field",
    "city": "Huntsville",
    "country": "United States",
    "iata": "NONE",
    "icao": "KMDQ"
  },
  {
    "name": "Leesburg Executive Airport",
    "city": "Leesburg",
    "country": "United States",
    "iata": "JYO",
    "icao": "KJYO"
  },
  {
    "name": "Anoka County-Blaine Arpt(Janes Field) Airport",
    "city": "Anoka",
    "country": "United States",
    "iata": "NONE",
    "icao": "KANE"
  },
  {
    "name": "Robinson Crusoe Airport",
    "city": "San Juan Bautista",
    "country": "Chile",
    "iata": "NONE",
    "icao": "SCIR"
  },
  {
    "name": "Villa Airport",
    "city": "Maamigili",
    "country": "Maldives",
    "iata": "VAM",
    "icao": "VRMV"
  },
  {
    "name": "Lingling Airport",
    "city": "Yongzhou",
    "country": "China",
    "iata": "LLF",
    "icao": "ZGLG"
  },
  {
    "name": "Lošinj Island Airport",
    "city": "Mali Losinj",
    "country": "Croatia",
    "iata": "LSZ",
    "icao": "LDLO"
  },
  {
    "name": "Onslow Airport",
    "city": "Onslow",
    "country": "Australia",
    "iata": "ONS",
    "icao": "YOLW"
  },
  {
    "name": "Theodore Airport",
    "city": "Theodore",
    "country": "Australia",
    "iata": "TDR",
    "icao": "YTDR"
  },
  {
    "name": "Williamson Sodus Airport",
    "city": "Williamson",
    "country": "United States",
    "iata": "SDC",
    "icao": "KSDC"
  },
  {
    "name": "Fairoaks Airport",
    "city": "Fairoaks",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGTF"
  },
  {
    "name": "Boulder Municipal Airport",
    "city": "Boulder",
    "country": "United States",
    "iata": "WBU",
    "icao": "KBDU"
  },
  {
    "name": "Neustadt-Glewe Airport",
    "city": "Neustadt-Glewe",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDAN"
  },
  {
    "name": "Goetsenhoven Air Base",
    "city": "GOETSENHOVEN",
    "country": "Belgium",
    "iata": "NONE",
    "icao": "EBTN"
  },
  {
    "name": "Tutow Airport",
    "city": "Wildenrath",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDUW"
  },
  {
    "name": "Bremgarten Airport",
    "city": "Bremgarten",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDTG"
  },
  {
    "name": "Bitburg Airport",
    "city": "Birburg",
    "country": "Germany",
    "iata": "BBJ",
    "icao": "EDRB"
  },
  {
    "name": "Palo Alto Airport of Santa Clara County",
    "city": "Palo Alto",
    "country": "United States",
    "iata": "PAO",
    "icao": "KPAO"
  },
  {
    "name": "Ust-Nera Airport",
    "city": "Ust-Nera",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UEMT"
  },
  {
    "name": "Letiště Vysoké Mýto",
    "city": "Vysoke Myto",
    "country": "Czech Republic",
    "iata": "NONE",
    "icao": "LKVM"
  },
  {
    "name": "Spa (la Sauvenière) Airport",
    "city": "Spa",
    "country": "Belgium",
    "iata": "NONE",
    "icao": "EBSP"
  },
  {
    "name": "Falcon Field",
    "city": "Mesa",
    "country": "United States",
    "iata": "FFZ",
    "icao": "KFFZ"
  },
  {
    "name": "Coolidge Municipal Airport",
    "city": "Cooldige",
    "country": "United States",
    "iata": "P08",
    "icao": "KP08"
  },
  {
    "name": "Cottonwood Airport",
    "city": "Cottonwood",
    "country": "United States",
    "iata": "P52",
    "icao": "KP52"
  },
  {
    "name": "Suarlée Airport",
    "city": "Namur",
    "country": "Belgium",
    "iata": "NONE",
    "icao": "EBNM"
  },
  {
    "name": "Kiewit Airfield Hasselt",
    "city": "Hasselt",
    "country": "Belgium",
    "iata": "NONE",
    "icao": "EBZH"
  },
  {
    "name": "Ak-Chin Regional Airport",
    "city": "Phoenix",
    "country": "United States",
    "iata": "A39",
    "icao": "KA39"
  },
  {
    "name": "Wickenburg Municipal Airport",
    "city": "Wickenburg",
    "country": "United States",
    "iata": "E25",
    "icao": "KE25"
  },
  {
    "name": "Yangzhou Taizhou Airport",
    "city": "Yangzhou",
    "country": "China",
    "iata": "YTY",
    "icao": "ZSYA"
  },
  {
    "name": "Oakland County International Airport",
    "city": "Pontiac",
    "country": "United States",
    "iata": "PTK",
    "icao": "KPTK"
  },
  {
    "name": "Kissidougou Airport",
    "city": "Kissidougou",
    "country": "Guinea",
    "iata": "KSI",
    "icao": "GUKU"
  },
  {
    "name": "Dillant Hopkins Airport",
    "city": "Keene",
    "country": "United States",
    "iata": "EEN",
    "icao": "KEEN"
  },
  {
    "name": "Kawama Airport",
    "city": "Kawama",
    "country": "Cuba",
    "iata": "NONE",
    "icao": "MUKW"
  },
  {
    "name": "Kooddoo Airport",
    "city": "Kooddoo",
    "country": "Maldives",
    "iata": "GKK",
    "icao": "VRMO"
  },
  {
    "name": "Glasgow Industrial Airport",
    "city": "Glasgow",
    "country": "United States",
    "iata": "NONE",
    "icao": "07MT"
  },
  {
    "name": "Rochester Airport",
    "city": "Rochester",
    "country": "United Kingdom",
    "iata": "RCS",
    "icao": "EGTO"
  },
  {
    "name": "Termas de Río Hondo international Airport",
    "city": "Rio Hondo",
    "country": "Argentina",
    "iata": "RHD",
    "icao": "SANR"
  },
  {
    "name": "Keetmanshoop Airport",
    "city": "Keetmanshoop",
    "country": "Namibia",
    "iata": "KMP",
    "icao": "FYKT"
  },
  {
    "name": "Iowa City Municipal Airport",
    "city": "Iowa City",
    "country": "United States",
    "iata": "IOW",
    "icao": "KIOW"
  },
  {
    "name": "Turpan Jiaohe Airport",
    "city": "Turpan",
    "country": "China",
    "iata": "TLQ",
    "icao": "ZWTP"
  },
  {
    "name": "Lorenzo Airport",
    "city": "Morro de Sao Paulo",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SNCL"
  },
  {
    "name": "Windom Municipal Airport",
    "city": "Windom",
    "country": "United States",
    "iata": "MWM",
    "icao": "KMWM"
  },
  {
    "name": "Longview Ranch Airport",
    "city": "Longview",
    "country": "United States",
    "iata": "NONE",
    "icao": "OG39"
  },
  {
    "name": "Sortavala Airport",
    "city": "Sortavala",
    "country": "Russia",
    "iata": "NONE",
    "icao": "ULPW"
  },
  {
    "name": "Lee Airport",
    "city": "Annapolis",
    "country": "United States",
    "iata": "ANP",
    "icao": "KANP"
  },
  {
    "name": "Cuamba Airport",
    "city": "Cuamba",
    "country": "Mozambique",
    "iata": "FXO",
    "icao": "FQCB"
  },
  {
    "name": "Bodaybo Airport",
    "city": "Bodaibo",
    "country": "Russia",
    "iata": "ODO",
    "icao": "UIKB"
  },
  {
    "name": "Zhytomyr Airport",
    "city": "Zhytomyr",
    "country": "Ukraine",
    "iata": "ZTR",
    "icao": "UKKV"
  },
  {
    "name": "Paluknys Airport",
    "city": "Paluknys",
    "country": "Lithuania",
    "iata": "NONE",
    "icao": "EYVP"
  },
  {
    "name": "Mattala Rajapaksa International Airport",
    "city": "Mattala",
    "country": "Sri Lanka",
    "iata": "HRI",
    "icao": "VCRI"
  },
  {
    "name": "Pecos Municipal Airport",
    "city": "Pecos",
    "country": "United States",
    "iata": "PEQ",
    "icao": "KPEQ"
  },
  {
    "name": "Hattiesburg Bobby L Chain Municipal Airport",
    "city": "Hattiesburg",
    "country": "United States",
    "iata": "HBG",
    "icao": "KHBG"
  },
  {
    "name": "Botucatu - Tancredo de Almeida Neves Airport",
    "city": "Botucatu",
    "country": "Brazil",
    "iata": "QCJ",
    "icao": "SDBK"
  },
  {
    "name": "Base Aérea Airport",
    "city": "Anapolis",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SBAN"
  },
  {
    "name": "São Carlos Airport",
    "city": "Sao Carlos",
    "country": "Brazil",
    "iata": "QSC",
    "icao": "SDSC"
  },
  {
    "name": "Chan Gurney Municipal Airport",
    "city": "Yankton",
    "country": "United States",
    "iata": "YKN",
    "icao": "KYKN"
  },
  {
    "name": "Sir Bani Yas Airport",
    "city": "Sir Bani Yas Island",
    "country": "United Arab Emirates",
    "iata": "XSB",
    "icao": "OMBY"
  },
  {
    "name": "Bromont (Roland Desourdy) Airport",
    "city": "Bromont",
    "country": "Canada",
    "iata": "ZBM",
    "icao": "CZBM"
  },
  {
    "name": "Beccles Airport",
    "city": "Beccles",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGSM"
  },
  {
    "name": "Kratie Airport",
    "city": "Kratie",
    "country": "Cambodia",
    "iata": "KTI",
    "icao": "VDKT"
  },
  {
    "name": "Caldera Airport",
    "city": "Caldera",
    "country": "Chile",
    "iata": "NONE",
    "icao": "SCCL"
  },
  {
    "name": "San Pedro de Atacama Airport",
    "city": "San Pedro de Atacama",
    "country": "Chile",
    "iata": "NONE",
    "icao": "SCPE"
  },
  {
    "name": "Copacabana Airport",
    "city": "Copacabana",
    "country": "Bolivia",
    "iata": "NONE",
    "icao": "SLCC"
  },
  {
    "name": "Guyuan Liupanshan Airport",
    "city": "Guyuan",
    "country": "China",
    "iata": "GYU",
    "icao": "ZLGY"
  },
  {
    "name": "RAF Brawdy",
    "city": "Brawdy",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGDA"
  },
  {
    "name": "Changhai Airport",
    "city": "Changhai",
    "country": "China",
    "iata": "CNI",
    "icao": "ZYCH"
  },
  {
    "name": "Redhill Aerodrome",
    "city": "Redhill",
    "country": "United Kingdom",
    "iata": "KRH",
    "icao": "EGKR"
  },
  {
    "name": "Chinchilla Airport",
    "city": "Chinchilla",
    "country": "Australia",
    "iata": "CCL",
    "icao": "YCCA"
  },
  {
    "name": "Hayward Executive Airport",
    "city": "Hayward",
    "country": "United States",
    "iata": "HWD",
    "icao": "KHWD"
  },
  {
    "name": "Motueka Airport",
    "city": "Motueka",
    "country": "New Zealand",
    "iata": "MZP",
    "icao": "NZMK"
  },
  {
    "name": "Shute Harbour Airport",
    "city": "Shute Harbour",
    "country": "Australia",
    "iata": "JHQ",
    "icao": "YSHR"
  },
  {
    "name": "Ann Arbor Municipal Airport",
    "city": "Ann Arbor",
    "country": "United States",
    "iata": "ARB",
    "icao": "KARB"
  },
  {
    "name": "Shepparton Airport",
    "city": "Shepparton",
    "country": "Australia",
    "iata": "SHT",
    "icao": "YSHT"
  },
  {
    "name": "Temora Airport",
    "city": "Temora",
    "country": "Australia",
    "iata": "TEM",
    "icao": "YTEM"
  },
  {
    "name": "Gayndah Airport",
    "city": "Gayndah",
    "country": "Australia",
    "iata": "GAH",
    "icao": "YGAY"
  },
  {
    "name": "Wilcannia Airport",
    "city": "Wilcannia",
    "country": "Australia",
    "iata": "WIO",
    "icao": "YWCA"
  },
  {
    "name": "Ivanhoe Airport",
    "city": "Ivanhoe",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YIVO"
  },
  {
    "name": "Menindee Airport",
    "city": "Menindee",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YMED"
  },
  {
    "name": "Pooncarie Airport",
    "city": "Pooncarie",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YPCE"
  },
  {
    "name": "Tilpa Airport",
    "city": "Tilpa",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YTLP"
  },
  {
    "name": "Reichenbach Air Base",
    "city": "Reichenbach im Kandertal",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSGR"
  },
  {
    "name": "Bijie Feixiong Airport",
    "city": "Bijie",
    "country": "China",
    "iata": "BFJ",
    "icao": "ZUBJ"
  },
  {
    "name": "Lensk Airport",
    "city": "Lensk",
    "country": "Russia",
    "iata": "ULK",
    "icao": "UERL"
  },
  {
    "name": "Kavalerovo Airport",
    "city": "Kavalerovo",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UHWK"
  },
  {
    "name": "Şanlıurfa GAP Airport",
    "city": "Sanliurfa",
    "country": "Turkey",
    "iata": "GNY",
    "icao": "LTCS"
  },
  {
    "name": "Zafer Airport",
    "city": "Kutahya",
    "country": "Turkey",
    "iata": "KZR",
    "icao": "LTBZ"
  },
  {
    "name": "Velikiye Luki Airport",
    "city": "Velikiye Luki",
    "country": "Russia",
    "iata": "VLU",
    "icao": "ULOL"
  },
  {
    "name": "Yeltsovka Airport",
    "city": "Novosibirsk",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UNNE"
  },
  {
    "name": "Kodinsk Airport",
    "city": "Kodinsk",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UNKI"
  },
  {
    "name": "Lake Macquarie Airport",
    "city": "Lake Macquarie",
    "country": "Australia",
    "iata": "BEO",
    "icao": "YPEC"
  },
  {
    "name": "Atlanta South Regional Airport/Tara Field",
    "city": "Hampton",
    "country": "United States",
    "iata": "4A7",
    "icao": "K4A7"
  },
  {
    "name": "Brampton Island Airport",
    "city": "Brampton Island",
    "country": "Australia",
    "iata": "BMP",
    "icao": "YBPI"
  },
  {
    "name": "Endelave West Airport",
    "city": "Endelage",
    "country": "Denmark",
    "iata": "NONE",
    "icao": "EKEL"
  },
  {
    "name": "St. Johann In Tirol Airport",
    "city": "St. Johann in Tirol",
    "country": "Austria",
    "iata": "NONE",
    "icao": "LOIJ"
  },
  {
    "name": "Thalmässing-Waizenhofen Airport",
    "city": "Thalmaessing",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDPW"
  },
  {
    "name": "Cochrane Airport",
    "city": "Cochrane",
    "country": "Canada",
    "iata": "YCN",
    "icao": "CYCN"
  },
  {
    "name": "Estadual Arthur Siqueira Airport",
    "city": "Braganca Paulista",
    "country": "Brazil",
    "iata": "BJP",
    "icao": "SBBP"
  },
  {
    "name": "Busselton Regional Airport",
    "city": "Brusselton",
    "country": "Australia",
    "iata": "BQB",
    "icao": "YBLN"
  },
  {
    "name": "Srednekolymsk Airport",
    "city": "Srednekolymsk",
    "country": "Russia",
    "iata": "SEK",
    "icao": "UESK"
  },
  {
    "name": "Comarapa Airport",
    "city": "Salt Lake City",
    "country": "United States",
    "iata": "NONE",
    "icao": "SLCR"
  },
  {
    "name": "Inverell Airport",
    "city": "Inverell",
    "country": "Australia",
    "iata": "IVR",
    "icao": "YIVL"
  },
  {
    "name": "Glen Innes Airport",
    "city": "Glen Innes",
    "country": "Australia",
    "iata": "GLI",
    "icao": "YGLI"
  },
  {
    "name": "Ansbach-Petersdorf Airport",
    "city": "Ansbach",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDQF"
  },
  {
    "name": "Immokalee Regional Airport",
    "city": "Immokalee ",
    "country": "United States",
    "iata": "IMM",
    "icao": "KIMM"
  },
  {
    "name": "Maranggo Airport",
    "city": "Sulawesi Tenggara",
    "country": "Indonesia",
    "iata": "NONE",
    "icao": "WA44"
  },
  {
    "name": "Rancho San Simeon Airport",
    "city": "Cambria",
    "country": "United States",
    "iata": "NONE",
    "icao": "66CA"
  },
  {
    "name": "Yichun Mingyueshan Airport",
    "city": "Yichun",
    "country": "China",
    "iata": "YIC",
    "icao": "ZSYC"
  },
  {
    "name": "Dinwiddie County Airport",
    "city": "Petersburg",
    "country": "United States",
    "iata": "PTB",
    "icao": "KPTB"
  },
  {
    "name": "Kasongo Airport",
    "city": "Kasongo",
    "country": "Congo (Kinshasa)",
    "iata": "KGN",
    "icao": "FZOK"
  },
  {
    "name": "McMurdo Station Pegasus Field",
    "city": "McMurdo Station",
    "country": "Antarctica",
    "iata": "NONE",
    "icao": "NZPG"
  },
  {
    "name": "Klatovy Airport",
    "city": "Klatovy",
    "country": "Czech Republic",
    "iata": "NONE",
    "icao": "LKKT"
  },
  {
    "name": "Sheboygan County Memorial Airport",
    "city": "Sheboygan",
    "country": "United States",
    "iata": "SBM",
    "icao": "KSBM"
  },
  {
    "name": "Fortescue - Dave Forrest Aerodrome",
    "city": "Cloudbreak",
    "country": "Australia",
    "iata": "KFE",
    "icao": "YFDF"
  },
  {
    "name": "Kangel Danda Airport",
    "city": "Kangel Danda",
    "country": "Nepal",
    "iata": "NONE",
    "icao": "VNKL"
  },
  {
    "name": "Bajura Airport",
    "city": "Bajura",
    "country": "Nepal",
    "iata": "BJU",
    "icao": "VNBR"
  },
  {
    "name": "Chara Airport",
    "city": "Chara",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UIAR"
  },
  {
    "name": "Herning Airport",
    "city": "Herning",
    "country": "Denmark",
    "iata": "NONE",
    "icao": "EKHG"
  },
  {
    "name": "Oberschleißheim Airfield",
    "city": "Schleissheim",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDNX"
  },
  {
    "name": "Pinal Airpark",
    "city": "Marana",
    "country": "United States",
    "iata": "MZJ",
    "icao": "KMZJ"
  },
  {
    "name": "Glendale Municipal Airport",
    "city": "Glendale",
    "country": "United States",
    "iata": "GEU",
    "icao": "KGEU"
  },
  {
    "name": "Safford Regional Airport",
    "city": "Safford",
    "country": "United States",
    "iata": "SAD",
    "icao": "KSAD"
  },
  {
    "name": "Verden-Scharnhorst Airport",
    "city": "Verden",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDWV"
  },
  {
    "name": "Nittenau-Bruck Airport",
    "city": "Nittenau",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDNM"
  },
  {
    "name": "Kerama Airport",
    "city": "Kerama",
    "country": "Japan",
    "iata": "KJP",
    "icao": "ROKR"
  },
  {
    "name": "Americana Airport",
    "city": "Americana",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SDAI"
  },
  {
    "name": "Ekibastuz Airport",
    "city": "Ekibastuz",
    "country": "Kazakhstan",
    "iata": "NONE",
    "icao": "UASB"
  },
  {
    "name": "Adamovka",
    "city": "Adamovka",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UWOD"
  },
  {
    "name": "Kvarkeno",
    "city": "Kvarkeno",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UWOH"
  },
  {
    "name": "Sikeston Memorial Municipal Airport",
    "city": "Sikeston",
    "country": "United States",
    "iata": "SIK",
    "icao": "KSIK"
  },
  {
    "name": "Tetiaroa Airport",
    "city": "Tetiaroa",
    "country": "French Polynesia",
    "iata": "TTI",
    "icao": "NTTE"
  },
  {
    "name": "Floyd Bennett Memorial Airport",
    "city": "Queensbury",
    "country": "United States",
    "iata": "GFL",
    "icao": "KGFL"
  },
  {
    "name": "Saratoga County Airport",
    "city": "Ballston Spa",
    "country": "United States",
    "iata": "5B2",
    "icao": "K5B2"
  },
  {
    "name": "Crystal River Airport",
    "city": "Crystal River",
    "country": "United States",
    "iata": "CGC",
    "icao": "KCGC"
  },
  {
    "name": "Martin State Airport",
    "city": "Baltimore",
    "country": "United States",
    "iata": "MTN",
    "icao": "KMTN"
  },
  {
    "name": "Lincoln Regional Karl Harder Field",
    "city": "Lincoln",
    "country": "United States",
    "iata": "LHM",
    "icao": "KLHM"
  },
  {
    "name": "Fostoria Metropolitan Airport",
    "city": "Fostoria",
    "country": "United States",
    "iata": "FZI",
    "icao": "KFZI"
  },
  {
    "name": "Eastern Slopes Regional Airport",
    "city": "Fryeburg",
    "country": "United States",
    "iata": "IZG",
    "icao": "KIZG"
  },
  {
    "name": "Coral Creek Airport",
    "city": "Placida",
    "country": "United States",
    "iata": "NONE",
    "icao": "FA54"
  },
  {
    "name": "Lakefront Airport",
    "city": "New Orleans",
    "country": "United States",
    "iata": "NEW",
    "icao": "KNEW"
  },
  {
    "name": "Coeur D'Alene - Pappy Boyington Field",
    "city": "Coeur d'Alene",
    "country": "United States",
    "iata": "COE",
    "icao": "KCOE"
  },
  {
    "name": "Beaumont Municipal Airport",
    "city": "Beaumont",
    "country": "United States",
    "iata": "BMT",
    "icao": "KBMT"
  },
  {
    "name": "Vermilion Regional Airport",
    "city": "Danville",
    "country": "United States",
    "iata": "DNV",
    "icao": "KDNV"
  },
  {
    "name": "Coonabarabran Airport",
    "city": "Coonabarabran",
    "country": "Australia",
    "iata": "COJ",
    "icao": "YCBB"
  },
  {
    "name": "Space Coast Regional Airport",
    "city": "Titusville",
    "country": "United States",
    "iata": "TIX",
    "icao": "KTIX"
  },
  {
    "name": "Bumi Airport",
    "city": "Bumi Hills",
    "country": "Zimbabwe",
    "iata": "NONE",
    "icao": "FVBM"
  },
  {
    "name": "Warnervale Airport",
    "city": "Warnervale Airport",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YWVA"
  },
  {
    "name": "Bouarfa Airport",
    "city": "Bouarfa",
    "country": "Morocco",
    "iata": "NONE",
    "icao": "GMFB"
  },
  {
    "name": "Nyeri Airport",
    "city": "NYERI",
    "country": "Kenya",
    "iata": "NYE",
    "icao": "HKNI"
  },
  {
    "name": "Andrau Airpark",
    "city": "Houston",
    "country": "United States",
    "iata": "AAP",
    "icao": "KAAP"
  },
  {
    "name": "Flying Cloud Airport",
    "city": "Eden Prairie",
    "country": "United States",
    "iata": "FCM",
    "icao": "KFCM"
  },
  {
    "name": "Likoma Island Airport",
    "city": "Likoma Island",
    "country": "Malawi",
    "iata": "LIX",
    "icao": "FWLK"
  },
  {
    "name": "Johnson County Executive Airport",
    "city": "Olathe",
    "country": "United States",
    "iata": "OJC",
    "icao": "KOJC"
  },
  {
    "name": "Sigiriya Air Force Base",
    "city": "Sigiriya",
    "country": "Sri Lanka",
    "iata": "GIU",
    "icao": "VCCS"
  },
  {
    "name": "Neumünster Airport",
    "city": "Neumuenster",
    "country": "Germany",
    "iata": "EUM",
    "icao": "EDHN"
  },
  {
    "name": "Tak Airport",
    "city": "Tak",
    "country": "Thailand",
    "iata": "TKT",
    "icao": "VTPT"
  },
  {
    "name": "Barrie-Orillia (Lake Simcoe Regional Airport)",
    "city": "Barrie-Orillia",
    "country": "Canada",
    "iata": "YLK",
    "icao": "CYLS"
  },
  {
    "name": "Huronia Airport",
    "city": "Midland",
    "country": "Canada",
    "iata": "YEE",
    "icao": "CYEE"
  },
  {
    "name": "Markham Airport",
    "city": "Markham",
    "country": "Canada",
    "iata": "NU8",
    "icao": "CNU8"
  },
  {
    "name": "Stanhope Municipal Airport",
    "city": "Haliburton",
    "country": "Canada",
    "iata": "ND4",
    "icao": "CND4"
  },
  {
    "name": "Lindsay Airport",
    "city": "Lindsay",
    "country": "Canada",
    "iata": "NF4",
    "icao": "CNF4"
  },
  {
    "name": "Niagara District Airport",
    "city": "Saint Catherines",
    "country": "Canada",
    "iata": "YCM",
    "icao": "CYSN"
  },
  {
    "name": "Edenvale Aerodrome",
    "city": "Edenvale",
    "country": "Canada",
    "iata": "NONE",
    "icao": "CNV8"
  },
  {
    "name": "Orillia Airport",
    "city": "Orillia",
    "country": "Canada",
    "iata": "NONE",
    "icao": "CNJ4"
  },
  {
    "name": "Holland Landing Airpark",
    "city": "Holland Landing",
    "country": "Canada",
    "iata": "NONE",
    "icao": "CLA4"
  },
  {
    "name": "Parry Sound Area Municipal Airport",
    "city": "Parry Sound",
    "country": "Canada",
    "iata": "YPD",
    "icao": "CNK4"
  },
  {
    "name": "Hanover / Saugeen Municipal Airport",
    "city": "Hanover",
    "country": "Canada",
    "iata": "NONE",
    "icao": "CYHS"
  },
  {
    "name": "Brandywine Airport",
    "city": "West Goshen Township",
    "country": "United States",
    "iata": "OQN",
    "icao": "KOQN"
  },
  {
    "name": "Manassas Regional Airport/Harry P. Davis Field",
    "city": "Manassas",
    "country": "United States",
    "iata": "MNZ",
    "icao": "KHEF"
  },
  {
    "name": "Texas Gulf Coast Regional Airport",
    "city": "Angleton",
    "country": "United States",
    "iata": "NONE",
    "icao": "KLBX"
  },
  {
    "name": "Bubovice Airport",
    "city": "Bubovice",
    "country": "Czech Republic",
    "iata": "NONE",
    "icao": "LKBU"
  },
  {
    "name": "Rakkestad Astorp Airport",
    "city": "Rakkestad",
    "country": "Norway",
    "iata": "NONE",
    "icao": "ENRK"
  },
  {
    "name": "Kastamonu Airport",
    "city": "Kastamonu",
    "country": "Turkey",
    "iata": "KFS",
    "icao": "LTAL"
  },
  {
    "name": "Elstree Airfield",
    "city": "Elstree",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGTR"
  },
  {
    "name": "Sandtoft Airfield",
    "city": "Sandtoft",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGCF"
  },
  {
    "name": "Torit Airport",
    "city": "Torit",
    "country": "South Sudan",
    "iata": "NONE",
    "icao": "HSTR"
  },
  {
    "name": "Shelby County Airport",
    "city": "Shelbyville",
    "country": "United States",
    "iata": "2H0",
    "icao": "K2H0"
  },
  {
    "name": "Gannan Xiahe Airport",
    "city": "Xiahe city",
    "country": "China",
    "iata": "GXH",
    "icao": "ZLXH"
  },
  {
    "name": "Vängsö Airport",
    "city": "Vangso",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESSZ"
  },
  {
    "name": "Comiso Airport",
    "city": "Comiso",
    "country": "Italy",
    "iata": "CIY",
    "icao": "LICB"
  },
  {
    "name": "Enumclaw Airport",
    "city": "Enumclaw",
    "country": "United States",
    "iata": "NONE",
    "icao": "WA77"
  },
  {
    "name": "Markovo Airport",
    "city": "Markovo",
    "country": "Russia",
    "iata": "KVM",
    "icao": "UHMO"
  },
  {
    "name": "Seymchan Airport",
    "city": "Seymchan",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UHMS"
  },
  {
    "name": "Zyryanka Airport",
    "city": "Zyryanka",
    "country": "Russia",
    "iata": "ZKP",
    "icao": "UESU"
  },
  {
    "name": "Susuman Airport",
    "city": "Susuman",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UHMH"
  },
  {
    "name": "Ust-Maya Airport",
    "city": "Ust-Maya",
    "country": "Russia",
    "iata": "UMS",
    "icao": "UEMU"
  },
  {
    "name": "Aldan Airport",
    "city": "Aldan",
    "country": "Russia",
    "iata": "ADH",
    "icao": "UEEA"
  },
  {
    "name": "Olyokminsk Airport",
    "city": "Olekminsk",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UEMO"
  },
  {
    "name": "Vitim Airport",
    "city": "Vitim",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UERT"
  },
  {
    "name": "Pellworm Field",
    "city": "Pellworm",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDHP"
  },
  {
    "name": "Xinyuan Nalati Airport",
    "city": "Xinyuan",
    "country": "China",
    "iata": "NLT",
    "icao": "ZWNL"
  },
  {
    "name": "Fontaine Airport",
    "city": "Belfort",
    "country": "France",
    "iata": "BOR",
    "icao": "LFSQ"
  },
  {
    "name": "Fairfield County Airport",
    "city": "Winnsboro",
    "country": "United States",
    "iata": "FDW",
    "icao": "KFDW"
  },
  {
    "name": "Obock Airport",
    "city": "Obock",
    "country": "Djibouti",
    "iata": "OBC",
    "icao": "HDOB"
  },
  {
    "name": "Tadjoura Airport",
    "city": "Tadjoura",
    "country": "Djibouti",
    "iata": "TDJ",
    "icao": "HDTJ"
  },
  {
    "name": "Santa Cruz del Quiche Airport",
    "city": "Santa Cruz des Quiche",
    "country": "Guatemala",
    "iata": "AQB",
    "icao": "MGQC"
  },
  {
    "name": "Norðfjörður Airport",
    "city": "Nordfjordur",
    "country": "Iceland",
    "iata": "NOR",
    "icao": "BINF"
  },
  {
    "name": "Bursa Airport",
    "city": "Bursa",
    "country": "Turkey",
    "iata": "BTZ",
    "icao": "LTBE"
  },
  {
    "name": "Skyhaven Airport",
    "city": "Rochester",
    "country": "United States",
    "iata": "DAW",
    "icao": "KDAW"
  },
  {
    "name": "Waris Airport",
    "city": "Waris-Papua Island",
    "country": "Indonesia",
    "iata": "WAR",
    "icao": "WAJR"
  },
  {
    "name": "Newton City-County Airport",
    "city": "Newton",
    "country": "United States",
    "iata": "EWK",
    "icao": "KEWK"
  },
  {
    "name": "La Ferté Alais Airfield",
    "city": "La Ferte Alais",
    "country": "France",
    "iata": "NONE",
    "icao": "LFFQ"
  },
  {
    "name": "Bairnsdale Airport",
    "city": "Bairnsdale",
    "country": "Australia",
    "iata": "BSJ",
    "icao": "YBNS"
  },
  {
    "name": "Taszár Air Base",
    "city": "Columbus",
    "country": "United States",
    "iata": "TZR",
    "icao": "LHTA"
  },
  {
    "name": "Fort Bridger Airport",
    "city": "Fort Bridger",
    "country": "United States",
    "iata": "FBR",
    "icao": "KFBR"
  },
  {
    "name": "Prosser Airport",
    "city": "Prosser",
    "country": "United States",
    "iata": "S40",
    "icao": "KS40"
  },
  {
    "name": "Chehalis Centralia Airport",
    "city": "Chehalis",
    "country": "United States",
    "iata": "CLS",
    "icao": "KCLS"
  },
  {
    "name": "Desert Aire Airport",
    "city": "Mattawa",
    "country": "United States",
    "iata": "M94",
    "icao": "KM94"
  },
  {
    "name": "Evanston-Uinta County Airport-Burns Field",
    "city": "Evanston",
    "country": "United States",
    "iata": "EVW",
    "icao": "KEVW"
  },
  {
    "name": "Sabetha Municipal Airport",
    "city": "Sabetha",
    "country": "United States",
    "iata": "K83",
    "icao": "KK83"
  },
  {
    "name": "Mt Pleasant Regional-Faison field",
    "city": "Mount Pleasant",
    "country": "United States",
    "iata": "LRO",
    "icao": "KLRO"
  },
  {
    "name": "Souther Field",
    "city": "Americus",
    "country": "United States",
    "iata": "NONE",
    "icao": "KACJ"
  },
  {
    "name": "Weedon Field",
    "city": "Eufala",
    "country": "United States",
    "iata": "EUF",
    "icao": "KEUF"
  },
  {
    "name": "Saluda County Airport",
    "city": "Saluda",
    "country": "United States",
    "iata": "6J4",
    "icao": "K6J4"
  },
  {
    "name": "Dare County Regional Airport",
    "city": "Manteo",
    "country": "United States",
    "iata": "MEO",
    "icao": "KMQI"
  },
  {
    "name": "Auburn Opelika Robert G. Pitts Airport",
    "city": "Auburn",
    "country": "United States",
    "iata": "AUO",
    "icao": "KAUO"
  },
  {
    "name": "Tri Cities Airport",
    "city": "Endicott",
    "country": "United States",
    "iata": "CZG",
    "icao": "KCZG"
  },
  {
    "name": "Bessemer Airport",
    "city": "Bessemer",
    "country": "United States",
    "iata": "EKY",
    "icao": "KEKY"
  },
  {
    "name": "Colorado Springs East Airport",
    "city": "Ellicott",
    "country": "United States",
    "iata": "A50",
    "icao": "KA50"
  },
  {
    "name": "Crystal Airport",
    "city": "Crystal",
    "country": "United States",
    "iata": "MIC",
    "icao": "KMIC"
  },
  {
    "name": "Clarke County Airport",
    "city": "Quitman",
    "country": "United States",
    "iata": "23M",
    "icao": "K23M"
  },
  {
    "name": "W H 'Bud' Barron Airport",
    "city": "Dublin",
    "country": "United States",
    "iata": "DBN",
    "icao": "KDBN"
  },
  {
    "name": "Pukarua Airport",
    "city": "Pukarua",
    "country": "French Polynesia",
    "iata": "PUK",
    "icao": "NTGQ"
  },
  {
    "name": "Kabale Airport",
    "city": "Kabale",
    "country": "Uganda",
    "iata": "NONE",
    "icao": "HUKB"
  },
  {
    "name": "Guatuso Airport",
    "city": "Marigot",
    "country": "France",
    "iata": "NONE",
    "icao": "MRGT"
  },
  {
    "name": "Central Bolívar Airport",
    "city": "Sevilla",
    "country": "Spain",
    "iata": "NONE",
    "icao": "SVSJ"
  },
  {
    "name": "Corvallis Municipal Airport",
    "city": "Corvallis",
    "country": "United States",
    "iata": "CVO",
    "icao": "KCVO"
  },
  {
    "name": "Tuzla Romania Airport",
    "city": "Tuzla",
    "country": "Romania",
    "iata": "NONE",
    "icao": "LRTZ"
  },
  {
    "name": "El Almendro Airport",
    "city": "Scranton",
    "country": "United States",
    "iata": "NONE",
    "icao": "SCRT"
  },
  {
    "name": "San Agustin Airport",
    "city": "Morristown",
    "country": "United States",
    "iata": "NONE",
    "icao": "MRST"
  },
  {
    "name": "Samambaia Heliport",
    "city": "Saint Denis",
    "country": "Reunion",
    "iata": "NONE",
    "icao": "SDNS"
  },
  {
    "name": "Fazenda Campo Verde Airport",
    "city": "Sihanoukville",
    "country": "Cambodia",
    "iata": "NONE",
    "icao": "SNKV"
  },
  {
    "name": "Prominent Hill Airport",
    "city": "Prominent Hill",
    "country": "Australia",
    "iata": "PXH",
    "icao": "YPMH"
  },
  {
    "name": "Cowra Airport",
    "city": "Chatsworth",
    "country": "United States",
    "iata": "CWT",
    "icao": "YCWR"
  },
  {
    "name": "Coral Bay Airport",
    "city": "Coral Bay",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YCOY"
  },
  {
    "name": "Ogden Hinckley Airport",
    "city": "Ogden",
    "country": "United States",
    "iata": "OGD",
    "icao": "KOGD"
  },
  {
    "name": "Lake Country Regional Airport",
    "city": "Clarksville",
    "country": "United Arab Emirates",
    "iata": "W63",
    "icao": "KW63"
  },
  {
    "name": "Robert S Kerr Airport",
    "city": "Poteau",
    "country": "United States",
    "iata": "RKR",
    "icao": "KRKR"
  },
  {
    "name": "Colorado Plains Regional Airport",
    "city": "Akron",
    "country": "United States",
    "iata": "AKO",
    "icao": "KAKO"
  },
  {
    "name": "Sanderson Field",
    "city": "Shelton",
    "country": "United States",
    "iata": "SHN",
    "icao": "KSHN"
  },
  {
    "name": "Napakiak Airport",
    "city": "Napakiak",
    "country": "United States",
    "iata": "WNA",
    "icao": "PANA"
  },
  {
    "name": "Napaskiak Airport",
    "city": "Napaskiak",
    "country": "United States",
    "iata": "PKA",
    "icao": "PAPK"
  },
  {
    "name": "Tok Airport",
    "city": "Tok",
    "country": "United States",
    "iata": "NONE",
    "icao": "PATJ"
  },
  {
    "name": "Bedwell Harbour Seaplane Base",
    "city": "Bedwell Harbour",
    "country": "Canada",
    "iata": "YBW",
    "icao": "CAB3"
  },
  {
    "name": "Popham Airport",
    "city": "Popham",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGHP"
  },
  {
    "name": "Causey Airport",
    "city": "Liberty",
    "country": "United States",
    "iata": "2A5",
    "icao": "K2A5"
  },
  {
    "name": "Abaco I Walker C Airport",
    "city": "Walker's Cay",
    "country": "Bahamas",
    "iata": "WKR",
    "icao": "MYAW"
  },
  {
    "name": "Black Point Airstrip",
    "city": "Black Point",
    "country": "Bahamas",
    "iata": "NONE",
    "icao": "MYEB"
  },
  {
    "name": "Bartica A Airport",
    "city": "Bartica",
    "country": "Guyana",
    "iata": "GFO",
    "icao": "SYBT"
  },
  {
    "name": "Doylestown Airport",
    "city": "Doylestown",
    "country": "United States",
    "iata": "DYL",
    "icao": "KDYL"
  },
  {
    "name": "Tingo Maria Airport",
    "city": "Tingo Maria",
    "country": "Peru",
    "iata": "TGI",
    "icao": "SPGM"
  },
  {
    "name": "Plínio Alarcom Airport",
    "city": "Tres Lagoas",
    "country": "Brazil",
    "iata": "TJL",
    "icao": "SSTL"
  },
  {
    "name": "Cacoal Airport",
    "city": "Cacoal",
    "country": "Brazil",
    "iata": "OAL",
    "icao": "SSKW"
  },
  {
    "name": "Warren Field",
    "city": "Washington",
    "country": "United States",
    "iata": "OCW",
    "icao": "KOCW"
  },
  {
    "name": "Hyde County Airport",
    "city": "Engelhard",
    "country": "United States",
    "iata": "7W6",
    "icao": "K7W6"
  },
  {
    "name": "Mocopulli Airport",
    "city": "Castro",
    "country": "Chile",
    "iata": "MHC",
    "icao": "SCPQ"
  },
  {
    "name": "Stillwater Regional Airport",
    "city": "Stillwater",
    "country": "United States",
    "iata": "NONE",
    "icao": "KSWO"
  },
  {
    "name": "Okmulgee Regional Airport",
    "city": "Okmulgee",
    "country": "United States",
    "iata": "NONE",
    "icao": "KOKM"
  },
  {
    "name": "Cushing Municipal Airport",
    "city": "Cushing",
    "country": "United States",
    "iata": "NONE",
    "icao": "KCUH"
  },
  {
    "name": "Clinton Sherman Airport",
    "city": "Clinton",
    "country": "United States",
    "iata": "NONE",
    "icao": "KCSM"
  },
  {
    "name": "Strother Field",
    "city": "Winfield",
    "country": "United States",
    "iata": "NONE",
    "icao": "KWLD"
  },
  {
    "name": "Wiley Post Airport",
    "city": "Oklahoma City",
    "country": "United States",
    "iata": "NONE",
    "icao": "KPWA"
  },
  {
    "name": "Shreveport Downtown Airport",
    "city": "Shreveport",
    "country": "United States",
    "iata": "NONE",
    "icao": "KDTN"
  },
  {
    "name": "Stephenville Clark Regional Airport",
    "city": "Stephenville",
    "country": "United States",
    "iata": "NONE",
    "icao": "KSEP"
  },
  {
    "name": "Perry Municipal Airport",
    "city": "Perry",
    "country": "United States",
    "iata": "NONE",
    "icao": "KF22"
  },
  {
    "name": "Hamilton Municipal Airport",
    "city": "Hamilton",
    "country": "United States",
    "iata": "NONE",
    "icao": "KMNZ"
  },
  {
    "name": "Ada Municipal Airport",
    "city": "Ada",
    "country": "United States",
    "iata": "NONE",
    "icao": "KADH"
  },
  {
    "name": "Mesquite Metro Airport",
    "city": "Misquite",
    "country": "United States",
    "iata": "NONE",
    "icao": "KHQZ"
  },
  {
    "name": "Denton Municipal Airport",
    "city": "Denton",
    "country": "United States",
    "iata": "NONE",
    "icao": "KDTO"
  },
  {
    "name": "Austin Executive Airport",
    "city": "Austin",
    "country": "United States",
    "iata": "NONE",
    "icao": "KEDC"
  },
  {
    "name": "Lago Vista Tx Rusty Allen Airport",
    "city": "Lago Vista",
    "country": "United States",
    "iata": "NONE",
    "icao": "KRYW"
  },
  {
    "name": "Brenham Municipal Airport",
    "city": "Brenham",
    "country": "United States",
    "iata": "NONE",
    "icao": "K11R"
  },
  {
    "name": "Lakeway Airpark",
    "city": "Lakeway",
    "country": "United States",
    "iata": "NONE",
    "icao": "K3R9"
  },
  {
    "name": "Iraan Municipal Airport",
    "city": "Iraan",
    "country": "United States",
    "iata": "NONE",
    "icao": "K2F0"
  },
  {
    "name": "Kestrel Airpark",
    "city": "San Antonio",
    "country": "United States",
    "iata": "NONE",
    "icao": "K1T7"
  },
  {
    "name": "Elliot Lake Municipal Airport",
    "city": "ELLIOT LAKE",
    "country": "Canada",
    "iata": "YEL",
    "icao": "CYEL"
  },
  {
    "name": "Wilkes County Airport",
    "city": "North Wilkesboro",
    "country": "United States",
    "iata": "UKF",
    "icao": "KUKF"
  },
  {
    "name": "Charleston Executive Airport",
    "city": "Charleston",
    "country": "United States",
    "iata": "JZI",
    "icao": "KJZI"
  },
  {
    "name": "Danville Regional Airport",
    "city": "Danville",
    "country": "United States",
    "iata": "DAN",
    "icao": "KDAN"
  },
  {
    "name": "Brookneal/Campbell County Airport",
    "city": "Brookneal",
    "country": "United States",
    "iata": "0V4",
    "icao": "K0V4"
  },
  {
    "name": "Yerbogachen Airport",
    "city": "Yerbogachen",
    "country": "Russia",
    "iata": "ERG",
    "icao": "UIKE"
  },
  {
    "name": "Cheraw Municipal Airport/Lynch Bellinger Field",
    "city": "Cheraw",
    "country": "United States",
    "iata": "CQW",
    "icao": "KCQW"
  },
  {
    "name": "Wauchula Municipal Airport",
    "city": "Wuchula",
    "country": "United States",
    "iata": "NONE",
    "icao": "KCHN"
  },
  {
    "name": "Lilydale Airport",
    "city": "Lilydale",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YLIL"
  },
  {
    "name": "Beni Mellal Airport",
    "city": "Beni Mellal",
    "country": "Morocco",
    "iata": "BEM",
    "icao": "GMMD"
  },
  {
    "name": "Şırnak Şerafettin Elçi Airport",
    "city": "Cizre",
    "country": "Turkey",
    "iata": "NKT",
    "icao": "LTCV"
  },
  {
    "name": "Suntar Airport",
    "city": "Suntar",
    "country": "Russia",
    "iata": "SUY",
    "icao": "UENS"
  },
  {
    "name": "Tazadit Airport",
    "city": "Zouerat",
    "country": "Mauritania",
    "iata": "OUZ",
    "icao": "GQPZ"
  },
  {
    "name": "Asaba International Airport",
    "city": "Asaba",
    "country": "Nigeria",
    "iata": "NONE",
    "icao": "DNAS"
  },
  {
    "name": "Akwa Ibom International Airport",
    "city": "Uyo",
    "country": "Nigeria",
    "iata": "QUO",
    "icao": "DNAI"
  },
  {
    "name": "Kasama Airport",
    "city": "Kasama",
    "country": "Zambia",
    "iata": "KAA",
    "icao": "FLKS"
  },
  {
    "name": "Mbeya Airport",
    "city": "Mbeya",
    "country": "Tanzania",
    "iata": "MBI",
    "icao": "HTMB"
  },
  {
    "name": "Mpanda Airport",
    "city": "Mpanda",
    "country": "Tanzania",
    "iata": "NONE",
    "icao": "HTMP"
  },
  {
    "name": "Songea Airport",
    "city": "Songea",
    "country": "Tanzania",
    "iata": "SGX",
    "icao": "HTSO"
  },
  {
    "name": "Morogoro Airport",
    "city": "Morogoro",
    "country": "Tanzania",
    "iata": "NONE",
    "icao": "HTMG"
  },
  {
    "name": "Anshan Air Base",
    "city": "Anshan",
    "country": "China",
    "iata": "AOG",
    "icao": "ZYAS"
  },
  {
    "name": "Zunyi Xinzhou Airport",
    "city": "Zunyi",
    "country": "China",
    "iata": "ZYI",
    "icao": "ZUZY"
  },
  {
    "name": "Conway Horry County Airport",
    "city": "Conway",
    "country": "United States",
    "iata": "HYW",
    "icao": "KHYW"
  },
  {
    "name": "Lindu Airport",
    "city": "Yinchun",
    "country": "China",
    "iata": "LDS",
    "icao": "ZYLD"
  },
  {
    "name": "Anshun Huangguoshu Airport",
    "city": "Anshun",
    "country": "China",
    "iata": "AVA",
    "icao": "ZUAS"
  },
  {
    "name": "Sikasso Airport",
    "city": "Sikasso",
    "country": "Mali",
    "iata": "KSS",
    "icao": "GASK"
  },
  {
    "name": "Brisbane West Wellcamp Airport",
    "city": "Toowoomba",
    "country": "Australia",
    "iata": "WTB",
    "icao": "YBWW"
  },
  {
    "name": "Tonghua Sanyuanpu Airport",
    "city": "Tonghua",
    "country": "China",
    "iata": "TNH",
    "icao": "ZYTN"
  },
  {
    "name": "Suzhou Guangfu Airport",
    "city": "Suzhou",
    "country": "China",
    "iata": "SZV",
    "icao": "ZSSZ"
  },
  {
    "name": "City Airport Manchester",
    "city": "Manchester",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGCB"
  },
  {
    "name": "Sleap Airport",
    "city": "Shrewsbury",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGCV"
  },
  {
    "name": "Tatenhill Airfield",
    "city": "Burton-on-Trent",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGBM"
  },
  {
    "name": "Full Sutton Airfield",
    "city": "York",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGNU"
  },
  {
    "name": "Sherburn-In-Elmet Airfield",
    "city": "Leeds",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGCJ"
  },
  {
    "name": "Beringin Airport",
    "city": "Muara Teweh",
    "country": "Indonesia",
    "iata": "NONE",
    "icao": "WAOM"
  },
  {
    "name": "Mulia Airport",
    "city": "Mulia",
    "country": "Indonesia",
    "iata": "LII",
    "icao": "WAJM"
  },
  {
    "name": "Stenkol Airport",
    "city": "Bintuni",
    "country": "Indonesia",
    "iata": "NTI",
    "icao": "WASB"
  },
  {
    "name": "Wasior Airport",
    "city": "Wasior",
    "country": "Indonesia",
    "iata": "WSR",
    "icao": "WASW"
  },
  {
    "name": "Silangit Airport",
    "city": "Siborong-Borong",
    "country": "Indonesia",
    "iata": "DTB",
    "icao": "WIMN"
  },
  {
    "name": "Lasikin Airport",
    "city": "Sinabang",
    "country": "Indonesia",
    "iata": "SSV",
    "icao": "WITG"
  },
  {
    "name": "Seunagan Airport",
    "city": "Nagan Raya",
    "country": "Indonesia",
    "iata": "MEQ",
    "icao": "WITC"
  },
  {
    "name": "Betoambari Airport",
    "city": "Bau-Bau",
    "country": "Indonesia",
    "iata": "BUW",
    "icao": "WAWB"
  },
  {
    "name": "Kao Airport",
    "city": "Kao",
    "country": "Indonesia",
    "iata": "KAZ",
    "icao": "WAMK"
  },
  {
    "name": "Melangguane Airport",
    "city": "Melonguane",
    "country": "Indonesia",
    "iata": "MNA",
    "icao": "WAMN"
  },
  {
    "name": "Sanggata/Sangkimah Airport",
    "city": "Sanggata",
    "country": "Indonesia",
    "iata": "SGQ",
    "icao": "WRLA"
  },
  {
    "name": "Muara Bungo Airport",
    "city": "Muara Bungo",
    "country": "Indonesia",
    "iata": "NONE",
    "icao": "WIPI"
  },
  {
    "name": "Selayar/Aroepala Airport",
    "city": "Selayar",
    "country": "Indonesia",
    "iata": "NONE",
    "icao": "WAWH"
  },
  {
    "name": "Illaga Airport",
    "city": "Illaga",
    "country": "Indonesia",
    "iata": "NONE",
    "icao": "WABL"
  },
  {
    "name": "Oksibil Airport",
    "city": "Oksibil",
    "country": "Indonesia",
    "iata": "OKL",
    "icao": "WAJO"
  },
  {
    "name": "Kokonau Airport",
    "city": "Kokonau",
    "country": "Indonesia",
    "iata": "KOX",
    "icao": "WABN"
  },
  {
    "name": "Clermont Airport",
    "city": "Clermont",
    "country": "Australia",
    "iata": "CMQ",
    "icao": "YCMT"
  },
  {
    "name": "Warrnambool Airport",
    "city": "Warrnambool",
    "country": "Australia",
    "iata": "WMB",
    "icao": "YWBL"
  },
  {
    "name": "Richmond Airport",
    "city": "Richmond",
    "country": "Australia",
    "iata": "RCM",
    "icao": "YRMD"
  },
  {
    "name": "RAAF Base Curtin",
    "city": "Derby",
    "country": "Australia",
    "iata": "DCN",
    "icao": "YCIN"
  },
  {
    "name": "Kualanamu International Airport",
    "city": "Medan",
    "country": "Indonesia",
    "iata": "KNO",
    "icao": "WIMM"
  },
  {
    "name": "Gratiot Community Airport",
    "city": "Kamloops",
    "country": "Canada",
    "iata": "NONE",
    "icao": "KAMN"
  },
  {
    "name": "Asheboro Regional Airport",
    "city": "Asheboro",
    "country": "United States",
    "iata": "HBI",
    "icao": "KHBI"
  },
  {
    "name": "Seosan Air Base",
    "city": "Seosan",
    "country": "South Korea",
    "iata": "NONE",
    "icao": "RKTP"
  },
  {
    "name": "Henderson Field",
    "city": "Wallace",
    "country": "United States",
    "iata": "NONE",
    "icao": "KACZ"
  },
  {
    "name": "Emporia Greensville Regional Airport",
    "city": "Emporia",
    "country": "United States",
    "iata": "EMV",
    "icao": "KEMV"
  },
  {
    "name": "El Monte Airport",
    "city": "El Monte",
    "country": "United States",
    "iata": "EMT",
    "icao": "KEMT"
  },
  {
    "name": "Farah Airport",
    "city": "Farah",
    "country": "Afghanistan",
    "iata": "FAH",
    "icao": "OAFR"
  },
  {
    "name": "Pasighat Airport",
    "city": "Pasighat",
    "country": "India",
    "iata": "IXT",
    "icao": "VEPG"
  },
  {
    "name": "Kee Field",
    "city": "Pineville",
    "country": "United States",
    "iata": "I16",
    "icao": "KI16"
  },
  {
    "name": "Kramatorsk Airport",
    "city": "Kramatorsk",
    "country": "Ukraine",
    "iata": "KRQ",
    "icao": "UKCK"
  },
  {
    "name": "Kautokeino Air Base",
    "city": "Kautokeino",
    "country": "Norway",
    "iata": "NONE",
    "icao": "ENKA"
  },
  {
    "name": "Lille/Marcq-en-Baroeul Airport",
    "city": "Marcq En Baroeul",
    "country": "France",
    "iata": "NONE",
    "icao": "LFQO"
  },
  {
    "name": "Kawass Airport",
    "city": "Kamsar",
    "country": "Guinea",
    "iata": "NONE",
    "icao": "GUKR"
  },
  {
    "name": "Stinson Municipal Airport",
    "city": "Stinson",
    "country": "United States",
    "iata": "SSF",
    "icao": "KSSF"
  },
  {
    "name": "Sallisaw Municipal Airport",
    "city": "Sallisaw",
    "country": "United States",
    "iata": "JSV",
    "icao": "KJSV"
  },
  {
    "name": "Jasper County Airport-Bell Field",
    "city": "Jasper",
    "country": "United States",
    "iata": "JAS",
    "icao": "KJAS"
  },
  {
    "name": "El Dorado Springs Memorial Airport",
    "city": "El dorado springs",
    "country": "United States",
    "iata": "87K",
    "icao": "K87K"
  },
  {
    "name": "Marfa Municipal Airport",
    "city": "Marfa",
    "country": "United States",
    "iata": "MRF",
    "icao": "KMRF"
  },
  {
    "name": "Alpine Casparis Municipal Airport",
    "city": "Alpine",
    "country": "United States",
    "iata": "E38",
    "icao": "KE38"
  },
  {
    "name": "Bubaque Airport",
    "city": "Bubaque",
    "country": "Guinea-Bissau",
    "iata": "BQE",
    "icao": "GGBU"
  },
  {
    "name": "Chichen Itza International Airport",
    "city": "Chichen Itza",
    "country": "Mexico",
    "iata": "CZA",
    "icao": "MMCT"
  },
  {
    "name": "Bunbury Airport",
    "city": "Bunbury",
    "country": "Australia",
    "iata": "BUY",
    "icao": "YBUN"
  },
  {
    "name": "Cable Airport",
    "city": "Upland",
    "country": "United States",
    "iata": "CCB",
    "icao": "KCCB"
  },
  {
    "name": "Mount Sterling Montgomery County Airport",
    "city": "Mount Sterling",
    "country": "United States",
    "iata": "IOB",
    "icao": "KIOB"
  },
  {
    "name": "Elkhart Municipal Airport",
    "city": "Elkhart",
    "country": "United States",
    "iata": "EKI",
    "icao": "KEKM"
  },
  {
    "name": "Nappanee Municipal Airport",
    "city": "Nappanee ",
    "country": "United States",
    "iata": "C03",
    "icao": "KC03"
  },
  {
    "name": "Jim Hamilton L.B. Owens Airport",
    "city": "Columbia",
    "country": "United States",
    "iata": "CUB",
    "icao": "KCUB"
  },
  {
    "name": "Grove Municipal Airport",
    "city": "Grove",
    "country": "United States",
    "iata": "GMJ",
    "icao": "KGMJ"
  },
  {
    "name": "Mc Pherson Airport",
    "city": "Mc Pherson",
    "country": "United States",
    "iata": "MPR",
    "icao": "KMPR"
  },
  {
    "name": "Donaldson Center Airport",
    "city": "Greenville",
    "country": "United States",
    "iata": "GYH",
    "icao": "KGYH"
  },
  {
    "name": "Perry Houston County Airport",
    "city": "Perry",
    "country": "United States",
    "iata": "PXE",
    "icao": "KPXE"
  },
  {
    "name": "Hartsville Regional Airport",
    "city": "Hartsville",
    "country": "United States",
    "iata": "HVS",
    "icao": "KHVS"
  },
  {
    "name": "Horace Williams Airport",
    "city": "Chapel Hill",
    "country": "United States",
    "iata": "IGX",
    "icao": "KIGX"
  },
  {
    "name": "San Cristobal de las Casas Airport",
    "city": "San Cristobal de las Casas",
    "country": "Mexico",
    "iata": "SZT",
    "icao": "MMSC"
  },
  {
    "name": "Dunnville Airport",
    "city": "Dunnville",
    "country": "Canada",
    "iata": "DU9",
    "icao": "CDU9"
  },
  {
    "name": "Brunswick County Airport",
    "city": "Oak Island",
    "country": "United States",
    "iata": "SUT",
    "icao": "KSUT"
  },
  {
    "name": "Chesterfield County Airport",
    "city": "Richmond",
    "country": "United States",
    "iata": "FCI",
    "icao": "KFCI"
  },
  {
    "name": "Atherton Airport",
    "city": "Atherton",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YATN"
  },
  {
    "name": "Bagdarin Airport",
    "city": "Bagdarin",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UIUB"
  },
  {
    "name": "Scarlett Martinez International Airport",
    "city": "Rio Hato",
    "country": "Panama",
    "iata": "NONE",
    "icao": "MPRH"
  },
  {
    "name": "Henderson Oxford Airport",
    "city": "Oxford",
    "country": "United States",
    "iata": "HNZ",
    "icao": "KHNZ"
  },
  {
    "name": "Leesburg International Airport",
    "city": "Leesburg",
    "country": "United States",
    "iata": "LEE",
    "icao": "KLEE"
  },
  {
    "name": "Semyazino Airport",
    "city": "Vladimir",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UUBL"
  },
  {
    "name": "Witberg Tswalu Airport",
    "city": "Dedeben",
    "country": "South Africa",
    "iata": "NONE",
    "icao": "FATW"
  },
  {
    "name": "Mana Pools Airport",
    "city": "Mana Pools",
    "country": "Zimbabwe",
    "iata": "NONE",
    "icao": "FVMN"
  },
  {
    "name": "Pouso Alegre Airport",
    "city": "Pouso Alegre",
    "country": "Brazil",
    "iata": "PPY",
    "icao": "SNZA"
  },
  {
    "name": "Brigadeiro Cabral Airport",
    "city": "Divinopolis",
    "country": "Brazil",
    "iata": "DIQ",
    "icao": "SNDV"
  },
  {
    "name": "Yeysk Airport",
    "city": "Eysk",
    "country": "Russia",
    "iata": "NONE",
    "icao": "URKE"
  },
  {
    "name": "Berdyansk Airport",
    "city": "Berdyansk",
    "country": "Ukraine",
    "iata": "ERD",
    "icao": "UKDB"
  },
  {
    "name": "Erenhot Saiwusu International Airport",
    "city": "Erenhot",
    "country": "China",
    "iata": "ERL",
    "icao": "ZBER"
  },
  {
    "name": "Shobdon Aerodrome",
    "city": "Shobdon",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGBS"
  },
  {
    "name": "Chino Airport",
    "city": "Chino",
    "country": "United States",
    "iata": "CNO",
    "icao": "KCNO"
  },
  {
    "name": "Kamigoto Airport",
    "city": "Shin-kamigoto",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJDK"
  },
  {
    "name": "Ojika Airport",
    "city": "Odika",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJDO"
  },
  {
    "name": "Chofu Airport",
    "city": "Tokyo",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJTF"
  },
  {
    "name": "Hateruma Airport",
    "city": "Taketomi",
    "country": "Japan",
    "iata": "HTR",
    "icao": "RORH"
  },
  {
    "name": "Madison County Airport",
    "city": "London",
    "country": "United States",
    "iata": "UYF",
    "icao": "KUYF"
  },
  {
    "name": "Las Brujas Airport",
    "city": "Cayo Santa Maria",
    "country": "Cuba",
    "iata": "BWW",
    "icao": "MUBR"
  },
  {
    "name": "Digby (General Hospital) Heliport",
    "city": "Tremblay-en-France",
    "country": "France",
    "iata": "NONE",
    "icao": "CDG2"
  },
  {
    "name": "Thun Airport",
    "city": "Thun",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSZW"
  },
  {
    "name": "Lavrentiya Airport",
    "city": "Lavrentiya",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UHML"
  },
  {
    "name": "Paso Robles Municipal Airport",
    "city": "Paso Robles",
    "country": "United States",
    "iata": "PRB",
    "icao": "KPRB"
  },
  {
    "name": "N 104 Helipad",
    "city": "Ulleung",
    "country": "South Korea",
    "iata": "NONE",
    "icao": "RKDU"
  },
  {
    "name": "Kymi Airport",
    "city": "Kotka",
    "country": "Finland",
    "iata": "NONE",
    "icao": "EFKY"
  },
  {
    "name": "Half Moon Bay Airport",
    "city": "Half Moon Bay",
    "country": "United States",
    "iata": "HAF",
    "icao": "KHAF"
  },
  {
    "name": "Hechi Jinchengjiang Airport",
    "city": "Hechi",
    "country": "China",
    "iata": "HCJ",
    "icao": "ZGHC"
  },
  {
    "name": "Kadina Airport",
    "city": "Kadina",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YKDI"
  },
  {
    "name": "General WM J Fox Airfield",
    "city": "Lancaster",
    "country": "United States",
    "iata": "WJF",
    "icao": "KWJF"
  },
  {
    "name": "Coondewanna Airport",
    "city": "Coondewanna",
    "country": "Australia",
    "iata": "CJF",
    "icao": "YCWA"
  },
  {
    "name": "Guarapari Airport",
    "city": "Guarapari",
    "country": "Brazil",
    "iata": "GUZ",
    "icao": "SNGA"
  },
  {
    "name": "Ubatuba Airport",
    "city": "Ubatuba",
    "country": "Brazil",
    "iata": "UBT",
    "icao": "SDUB"
  },
  {
    "name": "Ali Air Base",
    "city": "Nasiriyah",
    "country": "Iraq",
    "iata": "NONE",
    "icao": "ORTL"
  },
  {
    "name": "Ota Air Base",
    "city": "Ota",
    "country": "Portugal",
    "iata": "NONE",
    "icao": "LPOT"
  },
  {
    "name": "Borroloola Airport",
    "city": "Borroloola",
    "country": "Australia",
    "iata": "BOX",
    "icao": "YBRL"
  },
  {
    "name": "Elsenthal Grafe Airport",
    "city": "Elsenthal",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDNF"
  },
  {
    "name": "Newtownards Airport",
    "city": "Newtownards",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGAD"
  },
  {
    "name": "Lashenden (Headcorn) Airfield",
    "city": "Headcorn",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGKH"
  },
  {
    "name": "Panshanger Aerodrome",
    "city": "Panshanger",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGLG"
  },
  {
    "name": "Thurrock Airfield",
    "city": "Thurrock",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGMT"
  },
  {
    "name": "Stapleford Aerodrome",
    "city": "Stapleford",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGSG"
  },
  {
    "name": "HAL Airport",
    "city": "Bangalore",
    "country": "India",
    "iata": "NONE",
    "icao": "VOBG"
  },
  {
    "name": "Chichester/Goodwood Airport",
    "city": "Goodwood",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGHR"
  },
  {
    "name": "Omarama Glider Airport",
    "city": "Omarama",
    "country": "New Zealand",
    "iata": "NONE",
    "icao": "NZOA"
  },
  {
    "name": "Haast Aerodrome",
    "city": "Haast",
    "country": "New Zealand",
    "iata": "NONE",
    "icao": "NZHT"
  },
  {
    "name": "Meschede-Schüren Airport",
    "city": "Meschede",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDKM"
  },
  {
    "name": "Morro da Urca Heliport",
    "city": "Rio de Janeiro",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SDHU"
  },
  {
    "name": "Dongji Aiport",
    "city": "Fuyuan",
    "country": "China",
    "iata": "FYJ",
    "icao": "ZYFY"
  },
  {
    "name": "Skúvoy Heliport",
    "city": "Skuvoy",
    "country": "Faroe Islands",
    "iata": "NONE",
    "icao": "EKSY"
  },
  {
    "name": "Stóra Dímun Heliport",
    "city": "Stora Dimun",
    "country": "Faroe Islands",
    "iata": "NONE",
    "icao": "EKSR"
  },
  {
    "name": "Frooba Heliport",
    "city": "Frooba",
    "country": "Faroe Islands",
    "iata": "NONE",
    "icao": "EKFA"
  },
  {
    "name": "Person County Airport",
    "city": "Roxboro",
    "country": "United States",
    "iata": "TDF",
    "icao": "KTDF"
  },
  {
    "name": "Zulu Inyala Airport",
    "city": "Phinda",
    "country": "South Africa",
    "iata": "PZL",
    "icao": "FADQ"
  },
  {
    "name": "Kaili Airport",
    "city": "Kaili",
    "country": "China",
    "iata": "KJH",
    "icao": "ZUKJ"
  },
  {
    "name": "Shennongjia Hongping Airport",
    "city": "Shennongjia",
    "country": "China",
    "iata": "HPG",
    "icao": "ZHSN"
  },
  {
    "name": "Arxan Yi'ershi Airport",
    "city": "Arxan",
    "country": "China",
    "iata": "YIE",
    "icao": "ZBES"
  },
  {
    "name": "Hengyang Nanyue Airport",
    "city": "Hengyang",
    "country": "China",
    "iata": "HNY",
    "icao": "ZGHY"
  },
  {
    "name": "Wonsan Kalma International Airport",
    "city": "Wonsan",
    "country": "North Korea",
    "iata": "WOS",
    "icao": "ZKWS"
  },
  {
    "name": "Mestia Queen Tamar Airport",
    "city": "Mestia",
    "country": "Georgia",
    "iata": "NONE",
    "icao": "UGMS"
  },
  {
    "name": "Magas Airport",
    "city": "Magas",
    "country": "Russia",
    "iata": "IGT",
    "icao": "URMS"
  },
  {
    "name": "Talladega Municipal Airport",
    "city": "Talladega",
    "country": "United States",
    "iata": "ASN",
    "icao": "KASN"
  },
  {
    "name": "Greenville Downtown Airport",
    "city": "Greenville",
    "country": "United States",
    "iata": "GMU",
    "icao": "KGMU"
  },
  {
    "name": "Mankato Regional Airport",
    "city": "Mankato",
    "country": "United States",
    "iata": "MKT",
    "icao": "KMKT"
  },
  {
    "name": "Captain Auguste George Airport",
    "city": "Anegada",
    "country": "British Virgin Islands",
    "iata": "NGD",
    "icao": "TUPA"
  },
  {
    "name": "Troy Municipal Airport",
    "city": "Troy",
    "country": "United States",
    "iata": "TOI",
    "icao": "KTOI"
  },
  {
    "name": "Merkel Field Sylacauga Municipal Airport",
    "city": "Sylacauga",
    "country": "United States",
    "iata": "SCD",
    "icao": "KSCD"
  },
  {
    "name": "Enterprise Municipal Airport",
    "city": "Enterprise",
    "country": "United States",
    "iata": "EDN",
    "icao": "KEDN"
  },
  {
    "name": "Ryan Field",
    "city": "Tucson",
    "country": "United States",
    "iata": "NONE",
    "icao": "KRYN"
  },
  {
    "name": "Thomas C Russell Field",
    "city": "Alexander City",
    "country": "United States",
    "iata": "ALX",
    "icao": "KALX"
  },
  {
    "name": "Port Keats Airport",
    "city": "Wadeye",
    "country": "Australia",
    "iata": "PKT",
    "icao": "YPKT"
  },
  {
    "name": "Garden Point Airport",
    "city": "Pirlangimpi",
    "country": "Australia",
    "iata": "GPN",
    "icao": "YGPT"
  },
  {
    "name": "Stade Airport",
    "city": "Stade",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDHS"
  },
  {
    "name": "Meriden Markham Municipal Airport",
    "city": "Meriden",
    "country": "United States",
    "iata": "NONE",
    "icao": "KMMK"
  },
  {
    "name": "Flinders Island Airport",
    "city": "Elliston",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YFLS"
  },
  {
    "name": "Luzern-Beromunster Airport",
    "city": "Lucerne",
    "country": "Switzerland",
    "iata": "NONE",
    "icao": "LSZO"
  },
  {
    "name": "La Grand'combe Airport",
    "city": "La Grand'Combe",
    "country": "France",
    "iata": "NONE",
    "icao": "LFTN"
  },
  {
    "name": "Fort Mackay / Horizon Airport",
    "city": "Wood Buffalo",
    "country": "Canada",
    "iata": "HZP",
    "icao": "CYNR"
  },
  {
    "name": "Canmore Municipal Heliport",
    "city": "Canmore",
    "country": "Canada",
    "iata": "NONE",
    "icao": "CEW9"
  },
  {
    "name": "Krasnokamensk Airport",
    "city": "Krasnokamensk",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UIAE"
  },
  {
    "name": "Ridgely Airpark",
    "city": "Ridgely",
    "country": "United States",
    "iata": "NONE",
    "icao": "KRJD"
  },
  {
    "name": "New Castle Henry Co. Municipal Airport",
    "city": "New Castle",
    "country": "United States",
    "iata": "UWL",
    "icao": "KUWL"
  },
  {
    "name": "Scott City Municipal Airport",
    "city": "Scott City",
    "country": "United States",
    "iata": "TQK",
    "icao": "KTQK"
  },
  {
    "name": "Brewster Field",
    "city": "Holdredge",
    "country": "United States",
    "iata": "HDE",
    "icao": "KHDE"
  },
  {
    "name": "Pratt Regional Airport",
    "city": "Pratt",
    "country": "United States",
    "iata": "PTT",
    "icao": "KPTT"
  },
  {
    "name": "Yubileyniy Airfield",
    "city": "Baikonur",
    "country": "Kazakhstan",
    "iata": "NONE",
    "icao": "UAON"
  },
  {
    "name": "Wahoo Municipal Airport",
    "city": "Wahoo",
    "country": "United States",
    "iata": "AHQ",
    "icao": "KAHQ"
  },
  {
    "name": "Jim Kelly Field",
    "city": "Lexington",
    "country": "United States",
    "iata": "LXN",
    "icao": "KLXN"
  },
  {
    "name": "Sublette Municipal Airport",
    "city": "Sublette",
    "country": "United States",
    "iata": "19S",
    "icao": "K19S"
  },
  {
    "name": "Council Bluffs Municipal Airport",
    "city": "Council Bluffs",
    "country": "United States",
    "iata": "CBF",
    "icao": "KCBF"
  },
  {
    "name": "Kokomo Municipal Airport",
    "city": "Kokomo",
    "country": "United States",
    "iata": "OKK",
    "icao": "KOKK"
  },
  {
    "name": "Neodesha Municipal Airport",
    "city": "Neodesha",
    "country": "United States",
    "iata": "2K7",
    "icao": "K2K7"
  },
  {
    "name": "King Ranch Airport",
    "city": "Sutton",
    "country": "United States",
    "iata": "NONE",
    "icao": "AK59"
  },
  {
    "name": "Elkhart Morton County Airport",
    "city": "Elkhart",
    "country": "United States",
    "iata": "EHA",
    "icao": "KEHA"
  },
  {
    "name": "Front Range Airport",
    "city": "Denver",
    "country": "United States",
    "iata": "FTG",
    "icao": "KFTG"
  },
  {
    "name": "Galesburg Municipal Airport",
    "city": "Galesburg",
    "country": "United States",
    "iata": "GBG",
    "icao": "KGBG"
  },
  {
    "name": "Guymon Municipal Airport",
    "city": "Guymon",
    "country": "United States",
    "iata": "GUY",
    "icao": "KGUY"
  },
  {
    "name": "Meade Municipal Airport",
    "city": "Meade",
    "country": "United States",
    "iata": "MEJ",
    "icao": "KMEJ"
  },
  {
    "name": "Turkey Mountain Estates Airport",
    "city": "Shell Knob",
    "country": "United States",
    "iata": "NONE",
    "icao": "MO00"
  },
  {
    "name": "Ulysses Airport",
    "city": "Ulysses",
    "country": "United States",
    "iata": "ULS",
    "icao": "KULS"
  },
  {
    "name": "Flagler Aerial Spraying Inc Airport",
    "city": "Flagler",
    "country": "United States",
    "iata": "NONE",
    "icao": "CO00"
  },
  {
    "name": "Independence Municipal Airport",
    "city": "Independence",
    "country": "United States",
    "iata": "IDP",
    "icao": "KIDP"
  },
  {
    "name": "Augusta Municipal Airport",
    "city": "Augusta",
    "country": "United States",
    "iata": "3AU",
    "icao": "K3AU"
  },
  {
    "name": "Larned Pawnee County Airport",
    "city": "Larned",
    "country": "United States",
    "iata": "LQR",
    "icao": "KLQR"
  },
  {
    "name": "Lampasas Airport",
    "city": "Lampasas",
    "country": "United States",
    "iata": "LZZ",
    "icao": "KLZZ"
  },
  {
    "name": "Bay City Municipal Airport",
    "city": "Bay City",
    "country": "United States",
    "iata": "BYY",
    "icao": "KBYY"
  },
  {
    "name": "Cox Field",
    "city": "Paris",
    "country": "United States",
    "iata": "PRX",
    "icao": "KPRX"
  },
  {
    "name": "Coffeyville Municipal Airport",
    "city": "Coffeyville",
    "country": "United States",
    "iata": "CFV",
    "icao": "KCFV"
  },
  {
    "name": "The Farm Airport",
    "city": "Summit",
    "country": "United States",
    "iata": "NONE",
    "icao": "24SC"
  },
  {
    "name": "Greeley–Weld County Airport",
    "city": "Greeley",
    "country": "United States",
    "iata": "GXY",
    "icao": "KGXY"
  },
  {
    "name": "General Dewitt Spain Airport",
    "city": "Memphis",
    "country": "United States",
    "iata": "NONE",
    "icao": "KM01"
  },
  {
    "name": "Oryol Yuzhny Airport",
    "city": "Oakley",
    "country": "United States",
    "iata": "OEL",
    "icao": "UUOR"
  },
  {
    "name": "Fremont Municipal Airport",
    "city": "Fremont",
    "country": "United States",
    "iata": "FET",
    "icao": "KFET"
  },
  {
    "name": "La Grande/Union County Airport",
    "city": "La Grande",
    "country": "United States",
    "iata": "LGD",
    "icao": "KLGD"
  },
  {
    "name": "Szczytno-Szymany International Airport",
    "city": "Szczytno-Szymany",
    "country": "Poland",
    "iata": "SZY",
    "icao": "EPSY"
  },
  {
    "name": "Pocono Mountains Municipal Airport",
    "city": "Mount Pocono",
    "country": "United States",
    "iata": "MPO",
    "icao": "KMPO"
  },
  {
    "name": "Quakertown Airport",
    "city": "Quakertown",
    "country": "United States",
    "iata": "UKT",
    "icao": "KUKT"
  },
  {
    "name": "Banff Airport",
    "city": "Banff",
    "country": "Canada",
    "iata": "YBA",
    "icao": "CYBA"
  },
  {
    "name": "Banning Municipal Airport",
    "city": "Banning",
    "country": "United States",
    "iata": "BNG",
    "icao": "KBNG"
  },
  {
    "name": "Gießen-Lützellinden Airport",
    "city": "Giessen",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDFL"
  },
  {
    "name": "Tököl Airport",
    "city": "Budapest",
    "country": "Hungary",
    "iata": "NONE",
    "icao": "LHTL"
  },
  {
    "name": "Karl Stefan Memorial Airport",
    "city": "Norfolk  Nebraska",
    "country": "United States",
    "iata": "OFK",
    "icao": "KOFK"
  },
  {
    "name": "Kotido Airport",
    "city": "Kotido",
    "country": "Uganda",
    "iata": "NONE",
    "icao": "HUKO"
  },
  {
    "name": "Kajjansi Airfield",
    "city": "Kampala",
    "country": "Uganda",
    "iata": "NONE",
    "icao": "HUKJ"
  },
  {
    "name": "Arlington Municipal Airport",
    "city": "Arlington",
    "country": "United States",
    "iata": "AWO",
    "icao": "KAWO"
  },
  {
    "name": "Paracatu Airport",
    "city": "Paracatu",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SNZR"
  },
  {
    "name": "Conselheiro Lafaiete Airport",
    "city": "Conselheiro Lafaiete",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SNKF"
  },
  {
    "name": "Janaúba Airport",
    "city": "Janauba",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SNAP"
  },
  {
    "name": "Juscelino Kubitscheck Airport",
    "city": "Teofilo Otoni",
    "country": "Brazil",
    "iata": "TFL",
    "icao": "SNTO"
  },
  {
    "name": "Cristiano Ferreira Varella Airport",
    "city": "Muriae",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SNBM"
  },
  {
    "name": "Peter O Knight Airport",
    "city": "Tampa",
    "country": "United States",
    "iata": "TPF",
    "icao": "KTPF"
  },
  {
    "name": "Lure Malbouhans Air Base",
    "city": "Malbouhans",
    "country": "France",
    "iata": "NONE",
    "icao": "LFYL"
  },
  {
    "name": "Parati Airport",
    "city": "Paraty",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SDTK"
  },
  {
    "name": "Umberto Modiano Airport",
    "city": "Buzios",
    "country": "Brazil",
    "iata": "BZC",
    "icao": "SBBZ"
  },
  {
    "name": "Angra dos Reis Airport",
    "city": "Angra dos Reis",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SDAG"
  },
  {
    "name": "Itaperuna Airport",
    "city": "Itaperuna",
    "country": "Brazil",
    "iata": "ITP",
    "icao": "SDUN"
  },
  {
    "name": "Maricá Airport",
    "city": "Marica",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SDMC"
  },
  {
    "name": "Resende Airport",
    "city": "Resende",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SDRS"
  },
  {
    "name": "Saquarema Airport",
    "city": "Saquarema",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SDSK"
  },
  {
    "name": "Drumheller Municipal Airport",
    "city": "Drumheller",
    "country": "Canada",
    "iata": "NONE",
    "icao": "CEG4"
  },
  {
    "name": "Mwene-Ditu Airport",
    "city": "Mwene-Ditu",
    "country": "Congo (Kinshasa)",
    "iata": "NONE",
    "icao": "FZWE"
  },
  {
    "name": "Tunta Airport",
    "city": "Kabinda",
    "country": "Congo (Kinshasa)",
    "iata": "KBN",
    "icao": "FZWT"
  },
  {
    "name": "Ikela Airport",
    "city": "Ikela",
    "country": "Congo (Kinshasa)",
    "iata": "IKL",
    "icao": "FZGV"
  },
  {
    "name": "Aripuanã Airport",
    "city": "Aripuana",
    "country": "Brazil",
    "iata": "AIR",
    "icao": "SWRP"
  },
  {
    "name": "Juruena Airport",
    "city": "Juruena",
    "country": "Brazil",
    "iata": "JRN",
    "icao": "SWJU"
  },
  {
    "name": "Juína Airport",
    "city": "Juina",
    "country": "Brazil",
    "iata": "JIA",
    "icao": "SWJN"
  },
  {
    "name": "Vila Rica Airport",
    "city": "Vila Rica",
    "country": "Brazil",
    "iata": "VLP",
    "icao": "SWVC"
  },
  {
    "name": "Inácio Luís do Nascimento Airport",
    "city": "Juara",
    "country": "Brazil",
    "iata": "JUA",
    "icao": "SIZX"
  },
  {
    "name": "Cáceres Airport",
    "city": "Caceres",
    "country": "Brazil",
    "iata": "CCX",
    "icao": "SWKC"
  },
  {
    "name": "Posto Leonardo Vilas Boas Airport",
    "city": "Chapada dos Guimaraes",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SWPL"
  },
  {
    "name": "Tangará da Serra Airport",
    "city": "Tangara da Serra",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SWTS"
  },
  {
    "name": "Canarana Airport",
    "city": "Canarana",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SWEK"
  },
  {
    "name": "Vila Bela da Santíssima Trindade Airport",
    "city": "Vila Bela da Santissima Trindade ",
    "country": "Brazil",
    "iata": "NONE",
    "icao": "SWVB"
  },
  {
    "name": "Bumbar Airport",
    "city": "Bumba",
    "country": "Congo (Kinshasa)",
    "iata": "BMB",
    "icao": "FZFU"
  },
  {
    "name": "Sobral Airport",
    "city": "Sobral",
    "country": "Brazil",
    "iata": "QBX",
    "icao": "SNOB"
  },
  {
    "name": "Arapiraca Airport",
    "city": "Arapiraca",
    "country": "Brazil",
    "iata": "APQ",
    "icao": "SNAL"
  },
  {
    "name": "Cangapara Airport",
    "city": "Floriano",
    "country": "Brazil",
    "iata": "FLB",
    "icao": "SNQG"
  },
  {
    "name": "Picos Airport",
    "city": "Picos",
    "country": "Brazil",
    "iata": "PCS",
    "icao": "SNPC"
  },
  {
    "name": "Beni Airport",
    "city": "Beni",
    "country": "Congo (Kinshasa)",
    "iata": "BNC",
    "icao": "FZNP"
  },
  {
    "name": "Boende Airport",
    "city": "Boende",
    "country": "Congo (Kinshasa)",
    "iata": "BNB",
    "icao": "FZGN"
  },
  {
    "name": "Montauk Airport",
    "city": "Montauk",
    "country": "United States",
    "iata": "MTP",
    "icao": "KMTP"
  },
  {
    "name": "Porter County Municipal Airport",
    "city": "Valparaiso IN",
    "country": "United States",
    "iata": "VPZ",
    "icao": "KVPZ"
  },
  {
    "name": "Dharavandhoo Airport",
    "city": "DHARAVANDHOO",
    "country": "Maldives",
    "iata": "DRV",
    "icao": "VRMD"
  },
  {
    "name": "Saumlaki/Olilit Airport",
    "city": "Saumlaki",
    "country": "Indonesia",
    "iata": "SXK",
    "icao": "WAPI"
  },
  {
    "name": "Cerro Largo International Airport",
    "city": "Melo",
    "country": "Uruguay",
    "iata": "MLZ",
    "icao": "SUMO"
  },
  {
    "name": "Tydeo Larre Borges Airport",
    "city": "Paysandu",
    "country": "Uruguay",
    "iata": "PDU",
    "icao": "SUPU"
  },
  {
    "name": "Artigas International Airport",
    "city": "Artigas ",
    "country": "Uruguay",
    "iata": "ATI",
    "icao": "SUAG"
  },
  {
    "name": "Murray Bridge Airport",
    "city": "Murray Bridge",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YMBD"
  },
  {
    "name": "Horsham Airport",
    "city": "Horsham",
    "country": "Australia",
    "iata": "HSM",
    "icao": "YHSM"
  },
  {
    "name": "Swan Hill Airport",
    "city": "Swan Hill",
    "country": "Australia",
    "iata": "SWH",
    "icao": "YSWH"
  },
  {
    "name": "Turtle Island Seaplane Base",
    "city": "Turtle Island",
    "country": "Fiji",
    "iata": "TTL",
    "icao": "NFUL"
  },
  {
    "name": "Dewadaru - Kemujan Island",
    "city": "Karimunjawa",
    "country": "Indonesia",
    "iata": "KWB",
    "icao": "WARU"
  },
  {
    "name": "Kongolo Airport",
    "city": "Kongolo",
    "country": "Congo (Kinshasa)",
    "iata": "KOO",
    "icao": "FZRQ"
  },
  {
    "name": "Attopeu Airport",
    "city": "Attopeu",
    "country": "Laos",
    "iata": "AOU",
    "icao": "VLAP"
  },
  {
    "name": "Kahemba Airport",
    "city": "Kahemba",
    "country": "Congo (Kinshasa)",
    "iata": "NONE",
    "icao": "FZCF"
  },
  {
    "name": "Francisco de Miranda Airport",
    "city": "Caracas",
    "country": "Venezuela",
    "iata": "N/A",
    "icao": "SVFM"
  },
  {
    "name": "São Miguel do Oeste Airport",
    "city": "Sao Miguel do Oeste",
    "country": "Brazil",
    "iata": "SQX",
    "icao": "SSOE"
  },
  {
    "name": "Mason County Airport",
    "city": "Ludington",
    "country": "United States",
    "iata": "LDM",
    "icao": "KLDM"
  },
  {
    "name": "Reid-Hillview Airport of Santa Clara County",
    "city": "San Jose",
    "country": "United States",
    "iata": "RHV",
    "icao": "KRHV"
  },
  {
    "name": "Sohar Airport",
    "city": "Sohar",
    "country": "Oman",
    "iata": "OHS",
    "icao": "OOSH"
  },
  {
    "name": "Sahiwal Airport",
    "city": "Sindh",
    "country": "Pakistan",
    "iata": "RZS",
    "icao": "OPSW"
  },
  {
    "name": "Thamkharka Airport",
    "city": "Thamkharka",
    "country": "Nepal",
    "iata": "NONE",
    "icao": "VNTH"
  },
  {
    "name": "Thimarafushi Airport",
    "city": "Thimarafushi",
    "country": "Maldives",
    "iata": "TMF",
    "icao": "VRNT"
  },
  {
    "name": "Ifuru Airport",
    "city": "Ifuru",
    "country": "Maldives",
    "iata": "IFU",
    "icao": "VREI"
  },
  {
    "name": "Kieta Airport",
    "city": "Kieta",
    "country": "Papua New Guinea",
    "iata": "KIE",
    "icao": "AYKT"
  },
  {
    "name": "Hakkari Yüksekova Airport",
    "city": "Hakkari",
    "country": "Turkey",
    "iata": "YKO",
    "icao": "LTCW"
  },
  {
    "name": "Jelenia Góra Glider Airport",
    "city": "Jelenia Gora",
    "country": "Poland",
    "iata": "NONE",
    "icao": "EPJG"
  },
  {
    "name": "Bathpalathang Airport",
    "city": "Jakar",
    "country": "Bhutan",
    "iata": "BUT",
    "icao": "VQBT"
  },
  {
    "name": "Sultan Bantilan Airport",
    "city": "Toli-Toli",
    "country": "Indonesia",
    "iata": "TLI",
    "icao": "WAMI"
  },
  {
    "name": "Vuktyl Airport",
    "city": "Vuktyl",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UUYK"
  },
  {
    "name": "Berezniki Airport",
    "city": "Berezniki",
    "country": "Russia",
    "iata": "NONE",
    "icao": "USPT"
  },
  {
    "name": "San Sebastián Airport",
    "city": "San Sebastian",
    "country": "Chile",
    "iata": "NONE",
    "icao": "SCSS"
  },
  {
    "name": "Tolwin Observatory Airport",
    "city": "Tolhuin",
    "country": "Argentina",
    "iata": "NONE",
    "icao": "SAWL"
  },
  {
    "name": "Tarko-Sale Airport",
    "city": "Tarko-Sale",
    "country": "Russia",
    "iata": "TQL",
    "icao": "USDS"
  },
  {
    "name": "Camarillo Airport",
    "city": "Camarillo - CA",
    "country": "United States",
    "iata": "NONE",
    "icao": "KCMA"
  },
  {
    "name": "Leopoldsburg Airfield",
    "city": "Leopoldsburg",
    "country": "Belgium",
    "iata": "NONE",
    "icao": "EBLE"
  },
  {
    "name": "Omtepe Airport",
    "city": "Moyogalpa",
    "country": "Nicaragua",
    "iata": "NONE",
    "icao": "MNLP"
  },
  {
    "name": "Alashankou Bole (Bortala) airport",
    "city": "Bole",
    "country": "China",
    "iata": "BPL",
    "icao": "ZWAX"
  },
  {
    "name": "Achinsk Airport",
    "city": "Achinsk",
    "country": "Russia",
    "iata": "ACS",
    "icao": "UNKS"
  },
  {
    "name": "Hinton/Jasper-Hinton Airport",
    "city": "Hinton",
    "country": "Canada",
    "iata": "NONE",
    "icao": "CEC4"
  },
  {
    "name": "Watsonville Municipal Airport",
    "city": "Watsonville",
    "country": "United States",
    "iata": "WVI",
    "icao": "KWVI"
  },
  {
    "name": "Gelephu Airport",
    "city": "Gelephu",
    "country": "Bhutan",
    "iata": "GLU",
    "icao": "VQGP"
  },
  {
    "name": "Williamsburg Jamestown Airport",
    "city": "Williamsburg",
    "country": "United States",
    "iata": "JGG",
    "icao": "KJGG"
  },
  {
    "name": "Dulkaninna Airport",
    "city": "Dulkaninna",
    "country": "Australia",
    "iata": "DLK",
    "icao": "YDLK"
  },
  {
    "name": "William Creek Airport",
    "city": "William Creek",
    "country": "Australia",
    "iata": "NONE",
    "icao": "YWMC"
  },
  {
    "name": "Kenora Seaplane Base",
    "city": "Kenora",
    "country": "Canada",
    "iata": "NONE",
    "icao": "CJM9"
  },
  {
    "name": "Siquijor Airport",
    "city": "Siquijor",
    "country": "Philippines",
    "iata": "NONE",
    "icao": "RPVZ"
  },
  {
    "name": "Opapimiskan Lake Airport",
    "city": "Musselwhite Mine",
    "country": "Canada",
    "iata": "KM8",
    "icao": "CKM8"
  },
  {
    "name": "Taroom Airport",
    "city": "Taroom",
    "country": "Australia",
    "iata": "XTO",
    "icao": "YTAM"
  },
  {
    "name": "Gelnhausen Airport",
    "city": "Gelnhausen",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDFG"
  },
  {
    "name": "Ærø Airport",
    "city": "Aero",
    "country": "Denmark",
    "iata": "NONE",
    "icao": "EKAE"
  },
  {
    "name": "Lauterbach Airport",
    "city": "Lauterbach-Wernges",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDFT"
  },
  {
    "name": "Aschaffenburg Airport",
    "city": "Aschaffenburg",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDFC"
  },
  {
    "name": "Squamish Airport",
    "city": "Squamish",
    "country": "Canada",
    "iata": "YSE",
    "icao": "CYSE"
  },
  {
    "name": "Reichelsheim Airport",
    "city": "Reichelsheim",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDFB"
  },
  {
    "name": "Marburg-Schönstadt Airport",
    "city": "Schoenstadt",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDFN"
  },
  {
    "name": "Lauenbrück Airport",
    "city": "Lauenbrueck",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDHU"
  },
  {
    "name": "Hüttenbusch Airport",
    "city": "Huettenbusch",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDXU"
  },
  {
    "name": "Vrsar Crljenka Airport",
    "city": "Vsar",
    "country": "Croatia",
    "iata": "NONE",
    "icao": "LDPV"
  },
  {
    "name": "Union County Airport",
    "city": "Marysville",
    "country": "United States",
    "iata": "MRT",
    "icao": "KMRT"
  },
  {
    "name": "La Grande-4 Airport",
    "city": "La Grande-4",
    "country": "Canada",
    "iata": "YAH",
    "icao": "CYAH"
  },
  {
    "name": "Alert Bay Airport",
    "city": "Alert Bay",
    "country": "Canada",
    "iata": "YAL",
    "icao": "CYAL"
  },
  {
    "name": "Liverpool South Shore Regional Airport",
    "city": "Liverpool",
    "country": "Canada",
    "iata": "",
    "icao": "CYAU"
  },
  {
    "name": "Nipawin Airport",
    "city": "Nipawin",
    "country": "Canada",
    "iata": "YBU",
    "icao": "CYBU"
  },
  {
    "name": "James T. Field Memorial Aerodrome",
    "city": "Centralia",
    "country": "Canada",
    "iata": "YCE",
    "icao": "CYCE"
  },
  {
    "name": "Blue River Airport",
    "city": "Blue River",
    "country": "Canada",
    "iata": "YCP",
    "icao": "CYCP"
  },
  {
    "name": "Chetwynd Airport",
    "city": "Chetwynd",
    "country": "Canada",
    "iata": "YCQ",
    "icao": "CYCQ"
  },
  {
    "name": "Ross River Airport",
    "city": "Ross River",
    "country": "Canada",
    "iata": "XRR",
    "icao": "CYDM"
  },
  {
    "name": "Dolbeau St Felicien Airport",
    "city": "Dolbeau-St-Félicien",
    "country": "Canada",
    "iata": "YDO",
    "icao": "CYDO"
  },
  {
    "name": "Amos Magny Airport",
    "city": "Amos",
    "country": "Canada",
    "iata": "YEY",
    "icao": "CYEY"
  },
  {
    "name": "Goderich Airport",
    "city": "Goderich",
    "country": "Canada",
    "iata": "YGD",
    "icao": "CYGD"
  },
  {
    "name": "Hope Airport",
    "city": "Hope",
    "country": "Canada",
    "iata": "YHE",
    "icao": "CYHE"
  },
  {
    "name": "Haines Junction Airport",
    "city": "Haines Junction",
    "country": "Canada",
    "iata": "YHT",
    "icao": "CYHT"
  },
  {
    "name": "Digby / Annapolis Regional Airport",
    "city": "Digby",
    "country": "Canada",
    "iata": "YDG",
    "icao": "CYID"
  },
  {
    "name": "Fort Liard Airport",
    "city": "Fort Liard",
    "country": "Canada",
    "iata": "YJF",
    "icao": "CYJF"
  },
  {
    "name": "Key Lake Airport",
    "city": "Key Lake",
    "country": "Canada",
    "iata": "YKJ",
    "icao": "CYKJ"
  },
  {
    "name": "Leaf Rapids Airport",
    "city": "Leaf Rapids",
    "country": "Canada",
    "iata": "YLR",
    "icao": "CYLR"
  },
  {
    "name": "Matane Airport",
    "city": "Matane",
    "country": "Canada",
    "iata": "YME",
    "icao": "CYME"
  },
  {
    "name": "Charlevoix Airport",
    "city": "Charlevoix",
    "country": "Canada",
    "iata": "YML",
    "icao": "CYML"
  },
  {
    "name": "Nejanilini Lake Airport",
    "city": "Nejanilini Lake",
    "country": "Canada",
    "iata": "NONE",
    "icao": "CYNN"
  },
  {
    "name": "Owen Sound / Billy Bishop Regional Airport",
    "city": "Owen Sound",
    "country": "Canada",
    "iata": "YOS",
    "icao": "CYOS"
  },
  {
    "name": "Port Hawkesbury Airport",
    "city": "Port Hawkesbury",
    "country": "Canada",
    "iata": "YPS",
    "icao": "CYPD"
  },
  {
    "name": "St Thomas Municipal Airport",
    "city": "St Thomas",
    "country": "Canada",
    "iata": "YQS",
    "icao": "CYQS"
  },
  {
    "name": "Ottawa / Rockcliffe Airport",
    "city": "Ottawa",
    "country": "Canada",
    "iata": "YRO",
    "icao": "CYRO"
  },
  {
    "name": "Ottawa / Carp Airport",
    "city": "Ottawa",
    "country": "Canada",
    "iata": "YRP",
    "icao": "CYRP"
  },
  {
    "name": "Smiths Falls-Montague (Russ Beach) Airport",
    "city": "Smiths Falls",
    "country": "Canada",
    "iata": "YSH",
    "icao": "CYSH"
  },
  {
    "name": "St Leonard Airport",
    "city": "St Leonard",
    "country": "Canada",
    "iata": "YSL",
    "icao": "CYSL"
  },
  {
    "name": "Virden/R.J. (Bob) Andrew Field Regional Aerodrome",
    "city": "Virden",
    "country": "Canada",
    "iata": "YVD",
    "icao": "CYVD"
  },
  {
    "name": "Vernon Airport",
    "city": "Vernon",
    "country": "Canada",
    "iata": "YVE",
    "icao": "CYVK"
  },
  {
    "name": "Beaver Creek Airport",
    "city": "Beaver Creek",
    "country": "Canada",
    "iata": "YXQ",
    "icao": "CYXQ"
  },
  {
    "name": "Salmon Arm Airport",
    "city": "Salmon Arm",
    "country": "Canada",
    "iata": "YSN",
    "icao": "CZAM"
  },
  {
    "name": "Kelsey Airport",
    "city": "Kelsey",
    "country": "Canada",
    "iata": "KES",
    "icao": "CZEE"
  },
  {
    "name": "Pukatawagan Airport",
    "city": "Pukatawagan",
    "country": "Canada",
    "iata": "XPK",
    "icao": "CZFG"
  },
  {
    "name": "Grand Forks Airport",
    "city": "Grand Forks",
    "country": "Canada",
    "iata": "ZGF",
    "icao": "CZGF"
  },
  {
    "name": "Jenpeg Airport",
    "city": "Jenpeg",
    "country": "Canada",
    "iata": "ZJG",
    "icao": "CZJG"
  },
  {
    "name": "Thicket Portage Airport",
    "city": "Thicket Portage",
    "country": "Canada",
    "iata": "YTD",
    "icao": "CZLQ"
  },
  {
    "name": "Pikwitonei Airport",
    "city": "Pikwitonei",
    "country": "Canada",
    "iata": "PIW",
    "icao": "CZMN"
  },
  {
    "name": "Poplar River Airport",
    "city": "Poplar River",
    "country": "Canada",
    "iata": "XPP",
    "icao": "CZNG"
  },
  {
    "name": "Pincher Creek Airport",
    "city": "Pincher Creek",
    "country": "Canada",
    "iata": "WPC",
    "icao": "CZPC"
  },
  {
    "name": "Stewart Airport",
    "city": "Stewart",
    "country": "Canada",
    "iata": "ZST",
    "icao": "CZST"
  },
  {
    "name": "Ignace Municipal Airport",
    "city": "Ignace",
    "country": "Canada",
    "iata": "ZUC",
    "icao": "CZUC"
  },
  {
    "name": "Neubrandenburg Airport",
    "city": "Neubrandenburg",
    "country": "Germany",
    "iata": "FNB",
    "icao": "EDBN"
  },
  {
    "name": "Airport Bamberg-Breitenau",
    "city": "Bamberg",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDQA"
  },
  {
    "name": "Zerbst Airport",
    "city": "Zerbst/Anhalt",
    "country": "Germany",
    "iata": "NONE",
    "icao": "EDUZ"
  },
  {
    "name": "RAF Spadeadam",
    "city": "Spadeadam",
    "country": "United Kingdom",
    "iata": "NONE",
    "icao": "EGOM"
  },
  {
    "name": "RAF Kinloss",
    "city": "Kinloss",
    "country": "United Kingdom",
    "iata": "FSS",
    "icao": "EGQK"
  },
  {
    "name": "Biała Podlaska Airfield",
    "city": "Biała Podlaska",
    "country": "Poland",
    "iata": "BXP",
    "icao": "EPBP"
  },
  {
    "name": "Cewice Military Airport",
    "city": "Lębork",
    "country": "Poland",
    "iata": "NONE",
    "icao": "EPCE"
  },
  {
    "name": "Deblin Military Air Base",
    "city": "Dęblin",
    "country": "Poland",
    "iata": "NONE",
    "icao": "EPDE"
  },
  {
    "name": "Leczyca Military Air Base",
    "city": "Leczyca",
    "country": "Poland",
    "iata": "NONE",
    "icao": "EPLY"
  },
  {
    "name": "Minsk Mazowiecki Military Air Base",
    "city": "",
    "country": "Poland",
    "iata": "NONE",
    "icao": "EPMM"
  },
  {
    "name": "Powidz Military Air Base",
    "city": "",
    "country": "Poland",
    "iata": "NONE",
    "icao": "EPPW"
  },
  {
    "name": "Tomaszow Mazowiecki Military Air Base",
    "city": "Tomaszów Mazowiecki",
    "country": "Poland",
    "iata": "NONE",
    "icao": "EPTM"
  },
  {
    "name": "Björkvik Air Base",
    "city": "Björkvik",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESKX"
  },
  {
    "name": "Ljungbyhed Airport",
    "city": "Ljungbyhed",
    "country": "Sweden",
    "iata": "NONE",
    "icao": "ESTL"
  },
  {
    "name": "Daugavpils Intrenational Airport",
    "city": "Daugavpils",
    "country": "Latvia",
    "iata": "DGP",
    "icao": "EVDA"
  },
  {
    "name": "Jēkabpils Air Base",
    "city": "Jēkabpils",
    "country": "Latvia",
    "iata": "NONE",
    "icao": "EVKA"
  },
  {
    "name": "Jūrmala Airport",
    "city": "Tukums",
    "country": "Latvia",
    "iata": "NONE",
    "icao": "EVTA"
  },
  {
    "name": "Kėdainiai Air Base",
    "city": "Kėdainiai",
    "country": "Lithuania",
    "iata": "NONE",
    "icao": "EYKD"
  },
  {
    "name": "Lime Acres Finsch Mine Airport",
    "city": "Lime Acres",
    "country": "South Africa",
    "iata": "LMR",
    "icao": "FALC"
  },
  {
    "name": "Sua Pan Airport",
    "city": "Sowa",
    "country": "Botswana",
    "iata": "SXN",
    "icao": "FBSN"
  },
  {
    "name": "Lusaka City Airport",
    "city": "Lusaka",
    "country": "Zambia",
    "iata": "NONE",
    "icao": "FLLC"
  },
  {
    "name": "Sumbe Airport",
    "city": "Sumbe",
    "country": "Angola",
    "iata": "NDD",
    "icao": "FNSU"
  },
  {
    "name": "Mangochi Airport",
    "city": "Mangochi",
    "country": "Malawi",
    "iata": "MAI",
    "icao": "FWMG"
  },
  {
    "name": "Arandis Airport",
    "city": "Arandis",
    "country": "Namibia",
    "iata": "ADI",
    "icao": "FYAR"
  },
  {
    "name": "Mariental Airport",
    "city": "Mariental",
    "country": "Namibia",
    "iata": "NONE",
    "icao": "FYML"
  },
  {
    "name": "Almaza Air Force Base",
    "city": "Cairo",
    "country": "Egypt",
    "iata": "NONE",
    "icao": "HEAZ"
  },
  {
    "name": "Beni Suef Air Base",
    "city": "Beni Suef",
    "country": "Egypt",
    "iata": "NONE",
    "icao": "HEBS"
  },
  {
    "name": "Jiyanklis Air Base",
    "city": "Jiyanklis",
    "country": "Egypt",
    "iata": "NONE",
    "icao": "HEGS"
  },
  {
    "name": "Merowe New Airport",
    "city": "Merowe",
    "country": "Sudan",
    "iata": "MWE",
    "icao": "HSMN"
  },
  {
    "name": "St Louis Regional Airport",
    "city": "Alton/St Louis",
    "country": "United States",
    "iata": "ALN",
    "icao": "KALN"
  },
  {
    "name": "Chandler Field",
    "city": "Alexandria",
    "country": "United States",
    "iata": "AXN",
    "icao": "KAXN"
  },
  {
    "name": "Columbus Municipal Airport",
    "city": "Columbus",
    "country": "United States",
    "iata": "CLU",
    "icao": "KBAK"
  },
  {
    "name": "Curtis Field",
    "city": "Brady",
    "country": "United States",
    "iata": "BBD",
    "icao": "KBBD"
  },
  {
    "name": "Eastern Sierra Regional Airport",
    "city": "Bishop",
    "country": "United States",
    "iata": "BIH",
    "icao": "KBIH"
  },
  {
    "name": "Baker City Municipal Airport",
    "city": "Baker City",
    "country": "United States",
    "iata": "BKE",
    "icao": "KBKE"
  },
  {
    "name": "Miley Memorial Field",
    "city": "Big Piney",
    "country": "United States",
    "iata": "BPI",
    "icao": "KBPI"
  },
  {
    "name": "Ozark Regional Airport",
    "city": "Mountain Home",
    "country": "United States",
    "iata": "WMH",
    "icao": "KBPK"
  },
  {
    "name": "W K Kellogg Airport",
    "city": "Battle Creek",
    "country": "United States",
    "iata": "BTL",
    "icao": "KBTL"
  },
  {
    "name": "Burley Municipal Airport",
    "city": "Burley",
    "country": "United States",
    "iata": "BYI",
    "icao": "KBYI"
  },
  {
    "name": "Northeast Iowa Regional Airport",
    "city": "Charles City",
    "country": "United States",
    "iata": "CCY",
    "icao": "KCCY"
  },
  {
    "name": "Chanute Martin Johnson Airport",
    "city": "Chanute",
    "country": "United States",
    "iata": "CNU",
    "icao": "KCNU"
  },
  {
    "name": "Jacksonville Executive at Craig Airport",
    "city": "Jacksonville",
    "country": "United States",
    "iata": "CRG",
    "icao": "KCRG"
  },
  {
    "name": "Crossville Memorial Whitson Field",
    "city": "Crossville",
    "country": "United States",
    "iata": "CSV",
    "icao": "KCSV"
  },
  {
    "name": "Davison Army Air Field",
    "city": "Fort Belvoir",
    "country": "United States",
    "iata": "DAA",
    "icao": "KDAA"
  },
  {
    "name": "Barstow Daggett Airport",
    "city": "Daggett",
    "country": "United States",
    "iata": "DAG",
    "icao": "KDAG"
  },
  {
    "name": "Deming Municipal Airport",
    "city": "Deming",
    "country": "United States",
    "iata": "DMN",
    "icao": "KDMN"
  },
  {
    "name": "Desert Rock Airport",
    "city": "Mercury",
    "country": "United States",
    "iata": "DRA",
    "icao": "KDRA"
  },
  {
    "name": "Needles Airport",
    "city": "Needles",
    "country": "United States",
    "iata": "EED",
    "icao": "KEED"
  },
  {
    "name": "Duke Field",
    "city": "Crestview",
    "country": "United States",
    "iata": "EGI",
    "icao": "KEGI"
  },
  {
    "name": "Murray Field",
    "city": "Eureka",
    "country": "United States",
    "iata": "EKA",
    "icao": "KEKA"
  },
  {
    "name": "San Marcos Municipal Airport",
    "city": "San Marcos",
    "country": "United States",
    "iata": "HYI",
    "icao": "KHYI"
  },
  {
    "name": "Sawyer County Airport",
    "city": "Hayward",
    "country": "United States",
    "iata": "HYR",
    "icao": "KHYR"
  },
  {
    "name": "Kimble County Airport",
    "city": "Junction",
    "country": "United States",
    "iata": "JCT",
    "icao": "KJCT"
  },
  {
    "name": "Monticello Municipal Ellis Field",
    "city": "Monticello",
    "country": "United States",
    "iata": "LLQ",
    "icao": "KLLQ"
  },
  {
    "name": "Derby Field",
    "city": "Lovelock",
    "country": "United States",
    "iata": "LOL",
    "icao": "KLOL"
  },
  {
    "name": "Mobridge Municipal Airport",
    "city": "Mobridge",
    "country": "United States",
    "iata": "MBG",
    "icao": "KMBG"
  },
  {
    "name": "Mc Comb/Pike County Airport/John E Lewis Field",
    "city": "Mc Comb",
    "country": "United States",
    "iata": "MCB",
    "icao": "KMCB"
  },
  {
    "name": "Southern Illinois Airport",
    "city": "Carbondale/Murphysboro",
    "country": "United States",
    "iata": "MDH",
    "icao": "KMDH"
  },
  {
    "name": "Mc Entire Joint National Guard Base",
    "city": "Eastover",
    "country": "United States",
    "iata": "MMT",
    "icao": "KMMT"
  },
  {
    "name": "Brunswick Executive Airport",
    "city": "Brunswick",
    "country": "United States",
    "iata": "NHZ",
    "icao": "KNHZ"
  },
  {
    "name": "Naval Station Mayport (Admiral David L. Mcdonald Field)",
    "city": "Mayport",
    "country": "United States",
    "iata": "NRB",
    "icao": "KNRB"
  },
  {
    "name": "Orangeburg Municipal Airport",
    "city": "Orangeburg",
    "country": "United States",
    "iata": "OGB",
    "icao": "KOGB"
  },
  {
    "name": "Columbus Municipal Airport",
    "city": "Columbus",
    "country": "United States",
    "iata": "OLU",
    "icao": "KOLU"
  },
  {
    "name": "Ottumwa Regional Airport",
    "city": "Ottumwa",
    "country": "United States",
    "iata": "OTM",
    "icao": "KOTM"
  },
  {
    "name": "Cairns AAF (Fort Rucker) Air Field",
    "city": "Fort Rucker/Ozark",
    "country": "United States",
    "iata": "OZR",
    "icao": "KOZR"
  },
  {
    "name": "Ralph Wenz Field",
    "city": "Pinedale",
    "country": "United States",
    "iata": "PWY",
    "icao": "KPNA"
  },
  {
    "name": "Dutchess County Airport",
    "city": "Poughkeepsie",
    "country": "United States",
    "iata": "POU",
    "icao": "KPOU"
  },
  {
    "name": "New Richmond Regional Airport",
    "city": "New Richmond",
    "country": "United States",
    "iata": "RNH",
    "icao": "KRNH"
  },
  {
    "name": "Russell Municipal Airport",
    "city": "Russell",
    "country": "United States",
    "iata": "RSL",
    "icao": "KRSL"
  },
  {
    "name": "Redwood Falls Municipal Airport",
    "city": "Redwood Falls",
    "country": "United States",
    "iata": "RWF",
    "icao": "KRWF"
  },
  {
    "name": "Salinas Municipal Airport",
    "city": "Salinas",
    "country": "United States",
    "iata": "SNS",
    "icao": "KSNS"
  },
  {
    "name": "Sonora Municipal Airport",
    "city": "Sonora",
    "country": "United States",
    "iata": "SOA",
    "icao": "KSOA"
  },
  {
    "name": "Saline County Regional Airport",
    "city": "Benton",
    "country": "United States",
    "iata": "SUZ",
    "icao": "KSUZ"
  },
  {
    "name": "Tonopah Airport",
    "city": "Tonopah",
    "country": "United States",
    "iata": "TPH",
    "icao": "KTPH"
  },
  {
    "name": "Aurora State Airport",
    "city": "Aurora",
    "country": "United States",
    "iata": "UAO",
    "icao": "KUAO"
  },
  {
    "name": "Ukiah Municipal Airport",
    "city": "Ukiah",
    "country": "United States",
    "iata": "UKI",
    "icao": "KUKI"
  },
  {
    "name": "University Oxford Airport",
    "city": "Oxford",
    "country": "United States",
    "iata": "UOX",
    "icao": "KUOX"
  },
  {
    "name": "Huntsville Regional Airport",
    "city": "Huntsville",
    "country": "United States",
    "iata": "HTV",
    "icao": "KUTS"
  },
  {
    "name": "Miller Field",
    "city": "Valentine",
    "country": "United States",
    "iata": "VTN",
    "icao": "KVTN"
  },
  {
    "name": "Winnemucca Municipal Airport",
    "city": "Winnemucca",
    "country": "United States",
    "iata": "WMC",
    "icao": "KWMC"
  },
  {
    "name": "West Woodward Airport",
    "city": "Woodward",
    "country": "United States",
    "iata": "WWR",
    "icao": "KWWR"
  },
  {
    "name": "Cape Canaveral AFS Skid Strip",
    "city": "Cocoa Beach",
    "country": "United States",
    "iata": "XMR",
    "icao": "KXMR"
  },
  {
    "name": "Homey (Area 51) Airport",
    "city": "Groom Lake",
    "country": "United States",
    "iata": "NONE",
    "icao": "KXTA"
  },
  {
    "name": "Zanesville Municipal Airport",
    "city": "Zanesville",
    "country": "United States",
    "iata": "ZZV",
    "icao": "KZZV"
  },
  {
    "name": "Gjadër Air Base",
    "city": "Gjadër",
    "country": "Albania",
    "iata": "NONE",
    "icao": "LAGJ"
  },
  {
    "name": "Kukës Airport",
    "city": "Kukës",
    "country": "Albania",
    "iata": "NONE",
    "icao": "LAKU"
  },
  {
    "name": "Kuçovë Air Base",
    "city": "Kuçovë",
    "country": "Albania",
    "iata": "NONE",
    "icao": "LAKV"
  },
  {
    "name": "Vlorë Air Base",
    "city": "Vlorë",
    "country": "Albania",
    "iata": "NONE",
    "icao": "LAVL"
  },
  {
    "name": "Uzundzhovo Air Base",
    "city": "Haskovo",
    "country": "Bulgaria",
    "iata": "NONE",
    "icao": "LBHS"
  },
  {
    "name": "Gabrovnitsa Air Base",
    "city": "Gabrovnitsa",
    "country": "Bulgaria",
    "iata": "NONE",
    "icao": "LBMG"
  },
  {
    "name": "Graf Ignatievo Air Base",
    "city": "Graf Ignatievo",
    "country": "Bulgaria",
    "iata": "NONE",
    "icao": "LBPG"
  },
  {
    "name": "Dolna Mitropoliya Air Base",
    "city": "Dolna Mitropoliya",
    "country": "Bulgaria",
    "iata": "NONE",
    "icao": "LBPL"
  },
  {
    "name": "Balchik Air Base",
    "city": "Balchik",
    "country": "Bulgaria",
    "iata": "NONE",
    "icao": "LBWB"
  },
  {
    "name": "Cuatro Vientos Airport",
    "city": "Madrid",
    "country": "Spain",
    "iata": "ECV",
    "icao": "LECU"
  },
  {
    "name": "Castellón-Costa Azahar Airport",
    "city": "Castellón de la Plana",
    "country": "Spain",
    "iata": "CDT",
    "icao": "LEDS"
  },
  {
    "name": "Teruel Airport",
    "city": "Teruel",
    "country": "Spain",
    "iata": "TEV",
    "icao": "LETL"
  },
  {
    "name": "Blois-Le Breuil Airport",
    "city": "Blois/Le Breuil",
    "country": "France",
    "iata": "NONE",
    "icao": "LFOQ"
  },
  {
    "name": "Trento-Mattarello Airport",
    "city": "Trento (TN)",
    "country": "Italy",
    "iata": "TN0",
    "icao": "LIDT"
  },
  {
    "name": "Alessandria Airport",
    "city": "Alessandria",
    "country": "Italy",
    "iata": "NONE",
    "icao": "LILA"
  },
  {
    "name": "Biella-Cerrione Airport",
    "city": "Biella (BI)",
    "country": "Italy",
    "iata": "NONE",
    "icao": "LILE"
  },
  {
    "name": "Vercelli Airport",
    "city": "Vercelli",
    "country": "Italy",
    "iata": "NONE",
    "icao": "LILI"
  },
  {
    "name": "Casale Monferrato Airport",
    "city": "Casale Monferrato",
    "country": "Italy",
    "iata": "NONE",
    "icao": "LILM"
  },
  {
    "name": "Varese-Venegono Airport",
    "city": "Varese",
    "country": "Italy",
    "iata": "NONE",
    "icao": "LILN"
  },
  {
    "name": "Novi Ligure Airport",
    "city": "Novi Ligure",
    "country": "Italy",
    "iata": "NONE",
    "icao": "LIMR"
  },
  {
    "name": "Sarzana-Luni Air Base",
    "city": "Sarzana (SP)",
    "country": "Italy",
    "iata": "QLP",
    "icao": "LIQW"
  },
  {
    "name": "Câmpia Turzii Air Base",
    "city": "Câmpia Turzii",
    "country": "Romania",
    "iata": "NONE",
    "icao": "LRCT"
  },
  {
    "name": "Mărculeşti International Airport",
    "city": "Mărculeşti",
    "country": "Moldova",
    "iata": "NONE",
    "icao": "LUBM"
  },
  {
    "name": "Cahul International Airport",
    "city": "Cahul",
    "country": "Moldova",
    "iata": "NONE",
    "icao": "LUCH"
  },
  {
    "name": "Tiraspol Airport",
    "city": "Tiraspol",
    "country": "Moldova",
    "iata": "NONE",
    "icao": "LUTR"
  },
  {
    "name": "Batajnica Air Base",
    "city": "Batajnica",
    "country": "Serbia",
    "iata": "BJY",
    "icao": "LYBT"
  },
  {
    "name": "Rubelsanto Airport",
    "city": "Rubelsanto",
    "country": "Guatemala",
    "iata": "RUV",
    "icao": "MGRB"
  },
  {
    "name": "Coronel Enrique Soto Cano Air Base",
    "city": "Comayagua",
    "country": "Honduras",
    "iata": "XPL",
    "icao": "MHSC"
  },
  {
    "name": "Upala Airport",
    "city": "Upala",
    "country": "Costa Rica",
    "iata": "UPL",
    "icao": "MRUP"
  },
  {
    "name": "San Nicolas De Bari Airport",
    "city": "San Nicolás",
    "country": "Cuba",
    "iata": "QSN",
    "icao": "MUNB"
  },
  {
    "name": "San Julian Air Base",
    "city": "Pinar Del Rio",
    "country": "Cuba",
    "iata": "SNJ",
    "icao": "MUSJ"
  },
  {
    "name": "Dawadmi Domestic Airport",
    "city": "",
    "country": "Saudi Arabia",
    "iata": "NONE",
    "icao": "OEDM"
  },
  {
    "name": "King Khaled Air Base",
    "city": "",
    "country": "Saudi Arabia",
    "iata": "KMX",
    "icao": "OEKM"
  },
  {
    "name": "Riyadh Air Base",
    "city": "Riyadh",
    "country": "Saudi Arabia",
    "iata": "XXN",
    "icao": "OERY"
  },
  {
    "name": "Jam Airport",
    "city": "Kangan",
    "country": "Iran",
    "iata": "KNR",
    "icao": "OIBJ"
  },
  {
    "name": "Hamadan Air Base",
    "city": "Hamadan",
    "country": "Iran",
    "iata": "NONE",
    "icao": "OIHS"
  },
  {
    "name": "Payam International Airport",
    "city": "Karaj",
    "country": "Iran",
    "iata": "PYK",
    "icao": "OIIP"
  },
  {
    "name": "Ahmed Al Jaber Air Base",
    "city": "Ahmed Al Jaber AB",
    "country": "Kuwait",
    "iata": "XIJ",
    "icao": "OKAJ"
  },
  {
    "name": "Rayak Air Base",
    "city": "Rayak",
    "country": "Lebanon",
    "iata": "NONE",
    "icao": "OLRA"
  },
  {
    "name": "Mirpur Khas Air Base",
    "city": "Mirpur Khas",
    "country": "Pakistan",
    "iata": "MPD",
    "icao": "OPMK"
  },
  {
    "name": "Minhas Air Base",
    "city": "Kamra",
    "country": "Pakistan",
    "iata": "ATG",
    "icao": "OPMS"
  },
  {
    "name": "Rafiqui Air Base",
    "city": "Shorkot",
    "country": "Pakistan",
    "iata": "NONE",
    "icao": "OPRQ"
  },
  {
    "name": "Faisal Air Base",
    "city": "Karachi",
    "country": "Pakistan",
    "iata": "NONE",
    "icao": "OPSF"
  },
  {
    "name": "Mushaf Air Base",
    "city": "Sargodha",
    "country": "Pakistan",
    "iata": "SGI",
    "icao": "OPSR"
  },
  {
    "name": "Qayyarah West Airport",
    "city": "Qayyarah",
    "country": "Iraq",
    "iata": "RQW",
    "icao": "ORQW"
  },
  {
    "name": "Al Sahra Army Air Field",
    "city": "Tikrit",
    "country": "Iraq",
    "iata": "NONE",
    "icao": "ORSH"
  },
  {
    "name": "Tall Afar Army Air Field",
    "city": "Tall Afar",
    "country": "Iraq",
    "iata": "NONE",
    "icao": "ORTF"
  },
  {
    "name": "Al Taji Army Air Field",
    "city": "Taji",
    "country": "Iraq",
    "iata": "NONE",
    "icao": "ORTI"
  },
  {
    "name": "Ubaydah Bin Al Jarrah Airport",
    "city": "Al Cut",
    "country": "Iraq",
    "iata": "NONE",
    "icao": "ORUB"
  },
  {
    "name": "Nenana Municipal Airport",
    "city": "Nenana",
    "country": "United States",
    "iata": "ENN",
    "icao": "PANN"
  },
  {
    "name": "Wasilla Airport",
    "city": "Wasilla",
    "country": "United States",
    "iata": "WWA",
    "icao": "PAWS"
  },
  {
    "name": "Gangshan Air Force Base",
    "city": "Gangshan",
    "country": "Taiwan",
    "iata": "NONE",
    "icao": "RCAY"
  },
  {
    "name": "Asahikawa Airport",
    "city": "",
    "country": "Japan",
    "iata": "NONE",
    "icao": "RJCA"
  },
  {
    "name": "Utsunomiya Airport",
    "city": "",
    "country": "Japan",
    "iata": "QUT",
    "icao": "RJTU"
  },
  {
    "name": "Jungwon Air Base",
    "city": "",
    "country": "South Korea",
    "iata": "NONE",
    "icao": "RKTI"
  },
  {
    "name": "Ie Jima Airport",
    "city": "Ie",
    "country": "Japan",
    "iata": "IEJ",
    "icao": "RORE"
  },
  {
    "name": "Allah Valley Airport",
    "city": "Surallah",
    "country": "Philippines",
    "iata": "AAV",
    "icao": "RPMA"
  },
  {
    "name": "Bislig Airport",
    "city": "",
    "country": "Philippines",
    "iata": "BPH",
    "icao": "RPMF"
  },
  {
    "name": "Mati National Airport",
    "city": "",
    "country": "Philippines",
    "iata": "MXI",
    "icao": "RPMQ"
  },
  {
    "name": "Presidente Néstor Kirchner Regionsl Airport",
    "city": "Villa Maria",
    "country": "Argentina",
    "iata": "VMR",
    "icao": "SAOV"
  },
  {
    "name": "Chafei Amsei Airport",
    "city": "Barretos",
    "country": "Brazil",
    "iata": "BAT",
    "icao": "SBBT"
  },
  {
    "name": "Base de Aviação de Taubaté Airport",
    "city": "Taubaté",
    "country": "Brazil",
    "iata": "QHP",
    "icao": "SBTA"
  },
  {
    "name": "Barriles Airport",
    "city": "Tocopilla",
    "country": "Chile",
    "iata": "TOQ",
    "icao": "SCBE"
  },
  {
    "name": "Cochrane Airport",
    "city": "Cochrane",
    "country": "Chile",
    "iata": "LGR",
    "icao": "SCHR"
  },
  {
    "name": "Chañaral Airport",
    "city": "Chañaral",
    "country": "Chile",
    "iata": "CNR",
    "icao": "SCRA"
  },
  {
    "name": "Panguilemo Airport",
    "city": "Talca",
    "country": "Chile",
    "iata": "TLX",
    "icao": "SCTL"
  },
  {
    "name": "Victoria Airport",
    "city": "Victoria",
    "country": "Chile",
    "iata": "ZIC",
    "icao": "SCTO"
  },
  {
    "name": "Las Breas Airport",
    "city": "Taltal",
    "country": "Chile",
    "iata": "TTC",
    "icao": "SCTT"
  },
  {
    "name": "Gomez Nino Apiay Air Base",
    "city": "Apiay",
    "country": "Colombia",
    "iata": "API",
    "icao": "SKAP"
  },
  {
    "name": "Coveñas Airport",
    "city": "Coveñas",
    "country": "Colombia",
    "iata": "CVE",
    "icao": "SKCV"
  },
  {
    "name": "German Olano Air Base",
    "city": "La Dorada",
    "country": "Colombia",
    "iata": "PAL",
    "icao": "SKPQ"
  },
  {
    "name": "Paz De Ariporo Airport",
    "city": "Paz De Ariporo",
    "country": "Colombia",
    "iata": "PZA",
    "icao": "SKPZ"
  },
  {
    "name": "Tunja Airport",
    "city": "Tunja",
    "country": "Colombia",
    "iata": "NONE",
    "icao": "SKTJ"
  },
  {
    "name": "Tres Esquinas Air Base",
    "city": "Tres Esquinas",
    "country": "Colombia",
    "iata": "TQS",
    "icao": "SKTQ"
  },
  {
    "name": "Marandúa Air Base",
    "city": "Marandúa",
    "country": "Colombia",
    "iata": "MQZ",
    "icao": "SKUA"
  },
  {
    "name": "Juan Simons Vela Airport",
    "city": "Rioja",
    "country": "Peru",
    "iata": "RIJ",
    "icao": "SPJA"
  },
  {
    "name": "Shumba Airport",
    "city": "Jaén",
    "country": "Peru",
    "iata": "JAE",
    "icao": "SPJE"
  },
  {
    "name": "Metropolitano Airport",
    "city": "",
    "country": "Venezuela",
    "iata": "NONE",
    "icao": "SVMP"
  },
  {
    "name": "Issyk-Kul International Airport",
    "city": "Tamchy",
    "country": "Kyrgyzstan",
    "iata": "IKU",
    "icao": "UAFL"
  },
  {
    "name": "Kant Air Base",
    "city": "Kant",
    "country": "Kyrgyzstan",
    "iata": "NONE",
    "icao": "UAFW"
  },
  {
    "name": "Ayaguz Airport",
    "city": "Ayaguz",
    "country": "Kazakhstan",
    "iata": "NONE",
    "icao": "UASA"
  },
  {
    "name": "Chelkar Airport",
    "city": "Chelkar",
    "country": "Kazakhstan",
    "iata": "NONE",
    "icao": "UATR"
  },
  {
    "name": "Kyzyl-Syr Airport",
    "city": "Kyzyl-Syr",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UENK"
  },
  {
    "name": "Vilyuisk Airport",
    "city": "Vilyuisk",
    "country": "Russia",
    "iata": "VYI",
    "icao": "UENW"
  },
  {
    "name": "Belaya Gora Airport",
    "city": "",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UESG"
  },
  {
    "name": "Dzhermuk Airport",
    "city": "Dzhermuk",
    "country": "Armenia",
    "iata": "NONE",
    "icao": "UGEJ"
  },
  {
    "name": "Kamenny Ruchey Naval Air Base",
    "city": "Sovetskaya Gavan",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UHKG"
  },
  {
    "name": "Maygatka Airport.",
    "city": "Sovetskaya Gavan",
    "country": "Russia",
    "iata": "GVN",
    "icao": "UHKM"
  },
  {
    "name": "Omsukchan Airport",
    "city": "Omsukchan",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UHMF"
  },
  {
    "name": "Chaybukha Airport",
    "city": "Chaybukha",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UHMG"
  },
  {
    "name": "Keperveem Airport",
    "city": "Keperveem",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UHMK"
  },
  {
    "name": "Magadan-13 Airport",
    "city": "Magadan",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UHMT"
  },
  {
    "name": "Nikolayevsk-na-Amure Airport",
    "city": "Nikolayevsk-na-Amure Airport",
    "country": "Russia",
    "iata": "NLI",
    "icao": "UHNN"
  },
  {
    "name": "Palana Airport",
    "city": "Palana",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UHPL"
  },
  {
    "name": "Zheleznogorsk Airport",
    "city": "Zheleznogorsk-Ilimsky",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UIBV"
  },
  {
    "name": "Gvardeyskoe Air Base",
    "city": "Sarabuz",
    "country": "Ukraine",
    "iata": "NONE",
    "icao": "UKFG"
  },
  {
    "name": "Saki Air Base",
    "city": "Saki",
    "country": "Ukraine",
    "iata": "NONE",
    "icao": "UKFI"
  },
  {
    "name": "Dzhankoy Airport",
    "city": "Dzhankoy",
    "country": "Ukraine",
    "iata": "NONE",
    "icao": "UKFY"
  },
  {
    "name": "Ozerne Air Base",
    "city": "Zhytomyr",
    "country": "Ukraine",
    "iata": "NONE",
    "icao": "UKKO"
  },
  {
    "name": "Severomorsk-1 Naval Air Base",
    "city": "Severomorsk",
    "country": "Russia",
    "iata": "NONE",
    "icao": "ULAK"
  },
  {
    "name": "Pushkin Airport",
    "city": "St. Petersburg",
    "country": "Russia",
    "iata": "NONE",
    "icao": "ULLP"
  },
  {
    "name": "Siversky Air Base",
    "city": "Siversky",
    "country": "Russia",
    "iata": "NONE",
    "icao": "ULLS"
  },
  {
    "name": "Staraya Russa Airport",
    "city": "Staraya Russa",
    "country": "Russia",
    "iata": "NONE",
    "icao": "ULNR"
  },
  {
    "name": "Peski Airport",
    "city": "Petrozavodsk",
    "country": "Russia",
    "iata": "NONE",
    "icao": "ULPP"
  },
  {
    "name": "Baranavichi Air Base",
    "city": "Baranavichi",
    "country": "Belarus",
    "iata": "NONE",
    "icao": "UMMA"
  },
  {
    "name": "Babruisk Air Base",
    "city": "Babruisk",
    "country": "Belarus",
    "iata": "NONE",
    "icao": "UMNB"
  },
  {
    "name": "Severo-Eniseysk Airport",
    "city": "Severo-Eniseysk",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UNIS"
  },
  {
    "name": "Sharypovo Airport",
    "city": "Sharypovo",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UNKO"
  },
  {
    "name": "Omsk Severny Airport",
    "city": "Omsk",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UNOS"
  },
  {
    "name": "Nagurskoye",
    "city": "Murmansk",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UODN"
  },
  {
    "name": "Svetlogorsk Airport",
    "city": "Svetlogorsk",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UOIG"
  },
  {
    "name": "Valek Airport",
    "city": "Valek",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UOOW"
  },
  {
    "name": "Khanskaya Airport",
    "city": "Maykop",
    "country": "Russia",
    "iata": "NONE",
    "icao": "URKH"
  },
  {
    "name": "Dudinka Airport",
    "city": "Dudinka",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UROD"
  },
  {
    "name": "Volgodonsk Airport",
    "city": "",
    "country": "Russia",
    "iata": "VLK",
    "icao": "URRY"
  },
  {
    "name": "Tashkent East Airport",
    "city": "Tashkent",
    "country": "Uzbekistan",
    "iata": "NONE",
    "icao": "UTTP"
  },
  {
    "name": "Myachkovo Airport",
    "city": "Moscow",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UUBM"
  },
  {
    "name": "Tretyakovo Airport",
    "city": "Lukhovitsy",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UUMT"
  },
  {
    "name": "Yermolino Airport",
    "city": "Balabanovo",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UUWE"
  },
  {
    "name": "Inta Airport",
    "city": "Inta",
    "country": "Russia",
    "iata": "INA",
    "icao": "UUYI"
  },
  {
    "name": "Izhma Airport",
    "city": "Izhma",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UUYV"
  },
  {
    "name": "Borisoglebskoye Airport",
    "city": "Kazan",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UWKG"
  },
  {
    "name": "Zhigansk Airport",
    "city": "Zhigansk",
    "country": "Russia",
    "iata": "ZIX",
    "icao": "UWKV"
  },
  {
    "name": "Maksimovka Airport",
    "city": "Ufa",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UWUM"
  },
  {
    "name": "Buguruslan Severny Airport",
    "city": "Buguruslan",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UWWB"
  },
  {
    "name": "Bezymyanka Airfield",
    "city": "Samara",
    "country": "Russia",
    "iata": "NONE",
    "icao": "UWWG"
  },
  {
    "name": "Ratnagiri Airport",
    "city": "",
    "country": "India",
    "iata": "RTC",
    "icao": "VARG"
  },
  {
    "name": "Hingurakgoda Air Force Base",
    "city": "Polonnaruwa Town",
    "country": "Sri Lanka",
    "iata": "HIM",
    "icao": "VCCH"
  },
  {
    "name": "Kazi Nazrul Islam Airport",
    "city": "Durgapur",
    "country": "India",
    "iata": "RDP",
    "icao": "VEDG"
  },
  {
    "name": "Sri Sathya Sai Airport",
    "city": "Puttaparthi",
    "country": "India",
    "iata": "PUT",
    "icao": "VOPN"
  },
  {
    "name": "Meiktila Air Base",
    "city": "Meiktila",
    "country": "Burma",
    "iata": "NONE",
    "icao": "VYML"
  },
  {
    "name": "Changi Air Base (East)",
    "city": "Singapore",
    "country": "Singapore",
    "iata": "NONE",
    "icao": "WSAC"
  },
  {
    "name": "Soltsy-2 Air Base",
    "city": "Soltsy",
    "country": "Russia",
    "iata": "NONE",
    "icao": "XLLL"
  },
  {
    "name": "Severomorsk-3 Naval Air Base",
    "city": "Severomorsk",
    "country": "Russia",
    "iata": "NONE",
    "icao": "XLMV"
  },
  {
    "name": "Fedotovo Naval Air Base",
    "city": "Kipelovo",
    "country": "Russia",
    "iata": "NONE",
    "icao": "XLWF"
  },
  {
    "name": "Lebyazhye Air Base",
    "city": "Kamyshin",
    "country": "Russia",
    "iata": "NONE",
    "icao": "XRWL"
  },
  {
    "name": "Smolensk North Airport",
    "city": "Smolensk",
    "country": "Russia",
    "iata": "NONE",
    "icao": "XUBS"
  },
  {
    "name": "Rtishchevo Air Base",
    "city": "Rtishchevo",
    "country": "Russia",
    "iata": "NONE",
    "icao": "XWPR"
  },
  {
    "name": "Alpha Airport",
    "city": "Alpha",
    "country": "Australia",
    "iata": "ABH",
    "icao": "YAPH"
  },
  {
    "name": "Ararat Airport",
    "city": "",
    "country": "Australia",
    "iata": "ARY",
    "icao": "YARA"
  },
  {
    "name": "Benalla Airport",
    "city": "",
    "country": "Australia",
    "iata": "BLN",
    "icao": "YBLA"
  },
  {
    "name": "Balranald Airport",
    "city": "",
    "country": "Australia",
    "iata": "BZD",
    "icao": "YBRN"
  },
  {
    "name": "Brewarrina Airport",
    "city": "",
    "country": "Australia",
    "iata": "BWQ",
    "icao": "YBRW"
  },
  {
    "name": "Cleve Airport",
    "city": "",
    "country": "Australia",
    "iata": "CVC",
    "icao": "YCEE"
  },
  {
    "name": "Corowa Airport",
    "city": "",
    "country": "Australia",
    "iata": "CWW",
    "icao": "YCOR"
  },
  {
    "name": "Corryong Airport",
    "city": "",
    "country": "Australia",
    "iata": "CYG",
    "icao": "YCRG"
  },
  {
    "name": "Cootamundra Airport",
    "city": "",
    "country": "Australia",
    "iata": "CMD",
    "icao": "YCTM"
  },
  {
    "name": "Dirranbandi Airport",
    "city": "",
    "country": "Australia",
    "iata": "DRN",
    "icao": "YDBI"
  },
  {
    "name": "Deniliquin Airport",
    "city": "Deniliquin",
    "country": "Australia",
    "iata": "DNQ",
    "icao": "YDLQ"
  },
  {
    "name": "Dysart Airport",
    "city": "",
    "country": "Australia",
    "iata": "DYA",
    "icao": "YDYS"
  },
  {
    "name": "Echuca Airport",
    "city": "",
    "country": "Australia",
    "iata": "ECH",
    "icao": "YECH"
  },
  {
    "name": "Forbes Airport",
    "city": "Forbes",
    "country": "Australia",
    "iata": "FRB",
    "icao": "YFBS"
  },
  {
    "name": "Gunnedah Airport",
    "city": "",
    "country": "Australia",
    "iata": "GUH",
    "icao": "YGDH"
  },
  {
    "name": "Hay Airport",
    "city": "",
    "country": "Australia",
    "iata": "HXX",
    "icao": "YHAY"
  },
  {
    "name": "Hopetoun Airport",
    "city": "",
    "country": "Australia",
    "iata": "HTU",
    "icao": "YHPN"
  },
  {
    "name": "Kerang Airport",
    "city": "",
    "country": "Australia",
    "iata": "KRA",
    "icao": "YKER"
  },
  {
    "name": "Kempsey Airport",
    "city": "",
    "country": "Australia",
    "iata": "KPS",
    "icao": "YKMP"
  },
  {
    "name": "Kingaroy Airport",
    "city": "",
    "country": "Australia",
    "iata": "KGY",
    "icao": "YKRY"
  },
  {
    "name": "Latrobe Valley Airport",
    "city": "Morwell",
    "country": "Australia",
    "iata": "TGN",
    "icao": "YLTV"
  },
  {
    "name": "Mareeba Airport",
    "city": "",
    "country": "Australia",
    "iata": "MRG",
    "icao": "YMBA"
  },
  {
    "name": "Ngukurr Airport",
    "city": "",
    "country": "Australia",
    "iata": "RPM",
    "icao": "YNGU"
  },
  {
    "name": "Narromine Airport",
    "city": "",
    "country": "Australia",
    "iata": "QRM",
    "icao": "YNRM"
  },
  {
    "name": "Port Pirie Airport",
    "city": "",
    "country": "Australia",
    "iata": "PPI",
    "icao": "YPIR"
  },
  {
    "name": "Smithton Airport",
    "city": "",
    "country": "Australia",
    "iata": "SIO",
    "icao": "YSMI"
  },
  {
    "name": "Snake Bay Airport",
    "city": "",
    "country": "Australia",
    "iata": "SNB",
    "icao": "YSNB"
  },
  {
    "name": "Stawell Airport",
    "city": "",
    "country": "Australia",
    "iata": "SWC",
    "icao": "YSWL"
  },
  {
    "name": "Tibooburra Airport",
    "city": "",
    "country": "Australia",
    "iata": "TYB",
    "icao": "YTIB"
  },
  {
    "name": "Tumut Airport",
    "city": "",
    "country": "Australia",
    "iata": "TUM",
    "icao": "YTMU"
  },
  {
    "name": "Wangaratta Airport",
    "city": "",
    "country": "Australia",
    "iata": "WGT",
    "icao": "YWGT"
  },
  {
    "name": "Warracknabeal Airport",
    "city": "",
    "country": "Australia",
    "iata": "WKB",
    "icao": "YWKB"
  },
  {
    "name": "Warren Airport",
    "city": "",
    "country": "Australia",
    "iata": "QRR",
    "icao": "YWRN"
  },
  {
    "name": "West Sale Airport",
    "city": "Sale",
    "country": "Australia",
    "iata": "SXE",
    "icao": "YWSL"
  },
  {
    "name": "West Wyalong Airport",
    "city": "West Wyalong",
    "country": "Australia",
    "iata": "WWY",
    "icao": "YWWL"
  },
  {
    "name": "Young Airport",
    "city": "",
    "country": "Australia",
    "iata": "NGA",
    "icao": "YYNG"
  },
  {
    "name": "Guangzhou MR Air Base",
    "city": "Guanghua",
    "country": "China",
    "iata": "LHK",
    "icao": "ZHGH"
  },
  {
    "name": "Shiyan Wudangshan Airport",
    "city": "Shiyan",
    "country": "China",
    "iata": "WDS",
    "icao": "ZHSY"
  },
  {
    "name": "Sunchon Air Base",
    "city": "Sunchon",
    "country": "North Korea",
    "iata": "NONE",
    "icao": "ZKSC"
  },
  {
    "name": "Huatugou Airport",
    "city": "Mengnai",
    "country": "China",
    "iata": "HTT",
    "icao": "ZLHX"
  },
  {
    "name": "Baruun Urt Airport",
    "city": "",
    "country": "Mongolia",
    "iata": "UUN",
    "icao": "ZMBU"
  },
  {
    "name": "Bengbu Airport",
    "city": "Bengbu",
    "country": "China",
    "iata": "BFU",
    "icao": "ZSBB"
  },
  {
    "name": "Rugao Air Base",
    "city": "Rugao",
    "country": "China",
    "iata": "RUG",
    "icao": "ZSRG"
  },
  {
    "name": "Wuhu Air Base",
    "city": "Wuhu",
    "country": "China",
    "iata": "WHU",
    "icao": "ZSWU"
  },
  {
    "name": "Shanshan Airport",
    "city": "Shanshan",
    "country": "China",
    "iata": "SXJ",
    "icao": "ZWSS"
  },
  {
    "name": "Yingkou Lanqi Airport",
    "city": "Yingkou",
    "country": "China",
    "iata": "YKH",
    "icao": "ZYYK"
  },
  {
    "name": "Shenyang Dongta Airport",
    "city": "Shenyang",
    "country": "China",
    "iata": "NONE",
    "icao": "ZYYY"
  }
];

module.exports = {
    AIRPORTS: AIRPORTS,
};
