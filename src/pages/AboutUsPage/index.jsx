import { BASE_URL } from "../../config";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { AgentCard } from "../../components";
import { useParams } from "react-router-dom";

const AboutUsPage = () => {
  const [agents, setAgents] = useState([]);
  const { language } = useParams();

  const getAgents = async () => {
    const response = await axios.get(`${BASE_URL}/agents`);
    setAgents(response.data);
  };

  useEffect(() => {
    getAgents();
  }, []);

  const filteredAgents = useMemo(() => {
    return agents.filter((agent) =>
      agent.languages.some((agentLanguage) => agentLanguage === language)
    );
  }, [agents, language]);

  return (
    <div className="container page-container">
      <h1>About Us</h1>

      {filteredAgents &&
        filteredAgents.map((agent) => (
          <AgentCard
            key={agent.id}
            name={agent.firstName + " " + agent.lastName}
            image={agent.imageUrl}
          />
        ))}
    </div>
  );
};
export { AboutUsPage };
