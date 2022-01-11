import React from 'react'
import renderer from 'react-test-renderer'
import { Square } from '../index'

it('renders correctly', () => {
  const props = {
    value: 'X'
  }
  const tree = renderer.create(<Square props={props}/>).toJSON()
  expect(tree).toMatchSnapshot()
})
