import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { Garantia } from 'src/app/models/garantia';
import { GarantiaService } from 'src/app/services/garantia.service';

@Component({
  selector: 'app-create-edit-garantia',
  templateUrl: './create-edit-garantia.component.html',
  styleUrls: ['./create-edit-garantia.component.scss']
})
export class CreateEditGarantiaComponent implements OnInit {

  garantia: Garantia = {
    nome: ''
  }

  formGroup: FormGroup;
  title!: string;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateEditGarantiaComponent>,  
    private toastr: ToastrService,
    private garantiaService: GarantiaService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    /*this.formGroup = this.fb.group({
      nome: ['', Validators.required]
    });*/
    this.formGroup.patchValue(this.data);   
  }

  ngAfterViewInit(): void {   
    this.title = "Cadastrar Garantia";
    if (this.data) {
      this.title = "Editar Garantia";
      this.garantiaService.findById(this.data).pipe(first()).subscribe((x) => {
          this.garantia = x;
          //this.loading = false;
      });
    }  
  }

  transformarParaMaiusculas() {
    this.garantia.nome = this.garantia.nome.toUpperCase();
  }

  salvar() {
    //spiner=true
    this.saveMarca().pipe(first()).subscribe({next: (res) => {         
          this.toastr.success("Operação realizada com sucesso!", "Sucesso");
          this.dialogRef.close(true);
          this.formGroup.reset();  
          this.router.navigate(["/lista-garantia"], { queryParams: { create: true },});
        },
        error: (error) => {
          this.toastr.error(error, "Erro");
        },
      });
  }

  private saveMarca() {
    return this.garantia.codigo
      ? this.garantiaService.update(this.garantia)
      : this.garantiaService.create(this.garantia);
  }

  cancel(){
    this.dialogRef.close(true);
    this.formGroup.reset();
  }

}
