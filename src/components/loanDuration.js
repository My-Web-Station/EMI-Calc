import React from "react";
import "rc-slider/assets/index.css";
import Slider, { Range } from "rc-slider";

const marks = { "6": "6 Months", "24": <label>24 Months</label> };

class LoanDuration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      durationValue: 6,
      min: 6,
      max: 24
    };

    this.onSliderChange = this.onSliderChange.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.onSliderAfterChange = this.onSliderAfterChange.bind(this);
    this.getLoanDuration = this.getLoanDuration.bind(this);
  }
  getLoanDuration(e) {
    let num = parseInt(e.target.value, 10);
    if (num < 6 || num > 24) {
      alert("Enter loan duration witin range of 6 to 24 months");
    } else {
      this.setState({ durationValue: e.target.value });
      this.onSliderAfterChange(this.state.durationValue);
    }
  }

  onSliderChange(value) {
    this.setState({ durationValue: value });
  }

  onValueChange(e) {
    this.setState({ durationValue: e.target.value });
  }

  onSliderAfterChange(value) {
    this.props.onDurationChange(this.state.durationValue);
  }

  render() {
    return (
      <div className="p-4">
        <div className="row mx-auto">
          <label className="col-md-4 col-form-label font-weight-bold ">
            Loan Duration:
          </label>
          <input
            value={this.state.durationValue}
            onChange={this.onValueChange}
            className="col-md-5 form-control shadow mb-5 bg-white rounded"
            onBlur={this.getLoanDuration}
          />
        </div>
        <div className="mx-auto p-4 col-md-8">
          <Slider
            defaultValue={6}
            min={this.state.min}
            max={this.state.max}
            marks={marks}
            onChange={this.onSliderChange}
            onAfterChange={this.onSliderAfterChange}
            value={this.state.durationValue}
          />
        </div>
      </div>
    );
  }
}
export default LoanDuration;
