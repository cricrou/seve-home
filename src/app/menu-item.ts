export class MenuItem {
    constructor (private _navigationTitle: string, public order: number, public navigationLink: string){

    }

    get navigationTitle(): string {
        return this._navigationTitle;
    }
}
