import React from "react";
import ReactMinimalPieChart from "react-minimal-pie-chart";

class IntrestRate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monthlyPayment: 0,
      interestRate: 0
    };
  }

  render() {
    return (
      <div>
        <div className="row mx-auto">
          <p className=" col-md-3 mx-auto bg-light font-weight-bold">
            Interest Rate: {this.props.interestRate}
          </p>
          <p className=" col-md-4 mx-auto bg-light font-weight-bold">
            EMI: {this.props.monthlyPayment}
          </p>

          <p className=" col-md-4 mx-auto bg-light font-weight-bold">
            Total Payment: {this.props.totalPayment}
          </p>
        </div>
        <ReactMinimalPieChart
          data={[
            {
              title: "Total Interest: " + this.props.totalInterest,
              value: this.props.totalInterestPercent,
              color: "#8df48d"
            },
            {
              title: "Principle Amount: " + this.props.loanAmount,
              value: this.props.totalPrinciplePercent,
              color: "#abe2fb"
            }
          ]}
          startAngle={180}
          lengthAngle={180}
          style={{ height: "300px" }}
        />
      </div>
    );
  }
}
export default IntrestRate;
