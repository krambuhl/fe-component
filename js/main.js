import { Component } from 'fe';

class extends Component {
  setupEvents() {
    this.on('click', this.onClick);
    this.on('.card-header', 'click', this.onClick);
  }

  onClick(ev) {

  }
}