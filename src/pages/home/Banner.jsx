import image from "../../assets/Image/aaron-burden-yFnX8DaC3UM-unsplash.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <p className="mb-5 font-semibold">
            Together, technology and electronics have revolutionized the way we
            live, work, and interact, enabling communication across the globe,
            improving healthcare, enhancing productivity, and advancing
            scientific research. The rapid pace of innovation in these fields
            continues to shape our future and drive progress in numerous
            industries.
          </p>
          <button className="btn btn-outline btn-sm">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
