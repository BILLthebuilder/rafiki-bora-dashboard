import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardMask',
})
export class CreditCardMaskPipe implements PipeTransform {
  transform(plainCreditCard: string, visibleDigits: number = 4): string {
    const maskedSection = plainCreditCard.slice(0, -visibleDigits);
    const visibleSection = plainCreditCard.slice(-visibleDigits);
    return maskedSection.replace(/./g, '*') + visibleSection;
  }
}
