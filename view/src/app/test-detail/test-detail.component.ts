
//
// @Component({
//   selector: 'app-test-detail',
//   templateUrl: './test-detail.component.html',
//   styleUrls: ['./test-detail.component.css']
// })
// export class TestDetailComponent implements OnInit {
//    @Input() hero: Hero;
//
//   constructor(
//     private route: ActivatedRoute,
//     private heroService: HeroService,
//     private location: Location
//   ) { }
//
//   ngOnInit() {
//     this.getHero();
//   }
//   getHero(): void {
//     const id = +this.route.snapshot.paramMap.get('id');
//     this.heroService.getHero(id).subscribe(hero => this.hero = hero);
//   }
//   goBack(): void {
//     this.location.back();
//   }
//   save(): void {
//     this.heroService.updateHero(this.hero)
//       .subscribe(() => this.goBack());
//   }
//
// }

