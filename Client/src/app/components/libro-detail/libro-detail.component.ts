import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-libro-detail',
  templateUrl: './libro-detail.component.html',
  styleUrls: ['./libro-detail.component.css']
})
export class LibroDetailComponent implements OnInit  {

  libro:any = [];

  constructor(private librosService:LibrosService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void 
  {
    const params = this.activatedRoute.snapshot.params;
    if (params['id'])
    {
      this.librosService.getLibro(params['id']).subscribe
      (
        res => 
        {
          console.log(res);
          this.libro = res;
        },
        err => console.error(err)
      )
    }
  }
}
