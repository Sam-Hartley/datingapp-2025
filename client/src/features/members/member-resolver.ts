import { ResolveFn, Router } from '@angular/router';
import { MemberCard } from './member-card/member-card';
import { MemberService } from '../../core/services/member-service';
import { inject } from '@angular/core';
import { Member } from '../../types/members';
import { EMPTY } from 'rxjs';

export const memberResolver: ResolveFn<Member> = (route, state) => {
  const memberService = inject(MemberService);
  const router = inject(Router);
  const memberId = route.paramMap.get('id');

  if(!memberId) {
    router.navigateByUrl('/not-found');
    return EMPTY;
  }

  return memberService.getMember(memberId);
};
