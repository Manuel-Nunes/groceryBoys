import fs from "fs";

export class DataHandler {
  private self: DataHandler;
  private dataStore: Object;
  private saveSuccessful:boolean = false;
  private dataStorePath: string = '../data/GroceryData.json';

  public saveData(){

    this.saveSuccessful = false;

    try {
      fs.writeFile(this.dataStorePath, JSON.stringify(this.dataStore, null, 2), (err) => {

        if (err) {

          console.warn("Error Encountered in saving Datastore", err.message)

          return;
        }
        console.log("Datastore saved successfully")
        this.saveSuccessful = true;
      })

    } catch (error: any) {

      console.warn("Failed to initiate datastore save", error)
    }

  }


  getInstance(){
    if (this.self) {
      return this.self
    }
    this.self = new DataHandler();
  }

  private constructor(){
    let rawData = fs.readFileSync('../data/GroceryData.json',{ encoding: 'utf-8'});
    this.dataStore = JSON.parse(rawData);
  }
}
