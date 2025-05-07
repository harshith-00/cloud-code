const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const { v4: uuid } = require('uuid');

const runCode = (language, code) => {
  return new Promise((resolve, reject) => {
    const id = uuid();
    const filename = language === 'python' ? `${id}.py` : `${id}.cpp`;
    const filePath = path.join(__dirname, filename);

    fs.writeFileSync(filePath, code);

    const command = language === 'python'
      ? `docker run --rm -v ${filePath}:/app/code.py python:3.10 python /app/code.py`
      : `docker run --rm -v ${filePath}:/app/code.cpp gcc:latest sh -c "g++ /app/code.cpp -o /app/a.out && /app/a.out"`;

    exec(command, (err, stdout, stderr) => {
      fs.unlinkSync(filePath);
      if (err) reject(stderr);
      else resolve(stdout);
    });
  });
};

module.exports = runCode;
