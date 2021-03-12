import { makeObservable, observable, action } from "mobx";

export default class Todo {
  readonly id = Math.random();
  finished = false

  constructor(public title = '') {
    makeObservable(this, {
      title: observable,
      finished: observable,
      toggle: action
    });
    this.title = title;
  }

  toggle() {
    this.finished = !this.finished;
  }
}
