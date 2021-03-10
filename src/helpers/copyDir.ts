import ejs from 'ejs';
import fs from 'fs-extra';
import path from 'path';

const copyDir = async (source: string, dest: string, options: any) => {
  await fs.mkdirp(dest);

  const files = await fs.readdir(source);

  for (const f of files) {
    const target = path.join(
      dest,
      ejs.render(f.replace(/^\$/, ''), options, {
        openDelimiter: '{',
        closeDelimiter: '}',
      }),
    );

    const file = path.join(source, f);
    const stats = await fs.stat(file);

    if (stats.isDirectory()) {
      await copyDir(file, target, options);
    } else {
      await fs.copyFile(file, target);
    }
  }
};

export default copyDir;
