const DUMMY_SEARCH_RESULTS = {
	technology: [
		"AI chatbot",
		"best smartphone 2024",
		"how to protect online privacy",
		"latest tech gadgets",
		"machine learning tutorial",
	],
	health: [
		"symptoms of anxiety",
		"healthy meal prep ideas",
		"home workout routines",
		"natural sleep remedies",
		"mental health resources",
	],
	travel: [
		"cheap travel destinations",
		"budget travel tips",
		"best places to visit in 2024",
		"solo travel safety",
		"travel insurance comparison",
	],
	professional: [
		"resume writing tips",
		"career change strategies",
		"remote work opportunities",
		"freelance job platforms",
		"professional development courses",
	],
	entertainment: [
		"new Netflix shows",
		"upcoming movie releases",
		"best video games 2024",
		"music festival tickets",
		"streaming service comparison",
	],
	finance: [
		"how to start investing",
		"cryptocurrency trends",
		"personal finance tips",
		"budgeting apps",
		"retirement planning strategies",
	],
	cooking: [
		"easy dinner recipes",
		"vegan meal ideas",
		"how to bake bread",
		"quick lunch recipes",
		"meal prep for beginners",
	],
	education: [
		"online learning platforms",
		"free online courses",
		"study techniques",
		"scholarship opportunities",
		"language learning apps",
	],
	home_and_garden: [
		"home organization tips",
		"DIY home improvement",
		"indoor plant care",
		"small space decorating",
		"gardening for beginners",
	],
	personal_development: [
		"meditation techniques",
		"productivity hacks",
		"how to build confidence",
		"time management skills",
		"goal setting strategies",
	],
};

const keywords = Object.values(DUMMY_SEARCH_RESULTS).flat();

export default keywords;
