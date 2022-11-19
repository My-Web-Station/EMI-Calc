import React from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider/lib/Slider";

const marks = { "500": "$500", "5000": "$5000" };

class LoanAmount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loanValue: 500,
      min: 500,
      max: 5000
    };

    this.onSliderChange = this.onSliderChange.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.onSliderAfterChange = this.onSliderAfterChange.bind(this);
    this.getlAmount = this.getlAmount.bind(this);
  }

  getlAmount(e) {
    let num = parseInt(e.target.value, 10);
    if (num < 500 || num > 5000) {
      alert("Enter loan amount witin range of $500 to $5000");
    } else {
      this.setState({ loanValue: e.target.value });
      this.onSliderAfterChange(this.state.loanValue);
    }
  }

  onSliderAfterChange(value) {
    this.props.onAmountChange(this.state.loanValue);
  }

  onValueChange(e) {
    e.preventDefault();
    this.setState({ loanValue: e.target.value });
  }

  onSliderChange(value) {
    this.setState({ loanValue: value });
  }

  render() {
    return (
      <div className="p-4">
        <div className="row mx-auto">
          <label className="col-md-4 col-form-label font-weight-bold">
            Loan Amount:
          </label>
          <input
            onBlur={this.getlAmount}
            value={this.state.loanValue}
            onChange={this.onValueChange}
            className="col-md-5 form-control shadow mb-5 bg-white rounded"
          />
        </div>
        <div className="mx-auto p-4 col-md-8 ">
          <Slider
            defaultValue={500}
            min={this.state.min}
            max={this.state.max}
            marks={marks}
            onChange={this.onSliderChange}
            onAfterChange={this.onSliderAfterChange}
            value={this.state.loanValue}
          />
        </div>
      </div>
    );
  }
}
export default LoanAmount;
