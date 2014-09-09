//use existing 'gov' if defined
var gov = gov || {};

//use existing 'gov.green' if defined
gov.green = gov.green || {};

//our menu object
gov.green.awards = {
	badges: [
		{
			id: 0,
			name: 'Sorted Out',
			image: 'badge.png',
			altText: 'Sort waste into trash, recycling, and compost',
			earn: "Dispose of waste properly by sorting it by disposal method - use the <a href='http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted'>Look Up Tool</a> if you're not sure.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['FoodAndYard', 'Recycling', 'SolidWaste', 'WebTool'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 1,
			name: 'Prior Knowledge',
			image: '1-ShareRecycling.png',
			altText: 'Share information about recycling',
			earn: "Share <a href='http://www.seattle.gov/util/MyServices/Recycling/BldgOwnersManagers_Recycling/HelpResidentsRecycle/index.htm'>educational materials</a> about recycling in your building or home.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Community', 'Recycling', 'SolidWaste'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 2,
			name: 'Brain Food',
			image: '2-ShareFoodYardWaste.png',
			altText: 'Share information about composting.',
			earn: "Share <a href='http://www.seattle.gov/util/MyServices/FoodYard/BldgOwnersManagers_FoodYard/HelpResidentsCompost/index.htm'>educational materials</a> about food and yard waste in your building or home.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Community', 'FoodAndYard', 'SolidWaste'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 3,
			name: 'Salvage',
			image: '3-reuseOldProduct.png',
			altText: 'Find a new use for an old item.',
			earn: "<a href='http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted'>Find</a> a creative way to reuse an old product, rather than sending it to be processed as waste.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Reuse', 'SolidWaste'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 4,
			name: 'Good as New',
			image: '4-donate.png',
			altText: 'Donate a gently used item.',
			earn: "Donate a product in usable condition you would have otherwise thrown out.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Community', 'Reuse', 'SolidWaste'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 5,
			name: 'Paper Cut',
			image: '5-StopJunkMail.png',
			altText: 'Stop unwanted junk mail.',
			earn: "Reduce your paper waste by <a href='http://www.seattle.gov/util/MyServices/Recycling/ReduceReuse/StopJunkMail/index.htm'>stopping</a> junk mail.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['SolidWaste', 'WebTool'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 6,
			name: 'Historical Documents',
			image: '6-StopPhoneBooks.png',
			altText: 'Stop unwanted phonebooks.',
			earn: "Reduce your paper waste by <a href='http://www.seattle.gov/util/MyServices/Recycling/ReduceReuse/StopJunkMail/index.htm'>stopping</a> unwanted phone books.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['SolidWaste', 'WebTool'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 7,
			name: 'Paper or Plastic',
			image: '7-reusableBag.png',
			altText: 'Use a reusable bag when you go shopping.',
			earn: "Use a reusable bag when you go shopping to reduce waste from disposable bags.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Reuse', 'SolidWaste'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 8,
			name: 'Bottomless',
			image: '8-reusableMug.png',
			altText: 'Use a reusable mug',
			earn: "Bring a reusable coffee mug instead of getting your drink in a disposable cup.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Reuse', 'SolidWaste'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 10,
			name: 'When It Rains',
			image: '10-ReadManagingRainwater.png',
			altText: 'Learn about household rainwater management',
			earn: "Read the <a href='http://www.seattle.gov/util/groups/public/@spu/@conservation/documents/webcontent/01_011612.pdf'>Managing Rainwater document</a> to learn about home improvements that control runoff.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Document', 'Drainage'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 11,
			name: 'Cherry-Picked',
			image: '11-ChoosePlants.png',
			altText: 'Pick appropriate garden plants',
			earn: "<a href='http://www.seattle.gov/util/EnvironmentConservation/MyLawnGarden/ChoosingtheRightPlants/index.htm'>Choose plants</a> for your garden that are well-adapted to the region for easier, more efficient care.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Garden', 'Document'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 13,
			name: 'Taking on Water',
			image: '13-FindAndFixLeaks.png',
			altText: 'Learn how to detect leaks',
			earn: "Use <a href='http://www.seattle.gov/util/EnvironmentConservation/MyHome/ReduceWaterUse/FindFixLeaks/index.htm'>SPU's videos</a> to learn how to detect and fix leaks around your home.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Water'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 16,
			name: 'A New Leaf',
			image: '16-plantTree.png',
			altText: 'Help plant a tree',
			earn: "Properly plant a tree on your property or get involved in a <a href='http://www.seattle.gov/trees/'>community ReLeaf effort</a>.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Community', 'Drainage', 'Garden'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 17,
			name: 'Best Friend',
			image: '17-petWaste.png',
			altText: 'Pick up pet waste',
			earn: "Pick up <a href='http://www.seattle.gov/util/EnvironmentConservation/OurWatersheds/ProtectOurWaters/PreventPollution/Petwaste/index.htm'>pet waste</a> and dispose of it properly to prevent contamination of local streams and Puget Sound.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Drainage'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 19,
			name: 'No Tag-Backs',
			image: '19-graffiti.png',
			altText: 'Clean up graffiti in the community',
			earn: "<a href='http://www.seattle.gov/util/EnvironmentConservation/OurCity/Graffiti_Prevention_&_Removal/index.htm'>Volunteer</a> individually or get a group together to clean up graffiti.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Community'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 28,
			name: 'Recalculating',
			image: '28-CartSizeCalculator.png',
			altText: 'Try the cart-size calculator',
			earn: "Check out the <a href='http://www.seattle.gov/util/MyServices/Garbage/HouseResidentsGarbage/slider/index.htm'>cart-size calculator</a> and consider using more recycling and composting.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['FoodAndYard', 'Recycling', 'SolidWaste', 'WebTool'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 33,
			name: 'Bright Idea',
			image: '33-ReplaceLEDBulb.png',
			altText: 'Replace incandescent bulbs',
			earn: "Replace all of the incandescent light bulbs in your home with <a href='http://www.seattle.gov/light/home-lighting/'>CFL or LED alternatives</a>.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Air', 'Power'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 34,
			name: 'Shining Star',
			image: '34-EnergyStar.png',
			altText: 'Check your appliances for efficiency certification',
			earn: "Check your appliances for Energy Forward or Energy Star certification to ensure efficient power use. Consider replacing inefficient devices.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Power'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 37,
			name: 'Striped Sweater',
			image: '37-DressWarmer.png',
			altText: 'Dress for the season',
			earn: "In winter, dress warmer before you consider turning on the thermostat.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Power'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 41,
			name: 'Seal of Approval',
			image: '41-CheckFridge.png',
			altText: 'Check the door seals on your refrigerator',
			earn: "Check your fridge for loose or damaged door seals. Replace them if they are not sealing properly.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Power'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 44,
			name: 'Hang Out',
			image: '44-HangDry.png',
			altText: 'Air dry your laundry',
			earn: "Hang dry your laundry, or use the air-dry option on your dryer.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Power'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 45,
			name: 'Get Your Fill',
			image: '45-WashFullLoads.png',
			altText: 'Wash full loads of laundry',
			earn: "Wash full loads of laundry in cold water.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Power', 'Water'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 51,
			name: 'Everything in Transit',
			image: '51-PublicTransportation.png',
			altText: 'Use public transportation',
			earn: "Take public transportation rather than driving.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Transportation'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		}
	]
}

/*	trophies: [
		{
			id: int,
			name: 'name',
			image: 'url',
			altText: 'alt for image',
			earn: 'summary',
			desc: 'approximately 1 paragraph of more in depth information',
			tags: ['an', 'array', 'of associated', 'tags'],
			levels: [5, 10, 15, 20],
			bonus: 'url of datavis or unlocked fact',
			bonusAlt: 'alt for bonus'
		}
	],

	ribbons: [
		{
			id: int,
			name: 'name',
			image: 'url',
			altText: 'alt for image',
			earn: 'summary',
			desc: 'approximately 1 paragraph of more in depth information',
			tags: ['an', 'array', 'of associated', 'tags'],
			levels: [5, 10, 15, 20],
			bonus: 'url of datavis or unlocked fact',
			bonusAlt: 'alt for bonus'

		}
	],

	stickers: [
		{
			id: int,
			name: 'name',
			image: 'url',
			altText: 'alt for image',
			earn: 'summary',
			components: [1, 2, 3], // Array of id numbers needed to earn sticker.
			desc: 'approximately 1 paragraph of more in depth information',
			tags: ['an', 'array', 'of associated', 'tags'],
			bonus: 'url of datavis or unlocked fact',
			bonusAlt: 'alt for bonus'
		}
	]
} */