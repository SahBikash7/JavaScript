class React {
  constructor() {
    this.library = "React";
    this.server = "https://localhost:3000";
    document
      .querySelector("button")
      .addEventListener("click", this.handleClick.bind(this));
  }

  handleClick() {
    console.log("Button Clicked");
    console.log(this); //we get the button element as the currentContext which infact is right since the button itself is calling it on click event but we also want to pass the currentContext as React class. So, we use bind().We don't use call() here cause we don't wanna replace the buttonContext which calls the handleClick() method.
  }
}

const app = new React();
