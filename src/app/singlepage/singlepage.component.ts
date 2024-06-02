import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-singlepage',
  standalone: true,
  imports: [],
  templateUrl: './singlepage.component.html',
  styleUrl: './singlepage.component.css'
})
export class SinglepageComponent {
    constructor(private routeid:ActivatedRoute,private api:ApiService){}
    data:any=[]

    ngOnInit(){
      this.api.getproducts().subscribe((res:any)=>{
        let id=this.routeid.snapshot.paramMap.get('id')
        let response=res
        let product=response.filter((e:any)=>e.id=id)
        this.data=product[0]
    })
    }
}
