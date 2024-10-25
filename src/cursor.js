class Cursor {
  constructor() {
    this.position = 0;
    this.selectionStart = null;
    this.selectionEnd = null;
  }

  moveRight() {
    this.position += 1;
  }

  moveLeft() {
    this.position -= 1;
  }

  selectText() {
    if (this.selectionStart === null) {
      this.selectionStart = this.position;
    } else {
      this.selectionEnd = this.position;
    }
  }

  extendFunctionality(extension) {
    extension(this);
  }
}
