export function findFileInResources( fileName: string ): string {
  return `${ process.env.PUBLIC_URL }/Resources/${ fileName }`;
}