const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;

test('Should add two numbers', () => {
  const result = add (3, 4);  
  expect(result).toBe(7);  
});

test('Should print servidor de nadie', () => {
  const greeting = generateGreeting('Servidor de Nadie');
  expect(greeting).toBe('Hello Servidor de Nadie!');
});
