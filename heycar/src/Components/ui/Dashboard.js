import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import logo from "../../Images/logo.png";
import group from "../../Images/group.png";
import Layer3 from "../../Images/Layer3.png";
import Layer4 from "../../Images/Layer4.png";
import Layer6 from "../../Images/Layer6.png";
import Layer7 from "../../Images/Layer7.png";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserList } from "../redux/action/userAction";
import { fetchProjectList } from "../redux/action/projectAction";
import { fetchGatewayList } from "../redux/action/gatewayAction";
import { postReportList } from "../redux/action/reportAction";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Grid } from "@mui/material";
import DashBoardTable from "./DashboardTable";
import DashboardChart from "./DashboardChart";
import DashboardNoData from "./DasboardNoData";
import "../../App.css";

/**
 *
 * @returns Dashboard component
 */
const Dashboard = () => {
  const postReportData = {
    from: "",
    to: "",
    projectId: "",
    gatewayId: "",
  };
  const [fromValue, setFromValue] = useState(null);
  const [toValue, setToValue] = useState(null);
  const [dataReports, setDataReports] = useState([]);

  let dispatch = useDispatch();
  const users = useSelector((state) => state?.user);
  const projects = useSelector((state) => state?.project);
  const gateways = useSelector((state) => state?.gateway);
  const report = useSelector((state) => state?.report);

  let { usersList } = users;
  let { projectList } = projects;
  let { gatewayList } = gateways;
  let { reportList } = report;
  let { userId } = usersList?.data[0];

  const [localProjectValue, setProjectLocalValue] = useState("");
  const [localGatewayValue, setGatewayLocalValue] = useState("");
  const [localProjectValues, setProjectLocalValues] = useState([]);
  const [localGatewayValues, setGatewayLocalValues] = useState([]);
  const [localReportValues, setReportLocalValues] = useState([]);
  const [localReportAverageValues, setReportAverageValues] = useState([]);

  /**
   * grouping the project and gateway based on the id's
   * @returns grouped data
   */
  const groupList = (isProject) => {
    let groupByCategory = reportList?.data?.reduce((group, product) => {
      if (isProject) {
        const { projectId } = product;
        group[projectId] = group[projectId] ?? [];
        group[projectId].push(product);
      } else {
        const { gatewayId } = product;
        group[gatewayId] = group[gatewayId] ?? [];
        group[gatewayId].push(product);
      }
      return group;
    }, {});

    return groupByCategory;
  };

  /**
   * generate the reports based on Project,gateway id,from and to data
   * @returns setting the reported value
   */
  const generateReport = () => {
    if (fromValue != null) postReportData.from = convertDataFormat(fromValue);
    if (toValue != null) postReportData.to = convertDataFormat(toValue);
    if (projectList?.data?.length > 0) {
      let selectedProjectIndex = projectList?.data?.findIndex(
        (x) => x.name === localProjectValue
      );
      postReportData.projectId =
        projectList?.data[selectedProjectIndex]?.projectId;
    }
    if (gatewayList?.data?.length > 0) {
      let selectedGatewayIndex = gatewayList.data.findIndex(
        (x) => x.name === localGatewayValue
      );
      postReportData.gatewayId =
        gatewayList?.data[selectedGatewayIndex]?.gatewayId;
    }

    dispatch(postReportList(postReportData));

    if (projectList?.data?.length > 0) {
      let tempProjectName = [];

      projectList.data.forEach((project) => {
        tempProjectName.push(project.name);
      });
      setDataReports(tempProjectName);
    }
  };

  /**
   * convert the data to fomart of yyyy-mm-dd
   * @returns formatted date
   */
  const convertDataFormat = (d) => {
    var datestring = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();
    return datestring;
  };

  /**
   * register chart.js chart
   */
  ChartJS.register(ArcElement, Tooltip, Legend);

  /**
   * dispatch user,project,gateway action
   */
  useEffect(() => {
    try {
      dispatch(fetchUserList());
      dispatch(fetchProjectList());
      dispatch(fetchGatewayList());
      getReportList();
    } catch (error) {}
  }, [reportList]);

  /**
   * assign project and report values after fetched from api
   */
  useEffect(() => {
    if (reportList?.data?.length > 0) reportList.data = [];
    if (projectList?.data?.length > 0) {
      let tempArray = [];
      tempArray.push("All projects");
      projectList?.data.forEach((item) => {
        tempArray.push(item.name);
      });

      setProjectLocalValues([...tempArray]);
      setProjectLocalValue(tempArray[0]);
    }
    if (gatewayList?.data?.length > 0) {
      let tempArray = [];
      tempArray.push("All gateways");

      gatewayList?.data.forEach((item) => {
        tempArray.push(item.name);
      });
      setGatewayLocalValues([...tempArray]);
      setGatewayLocalValue(tempArray[0]);
    }
  }, []);

  /**
   * get report list after post the project ,gateway id ,from and to dates
   * @returns report List
   */
  const getReportList = () => {
    if (reportList?.data?.length > 0) {
      let projectGrouped = groupList(true);
      let gatewayGrouped = groupList(false);
      let groupedBoth = { ...projectGrouped, ...gatewayGrouped };
      Object.keys(groupedBoth).forEach((item) => {
        const obj = { oldKey: "value" };
        let indexProjectItem = projectList?.data?.findIndex(
          (x) => x.projectId === item
        );
        let indexGatewayItem = gatewayList?.data?.findIndex(
          (x) => x.gatewayId === item
        );
        if (indexProjectItem !== -1)
          groupedBoth[projectList?.data[indexProjectItem].name] =
            groupedBoth[item];
        if (indexGatewayItem !== -1)
          groupedBoth[gatewayList?.data[indexGatewayItem].name] =
            groupedBoth[item];

        delete groupedBoth[item];

        console.log(obj);
      });

      setReportLocalValues(groupedBoth);
      let tempAverageValue = [];
      if (Object.values(groupedBoth)?.length > 0) {
        Object.values(groupedBoth).forEach((report) => {
          tempAverageValue.push(report.length);
        });
        setReportAverageValues(tempAverageValue);
      }
    }
  };

  /**
   *assign value change project
   */
  const handleProjectChange = (event) => {
    setProjectLocalValue(event.target.value);
  };

  /**
   *assign value change gateway
   */
  const handleGatewayChange = (event) => {
    setGatewayLocalValue(event.target.value);
  };


  return (
    <Box>
      <AppBar
        data-testid="mainappbar"
        position="static"
        sx={{ backgroundColor: "white" }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <img src={logo} alt="logo" style={{ marginRight: "30px" }} />
            <img src={group} alt="logo" style={{ marginBottom: "5px" }} />
          </Box>
          <Box alignItems="center" justifyContent="center" display="flex">
            <Avatar className="Avatar-img" variant="square">
              R
            </Avatar>
            <Typography sx={{ color: "black" }} variant="h5">
              {userId}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          width: "100%",
          position:
            Object.keys(localReportValues).length > 0 ? "relative" : "fixed",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 3,
            mt: 1,
          }}
        >
          <img src={Layer3} alt="menu" className="Img-menu" />
          <img src={Layer4} alt="logo" className="Img-menu" />
          <img src={Layer6} alt="logo" className="Img-menu" />
          <img src={Layer7} alt="logo" className="Img-menu" />
        </Box>

        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                flexDirection: "column",
                m: 1,
                mt: "25px",
                justifyContent: "flex-start",
                display: "flex",
                flexGrow: 1,
              }}
            >
              <Typography sx={{ fontWeight: "bold" }} variant="h6">
                Reports
              </Typography>
              <Typography variant="h7">
                Easily generate a report of your transactions
              </Typography>
            </Box>

            <Box
              sx={{
                flexDirection: "row",
                p: 1,
                mt: "15px",
                display: "flex",
                justifyContent: "flex-end",
                flexGrow: 1,
              }}
            >
              <FormControl size="small" sx={{ m: 1, mr: 2 }}>
                <InputLabel
                  sx={{ color: "white" }}
                  id="demo-simple-select-label"
                ></InputLabel>
                <Select
                  native
                  value={localProjectValue}
                  sx={{ backgroundColor: "#1BC5BD" }}
                  onChange={handleProjectChange}
                >
                  {
                    // --> Notice below changes
                    localProjectValues.length > 0 &&
                      localProjectValues.map((project, index) => {
                        return (
                          <option key={index} value={project}>
                            {" "}
                            {project}
                          </option>
                        );
                      })
                  }
                </Select>
              </FormControl>

              <FormControl size="small" sx={{ m: 1, mr: 2 }}>
                <InputLabel
                  sx={{ color: "white" }}
                  id="demo-simple-select-label"
                ></InputLabel>
                <Select
                  native
                  value={localGatewayValue}
                  sx={{ backgroundColor: "#1BC5BD" }}
                  onChange={handleGatewayChange}
                  label="SelectProject"
                >
                  {
                    // --> Notice below changes
                    localGatewayValues.length > 0 &&
                      localGatewayValues.map((project, index) => {
                        return (
                          <option key={index} value={project}>
                            {" "}
                            {project}
                          </option>
                        );
                      })
                  }
                </Select>
              </FormControl>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="From date"
                  value={fromValue}
                  onChange={(newValue) => {
                    setFromValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      size="small"
                      sx={{
                        width: "20%",
                        marginBottom: "2px",
                        marginRight: "2px",

                        mb: 2,
                        mr: 2,
                        backgroundColor: "#1BC5BD",
                        marginTop: 1,
                        p: 0,
                      }}
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="To date"
                  value={toValue}
                  onChange={(newValue) => {
                    setToValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      size="small"
                      sx={{
                        width: "20%",
                        marginBottom: "2px",
                        marginRight: "2px",

                        mb: 2,
                        mr: 2,
                        backgroundColor: "#1BC5BD",
                        marginTop: 1,
                        p: 0,
                      }}
                      {...params}
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>

              <Button
                variant="contained"
                onClick={generateReport}
                sx={{
                  textTransform: "none",
                  alignItems: "center",
                  mb: 2,
                  mt: 1,
                }}
              >
                {" "}
                Generate Report
              </Button>
            </Box>
          </Box>

          {Object.keys(localReportValues).length > 0 ? (
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row ",
                  flexGrow: 3,
                }}
                s
              >
                <Box
                  sx={{
                    m: 1,
                    borderRadius: "10px",
                    flexGrow: 3,
                  }}
                >
                  <DashBoardTable
                    localProjectValue={localProjectValue}
                    localGatewayValue={localGatewayValue}
                    localReportValues={localReportValues}
                  />
                </Box>

                <Box
                  sx={{
                    m: 1,
                    borderRadius: "10px",
                    flexGrow: 1,
                    height: "70vh",
                    width: "30%",
                  }}
                >
                  <DashboardChart
                    localReportValues={localReportValues}
                    localReportAverageValues={localReportAverageValues}
                  />
                </Box>
              </Box>
              <Typography
                sx={{
                  display: "flex",
                  flexGrow: 1,
                  color: "#005B96",
                  fontSize: "17px",
                }}
                variant="h5"
              >
                Terms&Conditions | Privacy policy{" "}
              </Typography>
            </Box>
          ) : (
            <DashboardNoData />
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
