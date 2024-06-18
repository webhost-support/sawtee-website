import React, { useEffect } from 'react';
import { useScroll, useSpring, useTransform, motion } from 'framer-motion';

function SmoothScrollContainer({ children }) {
	const { scrollYProgress } = useScroll();
	const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 });
	const contentRef = React.useRef(null);
	const [contentHeight, setContentHeight] = React.useState(0);

	useEffect(() => {
		const handleResize = () => {
			if (contentRef.current) {
				setContentHeight(contentRef.current.scrollHeight);
			}
		};
		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [contentRef, children]);

	const y = useTransform(smoothProgress, value => {
		return value * -(contentHeight - window.innerHeight);
	});

	return (
		<div style={{ height: contentHeight }}>
			<motion.div ref={contentRef} className="scrollBody" style={{ y }}>
				{children}
			</motion.div>
		</div>
	);
}

export default SmoothScrollContainer;
