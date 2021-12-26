class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  abc(){
    this.titleImg.position(100, 30);
    this.input.position(width/2 - 100, height/2 -50);
    this.playButton.position(width/2 - 30, height/2 + 50)
  }

  def(){
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class('customButton')
  }

  xyz(){
    this.playButton.mousePressed()
  }

  display(){
    this.abc();
    this.def();
  }

}
