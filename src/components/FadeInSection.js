import React from "react";

export default function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    let observerRefValue = null; // <-- variable to hold ref value
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    if (domRef.current) {
      observer.observe(domRef.current);
      observerRefValue = domRef.current; // <-- save ref value
    }
  
    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue); // <-- use saved value
    };
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${props.delay}` }}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}