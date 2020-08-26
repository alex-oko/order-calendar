import { Component, OnInit, Input, Output } from '@angular/core';
import {ModalInterface} from '../../interfaces/modal.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  // inputs que se llenan con la informacion que se envia desde el padre
  @Input() objInfoModal: ModalInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
