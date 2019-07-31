import React from 'react';
import Input from '../presentational/Input.jsx';

/**
 * Adds two numbers together.
 */
class FormContainer extends React.Component {
  /**
   * Constructor
   */
  constructor() {
    super();
    this.state = {
      seo_title: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Event handler function
   * @param {*} event
   */
  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  /**
   * Renders DOM
   * @return {ReactDOM} a virtual DOM
   */
  render() {
    const {seoTitle} = this.state;
    return (
      <form id="article-form">
        <Input
          text="SEO title"
          label="seo_title"
          type="text"
          id="seo_title"
          value={seoTitle}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}
export default FormContainer;

