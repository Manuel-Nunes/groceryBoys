import fs from "fs";

export class DataHandler {
  private static self: DataHandler;
  
  private dataStore: Object;
  private saveSuccessful:boolean = false;
  private dataStorePath: string = '../data/GroceryData.json';

  public saveData(dataStore){
    this.saveSuccessful = false;

    const oldData = this.dataStore;

    if (dataStore) {
      this.dataStore = dataStore;
    }

    try {
      fs.writeFile(this.dataStorePath, JSON.stringify(this.dataStore, null, 2), (err) => {

        if (err) {

          console.warn("Error Encountered in saving Datastore", err.message)
          this.dataStore = oldData;

          return;
        }
        console.log("Datastore saved successfully")
        this.saveSuccessful = true;
      })

    } catch (error: any) {

      this.dataStore= oldData;
      console.warn("Failed to initiate datastore save", error)
    }
  }

  public getData(){

    const returns = {...this.dataStore}
    Object.freeze(returns)

    return returns;
  }

  static getInstance(){
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
