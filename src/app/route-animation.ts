import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
} from '@angular/animations';

export const slider =
  trigger('routeAnimations', [
    transition('* => isRight1', slideTo('right') ),
    transition('* => isRight2', slideTo('right') ),
    transition('* => isRight3', slideTo('right') )
  ]);

function slideTo(direction: any) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('6000ms ease', style({ [direction]: '100%'}))
      ], optional),
      query(':enter', [
        animate('6000ms ease', style({ [direction]: '0%'}))
      ])
    ]),
  ];
}
