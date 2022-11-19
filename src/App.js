import React, { Component } from "react";
import "./App.css";
import LoanDuration from "./components/loanDuration";
import LoanAmount from "./components/loanAmount";
import IntrestRate from "./components/intrestRate";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lAmount: 500,
      lDuration: 6,
      interestRate: 6,
      monthlyPayment: 90,
      totalInterestPercent: 0,
      totalPrinciplePercent: 0,
      totalInterest: 0,
      totalPayment: 0
    };

    this.getInterest(this.state.lAmount, this.state.lDuration);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
  }

  handleAmountChange(amount) {
    this.setState({ lAmount: amount }, () => {
      this.getInterest(this.state.lAmount, this.state.lDuration);
    });
  }

  handleDurationChange(duration) {
    this.setState({ lDuration: duration }, () => {
      this.getInterest(this.state.lAmount, this.state.lDuration);
    });
  }

  getInterest = async (lAmount, lDuration) => {
    const api_call = await fetch(
      `https://ftl-frontend-test.herokuapp.com/interest?amount=${lAmount}&numMonths=${lDuration}`
    );
    const data = await api_call.json();
    this.setState({
      interestRate: data.interestRate,
      monthlyPayment: data.monthlyPayment.amount
    });

    let totalPayment = this.state.monthlyPayment * this.state.lDuration;
    let totalInterest = totalPayment - this.state.lAmount;
    let totalInterestP = (totalInterest / totalPayment) * 100;
    let principleP = (this.state.lAmount / totalPayment) * 100;

    this.setState({
      totalInterestPercent: totalInterestP,
      totalPrinciplePercent: principleP,
      totalInterest: totalInterest,
      totalPayment: totalPayment
    });
  };

  render() {
    return (
      <div className="jumbotron p-1">
        <div className="container1 row">
          <h1 className="col-sx-8">EMI Calculator</h1>
        </div>
        <div className="container mx-auto shadow p-3 mb-4 bg-white m-5 pb-5 App">
          <LoanAmount onAmountChange={this.handleAmountChange} />
          <LoanDuration onDurationChange={this.handleDurationChange} />
          <IntrestRate
            totalPayment={this.state.totalPayment}
            loanAmount={this.state.lAmount}
            totalInterest={this.state.totalInterest}
            interestRate={this.state.interestRate}
            monthlyPayment={this.state.monthlyPayment}
            totalInterestPercent={this.state.totalInterestPercent}
            totalPrinciplePercent={this.state.totalPrinciplePercent}
          />
        </div>
      </div>
    );
  }
}

export default App;
