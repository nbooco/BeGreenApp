/* Award data for Seattle Be Green app

Establish namespace to prevent interference with or by other global variables
Use existing 'gov' if defined */
var gov = gov || {};

// Use existing 'gov.green' if defined
gov.green = gov.green || {};

// Data
gov.green.awards = {
	/* Badge: award claimed for individual green actions
		format {
		id: distinct, sequential integer,
		name: Short descriptive or clever name,
		image: Name of badge image in file; no path needed,
		altText: Shortened version of summary,
		earn: Summary of task required to earn badge including link to related materials,
		desc: Approximately one paragraph explaining issue and how action helps; may include other relevant info,
		tags: Array of relevant tags - see guide for list of tags,
		bonus: Name of infovis in file; no path needed,
		bonusAlt: Short summary of information presented by bonus image
	} */
	badges: [
		{
			id: 1,
			name: 'Prior Knowledge',
			image: '1-ShareRecycling.png',
			altText: 'Share information about recycling',
			earn: "Share <a href='http://www.seattle.gov/util/MyServices/Recycling/BldgOwnersManagers_Recycling/" + 
				"HelpResidentsRecycle/index.htm'>educational materials</a> about recycling in your building or home.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Community', 'Recycling', 'SolidWaste'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 2,
			name: 'Brain Food',
			image: '2-ShareFoodYardWaste.png',
			altText: 'Share information about composting.',
			earn: "Share <a href='http://www.seattle.gov/util/MyServices/FoodYard/BldgOwnersManagers_FoodYard/" + 
				"HelpResidentsCompost/index.htm'>educational materials</a> about food and yard waste in your " + 
				"building or home.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Community', 'FoodAndYard', 'SolidWaste'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 3,
			name: 'Salvage',
			image: '3-reuseOldProduct.png',
			altText: 'Find a new use for an old item.',
			earn: "<a href='http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted'>Find</a> a creative way " + 
				"to reuse an old product, rather than sending it to be processed as waste.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
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
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Community', 'Reuse', 'SolidWaste'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 5,
			name: 'Paper Cut',
			image: '5-StopJunkMail.png',
			altText: 'Stop unwanted junk mail.',
			earn: "Reduce your paper waste by <a href='http://www.seattle.gov/util/MyServices/Recycling/" + 
				"ReduceReuse/StopJunkMail/index.htm'>stopping</a> junk mail.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['SolidWaste', 'WebTool'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 6,
			name: 'Historical Documents',
			image: '6-StopPhoneBooks.png',
			altText: 'Stop unwanted phonebooks.',
			earn: "Reduce your paper waste by <a href='http://www.seattle.gov/util/MyServices/Recycling/" + 
				"ReduceReuse/StopJunkMail/index.htm'>stopping</a> unwanted phone books.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
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
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
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
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Reuse', 'SolidWaste'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 9,
			name: 'Earth Defense FORC',
			image: '9-FORC.png',
			altText: 'Participate in the Friends of Recycling and Composting program.',
			earn: "Participate in the <a href='http://www.seattle.gov/util/MyServices/FoodYard/" + 
				"BldgOwnersManagers_FoodYard/RecyclingSteward/index.htm'>Friends of Recycling and Composting " + 
				"program</a>.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Community', 'FoodAndYard', 'Recycling', 'SolidWaste'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 10,
			name: 'Rain or Shine',
			image: '10-ReadManagingRainwater.png',
			altText: 'Learn about household rainwater management',
			earn: "Read the <a href='http://www.seattle.gov/util/groups/public/@spu/@conservation/documents/" + 
				"webcontent/01_011612.pdf'>Managing Rainwater document</a> to learn about home improvements " + 
				"that control runoff.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Document', 'Drainage'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 11,
			name: 'Cherry-Picked',
			image: '11-ChoosePlants.png',
			altText: 'Pick appropriate garden plants',
			earn: "<a href='http://www.seattle.gov/util/EnvironmentConservation/MyLawnGarden/" + 
				"ChoosingtheRightPlants/index.htm'>Choose plants</a> for your garden that are well-adapted " + 
				"to the region for easier, more efficient care.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Garden', 'Document'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 12,
			name: 'Taking on Water',
			image: '12-RainBarrel.png',
			altText: 'Learn about rain barrels',
			earn: "<a href='http://www.seattle.gov/util/EnvironmentConservation/MyLawnGarden/" + 
				"Rain_Water_Harvesting/index.htm'>Learn</a> about installing a rain barrel as a solution " + 
				"to prevent flooding and store water for irrigation.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Garden', 'Drainage'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 13,
			name: 'Tapped Out',
			image: '13-FindAndFixLeaks.png',
			altText: 'Learn how to detect leaks',
			earn: "Use <a href='http://www.seattle.gov/util/EnvironmentConservation/MyHome/ReduceWaterUse/" + 
				"FindFixLeaks/index.htm'>SPU's videos</a> to learn how to detect and fix leaks around your home.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Community', 'Drainage'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 14,
			name: 'Slick',
			image: '14-CarLeaks.png',
			altText: 'Attend a free Auto Leaks Class',
			earn: "Have your car inspected and learn about common leaks at a free <a href='http://www.seattle.gov/" + 
				"util/EnvironmentConservation/OurWatersheds/ProtectOurWaters/PreventPollution/Motoroil/" + 
				"index.htm'>Auto Leaks Class</a>.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Community', 'Drainage'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 15,
			name: 'Off the Lot',
			image: '15-CarWash.png',
			altText: 'Use a commercial car wash',
			earn: "Take your car to a <a href='http://www.seattle.gov/util/EnvironmentConservation/OurWatersheds/" + 
				"ProtectOurWaters/PreventPollution/CarWashing/index.htm'>commercial car wash</a> equipped to " + 
				"handle contaminated runoff.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Community', 'Drainage'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 16,
			name: 'A New Leaf',
			image: '16-plantTree.png',
			altText: 'Help plant a tree',
			earn: "Properly plant a tree on your property or get involved in a <a href='http://www.seattle.gov/" + 
				"trees/'>community ReLeaf effort</a>.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Community', 'Drainage', 'Garden'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 17,
			name: 'Best Friend',
			image: '17-petWaste.png',
			altText: 'Pick up pet waste',
			earn: "Pick up <a href='http://www.seattle.gov/util/EnvironmentConservation/OurWatersheds/" + 
				"ProtectOurWaters/PreventPollution/Petwaste/index.htm'>pet waste</a> and dispose of it properly " + 
				"to prevent contamination of local streams and Puget Sound.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Drainage'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 18,
			name: 'Locally Sourced',
			image: '18-CRW.png',
			altText: 'Visit the Cedar River Watershed',
			earn: "Take a <a href='http://www.seattle.gov/util/EnvironmentConservation/OurWatersheds/" + 
				"CedarRiverWatershed/ProgramsTours/index.htm'>tour or field trip</a> to learn more about the " + 
				"Cedar River Watershed.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Community', 'Water'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 19,
			name: 'No Tag-Backs',
			image: '19-graffiti.png',
			altText: 'Clean up graffiti in the community',
			earn: "<a href='http://www.seattle.gov/util/EnvironmentConservation/OurCity/" + 
				"Graffiti_Prevention_&_Removal/index.htm'>Volunteer</a> individually or get a group together " + 
				"to clean up graffiti.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Community'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 20,
			name: 'Make Your Mark',
			image: '20-StencilStormDrains.png',
			altText: 'Stencil storm drains',
			earn: "Stencil storm drains on your own or as part of a community organization to raise awareness of " + 
				"water contamination.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Community', 'Drainage'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 21,
			name: 'Clearing Up',
			image: '21-ClearStormDrains.png',
			altText: 'Sign up to maintain a storm drain',
			earn: "Sign up to keep a storm drain near your work or home free of debris, which prevents flooding, " + 
				"pollution, and infrastructure damage.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Community', 'Drainage'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 22,
			name: 'Waterfront Property',
			image: '22-RainGardens.png',
			altText: 'Learn about rain gardens',
			earn: "Learn about <a href='http://www.seattle.gov/util/groups/public/@spu/@usm/documents/" + 
				"webcontent/spu01_006288.pdf'>rain gardens</a> and see if they're the right solution for managing " + 
				"stormwater on your property.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Document', 'Drainage', 'Garden'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 23,
			name: 'Overflow',
			image: '23-Cistern.png',
			altText: 'Learn about rain cisterns',
			earn: "Read about <a href='http://www.seattle.gov/util/groups/public/@spu/@usm/documents/" + 
				"webcontent/spu01_006291.pdf'>rain cisterns</a> and see if they're a viable option for managing " + 
				"your stormwater.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Document', 'Drainage', 'Garden'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 24,
			name: 'Constant Vigilance',
			image: '24-Pollution.png',
			altText: 'Report water pollution and spills',
			earn: "Keep an eye out for surface water pollution and spills. Check out the " + 
				"<a href='http://www.seattle.gov/util/environmentconservation/ourwatersheds/protectourwaters/" + 
				"preventpollution/reportspills/'>online form</a> for reporting incidents to SPU.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Community', 'Drainage'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 25,
			name: 'What Plants Crave',
			image: '25-Watering.png',
			altText: 'Adjust garden and lawn watering habits',
			earn: "<a href='http://www.seattle.gov/util/EnvironmentConservation/MyLawnGarden/Smart_Watering/" + 
				"index.htm'>Learn</a> how to make your lawn and garden watering routine to as efficient and " + 
				"healthy for plants as possible. Adjust accordingly.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Drainage', 'Garden', 'Water'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 26,
			name: 'Clean Streets',
			image: '26-AdoptAStreet.png',
			altText: 'Adopt a street',
			earn: "Volunteer to <a href='http://www.seattle.gov/util/environmentconservation/getinvolved/" + 
				"adoptastreet/'>adopt a street</a> and keep it free of litter.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Community'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 27,
			name: 'Green Greens',
			image: '27-GreenBusiness.png',
			altText: 'Support green businesses',
			earn: "Support one of the businesses featured on the <a href='http://www.seattle.gov/util/" + 
				"ForBusinesses/GreenYourBusiness/GetontheMap/index.htm'>green business map</a>.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Community'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 28,
			name: 'Recalculating',
			image: '28-CartSizeCalculator.png',
			altText: 'Try the cart-size calculator',
			earn: "Check out the <a href='http://www.seattle.gov/util/MyServices/Garbage/HouseResidentsGarbage/" + 
				"slider/index.htm'>cart-size calculator</a> and consider using more recycling and composting.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['FoodAndYard', 'Recycling', 'SolidWaste', 'WebTool'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 29,
			name: 'Plant Food',
			image: '29-compost.png',
			altText: 'Learn more about compost',
			earn: "<a href='http://www.seattle.gov/util/EnvironmentConservation/MyLawnGarden/CompostSoil/" + 
				"GrowingHealthySoil/index.htm'>Learn</a> how to use compost to supplement your soil and grow " + 
				"healthier plants.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['FoodAndYard', 'Garden'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 30,
			name: 'Extended Release',
			image: '30-mulch.png',
			altText: 'Learn more about mulch',
			earn: "<a href='http://www.seattle.gov/util/EnvironmentConservation/MyLawnGarden/CompostSoil/" + 
				"GrowingHealthySoil/index.htm'>Learn</a> about using mulch to conserve water and control weeds " + 
				"in your gardens.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Drainage', 'FoodAndYard', 'Recycling', 'SolidWaste', 'WebTool'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 31,
			name: 'Green Up!',
			image: '31-GreenUp.png',
			altText: 'Buy electricity from renewable sources',
			earn: "Join City Light's <a href='http://www.seattle.gov/light/Green/greenPower/greenup.asp'>Green Up! " + 
				"Program</a> and ensure that a portion of your electricity is purchased from green producers.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Air', 'Power'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 32,
			name: 'Room for Improvement',
			image: '32-EnergyAudit.png',
			altText: 'Perform a home energy audit',
			earn: "Have a <a href='http://www.seattle.gov/light/conserve/hea/'>professional home energy audit</a> " + 
				"or <a href='http://www.seattle.gov/light/printdocs/DoItYourselfHome.PDF'>do your own</a> " + 
				"using SCL's checklist.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Document', 'Power'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 33,
			name: 'Bright Idea',
			image: '33-ReplaceLEDBulb.png',
			altText: 'Replace incandescent bulbs',
			earn: "Replace all of the incandescent light bulbs in your home with <a href='http://www.seattle.gov/" + 
				"light/home-lighting/'>CFL or LED alternatives</a>.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Air', 'Power'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 34,
			name: 'Kill-a-Watt',
			image: '34-KillAWatt.png',
			altText: 'Measure power consumption by inactive devices',
			earn: "Borrow the <a href='http://www.spl.org/about-the-library/library-news-releases/" + 
				"help-conserve-energy-and-lower-electric-bills----borrow-a-kill-a-watt-meter-from-the-" + 
				"seattle-public-library'>Kill-a-Watt device</a> from Seattle Public Libraries to see power " + 
				"consumption by inactive devices",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Community', 'Power'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 35,
			name: 'Knowledge is Power',
			image: '35-SmartPowerStrip.png',
			altText: 'Switch to smart power strips',
			earn: "Switch to smart power strips that stop power from flowing to inactive devices",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Power'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 36,
			name: 'Shining Star',
			image: '36-EnergyStar.png',
			altText: 'Check your appliances for efficiency certification',
			earn: "Check your appliances for Energy Forward or Energy Star certification to ensure efficient power " + 
				"use. Consider replacing inefficient devices.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
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
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Power'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 38,
			name: 'Dust Gust',
			image: '38-HeaterFinsFans.png',
			altText: 'Keep heater fins and wall fans clear of dust',
			earn: "Vaccuum dust from baseboard heater fins and wall fan heaters for more efficient heating.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Power'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 39,
			name: 'Clean Energy',
			image: '39-ShowerHead.png',
			altText: 'Install a WaterSense showerhead',
			earn: "Install a <a href='http://www.seattle.gov/light/conserve/showerhead/'>WaterSense showerhead</a> " +
				"to reduce water use without reducing water pressure.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Power', 'Water'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 40,
			name: 'Drop by Drop',
			image: '40-FaucetDrips.png',
			altText: 'Check your faucets for leaks',
			earn: "Check your faucets for leaks or drips. If you find any, fix them immediately.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Water'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 41,
			name: 'Seal of Approval',
			image: '41-CheckFridge.png',
			altText: 'Check the door seals on your refrigerator',
			earn: "Check your fridge for loose or damaged door seals. Replace them if they are not sealing properly.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Power'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 42,
			name: 'Get Your Fill',
			image: '42-WashFullLoads.png',
			altText: 'Wash full loads of laundry',
			earn: "Wash only full loads of laundry in cold water.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Power', 'Water'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 43,
			name: 'High and Dry',
			image: '43-DryFullLoads.png',
			altText: 'Dry full loads of laundry',
			earn: "Dry only full loads while doing laundry.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
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
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Power'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 45,
			name: 'Step Up to the Plates',
			image: '45-Dishwasher.png',
			altText: 'Run full loads in your dishwasher',
			earn: "Run only full loads in your dishwasher.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Power', 'Water'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 46,
			name: 'Way of the Future',
			image: '46-eBilling.png',
			altText: 'Switch to eBilling',
			earn: "Switch to <a href='http://www.seattle.gov/util/MyServices/MyAccount/PaymentsandBills/" + 
				"LoginSignupPaperlessBilling/index.htm'>eBilling</a> to save paper.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['SolidWaste', 'WebTool'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 47,
			name: 'Easy Rider',
			image: '47-Bicycle.png',
			altText: 'Bike instead of driving',
			earn: "Ride your bike to rather than driving.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Air', 'Transportation'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 48,
			name: 'Everything in Transit',
			image: '48-PublicTransportation.png',
			altText: 'Use public transportation',
			earn: "Take public transportation rather than driving.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Community', 'Transportation'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 49,
			name: 'Sorted Out',
			image: '49-LookUpTool.png',
			altText: 'Sort waste into trash, recycling, and compost',
			earn: "Dispose of waste properly by sorting it by disposal method - use the <a href= " + 
				"'http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted'>Look Up Tool</a> if you're not sure.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['FoodAndYard', 'Recycling', 'SolidWaste', 'WebTool'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 50,
			name: 'Hoofing It',
			image: '50-Walking.png',
			altText: 'Walk instead of using a vehicle',
			earn: "Walk instead of using a vehicle.",
			desc: "<p>Shabby chic brunch pickled flexitarian YOLO, sartorial Shoreditch forage farm-to-table " + 
				"semiotics cray. 90's synth Shoreditch yr. Single-origin coffee shabby chic roof party street art " + 
				"typewriter. +1 actually raw denim, Schlitz ugh gastropub iPhone Pitchfork biodiesel tattooed VHS. " +
				"Asymmetrical VHS Truffaut, Thundercats fap meh synth. Schlitz Vice blog asymmetrical pug fanny " + 
				"pack. Asymmetrical bicycle rights squid, pickled banh mi trust fund Portland tofu.</p>",
			tags: ['Air', 'Community', 'Transportation'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		}
	],
	/* Trophy: Meta award earned for earning multiple distinct badges in a given category 
		format {
			id: distinct, sequential integer,
			name: Heroic title that references associated category - rank (Bronze, Silver, Gold, Platinum),
			image: Name of trophy image in file; no path needed,
			altText: Congratulatory message,
			earn: One sentence mentioning number of distinct badges needed to earn,
			desc: Approximately one paragraph explaining issue and how action helps; may include other relevant info,
			tags: Associated category at [0] and award type (Trophies) at [1],
			requirement: Integer value of distinct badges needed to earn,
			bonus: Name of infovis in file; no path needed,
			bonusAlt: Short summary of information presented by bonus image
	} */
	trophies: [
		{
			id: 1,
			name: 'Champion of the Wastes - Bronze',
			image: 'bronzeTrophyReduceReuse.png',
			altText: 'alt for image',
			earn: 'Earn 3 distinct SolidWaste badges.',
			desc: "<p>Forget it, Donny. You're out of your element. Near the In-and-Out Burger. Is this yours, " + 
				"Larry? Is this your homework, Larry? I was, uh, one of the authors of the Port Huron Statement " + 
				"—The original Port Huron Statement. Not the compromised second draft. Well sir, it's this rug I " + 
				"have, really tied the room together. Yeah. Roadie for Metallica. Speed of Sound Tour.</p>",
			tags: ['SolidWaste', 'Trophies'],
			requirement: 3,
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 2,
			name: 'Champion of the Wastes - Silver',
			image: 'silverTrophyReduceReuse.png',
			altText: 'alt for image',
			earn: 'Earn 5 distinct SolidWaste badges.',
			desc: "<p>Forget it, Donny. You're out of your element. Near the In-and-Out Burger. Is this yours, " + 
				"Larry? Is this your homework, Larry? I was, uh, one of the authors of the Port Huron Statement " + 
				"—The original Port Huron Statement. Not the compromised second draft. Well sir, it's this rug I " + 
				"have, really tied the room together. Yeah. Roadie for Metallica. Speed of Sound Tour.</p>",
			tags: ['SolidWaste', 'Trophies'],
			requirement: 5,
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 3,
			name: 'Champion of the Wastes - Gold',
			image: 'goldTrophyReduceReuse.png',
			altText: 'alt for image',
			earn: 'Earn 8 distinct SolidWaste badges.',
			desc: "<p>Forget it, Donny. You're out of your element. Near the In-and-Out Burger. Is this yours, " + 
				"Larry? Is this your homework, Larry? I was, uh, one of the authors of the Port Huron Statement " + 
				"—The original Port Huron Statement. Not the compromised second draft. Well sir, it's this rug I " + 
				"have, really tied the room together. Yeah. Roadie for Metallica. Speed of Sound Tour.</p>",
			tags: ['SolidWaste', 'Trophies'],
			requirement: 8,
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 4,
			name: 'Champion of the Wastes - Platinum',
			image: 'platinumTrophyReduceReuse.png',
			altText: 'alt for image',
			earn: 'Earn all 10 distinct SolidWaste badges.',
			desc: "<p>Forget it, Donny. You're out of your element. Near the In-and-Out Burger. Is this yours, " + 
				"Larry? Is this your homework, Larry? I was, uh, one of the authors of the Port Huron Statement " + 
				"—The original Port Huron Statement. Not the compromised second draft. Well sir, it's this rug I " + 
				"have, really tied the room together. Yeah. Roadie for Metallica. Speed of Sound Tour.</p>",
			tags: ['SolidWaste', 'Trophies'],
			requirement: 10,
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 5,
			name: 'Pillar of the Community - Bronze',
			image: 'bronzeTrophyCommunity.png',
			altText: 'alt for image',
			earn: 'Earn five distinct Community badges.',
			desc: "<p>Forget it, Donny. You're out of your element. Near the In-and-Out Burger. Is this yours, " + 
				"Larry? Is this your homework, Larry? I was, uh, one of the authors of the Port Huron Statement " + 
				"—The original Port Huron Statement. Not the compromised second draft. Well sir, it's this rug I " + 
				"have, really tied the room together. Yeah. Roadie for Metallica. Speed of Sound Tour.</p>",
			tags: ['Community', 'Trophies'],
			requirement: 5,
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 6,
			name: 'Pillar of the Community - Silver',
			image: 'silverTrophyCommunity.png',
			altText: 'alt for image',
			earn: 'Earn 9 distinct Community badges.',
			desc: "<p>Forget it, Donny. You're out of your element. Near the In-and-Out Burger. Is this yours, " + 
				"Larry? Is this your homework, Larry? I was, uh, one of the authors of the Port Huron Statement " + 
				"—The original Port Huron Statement. Not the compromised second draft. Well sir, it's this rug I " + 
				"have, really tied the room together. Yeah. Roadie for Metallica. Speed of Sound Tour.</p>",
			tags: ['Community', 'Trophies'],
			requirement: 9,
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 7,
			name: 'Pillar of the Community - Gold',
			image: 'goldTrophyCommunity.png',
			altText: 'alt for image',
			earn: 'Earn 13 distinct Community badges.',
			desc: "<p>Forget it, Donny. You're out of your element. Near the In-and-Out Burger. Is this yours, " + 
				"Larry? Is this your homework, Larry? I was, uh, one of the authors of the Port Huron Statement " + 
				"—The original Port Huron Statement. Not the compromised second draft. Well sir, it's this rug I " + 
				"have, really tied the room together. Yeah. Roadie for Metallica. Speed of Sound Tour.</p>",
			tags: ['Community', 'Trophies'],
			requirement: 13,
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 8,
			name: 'Pillar of the Community - Platinum',
			image: 'platinumTrophyCommunity.png',
			altText: 'alt for image',
			earn: 'Earn all 18 distinct Community badges.',
			desc: "<p>Forget it, Donny. You're out of your element. Near the In-and-Out Burger. Is this yours, " + 
				"Larry? Is this your homework, Larry? I was, uh, one of the authors of the Port Huron Statement " + 
				"—The original Port Huron Statement. Not the compromised second draft. Well sir, it's this rug I " + 
				"have, really tied the room together. Yeah. Roadie for Metallica. Speed of Sound Tour.</p>",
			tags: ['Community', 'Trophies'],
			requirement: 18,
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		}
	],
	/* Ribbon: Meta award earned for earning badges in a given category a number of times (includes repeat badges) 
		format {
			id: distinct, sequential integer,
			name: Descriptive or clever name that references associated category - rank (Yellow, Red, Blue, Green),
			image: Name of ribbon image in file; no path needed,
			altText: Congratulatory message,
			earn: One sentence mentioning number of total badges needed to earn,
			desc: Approximately one paragraph explaining issue and how action helps; may include other relevant info,
			tags: Associated category at [0] and award type (Ribbons) at [1],
			requirement: Integer value of total badges needed to earn,
			bonus: Name of infovis in file; no path needed,
			bonusAlt: Short summary of information presented by bonus image
	} */
	ribbons: [
		{
			id: 1,
			name: 'MeRRRitorious - Yellow',
			image: 'ribbonYellowGreenStar.png',
			altText: 'alt for image',
			earn: 'Earn SolidWaste badges 5 times.',
			desc: "<p>Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what " + 
				"would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. " + 
				"Cruel though they may be&hellip; Son, as your lawyer, I declare y'all are in a 12-piece bucket " + 
				"o' trouble. But I done struck you a deal: Five hours of community service cleanin' up that ol' " + 
				"mess you caused. No argument here. Bender, quit destroying the universe!</p>",
			tags: ['SolidWaste', 'Ribbons'],
			requirement: 5,
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 2,
			name: 'MeRRRitorious - Red',
			image: 'ribbonRedGrnStar.png',
			altText: 'alt for image',
			earn: 'Earn SolidWaste badges 10 times.',
			desc: "<p>Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what " + 
				"would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. " + 
				"Cruel though they may be&hellip; Son, as your lawyer, I declare y'all are in a 12-piece bucket " + 
				"o' trouble. But I done struck you a deal: Five hours of community service cleanin' up that ol' " + 
				"mess you caused. No argument here. Bender, quit destroying the universe!</p>",
			tags: ['SolidWaste', 'Ribbons'],
			requirement: 10,
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 3,
			name: 'MeRRRitorious - Blue',
			image: 'ribbonBlueGrnStar.png',
			altText: 'alt for image',
			earn: 'Earn SolidWaste badges 15 times.',
			desc: "<p>Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what " + 
				"would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. " + 
				"Cruel though they may be&hellip; Son, as your lawyer, I declare y'all are in a 12-piece bucket " + 
				"o' trouble. But I done struck you a deal: Five hours of community service cleanin' up that ol' " + 
				"mess you caused. No argument here. Bender, quit destroying the universe!</p>",
			tags: ['SolidWaste', 'Ribbons'],
			requirement: 15,
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 4,
			name: 'MeRRRitorious - Green',
			image: 'ribbonGreenGrnStar.png',
			altText: 'alt for image',
			earn: 'Earn SolidWaste badges 20 times.',
			desc: "<p>Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what " + 
				"would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. " + 
				"Cruel though they may be&hellip; Son, as your lawyer, I declare y'all are in a 12-piece bucket " + 
				"o' trouble. But I done struck you a deal: Five hours of community service cleanin' up that ol' " + 
				"mess you caused. No argument here. Bender, quit destroying the universe!</p>",
			tags: ['SolidWaste', 'Ribbons'],
			requirement: 20,
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 5,
			name: 'County Fair - Yellow',
			image: 'ribbonYellowYellowStar.png',
			altText: 'alt for image',
			earn: 'Earn Community badges 20 times.',
			desc: "<p>Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what " + 
				"would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. " + 
				"Cruel though they may be&hellip; Son, as your lawyer, I declare y'all are in a 12-piece bucket " + 
				"o' trouble. But I done struck you a deal: Five hours of community service cleanin' up that ol' " + 
				"mess you caused. No argument here. Bender, quit destroying the universe!</p>",
			tags: ['Community', 'Ribbons'],
			requirement: 5,
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 6,
			name: 'County Fair - Red',
			image: 'ribbonRedYellowStar.png',
			altText: 'alt for image',
			earn: 'Earn Community badges 20 times.',
			desc: "<p>Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what " + 
				"would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. " + 
				"Cruel though they may be&hellip; Son, as your lawyer, I declare y'all are in a 12-piece bucket " + 
				"o' trouble. But I done struck you a deal: Five hours of community service cleanin' up that ol' " + 
				"mess you caused. No argument here. Bender, quit destroying the universe!</p>",
			tags: ['Community', 'Ribbons'],
			requirement: 10,
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 7,
			name: 'County Fair - Blue',
			image: 'ribbonBlueYellowStar.png',
			altText: 'alt for image',
			earn: 'Earn Community badges 20 times.',
			desc: "<p>Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what " + 
				"would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. " + 
				"Cruel though they may be&hellip; Son, as your lawyer, I declare y'all are in a 12-piece bucket " + 
				"o' trouble. But I done struck you a deal: Five hours of community service cleanin' up that ol' " + 
				"mess you caused. No argument here. Bender, quit destroying the universe!</p>",
			tags: ['Community', 'Ribbons'],
			requirement: 15,
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 8,
			name: 'County Fair - Green',
			image: 'ribbonGreenYellowStar.png',
			altText: 'alt for image',
			earn: 'Earn Community badges 20 times.',
			desc: "<p>Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what " + 
				"would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. " + 
				"Cruel though they may be&hellip; Son, as your lawyer, I declare y'all are in a 12-piece bucket " + 
				"o' trouble. But I done struck you a deal: Five hours of community service cleanin' up that ol' " + 
				"mess you caused. No argument here. Bender, quit destroying the universe!</p>",
			tags: ['Community', 'Ribbons'],
			requirement: 20,
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{	
			id: 9,
			name: 'Lights Out - Yellow',
			image: 'ribbonYellLightBulb.png',
			altText: 'alt for image',
			earn: 'Earn Power badges 20 times.',
			desc: "<p>Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what " + 
				"would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. " + 
				"Cruel though they may be&hellip; Son, as your lawyer, I declare y'all are in a 12-piece bucket " + 
				"o' trouble. But I done struck you a deal: Five hours of community service cleanin' up that ol' " + 
				"mess you caused. No argument here. Bender, quit destroying the universe!</p>",
			tags: ['Power', 'Ribbons'],
			requirement: 5,
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 10,
			name: 'Lights Out - Red',
			image: 'ribbonRedLightBulb.png',
			altText: 'alt for image',
			earn: 'Earn Power badges 20 times.',
			desc: "<p>Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what " + 
				"would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. " + 
				"Cruel though they may be&hellip; Son, as your lawyer, I declare y'all are in a 12-piece bucket " + 
				"o' trouble. But I done struck you a deal: Five hours of community service cleanin' up that ol' " + 
				"mess you caused. No argument here. Bender, quit destroying the universe!</p>",
			tags: ['Power', 'Ribbons'],
			requirement: 10,
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 11,
			name: 'Lights Out - Blue',
			image: 'ribbonBlueLightBulb.png',
			altText: 'alt for image',
			earn: 'Earn Power badges 20 times.',
			desc: "<p>Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what " + 
				"would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. " + 
				"Cruel though they may be&hellip; Son, as your lawyer, I declare y'all are in a 12-piece bucket " + 
				"o' trouble. But I done struck you a deal: Five hours of community service cleanin' up that ol' " + 
				"mess you caused. No argument here. Bender, quit destroying the universe!</p>",
			tags: ['Power', 'Ribbons'],
			requirement: 15,
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 12,
			name: 'Lights Out - Green',
			image: 'ribbonGreenLightBulb.png',
			altText: 'alt for image',
			earn: 'Earn Power badges 20 times.',
			desc: "<p>Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what " + 
				"would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. " + 
				"Cruel though they may be&hellip; Son, as your lawyer, I declare y'all are in a 12-piece bucket " + 
				"o' trouble. But I done struck you a deal: Five hours of community service cleanin' up that ol' " + 
				"mess you caused. No argument here. Bender, quit destroying the universe!</p>",
			tags: ['Power', 'Ribbons'],
			requirement: 20,
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		}
	],
	/* Sticker: Secret meta award earned for interesting or related combinations of badges 
		format {
			id: distinct, sequential integer,
			name: Descriptive or clever name that references component actions,
			image: Name of sticker image in file; no path needed,
			altText: Congratulatory message,
			earn: One sentence mentioning and linking to component badges,
			components: Array containing id integers of badges needed to earn,
			desc: Approximately one paragraph explaining issue and how action helps; may include other relevant info,
			tags: Aggregate list of tags from component badges,
			bonus: Name of infovis in file; no path needed,
			bonusAlt: Short summary of information presented by bonus image
	} */
	stickers: [
		{
			id: 1,
			name: 'Garden Guru',
			image: 'stickerGardenGuru.png',
			altText: 'alt for image',
			earn: "Show off your green thumbs by earning the <a href='badge.html?id=11'>Cherry-Picked</a> and " + 
				"<a href='badge.html?id=16'>A New Leaf</a> badges.",
			components: [11, 16],
			desc: "<p>Hey, whatcha watching? Doomsday device? Ah, now the ball's in Farnsworth's court! Now, now. " + 
				"Perfectly symmetrical violence never solved anything. In your time, yes, but nowadays shut up! " + 
				"Besides, these are adult stemcells, harvested from perfectly healthy adults whom I killed for " + 
				"their stemcells.</p>",
			tags: ['Community', 'Document', 'Drainage', 'Garden'],
			bonus: 'info.png',
			bonusAlt: 'alt for bonus'
		}
	]
}