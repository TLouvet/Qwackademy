export function handleInput(e: KeyboardEvent, handleClick: (key: string) => void) {
  switch (e.key) {
    case 'a':
      handleClick('A-key');
      break;
    case 'b':
      handleClick('B-key');
      break;
    case 'c':
      handleClick('C-key');
      break;
    case 'd':
      handleClick('D-key');
      break;
    case 'e':
      handleClick('E-key');
      break;
    case 'f':
      handleClick('F-key');
      break;
    case 'g':
      handleClick('G-key');
      break;
    default:
      break;
  }
}
