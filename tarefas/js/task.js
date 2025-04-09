export class TaskForm {
  constructor(name, reminderDate) {
    this.name = name;
    this.reminderDate = reminderDate;
  }
}

export class Task {
  constructor(id, name, reminderDate) {
    this.id = id;
    this.name = name;
    this.reminderDate = reminderDate;
  }
}

export class TaskTO {
  constructor(id, name, reminderDate) {
    this.id = id;
    this.name = name;
    this.reminderDate = reminderDate;
  }
}
