import { Component, OnInit } from '@angular/core';

import {MessageService} from '../test-messages-service/test-messages-service.component';

@Component({
  selector: 'app-test-messages',
  templateUrl: './test-messages.component.html',
  styleUrls: ['./test-messages.component.css']
})
export class TestMessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
