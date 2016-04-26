import {observable, computed, autorun} from 'mobx'
import fetch from 'isomorphic-fetch'

export class ExampleStore {
  @observable message;

  constructor(message = 'Example Message') {
    this.message = message;
  }

  changeMessage(message) {
    this.message = message;
  }

  @computed get slug() {
    return this.message.replace(/\s+/g, '-').toLowerCase().replace(/[^A-Za-z0-9\-]+/g, '')
  }
}
