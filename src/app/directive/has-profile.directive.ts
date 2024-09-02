import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { StorageService } from '../services/storage.service';


@Directive({
  selector: '[appHasProfile]'
})
export class HasProfileDirective {

  private currentProfile: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private storageService: StorageService
  ) {
    this.currentProfile = this.storageService.getUserProfile();
  }

  @Input() set appHasProfile(profiles: string[]) {
    if (profiles.includes(this.currentProfile)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
