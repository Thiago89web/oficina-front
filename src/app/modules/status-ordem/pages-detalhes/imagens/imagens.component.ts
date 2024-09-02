import { Component } from '@angular/core';

@Component({
  selector: 'app-imagens',
  templateUrl: './imagens.component.html',
  styleUrls: ['./imagens.component.scss']
})
export class ImagensComponent {

  fileSrc: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      const reader = new FileReader();
      
      reader.onload = () => {
        this.fileSrc = reader.result;
      };
      
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onSaveFile(): void {
    // Implement save logic here
    console.log('File saved:', this.selectedFile);
  }

  onRemoveFile(): void {
    this.fileSrc = null;
    this.selectedFile = null;
  }

  isImage(fileSrc: string | ArrayBuffer | null): boolean {
    if (!fileSrc) return false;
    const mimeType = (fileSrc as string).split(':')[1].split(';')[0];
    return mimeType.startsWith('image/');
  }

}
