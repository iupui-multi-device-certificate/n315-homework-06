//based on list
//https://www.rei.com/learn/expert-advice/family-camping-checklist.html

/* 
  cost as strings since just for presentation
  in a real application, currency is a complicated subject that floats are not suitable for
  https://stackoverflow.com/questions/45222706/what-are-the-best-practices-passing-dollar-amounts-in-json
  ideally, would be handled by database
  e.g. MongoDB uses BSON which has other data types
*/

//prettier-ignore
export const CAMPING = [
  {
    "id":1,
    "name":"Mountain Summit Gear Campside 4-Person Dome Tent",
    "thumbImg":"tent_thumb.jpg",
    "fullImg":"tent_full.jpg",
    "summary":"Durable polyester tent body with a waterproof coating...",
    "detail":"Durable polyester tent body with a waterproof coating features No-See-Um mesh to keep bugs out. 2-pole design uses quick clips for easy setup. Full back rain fly with front awning Tub style floor. Interior storage pockets and power port.",
    "rating": "3.6",
    "manufacturer": "Mountain Summit Gear",
    "cost": "44.93", 
    "category": "Campsite"
  },
  {
    "id":2,
    "name":"Coleman Brazos 30 Sleeping Bag",
    "thumbImg":"sb_thumb.jpg",
    "fullImg":"sb_full.jpg",
    "summary":"Tricot lining and Coletherm insulation are ideal for nights ranging from 40 to 20°F...",
    "detail":"Tricot lining and Coletherm insulation are ideal for nights ranging from 40 to 20°F. 75 in. length and 33 in. width accommodate sleepers of varied sizes. Rolls up for convenient carry and simple storage. Equipped with a polyester cover to ensure the insulation doesn't shift during use. Ideal as an addition to your camping gear or survival kit so you can stay warm and cozy in a variety of conditions. Extremely durable and designed to withstand the elements during outdoor use",
    "rating": "4.1",
    "manufacturer":"Coleman",
    "cost": "47.00", 
    "category": "Campsite"
  },
  {
    "id":3,
    "name":"Mountain Summit Gear Tripod Stool Camp Chair",
    "thumbImg":"cc_thumb.jpg",
    "fullImg":"cc_full.jpg",
    "summary":"Folds and unfolds quickly...",
    "detail":"Folds and unfolds quickly. Steel frame supports up to 225 lbs. Closeout.",
    "rating": "4.4",
    "manufacturer": "Mountain Summit",
    "cost": "14.73", 
    "category": "Campsite"
  },
  {
    "id":4,
    "name":"Sun Bum Mineral SPF 30 Sunscreen Spray - 6 fl. oz.",
    "thumbImg":"ss_thumb.jpg",
    "fullImg":"ss_full.jpg",
    "summary":"UVA/UVB broad-spectrum formula is water-resistant up to 80 min.",
    "detail":"UVA/UVB broad-spectrum formula is water-resistant up to 80 min. Dermatologist tested. Free of gluten, paraben, PABA, chemical sunscreens, mineral oils, propylene glycol, retinyl palmitate, silicone and dyes. Non-nano zinc. Vegan; cruelty-free. Hypoallergenic. Formula is free of oxybenzone and octinoxate",
    "rating": "3.9",
    "manufacturer":"Sun Bum",
    "cost": "20.50", 
    "category": "Sun & bug protection"
  },
  {
    "id":5,
    "name":"MPOWERD Luci Inflatable Solar Lantern: Outdoor 2.0",
    "thumbImg":"lantern_thumb.jpg",
    "fullImg":"lantern_full.jpg",
    "summary":"Adjustable bottom strap and fixed top strap let you easily hang this lantern...",
    "detail":"Adjustable bottom strap and fixed top strap let you easily hang this lantern. 10 LEDs emit 75 lumens through the lantern's clear finish. Built-in rechargeable 1,000 mAh lithium ion battery lasts up to 24 hrs. on a single charge; an indicator shows remaining battery life. High-efficiency solar panel offers a full charge in 7 hrs. in direct sunlight. 2-second quick shutoff. Collapses down to just 1 in. thick, giving you plenty of room for all your other gear. Durable construction is waterproof (IP67 rating) and can withstand up to 150 lbs. of pressure",
    "rating": "4.5",
    "manufacturer": "MPOWERD",
    "cost":"29.95", 
    "category": "Campsite"
  },
  {
    "id":6,
    "name":"Gerber Dime Keychain Multi-tool",
    "thumbImg":"mt_thumb.jpg",
    "fullImg":"mt_full.jpg",
    "summary":"Besides the usual pliers, wire cutters, blade, scissors, screwdrivers, tweezers and file, the Dime includes...",
    "detail":"Besides the usual pliers, wire cutters, blade, scissors, screwdrivers, tweezers and file, the Dime includes a unique blade for cutting/scoring plastic clamshell packaging. Thoughtful design features a bottle opener that is exposed even when the tool is closed. The Gerber Dime keychain multi-tool is made with 3Cr13 stainless steel",
    "rating": "3.9",
    "manufacturer":"Gerber",
    "cost": "25.95", 
    "category": "Tools & Repair Items"
  },
  {
    "id":7,
    "name":"Eureka Ignite 2-Burner Camp Stove",
    "thumbImg":"cs_thumb.jpg",
    "fullImg":"cs_full.jpg",
    "summary":"10,000 BTU burners go from a light simmer to full output...",
    "detail":"10,000 BTU burners go from a light simmer to full output. Push button ignition allows a fast and easy start. Stainless-steel drip tray offers rust-free performance and easy clean up. Nonslip rubber feet ensure that your stove stays put. Rugged, thick-gauge steel construction delivers many years of use. Dependable latches keep the lid secure during transport. JetLink compatibility allows you to connect multiple Eureka stoves for camp kitchen flexibility. Compact size is perfect for small groups. Fuel not included",
    "rating": "4.5",
    "manufacturer":"Eureka",
    "cost": "124.95", 
    "category": "Kitchen"
  },
  {
    "id":8,
    "name":"UCO Titan Stormproof Matches",
    "thumbImg":"matches_thumb.jpg",
    "fullImg":"matches_full.jpg",
    "summary":"Each box includes 25 matches and 2 extra strikers...",
    "detail":"Each box includes 25 matches and 2 extra strikers; bring them along on every adventure for insurance against the elements. Bonus: extended length of match helps you keep from burning your fingers",
    "rating": "4.9",
    "manufacturer": "UCO",
    "cost": "11.95", 
    "category": "Kitchen"
  },
  {
    "id":9,
    "name":"Adventure Medical Kits Mountain Series Hiker Medical Kit",
    "thumbImg":"fa_thumb.jpg",
    "fullImg":"fa_full.jpg",
    "summary":"Easy Care™ organization system helps you find what you need at a moment's notice...",
    "detail":"Easy Care™ organization system helps you find what you need at a moment's notice, organizing contents into clearly-labeled injury-specific pockets. Find supplies quickly, even in the dark: an external kit map shows you where the supplies are located, while a reflective mountain logo makes the bag easy to spot. See-through pockets protect items from dirt and moisture while allowing for quick and easy access; zippers hold items in when opening the kit or accessing it vertically. Stop bleeding quickly with the trauma pad, close wounds with butterfly bandages and medical tape, and stabilize sprained ankles or strains with the elastic bandage. Kit also contains common medications for allergic reactions, itches, pain and fever, inflammation and diarrhea. Hospital-quality tools include EMT shears and precision forceps for efficient and effective backcountry medical care. Antiseptic wipes and butterfly bandages for cleaning and closing small wounds. Stop blisters before they start with moleskin, a reliable dressing that reduces friction; kit includes 14 die-cut pieces, shaped to fit common problem areas. Know how to treat common backcountry injuries and illnesses with the up-to-date wilderness first-aid information in the hiking first-aid guide, written by Eric A. Weiss, M.D.. This compact hiking first aid kit weighs less than 8 oz. and features a durable, water-resistant medical bag. Durable nylon bag with darting provides extra space inside the kit for your own items",
    "rating": "4.6",
    "manufacturer": "Adventure Medical Kits",
    "cost": "29.95", 
    "category": "Health & Hygiene"
  },
  {
    "id":10,
    "name":"GSI Outdoors Folding Water Cube - 2.6 gal.",
    "thumbImg":"wj_thumb.jpg",
    "fullImg":"wj_full.jpg",
    "summary":"Foldable, food-grade polyethylene container..",
    "detail":"Foldable, food-grade polyethylene container has integrated handle for easy lifting and pouring. Made with a proprietary blow-molding method for superior burst strength and added durability. Holds 2.6 gal. (10 liters)",
    "rating": "3.9",
    "manufacturer": "GSI Outdoors",
    "cost": "9.00", 
    "category": "Large water jugs"
  }
];
