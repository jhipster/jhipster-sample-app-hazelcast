import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { ILabel } from '../label.model';
import { LabelService } from '../service/label.service';

const labelResolve = (route: ActivatedRouteSnapshot): Observable<null | ILabel> => {
  const id = route.params.id;
  if (id) {
    return inject(LabelService)
      .find(id)
      .pipe(
        mergeMap((label: HttpResponse<ILabel>) => {
          if (label.body) {
            return of(label.body);
          }
          inject(Router).navigate(['404']);
          return EMPTY;
        }),
      );
  }
  return of(null);
};

export default labelResolve;
