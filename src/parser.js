import { readFileSync } from 'fs';

const parse = (pathway) => {
    const content = readFileSync(pathway, 'utf-8');
    const parsed = JSON.parse(content);
    return parsed;
};

export default parse;

// надо ли здесь (или в другом месте) добавить парсинг yml файлов тоже?