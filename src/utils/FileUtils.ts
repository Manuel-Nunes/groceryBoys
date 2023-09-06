export const AcceptedFileTypes:FilePickerAcceptType[]= [
  {
    description: 'Grocery Boys File',
    accept: {
      'text/gbs': [
        '.gbs'
      ],
    },
  },
];


export async function SaveFile( data: object, fileName: string = 'GroceryList.gbs' ) : Promise<boolean> {

  try {
    const handle = await showSaveFilePicker( {
      suggestedName: fileName,
      types: AcceptedFileTypes
    } );
  
    const blob = new Blob( [new TextEncoder().encode( JSON.stringify( data ) )], {
      type: 'application/json;charset=utf-8'
    } );
  
    const writable = await handle.createWritable();
    await writable.write( blob );
    await writable.close();  

    return true;
  } catch ( error ) {

    return false;
  }
  
}