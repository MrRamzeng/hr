const keycaps = new Map([
  ['Backquote', {key: 'ё', symbols: ['`', 'ё', '~', 'Ё']}],
  ['Digit1', {key: '1', symbols: ['!', '1']}],
  ['Digit2', {key: '2', symbols: ['"', '«', '“', "'", '»', '”', '@', '2']}],
  ['Digit3', {key: '3', symbols: ['№', '#', '3']}],
  ['Digit4', {key: '4', symbols: ['$', ';', '4']}],
  ['Digit5', {key: '5', symbols: ['%', '5']}],
  ['Digit6', {key: '6', symbols: ['^', ':', '6']}],
  ['Digit7', {key: '7', symbols: ['&', '?', '7']}],
  ['Digit8', {key: '8', symbols: ['*', '8']}],
  ['Digit9', {key: '9', symbols: ['(', '9']}],
  ['Digit0', {key: '0', symbols: [')', '0']}],
  ['Minus', {key: '-', symbols: ['-', '—', '—', '―', '‒', '–']}],
  ['Equal', {key: '=', symbols: ['+', '=']}],
  ['Backspace', {key: 'Delete', symbols: ['Delete'], class: 'size-3 small-type right'}],

  ['Tab', {key: 'Tab', class: 'size-3 small-type unused'}],
  ['KeyQ', {key: 'й'}],
  ['KeyW', {key: 'ц'}],
  ['KeyE', {key: 'у'}],
  ['KeyR', {key: 'к'}],
  ['KeyT', {key: 'е'}],
  ['KeyY', {key: 'н'}],
  ['KeyU', {key: 'г'}],
  ['KeyI', {key: 'ш'}],
  ['KeyO', {key: 'щ'}],
  ['KeyP', {key: 'з'}],
  ['BracketLeft', {key: 'х', symbols: ['{', '[']}],
  ['BracketRight', {key: 'ъ', symbols: ['}', ']']}],
  ['Backslash', {key: '\\', symbols: ['|', '/', '\\']}],

  ['CapsLock', {key: 'Caps lock', class: 'size-4 small-type caps'}],
  ['KeyA', {key: 'ф'}],
  ['KeyS', {key: 'ы'}],
  ['KeyD', {key: 'в'}],
  ['KeyF', {key: 'а'}],
  ['KeyG', {key: 'п'}],
  ['KeyH', {key: 'р'}],
  ['KeyJ', {key: 'о'}],
  ['KeyK', {key: 'л'}],
  ['KeyL', {key: 'д'}],
  ['Semicolon', {key: 'ж', symbols: [':', ';']}],
  ['Quote', {key: 'э', symbols: ['"', '«', '“', "'", '»', '”']}],
  ['Enter', {key: 'Enter', symbols: ['\n'], class: 'size-4 small-type right'}],

  ['ShiftLeft', {key: 'Shift', class: 'size-5 small-type'}],
  ['KeyZ', {key: 'я'}],
  ['KeyX', {key: 'ч'}],
  ['KeyC', {key: 'с'}],
  ['KeyV', {key: 'м'}],
  ['KeyB', {key: 'и'}],
  ['KeyN', {key: 'т'}],
  ['KeyM', {key: 'ь'}],
  ['Comma', {key: 'б', symbols: ['<', ',']}],
  ['Period', {key: 'ю', symbols: ['>', '.']}],
  ['Slash', {key: '.', symbols: ['?', ',', '/', '.']}],
  ['ShiftRight', {key: 'Shift', class: 'size-6 small-type right'}],

  ['ControlLeft', {key: 'Ctrl', class: 'size-2 small-type'}],
  ['MetaLeft', {key: 'Win', class: 'size-2 small-type unused'}],
  ['AltLeft', {key: 'Alt', class: 'size-3 small-type'}],
  ['Space', {key: '␣', symbols: [' '], class: 'size-7'}],
  ['AltRight', {key: 'Alt', class: 'size-3 small-type right'}],
  ['ContextMenu', {key: '☰', class: 'size-2 small-type right unused'}],
  ['ControlRight', {key: 'Ctrl', class: 'size-2 small-type right'}],
])