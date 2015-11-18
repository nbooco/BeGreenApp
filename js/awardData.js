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
			image: '11-FindAndFixLeaks.png',
			altText: 'Check your toilet for leaks',
			earn: "<a href='http://www.savingwater.org/Indoors/FixingLeaks/FindandFixaleakytoilet/index.htm'>Check your toilet for leaks</a> using food coloring.",
			desc: "<p>Toilet leaks are sneaky. Sometimes you can hear the sound of running water or a faint hissing or trickling. But many toilet leaks are silent and can occur without you knowing. Finding and fixing leaks is pretty simple and can help conserve water.</p>",
			tags: ['Water'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 12,
			name: "Don't Drip and Drive",
			image: '12-CarLeaks.png',
			altText: 'Attend a free auto leaks class',
			earn: "Have your car inspected and learn about common leaks at a <a href='http://www.seattle.gov/util/environmentconservation/ourwatersheds/protectourwaters/preventpollution/autoleaks/'>free Auto Leaks Class</a>.",
			desc: "<p>Leaking oil goes from car to street. And is washed from the street into the storm drain and into our lakes, streams and Puget Sound. Each year, our vehicles release 7 million quarts of motor oil and other petroleum-related products into the Puget Sound watershed. Oil and other petroleum products can harm wildlife and habitat. When it rains, stormwater runoff carries petroleum products that drip from our cars to rivers, streams, lakes and Puget Sound.</p>",
			tags: ['Community', 'Drainage'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 13,
			name: 'Off the Lot',
			image: '13-CarWash.png',
			altText: 'Use a commercial car wash',
			earn: "Take your car to a commercial car wash, where <a href='http://www.seattle.gov/util/EnvironmentConservation/OurWatersheds/ProtectOurWaters/PreventPollution/CarWashing/index.htm'>contaminated runoff can be treated properly</a>.",
			desc: "<p>Many people don't know that washing vehicles on pavement causes harm to local waterways. Water entering storm drains, unlike water that enters sanitary sewers, does not undergo treatment before it is discharged. So, when cars are washed on streets, parking lots and driveways, that dirty water eventually winds up in rivers, streams and lakes. Washing one car may not seem to be a problem, but collectively, car-washing activity adds up to big problems for our waterways and aquatic life.</p>",
			tags: ['Community', 'Drainage'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 15,
			name: 'Sweet ReLeaf',
			image: '15-plantTree.png',
			altText: 'Use a commercial car wash',
			earn: "Help grow Seattle’s urban forest by planting a tree in your yard. Get a free tree through Seattle reLeaf’s <a href='http://www.seattle.gov/trees/treesforneighborhoods.htm'>Trees for Neighborhoods project</a>.",
			desc: "<p>Trees add much more to our urban landscape than a spot of green on the horizon. A healthy, mature urban forest helps keep Seattle a sustainable, green, and healthy place to live. Trees have many environmental benefits including breaking up heat islands, decreasing flooding from stormwater runoff, and absorbing carbon dioxide. Trees are also critical to a vital community because they help calm traffic, increase property values, reduce crime, and lower utility bills.</p>",
			tags: ['Air', 'Community', 'Garden'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 16,
			name: 'Prevent Poolution',
			image: '16-petWaste.png',
			altText: 'Pick up after your pets',
			earn: "Pick up pet waste and dispose of it properly to prevent contaminating local streams and Puget Sound.",
			desc: "<p>We have more than 125,000 dogs and 60,000 outdoor cats that live, play and poop in Seattle. That amounts to about 50,000 lbs. of pet waste every day. Dog waste is an environmental pollutant. Since storm drains do not connect to treatment facilities, untreated animal poop often ends up in rivers and streams. Scooping the poop helps keep harmful nutrients and bacteria from our waterways, keeps our citizens healthy and our yards and shoes clean.</p>",
			tags: ['Community', 'Drainage'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 17,
			name: 'Right From the Source',
			image: '17-CRW.png',
			altText: 'Visit the Cedar Rivew Watershed',
			earn: "Take a <a href='http://www.seattle.gov/util/EnvironmentConservation/OurWatersheds/CedarRiverWatershed/ProgramsTours/index.htm'>tour or field trip</a> to learn more about the Cedar River Watershed.",
			desc: "<p>The Cedar River Watershed is one of two sources of fresh water for the Seattle area. CRW staff offer tours and field trips for citizens to learn more about the area, where their water comes from, and the importance of preserving the environment.</p>",
			tags: ['Community', 'Water'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 18,
			name: 'No Tag-Backs',
			image: '18-graffiti.png',
			altText: 'Clean up graffiti in the community',
			earn: "<a href='http://www.seattle.gov/util/EnvironmentConservation/GetInvolved/CleanUpGraffiti/index.htm'>Volunteer to clean up graffiti</a> on private property, or <a href='http://www.seattle.gov/util/EnvironmentConservation/GetInvolved/CleanUpGraffiti/index.htm'>report graffiti</a> on public property.",
			desc: "<p>Volunteering time and energy makes the community a better, brighter place for everyone. Individuals and groups who get permission to clean up private property can get supplies from SPU, and the city relies on citizen reports to find and deal with vandalism on public property.</p>",
			tags: ['Community'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 19,
			name: 'Paint the Town',
			image: '19-Stencil.png',
			altText: 'Stencil storm drains on your own or as part of a community organization to raise awareness of water contamination.',
			earn: "<a href='http://www.seattle.gov/util/EnvironmentConservation/GetInvolved/StencilaStormDrain/index.htm'>Volunteer</a> to stencil storm drains in your neighborhood.",
			desc: "<p>Many of Seattle’s storm drains convey water directly to nearby streams, lakes, or Puget Sound, rather than sending it to be treated like sewage. When people pour hazardous chemicals or motor oil into these drains, it can have a devastating impact on underwater ecosystems. Through Seattle Public Utilities, people can stencil storm drains to raise awareness and encourage proper disposal of chemicals.</p>",
			tags: ['Community', 'Drainage'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 20,
			name: 'Even Flow',
			image: '20-ClearStormDrains.png',
			altText: 'Sign up to maintain a storm drain',
			earn: "<a htm='http://www.seattle.gov/util/EnvironmentConservation/OurWatersheds/ProtectOurWaters/PreventPollution/Petwaste/index.htm'>Adopt a storm drain</a> near your home or work.",
			desc: "<p>Whatever you keep out of the storm drain, you keep out of our waterways. Water that washes off your property into the storm drain doesn’t go to a treatment plant. It goes straight into our waterways. Storm drains can become clogged with excess leaves, tree branches and trash, which can lead to storm drain back-ups that flood streets and private property. Trash and contaminants flow from storm drains into our streams, lakes, wetlands, groundwater and Puget Sound. Help keep our waterways clean by keeping storm drains clear and by encouraging your neighbors to do the same.</p>",
			tags: ['Community', 'Drainage'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 21,
			name: 'Constant Vigilance',
			image: '21-Pollution.png',
			altText: 'Report pollution and spills',
			earn: "<a href='http://www.seattle.gov/util/EnvironmentConservation/OurWatersheds/ProtectOurWaters/PreventPollution/ReportSpills/index.htm'>Report</a> surface water pollution or accidental spills.",
			desc: "<p>Accidental pollution can cause widespread damage to the environment and endanger the health of people and wildlife. Pollution can affect inland waters such as lakes, rivers and groundwater, as well as coastal marine waters like Puget Sound. Help keep an eye out for surface water pollution and spills. If you see an incident, report it to SPU.</p>",
			tags: ['Community', 'Drainage'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 22,
			name: 'Tough Love',
			image: '22-Watering.png',
			altText: 'Adjust garden and lawn watering habits',
			earn: "<a href='http://www.seattle.gov/util/EnvironmentConservation/MyLawnGarden/Smart_Watering/index.htm'>Learn</a> how to make your lawn and garden watering routine to as efficient and healthy for plants as possible. Adjust accordingly.",
			desc: "<p>Over-watering causes plant diseases and wastes water.  Water Smart practices like watering deeplybut less frequently build deeper plant roots and help plants thrive during dry times.  Smart watering helps us conserve water during dry summers when our supply is lowest, and leave more water in rivers for fish and wildlife.</p>",
			tags: ['Garden', 'Water'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 23,
			name: 'Clean Streets',
			image: '23-AdoptAStreet.png',
			altText: 'Adopt a street',
			earn: "Volunteer to <a href='http://www.seattle.gov/util/environmentconservation/getinvolved/adoptastreet/'>adopt a street</a> and keep it free of litter.",
			desc: "<p>Help keep Seattle beautiful with clean streets and beautiful neighborhoods. There is no cost to volunteers and you’ll receive: clean-up supplies, safety equipment, after-cleanup garbage pickup, educational resources, and graffiti removal supplies.</p>",
			tags: ['Community', 'Drainage', 'SolidWaste'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 24,
			name: 'Greenbacks for Green Acts',
			image: '24-GreenBusiness.png',
			altText: 'Support green businesses',
			earn: "Support one of the businesses featured on the <a href='http://www.seattle.gov/util/ForBusinesses/GreenYourBusiness/GetontheMap/index.htm'>green business map</a>.",
			desc: "<p>Seattle’s businesses are going green to cut waste, save water and energy, and reduce pollution. Show these businesses that you care about their efforts: support one today.</p>",
			tags: ['Community'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 25,
			name: 'Recalculating',
			image: '25-CartSizeCalculator.png',
			altText: 'Try the cart-size calculator',
			earn: "Check out the <a href='http://www.seattle.gov/util/MyServices/Garbage/HouseResidentsGarbage/slider/index.htm'>cart-size calculator</a> and consider using more recycling and composting.",
			desc: "<p>SPU has a variety of web tools to help in your business with the city. The cart-size calculator can help you find the solid waste bins that meet your needs.</p>",
			tags: ['FoodAndYard', 'Recycling', 'SolidWaste'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 26,
			name: 'Feed Me, Seymour!',
			image: '26-compost.png',
			altText: 'Learn about compost',
			earn: "<a href='http://www.seattle.gov/util/EnvironmentConservation/MyLawnGarden/CompostSoil/GrowingHealthySoil/index.htm'>Learn</a> how to use compost to supplement your soil and grow healthier plants.",
			desc: "<p>Compacted, low-organic urban soils shed water and chemicals into our streams, and require more fertilizer to grow plants.  Building healthy soil with compost and mulch helps soil absorb winter rainfall, slowing runoff, and store water and nutrients in plant-available forms for summer growth. This reduces the need for fertilizers and pesticides, and keeps more water in our rivers for fish and wildlife.</p>",
			tags: ['FoodAndYard', 'Garden', 'SolidWaste'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 27,
			name: 'Mulch Ado About Nothing',
			image: '27-mulch.png',
			altText: 'Learn more about mulch',
			earn: "<a href='http://www.seattle.gov/util/EnvironmentConservation/MyLawnGarden/CompostSoil/GrowingHealthySoil/index.htm'>Learn</a> about using mulch to conserve water and control weeds in your gardens.",
			desc: "<p>Bare soil loses water quickly in summer, and grows weeds all year, resulting in use of herbicides that pollute our waterways.  Mulching with fall leaves or arborist wood chips (free from tree companies) conserves water, helps winter rains soak in rather than running off, prevents weed growth, and slowly feeds the soil for healthier trees and gardens. That keeps our waterways cleaner, conserves water for fish and wildlife, and makes your yard healthy and easy to care for.</p>",
			tags: ['Drainage', 'Garden'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 28,
			name: 'Bright Idea',
			image: '28-GreenUp.png',
			altText: 'Buy electricity from renewable sources',
			earn: "Join City Light's <a href='http://www.seattle.gov/light/Green/greenPower/greenup.asp'>Green Up! Program</a> and ensure that a portion of your electricity is purchased from green producers.",
			desc: "<p>Through Seattle City Light’s Green Up! program, you can ensure that a portion of your monthly electricity use is purchased from local independent companies that produce energy from renewable resources including wind and solar power. Joining in supports energy independence, promotes domestic economic growth, and reduces the environmental impact of electricity production.</p>",
			tags: ['Community', 'Power'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 29,
			name: 'Room for Improvement',
			image: '29-EnergyAudit.png',
			altText: 'Perform a home energy audit',
			earn: "Have a <a href='http://www.seattle.gov/light/conserve/hea/'>professional home energy audit</a> or <a href='http://www.seattle.gov/light/printdocs/DoItYourselfHome.PDF'>do your own</a> using SCL's checklist.",
			desc: "<p>The use and flow of energy in a home is a complicated system that can result in inefficiencies and waste. By conducting a home energy audit, you can find simple fixes that will help cut down on waste and improve your comfort and control over the environment in your home.</p>",
			tags: ['Community', 'Power'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 30,
			name: 'Green Lantern',
			image: '30-ReplaceLEDBulb.png',
			altText: 'Replace incandescent bulbs',
			earn: "Replace all of the incandescent light bulbs in your home with <a href='http://www.seattle.gov/light/home-lighting/'>CFL or LED alternatives</a>.",
			desc: "<p>Using LED bulbs to light your home provides a myriad of benefits to you and the environment. LEDs can use as little as 20% of the power of traditional incandescent bulbs and have a lifespan of 15 to 25 years, reducing the frequency of replacements and the amount of waste generated.</p>",
			tags: ['Power'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 31,
			name: 'Kill-a-Watt',
			image: '31-KillAWatt.png',
			altText: 'Measure power consumption by inactive devices',
			earn: "Borrow the <a href='http://www.spl.org/about-the-library/library-news-releases/help-conserve-energy-and-lower-electric-bills----borrow-a-kill-a-watt-meter-from-the-seattle-public-library'>Kill-a-Watt device</a> from Seattle Public Libraries to see power consumption by inactive devices",
			desc: "<p>Many electronic devices can consume standby power when they are deactivated but plugged in. The Kill-a-Watt plug monitor device, available to borrow from Seattle Public Libraries, can help you evaluate and reduce passive consumption.</p>",
			tags: ['Community', 'Power'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 32,
			name: 'Splurge Protector',
			image: '32-SmartPowerStrip.png',
			altText: 'Switch to smart power strips',
			earn: "Switch to smart power strips that stop power from flowing to inactive devices",
			desc: "<p>Leaving electronics plugged in when not in use still draws power. While this standby power may serve a purpose, such as charging batteries, in many cases it is a waste of electricity. Unplugging devices or using smart power strips, which cut off the power to inactive devices, can reduce excess consumption.</p>",
			tags: ['Document', 'Power'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 33,
			name: 'Star Search',
			image: '33-EnergyStar.png',
			altText: 'Check your appliances for efficiency certification',
			earn: "Check your appliances for Energy Forward or Energy Star certification to ensure efficient power use. Consider replacing inefficient devices.",
			desc: "<p>While power use is commonly associated with lighting and heating, appliances like dishwashers, washing machines, water heaters, and refrigerators can be energy-intensive but less conspicuous. Energy Star certified appliances and electronics can help to reduce those needs and overall household energy use.</p>",
			tags: ['Power'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 34,
			name: 'The Carter Maneuver',
			image: '34-DressWarmer.png',
			altText: 'Dress for the season',
			earn: "In winter, dress warmer before you consider turning on the thermostat.",
			desc: "<p>While central heating is convenient and comfortable in the winter, it can be slow and energy intensive. Often, putting on some cozy seasonal clothing will have the same effect.</p>",
			tags: ['Power'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 35,
			name: 'Bunny Duster',
			image: '35-HeaterFinsFans.png',
			altText: 'Keep heater fins and wall fans clear of dust',
			earn: "Vaccuum dust from baseboard heater fins and wall fan heaters for more efficient heating.",
			desc: "<p>Heating units can become inefficient over time due to dust buildup, leading to wasted energy and uncomfortable home temperatures. Regular cleaning can stop this issue before it starts.</p>",
			tags: ['Power'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 36,
			name: 'Clean Energy',
			image: '36-ShowerHead.png',
			altText: 'Install a WaterSense showerhead',
			earn: "Install a <a href='http://www.seattle.gov/light/conserve/showerhead/'>WaterSense showerhead</a> to reduce water use without reducing water pressure.",
			desc: "<p>When reservoir water levels get lower and ground water tables drop, water supplies, human health, and the environment are put at serious risk. For example, lower water levels can contribute to higher concentrations of natural and human pollutants. Less water going down the drain means more water available in the lakes, rivers and streams that we use for recreation and wildlife uses to survive. Using water more efficiently helps maintain supplies at safe levels, protecting human health and the environment. Do your part to save water and protect the environment. Install a WaterSense showerhead.</p>",
			tags: ['Power', 'Water'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 37,
			name: 'Drop by Drop',
			image: '37-FaucetDrips.png',
			altText: 'Check your faucets for leaks',
			earn: "Check your faucets for leaks or drips. If you find any, fix them immediately.",
			desc: "<p>Water is vital to the survival of everything on the planet. The Earth might seem like it has abundant water, but in fact less than 1 percent is available for human use. Saving water will create a more sustainable water future. The average household's leaks can account for more than 10,000 gallons of water wasted every year, or the amount of water needed to wash 270 loads of laundry. Do your part to stop wasting water by finding and fixing leaks around your home.</p>",
			tags: ['Power', 'Water'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 38,
			name: 'Seal of Approval',
			image: '38-CheckFridge.png',
			altText: 'Check the door seals on your refrigerator',
			earn: "Check your fridge for loose or damaged door seals. Replace them if they are not sealing properly.",
			desc: "<p>A tight seal is important for a refrigerator to work properly. Without one, the fridge will need to use more power to counteract incoming room temperature air. The appliance may also struggle to stay as cool, effecting the shelf life of perishable goods inside.</p>",
			tags: ['Power'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 39,
			name: 'Fully Loaded',
			image: '39-WashFullLoads.png',
			altText: 'Wash full loads of laundry',
			earn: "Wash only full loads of laundry in cold water.",
			desc: "<p>LWashing and drying your laundry is one of the most energy- and water-intensive chores in the home. There’s huge potential to reduce your personal energy and water use, and therefore your environmental footprint, by greening your laundry habits.</p>",
			tags: ['Power', 'Water'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 40,
			name: 'High and Dry',
			image: '40-DryFullLoads.png',
			altText: 'Dry full loads of laundry',
			earn: "Dry only full loads while doing laundry.",
			desc: "<p>Drying full loads of laundry reduces the number of cycles needed to get it all done, and it makes more efficient use of the energy used to run a load.</p>",
			tags: ['Power'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 41,
			name: 'Hanging Out',
			image: '41-HangDry.png',
			altText:  'Air dry your laundry',
			earn: "Hang dry your laundry, or use the air-dry option on your dryer.",
			desc: "<p>Your dryer is one of the most energy-expensive appliances in your home. With patience, you can dry your clothes while making huge cuts to your power consumption.</p>",
			tags: ['Power'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 42,
			name: 'Get Your Fill',
			image: '42-Dishwasher.png',
			altText: 'Run full loads in your dishwasher',
			earn: "Run only full loads in your dishwasher.",
			desc: "<p>Did you know that less than 1% of all the water on Earth can be used by people? The rest is salt water (the kind you find in the ocean) or is frozen. Communities across the country are starting to face challenges in maintaining healthy and affordable water supplies; that's why it's more important than ever to use our water wisely and not waste it. In addition, it takes large amounts of energy to produce and transport clean water and to process waste water. Running a full load in your dishwasher will help make the most of the energy, water, and detergent the machine uses.</p>",
			tags: ['Power', 'Water'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 43,
			name: 'Pay It Forward',
			image: '43-eBilling.png',
			altText: 'Switch to eBilling',
			earn: "Switch to <a href='http://www.seattle.gov/util/MyServices/MyAccount/PaymentsandBills/LoginSignupPaperlessBilling/index.htm'>eBilling</a> to save paper.",
			desc: "<p>The ubiquity of computer technology makes it easier than ever to pay bills online. By switching to eBilling with SPU and SCL, you can enjoy the convenience of taking care of bills on the go or at home while reducing paper waste.</p>",
			tags: ['Community', 'SolidWaste'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 44,
			name: 'Easy Rider',
			image: '44-Bicycle.png',
			altText: 'Bike instead of driving',
			earn: "Ride your bike to rather than driving.",
			desc: "<p>Commuting via bicycle, rather than driving, provides numerous benefits including exercise, avoiding traffic, reducing pollution, and lessening the impact of gas on your budget.</p>",
			tags: ['Air', 'Community', 'Transportation'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
		{
			id: 45,
			name: '55 Miles Per Hour',
			image: '45-PublicTransportation.png',
			altText: 'Use public transportation',
			earn: "Take public transportation rather than driving.",
			desc: "<p>By using public transportation, rather than driving, for daily commuting, you can reduce fuel consumption and carbon emissions, improve air quality, and avoid dealing with traffic. Taking the bus also supports a service that helps those who don't have cars or can't drive get around.</p>",
			tags: ['Air', 'Community', 'Transportation'],
			bonus: 'bonus.gif',
			bonusAlt: 'alt for bonus'
		},
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