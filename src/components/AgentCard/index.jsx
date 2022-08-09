import "./agentcard.scss";
const AgentCard = ({ name, image }) => {
  return (
    <div className="card agent-card">
      <h2>{name}</h2>
      <div className="img-agent">
        <img src={image} alt={name} />
      </div>
    </div>
  );
};
export { AgentCard };
