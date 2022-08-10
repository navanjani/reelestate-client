import "./agentcard.scss";

const AgentCard = ({ name, image, motto, email }) => {
  return (
    <div className="card card-container">
      <h2>{name}</h2>
      <div className="img-agent">
        <img src={image} alt={name} />
      </div>
      <p>{motto}</p>
      <p>Email : {email}</p>
    </div>
  );
};
export { AgentCard };
