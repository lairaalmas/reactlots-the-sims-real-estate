import mapSrc from "../../../assets/map_os.png";

const Contact: React.FC = () => {
  return (
    <>
      <h2 className="text-center my-5">Interested in buying a lot?</h2>

      <section>
        <h3 className="text-center">Call us</h3>
        <p className="text-center">
          <i className="bi bi-telephone-fill text-info" aria-hidden="true" />
          &nbsp;0118 999 881 999 119 7253
        </p>
      </section>

      <section>
        <h3 className="text-center mt-5">Send us an email</h3>
        <p className="text-center">
          <i className="bi bi-envelope-at-fill text-info" aria-hidden="true" />
          &nbsp;reactlots@simail.sim
        </p>
      </section>

      <section>
        <h3 className="text-center mt-5">Or come visit us</h3>
        <p className="text-center">
          <i className="bi bi-geo-alt-fill text-info" aria-hidden="true" />
          &nbsp; 123, The Solar Flare, Oasis Spring
        </p>
        <img
          className="w-100"
          src={mapSrc}
          alt="Our location on the map"
          loading="lazy"
        />
      </section>
    </>
  );
};

export default Contact;
