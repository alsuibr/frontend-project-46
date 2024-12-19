const expectedAst = [
  {
    key: 'key1',
    type: 'unchanged',
    value: 'unchangedValue1',
  },
  {
    key: 'key2',
    type: 'updated',
    value: 'value2',
    newValue: 'updatedValue2',
  },
  {
    key: 'key3',
    type: 'removed',
    value: 'removedValue3',
  },
  {
    key: 'key4',
    type: 'added',
    value: 'addedValue4',
  },
  {
    key: 'key5',
    type: 'updated',
    value: 'value5',
    newValue: {
      nestedKey51: 'value51',
    },
  },
  {
    key: 'key6',
    type: 'updated',
    value: {
      nestedKey61: 'value61',
    },
    newValue: 'value6',
  },
  {
    key: 'key7',
    type: 'nested',
    children: [
      {
        key: 'nestedKey71',
        type: 'unchanged',
        value: 'unchangedValue71',
      },
      {
        key: 'nestedKey72',
        type: 'updated',
        value: 'value72',
        newValue: 'updatedValue72',
      },
      {
        key: 'nestedKey73',
        type: 'removed',
        value: 'removedValue73',
      },
      {
        key: 'nestedKey74',
        type: 'added',
        value: 'addedValue74',
      },
      {
        key: 'nestedKey75',
        type: 'updated',
        value: 'value75',
        newValue: {
          nestedKey751: 'value751',
        },
      },
    ],
  },
];

export default expectedAst;
