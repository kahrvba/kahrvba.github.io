export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "UI/UX Designer",
		icon: "/backend.webp",
	},
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "App Developer",
		icon: "/mobile.webp",
	},
	{
		title: "Software Engineer",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "wordpress",
		icon: "/tech/wordpress.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

const experiences = [
	{
		title: "Project Manager & Lead Developer",
		company_name: "Alemdar Teknik",
		icon: "/alemdarlogo.png",
		iconBg: "#C0C0C0",
		date: "2025 - Present",
		points: [
			"Leading the redevelopment of the company’s website and online infrastructure.",
			"Managed project timelines, stakeholder communications, and technical execution.",
			"Resolved SEO issues, improved site indexing, and built a fast, responsive platform."
		],
	},
	{
		title: "AI Developer & Embedded Systems Integrator",
		company_name: "Tech Fusion Labs (Startup)",
		icon: "/MyStartUp.png",
		iconBg: "#E6DEDD",
		date: "2024 - Present",
		points: [
			"Founded and lead AI startup focused on real-time embedded systems and mobile apps.",
			"Developed AI-powered mobile applications with React Native to control embedded devices.",
			"Trained and deployed EfficientNet and DQN models for classification and sorting tasks.",
			"Built scalable systems optimized for resource-constrained hardware like Jetson Nano."
		],
	},
	{
		title: "Research Assistant & Teaching Support",
		company_name: "Cyprus International University (CIU)",
		icon: "/ciulogo.png",
		iconBg: "#D4E6F1",
		date: "2024 (8 months)",
		points: [
			"Taught C++ Programming and Logic Design for engineering students.",
			"Led lab sessions, created assignments, and provided technical mentorship.",
			"Assisted faculty with academic research and course material development."
		],
	},
	{
		title: "Full Stack Developer & Mobile App Developer",
		company_name: "Freelance",
		icon: "/upwork.png",
		iconBg: "#383E56",
		date: "2022 - Present",
		points: [
			"Built full-stack web and cross-platform mobile apps using React Native, Next.js, Supabase, and Tailwind CSS.",
			"Integrated AI models and OpenAI APIs into client applications for enhanced functionality.",
			"Handled backend architecture, authentication, deployment, and maintenance for production systems."
		],
	}
];







const testimonials = [
	{
		id: 1,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Ahmed Mohammed",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/ahmedsmohammed998",
	},
	{
		id: 2,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "kahrvba",
		image: "/tech/github.webp",
		link: "https://github.com/kahrvba",
	},
];


const projects: {
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	deploy_link: string;
	platform: "Vercel" | "Figma" | "Web";
}[] = [
	{
		name: "Alemdar Teknik Website",
		description:
			"Led the full redevelopment of Alemdar Teknik’s corporate website with a clean, fast, SEO-optimized Next.js frontend.",
		tags: [
			{ name: "next.js", color: "blue-text-gradient" },
			{ name: "tailwind", color: "green-text-gradient" },
			{ name: "seo", color: "orange-text-gradient" },
		],
		image: "/alemdarteknik.png",
		deploy_link: "https://alemdarteknik.com/",
		platform: "Vercel",
	},
	{
		name: "Isnad Foundation",
		description:
		"Multilingual Next.js site that matches Palestinian students with full scholarships (Pulse of Life, Palestinian Talented, Ibn Khaldun, etc.) and gives donors a transparent, one‑click PayTR gateway to fund the programs. The tab‑driven UI showcases each scholarship track, real‑time metrics, and success stories while remaining blazing‑fast and fully responsive.",
		tags: [
			{ name: "next.js", color: "blue-text-gradient" },
			{ name: "tailwind", color: "green-text-gradient" },
			{ name: "supabase", color: "orange-text-gradient" },
		],
		image: "/isnadf.png",
		deploy_link: "https://isnadf.org/",
		platform: "Vercel",
	},
	{
		name: "Naqlyat Tech (In Development)",
		description:
		  "A mobile app unifying logistics and transport companies across Oman into one digital platform. Enables clients to request transport services, track shipments, and connect with verified logistics providers. Designed for scale, with modern UI/UX in progress on Figma and development underway using React Native.",
		tags: [
		  { name: "react-native", color: "blue-text-gradient" },
		  { name: "logistics", color: "green-text-gradient" },
		  { name: "figma", color: "orange-text-gradient" }
		],
		image: "/project3.png", // Replace with your Figma preview if needed
		deploy_link: "", // Replace with actual link
		platform: "Figma"
	  },
	  {
		name: "SAMARA (In Development)",
		description:
		  "A mobile-first marketplace platform aggregating online shops across Qatar into one unified app. Designed to simplify discovery, orders, and payments for end users while offering small and medium e-commerce stores a centralized presence. UI/UX is under active design in Figma, with planned implementation in React Native.",
		tags: [
		  { name: "react-native", color: "blue-text-gradient" },
		  { name: "marketplace", color: "green-text-gradient" },
		  { name: "figma", color: "orange-text-gradient" }
		],
		image: "/project4.png", // Replace with actual preview/screenshot
		deploy_link: "", // Replace with real Figma URL
		platform: "Figma"
	  },
	  {
		name: "Subbiy",
		description:
		  "Subbiy is an all-in-one platform for managing teams, billing, client engagement, and retention — replacing multiple SaaS tools in one unified system. The marketing website is built with Next.js and Tailwind CSS, fully deployed and live.",
		tags: [
		  { name: "next.js", color: "blue-text-gradient" },
		  { name: "tailwind", color: "green-text-gradient" },
		  { name: "vercel", color: "orange-text-gradient" }
		],
		image: "/project5.png",
		deploy_link: "https://subbiy.vercel.app", // replace with actual live URL
		platform: "Vercel"
	  }
	  

];


export { services, technologies, experiences, testimonials, projects };
