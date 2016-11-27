[![build status](https://secure.travis-ci.org/reactabular/react-visibility-toggles.svg)](http://travis-ci.org/reactabular/react-visibility-toggles) [![bitHound Score](https://www.bithound.io/github/reactabular/react-visibility-toggles/badges/score.svg)](https://www.bithound.io/github/reactabular/react-visibility-toggles) [![codecov](https://codecov.io/gh/reactabular/react-visibility-toggles/branch/master/graph/badge.svg)](https://codecov.io/gh/reactabular/react-visibility-toggles)

# react-visibility-toggles - Visibility toggles for React

`react-visibility-toggles` provides a React component for rendering visibility toggles for table columns.

## API

```javascript
import VisibilityToggles from 'react-visibility-toggles';

...

<VisibilityToggles
  columns={columns}
  onToggleColumn={this.onToggleColumn}
  isVisible={this.isVisible}
  props={{}}
/>
```

**`columns` - [<column>]**

```javascript
[
  {
    header: {
      label: 'Name'
    },
    visible: true
  },
  {
    header: {
      label: 'Age'
    },
    visible: false
  }
]
```

**`onToggleColumn = ({ column, columnIndex }) => ...`**

**`isVisible = ({ column }) => <boolean>`**

This checks `visible` flag by default but you can override that here.

**`props = { container: {}, label: {}, toggle: {} }`

Props attached to different parts of the component.

## How to Use?

The following example shows how to integrate `react-visibility-toggles` with Reactabular.

**Example:**

```jsx
/*
import React from 'react';
import * as Table from 'reactabular-table';
import cloneDeep from 'lodash/cloneDeep';
import VisibilityToggles from 'react-visibility-toggles';
*/

class ToggleColumnsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        {
          property: 'name',
          header: {
            label: 'Name'
          },
          visible: true
        },
        {
          property: 'age',
          header: {
            label: 'Age'
          },
          visible: false
        },
        {
          property: 'color',
          header: {
            label: 'Color'
          },
          cell: {
            transforms: [color => ({ style: { color } })]
          },
          visible: true
        }
      ],
      rows: [
        {
          id: 100,
          name: 'Adam',
          age: 12,
          color: 'red'
        },
        {
          id: 101,
          name: 'Brian',
          age: 44,
          color: 'green'
        },
        {
          id: 102,
          name: 'Mike',
          age: 25,
          color: 'blue'
        }
      ]
    };

    this.onToggleColumn = this.onToggleColumn.bind(this);
  }
  render() {
    const { columns, rows } = this.state;

    return (
      <div>
        <VisibilityToggles
          columns={columns}
          onToggleColumn={this.onToggleColumn}
        />

        <Table.Provider
          columns={columns.filter(column => column.visible)}
        >
          <Table.Header />

          <Table.Body rows={rows} rowKey="id" />
        </Table.Provider>
      </div>
    );
  }
  onToggleColumn({ columnIndex }) {
    const columns = cloneDeep(this.state.columns);

    columns[columnIndex].visible = !columns[columnIndex].visible;

    this.setState({ columns });
  }
}

<ToggleColumnsTable />
```

## License

MIT. See LICENSE for details.

