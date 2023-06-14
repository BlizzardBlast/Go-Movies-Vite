import Ticket from "./../images/movie-ticket.png";

const Home = () => {
  return (
    <>
      <div className="text-center">
        <h2>Find a movie to watch tonight!</h2>
        <hr />
        <img
          src={Ticket}
          alt="Movie Ticket"
          style={{ width: "15svw", minWidth: "200px", height: "auto" }}
        ></img>
      </div>
    </>
  );
};

export default Home;
