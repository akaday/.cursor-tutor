const { Cursor } = require('../src/cursor.js');

describe('Cursor', () => {
  let cursor;

  beforeEach(() => {
    cursor = new Cursor();
  });

  test('should initialize with position 0', () => {
    expect(cursor.position).toBe(0);
  });

  test('should move right', () => {
    cursor.moveRight();
    expect(cursor.position).toBe(1);
  });

  test('should move left', () => {
    cursor.moveLeft();
    expect(cursor.position).toBe(-1);
  });

  test('should select text', () => {
    cursor.moveRight();
    cursor.selectText();
    expect(cursor.selectionStart).toBe(1);
    cursor.moveRight();
    cursor.selectText();
    expect(cursor.selectionEnd).toBe(2);
  });

  test('should extend functionality', () => {
    const extension = (cursorInstance) => {
      cursorInstance.newMethod = () => 'extended';
    };
    cursor.extendFunctionality(extension);
    expect(cursor.newMethod()).toBe('extended');
  });
});
