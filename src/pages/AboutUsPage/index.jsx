import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { AgentCard, ButtonComponent, SelectComponent } from "../../components";
import { locale, languageOptions, BASE_URL } from "../../config";
import { Link, useParams } from "react-router-dom";

const AboutUsPage = () => {
  const [agents, setAgents] = useState([]);
  const { language } = useParams();
  const { AboutUs } = locale(language);

  const getAgents = async () => {
    const response = await axios.get(`${BASE_URL}/agents`);
    console.log(response.data);
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
            motto={agent.motto}
            email={agent.email}
          />
        ))}
      <div className="row btn-container">
        <div className="col">
          <Link to="/listing">
            <ButtonComponent title={AboutUs.listBtn} />{" "}
          </Link>
        </div>
        <div className="col">
          <Link to="/viewing">
            <ButtonComponent title={AboutUs.viewingBtn} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export { AboutUsPage };
