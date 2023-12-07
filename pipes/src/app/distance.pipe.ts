import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distance'
})
export class DistancePipe implements PipeTransform {

  transform(value: number, ...args: string[]): number {
    if(args.length > 1)
      throw new Error("Wrong combination of arguments. This pipe has at most one argument!");
  // transform(value: number, unit: string): number {
    const unit = args.length == 1 ? args[0] : null;
    switch(unit) {
      case null:
        return value;
      case 'km':
        return value * 1.60934;
      case 'm':
        return value * 1609.34
      case 'cm':
        return value * 160934;
      case 'mm':
        return value * 1609340;
      default:
        throw new Error("Unit is not an acceptable value!");
    }
  }

}
