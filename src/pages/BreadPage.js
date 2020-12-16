import React from "react";

const AboutPage = () => {
	return (
		<section>
			<h1 className="mb-8 text-3xl">"bread"</h1>
			<div className="flex flex-col lg:flex-row">
			<div className="w-full md:w-2/5 pr-24">
                <h2 className="font-bold mb-2">wet ingredients</h2> 
				<ol className="list-disc mb-4 ml-8">	
					<li>360 ml cool water (1 ½ cup)</li>
				</ol>
				<h2 className="font-bold mb-2">dry ingredients</h2> 
				<ol className="list-disc mb-4 ml-8">	
					<li>300g all-purpose flour</li>
					<li>120g whole wheat flour</li>
					<li>2 tsp coarse sea salt</li>
					<li>2 tsp instant yeast</li>
					<li>1 tsp rosemary</li>
					<li>1 tsp thyme</li>
					<li>1 tsp dried minced garlic</li>
					<li>½ tsp dried minced onion</li>
					<li>½ tsp oregano</li>
					<li>½ tsp chili flakes</li>
				</ol>
			</div>
			<div lassName="w-full pr-8">
				<h2 className="font-bold mb-2">directions</h2> 
					<ol className="list-decimal mb-4 ml-8">	
						<li className="pb-2">
							whisk the dry ingredients together in a bowl
						</li>
						<li className="pb-2">
							pour in the cool water and gently mix with a spatula or wooden spoon. keep mixing until all flour is wet
						</li>
						<li className="pb-2">
							cover the bowl with cellophane and let rise in the fridge for at least 3 hours. the longer it rests the better it is. you can let it sit for up to 3 days
						</li>
						<li className="pb-2">
							lightly dust a baking sheet with flour. cut and shape the dough into either one or two loaves. loosely cover and let rise for 45 minutes on the baking sheet
						</li>
						<li className="pb-2">
							preheat the oven to 475F, and place another empty baking pan in it to heat up
						</li>
						<li className="pb-2">
							score the loaves – make sure the score is deep enough, u can also do cool patterns
						</li>
						<li className="pb-2">
							when the oven is ready, place your loaves on the top rack, and pull out the hot baking pan enough to pour some hot water. as steam builds quickly close the oven door to trap it inside. this will help crisp up the crust
						</li>
						<li className="pb-2">
							bake for 20-25 minutes, bread should sound hollow when done
						</li>
						<li className="pb-2">
							let cool before cutting 
						</li>
					</ol>
			</div>
			</div>
		</section>
	);
};

export default AboutPage;
