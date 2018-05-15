import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {environment} from 'environments/environment';

import {RecoveryBeneficiary} from 'shared/models/recoveryBeneficiary.model';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class RecoveryBeneficiariesHttp {
  constructor(private http: HttpClient) { }

  public list(): Observable<RecoveryBeneficiary[]> {
    return this.http
      .get(environment.api_url + '/recoveryBeneficiaries')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error));
  }
}
