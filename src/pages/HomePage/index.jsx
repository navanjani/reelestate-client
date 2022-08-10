import { locale, languageOptions } from "../../config";
import { useState } from "react";
import { ButtonComponent, SelectComponent } from "../../components";
import "./home.scss";
import { Link } from "react-router-dom";

const HomePage = ({ language, setLanguage }) => {
  const trans = locale(language).Homepage;

  return (
    <div className="container page-container">
      <h1>{trans.title}</h1>

      <div className="row">
        <img
          src="https://invoice.ng/blog/wp-content/uploads/2019/03/start-real-estate-business-in-Nigeria.jpg"
          alt="Reel"
        />
      </div>
      <div className="row btn-container">
        <div className="col">
          <Link to="/listing">
            <ButtonComponent title={trans.listBtn} />{" "}
          </Link>
        </div>
        <div className="col">
          <Link to={`/about/${language}`}>
            <ButtonComponent title={trans.aboutBtn} />
          </Link>
        </div>
      </div>
      <div className="row btn-container">
        <SelectComponent
          value={language}
          handleOnChange={(event) => setLanguage(event.target.value)}
          options={languageOptions}
          allowNull={false}
          label="Language"
        />
      </div>
    </div>
  );
};
export { HomePage };
