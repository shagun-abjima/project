import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";
@Pipe({
    name:'filter',
    pure:false
})
export class filterPipe implements PipeTransform{
    transform(value:any[],filterString:string,propName:string):any[] {
    const result=[];
    if(!value || filterString===''||propName===''){
        return value;
    }
    value.forEach((a:any)=>{
        
    })
        
    }
}