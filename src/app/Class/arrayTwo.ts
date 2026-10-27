export class ArrayTwo{
    rows: number = 5;
    cols: number = 4;
    initialMatrix: number[][]=[];
    modifierMatrix: number[][]=[];

    generateAndTransform():void{
        this.initialMatrix = [];
        this.modifierMatrix=[];

        for(let i=0; i<this.rows;i++){
            const initialRow: number[]=[];
            const modifierRow: number[]=[];
            for(let j=0; j<this.cols;j++){
                const val = Math.floor(Math.random()*10);
                initialRow.push(val);

                if(val<5){
                    modifierRow.push(111);
                }
                else{
                    modifierRow.push(val);
                }
            }
            this.initialMatrix.push(initialRow);
            this.modifierMatrix.push(modifierRow);
        }
    }
}