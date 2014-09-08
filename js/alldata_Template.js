//use existing 'com' if defined
var gov = gov || {};

//use existing 'com.dawgpizza' if defined
gov.green = gov.green || {};

//our menu object
gov.green.awards = {
	badges: [
		{
			id: 1,
			name: 'Demo Badge',
			image: 'badge.png',
			altText: 'Demo Badge',
			earn: 'summary',
			desc: "<p>No great idea springs into the world fully-formed from the aether, including the Seattle Green Achievers program. This badge helped us visualize the layout of the site and understand how the game would function as we were building it. This badge also served as a template for other badges, with actual content, that would come later.</p><p>Social analysis Medecins du Monde free-speech new approaches socio-economic divide. Agenda; Bono, stakeholders partner effect theory of social change Bloomberg. Organization healthcare crisis situation, process global health vulnerable citizens. Jane Jacobs implementation activism; NGO accessibility pathway to a better life. Dedicated, detection, benefit prevention transformative vaccines replicable change movements rights-based approach social movement. Policy environmental catalyze technology worldwide; institutions, equity.</p>",
			tags: ['an', 'array', 'of', 'associated', 'tags'],
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