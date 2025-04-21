export class Product {
  constructor(
    name,
    description,
    price,
    image,
    brand,
    category,
    rating,
    reviewers,
    tags
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
    this.brand = brand;
    this.category = category;
    this.rating = rating;
    this.reviewers = reviewers;
    this.tags = tags;
  }
}

export let products = [
  // Laptops
  new Product(
    "Apple MacBook Air M2",
    "13.6-inch Liquid Retina, 8GB RAM, 256GB SSD",
    1099,
    "",
    "Apple",
    "Laptops",
    4.8,
    15,
    ["Apple", "Laptop", "MacOS"]
  ),
  new Product(
    "Dell XPS 15",
    "15.6-inch OLED, Intel i7, 16GB RAM, 512GB SSD",
    1499,
    "dell-xps15.jpg",
    "Dell",
    "Laptops",
    4.7,
    10,
    ["Dell", "Laptop", "Windows"]
  ),
  new Product(
    "HP Spectre x360",
    "13.5-inch OLED, Intel i7, 16GB RAM, 1TB SSD",
    1599,
    "hp-spectre.jpg",
    "HP",
    "Laptops",
    4.6,
    8,
    ["HP", "Touchscreen", "Convertible"]
  ),
  new Product(
    "Lenovo ThinkPad X1 Carbon",
    "14-inch, Intel i7, 16GB RAM, 1TB SSD",
    1399,
    "thinkpad-x1.jpg",
    "Lenovo",
    "Laptops",
    4.7,
    12,
    ["Lenovo", "Business", "Durable"]
  ),
  new Product(
    "ASUS ROG Zephyrus G14",
    "14-inch QHD, Ryzen 9, RTX 3060, 1TB SSD",
    1699,
    "asus-rog-g14.jpg",
    "ASUS",
    "Laptops",
    4.8,
    7,
    ["ASUS", "Gaming", "AMD"]
  ),
  new Product(
    "MSI Stealth 15M",
    "Intel i7, RTX 3060, 144Hz, 16GB RAM",
    1299,
    "msi-stealth.jpg",
    "MSI",
    "Laptops",
    4.5,
    9,
    ["MSI", "Gaming", "Laptop"]
  ),
  new Product(
    "Acer Swift 3",
    "14-inch FHD, Ryzen 7, 512GB SSD",
    749,
    "acer-swift3.jpg",
    "Acer",
    "Laptops",
    4.3,
    20,
    ["Acer", "Budget", "Portable"]
  ),
  new Product(
    "Microsoft Surface Laptop 5",
    "13.5-inch Touch, Intel i5, 256GB SSD",
    999,
    "surface-laptop.jpg",
    "Microsoft",
    "Laptops",
    4.6,
    11,
    ["Surface", "Touch", "Windows"]
  ),

  // Mobiles
  new Product(
    "iPhone 15 Pro Max",
    "6.7-inch Super Retina XDR, A17 Pro",
    1199,
    "iphone-15-pro-max.jpg",
    "Apple",
    "Mobiles",
    4.9,
    10,
    ["iOS", "Apple", "Smartphone"]
  ),
  new Product(
    "Samsung Galaxy S24 Ultra",
    "6.8-inch AMOLED, Snapdragon 8 Gen 3",
    1199,
    "galaxy-s24.jpg",
    "Samsung",
    "Mobiles",
    4.8,
    12,
    ["Android", "5G", "Flagship"]
  ),
  new Product(
    "Google Pixel 8 Pro",
    "6.7-inch OLED, Google Tensor G3",
    999,
    "pixel-8-pro.jpg",
    "Google",
    "Mobiles",
    4.7,
    8,
    ["Android", "Camera", "Pure Android"]
  ),
  new Product(
    "OnePlus 12",
    "6.8-inch AMOLED, Snapdragon 8 Gen 3",
    899,
    "oneplus-12.jpg",
    "OnePlus",
    "Mobiles",
    4.6,
    6,
    ["Android", "Fast", "Flagship"]
  ),
  new Product(
    "Xiaomi 14 Pro",
    "Snapdragon 8 Gen 3, 120Hz Display",
    799,
    "xiaomi-14-pro.jpg",
    "Xiaomi",
    "Mobiles",
    4.5,
    9,
    ["Android", "Budget", "Flagship"]
  ),
  new Product(
    "iPhone SE (3rd Gen)",
    "4.7-inch Retina, A15 Bionic",
    429,
    "iphone-se.jpg",
    "Apple",
    "Mobiles",
    4.3,
    14,
    ["Compact", "iOS", "Affordable"]
  ),
  new Product(
    "Motorola Edge 40",
    "6.5-inch OLED, Dimensity 8020",
    599,
    "motorola-edge.jpg",
    "Motorola",
    "Mobiles",
    4.2,
    10,
    ["Motorola", "Budget", "5G"]
  ),
  new Product(
    "Samsung Galaxy A54",
    "6.4-inch AMOLED, Exynos 1380",
    399,
    "galaxy-a54.jpg",
    "Samsung",
    "Mobiles",
    4.3,
    20,
    ["Samsung", "Midrange", "5G"]
  ),

  // Accessories
  new Product(
    "Sony WH-1000XM5",
    "Wireless Noise Canceling Headphones",
    399,
    "sony-wh1000xm5.jpg",
    "Sony",
    "Accessories",
    4.9,
    22,
    ["Headphones", "Audio", "Noise Canceling"]
  ),
  new Product(
    "Logitech MX Master 3S",
    "Wireless Ergonomic Mouse",
    99,
    "mx-master.jpg",
    "Logitech",
    "Accessories",
    4.7,
    30,
    ["Mouse", "Wireless", "Productivity"]
  ),
  new Product(
    "Anker PowerCore 10000",
    "Portable Charger with Fast Charging",
    29,
    "anker-powercore.jpg",
    "Anker",
    "Accessories",
    4.6,
    50,
    ["Powerbank", "Portable", "Battery"]
  ),
  new Product(
    "Samsung T7 SSD 1TB",
    "Portable SSD, USB 3.2",
    119,
    "samsung-t7.jpg",
    "Samsung",
    "Accessories",
    4.6,
    19,
    ["Storage", "SSD", "Fast Transfer"]
  ),
  new Product(
    "JBL Flip 6",
    "Portable Waterproof Bluetooth Speaker",
    129,
    "jbl-flip6.jpg",
    "JBL",
    "Accessories",
    4.7,
    18,
    ["Speaker", "Bluetooth", "Portable"]
  ),
  new Product(
    "Apple AirPods Pro (2nd Gen)",
    "Active Noise Cancellation, Spatial Audio",
    249,
    "airpods-pro.jpg",
    "Apple",
    "Accessories",
    4.8,
    16,
    ["Earbuds", "Apple", "Wireless"]
  ),
  new Product(
    "Belkin BoostCharge Pro",
    "3-in-1 Wireless Charger",
    149,
    "belkin-3in1.jpg",
    "Belkin",
    "Accessories",
    4.5,
    13,
    ["Wireless Charging", "Apple", "Stand"]
  ),

  // Gaming
  new Product(
    "Sony PlayStation 5",
    "Ultra HD Blu-ray Edition Console",
    499,
    "ps5.jpg",
    "Sony",
    "Gaming",
    4.9,
    6,
    ["Console", "Gaming", "PS5"]
  ),
  new Product(
    "Xbox Series X",
    "1TB SSD, 4K Gaming Console",
    499,
    "xbox-series-x.jpg",
    "Microsoft",
    "Gaming",
    4.8,
    8,
    ["Xbox", "Console", "Gaming"]
  ),
  new Product(
    "Nintendo Switch OLED",
    "7-inch OLED, Handheld & Docked Modes",
    349,
    "switch-oled.jpg",
    "Nintendo",
    "Gaming",
    4.7,
    10,
    ["Nintendo", "Portable", "Console"]
  ),
  new Product(
    "Razer DeathAdder V3",
    "Wired Gaming Mouse, 30K DPI",
    69,
    "razer-deathadder.jpg",
    "Razer",
    "Gaming",
    4.6,
    15,
    ["Mouse", "Razer", "Gaming"]
  ),
  new Product(
    "SteelSeries Arctis Nova Pro",
    "High-Resolution Audio Gaming Headset",
    249,
    "arctis-nova-pro.jpg",
    "SteelSeries",
    "Gaming",
    4.7,
    12,
    ["Headset", "Gaming", "PC/Console"]
  ),

  // Cameras
  new Product(
    "Canon EOS R6 Mark II",
    "24MP Full-frame Mirrorless Camera",
    2499,
    "canon-r6.jpg",
    "Canon",
    "Cameras",
    4.9,
    4,
    ["Camera", "Mirrorless", "Canon"]
  ),
  new Product(
    "Sony Alpha a7 IV",
    "33MP Mirrorless Camera, 4K 60p",
    2499,
    "sony-a7iv.jpg",
    "Sony",
    "Cameras",
    4.8,
    5,
    ["Camera", "Sony", "Mirrorless"]
  ),
  new Product(
    "GoPro HERO12 Black",
    "5.3K60 Ultra HD Action Camera",
    399,
    "gopro-hero12.jpg",
    "GoPro",
    "Cameras",
    4.7,
    9,
    ["Action", "Camera", "Adventure"]
  ),
  new Product(
    "DJI Osmo Pocket 3",
    "Compact 4K Gimbal Camera",
    519,
    "dji-osmo-pocket.jpg",
    "DJI",
    "Cameras",
    4.6,
    6,
    ["Gimbal", "Vlogging", "Camera"]
  ),

  // Smartwatches
  new Product(
    "Apple Watch Series 9",
    "GPS + Cellular, 45mm",
    499,
    "apple-watch9.jpg",
    "Apple",
    "Smartwatches",
    4.8,
    9,
    ["Watch", "Apple", "Health"]
  ),
  new Product(
    "Samsung Galaxy Watch6",
    "44mm AMOLED, Health Tracking",
    329,
    "galaxy-watch6.jpg",
    "Samsung",
    "Smartwatches",
    4.7,
    11,
    ["Watch", "Fitness", "Samsung"]
  ),
  new Product(
    "Garmin Venu 3",
    "Advanced Fitness Smartwatch",
    449,
    "garmin-venu3.jpg",
    "Garmin",
    "Smartwatches",
    4.6,
    7,
    ["Fitness", "Garmin", "Smartwatch"]
  ),
  new Product(
    "Fitbit Charge 6",
    "Fitness Tracker with Built-in GPS",
    159,
    "fitbit-charge6.jpg",
    "Fitbit",
    "Smartwatches",
    4.5,
    14,
    ["Fitness", "Tracker", "Fitbit"]
  ),

  // Monitors
  new Product(
    "LG UltraGear 27GP950",
    "27-inch 4K Nano IPS 144Hz",
    799,
    "lg-ultragear.jpg",
    "LG",
    "Monitors",
    4.7,
    8,
    ["Gaming", "Monitor", "144Hz"]
  ),
  new Product(
    "ASUS ProArt Display PA278CV",
    "27-inch QHD, Color Accuracy",
    449,
    "asus-proart.jpg",
    "ASUS",
    "Monitors",
    4.6,
    10,
    ["Design", "Monitor", "Professional"]
  ),
  new Product(
    "Samsung Smart Monitor M8",
    "32-inch 4K, Built-in Smart Hub",
    699,
    "samsung-m8.jpg",
    "Samsung",
    "Monitors",
    4.5,
    7,
    ["Smart Monitor", "4K", "Streaming"]
  ),

  // Storage
  new Product(
    "WD Black SN850X 2TB",
    "NVMe SSD, Gen4, 7300MB/s",
    229,
    "wd-sn850x.jpg",
    "Western Digital",
    "Storage",
    4.8,
    16,
    ["SSD", "Gaming", "High Speed"]
  ),
  new Product(
    "Seagate Backup Plus 5TB",
    "External HDD, USB 3.0",
    129,
    "seagate-hdd.jpg",
    "Seagate",
    "Storage",
    4.4,
    25,
    ["Backup", "HDD", "Portable"]
  ),
];

export let categories = [
  "All",
  "Laptops",
  "Mobiles",
  "Accessories",
  "Gaming",
  "Cameras",
  "Smartwatches",
  "Monitors",
  "Storage",
];

export const brands = [
  "Apple",
  "Samsung",
  "Sony",
  "HP",
  "Dell",
  "Canon",
  "Logitech",
  "Bose",
  "ASUS",
  "Microsoft",
  "Acer",
  "Lenovo",
  "JBL",
];
