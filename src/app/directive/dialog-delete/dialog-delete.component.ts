import { Component, OnInit,Inject,Input} from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<DialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA)public data: any,) { }

  ngOnInit(): void {
  }
  onClickNO(): void {
    this.dialogRef.close();
  }

}
