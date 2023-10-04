import fs from 'fs/promises';

function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return processedData;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

export { readDatabase };
