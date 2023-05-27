import { Component, HostBinding, OnInit } from '@angular/core';
import { EditorialesService } from 'src/app/services/editoriales.service';
import { Editorial } from 'src/app/models/Editorial';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editorial-form',
  templateUrl: './editorial-form.component.html',
  styleUrls: ['./editorial-form.component.css']
})
export class EditorialFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  editorial: Editorial =
    {
      Id_Editorial: 0,
      Editorial: '',
      Sede_Central: '',
      Fundador: ''
    };

  edit: boolean = false;

  constructor(private editorialesService: EditorialesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.editorialesService.getEditorial(params['id']).subscribe
        (
          res => {
            console.log(res);
            this.editorial = res;
            this.edit = true;
          },
          err => console.error(err)
        )
    }
  }

  saveNewEditorial() {
    delete this.editorial.Id_Editorial;

    this.editorialesService.saveEditorial(this.editorial).subscribe
      (
        res => {
          console.log(res);
          this.router.navigate(['/editoriales']);
        },
        err => console.error(err)
      );
  }

  updateEditorial() {
    this.editorialesService.updateEditorial(this.editorial.Id_Editorial!, this.editorial).subscribe
      (
        res => {
          console.log(res);
          this.router.navigate(['/editoriales']);
        },
        err => console.error(err)
      );
  }
}
