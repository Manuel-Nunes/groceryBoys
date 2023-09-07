import {
  GroceryList
} from '../types/types';

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


export async function SaveGroceryListFile( data: object, fileName: string = 'GroceryList.gbs' ) : Promise<boolean> {

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

export async function LoadGroceryListFile() : Promise<GroceryList | null> {
  try {
    const [
      handle
    ] = await window.showOpenFilePicker( );
    const file = await handle.getFile();
    const content: GroceryList = JSON.parse( await file.text() ) ;

    return content;
  } catch ( error ) {
    console.log( 'No List Selected',error );

    return null;
  }
}
