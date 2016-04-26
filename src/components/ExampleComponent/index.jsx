import React from 'react';
import {observer} from 'mobx-react';
import CSSModules from 'react-css-modules';


import styles from './styles';

@observer
class ExampleComponent extends React.Component {

  handleButton() {
    this.props.exampleStore.asyncWhatever();
  }

  handleInput(q) {
    const {exampleStore} = this.props;
    exampleStore.changeMessage(q.target.value);
  }

  render() {
    const {exampleStore} = this.props;
    return (
      <div className='container' styleName='exampleContainer'>
        <h1 styleName='header'>Example Container</h1>
        <div>
          <p>This is an example component that demonstrates state.</p>
          <p>Type something into the box below. It will be reproduced, and modifed (via @computed) in another.</p>
        </div>
        <div styleName='enterTextField'>
          <p>
            <b>Enter some text: </b>
          </p>
          <input styleName='input' type="text" onChange={this.handleInput.bind(this)} />
        </div>
        <div styleName='yourMessage'>
          <p><b>Your message:</b> {
            exampleStore.message ? exampleStore.message : '[Nothing entered]'
          }</p>
        </div>
        <div styleName='yourSlug'>
          <p><b>Your slug:</b> {
            exampleStore.slug ? exampleStore.slug : '[No slug]'
          }</p>
        </div>
      </div>
    )
  }
}

ExampleComponent.propTypes = {
};

export default CSSModules(ExampleComponent, styles);
