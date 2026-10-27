export class ArrayOne {
    numbers: number[] = [];
    average: number = 0;

    processInput(rawInput: string):void{
        if(!rawInput || rawInput.trim()===''){
            throw new Error('Поле введення не може бути порожнім');
        }
        
        if(!rawInput.includes(',')){
            throw new Error('Числа мають бути розділені комами')
        }
        const rawParts = rawInput.split(',');

        if(rawParts.length!==5){
            throw new Error('Потрібно ввести 5 цілих чисел через кому')
        }

        this.numbers = [];
        let sum = 0;
        
        for(let part of rawParts){
            part = part.trim();
            const val = Number(part);
            if(isNaN(val)||!Number.isInteger(val)){
                throw new Error('${part} неціле число')
            }
            this.numbers.push(val);
            sum+=val;
        }
        this.average=sum/this.numbers.length;
    }
}