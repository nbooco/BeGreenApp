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
			name: 'Thinking Outside the Bin',
			image: '1-LookUpTool.png',
			altText: 'Share information about recycling',
			earn: "Dispose of waste properly by sorting it by disposal method - use the <a href='http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted'>Look Up Tool</a> if you're not sure.",
			desc: "<p>Display disposal confidence in front those recycle/compost/garbage containers. Recycling can be confusing. Sometimes it’s difficult to know whether you are following all the right rules. Learn how to throw your stuff away and impress your friends.</p>",
			tags: ['FoodAndYard', 'Recycling', 'SolidWaste'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 2,
			name: 'Common Knowledge',
			image: '2-ShareRecycling.png',
			altText: 'Share information about recycling.',
			earn: "Share <a href='http://www.seattle.gov/util/MyServices/Recycling/BldgOwnersManagers_Recycling/HelpResidentsRecycle/index.htm'>educational materials</a> about recycling in your building or home.",
			desc: "<p>Seattle’s recycling rules can be confusing, especially if a person is used to a different system of sorting solid waste. Fortunately, materials are available in a variety of languages to help people learn what is recyclable.</p>",
			tags: ['Community', 'Recycling', 'SolidWaste'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 3,
			name: 'Brain Food',
			image: '3-ShareFoodYardWaste.png',
			altText: 'Share informtion about food and yard waste.',
			earn: "Share <a href='http://www.seattle.gov/util/MyServices/FoodYard/BldgOwnersManagers_FoodYard/HelpResidentsCompost/index.htm'>educational materials</a> about food and yard waste in your building or home.",
			desc: "<p>Seattle is the proud home of a cutting-edge program to convert food and yard waste into compost for gardening. For people who haven’t had municipal food and yard waste disposal, or those who want to know more, there are educational materials that explain what can be composted.</p>",
			tags: ['Community', 'FoodAndYard', 'SolidWaste'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 4,
			name: 'Upcycling',
			image: '4-reuseOldProduct.png',
			altText: 'Repurpose a worn item.',
			earn: "<a href='http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted'>Find</a> a creative way to reuse an old product, rather than sending it to be processed as waste.",
			desc: "<p>A wide variety of waste can be dealt with responsibly thanks to the separation of garbage, recycling, and food & yard waste, but households can also reduce waste, save money, and be creative together by finding ways to <a href='http://www.seattle.gov/util/MyServices/Recycling/ReduceReuse/index.htm'>repurpose old or worn items</a>.</p>",
			tags: ['Community', 'Reuse', 'SolidWaste'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 5,
			name: 'Orphan Sock',
			image: '5-donate.png',
			altText: 'Donate a gently used item.',
			earn: "<a href='http://www.seattle.gov/util/MyServices/Recycling/ReduceReuse/DonateorResell/index.htm'>Donate</a> a product in usable condition you would have otherwise thrown out.",
			desc: "<p>Keep textiles out of the landfill. Many clothing-collection programs now want any textile even if it’s torn or stained. This includes clothes, accessories, shoes, linens, towels and curtains. The best items get resold in stores. Everything else gets sold to recyclers. Processing operations around the world recycle scrap clothing and textiles into rags, stuffing, padding, insulation and other products. Donate your single socks and help charities.</p>",
			tags: ['Reuse', 'SolidWaste'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 6,
			name: 'Paper Cut',
			image: '6-StopPhoneBooks.png',
			altText: 'Stop unwanted phonebooks.',
			earn: "Reduce your paper waste by <a href='http://www.seattle.gov/util/MyServices/Recycling/ReduceReuse/StopJunkMail/index.htm'>stopping unwanted phone books and junk mail</a>.",
			desc: "<p>Junk mail’s impact on climate change is the equivalent of nine million cars or the emissions generated by heating nearly 13 million homes for the winter. It takes 111 million trees to produce this amount of paper – and if you’re an average American, you’ll spend 8 months of your life dealing with it. Seattle is sponsoring a service to help reduce the junk mail you receive.</p>",
			tags: ['Community', 'SolidWaste'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 7,
			name: "Papa's Got a Brand New Bag",
			image: '7-reusableBag.png',
			altText: 'Use a reusable bag when you go shopping.',
			earn: "Use a reusable bag when you go shopping to reduce waste from disposable bags.",
			desc: "<p>Which is greener, plastic or paper? The environmental impacts of each are mind-boggling. Paper causes pollution, consumes energy and water, produces waste, is inefficient to recycle and doesn’t degrade all that much faster than plastic. Plastic causes litter, is a danger to birds, marine mammals,  and other wildlife, is difficult to recycle and may take up to 1000 years to degrade in landfills. Most environmental groups say that it's best to avoid the choice altogether -- instead we should diligently reuse bags.</p>",
			tags: ['Reuse', 'SolidWaste'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 8,
			name: 'Bottomless',
			image: '8-reusableMug.png',
			altText: 'Use a reusable mug',
			earn: "Bring a reusable coffee mug instead of getting your drink in a disposable cup.",
			desc: "<p>Did you know that paper coffee cups are laminated with a plastic resin called polyethylene? This helps keep beverages warm and prevents the paper from absorbing liquids and leaking — but the plastic also prevents the cup from being recycled.</p><p>Need more convincing? Take a look at the numbers: 16 billion paper cups are used for coffee every single year. This translates to over 6.5 million trees cut down, 4 billion gallons of water wasted, and enough energy used to power nearly 54,000 homes for a year.</p>",
			tags: ['Reuse', 'SolidWaste'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 9,
			name: 'Earth Defense FORC',
			image: '9-FORC.png',
			altText: 'Participate in the Friends of Recycling and Composting program.',
			earn: "Participate in the <a href='http://www.seattle.gov/util/MyServices/FoodYard/BldgOwnersManagers_FoodYard/RecyclingSteward/index.htm'>Friends of Recycling and Composting program</a>.",
			desc: "<p>Oftentimes other people are the most powerful resource for educating others and motivating them to build green habits. Through SPU’s Friends of Recycling and Composting program, members of multifamily residence communities can learn how to improve food waste collection and recycling in their building.</p>",
			tags: ['Community', 'FoodAndYard', 'Recycling', 'SolidWaste'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 10,
			name: 'Plantastic',
			image: '10-ChoosePlants.png',
			altText: 'Choose area appropriate plants',
			earn: "<a href='http://www.seattle.gov/util/EnvironmentConservation/MyLawnGarden/ChoosingtheRightPlants/index.htm'>Choose plants</a> for your garden that are well-adapted to the region for easier, more efficient care.",
			desc: "<p>Plants in the wrong place need more water and have many pest and disease problems, leading to more chemical use.  Choosing the right plants and planting them correctly saves water, reduces fertilizers and pesticides that pollute our waterways, and makes a healthier, easy-to-care-for landscape.</p>",
			tags: ['Garden', 'Water'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 11,
			name: 'Tapped Out',
			image: '12-RainBarrel.png',
			altText: 'Learn about rain barrels',
			earn: "<a href='http://www.seattle.gov/util/EnvironmentConservation/MyLawnGarden/Rain_Water_Harvesting/index.htm'>Learn</a> about installing a rain barrel as a solution to prevent flooding and store water for irrigation.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Garden', 'Drainage'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 13,
			name: "Don't Drip and Drive",
			image: '13-FindAndFixLeaks.png',
			altText: 'Learn how to detect leaks',
			earn: "Use <a href='http://www.seattle.gov/util/EnvironmentConservation/MyHome/ReduceWaterUse/FindFixLeaks/index.htm'>SPU's videos</a> to learn how to detect and fix leaks around your home.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Community', 'Drainage'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 14,
			name: 'Off the Lot',
			image: '14-CarLeaks.png',
			altText: 'Attend a free Auto Leaks Class',
			earn: "Have your car inspected and learn about common leaks at a free <a href='http://www.seattle.gov/util/EnvironmentConservation/OurWatersheds/ProtectOurWaters/PreventPollution/Motoroil/index.htm'>Auto Leaks Class</a>.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Community', 'Drainage'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 15,
			name: 'Sweet ReLeaf',
			image: '15-CarWash.png',
			altText: 'Use a commercial car wash',
			earn: "Take your car to a <a href='http://www.seattle.gov/util/EnvironmentConservation/OurWatersheds/ProtectOurWaters/PreventPollution/CarWashing/index.htm'>commercial car wash</a> equipped to handle contaminated runoff.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Community', 'Drainage'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 16,
			name: 'Prevent Poolution',
			image: '16-plantTree.png',
			altText: 'Help plant a tree',
			earn: "Properly plant a tree on your property or get involved in a <a href='http://www.seattle.gov/trees/'>community ReLeaf effort</a>.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Community', 'Drainage', 'Garden'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 17,
			name: 'Right From the Source',
			image: '17-petWaste.png',
			altText: 'Pick up pet waste',
			earn: "Pick up <a href='http://www.seattle.gov/util/EnvironmentConservation/OurWatersheds/ProtectOurWaters/PreventPollution/Petwaste/index.htm'>pet waste</a> and dispose of it properly to prevent contamination of local streams and Puget Sound.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Drainage'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 18,
			name: 'No Tag-Backs',
			image: '18-CRW.png',
			altText: 'Visit the Cedar River Watershed',
			earn: "Take a <a href='http://www.seattle.gov/util/EnvironmentConservation/OurWatersheds/CedarRiverWatershed/ProgramsTours/index.htm'>tour or field trip</a> to learn more about the Cedar River Watershed.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Community', 'Water'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 19,
			name: 'Paint the Town',
			image: '19-graffiti.png',
			altText: 'Clean up graffiti in the community',
			earn: "<a href='http://www.seattle.gov/util/EnvironmentConservation/OurCity/Graffiti_Prevention_&_Removal/index.htm'>Volunteer</a> individually or get a group together to clean up graffiti.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Community'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 20,
			name: 'Even Flow',
			image: '20-StencilStormDrains.png',
			altText: 'Stencil storm drains',
			earn: "Stencil storm drains on your own or as part of a community organization to raise awareness of water contamination.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Community', 'Drainage'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 21,
			name: 'Waterfront Property',
			image: '21-ClearStormDrains.png',
			altText: 'Sign up to maintain a storm drain',
			earn: "Sign up to keep a storm drain near your work or home free of debris, which prevents flooding, pollution, and infrastructure damage.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Community', 'Drainage'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 22,
			name: 'Constant Vigilance',
			image: '22-RainGardens.png',
			altText: 'Learn about rain gardens',
			earn: "Learn about <a href='http://www.seattle.gov/util/groups/public/@spu/@usm/documents/webcontent/spu01_006288.pdf'>rain gardens</a> and see if they're the right solution for managing stormwater on your property.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Document', 'Drainage', 'Garden'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 23,
			name: 'Tough Love',
			image: '23-Cistern.png',
			altText: 'Learn about rain cisterns',
			earn: "Read about <a href='http://www.seattle.gov/util/groups/public/@spu/@usm/documents/webcontent/spu01_006291.pdf'>rain cisterns</a> and see if they're a viable option for managing your stormwater.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Document', 'Drainage', 'Garden'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 24,
			name: 'Clean Streets',
			image: '24-Pollution.png',
			altText: 'Report water pollution and spills',
			earn: "Keep an eye out for surface water pollution and spills. Check out the <a href='http://www.seattle.gov/util/environmentconservation/ourwatersheds/protectourwaters/preventpollution/reportspills/'>online form</a> for reporting incidents to SPU.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Community', 'Drainage'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 25,
			name: 'Greenbacks for Green Acts',
			image: '25-Watering.png',
			altText: 'Adjust garden and lawn watering habits',
			earn: "<a href='http://www.seattle.gov/util/EnvironmentConservation/MyLawnGarden/Smart_Watering/index.htm'>Learn</a> how to make your lawn and garden watering routine to as efficient and healthy for plants as possible. Adjust accordingly.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Drainage', 'Garden', 'Water'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 26,
			name: 'Recalculating',
			image: '26-AdoptAStreet.png',
			altText: 'Adopt a street',
			earn: "Volunteer to <a href='http://www.seattle.gov/util/environmentconservation/getinvolved/adoptastreet/'>adopt a street</a> and keep it free of litter.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Community'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 27,
			name: 'Feed Me, Seymour!',
			image: '27-GreenBusiness.png',
			altText: 'Support green businesses',
			earn: "Support one of the businesses featured on the <a href='http://www.seattle.gov/util/ForBusinesses/GreenYourBusiness/GetontheMap/index.htm'>green business map</a>.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Community'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 28,
			name: 'Mulch Ado About Nothing',
			image: '28-CartSizeCalculator.png',
			altText: 'Try the cart-size calculator',
			earn: "Check out the <a href='http://www.seattle.gov/util/MyServices/Garbage/HouseResidentsGarbage/slider/index.htm'>cart-size calculator</a> and consider using more recycling and composting.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['FoodAndYard', 'Recycling', 'SolidWaste', 'WebTool'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 29,
			name: 'Bright Idea',
			image: '29-compost.png',
			altText: 'Learn more about compost',
			earn: "<a href='http://www.seattle.gov/util/EnvironmentConservation/MyLawnGarden/CompostSoil/GrowingHealthySoil/index.htm'>Learn</a> how to use compost to supplement your soil and grow healthier plants.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['FoodAndYard', 'Garden'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 30,
			name: 'Room for Improvement',
			image: '30-mulch.png',
			altText: 'Learn more about mulch',
			earn: "<a href='http://www.seattle.gov/util/EnvironmentConservation/MyLawnGarden/CompostSoil/GrowingHealthySoil/index.htm'>Learn</a> about using mulch to conserve water and control weeds in your gardens.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Drainage', 'FoodAndYard', 'Recycling', 'SolidWaste', 'WebTool'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 31,
			name: 'Green Lantern',
			image: '31-GreenUp.png',
			altText: 'Buy electricity from renewable sources',
			earn: "Join City Light's <a href='http://www.seattle.gov/light/Green/greenPower/greenup.asp'>Green Up! Program</a> and ensure that a portion of your electricity is purchased from green producers.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Air', 'Power'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 32,
			name: 'Kill-a-Watt',
			image: '32-EnergyAudit.png',
			altText: 'Perform a home energy audit',
			earn: "Have a <a href='http://www.seattle.gov/light/conserve/hea/'>professional home energy audit</a> or <a href='http://www.seattle.gov/light/printdocs/DoItYourselfHome.PDF'>do your own</a> using SCL's checklist.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Document', 'Power'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 33,
			name: 'Splurge Protector',
			image: '33-ReplaceLEDBulb.png',
			altText: 'Replace incandescent bulbs',
			earn: "Replace all of the incandescent light bulbs in your home with <a href='http://www.seattle.gov/light/home-lighting/'>CFL or LED alternatives</a>.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Air', 'Power'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 34,
			name: 'Star Search',
			image: '34-KillAWatt.png',
			altText: 'Measure power consumption by inactive devices',
			earn: "Borrow the <a href='http://www.spl.org/about-the-library/library-news-releases/help-conserve-energy-and-lower-electric-bills----borrow-a-kill-a-watt-meter-from-the-seattle-public-library'>Kill-a-Watt device</a> from Seattle Public Libraries to see power consumption by inactive devices",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Community', 'Power'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 35,
			name: 'The Carter Maneuver',
			image: '35-SmartPowerStrip.png',
			altText: 'Switch to smart power strips',
			earn: "Switch to smart power strips that stop power from flowing to inactive devices",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Power'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 36,
			name: 'Bunny Duster',
			image: '36-EnergyStar.png',
			altText: 'Check your appliances for efficiency certification',
			earn: "Check your appliances for Energy Forward or Energy Star certification to ensure efficient power use. Consider replacing inefficient devices.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Power'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 37,
			name: 'Clean Energy',
			image: '37-DressWarmer.png',
			altText: 'Dress for the season',
			earn: "In winter, dress warmer before you consider turning on the thermostat.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Power'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 38,
			name: 'Drop by Drop',
			image: '38-HeaterFinsFans.png',
			altText: 'Keep heater fins and wall fans clear of dust',
			earn: "Vaccuum dust from baseboard heater fins and wall fan heaters for more efficient heating.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Power'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 39,
			name: 'Seal of Approval',
			image: '39-ShowerHead.png',
			altText: 'Install a WaterSense showerhead',
			earn: "Install a <a href='http://www.seattle.gov/light/conserve/showerhead/'>WaterSense showerhead</a> to reduce water use without reducing water pressure.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Power', 'Water'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 40,
			name: 'Fully Loaded',
			image: '40-FaucetDrips.png',
			altText: 'Check your faucets for leaks',
			earn: "Check your faucets for leaks or drips. If you find any, fix them immediately.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Water'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 41,
			name: 'High and Dry',
			image: '41-CheckFridge.png',
			altText: 'Check the door seals on your refrigerator',
			earn: "Check your fridge for loose or damaged door seals. Replace them if they are not sealing properly.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Power'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 42,
			name: 'Hanging Out',
			image: '42-WashFullLoads.png',
			altText: 'Wash full loads of laundry',
			earn: "Wash only full loads of laundry in cold water.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Power', 'Water'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 43,
			name: 'Get Your Fill',
			image: '43-DryFullLoads.png',
			altText: 'Dry full loads of laundry',
			earn: "Dry only full loads while doing laundry.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Power'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 44,
			name: 'Pay It Forward',
			image: '44-HangDry.png',
			altText: 'Air dry your laundry',
			earn: "Hang dry your laundry, or use the air-dry option on your dryer.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Power'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 45,
			name: 'Easy Rider',
			image: '45-Dishwasher.png',
			altText: 'Run full loads in your dishwasher',
			earn: "Run only full loads in your dishwasher.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Power', 'Water'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 46,
			name: '55 Miles Per Hour',
			image: '46-eBilling.png',
			altText: 'Switch to eBilling',
			earn: "Switch to <a href='http://www.seattle.gov/util/MyServices/MyAccount/PaymentsandBills/" + 
				"LoginSignupPaperlessBilling/index.htm'>eBilling</a> to save paper.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['SolidWaste', 'WebTool'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 47,
			name: 'Good Crop, Bad Crop',
			image: '47-Bicycle.png',
			altText: 'Bike instead of driving',
			earn: "Ride your bike to rather than driving.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Air', 'Transportation'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 48,
			name: 'Hoofing It',
			image: '48-PublicTransportation.png',
			altText: 'Use public transportation',
			earn: "Take public transportation rather than driving.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Community', 'Transportation'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 49,
			name: 'Fine Print',
			image: '49-LookUpTool.png',
			altText: 'Sort waste into trash, recycling, and compost',
			earn: "Dispose of waste properly by sorting it by disposal method - use the <a href='http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted'>Look Up Tool</a> if you're not sure.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['FoodAndYard', 'Recycling', 'SolidWaste'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 50,
			name: 'Wipe Out',
			image: '50-Walking.png',
			altText: 'Walk instead of using a vehicle',
			earn: "Walk instead of using a vehicle.",
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Air', 'Community', 'Transportation'],
			bonus: 'bonus.gif',
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
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['SolidWaste', 'Trophies'],
			requirement: 3,
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 2,
			name: 'Champion of the Wastes - Silver',
			image: 'silverTrophyReduceReuse.png',
			altText: 'alt for image',
			earn: 'Earn 5 distinct SolidWaste badges.',
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['SolidWaste', 'Trophies'],
			requirement: 5,
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 3,
			name: 'Champion of the Wastes - Gold',
			image: 'goldTrophyReduceReuse.png',
			altText: 'alt for image',
			earn: 'Earn 8 distinct SolidWaste badges.',
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['SolidWaste', 'Trophies'],
			requirement: 8,
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 4,
			name: 'Champion of the Wastes - Platinum',
			image: 'platinumTrophyReduceReuse.png',
			altText: 'alt for image',
			earn: 'Earn all 10 distinct SolidWaste badges.',
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['SolidWaste', 'Trophies'],
			requirement: 10,
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 5,
			name: 'Pillar of the Community - Bronze',
			image: 'bronzeTrophyCommunity.png',
			altText: 'alt for image',
			earn: 'Earn five distinct Community badges.',
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Community', 'Trophies'],
			requirement: 5,
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 6,
			name: 'Pillar of the Community - Silver',
			image: 'silverTrophyCommunity.png',
			altText: 'alt for image',
			earn: 'Earn 9 distinct Community badges.',
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Community', 'Trophies'],
			requirement: 9,
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 7,
			name: 'Pillar of the Community - Gold',
			image: 'goldTrophyCommunity.png',
			altText: 'alt for image',
			earn: 'Earn 13 distinct Community badges.',
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Community', 'Trophies'],
			requirement: 13,
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 8,
			name: 'Pillar of the Community - Platinum',
			image: 'platinumTrophyCommunity.png',
			altText: 'alt for image',
			earn: 'Earn all 18 distinct Community badges.',
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Community', 'Trophies'],
			requirement: 18,
			bonus: 'bonus.gif',
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
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['SolidWaste', 'Ribbons'],
			requirement: 5,
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 2,
			name: 'MeRRRitorious - Red',
			image: 'ribbonRedGrnStar.png',
			altText: 'alt for image',
			earn: 'Earn SolidWaste badges 10 times.',
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['SolidWaste', 'Ribbons'],
			requirement: 10,
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 3,
			name: 'MeRRRitorious - Blue',
			image: 'ribbonBlueGrnStar.png',
			altText: 'alt for image',
			earn: 'Earn SolidWaste badges 15 times.',
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['SolidWaste', 'Ribbons'],
			requirement: 15,
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 4,
			name: 'MeRRRitorious - Green',
			image: 'ribbonGreenGrnStar.png',
			altText: 'alt for image',
			earn: 'Earn SolidWaste badges 20 times.',
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['SolidWaste', 'Ribbons'],
			requirement: 20,
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 5,
			name: 'County Fair - Yellow',
			image: 'ribbonYellowYellowStar.png',
			altText: 'alt for image',
			earn: 'Earn Community badges 20 times.',
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Community', 'Ribbons'],
			requirement: 5,
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 6,
			name: 'County Fair - Red',
			image: 'ribbonRedYellowStar.png',
			altText: 'alt for image',
			earn: 'Earn Community badges 20 times.',
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Community', 'Ribbons'],
			requirement: 10,
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 7,
			name: 'County Fair - Blue',
			image: 'ribbonBlueYellowStar.png',
			altText: 'alt for image',
			earn: 'Earn Community badges 20 times.',
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Community', 'Ribbons'],
			requirement: 15,
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 8,
			name: 'County Fair - Green',
			image: 'ribbonGreenYellowStar.png',
			altText: 'alt for image',
			earn: 'Earn Community badges 20 times.',
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Community', 'Ribbons'],
			requirement: 20,
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{	
			id: 9,
			name: 'Lights Out - Yellow',
			image: 'ribbonYellLightBulb.png',
			altText: 'alt for image',
			earn: 'Earn Power badges 20 times.',
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Power', 'Ribbons'],
			requirement: 5,
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 10,
			name: 'Lights Out - Red',
			image: 'ribbonRedLightBulb.png',
			altText: 'alt for image',
			earn: 'Earn Power badges 20 times.',
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Power', 'Ribbons'],
			requirement: 10,
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 11,
			name: 'Lights Out - Blue',
			image: 'ribbonBlueLightBulb.png',
			altText: 'alt for image',
			earn: 'Earn Power badges 20 times.',
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Power', 'Ribbons'],
			requirement: 15,
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 12,
			name: 'Lights Out - Green',
			image: 'ribbonGreenLightBulb.png',
			altText: 'alt for image',
			earn: 'Earn Power badges 20 times.',
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Power', 'Ribbons'],
			requirement: 20,
			bonus: 'bonus.gif',
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
			desc: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan luctus lobortis. Vivamus fringilla, leo dictum vulputate pharetra, dui magna consectetur felis, non convallis sem risus non felis. Duis neque elit, efficitur aliquam metus eget, tincidunt pulvinar dui. Duis et felis volutpat urna tincidunt finibus id quis tortor. Duis non orci eu nibh venenatis placerat et semper sapien. Curabitur quis ligula condimentum, facilisis mauris id, blandit nisl. In ullamcorper diam sed nisi aliquet, non semper mi malesuada.</p>",
			tags: ['Community', 'Document', 'Drainage', 'Garden'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		}
	]
}