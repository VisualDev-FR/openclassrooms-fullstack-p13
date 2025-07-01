import { Component, OnInit } from '@angular/core';
import { ChatMessage } from './chat-message.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';


@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public username?: string;
  public message: string = '';
  public messages: ChatMessage[] = [];

  private baseURL: string = "http://localhost:8080";
  private stompClient!: Stomp.Client;

  public connect(): void {

    if (!this.username)
      return;

    const socket = new SockJS(`${this.baseURL}/chat`);

    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, frame => {

      this.setConnected(true);

      this.stompClient.subscribe(`/topic/messages`, message => {

        console.log(message);

        this.messages.push(JSON.parse(message.body));
      });
    });
  }

  public disconnect() {

    if (this.stompClient !== null) {
      this.stompClient.disconnect(() => { });
    }

    this.setConnected(false);
  }

  public setConnected(value: boolean): void { }

  public sendMessage(): void {

    if (!this.message.trim())
      return;

    this.stompClient.send("/app/send", {}, JSON.stringify({
      sender: this.username,
      content: this.message,
      type: "CHAT",
    }));
  }
}
