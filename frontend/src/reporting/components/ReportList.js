import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { compose } from "redux";

import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import red from "@material-ui/core/colors/red";
import orange from "@material-ui/core/colors/orange";
import yellow from "@material-ui/core/colors/yellow";
import TextField from "@material-ui/core/TextField/TextField";
import FormLabel from "@material-ui/core/FormLabel/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/Radio/Radio";
import moment from "moment";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    marginBottom: 20,
  },
  textField: {
    width: "100%",
  },
  formControl: {
    width: "100%",
  },
  datetime: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  radioItem: {
    margin: 20,
  },
  checked: {},
  hide: {
    display: "none",
  },
  langCats: {
    display: "flex",
    "& div": {
      padding: "0 3px",
    },
  },
});

class ReportList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      template_type: "daily_summary",
      reportDate: moment().format("YYYY-MM-DD"),
      centre: "ec-hq",
      start_date: moment()
        .subtract(1, "d")
        .format("YYYY-MM-DDT16:00"),
      end_date: moment().format("YYYY-MM-DDT15:59"),
      detailed_report: "false",
      complain: true,
      inquiry: true,
      reportId: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  reports = [
    { name: "Daily Summary Report", template: "daily_summary" },
    { name: "Categorywise Daily Summary Report", template: "daily_category" },
    {
      name: "District-Centre-wise Daily Summary Report",
      template: "daily_district_centres",
    },
    {
      name: "Daily Detailed Summary Report",
      template: "dialy_incident_detail_list",
    },
  ];

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.template_type !== "" &&
      (this.state.complain || this.state.inquiry)
    ) {
      this.props.history.push(
        `/app/reports/view?template_type=` +
          this.state.template_type +
          "&report_date=" +
          this.state.reportDate +
          "&centre=" +
          this.state.centre
        // this.props.history.push(`/app/reports/view?template_type=` + this.state.template_type +
        // "&start_date=" + this.state.start_date +
        // "&end_date=" + this.state.end_date +
        // "&detailed_report=" + this.state.detailed_report +
        // "&complain=" + this.state.complain +
        // "&inquiry=" + this.state.inquiry
      );
    }
  };

  handleChange(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    const { classes, divisions } = this.props;
    return (
      <Paper className={classes.root} style={{ padding: 20 }}>
        <Grid container spacing={24}>
          <Grid item md={12}>
            <form
              className={classes.container}
              noValidate
              autoComplete="off"
              onSubmit={this.handleSubmit}
            >
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  {/* <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="category">Report Type*</InputLabel>
                                        <Select
                                            value={this.state.template_type}
                                            onChange={(e) => this.handleChange("template_type", e.target.value)}
                                        >
                                            <MenuItem value="daily_summary">Summary Report</MenuItem>
                                            <MenuItem value="daily_category">Category Report</MenuItem>
                                            <MenuItem value="daily_district_centres">District Centers Report</MenuItem>
                                            <MenuItem value="dialy_incident_detail_list">Detailed Report</MenuItem>
                                        </Select>
                                    </FormControl> */}
                  <Typography> Select a report </Typography>
                  <List>
                    {this.reports.map((report, index) => (
                      <ListItem
                        button
                        onClick={(e) => {
                          this.handleChange("reportId", index);
                          this.handleChange("template_type", report.template);
                        }}
                        selected={this.state.reportId === index ? true : false}
                      >
                        <ListItemText primary={report.name} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                {/* <Grid item xs={12}>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormLabel component="legend">Incident Types</FormLabel>
                                        <Grid container spacing={24}>
                                            <Grid item xs={6}>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            id="complain"
                                                            name="complain"
                                                            checked={this.state.complain}
                                                            onChange={(e) => this.handleChange("complain", e.target.checked)}
                                                            color="primary"
                                                        />
                                                    }
                                                    label="Complaints"
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            id="inquiry"
                                                            name="inquiry"
                                                            checked={this.state.inquiry}
                                                            onChange={(e) => this.handleChange("inquiry", e.target.checked)}
                                                            color="primary"
                                                        />
                                                    }
                                                    label="Inquiries"
                                                />
                                            </Grid>
                                        </Grid>
                                    </FormControl>
                                </Grid> */}
                {/* <Grid item xs={12}>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormLabel component="legend">Report Format</FormLabel>
                                        <RadioGroup
                                            name="report_format"
                                            id="report_format"
                                            value={this.state.detailed_report}
                                            onChange={(e) => this.handleChange("detailed_report", e.target.value)}
                                            row
                                        >
                                            <FormControlLabel
                                                value="false"
                                                control={
                                                    <Radio/>
                                                }
                                                label="General"
                                                labelPlacement="bottom"
                                                className={classes.radioItem}

                                            />
                                            <FormControlLabel
                                                disabled={this.state.report_type === 'incident_date_wise_summary_report'}
                                                value="true"
                                                control={
                                                    <Radio/>
                                                }
                                                label="District wise"
                                                labelPlacement="bottom"
                                                className={classes.radioItem}

                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid> */}
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    id="reportDate"
                    label="Report date"
                    type="date"
                    error={this.state.reportDate === ""}
                    helperText={
                      this.state.reportDate === "" ? "Invalid Date!" : " "
                    }
                    value={this.state.reportDate}
                    InputLabelProps={{ shrink: true }}
                    onChange={(e) =>
                      this.handleChange("reportDate", e.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <TextField
                    id="centre"
                    select
                    label="Centre"
                    className={classes.textField}
                    value={this.state.centre}
                    onChange={(e) => this.handleChange("centre", e.target.value)}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu,
                      },
                    }}
                    margin="normal"
                  >
                    {divisions.allIds.map((option, key) => (
                      (divisions.idsByOrganization['eclk'].includes(option)) && (
                        <MenuItem key={key} value={option}>
                          {divisions.byIds[option].name}
                        </MenuItem>)
                    ))}
                  </TextField>
                </Grid>
                {/* <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    id="start_date"
                    label="Start Date"
                    type="datetime-local"
                    error={this.state.start_date === ""}
                    helperText={
                      this.state.start_date === "" ? "Invalid Date!" : " "
                    }
                    value={this.state.start_date}
                    InputLabelProps={{ shrink: true }}
                    onChange={(e) =>
                      this.handleChange("start_date", e.target.value)
                    }
                  />
                </Grid> */}
                {/* <Grid item xs={12}>
                                    <TextField
                                        margin="normal"
                                        id="end_date"
                                        label="End Date"
                                        type="datetime-local"
                                        error={this.state.start_date === ""}
                                        helperText={this.state.start_date === "" ? 'Invalid Date!' : ' '}
                                        value={this.state.end_date}
                                        InputLabelProps={{shrink: true}}
                                        onChange={(e) => this.handleChange("end_date", e.target.value)}
                                    />
                                </Grid> */}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    Generate Report
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    divisions: state.user.divisions,
    ...ownProps
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withRouter(compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, mapDispatchToProps))
  (ReportList));
