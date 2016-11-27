/* eslint-disable react/prop-types */
// XXX: The prop type checking bugs out for some reason partially.
import React from 'react';

const VisibilityToggles = ({
  columns,
  onToggleColumn,
  isVisible,
  props = {
    container: {},
    label: {},
    value: {},
    toggle: {}
  }
}) => (
  <div
    className="visibility-container"
    {...props.container}
  >
    {columns.filter(column => column.header && column.header.label).map(
      (column, columnIndex) => {
        const key = `visibility-toggle-${columnIndex}`;

        return (
          <label
            className="visibility-label"
            htmlFor={key}
            {...props.label}
            key={key}
          >
            <span
              className="visibility-value"
              {...props.value}
            >
              {column.header.label}
            </span>
            <input
              className="visibility-toggle"
              type="checkbox"
              id={key}
              checked={isVisible({ column })}
              onChange={() => onToggleColumn({ column, columnIndex })}
              {...props.toggle}
            />
          </label>
        );
      }
    )}
  </div>
);
VisibilityToggles.propTypes = {
  columns: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onToggleColumn: React.PropTypes.func.isRequired,
  isVisible: React.PropTypes.func,
  props: React.PropTypes.shape({
    container: React.PropTypes.object,
    label: React.PropTypes.object,
    value: React.PropTypes.object,
    toggle: React.PropTypes.object
  })
};
VisibilityToggles.defaultProps = {
  isVisible: ({ column }) => column.visible
};

export default VisibilityToggles;
