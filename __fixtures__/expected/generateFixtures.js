import fs from 'fs';
import path from 'path';
import prepareObjects from '../../src/prepareObjects.js';
import prepareAST from '../../src/prepareAST.js';

// Путь к папке expected
const fixturesPath = path.resolve('__fixtures__/expected');

// Файлы для сравнения
const filepath1 = path.resolve('__fixtures__/file1.json');
const filepath2 = path.resolve('__fixtures__/file2.json');

// Генерация и запись данных
const generateFixtures = () => {
  const { object1, object2 } = prepareObjects(filepath1, filepath2);

  // Записываем object1
  fs.writeFileSync(
    path.join(fixturesPath, 'object1.js'),
    `export default ${JSON.stringify(object1, null, 2)};`,
  );

  // Записываем object2
  fs.writeFileSync(
    path.join(fixturesPath, 'object2.js'),
    `export default ${JSON.stringify(object2, null, 2)};`,
  );

  // Генерируем AST
  const ast = prepareAST(object1, object2);
  fs.writeFileSync(
    path.join(fixturesPath, 'expectedAST.txt'),
    JSON.stringify(ast, null, 2),
  );

  console.log('Fixtures successfully generated in expected directory!');
};

// Запуск генерации
generateFixtures();
