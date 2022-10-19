import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    UHN: {
      jobTitle: "Research Impact Analyst @",
      duration: "OCT 2021 - PRESENT",
      desc: [
        "Coordinated with clients on gathering, organizing, visualizing, and presenting research publication related data gathered from InCites Web of Science.",
        "Created companywide PowerBI dashboard that related cross departmental data sources, reducing time spent to generate figures and tables in excel by 90%.",
        "Developed PowerBI dashboard to monitor company wide KPI metrics in real time from individual data sheets."
      ]
    },
    KITE: {
      jobTitle: "Software Engineering Intern @",
      duration: "MAY 2020 - AUG 2020",
      desc: [
        "Designed and developed a user-friendly mobile application that allows for the recording, visualization and sharing of audio signals.",
        "Created and organized user login and signup using MySQL hosted using AWS RDS.",
        "Developed using Android Studio and implemented source control with GitHub."
      ]
    },
    "Johnson & Johnson": {
      jobTitle: "Technical Writer @",
      duration: "MAY 2019 - SEP 2019",
      desc: [
        "Utilized root cause analysis methods to investigate suspected product defects and carry out appropriate corrective actions saving $10,000-$100,000 of pharmaceutical product.",
        "Held and facilitated documentation/standards reviews with cross-functional team members.",
        "Identified key quality issues regarding the production of pharmaceutical products and assigned them to corresponding departments.",
        "Ensured all documentation (SOPs) and validation deliverables/reports met functional and design specifications and requirements."
      ]
    },
    // Centivizer: {
    //   jobTitle: "Research Developer @",
    //   duration: "SEPT 2019 - APR 2020",
    //   desc: [
    //     "Researched and developed interactive and neural-activation technologies to stimulate physical and cognitive functions in order to slow the progression of neurodegenerative disorders.",
    //     "Leveraged WebRTC to develop and maintain a Node.js online video-streaming platform in real-time competitive-mode games to research the effects of active stimulation for those suffering from dementia."
    //   ]
    // },
    // TDSB: {
    //   jobTitle: "Software Engineer @",
    //   duration: "SEPT 2019 - DEC 2020",
    //   desc: [
    //     "Co-developed homework management software integrable with Google Classroom by utilizing the Python’s Flask micro-framework for the back-end API and Vue.js for the front-end UI, in order to translate business requirements into a functional full-stack application."
    //   ]
    // },
    // "Orange Gate": {
    //   jobTitle: "Software Engineering Intern @",
    //   duration: "MAY 2019 - AUG 2019",
    //   desc: [
    //     "Developed a Node.js smart home system through Facebook’s Messenger integrated with Bocco sen- sors and other smart devices (Nest camera, TPLink smart plugs) to derive conclusions about the current state of the home",
    //     "Identified continuous improvements in data quality, design reports and coding activities, presenting results and findings to internal business stakeholders.",
    //     "Relevant technologies/tools used: DialogFlow, Vision, AutoML, Messenger Bot API, MongoDB."
    //   ]
    // }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
