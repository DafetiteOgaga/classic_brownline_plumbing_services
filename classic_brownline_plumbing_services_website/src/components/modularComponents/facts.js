import { useEffect, useState } from "react";

const factsSlides = [
    {
        id: 1,
        icon: "fa-check",
        end: 1233,
        title: "Years Experience",
    },
    {
        id: 2,
        icon: "fa-users-cog",
        end: 1237,
        title: "Expert Technicians",
    },
    {
        id: 3,
        icon: "fa-users",
        end: 1231,
        title: "Satisfied Clients",
    },
    {
        id: 4,
        icon: "fa-wrench",
        end: 1236,
        title: "Completed Projects",
    }
]

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

const CountUp = ({ end, duration = 2000, className = "" }) => {
    const [value, setValue] = useState(0);
  
    useEffect(() => {
        let startTime;
        let animationFrame;
    
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easedProgress = easeOutCubic(progress); // smoother easing
            setValue(easedProgress * end);
    
            if (progress < 1) {
                animationFrame = requestAnimationFrame(step);
            }
        };
    
        requestAnimationFrame(step);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);
  
    return (
        <h2
            className={`count-up text-white mb-2 ${className}`}
            style={{ "--count": value }}>
            {Math.floor(value)}
        </h2>
    );
};

function Facts() {
	return (
		<div className={`container-fluid fact bg-dark my-5 py-5`}>
			<div className="container">
				<div className="row g-4">
					{factsSlides.map((fact, fIdx) => {
						return (
							<div key={fact.title+fIdx} className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
								<i className={`fa ${fact.icon} fa-2x text-white mb-3`}></i>
								{/* <h2 className="text-white mb-2" data-toggle="counter-up">{useCounterUp(1235)}</h2> */}
								<CountUp end={fact.end} className="text-white mb-2" />
								<p className="text-white mb-0">{fact.title}</p>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
export { Facts }