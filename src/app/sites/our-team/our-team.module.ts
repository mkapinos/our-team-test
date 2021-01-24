import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BLOCK_RESOLVER_NAME, OurTeamComponent } from './components/our-team.component';
import { RouterModule, Routes } from '@angular/router';
import { OurTeamResolver } from './resolvers/our-team-resolver';
import { CardModule } from '../../modules/card/card.module';

const routes: Routes = [
  {
    path: '',
    component: OurTeamComponent,
    resolve: {
      [BLOCK_RESOLVER_NAME]: OurTeamResolver
    }
  }
];

@NgModule({
  declarations: [OurTeamComponent],
  imports: [
    CommonModule,
    CardModule,
    RouterModule.forChild(routes)
  ]
})
export class OurTeamModule {}
