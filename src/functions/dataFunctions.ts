import { IData } from "src/model/IData";

export function sortData(array: IData[]): IData[]{
    return array.sort((
        function(a, b){
            var aName = a.name.toLowerCase()
            var bName = b.name.toLowerCase()
            if(aName < bName) { return -1; }
            if(aName > bName) { return 1; }
            return a.id - b.id;
        })
    )
}