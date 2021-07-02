import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, take } from 'rxjs/operators';
import { ISessionUser } from '../../models';
import { AuthService  } from '../../services';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  formGrp: FormGroup;
  user: ISessionUser;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
    this.fetchProfile();
    this.onFormChange();
  }

  private createForm(): void{
    this.formGrp = this.fb.group({
      email: [''],
      name: [''],
      gender: [null],
      phone: [null],
      city: [''],
      address: ['']
    });
  }

  private fetchProfile(){
    this.authService.profile()
    .subscribe(response=>{
      this.populate(response);
    })
  }

  private populate(response: ISessionUser){
    this.formGrp.patchValue({
      email: response.email || '',
      name: response.name || '',
      phone: response.phone || '',
      address: response.address || '',
      city: response.city || '',
      gender: response.gender || ''
    });
  }

  private onFormChange(): void {
    this.formGrp.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(()=>{
          return this.authService.saveProfile(this.formGrp.value);
        })
      )
      .subscribe(()=>{});
  }
}
