import MergedShape from "./MergedShape";
import SideShape from "./SideShape";
import { AnimatedGradient } from "@/components/ui/stripe-animated-gradient";

const ShapeHero = () => {
	return (
		<section className="relative w-full h-screen mx-auto overflow-hidden bg-primary">
			<div className="shape-brand"><span className="shape-brand-mark" />ahmed</div>
			<nav className="shape-nav" aria-label="Primary navigation">
				<a href="#projects">Projects</a><a href="#about">About</a><a href="#contact">Contact</a>
				<button type="button" aria-label="Toggle theme">◉</button>
			</nav>
			<div className="absolute inset-y-0 left-0 right-[26%] pt-4">
				<div className="relative w-full h-full">
					<MergedShape />
					<AnimatedGradient
						color1="#a960ee"
						color2="#ff333d"
						color3="#90e0ff"
						color4="#ffcb57"
						style={{ clipPath: "url(#merged-shape-clip)" }}
					/>
				</div>
			</div>
			<div className="absolute right-[3%] top-[45%] h-[55%]">
				<SideShape />
			</div>
			<div className="shape-intro">
				<h1>Equal parts creative<br />developer &amp; designer</h1>
				<a href="#projects" className="shape-arrow" aria-label="View projects">↓</a>
			</div>
			<div className="shape-stats"><strong>10+</strong><span>Major projects<br />delivered successfully</span><i>● ● ● ● ●</i></div>
		</section>
	);
};

export default ShapeHero;
