import React from 'react';
import {Map} from 'react-amap'

class MapExtend extends Map {
  constructor (props) {
    super(props);
    this.state={
      
    }
  }

  renderChildren() {
    const { amapkey, children } = this.props;
    return React.Children.map(children, (child) => {
      // 过滤原生dom
      if(typeof child.type === 'string') {
        return child
      }
      return React.cloneElement(child, {amapkey})
    })
  }

  render() {
    const elementsTree = super.render()
    return React.cloneElement(elementsTree, elementsTree.props, this.renderChildren())
  }
}

export default MapExtend
