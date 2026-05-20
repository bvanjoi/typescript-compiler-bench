import * as ts from 'typescript';

export interface BundleOptions {
  entries: string[];
  outDir: string;
}

export function bundleTypescriptFiles(options: BundleOptions) {
  // options.entries.forEach((entry) => {
  //   ts.createSourceFile(entry, ts.sys.readFile(entry) || '', ts.ScriptTarget.ESNext, true);
  // });
}
