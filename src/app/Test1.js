import React from "react";
import { Form, Text,Date,Radio } from 'react-form';

export class Test1 extends React.Component {
    constructor( props ) {
      super( props );
      this.state = {};
    }
    render() {
      var submittedValues="";
      return (
        <div>
          <Form
            onSubmit={submittedValues => this.setState( { submittedValues } )}>
            { formApi => (
              <div>

                <form onSubmit={formApi.submitForm} id="dynamic-form">
                  <label htmlFor="dynamic-first">Salary</label>
                  <Text field="firstName" id="dynamic-first" />
                


                  { formApi.values.siblings && formApi.values.siblings.map( ( sibling, i ) => (
                    <div key={`sibling${i}`}>
                      <label htmlFor={`sibling-name-${i}`}>Basic Pay</label>
                      <Text field={['siblings', i]} id={`sibling-name-${i}`} />
                      <button
                        onClick={() => formApi.removeValue('siblings', i)}
                        type="button"
                        className="mb-2 ml-2 btn btn-danger">Remove</button>
                    </div>
                  ))}
                  <button
                    onClick={() => formApi.addValue('siblings', '')}
                    type="button"
                    className="mb-2 mr-4 ml-4 btn btn-success">Add Basic Pay</button>
                  <button type="submit" className="mb-2 ml-2 btn btn-primary">Submit</button>
                </form>
              </div>
            )}
          </Form>
          <p>{submittedValues}</p>
        </div>
      );
    }
  }
