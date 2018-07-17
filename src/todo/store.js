import { observable, action } from '../../node_modules/mobx';

class TodoStore {
  @observable todolist = [];
  @action
  addTodo() {

  }
  @action
  deleteTodo(){
      
  }
}
export default new TodoStore();
