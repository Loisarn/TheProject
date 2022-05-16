import React from "react";
import { connect } from "react-redux";
import { Dropwdown } from "semantic-ui-react";

const languageOptions = [
  { key: "English", text: "English", value: "EN" },
  { key: "Swedish", text: "Swedish", value: "SV" },
];

const LanguageToggle = (props) => {
  const handleChange = (event, data) => {
    props.setLanguage(data.value);
  };

  return (
    <button
      className="icon"
      options={languageOptions}
      search
      text="Select Language"
      onChange={handleChange}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  setLanguage: (language) => dispatch({ type: "SET_LANGUAGE", language }),
});

const mapStateToProps = (state) => {
  return { language: state.language };
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageToggle);
