import { Component, HostBinding, OnInit } from '@angular/core';
import { EditorialesService } from '../../services/editoriales.service'

@Component({
  selector: 'app-editorial-list',
  templateUrl: './editorial-list.component.html',
  styleUrls: ['./editorial-list.component.css']
})
export class EditorialListComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  editoriales: any = [];

  constructor(private editorialesService: EditorialesService) { }

  ngOnInit(): void {
    this.listEditoriales();
  }

  listEditoriales(): void {
    this.editorialesService.getEditoriales().subscribe
      (
        res => this.editoriales = res,
        err => console.error(err)
      );
  }

  deleteEditorial(id: string) {
    if(confirm('¿Estas seguro que quieres borrar?')) 
    this.editorialesService.deleteEditorial(id).subscribe
      (
        res => {
          console.log(res)
          this.listEditoriales();
        },
        err => console.error(err)
      )
  }
}
