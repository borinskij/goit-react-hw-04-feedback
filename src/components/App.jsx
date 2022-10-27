import { Component } from 'react';
import { Section } from './SectionTitle/SectionTitle.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from './Statistics/Statistics.jsx';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  hendelClick = event => {
    const { name } = event.target;
    return this.setState({ [name]: this.state[name] + 1 });
  };
  render() {
    return (
      <div style={{ margin: 50 }}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            hendelClick={this.hendelClick}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics">
          <Statistics state={this.state} />
        </Section>
      </div>
    );
  }
}
