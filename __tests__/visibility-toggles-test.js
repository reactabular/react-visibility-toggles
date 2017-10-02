/* eslint-disable react/prop-types */
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import VisibilityToggles from '../src';

describe('VisibilityToggles', function () {
  it('renders', function () {
    const columns = [
      {
        property: 'first',
        header: {
          label: 'First'
        }
      }
    ];

    const toggles = TestUtils.renderIntoDocument(
      <Wrapper>
        <VisibilityToggles
          columns={columns}
          onToggleColumn={() => {}}
        />
      </Wrapper>
    );

    const toggle = TestUtils.findRenderedDOMComponentWithClass(
      toggles, 'visibility-toggle'
    );

    expect(toggle).toBeDefined();
  });

  it('triggers change', function () {
    const change = jest.fn();
    const columns = [
      {
        property: 'first',
        header: {
          label: 'First'
        }
      }
    ];

    const toggles = TestUtils.renderIntoDocument(
      <Wrapper>
        <VisibilityToggles
          columns={columns}
          onToggleColumn={change}
        />
      </Wrapper>
    );

    const toggle = TestUtils.findRenderedDOMComponentWithClass(
      toggles, 'visibility-toggle'
    );

    TestUtils.Simulate.change(toggle);

    expect(change).toHaveBeenCalled();
  });
});

class Wrapper extends React.Component { // eslint-disable-line max-len, react/prefer-stateless-function
  render() {
    return React.createElement('div', {}, this.props.children);
  }
}
