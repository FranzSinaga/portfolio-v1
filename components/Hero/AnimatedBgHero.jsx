const AnimatedBgHero = ({ children }) => {
  return (
    <section className=" relative overflow-hidden hero-height flex items-center">
      <div className="features_gradient-wrapper">
        <div className="features_gradient features_gradient-1 bg-red-400"></div>
        <div className="features_gradient features_gradient-2 bg-green-400"></div>
        <div className="features_gradient features_gradient-3 bg-rose-600"></div>
      </div>
      <div className="container mx-auto z-10">{children}</div>
    </section>
  );
};

export default AnimatedBgHero;
