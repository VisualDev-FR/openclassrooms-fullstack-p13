import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { Message } from '../interfaces/message.interface';


const messages: Message[] = [
  {
    content: "Bonjour",
    date: new Date(2025, 6, 13, 15, 5, 0, 0),
    receiver: "enduser",
    sender: "admin",
  }
]


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  public messages$(): Observable<Message[]> {
    return of(messages);
  }
}
