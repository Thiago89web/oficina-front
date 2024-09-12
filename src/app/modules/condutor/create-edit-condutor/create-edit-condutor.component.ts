import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { Condutor } from 'src/app/models/condutor';
import { CondutorService } from 'src/app/services/condutor.service';

@Component({
  selector: 'app-create-edit-condutor',
  templateUrl: './create-edit-condutor.component.html',
  styleUrls: ['./create-edit-condutor.component.scss']
})
export class CreateEditCondutorComponent {

  condutor: Condutor = {
    habilitacao: '',
    categoria: '',
    cod_pessoa: ''
  }

  formGroup: FormGroup;
  title!: string;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateEditCondutorComponent>,  
    private toastr: ToastrService,
    private condutorService: CondutorService,
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
    this.title = "Cadastrar Condutor";
    if (this.data) {
      this.title = "Editar Condutor";
      this.condutorService.findById(this.data).pipe(first()).subscribe((x) => {
          this.condutor = x;
          //this.loading = false;
        });
    }  
  }

  transformarParaMaiusculas() {
    //this.condutor.nome = this.condutor.nome.toUpperCase();
  }

  salvar() {
    //spiner=true
    this.saveMarca().pipe(first()).subscribe({next: (res) => {         
          this.toastr.success("Operação realizada com sucesso!", "Sucesso");
          this.dialogRef.close(true);
          this.formGroup.reset();  
          this.router.navigate(["/lista-cargo"], { queryParams: { create: true },});
        },
        error: (error) => {
          this.toastr.error(error, "Erro");
        },
      });
  }

  private saveMarca() {
    return this.condutor.codigo
      ? this.condutorService.update(this.condutor)
      : this.condutorService.create(this.condutor);
  }

  cancel(){
    this.dialogRef.close(true);
    this.formGroup.reset();
  }

}
