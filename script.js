// ═══════════════════════════════════════════════════════════════════════
//  SPECCHECK v2.1 — FINAL CLEAN VERSION
// ═══════════════════════════════════════════════════════════════════════

// ─── TAB SWITCHER ─────────────────────────────────────────────────────
function switchMain(tab) {
    ["gaming", "productivity", "phone"].forEach(t => {
        document.getElementById(t + "-section").style.display = t === tab ? "block" : "none";
        document.getElementById(t + "-tab").classList.toggle("active", t === tab);
    });
}

// ─── DATA LISTS ───────────────────────────────────────────────────────
const cpuList = [
    "Intel Core i5-14600K","Intel Core i5-14600KF","Intel Core i7-14700K","Intel Core i7-14700KF",
    "Intel Core i9-14900K","Intel Core i9-14900KF","Intel Core i9-14900KS",
    "Intel Core i3-13100","Intel Core i3-13100F","Intel Core i5-13400","Intel Core i5-13400F",
    "Intel Core i5-13500","Intel Core i5-13600K","Intel Core i5-13600KF",
    "Intel Core i7-13700","Intel Core i7-13700F","Intel Core i7-13700K","Intel Core i7-13700KF",
    "Intel Core i9-13900","Intel Core i9-13900F","Intel Core i9-13900K","Intel Core i9-13900KF","Intel Core i9-13900KS",
    "Intel Core i3-12100","Intel Core i3-12100F","Intel Core i5-12400","Intel Core i5-12400F",
    "Intel Core i5-12600K","Intel Core i5-12600KF","Intel Core i7-12700","Intel Core i7-12700F",
    "Intel Core i7-12700K","Intel Core i7-12700KF","Intel Core i9-12900K","Intel Core i9-12900KF","Intel Core i9-12900KS",
    "Intel Core i5-11400","Intel Core i5-11400F","Intel Core i5-11600K","Intel Core i5-11600KF",
    "Intel Core i7-11700","Intel Core i7-11700F","Intel Core i7-11700K","Intel Core i7-11700KF",
    "Intel Core i9-11900K","Intel Core i9-11900KF",
    "Intel Core i3-10100","Intel Core i3-10100F","Intel Core i5-10400","Intel Core i5-10400F",
    "Intel Core i5-10600K","Intel Core i5-10600KF","Intel Core i7-10700","Intel Core i7-10700F",
    "Intel Core i7-10700K","Intel Core i7-10700KF","Intel Core i9-10900K","Intel Core i9-10900KF",
    "Intel Core i7-1365U","Intel Core i7-1355U","Intel Core i7-1260P","Intel Core i7-1280P",
    "Intel Core i5-1335U","Intel Core i5-1240P",
    "AMD Ryzen 5 7600","AMD Ryzen 5 7600X","AMD Ryzen 7 7700","AMD Ryzen 7 7700X","AMD Ryzen 7 7800X3D",
    "AMD Ryzen 9 7900","AMD Ryzen 9 7900X","AMD Ryzen 9 7950X","AMD Ryzen 9 7950X3D",
    "AMD Ryzen 5 5500","AMD Ryzen 5 5600","AMD Ryzen 5 5600X","AMD Ryzen 5 5600G",
    "AMD Ryzen 7 5700X","AMD Ryzen 7 5800X","AMD Ryzen 7 5800X3D",
    "AMD Ryzen 9 5900X","AMD Ryzen 9 5950X",
    "AMD Ryzen 5 3600","AMD Ryzen 5 3600X","AMD Ryzen 7 3700X","AMD Ryzen 7 3800X",
    "AMD Ryzen 9 3900X","AMD Ryzen 9 3950X","AMD Ryzen 3 3100","AMD Ryzen 3 3300X","AMD Ryzen 3 4100","AMD Ryzen 3 5300G"
];

const gpuList = [
    "NVIDIA RTX 4090","NVIDIA RTX 4080","NVIDIA RTX 4080 Super","NVIDIA RTX 4070 Ti","NVIDIA RTX 4070 Ti Super",
    "NVIDIA RTX 4070","NVIDIA RTX 4070 Super","NVIDIA RTX 4060 Ti 16GB","NVIDIA RTX 4060 Ti 8GB","NVIDIA RTX 4060",
    "NVIDIA RTX 3090 Ti","NVIDIA RTX 3090","NVIDIA RTX 3080 Ti","NVIDIA RTX 3080 12GB","NVIDIA RTX 3080",
    "NVIDIA RTX 3070 Ti","NVIDIA RTX 3070","NVIDIA RTX 3060 Ti","NVIDIA RTX 3060 12GB","NVIDIA RTX 3050",
    "NVIDIA RTX 2080 Ti","NVIDIA RTX 2080 Super","NVIDIA RTX 2080","NVIDIA RTX 2070 Super","NVIDIA RTX 2070",
    "NVIDIA RTX 2060 Super","NVIDIA RTX 2060",
    "NVIDIA GTX 1660 Ti","NVIDIA GTX 1660 Super","NVIDIA GTX 1660","NVIDIA GTX 1650 Super","NVIDIA GTX 1650",
    "NVIDIA GTX 1080 Ti","NVIDIA GTX 1080","NVIDIA GTX 1070 Ti","NVIDIA GTX 1070",
    "NVIDIA GTX 1060 6GB","NVIDIA GTX 1060 3GB","NVIDIA GTX 1050 Ti","NVIDIA GTX 1050",
    "AMD RX 7900 XTX","AMD RX 7900 XT","AMD RX 7900 GRE","AMD RX 7800 XT","AMD RX 7700 XT","AMD RX 7600",
    "AMD RX 6950 XT","AMD RX 6900 XT","AMD RX 6800 XT","AMD RX 6800",
    "AMD RX 6750 XT","AMD RX 6700 XT","AMD RX 6700","AMD RX 6650 XT","AMD RX 6600 XT","AMD RX 6600","AMD RX 6500 XT",
    "AMD RX 5700 XT","AMD RX 5700","AMD RX 5600 XT","AMD RX 5500 XT",
    "AMD RX 590","AMD RX 580","AMD RX 570",
    "Intel Arc A770","Intel Arc A750","Intel Arc A380",
    "Intel Iris Xe","Intel UHD 770","Intel UHD 630","AMD Radeon 780M","AMD Radeon 680M"
];

const phoneChipList = [
    "Snapdragon 8 Gen 3","Snapdragon 8 Gen 2","Snapdragon 8+ Gen 1","Snapdragon 8 Gen 1",
    "Snapdragon 888 Plus","Snapdragon 888","Snapdragon 870","Snapdragon 865 Plus","Snapdragon 865",
    "Snapdragon 7+ Gen 2","Snapdragon 7 Gen 1","Snapdragon 780G","Snapdragon 778G Plus","Snapdragon 778G",
    "Snapdragon 750G","Snapdragon 732G","Snapdragon 730G","Snapdragon 695","Snapdragon 690","Snapdragon 680",
    "Snapdragon 662","Snapdragon 480 Plus","Snapdragon 480",
    "Dimensity 9300","Dimensity 9200 Plus","Dimensity 9200","Dimensity 9000 Plus","Dimensity 9000",
    "Dimensity 8300","Dimensity 8200","Dimensity 8100","Dimensity 8050",
    "Dimensity 7200","Dimensity 7050","Dimensity 7020","Dimensity 1200","Dimensity 1100","Dimensity 920",
    "Helio G99","Helio G96","Helio G95","Helio G88","Helio G85","Helio G80",
    "Apple A17 Pro","Apple A16 Bionic","Apple A15 Bionic","Apple A14 Bionic","Apple A13 Bionic","Apple A12 Bionic",
    "Exynos 2400","Exynos 2200","Exynos 2100","Exynos 1480","Exynos 1380","Exynos 1330","Exynos 1280",
    "Google Tensor G3","Google Tensor G2","Google Tensor","Kirin 9000S","Kirin 9000","Kirin 990 5G"
];

const cpuScores = {
    "Intel Core i5-14600K":0.97,"Intel Core i5-14600KF":0.97,"Intel Core i7-14700K":1.13,"Intel Core i7-14700KF":1.13,
    "Intel Core i9-14900K":1.22,"Intel Core i9-14900KF":1.22,"Intel Core i9-14900KS":1.27,
    "Intel Core i3-13100":0.68,"Intel Core i3-13100F":0.68,"Intel Core i5-13400":0.88,"Intel Core i5-13400F":0.88,
    "Intel Core i5-13500":0.92,"Intel Core i5-13600K":0.95,"Intel Core i5-13600KF":0.95,
    "Intel Core i7-13700":1.05,"Intel Core i7-13700F":1.05,"Intel Core i7-13700K":1.10,"Intel Core i7-13700KF":1.10,
    "Intel Core i9-13900":1.15,"Intel Core i9-13900F":1.15,"Intel Core i9-13900K":1.20,"Intel Core i9-13900KF":1.20,"Intel Core i9-13900KS":1.25,
    "Intel Core i3-12100":0.65,"Intel Core i3-12100F":0.65,"Intel Core i5-12400":0.85,"Intel Core i5-12400F":0.85,
    "Intel Core i5-12600K":0.90,"Intel Core i5-12600KF":0.90,"Intel Core i7-12700":0.97,"Intel Core i7-12700F":0.97,
    "Intel Core i7-12700K":1.00,"Intel Core i7-12700KF":1.00,"Intel Core i9-12900K":1.10,"Intel Core i9-12900KF":1.10,"Intel Core i9-12900KS":1.14,
    "Intel Core i5-11400":0.75,"Intel Core i5-11400F":0.75,"Intel Core i5-11600K":0.80,"Intel Core i5-11600KF":0.80,
    "Intel Core i7-11700":0.88,"Intel Core i7-11700F":0.88,"Intel Core i7-11700K":0.92,"Intel Core i7-11700KF":0.92,
    "Intel Core i9-11900K":0.97,"Intel Core i9-11900KF":0.97,
    "Intel Core i3-10100":0.55,"Intel Core i3-10100F":0.55,"Intel Core i5-10400":0.70,"Intel Core i5-10400F":0.70,
    "Intel Core i5-10600K":0.75,"Intel Core i5-10600KF":0.75,"Intel Core i7-10700":0.85,"Intel Core i7-10700F":0.85,
    "Intel Core i7-10700K":0.90,"Intel Core i7-10700KF":0.90,"Intel Core i9-10900K":0.95,"Intel Core i9-10900KF":0.95,
    "Intel Core i7-1365U":0.72,"Intel Core i7-1355U":0.68,"Intel Core i7-1260P":0.78,"Intel Core i7-1280P":0.82,
    "Intel Core i5-1335U":0.65,"Intel Core i5-1240P":0.70,
    "AMD Ryzen 5 7600":0.95,"AMD Ryzen 5 7600X":1.00,"AMD Ryzen 7 7700":1.05,"AMD Ryzen 7 7700X":1.10,"AMD Ryzen 7 7800X3D":1.24,
    "AMD Ryzen 9 7900":1.18,"AMD Ryzen 9 7900X":1.20,"AMD Ryzen 9 7950X":1.25,"AMD Ryzen 9 7950X3D":1.28,
    "AMD Ryzen 5 5500":0.82,"AMD Ryzen 5 5600":0.87,"AMD Ryzen 5 5600X":0.90,"AMD Ryzen 5 5600G":0.85,
    "AMD Ryzen 7 5700X":0.92,"AMD Ryzen 7 5800X":1.00,"AMD Ryzen 7 5800X3D":1.18,
    "AMD Ryzen 9 5900X":1.10,"AMD Ryzen 9 5950X":1.15,
    "AMD Ryzen 5 3600":0.75,"AMD Ryzen 5 3600X":0.78,"AMD Ryzen 7 3700X":0.82,"AMD Ryzen 7 3800X":0.85,
    "AMD Ryzen 9 3900X":0.95,"AMD Ryzen 9 3950X":1.00,"AMD Ryzen 3 3100":0.55,"AMD Ryzen 3 3300X":0.60,
    "AMD Ryzen 3 4100":0.62,"AMD Ryzen 3 5300G":0.65
};

const gpuScores = {
    "NVIDIA RTX 4090":1.50,"NVIDIA RTX 4080":1.35,"NVIDIA RTX 4080 Super":1.40,
    "NVIDIA RTX 4070 Ti":1.22,"NVIDIA RTX 4070 Ti Super":1.28,"NVIDIA RTX 4070":1.10,"NVIDIA RTX 4070 Super":1.17,
    "NVIDIA RTX 4060 Ti 16GB":0.93,"NVIDIA RTX 4060 Ti 8GB":0.92,"NVIDIA RTX 4060":0.82,
    "NVIDIA RTX 3090 Ti":1.26,"NVIDIA RTX 3090":1.20,"NVIDIA RTX 3080 Ti":1.16,"NVIDIA RTX 3080 12GB":1.13,"NVIDIA RTX 3080":1.10,
    "NVIDIA RTX 3070 Ti":0.98,"NVIDIA RTX 3070":0.95,"NVIDIA RTX 3060 Ti":0.85,"NVIDIA RTX 3060 12GB":0.76,"NVIDIA RTX 3050":0.60,
    "NVIDIA RTX 2080 Ti":0.95,"NVIDIA RTX 2080 Super":0.88,"NVIDIA RTX 2080":0.85,
    "NVIDIA RTX 2070 Super":0.80,"NVIDIA RTX 2070":0.75,"NVIDIA RTX 2060 Super":0.70,"NVIDIA RTX 2060":0.65,
    "NVIDIA GTX 1660 Ti":0.57,"NVIDIA GTX 1660 Super":0.55,"NVIDIA GTX 1660":0.50,
    "NVIDIA GTX 1650 Super":0.45,"NVIDIA GTX 1650":0.38,
    "NVIDIA GTX 1080 Ti":0.72,"NVIDIA GTX 1080":0.65,"NVIDIA GTX 1070 Ti":0.58,"NVIDIA GTX 1070":0.55,
    "NVIDIA GTX 1060 6GB":0.48,"NVIDIA GTX 1060 3GB":0.42,"NVIDIA GTX 1050 Ti":0.35,"NVIDIA GTX 1050":0.30,
    "AMD RX 7900 XTX":1.42,"AMD RX 7900 XT":1.30,"AMD RX 7900 GRE":1.18,
    "AMD RX 7800 XT":1.08,"AMD RX 7700 XT":0.98,"AMD RX 7600":0.84,
    "AMD RX 6950 XT":1.20,"AMD RX 6900 XT":1.15,"AMD RX 6800 XT":1.10,"AMD RX 6800":1.05,
    "AMD RX 6750 XT":0.95,"AMD RX 6700 XT":0.92,"AMD RX 6700":0.85,
    "AMD RX 6650 XT":0.80,"AMD RX 6600 XT":0.77,"AMD RX 6600":0.72,"AMD RX 6500 XT":0.42,
    "AMD RX 5700 XT":0.75,"AMD RX 5700":0.68,"AMD RX 5600 XT":0.62,"AMD RX 5500 XT":0.50,
    "AMD RX 590":0.48,"AMD RX 580":0.45,"AMD RX 570":0.40,
    "Intel Arc A770":0.78,"Intel Arc A750":0.70,"Intel Arc A380":0.35,
    "Intel Iris Xe":0.18,"Intel UHD 770":0.14,"Intel UHD 630":0.10,"AMD Radeon 780M":0.36,"AMD Radeon 680M":0.30
};

const phoneChipScores = {
    "Snapdragon 8 Gen 3":1.00,"Snapdragon 8 Gen 2":0.95,"Snapdragon 8+ Gen 1":0.90,"Snapdragon 8 Gen 1":0.84,
    "Snapdragon 888 Plus":0.82,"Snapdragon 888":0.80,"Snapdragon 870":0.77,"Snapdragon 865 Plus":0.75,"Snapdragon 865":0.73,
    "Snapdragon 7+ Gen 2":0.75,"Snapdragon 7 Gen 1":0.65,"Snapdragon 780G":0.62,"Snapdragon 778G Plus":0.61,
    "Snapdragon 778G":0.59,"Snapdragon 750G":0.52,"Snapdragon 732G":0.48,"Snapdragon 730G":0.46,
    "Snapdragon 695":0.44,"Snapdragon 690":0.41,"Snapdragon 680":0.37,"Snapdragon 662":0.32,
    "Snapdragon 480 Plus":0.34,"Snapdragon 480":0.31,
    "Dimensity 9300":1.02,"Dimensity 9200 Plus":0.98,"Dimensity 9200":0.95,"Dimensity 9000 Plus":0.92,"Dimensity 9000":0.90,
    "Dimensity 8300":0.78,"Dimensity 8200":0.75,"Dimensity 8100":0.72,"Dimensity 8050":0.70,
    "Dimensity 7200":0.60,"Dimensity 7050":0.55,"Dimensity 7020":0.50,
    "Dimensity 1200":0.68,"Dimensity 1100":0.65,"Dimensity 920":0.55,
    "Helio G99":0.42,"Helio G96":0.40,"Helio G95":0.38,"Helio G88":0.35,"Helio G85":0.33,"Helio G80":0.31,
    "Apple A17 Pro":1.10,"Apple A16 Bionic":1.05,"Apple A15 Bionic":1.00,
    "Apple A14 Bionic":0.92,"Apple A13 Bionic":0.85,"Apple A12 Bionic":0.75,
    "Exynos 2400":0.93,"Exynos 2200":0.85,"Exynos 2100":0.80,
    "Exynos 1480":0.65,"Exynos 1380":0.60,"Exynos 1330":0.50,"Exynos 1280":0.55,
    "Google Tensor G3":0.88,"Google Tensor G2":0.82,"Google Tensor":0.75,
    "Kirin 9000S":0.87,"Kirin 9000":0.85,"Kirin 990 5G":0.78
};

const hardwareSpecs = {
    cpu: {
        "Intel Core i9-14900KS":[700,150,24,98,95,100],"Intel Core i9-14900K":[590,125,24,97,94,98],
        "Intel Core i9-13900KS":[700,150,24,95,92,97],"Intel Core i9-13900K":[590,125,24,94,91,95],
        "Intel Core i9-13900":[480,65,24,90,88,92],"Intel Core i7-14700K":[420,125,20,92,89,91],
        "Intel Core i7-13700K":[410,125,16,90,87,89],"Intel Core i7-13700":[380,65,16,85,84,86],
        "Intel Core i7-12700K":[380,125,12,88,85,85],"Intel Core i5-14600K":[330,125,14,86,82,83],
        "Intel Core i5-13600K":[320,125,14,85,81,82],"Intel Core i5-13400":[220,65,10,75,72,74],
        "Intel Core i5-12400":[180,65,6,70,68,70],"AMD Ryzen 9 7950X3D":[700,120,16,100,92,98],
        "AMD Ryzen 9 7950X":[550,170,16,96,95,100],"AMD Ryzen 9 7900X":[430,170,12,92,91,94],
        "AMD Ryzen 7 7800X3D":[450,120,8,98,84,82],"AMD Ryzen 7 7700X":[330,105,8,88,82,80],
        "AMD Ryzen 7 5800X3D":[360,105,8,95,78,75],"AMD Ryzen 7 5800X":[280,105,8,85,76,74],
        "AMD Ryzen 7 5700X":[200,65,8,80,73,71],"AMD Ryzen 5 7600X":[250,105,6,84,78,72],
        "AMD Ryzen 5 7600":[220,65,6,82,76,70],"AMD Ryzen 5 5600X":[180,65,6,78,70,68],
        "AMD Ryzen 5 5600":[140,65,6,75,68,65],"AMD Ryzen 5 3600":[120,65,6,65,62,60]
    },
    gpu: {
        "NVIDIA RTX 4090":[1600,450,100,98,100],"NVIDIA RTX 4080":[1200,320,98,95,96],
        "NVIDIA RTX 4070 Ti":[800,285,95,90,92],"NVIDIA RTX 4070":[600,200,92,85,88],
        "NVIDIA RTX 4060 Ti 8GB":[400,160,80,75,78],"NVIDIA RTX 4060":[300,115,75,70,72],
        "NVIDIA RTX 3090":[1500,350,95,92,94],"NVIDIA RTX 3080":[700,320,92,88,90],
        "NVIDIA RTX 3070":[500,220,85,82,84],"NVIDIA RTX 3060 Ti":[400,200,78,76,78],
        "NVIDIA RTX 3060 12GB":[330,170,70,68,70],"NVIDIA RTX 2080 Ti":[1200,250,82,80,82],
        "AMD RX 7900 XTX":[1000,355,98,96,98],"AMD RX 7900 XT":[900,300,95,92,94],
        "AMD RX 7800 XT":[500,263,88,84,86],"AMD RX 7700 XT":[450,245,82,78,80],
        "AMD RX 7600":[270,165,72,68,70],"AMD RX 6950 XT":[1100,335,92,88,90],
        "AMD RX 6900 XT":[1000,300,90,86,88],"AMD RX 6800 XT":[650,300,88,84,86],
        "AMD RX 6700 XT":[480,230,78,74,76],"AMD RX 6600 XT":[380,160,70,66,68],
        "AMD RX 6600":[330,132,65,62,64]
    }
};

const gamesList = [
    {name:"Valorant",demand:"low",visible:true},{name:"CS2",demand:"low",visible:true},
    {name:"Fortnite",demand:"medium",visible:true},{name:"Apex Legends",demand:"medium",visible:true},
    {name:"GTA V",demand:"medium",visible:true},{name:"Minecraft",demand:"low",visible:true},
    {name:"League of Legends",demand:"low",visible:true},{name:"Cyberpunk 2077",demand:"ultra",visible:true},
    {name:"Elden Ring",demand:"medium",visible:true},{name:"Call of Duty Warzone",demand:"high",visible:true},
    {name:"Overwatch 2",demand:"medium",visible:true},{name:"Rainbow Six Siege",demand:"medium",visible:true},
    {name:"PUBG",demand:"medium",visible:true},{name:"Dota 2",demand:"low",visible:true},
    {name:"Roblox",demand:"low",visible:true},
    {name:"Battlefield 2042",demand:"high",visible:false},{name:"Escape from Tarkov",demand:"high",visible:false},
    {name:"Red Dead Redemption 2",demand:"high",visible:false},{name:"The Witcher 3",demand:"medium",visible:false},
    {name:"Hogwarts Legacy",demand:"high",visible:false},{name:"Starfield",demand:"ultra",visible:false},
    {name:"Forza Horizon 5",demand:"medium",visible:false},{name:"FIFA 24",demand:"low",visible:false},
    {name:"Rust",demand:"high",visible:false},{name:"ARK Survival Evolved",demand:"high",visible:false},
    {name:"Assassin's Creed Valhalla",demand:"high",visible:false},{name:"Far Cry 6",demand:"high",visible:false},
    {name:"Spider-Man Remastered",demand:"high",visible:false},{name:"God of War",demand:"high",visible:false},
    {name:"F1 23",demand:"medium",visible:false},{name:"Need for Speed Unbound",demand:"high",visible:false},
    {name:"NBA 2K24",demand:"low",visible:false},{name:"Destiny 2",demand:"medium",visible:false},
    {name:"Warframe",demand:"low",visible:false},{name:"Monster Hunter World",demand:"high",visible:false},
    {name:"Civilization VI",demand:"low",visible:false},{name:"Age of Empires IV",demand:"medium",visible:false},
    {name:"Total War Warhammer III",demand:"high",visible:false},{name:"World of Warcraft",demand:"medium",visible:false},
    {name:"Final Fantasy XIV",demand:"medium",visible:false},{name:"Resident Evil 4 Remake",demand:"high",visible:false},
    {name:"Dead by Daylight",demand:"medium",visible:false},{name:"Phasmophobia",demand:"low",visible:false},
    {name:"Valheim",demand:"medium",visible:false},{name:"DayZ",demand:"medium",visible:false},
    {name:"Hades",demand:"low",visible:false},{name:"Hollow Knight",demand:"low",visible:false},
    {name:"Stardew Valley",demand:"low",visible:false},{name:"Terraria",demand:"low",visible:false},
    {name:"Minecraft Dungeons",demand:"low",visible:false},{name:"Lost Ark",demand:"medium",visible:false},
    {name:"Devil May Cry 5",demand:"medium",visible:false},{name:"Dying Light 2",demand:"high",visible:false},
    {name:"Alan Wake 2",demand:"ultra",visible:false},{name:"The Last of Us Part I",demand:"ultra",visible:false},
    {name:"Baldur's Gate 3",demand:"high",visible:false},{name:"Diablo IV",demand:"medium",visible:false},
    {name:"Payday 3",demand:"high",visible:false},{name:"Cities Skylines 2",demand:"high",visible:false},
    {name:"Star Citizen",demand:"ultra",visible:false},{name:"Microsoft Flight Simulator",demand:"ultra",visible:false},
    {name:"Satisfactory",demand:"medium",visible:false},{name:"Palworld",demand:"medium",visible:false},
    {name:"Lethal Company",demand:"low",visible:false},{name:"Sons of the Forest",demand:"high",visible:false},
    {name:"Atomic Heart",demand:"high",visible:false},{name:"Remnant 2",demand:"high",visible:false},
    {name:"Lies of P",demand:"medium",visible:false},{name:"Armored Core VI",demand:"medium",visible:false},
    {name:"Street Fighter 6",demand:"medium",visible:false},{name:"Mortal Kombat 1",demand:"medium",visible:false},
    {name:"Tekken 8",demand:"medium",visible:false},{name:"EA Sports FC 24",demand:"low",visible:false},
    {name:"Madden NFL 24",demand:"low",visible:false},{name:"MLB The Show 24",demand:"low",visible:false},
    {name:"Gran Turismo 7",demand:"high",visible:false},{name:"Assetto Corsa Competizione",demand:"high",visible:false},
    {name:"iRacing",demand:"medium",visible:false},{name:"BeamNG.drive",demand:"medium",visible:false},
    {name:"Project Cars 3",demand:"medium",visible:false},{name:"WRC Generations",demand:"medium",visible:false},
    {name:"Ready or Not",demand:"medium",visible:false},{name:"Squad",demand:"high",visible:false},
    {name:"Hell Let Loose",demand:"high",visible:false},{name:"Insurgency Sandstorm",demand:"medium",visible:false},
    {name:"Hunt Showdown",demand:"high",visible:false},{name:"Tarkov Arena",demand:"high",visible:false},
    {name:"Sea of Thieves",demand:"medium",visible:false},{name:"No Man's Sky",demand:"medium",visible:false},
    {name:"Elite Dangerous",demand:"medium",visible:false},{name:"Subnautica",demand:"medium",visible:false},
    {name:"The Forest",demand:"medium",visible:false},{name:"7 Days to Die",demand:"medium",visible:false},
    {name:"Conan Exiles",demand:"medium",visible:false},{name:"V Rising",demand:"medium",visible:false},
    {name:"Grounded",demand:"medium",visible:false},{name:"Deep Rock Galactic",demand:"low",visible:false},
    {name:"Risk of Rain 2",demand:"low",visible:false},{name:"Gunfire Reborn",demand:"low",visible:false},
    {name:"Vampire Survivors",demand:"low",visible:false},{name:"Slay the Spire",demand:"low",visible:false},
    {name:"Darkest Dungeon",demand:"low",visible:false},{name:"Into the Breach",demand:"low",visible:false}
];

const mobileGames = [
    {name:"PUBG Mobile",demand:"high"},{name:"Call of Duty Mobile",demand:"high"},
    {name:"Genshin Impact",demand:"ultra"},{name:"Honkai Star Rail",demand:"high"},
    {name:"Mobile Legends",demand:"medium"},{name:"Free Fire",demand:"medium"},
    {name:"Fortnite Mobile",demand:"high"},{name:"Minecraft Mobile",demand:"low"},
    {name:"Clash of Clans",demand:"low"},{name:"Clash Royale",demand:"low"},
    {name:"Brawl Stars",demand:"low"},{name:"Asphalt 9",demand:"high"},
    {name:"Arena of Valor",demand:"medium"},{name:"League of Legends Wild Rift",demand:"medium"},
    {name:"Diablo Immortal",demand:"high"},{name:"Tower of Fantasy",demand:"high"},
    {name:"Roblox Mobile",demand:"low"},{name:"Among Us",demand:"low"},
    {name:"Subway Surfers",demand:"low"},{name:"Candy Crush Saga",demand:"low"}
];

const productivityApps = [
    {name:"Adobe Premiere Pro",cpuW:0.5,gpuW:0.3,ramMin:16,category:"Video"},
    {name:"DaVinci Resolve",cpuW:0.3,gpuW:0.7,ramMin:16,category:"Video"},
    {name:"Final Cut Pro",cpuW:0.5,gpuW:0.4,ramMin:8,category:"Video"},
    {name:"Adobe After Effects",cpuW:0.5,gpuW:0.3,ramMin:16,category:"Video"},
    {name:"Sony Vegas Pro",cpuW:0.5,gpuW:0.3,ramMin:8,category:"Video"},
    {name:"Filmora",cpuW:0.4,gpuW:0.2,ramMin:8,category:"Video"},
    {name:"Adobe Photoshop",cpuW:0.4,gpuW:0.2,ramMin:8,category:"Photo"},
    {name:"Adobe Lightroom",cpuW:0.5,gpuW:0.2,ramMin:8,category:"Photo"},
    {name:"GIMP",cpuW:0.3,gpuW:0.1,ramMin:4,category:"Photo"},
    {name:"Affinity Photo",cpuW:0.4,gpuW:0.2,ramMin:8,category:"Photo"},
    {name:"Blender",cpuW:0.4,gpuW:0.6,ramMin:8,category:"3D"},
    {name:"Cinema 4D",cpuW:0.4,gpuW:0.6,ramMin:16,category:"3D"},
    {name:"Maya",cpuW:0.5,gpuW:0.5,ramMin:16,category:"3D"},
    {name:"3ds Max",cpuW:0.4,gpuW:0.6,ramMin:16,category:"3D"},
    {name:"SketchUp",cpuW:0.3,gpuW:0.4,ramMin:8,category:"3D"},
    {name:"AutoCAD",cpuW:0.6,gpuW:0.2,ramMin:8,category:"CAD"},
    {name:"SolidWorks",cpuW:0.5,gpuW:0.3,ramMin:16,category:"CAD"},
    {name:"Fusion 360",cpuW:0.5,gpuW:0.3,ramMin:8,category:"CAD"},
    {name:"Unity",cpuW:0.5,gpuW:0.4,ramMin:8,category:"GameDev"},
    {name:"Unreal Engine 5",cpuW:0.4,gpuW:0.6,ramMin:32,category:"GameDev"},
    {name:"Godot",cpuW:0.3,gpuW:0.2,ramMin:4,category:"GameDev"},
    {name:"Visual Studio",cpuW:0.5,gpuW:0.0,ramMin:8,category:"Dev"},
    {name:"VS Code",cpuW:0.2,gpuW:0.0,ramMin:4,category:"Dev"},
    {name:"Android Studio",cpuW:0.6,gpuW:0.1,ramMin:8,category:"Dev"},
    {name:"IntelliJ IDEA",cpuW:0.5,gpuW:0.0,ramMin:8,category:"Dev"},
    {name:"Xcode",cpuW:0.5,gpuW:0.1,ramMin:8,category:"Dev"},
    {name:"Figma",cpuW:0.3,gpuW:0.1,ramMin:8,category:"Design"},
    {name:"Adobe Illustrator",cpuW:0.4,gpuW:0.2,ramMin:8,category:"Design"},
    {name:"Adobe XD",cpuW:0.3,gpuW:0.1,ramMin:4,category:"Design"},
    {name:"Affinity Designer",cpuW:0.3,gpuW:0.1,ramMin:4,category:"Design"},
    {name:"OBS Studio",cpuW:0.5,gpuW:0.3,ramMin:8,category:"Streaming"},
    {name:"Streamlabs",cpuW:0.5,gpuW:0.3,ramMin:8,category:"Streaming"},
    {name:"XSplit",cpuW:0.5,gpuW:0.3,ramMin:8,category:"Streaming"},
    {name:"Ableton Live",cpuW:0.6,gpuW:0.0,ramMin:8,category:"Audio"},
    {name:"FL Studio",cpuW:0.5,gpuW:0.0,ramMin:4,category:"Audio"},
    {name:"Logic Pro",cpuW:0.6,gpuW:0.0,ramMin:8,category:"Audio"},
    {name:"Audacity",cpuW:0.2,gpuW:0.0,ramMin:2,category:"Audio"}
];

// ─── AUTOCOMPLETE ─────────────────────────────────────────────────────
function setupAutocomplete(inputId, list) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const old = input.parentElement.querySelector(".autocomplete-dropdown");
    if (old) old.remove();
    const dropdown = document.createElement("div");
    dropdown.className = "autocomplete-dropdown";
    input.parentElement.style.position = "relative";
    input.parentElement.appendChild(dropdown);
    function close() {
        dropdown.classList.remove("open");
        dropdown.innerHTML = "";
        input.style.borderRadius = "8px";
    }
    function open(matches, val) {
        dropdown.innerHTML = "";
        matches.forEach(match => {
            const opt = document.createElement("div");
            opt.className = "autocomplete-option";
            const safe = val.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            opt.innerHTML = match.replace(new RegExp(safe, "gi"), m => `<span style="color:var(--accent);font-weight:600">${m}</span>`);
            opt.addEventListener("mousedown", e => {
                e.preventDefault();
                input.value = match;
                close();
                input.style.borderColor = "var(--accent)";
                input.style.boxShadow = "0 0 0 3px rgba(0,212,255,0.1)";
            });
            opt.addEventListener("mouseover", () => opt.classList.add("hovered"));
            opt.addEventListener("mouseout", () => opt.classList.remove("hovered"));
            dropdown.appendChild(opt);
        });
        dropdown.classList.add("open");
        input.style.borderRadius = "8px 8px 0 0";
    }
    input.addEventListener("input", function () {
        const val = this.value.toLowerCase().trim();
        if (!val) { close(); return; }
        const matches = list.filter(i => i.toLowerCase().includes(val)).slice(0, 8);
        if (!matches.length) {
            dropdown.innerHTML = `<div class="autocomplete-no-results">No results found</div>`;
            dropdown.classList.add("open");
            input.style.borderRadius = "8px 8px 0 0";
            return;
        }
        open(matches, val);
    });
    input.addEventListener("blur", () => setTimeout(close, 160));
}

// ─── FPS CALCULATION ─────────────────────────────────────────────────
const RES_DIVISOR = { "720p": 0.56, "1080p": 1.0, "1440p": 1.78, "4K": 4.0 };
const DEMAND_BASE = { low: 320, medium: 200, high: 130, ultra: 75 };

function calcFPS(cpuScore, gpuScore, ram, resolution, demand) {
    const resMult = RES_DIVISOR[resolution] || 1.0;
    const base = DEMAND_BASE[demand] || 200;
    const ramMult = ram < 8 ? 0.70 : ram < 16 ? 0.88 : 1.0;
    const perf = gpuScore * 0.65 + cpuScore * 0.35;
    const rawMid = (perf * base) / resMult * ramMult;
    const rawLow = rawMid * 1.45;
    const rawHigh = rawMid * 0.68;
    return {
        low: Math.min(Math.round(rawLow), 999),
        mid: Math.min(Math.round(rawMid), 999),
        high: Math.min(Math.round(rawHigh), 999)
    };
}

function colourCell(cell) {
    const fps = parseInt(cell.textContent);
    if (isNaN(fps)) { cell.style.color = ""; return; }
    cell.style.color = fps >= 60 ? "var(--green)" : fps >= 30 ? "var(--yellow)" : "var(--red)";
}

// ─── FPS CHECK BUTTON ─────────────────────────────────────────────────
document.getElementById("check-fps-btn").addEventListener("click", function () {
    const cpu = document.getElementById("cpu").value.trim();
    const gpu = document.getElementById("gpu").value.trim();
    const ram = parseInt(document.getElementById("ram").value);
    const res = document.getElementById("resolution").value;
    if (!cpu || !gpu || !ram) { alert("Please fill in CPU, GPU, and RAM."); return; }
    const cScore = cpuScores[cpu];
    const gScore = gpuScores[gpu];
    if (!cScore) { alert(`CPU not found: "${cpu}"\nPlease select from the suggestions.`); return; }
    if (!gScore) { alert(`GPU not found: "${gpu}"\nPlease select from the suggestions.`); return; }
    const status = document.getElementById("ai-status");
    const btn = this;
    status.style.display = "flex";
    btn.disabled = true;
    btn.textContent = "Calculating...";
    setTimeout(() => {
        document.querySelectorAll("#games-tbody tr").forEach(row => {
            const name = row.cells[0].textContent.trim();
            const game = gamesList.find(g => g.name === name);
            if (!game) return;
            const fps = calcFPS(cScore, gScore, ram, res, game.demand);
            row.cells[1].textContent = fps.low;
            row.cells[2].textContent = fps.mid;
            row.cells[3].textContent = fps.high;
            [1, 2, 3].forEach(i => colourCell(row.cells[i]));
        });
        const rows = [...document.querySelectorAll("#games-tbody tr")];
        const total = rows.length;
        const running = rows.filter(r => parseInt(r.cells[2].textContent) >= 60).length;
        const pct = running / total;
        const cc = pct >= 0.75 ? "var(--green)" : pct >= 0.4 ? "var(--yellow)" : "var(--red)";
        const counter = document.getElementById("fps-counter");
        counter.style.display = "block";
        counter.innerHTML = `<div class="counter-num" style="color:${cc}">${running}<span> / ${total}</span></div>
            <div class="counter-label">games run at 60+ FPS on medium settings</div>`;
        status.style.display = "none";
        btn.disabled = false;
        btn.textContent = "⚡ CHECK FPS";
        saveFPSSnapshot();
        updatePriceInfo();
        showUpgradeRecommendations(cpu, gpu, ram, cScore, gScore);
    }, 300);
});

// ─── GAME SEARCH & SHOW ALL ───────────────────────────────────────────
let allGamesVisible = false;

document.getElementById("game-search").addEventListener("input", function () {
    const q = this.value.toLowerCase().trim();
    document.querySelectorAll("#games-tbody tr").forEach(row => {
        const name = row.cells[0].textContent.toLowerCase();
        if (!q) {
            const game = gamesList.find(g => g.name === row.cells[0].textContent.trim());
            if (game) {
                row.style.display = (game.visible || allGamesVisible) ? "" : "none";
            }
        } else {
            row.style.display = name.includes(q) ? "" : "none";
        }
    });
});

function toggleAllGames() {
    allGamesVisible = !allGamesVisible;
    const searchValue = document.getElementById("game-search").value.trim();
    if (!searchValue) {
        document.querySelectorAll("#games-tbody tr").forEach(row => {
            const game = gamesList.find(g => g.name === row.cells[0].textContent.trim());
            if (game && !game.visible) {
                row.style.display = allGamesVisible ? "" : "none";
            }
        });
    }
    const hiddenCount = gamesList.filter(g => !g.visible).length;
    document.getElementById("show-all-btn").textContent = allGamesVisible
        ? "Show Less"
        : `Show All Games (+${hiddenCount} more)`;
}

// ─── BUILD OPTIMIZER ──────────────────────────────────────────────────
const buildDatabase = {
    gaming: {
        "1080p": [
            {cpu:"Intel Core i5-13400",gpu:"NVIDIA RTX 4060",price:1100,ram:16},
            {cpu:"AMD Ryzen 5 7600",gpu:"AMD RX 7600",price:1000,ram:16},
            {cpu:"Intel Core i7-13700",gpu:"NVIDIA RTX 4070",price:1700,ram:16},
            {cpu:"Intel Core i9-13900K",gpu:"NVIDIA RTX 4090",price:3500,ram:32}
        ],
        "1440p": [
            {cpu:"Intel Core i7-13700",gpu:"NVIDIA RTX 4070",price:1700,ram:16},
            {cpu:"Intel Core i9-13900K",gpu:"NVIDIA RTX 4080",price:2800,ram:32}
        ],
        "4k": [
            {cpu:"Intel Core i9-13900K",gpu:"NVIDIA RTX 4090",price:3500,ram:32},
            {cpu:"AMD Ryzen 9 7950X",gpu:"NVIDIA RTX 4090",price:3700,ram:64}
        ]
    },
    productivity: {
        "1080p": [{cpu:"AMD Ryzen 7 5700X",gpu:"AMD RX 6600",price:900,ram:32}],
        "1440p": [{cpu:"Intel Core i9-13900",gpu:"NVIDIA RTX 4070",price:2300,ram:64}],
        "4k": [{cpu:"AMD Ryzen 9 7950X",gpu:"NVIDIA RTX 4080",price:3200,ram:64}]
    },
    balanced: {
        "1080p": [{cpu:"Intel Core i7-13700",gpu:"NVIDIA RTX 4070",price:1700,ram:16}],
        "1440p": [{cpu:"Intel Core i9-13900",gpu:"NVIDIA RTX 4080",price:2700,ram:32}],
        "4k": [{cpu:"AMD Ryzen 9 7950X",gpu:"NVIDIA RTX 4090",price:3700,ram:64}]
    },
    budget: {
        "1080p": [
            {cpu:"Intel Core i5-12400",gpu:"NVIDIA GTX 1660 Super",price:500,ram:16},
            {cpu:"AMD Ryzen 5 5600",gpu:"AMD RX 6600",price:700,ram:16}
        ],
        "1440p": [{cpu:"Intel Core i5-13400",gpu:"NVIDIA RTX 4060 Ti 8GB",price:1100,ram:16}],
        "4k": [{cpu:"Intel Core i7-13700",gpu:"NVIDIA RTX 4070",price:1700,ram:16}]
    }
};

let optimizerBuilds = [];

function optimizeBuild() {
    const budget = parseInt(document.getElementById("opt-budget").value);
    const usecase = document.getElementById("opt-usecase").value;
    const resolution = document.getElementById("opt-resolution").value;
    if (!budget) { alert("Please enter a budget"); return; }
    const buildList = buildDatabase[usecase][resolution];
    const sorted = buildList.map(b => ({...b, diff: Math.abs(b.price - budget)})).sort((a, b) => a.diff - b.diff).slice(0, 3);
    optimizerBuilds = sorted;
    sorted.forEach((build, idx) => {
        const card = idx + 1;
        const cScore = cpuScores[build.cpu] || 0.8;
        const gScore = gpuScores[build.gpu] || 0.7;
        const avgScore = ((cScore + gScore) / 2 * 100).toFixed(0);
        document.querySelector(`#opt-card-${card} .opt-name`).textContent = 
            `${build.cpu.replace("Intel Core ", "").replace("AMD Ryzen ", "")} + ${build.gpu.replace("NVIDIA ", "").replace("AMD ", "")}`;
        document.querySelector(`#opt-card-${card} .opt-specs`).innerHTML = `
            <strong>${build.cpu}</strong><br><strong>${build.gpu}</strong><br>${build.ram}GB RAM`;
        document.querySelector(`#opt-card-${card} .opt-price`).textContent = `$${build.price}`;
        const priceDiff = budget - build.price;
        const diffText = priceDiff > 0 ? `$${priceDiff} under budget` : 
                        priceDiff < 0 ? `$${Math.abs(priceDiff)} over budget` : "On budget";
        document.querySelector(`#opt-card-${card} .opt-performance`).textContent = 
            `Performance Score: ${avgScore}/100 • ${diffText}`;
    });
    document.getElementById("optimizer-results").style.display = "block";
    document.getElementById("optimizer-result").style.display = "none";
}

function useOptimizedBuild(buildNum) {
    const build = optimizerBuilds[buildNum - 1];
    if (!build) return;
    document.getElementById("cpu").value = build.cpu;
    document.getElementById("gpu").value = build.gpu;
    document.getElementById("ram").value = build.ram;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => alert(`✅ Build loaded!\n\nClick "CHECK FPS" to see performance.`), 500);
}

// ─── SAVE & SHARE ─────────────────────────────────────────────────────
function saveBuild() {
    const cpu = document.getElementById("cpu").value.trim();
    const gpu = document.getElementById("gpu").value.trim();
    const ram = document.getElementById("ram").value;
    if (!cpu || !gpu || !ram) { alert("Please enter CPU, GPU, and RAM first"); return; }
    const buildName = prompt("Name this build:", `${cpu.split(" ").pop()} + ${gpu.split(" ").pop()}`);
    if (!buildName) return;
    const build = {
        name: buildName, cpu: cpu, gpu: gpu, ram: parseInt(ram),
        resolution: document.getElementById("resolution").value,
        date: new Date().toLocaleDateString()
    };
    let saved = JSON.parse(localStorage.getItem("speccheck-builds") || "[]");
    saved.unshift(build);
    saved = saved.slice(0, 20);
    localStorage.setItem("speccheck-builds", JSON.stringify(saved));
    alert(`✅ Build "${buildName}" saved!`);
}

function shareMyPC() {
    const cpu = document.getElementById("cpu").value.trim();
    const gpu = document.getElementById("gpu").value.trim();
    const ram = document.getElementById("ram").value;
    const res = document.getElementById("resolution").value;
    if (!cpu || !gpu || !ram) { alert("Please enter CPU, GPU, and RAM first"); return; }
    const data = { cpu, gpu, ram, res };
    const encoded = btoa(JSON.stringify(data));
    const url = `${window.location.origin}${window.location.pathname}?build=${encoded}`;
    navigator.clipboard.writeText(url).then(() => {
        alert("✅ Share link copied to clipboard!\n\nPaste it to share your build with friends.");
    }).catch(() => { prompt("Copy this link:", url); });
}

function showSavedBuilds() {
    const saved = JSON.parse(localStorage.getItem("speccheck-builds") || "[]");
    const list = document.getElementById("saved-builds-list");
    if (saved.length === 0) {
        list.innerHTML = `<p style="text-align:center; color:var(--text3); padding:40px">
            No saved builds yet.<br>Click "Save Current Build" to start collecting builds!</p>`;
    } else {
        list.innerHTML = saved.map((build, idx) => `
            <div class="saved-build-item">
                <div class="saved-build-header">
                    <div class="saved-build-name">${build.name}</div>
                    <div class="saved-build-date">${build.date}</div>
                </div>
                <div class="saved-build-specs">${build.cpu} + ${build.gpu}<br>${build.ram}GB RAM • ${build.resolution}</div>
                <div class="saved-build-actions">
                    <button class="btn-secondary" onclick="loadSavedBuild(${idx})">Load</button>
                    <button class="btn-secondary" onclick="deleteSavedBuild(${idx})" 
                        style="background:transparent; color:var(--red); border-color:var(--red)">Delete</button>
                </div>
            </div>`).join("");
    }
    document.getElementById("saved-builds-modal").style.display = "flex";
}

function closeSavedBuilds() {
    document.getElementById("saved-builds-modal").style.display = "none";
}

function loadSavedBuild(idx) {
    const saved = JSON.parse(localStorage.getItem("speccheck-builds") || "[]");
    const build = saved[idx];
    if (!build) return;
    document.getElementById("cpu").value = build.cpu;
    document.getElementById("gpu").value = build.gpu;
    document.getElementById("ram").value = build.ram;
    document.getElementById("resolution").value = build.resolution;
    closeSavedBuilds();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => alert(`✅ Build "${build.name}" loaded!`), 500);
}

function deleteSavedBuild(idx) {
    if (!confirm("Delete this build?")) return;
    let saved = JSON.parse(localStorage.getItem("speccheck-builds") || "[]");
    saved.splice(idx, 1);
    localStorage.setItem("speccheck-builds", JSON.stringify(saved));
    showSavedBuilds();
}

// ─── BUILD HISTORY ────────────────────────────────────────────────────
function saveFPSSnapshot() {
    const cpu = document.getElementById("cpu").value.trim();
    const gpu = document.getElementById("gpu").value.trim();
    const ram = document.getElementById("ram").value;
    if (!cpu || !gpu) return;
    const rows = [...document.querySelectorAll("#games-tbody tr")].filter(r => r.style.display !== "none");
    const avgFPS = rows.reduce((sum, row) => {
        const mid = parseInt(row.cells[2].textContent);
        return sum + (isNaN(mid) ? 0 : mid);
    }, 0) / rows.length;
    if (isNaN(avgFPS) || avgFPS === 0) return;
    const snapshot = {
        date: new Date().toLocaleString(), cpu: cpu, gpu: gpu, ram: parseInt(ram), avgFPS: Math.round(avgFPS)
    };
    let history = JSON.parse(localStorage.getItem("speccheck-history") || "[]");
    history.unshift(snapshot);
    history = history.slice(0, 10);
    localStorage.setItem("speccheck-history", JSON.stringify(history));
    renderHistory();
}

function renderHistory() {
    const history = JSON.parse(localStorage.getItem("speccheck-history") || "[]");
    if (history.length === 0) {
        document.getElementById("history-chart").style.display = "none";
        document.getElementById("history-table").style.display = "none";
        return;
    }
    const tbody = document.getElementById("history-tbody");
    tbody.innerHTML = history.map((snap, idx) => `
        <tr>
            <td>${snap.date}</td>
            <td>${snap.cpu.replace("Intel Core ", "").replace("AMD Ryzen ", "")}</td>
            <td>${snap.gpu.replace("NVIDIA ", "").replace("AMD ", "")}</td>
            <td style="color:var(--green)">${snap.avgFPS} FPS</td>
            <td><button class="btn-secondary" style="padding:4px 10px; font-size:11px" 
                    onclick="loadHistoryBuild(${idx})">Load</button></td>
        </tr>`).join("");
    document.getElementById("history-table").style.display = "block";
}

function loadHistoryBuild(idx) {
    const history = JSON.parse(localStorage.getItem("speccheck-history") || "[]");
    const snap = history[idx];
    if (!snap) return;
    document.getElementById("cpu").value = snap.cpu;
    document.getElementById("gpu").value = snap.gpu;
    document.getElementById("ram").value = snap.ram;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => alert("✅ Build loaded from history!"), 500);
}

function clearHistory() {
    if (!confirm("Clear all build history?")) return;
    localStorage.removeItem("speccheck-history");
    renderHistory();
    alert("✅ History cleared");
}

// ─── PRICE TRACKER ────────────────────────────────────────────────────
const componentPrices = {
    "Intel Core i9-14900KS": 700, "Intel Core i9-14900K": 590, "Intel Core i7-14700K": 420,
    "Intel Core i9-13900KS": 700, "Intel Core i9-13900K": 590, "Intel Core i7-13700K": 410,
    "Intel Core i7-13700": 380, "Intel Core i5-14600K": 330, "Intel Core i5-13600K": 320,
    "Intel Core i5-13400": 220, "Intel Core i7-12700K": 380, "Intel Core i5-12400": 180,
    "AMD Ryzen 9 7950X3D": 700, "AMD Ryzen 9 7950X": 550, "AMD Ryzen 9 7900X": 430,
    "AMD Ryzen 7 7800X3D": 450, "AMD Ryzen 7 7700X": 330, "AMD Ryzen 5 7600X": 250,
    "AMD Ryzen 5 7600": 220, "AMD Ryzen 7 5800X3D": 360, "AMD Ryzen 7 5800X": 280,
    "AMD Ryzen 7 5700X": 200, "AMD Ryzen 5 5600X": 180, "AMD Ryzen 5 5600": 140,
    "NVIDIA RTX 4090": 1600, "NVIDIA RTX 4080": 1200, "NVIDIA RTX 4070 Ti": 800,
    "NVIDIA RTX 4070": 600, "NVIDIA RTX 4060 Ti 8GB": 400, "NVIDIA RTX 4060": 300,
    "NVIDIA RTX 3090": 1500, "NVIDIA RTX 3080": 700, "NVIDIA RTX 3070": 500,
    "NVIDIA RTX 3060 Ti": 400, "NVIDIA RTX 3060 12GB": 330, "NVIDIA RTX 3050": 250,
    "NVIDIA RTX 2080 Ti": 1200, "NVIDIA GTX 1660 Ti": 280, "NVIDIA GTX 1660 Super": 250,
    "AMD RX 7900 XTX": 1000, "AMD RX 7900 XT": 900, "AMD RX 7800 XT": 500,
    "AMD RX 7700 XT": 450, "AMD RX 7600": 270, "AMD RX 6950 XT": 1100,
    "AMD RX 6900 XT": 1000, "AMD RX 6800 XT": 650, "AMD RX 6700 XT": 480,
    "AMD RX 6600 XT": 380, "AMD RX 6600": 330
};

function updatePriceInfo() {
    const cpu = document.getElementById("cpu").value.trim();
    const gpu = document.getElementById("gpu").value.trim();
    if (cpu && componentPrices[cpu]) {
        const price = componentPrices[cpu];
        document.getElementById("cpu-price-name").textContent = cpu.replace("Intel Core ", "").replace("AMD Ryzen ", "");
        document.getElementById("cpu-price").textContent = `$${price}`;
        const trend = Math.random() > 0.5 ? "↓" : "↑";
        const trendPct = (Math.random() * 10).toFixed(1);
        const trendColor = trend === "↓" ? "var(--green)" : "var(--red)";
        document.getElementById("cpu-trend").innerHTML = 
            `<span style="color:${trendColor}">${trend} ${trendPct}% vs last month</span>`;
        const link = document.getElementById("cpu-buy-link");
        link.href = `https://www.amazon.com/s?k=${encodeURIComponent(cpu)}`;
        link.style.display = "inline-block";
    } else {
        document.getElementById("cpu-price-name").textContent = "—";
        document.getElementById("cpu-price").textContent = "—";
        document.getElementById("cpu-trend").textContent = "—";
        document.getElementById("cpu-buy-link").style.display = "none";
    }
    if (gpu && componentPrices[gpu]) {
        const price = componentPrices[gpu];
        document.getElementById("gpu-price-name").textContent = gpu.replace("NVIDIA ", "").replace("AMD ", "");
        document.getElementById("gpu-price").textContent = `$${price}`;
        const trend = Math.random() > 0.5 ? "↓" : "↑";
        const trendPct = (Math.random() * 10).toFixed(1);
        const trendColor = trend === "↓" ? "var(--green)" : "var(--red)";
        document.getElementById("gpu-trend").innerHTML = 
            `<span style="color:${trendColor}">${trend} ${trendPct}% vs last month</span>`;
        const link = document.getElementById("gpu-buy-link");
        link.href = `https://www.amazon.com/s?k=${encodeURIComponent(gpu)}`;
        link.style.display = "inline-block";
    } else {
        document.getElementById("gpu-price-name").textContent = "—";
        document.getElementById("gpu-price").textContent = "—";
        document.getElementById("gpu-trend").textContent = "—";
        document.getElementById("gpu-buy-link").style.display = "none";
    }
}

// ─── COMPARE HARDWARE ─────────────────────────────────────────────────
let currentCompareTab = "cpu";

function showTab(tab) {
    currentCompareTab = tab;
    ["cpu", "gpu"].forEach(t => document.getElementById(t + "-tab").classList.toggle("active", t === tab));
    document.getElementById("compare1").value = "";
    document.getElementById("compare2").value = "";
    document.getElementById("compare-result").style.display = "none";
    const isCPU = tab === "cpu";
    document.getElementById("compare1").placeholder = isCPU ? "e.g Intel Core i7-12700K" : "e.g NVIDIA RTX 3080";
    document.getElementById("compare2").placeholder = isCPU ? "e.g AMD Ryzen 7 5800X" : "e.g AMD RX 6800 XT";
    setupAutocomplete("compare1", isCPU ? cpuList : gpuList);
    setupAutocomplete("compare2", isCPU ? cpuList : gpuList);
}

function compareHardware() {
    const a = document.getElementById("compare1").value.trim();
    const b = document.getElementById("compare2").value.trim();
    if (!a || !b) { alert("Please enter both items."); return; }
    const isCPU = currentCompareTab === "cpu";
    const scores = isCPU ? cpuScores : gpuScores;
    const specs = isCPU ? hardwareSpecs.cpu : hardwareSpecs.gpu;
    const sA = scores[a], sB = scores[b];
    if (!sA) { alert(`Not found: "${a}"`); return; }
    if (!sB) { alert(`Not found: "${b}"`); return; }
    const specA = specs[a] || (isCPU ? [300,100,8,75,75,75] : [500,200,80,80,80]);
    const specB = specs[b] || (isCPU ? [300,100,8,75,75,75] : [500,200,80,80,80]);
    const pA = Math.round(sA * 100);
    const pB = Math.round(sB * 100);
    const [priceA, tdpA, coresA, gamingA, prodA, multiA] = specA;
    const [priceB, tdpB, coresB, gamingB, prodB, multiB] = specB;
    const valueA = Math.round((pA / priceA) * 100);
    const valueB = Math.round((pB / priceB) * 100);
    const winner = sA > sB ? "left" : sB > sA ? "right" : null;
    const diff = Math.abs(pA - pB);
    const el = document.getElementById("compare-result");
    el.style.display = "block";
    document.querySelector(".fighter-left .fighter-name").textContent = a;
    document.querySelector(".fighter-right .fighter-name").textContent = b;
    document.getElementById("left-perf").textContent = `${pA}/100`;
    document.getElementById("right-perf").textContent = `${pB}/100`;
    document.getElementById("left-value").textContent = valueA > valueB ? "Better" : valueA === valueB ? "Equal" : "Worse";
    document.getElementById("right-value").textContent = valueB > valueA ? "Better" : valueB === valueA ? "Equal" : "Worse";
    document.getElementById("left-power").textContent = `${tdpA}W`;
    document.getElementById("right-power").textContent = `${tdpB}W`;
    animateRadialChart(".left-progress", pA);
    animateRadialChart(".right-progress", pB);
    document.querySelectorAll(".fighter-left .score-text")[0].textContent = pA;
    document.querySelectorAll(".fighter-right .score-text")[0].textContent = pB;
    const leftFighter = document.getElementById("fighter-left");
    const rightFighter = document.getElementById("fighter-right");
    leftFighter.classList.toggle("winner", winner === "left");
    rightFighter.classList.toggle("winner", winner === "right");
    const crown = document.getElementById("winner-crown");
    if (winner) {
        crown.style.display = "block";
        crown.style.transform = winner === "left" ? "translateX(-100px)" : "translateX(100px)";
    } else {
        crown.style.display = "none";
    }
    updateBreakdownBar("gaming", gamingA, gamingB);
    updateBreakdownBar("prod", prodA, prodB);
    updateBreakdownBar("multi", isCPU ? multiA : gamingA, isCPU ? multiB : gamingB);
    generateVerdict(a, b, winner, diff, pA, pB, valueA, valueB, isCPU);
}

function animateRadialChart(selector, percentage) {
    const circle = document.querySelector(selector);
    const circumference = 502.65;
    const offset = circumference - (percentage / 100) * circumference;
    circle.style.strokeDashoffset = circumference;
    setTimeout(() => { circle.style.strokeDashoffset = offset; }, 100);
}

function updateBreakdownBar(category, valA, valB) {
    const total = valA + valB;
    const percA = total > 0 ? (valA / total) * 50 : 0;
    const percB = total > 0 ? (valB / total) * 50 : 0;
    document.getElementById(`${category}-left`).style.width = `${percA}%`;
    document.getElementById(`${category}-right`).style.width = `${percB}%`;
    const diff = Math.abs(valA - valB);
    const winner = valA > valB ? "← Wins" : valB > valA ? "Wins →" : "Tie";
    const color = valA > valB ? "var(--accent)" : valB > valA ? "var(--green)" : "var(--text3)";
    const diffEl = document.getElementById(`${category}-diff`);
    diffEl.textContent = `${winner} (+${diff}%)`;
    diffEl.style.color = color;
}

function generateVerdict(a, b, winner, diff, pA, pB, valueA, valueB, isCPU) {
    const panel = document.getElementById("verdict-panel");
    let title, text, recommend;
    if (!winner) {
        title = "⚖️ It's a Perfect Tie!";
        text = `Both ${a} and ${b} score exactly ${pA}/100. Performance is identical.`;
        recommend = `Choose based on price, availability, or brand preference.`;
    } else {
        const winnerName = winner === "left" ? a : b;
        const loserName = winner === "left" ? b : a;
        const winnerVal = winner === "left" ? valueA : valueB;
        const loserVal = winner === "left" ? valueB : valueA;
        if (diff >= 30) {
            title = `🔥 ${winnerName} Dominates!`;
            text = `${winnerName} absolutely crushes ${loserName} with a massive ${diff}% performance lead.`;
        } else if (diff >= 15) {
            title = `⚡ ${winnerName} Wins!`;
            text = `${winnerName} outperforms ${loserName} by ${diff}%, offering noticeably better performance.`;
        } else {
            title = `✅ ${winnerName} Edges Ahead`;
            text = `${winnerName} has a slight ${diff}% advantage. Performance is very close.`;
        }
        if (winnerVal > loserVal * 1.2) {
            recommend = `💡 ${winnerName} also offers better value for money!`;
        } else if (loserVal > winnerVal * 1.2) {
            recommend = `💰 However, ${loserName} provides better value per dollar.`;
        } else {
            recommend = `Both offer similar price-to-performance ratios.`;
        }
    }
    panel.innerHTML = `<div class="verdict-title">${title}</div>
        <div class="verdict-text">${text}</div>
        <div class="verdict-recommend">${recommend}</div>`;
}

// ─── RATE MY PC ───────────────────────────────────────────────────────
function ratePC() {
    const cpu = document.getElementById("cpu").value.trim();
    const gpu = document.getElementById("gpu").value.trim();
    const ram = parseInt(document.getElementById("ram").value);
    if (!cpu || !gpu || !ram) { alert("Fill in your specs in the Gaming tab first."); return; }
    const cS = cpuScores[cpu]; if (!cS) { alert(`CPU not found: "${cpu}"`); return; }
    const gS = gpuScores[gpu]; if (!gS) { alert(`GPU not found: "${gpu}"`); return; }
    const ramScore = ram >= 64 ? 1.0 : ram >= 32 ? 0.95 : ram >= 16 ? 0.80 : ram >= 8 ? 0.60 : 0.30;
    const raw = cS * 0.30 + gS * 0.50 + ramScore * 0.20;
    const score = Math.min(Math.round(raw * 100) / 10, 10.0);
    let tier, colour, emoji;
    if (score >= 9.5) { tier = "Absolute Beast"; colour = "#ff4466"; emoji = "🔥"; }
    else if (score >= 8.0) { tier = "High-End"; colour = "var(--accent)"; emoji = "⚡"; }
    else if (score >= 6.5) { tier = "Upper Mid-Range"; colour = "var(--green)"; emoji = "✅"; }
    else if (score >= 5.0) { tier = "Mid-Range"; colour = "var(--yellow)"; emoji = "⚠️"; }
    else if (score >= 3.5) { tier = "Budget"; colour = "#ff9500"; emoji = "📦"; }
    else { tier = "Entry-Level"; colour = "var(--text3)"; emoji = "🥔"; }
    const cPct = Math.round(cS * 100);
    const gPct = Math.round(gS * 100);
    const ramPct = Math.round(ramScore * 100);
    const el = document.getElementById("rating-result");
    el.style.display = "block";
    el.innerHTML = `<div class="rating-score-num" style="color:${colour}">${score.toFixed(1)}<span>/10</span></div>
        <div class="rating-tier-label" style="color:${colour}">${emoji} ${tier}</div>
        <div id="rating-bars">${bar("CPU", cPct, colour)}${bar("GPU", gPct, colour)}${bar("RAM", ramPct, colour)}</div>`;
}

function bar(label, pct, colour) {
    return `<div class="bar-row"><div class="bar-label"><span>${label}</span><span>${pct}/100</span></div>
        <div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:${colour}"></div></div></div>`;
}

// ─── BOTTLENECK ───────────────────────────────────────────────────────
function checkBottleneck() {
    const cpu = document.getElementById("cpu").value.trim();
    const gpu = document.getElementById("gpu").value.trim();
    if (!cpu || !gpu) { alert("Enter CPU and GPU in the Gaming tab first."); return; }
    const cS = cpuScores[cpu]; if (!cS) { alert(`CPU not found: "${cpu}"`); return; }
    const gS = gpuScores[gpu]; if (!gS) { alert(`GPU not found: "${gpu}"`); return; }
    const diff = Math.abs(cS - gS);
    const bigger = Math.max(cS, gS);
    const pct = Math.round((diff / bigger) * 100);
    let title, desc, recommendation, colour;
    if (pct <= 10) {
        title = "✅ Well Balanced";
        desc = "Your CPU and GPU are perfectly matched.";
        recommendation = "No action needed — both components are working at their best.";
        colour = "var(--green)";
    } else if (cS < gS) {
        colour = pct >= 30 ? "var(--red)" : "var(--yellow)";
        title = `⚠️ CPU Bottleneck (${pct}%)`;
        desc = `Your CPU is ${pct}% slower than what your GPU can use.`;
        recommendation = pct >= 30
            ? `Strong bottleneck. Your GPU is significantly underutilised. A CPU upgrade will unlock more performance.`
            : `Mild bottleneck. Expect minor frame-time spikes in CPU-heavy games. A CPU upgrade would help.`;
    } else {
        colour = pct >= 30 ? "var(--red)" : "var(--yellow)";
        title = `⚠️ GPU Bottleneck (${pct}%)`;
        desc = `Your GPU is ${pct}% slower than your CPU can feed it.`;
        recommendation = pct >= 30
            ? `Strong bottleneck. Your CPU is idling while the GPU works hard. A GPU upgrade will have big gains.`
            : `Mild bottleneck. Upgrading your GPU will give noticeable improvement in graphically intensive games.`;
    }
    const el = document.getElementById("bottleneck-result");
    el.style.display = "block";
    el.innerHTML = `<div class="bottleneck-title" style="color:${colour}">${title}</div>
        <div class="bottleneck-percent" style="color:${colour}">${pct}%</div>
        <div class="bottleneck-desc">${desc}</div>
        <div class="bottleneck-recommendation">${recommendation}</div>`;
}

// ─── PRODUCTIVITY ─────────────────────────────────────────────────────
let activeCategory = "all";

function filterCategory(cat) {
    activeCategory = cat;
    document.querySelectorAll(".category-btn").forEach(b => b.classList.toggle("active", b.dataset.category === cat));
    renderProductivity();
}

function checkProductivity() {
    const cpu = document.getElementById("prod-cpu").value.trim();
    const gpu = document.getElementById("prod-gpu").value.trim();
    const ram = parseInt(document.getElementById("prod-ram").value);
    if (!cpu || !gpu || !ram) { alert("Please fill in all fields."); return; }
    const cS = cpuScores[cpu]; if (!cS) { alert(`CPU not found: "${cpu}"`); return; }
    const gS = gpuScores[gpu]; if (!gS) { alert(`GPU not found: "${gpu}"`); return; }
    window._prodCache = { cS, gS, ram };
    renderProductivity();
}

function renderProductivity() {
    const cache = window._prodCache;
    if (!cache) return;
    const { cS, gS, ram } = cache;
    const apps = activeCategory === "all" ? productivityApps : productivityApps.filter(a => a.category === activeCategory);
    const tbody = document.getElementById("productivity-results");
    tbody.innerHTML = "";
    apps.forEach(app => {
        const wTotal = app.cpuW + app.gpuW;
        const score = wTotal > 0 ? (cS * app.cpuW + gS * app.gpuW) / wTotal : cS;
        const ramOK = ram >= app.ramMin;
        let perf, verdict, colour;
        if (!ramOK) {
            perf = "Not Enough RAM"; verdict = `❌ Needs ${app.ramMin}GB+`; colour = "var(--red)";
        } else if (score >= 0.90) {
            perf = "Excellent"; verdict = "✅ Buttery Smooth"; colour = "var(--green)";
        } else if (score >= 0.70) {
            perf = "Good"; verdict = "✅ Runs Well"; colour = "var(--green)";
        } else if (score >= 0.50) {
            perf = "Fair"; verdict = "⚠️ Some Lag"; colour = "var(--yellow)";
        } else if (score >= 0.35) {
            perf = "Poor"; verdict = "⚠️ Significant Lag"; colour = "var(--yellow)";
        } else {
            perf = "Unusable"; verdict = "❌ Not Recommended"; colour = "var(--red)";
        }
        const row = document.createElement("tr");
        row.innerHTML = `<td>${app.name}</td><td style="color:${colour}">${perf}</td><td style="color:${colour}">${verdict}</td>`;
        tbody.appendChild(row);
    });
    document.getElementById("productivity-table").style.display = "";
}

// ─── PHONE ────────────────────────────────────────────────────────────
const MOBILE_CAP = { low:120, medium:90, high:60, ultra:60 };
const MOBILE_BASE = { low:200, medium:140, high:90, ultra:55 };

function calcMobileFPS(chipScore, ram, demand) {
    const base = MOBILE_BASE[demand] || 100;
    const cap = MOBILE_CAP[demand] || 60;
    const ramMult = ram < 4 ? 0.70 : ram < 6 ? 0.85 : ram < 8 ? 0.95 : 1.0;
    const raw = chipScore * base * ramMult;
    return Math.min(Math.round(raw), cap);
}

function mobileTier(chipScore, fps, demand) {
    if (demand === "ultra" || demand === "high") {
        if (fps >= 60) return "Max Settings";
        if (fps >= 45) return "High";
        if (fps >= 30) return "Medium";
        return "Low";
    }
    if (fps >= 90) return "Ultra";
    if (fps >= 60) return "High";
    if (fps >= 30) return "Medium";
    return "Low";
}

function mobileVerdict(fps) {
    if (fps >= 90) return "Excellent";
    if (fps >= 60) return "Smooth";
    if (fps >= 30) return "Playable";
    return "Struggles";
}

function checkPhone() {
    const chip = document.getElementById("phone-chip").value.trim();
    const ram = parseInt(document.getElementById("phone-ram").value);
    if (!chip || !ram) { alert("Enter chipset and RAM."); return; }
    const cS = phoneChipScores[chip];
    if (!cS) { alert(`Chipset not found: "${chip}"\nPlease select from suggestions.`); return; }
    const status = document.getElementById("phone-ai-status");
    const btn = document.getElementById("check-phone-btn");
    status.style.display = "flex";
    btn.disabled = true;
    btn.textContent = "Calculating...";
    setTimeout(() => {
        const tbody = document.getElementById("phone-results");
        tbody.innerHTML = "";
        mobileGames.forEach(game => {
            const fps = calcMobileFPS(cS, ram, game.demand);
            const settng = mobileTier(cS, fps, game.demand);
            const verd = mobileVerdict(fps);
            const fpsC = fps >= 60 ? "var(--green)" : fps >= 30 ? "var(--yellow)" : "var(--red)";
            const verdC = verd === "Excellent" || verd === "Smooth" ? "var(--green)"
                        : verd === "Struggles" ? "var(--red)" : "var(--yellow)";
            const row = document.createElement("tr");
            row.innerHTML = `<td>${game.name}</td><td style="color:${fpsC}">${fps} FPS</td>
                <td>${settng}</td><td style="color:${verdC}">${verd}</td>`;
            tbody.appendChild(row);
        });
        document.getElementById("phone-table").style.display = "";
        let tier;
        if (cS >= 1.05) tier = "Ultra Flagship (S-Tier)";
        else if (cS >= 0.90) tier = "Flagship";
        else if (cS >= 0.75) tier = "Upper Mid-Range";
        else if (cS >= 0.55) tier = "Mid-Range";
        else if (cS >= 0.38) tier = "Budget";
        else tier = "Entry-Level";
        const card = document.getElementById("phone-tier-result");
        card.style.display = "block";
        card.innerHTML = `<div class="phone-tier-label">📱 Device Tier</div>
            <div class="phone-tier-value">${tier}</div>
            <div class="phone-tier-sub">${chip} · ${ram}GB RAM</div>`;
        status.style.display = "none";
        btn.disabled = false;
        btn.textContent = "⚡ CHECK PERFORMANCE";
    }, 300);
}

// ─── POWER CALCULATOR ────────────────────────────────────────────────
function updatePower() {
    const cpu = document.getElementById("cpu").value.trim();
    const gpu = document.getElementById("gpu").value.trim();
    const psu = parseInt(document.getElementById("psu").value);
    const widget = document.getElementById("power-widget");
    const usage  = document.getElementById("power-usage");
    if (!psu) { widget.style.display = "none"; return; }

    const cpuSpec = hardwareSpecs.cpu[cpu];
    const gpuSpec = hardwareSpecs.gpu[gpu];
    const cpuTDP  = cpuSpec ? cpuSpec[1] : 95;
    const gpuTDP  = gpuSpec ? gpuSpec[1] : 150;
    const systemBase = 80; // motherboard, RAM, drives, fans
    const totalDraw   = cpuTDP + gpuTDP + systemBase;
    const headroom    = psu - totalDraw;
    const pct         = Math.min(Math.round((totalDraw / psu) * 100), 100);
    const barColor    = pct >= 90 ? "var(--red)" : pct >= 70 ? "var(--yellow)" : "var(--green)";
    const status      = pct >= 90 ? "⚠️ Dangerously close to PSU limit!" 
                      : pct >= 70 ? "⚡ Adequate — not much headroom"
                      : "✅ PSU has plenty of headroom";

    widget.style.display = "block";
    usage.innerHTML = `
        <div style="display:flex;justify-content:space-between;margin-bottom:6px">
            <span style="color:var(--text2)">Estimated draw: <strong style="color:var(--text)">${totalDraw}W</strong></span>
            <span style="color:var(--text2)">PSU: <strong style="color:var(--accent)">${psu}W</strong></span>
        </div>
        <div style="background:var(--bg);border-radius:4px;height:8px;overflow:hidden;margin-bottom:8px">
            <div style="width:${pct}%;height:100%;background:${barColor};border-radius:4px;transition:width 0.5s ease"></div>
        </div>
        <div style="font-size:12px;color:var(--text3)">${status} &nbsp;·&nbsp; ${headroom > 0 ? headroom + "W free" : "Upgrade your PSU!"}</div>
    `;
}

// ─── UPGRADE RECOMMENDATIONS ──────────────────────────────────────────
function showUpgradeRecommendations(cpu, gpu, ram, cScore, gScore) {
    const rec   = document.getElementById("upgrade-rec");
    const cont  = document.getElementById("upgrade-rec-content");
    const items = [];

    const diff = Math.abs(cScore - gScore);
    const pct  = Math.round((diff / Math.max(cScore, gScore)) * 100);

    // Bottleneck-based recs
    if (pct >= 20 && cScore < gScore) {
        const suggestions = cpuList.filter(c => (cpuScores[c] || 0) > cScore && (cpuScores[c] || 0) <= cScore + 0.3).slice(0, 3);
        items.push({
            icon: "🖥️", color: "var(--yellow)",
            title: "CPU is bottlenecking your GPU",
            body: `Your CPU is ${pct}% behind your GPU. Consider upgrading to: <strong>${suggestions.join(", ") || "a higher-tier CPU"}</strong>`
        });
    }
    if (pct >= 20 && gScore < cScore) {
        const suggestions = gpuList.filter(g => (gpuScores[g] || 0) > gScore && (gpuScores[g] || 0) <= gScore + 0.3).slice(0, 3);
        items.push({
            icon: "🎮", color: "var(--yellow)",
            title: "GPU is bottlenecking your CPU",
            body: `Your GPU is ${pct}% behind your CPU. Consider upgrading to: <strong>${suggestions.join(", ") || "a higher-tier GPU"}</strong>`
        });
    }

    // RAM recs
    if (ram < 16) {
        items.push({
            icon: "💾", color: "var(--red)",
            title: "RAM is too low",
            body: `You only have ${ram}GB RAM. Most modern games need 16GB minimum. Upgrading to 16GB will significantly improve performance.`
        });
    } else if (ram < 32) {
        items.push({
            icon: "💾", color: "var(--text3)",
            title: "Consider more RAM for future-proofing",
            body: `16GB is fine for now, but 32GB will help with heavy multitasking, streaming while gaming, and newer titles.`
        });
    }

    // Low-end GPU rec
    if (gScore < 0.5) {
        items.push({
            icon: "⚡", color: "var(--red)",
            title: "GPU is entry-level",
            body: `Your GPU will struggle with most modern games at medium settings. The <strong>RTX 3060</strong> or <strong>RX 6600 XT</strong> are great mid-range upgrades.`
        });
    }

    // Good build compliment
    if (items.length === 0) {
        items.push({
            icon: "✅", color: "var(--green)",
            title: "Your build is well balanced!",
            body: `No major bottlenecks detected. Your CPU, GPU and RAM work well together.`
        });
    }

    cont.innerHTML = items.map(item => `
        <div class="upgrade-item">
            <div class="upgrade-icon">${item.icon}</div>
            <div class="upgrade-body">
                <div class="upgrade-title" style="color:${item.color}">${item.title}</div>
                <div class="upgrade-text">${item.body}</div>
            </div>
        </div>
    `).join("");

    rec.style.display = "block";
}

// ─── THEME ────────────────────────────────────────────────────────────
function toggleTheme() {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");
    document.getElementById("theme-btn").textContent = isLight ? "🌙 Dark" : "☀️ Light";
    localStorage.setItem("speccheck-theme", isLight ? "light" : "dark");
}

// ─── INIT ─────────────────────────────────────────────────────────────
function populateGamesTable() {
    const tbody = document.getElementById("games-tbody");
    tbody.innerHTML = "";
    gamesList.forEach(game => {
        const row = document.createElement("tr");
        if (!game.visible) row.style.display = "none";
        row.innerHTML = `<td>${game.name}</td><td>—</td><td>—</td><td>—</td>`;
        tbody.appendChild(row);
    });
    const hiddenCount = gamesList.filter(g => !g.visible).length;
    document.getElementById("show-all-btn").textContent = `Show All Games (+${hiddenCount} more)`;
}

(function() {
    if (localStorage.getItem("speccheck-theme") === "light") {
        document.body.classList.add("light");
        document.getElementById("theme-btn").textContent = "🌙 Dark";
    }
    const params = new URLSearchParams(window.location.search);
    const build = params.get("build");
    if (build) {
        try {
            const data = JSON.parse(atob(build));
            document.getElementById("cpu").value = data.cpu || "";
            document.getElementById("gpu").value = data.gpu || "";
            document.getElementById("ram").value = data.ram || "";
            document.getElementById("resolution").value = data.res || "1080p";
            setTimeout(() => alert("✅ Shared build loaded!\n\nClick 'CHECK FPS' to see performance."), 500);
        } catch(e) { console.log("Invalid build link"); }
    }
    populateGamesTable();
    setupAutocomplete("cpu", cpuList);
    setupAutocomplete("gpu", gpuList);
    setupAutocomplete("prod-cpu", cpuList);
    setupAutocomplete("prod-gpu", gpuList);
    setupAutocomplete("phone-chip", phoneChipList);
    showTab("cpu");
})();