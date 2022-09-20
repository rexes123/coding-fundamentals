const prompt = require("prompt-sync")();

class Calendar {
  constructor() {
    this.list = ["Learn Javascript 20/09/2022 (Example)"];
    this.isQuit = false;
    do {
      this.display();
    } while (this.isQuit !== true);
  }

  display() {
    console.log(`
---------TODO APP-----------
What would you like to do?
1. View your calendar
2. Add  your new event
3. Edit your an existing event
4. Cancel your an event
5. Quit app
`);
    this.value = prompt("Enter (1/2/3/4/5): ");
    this.value = parseInt(this.value);
    this.selection();
  }

  selection() {
    switch (this.value) {
      case 1:
        this.getCalendar();
        break;
      case 2:
        this.addEvent();
        break;
      case 3:
        this.editEvent();
        break;
      case 4:
        this.deleteEvent();
        break;
      case 5:
        this.quitApp();
        break;
    }
  }

  getCalendar() {
    let iteration = 1;
    for (let index in this.list) {
      console.log("#" + iteration + ": " + this.list[index]);
      iteration++;
    }
  }

  addEvent() {
    var event = prompt("Add your new event, eg. Eat 20/09/2023: ");
    this.list.push(event);
  }

  editEvent() {
    var number = prompt("Enter the event you want to edit: ");
    var item = prompt("Change the event to: ");
    this.list.splice(number - 1, 1, item);
  }


  deleteEvent() {
    var number = prompt("Enter the event you want to cancel: ");
    this.list.splice(number-1, 1)
  }

  quitApp() {
    this.isQuit = true;
  }
}

const calendar = new Calendar
calendar
